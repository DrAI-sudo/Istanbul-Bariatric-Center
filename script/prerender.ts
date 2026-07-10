import { spawn, execSync, type ChildProcess } from "child_process";
import { mkdir, writeFile } from "fs/promises";
import { existsSync } from "fs";
import path from "path";
import puppeteer, { type Browser } from "puppeteer-core";

const PORT = 4919;
const BASE = `http://127.0.0.1:${PORT}`;
const OUT_DIR = path.resolve("dist/prerendered");
const CONCURRENCY = 4;
const PAGE_TIMEOUT_MS = 45000;
const SETTLE_MS = 700;

function findChromium(): string {
  if (process.env.CHROME_BIN && existsSync(process.env.CHROME_BIN)) {
    return process.env.CHROME_BIN;
  }
  for (const bin of ["chromium", "chromium-browser", "google-chrome"]) {
    try {
      const p = execSync(`which ${bin}`, { stdio: ["ignore", "pipe", "ignore"] })
        .toString()
        .trim();
      if (p) return p;
    } catch {
      /* try next */
    }
  }
  throw new Error(
    "Chromium not found. Install the 'chromium' nix package or set CHROME_BIN. " +
      "Set SKIP_PRERENDER=1 to build without prerendering.",
  );
}

async function waitForServer(timeoutMs = 60000): Promise<void> {
  const start = Date.now();
  while (Date.now() - start < timeoutMs) {
    try {
      const res = await fetch(`${BASE}/robots.txt`);
      if (res.ok) return;
    } catch {
      /* not up yet */
    }
    await new Promise((r) => setTimeout(r, 500));
  }
  throw new Error("Production server did not become ready for prerendering");
}

async function getRoutes(): Promise<string[]> {
  const res = await fetch(`${BASE}/sitemap.xml`);
  if (!res.ok) throw new Error(`sitemap.xml returned ${res.status}`);
  const xml = await res.text();
  const locs = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
  const routes = new Set<string>(["/"]);
  for (const loc of locs) {
    try {
      const u = new URL(loc);
      routes.add(u.pathname.replace(/\/+$/, "") || "/");
    } catch {
      /* skip malformed */
    }
  }
  return [...routes];
}

function routeToFile(route: string): string {
  const rel = route === "/" ? "index.html" : `${route.replace(/^\//, "")}.html`;
  const abs = path.resolve(OUT_DIR, rel);
  if (!abs.startsWith(OUT_DIR)) throw new Error(`Unsafe route path: ${route}`);
  return abs;
}

async function getServerLangDir(
  route: string,
): Promise<{ lang: string; dir: string }> {
  // The server injects the authoritative lang/dir per route (ROUTE_LANG_MAP).
  // Client-side i18n can overwrite <html lang> based on localStorage, so we
  // re-apply the server's values before capturing.
  const res = await fetch(`${BASE}${route}`);
  const raw = await res.text();
  const m = raw.match(/<html[^>]*\blang="([^"]+)"/i);
  const d = raw.match(/<html[^>]*\bdir="([^"]+)"/i);
  return { lang: m?.[1] ?? "en-US", dir: d?.[1] ?? "ltr" };
}

async function renderRoute(browser: Browser, route: string): Promise<void> {
  // Each route gets its own incognito-style context so localStorage
  // (i18next language cache) does not leak between concurrent renders.
  const context = await browser.createBrowserContext();
  const page = await context.newPage();
  try {
    const { lang, dir } = await getServerLangDir(route);
    await page.setViewport({ width: 1366, height: 900 });
    await page.goto(`${BASE}${route}`, {
      waitUntil: "networkidle2",
      timeout: PAGE_TIMEOUT_MS,
    });
    await new Promise((r) => setTimeout(r, SETTLE_MS));

    const html = await page.evaluate(
      (serverLang: string, serverDir: string) => {
        // Remove the hidden SEO-injection block and noscript fallbacks:
        // the fully rendered content now serves that purpose, and keeping
        // both would duplicate the h1 and body copy for crawlers.
        document.getElementById("seo-content")?.remove();
        document.querySelectorAll("noscript").forEach((n) => n.remove());
        // Remove transient overlays (promo popups, toasts, dialogs) so they
        // are not baked into the static HTML.
        document
          .querySelectorAll(
            '[role="dialog"], [data-radix-popper-content-wrapper], [data-sonner-toaster], [data-state="open"][data-radix-portal]',
          )
          .forEach((n) => n.remove());
        // Re-apply the server's authoritative lang/dir — client i18n may
        // have overwritten them based on detected browser language.
        document.documentElement.setAttribute("lang", serverLang);
        if (serverDir === "rtl") {
          document.documentElement.setAttribute("dir", "rtl");
        } else {
          document.documentElement.removeAttribute("dir");
        }
        return "<!DOCTYPE html>" + document.documentElement.outerHTML;
      },
      lang,
      dir,
    );

    if (!html.includes("<h1") || html.length < 20000) {
      throw new Error(
        `Rendered HTML for ${route} looks incomplete (length ${html.length}, h1 ${html.includes("<h1")})`,
      );
    }

    const file = routeToFile(route);
    await mkdir(path.dirname(file), { recursive: true });
    await writeFile(file, html, "utf-8");
  } finally {
    await page.close().catch(() => {});
    await context.close().catch(() => {});
  }
}

export async function prerender(): Promise<void> {
  if (process.env.SKIP_PRERENDER === "1") {
    console.log("SKIP_PRERENDER=1 — skipping static prerendering");
    return;
  }

  const chromiumPath = findChromium();
  console.log(`prerender: using chromium at ${chromiumPath}`);

  let server: ChildProcess | null = null;
  let browser: Browser | null = null;

  try {
    server = spawn("node", ["dist/index.cjs"], {
      env: { ...process.env, NODE_ENV: "production", PORT: String(PORT) },
      stdio: ["ignore", "pipe", "pipe"],
    });
    server.stderr?.on("data", (d) => process.stderr.write(`[prerender-server] ${d}`));
    await waitForServer();

    const routes = await getRoutes();
    console.log(`prerender: rendering ${routes.length} routes...`);

    browser = await puppeteer.launch({
      executablePath: chromiumPath,
      headless: true,
      args: ["--no-sandbox", "--disable-dev-shm-usage", "--disable-gpu"],
    });

    const failures: { route: string; error: string }[] = [];
    let done = 0;
    const queue = [...routes];

    async function worker() {
      while (queue.length > 0) {
        const route = queue.shift()!;
        try {
          await renderRoute(browser!, route);
        } catch (err) {
          // one retry per route
          try {
            await renderRoute(browser!, route);
          } catch (err2) {
            failures.push({ route, error: String(err2) });
          }
        }
        done++;
        if (done % 20 === 0) console.log(`prerender: ${done}/${routes.length}`);
      }
    }

    await Promise.all(Array.from({ length: CONCURRENCY }, () => worker()));

    console.log(
      `prerender: ${routes.length - failures.length}/${routes.length} routes rendered`,
    );
    if (failures.length > 0) {
      console.error("prerender failures:");
      for (const f of failures) console.error(`  ${f.route}: ${f.error}`);
    }

    const failureRate = failures.length / routes.length;
    const homeFailed = failures.some((f) => f.route === "/");
    if (homeFailed || failureRate > 0.1) {
      throw new Error(
        `Prerendering failed (${failures.length}/${routes.length} routes failed${homeFailed ? ", including homepage" : ""})`,
      );
    }
  } finally {
    await browser?.close().catch(() => {});
    if (server && !server.killed) server.kill("SIGTERM");
  }
}

const isMain = process.argv[1] && process.argv[1].endsWith("prerender.ts");
if (isMain) {
  prerender().catch((err) => {
    console.error(err);
    process.exit(1);
  });
}

/**
 * SEO guard: every route must serve exactly ONE <h1> to crawlers.
 *
 * The server injects a hidden crawlable h1 (server/seo-inject.ts) and the
 * client removes that block before React mounts its own visible h1
 * (client/src/main.tsx). This script protects that balance:
 *
 * 1. Raw-HTML check: fetches every route known to server/seo-data.ts
 *    (static pages + blog posts) with a Googlebot UA and fails unless the
 *    raw HTML contains exactly one <h1>.
 * 2. Optional hydrated check (--hydrated): loads a few key pages in headless
 *    Chromium and fails unless the hydrated DOM also has exactly one h1.
 *
 * Usage:
 *   npx tsx script/check-h1.ts              # raw HTML check, all routes
 *   npx tsx script/check-h1.ts --hydrated   # also run browser check
 *   BASE_URL=http://127.0.0.1:5000 npx tsx script/check-h1.ts
 *
 * Requires the dev server (npm run dev) to be running.
 */
import { getAllStaticRoutes, getAllBlogSlugs } from "../server/seo-data";

const BASE_URL = process.env.BASE_URL || "http://127.0.0.1:5000";
const GOOGLEBOT_UA =
  "Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)";
const CONCURRENCY = 8;

// Key pages for the optional hydrated-DOM check.
const HYDRATED_ROUTES = ["/", "/treatments", "/blog", "/contact"];

function countH1(html: string): number {
  // Count real <h1> opening tags: "<h1>" or "<h1 ...>" (not <h1x...>).
  const matches = html.match(/<h1(\s[^>]*)?>/gi);
  return matches ? matches.length : 0;
}

interface Failure {
  route: string;
  problem: string;
}

async function checkRoute(route: string): Promise<Failure | null> {
  let res: Response;
  try {
    res = await fetch(`${BASE_URL}${route}`, {
      headers: { "User-Agent": GOOGLEBOT_UA },
      redirect: "follow",
    });
  } catch (err) {
    return { route, problem: `fetch failed: ${(err as Error).message}` };
  }
  if (!res.ok) {
    return { route, problem: `HTTP ${res.status}` };
  }
  const html = await res.text();
  const n = countH1(html);
  if (n !== 1) {
    return {
      route,
      problem:
        n === 0
          ? "raw HTML has NO <h1> (crawlers see a heading-less page)"
          : `raw HTML has ${n} <h1> tags (duplicate headings for crawlers)`,
    };
  }
  return null;
}

async function rawHtmlCheck(routes: string[]): Promise<Failure[]> {
  const failures: Failure[] = [];
  let i = 0;
  async function worker() {
    while (i < routes.length) {
      const route = routes[i++];
      const failure = await checkRoute(route);
      if (failure) failures.push(failure);
    }
  }
  await Promise.all(
    Array.from({ length: Math.min(CONCURRENCY, routes.length) }, worker),
  );
  return failures;
}

async function hydratedCheck(routes: string[]): Promise<Failure[]> {
  const { execSync } = await import("child_process");
  const { existsSync } = await import("fs");
  const puppeteer = (await import("puppeteer-core")).default;

  function findChromium(): string {
    if (process.env.CHROME_BIN && existsSync(process.env.CHROME_BIN)) {
      return process.env.CHROME_BIN;
    }
    for (const bin of ["chromium", "chromium-browser", "google-chrome"]) {
      try {
        const p = execSync(`which ${bin}`, {
          stdio: ["ignore", "pipe", "ignore"],
        })
          .toString()
          .trim();
        if (p) return p;
      } catch {
        /* try next */
      }
    }
    throw new Error(
      "Chromium not found for --hydrated check. Set CHROME_BIN or install chromium.",
    );
  }

  const browser = await puppeteer.launch({
    executablePath: findChromium(),
    headless: true,
    args: ["--no-sandbox", "--disable-dev-shm-usage"],
  });

  const failures: Failure[] = [];
  try {
    for (const route of routes) {
      // Isolated context so i18n localStorage cannot leak between pages.
      const context = await browser.createBrowserContext();
      const page = await context.newPage();
      try {
        await page.goto(`${BASE_URL}${route}`, {
          waitUntil: "networkidle2",
          timeout: 45000,
        });
        await new Promise((r) => setTimeout(r, 700));
        const n = await page.evaluate(
          () => document.querySelectorAll("h1").length,
        );
        if (n !== 1) {
          failures.push({
            route,
            problem: `hydrated DOM has ${n} h1 elements (expected exactly 1)`,
          });
        }
      } catch (err) {
        failures.push({
          route,
          problem: `hydrated check failed: ${(err as Error).message}`,
        });
      } finally {
        await context.close();
      }
    }
  } finally {
    await browser.close();
  }
  return failures;
}

async function main() {
  const hydrated = process.argv.includes("--hydrated");

  // Ensure the server is up before checking every route.
  try {
    await fetch(`${BASE_URL}/`, { headers: { "User-Agent": GOOGLEBOT_UA } });
  } catch {
    console.error(
      `ERROR: cannot reach ${BASE_URL} — start the app first (npm run dev).`,
    );
    process.exit(2);
  }

  const routes = [
    ...getAllStaticRoutes(),
    ...getAllBlogSlugs().map((slug) => `/blog/${slug}`),
  ];
  console.log(`Checking raw HTML <h1> count on ${routes.length} routes at ${BASE_URL} ...`);
  const failures = await rawHtmlCheck(routes);

  if (hydrated) {
    console.log(
      `Checking hydrated DOM h1 count on ${HYDRATED_ROUTES.length} key pages ...`,
    );
    failures.push(...(await hydratedCheck(HYDRATED_ROUTES)));
  }

  if (failures.length > 0) {
    console.error(`\nFAIL: ${failures.length} route(s) with h1 problems:`);
    for (const f of failures) {
      console.error(`  ${f.route} — ${f.problem}`);
    }
    process.exit(1);
  }
  console.log(
    `PASS: every checked page serves exactly one <h1>${hydrated ? " (raw + hydrated)" : ""}.`,
  );
}

main().catch((err) => {
  console.error("Unexpected error:", err);
  process.exit(1);
});

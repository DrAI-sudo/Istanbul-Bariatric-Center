/**
 * SEO guard: no route may ship an overlong <title> or meta description.
 *
 * Google truncates titles beyond ~60 characters and descriptions beyond
 * ~160 characters. This script (modeled on script/check-h1.ts) fetches every
 * route known to server/seo-data.ts (static pages + blog posts) with a
 * Googlebot UA and fails if any decoded <title> exceeds 60 characters or any
 * decoded <meta name="description"> exceeds 160 characters.
 *
 * Lengths are measured on the DECODED text (entities like &amp; count as one
 * character, the way Google measures them).
 *
 * Usage:
 *   npx tsx script/check-seo-lengths.ts
 *   BASE_URL=http://127.0.0.1:5000 npx tsx script/check-seo-lengths.ts
 *
 * Without BASE_URL it requires the dev server (npm run dev) to be running.
 */
import { getAllStaticRoutes, getAllBlogSlugs } from "../server/seo-data";

const BASE_URL = process.env.BASE_URL || "http://127.0.0.1:5000";
const GOOGLEBOT_UA =
  "Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)";
const CONCURRENCY = 8;

const MAX_TITLE = 60;
const MAX_DESCRIPTION = 160;

function decodeEntities(s: string): string {
  return s
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&#x27;/g, "'")
    .replace(/&apos;/g, "'")
    .replace(/&nbsp;/g, " ")
    .replace(/&#(\d+);/g, (_, d) => String.fromCodePoint(Number(d)))
    .replace(/&#x([0-9a-fA-F]+);/g, (_, h) =>
      String.fromCodePoint(parseInt(h, 16)),
    );
}

function extractTitle(html: string): string | null {
  const m = html.match(/<title(?:\s[^>]*)?>([\s\S]*?)<\/title>/i);
  return m ? decodeEntities(m[1].trim()) : null;
}

function extractMetaDescription(html: string): string | null {
  // <meta name="description" content="..."> — attribute order may vary.
  const tags = html.match(/<meta\s[^>]*>/gi) || [];
  for (const tag of tags) {
    if (!/name\s*=\s*["']description["']/i.test(tag)) continue;
    const c = tag.match(/content\s*=\s*["']([\s\S]*?)["']/i);
    if (c) return decodeEntities(c[1].trim());
  }
  return null;
}

interface Failure {
  route: string;
  problem: string;
}

async function checkRoute(route: string): Promise<Failure[]> {
  let res: Response;
  try {
    res = await fetch(`${BASE_URL}${route}`, {
      headers: { "User-Agent": GOOGLEBOT_UA },
      redirect: "follow",
    });
  } catch (err) {
    return [{ route, problem: `fetch failed: ${(err as Error).message}` }];
  }
  if (!res.ok) {
    return [{ route, problem: `HTTP ${res.status}` }];
  }
  const html = await res.text();
  const failures: Failure[] = [];

  const title = extractTitle(html);
  if (title === null) {
    failures.push({ route, problem: "no <title> tag found" });
  } else if (title.length > MAX_TITLE) {
    failures.push({
      route,
      problem: `<title> is ${title.length} chars (max ${MAX_TITLE}): "${title}"`,
    });
  }

  const description = extractMetaDescription(html);
  if (description === null) {
    failures.push({ route, problem: "no meta description found" });
  } else if (description.length > MAX_DESCRIPTION) {
    failures.push({
      route,
      problem: `meta description is ${description.length} chars (max ${MAX_DESCRIPTION}): "${description}"`,
    });
  }

  return failures;
}

async function main() {
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
  console.log(
    `Checking <title> (≤${MAX_TITLE}) and meta description (≤${MAX_DESCRIPTION}) on ${routes.length} routes at ${BASE_URL} ...`,
  );

  const failures: Failure[] = [];
  let i = 0;
  async function worker() {
    while (i < routes.length) {
      const route = routes[i++];
      failures.push(...(await checkRoute(route)));
    }
  }
  await Promise.all(
    Array.from({ length: Math.min(CONCURRENCY, routes.length) }, worker),
  );

  if (failures.length > 0) {
    console.error(`\nFAIL: ${failures.length} SEO length problem(s):`);
    for (const f of failures) {
      console.error(`  ${f.route} — ${f.problem}`);
    }
    process.exit(1);
  }
  console.log(
    "PASS: every checked page has a compliant <title> and meta description.",
  );
}

main().catch((err) => {
  console.error("Unexpected error:", err);
  process.exit(1);
});

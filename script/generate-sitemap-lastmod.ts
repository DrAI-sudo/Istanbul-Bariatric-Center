/**
 * Generates server/sitemap-lastmod.json: route -> YYYY-MM-DD of the last git
 * commit touching that route's page source. Run at build time (script/build.ts)
 * so production, where git may be unavailable, reads the committed JSON.
 * Routes whose source cannot be mapped or that have no git history are omitted
 * and fall back to the hand-maintained dates in server/routes.ts.
 */
import { execSync } from "child_process";
import fs from "fs";
import path from "path";

const root = path.resolve(import.meta.dirname, "..");
const appTsx = fs.readFileSync(path.join(root, "client/src/App.tsx"), "utf8");
const outFile = path.join(root, "server/sitemap-lastmod.json");

const componentToFile = new Map<string, string>();
for (const m of appTsx.matchAll(/const (\w+) = lazy\(\(\) => import\("@\/pages\/([^"]+)"\)\)/g)) {
  componentToFile.set(m[1], `client/src/pages/${m[2]}.tsx`);
}

const routeToFile = new Map<string, string>();
for (const m of appTsx.matchAll(/<Route path="([^"]+)"(?: component=\{(\w+)\}|>\{[^}]*<(\w+)\b)/g)) {
  const comp = m[2] || m[3];
  const file = comp && componentToFile.get(comp);
  if (file && !m[1].includes(":")) routeToFile.set(m[1], file);
}
// Localised treatments pages share the treatments component.
const treatmentsFile = routeToFile.get("/treatments");
if (treatmentsFile) {
  for (const l of ["tr", "es", "de", "fr", "it", "ro", "ru", "ar"]) routeToFile.set(`/treatments/${l}`, treatmentsFile);
}

function gitDate(file: string): string | null {
  try {
    const out = execSync(`git log -1 --format=%cs -- "${file}"`, { cwd: root, stdio: ["ignore", "pipe", "ignore"] })
      .toString()
      .trim();
    return /^\d{4}-\d{2}-\d{2}$/.test(out) ? out : null;
  } catch {
    return null;
  }
}

const result: Record<string, string> = {};
for (const [route, file] of routeToFile) {
  if (!fs.existsSync(path.join(root, file))) continue;
  const d = gitDate(file);
  if (d) result[route] = d;
}

if (Object.keys(result).length === 0) {
  console.warn("sitemap-lastmod: git produced no dates; keeping existing JSON untouched");
  process.exit(0);
}

const sorted = Object.fromEntries(Object.entries(result).sort(([a], [b]) => a.localeCompare(b)));
fs.writeFileSync(outFile, JSON.stringify(sorted, null, 2) + "\n");
console.log(`sitemap-lastmod: wrote ${Object.keys(sorted).length} routes to ${path.relative(root, outFile)}`);

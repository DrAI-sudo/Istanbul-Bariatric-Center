import { build as esbuild } from "esbuild";
import { build as viteBuild } from "vite";
import { rm, readFile, writeFile } from "fs/promises";
import { existsSync } from "fs";
import path from "path";
import Critters from "critters";

// server deps to bundle to reduce openat(2) syscalls
// which helps cold start times
const allowlist = [
  "@google/generative-ai",
  "axios",
  "connect-pg-simple",
  "cors",
  "date-fns",
  "drizzle-orm",
  "drizzle-zod",
  "express",
  "express-rate-limit",
  "express-session",
  "jsonwebtoken",
  "memorystore",
  "multer",
  "nanoid",
  "nodemailer",
  "openai",
  "passport",
  "passport-local",
  "pg",
  "stripe",
  "uuid",
  "ws",
  "xlsx",
  "zod",
  "zod-validation-error",
];

async function optimizeCriticalCSS() {
  const indexPath = path.resolve("dist/public/index.html");
  
  if (!existsSync(indexPath)) {
    console.log("No index.html found, skipping critical CSS optimization");
    return;
  }

  console.log("Optimizing critical CSS with Critters...");
  
  const critters = new Critters({
    path: "dist/public",
    preload: "swap",
    inlineFonts: false,
    pruneSource: false,
    reduceInlineStyles: true,
    mergeStylesheets: true,
  });

  let html = await readFile(indexPath, "utf-8");
  html = await critters.process(html);
  
  // Fix: Critters produces blocking stylesheet, convert to async preload
  // Match Critters output pattern and replace with proper preload
  html = html.replace(
    /<link rel="stylesheet" crossorigin href="(\/assets\/[^"]+\.css)"[^>]*>(?:<noscript>.*?<\/noscript>)?/g,
    (match, href) => {
      return `<link rel="preload" href="${href}" as="style" crossorigin onload="this.onload=null;this.rel='stylesheet'"><noscript><link rel="stylesheet" href="${href}"></noscript>`;
    }
  );
  
  await writeFile(indexPath, html);
  
  console.log("Critical CSS inlined and stylesheet deferred successfully");
}

async function buildAll() {
  await rm("dist", { recursive: true, force: true });

  console.log("building client...");
  await viteBuild();
  
  await optimizeCriticalCSS();

  console.log("building server...");
  const pkg = JSON.parse(await readFile("package.json", "utf-8"));
  const allDeps = [
    ...Object.keys(pkg.dependencies || {}),
    ...Object.keys(pkg.devDependencies || {}),
  ];
  const externals = allDeps.filter((dep) => !allowlist.includes(dep));

  await esbuild({
    entryPoints: ["server/index.ts"],
    platform: "node",
    bundle: true,
    format: "cjs",
    outfile: "dist/index.cjs",
    define: {
      "process.env.NODE_ENV": '"production"',
      "import.meta.url": "importMetaUrl",
    },
    banner: {
      js: `
const { createRequire } = require('module');
const { fileURLToPath } = require('url');
const { dirname } = require('path');
const importMetaUrl = require('url').pathToFileURL(__filename).toString();
`,
    },
    minify: true,
    external: externals,
    logLevel: "info",
  });

  console.log("prerendering static HTML...");
  const { prerender } = await import("./prerender");
  await prerender();

  await checkForStaleMetadata();
}

async function checkForStaleMetadata() {
  // Guard: fail the build if any HTML output references dev/stale domains
  // or the retired opengraph.jpg — these leaked into social meta tags before.
  const { readdir } = await import("fs/promises");
  const stalePattern = /replit\.app|replit\.dev|opengraph\.jpg/;
  const offenders: string[] = [];

  async function scan(dir: string): Promise<void> {
    let entries;
    try {
      entries = await readdir(dir, { withFileTypes: true });
    } catch {
      return;
    }
    for (const entry of entries) {
      const full = path.join(dir, entry.name);
      if (entry.isDirectory()) {
        await scan(full);
      } else if (entry.name.endsWith(".html")) {
        const content = await readFile(full, "utf-8");
        if (stalePattern.test(content)) offenders.push(full);
      }
    }
  }

  await scan("dist/public");
  await scan("dist/prerendered");

  if (offenders.length > 0) {
    throw new Error(
      `Stale domain/image references (replit.app, replit.dev, or opengraph.jpg) found in built HTML:\n  ${offenders.join("\n  ")}`,
    );
  }
  console.log("stale-metadata check passed");
}

buildAll().catch((err) => {
  console.error(err);
  process.exit(1);
});

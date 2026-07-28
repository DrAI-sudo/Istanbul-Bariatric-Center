#!/usr/bin/env node
/**
 * Generates responsive webp variants (480w / 768w / 1200w) for key public images
 * and writes a manifest (client/src/data/image-variants.json) mapping each
 * original public path to the widths that were generated.
 *
 * Variants are written next to the originals as <name>-<width>w.webp.
 * Widths >= the original image width are skipped (no upscaling).
 *
 * Run: node scripts/generate-image-variants.mjs
 */
import sharp from "sharp";
import { readFileSync, writeFileSync, existsSync } from "fs";
import path from "path";

const PUBLIC_DIR = path.resolve("client/public");
const MANIFEST = path.resolve("client/src/data/image-variants.json");
const WIDTHS = [480, 768, 1200];

// Blog cover images referenced as `image:` in blog-posts.ts
const blogPosts = readFileSync(path.resolve("client/src/data/blog-posts.ts"), "utf8");
const blogCovers = [...new Set([...blogPosts.matchAll(/image: "(\/[^"]+\.(?:webp|jpg|jpeg|png))"/g)].map((m) => m[1]))];

// Other key images
const keyImages = [
  "/hero-poster.webp",
  // treatment cards
  "/ifso-sleeve.webp",
  "/ifso-bypass.webp",
  "/gastric-balloon.webp",
  "/ifso-ds.webp",
  "/post-bariatric-surgery.webp",
  "/transit-bipartition.webp",
  "/ifso-esg.webp",
  "/pose2-procedure.webp",
  // VIP package
  "/IMG_1801_1766158987529.webp",
  // page heroes
  "/about-hero.webp",
  "/contact-hero.webp",
  // blog-post.tsx fallback image
  "/gastric-sleeve.webp",
];

const targets = [...new Set([...keyImages, ...blogCovers])];
const manifest = {};

for (const publicPath of targets) {
  const file = path.join(PUBLIC_DIR, publicPath);
  if (!existsSync(file)) {
    console.warn(`skip (missing): ${publicPath}`);
    continue;
  }
  const meta = await sharp(file).metadata();
  const widths = [];
  for (const w of WIDTHS) {
    if (meta.width && meta.width <= w) continue; // no upscaling
    const base = publicPath.replace(/\.(webp|jpg|jpeg|png)$/i, "");
    const out = path.join(PUBLIC_DIR, `${base.slice(1)}-${w}w.webp`);
    await sharp(file).resize({ width: w }).webp({ quality: 80 }).toFile(out);
    widths.push(w);
  }
  if (widths.length) {
    manifest[publicPath] = { widths, originalWidth: meta.width };
    console.log(`${publicPath}: ${widths.join(", ")} (orig ${meta.width}px)`);
  } else {
    console.log(`${publicPath}: no variants needed (orig ${meta.width}px)`);
  }
}

writeFileSync(MANIFEST, JSON.stringify(manifest, null, 2) + "\n");
console.log(`\nManifest written to ${MANIFEST} (${Object.keys(manifest).length} entries)`);

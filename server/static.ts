import express, { type Express } from "express";
import fs from "fs";
import path from "path";
import { isValidRoute } from "./valid-routes";
import { injectSEO, inject404Meta } from "./seo-inject";

function injectFontPreloads(html: string, distPath: string): string {
  const assetsDir = path.resolve(distPath, "assets");
  if (!fs.existsSync(assetsDir)) return html;

  const files = fs.readdirSync(assetsDir);
  const criticalFonts = files.filter(f =>
    f.endsWith(".woff2") && (
      f.startsWith("inter-latin-400") ||
      f.startsWith("inter-latin-500") ||
      f.startsWith("inter-latin-700") ||
      f.startsWith("plus-jakarta-sans-latin-700")
    )
  );

  const preloadTags = criticalFonts
    .map(f => `<link rel="preload" href="/assets/${f}" as="font" type="font/woff2" crossorigin>`)
    .join("\n    ");

  const mainJs = files.find(f => f.startsWith("index-") && f.endsWith(".js") && !f.includes(".css"));
  const vendorJs = files.find(f => f.startsWith("vendor-") && f.endsWith(".js"));
  const modulePreloads = [mainJs, vendorJs]
    .filter(Boolean)
    .map(f => `<link rel="modulepreload" href="/assets/${f}">`)
    .join("\n    ");

  return html.replace("</head>", `    ${preloadTags}\n    ${modulePreloads}\n  </head>`);
}

export function serveStatic(app: Express) {
  const distPath = path.resolve(__dirname, "public");
  if (!fs.existsSync(distPath)) {
    throw new Error(
      `Could not find the build directory: ${distPath}, make sure to build the client first`,
    );
  }

  const rawHtml = fs.readFileSync(path.resolve(distPath, "index.html"), "utf-8");
  const indexHtml = injectFontPreloads(rawHtml, distPath);

  app.get("/robots.txt", (_req, res) => {
    const robotsPath = path.resolve(distPath, "robots.txt");
    if (fs.existsSync(robotsPath)) {
      res.status(200).type("text/plain").sendFile(robotsPath);
    } else {
      res.status(200).type("text/plain").send("User-agent: *\nAllow: /\nSitemap: https://istanbulbariatriccenter.com/sitemap.xml\n");
    }
  });

  app.use(express.static(distPath, {
    maxAge: '1y',
    immutable: true,
    setHeaders: (res, filePath) => {
      if (filePath.endsWith('.html')) {
        res.setHeader('Cache-Control', 'no-cache');
      }
    },
  }));

  app.use("*", (req, res) => {
    const requestPath = req.originalUrl.split("?")[0];
    
    if (requestPath.startsWith("/assets/") || 
        requestPath.startsWith("/api/")) {
      return res.status(404).send("Not found");
    }
    
    if (isValidRoute(requestPath)) {
      const injectedHtml = injectSEO(indexHtml, requestPath);
      res.status(200).set({ "Content-Type": "text/html", "Cache-Control": "no-cache" }).end(injectedHtml);
    } else {
      const notFoundHtml = inject404Meta(indexHtml);
      res
        .status(404)
        .set({
          "Content-Type": "text/html",
          "Cache-Control": "no-cache",
          "X-Robots-Tag": "noindex, nofollow",
        })
        .end(notFoundHtml);
    }
  });
}

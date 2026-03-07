import express, { type Express } from "express";
import fs from "fs";
import path from "path";
import { isValidRoute } from "./valid-routes";
import { injectSEO } from "./seo-inject";

export function serveStatic(app: Express) {
  const distPath = path.resolve(__dirname, "public");
  if (!fs.existsSync(distPath)) {
    throw new Error(
      `Could not find the build directory: ${distPath}, make sure to build the client first`,
    );
  }

  const indexHtml = fs.readFileSync(path.resolve(distPath, "index.html"), "utf-8");

  app.get("/robots.txt", (_req, res) => {
    const robotsPath = path.resolve(distPath, "robots.txt");
    if (fs.existsSync(robotsPath)) {
      res.status(200).type("text/plain").sendFile(robotsPath);
    } else {
      res.status(200).type("text/plain").send("User-agent: *\nAllow: /\nSitemap: https://istanbulbariatriccenter.com/sitemap.xml\n");
    }
  });

  app.get("/sitemap.xml", (_req, res) => {
    const sitemapPath = path.resolve(distPath, "sitemap.xml");
    if (fs.existsSync(sitemapPath)) {
      res.status(200).type("application/xml").sendFile(sitemapPath);
    } else {
      res.status(404).send("Not found");
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
    
    const injectedHtml = injectSEO(indexHtml, requestPath);
    
    if (isValidRoute(requestPath)) {
      res.status(200).set({ "Content-Type": "text/html", "Cache-Control": "no-cache" }).end(injectedHtml);
    } else {
      res.status(404).set({ "Content-Type": "text/html", "Cache-Control": "no-cache" }).end(injectedHtml);
    }
  });
}

import express, { type Express } from "express";
import fs from "fs";
import path from "path";
import { isValidRoute } from "./valid-routes";

export function serveStatic(app: Express) {
  const distPath = path.resolve(__dirname, "public");
  if (!fs.existsSync(distPath)) {
    throw new Error(
      `Could not find the build directory: ${distPath}, make sure to build the client first`,
    );
  }

  app.use(express.static(distPath));

  app.use("*", (req, res) => {
    const requestPath = req.originalUrl.split("?")[0];
    
    if (requestPath.startsWith("/assets/") || 
        requestPath.startsWith("/api/") ||
        requestPath === "/robots.txt" ||
        requestPath === "/sitemap.xml" ||
        requestPath === "/favicon.ico" ||
        requestPath === "/manifest.json") {
      return res.status(404).send("Not found");
    }
    
    if (isValidRoute(requestPath)) {
      res.sendFile(path.resolve(distPath, "index.html"));
    } else {
      res.status(404).sendFile(path.resolve(distPath, "index.html"));
    }
  });
}

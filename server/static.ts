import express, { type Express } from "express";
import fs from "fs";
import path from "path";
import { gzip, createGzip } from "zlib";
import { promisify } from "util";

const gzipAsync = promisify(gzip);

const CACHE_DURATIONS = {
  static: 31536000,
  html: 0,
  api: 0,
};

const COMPRESSIBLE_TYPES = [
  'text/html',
  'text/css',
  'text/javascript',
  'application/javascript',
  'application/json',
  'image/svg+xml',
  'text/xml',
  'application/xml',
];

export function serveStatic(app: Express) {
  const distPath = path.resolve(__dirname, "public");
  if (!fs.existsSync(distPath)) {
    throw new Error(
      `Could not find the build directory: ${distPath}, make sure to build the client first`,
    );
  }

  app.use((req, res, next) => {
    const ext = path.extname(req.path).toLowerCase();
    
    if (['.js', '.css', '.woff', '.woff2', '.ttf', '.eot', '.ico', '.png', '.jpg', '.jpeg', '.gif', '.svg', '.webp'].includes(ext)) {
      res.setHeader('Cache-Control', `public, max-age=${CACHE_DURATIONS.static}, immutable`);
    } else if (ext === '.html' || req.path === '/') {
      res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate');
      res.setHeader('Pragma', 'no-cache');
      res.setHeader('Expires', '0');
    }
    
    next();
  });

  app.use(express.static(distPath, {
    maxAge: '1y',
    etag: true,
    lastModified: true,
    setHeaders: (res, filePath) => {
      const ext = path.extname(filePath).toLowerCase();
      if (ext === '.html') {
        res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate');
      }
    }
  }));

  app.use("*", (_req, res) => {
    res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate');
    res.sendFile(path.resolve(distPath, "index.html"));
  });
}

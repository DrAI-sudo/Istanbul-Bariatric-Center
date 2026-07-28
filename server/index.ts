import express, { type Request, Response, NextFunction } from "express";
import compression from "compression";
import { registerRoutes } from "./routes";
import { registerMayaChatRoutes } from "./maya-chat";
import { registerAdminRoutes } from "./admin-routes";
import { registerAgentDiscovery } from "./agent-discovery";
import { serveStatic } from "./static";
import { createServer } from "http";

// Prevent unhandled rejections from crashing the server
process.on('unhandledRejection', (reason, promise) => {
  console.error('Unhandled Rejection at:', promise, 'reason:', reason);
});

const app = express();
const httpServer = createServer(app);

// Enable gzip/brotli compression for all responses
app.use(compression({
  level: 6,
  threshold: 1024,
  filter: (req, res) => {
    if (req.headers['x-no-compression']) {
      return false;
    }
    return compression.filter(req, res);
  }
}));

declare module "http" {
  interface IncomingMessage {
    rawBody: unknown;
  }
}

app.use((req, res, next) => {
  const host = req.headers.host;
  if (host === "istanbulbariatriccenter.replit.app") {
    return res.redirect(301, "https://istanbulbariatriccenter.com" + req.originalUrl);
  }
  if (host === "www.istanbulbariatriccenter.com") {
    return res.redirect(301, "https://istanbulbariatriccenter.com" + req.originalUrl);
  }
  next();
});

app.use((req, res, next) => {
  const p = req.path;
  if (p !== "/" && p.endsWith("/") && !p.startsWith("/api/") && (req.method === "GET" || req.method === "HEAD")) {
    const query = req.url.slice(p.length);
    return res.redirect(301, p.slice(0, -1) + query);
  }
  next();
});

app.use((req, res, next) => {
  const p = req.path;
  if ((req.method === "GET" || req.method === "HEAD") && !p.startsWith("/api/") && p !== p.toLowerCase()) {
    if (p.startsWith("/assets/") || p.startsWith("/src/") || p.startsWith("/node_modules/") || p.startsWith("/@") || p.startsWith("/@fs/") || /\.\w{2,5}$/.test(p)) {
      return next();
    }
    const query = req.url.slice(p.length);
    return res.redirect(301, p.toLowerCase() + query);
  }
  next();
});

app.use((req, res, next) => {
  if (req.path.startsWith("/api/") || req.path.startsWith("/admin") || req.path.startsWith("/superadmin")) {
    res.setHeader("X-Robots-Tag", "noindex, nofollow");
  } else {
    res.setHeader("X-Robots-Tag", "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1");
  }
  res.setHeader("X-Content-Type-Options", "nosniff");
  if (process.env.NODE_ENV === "production") {
    res.setHeader("X-Frame-Options", "SAMEORIGIN");
  }
  res.setHeader("Referrer-Policy", "strict-origin-when-cross-origin");
  res.setHeader("Permissions-Policy", "camera=(), microphone=(), geolocation=()");
  if (process.env.NODE_ENV === "production") {
    res.setHeader("Content-Security-Policy", "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://www.google-analytics.com https://dashboard.searchatlas.com https://storage.googleapis.com https://app.trysoro.com https://static.cloudflareinsights.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' data: https://fonts.gstatic.com; img-src 'self' data: https: blob:; connect-src 'self' https://www.google-analytics.com https://www.googletagmanager.com https://dashboard.searchatlas.com https://api.openai.com https://app.trysoro.com https://sa.searchatlas.com https://cloudflareinsights.com; frame-src 'self' https://clinics.euromedfin.com https://www.youtube.com https://www.youtube-nocookie.com; media-src 'self' blob: data:; object-src 'none'; base-uri 'self'; form-action 'self'");
  }
  next();
});

app.use(
  express.json({
    verify: (req, _res, buf) => {
      req.rawBody = buf;
    },
  }),
);

app.use(express.urlencoded({ extended: false }));

export function log(message: string, source = "express") {
  const formattedTime = new Date().toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
  });

  console.log(`${formattedTime} [${source}] ${message}`);
}

app.use((req, res, next) => {
  const start = Date.now();
  const path = req.path;
  let capturedJsonResponse: Record<string, any> | undefined = undefined;

  const originalResJson = res.json;
  res.json = function (bodyJson, ...args) {
    capturedJsonResponse = bodyJson;
    return originalResJson.apply(res, [bodyJson, ...args]);
  };

  res.on("finish", () => {
    const duration = Date.now() - start;
    if (path.startsWith("/api")) {
      let logLine = `${req.method} ${path} ${res.statusCode} in ${duration}ms`;
      if (capturedJsonResponse) {
        logLine += ` :: ${JSON.stringify(capturedJsonResponse)}`;
      }

      log(logLine);
    }
  });

  next();
});

(async () => {
  registerAgentDiscovery(app);
  registerMayaChatRoutes(app);
  registerAdminRoutes(app);
  await registerRoutes(httpServer, app);

  app.use((err: any, _req: Request, res: Response, _next: NextFunction) => {
    const status = err.status || err.statusCode || 500;
    const message = err.message || "Internal Server Error";

    res.status(status).json({ message });
    throw err;
  });

  // importantly only setup vite in development and after
  // setting up all the other routes so the catch-all route
  // doesn't interfere with the other routes
  if (process.env.NODE_ENV === "production") {
    serveStatic(app);
  } else {
    const { setupVite } = await import("./vite");
    await setupVite(httpServer, app);
  }

  // ALWAYS serve the app on the port specified in the environment variable PORT
  // Other ports are firewalled. Default to 5000 if not specified.
  // this serves both the API and the client.
  // It is the only port that is not firewalled.
  const port = parseInt(process.env.PORT || "5000", 10);
  httpServer.listen(
    {
      port,
      host: "0.0.0.0",
      reusePort: true,
    },
    () => {
      log(`serving on port ${port}`);
    },
  );
})();

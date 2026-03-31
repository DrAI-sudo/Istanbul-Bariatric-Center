import { type Express } from "express";
import { createServer as createViteServer, createLogger } from "vite";
import { type Server } from "http";
import viteConfig from "../vite.config";
import fs from "fs";
import path from "path";
import { nanoid } from "nanoid";
import { injectSEO } from "./seo-inject";

const viteLogger = createLogger();

export async function setupVite(server: Server, app: Express) {
  const serverOptions = {
    middlewareMode: true,
    hmr: { server, path: "/vite-hmr" },
    allowedHosts: true as const,
    fs: {
      strict: false,
      deny: ["**/.env*", "**/.git/**"],
    },
  };

  const vite = await createViteServer({
    ...viteConfig,
    configFile: false,
    customLogger: {
      ...viteLogger,
      error: (msg, options) => {
        viteLogger.error(msg, options);
        process.exit(1);
      },
    },
    server: serverOptions,
    appType: "custom",
  });

  app.use(vite.middlewares);

  app.use("/node_modules/.vite/deps", (req, res, next) => {
    const filePath = req.path;
    if (!filePath || filePath === "/" || !filePath.endsWith(".js")) {
      return next();
    }
    const absPath = path.resolve(import.meta.dirname, "..", "node_modules", ".vite", "deps", filePath.slice(1));
    if (fs.existsSync(absPath) && fs.statSync(absPath).isFile()) {
      res.setHeader("Content-Type", "text/javascript");
      res.setHeader("Cache-Control", "max-age=31536000, immutable");
      fs.createReadStream(absPath).pipe(res);
    } else {
      res.status(404).end();
    }
  });

  app.use("*", async (req, res, next) => {
    const url = req.originalUrl;
    const urlPath = url.split("?")[0];

    if (urlPath.match(/\.(js|ts|tsx|jsx|css|json|map|woff2?|ttf|eot|svg|png|jpg|gif|ico|wasm)$/)) {
      return res.status(404).end();
    }

    try {
      const clientTemplate = path.resolve(
        import.meta.dirname,
        "..",
        "client",
        "index.html",
      );

      let template = await fs.promises.readFile(clientTemplate, "utf-8");
      template = template.replace(
        `src="/src/main.tsx"`,
        `src="/src/main.tsx?v=${nanoid()}"`,
      );
      const page = await vite.transformIndexHtml(url, template);
      const requestPath = url.split("?")[0];
      const injectedPage = injectSEO(page, requestPath);
      res.status(200).set({ "Content-Type": "text/html" }).end(injectedPage);
    } catch (e) {
      vite.ssrFixStacktrace(e as Error);
      next(e);
    }
  });
}

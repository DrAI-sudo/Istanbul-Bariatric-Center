---
name: Static prerender pipeline
description: Gotchas for the puppeteer-based prerendering of all public routes during build
---

# Static prerender pipeline

- All public routes are prerendered to `dist/prerendered/` at build time (puppeteer-core + nix chromium, routes from sitemap.xml). Prod catch-all serves those files, falling back to injectSEO.
- **Concurrent puppeteer pages share localStorage** in one browser profile. i18next caches its language there, so parallel renders leak the wrong language into other pages' `<html lang>` (and could leak translated nav). **How to apply:** always render each route in its own `browser.createBrowserContext()`, and re-apply the server-injected lang/dir before capture — client i18n overwrites them from detected language.
- **Why lang must be forced:** ESG landing pages hardcode localized content but never call `changeLanguage`, so `i18n.language` (and thus the SEO component's `document.documentElement.lang`) does not reflect the route.
- `express.static` serves `dist/public/index.html` for `/` by default, bypassing the catch-all. **How to apply:** keep `index: false` on the static middleware or prerendered/injected HTML never reaches the homepage.
- The prerender step deliberately strips `#seo-content` and `noscript` before capture to keep exactly one h1 per page (see seo-ssr-injection.md).
- `SKIP_PRERENDER=1` skips the step; build fails if homepage fails or >10% of routes fail.

# Running long builds in this workspace

- Backgrounded/`setsid` processes started from bash tool calls get killed between calls. **How to apply:** for builds longer than the 2-min bash timeout, run them as a temporary console workflow (`command: npm run build ... ; sleep 3600`), poll the log file, then remove the workflow.

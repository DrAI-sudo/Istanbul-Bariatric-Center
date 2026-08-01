---
name: Single-h1 SEO guard
description: How the exactly-one-h1 invariant is enforced and checked
---
Crawlers must see exactly one `<h1>` per page: server injects a hidden crawlable h1 (seo-inject.ts), client removes that block pre-mount (main.tsx). Guard script `script/check-h1.ts` (registered validation `h1-check`) curls every route from seo-data.ts with a Googlebot UA and fails unless raw HTML has exactly one `<h1>`; `--hydrated` also checks the browser DOM on key pages via puppeteer-core.

**Why:** duplicate/zero h1s previously reached Google; any new page or change to seo-inject.ts / main.tsx can silently break the balance.
**How to apply:** run the `h1-check` validation (server must be running) after touching seo-inject.ts, seo-data.ts, main.tsx, or adding pages.

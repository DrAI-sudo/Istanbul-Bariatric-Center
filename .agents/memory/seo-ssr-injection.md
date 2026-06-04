---
name: SEO SSR injection
description: How server-rendered SEO content reaches crawlers/AI on this site, and what to keep correct
---

# SEO / GEO server-side injection

- SSR SEO content is injected in `server/seo-inject.ts` for ALL user-agents (not gated behind crawler UA detection). It pulls per-route data from `server/seo-data.ts` via `getSEOData(path)`.
- Each route's `h1`, `bodyExcerpt`, `richContent`, and `jsonLd[]` are injected into a hidden `#seo-content` div plus a `<noscript>` block before `<div id="root">`.
- **One-H1 rule:** the `#seo-content` block renders `seo.h1` as `<h1>`; the `<noscript>` heading stays `<h2>` on purpose so raw HTML has exactly one `<h1>`. React client components (e.g. hero) also render an h1 but only client-side. Do NOT change the noscript heading to h1 — it would create a duplicate h1 in raw HTML.
- Third-party AI-visibility audits (e.g. therankcollective) fetch raw HTML with no JS, so they only see what `seo-inject.ts` emits. Missing-signal complaints (JSON-LD, H1, FAQ schema) almost always mean a gap in the injected SSR content, not the React app.

**Why:** an audit scored the homepage low because `seo.h1` was being rendered inside `<h2>` (zero real h1) and the homepage had no FAQPage schema. Fix lives in injected SSR content, not client components.

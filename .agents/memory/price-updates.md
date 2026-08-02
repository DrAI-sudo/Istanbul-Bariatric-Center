---
name: Sitewide price updates
description: Where treatment prices live and the formats to catch when changing them
---

Package prices appear in many places and formats. When changing prices, a plain `£X,XXX` search is NOT enough.

**Where prices live:** page components (incl. per-country ESG pages esg-us/ca/anz/fr/de/es/nl/uk/ar), all 9 locale JSON files (treatments/home/blog namespaces), `client/src/data/blog-posts.ts`, `server/seo-data.ts` (richContent tables + FAQ), `server/routes.ts` (llms.txt-style summaries), `server/maya-chat.ts`, `server/agent-discovery.ts`, JSON-LD Offers (`"price": "2950"` numeric, no symbol).

**Formats to search:** `£2,950`, `£2.950` (some locales), `£2 950` / `£4 950` (French/Russian space-separated), no-comma legacy `"price": "£2250"` (locale treatments.json `packages` blocks held a STALE old schedule — verify against the canonical tier list in `client/src/pages/treatments.tsx`), `X,XXX USD`, bare numeric in JSON-LD.

**Derived numbers that must be recomputed, not just token-replaced:** "Save £X – £Y" rows and savings-percentage claims in seo-data cost tables, trip-total estimates (price + flights), and currency conversions of our packages: `~$X CAD`, `~$X AUD`, `X € (£Y)` on French pages.

**Rule:** competitor/NHS/US/EU comparison ranges (£9k–£18k, $12k–$35k, €8k–€16k) are NOT ours — never change them. User preference (Aug 2026): round new prices to the nearest 50.

**Verify:** grep for every old token afterwards (all formats), json-validate locales, typecheck, restart server, h1-check, Googlebot curl of cost page + /esg/fr.

---
name: Physician entity & surgeon page
description: How Dr Murat Üstün is modelled in structured data and linked internally; constraints on titles for the /dr-murat-ustun page.
---
- Canonical Physician JSON-LD lives in server/seo-data.ts (PHYSICIAN_SCHEMA, @id `https://istanbulbariatriccenter.com/#drmuratustun`); every other page references it by @id only (founder, blog author, performedBy). Client mirror in seo.tsx structuredData.physician must stay in sync.
- **Why:** one entity, many references — Google merges them; duplicating full Physician blocks per page caused conflicting data before.
- Internal links to `/dr-murat-ustun` come from shared components (footer "Founded by", SurgeonProof card, ExpertPOV byline, blog byline). Other "Dr Murat Ustun" mentions still deliberately link out to drmuratustun.com; do not mass-replace.
- Prerender bakes the CLIENT title (page title + " | Istanbul Bariatric Center", 28 chars), so client page titles must be ≤32 chars to keep prod ≤60. Dev SSR title can be longer/richer.
- `/dr-murat-ustun` used to be a legacy 301 → /about in routes.ts; if the page is ever removed, restore that redirect.
- Sitemap lastmod: server/sitemap-lastmod.json is generated from git page-file dates at build time (script/generate-sitemap-lastmod.ts); server/seo-data.ts edits do not bump dates by design (would stamp every route with the same day).
- Do not attach performedBy → Dr Üstün to a MedicalProcedure whose offers include the Ultra Eco sleeve package (performed by the surgeon team, not Dr Üstün); use provider → organisation instead.
- Never let subagents write "testimonials" for medical pages; StaticTestimonials labels quotes "Verified Patient" — only real, consented reviews belong there.

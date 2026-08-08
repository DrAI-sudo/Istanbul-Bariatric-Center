---
name: SEO title/description length limits
description: How title/description length is enforced and why '&' is avoided in SEO strings
---
Site SEO limits: rendered `<title>` ≤60 chars, meta description ≤160, measured on the **raw escaped HTML** as crawled with a Googlebot UA (audits count `&amp;` as 5 chars).

**Why:** the Aug 2026 audit and completion reviews measure escaped source; a 58-char title with one `&` fails.

**How to apply:** avoid `&` in titles/descriptions in `server/seo-data.ts`; blog posts have an optional `seoTitle` used only for the `<title>`/og tags (suffix " - Istanbul Bariatric Center" adds 28 chars, so keep seoTitle ≤32). On-page h1s and client blog titles may stay long.

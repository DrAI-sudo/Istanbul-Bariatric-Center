---
name: Blog SSR content extraction
description: How blog article bodies get injected for crawlers and the ESM pitfall that silently broke it
---
Blog post SSR bodies are regex-extracted from client/src/data/blog-posts.ts at request time (getBlogPostContent in server/seo-data.ts) and injected inside <article> in both noscript and #seo-content blocks.

**Why:** The project is ESM ("type":"module"); a `require("fs")` inside that function threw, was swallowed by try/catch, and every blog post silently lost its crawlable article body until July 2026. Fixed with top-level imports + fileURLToPath dirname.

**How to apply:** After any blog/SEO change, curl with a Googlebot UA and grep for `<article>` plus a phrase unique to the post body — matching only titles/excerpts is a false positive (they also appear in JSON-LD/meta). Extraction needs client/src present at runtime, including in production deploys.

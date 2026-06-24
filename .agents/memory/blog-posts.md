---
name: Adding a blog post
description: The two files that must both be updated to add a blog post, plus content-format constraints
---

Adding a blog post requires updating TWO separate sources, both keyed by the same `slug`:
- `client/src/data/blog-posts.ts` — full `BlogPost` with HTML `content` (rendered on the page, read by llms-full.txt and SSR content injection).
- `server/seo-data.ts` `blogPosts: BlogPostSEO[]` — metadata only (slug/title/excerpt/date/publishedAt/image). Powers sitemap.xml, meta tags, and JSON-LD. Missing this = no sitemap entry and wrong SSR meta.

**Why:** the page renders from the client data file, but server-side SEO (sitemap, meta, schema) reads a separate hand-maintained list. They are not derived from each other.

**How to apply:**
- Insert at the TOP of each array (newest first; blog list sorts by date anyway).
- `content` is a template literal extracted server-side by regex (`getBlogPostContent`) — do NOT use backticks or `${}` inside it; `${...}` gets stripped from crawler output.
- Images: convert to webp into `client/public/`, reference as `/file.webp` (NOT attached_assets/ — that dir isn't served).
- llms.txt is a STATIC template (no per-post list); only llms-full.txt + sitemap enumerate posts. i18n (`client/src/locales/*/blog.json`) is optional — title/excerpt/content fall back to the data file.
- Server data files (seo-data.ts) need a workflow restart to take effect (tsx doesn't hot-reload them).

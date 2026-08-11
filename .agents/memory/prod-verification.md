---
name: Verifying production content
description: How to check whether the published site actually contains recent content changes
---

# Verifying production content

- A publish snapshots the workspace at the moment it is triggered; if the user publishes while a multi-step change session is in flight, prod can end up with a **partially stale mix** (e.g. new blog post but missing homepage card, old prerendered article body next to newly injected meta).
- **Why:** prod serves build-time prerendered HTML for most routes while some head/JSON-LD data is injected per request, so "some of it looks new" does not mean the whole snapshot is new.
- **How to apply:** when the user says a page "hasn't updated in production", curl the prod URL directly and grep for a phrase unique to the *body* of the new content (not just titles/meta), check `cf-cache-status` (BYPASS = origin content, so not a Cloudflare cache issue), and compare several changed surfaces (homepage + the page). If any are stale, the fix is simply to republish — no code change needed.

**Replacing a static asset under the same filename doesn't reach visitors:** Cloudflare keeps serving the cached old file (cf-cache-status HIT) even after a successful republish. Fix by versioning the URL (e.g. `?v=2`) everywhere it's referenced; a `?query` curl confirms the origin has the new file (BYPASS).

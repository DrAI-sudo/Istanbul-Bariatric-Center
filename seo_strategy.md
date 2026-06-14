# SEO Strategy

## In scope
- Public marketing pages
- Procedure pages
- Country-specific ESG landing pages
- Blog index and blog posts
- Public guide and contact pages
- AI-discovery files (`robots.txt`, `sitemap.xml`, `llms.txt`, `llms-full.txt`, `ai-plugin.json`)

## Out of scope
- Authenticated or protected admin area (`/admin`)
- API routes (`/api/**`)

## Target audience
- International patients researching bariatric and metabolic surgery in Turkey
- Country-specific users comparing ESG options from the UK, Europe, North America, ANZ, and MENA regions

## Primary keywords
- bariatric surgery turkey
- weight loss surgery istanbul
- gastric sleeve turkey
- gastric bypass turkey
- endoscopic sleeve gastroplasty turkey
- ESG turkey

## Rendering model notes
- Frontend is a Vite React SPA using Wouter.
- Production server uses Express to inject route-specific SEO HTML and head tags into the SPA shell.
- Public routes are intended to be crawlable via server injection; admin remains out of scope.
- Localized public routes extend beyond the languages managed by the i18n layer, so language targeting signals must be emitted from the server response rather than relying on client-side detection alone.

## Dismissed categories
- None yet.

import { getSEOData, getNavigationHTML, getBlogListHTML, getBlogPostContent } from "./seo-data";

export function injectSEO(html: string, requestPath: string): string {
  const seo = getSEOData(requestPath);
  if (!seo) {
    return html;
  }

  let result = html;

  result = result.replace(
    /<title>[^<]*<\/title>/,
    `<title>${escapeHtml(seo.title)}</title>`
  );

  result = result.replace(
    /<meta\s+name="description"\s+content="[^"]*"\s*\/?>/,
    `<meta name="description" content="${escapeAttr(seo.description)}" />`
  );

  result = result.replace(
    /<meta\s+property="og:title"\s+content="[^"]*"\s*\/?>/,
    `<meta property="og:title" content="${escapeAttr(seo.title)}" />`
  );

  result = result.replace(
    /<meta\s+property="og:description"\s+content="[^"]*"\s*\/?>/,
    `<meta property="og:description" content="${escapeAttr(seo.description)}" />`
  );

  result = result.replace(
    /<meta\s+property="og:url"\s+content="[^"]*"\s*\/?>/,
    `<meta property="og:url" content="${escapeAttr(seo.canonical)}" />`
  );

  result = result.replace(
    /<meta\s+name="twitter:title"\s+content="[^"]*"\s*\/?>/,
    `<meta name="twitter:title" content="${escapeAttr(seo.title)}" />`
  );

  result = result.replace(
    /<meta\s+name="twitter:description"\s+content="[^"]*"\s*\/?>/,
    `<meta name="twitter:description" content="${escapeAttr(seo.description)}" />`
  );

  const canonicalTag = `<link rel="canonical" href="${escapeAttr(seo.canonical)}" />`;
  if (!result.includes('rel="canonical"')) {
    result = result.replace("</head>", `  ${canonicalTag}\n  </head>`);
  }

  if (seo.jsonLd && seo.jsonLd.length > 0) {
    const jsonLdScripts = seo.jsonLd
      .map((schema) => `<script type="application/ld+json">${JSON.stringify(schema)}</script>`)
      .join("\n    ");
    result = result.replace("</head>", `  ${jsonLdScripts}\n  </head>`);
  }

  const navHTML = getNavigationHTML();
  const blogListHTML = getBlogListHTML();

  let blogPostHTML = "";
  if (requestPath.startsWith("/blog/")) {
    const slug = requestPath.replace("/blog/", "").split("?")[0];
    const content = getBlogPostContent(slug);
    if (content) {
      blogPostHTML = `<article>${content}</article>`;
    }
  }

  const richContent = seo.richContent || "";

  const noscriptBlock = `
    <noscript>
      <div style="padding:20px;max-width:800px;margin:0 auto;font-family:sans-serif">
        <h1>${escapeHtml(seo.h1)}</h1>
        <p>${escapeHtml(seo.bodyExcerpt)}</p>
        ${richContent}
        ${blogPostHTML}
        <nav aria-label="Main Navigation">
          <p>${navHTML}</p>
        </nav>
        <section aria-label="Blog Articles">
          ${blogListHTML}
        </section>
        <footer>
          <p>&copy; Istanbul Bariatric Center. <a href="/contact">Contact Us</a> | <a href="/about">About</a> | <a href="/treatments">Treatments</a> | <a href="/blog">Blog</a></p>
        </footer>
      </div>
    </noscript>`;

  const crawlableBlock = `
    <div id="seo-content" style="position:absolute;width:1px;height:1px;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap">
      <h1>${escapeHtml(seo.h1)}</h1>
      <p>${escapeHtml(seo.bodyExcerpt)}</p>
      ${richContent}
      ${blogPostHTML}
      <nav aria-label="Site Navigation">
        ${navHTML}
      </nav>
      <section aria-label="Blog Articles">
        ${blogListHTML}
      </section>
    </div>`;

  result = result.replace(
    '<div id="root">',
    `${noscriptBlock}\n    ${crawlableBlock}\n    <div id="root">`
  );

  return result;
}

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function escapeAttr(str: string): string {
  return str.replace(/&/g, "&amp;").replace(/"/g, "&quot;");
}

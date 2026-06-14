import { getSEOData, getNavigationHTML, getBlogListHTML, getBlogPostContent } from "./seo-data";

export function injectSEO(html: string, requestPath: string): string {
  const seo = getSEOData(requestPath);
  if (!seo) {
    return html;
  }

  let result = html;

  const lang = seo.lang || "en";
  const dir = seo.dir || "ltr";

  result = result.replace(
    /<html\s[^>]*>/,
    `<html lang="${escapeAttr(lang)}"${dir === "rtl" ? ' dir="rtl"' : ""}>`
  );

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
    /<meta\s+property="og:locale"\s+content="[^"]*"\s*\/?>/,
    `<meta property="og:locale" content="${escapeAttr(seo.ogLocale || "en_US")}" />`
  );

  result = result.replace(
    /<meta\s+name="twitter:title"\s+content="[^"]*"\s*\/?>/,
    `<meta name="twitter:title" content="${escapeAttr(seo.title)}" />`
  );

  result = result.replace(
    /<meta\s+name="twitter:description"\s+content="[^"]*"\s*\/?>/,
    `<meta name="twitter:description" content="${escapeAttr(seo.description)}" />`
  );

  const productionImageUrl = "https://istanbulbariatriccenter.com/opengraph.jpg";
  const imageUrl = seo.image || productionImageUrl;
  result = result.replace(
    /<meta\s+property="og:image"\s+content="[^"]*"\s*\/?>/,
    `<meta property="og:image" content="${escapeAttr(imageUrl)}" />`
  );

  result = result.replace(
    /<meta\s+name="twitter:image"\s+content="[^"]*"\s*\/?>/,
    `<meta name="twitter:image" content="${escapeAttr(imageUrl)}" />`
  );

  if (seo.ogType) {
    result = result.replace(
      /<meta\s+property="og:type"\s+content="[^"]*"\s*\/?>/,
      `<meta property="og:type" content="${escapeAttr(seo.ogType)}" />`
    );
  }

  const canonicalTag = `<link rel="canonical" href="${escapeAttr(seo.canonical)}" />`;
  if (result.includes('rel="canonical"')) {
    result = result.replace(
      /<link\s+rel="canonical"\s+href="[^"]*"\s*\/?>/,
      canonicalTag
    );
  } else {
    result = result.replace("</head>", `  ${canonicalTag}\n  </head>`);
  }

  if (seo.publishedTime) {
    const articleTags = [
      `<meta property="article:published_time" content="${escapeAttr(seo.publishedTime)}" />`,
    ];
    if (seo.modifiedTime && seo.modifiedTime !== seo.publishedTime) {
      articleTags.push(`<meta property="article:modified_time" content="${escapeAttr(seo.modifiedTime)}" />`);
    }
    result = result.replace("</head>", `  ${articleTags.join("\n  ")}\n  </head>`);
  }

  if (seo.alternates && seo.alternates.length > 0) {
    const alternateTags = seo.alternates
      .map(
        (alt) =>
          `<link rel="alternate" hreflang="${escapeAttr(alt.hreflang)}" href="${escapeAttr(alt.href)}" />`
      )
      .join("\n  ");
    result = result.replace("</head>", `  ${alternateTags}\n  </head>`);
  }

  const baselineSchemas = [
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "@id": "https://istanbulbariatriccenter.com/#website",
      "name": "Istanbul Bariatric Center",
      "url": "https://istanbulbariatriccenter.com",
      "description": "World-class bariatric surgery in Istanbul, Turkey. Gastric sleeve, bypass, and weight loss procedures with Dr. Murat Ustun.",
      "publisher": {
        "@type": "Organization",
        "@id": "https://istanbulbariatriccenter.com/#organization",
        "name": "Istanbul Bariatric Center"
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "MedicalBusiness",
      "@id": "https://istanbulbariatriccenter.com/#organization",
      "name": "Istanbul Bariatric Center",
      "url": "https://istanbulbariatriccenter.com",
      "logo": "https://istanbulbariatriccenter.com/logo.webp",
      "telephone": ["+905324131143", "+447491068686"],
      "email": "drmuratustun@gmail.com",
      "address": { "@type": "PostalAddress", "addressLocality": "Istanbul", "addressCountry": "TR" },
      "medicalSpecialty": "Bariatric Surgery",
      "priceRange": "£1,650 - £5,950",
      "aggregateRating": { "@type": "AggregateRating", "ratingValue": "4.9", "reviewCount": "850", "bestRating": "5" },
      "sameAs": [
        "https://www.facebook.com/istanbulbariatriccenter",
        "https://www.instagram.com/istanbulbariatriccenter",
        "https://www.youtube.com/@istanbulbariatriccenter"
      ]
    }
  ];

  const allSchemas = [...baselineSchemas, ...(seo.jsonLd || [])];
  const jsonLdScripts = allSchemas
    .map((schema) => `<script type="application/ld+json">${JSON.stringify(schema)}</script>`)
    .join("\n    ");
  result = result.replace("</head>", `  ${jsonLdScripts}\n  </head>`);

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
        <h2>${escapeHtml(seo.h1)}</h2>
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

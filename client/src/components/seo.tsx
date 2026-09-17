import { useEffect } from "react";
import { useTranslation } from "react-i18next";

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: "website" | "article";
  publishedTime?: string;
  modifiedTime?: string;
  author?: string;
}

const SITE_NAME = "Istanbul Bariatric Center";
const BASE_URL = "https://istanbulbariatriccenter.com";
const DEFAULT_IMAGE = "https://istanbulbariatriccenter.com/opengraph.webp";

export function SEO({
  title,
  description,
  keywords,
  image = DEFAULT_IMAGE,
  url = "",
  type = "website",
  publishedTime,
  modifiedTime,
  author = "Dr. Murat Ustun",
}: SEOProps) {
  const { i18n } = useTranslation();
  const currentLang = i18n.language || "en";
  const baseUrl = url ? `${BASE_URL}${url}` : BASE_URL;
  const fullTitle = `${title} | ${SITE_NAME}`;
  const absoluteImage = image.startsWith("/") ? `${BASE_URL}${image}` : image;

  useEffect(() => {
    document.title = fullTitle;
    document.documentElement.lang = currentLang;
    if (currentLang === "ar") {
      document.documentElement.dir = "rtl";
    } else {
      document.documentElement.dir = "ltr";
    }

    const setMeta = (name: string, content: string, isProperty = false) => {
      const attr = isProperty ? "property" : "name";
      let meta = document.querySelector(`meta[${attr}="${name}"]`);
      if (!meta) {
        meta = document.createElement("meta");
        meta.setAttribute(attr, name);
        document.head.appendChild(meta);
      }
      meta.setAttribute("content", content);
    };

    const setLink = (rel: string, href: string, hreflang?: string) => {
      const selector = hreflang 
        ? `link[rel="${rel}"][hreflang="${hreflang}"]`
        : `link[rel="${rel}"]:not([hreflang])`;
      let link = document.querySelector(selector);
      if (!link) {
        link = document.createElement("link");
        link.setAttribute("rel", rel);
        if (hreflang) link.setAttribute("hreflang", hreflang);
        document.head.appendChild(link);
      }
      link.setAttribute("href", href);
    };

    setMeta("description", description);
    setMeta("author", author);
    setMeta("robots", "index, follow");

    setMeta("og:title", fullTitle, true);
    setMeta("og:description", description, true);
    setMeta("og:image", absoluteImage, true);
    setMeta("og:image:width", "1200", true);
    setMeta("og:image:height", "630", true);
    setMeta("og:image:alt", title, true);
    setMeta("og:url", baseUrl, true);
    setMeta("og:type", type, true);
    setMeta("og:site_name", SITE_NAME, true);
    setMeta("og:locale", currentLang, true);

    setMeta("twitter:card", "summary_large_image");
    setMeta("twitter:title", fullTitle);
    setMeta("twitter:description", description);
    setMeta("twitter:image", absoluteImage);
    setMeta("twitter:image:alt", title);
    setMeta("twitter:site", "@IstanbulBariatr");
    setMeta("twitter:creator", "@DrMuratUstun");

    if (type === "article" && publishedTime) {
      setMeta("article:published_time", publishedTime, true);
      if (modifiedTime) {
        setMeta("article:modified_time", modifiedTime, true);
      }
      setMeta("article:author", author, true);
      setMeta("article:section", "Health", true);
      setMeta("article:tag", "bariatric surgery", true);
    }

    setLink("canonical", baseUrl);

    return () => {
    };
  }, [fullTitle, description, keywords, absoluteImage, baseUrl, type, publishedTime, modifiedTime, author, currentLang]);

  return null;
}

interface JsonLdProps {
  data: object;
}

export function JsonLd({ data }: JsonLdProps) {
  useEffect(() => {
    const dataStr = JSON.stringify(data);
    const d = data as { "@type"?: string; "@graph"?: unknown[] };
    const schemaType = d["@type"] || (Array.isArray(d["@graph"]) ? "graph" : "unknown");
    const scriptId = `jsonld-${schemaType}-${dataStr.length}`;

    const existingScripts = document.head.querySelectorAll('script[type="application/ld+json"]');
    existingScripts.forEach((existing) => {
      try {
        const parsed = JSON.parse(existing.textContent || "");
        const existingType = parsed["@type"] || (Array.isArray(parsed["@graph"]) ? "graph" : "unknown");
        if (existingType === schemaType && !existing.id) {
          existing.remove();
        }
      } catch {}
    });
    
    const existingScript = document.getElementById(scriptId) as HTMLScriptElement | null;
    if (existingScript) {
      existingScript.textContent = dataStr;
    } else {
      const script = document.createElement("script");
      script.type = "application/ld+json";
      script.textContent = dataStr;
      script.id = scriptId;
      document.head.appendChild(script);
    }

    return () => {
      const scriptToRemove = document.getElementById(scriptId);
      if (scriptToRemove) {
        scriptToRemove.remove();
      }
    };
  }, [data]);

  return null;
}

export const structuredData = {
  medicalBusiness: {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    "@id": "https://istanbulbariatriccenter.com/#organization",
    name: "Istanbul Bariatric Center",
    alternateName: "IBC",
    url: "https://istanbulbariatriccenter.com",
    logo: "https://istanbulbariatriccenter.com/logo.webp",
    image: DEFAULT_IMAGE,
    description: "Leading bariatric surgery center in Istanbul, Turkey offering gastric sleeve, gastric bypass, and other weight loss procedures with world-class care.",
    telephone: "+905324131143",
    email: "drmuratustun@gmail.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Ayazağa Mahallesi, Kemerburgaz Caddesi, Vadistanbul Park Etabı, 7F Blok",
      addressLocality: "Sarıyer",
      addressRegion: "İstanbul",
      postalCode: "34396",
      addressCountry: "TR",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 41.1089,
      longitude: 29.0123,
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      opens: "00:00",
      closes: "23:59",
    },
    priceRange: "$$",
    medicalSpecialty: ["Bariatric Surgery", "Weight Loss Surgery", "Metabolic Surgery"],
    founder: {
      "@type": "Physician",
      "@id": "https://istanbulbariatriccenter.com/#drmuratustun",
      name: "Dr Murat Ustun",
      url: "https://istanbulbariatriccenter.com/dr-murat-ustun",
    },
    areaServed: [
      "United Kingdom", "Ireland", "United States", "Germany", "Australia", "France",
      "Spain", "Italy", "Netherlands", "Saudi Arabia", "United Arab Emirates",
    ].map((name) => ({ "@type": "Country", name })),
    hasCredential: [
      { "@type": "EducationalOccupationalCredential", credentialCategory: "Accreditation", name: "JCI (Joint Commission International) Accredited Hospital", url: "https://www.jointcommissioninternational.org/" },
      { "@type": "EducationalOccupationalCredential", credentialCategory: "Membership", name: "IFSO Member Institution" },
    ],
    availableService: [
      { "@type": "MedicalProcedure", name: "Gastric Sleeve Surgery" },
      { "@type": "MedicalProcedure", name: "Gastric Bypass Surgery" },
      { "@type": "MedicalProcedure", name: "Gastric Balloon" },
      { "@type": "MedicalProcedure", name: "Duodenal Switch" },
      { "@type": "MedicalProcedure", name: "Endoscopic Sleeve Gastroplasty" },
    ],
    sameAs: [
      "https://www.facebook.com/istanbulbariatriccenter",
      "https://www.instagram.com/istanbulbariatriccenter",
      "https://www.youtube.com/@istanbulbariatriccenter",
    ],
  },

  physician: {
    "@context": "https://schema.org",
    "@type": "Physician",
    "@id": "https://istanbulbariatriccenter.com/#drmuratustun",
    name: "Dr Murat Üstün",
    alternateName: "Dr Murat Ustun",
    honorificPrefix: "Op. Dr",
    honorificSuffix: ["MD", "PhD"],
    jobTitle: "Consultant Bariatric & Metabolic Surgeon",
    medicalSpecialty: ["Bariatric Surgery", "Metabolic Surgery", "Endoscopic Weight Loss"],
    url: "https://istanbulbariatriccenter.com/dr-murat-ustun",
    image: "https://istanbulbariatriccenter.com/dr-murat-ustun.webp",
    worksFor: { "@id": "https://istanbulbariatriccenter.com/#organization" },
    hospitalAffiliation: [
      { "@type": "Hospital", name: "Liv Hospital Vadistanbul", address: "Ayazağa, Kemerburgaz Cd., Vadistanbul, 34396 Sarıyer/İstanbul, Turkey" },
      { "@type": "Hospital", name: "Memorial Hospitals Group" },
    ],
    memberOf: [
      { "@type": "Organization", name: "BOMSS — British Obesity & Metabolic Surgery Society" },
      { "@type": "Organization", name: "IFSO — International Federation for the Surgery of Obesity and Metabolic Disorders" },
      { "@type": "Organization", name: "International Bariatric Club" },
    ],
    award: [
      "WhatClinic Patient Service Award 2019",
      "WhatClinic Patient Service Award 2020",
      "WhatClinic Patient Service Award 2021",
      "WhatClinic Patient Service Award 2023",
      "WhatClinic Patient Service Award 2024",
      "WhatClinic Patient Service Award 2025",
    ],
    knowsAbout: [
      "Sleeve Gastrectomy", "Gastric Bypass", "Gastric Balloon", "Endoscopic Sleeve Gastroplasty (ESG)",
      "POSE-2", "TORe", "GFMA", "Duodenal Switch", "Transit Bipartition", "Revision Bariatric Surgery",
    ],
    sameAs: [
      "https://drmuratustun.com/",
      "https://www.linkedin.com/in/drmuratustun/",
      "https://x.com/DrMuratUstun",
      "https://www.youtube.com/@istanbulbariatriccenter",
      "https://www.instagram.com/istanbulbariatriccenter",
      "https://www.whatclinic.com/bariatric-surgery/turkey/istanbul-province/istanbul/nisantasi/istanbul-bariatric-center",
      "https://us-uk.bookimed.com/doctor/murat-ustun/",
      "https://medtraveling.com/doctors/murat-ustun",
      "https://airomedical.com/doctors/dr-murat-ustun",
      "https://medigence.com/doctor/bariatric-surgeon/murat-ustun",
      "https://www.placidway.com/doctor-detail/57635/Murat-Ustun",
      "https://apolloendosleeve.com/team-2",
      "https://itmtgroup.com/our-doctors/op-dr-murat-ustun/",
    ],
  },

  createArticle: (post: { title: string; excerpt: string; date: string; publishedAt?: string; updatedAt?: string; slug: string; image: string }) => ({
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    image: post.image,
    datePublished: post.publishedAt || post.date,
    dateModified: post.updatedAt || post.publishedAt || post.date,
    author: {
      "@type": "Person",
      "@id": "https://istanbulbariatriccenter.com/#drmuratustun",
      name: "Dr. Murat Ustun",
      url: "https://istanbulbariatriccenter.com/dr-murat-ustun",
    },
    publisher: {
      "@type": "Organization",
      name: "Istanbul Bariatric Center",
      logo: {
        "@type": "ImageObject",
        url: "https://istanbulbariatriccenter.com/logo.webp",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://istanbulbariatriccenter.com/blog/${post.slug}`,
    },
  }),

  createFAQ: (faqs: { question: string; answer: string }[]) => ({
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  }),

  createBreadcrumb: (items: { name: string; url: string }[]) => ({
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `https://istanbulbariatriccenter.com${item.url}`,
    })),
  }),

  website: {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://istanbulbariatriccenter.com/#website",
    name: "Istanbul Bariatric Center",
    url: "https://istanbulbariatriccenter.com",
    description: "World-class bariatric surgery in Istanbul, Turkey. Gastric sleeve, bypass, and weight loss procedures with Dr. Murat Ustun.",
    publisher: {
      "@type": "Organization",
      name: "Istanbul Bariatric Center",
      url: "https://istanbulbariatriccenter.com"
    }
  },
};

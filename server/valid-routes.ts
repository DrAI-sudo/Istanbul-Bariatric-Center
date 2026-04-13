import { getAllBlogSlugs } from "./seo-data";

export const VALID_STATIC_ROUTES = [
  "/",
  "/about",
  "/treatments",
  "/treatments/tr",
  "/treatments/es",
  "/treatments/de",
  "/treatments/fr",
  "/treatments/it",
  "/treatments/ro",
  "/treatments/ru",
  "/treatments/ar",
  "/results",
  "/blog",
  "/contact",
  "/sleeve-gastrectomy",
  "/mini-gastric-bypass",
  "/gastric-balloon",
  "/duodenal-switch",
  "/transit-bipartition",
  "/esg",
  "/esg/uk",
  "/esg/de",
  "/esg/fr",
  "/esg/es",
  "/esg/nl",
  "/esg/ar",
  "/esg/it",
  "/esg/ru",
  "/esg/ro",
  "/esg/se",
  "/esg/pl",
  "/esg/dk",
  "/esg/no",
  "/esg/hu",
  "/esg/fi",
  "/esg/ca",
  "/esg/us",
  "/esg/anz",
  "/esg/az",
  "/post-bariatric-surgery",
  "/insurance",
  "/health-profile",
  "/bariatric-surgery-turkey-guide",
];

export function isValidRoute(path: string): boolean {
  let cleanPath = path.split("?")[0];

  if (cleanPath !== "/" && cleanPath.endsWith("/")) {
    cleanPath = cleanPath.slice(0, -1);
  }

  if (VALID_STATIC_ROUTES.includes(cleanPath)) {
    return true;
  }

  if (cleanPath === "/admin") {
    return true;
  }

  if (cleanPath.startsWith("/blog/")) {
    const slug = cleanPath.replace("/blog/", "");
    return getAllBlogSlugs().includes(slug);
  }

  return false;
}

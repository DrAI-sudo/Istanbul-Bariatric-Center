import { getAllBlogSlugs } from "./seo-data";

export const VALID_STATIC_ROUTES = [
  "/",
  "/about",
  "/treatments",
  "/results",
  "/blog",
  "/contact",
  "/sleeve-gastrectomy",
  "/mini-gastric-bypass",
  "/gastric-balloon",
  "/duodenal-switch",
  "/transit-bipartition",
  "/esg",
  "/post-bariatric-surgery",
  "/insurance",
  "/health-profile",
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

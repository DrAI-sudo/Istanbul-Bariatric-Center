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
];

export const VALID_BLOG_SLUGS = [
  "gastric-fundus-mucosal-ablation-gfma-latest-news",
  "scientific-blind-alleys-dietary-fat-sugar-freud-and-adler",
  "minimizer-ring",
  "five-high-cholesterol-foods-you-should-eat-and-which-ones-to-avoid",
  "weight-loss-treatments-a-holistic-comparison",
  "gastric-fundus-ablation-explained",
  "could-weight-loss-injections-replace-obesity-surgery",
  "body-roundness-index-bri",
  "ultra-processed-foods-and-their-impact-on-your-health",
  "comparing-bariatric-surgery-and-endoscopic-sleeve-gastroplasty",
  "5-things-you-didnt-know-about-bariatric-surgery",
  "bariatric-surgery-guidelines-updated",
  "barretts-esophagus-and-increased-risk-after-sleeve-gastrectomy",
  "comprehensive-guide-to-preoperative-medication-management",
  "leaks-in-bariatric-surgery",
  "obesity-and-cancer-risk",
  "15-most-nutrient-dense-foods",
  "bariatric-surgery-nutrition",
  "leptin-hormone-in-obesity-treatment",
  "bariatric-surgery-pros-and-cons",
  "endoscopic-sleeve-gastroplasty-vs-gastric-sleeve",
  "endoscopic-sleeve-gastroplasty-long-term-results",
  "endo-band-novel-endoscopic-approach",
  "vitamin-mineral-deficiencies-after-gastric-bypass",
  "bariatric-surgery-as-safe-as-other-common-operations",
  "grazing-after-bariatric-surgery",
  "bariatric-friendly-christmas-dinner-ideas",
  "endoscopic-sleeve-gastroplasty-in-class-iii-obesity",
  "pose-endoscopic-sleeve-gastroplasty",
  "endoscopic-sleeve-gastroplasty-game-changer",
  "fatty-liver-increases-in-adolescents",
  "bariatric-surgery-18-frequently-asked-questions",
  "melatonin-sleep-glucose-metabolism",
  "argon-plasma-coagulation-weight-regain",
  "revisional-bariatric-surgery-in-turkey",
  "marmite-rich-resource-of-vitamin-b",
  "ozempic-medical-treatment-of-obesity",
  "bariclip",
  "elipse-swallowable-intragastric-balloon",
  "transit-bipartition-revision-alternative",
  "bariatric-preoperative-diet",
  "obese-adults-covid-vaccine-priority",
  "why-istanbul-is-an-important-location-for-obesity-surgery",
  "bariatric-surgery-during-covid-19-pandemic",
  "nutrition-tips-during-self-quarantine-covid-19",
];

export function isValidRoute(path: string): boolean {
  const cleanPath = path.split("?")[0];
  
  if (VALID_STATIC_ROUTES.includes(cleanPath)) {
    return true;
  }
  
  if (cleanPath.startsWith("/blog/")) {
    const slug = cleanPath.replace("/blog/", "");
    return VALID_BLOG_SLUGS.includes(slug);
  }
  
  return false;
}

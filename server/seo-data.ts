const SITE_URL = "https://istanbulbariatriccenter.com";

interface PageSEO {
  title: string;
  description: string;
  h1: string;
  bodyExcerpt: string;
  canonical: string;
}

const staticPages: Record<string, PageSEO> = {
  "/": {
    title: "Istanbul Bariatric Center - Weight Loss Surgery in Turkey",
    description: "World-class gastric sleeve, gastric bypass & bariatric surgery in Turkey. 8,000+ successful surgeries. JCI accredited. Free consultation.",
    h1: "Istanbul Bariatric Center - Weight Loss Surgery in Turkey",
    bodyExcerpt: "Istanbul Bariatric Center offers world-class bariatric surgery in Turkey with over 8,000 successful procedures. Led by Dr. Murat Ustun, our JCI-accredited hospital provides VIP all-inclusive packages for gastric sleeve, gastric bypass, gastric balloon, ESG, and revision surgery. Award-winning service from £2,250 with airport transfers, luxury hotel, and aftercare included.",
    canonical: SITE_URL + "/",
  },
  "/about": {
    title: "About Us - Istanbul Bariatric Center | Dr. Murat Ustun",
    description: "About Istanbul Bariatric Center, led by Dr. Murat Ustun. 8,000+ successful bariatric surgeries. IFSO member, JCI accredited Liv Hospital.",
    h1: "About Istanbul Bariatric Center",
    bodyExcerpt: "Istanbul Bariatric Center is led by Dr. Murat Ustun, an experienced bariatric surgeon and member of IFSO. Operating at JCI-accredited Liv Hospital in Istanbul, our multidisciplinary team includes specialist surgeons, dietitians, and patient coordinators dedicated to providing world-class weight loss surgery with personalized VIP care.",
    canonical: SITE_URL + "/about",
  },
  "/treatments": {
    title: "Weight Loss Surgery Treatments - Istanbul Bariatric Center",
    description: "Bariatric surgery procedures: Gastric Sleeve, Mini Gastric Bypass, Gastric Balloon, ESG, Transit Bipartition & Duodenal Switch in Istanbul.",
    h1: "Our Weight Loss Surgery Treatments",
    bodyExcerpt: "Istanbul Bariatric Center offers a comprehensive range of bariatric and metabolic surgery procedures including Gastric Sleeve (VSG), Mini Gastric Bypass (MGB), Gastric Balloon, Endoscopic Sleeve Gastroplasty (ESG), Transit Bipartition, Duodenal Switch, and Post-Bariatric Body Contouring. Each procedure is tailored to the patient's BMI, health conditions, and weight loss goals.",
    canonical: SITE_URL + "/treatments",
  },
  "/results": {
    title: "Patient Results & Testimonials - Istanbul Bariatric Center",
    description: "Real patient results and testimonials from Istanbul Bariatric Center. Before and after weight loss surgery transformations.",
    h1: "Patient Results & Testimonials",
    bodyExcerpt: "View real patient results and testimonials from Istanbul Bariatric Center. Our patients share their weight loss journeys and transformations after gastric sleeve, gastric bypass, and other bariatric procedures. Over 8,000 successful surgeries with verified 5-star reviews on WhatClinic.",
    canonical: SITE_URL + "/results",
  },
  "/blog": {
    title: "Bariatric Surgery Blog - Istanbul Bariatric Center",
    description: "Read the latest articles about bariatric surgery, weight loss, nutrition, and obesity treatment from Istanbul Bariatric Center's medical experts.",
    h1: "Bariatric Surgery Blog",
    bodyExcerpt: "Stay informed with the latest articles and research about bariatric surgery, weight loss treatments, nutrition guidance, and obesity management from Istanbul Bariatric Center. Our medical team shares expert insights on gastric sleeve, gastric bypass, ESG, and more.",
    canonical: SITE_URL + "/blog",
  },
  "/contact": {
    title: "Contact Us - Istanbul Bariatric Center | Free Consultation",
    description: "Contact Istanbul Bariatric Center for a free weight loss surgery consultation. Reach Dr. Murat Ustun's team via phone, email, or WhatsApp.",
    h1: "Contact Istanbul Bariatric Center",
    bodyExcerpt: "Get in touch with Istanbul Bariatric Center for a free, no-obligation weight loss surgery consultation. Our patient coordinators are available via phone, email, and WhatsApp to answer your questions about gastric sleeve, gastric bypass, and other bariatric procedures in Istanbul, Turkey.",
    canonical: SITE_URL + "/contact",
  },
  "/sleeve-gastrectomy": {
    title: "Gastric Sleeve Surgery in Turkey - Istanbul Bariatric Center",
    description: "Gastric Sleeve (VSG) surgery in Istanbul, Turkey. 60-70% excess weight loss. Laparoscopic procedure by Dr. Murat Ustun. VIP packages.",
    h1: "Gastric Sleeve Surgery (Sleeve Gastrectomy)",
    bodyExcerpt: "Gastric Sleeve Surgery (Vertical Sleeve Gastrectomy) at Istanbul Bariatric Center removes approximately 80% of the stomach, creating a banana-shaped sleeve. This laparoscopic procedure typically results in 60-70% excess weight loss within 12-18 months. Performed by Dr. Murat Ustun at JCI-accredited Liv Hospital with all-inclusive VIP packages.",
    canonical: SITE_URL + "/sleeve-gastrectomy",
  },
  "/mini-gastric-bypass": {
    title: "Mini Gastric Bypass Surgery in Turkey - Istanbul Bariatric Center",
    description: "Mini Gastric Bypass (One Anastomosis Gastric Bypass) surgery in Istanbul. Effective weight loss with metabolic benefits. Expert care by Dr. Murat Ustun.",
    h1: "Mini Gastric Bypass Surgery",
    bodyExcerpt: "Mini Gastric Bypass (One Anastomosis Gastric Bypass) at Istanbul Bariatric Center is a simplified version of the traditional Roux-en-Y bypass. This procedure creates a long, narrow gastric pouch and connects it to the small intestine, combining restrictive and malabsorptive mechanisms for effective weight loss and diabetes resolution.",
    canonical: SITE_URL + "/mini-gastric-bypass",
  },
  "/gastric-balloon": {
    title: "Gastric Balloon in Turkey - Istanbul Bariatric Center",
    description: "Non-surgical Gastric Balloon weight loss procedure in Istanbul. Temporary, reversible solution for moderate weight loss. No incisions required.",
    h1: "Gastric Balloon",
    bodyExcerpt: "The Gastric Balloon at Istanbul Bariatric Center is a non-surgical, temporary weight loss solution. A deflated silicone balloon is placed endoscopically into the stomach and filled with saline, reducing stomach capacity and promoting early satiety. Ideal for patients with BMI 27-35 who prefer a non-surgical approach.",
    canonical: SITE_URL + "/gastric-balloon",
  },
  "/duodenal-switch": {
    title: "Duodenal Switch Surgery in Turkey - Istanbul Bariatric Center",
    description: "Duodenal Switch (BPD/DS) surgery in Istanbul for severe obesity. Highest long-term weight loss results. Expert bariatric care with Dr. Murat Ustun.",
    h1: "Duodenal Switch Surgery",
    bodyExcerpt: "Duodenal Switch (Biliopancreatic Diversion with Duodenal Switch) at Istanbul Bariatric Center is one of the most effective bariatric procedures for severe obesity. It combines a sleeve gastrectomy with intestinal bypass, providing the highest long-term excess weight loss of any bariatric procedure, typically 70-80%.",
    canonical: SITE_URL + "/duodenal-switch",
  },
  "/transit-bipartition": {
    title: "Transit Bipartition Surgery in Turkey - Istanbul Bariatric Center",
    description: "Transit Bipartition (TB) surgery in Istanbul. A modern alternative combining sleeve gastrectomy with metabolic benefits. Excellent for revision surgery.",
    h1: "Transit Bipartition Surgery",
    bodyExcerpt: "Transit Bipartition at Istanbul Bariatric Center is a modern bariatric procedure that combines sleeve gastrectomy with a partial intestinal bypass. It enhances metabolic outcomes while preserving natural digestive flow. Particularly effective as a revision option when sleeve gastrectomy alone has not achieved desired results.",
    canonical: SITE_URL + "/transit-bipartition",
  },
  "/esg": {
    title: "Endoscopic Sleeve Gastroplasty (ESG) in Turkey - Istanbul Bariatric Center",
    description: "ESG (Endoscopic Sleeve Gastroplasty) - non-surgical stomach reduction in Istanbul. No incisions, faster recovery. NICE approved.",
    h1: "Endoscopic Sleeve Gastroplasty (ESG)",
    bodyExcerpt: "Endoscopic Sleeve Gastroplasty (ESG) at Istanbul Bariatric Center is a minimally invasive, incisionless procedure that reduces stomach volume by up to 70% using endoscopic suturing. NICE approved for primary obesity treatment, ESG offers faster recovery, lower risk, and effective weight loss for patients seeking a non-surgical option.",
    canonical: SITE_URL + "/esg",
  },
  "/post-bariatric-surgery": {
    title: "Post Bariatric Body Contouring Surgery - Istanbul Bariatric Center",
    description: "Post bariatric body contouring surgery in Istanbul. Tummy tuck, arm lift, thigh lift, breast lift after major weight loss. Complete your transformation.",
    h1: "Post Bariatric Body Contouring Surgery",
    bodyExcerpt: "Post Bariatric Body Contouring at Istanbul Bariatric Center helps patients complete their weight loss transformation. After significant weight loss from bariatric surgery, excess skin can be removed through procedures including tummy tuck (abdominoplasty), arm lift, thigh lift, breast lift, and body lift.",
    canonical: SITE_URL + "/post-bariatric-surgery",
  },
  "/insurance": {
    title: "Insurance & Finance Options - Istanbul Bariatric Center",
    description: "Insurance and financing options for bariatric surgery at Istanbul Bariatric Center. Affordable payment plans and packages.",
    h1: "Insurance & Finance Options",
    bodyExcerpt: "Istanbul Bariatric Center offers various insurance and financing options to make weight loss surgery accessible and affordable. Explore medical tourism packages, payment plans, and insurance coverage options for gastric sleeve, gastric bypass, and other bariatric procedures in Turkey.",
    canonical: SITE_URL + "/insurance",
  },
};

interface BlogPostSEO {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
}

const blogPosts: BlogPostSEO[] = [
  { slug: "gastric-fundus-mucosal-ablation-gfma-latest-news", title: "Gastric Fundus Mucosal Ablation (GFMA) Latest News", excerpt: "GFMA: A New Era in Non-Surgical Weight Loss. Recent studies suggest an endoscopic procedure could curb hunger and achieve surgical-level weight loss without any incisions.", date: "May 11, 2025" },
  { slug: "scientific-blind-alleys-dietary-fat-sugar-freud-and-adler", title: "Scientific Blind Alleys: Dietary Fat, Sugar, Freud, and Adler", excerpt: "How Two Historic Health Myths Shaped Today's Obesity Crisis — and How We Can Fix It.", date: "April 26, 2025" },
  { slug: "minimizer-ring", title: "Minimizer Ring: What is it and what is it used for?", excerpt: "The MiniMIZER® Ring in Bariatric Surgery: Enhancing Outcomes in Primary and Revisional Procedures.", date: "April 19, 2025" },
  { slug: "five-high-cholesterol-foods-you-should-eat-and-which-ones-to-avoid", title: "Five High-Cholesterol Foods You Should Eat – and Which Ones to Avoid", excerpt: "New research reveals that not all cholesterol-rich foods are bad for you. A cardiologist helps explain what to eat and what to skip.", date: "April 17, 2025" },
  { slug: "weight-loss-treatments-a-holistic-comparison", title: "Weight Loss Treatments: A Holistic Comparison", excerpt: "Weight loss treatments broadening every day with new medications, revolutionary endoscopic methods and different variations of surgical options.", date: "December 31, 2024" },
  { slug: "gastric-fundus-ablation-explained", title: "Gastric Fundus Ablation Explained", excerpt: "Revolutionizing Endoscopic Weight Loss Method. A groundbreaking, minimally invasive procedure offering new hope for sustainable weight loss.", date: "December 17, 2024" },
  { slug: "could-weight-loss-injections-replace-obesity-surgery", title: "Could Weight Loss Injections Replace Obesity Surgery?", excerpt: "Weight loss injections, particularly GLP-1 analogs such as semaglutide and tirzepatide, are revolutionizing the treatment of obesity.", date: "November 18, 2024" },
  { slug: "body-roundness-index-bri", title: "Body Roundness Index (BRI)", excerpt: "Body Roundness Index, is it the New BMI? What it Says About Your Health.", date: "November 11, 2024" },
  { slug: "ultra-processed-foods-and-their-impact-on-your-health", title: "Ultra-processed Foods and Their Impact on Your Health", excerpt: "Understanding Ultra-Processed Foods: A Deep Dive into Our Daily Diet.", date: "November 9, 2024" },
  { slug: "comparing-bariatric-surgery-and-endoscopic-sleeve-gastroplasty", title: "Comparing Bariatric Surgery and Endoscopic Sleeve Gastroplasty", excerpt: "Making an Informed Choice for Weight Loss. Understanding the differences between bariatric surgery and ESG is crucial.", date: "November 7, 2024" },
  { slug: "5-things-you-didnt-know-about-bariatric-surgery", title: "5 Things You Didn't Know About Bariatric Surgery", excerpt: "Five Things You May Not Know About Bariatric Surgery.", date: "November 7, 2024" },
  { slug: "bariatric-surgery-guidelines-updated", title: "Bariatric Surgery Guidelines Updated", excerpt: "Updated Guidelines on Bariatric Surgery: A Comprehensive Overview.", date: "November 7, 2024" },
  { slug: "barretts-esophagus-and-increased-risk-after-sleeve-gastrectomy", title: "Barrett's Esophagus and Increased Risk After Sleeve Gastrectomy", excerpt: "Barrett's Esophagus is a serious consequence of long term acid reflux. Recent research reveals important findings about risk factors after sleeve gastrectomy.", date: "July 30, 2024" },
  { slug: "comprehensive-guide-to-preoperative-medication-management", title: "Comprehensive Guide to Preoperative Medication Management", excerpt: "Proper medication management before bariatric surgery is crucial for ensuring your safety and optimizing surgical outcomes.", date: "July 24, 2024" },
  { slug: "leaks-in-bariatric-surgery", title: "Leaks in Bariatric Surgery", excerpt: "Understanding the Risks of Gastrointestinal Leaks in Bariatric Surgery.", date: "July 16, 2024" },
  { slug: "obesity-and-cancer-risk", title: "Obesity and Cancer Risk", excerpt: "Each year, over 684,000 Americans are diagnosed with cancers linked to obesity.", date: "July 1, 2024" },
  { slug: "15-most-nutrient-dense-foods", title: "15 Most Nutrient-Dense Foods", excerpt: "Simplify Your Diet, Improve Nutrition, and Reduce Calories.", date: "June 18, 2024" },
  { slug: "bariatric-surgery-nutrition", title: "Bariatric Surgery Nutrition", excerpt: "Comprehensive Bariatric Surgery Nutrition and Recovery Guide based on 2024 guidelines for optimal outcomes and long-term success.", date: "June 6, 2024" },
  { slug: "leptin-hormone-in-obesity-treatment", title: "Leptin Hormone in Obesity Treatment", excerpt: "How the Human Body Stores Energy, Hormones' Effect on Metabolism.", date: "May 11, 2024" },
  { slug: "bariatric-surgery-pros-and-cons", title: "Bariatric Surgery Pros and Cons", excerpt: "Bariatric Surgery: Weighing the Pros and Cons – Is It Right for You?", date: "May 7, 2024" },
  { slug: "endoscopic-sleeve-gastroplasty-vs-gastric-sleeve", title: "Endoscopic Sleeve Gastroplasty vs Gastric Sleeve", excerpt: "Comparing VSG and ESG: Traditional Gastric Sleeve vs. Endoscopic Sleeve.", date: "April 30, 2024" },
  { slug: "endoscopic-sleeve-gastroplasty-long-term-results", title: "Endoscopic Sleeve Gastroplasty Long Term Results", excerpt: "Endoscopic Sleeve Gastroplasty: A Long-Term Solution for Weight Loss?", date: "April 22, 2024" },
  { slug: "endo-band-novel-endoscopic-approach", title: "Endo Band: A Novel Endoscopic Approach for Weight Loss", excerpt: "The Endo Band offers a less invasive alternative to traditional surgery, representing the latest innovation in endoscopic bariatric procedures.", date: "April 4, 2024" },
  { slug: "vitamin-mineral-deficiencies-after-gastric-bypass", title: "Vitamin and Mineral Deficiencies After Gastric Bypass", excerpt: "How to Avoid Vitamin and Mineral Deficiencies After Gastric Bypass Surgery.", date: "March 30, 2024" },
  { slug: "bariatric-surgery-as-safe-as-other-common-operations", title: "Bariatric Surgery as Safe as Other Common Operations", excerpt: "A comprehensive analysis comparing the safety of metabolic and bariatric surgery.", date: "February 25, 2024" },
  { slug: "grazing-after-bariatric-surgery", title: "Grazing After Bariatric Surgery", excerpt: "One of the most common challenges that bariatric patients face is grazing.", date: "February 3, 2024" },
  { slug: "bariatric-friendly-christmas-dinner-ideas", title: "Bariatric-Friendly Christmas Dinner Ideas", excerpt: "The holiday season is a time for joy, family, and delicious food. Discover 9 delicious bariatric-friendly recipes perfect for your Christmas celebration.", date: "December 22, 2023" },
  { slug: "endoscopic-sleeve-gastroplasty-in-class-iii-obesity", title: "Endoscopic Sleeve Gastroplasty in Class III Obesity", excerpt: "New Study Revealed ESG's Safety and Efficacy in Class III Obesity.", date: "November 3, 2023" },
  { slug: "pose-endoscopic-sleeve-gastroplasty", title: "POSE Endoscopic Sleeve Gastroplasty in the Treatment of Obesity", excerpt: "Are you struggling with obesity and looking for a less invasive weight loss solution?", date: "October 12, 2023" },
  { slug: "endoscopic-sleeve-gastroplasty-game-changer", title: "Endoscopic Sleeve Gastroplasty: A Game-Changer in Obesity Treatment", excerpt: "NICE Approves Endoscopic Sleeve Gastroplasty for Primary Obesity Treatment.", date: "September 14, 2023" },
  { slug: "fatty-liver-increases-in-adolescents", title: "Fatty Liver Increases In Adolescents", excerpt: "Chronic choline deficiency in diets can lead to fatty liver.", date: "August 25, 2023" },
  { slug: "bariatric-surgery-18-frequently-asked-questions", title: "Bariatric Surgery 18 Frequently Asked Questions", excerpt: "Every medical procedure involves inherent risks.", date: "June 24, 2023" },
  { slug: "melatonin-sleep-glucose-metabolism", title: "Melatonin: Sleep, Glucose Metabolism, and Late-Night Eating Habits", excerpt: "Melatonin has garnered significant attention due to its potential impact on glucose metabolism.", date: "May 28, 2023" },
  { slug: "argon-plasma-coagulation-weight-regain", title: "Argon Plasma Coagulation: An Effective Solution for Weight Regain", excerpt: "Around 20% of obese patients who undergo RYGB fail to sustain weight loss.", date: "April 27, 2023" },
  { slug: "revisional-bariatric-surgery-in-turkey", title: "Revisional Bariatric Surgery in Turkey!", excerpt: "Revisional bariatric surgery is performed on individuals who have previously undergone bariatric surgery.", date: "September 4, 2022" },
  { slug: "marmite-rich-resource-of-vitamin-b", title: "Marmite, A Rich Resource of Vitamin B", excerpt: "Unveiling the Marvels of Marmite: Ingredients, Usage, Recipes, Health Benefits.", date: "July 12, 2022" },
  { slug: "ozempic-medical-treatment-of-obesity", title: "Ozempic: No 1 Best Medical Treatment of Obesity", excerpt: "Ozempic is a weekly injection of Semaglutide and advisable for the first line treatment option for weight loss.", date: "June 5, 2022" },
  { slug: "bariclip", title: "BariClip: The Brand-new Bariatric Clip for Weight-loss", excerpt: "Obesity is an expanding health issue. One new speculative treatment resembling a clip for weightloss.", date: "February 3, 2022" },
  { slug: "elipse-swallowable-intragastric-balloon", title: "Elipse Swallowable Intragastric Balloon Reveals Substantial Weight-loss", excerpt: "The Allurion intragastric balloon (formerly the Elipse) is a unique balloon that is swallowed.", date: "January 15, 2022" },
  { slug: "transit-bipartition-revision-alternative", title: "Transit Bipartition: An Attractive Revision Alternative When Sleeve Gastrectomy Fails", excerpt: "For patients that couldn't lose adequate weight or regain weight after LSG.", date: "November 27, 2021" },
  { slug: "bariatric-preoperative-diet", title: "Bariatric Preoperative Diet", excerpt: "Getting more fit before a surgical procedure diminishes the amount of fat tissue.", date: "January 26, 2021" },
  { slug: "obese-adults-covid-vaccine-priority", title: "Obese adults in 'at-risk' priority group for COVID vaccine", excerpt: "According to the latest official government guidance, the priority for giving the vaccine will be to obese adults.", date: "January 12, 2021" },
  { slug: "why-istanbul-is-an-important-location-for-obesity-surgery", title: "Why Istanbul is an Important Location for Obesity Surgery?", excerpt: "Istanbul has what it takes to be famous in this field. Well equipped hospitals, expert doctors.", date: "December 11, 2020" },
  { slug: "bariatric-surgery-during-covid-19-pandemic", title: "Should You Consider Having A Bariatric Surgery During the COVID-19 Pandemic?", excerpt: "A Cleveland Clinic study shows that among obese patients who tested positive for COVID-19.", date: "December 7, 2020" },
  { slug: "nutrition-tips-during-self-quarantine-covid-19", title: "Nutrition Tips During Self-Quarantine (COVID-19)", excerpt: "Since you need to spend this period at home, these suggestions will strengthen your immune system.", date: "November 25, 2020" },
];

const navLinks = [
  { href: "/", text: "Home" },
  { href: "/about", text: "About Us" },
  { href: "/treatments", text: "Treatments" },
  { href: "/sleeve-gastrectomy", text: "Gastric Sleeve" },
  { href: "/mini-gastric-bypass", text: "Mini Gastric Bypass" },
  { href: "/gastric-balloon", text: "Gastric Balloon" },
  { href: "/esg", text: "ESG" },
  { href: "/duodenal-switch", text: "Duodenal Switch" },
  { href: "/transit-bipartition", text: "Transit Bipartition" },
  { href: "/post-bariatric-surgery", text: "Post Bariatric Surgery" },
  { href: "/results", text: "Results" },
  { href: "/blog", text: "Blog" },
  { href: "/contact", text: "Contact" },
  { href: "/insurance", text: "Insurance" },
];

export function getSEOData(path: string): PageSEO | null {
  const cleanPath = path.split("?")[0];

  if (staticPages[cleanPath]) {
    return staticPages[cleanPath];
  }

  if (cleanPath.startsWith("/blog/")) {
    const slug = cleanPath.replace("/blog/", "");
    const post = blogPosts.find((p) => p.slug === slug);
    if (post) {
      return {
        title: `${post.title} - Istanbul Bariatric Center`,
        description: post.excerpt.length > 155 ? post.excerpt.substring(0, 152) + "..." : post.excerpt,
        h1: post.title,
        bodyExcerpt: post.excerpt,
        canonical: `${SITE_URL}/blog/${post.slug}`,
      };
    }
  }

  return null;
}

export function getNavigationHTML(): string {
  const links = navLinks
    .map((l) => `<a href="${l.href}">${l.text}</a>`)
    .join(" | ");
  return links;
}

export function getBlogListHTML(): string {
  return blogPosts
    .map(
      (p) =>
        `<a href="/blog/${p.slug}">${p.title}</a>`,
    )
    .join("\n");
}

export function getAllBlogSlugs(): string[] {
  return blogPosts.map((p) => p.slug);
}

export function getAllStaticRoutes(): string[] {
  return Object.keys(staticPages);
}

export { SITE_URL, navLinks, blogPosts };

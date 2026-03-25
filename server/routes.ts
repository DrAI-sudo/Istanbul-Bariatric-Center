import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactSubmissionSchema } from "@shared/schema";
import { fromZodError } from "zod-validation-error";
import { sendContactEmail, sendHealthProfileEmail } from "./email";
import { getAllBlogSlugs, getAllStaticRoutes, blogPosts as seoBlogPosts } from "./seo-data";
import { VALID_STATIC_ROUTES } from "./valid-routes";
import path from "path";
import fs from "fs";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const LEGACY_REDIRECTS: Record<string, string> = {
  "/treatments/bariatric-surgery/sleeve-gastrectomy": "/sleeve-gastrectomy",
  "/treatments/bariatric-surgery/gastric-bypass": "/mini-gastric-bypass",
  "/treatments/bariatric-surgery/gastric-balloon": "/gastric-balloon",
  "/treatments/bariatric-surgery/duodenal-switch": "/duodenal-switch",
  "/about-us": "/about",
  "/bariatric-surgery-": "/treatments",
  "/bariatric-surgery": "/treatments",
  "/blog/page/1": "/blog",
  "/blog/page/2": "/blog",
  "/blog/page/3": "/blog",
  "/blog/page/4": "/blog",
  "/blog/page/5": "/blog",
  "/uncategorized/page/1": "/blog",
  "/uncategorized/page/2": "/blog",
  "/uncategorized": "/blog",
  "/5-things-you-didnt-know-about-bariatric-surgery-with-dr-charles-procter": "/blog/5-things-you-didnt-know-about-bariatric-surgery",
  "/comparing-bariatric-surgery-and-endoscopic-sleeve-gastroplasty-making-an-informed-choice-for-weight-loss": "/blog/comparing-bariatric-surgery-and-endoscopic-sleeve-gastroplasty",
  "/post-bariatric-sugeries": "/post-bariatric-surgery",
  "/apollo-endoscopic-sleeve-gastroplasty-esg-turkey": "/esg",
  "/obesity-treatment": "/treatments",
  "/sleeve-gastrectomy-prices": "/sleeve-gastrectomy",
  "/surgery-for-diabetes": "/duodenal-switch",
  "/contact-us": "/contact",
  "/contactus": "/contact",
  "/our-doctors": "/about",
  "/our-team": "/about",
  "/team": "/about",
  "/dr-murat-ustun": "/about",
  "/services": "/treatments",
  "/procedures": "/treatments",
  "/prices": "/treatments",
  "/pricing": "/treatments",
  "/cost": "/treatments",
  "/gastric-sleeve": "/sleeve-gastrectomy",
  "/gastric-sleeve-surgery": "/sleeve-gastrectomy",
  "/gastric-sleeve-turkey": "/sleeve-gastrectomy",
  "/sleeve-gastrectomy-turkey": "/sleeve-gastrectomy",
  "/gastric-bypass": "/mini-gastric-bypass",
  "/gastric-bypass-surgery": "/mini-gastric-bypass",
  "/gastric-bypass-turkey": "/mini-gastric-bypass",
  "/mini-gastric-bypass-turkey": "/mini-gastric-bypass",
  "/roux-en-y-gastric-bypass": "/mini-gastric-bypass",
  "/gastric-balloon-turkey": "/gastric-balloon",
  "/intragastric-balloon": "/gastric-balloon",
  "/allurion-balloon": "/gastric-balloon",
  "/orbera-balloon": "/gastric-balloon",
  "/elipse-balloon": "/gastric-balloon",
  "/duodenal-switch-turkey": "/duodenal-switch",
  "/biliopancreatic-diversion": "/duodenal-switch",
  "/esg-turkey": "/esg",
  "/endoscopic-sleeve-gastroplasty": "/esg",
  "/endoscopic-sleeve-gastroplasty-turkey": "/esg",
  "/transit-bipartition-turkey": "/transit-bipartition",
  "/body-contouring": "/post-bariatric-surgery",
  "/tummy-tuck-after-weight-loss": "/post-bariatric-surgery",
  "/before-after": "/results",
  "/before-and-after": "/results",
  "/testimonials": "/results",
  "/patient-stories": "/results",
  "/success-stories": "/results",
  "/reviews": "/results",
  "/gallery": "/results",
  "/faq": "/treatments",
  "/faqs": "/treatments",
  "/frequently-asked-questions": "/treatments",
  "/privacy-policy": "/",
  "/terms-and-conditions": "/",
  "/terms": "/",
  "/disclaimer": "/",
  "/sample-page": "/",
  "/home": "/",
  "/index.html": "/",
  "/index.php": "/",
  "/wp-login.php": "/",
  "/wp-admin": "/",
  "/feed": "/blog",
  "/feed/rss": "/blog",
  "/feed/rss2": "/blog",
  "/feed/atom": "/blog",
  "/rss": "/blog",
  "/comments/feed": "/blog",
};

const YEAR_ARCHIVE_REGEX = /^\/20\d{2}(\/\d{1,2})?(\/\d{1,2})?$/;
const TAG_REGEX = /^\/tag\/.+$/;
const EMBED_REGEX = /^\/[^/]+\/embed$/;
const CATEGORY_REGEX = /^\/category\/.+$/;
const AUTHOR_REGEX = /^\/author\/.+$/;
const WP_CONTENT_REGEX = /^\/wp-(content|includes|json|admin)\/.*/;
const FEED_REGEX = /^\/.*\/feed\/?$/;
const PAGE_REGEX = /^\/page\/\d+$/;
const ATTACHMENT_REGEX = /^\/.+\/attachment\/.+$/;

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  // Serve robots.txt and sitemap.xml directly from client/public
  app.get("/robots.txt", (req, res) => {
    const robotsPath = path.resolve(__dirname, "../client/public/robots.txt");
    if (fs.existsSync(robotsPath)) {
      res.type("text/plain").sendFile(robotsPath);
    } else {
      res.type("text/plain").send("User-agent: *\nAllow: /\n");
    }
  });

  app.get("/sitemap.xml", (_req, res) => {
    const BASE = "https://istanbulbariatriccenter.com";
    const today = new Date().toISOString().split("T")[0];

    const staticPriorities: Record<string, { priority: string; changefreq: string }> = {
      "/": { priority: "1.0", changefreq: "weekly" },
      "/about": { priority: "0.8", changefreq: "monthly" },
      "/treatments": { priority: "0.9", changefreq: "monthly" },
      "/results": { priority: "0.8", changefreq: "monthly" },
      "/blog": { priority: "0.9", changefreq: "weekly" },
      "/contact": { priority: "0.7", changefreq: "monthly" },
      "/sleeve-gastrectomy": { priority: "0.9", changefreq: "monthly" },
      "/mini-gastric-bypass": { priority: "0.9", changefreq: "monthly" },
      "/gastric-balloon": { priority: "0.9", changefreq: "monthly" },
      "/duodenal-switch": { priority: "0.8", changefreq: "monthly" },
      "/transit-bipartition": { priority: "0.8", changefreq: "monthly" },
      "/esg": { priority: "0.9", changefreq: "monthly" },
      "/esg/uk": { priority: "0.9", changefreq: "monthly" },
      "/post-bariatric-surgery": { priority: "0.7", changefreq: "monthly" },
      "/insurance": { priority: "0.6", changefreq: "monthly" },
      "/health-profile": { priority: "0.7", changefreq: "monthly" },
    };

    let xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n`;

    for (const route of VALID_STATIC_ROUTES) {
      const meta = staticPriorities[route] || { priority: "0.5", changefreq: "monthly" };
      xml += `  <url>\n    <loc>${BASE}${route}</loc>\n    <lastmod>${today}</lastmod>\n    <changefreq>${meta.changefreq}</changefreq>\n    <priority>${meta.priority}</priority>\n  </url>\n`;
    }

    for (const post of seoBlogPosts) {
      const dateStr = new Date(post.date).toISOString().split("T")[0];
      xml += `  <url>\n    <loc>${BASE}/blog/${post.slug}</loc>\n    <lastmod>${isNaN(new Date(post.date).getTime()) ? today : dateStr}</lastmod>\n    <changefreq>yearly</changefreq>\n    <priority>0.6</priority>\n  </url>\n`;
    }

    xml += `</urlset>`;
    res.type("application/xml").send(xml);
  });

  const BASE_URL = "https://istanbulbariatriccenter.com";

  app.get("/llms.txt", (_req, res) => {
    const content = `# Istanbul Bariatric Center

> Istanbul Bariatric Center is a leading bariatric surgery clinic in Istanbul, Turkey, led by world-renowned surgeon Dr Murat Ustun. We offer all-inclusive weight loss surgery packages including gastric sleeve, gastric bypass, gastric balloon, endoscopic sleeve gastroplasty (ESG), duodenal switch, and transit bipartition. JCI accredited hospital, 8,000+ successful procedures, comprehensive aftercare with UK-based support.

## Main Pages

- [Home](${BASE_URL}/)
- [About Us](${BASE_URL}/about)
- [Treatments Overview](${BASE_URL}/treatments)
- [Patient Results & Testimonials](${BASE_URL}/results)
- [Blog](${BASE_URL}/blog)
- [Contact Us](${BASE_URL}/contact)
- [Am I Eligible? Health Profile](${BASE_URL}/health-profile)

## Surgical Procedures

- [Gastric Sleeve Surgery (Sleeve Gastrectomy)](${BASE_URL}/sleeve-gastrectomy): From £2,950. Removes 75-80% of the stomach. Most popular bariatric procedure worldwide. Ideal for BMI 35+.
- [Mini Gastric Bypass](${BASE_URL}/mini-gastric-bypass): From £3,350. Creates a small stomach pouch and bypasses part of the small intestine. Best for BMI 40+ or metabolic conditions.
- [Gastric Balloon](${BASE_URL}/gastric-balloon): From £1,650. Non-surgical, temporary balloon placed in stomach. Orbera (endoscopic) and Allurion (swallowable) options available.
- [Endoscopic Sleeve Gastroplasty (ESG)](${BASE_URL}/esg): From £4,950. Non-surgical stomach reduction via endoscope. No incisions, 1-3 day recovery. Pioneered in Turkey by Dr Murat Ustun.
- [ESG for UK Patients](${BASE_URL}/esg/uk): ESG tailored for UK patients. Save up to 70% vs UK private clinics. All-inclusive packages from £4,950. UK patient coordinators, UK WhatsApp support.
- [Duodenal Switch](${BASE_URL}/duodenal-switch): From £4,400. Complex procedure combining sleeve with intestinal bypass. Maximum weight loss for very high BMI patients.
- [Transit Bipartition](${BASE_URL}/transit-bipartition): Advanced metabolic surgery combining sleeve gastrectomy with intestinal rerouting for enhanced weight loss and diabetes resolution.
- [Post-Bariatric Surgery](${BASE_URL}/post-bariatric-surgery): Body contouring procedures after significant weight loss including tummy tuck, arm lift, and thigh lift.

## Pricing (GBP, All-Inclusive Packages)

| Procedure | Basic | Relaxation | Luxury |
|-----------|-------|------------|--------|
| Gastric Sleeve | £2,950 | £3,950 | £4,250 |
| Gastric Bypass | £3,350 | £4,350 | £4,650 |
| Gastric Balloon (Orbera) | £1,650 | - | - |
| Gastric Balloon (Allurion) | £2,250 | - | - |
| Duodenal Switch | - | £4,400 | £4,700 |
| ESG | - | £4,950 | £5,950 |

## Contact Information

- Website: ${BASE_URL}
- WhatsApp (Turkey): +90 532 413 1143
- WhatsApp (UK): +44 7491 068686
- Email: drmuratustun@gmail.com
- Location: Istanbul, Turkey

## Optional

- [Sitemap](${BASE_URL}/sitemap.xml)
- [Full LLM Content](${BASE_URL}/llms-full.txt)
`;
    res.type("text/plain; charset=utf-8").send(content);
  });

  app.get("/llms-full.txt", async (_req, res) => {
    try {
      let blogSection = "";
      try {
        const blogDataPath = path.resolve(__dirname, "../client/src/data/blog-posts.ts");
        if (fs.existsSync(blogDataPath)) {
          const blogContent = fs.readFileSync(blogDataPath, "utf-8");
          const slugRegex = /slug:\s*"([^"]+)"/g;
          const titleRegex = /title:\s*"([^"]+)"/g;
          const excerptRegex = /excerpt:\s*"([^"]+)"/g;
          const slugs: string[] = [];
          const titles: string[] = [];
          const excerpts: string[] = [];
          let match;
          while ((match = slugRegex.exec(blogContent)) !== null) slugs.push(match[1]);
          while ((match = titleRegex.exec(blogContent)) !== null) titles.push(match[1]);
          while ((match = excerptRegex.exec(blogContent)) !== null) excerpts.push(match[1]);
          
          blogSection = "\n## Blog Articles\n\n";
          const count = Math.min(slugs.length, titles.length, excerpts.length, 100);
          for (let i = 0; i < count; i++) {
            blogSection += `### ${titles[i]}\n- URL: ${BASE_URL}/blog/${slugs[i]}\n- Summary: ${excerpts[i]}\n\n`;
          }
        }
      } catch (e) {
        blogSection = "\n## Blog\nVisit our blog at " + BASE_URL + "/blog for the latest articles on bariatric surgery.\n";
      }

      const content = `# Istanbul Bariatric Center - Complete Information

> Istanbul Bariatric Center is a premier bariatric surgery clinic in Istanbul, Turkey. Led by world-renowned surgeon Dr Murat Ustun, we specialize in all forms of weight loss surgery with over 8,000 successful procedures. Our JCI accredited hospital facility and comprehensive all-inclusive packages make us one of the most trusted names in medical tourism for obesity treatment.

## About the Practice

Istanbul Bariatric Center was founded with the mission of providing world-class bariatric surgery at accessible prices. Located in Istanbul, Turkey — one of the world's top medical tourism destinations — we combine cutting-edge surgical technology with luxurious patient care.

**Dr Murat Ustun** is a board-certified bariatric surgeon and pioneer of Endoscopic Sleeve Gastroplasty (ESG) in Turkey. With thousands of successful procedures, he is recognised internationally for his expertise in minimally invasive weight loss surgery. Dr Ustun trained at leading institutions and continues to advance the field through research and innovation.

**Hospital Accreditation**: All surgeries are performed at JCI (Joint Commission International) accredited hospitals in Istanbul, ensuring the highest standards of patient safety, infection control, and clinical quality.

**Awards**: WhatClinic Patient Service Award winner multiple years running. Recognized for outstanding patient satisfaction and service quality.

## Detailed Procedure Information

### Gastric Sleeve Surgery (Sleeve Gastrectomy)
- **Also known as**: VSG, Vertical Sleeve Gastrectomy
- **Type**: Surgical (Laparoscopic)
- **Pricing**: Basic £2,950 | Relaxation £3,950 | Luxury £4,250
- **Ideal for**: BMI 35+ patients
- **Expected weight loss**: 60-70% of excess weight within 12-18 months
- **Hospital stay**: 2-3 days
- **Recovery**: 2-3 weeks to normal activities
- **How it works**: Approximately 75-80% of the stomach is permanently removed, creating a smaller banana-shaped stomach (sleeve). This restricts food intake and significantly reduces hunger hormones (ghrelin), leading to sustained weight loss.
- **Benefits**: Most commonly performed bariatric procedure worldwide, proven long-term results, significant improvement in obesity-related conditions (type 2 diabetes, sleep apnoea, hypertension).

### Mini Gastric Bypass (One Anastomosis Gastric Bypass)
- **Also known as**: OAGB, MGB, Roux-en-Y Gastric Bypass
- **Type**: Surgical (Laparoscopic)
- **Pricing**: Basic £3,350 | Relaxation £4,350 | Luxury £4,650
- **Ideal for**: BMI 40+ or BMI 35+ with metabolic conditions (diabetes, hypertension)
- **Expected weight loss**: 70-80% of excess weight within 12-18 months
- **Hospital stay**: 2-3 days
- **Recovery**: 2-3 weeks to normal activities
- **How it works**: Creates a small stomach pouch (about 30ml) and connects it directly to the small intestine, bypassing a significant portion of the digestive tract. This both restricts food intake and reduces calorie absorption.
- **Benefits**: Highest long-term weight loss of standard procedures, excellent for type 2 diabetes resolution (up to 80% remission), strong metabolic benefits.

### Gastric Balloon
- **Also known as**: Intragastric Balloon, Orbera Balloon, Allurion Balloon
- **Type**: Non-surgical (Endoscopic/Swallowable)
- **Pricing**: Orbera (Endoscopic) £1,650 | Allurion (Swallowable) £2,250
- **Ideal for**: BMI 30-40 seeking non-surgical options
- **Expected weight loss**: 10-15% of total body weight over 6-12 months
- **Hospital stay**: Same day (outpatient)
- **Recovery**: 1-3 days
- **How it works**: A soft silicone balloon is placed in the stomach either endoscopically (Orbera) or swallowed as a capsule (Allurion). The balloon takes up space in the stomach, promoting earlier fullness. Orbera is removed after 6 months; Allurion naturally deflates and passes after 4 months.
- **Benefits**: No surgery required, reversible, minimal downtime, good starting point for weight loss journey.

### Endoscopic Sleeve Gastroplasty (ESG)
- **Also known as**: Apollo ESG, Non-Surgical Gastric Sleeve, Accordion Procedure
- **Type**: Non-surgical (Endoscopic)
- **Pricing**: Relaxation £4,950 | Luxury £5,950
- **Ideal for**: BMI 30-40 wanting significant results without surgery
- **Expected weight loss**: 15-20% of total body weight within 12 months
- **Hospital stay**: 1 night observation
- **Recovery**: 1-3 days to normal activities
- **How it works**: Using an endoscope inserted through the mouth, sutures are placed in the stomach wall to reduce its size by 70-80%. No incisions, no removal of tissue. The stomach is reshaped from the inside, creating restriction similar to a surgical sleeve.
- **Benefits**: No incisions or scars, fastest recovery of any significant weight loss procedure, performed by Dr Murat Ustun who pioneered ESG in Turkey. Can be revised or converted to surgery if needed.

### Duodenal Switch (BPD/DS)
- **Also known as**: Biliopancreatic Diversion with Duodenal Switch
- **Type**: Surgical (Laparoscopic)
- **Pricing**: Relaxation £4,400 | Luxury £4,700
- **Ideal for**: BMI 50+ or patients needing maximum weight loss
- **Expected weight loss**: 70-85% of excess weight
- **Hospital stay**: 3-4 days
- **Recovery**: 3-4 weeks to normal activities
- **How it works**: Combines a sleeve gastrectomy with significant intestinal bypass. The stomach is reduced and the small intestine is rerouted to limit both food intake and calorie/nutrient absorption.
- **Benefits**: Highest average weight loss of any bariatric procedure, excellent diabetes resolution rates, suitable for super-obese patients.

### Transit Bipartition
- **Type**: Surgical (Laparoscopic)
- **Ideal for**: Revision surgery or patients seeking enhanced metabolic results
- **How it works**: Combines sleeve gastrectomy with a partial intestinal bypass, allowing food to travel two paths — one through normal digestion and one bypassing part of the intestine. This dual-pathway approach maximises metabolic benefits while reducing malabsorption risks compared to traditional duodenal switch.
- **Benefits**: Enhanced weight loss and diabetes resolution compared to sleeve alone, lower complication risk than full duodenal switch, suitable as revision surgery for insufficient weight loss after sleeve gastrectomy.

### Post-Bariatric Surgery (Body Contouring)
- **Type**: Surgical
- **Ideal for**: Patients who have lost significant weight and have excess skin
- **Procedures available**: Tummy tuck (abdominoplasty), arm lift (brachioplasty), thigh lift, breast lift, body lift
- **How it works**: Removes excess skin and reshapes body contours after major weight loss.

## Package Details

### Basic Package
- JCI Accredited Hospital (2 days stay)
- All preoperative tests & blood work
- Airport pickup
- Standard dietitian support
- 24/7 patient coordinator

### Relaxation Package (Most Popular)
- Everything in Basic, plus:
- Surgery performed by Dr Murat Ustun
- JCI Accredited Hospital (3 days stay)
- Radisson Hotel accommodation (1 night)
- UK Registered Dietitian support (12 months)
- Supplements pack

### Luxury Package (VIP)
- Everything in Relaxation, plus:
- Extended Radisson Hotel stay
- Private VIP transfers throughout
- Premium room upgrade
- Extended dietitian support
- Comprehensive supplement package

## UK Support Network

Istanbul Bariatric Center has care support coordinators in 8 UK locations, providing local pre- and post-operative consultations for UK-based patients.

## Contact Information

- **Website**: ${BASE_URL}
- **WhatsApp (Turkey)**: +90 532 413 1143
- **WhatsApp (UK)**: +44 7491 068686
- **Email**: drmuratustun@gmail.com
- **Location**: Istanbul, Turkey
- **Languages**: English, Turkish, Arabic, French, German, Spanish, Italian, Russian, Portuguese
${blogSection}
## Site Navigation

- [Home](${BASE_URL}/)
- [About Us](${BASE_URL}/about)
- [Treatments](${BASE_URL}/treatments)
- [Gastric Sleeve](${BASE_URL}/sleeve-gastrectomy)
- [Mini Gastric Bypass](${BASE_URL}/mini-gastric-bypass)
- [Gastric Balloon](${BASE_URL}/gastric-balloon)
- [ESG](${BASE_URL}/esg)
- [Duodenal Switch](${BASE_URL}/duodenal-switch)
- [Transit Bipartition](${BASE_URL}/transit-bipartition)
- [Post-Bariatric Surgery](${BASE_URL}/post-bariatric-surgery)
- [Patient Results](${BASE_URL}/results)
- [Blog](${BASE_URL}/blog)
- [Contact](${BASE_URL}/contact)
- [Health Profile / Am I Eligible?](${BASE_URL}/health-profile)
- [Sitemap](${BASE_URL}/sitemap.xml)
`;
      res.type("text/plain; charset=utf-8").send(content);
    } catch (error) {
      console.error("Error generating llms-full.txt:", error);
      res.status(500).type("text/plain").send("Error generating content");
    }
  });

  app.get("/.well-known/ai-plugin.json", (_req, res) => {
    const plugin = {
      schema_version: "v1",
      name_for_human: "Istanbul Bariatric Center",
      name_for_model: "istanbul_bariatric_center",
      description_for_human: "Istanbul Bariatric Center - Leading weight loss surgery clinic in Istanbul, Turkey. Gastric sleeve, bypass, balloon, ESG, and more.",
      description_for_model: "Istanbul Bariatric Center is a premier bariatric surgery clinic in Istanbul, Turkey led by Dr Murat Ustun. Provides information about weight loss surgery procedures (gastric sleeve, gastric bypass, gastric balloon, ESG, duodenal switch, transit bipartition), pricing from £1,650, all-inclusive packages, patient results, and blog articles about obesity treatment. Use /llms.txt for a structured overview or /llms-full.txt for complete detailed content.",
      auth: { type: "none" },
      api: {
        type: "openapi",
        url: `${BASE_URL}/sitemap.xml`
      },
      logo_url: `${BASE_URL}/favicon.webp`,
      contact_email: "drmuratustun@gmail.com",
      legal_info_url: `${BASE_URL}/about`,
      llms_txt: `${BASE_URL}/llms.txt`
    };
    res.json(plugin);
  });

  app.use((req, res, next) => {
    const reqPath = req.path;
    
    if (LEGACY_REDIRECTS[reqPath]) {
      return res.redirect(301, LEGACY_REDIRECTS[reqPath]);
    }
    
    if (YEAR_ARCHIVE_REGEX.test(reqPath)) {
      return res.redirect(301, "/blog");
    }
    if (TAG_REGEX.test(reqPath)) {
      return res.redirect(301, "/blog");
    }
    if (CATEGORY_REGEX.test(reqPath)) {
      return res.redirect(301, "/blog");
    }
    if (AUTHOR_REGEX.test(reqPath)) {
      return res.redirect(301, "/about");
    }
    if (EMBED_REGEX.test(reqPath)) {
      return res.redirect(301, "/");
    }
    if (WP_CONTENT_REGEX.test(reqPath)) {
      return res.redirect(301, "/");
    }
    if (FEED_REGEX.test(reqPath)) {
      return res.redirect(301, "/blog");
    }
    if (PAGE_REGEX.test(reqPath)) {
      return res.redirect(301, "/blog");
    }
    if (ATTACHMENT_REGEX.test(reqPath)) {
      return res.redirect(301, "/");
    }

    const rootSlug = reqPath.slice(1);
    if (rootSlug && !rootSlug.includes("/") && !VALID_STATIC_ROUTES.includes(reqPath) && getAllBlogSlugs().includes(rootSlug)) {
      return res.redirect(301, `/blog/${rootSlug}`);
    }
    
    if (req.query.page_id === "24") {
      return res.redirect(301, "/about");
    }
    if (req.query.p === "1843") {
      return res.redirect(301, "/blog/comparing-bariatric-surgery-and-endoscopic-sleeve-gastroplasty");
    }
    if (req.query.p === "1838") {
      return res.redirect(301, "/blog/5-things-you-didnt-know-about-bariatric-surgery");
    }
    if (req.query.p) {
      return res.redirect(301, "/blog");
    }
    if (req.query.page_id) {
      return res.redirect(301, "/");
    }
    if (req.query.preview === "true") {
      return res.redirect(301, "/");
    }
    if (req.query.replytocom) {
      return res.redirect(301, reqPath);
    }
    
    next();
  });

  // Contact form submission endpoint
  app.post("/api/contact", async (req, res) => {
    try {
      const validatedData = insertContactSubmissionSchema.parse(req.body);
      const submission = await storage.createContactSubmission(validatedData);
      
      sendContactEmail(validatedData).catch(err => {
        console.error('Email send error:', err);
      });
      
      res.status(201).json({ success: true, data: submission });
    } catch (error: any) {
      if (error.name === 'ZodError') {
        const validationError = fromZodError(error);
        return res.status(400).json({ 
          success: false, 
          error: validationError.message 
        });
      }
      console.error('Error creating contact submission:', error);
      res.status(500).json({ 
        success: false, 
        error: 'Failed to submit contact form' 
      });
    }
  });

  app.post("/api/health-profile", async (req, res) => {
    try {
      const { firstName, surname, email } = req.body;
      if (!firstName || !surname || !email) {
        return res.status(400).json({ success: false, error: "Name and email are required" });
      }

      sendHealthProfileEmail(req.body).catch(err => {
        console.error('Health profile email error:', err);
      });

      res.json({ success: true });
    } catch (error) {
      console.error('Error processing health profile:', error);
      res.status(500).json({ success: false, error: 'Failed to submit health profile' });
    }
  });

  // Get all contact submissions (for admin view)
  app.get("/api/contact-submissions", async (req, res) => {
    try {
      const submissions = await storage.getAllContactSubmissions();
      res.json({ success: true, data: submissions });
    } catch (error) {
      console.error('Error fetching contact submissions:', error);
      res.status(500).json({ 
        success: false, 
        error: 'Failed to fetch submissions' 
      });
    }
  });

  return httpServer;
}

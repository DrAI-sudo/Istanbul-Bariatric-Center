import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactSubmissionSchema } from "@shared/schema";
import { fromZodError } from "zod-validation-error";
import { sendContactEmail } from "./email";

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
  "/uncategorized/page/1": "/blog",
  "/uncategorized": "/blog",
  "/5-things-you-didnt-know-about-bariatric-surgery-with-dr-charles-procter": "/blog/5-things-you-didnt-know-about-bariatric-surgery",
  "/comparing-bariatric-surgery-and-endoscopic-sleeve-gastroplasty-making-an-informed-choice-for-weight-loss": "/blog/comparing-bariatric-surgery-and-endoscopic-sleeve-gastroplasty",
  "/post-bariatric-sugeries": "/post-bariatric-surgery",
};

const YEAR_ARCHIVE_REGEX = /^\/20\d{2}(\/\d{1,2})?$/;
const TAG_REGEX = /^\/tag\/.+$/;
const EMBED_REGEX = /^\/[^/]+\/embed$/;

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  app.use((req, res, next) => {
    const path = req.path;
    
    if (LEGACY_REDIRECTS[path]) {
      return res.redirect(301, LEGACY_REDIRECTS[path]);
    }
    
    if (YEAR_ARCHIVE_REGEX.test(path)) {
      return res.redirect(301, "/blog");
    }
    if (TAG_REGEX.test(path)) {
      return res.redirect(301, "/blog");
    }
    if (EMBED_REGEX.test(path)) {
      return res.redirect(301, "/");
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

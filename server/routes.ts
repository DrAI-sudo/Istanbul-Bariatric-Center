import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactSubmissionSchema } from "@shared/schema";
import { fromZodError } from "zod-validation-error";
import { sendContactEmail } from "./resend";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  // Contact form submission endpoint
  app.post("/api/contact", async (req, res) => {
    try {
      const validatedData = insertContactSubmissionSchema.parse(req.body);
      const submission = await storage.createContactSubmission(validatedData);
      
      // Email sending temporarily disabled for debugging
      // sendContactEmail(validatedData).catch(emailError => {
      //   console.error('Failed to send email notification:', emailError);
      // });
      console.log('Contact form submitted:', validatedData.email);
      
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

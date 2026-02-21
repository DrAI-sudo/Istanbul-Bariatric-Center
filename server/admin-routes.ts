import type { Express, Request, Response, NextFunction } from "express";
import { storage } from "./storage";
import crypto from "crypto";

const adminTokens = new Set<string>();

function generateToken(): string {
  return crypto.randomBytes(32).toString("hex");
}

function adminAuth(req: Request, res: Response, next: NextFunction) {
  const token = req.headers["x-admin-token"] as string;
  if (!token || !adminTokens.has(token)) {
    return res.status(401).json({ error: "Unauthorized" });
  }
  next();
}

export function registerAdminRoutes(app: Express): void {
  app.post("/api/admin/login", (req: Request, res: Response) => {
    const { password } = req.body;
    const adminPassword = process.env.ADMIN_PASSWORD;
    
    if (!adminPassword) {
      return res.status(500).json({ error: "Admin password not configured" });
    }
    
    if (password === adminPassword) {
      const token = generateToken();
      adminTokens.add(token);
      return res.json({ success: true, token });
    }
    
    return res.status(401).json({ error: "Invalid password" });
  });

  app.post("/api/admin/logout", adminAuth, (req: Request, res: Response) => {
    const token = req.headers["x-admin-token"] as string;
    adminTokens.delete(token);
    res.json({ success: true });
  });

  app.get("/api/admin/analytics", adminAuth, async (req: Request, res: Response) => {
    try {
      const period = (req.query.period as string) || "daily";
      const now = new Date();
      let since: Date;

      switch (period) {
        case "daily":
          since = new Date(now.getTime() - 24 * 60 * 60 * 1000);
          break;
        case "weekly":
          since = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);
          break;
        case "monthly":
          since = new Date(now.getTime() - 30 * 24 * 60 * 60 * 1000);
          break;
        case "annually":
          since = new Date(now.getTime() - 365 * 24 * 60 * 60 * 1000);
          break;
        default:
          since = new Date(now.getTime() - 24 * 60 * 60 * 1000);
      }

      const stats = await storage.getPageViewStats(since);
      res.json({ success: true, data: stats });
    } catch (error) {
      console.error("Analytics error:", error);
      res.status(500).json({ error: "Failed to fetch analytics" });
    }
  });

  app.get("/api/admin/conversations", adminAuth, async (_req: Request, res: Response) => {
    try {
      const convos = await storage.getAllConversations();
      res.json({ success: true, data: convos });
    } catch (error) {
      console.error("Conversations error:", error);
      res.status(500).json({ error: "Failed to fetch conversations" });
    }
  });

  app.get("/api/admin/conversations/:id", adminAuth, async (req: Request, res: Response) => {
    try {
      const msgs = await storage.getConversationMessages(parseInt(req.params.id));
      res.json({ success: true, data: msgs });
    } catch (error) {
      console.error("Messages error:", error);
      res.status(500).json({ error: "Failed to fetch messages" });
    }
  });

  app.delete("/api/admin/conversations/:id", adminAuth, async (req: Request, res: Response) => {
    try {
      await storage.deleteConversation(parseInt(req.params.id));
      res.json({ success: true });
    } catch (error) {
      console.error("Delete conversation error:", error);
      res.status(500).json({ error: "Failed to delete conversation" });
    }
  });

  app.get("/api/admin/leads", adminAuth, async (_req: Request, res: Response) => {
    try {
      const leads = await storage.getAllLeads();
      res.json({ success: true, data: leads });
    } catch (error) {
      console.error("Leads error:", error);
      res.status(500).json({ error: "Failed to fetch leads" });
    }
  });

  app.delete("/api/admin/leads/:id", adminAuth, async (req: Request, res: Response) => {
    try {
      await storage.deleteLead(parseInt(req.params.id));
      res.json({ success: true });
    } catch (error) {
      console.error("Delete lead error:", error);
      res.status(500).json({ error: "Failed to delete lead" });
    }
  });

  app.get("/api/admin/contact-submissions", adminAuth, async (_req: Request, res: Response) => {
    try {
      const submissions = await storage.getAllContactSubmissions();
      res.json({ success: true, data: submissions });
    } catch (error) {
      console.error("Contact submissions error:", error);
      res.status(500).json({ error: "Failed to fetch submissions" });
    }
  });

  app.delete("/api/admin/contact-submissions/:id", adminAuth, async (req: Request, res: Response) => {
    try {
      await storage.deleteContactSubmission(parseInt(req.params.id));
      res.json({ success: true });
    } catch (error) {
      console.error("Delete submission error:", error);
      res.status(500).json({ error: "Failed to delete submission" });
    }
  });

  app.post("/api/track", async (req: Request, res: Response) => {
    try {
      const { path, sessionId, duration, referrer } = req.body;
      if (!path || !sessionId) {
        return res.status(400).json({ error: "path and sessionId required" });
      }

      if (duration && duration > 0) {
        await storage.updatePageViewDuration(sessionId, path, duration);
        return res.json({ success: true });
      }

      await storage.createPageView({
        path,
        sessionId,
        duration: 0,
        referrer: referrer || null,
        userAgent: req.headers["user-agent"] || null,
      });
      res.json({ success: true });
    } catch (error) {
      console.error("Track error:", error);
      res.status(500).json({ error: "Failed to track" });
    }
  });

  app.post("/api/admin/leads", adminAuth, async (req: Request, res: Response) => {
    try {
      const lead = await storage.createLead(req.body);
      res.json({ success: true, data: lead });
    } catch (error) {
      console.error("Create lead error:", error);
      res.status(500).json({ error: "Failed to create lead" });
    }
  });
}

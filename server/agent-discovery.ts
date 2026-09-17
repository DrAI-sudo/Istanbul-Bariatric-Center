import type { Express, Request, Response, NextFunction } from "express";
import { createHash } from "crypto";

const BASE_URL = "https://istanbulbariatriccenter.com";

const SKILL_MD = `---
name: istanbul-bariatric-center-info
description: How to find accurate information about Istanbul Bariatric Center's weight loss surgery procedures, pricing, packages, and patient contact channels.
---

# Istanbul Bariatric Center — Site Information Skill

Istanbul Bariatric Center is a JCI-accredited bariatric surgery clinic in Istanbul, Turkey, led by Dr Murat Ustun (25+ years, 6,000+ advanced laparoscopic procedures). It serves international patients with all-inclusive weight loss surgery packages.

## Key resources

- Structured site overview for LLMs: ${BASE_URL}/llms.txt
- Full site content for LLMs: ${BASE_URL}/llms-full.txt
- Comprehensive Q&A knowledge base (100+ questions): ${BASE_URL}/bariatric-surgery-turkey-guide
- Sitemap: ${BASE_URL}/sitemap.xml

## Procedures and starting prices

- Gastric Sleeve: from £2,450 — ${BASE_URL}/sleeve-gastrectomy
- Mini Gastric Bypass: from £5,000 — ${BASE_URL}/mini-gastric-bypass
- Gastric Balloon Turkey: from £1,900 — ${BASE_URL}/gastric-balloon-turkey
- Endoscopic Sleeve Gastroplasty (ESG): from £5,700 — ${BASE_URL}/esg
- Country-specific ESG pages exist under ${BASE_URL}/esg/{country} (uk, de, fr, es, nl, ar, it, ru, ro, se, pl, dk, no, hu, fi, ca, us, anz).

## How agents should help users

1. For factual questions (costs, safety, eligibility, recovery), cite the guide page and llms.txt content.
2. For eligibility assessment, direct users to ${BASE_URL}/health-profile
3. To contact the clinic, direct users to ${BASE_URL}/contact
4. Prices are starting prices for all-inclusive packages; exact quotes require a consultation.

## Constraints

- This site provides informational content only; it does not offer medical advice through automated channels.
- There is no public programmatic API for booking; inquiries go through the contact form or WhatsApp.
`;

const SKILL_SHA256 = createHash("sha256").update(SKILL_MD, "utf-8").digest("hex");

const SKILL_NAME = "istanbul-bariatric-center-info";

const AGENT_SKILLS_INDEX = {
  $schema: "https://agentskills.io/schemas/v0.2.0/index.json",
  version: "0.2.0",
  skills: [
    {
      name: SKILL_NAME,
      type: "skill.md",
      description:
        "Accurate information about Istanbul Bariatric Center's weight loss surgery procedures, pricing, all-inclusive packages, eligibility, and patient contact channels.",
      url: `${BASE_URL}/.well-known/agent-skills/${SKILL_NAME}/SKILL.md`,
      sha256: SKILL_SHA256,
    },
  ],
};

const API_CATALOG = {
  linkset: [
    {
      anchor: `${BASE_URL}/`,
      "service-doc": [
        {
          href: `${BASE_URL}/llms.txt`,
          type: "text/plain",
          title: "Structured site overview for AI agents (llms.txt)",
        },
        {
          href: `${BASE_URL}/bariatric-surgery-turkey-guide`,
          type: "text/html",
          title: "Complete guide to bariatric surgery in Turkey (Q&A knowledge base)",
        },
      ],
      "service-meta": [
        {
          href: `${BASE_URL}/llms-full.txt`,
          type: "text/plain",
          title: "Full site content for AI agents (llms-full.txt)",
        },
        {
          href: `${BASE_URL}/.well-known/agent-skills/index.json`,
          type: "application/json",
          title: "Agent skills discovery index",
        },
      ],
    },
  ],
};

const LINK_HEADER = [
  `</.well-known/api-catalog>; rel="api-catalog"`,
  `</llms.txt>; rel="service-doc"; type="text/plain"`,
].join(", ");

function isHtmlPageRequest(req: Request): boolean {
  if (req.method !== "GET" && req.method !== "HEAD") return false;
  const p = req.path;
  if (p.startsWith("/api/") || p.startsWith("/.well-known/")) return false;
  if (/\.[a-zA-Z0-9]{2,5}$/.test(p)) return false;
  return true;
}

export function registerAgentDiscovery(app: Express): void {
  app.use((req: Request, res: Response, next: NextFunction) => {
    if (isHtmlPageRequest(req)) {
      res.setHeader("Link", LINK_HEADER);
    }
    next();
  });

  app.get("/.well-known/api-catalog", (_req, res) => {
    res.setHeader("Cache-Control", "public, max-age=3600");
    res.type("application/linkset+json").send(JSON.stringify(API_CATALOG, null, 2));
  });

  app.get("/.well-known/agent-skills/index.json", (_req, res) => {
    res.setHeader("Cache-Control", "public, max-age=3600");
    res.type("application/json").send(JSON.stringify(AGENT_SKILLS_INDEX, null, 2));
  });

  app.get(`/.well-known/agent-skills/${SKILL_NAME}/SKILL.md`, (_req, res) => {
    res.setHeader("Cache-Control", "public, max-age=3600");
    res.type("text/markdown; charset=utf-8").send(SKILL_MD);
  });
}

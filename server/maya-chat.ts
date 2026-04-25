import type { Express, Request, Response } from "express";
import OpenAI from "openai";
import { storage } from "./storage";
import { sendChatLeadEmail } from "./email";

const openai = new OpenAI({
  apiKey: process.env.AI_INTEGRATIONS_OPENAI_API_KEY,
  baseURL: process.env.AI_INTEGRATIONS_OPENAI_BASE_URL,
});

const LEAD_WRAP_UP_PHRASES = [
  "coordinator will contact",
  "coordinators will contact",
  "coordinator will be in touch",
  "coordinators will be in touch",
  "team will contact",
  "team will be in touch",
  "team will reach out",
  "team will get in touch",
  "we'll be in touch",
  "we will be in touch",
  "we'll reach out",
  "we will reach out",
  "we'll get back to you",
  "we will get back to you",
  "someone from our team",
  "send you a personalized quote",
  "send you a quote",
  "send you the details",
  "arrange a free consultation",
  "arrange a consultation",
  "schedule your consultation",
];

function containsWrapUpPhrase(text: string): boolean {
  const lower = text.toLowerCase();
  return LEAD_WRAP_UP_PHRASES.some((p) => lower.includes(p));
}

async function extractFullLead(
  transcript: Array<{ role: string; content: string }>,
): Promise<{
  name?: string;
  email?: string;
  phone?: string;
  treatment?: string;
  destination?: string;
  travelDate?: string;
}> {
  const convoText = transcript
    .map((m) => `${m.role === "user" ? "Patient" : "Maya"}: ${m.content}`)
    .join("\n");

  try {
    const completion = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      max_tokens: 200,
      response_format: { type: "json_object" },
      messages: [
        {
          role: "system",
          content:
            'Extract lead details from this chatbot conversation. Return ONLY a JSON object with these keys (use empty string if unknown): {"name":"","email":"","phone":"","treatment":"","destination":"","travelDate":""}. "treatment" = the procedure they\'re interested in (e.g. Sleeve, Bypass, Balloon, ESG). "destination" = the country/city the patient is travelling FROM. "travelDate" = any mentioned travel/surgery date or timeframe.',
        },
        { role: "user", content: convoText },
      ],
    });

    const raw = completion.choices[0]?.message?.content || "{}";
    const parsed = JSON.parse(raw);
    const clean = (v: unknown) =>
      typeof v === "string" && v.trim() ? v.trim() : undefined;
    return {
      name: clean(parsed.name),
      email: clean(parsed.email),
      phone: clean(parsed.phone),
      treatment: clean(parsed.treatment),
      destination: clean(parsed.destination),
      travelDate: clean(parsed.travelDate),
    };
  } catch (err) {
    console.error("Lead extraction error:", err);
    return {};
  }
}

async function maybeSendLeadEmail(
  conversationId: number,
  assistantReply: string,
  transcript: Array<{ role: string; content: string }>,
): Promise<void> {
  try {
    if (!containsWrapUpPhrase(assistantReply)) return;

    const existingLead = await storage.getLeadByConversation(conversationId);
    if (existingLead?.emailSent) return;

    const extracted = await extractFullLead(transcript);

    const merged = {
      name: extracted.name || existingLead?.name || null,
      email: extracted.email || existingLead?.email || null,
      phone: extracted.phone || existingLead?.phone || null,
      treatment: extracted.treatment || existingLead?.treatment || null,
      destination: extracted.destination || existingLead?.destination || null,
      travelDate: extracted.travelDate || existingLead?.travelDate || null,
    };

    // Don't email unless at least one contact method (email or phone) was collected.
    // Wrap-up phrases like "arrange a free consultation" can fire early; we only want
    // an email when there's actually something the team can act on.
    if (!merged.email && !merged.phone) return;

    if (existingLead) {
      const updates: Record<string, string | boolean | null> = { emailSent: true };
      if (merged.name && merged.name !== existingLead.name) updates.name = merged.name;
      if (merged.phone && merged.phone !== existingLead.phone) updates.phone = merged.phone;
      if (merged.email && merged.email !== existingLead.email) updates.email = merged.email;
      if (merged.treatment && merged.treatment !== existingLead.treatment) updates.treatment = merged.treatment;
      if (merged.destination && merged.destination !== existingLead.destination) updates.destination = merged.destination;
      if (merged.travelDate && merged.travelDate !== existingLead.travelDate) updates.travelDate = merged.travelDate;
      await storage.updateLead(existingLead.id, updates);
    } else {
      await storage.createLead({
        conversationId,
        name: merged.name,
        phone: merged.phone,
        email: merged.email,
        treatment: merged.treatment,
        destination: merged.destination,
        travelDate: merged.travelDate,
        emailSent: true,
      });
    }

    const fullTranscript = await storage.getConversationMessages(conversationId);
    const transcriptForEmail = fullTranscript
      .filter((m) => m.role === "user" || m.role === "assistant")
      .map((m) => ({ role: m.role as "user" | "assistant", content: m.content }));

    await sendChatLeadEmail({
      conversationId,
      lead: merged,
      transcript: transcriptForEmail,
    });
  } catch (err) {
    console.error("maybeSendLeadEmail error (non-fatal):", err);
  }
}

const MAYA_SYSTEM_PROMPT = `You are Maya, a friendly patient coordinator at Istanbul Bariatric Center. You chat naturally like a real person on WhatsApp — short, warm, helpful.

LANGUAGE: Detect the visitor's language and reply in the same language. Default to English.

RESPONSE STYLE (CRITICAL):
- Keep replies to 1-3 short sentences. MAX 2-3 lines. Never write paragraphs or bullet lists.
- Talk like a real person texting, not a brochure. Be warm and natural.
- Give just enough info to answer, then steer toward connecting them with the team.
- NEVER dump treatment details, long pricing breakdowns, or medical info walls.
- If they ask detailed medical questions, keep it brief and say our medical team will explain everything properly.

YOUR GOAL — COLLECT CONTACT INFO:
Your hidden priority is to naturally collect: (1) Name, (2) Phone with country code, (3) Email.
- Ask for ONE piece at a time, woven naturally into the conversation.
- After answering a question: "I can have our coordinator call you with all the details — what's your name?"
- After giving a price range: "Want me to get the team to send you a personalized quote? What's the best number to reach you?"
- Then later: "I'll also email you the info — what's your email?"
- If they resist, don't push. Continue chatting and try once more later.
- Once you have all three, stop asking and just be helpful.

HOW TO ANSWER QUESTIONS:
- Prices: Give a quick range only (e.g. "Sleeve starts from £2,950 all-inclusive"). Don't list every package.
- Treatments: One or two sentence summary max. Then: "Our team can go through everything with you in detail."
- Medical questions: "That's a great question for Dr. Ustun — want me to arrange a free consultation?"
- Recovery/diet/risks: Brief reassurance, then direct to the medical team.
- Always reassure: "Our coordinators handle everything — hospital, hotel, transfers, aftercare. You're in good hands."

QUICK REFERENCE (use sparingly, don't recite):
- Sleeve: from £2,950 | Bypass: from £3,350 | Balloon: from £1,650 | ESG: from £4,950
- JCI-accredited hospitals, Dr. Murat Ustun (21+ yrs, 8000+ ops)
- All-inclusive packages: hospital, hotel, airport transfers, interpreter, aftercare
- WhatsApp: +44 7491 068686 (UK) or +90 532 413 1143 (Turkey)
- Website: istanbulbariatriccenter.com`;

function extractLeadInfo(messagesArr: Array<{role: string; content: string}>): { name?: string; phone?: string; email?: string } {
  const lead: { name?: string; phone?: string; email?: string } = {};
  
  for (const msg of messagesArr) {
    if (msg.role !== "user") continue;
    const text = msg.content;
    
    const emailMatch = text.match(/[\w.+-]+@[\w-]+\.[\w.]+/);
    if (emailMatch) lead.email = emailMatch[0];
    
    const phoneMatch = text.match(/\+?\d[\d\s\-().]{7,}\d/);
    if (phoneMatch) lead.phone = phoneMatch[0].trim();
    
    const namePatterns = [
      /(?:my name is|i'?m|i am|name:?)\s+([A-Z][a-z]+(?:\s+[A-Z][a-z]+)*)/i,
      /^([A-Z][a-z]+\s+[A-Z][a-z]+)$/m,
    ];
    for (const pattern of namePatterns) {
      const match = text.match(pattern);
      if (match) {
        lead.name = match[1].trim();
        break;
      }
    }
  }
  
  return lead;
}

export function registerMayaChatRoutes(app: Express): void {
  app.post("/api/maya-chat", async (req: Request, res: Response) => {
    try {
      const { messages: userMessages, conversationId: clientConvoId } = req.body;

      if (!userMessages || !Array.isArray(userMessages)) {
        return res.status(400).json({ error: "Messages array is required" });
      }

      let conversationId = clientConvoId ? parseInt(clientConvoId) : null;
      
      try {
        if (!conversationId) {
          const firstMsg = userMessages[0]?.content || "New conversation";
          const title = firstMsg.substring(0, 100);
          const convo = await storage.createConversation(title);
          conversationId = convo.id;
        }
        
        const lastMsg = userMessages[userMessages.length - 1];
        if (lastMsg && lastMsg.role === "user") {
          await storage.addMessage(conversationId, lastMsg.role, lastMsg.content);
        }
      } catch (dbErr) {
        console.error("DB save error (non-fatal):", dbErr);
      }

      const chatMessages: OpenAI.ChatCompletionMessageParam[] = [
        { role: "system", content: MAYA_SYSTEM_PROMPT },
        ...userMessages.map((m: { role: string; content: string }) => ({
          role: m.role as "user" | "assistant",
          content: m.content,
        })),
      ];

      res.setHeader("Content-Type", "text/event-stream");
      res.setHeader("Cache-Control", "no-cache");
      res.setHeader("Connection", "keep-alive");
      res.setHeader("X-Accel-Buffering", "no");
      res.flushHeaders();

      if (conversationId) {
        res.write(`data: ${JSON.stringify({ conversationId })}\n\n`);
      }

      const stream = await openai.chat.completions.create({
        model: "gpt-4o-mini",
        messages: chatMessages,
        stream: true,
        max_tokens: 300,
      });

      let fullResponse = "";
      for await (const chunk of stream) {
        const content = chunk.choices[0]?.delta?.content || "";
        if (content) {
          fullResponse += content;
          res.write(`data: ${JSON.stringify({ content })}\n\n`);
        }
      }

      try {
        if (conversationId && fullResponse) {
          await storage.addMessage(conversationId, "assistant", fullResponse);
        }
        
        const leadInfo = extractLeadInfo(userMessages);
        if (conversationId && (leadInfo.name || leadInfo.phone || leadInfo.email)) {
          const existingLead = await storage.getLeadByConversation(conversationId);
          if (existingLead) {
            const updates: Record<string, string | null> = {};
            if (leadInfo.name && leadInfo.name !== existingLead.name) updates.name = leadInfo.name;
            if (leadInfo.phone && leadInfo.phone !== existingLead.phone) updates.phone = leadInfo.phone;
            if (leadInfo.email && leadInfo.email !== existingLead.email) updates.email = leadInfo.email;
            if (Object.keys(updates).length > 0) {
              await storage.updateLead(existingLead.id, updates);
            }
          } else {
            await storage.createLead({
              conversationId,
              name: leadInfo.name || null,
              phone: leadInfo.phone || null,
              email: leadInfo.email || null,
            });
          }
        }

        if (conversationId && fullResponse) {
          const fullTranscript = [
            ...userMessages,
            { role: "assistant", content: fullResponse },
          ];
          maybeSendLeadEmail(conversationId, fullResponse, fullTranscript).catch((err) => {
            console.error("Background lead email error:", err);
          });
        }
      } catch (dbErr) {
        console.error("DB save response error (non-fatal):", dbErr);
      }

      res.write(`data: ${JSON.stringify({ done: true })}\n\n`);
      res.end();
    } catch (error) {
      console.error("Maya chat error:", error);
      if (res.headersSent) {
        res.write(`data: ${JSON.stringify({ error: "Something went wrong" })}\n\n`);
        res.end();
      } else {
        res.status(500).json({ error: "Failed to process message" });
      }
    }
  });
}

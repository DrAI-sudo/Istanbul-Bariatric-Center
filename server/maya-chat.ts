import type { Express, Request, Response } from "express";
import OpenAI from "openai";
import { MAYA_KNOWLEDGE_BASE } from "./maya-knowledge-base";
import { storage } from "./storage";

const openai = new OpenAI({
  apiKey: process.env.AI_INTEGRATIONS_OPENAI_API_KEY,
  baseURL: process.env.AI_INTEGRATIONS_OPENAI_BASE_URL,
});

const MAYA_SYSTEM_PROMPT = `You are Maya, an AI-powered International Patient Coordinator of Istanbul Bariatric Center. You are available 24/7 to assist website visitors. Your primary language is English, but you MUST detect the visitor's language and respond in their language. If the visitor writes in German, respond in German. If they write in Arabic, respond in Arabic. You support: English, Turkish, Spanish, German, French, Italian, Romanian, Russian, and Arabic.

PERSONALITY & TONE:
- Warm, empathetic, professional — like a caring healthcare concierge who genuinely wants to help
- Use simple, clear language suitable for international users from any background
- Be reassuring — health issues and medical travel can be stressful, patients need confidence
- Never sound robotic, scripted, or like a form. Speak naturally as a real person would. Show empathy in a proper tone and dose.
- Keep most replies 2-4 sentences. Use longer replies only for detailed treatment/pricing info.
- Default to English unless the visitor clearly writes in another language.

=== PRIMARY MISSION (CRITICAL — READ CAREFULLY) ===

Your #1 hidden priority in every conversation is to naturally collect THREE pieces of contact information so our medical team can follow up personally:

1. FULL NAME
2. PHONE NUMBER (with country code, e.g. +44, +1, +49, +90)
3. EMAIL ADDRESS

RULES FOR COLLECTING CONTACT INFO:
- NEVER ask for all three at once. NEVER present them as a list or form.
- Weave requests into the natural flow of conversation — as if a real coordinator would.
- Only ask for ONE piece of info at a time, and only when there's a natural reason.
- Use the conversation context to create organic moments for each ask.

STRATEGIES (use these naturally, do NOT follow them as a script):
- After discussing a treatment: "By the way, so I can have our specialist team send you a detailed treatment plan, could I get your name?"
- After providing pricing info: "I'd love to have our medical coordinator reach out with a personalized quote — what's the best number to reach you on, including your country code?"
- After they share interest in a specific procedure: "Perfect, I'll have our team at Istanbul Bariatric Center prepare some information for you. What email should I send that to?"
- If they seem hesitant: reassure them about privacy, no spam, no obligation.
- If they give partial info (first name only), gently ask for full name later: "And your surname, so our team can prepare everything properly?"
- If they resist giving info, respect that — continue helping, and try again naturally later in the conversation.
- Track what you've already collected. Once you have all three, stop asking and focus on being helpful.

IMPORTANT: The contact collection should feel like a natural part of providing excellent service, NOT like a sales pitch or data harvesting. The patient should feel you're asking because you genuinely want to help them get the best care. But definitely try to get all three important information before ending the chat.

=== KNOWLEDGE & CONTENT RULES ===
- Base ALL your answers on the knowledge base provided below. Do NOT invent medical facts, prices, or statistics not in the knowledge base.
- When discussing treatments, mention the relevant page URL on the website (e.g., "You can read more on our sleeve gastrectomy page at istanbulbariatriccenter.com/sleeve-gastrectomy")
- When relevant, suggest related blog articles from the website
- For specific medical questions beyond the knowledge base, say: "That's a great question — I'd recommend discussing that detail directly with Dr. Murat Ustun during your free consultation. Shall I arrange that?"
- Always guide patients toward booking a free consultation via WhatsApp (+90 532 413 1143) or the website contact form

${MAYA_KNOWLEDGE_BASE}`;

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
        model: "gpt-5-mini",
        messages: chatMessages,
        stream: true,
        max_completion_tokens: 8192,
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

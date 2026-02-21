import { 
  type User, type InsertUser, type ContactSubmission, type InsertContactSubmission, 
  type InsertPageView, type PageView, type ChatbotLead, type InsertChatbotLead,
  users, contactSubmissions, pageViews, chatbotLeads,
  conversations, messages
} from "@shared/schema";
import { db } from "./db";
import { eq, desc, sql, gte, and, count, countDistinct } from "drizzle-orm";

export interface IStorage {
  getUser(id: string): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  createContactSubmission(submission: InsertContactSubmission): Promise<ContactSubmission>;
  getAllContactSubmissions(): Promise<ContactSubmission[]>;
  deleteContactSubmission(id: number): Promise<void>;

  createPageView(view: InsertPageView): Promise<PageView>;
  updatePageViewDuration(sessionId: string, path: string, duration: number): Promise<void>;
  getPageViewStats(since: Date): Promise<{
    totalViews: number;
    uniqueVisitors: number;
    totalSessions: number;
    avgDuration: number;
    pageStats: Array<{ path: string; views: number; uniqueVisitors: number; avgDuration: number }>;
    dailyStats: Array<{ date: string; visitors: number; sessions: number }>;
  }>;

  createConversation(title: string): Promise<{ id: number }>;
  addMessage(conversationId: number, role: string, content: string): Promise<void>;
  getAllConversations(): Promise<Array<{ id: number; title: string; createdAt: Date; messageCount: number }>>;
  getConversationMessages(conversationId: number): Promise<Array<{ id: number; role: string; content: string; createdAt: Date }>>;
  deleteConversation(conversationId: number): Promise<void>;

  createLead(lead: InsertChatbotLead): Promise<ChatbotLead>;
  getAllLeads(): Promise<ChatbotLead[]>;
  deleteLead(id: number): Promise<void>;
}

export class DatabaseStorage implements IStorage {
  async getUser(id: string): Promise<User | undefined> {
    const result = await db.select().from(users).where(eq(users.id, id));
    return result[0];
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    const result = await db.select().from(users).where(eq(users.username, username));
    return result[0];
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const result = await db.insert(users).values(insertUser).returning();
    return result[0];
  }

  async createContactSubmission(submission: InsertContactSubmission): Promise<ContactSubmission> {
    const result = await db.insert(contactSubmissions).values(submission).returning();
    return result[0];
  }

  async getAllContactSubmissions(): Promise<ContactSubmission[]> {
    return await db.select().from(contactSubmissions).orderBy(desc(contactSubmissions.createdAt));
  }

  async deleteContactSubmission(id: number): Promise<void> {
    await db.delete(contactSubmissions).where(eq(contactSubmissions.id, id));
  }

  async createPageView(view: InsertPageView): Promise<PageView> {
    const result = await db.insert(pageViews).values(view).returning();
    return result[0];
  }

  async updatePageViewDuration(sessionId: string, path: string, duration: number): Promise<void> {
    await db.update(pageViews)
      .set({ duration })
      .where(and(eq(pageViews.sessionId, sessionId), eq(pageViews.path, path)));
  }

  async getPageViewStats(since: Date) {
    const viewsResult = await db.select({
      totalViews: count(),
      uniqueVisitors: countDistinct(pageViews.sessionId),
    }).from(pageViews).where(gte(pageViews.createdAt, since));

    const sessionsResult = await db.select({
      totalSessions: countDistinct(pageViews.sessionId),
    }).from(pageViews).where(gte(pageViews.createdAt, since));

    const avgDurResult = await db.select({
      avgDuration: sql<number>`coalesce(avg(${pageViews.duration}), 0)::int`,
    }).from(pageViews).where(and(gte(pageViews.createdAt, since), sql`${pageViews.duration} > 0`));

    const pageStats = await db.select({
      path: pageViews.path,
      views: count(),
      uniqueVisitors: countDistinct(pageViews.sessionId),
      avgDuration: sql<number>`coalesce(avg(${pageViews.duration}), 0)::int`,
    }).from(pageViews)
      .where(gte(pageViews.createdAt, since))
      .groupBy(pageViews.path)
      .orderBy(sql`count(*) desc`);

    const dailyStats = await db.select({
      date: sql<string>`to_char(${pageViews.createdAt}, 'YYYY-MM-DD')`,
      visitors: countDistinct(pageViews.sessionId),
      sessions: count(),
    }).from(pageViews)
      .where(gte(pageViews.createdAt, since))
      .groupBy(sql`to_char(${pageViews.createdAt}, 'YYYY-MM-DD')`)
      .orderBy(sql`to_char(${pageViews.createdAt}, 'YYYY-MM-DD')`);

    return {
      totalViews: Number(viewsResult[0]?.totalViews ?? 0),
      uniqueVisitors: Number(viewsResult[0]?.uniqueVisitors ?? 0),
      totalSessions: Number(sessionsResult[0]?.totalSessions ?? 0),
      avgDuration: Number(avgDurResult[0]?.avgDuration ?? 0),
      pageStats: pageStats.map(p => ({
        path: p.path,
        views: Number(p.views),
        uniqueVisitors: Number(p.uniqueVisitors),
        avgDuration: Number(p.avgDuration),
      })),
      dailyStats: dailyStats.map(d => ({
        date: d.date,
        visitors: Number(d.visitors),
        sessions: Number(d.sessions),
      })),
    };
  }

  async createConversation(title: string): Promise<{ id: number }> {
    const result = await db.insert(conversations).values({ title }).returning({ id: conversations.id });
    return result[0];
  }

  async addMessage(conversationId: number, role: string, content: string): Promise<void> {
    await db.insert(messages).values({ conversationId, role, content });
  }

  async getAllConversations() {
    const result = await db.select({
      id: conversations.id,
      title: conversations.title,
      createdAt: conversations.createdAt,
      messageCount: sql<number>`(select count(*) from ${messages} where ${messages.conversationId} = ${conversations.id})::int`,
    }).from(conversations).orderBy(desc(conversations.createdAt));
    return result.map(r => ({ ...r, messageCount: Number(r.messageCount) }));
  }

  async getConversationMessages(conversationId: number) {
    return await db.select({
      id: messages.id,
      role: messages.role,
      content: messages.content,
      createdAt: messages.createdAt,
    }).from(messages)
      .where(eq(messages.conversationId, conversationId))
      .orderBy(messages.createdAt);
  }

  async deleteConversation(conversationId: number): Promise<void> {
    await db.delete(conversations).where(eq(conversations.id, conversationId));
  }

  async createLead(lead: InsertChatbotLead): Promise<ChatbotLead> {
    const result = await db.insert(chatbotLeads).values(lead).returning();
    return result[0];
  }

  async getAllLeads(): Promise<ChatbotLead[]> {
    return await db.select().from(chatbotLeads).orderBy(desc(chatbotLeads.createdAt));
  }

  async deleteLead(id: number): Promise<void> {
    await db.delete(chatbotLeads).where(eq(chatbotLeads.id, id));
  }
}

export const storage = new DatabaseStorage();

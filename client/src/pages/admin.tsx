import { useState, useEffect, useCallback } from "react";

type Tab = "overview" | "traffic" | "conversations" | "leads" | "contacts";

interface Analytics {
  totalViews: number;
  uniqueVisitors: number;
  totalSessions: number;
  avgDuration: number;
  pageStats: Array<{ path: string; views: number; uniqueVisitors: number; avgDuration: number }>;
  dailyStats: Array<{ date: string; visitors: number; sessions: number }>;
}

interface Conversation {
  id: number;
  title: string;
  createdAt: string;
  messageCount: number;
}

interface ChatMessage {
  id: number;
  role: string;
  content: string;
  createdAt: string;
}

interface Lead {
  id: number;
  conversationId: number | null;
  name: string | null;
  phone: string | null;
  email: string | null;
  createdAt: string;
}

interface ContactSubmission {
  id: number;
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  createdAt: string;
}

function formatDuration(seconds: number): string {
  if (seconds < 60) return `${seconds}s`;
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return `${mins}m ${secs}s`;
}

function PieChart({ data }: { data: Array<{ label: string; value: number; color: string }> }) {
  const total = data.reduce((sum, d) => sum + d.value, 0);
  if (total === 0) {
    return (
      <div className="flex items-center justify-center h-64 text-gray-400">
        No data available
      </div>
    );
  }

  let cumulative = 0;
  const slices = data.filter(d => d.value > 0).map((d) => {
    const startAngle = (cumulative / total) * 360;
    cumulative += d.value;
    const endAngle = (cumulative / total) * 360;
    const pct = ((d.value / total) * 100).toFixed(1);
    return { ...d, startAngle, endAngle, pct };
  });

  function polarToCartesian(cx: number, cy: number, r: number, angle: number) {
    const rad = ((angle - 90) * Math.PI) / 180;
    return { x: cx + r * Math.cos(rad), y: cy + r * Math.sin(rad) };
  }

  function describeArc(cx: number, cy: number, r: number, start: number, end: number) {
    if (end - start >= 360) {
      const mid = start + 180;
      const s1 = polarToCartesian(cx, cy, r, start);
      const m1 = polarToCartesian(cx, cy, r, mid);
      return `M ${s1.x} ${s1.y} A ${r} ${r} 0 1 1 ${m1.x} ${m1.y} A ${r} ${r} 0 1 1 ${s1.x} ${s1.y}`;
    }
    const s = polarToCartesian(cx, cy, r, start);
    const e = polarToCartesian(cx, cy, r, end);
    const large = end - start > 180 ? 1 : 0;
    return `M 100 100 L ${s.x} ${s.y} A 80 80 0 ${large} 1 ${e.x} ${e.y} Z`;
  }

  return (
    <div className="flex items-center gap-6">
      <svg viewBox="0 0 200 200" className="w-48 h-48">
        {slices.map((s, i) => (
          <path
            key={i}
            d={describeArc(100, 100, 80, s.startAngle, s.endAngle)}
            fill={s.color}
            stroke="white"
            strokeWidth="2"
          />
        ))}
      </svg>
      <div className="space-y-2">
        {slices.map((s, i) => (
          <div key={i} className="flex items-center gap-2 text-sm">
            <div className="w-3 h-3 rounded-full" style={{ backgroundColor: s.color }} />
            <span className="text-gray-600">{s.label}: {s.value} ({s.pct}%)</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function BarChart({ data }: { data: Array<{ date: string; visitors: number; sessions: number }> }) {
  if (data.length === 0) {
    return <div className="flex items-center justify-center h-48 text-gray-400">No data available</div>;
  }

  const maxVal = Math.max(...data.map(d => Math.max(d.visitors, d.sessions)), 1);

  return (
    <div className="overflow-x-auto">
      <div className="flex items-end gap-1 h-48 min-w-fit px-2">
        {data.map((d, i) => (
          <div key={i} className="flex flex-col items-center gap-1 min-w-[40px]">
            <div className="flex items-end gap-0.5 h-36">
              <div
                className="w-4 bg-blue-500 rounded-t"
                style={{ height: `${(d.visitors / maxVal) * 100}%`, minHeight: d.visitors > 0 ? '4px' : '0' }}
                title={`Visitors: ${d.visitors}`}
              />
              <div
                className="w-4 bg-gray-300 rounded-t"
                style={{ height: `${(d.sessions / maxVal) * 100}%`, minHeight: d.sessions > 0 ? '4px' : '0' }}
                title={`Sessions: ${d.sessions}`}
              />
            </div>
            <span className="text-[10px] text-gray-500 rotate-[-45deg] origin-top-left whitespace-nowrap">
              {d.date.slice(5)}
            </span>
          </div>
        ))}
      </div>
      <div className="flex items-center gap-4 mt-4 text-xs text-gray-500 px-2">
        <div className="flex items-center gap-1"><div className="w-3 h-3 bg-blue-500 rounded" /> Visitors</div>
        <div className="flex items-center gap-1"><div className="w-3 h-3 bg-gray-300 rounded" /> Sessions</div>
      </div>
    </div>
  );
}

export default function AdminDashboard() {
  const [token, setToken] = useState<string | null>(() => sessionStorage.getItem("admin_token"));
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState("");
  const [activeTab, setActiveTab] = useState<Tab>("overview");
  const [period, setPeriod] = useState("daily");
  const [analytics, setAnalytics] = useState<Analytics | null>(null);
  const [conversations, setConversations] = useState<Conversation[]>([]);
  const [selectedConvo, setSelectedConvo] = useState<number | null>(null);
  const [convoMessages, setConvoMessages] = useState<ChatMessage[]>([]);
  const [leads, setLeads] = useState<Lead[]>([]);
  const [contacts, setContacts] = useState<ContactSubmission[]>([]);
  const [loading, setLoading] = useState(false);

  const headers = useCallback(() => ({
    "Content-Type": "application/json",
    "x-admin-token": token || "",
  }), [token]);

  const fetchAnalytics = useCallback(async () => {
    if (!token) return;
    setLoading(true);
    try {
      const res = await fetch(`/api/admin/analytics?period=${period}`, { headers: headers() });
      if (res.status === 401) { setToken(null); sessionStorage.removeItem("admin_token"); return; }
      const data = await res.json();
      if (data.success) setAnalytics(data.data);
    } catch (e) { console.error(e); }
    setLoading(false);
  }, [token, period, headers]);

  const fetchConversations = useCallback(async () => {
    if (!token) return;
    try {
      const res = await fetch("/api/admin/conversations", { headers: headers() });
      if (res.status === 401) { setToken(null); sessionStorage.removeItem("admin_token"); return; }
      const data = await res.json();
      if (data.success) setConversations(data.data);
    } catch (e) { console.error(e); }
  }, [token, headers]);

  const fetchMessages = useCallback(async (id: number) => {
    if (!token) return;
    try {
      const res = await fetch(`/api/admin/conversations/${id}`, { headers: headers() });
      const data = await res.json();
      if (data.success) setConvoMessages(data.data);
    } catch (e) { console.error(e); }
  }, [token, headers]);

  const fetchLeads = useCallback(async () => {
    if (!token) return;
    try {
      const res = await fetch("/api/admin/leads", { headers: headers() });
      if (res.status === 401) { setToken(null); sessionStorage.removeItem("admin_token"); return; }
      const data = await res.json();
      if (data.success) setLeads(data.data);
    } catch (e) { console.error(e); }
  }, [token, headers]);

  const fetchContacts = useCallback(async () => {
    if (!token) return;
    try {
      const res = await fetch("/api/admin/contact-submissions", { headers: headers() });
      if (res.status === 401) { setToken(null); sessionStorage.removeItem("admin_token"); return; }
      const data = await res.json();
      if (data.success) setContacts(data.data);
    } catch (e) { console.error(e); }
  }, [token, headers]);

  useEffect(() => {
    if (!token) return;
    if (activeTab === "overview" || activeTab === "traffic") { fetchAnalytics(); fetchLeads(); }
    if (activeTab === "conversations") fetchConversations();
    if (activeTab === "leads") fetchLeads();
    if (activeTab === "contacts") fetchContacts();
  }, [token, activeTab, period, fetchAnalytics, fetchConversations, fetchLeads, fetchContacts]);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoginError("");
    try {
      const res = await fetch("/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });
      const text = await res.text();
      let data;
      try {
        data = JSON.parse(text);
      } catch {
        setLoginError("Server error - please try again");
        return;
      }
      if (data.success) {
        setToken(data.token);
        sessionStorage.setItem("admin_token", data.token);
        setPassword("");
      } else {
        setLoginError(data.error || "Invalid password");
      }
    } catch (e) {
      setLoginError("Connection error - please check your internet and try again");
    }
  };

  const handleDeleteConvo = async (id: number) => {
    if (!confirm("Delete this conversation?")) return;
    try {
      await fetch(`/api/admin/conversations/${id}`, { method: "DELETE", headers: headers() });
      setConversations(prev => prev.filter(c => c.id !== id));
      if (selectedConvo === id) { setSelectedConvo(null); setConvoMessages([]); }
    } catch (e) { console.error(e); }
  };

  const handleDeleteLead = async (id: number) => {
    if (!confirm("Delete this lead?")) return;
    try {
      await fetch(`/api/admin/leads/${id}`, { method: "DELETE", headers: headers() });
      setLeads(prev => prev.filter(l => l.id !== id));
    } catch (e) { console.error(e); }
  };

  const handleDeleteContact = async (id: number) => {
    if (!confirm("Delete this submission?")) return;
    try {
      await fetch(`/api/admin/contact-submissions/${id}`, { method: "DELETE", headers: headers() });
      setContacts(prev => prev.filter(c => c.id !== id));
    } catch (e) { console.error(e); }
  };

  const handleLogout = () => {
    if (token) {
      fetch("/api/admin/logout", { method: "POST", headers: headers() }).catch(() => {});
    }
    setToken(null);
    sessionStorage.removeItem("admin_token");
  };

  if (!token) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="bg-white rounded-xl shadow-lg p-8 w-full max-w-md">
          <h1 className="text-2xl font-bold text-gray-900 mb-6 text-center" data-testid="text-admin-title">Admin Dashboard</h1>
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Enter admin password"
                data-testid="input-admin-password"
                autoFocus
              />
            </div>
            {loginError && <p className="text-red-500 text-sm" data-testid="text-login-error">{loginError}</p>}
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
              data-testid="button-admin-login"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    );
  }

  const tabs: { key: Tab; label: string }[] = [
    { key: "overview", label: "Overview" },
    { key: "traffic", label: "Traffic" },
    { key: "conversations", label: "Conversations" },
    { key: "leads", label: "Leads" },
    { key: "contacts", label: "Contact Forms" },
  ];

  const pieColors = ["#3b82f6", "#ef4444", "#10b981", "#f59e0b", "#8b5cf6", "#ec4899", "#06b6d4", "#f97316", "#6366f1", "#14b8a6"];

  const topPages = analytics?.pageStats.slice(0, 10) || [];
  const pieData = topPages.map((p, i) => ({
    label: p.path.length > 30 ? p.path.slice(0, 27) + "..." : p.path,
    value: p.views,
    color: pieColors[i % pieColors.length],
  }));

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
          <h1 className="text-xl font-bold text-gray-900" data-testid="text-dashboard-title">Istanbul Bariatric Center - Admin</h1>
          <button
            onClick={handleLogout}
            className="text-sm text-gray-500 hover:text-red-500 transition-colors"
            data-testid="button-admin-logout"
          >
            Logout
          </button>
        </div>
        <div className="max-w-7xl mx-auto px-4">
          <nav className="flex gap-1 overflow-x-auto">
            {tabs.map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`px-4 py-2.5 text-sm font-medium rounded-t-lg transition-colors whitespace-nowrap ${
                  activeTab === tab.key
                    ? "bg-blue-600 text-white"
                    : "text-gray-600 hover:bg-gray-100"
                }`}
                data-testid={`button-tab-${tab.key}`}
              >
                {tab.label}
              </button>
            ))}
          </nav>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-6">
        {(activeTab === "overview" || activeTab === "traffic") && (
          <div className="mb-4 flex gap-2">
            {["daily", "weekly", "monthly", "annually"].map((p) => (
              <button
                key={p}
                onClick={() => setPeriod(p)}
                className={`px-3 py-1.5 text-sm rounded-lg transition-colors ${
                  period === p ? "bg-blue-600 text-white" : "bg-white text-gray-600 border hover:bg-gray-50"
                }`}
                data-testid={`button-period-${p}`}
              >
                {p.charAt(0).toUpperCase() + p.slice(1)}
              </button>
            ))}
          </div>
        )}

        {activeTab === "overview" && (
          <div className="space-y-6">
            {loading ? (
              <div className="text-center py-12 text-gray-400">Loading...</div>
            ) : analytics ? (
              <>
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
                  <StatCard label="Unique Visitors" value={analytics.uniqueVisitors} color="text-blue-600" bg="bg-blue-50" />
                  <StatCard label="Page Views" value={analytics.totalViews} color="text-green-600" bg="bg-green-50" />
                  <StatCard label="Total Leads" value={leads.length} color="text-red-600" bg="bg-red-50" />
                  <StatCard label="Avg. Duration" value={formatDuration(analytics.avgDuration)} color="text-purple-600" bg="bg-purple-50" />
                  <StatCard label="Total Sessions" value={analytics.totalSessions} color="text-orange-600" bg="bg-orange-50" />
                </div>

                <div className="bg-white rounded-xl border p-6">
                  <h2 className="text-lg font-semibold text-gray-900 mb-4" data-testid="text-visited-pages-title">Visited Pages</h2>
                  {topPages.length === 0 ? (
                    <p className="text-gray-400 text-center py-8">No page view data yet. Visits will appear once users browse the site.</p>
                  ) : (
                    <div className="overflow-x-auto">
                      <table className="w-full text-sm">
                        <thead>
                          <tr className="border-b text-left text-gray-500">
                            <th className="pb-3 font-medium">Page</th>
                            <th className="pb-3 font-medium text-center">Views</th>
                            <th className="pb-3 font-medium text-center">Unique Visitors</th>
                            <th className="pb-3 font-medium text-center">Avg. Duration</th>
                          </tr>
                        </thead>
                        <tbody>
                          {topPages.map((p, i) => (
                            <tr key={i} className="border-b border-gray-50 hover:bg-gray-50">
                              <td className="py-3 text-gray-700">{p.path}</td>
                              <td className="py-3 text-center">
                                <span className="inline-flex items-center justify-center min-w-[28px] px-2 py-0.5 bg-green-100 text-green-700 rounded-full text-xs font-medium">
                                  {p.views}
                                </span>
                              </td>
                              <td className="py-3 text-center text-gray-600">{p.uniqueVisitors}</td>
                              <td className="py-3 text-center text-gray-600">{formatDuration(p.avgDuration)}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  )}
                </div>

                <div className="bg-white rounded-xl border p-6">
                  <h2 className="text-lg font-semibold text-gray-900 mb-4">Daily Visitor Chart</h2>
                  <BarChart data={analytics.dailyStats} />
                </div>
              </>
            ) : (
              <div className="text-center py-12 text-gray-400">No analytics data yet</div>
            )}
          </div>
        )}

        {activeTab === "traffic" && (
          <div className="space-y-6">
            {analytics ? (
              <>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <div className="bg-white rounded-xl border p-6">
                    <h2 className="text-lg font-semibold text-gray-900 mb-4">Page Views Distribution</h2>
                    <PieChart data={pieData} />
                  </div>
                  <div className="bg-white rounded-xl border p-6">
                    <h2 className="text-lg font-semibold text-gray-900 mb-4">Visitor Trend</h2>
                    <BarChart data={analytics.dailyStats} />
                  </div>
                </div>

                <div className="bg-white rounded-xl border p-6">
                  <h2 className="text-lg font-semibold text-gray-900 mb-4">All Pages</h2>
                  {analytics.pageStats.length === 0 ? (
                    <p className="text-gray-400 text-center py-8">No traffic data yet.</p>
                  ) : (
                    <div className="overflow-x-auto">
                      <table className="w-full text-sm">
                        <thead>
                          <tr className="border-b text-left text-gray-500">
                            <th className="pb-3 font-medium">Page</th>
                            <th className="pb-3 font-medium text-center">Views</th>
                            <th className="pb-3 font-medium text-center">Unique Visitors</th>
                            <th className="pb-3 font-medium text-center">Avg. Duration</th>
                          </tr>
                        </thead>
                        <tbody>
                          {analytics.pageStats.map((p, i) => (
                            <tr key={i} className="border-b border-gray-50 hover:bg-gray-50">
                              <td className="py-3 text-gray-700">{p.path}</td>
                              <td className="py-3 text-center">
                                <span className="inline-flex items-center justify-center min-w-[28px] px-2 py-0.5 bg-green-100 text-green-700 rounded-full text-xs font-medium">
                                  {p.views}
                                </span>
                              </td>
                              <td className="py-3 text-center text-gray-600">{p.uniqueVisitors}</td>
                              <td className="py-3 text-center text-gray-600">{formatDuration(p.avgDuration)}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  )}
                </div>
              </>
            ) : (
              <div className="text-center py-12 text-gray-400">Loading traffic data...</div>
            )}
          </div>
        )}

        {activeTab === "conversations" && (
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold text-gray-900">Chatbot Conversations ({conversations.length})</h2>
            </div>

            {selectedConvo ? (
              <div className="bg-white rounded-xl border">
                <div className="flex items-center justify-between p-4 border-b">
                  <button
                    onClick={() => { setSelectedConvo(null); setConvoMessages([]); }}
                    className="text-blue-600 hover:text-blue-800 text-sm font-medium"
                    data-testid="button-back-conversations"
                  >
                    &larr; Back to list
                  </button>
                  <button
                    onClick={() => handleDeleteConvo(selectedConvo)}
                    className="text-red-500 hover:text-red-700 text-sm font-medium"
                    data-testid="button-delete-conversation"
                  >
                    Delete Conversation
                  </button>
                </div>
                <div className="p-4 space-y-3 max-h-[600px] overflow-y-auto">
                  {convoMessages.map((msg) => (
                    <div
                      key={msg.id}
                      className={`p-3 rounded-lg ${
                        msg.role === "user"
                          ? "bg-blue-50 ml-8"
                          : "bg-gray-50 mr-8"
                      }`}
                    >
                      <div className="flex items-center gap-2 mb-1">
                        <span className={`text-xs font-semibold ${msg.role === "user" ? "text-blue-600" : "text-green-600"}`}>
                          {msg.role === "user" ? "Patient" : "Maya"}
                        </span>
                        <span className="text-xs text-gray-400">
                          {new Date(msg.createdAt).toLocaleString()}
                        </span>
                      </div>
                      <p className="text-sm text-gray-700 whitespace-pre-wrap">{msg.content}</p>
                    </div>
                  ))}
                  {convoMessages.length === 0 && (
                    <p className="text-gray-400 text-center py-8">No messages found</p>
                  )}
                </div>
              </div>
            ) : (
              <div className="bg-white rounded-xl border">
                {conversations.length === 0 ? (
                  <p className="text-gray-400 text-center py-8">No conversations yet</p>
                ) : (
                  <div className="divide-y">
                    {conversations.map((convo) => (
                      <div key={convo.id} className="flex items-center justify-between p-4 hover:bg-gray-50 transition-colors">
                        <button
                          onClick={() => { setSelectedConvo(convo.id); fetchMessages(convo.id); }}
                          className="flex-1 text-left"
                          data-testid={`button-conversation-${convo.id}`}
                        >
                          <p className="text-sm font-medium text-gray-900 truncate max-w-md">
                            {convo.title}
                          </p>
                          <p className="text-xs text-gray-500 mt-1">
                            {new Date(convo.createdAt).toLocaleString()} &middot; {convo.messageCount} messages
                          </p>
                        </button>
                        <button
                          onClick={(e) => { e.stopPropagation(); handleDeleteConvo(convo.id); }}
                          className="text-red-400 hover:text-red-600 p-2 text-sm"
                          data-testid={`button-delete-convo-${convo.id}`}
                        >
                          Delete
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>
        )}

        {activeTab === "leads" && (
          <div className="space-y-4">
            <h2 className="text-lg font-semibold text-gray-900">Chatbot Leads ({leads.length})</h2>
            <div className="bg-white rounded-xl border">
              {leads.length === 0 ? (
                <p className="text-gray-400 text-center py-8">No leads captured yet. Maya will collect patient information during conversations.</p>
              ) : (
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b text-left text-gray-500">
                        <th className="p-4 font-medium">Name</th>
                        <th className="p-4 font-medium">Phone</th>
                        <th className="p-4 font-medium">Email</th>
                        <th className="p-4 font-medium">Date</th>
                        <th className="p-4 font-medium">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {leads.map((lead) => (
                        <tr key={lead.id} className="border-b border-gray-50 hover:bg-gray-50" data-testid={`row-lead-${lead.id}`}>
                          <td className="p-4 text-gray-700">{lead.name || "-"}</td>
                          <td className="p-4 text-gray-700">{lead.phone || "-"}</td>
                          <td className="p-4 text-gray-700">{lead.email || "-"}</td>
                          <td className="p-4 text-gray-500">{new Date(lead.createdAt).toLocaleString()}</td>
                          <td className="p-4">
                            <button
                              onClick={() => handleDeleteLead(lead.id)}
                              className="text-red-400 hover:text-red-600 text-sm"
                              data-testid={`button-delete-lead-${lead.id}`}
                            >
                              Delete
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          </div>
        )}

        {activeTab === "contacts" && (
          <div className="space-y-4">
            <h2 className="text-lg font-semibold text-gray-900">Contact Form Submissions ({contacts.length})</h2>
            <div className="bg-white rounded-xl border">
              {contacts.length === 0 ? (
                <p className="text-gray-400 text-center py-8">No contact form submissions yet</p>
              ) : (
                <div className="divide-y">
                  {contacts.map((c) => (
                    <div key={c.id} className="p-4 hover:bg-gray-50" data-testid={`row-contact-${c.id}`}>
                      <div className="flex items-start justify-between">
                        <div className="space-y-1">
                          <p className="font-medium text-gray-900">{c.name}</p>
                          <p className="text-sm text-gray-600">{c.email} &middot; {c.phone}</p>
                          <p className="text-sm font-medium text-gray-700 mt-2">{c.subject}</p>
                          <p className="text-sm text-gray-600 mt-1">{c.message}</p>
                          <p className="text-xs text-gray-400 mt-2">{new Date(c.createdAt).toLocaleString()}</p>
                        </div>
                        <button
                          onClick={() => handleDeleteContact(c.id)}
                          className="text-red-400 hover:text-red-600 text-sm shrink-0 ml-4"
                          data-testid={`button-delete-contact-${c.id}`}
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}
      </main>
    </div>
  );
}

function StatCard({ label, value, color, bg }: { label: string; value: string | number; color: string; bg: string }) {
  return (
    <div className={`${bg} rounded-xl p-5 text-center`} data-testid={`stat-${label.toLowerCase().replace(/\s+/g, "-")}`}>
      <p className={`text-3xl font-bold ${color}`}>{value}</p>
      <p className="text-sm text-gray-500 mt-1">{label}</p>
    </div>
  );
}

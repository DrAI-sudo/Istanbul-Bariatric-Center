import { useState, useRef, useEffect, useCallback } from "react";

interface ChatMessage {
  role: "user" | "assistant";
  content: string;
}

const GREETING_MESSAGES: Record<string, string> = {
  en: "Hey! 👋 I'm Maya from Istanbul Bariatric Center. What can I help you with today?",
  tr: "Merhaba! 👋 Ben Maya, Istanbul Bariatric Center'dan. Size nasıl yardımcı olabilirim?",
  es: "¡Hola! 👋 Soy Maya de Istanbul Bariatric Center. ¿En qué puedo ayudarte?",
  de: "Hallo! 👋 Ich bin Maya vom Istanbul Bariatric Center. Wie kann ich Ihnen helfen?",
  fr: "Bonjour ! 👋 Je suis Maya d'Istanbul Bariatric Center. Comment puis-je vous aider ?",
  it: "Ciao! 👋 Sono Maya dell'Istanbul Bariatric Center. Come posso aiutarti?",
  ro: "Bună! 👋 Sunt Maya de la Istanbul Bariatric Center. Cu ce te pot ajuta?",
  ru: "Привет! 👋 Я Майя из Istanbul Bariatric Center. Чем могу помочь?",
  ar: "مرحباً! 👋 أنا مايا من مركز إسطنبول لجراحة السمنة. كيف أقدر أساعدك؟",
};

function detectLanguage(): string {
  const lang = navigator.language?.split("-")[0]?.toLowerCase() || "en";
  return GREETING_MESSAGES[lang] ? lang : "en";
}

export default function MayaChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState("");
  const [isStreaming, setIsStreaming] = useState(false);
  const [initialized, setInitialized] = useState(false);
  const [conversationId, setConversationId] = useState<number | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  const scrollToBottom = useCallback(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messages, scrollToBottom]);

  const handleOpen = useCallback(() => {
    setIsOpen(true);
    if (!initialized) {
      const lang = detectLanguage();
      setMessages([{ role: "assistant", content: GREETING_MESSAGES[lang] }]);
      setInitialized(true);
    }
    setTimeout(() => inputRef.current?.focus(), 100);
  }, [initialized]);

  const handleSend = useCallback(async () => {
    const trimmed = input.trim();
    if (!trimmed || isStreaming) return;

    const userMsg: ChatMessage = { role: "user", content: trimmed };
    const updatedMessages = [...messages, userMsg];
    setMessages(updatedMessages);
    setInput("");
    setIsStreaming(true);

    const assistantMsg: ChatMessage = { role: "assistant", content: "" };
    setMessages([...updatedMessages, assistantMsg]);

    try {
      const res = await fetch("/api/maya-chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: updatedMessages, conversationId }),
      });

      if (!res.ok) throw new Error("Failed");

      const reader = res.body?.getReader();
      if (!reader) throw new Error("No reader");

      const decoder = new TextDecoder();
      let buffer = "";
      let fullContent = "";

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;

        buffer += decoder.decode(value, { stream: true });
        const lines = buffer.split("\n");
        buffer = lines.pop() || "";

        for (const line of lines) {
          if (!line.startsWith("data: ")) continue;
          try {
            const data = JSON.parse(line.slice(6));
            if (data.conversationId && !conversationId) {
              setConversationId(data.conversationId);
            }
            if (data.content) {
              fullContent += data.content;
              setMessages((prev) => {
                const updated = [...prev];
                updated[updated.length - 1] = {
                  role: "assistant",
                  content: fullContent,
                };
                return updated;
              });
            }
          } catch {}
        }
      }
    } catch {
      setMessages((prev) => {
        const updated = [...prev];
        updated[updated.length - 1] = {
          role: "assistant",
          content: "I'm sorry, I'm having trouble connecting right now. Please try again or reach us via WhatsApp at +90 532 445 71 97.",
        };
        return updated;
      });
    } finally {
      setIsStreaming(false);
    }
  }, [input, isStreaming, messages]);

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === "Enter" && !e.shiftKey) {
        e.preventDefault();
        handleSend();
      }
    },
    [handleSend]
  );

  return (
    <>
      <style>{`
        .maya-chat-bubble {
          position: fixed;
          bottom: 24px;
          right: 24px;
          z-index: 9999;
          width: 64px;
          height: 64px;
          border-radius: 50%;
          cursor: pointer;
          box-shadow: 0 4px 20px rgba(0,0,0,0.25);
          transition: transform 0.2s ease, box-shadow 0.2s ease;
          border: 3px solid #fff;
          overflow: hidden;
          background: #0047AB;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .maya-chat-bubble:hover {
          transform: scale(1.08);
          box-shadow: 0 6px 28px rgba(0,71,171,0.4);
        }
        .maya-chat-bubble img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .maya-chat-window {
          position: fixed;
          bottom: 100px;
          right: 24px;
          z-index: 9999;
          width: 380px;
          max-width: calc(100vw - 32px);
          height: 520px;
          max-height: calc(100vh - 140px);
          background: #fff;
          border-radius: 16px;
          box-shadow: 0 8px 40px rgba(0,0,0,0.18);
          display: flex;
          flex-direction: column;
          overflow: hidden;
          animation: maya-slide-up 0.25s ease-out;
        }
        @keyframes maya-slide-up {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .maya-header {
          background: linear-gradient(135deg, #0047AB 0%, #0066CC 100%);
          color: #fff;
          padding: 16px;
          display: flex;
          align-items: center;
          gap: 12px;
          flex-shrink: 0;
        }
        .maya-header-avatar {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          border: 2px solid rgba(255,255,255,0.5);
          object-fit: cover;
          flex-shrink: 0;
        }
        .maya-header-info h3 {
          margin: 0;
          font-size: 15px;
          font-weight: 600;
        }
        .maya-header-info p {
          margin: 2px 0 0;
          font-size: 12px;
          opacity: 0.85;
        }
        .maya-header-close {
          margin-left: auto;
          background: none;
          border: none;
          color: #fff;
          cursor: pointer;
          padding: 4px;
          font-size: 20px;
          line-height: 1;
          opacity: 0.8;
          transition: opacity 0.15s;
        }
        .maya-header-close:hover {
          opacity: 1;
        }
        .maya-messages {
          flex: 1;
          overflow-y: auto;
          padding: 16px;
          display: flex;
          flex-direction: column;
          gap: 12px;
          background: #f8fafc;
        }
        .maya-msg {
          max-width: 85%;
          padding: 10px 14px;
          border-radius: 16px;
          font-size: 14px;
          line-height: 1.5;
          word-wrap: break-word;
          white-space: pre-wrap;
        }
        .maya-msg-user {
          align-self: flex-end;
          background: #0047AB;
          color: #fff;
          border-bottom-right-radius: 4px;
        }
        .maya-msg-assistant {
          align-self: flex-start;
          background: #fff;
          color: #1e293b;
          border: 1px solid #e2e8f0;
          border-bottom-left-radius: 4px;
        }
        .maya-input-area {
          padding: 12px 16px;
          border-top: 1px solid #e2e8f0;
          display: flex;
          gap: 8px;
          align-items: flex-end;
          background: #fff;
          flex-shrink: 0;
        }
        .maya-input-area textarea {
          flex: 1;
          border: 1px solid #d1d5db;
          border-radius: 12px;
          padding: 10px 14px;
          font-size: 14px;
          font-family: inherit;
          resize: none;
          outline: none;
          max-height: 80px;
          line-height: 1.4;
          transition: border-color 0.15s;
        }
        .maya-input-area textarea:focus {
          border-color: #0047AB;
        }
        .maya-send-btn {
          background: #0047AB;
          color: #fff;
          border: none;
          border-radius: 50%;
          width: 38px;
          height: 38px;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          transition: background 0.15s;
        }
        .maya-send-btn:hover:not(:disabled) {
          background: #003a8c;
        }
        .maya-send-btn:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }
        .maya-typing {
          display: flex;
          gap: 4px;
          padding: 8px 14px;
          align-self: flex-start;
        }
        .maya-typing-dot {
          width: 8px;
          height: 8px;
          background: #94a3b8;
          border-radius: 50%;
          animation: maya-bounce 1.4s infinite ease-in-out;
        }
        .maya-typing-dot:nth-child(1) { animation-delay: 0s; }
        .maya-typing-dot:nth-child(2) { animation-delay: 0.2s; }
        .maya-typing-dot:nth-child(3) { animation-delay: 0.4s; }
        @keyframes maya-bounce {
          0%, 80%, 100% { transform: scale(0); }
          40% { transform: scale(1); }
        }
        .maya-online-dot {
          width: 8px;
          height: 8px;
          background: #22c55e;
          border-radius: 50%;
          display: inline-block;
          margin-right: 4px;
        }
        @media (max-width: 480px) {
          .maya-chat-window {
            bottom: 0;
            right: 0;
            width: 100vw;
            height: 100vh;
            max-height: 100vh;
            max-width: 100vw;
            border-radius: 0;
          }
          .maya-chat-bubble {
            bottom: 16px;
            right: 16px;
            width: 56px;
            height: 56px;
          }
        }
      `}</style>

      {!isOpen && (
        <button
          className="maya-chat-bubble"
          onClick={handleOpen}
          aria-label="Chat with Maya"
          data-testid="button-maya-chat-open"
        >
          <img src="/maya-avatar.webp" alt="Maya - Patient Coordinator" />
        </button>
      )}

      {isOpen && (
        <div className="maya-chat-window" role="dialog" aria-label="Chat with Maya" data-testid="maya-chat-window">
          <div className="maya-header">
            <img src="/maya-avatar.webp" alt="Maya" className="maya-header-avatar" />
            <div className="maya-header-info">
              <h3>Maya</h3>
              <p><span className="maya-online-dot"></span>Online | Patient Coordinator</p>
            </div>
            <button
              className="maya-header-close"
              onClick={() => setIsOpen(false)}
              aria-label="Close chat"
              data-testid="button-maya-chat-close"
            >
              ✕
            </button>
          </div>

          <div className="maya-messages" data-testid="maya-chat-messages">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`maya-msg ${msg.role === "user" ? "maya-msg-user" : "maya-msg-assistant"}`}
                data-testid={`maya-msg-${msg.role}-${i}`}
              >
                {msg.content}
              </div>
            ))}
            {isStreaming && messages[messages.length - 1]?.content === "" && (
              <div className="maya-typing">
                <div className="maya-typing-dot"></div>
                <div className="maya-typing-dot"></div>
                <div className="maya-typing-dot"></div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <div className="maya-input-area">
            <textarea
              ref={inputRef}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Type your message..."
              rows={1}
              disabled={isStreaming}
              data-testid="input-maya-chat"
            />
            <button
              className="maya-send-btn"
              onClick={handleSend}
              disabled={!input.trim() || isStreaming}
              aria-label="Send message"
              data-testid="button-maya-chat-send"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="22" y1="2" x2="11" y2="13"></line>
                <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
              </svg>
            </button>
          </div>
        </div>
      )}
    </>
  );
}

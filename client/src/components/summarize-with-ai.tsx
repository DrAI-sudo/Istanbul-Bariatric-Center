import { useLocation } from "wouter";

const aiServices = [
  {
    name: "ChatGPT",
    logo: (
      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
        <path d="M22.282 9.821a5.985 5.985 0 0 0-.516-4.91 6.046 6.046 0 0 0-6.51-2.9A6.065 6.065 0 0 0 4.981 4.18a5.985 5.985 0 0 0-3.998 2.9 6.046 6.046 0 0 0 .743 7.097 5.98 5.98 0 0 0 .51 4.911 6.051 6.051 0 0 0 6.515 2.9A5.985 5.985 0 0 0 13.26 24a6.056 6.056 0 0 0 5.772-4.206 5.99 5.99 0 0 0 3.997-2.9 6.056 6.056 0 0 0-.747-7.073zM13.26 22.43a4.476 4.476 0 0 1-2.876-1.04l.141-.081 4.779-2.758a.795.795 0 0 0 .392-.681v-6.737l2.02 1.168a.071.071 0 0 1 .038.052v5.583a4.504 4.504 0 0 1-4.494 4.494zM3.6 18.304a4.47 4.47 0 0 1-.535-3.014l.142.085 4.783 2.759a.771.771 0 0 0 .78 0l5.843-3.369v2.332a.08.08 0 0 1-.033.062L9.74 19.95a4.5 4.5 0 0 1-6.14-1.646zM2.34 7.896a4.485 4.485 0 0 1 2.366-1.973V11.6a.766.766 0 0 0 .388.676l5.815 3.355-2.02 1.168a.076.076 0 0 1-.071 0l-4.83-2.786A4.504 4.504 0 0 1 2.34 7.872zm16.597 3.855l-5.833-3.387L15.119 7.2a.076.076 0 0 1 .071 0l4.83 2.791a4.494 4.494 0 0 1-.676 8.105v-5.678a.79.79 0 0 0-.407-.667zm2.01-3.023l-.141-.085-4.774-2.782a.776.776 0 0 0-.785 0L9.409 9.23V6.897a.066.066 0 0 1 .028-.061l4.83-2.787a4.5 4.5 0 0 1 6.68 4.66zm-12.64 4.135l-2.02-1.164a.08.08 0 0 1-.038-.057V6.075a4.5 4.5 0 0 1 7.375-3.453l-.142.08L8.704 5.46a.795.795 0 0 0-.393.681zm1.097-2.365l2.602-1.5 2.607 1.5v2.999l-2.597 1.5-2.607-1.5z" />
      </svg>
    ),
    getUrl: (pageUrl: string) => `https://chatgpt.com/?q=${encodeURIComponent(`Summarize this page: ${pageUrl}`)}`,
    color: "hover:text-[#10a37f]",
  },
  {
    name: "Perplexity",
    logo: (
      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
        <path d="M12 0L8 4h3v6.5L5.5 5 4 6.5 10 13H4v2h6.5L5 20.5 6.5 22l5-5.5V23h2v-6.5l5 5.5 1.5-1.5L14.5 15H21v-2h-6l6-6.5L19.5 5 14 10.5V4h3l-4-4h-1zm0 9.5L14.5 12h-5L12 9.5z" />
      </svg>
    ),
    getUrl: (pageUrl: string) => `https://www.perplexity.ai/search?q=${encodeURIComponent(`Summarize this page: ${pageUrl}`)}`,
    color: "hover:text-[#1a73e8]",
  },
  {
    name: "Grok",
    logo: (
      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
    getUrl: (pageUrl: string) => `https://x.com/i/grok?text=${encodeURIComponent(`Summarize this page: ${pageUrl}`)}`,
    color: "hover:text-black dark:hover:text-white",
  },
  {
    name: "Claude",
    logo: (
      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
        <path d="M4.709 15.955l4.72-2.647.08-.23-.08-.128H9.2l-.537-.008-3.2-.003c-.08-.006-.155-.077-.158-.152a7.02 7.02 0 0 1-.058-.63c-.01-.266-.015-.534-.005-.8.008-.175.023-.35.042-.525a7.417 7.417 0 0 1 .375-1.67A7.338 7.338 0 0 1 8.6 5.81a7.4 7.4 0 0 1 3.4-1.36c.33-.046.663-.072.997-.078a7.318 7.318 0 0 1 3.08.535 7.36 7.36 0 0 1 2.56 1.81 7.4 7.4 0 0 1 1.602 2.896c.177.606.28 1.228.31 1.856.008.165.01.33.006.496a7.325 7.325 0 0 1-.652 2.855 7.36 7.36 0 0 1-1.76 2.448 7.38 7.38 0 0 1-2.68 1.624 7.28 7.28 0 0 1-2.067.444c-.225.015-.45.017-.675.01a7.4 7.4 0 0 1-1.61-.246L8.174 21.66c-.04.02-.092.016-.127-.015-.033-.03-.044-.078-.03-.12l1.46-4.223c-.073-.053-.144-.108-.214-.165a7.36 7.36 0 0 1-1.896-2.316 7.296 7.296 0 0 1-.554-1.26c-.034-.107-.05-.163-.103-.163l-.263.003c-.71.004-1.42.002-2.13 0-.076 0-.14-.054-.152-.13l-.002-.02a3.57 3.57 0 0 1 .146-1.296z" />
      </svg>
    ),
    getUrl: (pageUrl: string) => `https://claude.ai/new?q=${encodeURIComponent(`Summarize this page: ${pageUrl}`)}`,
    color: "hover:text-[#d97757]",
  },
  {
    name: "Gemini",
    logo: (
      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
        <path d="M12 0C12 6.627 6.627 12 0 12c6.627 0 12 5.373 12 12 0-6.627 5.373-12 12-12-6.627 0-12-5.373-12-12z" />
      </svg>
    ),
    getUrl: (pageUrl: string) => `https://gemini.google.com/app?q=${encodeURIComponent(`Summarize this page: ${pageUrl}`)}`,
    color: "hover:text-[#4285f4]",
  },
];

interface SummarizeWithAIProps {
  variant?: "dark" | "light";
}

export function SummarizeWithAI({ variant = "dark" }: SummarizeWithAIProps) {
  const [location] = useLocation();
  const pageUrl = `https://istanbulbariatriccenter.com${location}`;

  const baseTextColor = variant === "dark" ? "text-slate-400" : "text-slate-500";
  const iconColor = variant === "dark" ? "text-slate-400" : "text-slate-400";

  return (
    <div className="flex flex-wrap items-center gap-3 mt-4" data-testid="summarize-with-ai">
      <span className={`text-sm font-medium ${baseTextColor}`}>Summarize with AI</span>
      <div className="flex items-center gap-2">
        {aiServices.map((service) => (
          <a
            key={service.name}
            href={service.getUrl(pageUrl)}
            target="_blank"
            rel="noopener noreferrer"
            title={`Summarize with ${service.name}`}
            className={`${iconColor} ${service.color} transition-colors duration-200`}
            data-testid={`link-summarize-${service.name.toLowerCase()}`}
          >
            {service.logo}
          </a>
        ))}
      </div>
    </div>
  );
}

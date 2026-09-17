import { useState, useEffect, useRef } from "react";
import { Search, X } from "lucide-react";
import { useLocation } from "wouter";
import { cn } from "@/lib/utils";
import { blogPosts } from "@/data/blog-posts";

interface SearchResult {
  title: string;
  href: string;
  type: "page" | "blog" | "treatment";
  excerpt?: string;
}

const staticPages: SearchResult[] = [
  { title: "Home", href: "/", type: "page" },
  { title: "About Us", href: "/about", type: "page" },
  { title: "Our Results", href: "/results", type: "page" },
  { title: "Blog", href: "/blog", type: "page" },
  { title: "Contact", href: "/contact", type: "page" },
  { title: "Insurance", href: "/insurance", type: "page" },
  { title: "Gastric Sleeve Surgery", href: "/sleeve-gastrectomy", type: "treatment" },
  { title: "Gastric Bypass Surgery (Roux-en-Y)", href: "/gastric-bypass", type: "treatment" },
  { title: "Mini Gastric Bypass (OAGB)", href: "/mini-gastric-bypass", type: "treatment" },
  { title: "Gastric Balloon Turkey", href: "/gastric-balloon-turkey", type: "treatment" },
  { title: "Transit Bipartition", href: "/transit-bipartition", type: "treatment" },
  { title: "Endoscopic Sleeve Gastroplasty (ESG)", href: "/esg", type: "treatment" },
  { title: "Duodenal Switch", href: "/duodenal-switch", type: "treatment" },
];

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  variant?: "light" | "dark";
}

export function SearchModal({ isOpen, onClose }: SearchModalProps) {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<SearchResult[]>([]);
  const [, setLocation] = useLocation();
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  useEffect(() => {
    if (!query.trim()) {
      setResults([]);
      return;
    }

    const searchTerm = query.toLowerCase();

    const blogResults: SearchResult[] = blogPosts
      .filter(
        (post) =>
          post.title.toLowerCase().includes(searchTerm) ||
          post.excerpt.toLowerCase().includes(searchTerm) ||
          post.category.toLowerCase().includes(searchTerm)
      )
      .slice(0, 5)
      .map((post) => ({
        title: post.title,
        href: `/blog/${post.slug}`,
        type: "blog" as const,
        excerpt: post.excerpt,
      }));

    const pageResults = staticPages.filter((page) =>
      page.title.toLowerCase().includes(searchTerm)
    );

    setResults([...pageResults, ...blogResults].slice(0, 8));
  }, [query]);

  const handleResultClick = (href: string) => {
    setLocation(href);
    setQuery("");
    onClose();
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Escape") {
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[100] bg-black/50 backdrop-blur-sm flex items-start justify-center pt-20 px-4"
      onClick={onClose}
    >
      <div
        className="w-full max-w-2xl bg-white rounded-2xl shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative">
          <Search className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
          <input
            ref={inputRef}
            type="text"
            placeholder="Search treatments, blog posts, pages..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={handleKeyDown}
            className="w-full pl-14 pr-12 py-5 text-lg border-b border-slate-100 focus:outline-none focus:border-primary"
            data-testid="search-input"
          />
          <button
            onClick={onClose}
            className="absolute right-4 top-1/2 -translate-y-1/2 p-1 hover:bg-slate-100 rounded-full transition-colors"
            aria-label="Close search"
            data-testid="button-close-search"
          >
            <X className="w-5 h-5 text-slate-400" />
          </button>
        </div>

        {results.length > 0 && (
          <div className="max-h-96 overflow-y-auto p-2">
            {results.map((result, index) => (
              <button
                key={`${result.href}-${index}`}
                onClick={() => handleResultClick(result.href)}
                className="w-full text-left px-4 py-3 hover:bg-primary/5 rounded-lg transition-colors flex items-start gap-3 group"
                data-testid={`search-result-${index}`}
              >
                <span
                  className={cn(
                    "text-xs font-bold uppercase px-2 py-1 rounded-full mt-0.5",
                    result.type === "blog"
                      ? "bg-blue-100 text-blue-600"
                      : result.type === "treatment"
                      ? "bg-green-100 text-green-600"
                      : "bg-slate-100 text-slate-600"
                  )}
                >
                  {result.type}
                </span>
                <div className="flex-1 min-w-0">
                  <p className="font-semibold text-slate-800 group-hover:text-primary transition-colors truncate">
                    {result.title}
                  </p>
                  {result.excerpt && (
                    <p className="text-sm text-slate-500 truncate mt-0.5">
                      {result.excerpt}
                    </p>
                  )}
                </div>
              </button>
            ))}
          </div>
        )}

        {query && results.length === 0 && (
          <div className="p-8 text-center text-slate-500">
            <p>No results found for "{query}"</p>
            <p className="text-sm mt-1">Try different keywords</p>
          </div>
        )}

        {!query && (
          <div className="p-6 text-center text-slate-400">
            <p className="text-sm">Start typing to search...</p>
          </div>
        )}
      </div>
    </div>
  );
}

interface SearchButtonProps {
  variant?: "light" | "dark";
  onClick: () => void;
}

export function SearchButton({ variant = "dark", onClick }: SearchButtonProps) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "p-2.5 rounded-full transition-all duration-200 hover:scale-110",
        variant === "dark"
          ? "bg-primary/10 hover:bg-primary/20 text-primary"
          : "bg-white/20 hover:bg-white/30 text-white"
      )}
      aria-label="Open search"
      data-testid="button-search"
    >
      <Search className="w-5 h-5" />
    </button>
  );
}

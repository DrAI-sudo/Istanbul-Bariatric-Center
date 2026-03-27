import { Search } from "lucide-react";
import { cn } from "@/lib/utils";

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

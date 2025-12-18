import { useState, useEffect } from "react";
import { Link } from "wouter";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "#about" },
    { name: "Treatments", href: "#treatments" },
    { name: "Results", href: "#results" },
    { name: "Blog", href: "#blog" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-transparent",
        isScrolled
          ? "bg-white shadow-md py-2"
          : "bg-transparent py-6"
      )}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <Link href="/">
          <a className="flex items-center gap-3">
             {/* Logo Placeholder - Text based for now as per clone request */}
             <div className="flex flex-col">
               <span className={cn("text-2xl font-extrabold tracking-tight uppercase", isScrolled ? "text-[#2d3e50]" : "text-white")}>
                 Istanbul
               </span>
               <span className={cn("text-sm font-bold tracking-widest uppercase", isScrolled ? "text-primary" : "text-white/90")}>
                 Bariatric Center
               </span>
             </div>
          </a>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={cn(
                "text-sm font-bold uppercase tracking-wide hover:text-primary transition-colors",
                isScrolled ? "text-slate-600" : "text-white"
              )}
            >
              {link.name}
            </a>
          ))}
          <Button 
            className={cn(
              "font-bold uppercase tracking-wider rounded-full px-6",
              isScrolled ? "bg-primary text-white" : "bg-white text-primary hover:bg-white/90"
            )}
          >
            Free Quote
          </Button>
        </nav>

        {/* Mobile Toggle */}
        <button
          className={cn("lg:hidden", isScrolled ? "text-slate-800" : "text-white")}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-white shadow-xl border-t border-slate-100 p-6 flex flex-col gap-4 animate-in slide-in-from-top-2">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-lg font-bold text-slate-700 py-3 border-b border-slate-50 uppercase"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <Button className="w-full bg-primary text-white font-bold uppercase py-6">
            Get Free Quote
          </Button>
        </div>
      )}
    </header>
  );
}

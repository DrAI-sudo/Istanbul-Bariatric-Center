import { useState, useEffect } from "react";
import { Link } from "wouter";
import { Menu, X, Phone, MessageCircle } from "lucide-react";
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
    { name: "Treatments", href: "#treatments" },
    { name: "VIP Packages", href: "#vip-packages" },
    { name: "About Us", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-white/90 backdrop-blur-md shadow-md py-3"
          : "bg-transparent py-5"
      )}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link href="/">
          <a className="flex items-center gap-2">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center text-white font-bold text-xl">
              I
            </div>
            <div className="flex flex-col">
              <span className={cn("font-heading font-bold text-xl leading-none", isScrolled ? "text-primary" : "text-primary")}>
                Istanbul
              </span>
              <span className={cn("font-heading font-bold text-lg leading-none", isScrolled ? "text-slate-700" : "text-slate-700")}>
                Bariatric Center
              </span>
            </div>
          </a>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium hover:text-primary transition-colors text-slate-700"
            >
              {link.name}
            </a>
          ))}
          <Button className="bg-primary hover:bg-primary/90 gap-2">
            <MessageCircle className="w-4 h-4" />
            Free Consultation
          </Button>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-slate-700"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg border-t border-slate-100 p-4 flex flex-col gap-4 animate-in slide-in-from-top-5">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-lg font-medium text-slate-700 py-2 border-b border-slate-50"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <Button className="w-full bg-primary gap-2">
            <Phone className="w-4 h-4" />
            Call Now
          </Button>
        </div>
      )}
    </header>
  );
}

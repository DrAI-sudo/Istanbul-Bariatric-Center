import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Check if we are on the home page for transparency effect
  const isHome = location === "/";
  
  // If not on home page, always show solid background
  const showSolidNav = !isHome || isScrolled;

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Treatments", href: "/treatments" },
    { name: "Results", href: "/results" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-transparent",
        showSolidNav
          ? "bg-white shadow-md py-2"
          : "bg-transparent py-6"
      )}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <Link href="/" className="flex items-center">
           <img 
             src="/logo.jpeg" 
             alt="Istanbul Bariatric Center - Op. Dr Murat Üstün" 
             className={cn(
               "h-16 md:h-20 w-auto transition-all duration-300",
               showSolidNav ? "" : "brightness-0 invert"
             )}
           />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href}
              className={cn(
                "text-sm font-bold uppercase tracking-wide hover:text-primary transition-colors",
                location === link.href ? "text-primary border-b-2 border-primary" : "",
                showSolidNav ? "text-slate-600" : "text-white"
              )}
            >
              {link.name}
            </Link>
          ))}
          <Button 
            className={cn(
              "font-bold uppercase tracking-wider rounded-full px-6",
              showSolidNav ? "bg-primary text-white" : "bg-white text-primary hover:bg-white/90"
            )}
            onClick={() => window.open('https://wa.me/905324131143', '_blank')}
          >
            Free Quote
          </Button>
        </nav>

        {/* Mobile Toggle */}
        <button
          className={cn("lg:hidden", showSolidNav ? "text-slate-800" : "text-white")}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-white shadow-xl border-t border-slate-100 p-6 flex flex-col gap-4 animate-in slide-in-from-top-2">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href}
              className={cn(
                "text-lg font-bold text-slate-700 py-3 border-b border-slate-50 uppercase",
                location === link.href ? "text-primary" : ""
              )}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <Button 
            className="w-full bg-primary text-white font-bold uppercase py-6"
            onClick={() => window.open('https://wa.me/905324131143', '_blank')}
          >
            Get Free Quote
          </Button>
        </div>
      )}
    </header>
  );
}

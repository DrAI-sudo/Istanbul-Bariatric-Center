import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useTranslation } from "react-i18next";
import { LanguageSwitcher } from "./language-switcher";
import { SearchButton, SearchModal } from "./search-modal";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [location] = useLocation();
  const { t } = useTranslation('nav');

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 20);
          ticking = false;
        });
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isHome = location === "/";
  const showSolidNav = !isHome || isScrolled;

  const navLinks = [
    { name: t('home'), href: "/" },
    { name: t('about'), href: "/about" },
    { name: t('treatments'), href: "/treatments" },
    { name: t('results'), href: "/results" },
    { name: t('blog'), href: "/blog" },
    { name: "Insurance", href: "/insurance" },
    { name: t('contact'), href: "/contact" },
  ];

  return (
    <header
      role="banner"
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-transparent",
        showSolidNav
          ? "bg-white shadow-md py-2"
          : "bg-transparent py-6"
      )}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2" aria-label="Istanbul Bariatric Center - Home">
           {showSolidNav ? (
             <img 
               src="/logo.webp" 
               alt="Istanbul Bariatric Center - Op. Dr Murat Üstün" 
               className="h-16 md:h-20 w-auto transition-all duration-300"
               width="80"
               height="64"
               fetchPriority="high"
             />
           ) : (
             <span className="text-white font-heading font-bold text-xl md:text-2xl tracking-tight drop-shadow-md">
               Istanbul Bariatric Center
             </span>
           )}
        </Link>

        <nav className="hidden lg:flex items-center gap-6" role="navigation" aria-label="Main navigation">
          {navLinks.map((link) => (
            <Link 
              key={link.href} 
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
          
          <SearchButton 
            variant={showSolidNav ? 'dark' : 'light'} 
            onClick={() => setIsSearchOpen(true)} 
          />
          
          <LanguageSwitcher variant={showSolidNav ? 'dark' : 'light'} />
          
          <Button 
            className={cn(
              "font-bold uppercase tracking-wider rounded-full px-6",
              showSolidNav ? "bg-primary text-white" : "bg-white text-primary hover:bg-white/90"
            )}
            onClick={() => window.open('https://wa.me/905324131143', '_blank')}
            aria-label="Book a free consultation via WhatsApp"
          >
            {t('bookNow')}
          </Button>
        </nav>
        
        <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />

        <div className="lg:hidden flex items-center gap-2">
          <SearchButton 
            variant={showSolidNav ? 'dark' : 'light'} 
            onClick={() => setIsSearchOpen(true)} 
          />
          <LanguageSwitcher variant={showSolidNav ? 'dark' : 'light'} />
          <button
            className={cn("p-2", showSolidNav ? "text-slate-800" : "text-white")}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-menu"
            aria-label={isMobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          >
            {isMobileMenuOpen ? <X className="w-8 h-8" aria-hidden="true" /> : <Menu className="w-8 h-8" aria-hidden="true" />}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <nav id="mobile-menu" role="navigation" aria-label="Mobile navigation" className="lg:hidden absolute top-full left-0 right-0 bg-white shadow-xl border-t border-slate-100 p-6 flex flex-col gap-4 animate-in slide-in-from-top-2">
          {navLinks.map((link) => (
            <Link 
              key={link.href} 
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
            aria-label="Book consultation via WhatsApp"
          >
            {t('bookNow')}
          </Button>
        </nav>
      )}
    </header>
  );
}

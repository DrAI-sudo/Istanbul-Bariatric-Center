import { useTranslation } from 'react-i18next';
import { languages } from '@/i18n/config';
import { ChevronDown, Globe } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';
import { cn } from '@/lib/utils';

interface LanguageSwitcherProps {
  variant?: 'light' | 'dark';
}

export function LanguageSwitcher({ variant = 'dark' }: LanguageSwitcherProps) {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const currentLang = languages.find(l => l.code === i18n.language) || languages[0];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    const lang = languages.find(l => l.code === i18n.language);
    if (lang) {
      document.documentElement.dir = lang.dir;
      document.documentElement.lang = lang.code;
    }
  }, [i18n.language]);

  const changeLanguage = (code: string) => {
    i18n.changeLanguage(code);
    setIsOpen(false);
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          "flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium transition-colors",
          variant === 'light' 
            ? "text-white hover:bg-white/10" 
            : "text-slate-700 hover:bg-slate-100"
        )}
        data-testid="button-language-switcher"
        aria-expanded={isOpen}
        aria-haspopup="listbox"
        aria-label={`Select language. Current: ${currentLang.name}`}
      >
        <Globe className="w-4 h-4" aria-hidden="true" />
        <span aria-hidden="true">{currentLang.flag}</span>
        <span className="hidden sm:inline">{currentLang.name}</span>
        <ChevronDown className={cn("w-4 h-4 transition-transform", isOpen && "rotate-180")} aria-hidden="true" />
      </button>

      {isOpen && (
        <div 
          role="listbox"
          aria-label="Language options"
          className="absolute right-0 top-full mt-2 w-48 bg-white rounded-xl shadow-xl border border-slate-100 py-2 z-50 animate-in fade-in slide-in-from-top-2"
        >
          {languages.map((lang) => (
            <button
              key={lang.code}
              role="option"
              aria-selected={i18n.language === lang.code}
              onClick={() => changeLanguage(lang.code)}
              className={cn(
                "w-full flex items-center gap-3 px-4 py-2.5 text-sm hover:bg-slate-50 transition-colors",
                i18n.language === lang.code ? "bg-primary/5 text-primary font-medium" : "text-slate-700"
              )}
              data-testid={`button-lang-${lang.code}`}
            >
              <span className="text-lg" aria-hidden="true">{lang.flag}</span>
              <span>{lang.name}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

import { MapPin, Phone, Mail, Facebook, Instagram, Youtube } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";
import { Link } from "wouter";

export function Footer() {
  const { t } = useTranslation('common');
  
  return (
    <footer role="contentinfo" className="bg-slate-900 text-white pt-20 pb-10">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <h2 className="text-2xl font-heading font-bold">Istanbul Bariatric Center</h2>
            <p className="text-slate-300 leading-relaxed">
              Founded by <a href="https://drmuratustun.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-primary transition-colors underline">Dr. Murat Üstün</a>, leading the way in bariatric surgery with world-class facilities and expert care. Your health is our priority.
            </p>
            <div className="flex gap-4" aria-label="Social media links">
              <a href="https://www.facebook.com/istanbulbariatriccenter" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary transition-colors" aria-label="Follow us on Facebook">
                <Facebook className="w-5 h-5" aria-hidden="true" />
              </a>
              <a href="https://www.instagram.com/istanbulbariatriccenter" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary transition-colors" aria-label="Follow us on Instagram">
                <Instagram className="w-5 h-5" aria-hidden="true" />
              </a>
              <a href="https://www.youtube.com/@istanbulbariatriccenter" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary transition-colors" aria-label="Subscribe to our YouTube channel">
                <Youtube className="w-5 h-5" aria-hidden="true" />
              </a>
            </div>
          </div>

          <nav aria-label="Treatment links">
            <h3 className="font-bold text-lg mb-6">Treatments</h3>
            <ul className="space-y-4 text-slate-300">
              <li><Link href="/sleeve-gastrectomy" className="hover:text-primary transition-colors">Gastric Sleeve</Link></li>
              <li><Link href="/mini-gastric-bypass" className="hover:text-primary transition-colors">Gastric Bypass</Link></li>
              <li><Link href="/gastric-balloon" className="hover:text-primary transition-colors">Gastric Balloon</Link></li>
              <li><Link href="/duodenal-switch" className="hover:text-primary transition-colors">Duodenal Switch</Link></li>
              <li><Link href="/esg" className="hover:text-primary transition-colors">Endoscopic Sleeve</Link></li>
              <li><Link href="/transit-bipartition" className="hover:text-primary transition-colors">Transit Bipartition</Link></li>
              <li><Link href="/post-bariatric-surgery" className="hover:text-primary transition-colors">Post-Bariatric Surgery</Link></li>
            </ul>
          </nav>

          <nav aria-label="Quick links">
            <h3 className="font-bold text-lg mb-6">Quick Links</h3>
            <ul className="space-y-4 text-slate-300">
              <li><Link href="/about" className="hover:text-primary transition-colors">About Us</Link></li>
              <li><Link href="/treatments" className="hover:text-primary transition-colors">Treatments</Link></li>
              <li><Link href="/results" className="hover:text-primary transition-colors">Results</Link></li>
              <li><Link href="/blog" className="hover:text-primary transition-colors">Blog</Link></li>
              <li><Link href="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
            </ul>
          </nav>

          <div>
            <h3 className="font-bold text-lg mb-6">Contact Us</h3>
            <ul className="space-y-4 text-slate-300">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary shrink-0 mt-1" />
                <span>Istanbul, Turkey</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary shrink-0" />
                <a href="tel:+905324131143" className="hover:text-primary transition-colors">+90 532 413 1143</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary shrink-0" />
                <a href="mailto:drmuratustun@gmail.com" className="hover:text-primary transition-colors">drmuratustun@gmail.com</a>
              </li>
            </ul>
            <a href="https://wa.me/905324131143" target="_blank" rel="noopener noreferrer" aria-label="Contact us on WhatsApp">
              <Button className="w-full mt-6 bg-green-700 hover:bg-green-800" aria-label="WhatsApp Us - Opens in new window">
                WhatsApp Us
              </Button>
            </a>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 text-center text-slate-400 text-sm">
          <p>{t('copyright')}</p>
        </div>
      </div>
    </footer>
  );
}

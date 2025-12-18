import { MapPin, Phone, Mail, Facebook, Instagram, Youtube, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Footer() {
  return (
    <footer className="bg-slate-900 text-white pt-20 pb-10">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <h3 className="text-2xl font-heading font-bold">Istanbul Bariatric Center</h3>
            <p className="text-slate-400 leading-relaxed">
              Leading the way in bariatric surgery with world-class facilities and expert care. Your health is our priority.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6">Treatments</h4>
            <ul className="space-y-4 text-slate-400">
              <li><a href="#" className="hover:text-primary transition-colors">Gastric Sleeve</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Gastric Bypass</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Gastric Balloon</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Diabetes Surgery</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Revision Surgery</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-4 text-slate-400">
              <li><a href="#" className="hover:text-primary transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Our Team</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Testimonials</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6">Contact Us</h4>
            <ul className="space-y-4 text-slate-400">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary shrink-0 mt-1" />
                <span>Istanbul, Turkey</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary shrink-0" />
                <span>+44 7491 068686</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary shrink-0" />
                <span>info@istanbulbariatriccenter.com</span>
              </li>
            </ul>
            <Button className="w-full mt-6 bg-primary hover:bg-primary/90">
              Get Directions
            </Button>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 text-center text-slate-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Istanbul Bariatric Center. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

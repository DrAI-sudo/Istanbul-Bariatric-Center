import { Button } from "@/components/ui/button";
import { MessageCircle, ArrowRight } from "lucide-react";
import heroBg from "@assets/generated_images/modern_clean_hospital_reception_with_blue_accents.png";

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBg}
          alt="Modern Hospital Reception"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/80 to-transparent" />
      </div>

      <div className="container mx-auto px-4 relative z-10 grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6 max-w-xl animate-in slide-in-from-left duration-700">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-primary text-sm font-semibold">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-sky-500"></span>
            </span>
            Top Rated Clinic in Turkey
          </div>
          
          <h1 className="text-5xl md:text-6xl font-heading font-extrabold text-slate-900 leading-tight">
            Start Your <span className="text-primary">Weight Loss</span> Journey Today
          </h1>
          
          <p className="text-lg text-slate-600 leading-relaxed">
            Istanbul Bariatric Center offers you a wide range of obesity treatments with the highest quality and affordable prices. Join thousands of happy patients.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-lg h-14 px-8 shadow-lg shadow-blue-500/20">
              <MessageCircle className="mr-2 h-5 w-5" />
              Get Free Quote via WhatsApp
            </Button>
            <Button size="lg" variant="outline" className="text-lg h-14 px-8 border-primary/20 hover:bg-blue-50 text-primary">
              View Treatments
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
          
          <div className="flex items-center gap-6 pt-6 text-sm text-slate-500 font-medium">
            <div className="flex items-center gap-2">
              <div className="w-1 h-1 bg-primary rounded-full" />
              JCI Accredited
            </div>
            <div className="flex items-center gap-2">
              <div className="w-1 h-1 bg-primary rounded-full" />
              VIP Transfers
            </div>
            <div className="flex items-center gap-2">
              <div className="w-1 h-1 bg-primary rounded-full" />
              Luxury Accommodation
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

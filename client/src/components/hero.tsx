import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";
import { useState, useEffect } from "react";

export function Hero() {
  const { t } = useTranslation('home');
  const [videoLoaded, setVideoLoaded] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => setVideoLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);
  
  return (
    <section 
      className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden text-center"
      aria-label="Hero section"
    >
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {videoLoaded && (
          <video 
            autoPlay 
            loop 
            muted 
            playsInline
            preload="metadata"
            aria-hidden="true"
            className="w-full h-full object-cover opacity-50"
            poster="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1920 1080'%3E%3Crect fill='%231e293b' width='1920' height='1080'/%3E%3C/svg%3E"
          >
            <source src="https://caf0fec0.delivery.rocketcdn.me/wp-content/uploads/2021/07/ibc-promo-3-1.mp4" type="video/mp4" />
          </video>
        )}
        <div className="absolute inset-0 bg-black/30" aria-hidden="true" />
      </div>

      <div className="container relative z-10 px-4 max-w-4xl mx-auto space-y-8">
        <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tight drop-shadow-md">
          {t('hero.title')}
        </h1>
        
        <p className="text-xl md:text-2xl text-white/90 font-medium max-w-3xl mx-auto drop-shadow-sm leading-relaxed">
          {t('hero.subtitle')}
        </p>
        
        <div className="pt-8">
          <Button 
            size="lg" 
            className="bg-[#25D366] hover:bg-[#128C7E] text-white font-bold text-lg px-10 py-8 rounded-full shadow-xl transition-transform hover:scale-105"
            onClick={() => window.open('https://wa.me/905324131143', '_blank')}
            aria-label="Get a free consultation via WhatsApp"
          >
            {t('hero.cta')}
          </Button>
        </div>
      </div>
    </section>
  );
}

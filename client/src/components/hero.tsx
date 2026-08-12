import { getSrcSet } from "@/lib/image-variants";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";
import { useRef, useEffect, useState } from "react";

export function Hero() {
  const { t } = useTranslation('home');
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoSrc, setVideoSrc] = useState<string | undefined>(undefined);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setVideoSrc("/hero-video.mp4?v=3");
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (video && videoSrc) {
      video.load();
      video.play().catch(() => {});
    }
  }, [videoSrc]);
  
  return (
    <section 
      className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden text-center"
      aria-label="Hero section"
    >
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <img
          src="/hero-poster.webp?v=3"
          srcSet={getSrcSet("/hero-poster.webp")?.replace(/\.webp /g, ".webp?v=3 ")}
          sizes="100vw"
          alt="Liv Hospital Istanbul at night"
          className="absolute inset-0 w-full h-full object-cover opacity-50"
          fetchPriority="high"
          decoding="async"
        />
        <video 
          ref={videoRef}
          autoPlay 
          loop 
          muted 
          playsInline
          preload="none"
          poster="/hero-poster.webp?v=3"
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover opacity-50"
        >
          {videoSrc && <source src={videoSrc} type="video/mp4" />}
        </video>
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
            className="bg-[#15803d] hover:bg-[#166534] text-white font-bold text-lg px-10 py-8 rounded-full shadow-xl transition-transform hover:scale-105"
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

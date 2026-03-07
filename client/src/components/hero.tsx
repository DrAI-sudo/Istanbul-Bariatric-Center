import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";
import { useRef, useEffect, useState } from "react";

export function Hero() {
  const { t } = useTranslation('home');
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoLoaded, setVideoLoaded] = useState(false);
  
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const loadVideo = () => {
      video.src = "/hero-video.mp4";
      video.load();
      video.play().catch(() => {});
      setVideoLoaded(true);
    };

    if (!('IntersectionObserver' in window)) {
      loadVideo();
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !videoLoaded) {
          loadVideo();
          observer.disconnect();
        }
      },
      { threshold: 0 }
    );

    observer.observe(video);
    return () => observer.disconnect();
  }, [videoLoaded]);
  
  return (
    <section 
      className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden text-center"
      aria-label="Hero section"
    >
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <video 
          ref={videoRef}
          autoPlay 
          loop 
          muted 
          playsInline
          preload="none"
          aria-hidden="true"
          className={`w-full h-full object-cover transition-opacity duration-1000 ${videoLoaded ? 'opacity-50' : 'opacity-0'}`}
        />
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
            className="bg-[#0e7a6e] hover:bg-[#0a6b60] text-white font-bold text-lg px-10 py-8 rounded-full shadow-xl transition-transform hover:scale-105"
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

import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";
import { useState, useCallback } from "react";
import { Play } from "lucide-react";

export function Hero() {
  const { t } = useTranslation('home');
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  
  const handlePlayVideo = useCallback(() => {
    setIsVideoPlaying(true);
  }, []);
  
  return (
    <section 
      className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden text-center"
      aria-label="Hero section"
    >
      <div className="absolute inset-0 z-0">
        {isVideoPlaying ? (
          <video 
            autoPlay 
            loop 
            muted 
            playsInline
            preload="metadata"
            aria-hidden="true"
            className="w-full h-full object-cover"
          >
            <source src="https://caf0fec0.delivery.rocketcdn.me/wp-content/uploads/2021/07/ibc-promo-3-1.mp4" type="video/mp4" />
          </video>
        ) : (
          <div 
            className="w-full h-full bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `linear-gradient(135deg, rgba(15, 23, 42, 0.85) 0%, rgba(30, 41, 59, 0.75) 50%, rgba(15, 23, 42, 0.85) 100%), url('https://istanbulbariatriccenter.com/wp-content/uploads/2024/11/istanbul-bariatric-center-og.jpg')`,
            }}
            role="img"
            aria-label="Istanbul Bariatric Center - Medical excellence in weight loss surgery"
          />
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
        
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button 
            size="lg" 
            className="bg-[#25D366] hover:bg-[#128C7E] text-white font-bold text-lg px-10 py-8 rounded-full shadow-xl transition-transform hover:scale-105"
            onClick={() => window.open('https://wa.me/905324131143', '_blank')}
            aria-label="Get a free consultation via WhatsApp"
            data-testid="button-whatsapp-hero"
          >
            {t('hero.cta')}
          </Button>
          
          {!isVideoPlaying && (
            <Button
              size="lg"
              variant="outline"
              className="bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20 font-semibold text-base px-6 py-6 rounded-full shadow-lg transition-transform hover:scale-105"
              onClick={handlePlayVideo}
              aria-label="Play promotional video"
              data-testid="button-play-video"
            >
              <Play className="w-5 h-5 mr-2" aria-hidden="true" />
              Watch Video
            </Button>
          )}
        </div>
      </div>
    </section>
  );
}

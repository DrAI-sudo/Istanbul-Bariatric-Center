import { Heart, Building, Calendar, Plane, Tag, Users, Video } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";

export function VIPPackage() {
  const { t } = useTranslation('home');
  
  return (
    <section className="py-20 bg-white" aria-labelledby="vip-package-heading">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-6">
          <h2 id="vip-package-heading" className="text-4xl md:text-5xl font-bold text-[#2d3e50]">
            {t('vipPackage.title')}
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto" aria-hidden="true"></div>
          <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
            {t('vipPackage.description')}
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12 items-start">
          <div className="space-y-12">
            <div className="flex gap-6 items-start text-left rtl:text-right">
              <div className="w-16 h-16 rounded-full bg-blue-50 flex items-center justify-center shrink-0">
                <Heart className="w-8 h-8 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#2d3e50] mb-2 uppercase tracking-wide">{t('vipPackage.lovelyExperience')}</h3>
                <p className="text-slate-500 text-lg">{t('vipPackage.fromStartToEnd')}</p>
              </div>
            </div>

            <div className="flex gap-6 items-start text-left rtl:text-right">
              <div className="w-16 h-16 rounded-full bg-blue-50 flex items-center justify-center shrink-0">
                <Building className="w-8 h-8 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#2d3e50] mb-2 uppercase tracking-wide">{t('vipPackage.fullyFormedHospital')}</h3>
                <p className="text-slate-500 text-lg">{t('vipPackage.jciAccredited')}</p>
              </div>
            </div>

            <div className="flex gap-6 items-start text-left rtl:text-right">
              <div className="w-16 h-16 rounded-full bg-blue-50 flex items-center justify-center shrink-0">
                <Calendar className="w-8 h-8 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#2d3e50] mb-2 uppercase tracking-wide">{t('vipPackage.accommodation')}</h3>
                <p className="text-slate-500 text-lg">{t('vipPackage.luxuryHotels')}</p>
              </div>
            </div>
          </div>

          <div className="relative">
             <div className="rounded-xl overflow-hidden shadow-2xl border-4 border-white relative">
               <img 
                 src="/IMG_1801_1766158987529.webp" 
                 alt="Istanbul Bariatric Center - Liv Hospital at night" 
                 className="w-full h-auto object-cover block"
                 loading="lazy"
                 width="651"
                 height="410"
                 decoding="async"
               />
               <a
                 href="https://vr.livhospital.com/videoroom.html#!/Genel-Goruntuler/0a3/?dil=Tr&ath=-57&atv=-6&fov=80"
                 target="_blank"
                 rel="noopener noreferrer"
                 className="absolute bottom-4 right-4 z-10 bg-primary hover:bg-primary/90 text-white font-bold px-5 py-2.5 rounded-full shadow-lg flex items-center gap-2 transition-all duration-300 hover:scale-105 text-sm"
                 data-testid="button-virtual-tour-home"
               >
                 <Video className="w-4 h-4" />
                 Virtual Tour
               </a>
             </div>
          </div>

          <div className="space-y-12">
            <div className="flex gap-6 items-start text-left rtl:text-right">
              <div className="w-16 h-16 rounded-full bg-blue-50 flex items-center justify-center shrink-0">
                <Plane className="w-8 h-8 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#2d3e50] mb-2 uppercase tracking-wide">{t('vipPackage.freeAirportPickup')}</h3>
                <p className="text-slate-500 text-lg">{t('vipPackage.forYourConvenience')}</p>
              </div>
            </div>

            <div className="flex gap-6 items-start text-left rtl:text-right">
              <div className="w-16 h-16 rounded-full bg-blue-50 flex items-center justify-center shrink-0">
                <Tag className="w-8 h-8 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#2d3e50] mb-2 uppercase tracking-wide">{t('vipPackage.startsFrom')}</h3>
                <p className="text-slate-500 text-lg">{t('vipPackage.bestPrices')}</p>
              </div>
            </div>

            <div className="flex gap-6 items-start text-left rtl:text-right">
              <div className="w-16 h-16 rounded-full bg-blue-50 flex items-center justify-center shrink-0">
                <Users className="w-8 h-8 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#2d3e50] mb-2 uppercase tracking-wide">{t('vipPackage.helpfulStaff')}</h3>
                <p className="text-slate-500 text-lg">{t('vipPackage.noCost')}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-16 space-y-6">
          <Button 
            size="lg" 
            className="bg-[#128C7E] hover:bg-[#0e7a6e] text-white font-bold text-lg px-12 py-8 rounded-full shadow-xl uppercase tracking-wider"
            onClick={() => window.open('https://wa.me/905324131143', '_blank')}
            aria-label="Start your VIP package inquiry via WhatsApp"
          >
            {t('vipPackage.letsTryIt')}
          </Button>
          <p className="text-slate-500 font-medium">{t('vipPackage.getStarted')}</p>
        </div>
      </div>
    </section>
  );
}

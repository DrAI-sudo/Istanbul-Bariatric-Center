import { Heart, Building, Calendar, Plane, Tag, Users } from "lucide-react";
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
                <h4 className="text-xl font-bold text-[#2d3e50] mb-2 uppercase tracking-wide">{t('vipPackage.lovelyExperience')}</h4>
                <p className="text-slate-500 text-lg">{t('vipPackage.fromStartToEnd')}</p>
              </div>
            </div>

            <div className="flex gap-6 items-start text-left rtl:text-right">
              <div className="w-16 h-16 rounded-full bg-blue-50 flex items-center justify-center shrink-0">
                <Building className="w-8 h-8 text-primary" />
              </div>
              <div>
                <h4 className="text-xl font-bold text-[#2d3e50] mb-2 uppercase tracking-wide">{t('vipPackage.fullyFormedHospital')}</h4>
                <p className="text-slate-500 text-lg">{t('vipPackage.jciAccredited')}</p>
              </div>
            </div>

            <div className="flex gap-6 items-start text-left rtl:text-right">
              <div className="w-16 h-16 rounded-full bg-blue-50 flex items-center justify-center shrink-0">
                <Calendar className="w-8 h-8 text-primary" />
              </div>
              <div>
                <h4 className="text-xl font-bold text-[#2d3e50] mb-2 uppercase tracking-wide">{t('vipPackage.accommodation')}</h4>
                <p className="text-slate-500 text-lg">{t('vipPackage.luxuryHotels')}</p>
              </div>
            </div>
          </div>

          <div className="relative">
             <div className="rounded-xl overflow-hidden shadow-2xl border-4 border-white">
               <img 
                 src="/attached_assets/IMG_1860_1766158738183.jpeg" 
                 alt="Istanbul Bariatric Centre - Op. Dr. Murat Ustun - Weight loss transformation" 
                 className="w-full h-auto object-cover"
                 loading="lazy"
                 width="400"
                 height="500"
               />
             </div>
          </div>

          <div className="space-y-12">
            <div className="flex gap-6 items-start text-left rtl:text-right">
              <div className="w-16 h-16 rounded-full bg-blue-50 flex items-center justify-center shrink-0">
                <Plane className="w-8 h-8 text-primary" />
              </div>
              <div>
                <h4 className="text-xl font-bold text-[#2d3e50] mb-2 uppercase tracking-wide">{t('vipPackage.freeAirportPickup')}</h4>
                <p className="text-slate-500 text-lg">{t('vipPackage.forYourConvenience')}</p>
              </div>
            </div>

            <div className="flex gap-6 items-start text-left rtl:text-right">
              <div className="w-16 h-16 rounded-full bg-blue-50 flex items-center justify-center shrink-0">
                <Tag className="w-8 h-8 text-primary" />
              </div>
              <div>
                <h4 className="text-xl font-bold text-[#2d3e50] mb-2 uppercase tracking-wide">{t('vipPackage.startsFrom')}</h4>
                <p className="text-slate-500 text-lg">{t('vipPackage.bestPrices')}</p>
              </div>
            </div>

            <div className="flex gap-6 items-start text-left rtl:text-right">
              <div className="w-16 h-16 rounded-full bg-blue-50 flex items-center justify-center shrink-0">
                <Users className="w-8 h-8 text-primary" />
              </div>
              <div>
                <h4 className="text-xl font-bold text-[#2d3e50] mb-2 uppercase tracking-wide">{t('vipPackage.helpfulStaff')}</h4>
                <p className="text-slate-500 text-lg">{t('vipPackage.noCost')}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-16 space-y-6">
          <Button 
            size="lg" 
            className="bg-[#25D366] hover:bg-[#128C7E] text-white font-bold text-lg px-12 py-8 rounded-full shadow-xl uppercase tracking-wider"
            onClick={() => window.open('https://wa.me/905324131143', '_blank')}
            aria-label="Start your VIP package inquiry via WhatsApp"
          >
            {t('vipPackage.letsTryIt')}
          </Button>
          <p className="text-slate-400 font-medium">{t('vipPackage.getStarted')}</p>
        </div>
      </div>
    </section>
  );
}

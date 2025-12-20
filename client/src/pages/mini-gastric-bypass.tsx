import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { useTranslation } from "react-i18next";
import { SEO } from "@/components/seo";

export default function MiniGastricBypass() {
  const { t } = useTranslation('treatments');
  
  const advantages = t('gastricBypass.advantages', { returnObjects: true }) as string[];
  const disadvantages = t('gastricBypass.disadvantages', { returnObjects: true }) as string[];
  const sideEffects = t('gastricBypass.sideEffects', { returnObjects: true }) as string[];
  const thingsToKnow = t('gastricBypass.thingsToKnow', { returnObjects: true }) as string[];
  
  const tableOfContents = [
    { title: t('gastricBypass.tocItem1'), id: "how-it-helps" },
    { title: t('gastricBypass.tocItem2'), id: "side-effects" },
    { title: t('gastricBypass.tocItem3'), id: "insurance" },
    { title: t('gastricBypass.tocItem4'), id: "things-to-know" }
  ];
  
  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="Mini Gastric Bypass Surgery in Turkey"
        description="Mini Gastric Bypass surgery in Istanbul. Achieve 70-85% excess weight loss with this effective bariatric procedure. Expert surgeons, JCI accredited hospital."
        keywords="mini gastric bypass turkey, gastric bypass istanbul, weight loss surgery, bariatric surgery"
        url="/mini-gastric-bypass"
      />
      <Navbar />
      
      {/* Hero Header */}
      <section className="bg-slate-900 text-white pt-40 pb-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">{t('gastricBypass.heroTitle')}</h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            {t('gastricBypass.heroSubtitle')}
          </p>
        </div>
      </section>

      {/* Table of Contents */}
      <section className="py-12 bg-blue-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-xl font-bold text-slate-900 mb-6">{t('gastricBypass.tableOfContents')}</h2>
          <ul className="space-y-3">
            {tableOfContents.map((item, i) => (
              <li key={i}>
                <a 
                  href={`#${item.id}`} 
                  className="text-primary hover:underline flex items-center gap-2"
                >
                  <ArrowRight className="w-4 h-4" />
                  {item.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="flex justify-center mb-12">
            <img 
              src="https://www.ifso.com/images/oagb-mini-gastric-bypass-img.jpg" 
              alt="Mini Gastric Bypass Surgery Illustration" 
              className="max-w-md w-full rounded-xl shadow-lg"
              width="400"
              height="400"
              loading="lazy"
            />
          </div>
          <div className="prose prose-lg max-w-none space-y-6 text-slate-600">
            <p className="text-lg leading-relaxed">{t('gastricBypass.introP1')}</p>
            <p className="text-lg leading-relaxed">{t('gastricBypass.introP2')}</p>
            <p className="text-lg leading-relaxed">{t('gastricBypass.introP3')}</p>
            <p className="text-lg leading-relaxed">{t('gastricBypass.introP4')}</p>
            <p className="text-lg leading-relaxed">{t('gastricBypass.introP5')}</p>
            <p className="text-lg leading-relaxed">{t('gastricBypass.introP6')}</p>
            <p className="text-lg leading-relaxed">{t('gastricBypass.introP7')}</p>
          </div>
        </div>
      </section>

      {/* Advantages & Disadvantages */}
      <section className="py-20 bg-green-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-slate-900 mb-8">{t('common.advantages')}</h2>
          <div className="grid md:grid-cols-2 gap-4 mb-12">
            {Array.isArray(advantages) && advantages.map((adv, i) => (
              <div key={i} className="flex items-start gap-3 p-4 bg-white rounded-lg border border-green-100">
                <div className="w-6 h-6 rounded-full bg-green-500 text-white flex items-center justify-center shrink-0 mt-0.5">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <span className="text-slate-700">{adv}</span>
              </div>
            ))}
          </div>
          
          <h3 className="text-2xl font-bold text-slate-900 mb-6">{t('common.thingsToConsider')}</h3>
          <div className="grid md:grid-cols-2 gap-4">
            {Array.isArray(disadvantages) && disadvantages.map((dis, i) => (
              <div key={i} className="flex items-start gap-3 p-4 bg-amber-50 rounded-lg border border-amber-100">
                <div className="w-6 h-6 rounded-full bg-amber-500 text-white flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold">!</div>
                <span className="text-slate-700">{dis}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it helps */}
      <section id="how-it-helps" className="py-20 bg-slate-50 scroll-mt-24">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-slate-900 mb-8">{t('gastricBypass.howItHelpsTitle')}</h2>
          
          <p className="text-lg text-slate-600 mb-8">{t('gastricBypass.howItHelpsIntro')}</p>
          
          <div className="space-y-6">
            <div className="flex items-start gap-4 p-6 bg-white rounded-xl shadow-sm border border-slate-100">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                <CheckCircle2 className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h4 className="font-bold text-slate-900 mb-2">{t('gastricBypass.benefit1Title')}</h4>
                <p className="text-slate-600">{t('gastricBypass.benefit1Desc')}</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4 p-6 bg-white rounded-xl shadow-sm border border-slate-100">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                <CheckCircle2 className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h4 className="font-bold text-slate-900 mb-2">{t('gastricBypass.benefit2Title')}</h4>
                <p className="text-slate-600">{t('gastricBypass.benefit2Desc')}</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4 p-6 bg-white rounded-xl shadow-sm border border-slate-100">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                <CheckCircle2 className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h4 className="font-bold text-slate-900 mb-2">{t('gastricBypass.benefit3Title')}</h4>
                <p className="text-slate-600">{t('gastricBypass.benefit3Desc')}</p>
              </div>
            </div>
          </div>

          <div className="mt-12 p-8 bg-blue-50 rounded-2xl border border-blue-100">
            <h4 className="font-bold text-slate-900 text-xl mb-4">{t('gastricBypass.additionalBenefitsTitle')}</h4>
            <p className="text-slate-600 text-lg">{t('gastricBypass.additionalBenefitsDesc')}</p>
          </div>
        </div>
      </section>

      {/* Side Effects */}
      <section id="side-effects" className="py-20 scroll-mt-24">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-slate-900 mb-8">{t('gastricBypass.sideEffectsTitle')}</h2>
          
          <p className="text-lg text-slate-600 mb-8">{t('gastricBypass.sideEffectsIntro')}</p>

          <div className="space-y-4 mb-8">
            {Array.isArray(sideEffects) && sideEffects.map((effect, i) => (
              <div key={i} className="flex items-start gap-3 p-4 bg-amber-50 rounded-lg border border-amber-100">
                <div className="w-6 h-6 rounded-full bg-amber-500 text-white flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold">!</div>
                <span className="text-slate-700">{effect}</span>
              </div>
            ))}
          </div>

          <div className="p-6 bg-slate-50 rounded-xl border border-slate-200">
            <p className="text-slate-600">{t('gastricBypass.sideEffectsConclusion')}</p>
          </div>
        </div>
      </section>

      {/* Insurance */}
      <section id="insurance" className="py-20 bg-slate-50 scroll-mt-24">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-slate-900 mb-8">{t('gastricBypass.insuranceTitle')}</h2>
          
          <p className="text-lg text-slate-600">{t('gastricBypass.insuranceDesc')}</p>
        </div>
      </section>

      {/* Things to Know */}
      <section id="things-to-know" className="py-20 scroll-mt-24">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-slate-900 mb-8">{t('gastricBypass.thingsToKnowTitle')}</h2>
          
          <div className="space-y-4">
            {Array.isArray(thingsToKnow) && thingsToKnow.map((item, i) => (
              <div key={i} className="flex items-start gap-4 p-5 bg-white rounded-xl shadow-sm border border-slate-100">
                <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center shrink-0 font-bold text-sm">
                  {i + 1}
                </div>
                <p className="text-slate-700 text-lg">{item}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 p-6 bg-blue-50 rounded-xl border border-blue-100">
            <p className="text-slate-600 text-lg">{t('gastricBypass.thingsToKnowConclusion')}</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">{t('gastricBypass.ctaTitle')}</h2>
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">{t('gastricBypass.ctaDesc')}</p>
          <Button 
            size="lg" 
            className="bg-white text-primary hover:bg-white/90 font-bold text-lg h-14 px-10"
            onClick={() => window.open('https://wa.me/447491068686', '_blank')}
          >
            {t('common.bookConsultation')}
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
}

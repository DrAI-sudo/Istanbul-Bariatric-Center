import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Check } from "lucide-react";
import { useTranslation } from "react-i18next";
import { SEO, JsonLd, structuredData } from "@/components/seo";
import { SummarizeWithAI } from "@/components/summarize-with-ai";

interface FAQ {
  question: string;
  answer: string;
}

export default function DuodenalSwitch() {
  const { t } = useTranslation('treatments');
  
  const advantages = t('duodenalSwitch.advantages', { returnObjects: true }) as string[];
  const disadvantages = t('duodenalSwitch.disadvantages', { returnObjects: true }) as string[];
  const faqs = t('duodenalSwitch.faqs', { returnObjects: true }) as FAQ[];
  
  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="Duodenal Switch Surgery in Turkey"
        description="Duodenal Switch surgery in Istanbul. Most effective weight loss surgery with 40-60% weight loss. Best for high BMI patients. Expert surgical team."
        keywords="duodenal switch turkey, sadi-s surgery, biliopancreatic diversion, weight loss surgery istanbul"
        url="/duodenal-switch"
      />
      <JsonLd data={structuredData.createFAQ(Array.isArray(faqs) ? faqs : [])} />
      <Navbar />
      
      {/* Hero Header */}
      <section className="bg-slate-900 text-white pt-40 pb-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">{t('duodenalSwitch.heroTitle')}</h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            {t('duodenalSwitch.heroSubtitle')}
          </p>
          <SummarizeWithAI variant="dark" />
        </div>
      </section>

      {/* Video Section */}
      <section className="py-16 bg-slate-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="aspect-video rounded-2xl overflow-hidden shadow-2xl">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/EX68RG6faUo"
                title="Duodenal Switch Surgery Explained"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
            <p>{t('duodenalSwitch.introP1')}</p>
            <p>{t('duodenalSwitch.introP2')}</p>
            <p className="font-medium text-slate-900">{t('duodenalSwitch.introP3')}</p>
          </div>
        </div>
      </section>

      {/* Advantages & Disadvantages */}
      <section className="py-16 bg-green-50">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-3xl font-bold text-slate-900 mb-8">{t('common.advantages')}</h2>
          
          <div className="grid md:grid-cols-2 gap-4 mb-12">
            {Array.isArray(advantages) && advantages.map((adv, i) => (
              <div key={i} className="flex items-start gap-3 p-4 bg-white rounded-lg border border-green-100">
                <div className="w-6 h-6 rounded-full bg-green-500 text-white flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-4 h-4" />
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
          
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="bg-white rounded-xl p-8 shadow-sm border border-slate-100 text-center">
              <div className="text-4xl font-bold text-primary mb-2">40-60%</div>
              <p className="text-slate-600">{t('duodenalSwitch.statWeightLoss')}</p>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-sm border border-slate-100 text-center">
              <div className="text-4xl font-bold text-primary mb-2">12-18</div>
              <p className="text-slate-600">{t('duodenalSwitch.statMonths')}</p>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-sm border border-slate-100 text-center">
              <div className="text-4xl font-bold text-primary mb-2">Best</div>
              <p className="text-slate-600">{t('duodenalSwitch.statBest')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">{t('common.faqs')}</h2>
          
          <Accordion type="single" collapsible className="space-y-4">
            {Array.isArray(faqs) && faqs.map((faq, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="border rounded-lg px-6 bg-white shadow-sm">
                <AccordionTrigger className="text-left font-bold text-slate-900 hover:no-underline py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-slate-600 leading-relaxed pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Diabetes Section */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">{t('duodenalSwitch.diabetesTitle')}</h2>
          
          <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
            <p>{t('duodenalSwitch.diabetesP1')}</p>
            <p>{t('duodenalSwitch.diabetesP2')}</p>
            <div className="p-6 bg-blue-50 rounded-xl border border-blue-100">
              <p className="text-slate-700 font-medium">{t('duodenalSwitch.diabetesHighlight')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">{t('duodenalSwitch.ctaTitle')}</h2>
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">{t('duodenalSwitch.ctaDesc')}</p>
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

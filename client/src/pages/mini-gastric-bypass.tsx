import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { useTranslation } from "react-i18next";
import { SEO } from "@/components/seo";
import {
  MoneyHero,
  ProcedureFacts,
  Checklist,
  SurgeonProof,
  RelatedLinks,
  ConversionModule,
} from "@/components/money-page";

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
        title="Mini Gastric Bypass Surgery in Istanbul: Benefits & Results"
        description="Mini Gastric Bypass surgery in Istanbul. Achieve 70-85% excess weight loss with this effective bariatric procedure. Expert surgeons, JCI accredited hospital."
        keywords="mini gastric bypass turkey, gastric bypass istanbul, weight loss surgery, bariatric surgery"
        url="/mini-gastric-bypass"
      />
      <Navbar />
      <MoneyHero title={t('gastricBypass.heroTitle')} subtitle={t('gastricBypass.heroSubtitle')} />

      <div>
        <ProcedureFacts
          title="Mini Gastric Bypass at a Glance"
          facts={[
            { label: "Excess weight loss", value: "70–85%" },
            { label: "Ideal for", value: "BMI 40+" },
            { label: "Hospital stay", value: "2–3 nights" },
            { label: "All-inclusive from", value: "£3,350" },
          ]}
        />

        {/* Table of Contents */}
        <section className="py-12 bg-blue-50" aria-label={t('gastricBypass.tableOfContents')}>
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-xl font-bold text-slate-900 mb-6">{t('gastricBypass.tableOfContents')}</h2>
            <ul className="space-y-3">
              {tableOfContents.map((item, i) => (
                <li key={i}>
                  <a href={`#${item.id}`} className="text-primary hover:underline flex items-center gap-2">
                    <ArrowRight className="w-4 h-4" aria-hidden="true" />
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
                src="/ifso-bypass.webp"
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

        <Checklist title={t('common.advantages')} items={Array.isArray(advantages) ? advantages : []} tone="positive" background="green" />
        <Checklist title={t('common.thingsToConsider')} items={Array.isArray(disadvantages) ? disadvantages : []} tone="warning" background="white" />

        {/* How it helps */}
        <section id="how-it-helps" className="py-20 bg-slate-50 scroll-mt-24">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">{t('gastricBypass.howItHelpsTitle')}</h2>
            <p className="text-lg text-slate-600 mb-8">{t('gastricBypass.howItHelpsIntro')}</p>
            <div className="space-y-6">
              {[1, 2, 3].map((n) => (
                <article key={n} className="flex items-start gap-4 p-6 bg-white rounded-xl shadow-sm border border-slate-100">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-5 h-5 text-primary" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 mb-2">{t(`gastricBypass.benefit${n}Title`)}</h3>
                    <p className="text-slate-600">{t(`gastricBypass.benefit${n}Desc`)}</p>
                  </div>
                </article>
              ))}
            </div>
            <div className="mt-12 p-8 bg-blue-50 rounded-2xl border border-blue-100">
              <h3 className="font-bold text-slate-900 text-xl mb-4">{t('gastricBypass.additionalBenefitsTitle')}</h3>
              <p className="text-slate-600 text-lg">{t('gastricBypass.additionalBenefitsDesc')}</p>
            </div>
          </div>
        </section>

        {/* Side Effects */}
        <section id="side-effects" className="py-20 scroll-mt-24">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">{t('gastricBypass.sideEffectsTitle')}</h2>
            <p className="text-lg text-slate-600 mb-8">{t('gastricBypass.sideEffectsIntro')}</p>
            <ul className="space-y-4 mb-8">
              {Array.isArray(sideEffects) && sideEffects.map((effect, i) => (
                <li key={i} className="flex items-start gap-3 p-4 bg-amber-50 rounded-lg border border-amber-100">
                  <span className="w-6 h-6 rounded-full bg-amber-500 text-white flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold" aria-hidden="true">!</span>
                  <span className="text-slate-700">{effect}</span>
                </li>
              ))}
            </ul>
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
            <ol className="space-y-4 list-none">
              {Array.isArray(thingsToKnow) && thingsToKnow.map((item, i) => (
                <li key={i} className="flex items-start gap-4 p-5 bg-white rounded-xl shadow-sm border border-slate-100">
                  <span className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center shrink-0 font-bold text-sm">
                    {i + 1}
                  </span>
                  <p className="text-slate-700 text-lg">{item}</p>
                </li>
              ))}
            </ol>
            <div className="mt-12 p-6 bg-blue-50 rounded-xl border border-blue-100">
              <p className="text-slate-600 text-lg">{t('gastricBypass.thingsToKnowConclusion')}</p>
            </div>
          </div>
        </section>

        <SurgeonProof
          title="Why Choose Istanbul Bariatric Center for Gastric Bypass?"
          subtitle="Expert surgical team, JCI-accredited facilities, and transparent all-inclusive pricing."
        />

        <RelatedLinks
          title="Explore Other Weight Loss Options"
          links={[
            { title: "Gastric Sleeve", description: "Most popular option", href: "/sleeve-gastrectomy" },
            { title: "Gastric Balloon", description: "Non-surgical option", href: "/gastric-balloon" },
            { title: "Endoscopic Sleeve", description: "Minimally invasive", href: "/esg" },
            { title: "Revision Surgery", description: "Options after weight regain", href: "/revision-bariatric-surgery" },
            { title: t("guides.sleeveVsBypass.title"), description: t("guides.sleeveVsBypass.description"), href: "/gastric-sleeve-vs-gastric-bypass" },
            { title: t("guides.longTermResults.title"), description: t("guides.longTermResults.description"), href: "/bariatric-surgery-long-term-results" },
            { title: t("guides.travelGuide.title"), description: t("guides.travelGuide.description"), href: "/bariatric-surgery-travel-guide" },
          ]}
        />

        <ConversionModule
          title={t('gastricBypass.ctaTitle')}
          text={t('gastricBypass.ctaDesc')}
          buttonLabel={t('common.bookConsultation')}
        />
      </div>

      <Footer />
    </div>
  );
}

import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { CountryFlagsBar } from "@/components/country-flags-bar";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, Check } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { useTranslation } from "react-i18next";
import { SEO, JsonLd, structuredData } from "@/components/seo";
import { SummarizeWithAI } from "@/components/summarize-with-ai";
import { useEffect } from "react";
import { changeLanguage } from "@/i18n/config";

function linkifyDrName(text: string) {
  if (!text.includes('Dr Murat Ustun')) return text;
  const parts = text.split(/(Dr Murat Ustun)/);
  return <>{parts.map((part, i) =>
    part === 'Dr Murat Ustun'
      ? <a key={i} href="https://drmuratustun.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-medium">{part}</a>
      : part
  )}</>;
}

export default function Treatments({ lang }: { lang?: string }) {
  const { t, i18n } = useTranslation('treatments');

  useEffect(() => {
    if (lang && lang !== i18n.language) {
      changeLanguage(lang);
    }
  }, [lang, i18n.language]);

  const seoTitle = t('seo.title');
  const seoDescription = t('seo.description');

  const treatmentsFAQs = t('faqSection.faqs', { returnObjects: true }) as Array<{ question: string; answer: string }>;

  const medicalProceduresSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    "name": "Weight Loss Surgery at Istanbul Bariatric Center — Liv Hospital, Istanbul",
    "description": seoDescription,
    "url": `https://istanbulbariatriccenter.com/treatments${lang ? `/${lang}` : ''}`,
    "mainEntity": [
      {
        "@type": "MedicalProcedure",
        "name": "Gastric Sleeve Surgery (Sleeve Gastrectomy)",
        "alternateName": ["VSG", "Vertical Sleeve Gastrectomy", "Gastric Sleeve Turkey"],
        "procedureType": "Surgical",
        "bodyLocation": "Stomach",
        "description": "Gastric sleeve surgery removes approximately 75-80% of the stomach, creating a smaller tube-shaped stomach that limits food intake and reduces hunger hormones.",
        "howPerformed": "Laparoscopic surgery removing 75-80% of the stomach",
        "preparation": "Comprehensive preoperative tests and consultations",
        "followup": "Dietitian support and follow-up consultations",
        "status": "http://schema.org/ActiveActionStatus",
        "offers": [
          { "@type": "Offer", "name": "Sleeve Gastrectomy Ultra Eco", "price": "2450", "priceCurrency": "GBP", "description": "Experienced Surgeon Team, Boutique Hospital (2 days), All pre-operative tests and consultations" },
          { "@type": "Offer", "name": "Sleeve Gastrectomy Relaxation", "price": "4550", "priceCurrency": "GBP", "description": "With Dr Murat Ustun, JCI Hospital (3 days), UK Dietitian" },
          { "@type": "Offer", "name": "Sleeve Gastrectomy Luxury", "price": "4900", "priceCurrency": "GBP", "description": "With Dr Murat Ustun, Radisson Hotel, UK Dietitian, Supplements" }
        ]
      },
      {
        "@type": "MedicalProcedure",
        "name": "Gastric Bypass Surgery (Roux-en-Y)",
        "alternateName": ["RYGB", "Roux-en-Y Gastric Bypass", "Gastric Bypass Turkey"],
        "procedureType": "Surgical",
        "bodyLocation": "Stomach and Small Intestine",
        "description": "Gastric bypass creates a small pouch from the stomach and connects it directly to the small intestine, bypassing most of the stomach and part of the small intestine.",
        "offers": [
          { "@type": "Offer", "name": "Gastric Bypass Relaxation", "price": "5000", "priceCurrency": "GBP" },
          { "@type": "Offer", "name": "Gastric Bypass Luxury", "price": "5350", "priceCurrency": "GBP" }
        ]
      },
      {
        "@type": "MedicalProcedure",
        "name": "Gastric Balloon",
        "alternateName": ["Intragastric Balloon", "Orbera Balloon", "Allurion Balloon", "Gastric Balloon Turkey"],
        "procedureType": "Noninvasive",
        "bodyLocation": "Stomach",
        "description": "A soft silicone balloon placed in the stomach endoscopically to reduce capacity and help patients feel full faster.",
        "offers": [
          { "@type": "Offer", "name": "Endoscopic Orbera Balloon", "price": "1900", "priceCurrency": "GBP" },
          { "@type": "Offer", "name": "Allurion Swallowable Balloon", "price": "2600", "priceCurrency": "GBP" }
        ]
      },
      {
        "@type": "MedicalProcedure",
        "name": "Duodenal Switch Surgery",
        "alternateName": ["BPD/DS", "Biliopancreatic Diversion", "Duodenal Switch Turkey"],
        "procedureType": "Surgical",
        "bodyLocation": "Stomach and Small Intestine",
        "description": "A complex procedure combining sleeve gastrectomy with intestinal bypass for maximum weight loss in patients with very high BMI.",
        "offers": [
          { "@type": "Offer", "name": "Duodenal Switch Relaxation", "price": "5050", "priceCurrency": "GBP" },
          { "@type": "Offer", "name": "Duodenal Switch Luxury", "price": "5400", "priceCurrency": "GBP" }
        ]
      },
      {
        "@type": "MedicalProcedure",
        "name": "Endoscopic Sleeve Gastroplasty (ESG)",
        "alternateName": ["ESG", "Apollo ESG", "Non-Surgical Gastric Sleeve", "ESG Turkey"],
        "procedureType": "Noninvasive",
        "bodyLocation": "Stomach",
        "description": "A minimally invasive, non-surgical weight loss procedure that reduces stomach size by 70-80% using endoscopic suturing through the mouth.",
        "offers": [
          { "@type": "Offer", "name": "ESG Relaxation", "price": "5700", "priceCurrency": "GBP" },
          { "@type": "Offer", "name": "ESG Luxury", "price": "6850", "priceCurrency": "GBP" }
        ]
      },
      {
        "@type": "MedicalProcedure",
        "name": "POSE-2 Double Helix",
        "alternateName": ["POSE-2", "POSE 2", "Primary Obesity Surgery Endoluminal", "POSE-2 Turkey"],
        "procedureType": "Noninvasive",
        "bodyLocation": "Stomach",
        "description": "A minimally invasive, non-surgical weight loss procedure that reshapes the stomach with full-thickness plications using an endoscopic suturing platform inserted through the mouth — no incisions required.",
        "offers": [
          { "@type": "Offer", "name": "POSE-2 Relaxation", "price": "5700", "priceCurrency": "GBP" },
          { "@type": "Offer", "name": "POSE-2 Luxury", "price": "6850", "priceCurrency": "GBP" }
        ]
      },
      {
        "@type": "MedicalProcedure",
        "name": "Gastric Fundus Mucosal Ablation (GFMA)",
        "alternateName": ["GFMA", "Fundus Ablation", "Gastric Fundus Ablation", "GFMA Turkey"],
        "procedureType": "Noninvasive",
        "bodyLocation": "Stomach",
        "description": "An incisionless endoscopic procedure that ablates the mucosal lining of the gastric fundus — where most ghrelin-producing cells are located — switching off the hunger hormone at its source to reduce appetite and food intake.",
        "offers": [
          { "@type": "Offer", "name": "GFMA Relaxation", "price": "3250", "priceCurrency": "GBP" },
          { "@type": "Offer", "name": "GFMA Luxury", "price": "3750", "priceCurrency": "GBP" }
        ]
      }
    ]
  };

  const convertPrice = (gbp: string) => {
    const num = parseInt(gbp.replace(/[£,]/g, ''), 10);
    if (!num) return { eur: '', usd: '' };
    const eur = Math.round(num * 1.15 / 5) * 5;
    const usd = Math.round(num * 1.35 / 5) * 5;
    return {
      eur: '€' + eur.toLocaleString('en-US'),
      usd: '$' + usd.toLocaleString('en-US'),
    };
  };

  const PriceDisplay = ({ price, colorClass }: { price: string; colorClass: string }) => {
    const { eur, usd } = convertPrice(price);
    return (
      <div className="space-y-1">
        <div className={`text-4xl font-extrabold ${colorClass}`}>{price}</div>
        <div className="text-sm font-semibold text-slate-500">
          {eur} <span className="text-slate-300 mx-1">·</span> {usd}
        </div>
      </div>
    );
  };

  const packages = [
    {
      name: t('packages.sleeveUltraEco.name'),
      price: "£2,450",
      color: "blue",
      features: t('packages.sleeveUltraEco.features', { returnObjects: true }) as string[]
    },
    {
      name: t('packages.sleeveRelaxation.name'),
      price: "£4,550",
      color: "emerald",
      recommended: true,
      features: t('packages.sleeveRelaxation.features', { returnObjects: true }) as string[]
    },
    {
      name: t('packages.sleeveLuxury.name'),
      price: "£4,900",
      color: "amber",
      features: t('packages.sleeveLuxury.features', { returnObjects: true }) as string[]
    }
  ];

  const bypassPackages = [
    {
      name: t('packages.bypassRelaxation.name'),
      price: "£5,000",
      color: "emerald",
      recommended: true,
      features: t('packages.bypassRelaxation.features', { returnObjects: true }) as string[]
    },
    {
      name: t('packages.bypassLuxury.name'),
      price: "£5,350",
      color: "amber",
      features: t('packages.bypassLuxury.features', { returnObjects: true }) as string[]
    }
  ];

  const balloonPackages = [
    {
      name: t('packages.balloonOrbera.name'),
      price: "£1,900",
      color: "blue",
      features: t('packages.balloonOrbera.features', { returnObjects: true }) as string[]
    },
    {
      name: t('packages.balloonAllurion.name'),
      price: "£2,600",
      color: "emerald",
      recommended: true,
      features: t('packages.balloonAllurion.features', { returnObjects: true }) as string[]
    }
  ];

  const esgPackages = [
    {
      name: t('packages.esgRelaxation.name'),
      price: "£5,700",
      color: "emerald",
      recommended: true,
      features: t('packages.esgRelaxation.features', { returnObjects: true }) as string[]
    },
    {
      name: t('packages.esgLuxury.name'),
      price: "£6,850",
      color: "amber",
      features: t('packages.esgLuxury.features', { returnObjects: true }) as string[]
    }
  ];

  const pose2Packages = [
    {
      name: t('packages.pose2Relaxation.name'),
      price: "£5,700",
      color: "emerald",
      recommended: true,
      features: t('packages.pose2Relaxation.features', { returnObjects: true }) as string[]
    },
    {
      name: t('packages.pose2Luxury.name'),
      price: "£6,850",
      color: "amber",
      features: t('packages.pose2Luxury.features', { returnObjects: true }) as string[]
    }
  ];

  const gfmaPackages = [
    {
      name: t('packages.gfmaRelaxation.name'),
      price: "£3,250",
      color: "emerald",
      recommended: true,
      features: t('packages.gfmaRelaxation.features', { returnObjects: true }) as string[]
    },
    {
      name: t('packages.gfmaLuxury.name'),
      price: "£3,750",
      color: "amber",
      features: t('packages.gfmaLuxury.features', { returnObjects: true }) as string[]
    }
  ];

  const duodenalSwitchPackages = [
    {
      name: t('packages.dsRelaxation.name'),
      price: "£5,050",
      color: "emerald",
      recommended: true,
      features: t('packages.dsRelaxation.features', { returnObjects: true }) as string[]
    },
    {
      name: t('packages.dsLuxury.name'),
      price: "£5,400",
      color: "amber",
      features: t('packages.dsLuxury.features', { returnObjects: true }) as string[]
    }
  ];

  const comparisonData = [
    {
      procedure: t('comparison.gastricSleeve'),
      type: t('comparison.surgical'),
      bmiRange: t('comparison.bmi35plus'),
      startingPrice: "£2,450",
      hospitalStay: t('comparison.stay2to3'),
      expectedWeightLoss: t('comparison.loss60to70'),
      recovery: t('comparison.recovery2to3weeks')
    },
    {
      procedure: t('comparison.gastricBypass'),
      type: t('comparison.surgical'),
      bmiRange: t('comparison.bmi40plus'),
      startingPrice: "£5,000",
      hospitalStay: t('comparison.stay2to3'),
      expectedWeightLoss: t('comparison.loss70to80'),
      recovery: t('comparison.recovery2to3weeks')
    },
    {
      procedure: t('comparison.gastricBalloon'),
      type: t('comparison.nonSurgical'),
      bmiRange: t('comparison.bmi30to40'),
      startingPrice: "£1,900",
      hospitalStay: t('comparison.staySameDay'),
      expectedWeightLoss: t('comparison.loss10to15'),
      recovery: t('comparison.recovery1to3days')
    },
    {
      procedure: t('comparison.esg'),
      type: t('comparison.nonSurgical'),
      bmiRange: t('comparison.bmi30to40'),
      startingPrice: "£5,700",
      hospitalStay: t('comparison.stay1to2'),
      expectedWeightLoss: t('comparison.loss15to20'),
      recovery: t('comparison.recovery1to3days')
    },
    {
      procedure: t('comparison.pose2'),
      type: t('comparison.nonSurgical'),
      bmiRange: t('comparison.bmi30to40'),
      startingPrice: "£5,700",
      hospitalStay: t('comparison.stay1to2'),
      expectedWeightLoss: t('comparison.loss15to16'),
      recovery: t('comparison.recovery1to3days')
    },
    {
      procedure: t('comparison.gfma'),
      type: t('comparison.nonSurgical'),
      bmiRange: t('comparison.bmi30to40'),
      startingPrice: "£3,250",
      hospitalStay: t('comparison.stay1to2'),
      expectedWeightLoss: t('comparison.loss10to15'),
      recovery: t('comparison.recovery1to3days')
    },
    {
      procedure: t('comparison.duodenalSwitch'),
      type: t('comparison.surgical'),
      bmiRange: t('comparison.bmi50plus'),
      startingPrice: "£5,050",
      hospitalStay: t('comparison.stay3to4'),
      expectedWeightLoss: t('comparison.loss70to85'),
      recovery: t('comparison.recovery3to4weeks')
    }
  ];

  const treatments = [
    {
      title: t('gastricSleeve.title'),
      desc: t('gastricSleeve.desc'),
      advantages: t('gastricSleeve.advantages', { returnObjects: true }) as string[],
      disadvantages: t('gastricSleeve.disadvantages', { returnObjects: true }) as string[],
      ifsoImage: "/ifso-sleeve.webp"
    },
    {
      title: t('gastricBypass.title'),
      desc: t('gastricBypass.desc'),
      advantages: t('gastricBypass.advantages', { returnObjects: true }) as string[],
      disadvantages: t('gastricBypass.disadvantages', { returnObjects: true }) as string[],
      ifsoImage: "/ifso-bypass.webp"
    },
    {
      title: t('gastricBalloon.title'),
      desc: t('gastricBalloon.desc'),
      advantages: t('gastricBalloon.advantages', { returnObjects: true }) as string[],
      disadvantages: t('gastricBalloon.disadvantages', { returnObjects: true }) as string[],
      ifsoImage: "/gastric-balloon.webp"
    },
    {
      title: t('gastricBand.title'),
      desc: t('gastricBand.desc'),
      advantages: t('gastricBand.advantages', { returnObjects: true }) as string[],
      disadvantages: t('gastricBand.disadvantages', { returnObjects: true }) as string[],
      ifsoImage: "/ifso-lagb.webp"
    },
    {
      title: t('duodenalSwitch.title'),
      desc: t('duodenalSwitch.desc'),
      advantages: t('duodenalSwitch.advantages', { returnObjects: true }) as string[],
      disadvantages: t('duodenalSwitch.disadvantages', { returnObjects: true }) as string[],
      ifsoImage: "/ifso-ds.webp"
    },
    {
      title: t('esgTreatment.title'),
      desc: t('esgTreatment.desc'),
      advantages: t('esgTreatment.advantages', { returnObjects: true }) as string[],
      disadvantages: t('esgTreatment.disadvantages', { returnObjects: true }) as string[],
      ifsoImage: "/esg-procedure.webp"
    },
    {
      title: t('pose2Treatment.title'),
      desc: t('pose2Treatment.desc'),
      advantages: t('pose2Treatment.advantages', { returnObjects: true }) as string[],
      disadvantages: t('pose2Treatment.disadvantages', { returnObjects: true }) as string[],
      ifsoImage: "/pose2-procedure.webp",
      noIfsoCredit: true
    },
    {
      title: t('gfmaTreatment.title'),
      desc: t('gfmaTreatment.desc'),
      advantages: t('gfmaTreatment.advantages', { returnObjects: true }) as string[],
      disadvantages: t('gfmaTreatment.disadvantages', { returnObjects: true }) as string[],
      ifsoImage: "/gfma-procedure-card.webp",
      noIfsoCredit: true
    }
  ];

  const urlBase = lang ? `/treatments/${lang}` : '/treatments';

  const packageColorStyles: Record<string, { border: string; bg: string; price: string; check: string; checkIcon: string; btn: string; badge: string }> = {
    blue: { border: 'border-blue-500', bg: 'bg-blue-50', price: 'text-blue-600', check: 'bg-blue-100', checkIcon: 'text-blue-600', btn: 'bg-blue-600 hover:bg-blue-700', badge: 'bg-blue-600' },
    emerald: { border: 'border-emerald-500', bg: 'bg-emerald-50', price: 'text-emerald-600', check: 'bg-emerald-100', checkIcon: 'text-emerald-600', btn: 'bg-emerald-600 hover:bg-emerald-700', badge: 'bg-emerald-600' },
    amber: { border: 'border-amber-500', bg: 'bg-amber-50', price: 'text-amber-600', check: 'bg-amber-100', checkIcon: 'text-amber-600', btn: 'bg-amber-600 hover:bg-amber-700', badge: 'bg-amber-600' },
  };

  const renderPackagesAccordion = (
    title: string,
    subtitle: string,
    pkgs: { name: string; price: string; color: string; recommended?: boolean; features: string[] }[],
    gridClass: string,
    testId: string
  ) => (
    <div className="mt-16 bg-slate-50 rounded-3xl px-6 py-4 md:px-12 md:py-6">
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="packages" className="border-b-0">
          <AccordionTrigger className="hover:no-underline py-6" data-testid={testId}>
            <div className="text-center w-full">
              <h3 className="text-2xl md:text-3xl font-bold text-slate-900">{title}</h3>
              <p className="text-slate-600 mt-2 font-normal text-base">{subtitle}</p>
            </div>
          </AccordionTrigger>
          <AccordionContent>
            <div className={`${gridClass} pt-8`}>
              {pkgs.map((pkg, idx) => {
                const styles = packageColorStyles[pkg.color] || packageColorStyles.blue;
                return (
                  <Card key={idx} className={`relative overflow-hidden border-2 transition-all duration-300 hover:shadow-xl ${pkg.recommended ? `${styles.border} shadow-lg scale-105 z-10` : `${styles.border} shadow-sm`}`}>
                    {pkg.recommended && (
                      <div className={`absolute top-0 right-0 ${styles.badge} text-white text-xs font-bold px-3 py-1 rounded-bl-lg`}>
                        {t('common.popular')}
                      </div>
                    )}
                    <CardHeader className={`text-center pb-2 ${styles.bg}`}>
                      <CardTitle className="text-xl font-bold text-slate-900">{pkg.name}</CardTitle>
                    </CardHeader>
                    <CardContent className="text-center space-y-6 pt-6">
                      <PriceDisplay price={pkg.price} colorClass={styles.price} />
                      <ul className="space-y-4 text-start mx-auto max-w-[240px]">
                        {pkg.features.map((feature, fIdx) => (
                          <li key={fIdx} className="flex items-center gap-3 text-slate-700">
                            <div className={`w-5 h-5 rounded-full ${styles.check} flex items-center justify-center shrink-0`}>
                              <Check className={`w-3 h-3 ${styles.checkIcon}`} />
                            </div>
                            {linkifyDrName(feature)}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                    <CardFooter className="pt-4 pb-8">
                      <a href={`https://wa.me/905324131143?text=${encodeURIComponent(`${t('whatsapp.packageMessage')} ${pkg.name}`)}`} target="_blank" rel="noopener noreferrer" className="w-full">
                        <Button className={`w-full ${styles.btn} text-white`}>
                          {t('common.selectPackage')}
                        </Button>
                      </a>
                    </CardFooter>
                  </Card>
                );
              })}
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );

  return (
    <div className="min-h-screen bg-white">
      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:bg-primary focus:text-white focus:px-4 focus:py-2 focus:rounded">
        {t('seo.skipToContent')}
      </a>
      <SEO
        title={seoTitle}
        description={seoDescription}
        keywords="weight loss surgery turkey, bariatric surgery istanbul, gastric sleeve turkey cost, gastric bypass turkey price, gastric balloon turkey, ESG turkey, endoscopic sleeve gastroplasty, duodenal switch turkey, sleeve gastrectomy turkey, bariatric surgery cost turkey 2026, best bariatric surgeon turkey, dr murat ustun, JCI hospital istanbul, all inclusive weight loss surgery, gastric sleeve package turkey, gastric bypass package, weight loss surgery abroad, medical tourism turkey, obesity surgery turkey, metabolic surgery istanbul, cheap gastric sleeve, affordable bariatric surgery, gastric sleeve uk patients, weight loss surgery from uk"
        url={urlBase}
      />
      <JsonLd data={structuredData.createBreadcrumb([
        { name: "Home", url: "/" },
        { name: t('main.title'), url: urlBase }
      ])} />
      <JsonLd data={medicalProceduresSchema} />
      <JsonLd data={structuredData.createFAQ(treatmentsFAQs)} />
      <Navbar />
      
      <main id="main-content" role="main">
      <section className="relative text-white pt-40 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <img src="/treatments-hero.webp" alt={t('seo.heroAlt')} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-slate-900/70" />
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">{t('main.title')}</h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            {t('main.subtitle')}
          </p>
          <SummarizeWithAI variant="dark" />
        </div>
      </section>

      <section className="py-16 bg-white" data-testid="section-comparison-table">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4" data-testid="text-comparison-title">{t('comparison.title')}</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">{t('comparison.subtitle')}</p>
          </div>
          <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-lg">
            <table className="w-full text-left min-w-[800px]" data-testid="table-procedure-comparison">
              <thead>
                <tr className="bg-slate-900 text-white">
                  <th className="px-6 py-4 font-semibold text-sm uppercase tracking-wider">{t('comparison.procedure')}</th>
                  <th className="px-6 py-4 font-semibold text-sm uppercase tracking-wider">{t('comparison.type')}</th>
                  <th className="px-6 py-4 font-semibold text-sm uppercase tracking-wider">{t('comparison.bmiRange')}</th>
                  <th className="px-6 py-4 font-semibold text-sm uppercase tracking-wider">{t('comparison.startingPrice')}</th>
                  <th className="px-6 py-4 font-semibold text-sm uppercase tracking-wider">{t('comparison.hospitalStay')}</th>
                  <th className="px-6 py-4 font-semibold text-sm uppercase tracking-wider">{t('comparison.expectedWeightLoss')}</th>
                  <th className="px-6 py-4 font-semibold text-sm uppercase tracking-wider">{t('comparison.recovery')}</th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((row, idx) => (
                  <tr
                    key={idx}
                    className={`border-b border-slate-100 transition-colors duration-200 hover:bg-primary/5 ${idx % 2 === 0 ? 'bg-white' : 'bg-slate-50'}`}
                    data-testid={`row-procedure-${row.procedure.toLowerCase().replace(/\s+/g, '-')}`}
                  >
                    <td className="px-6 py-5 font-semibold text-slate-900">{row.procedure}</td>
                    <td className="px-6 py-5">
                      <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${row.type === t('comparison.surgical') ? 'bg-blue-100 text-blue-700' : 'bg-emerald-100 text-emerald-700'}`}>
                        {row.type}
                      </span>
                    </td>
                    <td className="px-6 py-5 text-slate-700">{row.bmiRange}</td>
                    <td className="px-6 py-5 font-bold text-primary">
                      <div>{row.startingPrice}</div>
                      <div className="text-xs font-medium text-slate-500 mt-0.5">
                        {convertPrice(row.startingPrice).eur} · {convertPrice(row.startingPrice).usd}
                      </div>
                    </td>
                    <td className="px-6 py-5 text-slate-700">{row.hospitalStay}</td>
                    <td className="px-6 py-5 text-slate-700">{row.expectedWeightLoss}</td>
                    <td className="px-6 py-5 text-slate-700">{row.recovery}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-sm text-slate-500 mt-4 text-center">{linkifyDrName(t('comparison.priceNote'))}</p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="space-y-24">
            {treatments.map((treatment, i) => (
              <div key={i} className="scroll-mt-32" id={treatment.title.toLowerCase().replace(/\s+/g, '-')}>
                <div className="grid lg:grid-cols-2 gap-12 items-start mb-12">
                  <div className="space-y-6">
                    <h2 className="text-3xl font-bold text-slate-900">{treatment.title}</h2>
                    <p className="text-lg text-slate-600 leading-relaxed">
                      {treatment.desc}
                    </p>
                    
                    <div className="space-y-8 mt-8">
                      <div>
                        <h4 className="text-lg font-bold text-emerald-600 mb-4 flex items-center gap-2">
                          <CheckCircle2 className="w-5 h-5" /> {t('common.advantages')}
                        </h4>
                        <ul className="space-y-3">
                          {treatment.advantages.map((adv, j) => (
                            <li key={j} className="flex items-start gap-3 text-slate-600">
                              <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-2 shrink-0" />
                              {adv}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="text-lg font-bold text-amber-600 mb-4 flex items-center gap-2">
                          <span className="w-5 h-5 rounded-full border border-amber-600 flex items-center justify-center text-xs font-bold">!</span> 
                          {t('common.thingsToConsider')}
                        </h4>
                        <ul className="space-y-3">
                          {treatment.disadvantages.map((dis, j) => (
                            <li key={j} className="flex items-start gap-3 text-slate-600">
                              <div className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2 shrink-0" />
                              {dis}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="pt-6">
                      <a href={`https://wa.me/905324131143?text=${encodeURIComponent(`${t('whatsapp.consultMessage')} ${treatment.title}`)}`} target="_blank" rel="noopener noreferrer">
                        <Button className="bg-primary hover:bg-primary/90">
                          {t('common.consultFor')} {treatment.title} <ArrowRight className="ml-2 w-4 h-4" />
                        </Button>
                      </a>
                    </div>
                  </div>
                  
                  <div className="bg-slate-50 rounded-2xl p-8 border border-slate-100 h-full min-h-[400px] flex flex-col items-center justify-center relative overflow-hidden">
                    {treatment.ifsoImage ? (
                      <div className="text-center">
                        <img 
                          src={treatment.ifsoImage} 
                          alt={treatment.noIfsoCredit ? `Illustration of ${treatment.title} procedure` : `IFSO Atlas illustration of ${treatment.title}`}
                          className="w-full max-h-[450px] object-contain rounded-lg shadow-md mb-4"
                          loading="lazy"
                          width="400"
                          height="400"
                          data-testid={`img-ifso-${treatment.title.toLowerCase().replace(/\s+/g, '-')}`}
                        />
                        {!treatment.noIfsoCredit && (
                          <p className="text-xs text-slate-500 mt-4 italic">
                            © Dr Levent Efe, courtesy of IFSO
                          </p>
                        )}
                      </div>
                    ) : (
                      <div className="text-center">
                        <div className="w-32 h-32 bg-white rounded-full mx-auto mb-6 flex items-center justify-center shadow-sm">
                          <span className="text-4xl">🩺</span>
                        </div>
                        <p className="text-slate-400 font-medium">{treatment.title}</p>
                      </div>
                    )}
                  </div>
                </div>

                {i === 2 && renderPackagesAccordion(t('packages.balloonTitle'), t('packages.balloonSubtitle'), balloonPackages, "grid md:grid-cols-2 gap-8 max-w-3xl mx-auto", "accordion-trigger-balloon-packages")}

                {i === 1 && renderPackagesAccordion(t('packages.bypassTitle'), t('packages.bypassSubtitle'), bypassPackages, "grid md:grid-cols-2 gap-8 max-w-3xl mx-auto", "accordion-trigger-bypass-packages")}

                {i === 5 && renderPackagesAccordion(t('packages.esgTitle'), t('packages.esgSubtitle'), esgPackages, "grid md:grid-cols-2 gap-8 max-w-3xl mx-auto", "accordion-trigger-esg-packages")}

                {i === 6 && renderPackagesAccordion(t('packages.pose2Title'), t('packages.pose2Subtitle'), pose2Packages, "grid md:grid-cols-2 gap-8 max-w-3xl mx-auto", "accordion-trigger-pose2-packages")}

                {i === 7 && renderPackagesAccordion(t('packages.gfmaTitle'), t('packages.gfmaSubtitle'), gfmaPackages, "grid md:grid-cols-2 gap-8 max-w-3xl mx-auto", "accordion-trigger-gfma-packages")}

                {i === 4 && renderPackagesAccordion(t('packages.dsTitle'), t('packages.dsSubtitle'), duodenalSwitchPackages, "grid md:grid-cols-2 gap-8 max-w-3xl mx-auto", "accordion-trigger-ds-packages")}

                {i === 0 && renderPackagesAccordion(t('main.sleevePackageTitle'), t('main.sleevePackageDesc'), packages, "grid md:grid-cols-3 gap-8", "accordion-trigger-sleeve-packages")}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-slate-900">{t('postBariatricSection.sectionTitle')}</h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                {t('postBariatricSection.desc1')}
              </p>
              <p className="text-lg text-slate-600 leading-relaxed">
                {t('postBariatricSection.desc2')}
              </p>
              <div className="pt-4">
                <Button 
                  className="bg-primary hover:bg-primary/90"
                  onClick={() => window.location.href = '/post-bariatric-surgery'}
                >
                  {t('postBariatricSection.learnMore')} <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </div>
            </div>
            <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-lg">
              <img 
                src="/post-bariatric-surgery.webp" 
                alt={t('postBariatricSection.imageAlt')}
                className="w-full rounded-lg"
                loading="lazy"
              />
              <p className="text-sm text-slate-500 mt-4 text-center">
                {t('postBariatricSection.imageCaption')}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white" id="faqs">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">{t('faqSection.title')}</h2>
            <p className="text-lg text-slate-600">{t('faqSection.subtitle')}</p>
          </div>
          <div className="space-y-6">
            {treatmentsFAQs.map((faq, idx) => (
              <details key={idx} className="group bg-slate-50 rounded-xl border border-slate-200 overflow-hidden">
                <summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-slate-100 transition-colors">
                  <h3 className="text-lg font-semibold text-slate-900 pr-4">{faq.question}</h3>
                  <span className="text-primary text-xl font-bold shrink-0 group-open:rotate-45 transition-transform">+</span>
                </summary>
                <div className="px-6 pb-6">
                  <p className="text-slate-600 leading-relaxed">{faq.answer.includes('Dr Murat Ustun') ? linkifyDrName(faq.answer) : faq.answer}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-slate-900 text-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-4">{t('treatmentLinks.title')}</h2>
            <p className="text-slate-300">{t('treatmentLinks.subtitle')}</p>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            <a href="/weight-loss-surgery-turkey" className="block bg-white/10 hover:bg-white/20 rounded-xl p-5 transition-colors text-center">
              <h3 className="font-semibold text-white mb-1">Weight loss surgery in Turkey guide</h3>
              <p className="text-sm text-slate-300">Compare 8 procedures, costs and safety</p>
            </a>
            <a href="/sleeve-gastrectomy" className="block bg-white/10 hover:bg-white/20 rounded-xl p-5 transition-colors text-center">
              <h3 className="font-semibold text-white mb-1">{t('treatmentLinks.gastricSleeve')}</h3>
              <p className="text-sm text-slate-300">{t('treatmentLinks.gastricSleevePrice')}</p>
            </a>
            <a href="/mini-gastric-bypass" className="block bg-white/10 hover:bg-white/20 rounded-xl p-5 transition-colors text-center">
              <h3 className="font-semibold text-white mb-1">{t('treatmentLinks.miniBypass')}</h3>
              <p className="text-sm text-slate-300">{t('treatmentLinks.miniBypassDesc')}</p>
            </a>
            <a href="/gastric-balloon-turkey" className="block bg-white/10 hover:bg-white/20 rounded-xl p-5 transition-colors text-center">
              <h3 className="font-semibold text-white mb-1">{t('treatmentLinks.gastricBalloon')}</h3>
              <p className="text-sm text-slate-300">{t('treatmentLinks.gastricBalloonPrice')}</p>
            </a>
            <a href="/esg" className="block bg-white/10 hover:bg-white/20 rounded-xl p-5 transition-colors text-center">
              <h3 className="font-semibold text-white mb-1">{t('treatmentLinks.esg')}</h3>
              <p className="text-sm text-slate-300">{t('treatmentLinks.esgPrice')}</p>
            </a>
            <a href="/duodenal-switch" className="block bg-white/10 hover:bg-white/20 rounded-xl p-5 transition-colors text-center">
              <h3 className="font-semibold text-white mb-1">{t('treatmentLinks.duodenalSwitch')}</h3>
              <p className="text-sm text-slate-300">{t('treatmentLinks.duodenalSwitchPrice')}</p>
            </a>
            <a href="/transit-bipartition" className="block bg-white/10 hover:bg-white/20 rounded-xl p-5 transition-colors text-center">
              <h3 className="font-semibold text-white mb-1">{t('treatmentLinks.transitBipartition')}</h3>
              <p className="text-sm text-slate-300">{t('treatmentLinks.transitBipartitionDesc')}</p>
            </a>
            <a href="/post-bariatric-surgery" className="block bg-white/10 hover:bg-white/20 rounded-xl p-5 transition-colors text-center">
              <h3 className="font-semibold text-white mb-1">{t('treatmentLinks.postBariatric')}</h3>
              <p className="text-sm text-slate-300">{t('treatmentLinks.postBariatricDesc')}</p>
            </a>
            <a href="/revision-bariatric-surgery" className="block bg-white/10 hover:bg-white/20 rounded-xl p-5 transition-colors text-center">
              <h3 className="font-semibold text-white mb-1">Revision Bariatric Surgery</h3>
              <p className="text-sm text-slate-300">Fix or convert a previous weight loss surgery</p>
            </a>
            <a href="/cost-of-bariatric-surgery-in-turkey" className="block bg-white/10 hover:bg-white/20 rounded-xl p-5 transition-colors text-center">
              <h3 className="font-semibold text-white mb-1">Cost of Bariatric Surgery in Turkey</h3>
              <p className="text-sm text-slate-300">Full 2026 price guide & what's included</p>
            </a>
            <a href="/bariatric-surgery-for-uk-patients" className="block bg-white/10 hover:bg-white/20 rounded-xl p-5 transition-colors text-center">
              <h3 className="font-semibold text-white mb-1">Guide for UK Patients</h3>
              <p className="text-sm text-slate-300">NHS waits, costs & travel from the UK</p>
            </a>
            <a href="/health-profile" className="block bg-white/10 hover:bg-white/20 rounded-xl p-5 transition-colors text-center">
              <h3 className="font-semibold text-white mb-1">{t('treatmentLinks.eligible')}</h3>
              <p className="text-sm text-slate-300">{t('treatmentLinks.eligibleDesc')}</p>
            </a>
            <a href="/results" className="block bg-white/10 hover:bg-white/20 rounded-xl p-5 transition-colors text-center">
              <h3 className="font-semibold text-white mb-1">{t('treatmentLinks.results')}</h3>
              <p className="text-sm text-slate-300">{t('treatmentLinks.resultsDesc')}</p>
            </a>
          </div>
        </div>
      </section>

      <CountryFlagsBar variant="treatments" />

      </main>

      <Footer />
    </div>
  );
}

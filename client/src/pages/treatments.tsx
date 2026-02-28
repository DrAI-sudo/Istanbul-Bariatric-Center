import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, Check } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { useTranslation } from "react-i18next";
import { SEO, JsonLd, structuredData } from "@/components/seo";
import { SummarizeWithAI } from "@/components/summarize-with-ai";

export default function Treatments() {
  const { t } = useTranslation('treatments');

  const seoTitle = "Weight Loss Surgery in Turkey 2026 - Gastric Sleeve, Bypass, Balloon & ESG Prices from £1,650";
  const seoDescription = "Compare all bariatric surgery options in Istanbul, Turkey: Gastric Sleeve from £2,950, Gastric Bypass from £3,350, Gastric Balloon from £1,650, ESG from £4,950. JCI accredited hospital, world-renowned Dr Murat Ustun. All-inclusive packages with airport transfers, hotel & dietitian support.";

  const treatmentsFAQs = [
    { question: "How much does weight loss surgery cost in Turkey?", answer: "Weight loss surgery in Turkey starts from £1,650 for a gastric balloon, £2,950 for gastric sleeve, £3,350 for gastric bypass, and £4,950 for ESG. All packages include JCI accredited hospital stay, preoperative tests, airport transfers, and dietitian support." },
    { question: "Which bariatric surgery is best for me?", answer: "The best bariatric surgery depends on your BMI, health conditions, and weight loss goals. Gastric sleeve is ideal for BMI 35+, gastric bypass for BMI 40+ or with metabolic conditions, gastric balloon for BMI 30-40 seeking non-surgical options, and ESG for BMI 30-40 wanting minimally invasive treatment." },
    { question: "Is weight loss surgery in Turkey safe?", answer: "Yes, Turkey is one of the world's leading destinations for bariatric surgery. Istanbul Bariatric Center operates in JCI-accredited hospitals with internationally trained surgeons. Dr Murat Ustun has performed thousands of successful procedures with excellent outcomes." },
    { question: "What is included in the surgery packages?", answer: "All packages include hospital stay in a JCI accredited facility, all preoperative tests and consultations, airport pickup, and dietitian support. Relaxation and Luxury packages add Dr Murat Ustun as your surgeon, extended hospital stays, Radisson hotel accommodation, UK registered dietitian support, and supplements." },
    { question: "How much weight will I lose after bariatric surgery?", answer: "Expected weight loss varies by procedure: Gastric sleeve patients typically lose 60-70% of excess weight, gastric bypass 70-80%, gastric balloon 10-15% of total body weight, and ESG 15-20% of total body weight within the first year." },
    { question: "What is the recovery time for bariatric surgery in Turkey?", answer: "Recovery varies by procedure: Gastric sleeve and bypass patients stay 2-3 days in hospital and can return to normal activities in 2-3 weeks. Gastric balloon is same-day, and ESG patients can resume activities in 1-3 days." },
    { question: "Do I get aftercare support after returning home?", answer: "Yes, all patients receive comprehensive aftercare including dietitian support, follow-up consultations, and access to our UK-based care support team available in 8 locations across the UK." },
    { question: "Who is Dr Murat Ustun?", answer: "Dr Murat Ustun is a world-renowned bariatric surgeon based in Istanbul, Turkey. He is a pioneer of ESG (Endoscopic Sleeve Gastroplasty) in Turkey and has performed thousands of successful weight loss surgeries including gastric sleeve, gastric bypass, and duodenal switch procedures." }
  ];

  const medicalProceduresSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    "name": "Weight Loss Surgery Options & Treatments in Turkey",
    "description": seoDescription,
    "url": "https://istanbulbariatriccenter.com/treatments",
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
          { "@type": "Offer", "name": "Sleeve Gastrectomy Basic", "price": "2950", "priceCurrency": "GBP", "description": "JCI Accredited Hospital (2 days), Airport Pickup, Dietitian Support" },
          { "@type": "Offer", "name": "Sleeve Gastrectomy Relaxation", "price": "3950", "priceCurrency": "GBP", "description": "With Dr Murat Ustun, JCI Hospital (3 days), UK Dietitian" },
          { "@type": "Offer", "name": "Sleeve Gastrectomy Luxury", "price": "4250", "priceCurrency": "GBP", "description": "With Dr Murat Ustun, Radisson Hotel, UK Dietitian, Supplements" }
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
          { "@type": "Offer", "name": "Gastric Bypass Basic", "price": "3350", "priceCurrency": "GBP" },
          { "@type": "Offer", "name": "Gastric Bypass Relaxation", "price": "4350", "priceCurrency": "GBP" },
          { "@type": "Offer", "name": "Gastric Bypass Luxury", "price": "4650", "priceCurrency": "GBP" }
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
          { "@type": "Offer", "name": "Endoscopic Orbera Balloon", "price": "1650", "priceCurrency": "GBP" },
          { "@type": "Offer", "name": "Allurion Swallowable Balloon", "price": "2250", "priceCurrency": "GBP" }
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
          { "@type": "Offer", "name": "Duodenal Switch Relaxation", "price": "4400", "priceCurrency": "GBP" },
          { "@type": "Offer", "name": "Duodenal Switch Luxury", "price": "4700", "priceCurrency": "GBP" }
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
          { "@type": "Offer", "name": "ESG Relaxation", "price": "4950", "priceCurrency": "GBP" },
          { "@type": "Offer", "name": "ESG Luxury", "price": "5950", "priceCurrency": "GBP" }
        ]
      }
    ]
  };

  const packages = [
    {
      name: "Sleeve Gastrectomy Basic",
      price: "£2,950",
      color: "blue",
      features: [
        "Best Doctors",
        "JCI Accredited Hospital (2 days)",
        "All comprehensive preops and consultations",
        "Airport Pickup",
        "Dietitian Support"
      ]
    },
    {
      name: "Sleeve Gastrectomy Relaxation",
      price: "£3,950",
      color: "emerald",
      recommended: true,
      features: [
        "Surgery with world renowned Dr Murat Ustun",
        "JCI Accredited Hospital (3 days)",
        "All comprehensive preops and consultations",
        "Airport Pickup",
        "UK registered dietitian Support"
      ]
    },
    {
      name: "Sleeve Gastrectomy Luxury",
      price: "£4,250",
      color: "amber",
      features: [
        "Surgery with world renowned Dr Murat Ustun",
        "JCI Accredited Hospital (3 days)",
        "All comprehensive preops and consultations",
        "Airport Pickup",
        "3 night of Radisson hotel accommodation",
        "UK registered dietitian Support",
        "1 months of supplements",
        "Local UK care support in 8 Locations"
      ]
    }
  ];

  const bypassPackages = [
    {
      name: "Gastric Bypass Basic",
      price: "£3,350",
      color: "blue",
      features: [
        "Best Doctors",
        "JCI Accredited Hospital (2 days)",
        "All comprehensive preops and consultations",
        "Airport Pickup",
        "Dietitian Support"
      ]
    },
    {
      name: "Gastric Bypass Relaxation",
      price: "£4,350",
      color: "emerald",
      recommended: true,
      features: [
        "Surgery with world renowned Dr Murat Ustun",
        "JCI Accredited Hospital (3 days)",
        "All comprehensive preops and consultations",
        "Airport Pickup",
        "UK registered dietitian Support"
      ]
    },
    {
      name: "Gastric Bypass Luxury",
      price: "£4,650",
      color: "amber",
      features: [
        "Surgery with world renowned Dr Murat Ustun",
        "JCI Accredited Hospital (3 days)",
        "All comprehensive preops and consultations",
        "Airport Pickup",
        "3 night of Radisson hotel accommodation",
        "UK registered dietitian Support",
        "1 months of supplements",
        "Local UK care support in 8 Locations"
      ]
    }
  ];

  const balloonPackages = [
    {
      name: "Endoscopic Orbera Balloon",
      price: "£1,650",
      color: "blue",
      features: [
        "Airport Transfers",
        "Comprehensive Preop Tests",
        "Endoscopy",
        "Anesthesia",
        "2 nights of accommodation",
        "Dietitian Support"
      ]
    },
    {
      name: "Allurion Swallowable Balloon",
      price: "£2,250",
      color: "emerald",
      recommended: true,
      features: [
        "Airport Transfers",
        "Comprehensive Preop Tests",
        "Endoscopy",
        "Anesthesia",
        "1 night of accommodation",
        "Dietitian Support"
      ]
    }
  ];

  const esgPackages = [
    {
      name: "ESG Relaxation",
      price: "£4,950",
      color: "emerald",
      recommended: true,
      features: [
        "State-of-the-art Liv hospital",
        "Procedure with Dr Murat Ustun (Pioneer of ESG in Turkey)",
        "VIP Airport Transfers",
        "All comprehensive preop tests and consultations",
        "OR and hospital costs",
        "2 days of admission in private room"
      ]
    },
    {
      name: "ESG Luxury",
      price: "£5,950",
      color: "amber",
      features: [
        "State-of-the-art Liv hospital",
        "Procedure with Dr Murat Ustun (Pioneer of ESG in Turkey)",
        "VIP Airport Transfers",
        "All comprehensive preop tests and consultations",
        "OR and hospital costs",
        "2 days of admission in private room",
        "2 days of accommodation in Radisson Hotel",
        "4 UK registered dietitian appointments",
        "1 months supplement and multivitamin package"
      ]
    }
  ];

  const duodenalSwitchPackages = [
    {
      name: "Duodenal Switch Relaxation",
      price: "£4,400",
      color: "emerald",
      recommended: true,
      features: [
        "Surgery with world renowned Dr Murat Ustun",
        "JCI Accredited Hospital (3 days)",
        "All comprehensive preops and consultations",
        "Airport Pickup",
        "UK registered dietitian Support"
      ]
    },
    {
      name: "Duodenal Switch Luxury",
      price: "£4,700",
      color: "amber",
      features: [
        "Surgery with world renowned Dr Murat Ustun",
        "JCI Accredited Hospital (3 days)",
        "All comprehensive preops and consultations",
        "Airport Pickup",
        "3 night of Radisson hotel accommodation",
        "UK registered dietitian Support",
        "1 months of supplements",
        "Local UK care support in 8 Locations"
      ]
    }
  ];

  const treatments = [
    {
      title: t('gastricSleeve.title'),
      desc: t('gastricSleeve.desc'),
      advantages: t('gastricSleeve.advantages', { returnObjects: true }) as string[],
      disadvantages: t('gastricSleeve.disadvantages', { returnObjects: true }) as string[],
      ifsoImage: "https://www.ifso.com/images/sleeve-gastrectomy-pop-up.png"
    },
    {
      title: t('gastricBypass.title'),
      desc: t('gastricBypass.desc'),
      advantages: t('gastricBypass.advantages', { returnObjects: true }) as string[],
      disadvantages: t('gastricBypass.disadvantages', { returnObjects: true }) as string[],
      ifsoImage: "https://www.ifso.com/images/oagb-mini-gastric-bypass-img.jpg"
    },
    {
      title: t('gastricBalloon.title'),
      desc: t('gastricBalloon.desc'),
      advantages: t('gastricBalloon.advantages', { returnObjects: true }) as string[],
      disadvantages: t('gastricBalloon.disadvantages', { returnObjects: true }) as string[],
      ifsoImage: "/gastric-balloon.jpeg"
    },
    {
      title: t('gastricBand.title'),
      desc: t('gastricBand.desc'),
      advantages: t('gastricBand.advantages', { returnObjects: true }) as string[],
      disadvantages: t('gastricBand.disadvantages', { returnObjects: true }) as string[],
      ifsoImage: "https://www.ifso.com/images/how-lagb-works-img.jpg"
    },
    {
      title: t('duodenalSwitch.title'),
      desc: t('duodenalSwitch.desc'),
      advantages: t('duodenalSwitch.advantages', { returnObjects: true }) as string[],
      disadvantages: t('duodenalSwitch.disadvantages', { returnObjects: true }) as string[],
      ifsoImage: "https://www.ifso.com/images/duodenal-switch-pop-up.png"
    },
    {
      title: "Endoscopic Sleeve Gastroplasty (ESG)",
      desc: "ESG is a minimally invasive, non-surgical weight loss procedure that reduces the size of your stomach by up to 70-80% using an endoscopic suturing device inserted through the mouth. No incisions are required, making it ideal for patients with BMI 30-40 who prefer a non-surgical approach.",
      advantages: [
        "Non-surgical — no incisions or scars",
        "Shorter recovery time (return to normal activities in 1-3 days)",
        "Lower complication risk compared to surgery",
        "Reversible procedure",
        "15-20% total body weight loss expected",
        "Same-day or next-day discharge",
        "Performed under general anesthesia (~90 minutes)"
      ],
      disadvantages: [
        "Less weight loss than surgical options like gastric sleeve",
        "May require repeat procedures for optimal results",
        "Not suitable for BMI over 40",
        "Relatively newer procedure with less long-term data"
      ],
      ifsoImage: "/esg-procedure.webp"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:bg-primary focus:text-white focus:px-4 focus:py-2 focus:rounded">
        Skip to main content
      </a>
      <SEO
        title={seoTitle}
        description={seoDescription}
        keywords="weight loss surgery turkey, bariatric surgery istanbul, gastric sleeve turkey cost, gastric bypass turkey price, gastric balloon turkey, ESG turkey, endoscopic sleeve gastroplasty, duodenal switch turkey, sleeve gastrectomy turkey, bariatric surgery cost turkey 2026, best bariatric surgeon turkey, dr murat ustun, JCI hospital istanbul, all inclusive weight loss surgery, gastric sleeve package turkey, gastric bypass package, weight loss surgery abroad, medical tourism turkey, obesity surgery turkey, metabolic surgery istanbul, cheap gastric sleeve, affordable bariatric surgery, gastric sleeve uk patients, weight loss surgery from uk"
        url="/treatments"
      />
      <JsonLd data={structuredData.createBreadcrumb([
        { name: "Home", url: "/" },
        { name: "Treatments", url: "/treatments" }
      ])} />
      <JsonLd data={medicalProceduresSchema} />
      <JsonLd data={structuredData.createFAQ(treatmentsFAQs)} />
      <Navbar />
      
      <main id="main-content" role="main">
      <section className="relative text-white pt-40 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <img src="/treatments-hero.webp" alt="Active healthy lifestyle after bariatric surgery" className="w-full h-full object-cover" />
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
                      <a href={`https://wa.me/905324131143?text=${encodeURIComponent(`Hi, I'd like to consult about ${treatment.title}`)}`} target="_blank" rel="noopener noreferrer">
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
                          alt={`IFSO Atlas illustration of ${treatment.title}`}
                          className="w-full max-h-[450px] object-contain rounded-lg shadow-md mb-4"
                          loading="lazy"
                          width="400"
                          height="400"
                          data-testid={`img-ifso-${treatment.title.toLowerCase().replace(/\s+/g, '-')}`}
                        />
                        <p className="text-xs text-slate-500 mt-4 italic">
                          © Dr Levent Efe, courtesy of IFSO
                        </p>
                      </div>
                    ) : (
                      <div className="text-center">
                        <div className="w-32 h-32 bg-white rounded-full mx-auto mb-6 flex items-center justify-center shadow-sm">
                          <span className="text-4xl">🩺</span>
                        </div>
                        <p className="text-slate-400 font-medium">Medical Illustration of {treatment.title}</p>
                      </div>
                    )}
                  </div>
                </div>

                {i === 2 && (
                  <div className="mt-16 bg-slate-50 rounded-3xl p-8 md:p-12">
                    <div className="text-center mb-12">
                      <h3 className="text-3xl font-bold text-slate-900 mb-4">Gastric Balloon Packages</h3>
                      <p className="text-slate-600">Choose the right gastric balloon package for your needs</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
                      {balloonPackages.map((pkg, idx) => {
                        const colorStyles = {
                          blue: { border: 'border-blue-500', bg: 'bg-blue-50', price: 'text-blue-600', check: 'bg-blue-100', checkIcon: 'text-blue-600', btn: 'bg-blue-600 hover:bg-blue-700', badge: 'bg-blue-600' },
                          emerald: { border: 'border-emerald-500', bg: 'bg-emerald-50', price: 'text-emerald-600', check: 'bg-emerald-100', checkIcon: 'text-emerald-600', btn: 'bg-emerald-600 hover:bg-emerald-700', badge: 'bg-emerald-600' },
                        }[pkg.color] || { border: 'border-blue-500', bg: 'bg-blue-50', price: 'text-blue-600', check: 'bg-blue-100', checkIcon: 'text-blue-600', btn: 'bg-blue-600 hover:bg-blue-700', badge: 'bg-blue-600' };
                        return (
                          <Card key={idx} className={`relative overflow-hidden border-2 transition-all duration-300 hover:shadow-xl ${pkg.recommended ? `${colorStyles.border} shadow-lg scale-105 z-10` : `${colorStyles.border} shadow-sm`}`}>
                            {pkg.recommended && (
                              <div className={`absolute top-0 right-0 ${colorStyles.badge} text-white text-xs font-bold px-3 py-1 rounded-bl-lg`}>
                                {t('common.popular')}
                              </div>
                            )}
                            <CardHeader className={`text-center pb-2 ${colorStyles.bg}`}>
                              <CardTitle className="text-xl font-bold text-slate-900">{pkg.name}</CardTitle>
                            </CardHeader>
                            <CardContent className="text-center space-y-6 pt-6">
                              <div className={`text-4xl font-extrabold ${colorStyles.price}`}>{pkg.price}</div>
                              <ul className="space-y-4 text-left mx-auto max-w-[240px]">
                                {pkg.features.map((feature, fIdx) => (
                                  <li key={fIdx} className="flex items-center gap-3 text-slate-700">
                                    <div className={`w-5 h-5 rounded-full ${colorStyles.check} flex items-center justify-center shrink-0`}>
                                      <Check className={`w-3 h-3 ${colorStyles.checkIcon}`} />
                                    </div>
                                    {feature}
                                  </li>
                                ))}
                              </ul>
                            </CardContent>
                            <CardFooter className="pt-4 pb-8">
                              <a href={`https://wa.me/905324131143?text=${encodeURIComponent(`Hi, I'm interested in the ${pkg.name} package`)}`} target="_blank" rel="noopener noreferrer" className="w-full">
                                <Button className={`w-full ${colorStyles.btn} text-white`}>
                                  {t('common.selectPackage')}
                                </Button>
                              </a>
                            </CardFooter>
                          </Card>
                        );
                      })}
                    </div>
                  </div>
                )}

                {i === 1 && (
                  <div className="mt-16 bg-slate-50 rounded-3xl p-8 md:p-12">
                    <div className="text-center mb-12">
                      <h3 className="text-3xl font-bold text-slate-900 mb-4">Gastric Bypass Packages</h3>
                      <p className="text-slate-600">Choose the right gastric bypass package for your needs</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                      {bypassPackages.map((pkg, idx) => {
                        const colorStyles = {
                          blue: { border: 'border-blue-500', bg: 'bg-blue-50', price: 'text-blue-600', check: 'bg-blue-100', checkIcon: 'text-blue-600', btn: 'bg-blue-600 hover:bg-blue-700', badge: 'bg-blue-600' },
                          emerald: { border: 'border-emerald-500', bg: 'bg-emerald-50', price: 'text-emerald-600', check: 'bg-emerald-100', checkIcon: 'text-emerald-600', btn: 'bg-emerald-600 hover:bg-emerald-700', badge: 'bg-emerald-600' },
                          amber: { border: 'border-amber-500', bg: 'bg-amber-50', price: 'text-amber-600', check: 'bg-amber-100', checkIcon: 'text-amber-600', btn: 'bg-amber-600 hover:bg-amber-700', badge: 'bg-amber-600' },
                        }[pkg.color] || { border: 'border-blue-500', bg: 'bg-blue-50', price: 'text-blue-600', check: 'bg-blue-100', checkIcon: 'text-blue-600', btn: 'bg-blue-600 hover:bg-blue-700', badge: 'bg-blue-600' };
                        return (
                          <Card key={idx} className={`relative overflow-hidden border-2 transition-all duration-300 hover:shadow-xl ${pkg.recommended ? `${colorStyles.border} shadow-lg scale-105 z-10` : `${colorStyles.border} shadow-sm`}`}>
                            {pkg.recommended && (
                              <div className={`absolute top-0 right-0 ${colorStyles.badge} text-white text-xs font-bold px-3 py-1 rounded-bl-lg`}>
                                {t('common.popular')}
                              </div>
                            )}
                            <CardHeader className={`text-center pb-2 ${colorStyles.bg}`}>
                              <CardTitle className="text-xl font-bold text-slate-900">{pkg.name}</CardTitle>
                            </CardHeader>
                            <CardContent className="text-center space-y-6 pt-6">
                              <div className={`text-4xl font-extrabold ${colorStyles.price}`}>{pkg.price}</div>
                              <ul className="space-y-4 text-left mx-auto max-w-[240px]">
                                {pkg.features.map((feature, fIdx) => (
                                  <li key={fIdx} className="flex items-center gap-3 text-slate-700">
                                    <div className={`w-5 h-5 rounded-full ${colorStyles.check} flex items-center justify-center shrink-0`}>
                                      <Check className={`w-3 h-3 ${colorStyles.checkIcon}`} />
                                    </div>
                                    {feature}
                                  </li>
                                ))}
                              </ul>
                            </CardContent>
                            <CardFooter className="pt-4 pb-8">
                              <a href={`https://wa.me/905324131143?text=${encodeURIComponent(`Hi, I'm interested in the ${pkg.name} package`)}`} target="_blank" rel="noopener noreferrer" className="w-full">
                                <Button className={`w-full ${colorStyles.btn} text-white`}>
                                  {t('common.selectPackage')}
                                </Button>
                              </a>
                            </CardFooter>
                          </Card>
                        );
                      })}
                    </div>
                  </div>
                )}

                {i === 5 && (
                  <div className="mt-16 bg-slate-50 rounded-3xl p-8 md:p-12">
                    <div className="text-center mb-12">
                      <h3 className="text-3xl font-bold text-slate-900 mb-4">ESG Packages</h3>
                      <p className="text-slate-600">Choose the right ESG package for your needs</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
                      {esgPackages.map((pkg, idx) => {
                        const colorStyles = {
                          emerald: { border: 'border-emerald-500', bg: 'bg-emerald-50', price: 'text-emerald-600', check: 'bg-emerald-100', checkIcon: 'text-emerald-600', btn: 'bg-emerald-600 hover:bg-emerald-700', badge: 'bg-emerald-600' },
                          amber: { border: 'border-amber-500', bg: 'bg-amber-50', price: 'text-amber-600', check: 'bg-amber-100', checkIcon: 'text-amber-600', btn: 'bg-amber-600 hover:bg-amber-700', badge: 'bg-amber-600' },
                        }[pkg.color] || { border: 'border-emerald-500', bg: 'bg-emerald-50', price: 'text-emerald-600', check: 'bg-emerald-100', checkIcon: 'text-emerald-600', btn: 'bg-emerald-600 hover:bg-emerald-700', badge: 'bg-emerald-600' };
                        return (
                          <Card key={idx} className={`relative overflow-hidden border-2 transition-all duration-300 hover:shadow-xl ${pkg.recommended ? `${colorStyles.border} shadow-lg scale-105 z-10` : `${colorStyles.border} shadow-sm`}`}>
                            {pkg.recommended && (
                              <div className={`absolute top-0 right-0 ${colorStyles.badge} text-white text-xs font-bold px-3 py-1 rounded-bl-lg`}>
                                {t('common.popular')}
                              </div>
                            )}
                            <CardHeader className={`text-center pb-2 ${colorStyles.bg}`}>
                              <CardTitle className="text-xl font-bold text-slate-900">{pkg.name}</CardTitle>
                            </CardHeader>
                            <CardContent className="text-center space-y-6 pt-6">
                              <div className={`text-4xl font-extrabold ${colorStyles.price}`}>{pkg.price}</div>
                              <ul className="space-y-4 text-left mx-auto max-w-[240px]">
                                {pkg.features.map((feature, fIdx) => (
                                  <li key={fIdx} className="flex items-center gap-3 text-slate-700">
                                    <div className={`w-5 h-5 rounded-full ${colorStyles.check} flex items-center justify-center shrink-0`}>
                                      <Check className={`w-3 h-3 ${colorStyles.checkIcon}`} />
                                    </div>
                                    {feature}
                                  </li>
                                ))}
                              </ul>
                            </CardContent>
                            <CardFooter className="pt-4 pb-8">
                              <a href={`https://wa.me/905324131143?text=${encodeURIComponent(`Hi, I'm interested in the ${pkg.name} package`)}`} target="_blank" rel="noopener noreferrer" className="w-full">
                                <Button className={`w-full ${colorStyles.btn} text-white`}>
                                  {t('common.selectPackage')}
                                </Button>
                              </a>
                            </CardFooter>
                          </Card>
                        );
                      })}
                    </div>
                  </div>
                )}

                {i === 4 && (
                  <div className="mt-16 bg-slate-50 rounded-3xl p-8 md:p-12">
                    <div className="text-center mb-12">
                      <h3 className="text-3xl font-bold text-slate-900 mb-4">Duodenal Switch Packages</h3>
                      <p className="text-slate-600">Choose the right duodenal switch package for your needs</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
                      {duodenalSwitchPackages.map((pkg, idx) => {
                        const colorStyles = {
                          emerald: { border: 'border-emerald-500', bg: 'bg-emerald-50', price: 'text-emerald-600', check: 'bg-emerald-100', checkIcon: 'text-emerald-600', btn: 'bg-emerald-600 hover:bg-emerald-700', badge: 'bg-emerald-600' },
                          amber: { border: 'border-amber-500', bg: 'bg-amber-50', price: 'text-amber-600', check: 'bg-amber-100', checkIcon: 'text-amber-600', btn: 'bg-amber-600 hover:bg-amber-700', badge: 'bg-amber-600' },
                        }[pkg.color] || { border: 'border-emerald-500', bg: 'bg-emerald-50', price: 'text-emerald-600', check: 'bg-emerald-100', checkIcon: 'text-emerald-600', btn: 'bg-emerald-600 hover:bg-emerald-700', badge: 'bg-emerald-600' };
                        return (
                          <Card key={idx} className={`relative overflow-hidden border-2 transition-all duration-300 hover:shadow-xl ${pkg.recommended ? `${colorStyles.border} shadow-lg scale-105 z-10` : `${colorStyles.border} shadow-sm`}`}>
                            {pkg.recommended && (
                              <div className={`absolute top-0 right-0 ${colorStyles.badge} text-white text-xs font-bold px-3 py-1 rounded-bl-lg`}>
                                {t('common.popular')}
                              </div>
                            )}
                            <CardHeader className={`text-center pb-2 ${colorStyles.bg}`}>
                              <CardTitle className="text-xl font-bold text-slate-900">{pkg.name}</CardTitle>
                            </CardHeader>
                            <CardContent className="text-center space-y-6 pt-6">
                              <div className={`text-4xl font-extrabold ${colorStyles.price}`}>{pkg.price}</div>
                              <ul className="space-y-4 text-left mx-auto max-w-[240px]">
                                {pkg.features.map((feature, fIdx) => (
                                  <li key={fIdx} className="flex items-center gap-3 text-slate-700">
                                    <div className={`w-5 h-5 rounded-full ${colorStyles.check} flex items-center justify-center shrink-0`}>
                                      <Check className={`w-3 h-3 ${colorStyles.checkIcon}`} />
                                    </div>
                                    {feature}
                                  </li>
                                ))}
                              </ul>
                            </CardContent>
                            <CardFooter className="pt-4 pb-8">
                              <a href={`https://wa.me/905324131143?text=${encodeURIComponent(`Hi, I'm interested in the ${pkg.name} package`)}`} target="_blank" rel="noopener noreferrer" className="w-full">
                                <Button className={`w-full ${colorStyles.btn} text-white`}>
                                  {t('common.selectPackage')}
                                </Button>
                              </a>
                            </CardFooter>
                          </Card>
                        );
                      })}
                    </div>
                  </div>
                )}

                {i === 0 && (
                  <div className="mt-16 bg-slate-50 rounded-3xl p-8 md:p-12">
                    <div className="text-center mb-12">
                      <h3 className="text-3xl font-bold text-slate-900 mb-4">{t('main.sleevePackageTitle')}</h3>
                      <p className="text-slate-600">{t('main.sleevePackageDesc')}</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                      {packages.map((pkg, idx) => {
                        const colorStyles = {
                          blue: { border: 'border-blue-500', bg: 'bg-blue-50', price: 'text-blue-600', check: 'bg-blue-100', checkIcon: 'text-blue-600', btn: 'bg-blue-600 hover:bg-blue-700', badge: 'bg-blue-600' },
                          emerald: { border: 'border-emerald-500', bg: 'bg-emerald-50', price: 'text-emerald-600', check: 'bg-emerald-100', checkIcon: 'text-emerald-600', btn: 'bg-emerald-600 hover:bg-emerald-700', badge: 'bg-emerald-600' },
                          amber: { border: 'border-amber-500', bg: 'bg-amber-50', price: 'text-amber-600', check: 'bg-amber-100', checkIcon: 'text-amber-600', btn: 'bg-amber-600 hover:bg-amber-700', badge: 'bg-amber-600' },
                        }[pkg.color] || { border: 'border-blue-500', bg: 'bg-blue-50', price: 'text-blue-600', check: 'bg-blue-100', checkIcon: 'text-blue-600', btn: 'bg-blue-600 hover:bg-blue-700', badge: 'bg-blue-600' };
                        return (
                          <Card key={idx} className={`relative overflow-hidden border-2 transition-all duration-300 hover:shadow-xl ${pkg.recommended ? `${colorStyles.border} shadow-lg scale-105 z-10` : `${colorStyles.border} shadow-sm`}`}>
                            {pkg.recommended && (
                              <div className={`absolute top-0 right-0 ${colorStyles.badge} text-white text-xs font-bold px-3 py-1 rounded-bl-lg`}>
                                {t('common.popular')}
                              </div>
                            )}
                            <CardHeader className={`text-center pb-2 ${colorStyles.bg}`}>
                              <CardTitle className="text-xl font-bold text-slate-900">{pkg.name}</CardTitle>
                            </CardHeader>
                            <CardContent className="text-center space-y-6 pt-6">
                              <div className={`text-4xl font-extrabold ${colorStyles.price}`}>{pkg.price}</div>
                              <ul className="space-y-4 text-left mx-auto max-w-[240px]">
                                {pkg.features.map((feature, fIdx) => (
                                  <li key={fIdx} className="flex items-center gap-3 text-slate-700">
                                    <div className={`w-5 h-5 rounded-full ${colorStyles.check} flex items-center justify-center shrink-0`}>
                                      <Check className={`w-3 h-3 ${colorStyles.checkIcon}`} />
                                    </div>
                                    {feature}
                                  </li>
                                ))}
                              </ul>
                            </CardContent>
                            <CardFooter className="pt-4 pb-8">
                              <a href={`https://wa.me/905324131143?text=${encodeURIComponent(`Hi, I'm interested in the ${pkg.name} package`)}`} target="_blank" rel="noopener noreferrer" className="w-full">
                                <Button className={`w-full ${colorStyles.btn} text-white`}>
                                  {t('common.selectPackage')}
                                </Button>
                              </a>
                            </CardFooter>
                          </Card>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-slate-900">Post-Bariatric Plastic Surgery</h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                After significant weight loss following bariatric surgery, many patients are left with excess, sagging skin. Post-bariatric body contouring surgery removes this excess skin and reshapes the body to help you fully enjoy your transformation.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed">
                Our procedures include abdominoplasty (tummy tuck), arm lift, thigh lift, body lift, breast lift, and face/neck lift. These surgeries can dramatically improve body contour and eliminate skin irritation.
              </p>
              <div className="pt-4">
                <Button 
                  className="bg-primary hover:bg-primary/90"
                  onClick={() => window.location.href = '/post-bariatric-surgery'}
                >
                  Learn More About Body Contouring <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </div>
            </div>
            <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-lg">
              <img 
                src="/post-bariatric-surgery.webp" 
                alt="Post-bariatric body contouring procedures"
                className="w-full rounded-lg"
                loading="lazy"
              />
              <p className="text-sm text-slate-500 mt-4 text-center">
                Body contouring options after weight loss surgery
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white" id="faqs">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Frequently Asked Questions About Weight Loss Surgery in Turkey</h2>
            <p className="text-lg text-slate-600">Everything you need to know about bariatric surgery at Istanbul Bariatric Center</p>
          </div>
          <div className="space-y-6">
            {treatmentsFAQs.map((faq, idx) => (
              <details key={idx} className="group bg-slate-50 rounded-xl border border-slate-200 overflow-hidden">
                <summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-slate-100 transition-colors">
                  <h3 className="text-lg font-semibold text-slate-900 pr-4">{faq.question}</h3>
                  <span className="text-primary text-xl font-bold shrink-0 group-open:rotate-45 transition-transform">+</span>
                </summary>
                <div className="px-6 pb-6">
                  <p className="text-slate-600 leading-relaxed">{faq.answer}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-slate-900 text-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-4">Explore Our Treatment Pages</h2>
            <p className="text-slate-300">Learn more about each procedure in detail</p>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            <a href="/sleeve-gastrectomy" className="block bg-white/10 hover:bg-white/20 rounded-xl p-5 transition-colors text-center">
              <h3 className="font-semibold text-white mb-1">Gastric Sleeve Surgery</h3>
              <p className="text-sm text-slate-300">From £2,950</p>
            </a>
            <a href="/mini-gastric-bypass" className="block bg-white/10 hover:bg-white/20 rounded-xl p-5 transition-colors text-center">
              <h3 className="font-semibold text-white mb-1">Mini Gastric Bypass</h3>
              <p className="text-sm text-slate-300">Specialist procedure</p>
            </a>
            <a href="/gastric-balloon" className="block bg-white/10 hover:bg-white/20 rounded-xl p-5 transition-colors text-center">
              <h3 className="font-semibold text-white mb-1">Gastric Balloon</h3>
              <p className="text-sm text-slate-300">From £1,650</p>
            </a>
            <a href="/esg" className="block bg-white/10 hover:bg-white/20 rounded-xl p-5 transition-colors text-center">
              <h3 className="font-semibold text-white mb-1">ESG Procedure</h3>
              <p className="text-sm text-slate-300">From £4,950</p>
            </a>
            <a href="/duodenal-switch" className="block bg-white/10 hover:bg-white/20 rounded-xl p-5 transition-colors text-center">
              <h3 className="font-semibold text-white mb-1">Duodenal Switch</h3>
              <p className="text-sm text-slate-300">From £4,400</p>
            </a>
            <a href="/transit-bipartition" className="block bg-white/10 hover:bg-white/20 rounded-xl p-5 transition-colors text-center">
              <h3 className="font-semibold text-white mb-1">Transit Bipartition</h3>
              <p className="text-sm text-slate-300">Advanced procedure</p>
            </a>
            <a href="/post-bariatric-surgery" className="block bg-white/10 hover:bg-white/20 rounded-xl p-5 transition-colors text-center">
              <h3 className="font-semibold text-white mb-1">Post-Bariatric Surgery</h3>
              <p className="text-sm text-slate-300">Body contouring</p>
            </a>
            <a href="/health-profile" className="block bg-white/10 hover:bg-white/20 rounded-xl p-5 transition-colors text-center">
              <h3 className="font-semibold text-white mb-1">Am I Eligible?</h3>
              <p className="text-sm text-slate-300">Free health assessment</p>
            </a>
            <a href="/results" className="block bg-white/10 hover:bg-white/20 rounded-xl p-5 transition-colors text-center">
              <h3 className="font-semibold text-white mb-1">Patient Results</h3>
              <p className="text-sm text-slate-300">Success stories</p>
            </a>
          </div>
        </div>
      </section>

      </main>

      <Footer />
    </div>
  );
}

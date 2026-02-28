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

  const seoTitle = "Weight Loss Surgery Options & Treatments";
  const seoDescription = "Explore our bariatric surgery options: Gastric Sleeve, Gastric Bypass, Gastric Balloon, Duodenal Switch, and more. Compare procedures and find the right weight loss solution.";

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
        keywords="bariatric surgery options, gastric sleeve, gastric bypass, gastric balloon, weight loss procedures"
        url="/treatments"
      />
      <JsonLd data={structuredData.createBreadcrumb([
        { name: "Home", url: "/" },
        { name: "Treatments", url: "/treatments" }
      ])} />
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

      </main>

      <Footer />
    </div>
  );
}

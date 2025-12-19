import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, Check } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { useTranslation } from "react-i18next";
import { SEO } from "@/components/seo";

export default function Treatments() {
  const { t } = useTranslation('treatments');

  const seoTitle = "Weight Loss Surgery Options & Treatments";
  const seoDescription = "Explore our bariatric surgery options: Gastric Sleeve, Gastric Bypass, Gastric Balloon, Duodenal Switch, and more. Compare procedures and find the right weight loss solution.";

  const packages = [
    {
      name: t('gastricSleeve.packages.basic.name'),
      price: t('gastricSleeve.packages.basic.price'),
      features: [
        t('common.bestDoctors'),
        t('common.jciHospital'),
        t('common.airportPickup'),
        `${t('gastricSleeve.packages.basic.days')} ${t('common.daysAccommodation')}`
      ]
    },
    {
      name: t('gastricSleeve.packages.relaxation.name'),
      price: t('gastricSleeve.packages.relaxation.price'),
      features: [
        t('common.bestDoctors'),
        t('common.jciHospital'),
        t('common.airportPickup'),
        `${t('gastricSleeve.packages.relaxation.days')} ${t('common.daysAccommodation')}`
      ],
      recommended: true
    },
    {
      name: t('gastricSleeve.packages.luxury.name'),
      price: t('gastricSleeve.packages.luxury.price'),
      features: [
        t('common.bestDoctors'),
        t('common.jciHospital'),
        t('common.airportPickup'),
        `${t('gastricSleeve.packages.luxury.days')} ${t('common.daysAccommodation')}`
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
      <SEO
        title={seoTitle}
        description={seoDescription}
        keywords="bariatric surgery options, gastric sleeve, gastric bypass, gastric balloon, weight loss procedures"
        url="/treatments"
      />
      <Navbar />
      
      <section className="bg-slate-900 text-white pt-40 pb-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">{t('main.title')}</h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            {t('main.subtitle')}
          </p>
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
                      <Button className="bg-primary hover:bg-primary/90">
                        {t('common.consultFor')} {treatment.title} <ArrowRight className="ml-2 w-4 h-4" />
                      </Button>
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
                      {packages.map((pkg, idx) => (
                        <Card key={idx} className={`relative overflow-hidden border-2 transition-all duration-300 hover:shadow-xl ${pkg.recommended ? 'border-primary shadow-lg scale-105 z-10' : 'border-white shadow-sm'}`}>
                          {pkg.recommended && (
                            <div className="absolute top-0 right-0 bg-primary text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
                              {t('common.popular')}
                            </div>
                          )}
                          <CardHeader className="text-center pb-2">
                            <CardTitle className="text-xl font-bold text-slate-900">{pkg.name}</CardTitle>
                          </CardHeader>
                          <CardContent className="text-center space-y-6">
                            <div className="text-4xl font-extrabold text-primary">{pkg.price}</div>
                            <ul className="space-y-4 text-left mx-auto max-w-[200px]">
                              {pkg.features.map((feature, fIdx) => (
                                <li key={fIdx} className="flex items-center gap-3 text-slate-700">
                                  <div className="w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center shrink-0">
                                    <Check className="w-3 h-3 text-primary" />
                                  </div>
                                  {feature}
                                </li>
                              ))}
                            </ul>
                          </CardContent>
                          <CardFooter className="pt-4 pb-8">
                            <Button className={`w-full ${pkg.recommended ? 'bg-primary hover:bg-primary/90' : 'bg-slate-900 hover:bg-slate-800'}`}>
                              {t('common.selectPackage')}
                            </Button>
                          </CardFooter>
                        </Card>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

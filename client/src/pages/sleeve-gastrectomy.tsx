import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Check, ArrowRight } from "lucide-react";
import { useTranslation } from "react-i18next";
import { SEO, JsonLd, structuredData } from "@/components/seo";
import { Link } from "wouter";
import { SummarizeWithAI } from "@/components/summarize-with-ai";

const faqs = [
  {
    question: "What is Gastric Sleeve Surgery?",
    answer: "Gastric Sleeve surgery is a type of obesity surgery that removes 75 to 80% of the stomach and it is now the most preferred surgery in the United States of America."
  },
  {
    question: "How is Gastric Sleeve Surgery done?",
    answer: "The idea of gastric sleeve surgery is to reduce the volume of the stomach. This is done by making small incisions in the abdominal wall to reach the stomach, once the medical team reach it they will insert a bougle tube in the stomach to work as the new stomach and then cut the rest of stomach's volume."
  },
  {
    question: "Will the weight I lost last after the surgery?",
    answer: "Despite that Gastric Sleeve surgery is a new type compared to other types, it is actually one of the most successful types and for most of the patients who have done this procedure, the weight loss lasted for more than 5 years. Of course, it is related to the commitment of the patient."
  },
  {
    question: "What is the recovery time after the surgery?",
    answer: "Recovery time depends on your condition but most patients stay at the hospital for one-two days and then be discharged from the hospital."
  },
  {
    question: "Can I do some heavy activities or go to work after recovery time?",
    answer: "Going back home does not mean that you are capable of doing hard activities or go to work. You should take some rest for about five to seven days and once your body is adjusted to the Bougle tube inside of it then you can do different activities with no problems."
  },
  {
    question: "Is there any diet that I have to do after the surgery?",
    answer: "The gastric sleeve surgery is not the cure for obesity but it helps in curing it. Thus, you should follow a diet program that is suggested by your doctor or medical team in order to come up with satisfying results."
  },
  {
    question: "Do I need to take any Vitamins after the surgery?",
    answer: "The researches have shown that nutrient deficiency is one of the side effects that happen to many patients. Thus, it is important to take Vitamins and mineral supplements but only the ones that your doctor says."
  },
  {
    question: "Is it true that hair loss is one of the side effects?",
    answer: "If your weight loss is rapid then yes you might experience some hair loss but it will grow again so it is not something to be afraid of. Just avoid hair treatments and always eat food that contains a large amount of protein."
  },
  {
    question: "What are the side effects of Gastric Sleeve surgery?",
    answer: "There are several side effects such as: Diarrhea (which is common during liquid diet stages), hair loss (if weight loss happens fast), back pain, vomiting (for the first one week) and nausea. These side effects stop appearing after your body adjusts to the new situation."
  },
  {
    question: "Can I drink alcohol or smoke after the surgery?",
    answer: "Studies suggest that you do not drink alcohol or smoke because it helps in damaging your stomach and can cause bleeding. Spicy food is also not a very good advice because in the long term it can cause some problems in your stomach."
  },
  {
    question: "Why Turkey to be chosen for gastric sleeve?",
    answer: "Turkey is a very popular destination for gastric sleeve surgeries for two main reasons: 1. In Turkey, sleeve gastrectomy prices are very affordable. 2. Despite its reasonable prices, the health quality regulations and accreditation standards are fairly high in Turkey."
  }
];

function linkifyDrName(text: string) {
  if (!text.includes('Dr Murat Ustun')) return text;
  const parts = text.split(/(Dr Murat Ustun)/);
  return <>{parts.map((part, i) =>
    part === 'Dr Murat Ustun'
      ? <a key={i} href="https://drmuratustun.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-medium">{part}</a>
      : part
  )}</>;
}

export default function SleeveGastrectomy() {
  const { t } = useTranslation('treatments');
  
  const advantages = t('gastricSleeve.advantages', { returnObjects: true }) as string[];
  const risks = t('gastricSleeve.risks', { returnObjects: true }) as string[];
  const packages = t('gastricSleeve.packages', { returnObjects: true }) as { basic: { name: string; price: string; days: string }; relaxation: { name: string; price: string; days: string }; luxury: { name: string; price: string; days: string } };
  
  const packageList = [
    { 
      name: "Sleeve Gastrectomy Basic",
      price: "£2,950",
      color: "blue",
      recommended: false,
      features: [
        "Experienced surgical team",
        "JCI-accredited hospital (2 days)",
        "All pre-operative tests and consultations",
        "VIP airport transfer",
        "Dietitian support"
      ]
    },
    { 
      name: "Sleeve Gastrectomy Relaxation",
      price: "£3,950",
      color: "emerald",
      recommended: true,
      features: [
        "Surgery with Dr Murat Ustun",
        "JCI-accredited hospital (3 days)",
        "All pre-operative tests and consultations",
        "VIP airport transfer",
        "UK-registered dietitian support"
      ]
    },
    { 
      name: "Sleeve Gastrectomy Luxury",
      price: "£4,250",
      color: "amber",
      recommended: false,
      features: [
        "Surgery with Dr Murat Ustun",
        "JCI-accredited hospital (3 days)",
        "All pre-operative tests and consultations",
        "VIP airport transfer",
        "3 nights of Radisson hotel accommodation",
        "UK-registered dietitian support",
        "1 month of supplements",
        "Local UK care support in 8 locations"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="Gastric Sleeve Surgery in Istanbul — All-Inclusive from £2,950"
        description="Gastric Sleeve (VSG) surgery at JCI-accredited Liv Hospital, Istanbul. 75–80% stomach reduction with rapid weight loss. All-inclusive packages from £2,950 with Dr Murat Ustun, VIP transfers & dietitian support."
        keywords="gastric sleeve turkey, sleeve gastrectomy istanbul, vsg surgery turkey, weight loss surgery cost"
        url="/sleeve-gastrectomy"
      />
      <JsonLd data={structuredData.createFAQ(faqs)} />
      <Navbar />
      
      {/* Hero Header */}
      <section className="bg-slate-900 text-white pt-40 pb-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">{t('gastricSleeve.heroTitle')}</h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            {t('gastricSleeve.heroSubtitle')}
          </p>
          <SummarizeWithAI variant="dark" />
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-slate-900">{t('gastricSleeve.overviewTitle')}</h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                {t('gastricSleeve.overviewP1')}
              </p>
              <p className="text-lg text-slate-600 leading-relaxed">
                {t('gastricSleeve.overviewP2')}
              </p>
              <p className="text-lg text-slate-600 leading-relaxed">
                {t('gastricSleeve.overviewP3')}
              </p>
              <Button 
                className="bg-primary hover:bg-primary/90 h-12 px-8"
                onClick={() => window.open('https://wa.me/447491068686', '_blank')}
              >
                {t('common.bookConsultation')} <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </div>
            <div className="flex justify-center">
              <img 
                src="/gastric-sleeve.webp" 
                alt="Gastric Sleeve Surgery Illustration" 
                className="max-w-md w-full"
                width="400"
                height="400"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Advantages */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">{t('common.advantages')}</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {Array.isArray(advantages) && advantages.map((adv, i) => (
              <div key={i} className="flex items-start gap-3 p-4 bg-green-50 rounded-lg border border-green-100">
                <div className="w-6 h-6 rounded-full bg-green-500 text-white flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-4 h-4" />
                </div>
                <span className="text-slate-700">{adv}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Risks */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">{t('common.risks')}</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {Array.isArray(risks) && risks.map((risk, i) => (
              <div key={i} className="flex items-start gap-3 p-4 bg-amber-50 rounded-lg border border-amber-100">
                <div className="w-6 h-6 rounded-full bg-amber-500 text-white flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold">!</div>
                <span className="text-slate-700">{risk}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Packages */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">{t('main.sleevePackageTitle')}</h2>
            <p className="text-slate-600 text-lg">{t('main.sleevePackageDesc')}</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {packageList.map((pkg, idx) => {
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
                      {pkg.features.map((feature: string, i: number) => (
                        <li key={i} className="flex items-center gap-3 text-slate-700">
                          <div className={`w-5 h-5 rounded-full ${colorStyles.check} flex items-center justify-center shrink-0`}>
                            <Check className={`w-3 h-3 ${colorStyles.checkIcon}`} />
                          </div>
                          {linkifyDrName(feature)}
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
      </section>

      {/* FAQs */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">{t('common.faqs')}</h2>
          
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="border rounded-lg px-6 bg-white shadow-sm">
                <AccordionTrigger className="text-left font-bold text-slate-900 hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-slate-600 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Related Treatments */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-slate-900 mb-8 text-center">Explore Other Weight Loss Options</h2>
          <div className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            <Link href="/mini-gastric-bypass">
              <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow text-center cursor-pointer">
                <h3 className="font-bold text-primary mb-2">Gastric Bypass</h3>
                <p className="text-sm text-slate-600">70-85% excess weight loss</p>
              </div>
            </Link>
            <Link href="/gastric-balloon">
              <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow text-center cursor-pointer">
                <h3 className="font-bold text-primary mb-2">Gastric Balloon</h3>
                <p className="text-sm text-slate-600">Non-surgical option</p>
              </div>
            </Link>
            <Link href="/esg">
              <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow text-center cursor-pointer">
                <h3 className="font-bold text-primary mb-2">Endoscopic Sleeve</h3>
                <p className="text-sm text-slate-600">Minimally invasive</p>
              </div>
            </Link>
            <Link href="/duodenal-switch">
              <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow text-center cursor-pointer">
                <h3 className="font-bold text-primary mb-2">Duodenal Switch</h3>
                <p className="text-sm text-slate-600">For BMI 50+</p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Start Your Weight Loss Journey?</h2>
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            Contact <a href="https://drmuratustun.com" target="_blank" rel="noopener noreferrer" className="text-white underline hover:text-white/80">Dr Murat Ustun's</a> team today for a free consultation and learn how gastric sleeve surgery can help you achieve your goals.
          </p>
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

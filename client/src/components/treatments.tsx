import { ArrowRight } from "lucide-react";
import { Link } from "wouter";
import { useTranslation } from "react-i18next";

const treatments = [
  {
    title: "Sleeve Gastrectomy",
    desc: "Laparoscopic sleeve gastrectomy is the most popular bariatric surgery worldwide.",
    link: "/sleeve-gastrectomy",
    image: "https://www.ifso.com/images/sleeve-gastrectomy-pop-up.png"
  },
  {
    title: "Mini Gastric Bypass",
    desc: "Discover your weight loss potential with mini-gastric bypass surgeries.",
    link: "/mini-gastric-bypass",
    image: "https://www.ifso.com/images/oagb-mini-gastric-bypass-img.jpg"
  },
  {
    title: "Intragastric Balloon",
    desc: "Gastric balloon procedure is a non-surgical method to lose weight.",
    link: "/gastric-balloon",
    image: "/gastric-balloon.jpeg"
  },
  {
    title: "Surgery for Diabetes",
    desc: "Metabolic surgeries are made for reversion of the diabetes diseases.",
    link: "/duodenal-switch",
    image: "https://www.ifso.com/images/duodenal-switch-pop-up.png"
  },
  {
    title: "Post-Bariatric Surgery",
    desc: "Aesthetic surgeries for body contouring after significant weight loss.",
    link: "/post-bariatric-surgery",
    image: "/post-bariatric-surgery.png"
  },
  {
    title: "Transit Bipartition",
    desc: "A very reliable alternative of revisional bariatric surgeries in some cases.",
    link: "/transit-bipartition",
    image: "/transit-bipartition.gif"
  },
  {
    title: "ESG (Endoscopic Sleeve Gastroplasty)",
    desc: "A non-surgical, incisionless weight loss procedure with quick recovery.",
    link: "/esg",
    image: "https://www.ifso.com/images/endoscopic-sleeve-gastroplasty-pop-up.png"
  }
];

export function Treatments() {
  const { t } = useTranslation('home');
  
  return (
    <section id="treatments" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-4xl font-heading font-bold text-slate-900">
            {t('treatments.title')}
          </h2>
          <p className="text-lg text-slate-600">
            {t('treatments.subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {treatments.map((item, i) => (
            <div key={i} className="group bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden relative">
              {item.image && (
                <div className="h-48 overflow-hidden bg-slate-50">
                  <img 
                    src={item.image} 
                    alt={`${item.title} - Bariatric surgery procedure illustration`}
                    className="w-full h-full object-contain p-4 group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                    width="300"
                    height="192"
                  />
                </div>
              )}
              {!item.image && (
                <div className="h-48 bg-gradient-to-br from-blue-50 to-slate-100 flex items-center justify-center">
                  <span className="text-6xl opacity-30">🩺</span>
                </div>
              )}
              
              <div className="p-6 relative z-10">
                <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                <p className="text-slate-500 mb-6 leading-relaxed">
                  {item.desc}
                </p>
                
                <Link href={item.link} className="inline-flex items-center text-primary font-semibold group-hover:translate-x-2 transition-transform">
                  Learn More <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

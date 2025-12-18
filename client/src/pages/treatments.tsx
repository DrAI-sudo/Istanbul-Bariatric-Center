import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const treatments = [
  {
    title: "Gastric Sleeve Surgery",
    desc: "Also known as sleeve gastrectomy, this procedure involves removing 70-80% of the stomach, leaving a tubular pouch. It restricts food intake and impacts gut hormones to reduce hunger.",
    advantages: [
      "Controls amount of food held in stomach",
      "Supports fast weight loss",
      "Shorter hospital stay than bypass",
      "Reduces hunger and appetite"
    ],
    disadvantages: [
      "Irreversible procedure",
      "Potential for vitamin deficiency"
    ]
  },
  {
    title: "Gastric Bypass Surgery",
    desc: "The stomach is divided into two parts, creating a smaller pouch. The small intestine is rearranged to connect to both. This limits food intake and calorie absorption.",
    advantages: [
      "Long term weight loss",
      "Controls consumed food amount",
      "Suppresses hunger via gut hormones"
    ],
    disadvantages: [
      "Complex surgery",
      "Requires longer hospital stay",
      "Risk of vitamin deficiency"
    ]
  },
  {
    title: "Intragastric Balloon",
    desc: "A non-invasive endoscopic procedure where a saline-filled balloon is placed in the stomach to create a feeling of fullness and reduce food intake.",
    advantages: [
      "Non-surgical / Non-invasive",
      "Very safe procedure",
      "No permanent changes to anatomy"
    ],
    disadvantages: [
      "Temporary solution (6 months)",
      "Less weight loss than surgery"
    ]
  },
  {
    title: "Adjustable Gastric Band",
    desc: "A band is placed around the upper part of the stomach to create a smaller pouch. The band's tightness can be adjusted by injecting saline.",
    advantages: [
      "Lowest level of complexity",
      "Short hospital stay (<24 hours)",
      "Reversible and adjustable",
      "No vitamin problems usually"
    ],
    disadvantages: [
      "Slower weight loss",
      "Foreign body in the body",
      "Mechanical problems possible"
    ]
  },
  {
    title: "Duodenal Switch",
    desc: "A complex procedure combining sleeve gastrectomy with intestinal bypass. It offers the most significant weight loss but carries higher risks.",
    advantages: [
      "Most rapid weight loss",
      "Lose ~70% of excess weight"
    ],
    disadvantages: [
      "Most complicated surgery",
      "High risk of vitamin deficiencies",
      "Requires strict follow-up"
    ]
  }
];

export default function Treatments() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Header */}
      <section className="bg-slate-900 text-white pt-40 pb-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Bariatric Treatments</h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            We offer a comprehensive range of weight loss procedures tailored to your specific needs and health conditions.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="space-y-24">
            {treatments.map((treatment, i) => (
              <div key={i} className="grid lg:grid-cols-2 gap-12 items-start scroll-mt-32" id={treatment.title.toLowerCase().replace(/\s+/g, '-')}>
                <div className="space-y-6">
                  <h2 className="text-3xl font-bold text-slate-900">{treatment.title}</h2>
                  <p className="text-lg text-slate-600 leading-relaxed">
                    {treatment.desc}
                  </p>
                  
                  <div className="space-y-8 mt-8">
                    <div>
                      <h4 className="text-lg font-bold text-emerald-600 mb-4 flex items-center gap-2">
                        <CheckCircle2 className="w-5 h-5" /> Advantages
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
                        Things to Consider
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
                      Consult for {treatment.title} <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </div>
                </div>
                
                <div className="bg-slate-50 rounded-2xl p-8 border border-slate-100 h-full min-h-[400px] flex items-center justify-center relative overflow-hidden group">
                  <div className="absolute inset-0 bg-blue-500/5 transition-colors group-hover:bg-blue-500/10" />
                  {/* Placeholder for medical illustration */}
                  <div className="text-center">
                    <div className="w-32 h-32 bg-white rounded-full mx-auto mb-6 flex items-center justify-center shadow-sm">
                      <span className="text-4xl">🩺</span>
                    </div>
                    <p className="text-slate-400 font-medium">Medical Illustration of {treatment.title}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

import stomachImage from "@assets/generated_images/medical_illustration_of_stomach_health.png";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const treatments = [
  {
    title: "Sleeve Gastrectomy",
    desc: "Laparoscopic sleeve gastrectomy is the most popular bariatric surgery worldwide.",
    link: "#"
  },
  {
    title: "Mini Gastric Bypass",
    desc: "Discover your weight loss potential with mini-gastric bypass surgeries.",
    link: "#"
  },
  {
    title: "Intragastric Balloon",
    desc: "Gastric balloon procedure is a non-surgical method to lose weight.",
    link: "#"
  },
  {
    title: "Surgery for Diabetes",
    desc: "Metabolic surgeries are made for reversion of the diabetes diseases.",
    link: "#"
  },
  {
    title: "Post-Bariatric Surgery",
    desc: "Aesthetic surgeries for body contouring after significant weight loss.",
    link: "#"
  },
  {
    title: "Transit Bipartition",
    desc: "A very reliable alternative of revisional bariatric surgeries in some cases.",
    link: "#"
  }
];

export function Treatments() {
  return (
    <section id="treatments" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-4xl font-heading font-bold text-slate-900">
            Our Medical <span className="text-primary">Treatments</span>
          </h2>
          <p className="text-lg text-slate-600">
            Discover our comprehensive range of bariatric surgery treatments performed by expert surgeons.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {treatments.map((item, i) => (
            <div key={i} className="group bg-white rounded-2xl border border-slate-100 p-8 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden relative">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-bl-full -mr-16 -mt-16 transition-transform group-hover:scale-150 duration-500 opacity-50" />
              
              <div className="relative z-10">
                <div className="w-16 h-16 bg-blue-50 rounded-xl mb-6 flex items-center justify-center group-hover:bg-primary transition-colors duration-300">
                   {/* Placeholder icon logic or generic icon */}
                   <img src={stomachImage} alt="Icon" className="w-10 h-10 object-contain opacity-80 group-hover:brightness-0 group-hover:invert transition-all" />
                </div>
                
                <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                <p className="text-slate-500 mb-6 leading-relaxed">
                  {item.desc}
                </p>
                
                <a href={item.link} className="inline-flex items-center text-primary font-semibold group-hover:translate-x-2 transition-transform">
                  Learn More <ArrowRight className="ml-2 w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

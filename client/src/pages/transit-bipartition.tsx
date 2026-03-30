import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { CheckCircle2, AlertCircle } from "lucide-react";
import { useTranslation } from "react-i18next";
import { SEO } from "@/components/seo";
import { SummarizeWithAI } from "@/components/summarize-with-ai";

const eligibilityCriteria = [
  "Individuals that have a Body Mass Index of 35 and above",
  "Individuals that have Type 2 Diabetes (in this group BMI criteria goes down to 30)",
  "Whose general health and wellness is at risk from being overweight and having diabetes",
  "The basic state of health is thought to be appropriate for surgery",
  "Who wishes to lose weight and are prepared for the post-operative process",
  "People with the necessary psychological conditions for the procedure"
];

const advantages = [
  "The stomach is shrunk but the risk of leakage is reduced since the stomach pressure will not be as high as sleeve",
  "When the stomach is shrunk, the part that releases Ghrelin is removed, which causes consequently lowering cravings",
  "After the surgery, the duodenum is not impaired",
  "The natural way of the digestive system is preserved and easily accessible when endoscopy is needed",
  "⅓ of food can travel through the normal gastrointestinal system, no extreme absorption problem happens",
  "Vitamin, mineral, iron, and calcium supplements are not generally needed long-term",
  "Type 2 diabetes mellitus resolves without waiting to lose excess weight"
];

const disadvantages = [
  "If the clients do not comply with the necessary controls after the operation, there might be no resolution in diabetes",
  "There is a risk of leak as in gastric sleeve procedures - surgeon experience is crucial",
  "Complication and risk rates in all laparoscopic surgeries are also valid (though extremely low in healthy patients)"
];

const outcomes = [
  { stat: "86%", label: "Complete Diabetes Remission" },
  { stat: "83%", label: "Orthopedic Pain Resolution" },
  { stat: "72%", label: "No Longer Need BP Medicine" },
  { stat: "85%", label: "Hypertriglyceridemia Treated" }
];

export default function TransitBipartition() {
  const { t } = useTranslation('treatments');
  
  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="Transit Bipartition Surgery Istanbul: Diabetes & Weight Loss"
        description="Transit Bipartition surgery in Istanbul. Revolutionary diabetes and weight loss surgery with 86% diabetes remission rate. Expert metabolic surgeons."
        keywords="transit bipartition turkey, diabetes surgery istanbul, metabolic surgery, weight loss surgery"
        url="/transit-bipartition"
      />
      <Navbar />
      
      {/* Hero Header */}
      <section className="bg-slate-900 text-white pt-40 pb-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">{t('transitBipartition.heroTitle')}</h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            {t('transitBipartition.heroSubtitle')}
          </p>
          <SummarizeWithAI variant="dark" />
        </div>
      </section>

      {/* Evolutionary Reasons */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-slate-900">Evolutionary Reasons of Obesity and Diabetes</h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                Humans learned to prepare their food by picking the wealthiest parts of it and disregarding the low nutritive components. However, extremely different from various other animals, we began food preparation, boiling, as well as liquefaction of food to make nutrients more available.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed">
                From an evolutionary point of view, the food industry recently created extremely new processes, such as refining, extrusion cooking, surge puffing, utilizing extreme temperature levels and stress. Such extremes assist in the food digestion of starches. In fact, these procedures work as exterior digestion.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed">
                Industrialization made refined food readily available, plentiful, and low-cost. In the last 4 decades, a high rise in the incidence of obesity and related conditions has been observed in well-off, industrialized areas.
              </p>
            </div>
            <div className="flex justify-center">
              <img 
                src="/blog-insulin.webp" 
                alt="Insulin and Obesity — the relationship between insulin resistance, diet, and weight gain" 
                className="rounded-2xl shadow-xl max-w-md w-full"
                width="400"
                height="267"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Gut is the Key */}
      <section className="py-20 bg-blue-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-slate-900 mb-8">Gut is the Key in Diabetes</h2>
          
          <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
            <p>
              In 1998, the world was captivated by a study that investigated whether type 2 diabetes mellitus (T2DM) could be a disease of the foregut. The nonrestrictive and non-malabsorptive effects of bariatric surgical treatment became a subject of interest.
            </p>
            <p>
              Big meta-analyses showed that the bariatric treatments that work best (in terms of weight loss and metabolic enhancement) are those that minimize the quantity of food that is presented to the foregut and that boost transport of food to the hindgut.
            </p>
            <p>
              Progressively, it became clear that restriction and malabsorption were not the main causes for the great outcomes of present bariatric treatments. This technique consisted of various treatments capable to trigger metabolic improvements. Among them, it was observed that <strong>sleeve gastrectomy and transit bipartition were highly efficient</strong>.
            </p>
            <div className="p-6 bg-white rounded-xl border border-blue-100 mt-8">
              <p className="text-slate-700 font-medium">
                The main goal of transit bipartition is to benefit our patients by counterbalancing the dangerous effects of the modern diet. Without exceptions and with a basic operation, SG + TB amplifies the nutritious stimulation of the distal gut while simultaneously lessening the exposure of the proximal bowel to nutrients without totally deactivating duodenum and jejunum.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What is Transit Bipartition */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">What is the Transit Bipartition Surgery?</h2>
          
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
              <p>
                Transit bipartition surgery, also known as <em>surgical treatment of diabetes</em>, is a type of surgical operation that is carried out amongst the metabolic surgery procedures, which is perfect for Type 2 diabetes mellitus patients with an excess weight issue, and which is generally done by laparoscopic method.
              </p>
              <p>
                The procedure combines a typical sleeve gastrectomy with a connection between stomach and the distal small bowel; this creates a faster way to the ileum while preserving access to the duodenum. After this operation, in which the continuity of the stomach and duodenum is preserved, <strong>there is no severe reduction in the absorption of minerals and vitamins</strong> necessary for the body.
              </p>
              <p>
                Very impressive and reliable outcomes are acquired with the transit bipartition surgery executed for the therapy of individuals with Type 2 diabetes mellitus. After the operation, which is finished in approximately <strong>1 hour</strong>, individuals can get rid of type 2 diabetes, lose their excess weight, and improve their health problems due to excess weight.
              </p>
            </div>
            <div className="flex justify-center">
              <video 
                src="/transit-bipartition-animation.mp4" 
                autoPlay 
                loop 
                muted 
                playsInline
                preload="none"
                className="rounded-2xl shadow-xl max-w-md w-full"
                aria-label="Transit Bipartition surgery animation — sleeve gastrectomy combined with intestinal bypass"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Who is Eligible */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-slate-900 mb-8">Who Is a Good Candidate for Transit Bipartition Surgery?</h2>
          
          <p className="text-lg text-slate-600 mb-8">
            Transit bipartition, which is a metabolic surgical procedure approach developed for Type 2 diabetes treatment, also makes it possible for patients with a body mass index more than 35 to lose weight securely.
          </p>

          <div className="space-y-4">
            {eligibilityCriteria.map((criteria, i) => (
              <div key={i} className="flex items-start gap-4 p-5 bg-white rounded-xl shadow-sm border border-slate-100">
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-5 h-5 text-primary" />
                </div>
                <p className="text-slate-700 text-lg">{criteria}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How is it Performed */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-slate-900 mb-8">How is Transit Bipartition Surgery Performed?</h2>
          
          <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
            <p>
              Transit bipartition operation would be performed under <strong>general anesthesia</strong> and finished usually in <strong>1 hour</strong>. During the surgery utilizing the laparoscopic approach, small cuts will be created on the abdominal area. Because of this, the recovery and healing period after transit bipartition with keyhole technique would be faster and more comfortable than open surgery.
            </p>
            
            <div className="p-6 bg-blue-50 rounded-xl border border-blue-100">
              <h4 className="font-bold text-slate-900 mb-4">Stage 1: Sleeve Gastrectomy</h4>
              <p className="text-slate-700">
                First, a standard sleeve gastrectomy procedure would be carried out. The new stomach created after stomach surgery performed as part of transit bipartition is slightly larger than the stomach developed during traditional sleeve gastrectomy operation.
              </p>
            </div>
            
            <div className="p-6 bg-blue-50 rounded-xl border border-blue-100">
              <h4 className="font-bold text-slate-900 mb-4">Stage 2: Intestinal Bypass</h4>
              <p className="text-slate-700">
                In the second stage, the initial 250 centimeters of the small intestine (with a length of 5 meters) is preserved and the small intestine is cut in half from the marked component. The cut part is incorporated into the shrunken belly and the free portion is incorporated in the last 150 cm of the small intestine.
              </p>
            </div>
            
            <p>
              This way, when the individual eats, the receptors in the middle part of the small intestine feel quickly, and the risk of absorption troubles is eliminated as the consumed food passes all parts of the small intestine.
            </p>
            <p>
              Approximately <strong>one-third of the food</strong> eaten by the individual after the transit bipartition surgery goes through the duodenum, while the other part goes through the new connection made from the middle part of the small intestine.
            </p>
          </div>
        </div>
      </section>

      {/* Advantages */}
      <section className="py-20 bg-green-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-slate-900 mb-8">{t('common.advantages')}</h2>
          
          <div className="space-y-4">
            {advantages.map((advantage, i) => (
              <div key={i} className="flex items-start gap-4 p-5 bg-white rounded-xl shadow-sm border border-green-100">
                <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-5 h-5 text-green-600" />
                </div>
                <p className="text-slate-700 text-lg">{advantage}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Disadvantages */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-slate-900 mb-8">{t('common.thingsToConsider')}</h2>
          
          <div className="space-y-4">
            {disadvantages.map((disadvantage, i) => (
              <div key={i} className="flex items-start gap-4 p-5 bg-amber-50 rounded-xl shadow-sm border border-amber-100">
                <div className="w-8 h-8 rounded-full bg-amber-100 flex items-center justify-center shrink-0">
                  <AlertCircle className="w-5 h-5 text-amber-600" />
                </div>
                <p className="text-slate-700 text-lg">{disadvantage}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Outcomes */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-3xl font-bold mb-12 text-center">Outcomes of Transit Bipartition</h2>
          
          <div className="grid md:grid-cols-4 gap-6 mb-12">
            {outcomes.map((outcome, i) => (
              <div key={i} className="bg-white/10 backdrop-blur rounded-xl p-6 text-center">
                <div className="text-4xl font-bold mb-2">{outcome.stat}</div>
                <p className="text-white/80">{outcome.label}</p>
              </div>
            ))}
          </div>
          
          <div className="text-center max-w-3xl mx-auto">
            <p className="text-lg text-white/90">
              From a nutritional perspective, SG + TB has exceptional results. Protein malnutrition will not occur. Anemia is rarely a trouble and typically temporary. Regarding Type 2 diabetes, 86% of patients show complete remission; 14% of people show improvements but still need some oral diabetes pills.
            </p>
          </div>
        </div>
      </section>

      {/* Post-operative Care */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-slate-900 mb-8">Perioperative Treatment & Follow-ups</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-6 bg-slate-50 rounded-xl border border-slate-200">
              <h3 className="font-bold text-slate-900 text-xl mb-4">Immediate Care</h3>
              <ul className="space-y-3 text-slate-600">
                <li>• Antibiotic and deep vein thrombosis treatment</li>
                <li>• Low molecular weight heparin shots</li>
                <li>• Anti-thrombosis socks</li>
                <li>• Fasting on first postoperative day</li>
                <li>• Liquid supplements for subsequent 12 days</li>
                <li>• Soft solid meals with slow progression</li>
              </ul>
            </div>
            
            <div className="p-6 bg-slate-50 rounded-xl border border-slate-200">
              <h3 className="font-bold text-slate-900 text-xl mb-4">Follow-up Schedule</h3>
              <ul className="space-y-3 text-slate-600">
                <li>• Return after 10 days</li>
                <li>• 1 month check-up</li>
                <li>• 3 months check-up</li>
                <li>• 6 months check-up</li>
                <li>• 1 year check-up with blood tests</li>
                <li>• Annual visits thereafter</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Is Transit Bipartition Right for You?</h2>
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            Contact <a href="https://drmuratustun.com" target="_blank" rel="noopener noreferrer" className="text-white underline hover:text-white/80">Dr Murat Ustun's</a> team today for a free consultation to determine if transit bipartition surgery is the right option for your diabetes and weight management goals.
          </p>
          <Button 
            size="lg" 
            className="bg-white text-slate-900 hover:bg-white/90 font-bold text-lg h-14 px-10"
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

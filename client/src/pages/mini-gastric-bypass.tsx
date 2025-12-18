import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const sideEffects = [
  "Bleeding from inside your stomach or your stomach wound.",
  "You might feel pain if the doctor or medical team did not give you powerful general anesthesia.",
  "Gastric Leaks: the stomach fluids can leak from the suture line in your stomach.",
  "Stenosis: which means that a part of your stomach might close causing an obstruction in your stomach.",
  "Vitamin deficiency: the removed part of your stomach is partially responsible for vitamin absorption so when you lose this part, the vitamins in your body will decrease."
];

const thingsToKnow = [
  "Patients who would like to have this surgery should score at least 35 kg/m² in BMI index.",
  "A patient will spend an hour to 90 minutes in the hospital doing the surgery.",
  "A patient must stay at the hospital for three to four days to make sure that nothing is going wrong.",
  "A patient will lose between 70% to 85% of the overall weight.",
  "A patient must know that the sickness will go after three weeks at maximum.",
  "A patient must take supplements for life-long time.",
  "A patient must follow the doctor's instructions and given diets."
];

const tableOfContents = [
  { title: "How can mini gastric bypass surgery help me lose weight?", id: "how-it-helps" },
  { title: "Are there any side effects for mini gastric bypass surgery?", id: "side-effects" },
  { title: "Do insurance companies cover the fees of the surgery?", id: "insurance" },
  { title: "Things You Need to Know Before Mini Gastric Bypass Surgery", id: "things-to-know" }
];

export default function MiniGastricBypass() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Header */}
      <section className="bg-slate-900 text-white pt-40 pb-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Mini Gastric Bypass Surgery</h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Mini Gastric Bypass surgery could be the best answer to obesity and diabetes pandemic.
          </p>
        </div>
      </section>

      {/* Table of Contents */}
      <section className="py-12 bg-blue-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-xl font-bold text-slate-900 mb-6">Table of Contents</h2>
          <ul className="space-y-3">
            {tableOfContents.map((item, i) => (
              <li key={i}>
                <a 
                  href={`#${item.id}`} 
                  className="text-primary hover:underline flex items-center gap-2"
                >
                  <ArrowRight className="w-4 h-4" />
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
          <div className="prose prose-lg max-w-none space-y-6 text-slate-600">
            <p className="text-lg leading-relaxed">
              For many people around the world, excess weight and obesity is a very serious problem not just because of the changing in shape, face, or body that comes after it, but also because of the health problem that can be caused by it.
            </p>
            <p className="text-lg leading-relaxed">
              In fact, obesity is a very important reason and might be the direct reason for most of the strokes, blood sugar, blood pressure problems, breathing problems, stomach problems, and many other health problems.
            </p>
            <p className="text-lg leading-relaxed">
              There are several types for weight loss surgery each one differs from the other in its steps but all of them share the same pleasant results which is significant weight loss. One of these types is called <strong>mini gastric sleeve bypass</strong>.
            </p>
            <p className="text-lg leading-relaxed">
              This surgery is considered to be one of the most effective weight loss surgeries and has many advantages compared to other types of weight loss surgery.
            </p>
            <p className="text-lg leading-relaxed">
              Just like any other <strong>weight loss surgery</strong>, the basic idea of mini gastric surgery is to reduce the volume of the stomach to decrease the amount of food consumed by the patient. However, the mini gastric bypass surgery involves different steps. During the surgery, the doctor will cut the upper part of the stomach and divide it into a tube, and then join it to a loop of intestine. The rest of the stomach which equals 75% of the entire stomach will remain useless.
            </p>
            <p className="text-lg leading-relaxed">
              The top of the stomach is stapled to form a <strong>50 ml size tube</strong>, this tube will be the new small stomach and completely separated from the original stomach. This stomach is then sewn to a loop of the small intestine, bypassing the first part of the intestine called the duodenum and approximately <strong>150–200cm of the bowel</strong>.
            </p>
            <p className="text-lg leading-relaxed">
              The mini gastric bypass surgery can be used as a primary weight loss surgery or can be used for people who already tried diet and daily exercises but did not have any pleasant results, or for patients who are redoing a weight loss surgery because the first one did not succeed for any reason.
            </p>
          </div>
        </div>
      </section>

      {/* How it helps */}
      <section id="how-it-helps" className="py-20 bg-slate-50 scroll-mt-24">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-slate-900 mb-8">How can mini gastric bypass surgery help me lose weight?</h2>
          
          <p className="text-lg text-slate-600 mb-8">
            The mini gastric bypass surgery helps you lose weight in several ways:
          </p>
          
          <div className="space-y-6">
            <div className="flex items-start gap-4 p-6 bg-white rounded-xl shadow-sm border border-slate-100">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                <CheckCircle2 className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h4 className="font-bold text-slate-900 mb-2">Reduces hunger feeling</h4>
                <p className="text-slate-600">The removed part of the stomach is responsible for hunger hormone. Thus, when it is removed the feeling for hunger will be reduced which will result in less weight.</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4 p-6 bg-white rounded-xl shadow-sm border border-slate-100">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                <CheckCircle2 className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h4 className="font-bold text-slate-900 mb-2">Reduces food intake</h4>
                <p className="text-slate-600">By reducing the amount of food entering the stomach as the volume of your stomach has become smaller after the surgery.</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4 p-6 bg-white rounded-xl shadow-sm border border-slate-100">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                <CheckCircle2 className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h4 className="font-bold text-slate-900 mb-2">Reduces calorie absorption</h4>
                <p className="text-slate-600">By reducing the amount of calories you absorb from the food you eat which results in a healthier lifestyle.</p>
              </div>
            </div>
          </div>

          <div className="mt-12 p-8 bg-blue-50 rounded-2xl border border-blue-100">
            <h4 className="font-bold text-slate-900 text-xl mb-4">Additional Benefits</h4>
            <p className="text-slate-600 text-lg">
              After two years you will lose around <strong>80% of your weight</strong>, and serious health problems and diseases like type 2 diabetes, blood sugar diseases, heart problems will be improved or even disappear after doing this surgery.
            </p>
          </div>
        </div>
      </section>

      {/* Side Effects */}
      <section id="side-effects" className="py-20 scroll-mt-24">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-slate-900 mb-8">Are there any side effects for mini gastric bypass surgery?</h2>
          
          <p className="text-lg text-slate-600 mb-8">
            Well just like any other surgery in any other field there are some side effects that might happen during the surgery or after the surgery. Despite that the mini gastric bypass surgery is safe but still there are some risks that we can mention:
          </p>

          <div className="space-y-4 mb-8">
            {sideEffects.map((effect, i) => (
              <div key={i} className="flex items-start gap-3 p-4 bg-amber-50 rounded-lg border border-amber-100">
                <div className="w-6 h-6 rounded-full bg-amber-500 text-white flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold">!</div>
                <span className="text-slate-700">{effect}</span>
              </div>
            ))}
          </div>

          <div className="p-6 bg-slate-50 rounded-xl border border-slate-200">
            <p className="text-slate-600">
              These risks are considered to be early complications and thankfully <strong>95% of the cases are successful</strong>. Still, there are some late complications that might appear like Internal hernia despite that the risk of internal hernia is considerably lower after mini-bypass than after standard gastric bypass. Sometimes the loops of bowel in the abdomen can become entangled and get stuck. In this case, another operation or surgery is necessary to fix the problem.
            </p>
          </div>
        </div>
      </section>

      {/* Insurance */}
      <section id="insurance" className="py-20 bg-slate-50 scroll-mt-24">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-slate-900 mb-8">Do insurance companies cover the fees of the surgery?</h2>
          
          <p className="text-lg text-slate-600">
            Most insurance companies cover the surgery costs if the patient accomplishes BMI Index condition. Of course, this information changes from a country to another one so it is better to ask about this information in your country.
          </p>
        </div>
      </section>

      {/* Things to Know */}
      <section id="things-to-know" className="py-20 scroll-mt-24">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-slate-900 mb-8">Things You Need to Know Before Mini Gastric Bypass Surgery</h2>
          
          <div className="space-y-4">
            {thingsToKnow.map((item, i) => (
              <div key={i} className="flex items-start gap-4 p-5 bg-white rounded-xl shadow-sm border border-slate-100">
                <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center shrink-0 font-bold text-sm">
                  {i + 1}
                </div>
                <p className="text-slate-700 text-lg">{item}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 p-6 bg-blue-50 rounded-xl border border-blue-100">
            <p className="text-slate-600 text-lg">
              In the end, you should know that despite being safe and not very hard but the doctor or the medical team should know all the information related to your health stature including your medical history report just to avoid any problems whether during the surgery or after the surgery during the recovery time.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Learn More About Mini Gastric Bypass?</h2>
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            Contact us today for a free consultation and learn how mini gastric bypass surgery can help you achieve your weight loss goals.
          </p>
          <Button 
            size="lg" 
            className="bg-white text-primary hover:bg-white/90 font-bold text-lg h-14 px-10"
            onClick={() => window.open('https://wa.me/447491068686', '_blank')}
          >
            Get Free Consultation
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
}

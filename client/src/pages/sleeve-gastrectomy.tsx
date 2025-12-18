import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Check, ArrowRight } from "lucide-react";

const packages = [
  {
    name: "Sleeve Gastrectomy Basic",
    price: "£2250",
    features: [
      "Best Doctors",
      "JCI Accredited Hospital",
      "Airport Pickup",
      "3 Days Accomodation"
    ]
  },
  {
    name: "Sleeve Gastrectomy Relaxation",
    price: "£3250",
    features: [
      "Best Doctors",
      "JCI Accredited Hospital",
      "Airport Pickup",
      "5 Days Accomodation"
    ],
    recommended: true
  },
  {
    name: "Sleeve Gastrectomy Luxury",
    price: "£4000",
    features: [
      "Best Doctors",
      "JCI Accredited Hospital",
      "Airport Pickup",
      "7 Days Accomodation"
    ]
  }
];

const risks = [
  "Bleeding from the inside of the stomach or the surgical wound.",
  "Deep Vein Thrombosis: or DVT which is blood clot forming in your vein during the procedure or during the recovery process.",
  "Irregular heartbeat: some surgeries can lead to an irregular heartbeat during the surgery.",
  "Gastric Leaks: the stomach fluids can leak from the suture line in your stomach.",
  "Stenosis: which means that a part of your stomach might close causing an obstruction in your stomach.",
  "Vitamin deficiency: the removed part of your stomach is partially responsible for vitamin absorption."
];

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

export default function SleeveGastrectomy() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Header */}
      <section className="bg-slate-900 text-white pt-40 pb-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Sleeve Gastrectomy Istanbul, Turkey</h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Gastric sleeve surgery is one of the most applied bariatric surgeries both worldwide and in Turkey. Discover why it's so effective.
          </p>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-slate-900">Sleeve Gastrectomy Turkey: Overview</h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                Gastric sleeve or sleeve gastrectomy is a bariatric surgery that is performed by cutting a part of your stomach to create a smaller chamber. It is one of the most applied bariatric surgeries both worldwide and Turkey.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed">
                Obesity is one of the most annoying problems for many people around the world, not just because of the changing in shape, face, or body that comes after it, but also because of the health problems that can be caused by it.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed">
                According to the American Society of Metabolic and Bariatric Surgery, people who do this type of weight loss surgery lose <strong>50 to 60% of their weight</strong> and some of them have lost <strong>70% of their weight</strong>.
              </p>
              <Button 
                className="bg-primary hover:bg-primary/90 h-12 px-8"
                onClick={() => window.open('https://wa.me/447491068686', '_blank')}
              >
                Get Free Consultation <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </div>
            <div className="flex justify-center">
              <img 
                src="https://caf0fec0.delivery.rocketcdn.me/wp-content/uploads/2020/10/gastric-sleeve.png" 
                alt="Gastric Sleeve Surgery Illustration" 
                className="max-w-md w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* What is Gastric Sleeve */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">What is Gastric Sleeve Surgery?</h2>
          <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
            <p>
              It is a type of weight loss surgery that involves cutting a part of your stomach to create a smaller chamber.
            </p>
            <p>
              This surgery is done after using a general anesthesia to make sure you don't feel the pain. The surgeon will divide your stomach into two unequal parts and remove the larger part of the stomach which is almost <strong>75% to 80%</strong> of the stomach volume.
            </p>
            <p>
              The remaining 20 to 25% will be sutured together creating a <strong>banana shaped small stomach</strong>.
            </p>
            <p>
              The steps are few but the surgery is complicated actually so you need to stay at the hospital for the next 24 hours just to make sure that you're not complaining of any side effects or health problems. The small incision in your abdomen will heal fast and you will be able to get back to your normal activities in <strong>three to four days</strong>. In fact, this type of weight loss surgery is considered to be one of the fastest recovery.
            </p>
          </div>
        </div>
      </section>

      {/* Is it effective */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">Is it really effective?</h2>
          <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
            <p>
              To be honest, it is way more effective than diets and daily exercises. After the surgery, your stomach will be definitely smaller which will make you consume less amount of food and make you feel full sooner.
            </p>
            <p>
              In addition, the removed part includes a hormone that is responsible for hunger feelings so when 80% of the stomach is removed this hormone will be reduced and the feeling of hunger will also be reduced.
            </p>
          </div>
        </div>
      </section>

      {/* Who is qualified */}
      <section className="py-20 bg-blue-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">Who is qualified for gastric sleeve surgery?</h2>
          <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
            <p>
              Anyone who complains of obesity can do this surgery but after attempting the old school traditional ways like diets and daily exercises because a surgery is not something easy no matter what it is.
            </p>
            <p>
              In addition, you must meet the criteria for weight loss surgery and measure your obesity using the BMI Index:
            </p>
            <ul className="space-y-4 pl-6">
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center shrink-0 mt-1 text-sm font-bold">1</div>
                <span>If your BMI score is <strong>40 and higher</strong> then you definitely need a bariatric surgery.</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center shrink-0 mt-1 text-sm font-bold">2</div>
                <span>If you score <strong>between 35 to 39</strong>, then you might solve the problem without doing a surgery.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Risks */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">Does gastric sleeve surgery have any risks?</h2>
          <p className="text-lg text-slate-600 mb-8 text-center">
            Gastric Sleeve Surgery is known to be safe, however, just like any other field surgery there are few risks to mention:
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            {risks.map((risk, i) => (
              <div key={i} className="flex items-start gap-3 p-4 bg-amber-50 rounded-lg border border-amber-100">
                <div className="w-6 h-6 rounded-full bg-amber-500 text-white flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold">!</div>
                <span className="text-slate-700">{risk}</span>
              </div>
            ))}
          </div>
          <p className="text-lg text-slate-600 mt-8 text-center">
            In the end, you should know that in order to have pleasant results you must follow the doctor's recommendations and diet program.
          </p>
        </div>
      </section>

      {/* Pricing Packages */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Sleeve Gastrectomy Package Options</h2>
            <p className="text-slate-600 text-lg">In Istanbul Bariatric Center, you are free to choose any of the treatment packages that fits your budget.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {packages.map((pkg, idx) => (
              <Card key={idx} className={`relative overflow-hidden border-2 transition-all duration-300 hover:shadow-xl ${pkg.recommended ? 'border-primary shadow-lg scale-105 z-10' : 'border-white shadow-sm'}`}>
                {pkg.recommended && (
                  <div className="absolute top-0 right-0 bg-primary text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
                    POPULAR
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
                  <Button 
                    className={`w-full ${pkg.recommended ? 'bg-primary hover:bg-primary/90' : 'bg-slate-900 hover:bg-slate-800'}`}
                    onClick={() => window.open('https://wa.me/447491068686', '_blank')}
                  >
                    SELECT PACKAGE
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">Frequently Asked Questions</h2>
          
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

      {/* CTA */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Start Your Weight Loss Journey?</h2>
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            Contact us today for a free consultation and learn how gastric sleeve surgery can help you achieve your goals.
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

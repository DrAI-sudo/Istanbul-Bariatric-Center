import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ArrowRight } from "lucide-react";
import { useTranslation } from "react-i18next";
import { SEO, JsonLd, structuredData } from "@/components/seo";

const faqs = [
  {
    question: "What is Duodenal Switch surgery?",
    answer: "Or as some doctors call it \"Gastric Reduction Duodenal Switch\" is a weight loss surgery that involves both restrictive and malabsorptive aspects. The restrictive part of the surgery involves cutting up to 70% of the stomach and some of the duodenum."
  },
  {
    question: "Is it similar to gastric bypass?",
    answer: "The duodenal switch is similar to gastric bypass in goals because it reduces the amount of food entering your stomach and reduces the amount of calories absorbed to your body, but because it is more of malabsorptive operation, it causes more side effects than other types of surgeries."
  },
  {
    question: "Is duodenal switch better than other types of obesity surgery?",
    answer: "Some doctors suggest that it is better for the long term because in duodenal switch the stomach will remain big so it will host more food compared to the other types of obesity surgery, this will help you having better body shape in the long term."
  },
  {
    question: "Can anyone have the duodenal switch surgery? How do I know if I'm a candidate?",
    answer: "Not anyone can have duodenal switch surgery, only the doctor or medical team can decide that and the decision will be according to your BMI \"Body Mass Index\" if it is greater than 40 then you can have the duodenal switch surgery. Of course, there are other things to take in consideration so it is very important that your doctor decide whether you can have the duodenal switch surgery or not."
  },
  {
    question: "How long is the recovery time for duodenal switch surgery?",
    answer: "It differs from one patient to another but for most patients it needs between three to four weeks of recovery. Even though that the surgery does not leave many scars from outside but it requires hard work from the inside."
  },
  {
    question: "Can I get back to work after the recovery time and start exercising?",
    answer: "It is better to take another week away from the stress and hard activities just to make sure that your body has adjusted to the new situation after the surgery."
  },
  {
    question: "How long does it take for me to lose weight after the surgery?",
    answer: "Most patients who have had the duodenal switch surgery lose their weight during the first 12 to 18 months. This is why not everyone feels encouraged to have this type of obesity surgery."
  },
  {
    question: "Is it possible that I gain weight after losing it?",
    answer: "Well it can be if you get back to the old unhealthy lifestyle but it is known about duodenal surgery that it has the best long lasting weight loss among the obesity surgery types."
  },
  {
    question: "Do I have to avoid certain kinds of food after the surgery?",
    answer: "It is hard to tell specific types of food because it differs from one patient to another but there are some types of food that you should absolutely stay away from like fatty food because it causes diarrhea. In any case it is important to take the answers of this question from the doctor after he or she examines your body."
  },
  {
    question: "How much weight will I lose after the surgery?",
    answer: "Most patients lose between 40 to 60% of their weight. However, you need to know that none of this will happen if you don't put in an extra effort and change your lifestyle to a healthier one."
  },
  {
    question: "Does duodenal switch surgery prevent pregnancy? Or have any negative effects on pregnant bodies?",
    answer: "The surgery will not prevent pregnancy. However, during the first 18 months we suggest that a woman do not experience pregnancy because during this time she will be losing weight and this might affect negatively on her body. In any case, weight loss surgeries help women in having a healthier pregnancy experience (after the maximum loss of weight)."
  },
  {
    question: "Does duodenal switch surgery cost more than other obesity surgeries?",
    answer: "It costs a little bit more than other types of obesity surgery because it requires more work and effort from the medical team and surgeons."
  }
];

export default function DuodenalSwitch() {
  const { t } = useTranslation('treatments');
  
  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="Duodenal Switch Surgery in Turkey"
        description="Duodenal Switch surgery in Istanbul. Most effective weight loss surgery with 40-60% weight loss. Best for high BMI patients. Expert surgical team."
        keywords="duodenal switch turkey, sadi-s surgery, biliopancreatic diversion, weight loss surgery istanbul"
        url="/duodenal-switch"
      />
      <JsonLd data={structuredData.createFAQ(faqs)} />
      <Navbar />
      
      {/* Hero Header */}
      <section className="bg-slate-900 text-white pt-40 pb-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">{t('duodenalSwitch.heroTitle')}</h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            {t('duodenalSwitch.heroSubtitle')}
          </p>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-16 bg-slate-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="aspect-video rounded-2xl overflow-hidden shadow-2xl">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/JQjvwpCmTeI"
                title="Duodenal Switch Surgery Explained"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
            <p>
              Nowadays there are many people around the world complaining of obesity problems, especially that it is responsible for many serious health problems like heartbreaks, strokes, liver and kidney problems, and many more health issues. Thus, hundreds of thousands of people who complain of obesity started to have obesity surgeries.
            </p>
            <p>
              There are several types for obesity surgery, each type has its own tools and way to be done but all of the types share the same goal which is helping to cure obesity problems.
            </p>
            <p className="font-medium text-slate-900">
              Duodenal switch surgery is one of the obesity surgery types and a very efficient one.
            </p>
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">Key Benefits of Duodenal Switch</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-sm border border-slate-100 text-center">
              <div className="text-4xl font-bold text-primary mb-2">40-60%</div>
              <p className="text-slate-600">Weight Loss</p>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-sm border border-slate-100 text-center">
              <div className="text-4xl font-bold text-primary mb-2">12-18</div>
              <p className="text-slate-600">Months to Results</p>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-sm border border-slate-100 text-center">
              <div className="text-4xl font-bold text-primary mb-2">Best</div>
              <p className="text-slate-600">Long-term Results</p>
            </div>
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
                <AccordionTrigger className="text-left font-bold text-slate-900 hover:no-underline py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-slate-600 leading-relaxed pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Diabetes Section */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">Duodenal Switch for Diabetes</h2>
          
          <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
            <p>
              Duodenal switch surgery is particularly effective for patients with Type 2 diabetes. The procedure not only helps with significant weight loss but also has been shown to improve or even resolve diabetes in many patients.
            </p>
            <p>
              The malabsorptive component of the surgery changes how the body processes food and can lead to improved insulin sensitivity and blood sugar control. Many patients see improvements in their diabetes even before significant weight loss occurs.
            </p>
            <div className="p-6 bg-blue-50 rounded-xl border border-blue-100">
              <p className="text-slate-700 font-medium">
                Studies have shown that duodenal switch has one of the highest rates of diabetes remission among all bariatric procedures, making it an excellent choice for patients with severe obesity complicated by diabetes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Is Duodenal Switch Right for You?</h2>
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            Contact us today for a free consultation to determine if duodenal switch surgery is the right option for your weight loss and diabetes management goals.
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

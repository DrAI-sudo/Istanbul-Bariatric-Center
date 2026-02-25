import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { useTranslation } from "react-i18next";
import { SEO } from "@/components/seo";
import { Link } from "wouter";
import { SummarizeWithAI } from "@/components/summarize-with-ai";

const balloonTypes = [
  {
    name: "Elipse Gastric Balloon",
    duration: "4-6 months",
    anesthesia: "Without anesthesia"
  },
  {
    name: "Allergan Gastric Balloon",
    duration: "6 months",
    anesthesia: "Intravenous"
  },
  {
    name: "Spatz Gastric Balloon",
    duration: "12 months",
    anesthesia: "General"
  }
];

export default function GastricBalloon() {
  const { t } = useTranslation('treatments');
  
  const advantages = t('gastricBalloon.advantages', { returnObjects: true }) as string[];
  const disadvantages = t('gastricBalloon.disadvantages', { returnObjects: true }) as string[];
  
  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="Gastric Balloon in Turkey - Non-Surgical Weight Loss"
        description="Gastric Balloon procedure in Istanbul. Non-surgical weight loss with Elipse, Allergan, or Spatz balloons. Minimal recovery, effective results."
        keywords="gastric balloon turkey, elipse balloon istanbul, weight loss balloon, non-surgical weight loss"
        url="/gastric-balloon"
      />
      <Navbar />
      
      {/* Hero Header */}
      <section className="bg-slate-900 text-white pt-40 pb-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">{t('gastricBalloon.heroTitle')}</h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            {t('gastricBalloon.heroSubtitle')}
          </p>
          <SummarizeWithAI variant="dark" />
        </div>
      </section>

      {/* Introduction */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
            <div className="space-y-6">
              <p className="text-lg text-slate-600 leading-relaxed">
                Many people complain of obesity and its side effects on health statuses, especially that it can be a direct reason for many health problems like strokes and breathing difficulties. Some people try to solve their obesity by following old school traditional ways such as severe diet programs and daily exercises, but not everyone can reach pleasant results. Thus, weight loss surgeries have become the most successful substitute to solve obesity problems.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed">
                One of the most effective and important types is the <strong>Gastric Balloon</strong>. Just like any other weight loss surgery, the reason for gastric balloons is to reduce the weight of a patient but unlike other weight loss surgeries, it is simple and more comfortable therefore it is intelligible for anyone.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed font-medium text-slate-900">
                So how is it done? Are there any risks? How much does it cost? This article will explain everything about gastric balloon surgery.
              </p>
            </div>
            <div className="flex justify-center">
              <img 
                src="https://caf0fec0.delivery.rocketcdn.me/wp-content/uploads/2020/10/Gastric-Balloon-300x278.png" 
                alt="Gastric Balloon Illustration" 
                className="max-w-sm w-full"
                width="300"
                height="278"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* How it's performed */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-slate-900 mb-8">How Gastric Balloon Operation is Performed?</h2>
          
          <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
            <p>
              First of all, the gastric balloon surgery requires less incision because the doctor starts it by inserting a silicone balloon into the stomach by using an <strong>endoscope</strong> which is a long, thin, and flexible tube that has a camera on the top of it to help the doctor navigate through the mouth and down the throat to reach the stomach.
            </p>
            <p>
              Once the balloon is placed safely in the stomach, it is filled with <strong>saline (salt water)</strong> and the balloon then will become very big to remove so it floats in the stomach freely.
            </p>
            <p>
              As a result of this operation, the filled balloon will give the patient a feeling of a half-full stomach which makes the patient consume less food and slowly make him lose weight.
            </p>
            <p>
              As you can see, the gastric balloon surgery does not involve any cut of the stomach which means that the stomach will work as normal. However, gastric balloon surgery is only a <strong>short term solution</strong> because the balloon must be removed after <strong>8 to 12 months</strong> maximum, so you can think about it like a boost to weight loss but not a once for all solution.
            </p>
            <p>
              You will still need to get support to learn eating healthy, stay living healthy life, add gym into your life, etc.
            </p>
            <div className="p-6 bg-blue-50 rounded-xl border border-blue-100 mt-8">
              <p className="text-slate-700">
                <strong>Note:</strong> Gastric balloon is also a good option for those who need to lose weight before sleeve gastrectomy surgery. Considering overweight, sometimes doctors offer to have the gastric balloon as a first step to make the main surgery (gastric bypass or sleeve gastrectomy) easier and safer.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Types */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-slate-900 mb-8">Types of Intragastric Balloon</h2>
          
          <p className="text-lg text-slate-600 mb-8">
            There are several types of gastric balloon surgery:
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {balloonTypes.map((type, i) => (
              <div key={i} className="bg-white rounded-xl p-6 shadow-sm border border-slate-100 hover:shadow-lg transition-shadow">
                <h3 className="font-bold text-slate-900 text-lg mb-4">{type.name}</h3>
                <div className="space-y-2 text-slate-600">
                  <p><span className="font-medium">Duration:</span> {type.duration}</p>
                  <p><span className="font-medium">Anesthesia:</span> {type.anesthesia}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="p-6 bg-slate-50 rounded-xl border border-slate-200">
            <p className="text-slate-600">
              Lately, most people demand an <strong>Elipse gastric balloon</strong> because it is comfortable and does not require anesthesia and lasts for only 4 to 6 months which is considered to be a very satisfying option to help patients go through diet and a healthy life system.
            </p>
            <p className="text-slate-600 mt-4">
              Of course, the results of all types are the same. People usually lose <strong>15% of their weight</strong> depending on their starting weight and their overall health status and sometimes they even lose more weight.
            </p>
          </div>
        </div>
      </section>

      {/* Advantages */}
      <section className="py-20 bg-blue-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-slate-900 mb-8">{t('common.advantages')}</h2>
          
          <div className="grid md:grid-cols-2 gap-4">
            {Array.isArray(advantages) && advantages.map((adv, i) => (
              <div key={i} className="flex items-start gap-3 p-4 bg-white rounded-lg border border-slate-100">
                <div className="w-6 h-6 rounded-full bg-green-500 text-white flex items-center justify-center shrink-0 mt-0.5">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <span className="text-slate-700">{adv}</span>
              </div>
            ))}
          </div>
          
          <h3 className="text-2xl font-bold text-slate-900 mt-12 mb-6">{t('common.thingsToConsider')}</h3>
          <div className="grid md:grid-cols-2 gap-4">
            {Array.isArray(disadvantages) && disadvantages.map((dis, i) => (
              <div key={i} className="flex items-start gap-3 p-4 bg-amber-50 rounded-lg border border-amber-100">
                <div className="w-6 h-6 rounded-full bg-amber-500 text-white flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold">!</div>
                <span className="text-slate-700">{dis}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recovery */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-slate-900 mb-8">Recovery from weight loss surgery</h2>
          
          <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
            <p>
              The first few weeks after the surgery you will only consume liquid and soft food to help your stomach go through transition. After these few weeks, you can start eating more solid food slowly.
            </p>
            <p>
              However, to come up with the most pleasant result you should follow a healthy diet that helps you lose weight because the surgery alone will not accomplish that for you. Thus, it is very important to follow the diet program and the instruction of your doctor and never skip any detail even if it's small.
            </p>
          </div>
        </div>
      </section>

      {/* Costs */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-slate-900 mb-8">Costs of weight loss surgery</h2>
          
          <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
            <p>
              Well, the costs differ from a hospital to another one and from a country to another one but in general the costs of gastric balloon surgery is not very high. In addition, most insurance companies cover the costs if it is proved that you need the surgery. Still, it is better to check this information with the insurance company you work with.
            </p>
            <p>
              In the end, always remember that gastric balloon surgery or any other type of weight loss surgery should be your last option and only done after you attempt to lose weight by following traditional ways like diets and daily exercises. Also, it is very important to share all of your health information with the surgeon including your medical history report before starting the operation to avoid any problems whether during the surgery or the recovery process.
            </p>
          </div>
        </div>
      </section>

      {/* Related Treatments */}
      <section className="py-16 bg-slate-100">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-slate-900 mb-8 text-center">Explore Other Weight Loss Options</h2>
          <div className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            <Link href="/sleeve-gastrectomy">
              <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow text-center cursor-pointer">
                <h3 className="font-bold text-primary mb-2">Gastric Sleeve</h3>
                <p className="text-sm text-slate-600">Most popular option</p>
              </div>
            </Link>
            <Link href="/mini-gastric-bypass">
              <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow text-center cursor-pointer">
                <h3 className="font-bold text-primary mb-2">Gastric Bypass</h3>
                <p className="text-sm text-slate-600">70-85% excess weight loss</p>
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
          <h2 className="text-3xl font-bold mb-6">Interested in Gastric Balloon?</h2>
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            Contact us today for a free consultation and learn if gastric balloon is the right option for your weight loss journey.
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

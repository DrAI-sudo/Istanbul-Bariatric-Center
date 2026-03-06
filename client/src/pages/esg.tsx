import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";
import { useTranslation } from "react-i18next";
import { SEO, JsonLd, structuredData } from "@/components/seo";
import { SummarizeWithAI } from "@/components/summarize-with-ai";

const esgFaqs = [
  {
    question: "What is Endoscopic Sleeve Gastroplasty (ESG)?",
    answer: "Endoscopic Sleeve Gastroplasty (ESG) is a minimally invasive, non-surgical weight loss procedure that reduces the size of your stomach by up to 70-80% using an endoscopic suturing device inserted through the mouth. No incisions are required."
  },
  {
    question: "How much does ESG cost in Turkey?",
    answer: "ESG in Turkey costs significantly less than in the UK, US, or Europe, typically ranging from £3,500-£5,500, including hospital stay, medical team, and aftercare. This is about 50-70% less than Western prices."
  },
  {
    question: "What is the recovery time after ESG?",
    answer: "Most patients can go home the same day or within 24 hours. Recovery is quick with most people returning to normal activities within 3-5 days. Full dietary progression takes about 6 weeks."
  },
  {
    question: "How much weight can I lose with ESG?",
    answer: "Patients typically lose 15-20% of their total body weight over 12-18 months. Those with BMI 38+ can expect to lose around 20kg in 6 months and 25kg in 12 months."
  },
  {
    question: "Who is a good candidate for ESG in Turkey?",
    answer: "ESG is ideal for patients with BMI 30-40 who haven't succeeded with diet and exercise alone, those who want to avoid surgery, or those who don't qualify for traditional bariatric surgery."
  },
  {
    question: "Is ESG safer than gastric sleeve surgery?",
    answer: "Yes, ESG has a lower risk profile than surgical procedures as it requires no incisions, has shorter procedure time (~90 minutes), and is reversible. It has shown a highly strong safety record in clinical studies."
  }
];

const healthBenefits = [
  "Diabetes (Type 2)",
  "Cardiac diseases and strokes",
  "High blood pressure (Hypertension)",
  "Gastroesophageal Reflux Disorder",
  "Sleeping Apnea disorder"
];

const weightLossResults = [
  { bmi: "BMI 38+", result: "~20 kg in 6 months, ~25 kg in 12 months" },
  { bmi: "BMI 45+", result: "~33 kg in first 6 months" },
  { bmi: "Overall", result: "15-20% weight loss over 12-18 months" }
];

export default function ESG() {
  const { t } = useTranslation('treatments');
  
  const esgProcedureSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalProcedure",
    "name": "Endoscopic Sleeve Gastroplasty (ESG)",
    "alternateName": ["ESG", "Apollo ESG", "Endoscopic Stomach Reduction", "Non-Surgical Gastric Sleeve"],
    "description": "Endoscopic Sleeve Gastroplasty is a minimally invasive, non-surgical weight loss procedure that reduces stomach size by 70-80% using an endoscopic suturing device. No incisions required.",
    "procedureType": "Endoscopic",
    "bodyLocation": "Stomach",
    "preparation": "Pre-operative consultation, blood tests, and fasting before procedure",
    "followup": "Liquid diet for 2 weeks, semi-solid for 4 weeks, then transition to healthy eating with regular checkups",
    "howPerformed": "An endoscopic suturing device (Apollo Overstitch) is inserted through the mouth to place sutures in the stomach, reducing its size without any incisions",
    "status": "https://schema.org/ActiveActionStatus",
    "recognizingAuthority": {
      "@type": "Organization",
      "name": "American Society for Metabolic and Bariatric Surgery"
    },
    "relevantSpecialty": {
      "@type": "MedicalSpecialty",
      "name": "Bariatric Surgery"
    }
  };
  
  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="Endoscopic Sleeve Gastroplasty Turkey | ESG Istanbul | Non-Surgical Weight Loss"
        description="Get Endoscopic Sleeve Gastroplasty (ESG) in Turkey with Apollo Overstitch technology. Non-surgical, incisionless stomach reduction. 15-20% weight loss, same-day discharge, from £3,500. Expert bariatric team in Istanbul."
        keywords="endoscopic sleeve gastroplasty turkey, esg turkey, endoscopic sleeve gastroplasty istanbul, apollo esg turkey, non-surgical weight loss turkey, stomach reduction without surgery, endoscopic bariatric procedure turkey, esg cost turkey, incisionless weight loss, apollo overstitch turkey, esg weight loss, endoscopic gastroplasty price"
        url="/esg"
      />
      <JsonLd data={esgProcedureSchema} />
      <JsonLd data={structuredData.createFAQ(esgFaqs)} />
      <JsonLd data={structuredData.createBreadcrumb([
        { name: "Home", url: "/" },
        { name: "Treatments", url: "/treatments" },
        { name: "Endoscopic Sleeve Gastroplasty", url: "/esg" }
      ])} />
      <Navbar />
      
      {/* Hero Header */}
      <section className="bg-slate-900 text-white pt-40 pb-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">{t('esg.heroTitle')}</h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            {t('esg.heroSubtitle')}
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
                Apollo Endoscopic Sleeve Gastroplasty (ESG) is a promising advancement in the treatment of obesity that offers an obese person a great chance of having a significant weight reduction in a short period.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed">
                <strong>Apollo Endoscopic sleeve gastroplasty</strong> is considered as a promising form of weight reduction treatment. Its biggest appeal is that patients benefit from a reduced risk level and quicker recovery period since it is a <strong>non-surgical and incisionless procedure</strong> of weight-loss.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed">
                Endoscopic sleeve gastroplasty, utilizing an endoscopic suture system (Apollo), decreases the size of the stomach without the need for surgery. If the person is severely overweight (Over 30 on BMI) and can't drop weight with a proper diet and exercise program, this treatment may be a good choice.
              </p>
              <Button 
                className="bg-primary hover:bg-primary/90 h-12 px-8"
                onClick={() => window.open('https://wa.me/447491068686', '_blank')}
              >
                {t('common.bookConsultation')}
              </Button>
            </div>
            <div className="flex justify-center">
              <img 
                src="/esg-procedure-cdn.webp" 
                alt="Apollo Endoscopic Gastroplasty ESG Procedure" 
                className="rounded-2xl shadow-xl max-w-md w-full"
                width="400"
                height="400"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Animation Video Section */}
      <section className="py-16 bg-slate-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">Apollo Endosleeve (ESG) Animation</h2>
            <div className="aspect-video rounded-2xl overflow-hidden shadow-2xl">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/z_NcxpUfPG4"
                title="Apollo ESG Endoscopic Gastroplasty Animation"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </section>

      {/* How Does ESG Help */}
      <section className="py-20 bg-blue-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-slate-900 mb-8">How Does Endoscopic Sleeve Gastroplasty Help?</h2>
          
          <p className="text-lg text-slate-600 mb-8">
            Endoscopic sleeve gastroplasty is done to help reduce overweight and prevent the chance of having health issues related to extra weight and obesity, such as:
          </p>

          <div className="grid md:grid-cols-2 gap-4">
            {healthBenefits.map((benefit, i) => (
              <div key={i} className="flex items-center gap-4 p-5 bg-white rounded-xl shadow-sm border border-slate-100">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-5 h-5 text-primary" />
                </div>
                <p className="text-slate-700 font-medium">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who Is Eligible */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-slate-900 mb-8">Who Is Eligible For Endoscopic Sleeve Gastroplasty?</h2>
          
          <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
            <p>
              Generally, endoscopic sleeve gastroplasty is an alternative form of treatment for some of the bariatric procedures and for individuals who are not candidates for other bariatric surgery types. This procedure is applicable and suitable to those whose <strong>BMI is 30 or higher</strong>, or others who have not been responsive with just diet and exercises.
            </p>
            <p>
              It should be known that Apollo Endoscopic sleeve gastroplasty isn't necessary right for all people that are morbidly obese. Before anyone tries to undergo such a surgery, a full health checkup and test must be done by a specialized bariatric doctor in order to make sure that person is the right candidate for the surgery.
            </p>
            <div className="p-6 bg-amber-50 rounded-xl border border-amber-100">
              <p className="text-slate-700">
                <strong>Important:</strong> Surgery itself won't help to reduce weight as expected without applying a healthy supervised nutrition plan, performing daily exercises, and engaging in continuing counselling.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How Does It Work */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-slate-900 mb-8">What Is Endoscopic Sleeve Gastroplasty And How Does It Work?</h2>
          
          <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
            <p>
              The ESG surgery is conducted by a system called <strong>"Apollo Overstitch"</strong>. This is a device that is inserted in the stomach from the mouth that helps one to insert a variety of sutures (stitches) within the stomach to greatly decrease its size by up to <strong>70-80%</strong>.
            </p>
            <p>
              The sutures modify the stomach's form, making it shaped like a tube, which mimics the sleeve gastrectomy. The surgery is conducted under general anesthesia in order to remove any discomfort that might happen.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 my-10">
              <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-100 text-center">
                <div className="text-3xl font-bold text-primary mb-2">~90</div>
                <p className="text-slate-600">Minutes Procedure</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-100 text-center">
                <div className="text-3xl font-bold text-primary mb-2">Same Day</div>
                <p className="text-slate-600">Go Home</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-100 text-center">
                <div className="text-3xl font-bold text-primary mb-2">No</div>
                <p className="text-slate-600">Incisions Required</p>
              </div>
            </div>
            
            <p>
              The surgery requires approximately 90 minutes and patients in general can go home at the same day of surgery. In some cases they might stay for one or two days under supervision of the medical staff.
            </p>
            <p>
              Unlike other bariatric surgeries, in order to reach the abdominal cavity, <strong>there is no need to make any incisions</strong>, thereby reducing the harm and ensuring a quick recovery period.
            </p>
          </div>
        </div>
      </section>

      {/* Risks */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-slate-900 mb-8">Are There Any Risks Or Side Effects?</h2>
          
          <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
            <p>
              Endoscopic Sleeve Gastroplasty procedure demonstrated a <strong>highly strong safety record</strong> in all cases. After the treatment, pain and nausea can persist for many days. Typically, these conditions can be treated with pain and nausea medication.
            </p>
            <p>
              In general, <strong>most patients felt better after two days</strong> of surgery.
            </p>
          </div>
        </div>
      </section>

      {/* Nutrition Advice */}
      <section className="py-20 bg-green-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-slate-900 mb-8">Nutrition Advice After Apollo ESG</h2>
          
          <div className="space-y-4">
            <div className="flex items-start gap-4 p-5 bg-white rounded-xl shadow-sm border border-green-100">
              <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center shrink-0 font-bold text-green-700">1</div>
              <div>
                <h4 className="font-bold text-slate-900">First 8 Hours</h4>
                <p className="text-slate-600">No food allowed after the procedure</p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-5 bg-white rounded-xl shadow-sm border border-green-100">
              <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center shrink-0 font-bold text-green-700">2</div>
              <div>
                <h4 className="font-bold text-slate-900">First 2 Weeks</h4>
                <p className="text-slate-600">Only liquids allowed</p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-5 bg-white rounded-xl shadow-sm border border-green-100">
              <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center shrink-0 font-bold text-green-700">3</div>
              <div>
                <h4 className="font-bold text-slate-900">Weeks 3-6</h4>
                <p className="text-slate-600">Semi-liquid foods for four weeks</p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-5 bg-white rounded-xl shadow-sm border border-green-100">
              <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center shrink-0 font-bold text-green-700">4</div>
              <div>
                <h4 className="font-bold text-slate-900">After 6 Weeks</h4>
                <p className="text-slate-600">Transition to healthy diet with regular checkups</p>
              </div>
            </div>
          </div>
          
          <p className="text-slate-600 mt-8">
            There will be a medical and nutrition checkup on a weekly or monthly basis and all dietary instructions will be provided and privately tailored.
          </p>
        </div>
      </section>

      {/* Weight Loss Results */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-slate-900 mb-8">How Much Weight Loss Can Be Achieved?</h2>
          
          <p className="text-lg text-slate-600 mb-8">
            Endoscopic sleeve gastroplasty led to a significant weight reduction in many cases. But the surgery itself won't be enough if patients would not obey to a healthy diet and lifestyle and follow nutritionists' instructions.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-10">
            {weightLossResults.map((result, i) => (
              <div key={i} className="bg-primary text-white rounded-xl p-6 text-center">
                <div className="text-xl font-bold mb-2">{result.bmi}</div>
                <p className="text-white/90">{result.result}</p>
              </div>
            ))}
          </div>

          <div className="p-6 bg-blue-50 rounded-xl border border-blue-100">
            <p className="text-slate-700">
              Studies also showed an improvement on many health conditions related to obesity such as heart disease or stroke, high blood pressure, and diabetes (Type 2). In summary, Apollo Endoscopic sleeve gastroplasty leads to a significant weight loss of about <strong>15-20% over a 12-18 month period</strong> and it helps to prevent the development of many health problems related to obesity.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-slate-900 mb-4 text-center">Frequently Asked Questions About ESG in Turkey</h2>
          <p className="text-lg text-slate-600 text-center mb-12">Everything you need to know about Endoscopic Sleeve Gastroplasty</p>
          
          <div className="space-y-4">
            {esgFaqs.map((faq, i) => (
              <div key={i} className="bg-white rounded-xl p-6 shadow-sm border border-slate-100">
                <h3 className="text-lg font-bold text-slate-900 mb-3">{faq.question}</h3>
                <p className="text-slate-600 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Get Endoscopic Sleeve Gastroplasty in Turkey</h2>
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            Contact us today for a free consultation to learn if Apollo Endoscopic Sleeve Gastroplasty is right for you.
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

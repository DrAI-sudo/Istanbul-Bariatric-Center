import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";
import { useTranslation } from "react-i18next";

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
  
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Header */}
      <section className="bg-slate-900 text-white pt-40 pb-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">{t('esg.heroTitle')}</h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            {t('esg.heroSubtitle')}
          </p>
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
                src="https://caf0fec0.delivery.rocketcdn.me/wp-content/uploads/2023/03/IMG_4450-1024x941.jpeg" 
                alt="Apollo Endoscopic Gastroplasty ESG" 
                className="rounded-2xl shadow-xl max-w-md w-full"
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

      {/* CTA */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Interested in Apollo ESG?</h2>
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

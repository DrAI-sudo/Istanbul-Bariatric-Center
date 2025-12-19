import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Check, ArrowRight, CheckCircle2 } from "lucide-react";
import { useTranslation } from "react-i18next";
import { SEO, JsonLd, structuredData } from "@/components/seo";

const procedures = [
  {
    title: "Abdominoplasty (Tummy Tuck)",
    desc: "Removes excess skin and fat from the abdomen while tightening abdominal muscles for a flatter, more toned appearance.",
    image: "/tummy-tuck.png"
  },
  {
    title: "Arm Lift (Brachioplasty)",
    desc: "Removes loose, sagging skin from the upper arms to create a more contoured and toned appearance.",
    image: "/arm-lift.png"
  },
  {
    title: "Thigh Lift",
    desc: "Reshapes the thighs by reducing excess skin and fat, resulting in smoother skin and better-proportioned contours.",
    image: "/thigh-lift.png"
  },
  {
    title: "Body Lift (Belt Lipectomy)",
    desc: "A comprehensive procedure that addresses the abdomen, buttocks, and thighs in one surgery for dramatic body contouring.",
    image: "/body-lift.png"
  },
  {
    title: "Breast Lift/Reduction",
    desc: "Restores breast shape and position after significant weight loss, with options for reduction or augmentation.",
    image: "/breast-lift.png"
  },
  {
    title: "Face and Neck Lift",
    desc: "Addresses sagging facial skin and neck bands that can occur after significant weight loss.",
    image: "/face-neck-lift.png"
  }
];

const faqs = [
  {
    question: "When can I have body contouring surgery after bariatric surgery?",
    answer: "Most surgeons recommend waiting 12-18 months after bariatric surgery before undergoing body contouring procedures. This allows your weight to stabilize and gives your body time to adjust. Your weight should be stable for at least 3-6 months before considering cosmetic surgery."
  },
  {
    question: "Is post-bariatric surgery covered by insurance?",
    answer: "Some procedures may be partially covered if they are deemed medically necessary. For example, a panniculectomy (removal of hanging abdominal skin) may be covered if it causes hygiene issues, skin infections, or interferes with daily activities. Purely cosmetic procedures are typically not covered."
  },
  {
    question: "How long is the recovery from body contouring surgery?",
    answer: "Recovery varies depending on the procedure. Most patients can return to light activities within 2-4 weeks, but full recovery may take 6-8 weeks or longer. More extensive procedures like a full body lift may require several months for complete healing."
  },
  {
    question: "Can multiple procedures be done at once?",
    answer: "Yes, many surgeons offer combined procedures to reduce overall recovery time and cost. However, this depends on your overall health and the extent of the surgeries. Your surgeon will advise on the safest approach for your situation."
  },
  {
    question: "Will there be visible scars?",
    answer: "All surgical procedures result in some scarring. However, experienced surgeons place incisions in areas that can be hidden by clothing or natural body contours. Scars typically fade significantly over 12-18 months and can be further improved with proper scar care."
  },
  {
    question: "What are the risks of post-bariatric body contouring?",
    answer: "Risks include bleeding, infection, poor wound healing, seroma (fluid accumulation), asymmetry, and anesthesia-related complications. Former bariatric patients may have additional risks due to nutritional deficiencies, so proper preparation and vitamin supplementation are important."
  },
  {
    question: "How much weight will I lose from body contouring surgery?",
    answer: "Body contouring is not a weight loss procedure. While you may lose some weight from the removal of excess skin and fat (typically 2-10 kg depending on the procedure), the primary goal is to improve body shape and contour rather than reduce weight."
  },
  {
    question: "Why choose Turkey for post-bariatric surgery?",
    answer: "Turkey offers world-class plastic surgeons, modern hospital facilities, and significantly lower costs compared to Western countries - often 50-70% less. Combined with the opportunity to recover in beautiful surroundings, it's an attractive option for medical tourism."
  }
];

export default function PostBariatricSurgery() {
  const { t } = useTranslation('treatments');
  
  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="Post Bariatric Body Contouring Surgery in Turkey"
        description="Post bariatric body contouring surgery in Istanbul. Tummy tuck, arm lift, thigh lift, body lift after weight loss. Expert plastic surgeons."
        keywords="post bariatric surgery turkey, body contouring istanbul, tummy tuck after weight loss, plastic surgery after bariatric"
        url="/post-bariatric-surgery"
      />
      <JsonLd data={structuredData.createFAQ(faqs)} />
      <Navbar />
      
      <section className="bg-slate-900 text-white pt-40 pb-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">{t('postBariatric.heroTitle')}</h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            {t('postBariatric.heroSubtitle')}
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-slate-900">Understanding Post-Bariatric Body Contouring</h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                After significant weight loss following bariatric surgery, many patients are left with excess, sagging skin that doesn't conform to their new body shape. While losing weight is a tremendous achievement, this loose skin can cause physical discomfort, hygiene issues, and psychological distress that prevents patients from fully enjoying their transformation.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed">
                Post-bariatric body contouring surgery, also known as body sculpting or skin removal surgery, is a collection of plastic surgery procedures designed to remove excess skin and reshape the body after massive weight loss. These procedures can dramatically improve body contour, eliminate skin irritation, and help patients achieve the body they've worked so hard for.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed">
                At Istanbul Bariatric Center, we work with leading plastic surgeons who specialize in post-bariatric body contouring. Our surgeons understand the unique needs of weight loss patients and use advanced techniques to minimize scarring while maximizing results.
              </p>
            </div>
            <div className="bg-slate-50 rounded-2xl p-8 border border-slate-100">
              <img 
                src="/post-bariatric-surgery.png" 
                alt="Post-bariatric body contouring illustration showing abdominoplasty procedure"
                className="w-full rounded-lg shadow-md"
                loading="lazy"
              />
              <p className="text-xs text-slate-500 mt-4 text-center italic">
                Illustration showing abdominoplasty and arm lift procedures
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Why Consider Post-Bariatric Surgery?</h2>
            <p className="text-lg text-slate-600">
              Excess skin after weight loss is more than a cosmetic concern - it can significantly impact your quality of life.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                <CheckCircle2 className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Physical Comfort</h3>
              <p className="text-slate-600">Eliminate skin chafing, rashes, and infections that commonly occur in skin folds. Improve mobility and make exercise more comfortable.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                <CheckCircle2 className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Improved Hygiene</h3>
              <p className="text-slate-600">Excess skin folds can trap moisture and bacteria, leading to persistent odor and skin infections that are difficult to manage.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                <CheckCircle2 className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Better Fitting Clothes</h3>
              <p className="text-slate-600">Finally wear the clothes you've always wanted. Body contouring helps your clothes fit properly and look the way they should.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                <CheckCircle2 className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Psychological Benefits</h3>
              <p className="text-slate-600">Boost your self-confidence and body image. Many patients report significant improvements in mental health after body contouring.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                <CheckCircle2 className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Complete Your Journey</h3>
              <p className="text-slate-600">Body contouring is the final step in your weight loss journey, helping you achieve the body that reflects your hard work and dedication.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                <CheckCircle2 className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Long-Lasting Results</h3>
              <p className="text-slate-600">Unlike non-surgical treatments, surgical body contouring provides permanent results that will last as long as you maintain a stable weight.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Common Post-Bariatric Procedures</h2>
            <p className="text-lg text-slate-600">
              Our expert plastic surgeons offer a full range of body contouring procedures tailored to your specific needs.
            </p>
          </div>
          
          <div className="space-y-12">
            {procedures.map((proc, i) => (
              <div key={i} className="grid lg:grid-cols-2 gap-12 items-center">
                <div className={`space-y-4 ${i % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <h3 className="text-2xl font-bold text-slate-900">{proc.title}</h3>
                  <p className="text-lg text-slate-600">{proc.desc}</p>
                  {proc.title === "Abdominoplasty (Tummy Tuck)" && (
                    <div className="space-y-3 mt-4">
                      <p className="text-slate-600">
                        <strong>The procedure:</strong> Abdominoplasty is the most commonly requested post-bariatric procedure. During surgery, the surgeon makes an incision from hip to hip, removes excess skin and fat, repairs separated abdominal muscles (diastasis recti), and repositions the belly button. The result is a flatter, more toned midsection.
                      </p>
                      <p className="text-slate-600">
                        <strong>Extended abdominoplasty:</strong> For patients with excess skin extending around to the sides and back, an extended tummy tuck addresses these areas as well, providing more comprehensive contouring.
                      </p>
                      <p className="text-slate-600">
                        <strong>Recovery:</strong> Most patients take 2-4 weeks off work and can resume normal activities within 6-8 weeks. Compression garments are worn for several weeks to support healing.
                      </p>
                    </div>
                  )}
                  {proc.title === "Arm Lift (Brachioplasty)" && (
                    <div className="space-y-3 mt-4">
                      <p className="text-slate-600">
                        <strong>The procedure:</strong> An arm lift removes the loose, hanging skin often called "bat wings" that develops on the upper arms after weight loss. The surgeon makes an incision from the armpit to the elbow, removes excess skin and fat, and tightens the underlying tissue.
                      </p>
                      <p className="text-slate-600">
                        <strong>Minimal incision techniques:</strong> For patients with less severe skin laxity, shorter incision techniques may be available, leaving scars only in the armpit area.
                      </p>
                      <p className="text-slate-600">
                        <strong>Recovery:</strong> Patients typically return to work within 1-2 weeks. Heavy lifting should be avoided for 4-6 weeks to allow proper healing.
                      </p>
                    </div>
                  )}
                  {proc.title === "Thigh Lift" && (
                    <div className="space-y-3 mt-4">
                      <p className="text-slate-600">
                        <strong>The procedure:</strong> A thigh lift addresses excess skin on the inner and outer thighs. The incision is typically placed in the groin area extending down the inner thigh, allowing the surgeon to remove excess skin and reshape the thigh contour.
                      </p>
                      <p className="text-slate-600">
                        <strong>Types:</strong> Inner thigh lift focuses on the inner thigh area, while an outer thigh lift (part of a lower body lift) addresses the outer thigh and hip area. Some patients may benefit from both.
                      </p>
                      <p className="text-slate-600">
                        <strong>Recovery:</strong> Walking is encouraged soon after surgery to prevent blood clots, but strenuous activity should be avoided for 6-8 weeks.
                      </p>
                    </div>
                  )}
                  {proc.title === "Body Lift (Belt Lipectomy)" && (
                    <div className="space-y-3 mt-4">
                      <p className="text-slate-600">
                        <strong>The procedure:</strong> A body lift, also called a belt lipectomy or circumferential abdominoplasty, is the most comprehensive body contouring procedure. It addresses the entire lower trunk - abdomen, flanks, hips, buttocks, and outer thighs - in one surgery.
                      </p>
                      <p className="text-slate-600">
                        <strong>Ideal candidates:</strong> This procedure is best suited for patients with significant excess skin around the entire lower body. It provides the most dramatic results but requires longer surgery and recovery time.
                      </p>
                      <p className="text-slate-600">
                        <strong>Recovery:</strong> Hospital stay of 2-3 nights is typical. Full recovery takes 2-3 months, with most patients returning to work after 4-6 weeks.
                      </p>
                    </div>
                  )}
                  {proc.title === "Breast Lift/Reduction" && (
                    <div className="space-y-3 mt-4">
                      <p className="text-slate-600">
                        <strong>For women:</strong> Weight loss often causes breasts to lose volume and sag. A breast lift (mastopexy) raises and reshapes the breasts, while some women may choose to add implants for additional volume. Breast reduction may be appropriate for women with overly large breasts.
                      </p>
                      <p className="text-slate-600">
                        <strong>For men:</strong> Gynecomastia surgery addresses excess breast tissue that may remain after weight loss, creating a more masculine chest contour.
                      </p>
                      <p className="text-slate-600">
                        <strong>Recovery:</strong> Most patients return to work within 1-2 weeks. A supportive bra should be worn for several weeks during healing.
                      </p>
                    </div>
                  )}
                  {proc.title === "Face and Neck Lift" && (
                    <div className="space-y-3 mt-4">
                      <p className="text-slate-600">
                        <strong>The procedure:</strong> Significant weight loss can cause facial skin to sag, creating jowls and a "turkey neck" appearance. A face and neck lift tightens facial muscles and removes excess skin for a more youthful appearance.
                      </p>
                      <p className="text-slate-600">
                        <strong>Additional procedures:</strong> Some patients may also benefit from eyelid surgery (blepharoplasty) or a brow lift to complete their facial rejuvenation.
                      </p>
                      <p className="text-slate-600">
                        <strong>Recovery:</strong> Bruising and swelling typically resolve within 2-3 weeks. Most patients feel comfortable in public after 2 weeks.
                      </p>
                    </div>
                  )}
                </div>
                <div className={`bg-slate-50 rounded-2xl p-8 border border-slate-100 min-h-[300px] flex items-center justify-center ${i % 2 === 1 ? 'lg:order-1' : ''}`}>
                  {proc.image ? (
                    <img src={proc.image} alt={proc.title} className="max-w-full max-h-[400px] object-contain rounded-lg" loading="lazy" />
                  ) : (
                    <div className="text-center">
                      <span className="text-6xl opacity-30">🩺</span>
                      <p className="text-slate-400 mt-4">{proc.title}</p>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">Preparing for Your Procedure</h2>
            
            <div className="space-y-6 text-lg text-slate-600">
              <p>
                Proper preparation is essential for successful body contouring surgery. Here's what you need to know before your procedure:
              </p>
              
              <div className="bg-white p-6 rounded-xl">
                <h3 className="text-xl font-bold text-slate-900 mb-3">Weight Stability</h3>
                <p>Your weight should be stable for at least 3-6 months before surgery. Significant weight fluctuations after body contouring can affect your results. Most surgeons recommend waiting 12-18 months after bariatric surgery.</p>
              </div>
              
              <div className="bg-white p-6 rounded-xl">
                <h3 className="text-xl font-bold text-slate-900 mb-3">Nutritional Status</h3>
                <p>Bariatric patients may have nutritional deficiencies that can affect healing. Your surgeon will check your protein levels, vitamin D, iron, and other markers. You may need to optimize your nutrition before surgery.</p>
              </div>
              
              <div className="bg-white p-6 rounded-xl">
                <h3 className="text-xl font-bold text-slate-900 mb-3">Stop Smoking</h3>
                <p>Smoking significantly increases the risk of complications including poor wound healing, infection, and skin necrosis. You must stop smoking at least 4-6 weeks before and after surgery.</p>
              </div>
              
              <div className="bg-white p-6 rounded-xl">
                <h3 className="text-xl font-bold text-slate-900 mb-3">Medical Clearance</h3>
                <p>You'll need medical clearance from your primary care physician and potentially your bariatric surgeon. Pre-operative testing may include blood work, EKG, and chest X-ray.</p>
              </div>
              
              <div className="bg-white p-6 rounded-xl">
                <h3 className="text-xl font-bold text-slate-900 mb-3">Realistic Expectations</h3>
                <p>While body contouring can dramatically improve your appearance, it's important to have realistic expectations. All surgical procedures result in scarring, and results may vary based on your skin quality and healing ability.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">{t('common.faqs')}</h2>
            
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, i) => (
                <AccordionItem key={i} value={`faq-${i}`} className="border border-slate-200 rounded-xl px-6 bg-white">
                  <AccordionTrigger className="text-lg font-semibold text-slate-900 hover:no-underline py-6">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-slate-600 pb-6">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Complete Your Transformation?</h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto mb-8">
            Contact us today for a free consultation with our expert plastic surgeons. We'll help you create a personalized treatment plan to achieve your body goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-white text-primary hover:bg-white/90 font-bold px-8"
              onClick={() => window.open('https://wa.me/447491068686', '_blank')}
            >
              {t('common.bookConsultation')} <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

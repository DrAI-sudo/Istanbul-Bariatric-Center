import { useState } from "react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { SEO, JsonLd, structuredData } from "@/components/seo";
import {
  CheckCircle2, ChevronDown, ChevronUp, Plane, Hotel, Stethoscope, ShieldCheck,
  Clock, DollarSign, HeartPulse, ArrowRight, Star, MapPin, Phone, MessageCircle,
  Award, Calculator, Users, TrendingDown, Utensils, Activity, BarChart3,
} from "lucide-react";
import { Link } from "wouter";

const usFaqs = [
  {
    question: "Is ESG covered by US health insurance?",
    answer: "Endoscopic Sleeve Gastroplasty is generally not covered by most US insurance plans, as it is still considered investigational by many insurers. Out-of-pocket costs at US clinics range from $15,000 to $25,000 or more. Istanbul Bariatric Center offers the procedure at $7,500 USD (procedure only) or $8,500 USD all-inclusive — including JCI-accredited hospital, hotel, VIP transfers, and 12-month dietitian support. Some patients use HSA/FSA funds to cover the cost.",
  },
  {
    question: "How long do I need to stay in Istanbul?",
    answer: "Most American patients stay in Istanbul for 3-4 days. You arrive the day before your procedure, the ESG is performed the following day, you rest at the hotel on day three, and fly home on day four. Direct flights are available from major US hubs: New York JFK (~10 hours), Chicago O'Hare (~11 hours), Los Angeles LAX (~13 hours), Houston IAH (~12 hours), and Miami MIA (~11 hours).",
  },
  {
    question: "Is the procedure painful?",
    answer: "ESG is performed under general anesthesia — you won't feel anything during the procedure. After waking, you may experience mild discomfort, nausea, or a feeling of fullness. These symptoms typically resolve within 1-3 days and are well managed with medication provided by our team.",
  },
  {
    question: "Are the results evidence-based and long-lasting?",
    answer: "Yes. Published clinical studies show that ESG patients achieve 15-20% total body weight loss within 12-18 months, with durable results at 2-5 year follow-up when combined with lifestyle modifications. ESG creates a physical volume reduction in your stomach — a structural change. Our 12-month dietitian program with a qualified nutritionist is included in every package to support long-term success.",
  },
  {
    question: "How does ESG compare to Ozempic or Wegovy?",
    answer: "GLP-1 receptor agonists like Ozempic (semaglutide) and Wegovy can be effective initially, but studies show significant weight regain after discontinuation — up to two-thirds of lost weight within one year of stopping. Monthly costs of $1,000-$1,500 without insurance add up to $12,000-$18,000 per year. ESG offers a one-time structural solution without ongoing prescription costs.",
  },
  {
    question: "What BMI qualifies for ESG?",
    answer: "ESG is generally recommended for patients with a BMI between 30 and 40. It's particularly suitable for individuals who haven't achieved lasting results with diet, exercise, or medications, who prefer to avoid major surgery, or who want a minimally invasive approach with rapid recovery. Patients with BMI over 40 may be better candidates for surgical options like sleeve gastrectomy.",
  },
  {
    question: "Is it safe to have medical treatment outside the US?",
    answer: "Istanbul Bariatric Center operates at Liv Hospital, which holds JCI (Joint Commission International) accreditation — the same accreditation body that certifies leading US hospitals like Cleveland Clinic and Mayo Clinic. Dr. Murat Üstün has performed thousands of ESG procedures with excellent safety outcomes and complication rates comparable to or better than published US data.",
  },
  {
    question: "What does the all-inclusive package include?",
    answer: "Our ESG package at $8,500 USD includes: the complete procedure, hospital stay at a JCI-accredited facility, pre-operative tests (comprehensive blood panel, ECG, ultrasound), VIP airport transfers, 4-star hotel accommodation, post-operative medications, 12-month dietitian support via telemedicine, and ongoing follow-up consultations. There are no hidden costs or surprise bills.",
  },
];

const journeySteps = [
  { step: 1, title: "Free online consultation", desc: "Contact us via WhatsApp or our website. Our medical team reviews your BMI, health history, labs, and goals to determine ESG eligibility — typically within 24-48 hours.", icon: MessageCircle },
  { step: 2, title: "Travel to Istanbul", desc: "Choose your dates — we coordinate everything. Direct flights from NYC (~10h), Chicago (~11h), LA (~13h), Houston (~12h), Miami (~11h). Turkish Airlines offers daily nonstop service from multiple US cities.", icon: Plane },
  { step: 3, title: "VIP transfer & hotel", desc: "A personal driver meets you at Istanbul Airport (IST) and takes you to your 4-star hotel. Comfortable accommodation with international amenities throughout your stay.", icon: Hotel },
  { step: 4, title: "Pre-operative assessments", desc: "Comprehensive blood panel, ECG, abdominal ultrasound, and health screening at the hospital. In-person consultation with Dr. Murat Üstün to finalize your treatment plan.", icon: Stethoscope },
  { step: 5, title: "ESG procedure", desc: "ESG is performed under general anesthesia at Liv Hospital (JCI-accredited). Duration: 60-90 minutes. No incisions, no scars, no tissue removal.", icon: HeartPulse },
  { step: 6, title: "Recovery & travel home", desc: "Rest at your hotel with continuous medical support. Most patients fly home 2-3 days after the procedure. Telemedicine follow-up begins within one week of returning home.", icon: Plane },
];

const comparisonMeds = [
  { factor: "Long-term effectiveness", meds: "Limited — studies show 2/3 of weight returns within 1 year of stopping", esg: "Durable — permanent physical stomach reduction with lasting results at 2-5 year follow-up" },
  { factor: "Side effects", meds: "Common (nausea, diarrhea, pancreatitis risk, thyroid concerns)", esg: "Minimal (mild discomfort for 1-3 days)" },
  { factor: "Annual cost", meds: "$12,000-$18,000/year without insurance ($1,000-$1,500/month)", esg: "One-time: $8,500 USD all-inclusive" },
  { factor: "Weight regain", meds: "Significant after discontinuation", esg: "Limited with healthy lifestyle adherence" },
  { factor: "Treatment type", meds: "Weekly injections indefinitely", esg: "Single endoscopic procedure (60-90 min)" },
  { factor: "FDA status", meds: "FDA-approved", esg: "FDA-cleared device (Apollo OverStitch)" },
];

const comparisonSurgery = [
  { feature: "Procedure type", esg: "Endoscopic (through the mouth)", sleeve: "Laparoscopic surgery (4-5 incisions)" },
  { feature: "Anesthesia", esg: "General", sleeve: "General" },
  { feature: "Duration", esg: "60-90 minutes", sleeve: "~60 minutes" },
  { feature: "Hospital stay", esg: "Same day or 1 night", sleeve: "2-3 nights" },
  { feature: "Recovery time", esg: "1-3 days", sleeve: "2-4 weeks" },
  { feature: "Scarring", esg: "None", sleeve: "4-5 small scars" },
  { feature: "Weight loss", esg: "15-20% of total body weight", sleeve: "60-70% of excess weight" },
  { feature: "Reversibility", esg: "Potentially reversible", sleeve: "Permanent (stomach tissue removed)" },
  { feature: "Risk profile", esg: "Very low (<1% serious complications)", sleeve: "Low (1-3% serious complications)" },
  { feature: "US cost range", esg: "$15,000-$25,000 (US) / $8,500 (Istanbul)", sleeve: "$15,000-$35,000 (US)" },
];

const usTestimonials = [
  { name: "Jennifer R.", location: "New York, NY", text: "After spending over $15,000 on Ozempic in two years with limited lasting results, ESG was the breakthrough I needed. The quality at Liv Hospital was on par with the best NYC hospitals — but at a fraction of the cost. I've lost 42 lbs in 6 months and kept it off.", weight: "−42 lbs", time: "6 months" },
  { name: "Michael C.", location: "Houston, TX", text: "As a physician, I did extensive research before choosing Istanbul Bariatric Center. The JCI accreditation, Dr. Murat's credentials, and published outcomes convinced me. The entire experience — from the VIP transfer to the follow-up care — was first-class. I lost 48 lbs.", weight: "−48 lbs", time: "7 months" },
  { name: "Amanda K.", location: "Chicago, IL", text: "I was quoted $22,000 for ESG in Chicago with a 6-month wait. In Istanbul, I paid $8,500 all-inclusive and was treated within two weeks of my consultation. The dietitian support has been incredible — regular check-ins via video call for the full year.", weight: "−35 lbs", time: "5 months" },
];

function BMICalculator() {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [unit, setUnit] = useState<"imperial" | "metric">("imperial");
  const [bmi, setBmi] = useState<number | null>(null);
  const calculateBMI = () => {
    if (unit === "metric") {
      const h = parseFloat(height) / 100; const w = parseFloat(weight);
      if (h > 0 && w > 0) setBmi(Math.round((w / (h * h)) * 10) / 10);
    } else {
      const h = parseFloat(height); const w = parseFloat(weight);
      if (h > 0 && w > 0) setBmi(Math.round((w / (h * h) * 703) * 10) / 10);
    }
  };
  const getBMICategory = (bmi: number) => {
    if (bmi < 18.5) return { label: "Underweight", color: "text-blue-600", eligible: false };
    if (bmi < 25) return { label: "Normal Weight", color: "text-green-600", eligible: false };
    if (bmi < 30) return { label: "Overweight", color: "text-yellow-600", eligible: false };
    if (bmi < 35) return { label: "Obesity (Class I)", color: "text-orange-600", eligible: true };
    if (bmi < 40) return { label: "Obesity (Class II)", color: "text-red-500", eligible: true };
    return { label: "Severe Obesity (Class III)", color: "text-red-700", eligible: false, surgical: true };
  };
  return (
    <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-200" data-testid="bmi-calculator-us">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center"><Calculator className="w-6 h-6 text-primary" /></div>
        <div><h3 className="text-xl font-bold text-slate-900">Am I a Candidate for ESG?</h3><p className="text-sm text-slate-500">Calculate your BMI and check your eligibility</p></div>
      </div>
      <div className="flex gap-2 mb-4">
        <Button variant={unit === "imperial" ? "default" : "outline"} size="sm" onClick={() => { setUnit("imperial"); setBmi(null); setHeight(""); setWeight(""); }} data-testid="button-unit-imperial-us">Imperial (lbs/in)</Button>
        <Button variant={unit === "metric" ? "default" : "outline"} size="sm" onClick={() => { setUnit("metric"); setBmi(null); setHeight(""); setWeight(""); }} data-testid="button-unit-metric-us">Metric (kg/cm)</Button>
      </div>
      <div className="grid sm:grid-cols-2 gap-4 mb-4">
        <div><label className="block text-sm font-medium text-slate-700 mb-1">{unit === "metric" ? "Height (cm)" : "Height (inches)"}</label><input type="number" value={height} onChange={(e) => setHeight(e.target.value)} placeholder={unit === "metric" ? "e.g. 175" : "e.g. 69"} className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none" data-testid="input-height-us" /></div>
        <div><label className="block text-sm font-medium text-slate-700 mb-1">{unit === "metric" ? "Weight (kg)" : "Weight (lbs)"}</label><input type="number" value={weight} onChange={(e) => setWeight(e.target.value)} placeholder={unit === "metric" ? "e.g. 100" : "e.g. 220"} className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none" data-testid="input-weight-us" /></div>
      </div>
      <Button onClick={calculateBMI} className="w-full bg-primary hover:bg-primary/90 h-12" data-testid="button-calculate-bmi-us">Calculate BMI</Button>
      {bmi !== null && (
        <div className="mt-6 p-4 rounded-xl bg-slate-50 border border-slate-200" data-testid="bmi-result-us">
          <div className="text-center mb-3"><span className="text-4xl font-bold text-primary">{bmi}</span><p className={`text-lg font-semibold ${getBMICategory(bmi).color}`}>{getBMICategory(bmi).label}</p></div>
          {getBMICategory(bmi).eligible ? (
            <div className="bg-green-50 border border-green-200 rounded-lg p-3 text-center"><p className="text-green-800 font-medium">You may be a suitable candidate for ESG!</p><p className="text-green-600 text-sm mt-1">Contact us for a free consultation to discuss your options.</p></div>
          ) : getBMICategory(bmi).surgical ? (
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 text-center"><p className="text-blue-800 font-medium">Bariatric surgery may be more appropriate for your BMI.</p><p className="text-blue-600 text-sm mt-1"><Link href="/treatments" className="underline">View all treatment options</Link></p></div>
          ) : (
            <div className="bg-slate-100 border border-slate-200 rounded-lg p-3 text-center"><p className="text-slate-700 font-medium">ESG is typically recommended for BMI 30-40.</p><p className="text-slate-500 text-sm mt-1">Contact us to discuss your options.</p></div>
          )}
        </div>
      )}
    </div>
  );
}

function FAQAccordion({ faqs }: { faqs: typeof usFaqs }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  return (
    <div className="space-y-3" data-testid="faq-accordion-us">
      {faqs.map((faq, i) => (
        <div key={i} className={`rounded-xl border transition-all duration-200 ${openIndex === i ? "border-primary/30 bg-white shadow-md" : "border-slate-200 bg-white hover:border-slate-300"}`} data-testid={`faq-item-us-${i}`}>
          <button className="w-full flex items-center justify-between p-5 text-left" onClick={() => setOpenIndex(openIndex === i ? null : i)} data-testid={`button-faq-us-${i}`}>
            <span className="font-semibold text-slate-900 pr-4">{faq.question}</span>
            {openIndex === i ? <ChevronUp className="w-5 h-5 text-primary shrink-0" /> : <ChevronDown className="w-5 h-5 text-slate-400 shrink-0" />}
          </button>
          {openIndex === i && <div className="px-5 pb-5 text-slate-600 leading-relaxed animate-in fade-in duration-200">{faq.answer}</div>}
        </div>
      ))}
    </div>
  );
}

export default function ESGUnitedStates() {
  const usFlag = "🇺🇸";
  const trFlag = "🇹🇷";

  return (
    <div className="min-h-screen bg-white">
      <SEO title="ESG Turkey for US Patients | Minimally Invasive Weight Loss | $8,500 All-Inclusive" description="Endoscopic Sleeve Gastroplasty for American patients. Procedure $7,500 USD. All-inclusive $8,500 USD at JCI-accredited hospital. Evidence-based weight loss. Free consultation." keywords="ESG USA, weight loss without surgery, gastroplasty Turkey, Ozempic alternative, bariatric Turkey, medical tourism Istanbul, endoscopic sleeve gastroplasty US" url="/esg/us" />
      <JsonLd data={{ "@context": "https://schema.org", "@type": "MedicalProcedure", "name": "Endoscopic Sleeve Gastroplasty for American Patients", "alternateName": ["ESG USA", "ESG United States", "Weight loss without surgery USA"], "description": "Endoscopic Sleeve Gastroplasty (ESG) for American patients at Istanbul Bariatric Center. JCI-accredited hospital. Procedure $7,500 USD. All-inclusive $8,500 USD.", "procedureType": "Endoscopic", "bodyLocation": "Stomach", "relevantSpecialty": { "@type": "MedicalSpecialty", "name": "Bariatric Surgery" }, "offers": [{ "@type": "Offer", "name": "ESG Procedure Only", "price": "7500", "priceCurrency": "USD" }, { "@type": "Offer", "name": "ESG All-Inclusive Package", "price": "8500", "priceCurrency": "USD" }] }} />
      <JsonLd data={structuredData.createFAQ(usFaqs)} />
      <JsonLd data={structuredData.createBreadcrumb([{ name: "Home", url: "/" }, { name: "Treatments", url: "/treatments" }, { name: "ESG", url: "/esg" }, { name: "ESG for US Patients", url: "/esg/us" }])} />
      <Navbar />

      <section className="relative bg-slate-900 text-white pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-primary/30 opacity-90" />
        <div className="absolute inset-0 opacity-15" style={{ backgroundImage: "url('/esg-us-hero.webp')", backgroundSize: "cover", backgroundPosition: "center" }} />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center gap-3 mb-6">
              <span className="text-4xl">{usFlag}</span>
              <Badge variant="outline" className="border-white/30 text-white/90 text-sm px-4 py-1">For US Patients</Badge>
              <span className="text-4xl">{trFlag}</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight" data-testid="heading-esg-us-hero">Endoscopic Sleeve Gastroplasty (ESG) — A Minimally Invasive Alternative to Traditional Bariatric Surgery</h1>
            <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto mb-8 leading-relaxed">For Americans struggling with sustainable weight loss, ESG offers an evidence-based, minimally invasive solution — without major surgery, long recovery, or ongoing medication costs. All-inclusive from $8,500 USD at a JCI-accredited hospital.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary hover:bg-primary/90 font-bold text-lg h-14 px-8" onClick={() => window.open("https://wa.me/905324131143?text=Hi%2C%20I'm%20from%20the%20US%20and%20I'm%20interested%20in%20ESG", "_blank")} data-testid="button-hero-whatsapp-us"><Phone className="w-5 h-5 mr-2" />Free Consultation</Button>
              <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 font-bold text-lg h-14 px-8" onClick={() => document.getElementById("bmi-section-us")?.scrollIntoView({ behavior: "smooth" })} data-testid="button-hero-bmi-us"><Calculator className="w-5 h-5 mr-2" />Am I Eligible?</Button>
            </div>
            <div className="flex flex-wrap gap-6 justify-center mt-10 text-sm text-slate-400">
              <span className="flex items-center gap-2"><ShieldCheck className="w-4 h-4" /> JCI-Accredited Hospital</span>
              <span className="flex items-center gap-2"><DollarSign className="w-4 h-4" /> From $7,500 USD</span>
              <span className="flex items-center gap-2"><Clock className="w-4 h-4" /> 3-4 Day Stay</span>
              <span className="flex items-center gap-2"><BarChart3 className="w-4 h-4" /> Evidence-Based Results</span>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-b from-green-50 to-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-white rounded-2xl p-10 shadow-xl border-2 border-green-200 text-center" data-testid="card-pricing-us">
            <Badge className="bg-green-100 text-green-800 hover:bg-green-100 text-sm mb-4">Transparent Pricing — No Surprise Bills</Badge>
            <h2 className="text-3xl font-bold text-slate-900 mb-6">ESG Packages for US Patients</h2>
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="p-6 rounded-xl border-2 border-slate-200 bg-slate-50">
                <h3 className="text-lg font-bold text-slate-900 mb-2">Procedure Only</h3>
                <div className="text-4xl font-bold text-primary my-3">$7,500 <span className="text-lg text-slate-500">USD</span></div>
                <ul className="text-left mt-4 space-y-2 text-sm">
                  {["Complete ESG procedure", "General anesthesia", "JCI-accredited hospital stay", "Pre-operative lab work & imaging", "Post-operative medications"].map((item, i) => (
                    <li key={i} className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-600 shrink-0" /><span className="text-slate-700">{item}</span></li>
                  ))}
                </ul>
              </div>
              <div className="p-6 rounded-xl border-2 border-primary bg-primary/5 relative">
                <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-white">Most Popular</Badge>
                <h3 className="text-lg font-bold text-slate-900 mb-2">All-Inclusive Package</h3>
                <div className="text-4xl font-bold text-primary my-3">$8,500 <span className="text-lg text-slate-500">USD</span></div>
                <ul className="text-left mt-4 space-y-2 text-sm">
                  {["Everything in Procedure Only", "VIP airport transfers", "4-star hotel accommodation", "12-month dietitian support (telemedicine)", "Ongoing follow-up consultations"].map((item, i) => (
                    <li key={i} className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-600 shrink-0" /><span className="text-slate-700">{item}</span></li>
                  ))}
                </ul>
              </div>
            </div>
            <p className="text-slate-500 text-sm mb-2">US private clinics: $15,000-$25,000+ | Most insurance plans do not cover ESG</p>
            <p className="text-slate-400 text-xs mb-6">HSA/FSA funds may be used toward your ESG procedure</p>
            <Button className="bg-primary hover:bg-primary/90 font-bold text-lg h-12 px-10" onClick={() => window.open("https://wa.me/905324131143?text=Hi%2C%20I'm%20from%20the%20US%20and%20interested%20in%20the%20ESG%20all-inclusive%20package", "_blank")} data-testid="button-book-us">Schedule Free Consultation</Button>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-slate-900">How ESG Works — The Science</h2>
              <p className="text-lg text-slate-600 leading-relaxed">ESG is an innovative endoscopic procedure that <strong>reduces stomach volume by 70-80% without surgical incisions</strong>. A flexible endoscope is inserted through the mouth, and internal sutures are placed using FDA-cleared Apollo OverStitch technology. Unlike traditional <Link href="/sleeve-gastrectomy" className="text-primary hover:underline">sleeve gastrectomy</Link>, no tissue is removed, and the procedure is potentially reversible.</p>
              <p className="text-lg text-slate-600 leading-relaxed">Published clinical data demonstrates 15-20% total body weight loss at 12-18 months, with durable results at 2-5 year follow-up. The procedure takes approximately 60-90 minutes under general anesthesia with same-day or overnight discharge.</p>
              <div className="grid grid-cols-3 gap-4 pt-4">
                <div className="text-center p-4 bg-primary/5 rounded-xl"><div className="text-2xl font-bold text-primary">60-90</div><p className="text-sm text-slate-600 mt-1">minutes</p></div>
                <div className="text-center p-4 bg-primary/5 rounded-xl"><div className="text-2xl font-bold text-primary">Zero</div><p className="text-sm text-slate-600 mt-1">incisions</p></div>
                <div className="text-center p-4 bg-primary/5 rounded-xl"><div className="text-2xl font-bold text-primary">&lt;1%</div><p className="text-sm text-slate-600 mt-1">serious complications</p></div>
              </div>
            </div>
            <div className="flex justify-center"><img src="/esg-procedure-cdn.webp" alt="ESG procedure Endoscopic Sleeve Gastroplasty diagram" className="rounded-2xl shadow-xl max-w-md w-full" width="400" height="400" loading="lazy" /></div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">{usFlag} Why American Patients Choose ESG in Turkey</h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">A growing number of Americans are choosing internationally accredited facilities abroad for bariatric procedures — here's why.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: ShieldCheck, title: "Limited US Access & High Costs", desc: "ESG is not widely available in US clinics. Where offered, prices range from $15,000-$25,000+ out-of-pocket, as most insurers consider ESG investigational. Wait times for bariatric programs can exceed 6-12 months.", color: "bg-red-50", iconColor: "text-red-500" },
              { icon: DollarSign, title: "65-70% Cost Savings", desc: "Our all-inclusive package is $8,500 USD — a fraction of US pricing. This includes the procedure at a JCI-accredited hospital, hotel, VIP transfers, and 12-month dietitian support via telemedicine. HSA/FSA-eligible.", color: "bg-green-50", iconColor: "text-green-600" },
              { icon: Clock, title: "Fast Scheduling, No Waitlists", desc: "Skip months-long waiting lists. From consultation to procedure in as little as 2 weeks. Direct flights from major US hubs (NYC, Chicago, LA, Houston, Miami). Complete treatment in 3-4 days.", color: "bg-blue-50", iconColor: "text-blue-600" },
            ].map((item, i) => { const Icon = item.icon; return (
              <div key={i} className="bg-white rounded-2xl p-8 shadow-sm border border-slate-200 hover:shadow-md transition-shadow" data-testid={`card-us-reason-${i}`}>
                <div className={`w-14 h-14 rounded-full ${item.color} flex items-center justify-center mb-5`}><Icon className={`w-7 h-7 ${item.iconColor}`} /></div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                <p className="text-slate-600 leading-relaxed">{item.desc}</p>
              </div>
            ); })}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">ESG vs Weight Loss Medications</h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">Many US patients start with GLP-1 medications like Ozempic or Wegovy. Here's how ESG compares as a long-term solution.</p>
          </div>
          <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-sm">
            <table className="w-full text-left" data-testid="table-esg-vs-meds-us">
              <thead><tr className="bg-slate-900 text-white"><th className="p-4 font-semibold text-sm uppercase tracking-wider">Factor</th><th className="p-4 font-semibold text-sm uppercase tracking-wider">Ozempic / Wegovy</th><th className="p-4 font-semibold text-sm uppercase tracking-wider bg-primary/90">ESG</th></tr></thead>
              <tbody>{comparisonMeds.map((row, i) => (<tr key={i} className={`border-b border-slate-100 ${i % 2 === 0 ? "bg-white" : "bg-slate-50/50"}`}><td className="p-4 font-medium text-slate-900">{row.factor}</td><td className="p-4 text-slate-700">{row.meds}</td><td className="p-4 text-slate-700 bg-primary/5 font-medium">{row.esg}</td></tr>))}</tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="py-20 bg-blue-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">ESG vs Gastric Sleeve Surgery</h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">A detailed comparison of ESG with <Link href="/sleeve-gastrectomy" className="text-primary hover:underline">surgical sleeve gastrectomy</Link>.</p>
          </div>
          <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-sm">
            <table className="w-full text-left" data-testid="table-esg-vs-sleeve-us">
              <thead><tr className="bg-slate-900 text-white"><th className="p-4 font-semibold text-sm uppercase tracking-wider">Feature</th><th className="p-4 font-semibold text-sm uppercase tracking-wider bg-primary/90">ESG</th><th className="p-4 font-semibold text-sm uppercase tracking-wider">Gastric Sleeve</th></tr></thead>
              <tbody>{comparisonSurgery.map((row, i) => (<tr key={i} className={`border-b border-slate-100 ${i % 2 === 0 ? "bg-white" : "bg-slate-50/50"}`}><td className="p-4 font-medium text-slate-900">{row.feature}</td><td className="p-4 text-slate-700 bg-primary/5 font-medium">{row.esg}</td><td className="p-4 text-slate-700">{row.sleeve}</td></tr>))}</tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-900 text-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-14"><h2 className="text-3xl font-bold mb-4">Why Choose Istanbul Bariatric Center?</h2><p className="text-lg text-slate-300 max-w-3xl mx-auto">World-class medical expertise with a patient experience designed for American patients who expect the highest standards of care.</p></div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Stethoscope, title: "Dr. Murat Üstün", desc: "Pioneer of ESG in Turkey. Thousands of successful bariatric procedures with complication rates comparable to leading US centers." },
              { icon: ShieldCheck, title: "JCI-Accredited Hospital", desc: "All procedures at Liv Hospital — JCI-accredited, the same standard as Cleveland Clinic, Mayo Clinic, and Johns Hopkins." },
              { icon: Users, title: "US Patient Support", desc: "Dedicated English-speaking coordinators. Telemedicine follow-up compatible with US time zones. 12-month aftercare program." },
              { icon: DollarSign, title: "From $7,500 USD", desc: "No surprise bills. Procedure, hospital, hotel, transfers, tests, dietitian support — all included in our $8,500 all-inclusive package." },
            ].map((item, i) => { const Icon = item.icon; return (
              <div key={i} className="bg-white/10 backdrop-blur rounded-xl p-6 text-center" data-testid={`card-us-ibc-${i}`}>
                <div className="w-14 h-14 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4"><Icon className="w-7 h-7 text-primary" /></div>
                <h3 className="text-lg font-bold mb-2">{item.title}</h3><p className="text-slate-300 text-sm">{item.desc}</p>
              </div>
            ); })}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-14"><h2 className="text-3xl font-bold text-slate-900 mb-4">Your Treatment Timeline — Step by Step</h2><p className="text-lg text-slate-600">From your first inquiry to telemedicine follow-up back home — we handle every detail.</p></div>
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-primary/20 hidden md:block" />
            <div className="space-y-8">
              {journeySteps.map((step) => { const Icon = step.icon; return (
                <div key={step.step} className="relative flex gap-6" data-testid={`step-journey-us-${step.step}`}>
                  <div className="relative z-10 shrink-0"><div className="w-16 h-16 rounded-full bg-primary text-white flex items-center justify-center shadow-lg"><Icon className="w-7 h-7" /></div></div>
                  <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200 flex-1 hover:shadow-md transition-shadow">
                    <div className="flex items-center gap-3 mb-2"><Badge variant="outline" className="text-primary border-primary/30">Step {step.step}</Badge><h3 className="text-lg font-bold text-slate-900">{step.title}</h3></div>
                    <p className="text-slate-600 leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              ); })}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
            <div><img src="/esg-us-istanbul.webp" alt="Istanbul — leading medical tourism destination" className="rounded-2xl shadow-xl w-full" width="600" height="400" loading="lazy" /></div>
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-slate-900">Comfort & First-Class Service</h2>
              <p className="text-lg text-slate-600 leading-relaxed">Your wellbeing is our highest priority — from the moment you land in Istanbul. VIP transfers, comfortable 4-star hotel accommodation, and Liv Hospital with state-of-the-art medical facilities that rival the best US medical centers.</p>
              <div className="flex flex-wrap gap-3">{["VIP airport transfers", "4-star hotel", "Liv Hospital (JCI)", "24/7 support", "WhatsApp contact", "English-speaking team", "US-compatible telemedicine"].map((tag) => (<Badge key={tag} className="bg-primary/10 text-primary hover:bg-primary/10 px-3 py-1">{tag}</Badge>))}</div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-14"><h2 className="text-3xl font-bold text-slate-900 mb-4">Expected Results with ESG</h2><p className="text-lg text-slate-600">Based on published clinical data and our patient outcomes.</p></div>
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="bg-primary text-white rounded-2xl p-8 text-center"><TrendingDown className="w-10 h-10 mx-auto mb-3 opacity-80" /><div className="text-4xl font-bold mb-2">15-20%</div><p className="text-white/80">Total Body Weight Loss</p><p className="text-sm text-white/60 mt-2">Over 12-18 months</p></div>
            <div className="bg-primary text-white rounded-2xl p-8 text-center"><Activity className="w-10 h-10 mx-auto mb-3 opacity-80" /><div className="text-4xl font-bold mb-2">~45 lbs</div><p className="text-white/80">Average (BMI 38+)</p><p className="text-sm text-white/60 mt-2">First 6 months</p></div>
            <div className="bg-primary text-white rounded-2xl p-8 text-center"><HeartPulse className="w-10 h-10 mx-auto mb-3 opacity-80" /><div className="text-4xl font-bold mb-2">Significant</div><p className="text-white/80">Health Improvement</p><p className="text-sm text-white/60 mt-2">A1C, blood pressure, sleep apnea</p></div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-14"><h2 className="text-3xl font-bold text-slate-900 mb-4">{usFlag} What American Patients Say</h2></div>
          <div className="grid md:grid-cols-3 gap-8">
            {usTestimonials.map((t, i) => (
              <div key={i} className="bg-white rounded-2xl p-8 shadow-sm border border-slate-200" data-testid={`testimonial-us-${i}`}>
                <div className="flex items-center gap-1 mb-4">{[...Array(5)].map((_, si) => (<Star key={si} className="w-5 h-5 fill-yellow-400 text-yellow-400" />))}</div>
                <p className="text-slate-600 italic leading-relaxed mb-6">&ldquo;{t.text}&rdquo;</p>
                <div className="flex items-center justify-between"><div><p className="font-bold text-slate-900">{t.name}</p><p className="text-sm text-slate-500 flex items-center gap-1"><MapPin className="w-3 h-3" /> {t.location}</p></div><div className="text-right"><p className="font-bold text-primary">{t.weight}</p><p className="text-xs text-slate-500">{t.time}</p></div></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20" id="bmi-section-us">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-start max-w-6xl mx-auto">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-slate-900">Who is a Candidate for ESG?</h2>
              <p className="text-lg text-slate-600 leading-relaxed">ESG is designed for individuals struggling with excess weight who are looking for an evidence-based solution between lifestyle interventions and major surgery.</p>
              <div className="space-y-3">
                {["BMI between 30 and 40", "Diet, exercise, and medications haven't delivered lasting results", "Prefer to avoid invasive surgery and its associated risks", "Want a minimally invasive approach with rapid recovery (1-3 days)", "Weight-related comorbidities (type 2 diabetes, hypertension, sleep apnea, NAFLD)", "Willing to commit to dietary and lifestyle changes post-procedure"].map((item, i) => (
                  <div key={i} className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" /><p className="text-slate-600">{item}</p></div>
                ))}
              </div>
            </div>
            <BMICalculator />
          </div>
        </div>
      </section>

      <section className="py-20 bg-green-50">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-slate-900">Safety & Quality Standards</h2>
              <p className="text-lg text-slate-600 leading-relaxed">ESG is recognized as one of the safest weight loss procedures available. Dr. Murat Üstün has performed thousands of ESG procedures at JCI-accredited Liv Hospital — the same international accreditation held by Cleveland Clinic, Mayo Clinic, and Johns Hopkins.</p>
              <div className="space-y-3">
                {["JCI-accredited hospital (same standard as top US hospitals)", "Board-certified surgeon with thousands of ESG procedures", "FDA-cleared Apollo OverStitch suturing technology", "Comprehensive pre-operative health screening (labs, ECG, ultrasound)", "24/7 medical support post-procedure", "Complication rates comparable to or better than published US data"].map((item, i) => (
                  <div key={i} className="flex items-start gap-3"><ShieldCheck className="w-5 h-5 text-green-600 shrink-0 mt-0.5" /><p className="text-slate-700">{item}</p></div>
                ))}
              </div>
            </div>
            <div><img src="/esg-us-consultation.webp" alt="Medical consultation for American patients at Liv Hospital" className="rounded-2xl shadow-xl w-full" width="600" height="400" loading="lazy" /></div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-slate-900 mb-4 text-center">Life After ESG</h2>
          <p className="text-lg text-slate-600 text-center mb-12">The procedure is just the beginning. Here's your post-procedure recovery roadmap.</p>
          <div className="space-y-4">
            {[
              { phase: "First 8 hours", desc: "Clear liquids only. Rest and recovery under medical supervision at Liv Hospital.", icon: "🏥", color: "border-red-200 bg-red-50" },
              { phase: "Weeks 1-2", desc: "Full liquid diet — protein shakes, broth, water. Begin reintroducing nutrients gradually.", icon: "🥤", color: "border-orange-200 bg-orange-50" },
              { phase: "Weeks 3-6", desc: "Gradual transition to soft foods. Puréed proteins and well-cooked vegetables.", icon: "🥣", color: "border-yellow-200 bg-yellow-50" },
              { phase: "Week 7+", desc: "Transition to healthy solid foods. Focus on lean proteins, vegetables, and balanced macronutrients.", icon: "🥗", color: "border-green-200 bg-green-50" },
              { phase: "Months 3-12", desc: "Continued dietitian support via telemedicine. Regular progress check-ins and plan adjustments.", icon: "📊", color: "border-blue-200 bg-blue-50" },
            ].map((phase, i) => (
              <div key={i} className={`flex items-start gap-5 p-6 rounded-xl border ${phase.color}`}><span className="text-3xl shrink-0">{phase.icon}</span><div><h4 className="font-bold text-slate-900 mb-1">{phase.phase}</h4><p className="text-slate-600 leading-relaxed">{phase.desc}</p></div></div>
            ))}
          </div>
          <div className="mt-10 p-6 bg-primary/5 rounded-xl border border-primary/10">
            <div className="flex items-start gap-4"><Utensils className="w-8 h-8 text-primary shrink-0 mt-1" /><div><h4 className="font-bold text-slate-900 mb-2">12-Month Dietitian Support via Telemedicine</h4><p className="text-slate-600">Every ESG package includes access to a qualified nutritionist who creates personalized dietary plans and guides you through the entire first year — via video consultations compatible with US time zones.</p></div></div>
          </div>
        </div>
      </section>

      <section className="py-20" data-testid="section-faq-us">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12"><h2 className="text-3xl font-bold text-slate-900 mb-4">Frequently Asked Questions — ESG for US Patients</h2><p className="text-lg text-slate-600">Everything you need to know before traveling to Istanbul.</p></div>
          <FAQAccordion faqs={usFaqs} />
        </div>
      </section>

      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-2xl font-bold text-slate-900 mb-8 text-center">Explore Our Other Treatment Options</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { title: "ESG — Full Details", href: "/esg", desc: "Complete procedure information" },
              { title: "Sleeve Gastrectomy", href: "/sleeve-gastrectomy", desc: "Most popular bariatric surgery" },
              { title: "Gastric Balloon", href: "/gastric-balloon", desc: "Non-surgical alternative" },
              { title: "All Treatments", href: "/treatments", desc: "Compare options and pricing" },
              { title: "Results", href: "/results", desc: "Patient success stories" },
              { title: "Contact Us", href: "/contact", desc: "Speak to our team" },
            ].map((link, i) => (
              <Link key={i} href={link.href} className="flex items-center gap-3 p-4 bg-white rounded-xl border border-slate-200 hover:border-primary/30 hover:shadow-sm transition-all group" data-testid={`link-internal-us-${i}`}>
                <ArrowRight className="w-4 h-4 text-primary shrink-0 group-hover:translate-x-1 transition-transform" />
                <div><p className="font-medium text-slate-900 group-hover:text-primary transition-colors">{link.title}</p><p className="text-xs text-slate-500">{link.desc}</p></div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-primary text-white" data-testid="section-cta-us">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <span className="text-5xl mb-6 block">{usFlag}</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Take the First Step Today</h2>
          <p className="text-xl text-white/80 mb-4 leading-relaxed">If you're looking for a safe, evidence-based alternative to traditional bariatric surgery, Endoscopic Sleeve Gastroplasty could be the right solution for you.</p>
          <p className="text-lg text-white/70 mb-8">Schedule your free online consultation today. Our medical team will assess your eligibility, answer all your questions, and create a personalized treatment plan — no obligation.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-primary hover:bg-white/90 font-bold text-lg h-14 px-10" onClick={() => window.open("https://wa.me/905324131143?text=Hi%2C%20I'm%20from%20the%20US%20and%20I'm%20interested%20in%20ESG", "_blank")} data-testid="button-cta-whatsapp-us"><Phone className="w-5 h-5 mr-2" />WhatsApp: +90 532 413 1143</Button>
            <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 font-bold text-lg h-14 px-10" onClick={() => window.open("mailto:drmuratustun@gmail.com?subject=ESG%20inquiry%20from%20the%20United%20States", "_blank")} data-testid="button-cta-email-us"><MessageCircle className="w-5 h-5 mr-2" />Send Email</Button>
          </div>
          <p className="text-white/50 mt-6 text-sm">Email: <a href="mailto:drmuratustun@gmail.com" className="text-white/70 hover:text-white underline">drmuratustun@gmail.com</a></p>
        </div>
      </section>

      <Footer />
    </div>
  );
}

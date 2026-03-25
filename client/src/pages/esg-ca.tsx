import { useState } from "react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { SEO, JsonLd, structuredData } from "@/components/seo";
import {
  CheckCircle2, ChevronDown, ChevronUp, Plane, Hotel, Stethoscope, ShieldCheck,
  Clock, DollarSign, HeartPulse, ArrowRight, Star, MapPin, Phone, MessageCircle,
  Award, Calculator, Users, TrendingDown, Utensils, Activity,
} from "lucide-react";
import { Link } from "wouter";

const caFaqs = [
  {
    question: "Is ESG available through provincial healthcare in Canada?",
    answer: "Endoscopic Sleeve Gastroplasty is currently not covered by provincial health plans (OHIP, MSP, AHCIP, etc.) and is rarely offered by Canadian bariatric centres. Wait times for publicly funded bariatric surgery in Canada can exceed 2-5 years. Private clinics in Toronto, Vancouver, or Montreal may charge $15,000-$25,000 CAD or more. Istanbul Bariatric Center's all-inclusive package is $8,500 USD (~$11,500 CAD) — including the procedure, JCI-accredited hospital, hotel, VIP transfers, and 12-month dietitian support.",
  },
  {
    question: "How long do I need to stay in Istanbul?",
    answer: "Most Canadian patients stay in Istanbul for 3-4 days. You arrive the day before your procedure, the ESG is performed the following day, you rest at the hotel on day three, and travel home on day four. Direct flights are available from Toronto Pearson (YYZ) and Montreal (YUL) to Istanbul (~10-11 hours), with convenient connections from Vancouver, Calgary, and other major Canadian cities.",
  },
  {
    question: "Is the procedure painful?",
    answer: "ESG is performed under general anaesthesia — you won't feel anything during the procedure. After waking, you may experience mild discomfort, nausea, or a feeling of fullness. These symptoms typically resolve within 1-3 days and are well managed with medication provided by our team.",
  },
  {
    question: "Are the results long-lasting?",
    answer: "Yes, with the right lifestyle. ESG creates a physical volume reduction in your stomach — it's a structural change. Maintaining results requires following your dietary plan, staying active, and attending follow-up appointments. Our 12-month dietitian program with a qualified nutritionist is included in every package.",
  },
  {
    question: "How does ESG compare to Ozempic or Wegovy?",
    answer: "GLP-1 medications like Ozempic and Wegovy can be effective initially, but many patients regain weight after discontinuation. The ongoing monthly costs ($300-$500 CAD/month without insurance) add up quickly. ESG offers a one-time solution — a physical stomach reduction without recurring prescription costs.",
  },
  {
    question: "What BMI is required for ESG?",
    answer: "ESG is generally recommended for patients with a BMI between 30 and 40. The procedure is particularly suitable for those who haven't achieved lasting results with diet and exercise, prefer to avoid invasive surgery, or want a minimally invasive approach with a short recovery period.",
  },
  {
    question: "Is it safe to have medical treatment abroad?",
    answer: "Istanbul Bariatric Center operates at Liv Hospital, which holds JCI (Joint Commission International) accreditation — the international gold standard for patient safety, the same accreditation held by top Canadian hospitals. Dr. Murat Üstün has performed thousands of ESG procedures with excellent safety outcomes.",
  },
  {
    question: "What does the all-inclusive package include?",
    answer: "Our ESG package at $8,500 USD includes: the complete procedure, hospital stay at a JCI-accredited facility, pre-operative tests (blood work, ECG, ultrasound), VIP airport transfers, hotel accommodation, post-operative medications, 12-month dietitian support, and ongoing follow-up consultations. There are no hidden costs.",
  },
];

const journeySteps = [
  { step: 1, title: "Free online consultation", desc: "Contact us via WhatsApp or our website. Our team will assess your BMI, medical history, and goals to determine ESG eligibility.", icon: MessageCircle },
  { step: 2, title: "Travel to Istanbul", desc: "Choose your dates — we handle the rest. Direct flights from Toronto Pearson (YYZ) ~10-11 hours. Connections available from Vancouver, Calgary, Montreal, Ottawa, and more.", icon: Plane },
  { step: 3, title: "VIP transfer & hotel", desc: "A personal driver meets you at Istanbul Airport and takes you to your hotel. Comfortable accommodation throughout your stay.", icon: Hotel },
  { step: 4, title: "Pre-operative assessments", desc: "Comprehensive blood work and health checks at the hospital. In-person consultation with Dr. Murat Üstün to review your treatment plan.", icon: Stethoscope },
  { step: 5, title: "ESG procedure", desc: "ESG is performed under general anaesthesia at Liv Hospital (JCI-accredited). Duration: 60-90 minutes. No incisions, no scars.", icon: HeartPulse },
  { step: 6, title: "Recovery & travel home", desc: "Rest at your hotel with continuous medical support. Most patients fly home 2-3 days after the procedure.", icon: Plane },
];

const comparisonMeds = [
  { factor: "Long-term effectiveness", meds: "Limited — weight often returns after stopping", esg: "Durable — permanent physical stomach reduction" },
  { factor: "Side effects", meds: "Common (nausea, diarrhoea, pancreatitis risk)", esg: "Minimal (mild discomfort for 1-3 days)" },
  { factor: "Cost", meds: "Ongoing $300-$500 CAD/month ($3,600-$6,000/year)", esg: "One-time: $8,500 USD all-inclusive (~$11,500 CAD)" },
  { factor: "Weight regain", meds: "Common after discontinuation", esg: "Limited with healthy lifestyle" },
  { factor: "Procedure", meds: "No — weekly/daily injections indefinitely", esg: "Yes — single endoscopic procedure (60-90 min)" },
];

const comparisonSurgery = [
  { feature: "Procedure type", esg: "Endoscopic (through the mouth)", sleeve: "Laparoscopic surgery (4-5 incisions)" },
  { feature: "Anaesthesia", esg: "General", sleeve: "General" },
  { feature: "Duration", esg: "60-90 minutes", sleeve: "~60 minutes" },
  { feature: "Hospital stay", esg: "Same day or 1 night", sleeve: "2-3 nights" },
  { feature: "Recovery", esg: "1-3 days", sleeve: "2-3 weeks" },
  { feature: "Scarring", esg: "None", sleeve: "4-5 small scars" },
  { feature: "Weight loss", esg: "15-20% of total body weight", sleeve: "60-70% of excess weight" },
  { feature: "Reversibility", esg: "Potentially reversible", sleeve: "Permanent (stomach tissue removed)" },
  { feature: "Risk profile", esg: "Very low", sleeve: "Low" },
];

const caTestimonials = [
  { name: "Sarah M.", location: "Toronto, ON", text: "After years of yo-yo dieting and trying Ozempic with limited results, ESG was the breakthrough I needed. The team at Istanbul Bariatric Center was incredibly professional. I lost 18 kg in 5 months. I finally feel in control of my health.", weight: "−18 kg", time: "5 months" },
  { name: "James L.", location: "Vancouver, BC", text: "I was initially hesitant about travelling overseas for medical treatment. But Liv Hospital exceeded every expectation — the quality was higher than anything I've experienced in Canada. Dr. Murat is exceptional, and the cost was a fraction of what I was quoted here.", weight: "−23 kg", time: "7 months" },
  { name: "Marie T.", location: "Montreal, QC", text: "From the airport pickup to the dietitian support — everything was perfectly organised. I never expected results to come so quickly. The 12-month programme truly helped me change my eating habits for good.", weight: "−16 kg", time: "4 months" },
];

function BMICalculator() {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [unit, setUnit] = useState<"metric" | "imperial">("imperial");
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
    if (bmi < 25) return { label: "Normal weight", color: "text-green-600", eligible: false };
    if (bmi < 30) return { label: "Overweight", color: "text-yellow-600", eligible: false };
    if (bmi < 35) return { label: "Obesity (Class I)", color: "text-orange-600", eligible: true };
    if (bmi < 40) return { label: "Obesity (Class II)", color: "text-red-500", eligible: true };
    return { label: "Severe Obesity (Class III)", color: "text-red-700", eligible: false, surgical: true };
  };
  return (
    <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-200" data-testid="bmi-calculator-ca">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center"><Calculator className="w-6 h-6 text-primary" /></div>
        <div><h3 className="text-xl font-bold text-slate-900">Am I a candidate for ESG?</h3><p className="text-sm text-slate-500">Calculate your BMI and check your eligibility</p></div>
      </div>
      <div className="flex gap-2 mb-4">
        <Button variant={unit === "imperial" ? "default" : "outline"} size="sm" onClick={() => setUnit("imperial")} data-testid="button-unit-imperial-ca">Imperial (lbs/in)</Button>
        <Button variant={unit === "metric" ? "default" : "outline"} size="sm" onClick={() => setUnit("metric")} data-testid="button-unit-metric-ca">Metric (kg/cm)</Button>
      </div>
      <div className="grid sm:grid-cols-2 gap-4 mb-4">
        <div><label className="block text-sm font-medium text-slate-700 mb-1">{unit === "metric" ? "Height (cm)" : "Height (inches)"}</label><input type="number" value={height} onChange={(e) => setHeight(e.target.value)} placeholder={unit === "metric" ? "e.g. 175" : "e.g. 69"} className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none" data-testid="input-height-ca" /></div>
        <div><label className="block text-sm font-medium text-slate-700 mb-1">{unit === "metric" ? "Weight (kg)" : "Weight (lbs)"}</label><input type="number" value={weight} onChange={(e) => setWeight(e.target.value)} placeholder={unit === "metric" ? "e.g. 100" : "e.g. 220"} className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none" data-testid="input-weight-ca" /></div>
      </div>
      <Button onClick={calculateBMI} className="w-full bg-primary hover:bg-primary/90 h-12" data-testid="button-calculate-bmi-ca">Calculate BMI</Button>
      {bmi !== null && (
        <div className="mt-6 p-4 rounded-xl bg-slate-50 border border-slate-200" data-testid="bmi-result-ca">
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

function FAQAccordion({ faqs }: { faqs: typeof caFaqs }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  return (
    <div className="space-y-3" data-testid="faq-accordion-ca">
      {faqs.map((faq, i) => (
        <div key={i} className={`rounded-xl border transition-all duration-200 ${openIndex === i ? "border-primary/30 bg-white shadow-md" : "border-slate-200 bg-white hover:border-slate-300"}`} data-testid={`faq-item-ca-${i}`}>
          <button className="w-full flex items-center justify-between p-5 text-left" onClick={() => setOpenIndex(openIndex === i ? null : i)} data-testid={`button-faq-ca-${i}`}>
            <span className="font-semibold text-slate-900 pr-4">{faq.question}</span>
            {openIndex === i ? <ChevronUp className="w-5 h-5 text-primary shrink-0" /> : <ChevronDown className="w-5 h-5 text-slate-400 shrink-0" />}
          </button>
          {openIndex === i && <div className="px-5 pb-5 text-slate-600 leading-relaxed animate-in fade-in duration-200">{faq.answer}</div>}
        </div>
      ))}
    </div>
  );
}

export default function ESGCanada() {
  const caFlag = "🇨🇦";
  const trFlag = "🇹🇷";

  return (
    <div className="min-h-screen bg-white">
      <SEO title="ESG Turkey for Canadian Patients | Weight Loss Without Surgery | $8,500 USD All-Inclusive" description="Endoscopic Sleeve Gastroplasty without surgery for Canadian patients. All-inclusive package $8,500 USD at JCI-accredited hospital in Istanbul. Save compared to Canadian private clinics. Free consultation." keywords="ESG Canada, weight loss without surgery, gastroplasty Turkey, Ozempic alternative, bariatric Turkey, medical tourism Turkey Canada, weight loss Istanbul" url="/esg/ca" />
      <JsonLd data={{ "@context": "https://schema.org", "@type": "MedicalProcedure", "name": "Endoscopic Sleeve Gastroplasty for Canadian Patients", "alternateName": ["ESG Canada", "ESG Turkey", "Weight loss without surgery Canada"], "description": "Endoscopic Sleeve Gastroplasty (ESG) for Canadian patients at Istanbul Bariatric Center. JCI-accredited hospital. All-inclusive $8,500 USD.", "procedureType": "Endoscopic", "bodyLocation": "Stomach", "relevantSpecialty": { "@type": "MedicalSpecialty", "name": "Bariatric Surgery" }, "offers": [{ "@type": "Offer", "name": "ESG Procedure Only", "price": "7500", "priceCurrency": "USD" }, { "@type": "Offer", "name": "ESG All-Inclusive Package", "price": "8500", "priceCurrency": "USD" }] }} />
      <JsonLd data={structuredData.createFAQ(caFaqs)} />
      <JsonLd data={structuredData.createBreadcrumb([{ name: "Home", url: "/" }, { name: "Treatments", url: "/treatments" }, { name: "ESG", url: "/esg" }, { name: "ESG for Canadian Patients", url: "/esg/ca" }])} />
      <Navbar />

      <section className="relative bg-slate-900 text-white pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-primary/30 opacity-90" />
        <div className="absolute inset-0 opacity-15" style={{ backgroundImage: "url('/esg-ca-hero.webp')", backgroundSize: "cover", backgroundPosition: "center" }} />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center gap-3 mb-6">
              <span className="text-4xl">{caFlag}</span>
              <Badge variant="outline" className="border-white/30 text-white/90 text-sm px-4 py-1">For Canadian Patients</Badge>
              <span className="text-4xl">{trFlag}</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight" data-testid="heading-esg-ca-hero">Endoscopic Sleeve Gastroplasty (ESG) — Safe, Minimally Invasive Weight Loss in Turkey</h1>
            <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto mb-8 leading-relaxed">Achieving long-term weight loss can be challenging — even with diets, exercise, and medications like Ozempic or Wegovy. ESG offers a modern, minimally invasive solution without surgery. All-inclusive package from $8,500 USD.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary hover:bg-primary/90 font-bold text-lg h-14 px-8" onClick={() => window.open("https://wa.me/905324131143?text=Hi%2C%20I'm%20from%20Canada%20and%20I'm%20interested%20in%20ESG", "_blank")} data-testid="button-hero-whatsapp-ca"><Phone className="w-5 h-5 mr-2" />Free Consultation</Button>
              <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 font-bold text-lg h-14 px-8" onClick={() => document.getElementById("bmi-section-ca")?.scrollIntoView({ behavior: "smooth" })} data-testid="button-hero-bmi-ca"><Calculator className="w-5 h-5 mr-2" />Am I Eligible?</Button>
            </div>
            <div className="flex flex-wrap gap-6 justify-center mt-10 text-sm text-slate-400">
              <span className="flex items-center gap-2"><ShieldCheck className="w-4 h-4" /> JCI-Accredited Hospital</span>
              <span className="flex items-center gap-2"><DollarSign className="w-4 h-4" /> $8,500 USD All-Inclusive</span>
              <span className="flex items-center gap-2"><Clock className="w-4 h-4" /> 3-4 Day Stay</span>
              <span className="flex items-center gap-2"><Stethoscope className="w-4 h-4" /> 8,000+ Successful Procedures</span>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-b from-green-50 to-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-white rounded-2xl p-10 shadow-xl border-2 border-green-200 text-center" data-testid="card-pricing-ca">
            <Badge className="bg-green-100 text-green-800 hover:bg-green-100 text-sm mb-4">Fully Transparent Pricing</Badge>
            <h2 className="text-3xl font-bold text-slate-900 mb-6">ESG Packages for Canadian Patients</h2>
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="p-6 rounded-xl border-2 border-slate-200 bg-slate-50">
                <h3 className="text-lg font-bold text-slate-900 mb-2">Procedure Only</h3>
                <div className="text-4xl font-bold text-primary my-3">$7,500 <span className="text-lg text-slate-500">USD</span></div>
                <p className="text-slate-500 text-sm">~$10,200 CAD</p>
                <ul className="text-left mt-4 space-y-2 text-sm">
                  {["Complete ESG procedure", "General anaesthesia", "JCI-accredited hospital", "Pre-operative tests", "Post-operative medications"].map((item, i) => (
                    <li key={i} className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-600 shrink-0" /><span className="text-slate-700">{item}</span></li>
                  ))}
                </ul>
              </div>
              <div className="p-6 rounded-xl border-2 border-primary bg-primary/5 relative">
                <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-white">Most Popular</Badge>
                <h3 className="text-lg font-bold text-slate-900 mb-2">All-Inclusive Package</h3>
                <div className="text-4xl font-bold text-primary my-3">$8,500 <span className="text-lg text-slate-500">USD</span></div>
                <p className="text-slate-500 text-sm">~$11,500 CAD</p>
                <ul className="text-left mt-4 space-y-2 text-sm">
                  {["Everything in Procedure Only", "VIP airport transfers", "Hotel accommodation", "12-month dietitian support", "Ongoing follow-up consultations"].map((item, i) => (
                    <li key={i} className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-600 shrink-0" /><span className="text-slate-700">{item}</span></li>
                  ))}
                </ul>
              </div>
            </div>
            <p className="text-slate-500 text-sm mb-4">Canadian private clinics: $15,000-$25,000 CAD+ | Public wait times: 2-5 years</p>
            <Button className="bg-primary hover:bg-primary/90 font-bold text-lg h-12 px-10" onClick={() => window.open("https://wa.me/905324131143?text=Hi%2C%20I'm%20from%20Canada%20and%20interested%20in%20the%20ESG%20all-inclusive%20package", "_blank")} data-testid="button-book-ca">Book Free Consultation</Button>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-slate-900">What is Endoscopic Sleeve Gastroplasty (ESG)?</h2>
              <p className="text-lg text-slate-600 leading-relaxed">ESG is an innovative procedure that <strong>reduces stomach volume without surgery</strong>. A flexible endoscope is inserted through the mouth, and internal sutures are placed to reduce the stomach's capacity by 70-80%. Unlike traditional <Link href="/sleeve-gastrectomy" className="text-primary hover:underline">sleeve gastrectomy</Link>, there are no incisions, no tissue is removed, and recovery is significantly faster.</p>
              <p className="text-lg text-slate-600 leading-relaxed">The procedure uses Apollo OverStitch technology and takes approximately 60-90 minutes under general anaesthesia. The result: earlier satiety and naturally reduced food intake.</p>
              <div className="grid grid-cols-3 gap-4 pt-4">
                <div className="text-center p-4 bg-primary/5 rounded-xl"><div className="text-2xl font-bold text-primary">60-90</div><p className="text-sm text-slate-600 mt-1">minutes</p></div>
                <div className="text-center p-4 bg-primary/5 rounded-xl"><div className="text-2xl font-bold text-primary">Zero</div><p className="text-sm text-slate-600 mt-1">incisions</p></div>
                <div className="text-center p-4 bg-primary/5 rounded-xl"><div className="text-2xl font-bold text-primary">1-3</div><p className="text-sm text-slate-600 mt-1">days recovery</p></div>
              </div>
            </div>
            <div className="flex justify-center"><img src="/esg-procedure-cdn.webp" alt="ESG procedure Endoscopic Sleeve Gastroplasty" className="rounded-2xl shadow-xl max-w-md w-full" width="400" height="400" loading="lazy" /></div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">{caFlag} Why Canadian Patients Choose ESG in Turkey</h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">A growing number of Canadians are choosing Istanbul for bariatric treatment — quality, access, and transparent pricing are at the forefront.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: ShieldCheck, title: "Limited Access in Canada", desc: "ESG is rarely available through provincial healthcare. Public bariatric surgery wait times can exceed 2-5 years. Private clinics charge $15,000-$25,000 CAD or more — with limited availability.", color: "bg-red-50", iconColor: "text-red-500" },
              { icon: DollarSign, title: "Significant Savings", desc: "Canadian private ESG costs $15,000-$25,000+ CAD. Our all-inclusive package is $8,500 USD (~$11,500 CAD) — including procedure, JCI hospital, hotel, transfers, and 12-month dietitian support.", color: "bg-green-50", iconColor: "text-green-600" },
              { icon: Clock, title: "No Wait Times", desc: "Skip years-long waiting lists. Fast consultation, flexible scheduling, and complete treatment in 3-4 days. Direct flights from Toronto (~10-11h), with connections from all major Canadian cities.", color: "bg-blue-50", iconColor: "text-blue-600" },
            ].map((item, i) => { const Icon = item.icon; return (
              <div key={i} className="bg-white rounded-2xl p-8 shadow-sm border border-slate-200 hover:shadow-md transition-shadow" data-testid={`card-ca-reason-${i}`}>
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
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">Many Canadian patients start with GLP-1 medications like Ozempic or Wegovy. ESG may be the next logical step for lasting results.</p>
          </div>
          <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-sm">
            <table className="w-full text-left" data-testid="table-esg-vs-meds-ca">
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
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">How ESG compares to <Link href="/sleeve-gastrectomy" className="text-primary hover:underline">surgical sleeve gastrectomy</Link>.</p>
          </div>
          <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-sm">
            <table className="w-full text-left" data-testid="table-esg-vs-sleeve-ca">
              <thead><tr className="bg-slate-900 text-white"><th className="p-4 font-semibold text-sm uppercase tracking-wider">Feature</th><th className="p-4 font-semibold text-sm uppercase tracking-wider bg-primary/90">ESG</th><th className="p-4 font-semibold text-sm uppercase tracking-wider">Gastric Sleeve</th></tr></thead>
              <tbody>{comparisonSurgery.map((row, i) => (<tr key={i} className={`border-b border-slate-100 ${i % 2 === 0 ? "bg-white" : "bg-slate-50/50"}`}><td className="p-4 font-medium text-slate-900">{row.feature}</td><td className="p-4 text-slate-700 bg-primary/5 font-medium">{row.esg}</td><td className="p-4 text-slate-700">{row.sleeve}</td></tr>))}</tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-900 text-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-14"><h2 className="text-3xl font-bold mb-4">Why Choose Istanbul Bariatric Center?</h2><p className="text-lg text-slate-300 max-w-3xl mx-auto">World-class medical expertise combined with a patient experience tailored for international — and specifically Canadian — patients.</p></div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Stethoscope, title: "Dr. Murat Üstün", desc: "Pioneer of ESG in Turkey. Thousands of successful bariatric procedures with excellent outcomes." },
              { icon: ShieldCheck, title: "JCI-Accredited Hospital", desc: "All procedures at Liv Hospital — JCI-accredited, the same international standard as top Canadian hospitals." },
              { icon: Users, title: "International Team", desc: "Dedicated patient coordinators for international patients. Clear English communication and structured follow-up." },
              { icon: DollarSign, title: "$8,500 USD All-Inclusive", desc: "No hidden costs. Procedure, hospital, hotel, transfers, tests, 12-month dietitian support all included." },
            ].map((item, i) => { const Icon = item.icon; return (
              <div key={i} className="bg-white/10 backdrop-blur rounded-xl p-6 text-center" data-testid={`card-ca-ibc-${i}`}>
                <div className="w-14 h-14 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4"><Icon className="w-7 h-7 text-primary" /></div>
                <h3 className="text-lg font-bold mb-2">{item.title}</h3><p className="text-slate-300 text-sm">{item.desc}</p>
              </div>
            ); })}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-14"><h2 className="text-3xl font-bold text-slate-900 mb-4">Your Treatment Journey — Step by Step</h2><p className="text-lg text-slate-600">From your first enquiry to returning home — we take care of every detail.</p></div>
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-primary/20 hidden md:block" />
            <div className="space-y-8">
              {journeySteps.map((step) => { const Icon = step.icon; return (
                <div key={step.step} className="relative flex gap-6" data-testid={`step-journey-ca-${step.step}`}>
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
            <div><img src="/esg-ca-istanbul.webp" alt="Istanbul — medical tourism destination for Canadians" className="rounded-2xl shadow-xl w-full" width="600" height="400" loading="lazy" /></div>
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-slate-900">Comfort & First-Class Service</h2>
              <p className="text-lg text-slate-600 leading-relaxed">Your wellbeing is our highest priority — from the moment you arrive in Istanbul. VIP transfers, comfortable hotel accommodation, and Liv Hospital with state-of-the-art medical facilities.</p>
              <div className="flex flex-wrap gap-3">{["VIP airport transfers", "Comfortable hotel", "Liv Hospital (JCI)", "24/7 support", "WhatsApp contact", "English-speaking team"].map((tag) => (<Badge key={tag} className="bg-primary/10 text-primary hover:bg-primary/10 px-3 py-1">{tag}</Badge>))}</div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-14"><h2 className="text-3xl font-bold text-slate-900 mb-4">Expected Results with ESG</h2></div>
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="bg-primary text-white rounded-2xl p-8 text-center"><TrendingDown className="w-10 h-10 mx-auto mb-3 opacity-80" /><div className="text-4xl font-bold mb-2">15-20%</div><p className="text-white/80">Total Body Weight Loss</p><p className="text-sm text-white/60 mt-2">Over 12-18 months</p></div>
            <div className="bg-primary text-white rounded-2xl p-8 text-center"><Activity className="w-10 h-10 mx-auto mb-3 opacity-80" /><div className="text-4xl font-bold mb-2">~45 lbs</div><p className="text-white/80">Average (BMI 38+)</p><p className="text-sm text-white/60 mt-2">First 6 months</p></div>
            <div className="bg-primary text-white rounded-2xl p-8 text-center"><HeartPulse className="w-10 h-10 mx-auto mb-3 opacity-80" /><div className="text-4xl font-bold mb-2">Significant</div><p className="text-white/80">Health Improvement</p><p className="text-sm text-white/60 mt-2">Diabetes, blood pressure, sleep apnea</p></div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-14"><h2 className="text-3xl font-bold text-slate-900 mb-4">{caFlag} What Canadian Patients Say</h2></div>
          <div className="grid md:grid-cols-3 gap-8">
            {caTestimonials.map((t, i) => (
              <div key={i} className="bg-white rounded-2xl p-8 shadow-sm border border-slate-200" data-testid={`testimonial-ca-${i}`}>
                <div className="flex items-center gap-1 mb-4">{[...Array(5)].map((_, si) => (<Star key={si} className="w-5 h-5 fill-yellow-400 text-yellow-400" />))}</div>
                <p className="text-slate-600 italic leading-relaxed mb-6">&ldquo;{t.text}&rdquo;</p>
                <div className="flex items-center justify-between"><div><p className="font-bold text-slate-900">{t.name}</p><p className="text-sm text-slate-500 flex items-center gap-1"><MapPin className="w-3 h-3" /> {t.location}</p></div><div className="text-right"><p className="font-bold text-primary">{t.weight}</p><p className="text-xs text-slate-500">{t.time}</p></div></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20" id="bmi-section-ca">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-start max-w-6xl mx-auto">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-slate-900">Who is Eligible for ESG?</h2>
              <p className="text-lg text-slate-600 leading-relaxed">ESG is designed for individuals struggling with excess weight who are looking for a solution between lifestyle changes and major surgery.</p>
              <div className="space-y-3">
                {["BMI between 30 and 40", "Diet and exercise haven't delivered lasting results", "Prefer to avoid invasive surgery", "Medications have been insufficient or too costly", "Want a minimally invasive approach with short recovery", "Weight-related health conditions (type 2 diabetes, hypertension, sleep apnea)"].map((item, i) => (
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
              <p className="text-lg text-slate-600 leading-relaxed">ESG is considered one of the safest weight loss procedures when performed by experienced specialists. Dr. Murat Üstün has performed thousands of ESG procedures at JCI-accredited Liv Hospital — the same international accreditation held by top Canadian medical centres.</p>
              <div className="space-y-3">
                {["JCI-accredited hospital (international gold standard)", "Board-certified surgeon with thousands of ESG procedures", "Advanced suturing technology (Apollo OverStitch)", "Comprehensive pre-operative health screening", "24/7 medical support post-procedure", "Complete medical protocols and safety measures"].map((item, i) => (
                  <div key={i} className="flex items-start gap-3"><ShieldCheck className="w-5 h-5 text-green-600 shrink-0 mt-0.5" /><p className="text-slate-700">{item}</p></div>
                ))}
              </div>
            </div>
            <div><img src="/esg-ca-consultation.webp" alt="Medical consultation for Canadian patients" className="rounded-2xl shadow-xl w-full" width="600" height="400" loading="lazy" /></div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-slate-900 mb-4 text-center">Life After ESG</h2>
          <p className="text-lg text-slate-600 text-center mb-12">The procedure is just the beginning. Here's what your recovery looks like.</p>
          <div className="space-y-4">
            {[
              { phase: "First 8 hours", desc: "Clear liquids only. Rest and recovery under medical supervision at the hospital.", icon: "🏥", color: "border-red-200 bg-red-50" },
              { phase: "Weeks 1-2", desc: "Liquid diet — protein shakes, broth, water. Gradual reintroduction of nutrients.", icon: "🥤", color: "border-orange-200 bg-orange-50" },
              { phase: "Weeks 3-6", desc: "Gradual transition to semi-solid foods. Puréed foods and soft proteins.", icon: "🥣", color: "border-yellow-200 bg-yellow-50" },
              { phase: "Week 7+", desc: "Transition to healthy solid foods. Focus on protein-rich, balanced meals.", icon: "🥗", color: "border-green-200 bg-green-50" },
              { phase: "Months 3-12", desc: "Continued dietitian support with regular consultations and progress tracking.", icon: "📊", color: "border-blue-200 bg-blue-50" },
            ].map((phase, i) => (
              <div key={i} className={`flex items-start gap-5 p-6 rounded-xl border ${phase.color}`}><span className="text-3xl shrink-0">{phase.icon}</span><div><h4 className="font-bold text-slate-900 mb-1">{phase.phase}</h4><p className="text-slate-600 leading-relaxed">{phase.desc}</p></div></div>
            ))}
          </div>
          <div className="mt-10 p-6 bg-primary/5 rounded-xl border border-primary/10">
            <div className="flex items-start gap-4"><Utensils className="w-8 h-8 text-primary shrink-0 mt-1" /><div><h4 className="font-bold text-slate-900 mb-2">12-Month Dietitian Support Included</h4><p className="text-slate-600">Every ESG package includes access to a qualified nutritionist who creates personalised dietary plans and guides you through the entire first year of your weight loss journey.</p></div></div>
          </div>
        </div>
      </section>

      <section className="py-20" data-testid="section-faq-ca">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12"><h2 className="text-3xl font-bold text-slate-900 mb-4">Frequently Asked Questions — ESG for Canadian Patients</h2><p className="text-lg text-slate-600">Everything you need to know before travelling to Istanbul.</p></div>
          <FAQAccordion faqs={caFaqs} />
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
              <Link key={i} href={link.href} className="flex items-center gap-3 p-4 bg-white rounded-xl border border-slate-200 hover:border-primary/30 hover:shadow-sm transition-all group" data-testid={`link-internal-ca-${i}`}>
                <ArrowRight className="w-4 h-4 text-primary shrink-0 group-hover:translate-x-1 transition-transform" />
                <div><p className="font-medium text-slate-900 group-hover:text-primary transition-colors">{link.title}</p><p className="text-xs text-slate-500">{link.desc}</p></div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-primary text-white" data-testid="section-cta-ca">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <span className="text-5xl mb-6 block">{caFlag}</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Take the First Step Today</h2>
          <p className="text-xl text-white/80 mb-4 leading-relaxed">If you're looking for a safe, effective alternative to invasive surgery, Endoscopic Sleeve Gastroplasty could be the right solution for you.</p>
          <p className="text-lg text-white/70 mb-8">Contact us today for a free online consultation. We'll assess your eligibility, answer all your questions, and create a personalised treatment plan — no obligation.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-primary hover:bg-white/90 font-bold text-lg h-14 px-10" onClick={() => window.open("https://wa.me/905324131143?text=Hi%2C%20I'm%20from%20Canada%20and%20I'm%20interested%20in%20ESG", "_blank")} data-testid="button-cta-whatsapp-ca"><Phone className="w-5 h-5 mr-2" />WhatsApp: +90 532 413 1143</Button>
            <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 font-bold text-lg h-14 px-10" onClick={() => window.open("mailto:drmuratustun@gmail.com?subject=ESG%20enquiry%20from%20Canada", "_blank")} data-testid="button-cta-email-ca"><MessageCircle className="w-5 h-5 mr-2" />Send Email</Button>
          </div>
          <p className="text-white/50 mt-6 text-sm">Email: <a href="mailto:drmuratustun@gmail.com" className="text-white/70 hover:text-white underline">drmuratustun@gmail.com</a> | UK WhatsApp: <a href="https://wa.me/447491068686" className="text-white/70 hover:text-white underline">+44 7491 068686</a></p>
        </div>
      </section>

      <Footer />
    </div>
  );
}

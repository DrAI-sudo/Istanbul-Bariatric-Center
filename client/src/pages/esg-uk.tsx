import { useState } from "react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { SEO, JsonLd, structuredData } from "@/components/seo";
import {
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  Plane,
  Hotel,
  Stethoscope,
  ShieldCheck,
  Clock,
  PoundSterling,
  HeartPulse,
  ArrowRight,
  Star,
  MapPin,
  Phone,
  MessageCircle,
  Award,
  BadgePoundSterling,
  Calculator,
  Users,
  TrendingDown,
  Utensils,
  Activity,
} from "lucide-react";
import { Link } from "wouter";

const ukFaqs = [
  {
    question: "Is ESG available on the NHS?",
    answer: "No, Endoscopic Sleeve Gastroplasty is not widely available through the NHS. Most NHS bariatric services focus on gastric band, gastric sleeve, or gastric bypass surgery for patients meeting strict criteria (typically BMI 40+ or BMI 35+ with comorbidities). ESG remains largely a private procedure in the UK, which is why many patients look abroad for more affordable access.",
  },
  {
    question: "How long do I need to stay in Istanbul?",
    answer: "Most UK patients stay for 3–4 days in total. You'll typically arrive the day before your procedure, have the ESG performed on day two, rest and recover at your hotel on day three, and fly home on day four. Direct flights from London, Manchester, Birmingham, and Edinburgh to Istanbul take approximately 3.5–4 hours.",
  },
  {
    question: "Is the ESG procedure painful?",
    answer: "ESG is performed under general anaesthesia, so you won't feel anything during the procedure. Afterwards, most patients experience mild discomfort, bloating, or nausea for 1–3 days, which is easily managed with prescribed medication. Compared to surgical alternatives, the recovery is significantly more comfortable.",
  },
  {
    question: "Will I regain weight after ESG?",
    answer: "Long-term results depend on your commitment to lifestyle changes. ESG provides a powerful structural tool — your stomach is physically smaller — but sustained results require following your nutrition plan, staying active, and attending follow-up consultations. Our 12-month aftercare programme with a UK-registered dietitian helps ensure lasting results.",
  },
  {
    question: "How does ESG compare to Wegovy or Ozempic?",
    answer: "While GLP-1 medications like Wegovy and Ozempic can be effective initially, many patients experience weight regain once they stop the medication. ESG provides a one-time, physical change to your stomach that supports long-term portion control. Many patients view ESG as the next step when medications plateau or become too expensive to maintain monthly.",
  },
  {
    question: "What BMI do I need for ESG?",
    answer: "ESG is typically recommended for patients with a BMI between 30 and 40. It's ideal for those who haven't achieved their goals with diet and exercise alone, aren't ready for or don't qualify for surgical options, or want a less invasive approach to weight loss.",
  },
  {
    question: "Is it safe to have a medical procedure abroad?",
    answer: "Istanbul Bariatric Center operates within Liv Hospital, which holds JCI (Joint Commission International) accreditation — the gold standard in international healthcare. Dr Murat Ustun has performed thousands of successful ESG procedures. We provide the same (or higher) standards of care as private UK clinics, with dedicated UK patient coordinators who speak your language and understand your expectations.",
  },
  {
    question: "What's included in the all-inclusive package?",
    answer: "Our ESG packages include the procedure itself, JCI-accredited hospital stay, pre-operative blood tests and assessments, VIP airport transfers, hotel accommodation (e.g., Radisson Hotel), a UK-registered dietitian for 12 months, post-operative medications, and ongoing aftercare support. There are no hidden fees.",
  },
];

const journeySteps = [
  {
    step: 1,
    title: "Free Online Consultation",
    desc: "Contact us via WhatsApp or our website. Our team will review your BMI, medical history, and goals to confirm you're a suitable candidate for ESG.",
    icon: MessageCircle,
  },
  {
    step: 2,
    title: "Book Your Travel",
    desc: "Choose your dates and we'll arrange everything. Direct flights from London, Manchester, Birmingham, and Edinburgh to Istanbul take just 3.5–4 hours.",
    icon: Plane,
  },
  {
    step: 3,
    title: "VIP Airport Transfer & Hotel",
    desc: "A private driver meets you at Istanbul Airport and takes you to your hotel (e.g., Radisson Hotel). Relax and prepare for the next day.",
    icon: Hotel,
  },
  {
    step: 4,
    title: "Pre-Operative Assessment",
    desc: "Comprehensive blood tests and health screening at the hospital. Meet Dr Murat Ustun and the medical team, review the procedure plan.",
    icon: Stethoscope,
  },
  {
    step: 5,
    title: "ESG Procedure",
    desc: "The ESG is performed under general anaesthesia at JCI-accredited Liv Hospital. Duration: approximately 60–90 minutes. No incisions, no scars.",
    icon: HeartPulse,
  },
  {
    step: 6,
    title: "Recovery & Return Home",
    desc: "Rest at your hotel with full medical support available. Most patients fly home within 2–3 days feeling well and ready to begin their new journey.",
    icon: Plane,
  },
];

const comparisonMeds = [
  { factor: "Long-Term Effectiveness", meds: "Often limited — weight returns when medication stops", esg: "More durable — physical stomach reduction is permanent" },
  { factor: "Side Effects", meds: "Common (nausea, diarrhoea, pancreatitis risk)", esg: "Minimal (mild discomfort for 1–3 days)" },
  { factor: "Cost Over Time", meds: "£200–400/month ongoing (£2,400–4,800/year)", esg: "One-time investment from £5,700" },
  { factor: "Weight Regain", meds: "Frequent when medication is stopped", esg: "Less common with lifestyle adherence" },
  { factor: "NHS Availability", meds: "Limited — strict criteria and long waits", esg: "Not available on NHS" },
  { factor: "Procedure Required", meds: "No — weekly/daily injections", esg: "Yes — one 60–90 minute endoscopic procedure" },
];

const comparisonSurgery = [
  { feature: "Procedure Type", esg: "Endoscopic (through mouth)", sleeve: "Laparoscopic surgery (4–5 incisions)" },
  { feature: "Anaesthesia", esg: "General", sleeve: "General" },
  { feature: "Duration", esg: "60–90 minutes", sleeve: "~60 minutes" },
  { feature: "Hospital Stay", esg: "Same day or 1 night", sleeve: "2–3 nights" },
  { feature: "Recovery Time", esg: "1–3 days", sleeve: "2–3 weeks" },
  { feature: "Scarring", esg: "None", sleeve: "4–5 small scars" },
  { feature: "Weight Loss", esg: "15–20% total body weight", sleeve: "60–70% excess weight" },
  { feature: "Reversibility", esg: "Potentially reversible", sleeve: "Permanent (stomach removed)" },
  { feature: "Risk Profile", esg: "Very low", sleeve: "Low" },
  { feature: "Starting Price (Istanbul)", esg: "From £5,700", sleeve: "From £3,400" },
];

const ukTestimonials = [
  {
    name: "Sarah J.",
    location: "London",
    text: "I'd been on Wegovy for 8 months and hit a plateau. After researching ESG, I found Istanbul Bariatric Center and everything was brilliant — from the airport pickup to the aftercare. I've lost 19kg in 6 months and feel incredible.",
    weight: "19kg lost",
    time: "6 months",
  },
  {
    name: "Claire M.",
    location: "Manchester",
    text: "The whole experience was seamless. Dr Murat and his team made me feel completely safe. The hospital was spotless and modern — better than any private clinic I'd visited in the UK. I'd recommend it to anyone considering ESG.",
    weight: "15kg lost",
    time: "4 months",
  },
  {
    name: "David R.",
    location: "Birmingham",
    text: "I was nervous about going abroad for a medical procedure but everything was first-class. The VIP transfer, the Radisson Hotel, Liv Hospital — it all exceeded my expectations. The cost savings compared to London were enormous.",
    weight: "22kg lost",
    time: "8 months",
  },
];

function BMICalculator() {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [bmi, setBmi] = useState<number | null>(null);

  const calculateBMI = () => {
    const h = parseFloat(height) / 100;
    const w = parseFloat(weight);
    if (h > 0 && w > 0) {
      setBmi(Math.round((w / (h * h)) * 10) / 10);
    }
  };

  const getBMICategory = (bmi: number) => {
    if (bmi < 18.5) return { label: "Underweight", color: "text-blue-600", eligible: false };
    if (bmi < 25) return { label: "Normal weight", color: "text-green-600", eligible: false };
    if (bmi < 30) return { label: "Overweight", color: "text-yellow-600", eligible: false };
    if (bmi < 35) return { label: "Obese (Class I)", color: "text-orange-600", eligible: true };
    if (bmi < 40) return { label: "Obese (Class II)", color: "text-red-500", eligible: true };
    return { label: "Severely Obese (Class III)", color: "text-red-700", eligible: false, surgical: true };
  };

  return (
    <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-200" data-testid="bmi-calculator-uk">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
          <Calculator className="w-6 h-6 text-primary" />
        </div>
        <div>
          <h3 className="text-xl font-bold text-slate-900">Am I a Candidate for ESG?</h3>
          <p className="text-sm text-slate-500">Check your BMI to see if ESG could be right for you</p>
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-4 mb-4">
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">Height (cm)</label>
          <input
            type="number"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            placeholder="e.g. 170"
            className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none"
            data-testid="input-height-uk"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">Weight (kg)</label>
          <input
            type="number"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            placeholder="e.g. 95"
            className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none"
            data-testid="input-weight-uk"
          />
        </div>
      </div>

      <Button
        onClick={calculateBMI}
        className="w-full bg-primary hover:bg-primary/90 h-12"
        data-testid="button-calculate-bmi-uk"
      >
        Calculate My BMI
      </Button>

      {bmi !== null && (
        <div className="mt-6 p-4 rounded-xl bg-slate-50 border border-slate-200" data-testid="bmi-result-uk">
          <div className="text-center mb-3">
            <span className="text-4xl font-bold text-primary">{bmi}</span>
            <p className={`text-lg font-semibold ${getBMICategory(bmi).color}`}>{getBMICategory(bmi).label}</p>
          </div>
          {getBMICategory(bmi).eligible ? (
            <div className="bg-green-50 border border-green-200 rounded-lg p-3 text-center">
              <p className="text-green-800 font-medium">You may be a good candidate for ESG!</p>
              <p className="text-green-600 text-sm mt-1">Contact us for a free consultation to discuss your options.</p>
            </div>
          ) : getBMICategory(bmi).surgical ? (
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 text-center">
              <p className="text-blue-800 font-medium">You may benefit more from bariatric surgery.</p>
              <p className="text-blue-600 text-sm mt-1">
                <Link href="/treatments" className="underline">View our surgical options</Link> or contact us to discuss.
              </p>
            </div>
          ) : (
            <div className="bg-slate-100 border border-slate-200 rounded-lg p-3 text-center">
              <p className="text-slate-700 font-medium">ESG is typically recommended for BMI 30–40.</p>
              <p className="text-slate-500 text-sm mt-1">Contact us to discuss your options.</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

function FAQAccordion({ faqs }: { faqs: typeof ukFaqs }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="space-y-3" data-testid="faq-accordion-uk">
      {faqs.map((faq, i) => (
        <div
          key={i}
          className={`rounded-xl border transition-all duration-200 ${openIndex === i ? "border-primary/30 bg-white shadow-md" : "border-slate-200 bg-white hover:border-slate-300"}`}
          data-testid={`faq-item-uk-${i}`}
        >
          <button
            className="w-full flex items-center justify-between p-5 text-left"
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
            data-testid={`button-faq-uk-${i}`}
          >
            <span className="font-semibold text-slate-900 pr-4">{faq.question}</span>
            {openIndex === i ? (
              <ChevronUp className="w-5 h-5 text-primary shrink-0" />
            ) : (
              <ChevronDown className="w-5 h-5 text-slate-400 shrink-0" />
            )}
          </button>
          {openIndex === i && (
            <div className="px-5 pb-5 text-slate-600 leading-relaxed animate-in fade-in duration-200">
              {faq.answer}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default function ESGUK() {
  const ukFlag = "🇬🇧";
  const trFlag = "🇹🇷";

  const esgUKSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalProcedure",
    "name": "Endoscopic Sleeve Gastroplasty for UK Patients",
    "alternateName": ["ESG UK", "ESG Turkey for UK Patients", "Non-Surgical Weight Loss UK"],
    "description": "Endoscopic Sleeve Gastroplasty (ESG) for UK patients at Istanbul Bariatric Center. Non-surgical, incision-free weight loss procedure with all-inclusive packages from £5,700. Save up to 70% compared to UK private clinics.",
    "procedureType": "Endoscopic",
    "bodyLocation": "Stomach",
    "preparation": "Free online consultation, BMI evaluation, medical history review",
    "followup": "12-month UK-based aftercare with registered dietitian",
    "howPerformed": "Endoscopic suturing device inserted through the mouth to reduce stomach size by 70-80%. No incisions required.",
    "status": "https://schema.org/ActiveActionStatus",
    "relevantSpecialty": { "@type": "MedicalSpecialty", "name": "Bariatric Surgery" },
  };

  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="ESG for UK Patients | Endoscopic Sleeve Gastroplasty Turkey | Save Up to 70%"
        description="ESG for UK patients. Affordable non-surgical weight loss in Turkey. All-inclusive from £5,700. Save up to 70% vs UK clinics. Free consultation."
        keywords="ESG UK, endoscopic sleeve gastroplasty UK, weight loss Turkey UK patients, non surgical weight loss UK, ESG vs Wegovy UK, ESG cost UK, ESG alternative UK, bariatric surgery Turkey UK, ESG Istanbul UK patients, gastric sleeve alternative UK"
        url="/esg/uk"
      />
      <JsonLd data={esgUKSchema} />
      <JsonLd data={structuredData.createFAQ(ukFaqs)} />
      <JsonLd data={structuredData.createBreadcrumb([
        { name: "Home", url: "/" },
        { name: "Treatments", url: "/treatments" },
        { name: "ESG", url: "/esg" },
        { name: "ESG for UK Patients", url: "/esg/uk" },
      ])} />
      <Navbar />

      {/* Hero Section */}
      <section className="relative bg-slate-900 text-white pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-primary/30 opacity-90" />
        <div
          className="absolute inset-0 opacity-15"
          style={{
            backgroundImage: "url('/esg-uk-hero.webp')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center gap-3 mb-6">
              <span className="text-4xl">{ukFlag}</span>
              <Badge variant="outline" className="border-white/30 text-white/90 text-sm px-4 py-1">
                Tailored for UK Patients
              </Badge>
              <span className="text-4xl">{trFlag}</span>
            </div>
            <h1 className="text-3xl md:text-5xl lg:text-5xl font-bold mb-6 leading-tight" data-testid="heading-esg-uk-hero">
              Endoscopic Sleeve Gastroplasty (ESG) for UK Patients — A Safer, Non-Surgical Weight Loss Solution in Turkey
            </h1>
            <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto mb-8 leading-relaxed">
              Struggling with weight loss? Tried every diet, gym membership, and even medications like Wegovy or Ozempic — but the weight keeps coming back? ESG offers UK patients a powerful, non-surgical alternative at a fraction of private UK costs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 font-bold text-lg h-14 px-8"
                onClick={() => window.open("https://wa.me/447491068686?text=Hi%2C%20I%27m%20a%20UK%20patient%20interested%20in%20ESG", "_blank")}
                data-testid="button-hero-whatsapp-uk"
              >
                <Phone className="w-5 h-5 mr-2" />
                Free UK Consultation
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white/30 text-white hover:bg-white/10 font-bold text-lg h-14 px-8"
                onClick={() => document.getElementById("bmi-section")?.scrollIntoView({ behavior: "smooth" })}
                data-testid="button-hero-bmi-uk"
              >
                <Calculator className="w-5 h-5 mr-2" />
                Check If I Qualify
              </Button>
            </div>
            <div className="flex flex-wrap gap-6 justify-center mt-10 text-sm text-slate-400">
              <span className="flex items-center gap-2"><ShieldCheck className="w-4 h-4" /> JCI-Accredited Hospital</span>
              <span className="flex items-center gap-2"><BadgePoundSterling className="w-4 h-4" /> Save up to 70%</span>
              <span className="flex items-center gap-2"><Clock className="w-4 h-4" /> 3–4 Day Trip</span>
              <span className="flex items-center gap-2"><Stethoscope className="w-4 h-4" /> 8,000+ Procedures</span>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction - What is ESG */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-slate-900">What Is Endoscopic Sleeve Gastroplasty (ESG)?</h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                Endoscopic Sleeve Gastroplasty (ESG) is a cutting-edge, <strong>incision-free weight loss procedure</strong> that reduces the size of your stomach using an endoscope inserted through the mouth. Unlike traditional <Link href="/sleeve-gastrectomy" className="text-primary hover:underline">gastric sleeve surgery</Link>, no cuts are made on the abdomen, no part of the stomach is removed, and recovery is significantly faster.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed">
                The procedure uses a specialised suturing system — the Apollo OverStitch technology — to reshape and reduce your stomach by up to <strong>70–80%</strong>, helping you feel full faster and eat less. It takes approximately 60–90 minutes under general anaesthesia, and most patients return home the same day or after one night in hospital.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed">
                For UK patients, ESG represents a breakthrough alternative to both surgical weight loss and long-term medication use. It bridges the gap between lifestyle interventions that haven't worked and invasive surgery that many people aren't ready for — or don't qualify for through the NHS.
              </p>
              <div className="grid grid-cols-3 gap-4 pt-4">
                <div className="text-center p-4 bg-primary/5 rounded-xl">
                  <div className="text-2xl font-bold text-primary">60–90</div>
                  <p className="text-sm text-slate-600 mt-1">Minutes</p>
                </div>
                <div className="text-center p-4 bg-primary/5 rounded-xl">
                  <div className="text-2xl font-bold text-primary">Zero</div>
                  <p className="text-sm text-slate-600 mt-1">Incisions</p>
                </div>
                <div className="text-center p-4 bg-primary/5 rounded-xl">
                  <div className="text-2xl font-bold text-primary">1–3</div>
                  <p className="text-sm text-slate-600 mt-1">Days Recovery</p>
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <img
                src="/esg-procedure-cdn.webp"
                alt="ESG Endoscopic Sleeve Gastroplasty Procedure Diagram"
                className="rounded-2xl shadow-xl max-w-md w-full"
                width="400"
                height="400"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why UK Patients Choose ESG Abroad */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              {ukFlag} Why UK Patients Are Choosing ESG in Turkey
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Thousands of British patients travel to Istanbul each year for bariatric procedures. Here's why ESG abroad is becoming the preferred choice.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-200 hover:shadow-md transition-shadow" data-testid="card-uk-reason-access">
              <div className="w-14 h-14 rounded-full bg-red-50 flex items-center justify-center mb-5">
                <ShieldCheck className="w-7 h-7 text-red-500" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Limited NHS Access</h3>
              <p className="text-slate-600 leading-relaxed">
                ESG is not widely available on the NHS. Most NHS bariatric pathways focus on surgical options with strict eligibility criteria — often requiring a BMI of 40+ and years of documented weight management attempts. Private ESG in the UK remains limited to a handful of specialist centres, with long waiting lists even for initial consultations.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-200 hover:shadow-md transition-shadow" data-testid="card-uk-reason-cost">
              <div className="w-14 h-14 rounded-full bg-green-50 flex items-center justify-center mb-5">
                <PoundSterling className="w-7 h-7 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Significant Cost Savings</h3>
              <p className="text-slate-600 leading-relaxed">
                In the UK, ESG typically costs <strong>£8,000–£15,000</strong> at private clinics. At Istanbul Bariatric Center, <strong>all-inclusive packages start from £5,700</strong> — that's up to 60–70% savings. Your package includes the procedure, hospital stay, hotel accommodation, airport transfers, pre-operative tests, and 12-month dietitian support.
              </p>
              <div className="mt-4 p-3 bg-green-50 rounded-lg">
                <p className="text-green-800 font-semibold text-sm">
                  Average UK patient saves £5,000–£10,000
                </p>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-200 hover:shadow-md transition-shadow" data-testid="card-uk-reason-time">
              <div className="w-14 h-14 rounded-full bg-blue-50 flex items-center justify-center mb-5">
                <Clock className="w-7 h-7 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">No Waiting Lists</h3>
              <p className="text-slate-600 leading-relaxed">
                Even private consultations in cities like London, Manchester, or Birmingham can take weeks or months. With Istanbul Bariatric Center, you can have your consultation within days, your procedure scheduled promptly, and your entire treatment completed within a single short trip — typically 3–4 days from departure to return.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ESG vs Medications Comparison */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              ESG vs Weight Loss Medications in the UK
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Many UK patients start their weight loss journey with GLP-1 medications like Wegovy or Ozempic. But what happens when the medications plateau, the side effects become difficult, or the monthly costs add up? ESG is increasingly seen as the next step.
            </p>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-sm">
            <table className="w-full text-left" data-testid="table-esg-vs-meds-uk">
              <thead>
                <tr className="bg-slate-900 text-white">
                  <th className="p-4 font-semibold text-sm uppercase tracking-wider">Factor</th>
                  <th className="p-4 font-semibold text-sm uppercase tracking-wider">Wegovy / Ozempic</th>
                  <th className="p-4 font-semibold text-sm uppercase tracking-wider bg-primary/90">ESG</th>
                </tr>
              </thead>
              <tbody>
                {comparisonMeds.map((row, i) => (
                  <tr
                    key={i}
                    className={`border-b border-slate-100 hover:bg-blue-50/50 transition-colors ${i % 2 === 0 ? "bg-white" : "bg-slate-50/50"}`}
                    data-testid={`row-meds-comparison-${i}`}
                  >
                    <td className="p-4 font-medium text-slate-900">{row.factor}</td>
                    <td className="p-4 text-slate-700">{row.meds}</td>
                    <td className="p-4 text-slate-700 bg-primary/5 font-medium">{row.esg}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="text-sm text-slate-500 mt-4 text-center">
            ESG provides a one-time physical intervention that supports long-term weight management without ongoing medication costs.
          </p>
        </div>
      </section>

      {/* ESG vs Gastric Sleeve */}
      <section className="py-20 bg-blue-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              ESG vs Gastric Sleeve Surgery
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Not sure whether ESG or <Link href="/sleeve-gastrectomy" className="text-primary hover:underline">gastric sleeve surgery</Link> is right for you? Here's a detailed comparison to help you decide. ESG is ideal for patients seeking a less aggressive, non-surgical approach.
            </p>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-sm">
            <table className="w-full text-left" data-testid="table-esg-vs-sleeve-uk">
              <thead>
                <tr className="bg-slate-900 text-white">
                  <th className="p-4 font-semibold text-sm uppercase tracking-wider">Feature</th>
                  <th className="p-4 font-semibold text-sm uppercase tracking-wider bg-primary/90">ESG</th>
                  <th className="p-4 font-semibold text-sm uppercase tracking-wider">Gastric Sleeve</th>
                </tr>
              </thead>
              <tbody>
                {comparisonSurgery.map((row, i) => (
                  <tr
                    key={i}
                    className={`border-b border-slate-100 hover:bg-blue-50/50 transition-colors ${i % 2 === 0 ? "bg-white" : "bg-slate-50/50"}`}
                    data-testid={`row-sleeve-comparison-${i}`}
                  >
                    <td className="p-4 font-medium text-slate-900">{row.feature}</td>
                    <td className="p-4 text-slate-700 bg-primary/5 font-medium">{row.esg}</td>
                    <td className="p-4 text-slate-700">{row.sleeve}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="text-sm text-slate-500 mt-4 text-center">
            Both procedures are performed at JCI-accredited Liv Hospital, Istanbul. <Link href="/treatments" className="text-primary hover:underline">View all treatment options</Link>.
          </p>
        </div>
      </section>

      {/* Why Choose IBC */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold mb-4">Why Choose Istanbul Bariatric Center?</h2>
            <p className="text-lg text-slate-300 max-w-3xl mx-auto">
              We combine world-class medical expertise with a patient experience specifically tailored for UK travellers.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white/10 backdrop-blur rounded-xl p-6 text-center" data-testid="card-uk-ibc-surgeon">
              <div className="w-14 h-14 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                <Stethoscope className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-lg font-bold mb-2">
                <a href="https://drmuratustun.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Dr Murat Ustun</a>
              </h3>
              <p className="text-slate-300 text-sm">Pioneer of ESG in Turkey with thousands of successful bariatric procedures. Internationally recognised for endoscopic innovation and patient-centred care.</p>
            </div>

            <div className="bg-white/10 backdrop-blur rounded-xl p-6 text-center" data-testid="card-uk-ibc-hospital">
              <div className="w-14 h-14 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                <ShieldCheck className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-lg font-bold mb-2">JCI-Accredited Hospital</h3>
              <p className="text-slate-300 text-sm">All procedures are performed at Liv Hospital, Istanbul — holding the gold standard Joint Commission International accreditation for patient safety and quality.</p>
            </div>

            <div className="bg-white/10 backdrop-blur rounded-xl p-6 text-center" data-testid="card-uk-ibc-uk-team">
              <div className="w-14 h-14 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                <Users className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-lg font-bold mb-2">{ukFlag} UK Patient Team</h3>
              <p className="text-slate-300 text-sm">Dedicated UK patient coordinators who understand British expectations. Clear communication, transparent pricing, structured aftercare. Support available via UK WhatsApp number.</p>
            </div>

            <div className="bg-white/10 backdrop-blur rounded-xl p-6 text-center" data-testid="card-uk-ibc-package">
              <div className="w-14 h-14 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                <BadgePoundSterling className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-lg font-bold mb-2">All-Inclusive from £5,700</h3>
              <p className="text-slate-300 text-sm">No hidden fees. Packages include procedure, hospital stay, hotel, airport transfers, pre-op tests, UK dietitian, and 12-month aftercare programme.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Step by Step Journey */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Your ESG Journey — Step by Step
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              From your first enquiry to returning home, we take care of every detail. Here's exactly what to expect as a UK patient travelling to Istanbul for ESG.
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-primary/20 hidden md:block" />

            <div className="space-y-8">
              {journeySteps.map((step) => {
                const Icon = step.icon;
                return (
                  <div key={step.step} className="relative flex gap-6" data-testid={`step-journey-uk-${step.step}`}>
                    <div className="relative z-10 shrink-0">
                      <div className="w-16 h-16 rounded-full bg-primary text-white flex items-center justify-center shadow-lg">
                        <Icon className="w-7 h-7" />
                      </div>
                    </div>
                    <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200 flex-1 hover:shadow-md transition-shadow">
                      <div className="flex items-center gap-3 mb-2">
                        <Badge variant="outline" className="text-primary border-primary/30">Step {step.step}</Badge>
                        <h3 className="text-lg font-bold text-slate-900">{step.title}</h3>
                      </div>
                      <p className="text-slate-600 leading-relaxed">{step.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Hospital & Comfort Image Section */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
            <div>
              <img
                src="/esg-uk-hospital.webp"
                alt="VIP hospital suite at Liv Hospital Istanbul for UK patients"
                className="rounded-2xl shadow-xl w-full"
                width="600"
                height="400"
                loading="lazy"
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-slate-900">World-Class Comfort & Care</h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                Your comfort is our priority throughout your stay in Istanbul. From the moment you land, you'll experience VIP-level service designed specifically for international patients. Our partnership with luxury hotels like the Radisson ensures you have a comfortable base, while Liv Hospital provides state-of-the-art medical facilities that meet and exceed international standards.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed">
                Every aspect of your stay is coordinated by our UK patient team — from arranging your airport transfer to ensuring your hotel room is ready with everything you need for recovery. Many UK patients describe their experience as "better than any private clinic at home."
              </p>
              <div className="flex flex-wrap gap-3">
                <Badge className="bg-primary/10 text-primary hover:bg-primary/10 px-3 py-1">VIP Airport Transfers</Badge>
                <Badge className="bg-primary/10 text-primary hover:bg-primary/10 px-3 py-1">Radisson Hotel</Badge>
                <Badge className="bg-primary/10 text-primary hover:bg-primary/10 px-3 py-1">Liv Hospital (JCI)</Badge>
                <Badge className="bg-primary/10 text-primary hover:bg-primary/10 px-3 py-1">24/7 Patient Support</Badge>
                <Badge className="bg-primary/10 text-primary hover:bg-primary/10 px-3 py-1">UK WhatsApp Line</Badge>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">ESG Results — What UK Patients Can Expect</h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              ESG delivers meaningful, sustainable weight loss when combined with the lifestyle changes our aftercare programme supports.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="bg-primary text-white rounded-2xl p-8 text-center" data-testid="stat-weight-loss-uk">
              <TrendingDown className="w-10 h-10 mx-auto mb-3 opacity-80" />
              <div className="text-4xl font-bold mb-2">15–20%</div>
              <p className="text-white/80">Total Body Weight Loss</p>
              <p className="text-sm text-white/60 mt-2">Over 12–18 months</p>
            </div>
            <div className="bg-primary text-white rounded-2xl p-8 text-center" data-testid="stat-bmi-38-uk">
              <Activity className="w-10 h-10 mx-auto mb-3 opacity-80" />
              <div className="text-4xl font-bold mb-2">~20kg</div>
              <p className="text-white/80">Average Loss (BMI 38+)</p>
              <p className="text-sm text-white/60 mt-2">Within first 6 months</p>
            </div>
            <div className="bg-primary text-white rounded-2xl p-8 text-center" data-testid="stat-health-uk">
              <HeartPulse className="w-10 h-10 mx-auto mb-3 opacity-80" />
              <div className="text-4xl font-bold mb-2">Significant</div>
              <p className="text-white/80">Health Improvements</p>
              <p className="text-sm text-white/60 mt-2">Diabetes, blood pressure, sleep apnoea</p>
            </div>
          </div>

          <div className="p-6 bg-blue-50 rounded-xl border border-blue-100">
            <p className="text-slate-700 leading-relaxed">
              Results depend on your commitment to the post-procedure nutrition plan, regular physical activity, and ongoing follow-up support. Our 12-month aftercare programme with a UK-registered dietitian is included in all packages and is designed to help you achieve — and maintain — your weight loss goals. <Link href="/results" className="text-primary hover:underline font-medium">View patient success stories</Link>.
            </p>
          </div>
        </div>
      </section>

      {/* UK Testimonials */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">{ukFlag} What UK Patients Say</h2>
            <p className="text-lg text-slate-600">Real experiences from British patients who chose Istanbul Bariatric Center for ESG.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {ukTestimonials.map((t, i) => (
              <div key={i} className="bg-white rounded-2xl p-8 shadow-sm border border-slate-200" data-testid={`testimonial-uk-${i}`}>
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, si) => (
                    <Star key={si} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-slate-600 italic leading-relaxed mb-6">&ldquo;{t.text}&rdquo;</p>
                <div className="flex items-center justify-between mt-auto">
                  <div>
                    <p className="font-bold text-slate-900">{t.name}</p>
                    <p className="text-sm text-slate-500 flex items-center gap-1">
                      <MapPin className="w-3 h-3" /> {t.location}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="font-bold text-primary">{t.weight}</p>
                    <p className="text-xs text-slate-500">in {t.time}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BMI Calculator & Candidacy Section */}
      <section className="py-20" id="bmi-section">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-start max-w-6xl mx-auto">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-slate-900">Who Is a Good Candidate for ESG?</h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                ESG is designed for people who have struggled with long-term weight loss and are looking for a solution that falls between lifestyle interventions and major surgery. You may be a good candidate if:
              </p>
              <div className="space-y-3">
                {[
                  "Your BMI is between 30 and 40",
                  "You've struggled with long-term weight loss despite diet and exercise",
                  "You're not ready for — or don't want — invasive surgery",
                  "Weight loss medications haven't been effective or are too expensive",
                  "You want a procedure with minimal recovery time",
                  "You have obesity-related health conditions (Type 2 diabetes, high blood pressure, sleep apnoea)",
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <p className="text-slate-600">{item}</p>
                  </div>
                ))}
              </div>
              <p className="text-slate-600 leading-relaxed">
                Before proceeding, our medical team will conduct a thorough evaluation of your health history to ensure ESG is the right procedure for you. If your BMI is above 40, <Link href="/sleeve-gastrectomy" className="text-primary hover:underline">gastric sleeve surgery</Link> or <Link href="/mini-gastric-bypass" className="text-primary hover:underline">gastric bypass</Link> may be more appropriate.
              </p>
            </div>
            <BMICalculator />
          </div>
        </div>
      </section>

      {/* Safety Section */}
      <section className="py-20 bg-green-50">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-slate-900">Safety & Standards</h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                ESG is considered one of the safest weight loss procedures available when performed by experienced specialists in an accredited facility. Compared to surgical alternatives, ESG offers lower complication rates, no surgical scars, and significantly faster recovery.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed">
                At Istanbul Bariatric Center, your safety is paramount. <a href="https://drmuratustun.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Dr Murat Ustun</a> has performed thousands of ESG procedures with an excellent safety record. All procedures take place at JCI-accredited Liv Hospital, which meets the same international standards as top UK and US hospitals.
              </p>
              <div className="space-y-3">
                {[
                  "JCI-accredited hospital (gold standard international certification)",
                  "Board-certified surgeon with thousands of ESG procedures",
                  "Modern endoscopic suturing technology (Apollo OverStitch)",
                  "Full pre-operative health screening",
                  "24/7 post-procedure medical support",
                  "Comprehensive insurance and medical protocols",
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <ShieldCheck className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
                    <p className="text-slate-700">{item}</p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <img
                src="/esg-uk-consultation.webp"
                alt="Medical consultation with UK patient at Istanbul Bariatric Center"
                className="rounded-2xl shadow-xl w-full"
                width="600"
                height="400"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Life After ESG */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-slate-900 mb-4 text-center">Life After ESG</h2>
          <p className="text-lg text-slate-600 text-center mb-12 max-w-3xl mx-auto">
            Your ESG procedure is just the beginning. Here's what to expect in the weeks and months following your treatment, and how our aftercare supports your long-term success.
          </p>

          <div className="space-y-4">
            {[
              { phase: "First 8 Hours", desc: "Clear liquids only. Rest and recovery at the hospital or hotel with medical support available.", icon: "🏥", color: "border-red-200 bg-red-50" },
              { phase: "Weeks 1–2", desc: "Full liquid diet — protein shakes, clear soups, water. Your stomach is healing and adjusting to its new size.", icon: "🥤", color: "border-orange-200 bg-orange-50" },
              { phase: "Weeks 3–6", desc: "Semi-solid foods introduced gradually. Pureed meals and soft proteins. Your dietitian will guide every step.", icon: "🥣", color: "border-yellow-200 bg-yellow-50" },
              { phase: "Week 7 Onwards", desc: "Gradual transition to healthy solid foods. Focus on protein-rich, balanced meals with controlled portions.", icon: "🥗", color: "border-green-200 bg-green-50" },
              { phase: "Months 3–12", desc: "Continued dietary guidance from your UK-registered dietitian. Regular check-ins to track progress and adjust your nutrition plan.", icon: "📊", color: "border-blue-200 bg-blue-50" },
            ].map((phase, i) => (
              <div key={i} className={`flex items-start gap-5 p-6 rounded-xl border ${phase.color}`} data-testid={`phase-aftercare-uk-${i}`}>
                <span className="text-3xl shrink-0">{phase.icon}</span>
                <div>
                  <h4 className="font-bold text-slate-900 mb-1">{phase.phase}</h4>
                  <p className="text-slate-600 leading-relaxed">{phase.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 p-6 bg-primary/5 rounded-xl border border-primary/10">
            <div className="flex items-start gap-4">
              <Utensils className="w-8 h-8 text-primary shrink-0 mt-1" />
              <div>
                <h4 className="font-bold text-slate-900 mb-2">12-Month UK Dietitian Support Included</h4>
                <p className="text-slate-600 leading-relaxed">
                  Every ESG package includes access to a UK-registered dietitian who provides personalised meal plans, regular consultations, and ongoing support throughout your first year. This isn't generic advice — it's a structured programme tailored to your lifestyle, preferences, and goals.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Turkey */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">{trFlag} Why Turkey for Medical Tourism?</h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Turkey has become one of the world's leading destinations for medical tourism, and Istanbul is at the heart of this transformation.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Award, title: "Global Healthcare Hub", desc: "Turkey performs over 1 million medical tourism procedures annually, with internationally accredited hospitals across Istanbul." },
              { icon: Stethoscope, title: "Highly Experienced Surgeons", desc: "Turkish bariatric surgeons are among the most experienced in the world, with many trained internationally and members of IFSO." },
              { icon: PoundSterling, title: "Competitive Pricing", desc: "World-class medical care at a fraction of UK costs, without compromising on quality, technology, or safety standards." },
              { icon: Plane, title: "Easy Travel from UK", desc: "Direct flights from London, Manchester, Birmingham, Edinburgh, and more. Just 3.5–4 hours to Istanbul." },
              { icon: MapPin, title: "Istanbul — A World City", desc: "A vibrant, modern city bridging Europe and Asia. Safe, well-connected, and welcoming to international visitors." },
              { icon: ShieldCheck, title: "International Standards", desc: "Multiple JCI-accredited hospitals, strict regulatory oversight, and medical tourism infrastructure built for international patients." },
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <div key={i} className="bg-white rounded-xl p-6 shadow-sm border border-slate-200" data-testid={`card-turkey-reason-${i}`}>
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-bold text-slate-900 mb-2">{item.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20" data-testid="section-faq-uk">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Frequently Asked Questions — ESG for UK Patients</h2>
            <p className="text-lg text-slate-600">Everything you need to know before travelling to Istanbul for ESG.</p>
          </div>
          <FAQAccordion faqs={ukFaqs} />
        </div>
      </section>

      {/* Internal Links Section */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-2xl font-bold text-slate-900 mb-8 text-center">Explore More Treatment Options</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { title: "ESG Procedure Details", href: "/esg", desc: "Full ESG procedure information" },
              { title: "Gastric Sleeve Surgery", href: "/sleeve-gastrectomy", desc: "Most popular bariatric surgery" },
              { title: "Mini Gastric Bypass", href: "/mini-gastric-bypass", desc: "Combined restrictive & malabsorptive" },
              { title: "Gastric Balloon", href: "/gastric-balloon", desc: "Non-surgical temporary option" },
              { title: "All Treatments", href: "/treatments", desc: "Compare all procedures & pricing" },
              { title: "Patient Results", href: "/results", desc: "Before & after success stories" },
              { title: "Health Profile Assessment", href: "/health-profile", desc: "Check your eligibility" },
              { title: "About Us", href: "/about", desc: "Meet Dr Murat Ustun & the team" },
              { title: "Contact Us", href: "/contact", desc: "Get in touch with our UK team" },
            ].map((link, i) => (
              <Link key={i} href={link.href} className="flex items-center gap-3 p-4 bg-white rounded-xl border border-slate-200 hover:border-primary/30 hover:shadow-sm transition-all group" data-testid={`link-internal-uk-${i}`}>
                <ArrowRight className="w-4 h-4 text-primary shrink-0 group-hover:translate-x-1 transition-transform" />
                <div>
                  <p className="font-medium text-slate-900 group-hover:text-primary transition-colors">{link.title}</p>
                  <p className="text-xs text-slate-500">{link.desc}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white" data-testid="section-cta-uk">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <span className="text-5xl mb-6 block">{ukFlag}</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Start Your Weight Loss Journey Today</h2>
          <p className="text-xl text-white/80 mb-4 leading-relaxed">
            If you're in the UK and looking for a safe, effective, non-surgical weight loss solution, Endoscopic Sleeve Gastroplasty could be the answer you've been searching for.
          </p>
          <p className="text-lg text-white/70 mb-8">
            Contact our UK team today for a free online consultation. We'll assess your suitability, answer all your questions, and create a personalised treatment plan — with no obligation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white text-primary hover:bg-white/90 font-bold text-lg h-14 px-10"
              onClick={() => window.open("https://wa.me/447491068686?text=Hi%2C%20I%27m%20a%20UK%20patient%20interested%20in%20ESG", "_blank")}
              data-testid="button-cta-whatsapp-uk"
            >
              <Phone className="w-5 h-5 mr-2" />
              WhatsApp UK: +44 7491 068686
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white/30 text-white hover:bg-white/10 font-bold text-lg h-14 px-10"
              onClick={() => window.open("https://wa.me/905324131143?text=Hi%2C%20I%27m%20a%20UK%20patient%20interested%20in%20ESG", "_blank")}
              data-testid="button-cta-whatsapp-tr"
            >
              <Phone className="w-5 h-5 mr-2" />
              WhatsApp Turkey: +90 532 413 1143
            </Button>
          </div>
          <p className="text-white/50 mt-6 text-sm">
            Or email us at <a href="mailto:drmuratustun@gmail.com" className="text-white/70 hover:text-white underline">drmuratustun@gmail.com</a>
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}

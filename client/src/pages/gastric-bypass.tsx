import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { SEO, JsonLd, structuredData } from "@/components/seo";
import { Link } from "wouter";
import {
  MoneyHero,
  ProseSection,
  ComparisonBlock,
  Checklist,
  FAQSection,
  RelatedLinks,
  ConversionModule,
  ExpertPOV,
  StickyCTA,
  InlineCTA,
} from "@/components/money-page";

const faqs = [
  {
    question: "How much is gastric bypass in Turkey in 2026?",
    answer: "At Istanbul Bariatric Center, Roux-en-Y gastric bypass costs £5,000 for the recommended Relaxation package and £5,350 for Luxury. Both include surgery by Dr Üstün, two nights at Liv Hospital Vadistanbul, hotel accommodation, transfers and 12 months of WhatsApp aftercare including UK-registered dietitian support. Private UK treatment typically costs £10,000–£15,000.",
  },
  {
    question: "What is the difference between gastric bypass and mini gastric bypass?",
    answer: "Roux-en-Y uses two anastomoses in a Y-configuration; mini bypass, or OAGB, uses one anastomosis and a longer tubular pouch. OAGB is technically simpler and slightly quicker, while RYGB has a lower long-term bile-reflux risk and may be preferred after a failed sleeve. Weight-loss and diabetes-remission outcomes are broadly similar at five to seven years.",
  },
  {
    question: "Is gastric bypass reversible?",
    answer: "Technically yes, but reversal is a major operation and is rarely performed. Patients should treat gastric bypass as a permanent decision.",
  },
  {
    question: "Which is better — gastric sleeve or gastric bypass?",
    answer: "Neither is universally better. Sleeve is simpler and recovery is usually quicker. Bypass generally produces greater long-term weight loss and diabetes remission, and is often preferred for severe GORD or a large hiatus hernia. The decision depends on BMI, reflux, diabetes, anatomy and previous surgery.",
  },
  {
    question: "How much weight will I lose after gastric bypass?",
    answer: "Average excess weight loss is 65–80% at 18–24 months, roughly 30–35% of total starting body weight. Individual results vary with starting health, eating, activity and engagement with follow-up.",
  },
  {
    question: "Does gastric bypass cure type-2 diabetes?",
    answer: "Bypass can produce remission, not a permanent cure, in around 74% of people with type 2 diabetes at one year, decreasing to 38–54% at five years and beyond. Outcomes are often better with shorter disease duration and no insulin use. Medication must only be changed under clinical supervision.",
  },
  {
    question: "What is dumping syndrome and how common is it?",
    answer: "Dumping occurs when sugary or high-fat food passes too quickly from the pouch into the small intestine. Early dumping, 15–30 minutes after eating, can cause nausea, cramps and sweating; late dumping, one to three hours later, can cause low blood sugar. Some form affects 50–70% of RYGB patients in the early months and usually settles by month 6–12.",
  },
  {
    question: "How long is recovery from gastric bypass?",
    answer: "The package includes two hospital nights. Desk work may resume at 10–14 days, physical work at about four weeks and gym activity at six weeks after clearance. The phased diet progresses from liquids to purée, soft solids and a full diet over about six weeks.",
  },
  {
    question: "What supplements will I need for life?",
    answer: "Typical lifelong care includes a daily bariatric multivitamin, calcium citrate 1,200–1,500 mg, vitamin D3 2,000–3,000 IU, oral iron and vitamin B12 injections every three months or prescribed high-dose oral B12. Annual blood tests monitor iron, B12, folate, vitamin D, calcium and PTH.",
  },
  {
    question: "Can gastric bypass be revised if it fails?",
    answer: "Yes. Depending on the cause, options can include pouch revision, distalisation, conversion to another operation or endoscopic TORe to reduce a dilated outlet. Revision is more complex than primary surgery and requires detailed assessment. Dr Üstün has handled 300+ complex revisional cases.",
  },
  {
    question: "Is gastric bypass safe in Turkey?",
    answer: "No operation is risk-free. Safety depends on selection, surgeon experience, hospital resources and follow-up. Dr Üstün has performed 700+ bypass procedures, and care takes place at JCI-accredited Liv Hospital Vadistanbul with intensive care, imaging and interventional support.",
  },
  {
    question: "How many days do I stay in Istanbul for bypass?",
    answer: "The Relaxation itinerary is seven days and six nights: two nights in hospital and four nights in a 5-star hotel. Luxury includes two hospital nights and five nights in a luxury hotel. Confirm your personal itinerary before booking flights.",
  },
];

const medicalWebPage = {
  "@context": "https://schema.org",
  "@type": "MedicalWebPage",
  name: "Gastric Bypass Surgery in Turkey — Roux-en-Y, Cost, Recovery",
  url: "https://istanbulbariatriccenter.com/gastric-bypass",
  about: {
    "@type": "MedicalProcedure",
    name: "Roux-en-Y Gastric Bypass",
    procedureType: "Surgical",
    performedBy: { "@id": "https://istanbulbariatriccenter.com/#drmuratustun" },
    provider: { "@id": "https://istanbulbariatriccenter.com/#organization" },
    offers: [
      { "@type": "Offer", name: "Gastric Bypass Relaxation", price: "5000", priceCurrency: "GBP" },
      { "@type": "Offer", name: "Gastric Bypass Luxury", price: "5350", priceCurrency: "GBP" },
    ],
  },
  author: { "@id": "https://istanbulbariatriccenter.com/#drmuratustun" },
  publisher: { "@id": "https://istanbulbariatriccenter.com/#organization" },
};

const tableClass = "w-full text-left text-sm md:text-base";
const thClass = "p-4 font-semibold";
const tdClass = "p-4 border-t border-slate-200 align-top";

export default function GastricBypass() {
  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="Gastric Bypass Turkey 2026"
        description="Compare Roux-en-Y gastric bypass costs, candidacy, recovery and risks in Turkey. Dr Üstün's all-inclusive packages start from £5,000."
        image="/images/bypass/roux-en-y-anatomy.webp"
        url="/gastric-bypass"
        type="article"
        author="Op. Dr Murat Üstün, MD, PhD"
      />
      <JsonLd data={structuredData.createBreadcrumb([
        { name: "Home", url: "/" },
        { name: "Treatments", url: "/treatments" },
        { name: "Gastric Bypass Turkey", url: "/gastric-bypass" },
      ])} />
      <JsonLd data={medicalWebPage} />
      <JsonLd data={structuredData.createFAQ(faqs)} />
      <Navbar />

      <MoneyHero
        eyebrow="2026 guide for UK and international patients"
        title="Gastric Bypass Surgery in Turkey — Roux-en-Y, Cost, Recovery"
        subtitle="A UK-patient guide to Roux-en-Y gastric bypass in Istanbul — verified 2026 pricing, when bypass beats sleeve, honest risks, dumping syndrome, lifelong nutrition and a full seven-day journey plan."
        stats={[
          { value: "From £5,000", label: "All-inclusive" },
          { value: "2 nights", label: "In JCI hospital" },
          { value: "65–80%", label: "Excess weight loss" },
          { value: "700+", label: "Bypass cases by Dr Üstün" },
        ]}
      />

      <main>
        <section className="py-10 bg-blue-50">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="bg-white border-l-4 border-primary rounded-xl p-6 md:p-8 shadow-sm">
              <p className="text-sm font-bold text-primary tracking-widest mb-2">QUICK ANSWER</p>
              <p className="text-lg text-slate-700 leading-relaxed">
                Roux-en-Y gastric bypass in Turkey costs from £5,000 all-inclusive at Istanbul Bariatric Center, performed by Op. Dr Murat Üstün, who has 25+ years of experience and 700+ bypass cases, at JCI-accredited Liv Hospital Vadistanbul. Bypass may be preferred over sleeve for severe GORD, poorly controlled type 2 diabetes, BMI 45 or above, or a previous bariatric operation. Relaxation includes surgeon and anaesthetist fees, two hospital nights, four 5-star hotel nights, VIP transfers, half-board meals, a supplements pack and 12 months of WhatsApp aftercare including UK-registered dietitian support.
              </p>
            </div>
          </div>
        </section>

        <ComparisonBlock
          title="Gastric sleeve vs mini gastric bypass vs Roux-en-Y bypass"
          subtitle="All three are laparoscopic and can work well, but they suit different patients. Dr Üstün considers BMI, reflux, diabetes and previous surgery."
          columns={["Feature", "Gastric Sleeve", "Mini Bypass (OAGB)", "Roux-en-Y (RYGB)"]}
          rows={[
            ["How it works", "Removes about 80% of stomach", "Long pouch, one join, bypasses about 2 m bowel", "Small pouch and Y-shaped reconnection"],
            ["Anastomoses", "0", "1", "2"],
            ["Operating time", "45–75 min", "60–90 min", "90–120 min"],
            ["Hospital stay", "2 nights", "2 nights", "2 nights"],
            ["Average excess weight loss at 2 years", "60–70%", "70–80%", "65–80%"],
            ["Type 2 diabetes remission at 1 year", "About 60%", "About 70%", "About 74%"],
            ["GORD or reflux impact", "Can worsen", "Slight bile reflux risk", "Usually improves reflux"],
            ["Reversible", "No", "Partly", "Technically, but rarely done"],
            ["Lifelong B12 injection", "Not usually", "Yes", "Yes"],
            ["Best for", "BMI 35–45 without severe reflux", "BMI 40+, diabetes, simpler anatomy than RYGB", "BMI 45+, severe reflux, uncontrolled diabetes or revision"],
            ["Price at IBC (2026)", "from £2,450", "from £5,000", "from £5,000"],
          ]}
          footnote={<>Read about <Link href="/mini-gastric-bypass" className="text-primary hover:underline">one-anastomosis (OAGB) mini bypass</Link> or compare <Link href="/gastric-sleeve-turkey" className="text-primary hover:underline">gastric sleeve Turkey</Link>.</>}
        />

        <ComparisonBlock
          title="Cost of gastric bypass in Turkey — 2026 packages"
          subtitle="Both packages include surgery by Dr Üstün at Liv Hospital Vadistanbul. Accommodation, meals, transfers and aftercare differ."
          columns={["Feature", "Relaxation — recommended", "Luxury"]}
          highlightColumn={0}
          rows={[
            ["Price", "£5,000", "£5,350"],
            ["Hospital", "Liv Vadistanbul JCI, 2 nights", "Liv Vadistanbul JCI suite, 2 nights"],
            ["Hotel", "4 nights in a 5-star hotel", "5 nights in a luxury hotel"],
            ["Medical fees", "Surgeon and anaesthetist fees", "Surgeon and anaesthetist fees"],
            ["Tests and medication", "All pre-op tests and medications", "All pre-op tests and medications"],
            ["Transfers", "VIP airport and hospital transfers", "Private VIP car throughout"],
            ["Meals", "Half board", "Full board with companion allowance"],
            ["Aftercare", "12 months via WhatsApp including UK-registered dietitian support", "12 months priority WhatsApp aftercare including UK-registered dietitian support"],
            ["Supplements", "Supplements starter pack", "Supplements starter pack"],
          ]}
          footnote="A clinical review and written quotation are required before travel."
        />

        <ComparisonBlock
          title="Turkey vs UK, Germany, USA and Australia — 2026 bypass cost"
          subtitle="Typical self-pay ranges from published provider prices; inclusions and eligibility differ."
          columns={["Country", "Typical self-pay cost", "Waiting time", "Hospital nights"]}
          highlightColumn={0}
          rows={[
            ["Turkey (IBC)", "£5,000 – £5,350 all-inclusive", "2–4 weeks", "2 nights"],
            ["United Kingdom (private)", "£10,000 – £15,000, sometimes up to £18k", "4–8 weeks", "2–3 nights"],
            ["United Kingdom (NHS)", "Free at point of use", "2–5 years", "2–3 nights"],
            ["Germany (private)", "€12,000 – €22,000, about £10,300–£18,800", "1–3 months", "2–3 nights"],
            ["United States (self-pay)", "$15,000 – $35,000, about £11,900–£27,800", "2–4 weeks", "2–3 nights"],
            ["Australia (self-funded)", "AUD $18k – $28k, about £9,500–£14,700", "2–4 weeks", "2 nights"],
          ]}
          footnote="Guide prices checked September 2026. Currency movement and individual medical needs can change quotations."
        />

        <ProseSection title="What’s included in the all-inclusive package" tone="slate" id="included" maxWidth="max-w-6xl">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl border border-slate-200 p-6">
              <h3 className="text-xl font-bold text-slate-900 mb-4">Medical and surgical</h3>
              <ul className="list-disc pl-5 space-y-2 text-base">
                <li>Pre-operative bloods, HbA1c, ECG and further tests when indicated</li>
                <li>Upper GI endoscopy, hiatus assessment and anaesthetic consultation</li>
                <li>Laparoscopic Roux-en-Y gastric bypass by Dr Üstün</li>
                <li>Surgeon and anaesthetist fees, staplers and consumables</li>
                <li>Two nights at JCI-accredited Liv Hospital Vadistanbul</li>
                <li>Hospital medications and post-operative leak testing</li>
              </ul>
            </div>
            <div className="bg-white rounded-xl border border-slate-200 p-6">
              <h3 className="text-xl font-bold text-slate-900 mb-4">Travel, stay and aftercare</h3>
              <ul className="list-disc pl-5 space-y-2 text-base">
                <li>Four 5-star hotel nights on Relaxation or five luxury-hotel nights on Luxury</li>
                <li>VIP transfers, upgraded to a private car throughout on Luxury</li>
                <li>Half board on Relaxation or full board with companion allowance on Luxury</li>
                <li>English-speaking patient coordination and a personalised phased-diet plan</li>
                <li>Supplements starter pack</li>
                <li>12 months of WhatsApp aftercare including UK-registered dietitian support</li>
              </ul>
            </div>
          </div>
        </ProseSection>

        <ProseSection title="When bypass beats sleeve — who should choose Roux-en-Y" id="candidate">
          <p>A sleeve is simpler and does not reroute the bowel, but bypass can be a better fit when metabolic disease, reflux or previous surgery changes the balance of benefits and risks.</p>
          <Checklist title="Reasons Roux-en-Y may be preferred" items={[
            "Severe gastro-oesophageal reflux, because sleeve can worsen symptoms",
            "A large hiatus hernia requiring simultaneous repair and reflux control",
            "BMI 45 kg/m² or above, where durability may favour bypass",
            "Poorly controlled or insulin-treated type 2 diabetes",
            "Revision after a failed band or sleeve",
            "Barrett’s oesophagus or severe oesophagitis",
          ]} />
          <p>Selection is individual. Read about <Link href="/reflux-after-gastric-sleeve" className="text-primary hover:underline">reflux after gastric sleeve</Link> and <Link href="/revision-bariatric-surgery" className="text-primary hover:underline">revision bariatric surgery</Link>.</p>
          <img loading="lazy" width="1024" height="683" src="/images/bypass/bypass-consultation.webp" alt="Dr Murat Üstün discussing candidacy for Roux-en-Y gastric bypass with a patient" className="w-full rounded-2xl" />
        </ProseSection>

        <ProseSection title="How Roux-en-Y gastric bypass works" tone="blue" id="procedure" maxWidth="max-w-5xl">
          <p>RYGB is performed under general anaesthesia through four or five small keyhole incisions and usually takes 90–120 minutes. Compare the non-bypass alternative in <Link href="/sleeve-gastrectomy" className="text-primary hover:underline">how sleeve gastrectomy works</Link>.</p>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              ["1 — Create the pouch", "The upper stomach is divided to make a small pouch of about 30 ml. The remnant stomach stays in place but food no longer passes through it."],
              ["2 — Divide the small bowel", "The jejunum is divided about 50 cm below the stomach. The downstream end becomes the Roux limb and the other carries bile and pancreatic juice."],
              ["3 — Gastrojejunostomy", "The Roux limb is joined to the pouch, so food bypasses the remnant stomach, duodenum and proximal jejunum."],
              ["4 — Jejunojejunostomy", "The biliopancreatic limb rejoins the Roux limb 100–150 cm farther down. Mesenteric defects are closed to reduce internal-hernia risk."],
            ].map(([title, text]) => <div key={title} className="bg-white rounded-xl p-5 border border-blue-100"><h3 className="font-bold text-slate-900">{title}</h3><p className="text-base mt-2">{text}</p></div>)}
          </div>
          <p>Beyond restriction, altered GLP-1 and PYY signalling, bile-acid circulation and the gut microbiome help explain rapid improvement in blood glucose before major weight loss.</p>
          <img loading="lazy" width="900" height="1251" src="/images/bypass/roux-en-y-anatomy.webp" alt="Anatomical diagram showing the small stomach pouch, Roux limb and Y-shaped intestinal joins after gastric bypass" className="w-full max-w-3xl mx-auto rounded-2xl" />
        </ProseSection>

        <ProseSection title="Recovery timeline — day 0 to month 24" id="recovery" maxWidth="max-w-6xl">
          <img loading="lazy" width="1024" height="683" src="/images/bypass/post-op-walk-liv-hospital.webp" alt="Patient walking with clinical support after gastric bypass at Liv Hospital Vadistanbul" className="w-full rounded-2xl mb-8" />
          <div className="overflow-x-auto rounded-xl border border-slate-200">
            <table className={tableClass}>
              <thead className="bg-slate-900 text-white"><tr><th className={thClass}>When</th><th className={thClass}>What to expect</th><th className={thClass}>Diet</th></tr></thead>
              <tbody>{[
                ["Day 0", "Recovery, sips after 4–6 hours and a short walk", "Water only"],
                ["Day 1", "Leak test, reduced IV fluids and corridor walks", "Clear fluids and protein sips"],
                ["Day 2", "Discharge to hotel when clinically ready", "Clear fluids and protein drinks"],
                ["Days 3–7", "Hotel rest, gradually longer walks and planned flight", "Full liquids"],
                ["Week 2", "Desk work may resume; fatigue is common", "Liquids to thin purée"],
                ["Weeks 3–4", "Early weight loss; food triggers become clearer", "Purée"],
                ["Weeks 5–6", "Gentle exercise and physical work after clearance", "Soft solids"],
                ["Week 7 onward", "Small portions and structured follow-up", "Full diet and supplements"],
                ["Month 3", "Blood tests and supplement adjustment", "Full diet and supplements"],
                ["Month 6", "Often 50–65% excess weight loss", "Full diet and supplements"],
                ["Months 12–24", "Often 65–80% excess weight loss", "Maintenance"],
              ].map(([a, b, c]) => <tr key={a}><th scope="row" className={tdClass}>{a}</th><td className={tdClass}>{b}</td><td className={tdClass}>{c}</td></tr>)}</tbody>
            </table>
          </div>
        </ProseSection>

        <ProseSection title="Risks and complications — the honest picture" tone="slate" id="risks" maxWidth="max-w-6xl">
          <p>Roux-en-Y is established but more complex than sleeve surgery. Published rates vary with individual risk and centre experience.</p>
          <h3 className="text-2xl font-bold text-slate-900">Early complications — first 30 days</h3>
          <div className="overflow-x-auto rounded-xl border border-slate-200 bg-white">
            <table className={tableClass}>
              <thead className="bg-slate-900 text-white"><tr><th className={thClass}>Complication</th><th className={thClass}>Typical rate</th><th className={thClass}>Prevention or management</th></tr></thead>
              <tbody>{[
                ["Anastomotic leak", "1–2%", "Inspection, intra-operative leak test and access to interventional or surgical care"],
                ["Bleeding requiring transfusion", "1–3%", "Vessel sealing, staple-line inspection and monitoring"],
                ["DVT or pulmonary embolism", "Under 1%", "Blood-thinning medication, stockings and early walking"],
                ["Wound infection", "1–3%", "Antibiotics and careful closure"],
                ["30-day mortality", "About 0.2%", "Careful selection and an experienced hospital team"],
              ].map(([a, b, c]) => <tr key={a}><th scope="row" className={tdClass}>{a}</th><td className={tdClass}>{b}</td><td className={tdClass}>{c}</td></tr>)}</tbody>
            </table>
          </div>
          <h3 className="text-2xl font-bold text-slate-900 mt-8">Late complications — weeks to years</h3>
          <div className="overflow-x-auto rounded-xl border border-slate-200 bg-white">
            <table className={tableClass}>
              <thead className="bg-slate-900 text-white"><tr><th className={thClass}>Complication</th><th className={thClass}>Typical rate</th><th className={thClass}>Management</th></tr></thead>
              <tbody>{[
                ["Dumping syndrome", "50–70% at some point, usually mild", "Avoid concentrated sugar and rapid-carbohydrate meals"],
                ["Marginal ulcer", "5–10%", "Acid suppression, no smoking and NSAID avoidance"],
                ["Anastomotic stricture", "3–7%", "Endoscopic balloon dilatation"],
                ["Internal hernia", "2–5%", "Defect closure during surgery; laparoscopic repair if needed"],
                ["Gallstones", "25–30%", "Preventive medication or gallbladder surgery if symptomatic"],
                ["Nutritional deficiency", "Common without supplements", "Lifelong supplements and blood tests"],
                ["Post-bypass hypoglycaemia", "1–5%", "Dietary management, then medication if needed"],
                ["Weight regain after 5+ years", "20–30%", "Nutrition review, endoscopic treatment or surgical revision"],
              ].map(([a, b, c]) => <tr key={a}><th scope="row" className={tdClass}>{a}</th><td className={tdClass}>{b}</td><td className={tdClass}>{c}</td></tr>)}</tbody>
            </table>
          </div>
        </ProseSection>

        <ProseSection title="Long-term nutrition and lifelong supplementation">
          <p>Bypass permanently changes vitamin and mineral absorption. Prescribed supplements and monitoring are essential.</p>
          <div className="grid md:grid-cols-2 gap-6">
            <Checklist title="Daily for life" items={[
              "Bariatric multivitamin",
              "Calcium citrate 1,200–1,500 mg in divided doses",
              "Vitamin D3 2,000–3,000 IU",
              "Oral iron 45–65 mg elemental as prescribed",
              "Protein target of 60–80 g from food and supplements",
            ]} />
            <Checklist title="Periodic monitoring" items={[
              "Vitamin B12 injection every three months or prescribed high-dose oral B12",
              "Blood tests at months 3, 6 and 12, then annually",
              "Bone-density scan every two to three years where advised",
              "Annual full blood count, ferritin, folate, vitamin D, calcium, PTH, HbA1c and lipids",
              "Avoid NSAIDs and smoking; use particular caution with alcohol",
            ]} />
          </div>
        </ProseSection>

        <ExpertPOV
          title="Why choose Dr Üstün and Liv Hospital Vadistanbul?"
          credentials="MD, PhD · 25+ years · BOMSS, IFSO and International Bariatric Club member"
        >
          <p><Link href="/dr-murat-ustun" className="text-primary hover:underline">Op. Dr Murat Üstün</Link> has 25+ years of experience, 6,000+ advanced laparoscopic procedures and 700+ bypass cases. His memberships include BOMSS, IFSO and the International Bariatric Club.</p>
          <p>IBC received WhatClinic awards in 2019–2021 and 2023–2025. Care takes place at JCI-accredited Liv Hospital Vadistanbul, with 24-hour intensive care, imaging, interventional support and English-speaking staff.</p>
        </ExpertPOV>

        <ProseSection title="Your 7-day gastric bypass journey in Istanbul" tone="blue" id="journey">
          <ol className="space-y-4">
            {[
              ["Day 1 — Arrival", "VIP airport pickup, hotel check-in and welcome call."],
              ["Day 2 — Pre-op", "Hospital tests, endoscopy and consultation with Dr Üstün."],
              ["Day 3 — Surgery", "Roux-en-Y bypass lasting about 90–120 minutes."],
              ["Day 4 — Recovery", "Leak test, first walks and clear fluids."],
              ["Day 5 — Discharge", "Discharge to the hotel with VIP transfer when clinically ready."],
              ["Day 6 — Rest", "Hotel rest, protein drinks and short walks."],
              ["Day 7 — Fly home", "Airport transfer with discharge documents and aftercare plan."],
            ].map(([day, text]) => <li key={day} className="bg-white rounded-xl border border-blue-100 p-5"><strong className="text-slate-900">{day}</strong><p className="text-base mt-1">{text}</p></li>)}
          </ol>
          <p>Luxury adds a fifth hotel night. Confirm your individual itinerary before booking flights.</p>
          <InlineCTA label="Request a free clinical review" />
        </ProseSection>

        <FAQSection title="Frequently asked questions" faqs={faqs} withJsonLd={false} />

        <ConversionModule
          title="Book your free consultation with Dr Üstün"
          text={<>Request a no-obligation clinical review. Dr Üstün will consider your BMI, reflux, diabetes and previous surgery, then explain whether sleeve, OAGB or Roux-en-Y is suitable. You can also use the <Link href="/contact" className="underline font-semibold">contact form</Link>.</>}
          buttonLabel="WhatsApp UK · +44 7491 068686"
        />

        <RelatedLinks title="Related procedures and resources" links={[
          { title: "One-anastomosis (OAGB) mini bypass", description: "Explore the one-join bypass procedure.", href: "/mini-gastric-bypass" },
          { title: "Gastric sleeve Turkey", description: "Compare sleeve pricing, candidacy and recovery.", href: "/gastric-sleeve-turkey" },
          { title: "How sleeve gastrectomy works", description: "Understand the non-bypass operation.", href: "/sleeve-gastrectomy" },
          { title: "Revision bariatric surgery", description: "Review options after a previous operation.", href: "/revision-bariatric-surgery" },
          { title: "Reflux after gastric sleeve", description: "Learn when conversion may be considered.", href: "/reflux-after-gastric-sleeve" },
          { title: "Before and after results", description: "Review anonymised patient outcomes.", href: "/results" },
        ]} />

        <footer className="py-8 text-center text-sm text-slate-600 border-t">
          Reviewed by Op. Dr Murat Üstün, MD, PhD · Last reviewed 17 September 2026
        </footer>
      </main>

      <Footer />
      <StickyCTA guideHref="/contact" />
    </div>
  );
}
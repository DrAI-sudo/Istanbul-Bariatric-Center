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
    question: "How much does gastric sleeve cost in Turkey in 2026?",
    answer: "At Istanbul Bariatric Center, prices are £2,450 for Ultra Eco, £4,550 for Relaxation and £4,900 for Luxury. Ultra Eco covers surgery by an experienced surgeon team, two boutique-hospital nights and pre-operative tests, without hotel or transfers. Relaxation and Luxury include surgery by Dr Üstün at Liv Hospital Vadistanbul plus accommodation, transfers and aftercare.",
  },
  {
    question: "Is gastric sleeve in Turkey safe?",
    answer: "No surgery is risk-free. Safety is improved by careful selection, an experienced team, a properly equipped hospital, clot and leak precautions, and accessible follow-up. Dr Üstün has performed 2,200+ sleeves during 25+ years in advanced laparoscopic surgery.",
  },
  {
    question: "Which hospital does Istanbul Bariatric Center use?",
    answer: "Relaxation and Luxury procedures take place at JCI-accredited Liv Hospital Vadistanbul in Sarıyer, Istanbul. Ultra Eco is delivered by the experienced surgeon team at a partner boutique hospital.",
  },
  {
    question: "How many days do I need to stay in Istanbul?",
    answer: "The standard Relaxation journey is seven days and six nights: two nights in hospital and four nights in a hotel. Luxury includes five hotel nights. Ultra Eco has two hospital nights but no hotel or transfers, so its itinerary is agreed separately.",
  },
  {
    question: "What is the BMI requirement for gastric sleeve in Turkey?",
    answer: "Surgery is commonly considered at BMI 40 or above, or BMI 35–39.9 with an obesity-related condition. Selected patients with BMI 30 or above and poorly controlled type 2 diabetes may be considered after specialist assessment.",
  },
  {
    question: "How much weight will I lose after gastric sleeve?",
    answer: "Average excess weight loss is around 60–70% at 12–18 months, roughly 25–30% of starting body weight within the first year. Results vary and long-term maintenance requires permanent dietary and lifestyle change.",
  },
  {
    question: "Does the price include flights?",
    answer: "No. Flights are excluded. Typical UK return fares to Istanbul are £120–£280, but prices vary by airport, season and booking date.",
  },
  {
    question: "What happens if I have complications after returning home?",
    answer: "Complications are managed with the team's guidance, while urgent symptoms require immediate local assessment. A full English operative note is provided for your UK GP, and relevant imaging can be shared with local clinicians where available.",
  },
  {
    question: "Can I get gastric sleeve on the NHS instead?",
    answer: "Potentially, but local eligibility and pathways vary. Criteria commonly include BMI 40 or above, or BMI 35 or above with comorbidities and completion of a specialist weight-management programme. Waiting times may be two to five years.",
  },
  {
    question: "Is Dr Murat Üstün IFSO-certified?",
    answer: "IFSO is a professional membership body rather than a surgeon-certification scheme. Dr Üstün is a member of IFSO, BOMSS and the International Bariatric Club, and is the only Boston Scientific-certified surgical ESG trainer in Turkey.",
  },
  {
    question: "How is Turkey cheaper than the UK for the same operation?",
    answer: "Turkey has lower staffing, property and insurance costs and a favourable exchange rate. Price alone does not establish quality, so compare the named surgeon, actual hospital, written inclusions, emergency facilities and aftercare.",
  },
  {
    question: "What is included in the all-inclusive package?",
    answer: "Relaxation includes laparoscopic sleeve surgery by Op. Dr Murat Üstün at JCI-accredited Liv Hospital Vadistanbul, two hospital nights, four nights in a 5-star hotel, surgeon and anaesthetist fees, all pre-operative tests and medications, VIP airport and hospital transfers, half-board hotel meals, a supplements starter pack and 12 months of WhatsApp aftercare including UK-registered dietitian support. Luxury includes the same surgery and hospital in a JCI suite, two hospital nights, five luxury-hotel nights, a private VIP car throughout, full board with a companion allowance and 12 months of priority aftercare.",
  },
  {
    question: "Can I finance the procedure?",
    answer: "Ask your coordinator about payment options.",
  },
  {
    question: "Will I need plastic surgery for loose skin after gastric sleeve?",
    answer: "Some patients consider body contouring after their weight has been stable for 12–18 months. Need varies with age, starting weight, weight lost, skin elasticity and smoking history, and requires a separate specialist assessment.",
  },
  {
    question: "What is the difference between gastric sleeve and ESG?",
    answer: "A sleeve permanently removes about 75–80% of the stomach. Endoscopic sleeve gastroplasty uses internal sutures placed through the mouth and removes no stomach. ESG may suit selected lower-BMI patients and generally produces less weight loss.",
  },
];

const medicalWebPage = {
  "@context": "https://schema.org",
  "@type": "MedicalWebPage",
  name: "Gastric Sleeve Surgery in Turkey — Cost, Packages & Best Clinics (2026)",
  url: "https://istanbulbariatriccenter.com/gastric-sleeve-turkey",
  about: {
    "@type": "MedicalProcedure",
    name: "Sleeve Gastrectomy",
    procedureType: "Surgical",
    offers: [
      { "@type": "Offer", name: "Ultra Eco Gastric Sleeve", price: "2450", priceCurrency: "GBP" },
      { "@type": "Offer", name: "Relaxation Gastric Sleeve", price: "4550", priceCurrency: "GBP" },
      { "@type": "Offer", name: "Luxury Gastric Sleeve", price: "4900", priceCurrency: "GBP" },
    ],
    provider: { "@id": "https://istanbulbariatriccenter.com/#organization" },
  },
  author: { "@id": "https://istanbulbariatriccenter.com/#drmuratustun" },
  publisher: { "@id": "https://istanbulbariatriccenter.com/#organization" },
};

const tableClass = "w-full text-left text-sm md:text-base";
const thClass = "p-4 font-semibold";
const tdClass = "p-4 border-t border-slate-200 align-top";

export default function GastricSleeveTurkey() {
  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="Gastric Sleeve Turkey 2026"
        description="Compare 2026 gastric sleeve costs, packages, candidacy, recovery and risks in Turkey. IBC prices range from £2,450 to £4,900."
        image="/images/sleeve/sleeve-gastrectomy-before-after.webp"
        url="/gastric-sleeve-turkey"
        type="article"
        author="Op. Dr Murat Üstün, MD, PhD"
      />
      <JsonLd data={structuredData.createBreadcrumb([
        { name: "Home", url: "/" },
        { name: "Treatments", url: "/treatments" },
        { name: "Gastric Sleeve Turkey", url: "/gastric-sleeve-turkey" },
      ])} />
      <JsonLd data={medicalWebPage} />
      <JsonLd data={structuredData.createFAQ(faqs)} />
      <Navbar />

      <MoneyHero
        eyebrow="2026 guide for UK and international patients"
        title="Gastric Sleeve Surgery in Turkey — Cost, Packages & Best Clinics (2026)"
        subtitle="Everything a UK patient needs to shortlist, cost and book laparoscopic sleeve gastrectomy in Istanbul: verified pricing, hospital standards, surgeon-led care and a seven-day journey plan."
        stats={[
          { value: "From £2,450", label: "2026 package price" },
          { value: "2 nights", label: "Hospital stay" },
          { value: "6 nights", label: "Relaxation stay in Istanbul" },
          { value: "2,200+", label: "Sleeves by Dr Üstün" },
        ]}
      />

      <main>
        <section className="py-10 bg-blue-50">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="bg-white border-l-4 border-primary rounded-xl p-6 md:p-8 shadow-sm">
              <p className="text-sm font-bold text-primary tracking-widest mb-2">QUICK ANSWER</p>
              <p className="text-lg text-slate-700 leading-relaxed">
                Gastric sleeve surgery at IBC costs from £2,450. Ultra Eco is performed by an experienced surgeon team at a partner boutique hospital and includes two hospital nights and all pre-operative tests and consultations, but no hotel or transfers; aftercare is a discharge diet plan only. The recommended £4,550 Relaxation package includes laparoscopic sleeve surgery by Op. Dr Murat Üstün at JCI-accredited Liv Hospital Vadistanbul, two hospital nights, four nights in a 5-star hotel, surgeon and anaesthetist fees, all pre-operative tests and medications, VIP airport and hospital transfers, half-board meals, a supplements starter pack and 12 months of WhatsApp aftercare including UK-registered dietitian support.
              </p>
            </div>
          </div>
        </section>

        <ProseSection title="Gastric sleeve in Turkey at a glance" id="at-a-glance">
          <div className="overflow-x-auto rounded-xl border border-slate-200">
            <table className={tableClass}>
              <thead className="bg-slate-900 text-white"><tr><th className={thClass}>Specification</th><th className={thClass}>Detail</th></tr></thead>
              <tbody>
                {[
                  ["Procedure", "Laparoscopic Sleeve Gastrectomy (LSG / VSG)"],
                  ["Surgery time", "45–75 minutes under general anaesthesia"],
                  ["Hospital stay", "Two nights; hospital depends on package"],
                  ["Relaxation itinerary", "Six nights: two hospital and four hotel"],
                  ["Return to light work", "Usually 7–14 days"],
                  ["Return to gym or lifting", "Usually 4–6 weeks after clearance"],
                  ["Average excess weight loss", "60–70% at 12–18 months"],
                  ["Average total body-weight loss", "25–30% within the first year"],
                  ["Leak rate in high-volume centres", "Under 1%"],
                  ["2026 package cost", "From £2,450 · Ultra Eco"],
                  ["Surgeon", "Dr Üstün on Relaxation and Luxury; experienced surgeon team on Ultra Eco"],
                ].map(([a, b]) => <tr key={a}><th scope="row" className={tdClass}>{a}</th><td className={tdClass}>{b}</td></tr>)}
              </tbody>
            </table>
          </div>
        </ProseSection>

        <ComparisonBlock
          title="Cost of gastric sleeve in Turkey — 2026 packages"
          subtitle="Relaxation and Luxury share Dr Üstün and Liv Hospital. Ultra Eco is the budget tier with the experienced surgeon team at a partner boutique hospital."
          columns={["Package", "Ultra Eco", "Relaxation — recommended", "Luxury"]}
          highlightColumn={1}
          rows={[
            ["Price", "£2,450", "£4,550", "£4,900"],
            ["Surgeon", "Experienced surgeon team", "Op. Dr Murat Üstün", "Op. Dr Murat Üstün"],
            ["Hospital", "Partner boutique hospital, 2 nights", "Liv Hospital Vadistanbul JCI, 2 nights", "Liv Hospital Vadistanbul JCI suite, 2 nights"],
            ["Tests and consultations", "All pre-op tests and consultations", "All pre-op tests and medications", "Confirm in written quote"],
            ["Hotel", "Not included", "4 nights hotel", "5 nights luxury hotel"],
            ["Transfers", "Not included", "VIP airport and hospital transfers", "Private VIP car throughout"],
            ["Meals", "Not included", "Half-board hotel meals", "Full board and companion allowance"],
            ["Aftercare", "Discharge diet plan only", "12 months via WhatsApp including UK-registered dietitian support", "12 months priority aftercare"],
            ["Extras", "Surgery essentials", "Surgeon and anaesthetist fees; supplements starter pack", "Private VIP car throughout"],
          ]}
          footnote={<>Ask for a written quotation. Read the <Link href="/gastric-sleeve-turkey-cost" className="text-primary hover:underline">full price breakdown</Link>.</>}
        />

        <ComparisonBlock
          title="Turkey vs UK, Germany, USA and Australia — 2026 comparison"
          subtitle="Typical self-pay ranges from published provider prices; inclusions and eligibility differ."
          columns={["Country", "Typical self-pay cost", "Waiting time", "Hospital nights"]}
          highlightColumn={0}
          rows={[
            ["Turkey (IBC)", "£2,450 – £4,900 all-inclusive", "2–4 weeks", "2 nights"],
            ["United Kingdom (private)", "£8k–£15,000", "4–8 weeks", "1–2 nights"],
            ["United Kingdom (NHS)", "Free at point of use", "Often 2–5 years", "1–2 nights"],
            ["Germany (private)", "€9,000–€18k (about £7,700–£15,400)", "1–3 months", "two to three nights"],
            ["United States (self-pay)", "$9,500–$23,000 (about £7,500–£18,200)", "2–4 weeks", "1–2 nights"],
            ["Australia (self-funded)", "AUD $15,000–$25,000 (about £7,900–£13,200)", "2–4 weeks", "2 nights"],
          ]}
          footnote="Guide prices checked September 2026. Currency movements and individual medical needs can change quotations."
        />

        <ProseSection title="What’s included in the all-inclusive package" tone="slate" id="included" maxWidth="max-w-6xl">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl border border-slate-200 p-6">
              <h3 className="text-xl font-bold text-slate-900 mb-4">Medical and surgical</h3>
              <ul className="list-disc pl-5 space-y-2 text-base">
                <li>Two hospital nights on every package</li>
                <li>All pre-operative tests and consultations on Ultra Eco</li>
                <li>All pre-operative tests and medications on Relaxation</li>
                <li>Surgeon and anaesthetist fees on Relaxation</li>
                <li>JCI suite at Liv Hospital Vadistanbul on Luxury</li>
              </ul>
            </div>
            <div className="bg-white rounded-xl border border-slate-200 p-6">
              <h3 className="text-xl font-bold text-slate-900 mb-4">Travel, stay and aftercare</h3>
              <ul className="list-disc pl-5 space-y-2 text-base">
                <li>Ultra Eco excludes hotel and transfers and includes a discharge diet plan only</li>
                <li>Relaxation includes four 5-star hotel nights, half-board meals, and VIP airport and hospital transfers</li>
                <li>Relaxation includes a supplements starter pack and 12 months of WhatsApp aftercare with UK-registered dietitian support</li>
                <li>Luxury includes five luxury-hotel nights, full board with a companion allowance, and a private VIP car throughout</li>
                <li>Luxury includes 12 months of priority aftercare</li>
              </ul>
            </div>
          </div>
          <img loading="lazy" width="1024" height="683" src="/images/sleeve/uk-dietitian-aftercare.webp" alt="UK-registered bariatric dietitian providing gastric sleeve aftercare online" className="w-full rounded-2xl mt-8" />
        </ProseSection>

        <ProseSection title="Who is a good candidate for gastric sleeve?" id="candidate">
          <p>Suitability is decided through bariatric and anaesthetic assessment, not price or BMI alone. Common criteria include:</p>
          <Checklist title="Common candidacy considerations" items={[
            "BMI 40 or above, regardless of obesity-related conditions",
            "BMI 35–39.9 with type 2 diabetes, hypertension, sleep apnoea, fatty liver or severe joint disease",
            "Selected BMI 30 or above cases with poorly controlled type 2 diabetes",
            "Usually age 18–65, with older patients reviewed individually",
            "Previous structured non-surgical weight-loss effort",
            "Readiness for lifelong diet, activity, supplements and monitoring",
          ]} />
          <img loading="lazy" width="1024" height="683" src="/images/sleeve/sleeve-consultation.webp" alt="Bariatric surgeon discussing gastric sleeve candidacy during a consultation" className="w-full rounded-2xl" />
        </ProseSection>

        <Checklist title="Who is not a candidate?" tone="warning" background="slate" items={[
          "Untreated severe cardiac or respiratory disease that makes general anaesthesia unsafe",
          "Active malignancy or a recent diagnosis without oncologist clearance",
          "Untreated bleeding disorder or uncorrected coagulopathy",
          "Pregnancy or planned pregnancy within 18 months",
          "Severe untreated psychiatric illness, active substance misuse or untreated eating disorder",
          "Severe liver cirrhosis or active Crohn’s disease involving the stomach or duodenum",
          "Large hiatus hernia or severe reflux where bypass may be safer",
          "Inability to follow structured aftercare and long-term supplements",
        ]} />

        <ProseSection title="How the gastric sleeve procedure works" tone="blue" id="procedure" maxWidth="max-w-5xl">
          <p>Sleeve gastrectomy permanently removes roughly 75–80% of the stomach, leaving a narrow tube. It is performed under general anaesthesia through four or five keyhole incisions and usually takes 45–75 minutes. Read more about <Link href="/sleeve-gastrectomy" className="text-primary hover:underline">how the operation is performed</Link>.</p>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              ["1 — Access", "Four or five laparoscopic ports are placed and carbon dioxide creates working space."],
              ["2 — Mobilisation", "The greater curvature is freed using an advanced vessel-sealing device."],
              ["3 — Stapling", "A calibration tube guides division of the stomach with an endoscopic linear stapler."],
              ["4 — Testing and closure", "A leak test is completed, the removed stomach is extracted and the ports are closed."],
            ].map(([title, text]) => <div key={title} className="bg-white rounded-xl p-5 border border-blue-100"><h3 className="font-bold text-slate-900">{title}</h3><p className="text-base mt-2">{text}</p></div>)}
          </div>
          <p><strong>Two mechanisms drive weight loss:</strong> restriction reduces stomach capacity to around 100–150 ml, while removal of the fundus reduces ghrelin, a hormone involved in hunger.</p>
          <img loading="lazy" width="1224" height="1285" src="/images/sleeve/sleeve-gastrectomy-before-after.webp" alt="Diagram comparing the stomach before and after sleeve gastrectomy" className="w-full max-w-3xl mx-auto rounded-2xl" />
        </ProseSection>

        <ProseSection title="Recovery timeline — day 0 to month 12" id="recovery" maxWidth="max-w-6xl">
          <img loading="lazy" width="1024" height="576" src="/images/sleeve/liv-hospital-recovery-room.webp" alt="Private recovery room at Liv Hospital Vadistanbul after bariatric surgery" className="w-full rounded-2xl mb-8" />
          <div className="overflow-x-auto rounded-xl border border-slate-200">
            <table className={tableClass}>
              <thead className="bg-slate-900 text-white"><tr><th className={thClass}>When</th><th className={thClass}>What to expect</th><th className={thClass}>Diet</th></tr></thead>
              <tbody>{[
                ["Day 0", "Recovery, short walks and sips as directed", "Water and clear fluids"],
                ["Day 1", "Leak test, less IV fluid, regular corridor walks", "Clear fluids"],
                ["Day 2", "Discharge when clinically ready; shoulder-tip discomfort can occur", "Clear fluids and protein drinks"],
                ["Days 3–7", "Rest, short walks and planned return flight", "Full liquids"],
                ["Week 2", "Desk work may resume; fatigue is common", "Liquids to thin purée"],
                ["Weeks 3–4", "Energy improves; early weight change becomes visible", "Purée"],
                ["Weeks 5–6", "Gentle exercise after clearance", "Soft solids"],
                ["Week 7 onward", "Small portions and structured follow-up", "Full diet as tolerated"],
                ["Month 3", "Blood tests; often 20–35% excess weight lost", "Full diet and supplements"],
                ["Month 6", "Often 40–55% excess weight lost", "Full diet and supplements"],
                ["Month 12", "Often 60–70% excess weight lost", "Maintenance"],
              ].map(([a,b,c]) => <tr key={a}><th scope="row" className={tdClass}>{a}</th><td className={tdClass}>{b}</td><td className={tdClass}>{c}</td></tr>)}</tbody>
            </table>
          </div>
        </ProseSection>

        <ProseSection title="Risks and complications" tone="slate" id="risks" maxWidth="max-w-6xl">
          <p>No operation is risk-free. Published rates vary with patient risk and centre experience; the figures below are typical high-volume-centre ranges.</p>
          <div className="overflow-x-auto rounded-xl border border-slate-200 bg-white">
            <table className={tableClass}>
              <thead className="bg-slate-900 text-white"><tr><th className={thClass}>Complication</th><th className={thClass}>Typical rate</th><th className={thClass}>Prevention or management</th></tr></thead>
              <tbody>{[
                ["Staple-line leak", "Under 1%", "Staple-line inspection, leak test and access to interventional care"],
                ["Bleeding requiring transfusion", "1–2%", "Vessel sealing, staple-line inspection and monitoring"],
                ["DVT or pulmonary embolism", "Under 1%", "Blood-thinning medication, stockings and early walking"],
                ["Wound infection", "1–3%", "Antibiotics and careful closure"],
                ["Stricture or narrowing", "About 1%", "Calibration during surgery and endoscopic treatment if needed"],
                ["Long-term reflux", "10–20%", "Pre-op endoscopy, appropriate procedure choice and acid suppression"],
                ["Iron, B12 or vitamin D deficiency", "Common", "Daily supplements and regular blood tests"],
                ["30-day mortality", "About 0.1%", "Careful case selection and an experienced hospital team"],
              ].map(([a,b,c]) => <tr key={a}><th scope="row" className={tdClass}>{a}</th><td className={tdClass}>{b}</td><td className={tdClass}>{c}</td></tr>)}</tbody>
            </table>
          </div>
          <p>Seek urgent local care for severe abdominal or chest pain, shortness of breath, fainting, fever, rapid heartbeat, persistent vomiting, leg swelling or inability to keep fluids down.</p>
        </ProseSection>

        <ExpertPOV
          title="Why choose Dr Üstün and Liv Hospital Vadistanbul?"
          credentials="MD, PhD · 25+ years · BOMSS, IFSO and International Bariatric Club member"
        >
          <p><Link href="/dr-murat-ustun" className="text-primary hover:underline">Op. Dr Murat Üstün</Link> has 25+ years of experience, 6,000+ advanced laparoscopic procedures and 2,200+ sleeves. He is a BOMSS, IFSO and International Bariatric Club member and the only Boston Scientific-certified surgical ESG trainer in Turkey.</p>
          <p>IBC received WhatClinic awards in 2019–2021 and 2023–2025. Relaxation and Luxury care takes place at JCI-accredited Liv Hospital Vadistanbul, with 24-hour intensive care, imaging, interventional support and English-speaking staff.</p>
        </ExpertPOV>

        <ProseSection title="Your 7-day gastric sleeve journey in Istanbul" tone="blue" id="journey">
          <ol className="space-y-4">
            {[
              ["Day 1 — Arrival", "VIP airport pickup, hotel check-in and welcome call."],
              ["Day 2 — Pre-op", "Hospital tests, endoscopy and consultation with Dr Üstün."],
              ["Day 3 — Surgery", "Laparoscopic sleeve operation lasting about 45–75 minutes."],
              ["Day 4 — Recovery", "Leak test, first walks and clear fluids."],
              ["Day 5 — Discharge", "Discharge to the hotel with VIP transfer when clinically ready."],
              ["Day 6 — Rest", "Hotel rest, hydration and short walks."],
              ["Day 7 — Fly home", "Airport transfer with discharge documents and aftercare plan."],
            ].map(([day, text]) => <li key={day} className="bg-white rounded-xl border border-blue-100 p-5"><strong className="text-slate-900">{day}</strong><p className="text-base mt-1">{text}</p></li>)}
          </ol>
          <p>Travel arrangements differ for Ultra Eco and Luxury. Use the <Link href="/bariatric-surgery-travel-guide" className="text-primary hover:underline">bariatric surgery travel guide</Link> and confirm your personal itinerary before booking flights.</p>
          <InlineCTA label="Request a free clinical review" />
        </ProseSection>

        <FAQSection title="Frequently asked questions" faqs={faqs} withJsonLd={false} />

        <ConversionModule
          title="Book your free consultation with Dr Üstün"
          text={<>Request a no-obligation clinical review in English. Share your health history, receive a suitability assessment and discuss the right package. You can also use the <Link href="/contact" className="underline font-semibold">contact form</Link>.</>}
          buttonLabel="WhatsApp UK · +44 7491 068686"
        />

        <RelatedLinks title="Related procedures and resources" links={[
          { title: "Sleeve gastrectomy procedure", description: "Learn how the operation is performed.", href: "/sleeve-gastrectomy" },
          { title: "Mini gastric bypass", description: "Compare an alternative bariatric operation.", href: "/mini-gastric-bypass" },
          { title: "Gastric balloon Turkey", description: "Explore temporary non-surgical options.", href: "/gastric-balloon-turkey" },
          { title: "Endoscopic sleeve gastroplasty", description: "Explore incisionless stomach reduction.", href: "/esg" },
          { title: "Before and after results", description: "Review real patient outcomes.", href: "/results" },
        ]} />

        <footer className="py-8 text-center text-sm text-slate-600 border-t">
          Reviewed by Op. Dr Murat Üstün, MD, PhD · Last reviewed 17 September 2026
        </footer>
      </main>

      <Footer />
      <StickyCTA guideHref="/gastric-sleeve-turkey-cost" />
    </div>
  );
}
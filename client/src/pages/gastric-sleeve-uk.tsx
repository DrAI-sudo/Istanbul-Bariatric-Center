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

const SITE_URL = "https://istanbulbariatriccenter.com";
const PAGE_URL = `${SITE_URL}/gastric-sleeve-uk`;

const faqs = [
  { question: "How much is a gastric sleeve in Turkey for UK patients in 2026?", answer: "IBC offers Ultra Eco at £2,450, Relaxation at £4,550 and Luxury at £4,900. The surgeon, hospital, hotel, transfers and aftercare differ, so compare the written inclusions rather than price alone." },
  { question: "Is it safe to have a gastric sleeve in Turkey as a UK patient?", answer: "No surgery is risk-free. Responsible care means clinical screening, an experienced surgical team, an appropriately equipped hospital, leak and blood-clot protocols, clear records and accessible follow-up. Relaxation and Luxury patients are treated by Dr Üstün at JCI-accredited Liv Hospital Vadistanbul." },
  { question: "How much cheaper is Turkey than UK private gastric sleeve surgery?", answer: "UK private sleeve surgery typically costs £8,000–£15,000. IBC packages cost £2,450–£4,900, typically 50–70% less than UK private treatment, although inclusions and individual medical needs vary." },
  { question: "What is the NHS wait time for gastric sleeve in 2026?", answer: "Waiting times vary by nation, region and pathway. Many patients report waits of two to five years from referral through specialist weight management to surgery." },
  { question: "Can I have a gastric sleeve on the NHS?", answer: "Potentially. NHS criteria commonly include BMI 40 or above, or BMI 35 or above with an obesity-related condition, plus assessment through a specialist weight-management pathway. Local commissioning and clinical criteria apply." },
  { question: "What happens if I have complications after returning to the UK?", answer: "Contact Dr Üstün's team through the aftercare channel, but seek urgent local assessment for severe pain, fever, breathlessness, a fast heartbeat, fainting, leg swelling or inability to drink. The NHS treats complications regardless of where surgery took place; this is not a promise that private routine follow-up will be funded." },
  { question: "Does the package include flights from the UK?", answer: "No. Typical return fares are around £120–£280, varying by airport, season and booking date. Do not book until your clinical plan and personal itinerary are confirmed." },
  { question: "Do UK passport holders need a visa for Turkey?", answer: "Entry rules for UK passport holders travelling to Turkey for medical treatment can change — check current FCDO travel advice and Turkish consular guidance before booking; your coordinator will confirm what documents to carry." },
  { question: "How long should I stay in Istanbul?", answer: "The standard Relaxation journey includes two nights in hospital and four nights in a hotel. Surgery is on Day 3, and the planned return is Day 8, post-operative day 5, only if the team confirms you are fit to fly. Luxury and Ultra Eco arrangements differ." },
  { question: "When can I fly after gastric sleeve surgery?", answer: "Fit-to-fly is typically around post-operative day 5, confirmed by the team before you book your return. Walk regularly, hydrate and follow prescribed clot-prevention instructions during travel." },
  { question: "When can I return to work in the UK?", answer: "Desk-based work often resumes after one to two weeks, depending on fatigue and hydration. Manual work and heavy lifting usually require four to six weeks and clinical clearance." },
  { question: "What aftercare do UK patients receive?", answer: "Relaxation includes 12 months of WhatsApp access to Dr Üstün's team, video check-ins, UK-registered dietitian support, an English operative note and discharge summary, and guidance for GP blood tests at three, six and 12 months." },
  { question: "Who performs the operation?", answer: "Op. Dr Murat Üstün performs Relaxation and Luxury sleeves at Liv Hospital Vadistanbul. Ultra Eco is performed by an experienced surgeon team at a partner boutique hospital." },
  { question: "How much weight can I lose after a sleeve?", answer: "Average excess weight loss is around 60–70% at 12–18 months, often about 25–30% of starting body weight in the first year. Results vary and require lasting nutrition, activity, supplements and monitoring." },
  { question: "What are the main gastric sleeve risks?", answer: "Risks include bleeding, staple-line leak, infection, blood clots, narrowing, reflux, dehydration and vitamin or mineral deficiency. Rare complications can require endoscopy, radiology, reoperation or intensive care." },
  { question: "Will my UK GP receive medical records?", answer: "You receive a full English operative note and discharge summary to share with your GP, plus guidance on follow-up blood tests. Ask your GP before travel what routine monitoring the practice can provide." },
];

const medicalGraph = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "MedicalWebPage",
      "@id": `${PAGE_URL}#webpage`,
      url: PAGE_URL,
      name: "Gastric Sleeve in Turkey for UK Patients (2026)",
      description: "Gastric sleeve Turkey for UK patients from £2,450. Compare three 2026 packages, UK travel, JCI hospital care, recovery and 12-month aftercare.",
      inLanguage: "en-GB",
      dateModified: "2026-09-17",
      isPartOf: { "@id": `${SITE_URL}/#website` },
      primaryImageOfPage: `${SITE_URL}/images/sleeve-uk/uk-passport-istanbul-hospital.webp`,
      reviewedBy: { "@id": `${SITE_URL}/#drmuratustun` },
      lastReviewed: "2026-09-17",
      audience: { "@type": "PeopleAudience", geographicArea: { "@type": "Country", name: "United Kingdom", identifier: "GB" } },
      significantLink: [
        `${SITE_URL}/gastric-sleeve-turkey`,
        `${SITE_URL}/gastric-sleeve-turkey-cost`,
        `${SITE_URL}/bariatric-surgery-for-uk-patients`,
        `${SITE_URL}/bariatric-surgery-travel-guide`,
      ],
      about: { "@id": `${PAGE_URL}#procedure` },
    },
    {
      "@type": "MedicalProcedure",
      "@id": `${PAGE_URL}#procedure`,
      name: "Laparoscopic Sleeve Gastrectomy for UK Patients",
      procedureType: "https://schema.org/TherapeuticProcedure",
      bodyLocation: "Stomach",
      howPerformed: "Under general anaesthesia, approximately 75–80% of the stomach is removed through keyhole incisions, leaving a narrow gastric sleeve. The usual admission is two hospital nights.",
      preparation: "Remote medical assessment, blood tests, ECG, anaesthetic review, endoscopy when indicated and a pre-operative liver-shrinking diet before travel to Istanbul.",
      followup: "Phased diet: fluids weeks 1–2, purée weeks 3–4, soft foods weeks 5–6 and a full textured diet from week 7 as tolerated. Relaxation includes 12 months of WhatsApp aftercare, video check-ins and UK-registered dietitian support. Blood monitoring is advised at 3, 6 and 12 months.",
      expectedPrognosis: "Average excess weight loss is approximately 60–70% at 12–18 months. Individual results and improvement in obesity-related conditions vary.",
      performedBy: { "@id": `${SITE_URL}/#drmuratustun` },
      audience: { "@type": "PeopleAudience", geographicArea: { "@type": "Country", name: "United Kingdom", identifier: "GB" } },
      offers: [
        { "@type": "Offer", name: "Ultra Eco", price: "2450", priceCurrency: "GBP", availability: "https://schema.org/InStock", eligibleRegion: { "@type": "Country", name: "United Kingdom", identifier: "GB" }, url: `${PAGE_URL}#pricing`, seller: { "@id": `${SITE_URL}/#organization` } },
        { "@type": "Offer", name: "Relaxation", price: "4550", priceCurrency: "GBP", availability: "https://schema.org/InStock", eligibleRegion: { "@type": "Country", name: "United Kingdom", identifier: "GB" }, url: `${PAGE_URL}#pricing`, seller: { "@id": `${SITE_URL}/#organization` } },
        { "@type": "Offer", name: "Luxury", price: "4900", priceCurrency: "GBP", availability: "https://schema.org/InStock", eligibleRegion: { "@type": "Country", name: "United Kingdom", identifier: "GB" }, url: `${PAGE_URL}#pricing`, seller: { "@id": `${SITE_URL}/#organization` } },
      ],
    },
  ],
};

const tableClass = "w-full text-left text-sm md:text-base";
const thClass = "p-4 font-semibold";
const tdClass = "p-4 border-t border-slate-200 align-top";

export default function GastricSleeveUK() {
  return (
    <div className="min-h-screen bg-white">
      <SEO title="Gastric Sleeve Turkey UK 2026" description="Gastric sleeve Turkey for UK patients from £2,450. Compare three 2026 packages, UK travel, JCI hospital care, recovery and 12-month aftercare." image="/images/sleeve-uk/uk-passport-istanbul-hospital.webp" url="/gastric-sleeve-uk" type="article" author="Op. Dr Murat Üstün, MD, PhD" />
      <JsonLd data={structuredData.createBreadcrumb([{ name: "Home", url: "/" }, { name: "Treatments", url: "/treatments" }, { name: "Gastric Sleeve for UK Patients", url: "/gastric-sleeve-uk" }])} />
      <JsonLd data={medicalGraph} />
      <JsonLd data={structuredData.createFAQ(faqs)} />
      <Navbar />
      <MoneyHero
        eyebrow="A UK-specific 2026 sleeve surgery guide"
        title="Gastric Sleeve in Turkey for UK Patients (2026)"
        subtitle="Compare fixed GBP package prices, a named consultant pathway, travel from the UK and a practical plan for recovery and follow-up after you return home."
        stats={[{ value: "From £2,450", label: "2026 price" }, { value: "50–70%", label: "Typically less than UK private" }, { value: "2 nights", label: "Hospital stay" }, { value: "12 months", label: "Relaxation aftercare" }]}
      />
      <main>
        <section className="py-10 bg-blue-50">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="bg-white border-l-4 border-primary rounded-xl p-6 md:p-8 shadow-sm grid md:grid-cols-2 gap-7 items-center">
              <div><p className="text-sm font-bold text-primary tracking-widest mb-2">UK QUICK ANSWER</p><p className="text-lg text-slate-700 leading-relaxed">IBC gastric sleeve packages cost £2,450–£4,900 in 2026, typically 50–70% less than UK private sleeve prices of £8,000–£15,000. Ultra Eco covers an experienced surgeon team and two boutique-hospital nights without hotel or transfers. Relaxation includes surgery by Op. Dr Murat Üstün at JCI-accredited Liv Hospital Vadistanbul, two hospital nights, four hotel nights, VIP transfers and 12 months of WhatsApp aftercare with UK-registered dietitian support.</p></div>
              <img loading="lazy" width="1024" height="683" src="/images/sleeve-uk/uk-passport-istanbul-hospital.webp" alt="UK passport and boarding pass overlooking an Istanbul hospital" className="w-full rounded-2xl" />
            </div>
          </div>
        </section>

        <ProseSection title="Why UK patients consider Turkey" id="why">
          <p>For many UK patients, the decision is driven by three practical differences: cost, timing and knowing who will operate. Private sleeve surgery in the UK commonly costs £8,000–£15,000. IBC’s three pathways begin at £2,450, creating a typical saving of 50–70% before flights and travel insurance. Lower operating costs in Turkey help explain the difference; they do not make clinical scrutiny any less important.</p>
          <p>Private treatment also avoids the NHS waiting list, although surgery should never be rushed. The assessment still reviews BMI, medical conditions, medicines, previous operations, eating behaviour and anaesthetic risk. Relaxation and Luxury patients know their consultant is <Link href="/dr-murat-ustun" className="text-primary hover:underline">Op. Dr Murat Üstün</Link>. Ultra Eco is a distinct lower-cost pathway delivered by an experienced surgeon team at a partner boutique hospital.</p>
          <p>This page focuses on sleeve-specific decisions. For broader comparisons between sleeve, bypass, balloon and ESG, read the <Link href="/bariatric-surgery-for-uk-patients" className="text-primary hover:underline">general UK patient bariatric surgery guide</Link>.</p>
        </ProseSection>

        <ComparisonBlock title="UK vs Turkey gastric sleeve costs" subtitle="Ask for a written quotation because medical needs and package inclusions can change the final total." columns={["Pathway", "2026 price", "Core position"]} highlightColumn={1} rows={[
          ["IBC Ultra Eco", "£2,450", "Experienced surgeon team; partner boutique hospital; 2 hospital nights; no hotel or transfers"],
          ["IBC Relaxation", "£4,550", "Dr Üstün; JCI-accredited Liv Hospital; 2 hospital + 4 hotel nights; VIP transfers; 12-month aftercare"],
          ["IBC Luxury", "£4,900", "Dr Üstün; 2 hospital + 5 luxury-hotel nights; private car; full board"],
          ["UK private", "Typically £8,000–£15,000", "Self-pay; inclusions and follow-up vary"],
          ["NHS", "Free at point of use", "Eligibility and specialist pathway required; regional waits vary"],
        ]} footnote={<>See the detailed <Link href="/gastric-sleeve-turkey-cost" className="text-primary hover:underline">gastric sleeve Turkey cost guide</Link>.</>} />

        <ProseSection title="What is included for travellers from the UK" tone="slate" id="pricing" maxWidth="max-w-6xl">
          <div className="grid md:grid-cols-3 gap-5">
            {[
              ["Ultra Eco", "£2,450", "Experienced surgeon team, partner boutique hospital and two hospital nights. Hotel, transfers and extended aftercare are not included."],
              ["Relaxation", "£4,550", "Dr Üstün at JCI-accredited Liv Hospital, two hospital nights, four hotel nights, VIP transfers and 12 months of aftercare."],
              ["Luxury", "£4,900", "Dr Üstün at Liv Hospital, two hospital nights, five luxury-hotel nights, private car, full board and priority aftercare."],
            ].map(([name, price, text]) => <div key={name} className="bg-white rounded-xl border border-slate-200 p-6"><h3 className="text-xl font-bold text-slate-900">{name}</h3><p className="text-3xl font-bold text-primary my-3">{price}</p><p className="text-base">{text}</p></div>)}
          </div>
          <p>Flights are excluded and typical UK return fares are about £120–£280. The flight is roughly four hours. Entry rules for UK passport holders travelling to Turkey for medical treatment can change — check current FCDO travel advice and Turkish consular guidance before booking; your coordinator will confirm what documents to carry.</p>
          <p>Buy travel insurance that explicitly covers medical travel and disclose the planned operation. Ordinary holiday policies often exclude elective treatment and related complications. Read exclusions, repatriation terms and excesses carefully; the <Link href="/insurance" className="text-primary hover:underline">insurance guide</Link> explains questions to ask.</p>
          <img loading="lazy" width="1024" height="683" src="/images/sleeve-uk/uk-patient-coordinator-call.webp" alt="Illustrative: video consultation with an English-speaking patient coordinator" className="w-full rounded-2xl mt-8" />
        </ProseSection>

        <ProseSection title="The UK departure-to-return itinerary" tone="blue" id="itinerary">
          <ol className="space-y-3">{[
            ["Day 1 — Fly to Istanbul", "Travel from your UK airport, meet the transfer team and settle into the hotel."],
            ["Day 2 — Assessment", "Blood tests, ECG, anaesthetic review, endoscopy when indicated and consultation with Dr Üstün."],
            ["Day 3 — Surgery · post-operative day 0", "Laparoscopic sleeve gastrectomy under general anaesthesia, followed by the first of two hospital nights, monitored recovery and early walking."],
            ["Day 4 — Post-operative day 1", "Second hospital night, with fluids as directed, regular walking, symptom checks and leak assessment according to the clinical protocol."],
            ["Day 5 — Post-operative day 2", "Discharge to the hotel when clinically ready, with medicines, diet instructions, warning signs and a daily check."],
            ["Day 6 — Post-operative day 3", "Hotel recovery, short walks, frequent fluids and a daily check. Do not use this as a sightseeing day."],
            ["Day 7 — Post-operative day 4", "Continue hotel recovery with hydration, mobility and a daily check before the planned fit-to-fly review."],
            ["Day 8 — Post-operative day 5", "Fly home only if the team confirms you are fit to fly, carrying your English operative note, discharge summary and medicines."],
          ].map(([day, text]) => <li key={day} className="bg-white border border-blue-100 rounded-xl p-5"><strong>{day}</strong><p className="text-base mt-1">{text}</p></li>)}</ol>
          <p>The standard Relaxation package includes two nights in hospital and four nights in a hotel. Luxury and Ultra Eco arrangements differ, so confirm your personal dates in writing. Read the <Link href="/bariatric-surgery-travel-guide" className="text-primary hover:underline">bariatric surgery travel guide</Link> before booking.</p>
        </ProseSection>

        <ProseSection title="Your UK aftercare pathway" id="aftercare">
          <p>Aftercare is remote rather than a claimed UK clinic partnership. Relaxation includes 12 months of WhatsApp access to Dr Üstün’s team, scheduled video check-ins and UK-registered dietitian support. Questions about hydration, wound photographs, food progression, medicines and symptoms can be reviewed, while emergencies must be assessed locally without waiting for a message reply.</p>
          <p>You receive a full English operative note and discharge summary for your GP, together with guidance on UK follow-up bloods at three, six and 12 months. Monitoring commonly includes full blood count, kidney and liver function, ferritin, folate, B12, vitamin D, calcium and other tests based on your history. Discuss availability with your GP before travel.</p>
          <p>Take the recommended bariatric multivitamin and prescribed calcium/vitamin D. Vitamin B12 is commonly required, often by injection according to local clinical advice and blood results. The diet progresses through fluids in weeks 1–2, purée in weeks 3–4, soft foods in weeks 5–6 and full textures from week 7 as tolerated.</p>
          <img loading="lazy" width="1024" height="683" src="/images/sleeve-uk/uk-patient-video-aftercare.webp" alt="UK patient at home on a follow-up video call" className="w-full rounded-2xl mt-8" />
        </ProseSection>

        <ProseSection title="NHS eligibility compared with IBC assessment" tone="slate" id="eligibility">
          <p>NHS bariatric surgery may be available at BMI 40 or above, or BMI 35 or above with a significant obesity-related condition, through a specialist weight-management pathway. Criteria and commissioning vary by region. Many patients report waits of two to five years from referral, although an individual pathway may be shorter or longer.</p>
          <p>IBC also uses clinical criteria rather than accepting everyone who can pay. Sleeve is commonly considered at BMI 40+, or 35–39.9 with conditions such as type 2 diabetes, sleep apnoea or hypertension. Selected patients around BMI 30 with poorly controlled metabolic disease may be considered after specialist review. Severe untreated heart or lung disease, pregnancy, active substance misuse, untreated eating disorder or inability to follow lifelong care can make surgery unsuitable.</p>
        </ProseSection>

        <ProseSection title="Safety benchmarks to compare" id="safety">
          <p>Country and price do not establish safety. Compare the named surgeon, operating hospital, anaesthesia team, intensive-care access, imaging and interventional support, infection controls, and the process for recognising deterioration. Relaxation and Luxury take place at JCI-accredited Liv Hospital Vadistanbul with ICU capability.</p>
          <p>The pathway includes clot-risk assessment, prescribed VTE prevention, compression measures and early walking. Staple-line inspection, an intraoperative leak test and postoperative monitoring form part of leak precautions. Before leaving, patients receive warning signs and a full English operative note and discharge summary. Accreditation and protocols reduce avoidable risk but cannot remove it.</p>
        </ProseSection>

        <ProseSection title="Recovery, flying and returning to work" tone="blue" id="recovery">
          <p>Fit-to-fly is typically around post-operative day 5, confirmed by the team before you book your return. On the flight, walk regularly, move your ankles, sip fluids and follow the anticoagulation plan. Avoid lifting heavy luggage.</p>
          <p>Desk-based work commonly resumes in one to two weeks, though fatigue can persist. Manual jobs, lifting and strenuous exercise generally require four to six weeks and clinical clearance. Driving depends on comfort, reaction time, medication and insurer rules. Plan support with shopping, children and household tasks for the first week home.</p>
        </ProseSection>

        <Checklist title="Risks to understand before consent" tone="warning" background="slate" items={[
          "Bleeding, infection or a staple-line leak requiring urgent treatment",
          "Deep-vein thrombosis or pulmonary embolism despite preventive measures",
          "Dehydration, vomiting or inability to meet protein and fluid targets",
          "Narrowing, twisting or obstruction that may need endoscopic or surgical treatment",
          "New or worsened reflux; another operation can occasionally be required",
          "Iron, folate, B12, vitamin D or other deficiency without supplements and blood tests",
          "Gallstones, hair thinning, loose skin and possible weight regain over time",
        ]} />

        <ExpertPOV title="A named consultant pathway" credentials="MD, PhD · 25+ years · 6,000+ advanced laparoscopic procedures">
          <p><Link href="/dr-murat-ustun" className="text-primary hover:underline">Op. Dr Murat Üstün</Link> has 25+ years of experience, 6,000+ advanced laparoscopic procedures and 2,200+ sleeve gastrectomies. He is a member of BOMSS, IFSO and the International Bariatric Club, and the only Boston Scientific-certified surgical ESG trainer in Turkey.</p>
          <p>Those credentials support an informed shortlist; they do not guarantee an outcome. Ask who will perform every part of the operation, which hospital is named in your quotation and how the team responds if recovery differs from plan. View genuine patient outcomes on the <Link href="/results" className="text-primary hover:underline">results page</Link>.</p>
        </ExpertPOV>

        <ProseSection title="Continue your sleeve research">
          <p>Use the <Link href="/gastric-sleeve-turkey" className="text-primary hover:underline">full gastric sleeve Turkey guide</Link> for detailed procedure information, and compare it with the <Link href="/weight-loss-surgery-turkey" className="text-primary hover:underline">weight loss surgery Turkey overview</Link>. A free assessment should answer suitability and risk questions before you choose a package.</p>
          <InlineCTA label="Request a written clinical assessment" />
        </ProseSection>

        <FAQSection title="Gastric sleeve Turkey FAQs for UK patients" faqs={faqs} withJsonLd={false} />
        <ConversionModule title="Plan your UK-to-Istanbul sleeve journey" text="Share your medical history for a no-obligation clinical review in English. If suitable, request a written quotation showing the surgeon, hospital, inclusions, exclusions and aftercare." buttonLabel="Request a free assessment" />
        <RelatedLinks title="Related UK sleeve resources" links={[
          { title: "Full gastric sleeve Turkey guide", description: "Procedure, packages, candidacy and risks.", href: "/gastric-sleeve-turkey" },
          { title: "Gastric sleeve cost guide", description: "Compare all three package tiers.", href: "/gastric-sleeve-turkey-cost" },
          { title: "Bariatric surgery for UK patients", description: "Compare procedures and travel decisions.", href: "/bariatric-surgery-for-uk-patients" },
          { title: "Bariatric surgery travel guide", description: "Plan flights, documents and insurance.", href: "/bariatric-surgery-travel-guide" },
          { title: "Meet Dr Murat Üstün", description: "Review experience and memberships.", href: "/dr-murat-ustun" },
          { title: "Real patient results", description: "View genuine patient outcomes.", href: "/results" },
          { title: "Medical travel insurance", description: "Questions to ask before buying cover.", href: "/insurance" },
        ]} />
        <footer className="py-8 text-center text-sm text-slate-600 border-t">Reviewed by Op. Dr Murat Üstün, MD, PhD · Last reviewed 17 September 2026</footer>
      </main>
      <Footer />
      <StickyCTA guideHref="/gastric-sleeve-turkey-cost" />
    </div>
  );
}
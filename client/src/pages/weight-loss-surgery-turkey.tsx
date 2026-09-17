import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { SEO, JsonLd, structuredData } from "@/components/seo";
import { Link } from "wouter";
import {
  MoneyHero,
  ProseSection,
  Checklist,
  FAQSection,
  RelatedLinks,
  ConversionModule,
  ExpertPOV,
  StickyCTA,
  InlineCTA,
} from "@/components/money-page";

const SITE_URL = "https://istanbulbariatriccenter.com";
const PAGE_URL = `${SITE_URL}/weight-loss-surgery-turkey`;

const procedures = [
  { name: "Sleeve Gastrectomy", href: "/gastric-sleeve-turkey", how: "Removes roughly 75–80% of the stomach to create a narrow sleeve", loss: "60–70% EWL", invasive: "Keyhole surgery; permanent", nights: "2–3", price: "£2,450 Ultra Eco; £4,550 Relaxation; £4,900 Luxury", best: "Many patients with obesity who do not need intestinal bypass" },
  { name: "Roux-en-Y Gastric Bypass", href: "/gastric-bypass", how: "Creates a small pouch and reroutes food through a Y-shaped intestinal bypass", loss: "65–75% EWL", invasive: "Keyhole surgery; permanent", nights: "2–3", price: "£5,000 Relaxation; £5,350 Luxury", best: "Severe reflux, diabetes or a need for stronger metabolic effect" },
  { name: "Mini Gastric Bypass (OAGB)", href: "/mini-gastric-bypass", how: "Creates a long pouch joined to one loop of small bowel", loss: "65–80% EWL", invasive: "Keyhole surgery; permanent", nights: "2–3", price: "From £5,000", best: "Higher BMI or metabolic disease after individual review" },
  { name: "Gastric Balloon", href: "/gastric-balloon-turkey", how: "A temporary device occupies stomach space; no stomach is removed", loss: "10–15% TBWL", invasive: "Non-surgical; temporary", nights: "Day case", price: "Orbera £1,900; Allurion £2,600; Spatz3 £2,900", best: "Selected BMI 27–40 patients seeking a temporary option" },
  { name: "Endoscopic Sleeve Gastroplasty (ESG)", href: "/esg", how: "Internal endoscopic sutures reduce stomach volume without incisions", loss: "15–20% TBWL", invasive: "Endoscopic; anatomy retained", nights: "0–1", price: "£5,700", best: "Selected patients wanting more than a balloon without abdominal surgery" },
  { name: "Duodenal Switch (SADI-S / BPD-DS)", href: "/duodenal-switch", how: "Combines a sleeve with substantial intestinal rerouting", loss: "70–85% EWL", invasive: "Complex keyhole surgery", nights: "3–4", price: "£5,050 Relaxation; £5,400 Luxury", best: "Very high BMI or major metabolic disease with lifelong follow-up" },
  { name: "Transit Bipartition", href: "/transit-bipartition", how: "Combines sleeve surgery with a second route to the lower intestine", loss: "Similar to DS, with a better nutrition profile", invasive: "Complex keyhole surgery", nights: "3–4", price: "Quoted after assessment", best: "Selected patients with obesity and difficult type 2 diabetes" },
  { name: "Revision Bariatric Surgery", href: "/revision-bariatric-surgery-turkey", how: "Repairs, converts or reverses a previous bariatric operation", loss: "Varies by anatomy and goal", invasive: "Variable; often complex", nights: "Variable", price: "Quoted after assessment", best: "Complications, reflux, inadequate loss or regain after previous surgery" },
];

const faqs = [
  { question: "What weight loss surgery options are available in Turkey?", answer: "The eight options covered here are sleeve gastrectomy, Roux-en-Y gastric bypass, mini gastric bypass (OAGB), gastric balloon, endoscopic sleeve gastroplasty (ESG), Duodenal Switch (SADI-S / BPD-DS), transit bipartition and revision bariatric surgery. Suitability depends on a full clinical assessment." },
  { question: "How much does weight loss surgery cost in Turkey in 2026?", answer: "IBC prices start at £1,900 for Orbera balloon and £2,450 for Ultra Eco sleeve. Sleeve Relaxation and Luxury are £4,550 and £4,900; Roux-en-Y bypass £5,000 and £5,350; OAGB from £5,000; duodenal switch £5,050 and £5,400; ESG £5,700. Transit bipartition and revisions are quoted after assessment." },
  { question: "Which weight loss surgery is best for me?", answer: "There is no universally best operation. BMI, diabetes, reflux, eating pattern, previous surgery, medication, anaesthetic risk and willingness to accept permanent anatomical change all matter. A consultant should recommend options only after reviewing these factors." },
  { question: "Is weight loss surgery in Turkey safe?", answer: "It can be delivered safely, but country and price do not establish safety. Check the named surgeon, hospital accreditation, anaesthesia and ICU capability, procedure volume, emergency protocols and written aftercare. Every procedure still carries risk." },
  { question: "What does JCI accreditation mean?", answer: "Joint Commission International accreditation is an external hospital-level review of patient-safety and quality systems. It is useful evidence about the facility, but it is not a guarantee of an individual outcome and does not replace checking the surgeon and pathway." },
  { question: "What BMI qualifies for bariatric surgery?", answer: "NICE-style thresholds commonly prompt consideration at BMI 40 or above, or 35 or above with a condition that could improve with weight loss. Selected people with recent-onset type 2 diabetes may be assessed from BMI 30. Decisions remain individual." },
  { question: "Can I have a non-surgical weight loss procedure?", answer: "Selected adults, often in roughly the BMI 27–40 range, may be considered for a gastric balloon or ESG. Balloon weight loss is commonly 10–15% TBWL and ESG about 15–20% TBWL; neither is automatically safer or suitable for everyone." },
  { question: "How long should I stay in Istanbul?", answer: "A common surgical itinerary is about seven days, allowing consultation, testing, surgery, observation and a fit-to-fly review. Balloon pathways may be shorter. Book flexible travel only after the team confirms your personal schedule." },
  { question: "Are flights included in the package?", answer: "No. Flights are excluded. Balloon prices also exclude hotel and transfers. Only Relaxation and Luxury surgical tiers include hotel, transfers and 12-month aftercare; Ultra Eco sleeve does not include hotel or transfers." },
  { question: "How much cheaper is Turkey than UK private surgery?", answer: "UK private equivalents typically cost 2–3× more. Compare like with like: named surgeon, accredited hospital, tests, hospital nights, medicines, hotel, transfers and aftercare. The lowest headline figure may omit important items." },
  { question: "When can I fly home after bariatric surgery?", answer: "Only after the treating team has reviewed recovery and confirmed fitness to fly. The timing varies by procedure and progress. Walk regularly, follow hydration and VTE instructions, and seek urgent care for breathlessness, chest pain or a swollen painful leg." },
  { question: "What are the main risks?", answer: "Risks include bleeding, infection, anaesthetic problems, leak, VTE, stricture and reoperation. Longer-term issues can include reflux after sleeve, dumping after bypass and nutritional deficiencies. Published operative mortality is roughly 0.1–0.3% and leak risk around 1–2%, varying by procedure and patient." },
  { question: "Will my UK GP provide aftercare?", answer: "Do not assume that a GP will replace specialist bariatric follow-up. Ask the overseas team for an English operative note, discharge summary, medication list, supplement plan and blood-monitoring schedule, then share these with your GP before and after travel." },
  { question: "What happens if I have had bariatric surgery before?", answer: "Revision requires the old operative record, current imaging or endoscopy when indicated, symptoms and nutrition results. Because scar tissue and anatomy vary, the procedure and price are quoted only after assessment." },
];

const possibleTreatment = procedures.map(({ name, href }) => ({
  "@type": "MedicalProcedure",
  name,
  url: SITE_URL + href,
}));

const medicalGraph = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "MedicalWebPage",
      "@id": PAGE_URL + "#webpage",
      url: PAGE_URL,
      name: "Weight Loss Surgery in Turkey — The 2026 Guide",
      description: "Independent 2026 patient guide to weight loss surgery in Turkey — all 8 available procedures, honest cost comparison, safety benchmarks, JCI accreditation explained, decision framework and aftercare.",
      inLanguage: "en-GB",
      dateModified: "2026-09-17",
      primaryImageOfPage: SITE_URL + "/images/wls/istanbul-bosphorus-skyline.webp",
      isPartOf: { "@id": SITE_URL + "/#organization" },
      mainContentOfPage: { "@type": "WebPageElement", cssSelector: "main" },
      about: { "@type": "MedicalCondition", name: "Obesity", code: { "@type": "MedicalCode", code: "E66", codingSystem: "ICD-10" }, possibleTreatment },
      audience: { "@type": "MedicalAudience", audienceType: "Patient", geographicArea: { "@type": "Country", name: "United Kingdom" } },
      reviewedBy: { "@id": SITE_URL + "/#drmuratustun" },
      lastReviewed: "2026-09-17",
      specialty: "https://schema.org/Surgical",
    },
    {
      "@type": "ItemList",
      "@id": PAGE_URL + "#procedure-list",
      name: "Weight loss surgery options available in Turkey (2026)",
      numberOfItems: 8,
      itemListElement: procedures.map(({ name, href }, index) => ({ "@type": "ListItem", position: index + 1, name, url: SITE_URL + href })),
    },
    {
      "@type": "FAQPage",
      mainEntity: faqs.map(({ question, answer }) => ({ "@type": "Question", name: question, acceptedAnswer: { "@type": "Answer", text: answer } })),
    },
  ],
};

const tableClass = "w-full text-left text-sm";
const thClass = "p-3 font-semibold";
const tdClass = "p-3 border-t border-slate-200 align-top";

export default function WeightLossSurgeryTurkey() {
  return (
    <div className="min-h-screen bg-white">
      <SEO title="Weight Loss Surgery Turkey 2026" description="Complete guide to weight loss surgery in Turkey: options (sleeve, bypass, balloon, ESG), costs from £1,900, safety, JCI hospitals, and how to choose." image="/images/wls/istanbul-bosphorus-skyline.webp" url="/weight-loss-surgery-turkey" type="article" author="Op. Dr Murat Üstün, MD, PhD" />
      <JsonLd data={structuredData.createBreadcrumb([{ name: "Home", url: "/" }, { name: "Treatments", url: "/treatments" }, { name: "Weight Loss Surgery in Turkey", url: "/weight-loss-surgery-turkey" }])} />
      <JsonLd data={medicalGraph} />
      <Navbar />
      <MoneyHero
        eyebrow="Independent 2026 guide for UK patients"
        title="Weight Loss Surgery in Turkey — The 2026 Guide"
        subtitle="Compare eight surgical, endoscopic and temporary treatments, current IBC prices and the safety questions that matter before travelling."
        stats={[{ value: "25+ years", label: "Consultant experience" }, { value: "6,000+", label: "Advanced laparoscopic procedures" }, { value: "8", label: "Procedure options" }, { value: "JCI", label: "Accredited hospital" }]}
      />
      <main>
        <section className="py-10 bg-blue-50">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="bg-white border-l-4 border-primary rounded-xl p-6 md:p-8 shadow-sm grid md:grid-cols-2 gap-8 items-center">
              <div>
                <p className="text-sm font-bold text-primary tracking-widest mb-2">QUICK ANSWER</p>
                <p className="text-lg text-slate-700 leading-relaxed">Turkey offers eight principal weight-loss procedures, from temporary balloons to complex metabolic surgery. IBC prices start at £1,900. Relaxation and Luxury tiers are performed by Op. Dr Murat Üstün at JCI-accredited Liv Hospital Vadistanbul. The £2,450 Ultra Eco sleeve is performed by his experienced surgeon team at a partner boutique hospital and does not include hotel or transfers. Procedure choice should be based on health and anatomy rather than the cheapest headline.</p>
              </div>
              <img loading="lazy" width="1024" height="576" src="/images/wls/istanbul-bosphorus-skyline.webp" alt="Istanbul Bosphorus skyline for UK patients considering weight loss surgery in Turkey" className="w-full rounded-2xl" />
            </div>
          </div>
        </section>

        <ProseSection title="Which weight loss procedures are available?" id="procedures" maxWidth="max-w-7xl">
          <p>“Weight loss surgery” covers treatments with very different mechanisms, risks and levels of permanence. EWL means excess weight loss: the percentage of weight above a healthy reference weight that is lost. TBWL means total body-weight loss and uses starting weight. Because these measures are not interchangeable, compare each procedure using the measure shown.</p>
          <div className="overflow-x-auto rounded-xl border border-slate-200">
            <table className={tableClass}>
              <thead className="bg-slate-900 text-white"><tr><th className={thClass}>Procedure</th><th className={thClass}>How it works</th><th className={thClass}>Typical loss</th><th className={thClass}>Invasiveness</th><th className={thClass}>Hospital nights</th><th className={thClass}>2026 IBC price</th><th className={thClass}>Best for</th></tr></thead>
              <tbody>{procedures.map((p) => <tr key={p.name}><th scope="row" className={tdClass}><Link href={p.href} className="text-primary hover:underline">{p.name}</Link></th><td className={tdClass}>{p.how}</td><td className={tdClass}>{p.loss}</td><td className={tdClass}>{p.invasive}</td><td className={tdClass}>{p.nights}</td><td className={tdClass}>{p.price}</td><td className={tdClass}>{p.best}</td></tr>)}</tbody>
            </table>
          </div>
          <p>Ranges describe typical outcomes, not promises. An operation with greater average loss may also demand more intensive supplementation and monitoring. Revision and transit bipartition cannot responsibly be given a generic price before records and anatomy are reviewed.</p>
        </ProseSection>

        <ProseSection title="Weight loss surgery Turkey costs in 2026" tone="slate" id="costs" maxWidth="max-w-6xl">
          <p>Turkey can charge less because hospital staffing, facilities and operating costs are lower than in the UK, not because safe surgery needs fewer professionals. UK private equivalents typically cost 2–3× more. A fair comparison uses the complete pathway rather than a social-media headline: surgeon and anaesthetist, operating theatre, consumables, tests, hospital nights, medicines, pathology where relevant, dietetic support and plans for an unexpected delay.</p>
          <p>The £2,450 Ultra Eco sleeve is an entry clinical pathway performed by Dr Üstün’s experienced surgeon team at a partner boutique hospital; it does not include hotel or transfers. Relaxation and Luxury tiers are performed by Op. Dr Murat Üstün at JCI-accredited Liv Hospital Vadistanbul. Sleeve Relaxation (£4,550) and Luxury (£4,900) include hotel, transfers and 12-month aftercare. Roux-en-Y bypass is £5,000 Relaxation or £5,350 Luxury; OAGB starts at £5,000. Duodenal switch is £5,050 or £5,400, and ESG is £5,700. Balloon prices—Orbera £1,900, Allurion £2,600 and Spatz3 £2,900—exclude hotel and transfers. Flights are excluded from every plan.</p>
          <h3>What a written quote should tell you</h3>
          <p>Ask who will operate, the exact hospital, number of included nights, implant or stapling specification, pre-operative tests, medicines, companion charges, hotel and transfer details, aftercare duration and what happens if you cannot fly as planned. Confirm whether “aftercare” means consultant access, dietitian appointments or only coordinator messaging.</p>
          <h3>Red flags in a cheap quote</h3>
          <p>Pause if the surgeon is unnamed, the hospital changes after payment, assessment is based only on height and weight, the seller promises guaranteed loss, or complications are dismissed. Pressure to pay immediately, vague “lifetime aftercare”, no written exclusions and a refusal to provide an English discharge record are also warning signs. A quote should never substitute for informed consent.</p>
          <InlineCTA label="Request an itemised 2026 quotation" />
        </ProseSection>

        <ProseSection title="Safety and how to choose a clinic" id="safety" maxWidth="max-w-6xl">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <p>Begin with the named surgeon, not an intermediary. Verify qualifications, years in bariatric practice and volume in your proposed procedure—not only total operations. Ask whether that surgeon performs the consultation, operation and complication decisions. High volume cannot eliminate risk, but it supports team familiarity with difficult anatomy and early warning signs.</p>
              <p>JCI accreditation is an independent review of hospital quality and safety systems. It indicates that the hospital has been assessed against international standards; it does not certify every surgeon or guarantee a result. Confirm 24-hour medical cover, imaging, endoscopy, blood bank and intensive-care access. Ask about leak testing and response pathways, VTE risk assessment and prophylaxis, mobilisation, respiratory care and escalation outside office hours.</p>
            </div>
            <img loading="lazy" width="1024" height="576" src="/images/wls/jci-hospital-reception.webp" alt="Reception area of a modern JCI-accredited hospital in Istanbul" className="w-full rounded-2xl" />
          </div>
          <Checklist title="Seven checks before paying a deposit" items={[
            "A named bariatric surgeon with procedure-specific experience",
            "The exact hospital and current accreditation confirmed in writing",
            "On-site ICU, imaging, endoscopy and emergency surgical capability",
            "Documented leak, bleeding and VTE prevention and escalation protocols",
            "An itemised quote with exclusions, extra nights and companion costs",
            "Reachable clinical aftercare rather than sales-only messaging",
            "English operative note, discharge summary and monitoring plan for your GP",
          ]} />
        </ProseSection>

        <ProseSection title="Who may be a candidate?" tone="blue" id="candidacy">
          <p>NICE-style thresholds commonly support bariatric assessment at BMI 40 kg/m² or above, or 35 or above where a significant condition—such as type 2 diabetes, hypertension or sleep apnoea—could improve with weight loss. Selected people with recent-onset type 2 diabetes may be assessed from BMI 30. Ethnicity, central adiposity and metabolic risk can affect interpretation, so BMI is a screening tool rather than the whole decision.</p>
          <p>Non-surgical pathways such as a gastric balloon or ESG may suit selected adults broadly in the BMI 27–40 range. They usually produce less weight loss than surgery and still require nutrition and behaviour change. Pregnancy, uncontrolled psychiatric illness, active substance misuse, untreated eating disorder, unsafe anaesthetic risk or inability to follow nutrition advice may delay or prevent treatment. Previous abdominal surgery does not automatically exclude treatment but changes planning.</p>
        </ProseSection>

        <ProseSection title="A practical decision framework" id="decision" maxWidth="max-w-6xl">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <p><strong>By BMI and required loss:</strong> balloon and ESG can match a moderate target; sleeve is a common surgical option; bypass or duodenal-switch variants may be discussed for greater metabolic need or very high BMI.</p>
              <p><strong>By diabetes:</strong> bypass, OAGB, transit bipartition and duodenal-switch procedures have strong metabolic effects, but also different nutritional burdens. Diabetes medicines need active peri-operative adjustment.</p>
              <p><strong>By reflux:</strong> significant reflux can worsen after sleeve, making Roux-en-Y preferable for some. Endoscopy, symptoms and hiatus anatomy matter. <strong>By previous surgery:</strong> regain, reflux, stenosis or leak demand diagnosis before conversion. <strong>By permanence:</strong> balloon is temporary, ESG retains the stomach, while surgery creates permanent anatomical change.</p>
            </div>
            <img loading="lazy" width="1024" height="576" src="/images/wls/bariatric-surgeon-consultation.webp" alt="Patient discussing bariatric treatment choices with a surgeon during consultation" className="w-full rounded-2xl" />
          </div>
          <p>A responsible consultation may conclude that no procedure, a period of medical weight management or additional investigation is best. Your willingness to take supplements, attend blood monitoring, avoid smoking and follow lifelong eating guidance matters as much as the operation’s technical description.</p>
        </ProseSection>

        <ProseSection title="What the seven-day journey looks like" tone="slate" id="journey">
          <ol className="grid md:grid-cols-2 gap-4">
            {[
              ["Day 1 — Arrive", "Travel to Istanbul and settle in. Flights are not included; do not book until dates are clinically confirmed."],
              ["Day 2 — Assessment", "Meet the clinical team for examination, blood tests, ECG and additional tests indicated by history."],
              ["Day 3 — Procedure", "Final consent and anaesthetic review precede surgery. Walking and breathing exercises begin when safe."],
              ["Days 4–5 — Hospital recovery", "The team monitors pain, hydration, observations and tolerance of the staged fluid plan."],
              ["Day 6 — Hotel recovery", "Continue frequent walking, fluids, medicines and the diet plan, with clinical contact available."],
              ["Day 7 — Fit-to-fly review", "Discharge documents and medicines are checked before return. A longer stay may be necessary if recovery requires it."],
            ].map(([title, text]) => <li key={title} className="bg-white border border-slate-200 rounded-xl p-5"><strong className="text-slate-900">{title}</strong><p className="text-base mt-1">{text}</p></li>)}
          </ol>
          <p>After returning, build in recovery time rather than going straight back to physical work. Follow the personal VTE plan during travel, walk regularly, avoid dehydration and know urgent warning signs. Twelve-month aftercare is included in Relaxation and Luxury tiers, not automatically in Ultra Eco or balloon prices. Aftercare cannot replace local emergency services.</p>
        </ProseSection>

        <ProseSection title="Risks: an honest overview" id="risks" maxWidth="max-w-6xl">
          <p>Modern bariatric surgery has a low but real mortality risk, commonly quoted at roughly 0.1–0.3%, depending on procedure, patient health and dataset. Leak is often around 1–2%. These figures are broad reference ranges, not a personalised estimate. Bleeding, infection, anaesthetic complications, pneumonia, VTE, injury to nearby organs and return to theatre can occur.</p>
          <p>Procedure-specific issues matter. Sleeve can cause or worsen reflux. Bypass may cause dumping, ulcers, internal hernia or narrowing at a join. OAGB can involve bile reflux. More malabsorptive operations increase diarrhoea, protein-calorie malnutrition and vitamin/mineral deficiency risk. Strictures may require endoscopy. Gallstones, hair shedding and loose skin can follow rapid loss. Balloon intolerance can require early removal, while ESG sutures can loosen.</p>
          <p>Seek urgent assessment for escalating abdominal or chest pain, persistent fast pulse, fever, breathing difficulty, fainting, repeated vomiting, inability to drink, blood in vomit or stool, or a swollen painful leg. Do not wait for an overseas message reply when symptoms may represent leak, bleeding, dehydration or VTE.</p>
        </ProseSection>

        <ProseSection title="Aftercare and coordination with your UK GP" tone="blue" id="aftercare" maxWidth="max-w-6xl">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <img loading="lazy" width="1024" height="683" src="/images/wls/post-op-recovery-walk.webp" alt="Patient taking a gentle walk during recovery after bariatric treatment" className="w-full rounded-2xl" />
            <div>
              <p>Good aftercare starts before travel. Obtain an English operative note, discharge summary, medication list, device details where relevant, supplement prescription, staged diet and contact route. Give copies to your GP, but recognise that NHS primary care is not a substitute for the operating team’s bariatric follow-up.</p>
              <p>Blood monitoring commonly includes full blood count, kidney and liver tests, iron/ferritin, folate, B12, vitamin D, calcium and other tests according to procedure and symptoms. More malabsorptive surgery needs broader, lifelong surveillance. Take prescribed supplements consistently; normal early blood results do not make them optional. Dietitian reviews should address protein, hydration, portions, eating speed and symptoms.</p>
            </div>
          </div>
          <p>Weight loss changes blood pressure, glucose control and medicine absorption. Diabetes and antihypertensive medicines may need prompt review. Avoid pregnancy for the interval recommended by your team, and discuss contraception because absorption may change after bypass. Agree who reviews routine results, who handles procedure-related concerns and where you will attend in an emergency.</p>
        </ProseSection>

        <ExpertPOV title="Op. Dr Murat Üstün and the hospital" credentials="MD, PhD · 25+ years · 6,000+ advanced laparoscopic procedures">
          <p><Link href="/dr-murat-ustun" className="text-primary hover:underline">Op. Dr Murat Üstün</Link> has 25+ years of experience, 6,000+ advanced laparoscopic procedures, including 2,200+ sleeves and 700+ bypasses. He is a member of BOMSS, IFSO and the International Bariatric Club, and is the only Boston Scientific-certified surgical ESG trainer in Turkey.</p>
          <p>He operates at JCI-accredited Liv Hospital Vadistanbul in Sarıyer, Istanbul, and at Memorial. Hospital accreditation, procedure volume and a named consultant are meaningful safeguards, but they do not remove risk. The purpose of assessment is to identify the safest reasonable option—or advise against intervention.</p>
        </ExpertPOV>

        <FAQSection title="Weight loss surgery Turkey FAQs" faqs={faqs} withJsonLd={false} />
        <ConversionModule title="Ask which option fits your health needs" text="Request a no-obligation clinical assessment. Share your medical history, medicines, BMI, reflux or diabetes history and any previous bariatric records for a personalised recommendation and written quote." buttonLabel="Request a free assessment" />
        <RelatedLinks title="All procedures and planning guides" links={[
          ...procedures.map((p) => ({ title: p.name, description: "Read the detailed treatment guide.", href: p.href })),
          { title: "Cost of bariatric surgery in Turkey", description: "Compare the authoritative 2026 price matrix.", href: "/cost-of-bariatric-surgery-in-turkey" },
          { title: "Bariatric surgery for UK patients", description: "Plan records, follow-up and UK coordination.", href: "/bariatric-surgery-for-uk-patients" },
          { title: "Bariatric surgery travel guide", description: "Prepare for flights, Istanbul and recovery.", href: "/bariatric-surgery-travel-guide" },
        ]} />
        <footer className="py-8 text-center text-sm text-slate-600 border-t">Reviewed by Op. Dr Murat Üstün, MD, PhD · Last reviewed 17 September 2026</footer>
      </main>
      <Footer />
      <StickyCTA guideHref="/cost-of-bariatric-surgery-in-turkey" />
    </div>
  );
}
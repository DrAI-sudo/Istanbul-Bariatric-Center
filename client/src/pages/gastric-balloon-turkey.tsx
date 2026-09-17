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
  { question: "How much does a gastric balloon cost in Turkey in 2026?", answer: "At Istanbul Bariatric Center, Orbera costs £1,900, Allurion swallowable costs £2,600 and Spatz3 adjustable costs £2,900. A written quotation confirms your clinical plan and inclusions." },
  { question: "What weight loss can I expect from a gastric balloon?", answer: "Typical total body weight loss is 10–15% at six months. Allurion studies report an average 10–15% at about 16 weeks. Results vary, and nutrition, activity and follow-up strongly influence maintenance." },
  { question: "What is the difference between Orbera, Allurion and Spatz3?", answer: "Orbera is a six-month endoscopic balloon. Allurion is swallowed, normally needs no anaesthesia or planned removal, and stays about 16 weeks. Spatz3 is placed and removed endoscopically, can be adjusted after placement and may remain for 12 months." },
  { question: "Is a gastric balloon surgery?", answer: "No abdominal incision is made and the stomach is not cut, stapled or removed. Orbera and Spatz3 require endoscopy with sedation for placement and removal; Allurion normally requires neither endoscopy nor anaesthesia." },
  { question: "Is travelling to Turkey for a gastric balloon safe?", answer: "No treatment is risk-free. Appropriate screening, an experienced clinician, a suitably equipped hospital and accessible aftercare matter. Eligible IBC patients are treated at JCI-accredited Liv Hospital Vadistanbul." },
  { question: "How difficult are the first few days?", answer: "Nausea, vomiting, cramps, reflux and fatigue are common for three to seven days while the stomach adjusts. Prescribed anti-emetics, a proton-pump inhibitor, frequent small sips and the phased diet help most patients." },
  { question: "Can the balloon be removed early?", answer: "Yes. Persistent intolerance, dehydration or a complication can require early endoscopic removal. Roughly 2–5% of patients need early removal for intolerance; individual risk varies." },
  { question: "Will I regain weight after the balloon leaves my stomach?", answer: "Regain is possible because every balloon is temporary. The structured programme is intended to establish portion control, food choices and activity that continue after removal or passage." },
  { question: "Who is eligible for a gastric balloon?", answer: "It may suit selected adults with BMI 27–40 who have not achieved enough progress with medical weight-loss attempts and can commit to dietary follow-up. A clinician must assess the complete history." },
  { question: "Who should not have a gastric balloon?", answer: "Important exclusions can include previous gastric surgery, a large hiatus hernia, active ulcer disease, pregnancy, unsafe anticoagulation and an active eating disorder. Other conditions may also make treatment unsuitable." },
  { question: "Does Allurion really pass naturally?", answer: "Allurion is designed to open a time-release valve at approximately 16 weeks, deflate and pass through the bowel. Rarely, clinical investigation or intervention may still be needed." },
  { question: "What does a gastric balloon package include?", answer: "The three plans include pre-assessment, placement, indicated medicines and dietitian reviews at one, three and six months. Orbera and Spatz3 include planned removal endoscopy. Hotel, transfers and flights are not included unless explicitly added to a written quotation." },
  { question: "How soon can I return to work?", answer: "Many people need several quiet days because early nausea and cramping can be significant. Return depends on hydration, symptoms and the type of work; follow your clinician’s advice rather than a fixed travel timetable." },
  { question: "Is a balloon better than ESG or gastric sleeve?", answer: "It depends on BMI, health, goals and willingness to accept permanence and risk. A balloon is temporary and usually produces less weight loss. ESG reshapes the stomach endoscopically; sleeve surgery permanently removes part of it." },
];

const SITE_URL = "https://istanbulbariatriccenter.com";
const procedureCommon = {
  procedureType: "https://schema.org/TherapeuticProcedure",
  bodyLocation: "Stomach",
  performedBy: { "@id": `${SITE_URL}/#drmuratustun` },
};
const medicalGraph = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "MedicalWebPage",
      "@id": `${SITE_URL}/gastric-balloon-turkey#webpage`,
      url: `${SITE_URL}/gastric-balloon-turkey`,
      name: "Gastric Balloon in Turkey — Orbera, Allurion & Spatz3 Options (2026)",
      description: "Complete UK-patient guide to gastric balloon in Turkey: 2026 package pricing for Orbera (£1,900), Allurion swallowable (£2,600) and Spatz3 adjustable (£2,900), weight loss data, side effects and FAQ.",
      inLanguage: "en-GB",
      dateModified: "2026-09-17",
      primaryImageOfPage: `${SITE_URL}/images/balloon/gastric-balloon-anatomy.webp`,
      isPartOf: { "@id": `${SITE_URL}/#organization` },
      about: [
        { "@id": `${SITE_URL}/gastric-balloon-turkey#orbera` },
        { "@id": `${SITE_URL}/gastric-balloon-turkey#allurion` },
        { "@id": `${SITE_URL}/gastric-balloon-turkey#spatz3` },
      ],
      audience: { "@type": "MedicalAudience", audienceType: "Patient", geographicArea: { "@type": "Country", name: "United Kingdom" } },
      reviewedBy: { "@id": `${SITE_URL}/#drmuratustun` },
      lastReviewed: "2026-09-17",
      specialty: "https://schema.org/Surgical",
    },
    {
      "@type": "MedicalProcedure", "@id": `${SITE_URL}/gastric-balloon-turkey#orbera`, name: "Orbera Intragastric Balloon",
      alternateName: ["Orbera Balloon", "Endoscopic Gastric Balloon"], ...procedureCommon,
      howPerformed: "Placed endoscopically under light sedation as a day case. A soft silicone balloon is passed through the mouth into the stomach and filled with 400–700 ml of sterile saline. Procedure takes 20–30 minutes; patient goes home the same day. Removed by endoscopy at 6 months.",
      preparation: "Overnight fast. Pre-procedure bloods and ECG. Anti-nausea medication started before placement.",
      followup: "Anti-nausea medication and PPI for the first 5–7 days. Phased diet: clear fluids day 1–3, purée days 4–7, soft solids week 2, full soft diet from week 3. Dietitian follow-up at 1, 3 and 6 months. Removal endoscopy at month 6.",
      expectedPrognosis: "Average total body weight loss of 10–15% at 6 months. Approximately 30% of patients achieve ≥25% excess weight loss threshold defined in the FDA pivotal trial.",
      indication: [{ "@type": "MedicalIndication", name: "BMI 27–40 kg/m² without severe comorbidity" }, { "@type": "MedicalIndication", name: "Failed medical weight-loss attempts" }, { "@type": "MedicalIndication", name: "Bridge to bariatric surgery in high-BMI patients" }],
      offers: { "@type": "Offer", priceCurrency: "GBP", price: "1900", availability: "https://schema.org/InStock", url: `${SITE_URL}/gastric-balloon-turkey#pricing`, seller: { "@id": `${SITE_URL}/#organization` } },
    },
    {
      "@type": "MedicalProcedure", "@id": `${SITE_URL}/gastric-balloon-turkey#allurion`, name: "Allurion Swallowable Gastric Balloon",
      alternateName: ["Elipse Balloon", "Allurion Programme", "Swallowable Gastric Balloon"], ...procedureCommon,
      howPerformed: "The balloon is delivered as a swallowable capsule attached to a thin catheter. 99.9% of patients swallow the capsule independently. Position is confirmed with a single X-ray, then 550 ml of saline is inserted. No endoscopy or anaesthesia. Placement takes about 20 minutes.",
      preparation: "Overnight fast. No endoscopy or sedation required. Anti-nausea medication started before swallowing.",
      followup: "Anti-nausea medication and PPI for the first 5–7 days. Same phased diet as endoscopic balloons. Structured behaviour and nutrition programme with smart-scale monitoring for 6 months. At approximately 16 weeks the balloon deflates and passes naturally.",
      expectedPrognosis: "Average 10–15% total body weight loss at 16 weeks; the AUDACITY trial showed 58% of subjects lost more than 5% total body weight at 48 weeks.",
      indication: [{ "@type": "MedicalIndication", name: "BMI 27–40 kg/m² without severe comorbidity" }, { "@type": "MedicalIndication", name: "Patients unable or unwilling to have endoscopy" }, { "@type": "MedicalIndication", name: "Patients seeking a short-course non-invasive option" }],
      offers: { "@type": "Offer", priceCurrency: "GBP", price: "2600", availability: "https://schema.org/InStock", url: `${SITE_URL}/gastric-balloon-turkey#pricing`, seller: { "@id": `${SITE_URL}/#organization` } },
    },
    {
      "@type": "MedicalProcedure", "@id": `${SITE_URL}/gastric-balloon-turkey#spatz3`, name: "Spatz3 Adjustable Gastric Balloon",
      alternateName: ["Spatz3 Balloon", "Adjustable Gastric Balloon"], ...procedureCommon,
      howPerformed: "Placed endoscopically under sedation as a day case and filled with saline. Its volume can later be increased or decreased by endoscopy to support weight loss or improve tolerance. It is removed endoscopically by 12 months.",
      preparation: "Overnight fast, clinical assessment and pre-procedure testing. Anti-nausea medication is started before placement.",
      followup: "Anti-nausea medication and PPI for the first 5–7 days, the phased balloon diet and dietitian reviews at 1, 3 and 6 months. Adjustment is considered individually; removal endoscopy is required by month 12.",
      expectedPrognosis: "A temporary aid to clinically supervised weight loss. Results vary and depend on balloon tolerance, nutrition, activity and programme participation.",
      indication: [{ "@type": "MedicalIndication", name: "BMI 27–40 kg/m² without severe comorbidity" }, { "@type": "MedicalIndication", name: "Patients who may benefit from adjustable balloon volume" }, { "@type": "MedicalIndication", name: "Failed medical weight-loss attempts" }],
      offers: { "@type": "Offer", priceCurrency: "GBP", price: "2900", availability: "https://schema.org/InStock", url: `${SITE_URL}/gastric-balloon-turkey#pricing`, seller: { "@id": `${SITE_URL}/#organization` } },
    },
  ],
};

const tableClass = "w-full text-left text-sm md:text-base";
const thClass = "p-4 font-semibold";
const tdClass = "p-4 border-t border-slate-200 align-top";

export default function GastricBalloonTurkey() {
  return (
    <div className="min-h-screen bg-white">
      <SEO title="Gastric Balloon Turkey 2026" description="Compare Orbera £1,900, Allurion £2,600 and Spatz3 £2,900 gastric balloons in Turkey: placement, recovery, results, candidacy and risks." image="/images/balloon/gastric-balloon-anatomy.webp" url="/gastric-balloon-turkey" type="article" author="Op. Dr Murat Üstün, MD, PhD" />
      <JsonLd data={structuredData.createBreadcrumb([{ name: "Home", url: "/" }, { name: "Treatments", url: "/treatments" }, { name: "Gastric Balloon Turkey", url: "/gastric-balloon-turkey" }])} />
      <JsonLd data={medicalGraph} />
      <JsonLd data={structuredData.createFAQ(faqs)} />
      <Navbar />
      <MoneyHero
        eyebrow="Non-surgical, day-case treatment at a JCI hospital"
        title="Gastric Balloon in Turkey — Orbera, Allurion & Spatz3 Options (2026)"
        subtitle="Compare three temporary gastric balloon options in Istanbul with screening and clinician-led follow-up. Treatment starts at £1,900, involves no abdominal incisions and lasts from about four to 12 months."
        stats={[{ value: "From £1,900", label: "2026 price" }, { value: "Day case", label: "No abdominal surgery" }, { value: "6–12 months", label: "Endoscopic options" }, { value: "700+", label: "Balloons by Dr Üstün" }]}
      />
      <main>
        <section className="py-10 bg-blue-50">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="bg-white border-l-4 border-primary rounded-xl p-6 md:p-8 shadow-sm grid md:grid-cols-2 gap-7 items-center">
              <div><p className="text-sm font-bold text-primary tracking-widest mb-2">QUICK ANSWER</p><p className="text-lg text-slate-700 leading-relaxed">IBC offers Orbera for £1,900, Allurion swallowable for £2,600 and Spatz3 adjustable for £2,900. All are temporary, non-surgical stomach balloons performed as day cases for suitable patients at JCI-accredited Liv Hospital Vadistanbul. Orbera remains six months, Allurion about 16 weeks and Spatz3 up to 12 months. Typical total body-weight loss is 10–15%, but the device works only alongside a structured programme.</p></div>
              <img loading="lazy" width="1024" height="683" src="/images/balloon/gastric-balloon-anatomy.webp" alt="Labelled cutaway diagram showing a gastric balloon inside the stomach" className="w-full rounded-2xl" />
            </div>
          </div>
        </section>

        <ProseSection title="Gastric balloon Turkey at a glance" id="at-a-glance">
          <div className="overflow-x-auto rounded-xl border border-slate-200"><table className={tableClass}><thead className="bg-slate-900 text-white"><tr><th className={thClass}>Specification</th><th className={thClass}>Detail</th></tr></thead><tbody>{[
            ["Treatment", "Temporary intragastric balloon; no abdominal incision or stomach removal"],
            ["Options", "Orbera, Allurion swallowable and Spatz3 adjustable"],
            ["Placement", "20–30 minute day case; method depends on balloon"],
            ["Anaesthesia", "Light sedation for Orbera and Spatz3; normally none for Allurion"],
            ["Time in stomach", "About 16 weeks to 12 months"],
            ["Typical result", "10–15% total body-weight loss at six months"],
            ["Usual BMI range", "27–40, subject to full clinical assessment"],
            ["Hospital", "JCI-accredited Liv Hospital Vadistanbul"],
            ["2026 price", "From £1,900"],
          ].map(([a,b]) => <tr key={a}><th scope="row" className={tdClass}>{a}</th><td className={tdClass}>{b}</td></tr>)}</tbody></table></div>
          <p>A balloon occupies space in the stomach so a smaller meal can produce fullness. It does not reroute digestion or directly cause permanent metabolic change. Its real purpose is to create a supported period in which portion size, meal structure and activity become repeatable habits.</p>
        </ProseSection>

        <ComparisonBlock title="Orbera vs Allurion vs Spatz3" subtitle="The least invasive option is not automatically the best one. Selection follows medical review, practical preference and the support you need." columns={["Feature", "Orbera", "Allurion", "Spatz3"]} highlightColumn={0} rows={[
          ["Placement", "Endoscopy", "Swallowed capsule; X-ray check", "Endoscopy"],
          ["Anaesthesia", "Light sedation", "None normally", "Light sedation"],
          ["Duration", "6 months", "About 16 weeks", "Up to 12 months"],
          ["Fill volume", "400–700 ml saline", "550 ml saline", "Saline volume is adjustable"],
          ["Removal", "Endoscopy at month 6", "Designed to deflate and pass", "Endoscopy by month 12"],
          ["Price", "£1,900", "£2,600", "£2,900"],
          ["Best for", "Established six-month endoscopic option", "Eligible patients avoiding endoscopy", "Patients who may benefit from volume adjustment"],
        ]} footnote="All options require clinical eligibility. Request a written plan before arranging travel." />

        <ProseSection title="2026 gastric balloon prices and what is included" tone="slate" id="pricing" maxWidth="max-w-6xl">
          <div className="grid md:grid-cols-3 gap-5">
            {[
              ["Orbera", "£1,900", "Six-month endoscopic balloon with placement and planned removal endoscopy."],
              ["Allurion", "£2,600", "Swallowable 550 ml balloon designed to pass naturally at about 16 weeks."],
              ["Spatz3", "£2,900", "Adjustable endoscopic balloon for up to 12 months, with planned removal."],
            ].map(([name,price,text]) => <div key={name} className="bg-white rounded-xl border border-slate-200 p-6"><h3 className="text-xl font-bold text-slate-900">{name}</h3><p className="text-3xl font-bold text-primary my-3">{price}</p><p className="text-base">{text}</p></div>)}
          </div>
          <p>Each package includes remote pre-assessment, the selected placement procedure, indicated anti-nausea and acid-suppression medicines, written diet guidance and dietitian follow-up at one, three and six months. Orbera and Spatz3 include removal endoscopy at the appropriate endpoint; Allurion normally needs no removal procedure. Additional investigation or treatment for an unrelated condition or complication is not automatically included.</p>
          <p>These balloon prices do not include flights, hotel or airport transfers unless your written quotation expressly adds them. This is consistent with a short day-case pathway rather than a multi-night bariatric surgery package. Do not assume that “all-inclusive” means every travel expense: ask for each item in writing before booking.</p>
          <InlineCTA label="Request a written balloon quotation" />
        </ProseSection>

        <ProseSection title="How each gastric balloon is placed" id="placement" maxWidth="max-w-6xl">
          <p><strong>Orbera:</strong> after an overnight fast and pre-procedure checks, the clinician passes an endoscope through the mouth under light sedation. The empty silicone balloon is positioned in the stomach, filled with 400–700 ml of sterile saline and checked. Placement usually takes 20–30 minutes. It is removed by a second endoscopy at six months.</p>
          <img loading="lazy" width="1024" height="683" src="/images/balloon/orbera-endoscopic-placement.webp" alt="Orbera gastric balloon placement in an endoscopy suite" className="w-full rounded-2xl my-7" />
          <p><strong>Allurion:</strong> the deflated balloon comes in a capsule connected to a fine filling catheter. Most patients swallow it independently. A single X-ray confirms that it has reached the stomach, 550 ml of saline is added, and the catheter is detached and withdrawn. No anaesthetic or endoscopy is normally needed. At about 16 weeks, a time-release valve opens so the balloon empties and passes naturally.</p>
          <img loading="lazy" width="1024" height="683" src="/images/balloon/allurion-swallowable-capsule.webp" alt="Patient swallowing the Allurion gastric balloon capsule under clinical supervision" className="w-full rounded-2xl my-7" />
          <p><strong>Spatz3:</strong> this balloon is inserted endoscopically with sedation and filled with saline. Its distinguishing feature is an adjustment catheter: the volume can later be increased to renew restriction or decreased if tolerance is difficult, following an individual review. Adjustment and final removal require endoscopy. It may remain in place for up to 12 months.</p>
          <p>All three are day-case pathways, but “non-surgical” does not mean casual or risk-free. You still need an accurate medical history, fasting instructions, safe discharge arrangements and prompt access to advice if symptoms exceed the expected adjustment period.</p>
        </ProseSection>

        <ProseSection title="An honest recovery guide: the first three weeks" tone="blue" id="recovery">
          <p>The first three to seven days are often the hardest. Nausea, retching, vomiting, upper-abdominal cramping, reflux and tiredness are common because the stomach is reacting to a new object. Prescribed anti-emetics and a proton-pump inhibitor (PPI) reduce symptoms, but they do not guarantee a symptom-free week. Hydration matters more than rushing back to normal meals.</p>
          <div className="overflow-x-auto rounded-xl border border-blue-100 bg-white"><table className={tableClass}><thead className="bg-slate-900 text-white"><tr><th className={thClass}>Stage</th><th className={thClass}>Diet</th><th className={thClass}>Priorities</th></tr></thead><tbody>{[
            ["Days 1–3", "Clear fluids in frequent small sips", "Hydration, medicines and rest"],
            ["Days 4–7", "Smooth purée as directed", "Slow intake; stop at pressure or nausea"],
            ["Week 2", "Soft solids", "Protein-first meals and careful chewing"],
            ["Week 3 onward", "Full soft diet, then textures as tolerated", "Small portions and structured meal timing"],
          ].map(([a,b,c]) => <tr key={a}><th scope="row" className={tdClass}>{a}</th><td className={tdClass}>{b}</td><td className={tdClass}>{c}</td></tr>)}</tbody></table></div>
          <p>About 2–5% of patients require early removal because intolerance does not settle. Contact the team for persistent vomiting, inability to drink, worsening pain or marked abdominal swelling. Severe pain, fever, breathing difficulty, blood in vomit or stool, fainting or sudden deterioration requires urgent local medical assessment rather than waiting for an online response.</p>
        </ProseSection>

        <ProseSection title="Expected weight loss — and what happens afterwards" id="results">
          <p>Average total body-weight loss is around 10–15% at six months. In practical terms, total body-weight loss is measured against starting weight: a person beginning at 100 kg would lose 10–15 kg at that range. This is an average, not a promise. Starting BMI, tolerance, eating behaviour, activity, sleep, medicines and attendance at follow-up all affect the outcome.</p>
          <p>Allurion has a shorter device period, with average total body-weight loss of 10–15% reported at approximately 16 weeks. The Orbera schema also notes that around 30% reached at least 25% excess weight loss in its FDA pivotal trial. These are different outcome measures and should not be treated as interchangeable.</p>
          <p>The balloon eventually leaves the stomach, and appetite or portion capacity may rise. Weight regain is a meaningful risk without a continuing programme. Dietitian reviews at one, three and six months are therefore not an optional extra: they are where you practise meal planning, identify trigger patterns and prepare for removal or passage. Long-term success depends more on what remains after the device than on the device itself.</p>
        </ProseSection>

        <Checklist title="Who may be a candidate?" items={[
          "BMI approximately 27–40, after individual clinical assessment",
          "Previous medical or lifestyle weight-loss attempts have not produced enough progress",
          "A realistic goal compatible with typical 10–15% total body-weight loss",
          "Willingness to follow the staged diet, medication and hydration instructions",
          "Commitment to dietitian reviews and habits that continue after the balloon",
          "Preference for a temporary option without abdominal incisions",
        ]} />
        <Checklist title="Who should not have a gastric balloon?" tone="warning" background="slate" items={[
          "Previous gastric or bariatric surgery that changes anatomy or raises placement risk",
          "A large hiatus hernia or significant oesophageal disease",
          "Active gastric or duodenal ulcer disease",
          "Pregnancy, breastfeeding or near-term pregnancy plans",
          "Anticoagulation that cannot be safely managed for an indicated endoscopy",
          "An active eating disorder, uncontrolled psychiatric illness or inability to follow care",
        ]} />

        <ProseSection title="Side effects, risks and warning signs" tone="slate" id="risks" maxWidth="max-w-6xl">
          <p>No balloon is risk-free. Published frequency varies by device and patient, and your consent discussion should cover risks specific to your history.</p>
          <div className="overflow-x-auto rounded-xl border border-slate-200 bg-white"><table className={tableClass}><thead className="bg-slate-900 text-white"><tr><th className={thClass}>Risk</th><th className={thClass}>Frequency</th><th className={thClass}>Response</th></tr></thead><tbody>{[
            ["Nausea, vomiting and cramps", "Common, especially days 1–7", "Anti-emetics, hydration, staged diet; review if persistent"],
            ["Reflux", "Common", "PPI, meal timing and clinical review"],
            ["Ulceration", "Under 1%", "Acid suppression; endoscopy and treatment if suspected"],
            ["Early removal for intolerance", "About 2–5%", "Endoscopic removal when symptoms cannot be controlled"],
            ["Deflation or migration", "Rare", "Urgent imaging or endoscopic/surgical management"],
            ["Pancreatitis", "Rare", "Urgent assessment for severe persistent upper-abdominal pain"],
            ["Spontaneous hyperinflation", "Rare", "Prompt assessment, imaging and removal when indicated"],
          ].map(([a,b,c]) => <tr key={a}><th scope="row" className={tdClass}>{a}</th><td className={tdClass}>{b}</td><td className={tdClass}>{c}</td></tr>)}</tbody></table></div>
          <p>Balloon migration can very rarely lead to bowel obstruction. Hyperinflation can cause increasing pain, distension, vomiting or breathing discomfort. New severe symptoms are not something to “push through”. Seek urgent local care and tell clinicians which device you have and when it was placed.</p>
        </ProseSection>

        <ProseSection title="Gastric balloon vs ESG vs gastric sleeve" id="alternatives">
          <div className="overflow-x-auto rounded-xl border border-slate-200"><table className={tableClass}><thead className="bg-slate-900 text-white"><tr><th className={thClass}>Feature</th><th className={thClass}>Balloon</th><th className={thClass}>ESG</th><th className={thClass}>Sleeve</th></tr></thead><tbody>{[
            ["Method", "Temporary device in stomach", "Internal endoscopic sutures", "Permanent surgical stomach removal"],
            ["Incisions", "None", "None", "Keyhole abdominal incisions"],
            ["Typical role", "Moderate, temporary aid", "Greater endoscopic restriction", "Greater and more durable surgical treatment"],
            ["Reversibility", "Device leaves or is removed", "Potentially revisable; anatomy retained", "Not reversible"],
            ["Recovery", "Usually several difficult adjustment days", "Usually days, with staged diet", "Usually 1–2 weeks to light work"],
          ].map(([a,b,c,d]) => <tr key={a}><th scope="row" className={tdClass}>{a}</th><td className={tdClass}>{b}</td><td className={tdClass}>{c}</td><td className={tdClass}>{d}</td></tr>)}</tbody></table></div>
          <p>A balloon can be appropriate when a temporary 10–15% total body-weight loss target matches the clinical need. <Link href="/esg" className="text-primary hover:underline">Endoscopic sleeve gastroplasty</Link> uses sutures to reshape the stomach without removing it and may offer a different balance of durability and invasiveness. <Link href="/gastric-sleeve-turkey" className="text-primary hover:underline">Gastric sleeve in Turkey</Link> permanently removes a large part of the stomach and is considered for patients needing surgical-level treatment. Compare the detailed <Link href="/gastric-balloon-vs-gastric-sleeve" className="text-primary hover:underline">balloon versus sleeve guide</Link>, but let health needs—not price alone—drive the decision.</p>
        </ProseSection>

        <ExpertPOV title="Dr Üstün and Liv Hospital Vadistanbul" credentials="MD, PhD · 25+ years · BOMSS and IFSO member">
          <p><Link href="/dr-murat-ustun" className="text-primary hover:underline">Op. Dr Murat Üstün</Link> has 25+ years of experience, 6,000+ advanced laparoscopic procedures and 700+ gastric balloon procedures. His professional memberships include BOMSS and IFSO. His approach begins by asking whether a temporary device can realistically match the patient’s health needs and expected degree of weight loss.</p>
          <p>Eligible patients are treated at JCI-accredited Liv Hospital Vadistanbul, where endoscopy, anaesthesia, imaging and escalation facilities are available. Experience and accreditation do not remove risk, but a named clinician, appropriate screening and a properly equipped setting are important parts of responsible international treatment.</p>
        </ExpertPOV>

        <FAQSection title="Gastric balloon Turkey FAQs" faqs={faqs} withJsonLd={false} />
        <ConversionModule title="Check which gastric balloon may suit you" text="Request a free, no-obligation clinical review. Share your medical history, medicines, previous procedures and weight goals to receive a suitability assessment and written 2026 quotation." buttonLabel="Request a free assessment" />
        <RelatedLinks title="Related treatments and decision guides" links={[
          { title: "Weight loss surgery in Turkey guide", description: "Compare all eight procedures, costs and safety.", href: "/weight-loss-surgery-turkey" },
          { title: "Balloon vs gastric sleeve", description: "Compare weight loss, recovery, reversibility and risks.", href: "/gastric-balloon-vs-gastric-sleeve" },
          { title: "Endoscopic sleeve gastroplasty", description: "Explore a non-surgical endoscopic alternative.", href: "/esg" },
          { title: "Gastric sleeve Turkey", description: "Understand permanent surgical treatment.", href: "/gastric-sleeve-turkey" },
          { title: "Bariatric treatment costs", description: "Compare current procedure prices.", href: "/cost-of-bariatric-surgery-in-turkey" },
          { title: "Meet Dr Murat Üstün", description: "Review experience and professional memberships.", href: "/dr-murat-ustun" },
          { title: "All treatments", description: "Compare surgical and endoscopic options.", href: "/treatments" },
        ]} />
        <footer className="py-8 text-center text-sm text-slate-600 border-t">Reviewed by Op. Dr Murat Üstün, MD, PhD · Last reviewed 17 September 2026</footer>
      </main>
      <Footer />
      <StickyCTA guideHref="/cost-of-bariatric-surgery-in-turkey" />
    </div>
  );
}
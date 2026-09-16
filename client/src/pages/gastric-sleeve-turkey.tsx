import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { SEO, JsonLd, structuredData } from "@/components/seo";
import { Link } from "wouter";
import {
  MoneyHero,
  ProcedureFacts,
  ProseSection,
  Candidacy,
  Checklist,
  ComparisonBlock,
  FAQSection,
  RelatedLinks,
  ConversionModule,
  ExpertPOV,
  StickyCTA,
  InlineCTA,
} from "@/components/money-page";

const faqs = [
  {
    question: "How much is a gastric sleeve in Turkey in 2026?",
    answer: "Istanbul Bariatric Center's gastric sleeve packages start at £2,450 for Ultra Eco. The Relaxation package is £4,550 and the Luxury package is £4,900. The right option depends on the surgeon, hospital stay, hotel and aftercare you choose.",
  },
  {
    question: "What is included in an all-inclusive gastric sleeve package?",
    answer: "The Relaxation package includes surgery by Dr Murat Üstün, three nights at JCI-accredited Liv Hospital Vadistanbul, a Radisson hotel stay, VIP airport transfers, pre-operative tests, a supplements pack and 12 months of support from a UK-registered dietitian. Luxury adds an extended hotel stay, premium room, private VIP transfers throughout and extended dietitian support.",
  },
  {
    question: "Is gastric sleeve surgery in Turkey safe?",
    answer: "No operation is risk-free. Safety depends on appropriate patient selection, an experienced bariatric team, a properly equipped accredited hospital, evidence-based measures to prevent clots and leaks, and accessible follow-up. IBC operates at JCI-accredited Liv Hospital Vadistanbul and assesses medical history before confirming treatment.",
  },
  {
    question: "Who performs gastric sleeve surgery at IBC?",
    answer: "Relaxation and Luxury surgery is performed by Dr Murat Üstün, a bariatric and metabolic surgeon with 22+ years of experience and 8,000+ procedures who is an IFSO member. Ultra Eco uses an experienced surgeon team.",
  },
  {
    question: "How long should I stay in Istanbul?",
    answer: "Your coordinator will provide an itinerary based on your package and clinical needs. The Relaxation package includes three hospital nights plus a hotel stay. Do not book a return flight until the clinical team has reviewed your health and confirmed the appropriate schedule.",
  },
  {
    question: "How much weight can I lose after a gastric sleeve?",
    answer: "A commonly expected outcome is around 60–70% excess weight loss by 12–18 months. Individual results vary with starting weight, eating patterns, activity, medical conditions and engagement with dietetic follow-up.",
  },
  {
    question: "What BMI qualifies for gastric sleeve surgery?",
    answer: "Eligibility is assessed individually. Bariatric surgery is commonly considered at BMI 40 or above, or BMI 35 or above with an obesity-related condition. Some people with BMI 30–34.9 and significant metabolic disease may be considered after specialist review. BMI alone never replaces a full medical assessment.",
  },
  {
    question: "What are the main risks of sleeve gastrectomy?",
    answer: "Risks include bleeding, infection, staple-line leak, blood clots, anaesthetic complications, reflux, narrowing, dehydration and nutritional deficiencies. The sleeve is permanent and can worsen reflux in some patients, so candidacy and alternatives must be discussed carefully.",
  },
  {
    question: "Is gastric bypass better than gastric sleeve?",
    answer: "Neither is universally better. A bypass may be preferred for severe reflux, certain metabolic needs or particular eating patterns, while a sleeve has no intestinal bypass and a different nutritional profile. Your surgeon should recommend an operation only after reviewing your health and priorities.",
  },
  {
    question: "How do I start a free consultation?",
    answer: "Send your health details through the contact page or WhatsApp the UK team on +44 7491 068686. The clinical team reviews your BMI, medical history, medicines, previous operations and goals before advising whether surgery and travel are appropriate.",
  },
];

const medicalWebPage = {
  "@context": "https://schema.org",
  "@type": "MedicalWebPage",
  name: "Gastric Sleeve Turkey 2026 — Cost, Best Clinics, All-Inclusive Packages",
  url: "https://istanbulbariatriccenter.com/gastric-sleeve-turkey",
  about: {
    "@type": "MedicalProcedure",
    name: "Sleeve Gastrectomy",
    procedureType: "Surgical",
    performedBy: { "@id": "https://istanbulbariatriccenter.com/#drmuratustun" },
  },
  author: { "@id": "https://istanbulbariatriccenter.com/#drmuratustun" },
  publisher: { "@id": "https://istanbulbariatriccenter.com/#organization" },
};

export default function GastricSleeveTurkey() {
  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="Gastric Sleeve Turkey 2026"
        description="Compare gastric sleeve Turkey costs, clinics and all-inclusive packages for 2026. Prices from £2,450 at a JCI-accredited Istanbul hospital."
        url="/gastric-sleeve-turkey"
        type="article"
        author="Dr Murat Üstün"
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
        eyebrow="Independent decision guide for international patients"
        title="Gastric Sleeve Turkey 2026 — Cost, Best Clinics, All-Inclusive Packages"
        subtitle="A medically responsible comparison of prices, package levels, clinic standards, eligibility, risks and aftercare for people considering weight loss surgery in Turkey."
        stats={[
          { value: "From £2,450", label: "2026 all-inclusive price" },
          { value: "JCI", label: "Accredited hospital" },
          { value: "22+ years", label: "Dr Üstün's experience" },
          { value: "12 months", label: "UK dietitian support with Relaxation" },
        ]}
      />

      <main>
        <ProcedureFacts
          title="Gastric sleeve Turkey: the quick answer"
          facts={[
            { label: "Price", value: "From £2,450" },
            { label: "What's included", value: "Surgery, tests and package care" },
            { label: "Hospital", value: "Liv Hospital Vadistanbul" },
            { label: "Surgeon", value: "Dr Murat Üstün on Relaxation and Luxury" },
            { label: "Recovery", value: "Staged diet and ongoing follow-up" },
          ]}
        />

        <ProseSection title="Why choose Turkey for gastric sleeve surgery?" id="why-turkey">
          <p>
            For UK and international patients, the appeal of <strong>gastric sleeve Turkey</strong> treatment is not simply a lower headline price. Istanbul combines experienced bariatric teams, modern private hospitals and coordinated travel packages in one destination. A properly designed package removes much of the practical uncertainty: pre-operative testing, hospital admission, accommodation, transfers and follow-up are arranged around one clinical plan.
          </p>
          <p>
            Cost is nevertheless a major difference. Private sleeve surgery in the UK typically costs £8,000–£12,000, while US treatment can cost $15,000–$25,000. IBC packages start at £2,450. Depending on the package and home-country comparison, patients may save 60–70%. Lower cost should never mean accepting weaker clinical standards, an unknown surgeon or vague aftercare; those details matter more than the destination itself.
          </p>
          <p>
            Istanbul Bariatric Center was founded by <Link href="/dr-murat-ustun" className="text-primary hover:underline">Dr Murat Üstün</Link>, a bariatric and metabolic surgeon with 22+ years of experience and 8,000+ procedures. Relaxation and Luxury procedures take place at JCI-accredited Liv Hospital Vadistanbul. The centre received the WhatClinic Patient Service Award in 2019–2021 and 2023–2025.
          </p>
          <p>
            Patients should compare a Turkish provider in the same way they would compare a private hospital at home: named surgeon, accreditation, anaesthetic and emergency facilities, written inclusions, nutrition support and a clear plan for concerns after returning home. Read the broader <Link href="/bariatric-surgery-turkey-guide" className="text-primary hover:underline">weight loss surgery Turkey guide</Link> before making a final decision.
          </p>
        </ProseSection>

        <ComparisonBlock
          title="Gastric sleeve cost: Turkey vs UK vs US"
          subtitle="Headline prices are useful only when you also compare what is included, who operates and what happens after discharge."
          columns={["Comparison", "IBC Turkey", "UK private", "US private"]}
          highlightColumn={0}
          rows={[
            ["Typical quoted price", "From £2,450", "£8,000–£12,000", "$15,000–$25,000"],
            ["Hospital", "Package-dependent; JCI hospital on Relaxation and Luxury", "Provider-dependent", "Provider-dependent"],
            ["Travel coordination", "Available as one arranged package", "Usually not required", "Usually not included"],
            ["Dietitian aftercare", "12 months UK-registered support on Relaxation", "Check the provider", "Check the provider"],
            ["Price clarity", "Three defined package levels", "Request a written quote", "Request a written quote"],
          ]}
          footnote={
            <>Prices are 2026 guide figures, not a personal quotation. See the <Link href="/gastric-sleeve-turkey-cost" className="text-primary hover:underline">detailed gastric sleeve Turkey cost breakdown</Link>.</>
          }
        />

        <Checklist
          title="Best gastric sleeve clinic in Turkey: a six-point checklist"
          background="slate"
          items={[
            <><strong>JCI accreditation:</strong> verify where surgery actually happens. IBC Relaxation and Luxury patients are treated at JCI-accredited Liv Hospital Vadistanbul.</>,
            <><strong>Surgeon volume and experience:</strong> ask for the named operating surgeon. Dr Üstün has 22+ years' experience and 8,000+ procedures; Ultra Eco is delivered by an experienced surgeon team.</>,
            <><strong>IFSO connection:</strong> professional bariatric involvement helps signal specialist focus. Dr Üstün is an IFSO member.</>,
            <><strong>Accessible aftercare:</strong> clarify who answers once you fly home. Relaxation includes 12 months with a UK-registered dietitian; Luxury extends dietitian support.</>,
            <><strong>Transparent all-inclusive pricing:</strong> obtain written inclusions and exclusions. IBC defines hospital, hotel, transfer, tests and support by package rather than using one ambiguous price.</>,
            <><strong>UK-relevant nutrition support:</strong> bariatric eating continues long after Istanbul. IBC's Relaxation plan includes a supplements pack and UK-registered dietitian support.</>,
          ]}
        />

        <ComparisonBlock
          title="Compare IBC's three gastric sleeve packages"
          subtitle="Choose by clinical team, hospital setting, comfort and aftercare—not by price alone."
          columns={["Feature", "Ultra Eco", "Relaxation", "Luxury"]}
          highlightColumn={1}
          rows={[
            ["2026 price", "£2,450", "£4,550", "£4,900"],
            ["Surgeon", "Experienced surgeon team", "Dr Murat Üstün", "Dr Murat Üstün"],
            ["Hospital stay", "Boutique hospital, 2 days", "JCI hospital, 3 nights", "JCI hospital, 3 nights"],
            ["Pre-op tests", "Included", "Included", "Included"],
            ["Hotel", "Ask for written itinerary", "Radisson hotel", "Extended hotel stay"],
            ["Transfers", "Ask for written itinerary", "VIP airport transfers", "Private VIP transfers throughout"],
            ["Room", "Standard package setting", "Package room", "Premium room"],
            ["Dietitian and supplements", "Confirm in quotation", "UK dietitian 12 months plus supplements pack", "Extended dietitian support plus supplements pack"],
          ]}
          footnote="Your medical suitability is assessed before a package is confirmed. Flights are not listed as a package inclusion."
        />

        <ProseSection title="Your step-by-step journey from consultation to aftercare" tone="blue" id="journey">
          <ol className="list-decimal pl-6 space-y-5">
            <li><strong>Free consultation.</strong> Share your height, weight, health history, medicines, previous surgery and goals. The team may request reports or additional tests. A package is appropriate only if the clinical review supports surgery and travel.</li>
            <li><strong>Plan flights and dates.</strong> Once approved, your coordinator provides the proposed itinerary. Confirm what your quotation covers and arrange suitable travel insurance. Do not treat surgery like a short holiday or book a rushed return.</li>
            <li><strong>Testing and surgery.</strong> In Istanbul, pre-operative tests and anaesthetic assessment check for issues that could change or postpone the plan. Sleeve gastrectomy removes a large portion of the stomach, leaving a narrow tube. It is permanent and performed under general anaesthesia.</li>
            <li><strong>Hospital and hotel recovery.</strong> The team monitors pain, hydration, mobility and signs of complications. You begin the prescribed liquid pathway and receive discharge instructions. Package accommodation follows when the surgeon considers discharge safe.</li>
            <li><strong>Aftercare at home.</strong> Recovery continues through staged liquids, purées and textured food, with hydration, protein, supplements and activity guidance. Keep contact details accessible and seek urgent local care for warning signs rather than waiting for an online reply.</li>
          </ol>
          <p>
            Our <Link href="/bariatric-surgery-travel-guide" className="text-primary hover:underline">bariatric surgery travel guide</Link> covers planning, documents, flights, packing and safe recovery in more detail. UK residents can also review the dedicated <Link href="/bariatric-surgery-for-uk-patients" className="text-primary hover:underline">UK patient guide</Link>.
          </p>
          <InlineCTA label="Request a free clinical review" />
        </ProseSection>

        <ProseSection title="Safety and risks: an honest view" tone="white" id="safety">
          <p>
            Sleeve gastrectomy is established surgery, but “common” does not mean minor or risk-free. Early risks include bleeding, infection, staple-line leak, blood clots, breathing problems and complications of anaesthesia. Dehydration and difficulty tolerating fluids can lead to readmission. Later issues can include reflux, narrowing, gallstones, nutritional deficiencies, insufficient loss or weight regain.
          </p>
          <p>
            Risk is influenced by your medical history, BMI, smoking, mobility, previous operations and adherence to instructions. Tell the clinical team about every medicine and supplement. Never stop prescribed medication without medical advice. Patients are expected to follow fasting, mobility, diet and clot-prevention instructions and to avoid smoking as advised by their clinicians.
          </p>
          <p>
            Seek urgent medical help for severe or increasing abdominal or chest pain, shortness of breath, fainting, persistent vomiting, fever, rapid heartbeat, leg swelling, wound concerns or an inability to keep fluids down. International aftercare is useful, but it does not replace emergency assessment in the country where you are physically located.
          </p>
          <p>
            Good providers also say “not yet” or “no” when travel or sleeve surgery is unsuitable. Patients with significant reflux, complex metabolic needs or previous surgery may need another approach. A recommendation should be based on clinical fit—not on which package is easiest to sell.
          </p>
        </ProseSection>

        <Candidacy
          title="Who qualifies for gastric sleeve surgery?"
          intro={<p>Eligibility follows a full bariatric and anaesthetic assessment. The following are common discussion points rather than automatic approval criteria.</p>}
          criteria={[
            "BMI of 40 or above may qualify after specialist assessment",
            "BMI of 35 or above with an obesity-related health condition may qualify",
            "BMI 30–34.9 with significant metabolic disease may be considered in selected cases",
            "Previous supervised weight-loss efforts and readiness for permanent change are reviewed",
            "The patient must be fit enough for general anaesthesia and international travel",
            "Commitment to staged eating, supplements, follow-up and long-term monitoring is essential",
          ]}
          note={<><strong>BMI is not the whole decision.</strong> Age, reflux, diabetes, eating behaviour, psychological readiness, current medicines, smoking and previous abdominal surgery can affect whether sleeve, bypass, a non-surgical procedure or no procedure is safest.</>}
        />

        <ProseSection title="Gastric sleeve results and recovery timeline" tone="green" id="results">
          <p>
            <strong>First days:</strong> the immediate priorities are safe mobilisation, clot prevention, pain control and adequate fluids. Energy can be low. Follow the discharge plan exactly and do not advance food textures early simply because you feel well.
          </p>
          <p>
            <strong>First weeks:</strong> eating progresses in stages under dietetic direction. Small, slow portions, protein and hydration become central routines. Return to work and exercise varies by the work involved and individual recovery; your surgeon must give personal clearance.
          </p>
          <p>
            <strong>First 6–12 months:</strong> weight commonly changes most rapidly while habits and appetite adjust. Follow-up helps identify dehydration, poor protein intake, nutritional issues, reflux and unhelpful eating patterns before they become entrenched.
          </p>
          <p>
            <strong>At 12–18 months:</strong> sleeve patients may achieve around 60–70% excess weight loss. This is an expected range, not a guarantee. “Excess weight loss” is different from total body weight loss, and outcomes vary substantially. See patient journeys on the <Link href="/results" className="text-primary hover:underline">results page</Link>, while remembering that another person's outcome cannot predict yours.
          </p>
          <p>
            <strong>Long term:</strong> the sleeve remains a permanent anatomical change, but durable results still rely on nutrition, activity, monitoring and early support for weight regain or reflux. Supplements and blood monitoring should follow your individual clinical plan.
          </p>
        </ProseSection>

        <ProseSection title="Alternatives to gastric sleeve in Turkey" tone="slate">
          <p>
            <strong><Link href="/gastric-bypass" className="text-primary hover:underline">Roux-en-Y gastric bypass</Link> or <Link href="/mini-gastric-bypass" className="text-primary hover:underline">mini/OAGB</Link>:</strong> bypass changes both stomach capacity and the route food takes. It may suit certain patients with reflux or metabolic priorities, but has different nutritional obligations and risks. IBC bypass packages are £5,000 Relaxation or £5,350 Luxury; there is no basic bypass package. Compare both operations in the <Link href="/gastric-sleeve-vs-gastric-bypass" className="text-primary hover:underline">sleeve vs bypass guide</Link>.
          </p>
          <p>
            <strong><Link href="/esg" className="text-primary hover:underline">Endoscopic sleeve gastroplasty (ESG)</Link>:</strong> this incisionless endoscopic procedure reduces stomach volume using internal sutures rather than removing stomach. It starts from £5,700, with Luxury at £6,850, and may appeal to selected patients seeking an endoscopic approach.
          </p>
          <p>
            <strong><Link href="/gastric-balloon" className="text-primary hover:underline">Gastric balloon</Link>:</strong> temporary Orbera (£1,900) and swallowable Allurion (£2,600) options may suit some lower-BMI patients who do not need or qualify for surgery. Expected total body weight loss is around 10–15% over 6–12 months, with individual variation.
          </p>
          <p>
            The correct comparison includes expected benefit, permanence, reflux, nutritional impact, follow-up and your medical history. Browse all <Link href="/treatments" className="text-primary hover:underline">weight-loss treatments</Link> before deciding.
          </p>
        </ProseSection>

        <ExpertPOV title="How I assess an international sleeve patient">
          <p>
            “I do not decide from BMI or price alone. I review reflux symptoms, diabetes and other conditions, previous operations, medication, eating behaviour and the patient's ability to follow nutrition and aftercare. A sleeve can be an effective operation, but it is not the right operation for every person.”
          </p>
          <p>
            “For an international patient, the plan must extend beyond the operation. Safe testing, an equipped hospital, a realistic stay and a clear route to dietetic and medical support after the flight home all form part of treatment. If another procedure is more appropriate—or surgery should be delayed—I explain why.”
          </p>
        </ExpertPOV>


        <FAQSection
          title="Gastric sleeve Turkey FAQs"
          subtitle="Clear answers to the questions patients ask before choosing a clinic or package."
          faqs={faqs}
          withJsonLd={false}
        />

        <RelatedLinks
          title="Continue your gastric sleeve research"
          links={[
            { title: "Detailed cost breakdown", description: "Understand package prices, likely extras and how to compare quotations.", href: "/gastric-sleeve-turkey-cost" },
            { title: "Sleeve procedure guide", description: "Learn how sleeve gastrectomy works, candidacy and recovery.", href: "/sleeve-gastrectomy" },
            { title: "Turkey surgery costs", description: "Compare prices across bariatric and endoscopic procedures.", href: "/cost-of-bariatric-surgery-in-turkey" },
            { title: "Meet Dr Murat Üstün", description: "Review the founder's experience, memberships and approach.", href: "/dr-murat-ustun" },
          ]}
        />

        <ConversionModule
          title="Get a personal gastric sleeve assessment"
          text="Send your health history and goals for a free, no-obligation review. The team will explain suitability, package inclusions and next steps before you decide."
          buttonLabel="WhatsApp the UK team"
        />
      </main>

      <Footer />
      <StickyCTA guideHref="/gastric-sleeve-turkey-cost" />
    </div>
  );
}
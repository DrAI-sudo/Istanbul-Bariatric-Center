import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { SEO, JsonLd, structuredData } from "@/components/seo";
import { Link } from "wouter";
import {
  MoneyHero,
  ProcedureFacts,
  ProseSection,
  Checklist,
  ComparisonBlock,
  SurgeonProof,
  FAQSection,
  RelatedLinks,
  ConversionModule,
  InlineCTA,
  StickyCTA,
} from "@/components/money-page";

const faqs = [
  {
    question: "How much is a gastric sleeve in Turkey in 2026?",
    answer: "At Istanbul Bariatric Center, gastric sleeve packages start at £2,450 for Ultra Eco. The typical Relaxation package is £4,550 and the Luxury package is £4,900. Your written quotation should confirm the package, clinical eligibility and every included service.",
  },
  {
    question: "What is included in the £4,550 Relaxation package?",
    answer: "It includes laparoscopic sleeve surgery by Op. Dr Murat Üstün at JCI-accredited Liv Hospital Vadistanbul, two hospital nights, four nights in a 5-star hotel, surgeon and anaesthetist fees, all pre-operative tests and medications, VIP airport and hospital transfers, half-board hotel meals, a supplements starter pack and 12 months of WhatsApp aftercare including UK-registered dietitian support.",
  },
  {
    question: "Are flights included in a gastric sleeve Istanbul price?",
    answer: "No. Flights are not included in these package prices. Travel insurance and any extra hotel nights outside the agreed itinerary are also separate, so include them when calculating your complete travel budget.",
  },
  {
    question: "Why is gastric sleeve surgery cheaper in Turkey than in the UK?",
    answer: "Turkey has lower operating and living costs, a favourable exchange rate for many international patients and high surgical volume. Those economic factors reduce the price; they do not mean standards must be lower. Patients should still verify the surgeon, hospital accreditation, aftercare and written inclusions.",
  },
  {
    question: "Do I pay the full gastric sleeve cost when I book?",
    answer: "The usual process is a deposit when booking and the remaining balance on arrival. Exact payment methods, currency terms, cancellation conditions and refund terms should be supplied in writing before you transfer funds.",
  },
  {
    question: "Can I finance gastric sleeve surgery in Turkey?",
    answer: "Some patients use personal savings or independently arranged finance. Availability and terms depend on your country and financial circumstances. Compare the total repayable amount rather than only a monthly figure, and never allow finance to rush a medical decision.",
  },
  {
    question: "Will the NHS or private insurance pay for surgery in Turkey?",
    answer: "NHS bariatric treatment follows its own clinical criteria and referral pathway, and should not be assumed to fund planned private treatment abroad. Private policies often exclude elective weight-loss surgery, but wording varies. Ask your insurer for written confirmation and arrange appropriate travel insurance.",
  },
  {
    question: "Can BMI, medical history or revision surgery change the price?",
    answer: "Yes. BMI, anaesthetic risk, existing conditions, previous abdominal surgery and the complexity of the planned operation can affect the care required. Revision bariatric surgery is more complex and normally costs more. A final quote requires medical assessment rather than price alone.",
  },
];

const procedureJsonLd = {
  "@context": "https://schema.org",
  "@type": "MedicalProcedure",
  name: "Gastric Sleeve Surgery",
  url: "https://istanbulbariatriccenter.com/gastric-sleeve-turkey-cost",
  procedureType: "https://schema.org/SurgicalProcedure",
  provider: { "@id": "https://istanbulbariatriccenter.com/#organization" },
  offers: [
    { "@type": "Offer", name: "Ultra Eco Gastric Sleeve Package", price: "2450", priceCurrency: "GBP" },
    { "@type": "Offer", name: "Relaxation Gastric Sleeve Package", price: "4550", priceCurrency: "GBP" },
    { "@type": "Offer", name: "Luxury Gastric Sleeve Package", price: "4900", priceCurrency: "GBP" },
  ],
};

export default function GastricSleeveTurkeyCost() {
  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="Gastric Sleeve Cost Turkey 2026"
        description="Gastric sleeve Turkey cost from £2,450. Compare three all-inclusive packages, UK and US prices, exclusions, deposits and potential hidden costs."
        url="/gastric-sleeve-turkey-cost"
      />
      <JsonLd data={structuredData.createBreadcrumb([
        { name: "Home", url: "/" },
        { name: "Treatments", url: "/treatments" },
        { name: "Gastric Sleeve Turkey Cost", url: "/gastric-sleeve-turkey-cost" },
      ])} />
      <JsonLd data={procedureJsonLd} />
      <JsonLd data={structuredData.createFAQ(faqs)} />
      <Navbar />

      <MoneyHero
        eyebrow="Transparent 2026 package pricing"
        title="Gastric Sleeve Turkey Cost: Full Price Breakdown (2026)"
        subtitle="A gastric sleeve in Turkey starts from £2,450 at Istanbul Bariatric Center; the typical Relaxation package is £4,550. This guide explains exactly what each package buys, what remains outside the quote and how to compare the real total."
        stats={[
          { value: "£2,450", label: "Ultra Eco" },
          { value: "£4,550", label: "Relaxation" },
          { value: "£4,900", label: "Luxury" },
        ]}
      />

      <ProcedureFacts
        title="Gastric sleeve Istanbul price at a glance"
        facts={[
          { label: "Starting package", value: "£2,450" },
          { label: "Typical package", value: "£4,550" },
          { label: "Hospital", value: "Liv Vadistanbul" },
          { label: "Consultation", value: "Free" },
        ]}
      />

      <ProseSection title="The short answer: how much is a gastric sleeve in Turkey?">
        <p>
          The headline <strong>gastric sleeve Turkey cost is from £2,450</strong> for the
          Ultra Eco package. Most patients comparing a surgeon-led international pathway will focus on
          the <strong>£4,550 Relaxation package</strong>, because it names Dr Murat Üstün as the surgeon
          and combines two nights at a JCI hospital with four 5-star hotel nights, transfers, tests,
          medications and 12 months of WhatsApp aftercare. Luxury is £4,900.
        </p>
        <p>
          “All-inclusive” applies only to the services named in the selected package. It does not mean
          every personal travel expense or every possible change in clinical need is covered. Ask for a
          personalised written quotation after your health history has been reviewed, then compare
          like with like. A very low headline can cease to be good value if the surgeon, hospital,
          aftercare, transfers or tests sit outside it.
        </p>
        <p>
          This page concentrates only on price. For clinic selection, preparation, the operation and
          the Istanbul care journey, read our <Link href="/gastric-sleeve-turkey" className="text-primary hover:underline">gastric sleeve Turkey hub</Link>.
          To compare sleeve with bypass, balloon, ESG and other treatment prices, use the broader
          {" "}<Link href="/cost-of-bariatric-surgery-in-turkey" className="text-primary hover:underline">cost of bariatric surgery in Turkey guide</Link>.
        </p>
      </ProseSection>

      <ComparisonBlock
        title="Ultra Eco vs Relaxation vs Luxury: full package table"
        subtitle="Choose on the clinical team, hospital pathway and aftercare you need—not on the first price shown."
        columns={["Feature", "Ultra Eco", "Relaxation", "Luxury"]}
        rows={[
          ["2026 package price", "£2,450", "£4,550", "£4,900"],
          ["Surgical team", "Experienced surgeon team", "Dr Murat Üstün", "Dr Murat Üstün"],
          ["Hospital", "Partner boutique hospital", "JCI-accredited Liv Hospital Vadistanbul", "JCI-accredited Liv Hospital Vadistanbul"],
          ["Hospital stay", "2 nights", "2 nights", "2 nights in a JCI suite"],
          ["Pre-operative tests", "All included, with consultations", "All included, with medications", "Confirm in written quote"],
          ["Hotel", "Not included", "4 nights in a 5-star hotel (6 Istanbul nights total)", "5 nights in a luxury hotel"],
          ["Transfers", "Not included", "VIP airport and hospital transfers", "Private VIP car throughout"],
          ["Meals", "Not included", "Half-board hotel meals", "Full board plus companion allowance"],
          ["Aftercare", "Discharge diet plan only", "12 months via WhatsApp including UK-registered dietitian support", "12 months priority aftercare"],
          ["Supplements starter pack", "Not included", "Included", "Confirm in written quote"],
        ]}
        highlightColumn={1}
        footnote="Prices are in GBP. Clinical assessment may identify needs outside a standard package; obtain a dated, itemised quotation before booking."
      />

      <Checklist
        title="What the price includes"
        background="slate"
        items={[
          <>The operation and package-specific surgical team shown in your quotation</>,
          <>The named hospital stay: partner boutique hospital for Ultra Eco or Liv Hospital Vadistanbul for Relaxation and Luxury</>,
          <>All pre-operative tests and consultations in Ultra Eco; all pre-operative tests and medications in Relaxation</>,
          <>Four nights in a 5-star hotel, VIP airport and hospital transfers, and half-board meals in Relaxation</>,
          <>Five luxury-hotel nights, a JCI suite, private VIP car throughout, full board and companion allowance in Luxury</>,
          <>12 months of WhatsApp aftercare including UK-registered dietitian support in Relaxation and 12 months of priority aftercare in Luxury</>,
          <>A supplements starter pack with Relaxation</>,
        ]}
      />

      <Checklist
        title="What is not included in the package price"
        tone="warning"
        items={[
          <><strong>Flights:</strong> airfares and airline extras remain your responsibility.</>,
          <><strong>Travel insurance:</strong> buy suitable cover separately and disclose the planned treatment.</>,
          <><strong>Extra nights:</strong> accommodation beyond the agreed package itinerary is separate unless added in writing.</>,
          <><strong>Personal spending:</strong> meals beyond the selected package allowance, shopping and other personal expenses are separate.</>,
          <><strong>Unplanned itinerary changes:</strong> ask in advance who pays when travel changes for non-clinical reasons.</>,
          <><strong>Additional clinical needs:</strong> anything identified after medical review must be explained and priced before consent where possible.</>,
        ]}
      />

      <ProseSection title="Hidden costs to ask any clinic about" tone="white">
        <p>
          A safe comparison starts with an itemised quote, not a social-media price. Ask for the hospital
          name, surgeon name, planned length of stay and aftercare contact in writing. Confirm whether
          anaesthesia, standard medicines, blood tests, imaging, leak testing, translation and transfer
          legs are included. If a service is not listed, do not assume it is covered.
        </p>
        <ul className="list-disc pl-6 space-y-3">
          <li><strong>Medical assessment:</strong> Are all routine pre-operative tests included, and what happens if an additional specialist review is required?</li>
          <li><strong>Hospital changes:</strong> Could the named hospital or surgeon change, and can you decline without losing money?</li>
          <li><strong>Aftercare:</strong> Who answers clinical questions after you return to the UK, for how long, and is dietitian support included?</li>
          <li><strong>Complications:</strong> How are additional treatment, a longer admission or a changed flight handled? Appropriate insurance remains important.</li>
          <li><strong>Currency and payment:</strong> Which exchange rate applies, are card or bank charges added, and will you receive a receipt?</li>
          <li><strong>Cancellation:</strong> Ask for postponement, cancellation and refund conditions before paying a deposit.</li>
        </ul>
        <p>
          Price transparency supports informed consent, but it cannot remove surgical risk. Sleeve
          gastrectomy is major surgery and may involve bleeding, infection, leakage, blood clots,
          reflux, nutritional deficiency or a need for further treatment. Suitability and individual
          risk must be assessed by a qualified bariatric team. See the <Link href="/sleeve-gastrectomy" className="text-primary hover:underline">how sleeve gastrectomy works</Link> for the medical discussion.
        </p>
      </ProseSection>

      <ComparisonBlock
        title="Turkey vs UK vs US gastric sleeve prices"
        subtitle="The fair comparison is the complete pathway, not simply the theatre fee."
        columns={["Market", "Typical price", "What to check"]}
        rows={[
          ["Turkey—Istanbul Bariatric Center", "£2,450 / £4,550 / £4,900", "Package level, named surgeon, hospital and aftercare"],
          ["UK private", "Typically £8,000–£12,000", "Provider inclusions, aftercare and finance cost"],
          ["US private", "Typically $15,000–$25,000", "Hospital, surgeon, anaesthesia and insurance billing"],
        ]}
        highlightColumn={0}
        footnote="Patients can typically save 60–70%, depending on the selected package and the home-market price being compared."
      />

      <ProseSection title="Why Turkey can charge less without lowering standards" tone="blue">
        <p>
          The price difference is largely economic. Turkey has lower costs of living and operating
          expenses than the UK or US. Exchange rates can make locally delivered hospital care more
          affordable in pounds, while a high volume of international bariatric patients allows teams to
          organise surgery, accommodation and transport efficiently.
        </p>
        <p>
          Lower national costs do not automatically prove quality, just as a higher price does not
          guarantee it. Verify objective markers. Istanbul Bariatric Center's Relaxation and Luxury
          sleeve procedures are performed at JCI-accredited Liv Hospital Vadistanbul by
          {" "}<Link href="/dr-murat-ustun" className="text-primary hover:underline">Dr Murat Üstün</Link>,
          a bariatric and metabolic surgeon with 25+ years' experience, 6,000+ procedures and IFSO
          membership. He founded the clinic and pioneered ESG in Turkey. The clinic received the
          WhatClinic Patient Service Award in 2019–2021 and 2023–2025.
        </p>
        <p>
          Those credentials should sit alongside a direct medical consultation, clear consent,
          realistic discussion of risks and a defined plan after travel. Do not choose a provider
          because of country or price alone.
        </p>
      </ProseSection>

      <SurgeonProof
        title="What sits behind the Relaxation and Luxury price"
        subtitle="Named clinical leadership, an accredited hospital and a defined international-patient pathway."
      />

      <ProseSection title="Deposit, balance and payment process" tone="slate">
        <p>
          The usual process is to pay a <strong>deposit when booking</strong> after medical review and
          then pay the <strong>balance on arrival</strong>. The exact process should be set out in your
          booking documents. Before transferring money, check the recipient, accepted payment methods,
          currency, potential bank charges, receipt process and the conditions for cancellation,
          postponement or a medically necessary change of plan.
        </p>
        <p>
          Do not send payment solely on the basis of an advert or informal message. Keep the itemised
          quote and payment confirmation. If your health changes before travel, inform the clinical
          team rather than protecting a booking at the expense of safety.
        </p>
        <InlineCTA label="Request a personalised written quote" />
      </ProseSection>

      <ProseSection title="Financing a gastric sleeve" tone="white">
        <p>
          Financing is separate from clinical eligibility. Some patients save in advance; others
          independently arrange credit where available in their country. No finance product makes
          surgery risk-free or more medically appropriate. Compare interest, fees, early-repayment
          terms and the total repayable amount, and leave room in your budget for flights, insurance
          and recovery-related expenses.
        </p>
        <p>
          A monthly payment can disguise the full cost. Take time to consider both the medical consent
          information and the financial commitment, and seek independent financial guidance if needed.
        </p>
      </ProseSection>

      <ProseSection title="NHS and insurance reality for UK patients" tone="slate">
        <p>
          NHS bariatric care follows clinical eligibility and referral pathways. Patients should not
          assume the NHS will pay for a planned private operation in Turkey. If you may qualify for NHS
          treatment, discuss referral options with your GP rather than treating overseas self-payment
          as the only route.
        </p>
        <p>
          Private medical insurance commonly has restrictions around elective weight-loss surgery, but
          policies differ. Ask your insurer for a written decision. Ordinary holiday insurance may not
          cover planned surgery, complications or itinerary changes connected with treatment, so
          disclose the purpose of travel and check the wording. Read our <Link href="/insurance" className="text-primary hover:underline">insurance guide</Link> and
          {" "}<Link href="/bariatric-surgery-for-uk-patients" className="text-primary hover:underline">UK patient guide</Link> before budgeting.
        </p>
      </ProseSection>

      <ProseSection title="Can BMI or complexity change the final price?" tone="white">
        <p>
          A standard package is a starting framework, not a substitute for medical review. BMI,
          anaesthetic considerations, existing conditions, medicines, previous abdominal operations
          and test results can alter the safest plan. The team may need further information or
          specialist assessment before confirming eligibility and a final quotation.
        </p>
        <p>
          Revision surgery generally costs more because anatomy has already been altered and the
          operation can require more complex planning. It should not be quoted as though it were a
          routine first-time sleeve. If you have had bariatric surgery before, use the
          {" "}<Link href="/revision-bariatric-surgery-turkey" className="text-primary hover:underline">revision bariatric surgery pathway</Link> and provide your operative records where available.
        </p>
        <p>
          The lowest-priced procedure is not necessarily the right procedure. Eligibility, expected
          benefit, reflux, eating patterns, metabolic health and long-term follow-up all matter. A
          sleeve can produce 60–70% excess weight loss at 12–18 months, but outcomes vary and depend on
          sustained dietary, activity and follow-up changes.
        </p>
      </ProseSection>

      <FAQSection
        title="Gastric sleeve Turkey cost FAQs"
        subtitle="Eight practical answers for comparing a 2026 quotation."
        faqs={faqs}
        withJsonLd={false}
      />

      <RelatedLinks
        title="Plan beyond the headline price"
        links={[
          { title: "Gastric Sleeve Turkey", description: "Clinics, treatment journey and preparation.", href: "/gastric-sleeve-turkey" },
          { title: "All Bariatric Costs", description: "Compare sleeve, bypass, balloon and ESG prices.", href: "/cost-of-bariatric-surgery-in-turkey" },
          { title: "Travel Guide", description: "Plan flights, insurance and a safe return home.", href: "/bariatric-surgery-travel-guide" },
          { title: "Meet Dr Murat Üstün", description: "Review surgeon experience and credentials.", href: "/dr-murat-ustun" },
        ]}
      />

      <ConversionModule
        title="Get your itemised gastric sleeve quote"
        text="Share your health details for a free consultation and a package quotation based on clinical review. Ask us to explain every inclusion before you book."
        buttonLabel="WhatsApp the UK team"
      />
      <Footer />
      <StickyCTA guideHref="/gastric-sleeve-turkey" />
    </div>
  );
}
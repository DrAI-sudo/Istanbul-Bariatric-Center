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
} from "@/components/money-page";

const faqs = [
  {
    question: "How much does bariatric surgery cost in Turkey?",
    answer: "At Istanbul Bariatric Center, all-inclusive packages start from £1,650 for a gastric balloon, £2,950 for a gastric sleeve, £3,350 for a mini gastric bypass, and £4,950 for ESG. Every package includes the JCI-accredited hospital stay, pre-operative tests, airport transfers, hotel (Relaxation and Luxury tiers), and dietitian aftercare."
  },
  {
    question: "Why is weight loss surgery so much cheaper in Turkey?",
    answer: "The difference is driven by lower operating costs, a favourable exchange rate, and government support for medical tourism — not lower standards. Surgery is performed at JCI-accredited hospitals (the same international accreditation held by top US and European hospitals) by high-volume surgeons. You pay 60-70% less for the same clinical standard."
  },
  {
    question: "Are there any hidden costs in the packages?",
    answer: "No. Our packages are genuinely all-inclusive: surgeon and anaesthesia fees, hospital stay, pre-operative tests and consultations, VIP airport transfers, hotel accommodation (Relaxation/Luxury), post-op medication to take home, and 12 months of dietitian support. The only costs not included are your flights and personal spending."
  },
  {
    question: "How does the cost compare to the UK, US, or Europe?",
    answer: "A gastric sleeve costs around £10,000–£15,000 privately in the UK, $16,000–$25,000 in the US, and €8,000–€12,000 in much of Western Europe. In Istanbul the equivalent all-inclusive package is £2,950–£4,250 — typically a 60–75% saving even after flights."
  },
  {
    question: "Can I pay in instalments or with finance?",
    answer: "Payment is normally made by bank transfer or card, with a deposit to secure your date and the balance on arrival. Speak to our coordinators about currently available payment arrangements for your country."
  },
  {
    question: "Does travel insurance or the NHS cover surgery in Turkey?",
    answer: "The NHS and standard travel insurance do not cover planned surgery abroad. However, specialist medical-travel insurance covering complications is available and we recommend it. Many patients still find the total cost — surgery, flights, hotel, and insurance — far below a private operation at home."
  },
];

export default function CostOfBariatricSurgery() {
  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="Cost of Bariatric Surgery in Turkey (2026): All-Inclusive Prices"
        description="Transparent 2026 prices for weight loss surgery in Turkey: gastric sleeve from £2,950, bypass from £3,350, ESG from £4,950. Compare UK, US & EU costs."
        keywords="cost of bariatric surgery turkey, gastric sleeve price turkey, weight loss surgery cost istanbul, bariatric surgery prices 2026, cheap gastric sleeve turkey"
        url="/cost-of-bariatric-surgery-in-turkey"
      />
      <JsonLd data={structuredData.createBreadcrumb([
        { name: "Home", url: "/" },
        { name: "Treatments", url: "/treatments" },
        { name: "Cost of Bariatric Surgery in Turkey", url: "/cost-of-bariatric-surgery-in-turkey" },
      ])} />
      <Navbar />
      <MoneyHero
        eyebrow="Transparent Pricing — 2026 Guide"
        title="Cost of Bariatric Surgery in Turkey"
        subtitle="Every price on this page is all-inclusive and fixed before you travel: hospital, surgeon, tests, transfers, hotel and 12 months of aftercare. No hidden extras — ever."
        stats={[
          { value: "£1,650", label: "Packages from" },
          { value: "60–70%", label: "Typical saving vs UK/US" },
          { value: "0", label: "Hidden fees" },
        ]}
      />

      <div>
        <ProcedureFacts
          title="2026 All-Inclusive Package Prices"
          facts={[
            { label: "Gastric Balloon", value: "From £1,650" },
            { label: "Gastric Sleeve", value: "From £2,950" },
            { label: "Mini Gastric Bypass", value: "From £3,350" },
            { label: "ESG (Non-Surgical)", value: "From £4,950" },
          ]}
        />

        <ComparisonBlock
          title="Turkey vs UK, US & Europe: Price Comparison"
          subtitle="Typical private self-pay prices for the same procedures. Turkish prices shown are Istanbul Bariatric Center's fixed all-inclusive packages."
          columns={["Procedure", "Turkey (IBC, all-inclusive)", "United Kingdom", "United States", "Western Europe"]}
          highlightColumn={0}
          rows={[
            ["Gastric Sleeve", "£2,950 – £4,250", "£10,000 – £15,000", "$16,000 – $25,000", "€8,000 – €12,000"],
            ["Mini Gastric Bypass", "£3,350 – £4,650", "£11,000 – £16,000", "$20,000 – $30,000", "€9,000 – €14,000"],
            ["Gastric Balloon", "£1,650 – £2,250", "£4,000 – £8,000", "$6,000 – $9,000", "€3,500 – €6,000"],
            ["ESG (Endoscopic Sleeve)", "£4,950 – £5,950", "£9,000 – £13,000", "$12,000 – $20,000", "€8,000 – €11,000"],
            ["Duodenal Switch", "£4,400 – £4,700", "£13,000 – £18,000", "$22,000 – $35,000", "€11,000 – €16,000"],
            ["Revision Surgery", "£3,950 – £5,950", "£12,000 – £18,000", "$18,000 – $30,000", "€10,000 – €15,000"],
          ]}
          footnote="UK, US and EU figures are indicative self-pay ranges published by private providers in 2025–2026 and vary by clinic and city."
        />

        <Checklist
          title="What Every IBC Package Includes"
          background="slate"
          items={[
            "Surgery performed at JCI-accredited Liv Hospital, Istanbul",
            "All surgeon, anaesthesia and hospital fees",
            "Pre-operative tests, consultations and anaesthesia review",
            "VIP airport pick-up and all transfers",
            "Hotel accommodation (Relaxation & Luxury packages — Radisson)",
            "Post-operative medication to take home",
            "12 months of dietitian support (UK-registered on Relaxation & Luxury)",
            "UK care support coordinators in 8 locations",
          ]}
        />

        <ProseSection title="Why Is Bariatric Surgery Cheaper in Turkey?" tone="white">
          <p>
            The price difference is <strong>not</strong> about lower standards. Turkey has one of the largest medical-tourism sectors in the world, and Istanbul's leading hospitals hold the same <strong>JCI (Joint Commission International) accreditation</strong> as top hospitals in London, New York and Berlin.
          </p>
          <p>Three factors drive the saving:</p>
          <ul className="list-disc pl-6 space-y-3">
            <li><strong>Operating costs:</strong> staff, facility and administrative costs in Turkey are a fraction of Western levels, without affecting clinical equipment or protocols.</li>
            <li><strong>Exchange rate:</strong> your pound, euro or dollar goes significantly further in Turkey.</li>
            <li><strong>Volume and specialisation:</strong> high-volume bariatric centres like ours achieve efficiencies — and better outcomes — that low-volume clinics cannot.</li>
          </ul>
          <p>
            Dr Murat Ustun has performed <strong>over 8,000 bariatric procedures</strong> — a caseload very few Western surgeons ever accumulate. With surgery, volume is one of the strongest predictors of safety.
          </p>
          <InlineCTA label="Get My Exact Quote" />
        </ProseSection>

        <ProseSection title="How to Budget Your Full Trip" tone="slate">
          <p>A realistic total budget for a UK patient having a gastric sleeve with us:</p>
          <ul className="list-disc pl-6 space-y-3">
            <li><strong>Surgery package:</strong> £2,950–£4,250 (fixed, all-inclusive)</li>
            <li><strong>Return flights London–Istanbul:</strong> typically £100–£250</li>
            <li><strong>Medical travel insurance:</strong> £100–£200</li>
            <li><strong>Personal spending:</strong> £100–£200</li>
          </ul>
          <p>
            Total: roughly <strong>£3,300–£4,900 all-in</strong> — still less than half the cost of the surgery alone at a UK private hospital. See our dedicated <Link href="/bariatric-surgery-for-uk-patients" className="text-primary hover:underline">guide for UK patients</Link> for travel logistics and aftercare from home.
          </p>
        </ProseSection>

        <SurgeonProof
          title="Low Price, Uncompromised Standards"
          subtitle="The saving comes from economics, not from cutting corners on safety, facilities, or aftercare."
        />

        <FAQSection title="Pricing — Frequently Asked Questions" faqs={faqs} />

        <RelatedLinks
          title="Compare Your Options"
          links={[
            { title: "Gastric Sleeve", description: "From £2,950 all-inclusive", href: "/sleeve-gastrectomy" },
            { title: "Mini Gastric Bypass", description: "From £3,350 all-inclusive", href: "/mini-gastric-bypass" },
            { title: "ESG (Non-Surgical)", description: "From £4,950 all-inclusive", href: "/esg" },
            { title: "Revision Surgery", description: "From £3,950 all-inclusive", href: "/revision-bariatric-surgery" },
          ]}
        />

        <ConversionModule
          title="Get a Fixed, All-Inclusive Quote in 24 Hours"
          text="Tell us your height, weight and goals on WhatsApp and receive a personalised, no-obligation quote — the price you're quoted is the price you pay."
          buttonLabel="Get My Free Quote"
        />
      </div>

      <Footer />
    </div>
  );
}

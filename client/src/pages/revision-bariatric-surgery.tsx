import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { SEO, JsonLd, structuredData } from "@/components/seo";
import { Link } from "wouter";
import {
  MoneyHero,
  ProcedureFacts,
  ProseSection,
  Candidacy,
  ComparisonBlock,
  SurgeonProof,
  StaticTestimonials,
  FAQSection,
  RelatedLinks,
  ConversionModule,
  InlineCTA,
} from "@/components/money-page";

const faqs = [
  {
    question: "What is revision bariatric surgery?",
    answer: "Revision bariatric surgery is a second procedure performed after a previous weight loss operation — such as gastric sleeve, gastric bypass, or gastric band — when the first surgery has led to weight regain, insufficient weight loss, or complications such as severe reflux. The revision pathway is chosen based on your anatomy, symptoms and goals."
  },
  {
    question: "How much weight regain is normal after gastric sleeve?",
    answer: "Some weight fluctuation is normal, but studies show that up to 30% of sleeve patients experience significant weight regain within 5 years, often due to gradual stretching of the sleeve or hormonal adaptation. If you have regained more than 25% of the weight you originally lost, a revision assessment is worthwhile."
  },
  {
    question: "Which revision procedure is best after a failed gastric sleeve?",
    answer: "The most common options are conversion to mini gastric bypass (especially when reflux is present — GERD affects up to 55% of sleeve patients long-term), conversion to duodenal switch or transit bipartition for greater metabolic effect, or a non-surgical endoscopic re-sleeve. The right option depends on why the sleeve failed, which is assessed with endoscopy and imaging."
  },
  {
    question: "Can a gastric bypass be revised without surgery?",
    answer: "Yes. If the connection between pouch and intestine (the stoma) has stretched, TORe (Transoral Outlet Reduction) tightens it endoscopically through the mouth — no incisions, usually same-day discharge. It is the leading non-surgical revision for weight regain after bypass."
  },
  {
    question: "Is revision bariatric surgery riskier than the first surgery?",
    answer: "Revision surgery is technically more complex because of scar tissue from the first operation, which is why surgeon experience matters more than for primary surgery. In high-volume centres with experienced revision surgeons, complication rates remain low and outcomes are excellent."
  },
  {
    question: "How much does revision bariatric surgery cost in Turkey?",
    answer: "Revision surgery in Istanbul typically costs £3,950–£5,950 all-inclusive depending on the pathway — roughly 60-70% less than in the UK or US. Every quote includes JCI-accredited hospital stay, pre-operative endoscopy and tests, transfers, hotel and aftercare. Contact us for a personalised assessment and exact quote."
  },
];

export default function RevisionBariatricSurgery() {
  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="Revision Bariatric Surgery in Turkey — Fix Weight Regain After Sleeve or Bypass"
        description="Revision weight loss surgery in Istanbul: sleeve-to-bypass conversion, TORe, re-sleeve & transit bipartition. JCI hospital, Dr Murat Ustun. Free assessment."
        keywords="revision bariatric surgery turkey, gastric sleeve revision, weight regain after gastric sleeve, sleeve to bypass conversion, TORe turkey, failed weight loss surgery"
        url="/revision-bariatric-surgery"
      />
      <JsonLd data={structuredData.createBreadcrumb([
        { name: "Home", url: "/" },
        { name: "Treatments", url: "/treatments" },
        { name: "Revision Bariatric Surgery", url: "/revision-bariatric-surgery" },
      ])} />
      <Navbar />
      <MoneyHero
        eyebrow="Second-Chance Surgery"
        title="Revision Bariatric Surgery in Turkey"
        subtitle="Weight regain after a gastric sleeve or bypass is more common than you think — and it is fixable. Explore surgical and non-surgical revision pathways with one of Turkey's most experienced revision teams."
        stats={[
          { value: "8,000+", label: "Procedures performed" },
          { value: "5", label: "Revision pathways" },
          { value: "£3,950", label: "All-inclusive from" },
        ]}
      />

      <div>
        <ProcedureFacts
          title="Revision Surgery at a Glance"
          facts={[
            { label: "Assessment", value: "Endoscopy + imaging" },
            { label: "Options", value: "Surgical & endoscopic" },
            { label: "Hospital stay", value: "0–3 nights" },
            { label: "All-inclusive from", value: "£3,950" },
          ]}
        />

        <ProseSection title="Why Weight Loss Surgery Sometimes Needs a Second Step">
          <p>
            No bariatric operation guarantees permanent results on its own. Over time, a gastric sleeve can gradually stretch, the outlet after a gastric bypass can widen, and hormonal adaptation can bring hunger back. Studies show that <strong>up to 30% of sleeve patients experience significant weight regain within five years</strong>, and severe acid reflux (GERD) develops in as many as <strong>55% of sleeve patients</strong> over the long term.
          </p>
          <p>
            None of this means your first surgery "failed you" — it means your anatomy and metabolism have changed, and there is a well-established medical pathway to correct it. Revision bariatric surgery restores the restriction and metabolic effect of your original procedure, or converts it to one that suits your body better.
          </p>
          <p>
            At Istanbul Bariatric Center, every revision starts with a diagnostic work-up — endoscopy and imaging — so the pathway is chosen based on <em>why</em> the first operation stopped working, not guesswork.
          </p>
          <InlineCTA label="Get a Free Revision Assessment" />
        </ProseSection>

        <ComparisonBlock
          title="Revision Pathways Compared"
          subtitle="The right revision depends on your original procedure, your symptoms, and your goals."
          columns={["Pathway", "Best For", "How It Works", "Invasiveness"]}
          rows={[
            [
              "Sleeve → Mini Gastric Bypass",
              "Weight regain after sleeve, especially with reflux (GERD)",
              "Converts the sleeve into a small pouch connected to the intestine, resolving reflux and adding a metabolic effect",
              "Laparoscopic surgery, 2–3 nights",
            ],
            [
              "Sleeve → Duodenal Switch / Transit Bipartition",
              "High BMI or type 2 diabetes after a sleeve",
              "Keeps the sleeve and adds an intestinal component for maximum weight loss and diabetes control",
              "Laparoscopic surgery, 2–3 nights",
            ],
            [
              "Endoscopic Re-Sleeve (ESG revision)",
              "Moderately stretched sleeve, patients wanting to avoid surgery",
              "Endoscopic sutures through the mouth re-tighten the stretched sleeve — no incisions",
              "Endoscopic, same-day / 1 night",
            ],
            [
              "TORe (Transoral Outlet Reduction)",
              "Weight regain after gastric bypass due to a stretched stoma",
              "Endoscopic sutures narrow the widened outlet between pouch and intestine",
              "Endoscopic, same-day discharge",
            ],
            [
              "Band → Sleeve or Bypass",
              "Failed or complicated gastric band",
              "Removes the band and converts to a sleeve or bypass in one or two stages",
              "Laparoscopic surgery, 2–3 nights",
            ],
          ]}
        />

        <Candidacy
          title="Are You a Candidate for Revision Surgery?"
          intro={<p>You may benefit from a revision assessment if any of the following apply:</p>}
          criteria={[
            "You regained a significant portion of the weight you lost after sleeve, bypass, or band surgery",
            "You never reached your expected weight loss after the first operation",
            "You developed severe or persistent acid reflux (GERD) after a gastric sleeve",
            "You feel hungry soon after meals or can eat much larger portions than before",
            "You have a gastric band causing discomfort, slippage, or inadequate results",
            "Your type 2 diabetes returned or was never fully resolved after surgery",
          ]}
          note={<><strong>Important:</strong> revision surgery is more technically demanding than primary surgery. Choose a high-volume centre with specific revision experience — surgeon expertise is the single biggest factor in revision outcomes.</>}
        />

        <ProseSection title="How the Revision Process Works at IBC" tone="slate">
          <ol className="list-decimal pl-6 space-y-4">
            <li><strong>Free remote assessment.</strong> Share your surgical history, current weight and symptoms with our coordinators on WhatsApp. Dr Murat Ustun reviews every revision case personally.</li>
            <li><strong>Diagnostic work-up in Istanbul.</strong> On arrival, you undergo endoscopy, imaging and blood tests at JCI-accredited Liv Hospital to establish exactly why the first procedure stopped working.</li>
            <li><strong>Pathway decision.</strong> Based on the findings, the team recommends the least invasive option that will reliably meet your goals — endoscopic where possible, surgical where needed.</li>
            <li><strong>Procedure and recovery.</strong> Endoscopic revisions are usually same-day; surgical conversions involve 2–3 nights in hospital plus hotel recovery with our team nearby.</li>
            <li><strong>12 months of aftercare.</strong> UK-registered dietitian support, supplement guidance and regular follow-ups protect your second-chance result.</li>
          </ol>
          <p>
            Read more in our in-depth guides: <Link href="/blog/revisional-bariatric-surgery-in-turkey" className="text-primary hover:underline">Revisional Bariatric Surgery in Turkey</Link> and <Link href="/blog/tore-procedure-gastric-bypass-revision" className="text-primary hover:underline">the TORe procedure explained</Link>.
          </p>
        </ProseSection>

        <SurgeonProof
          title="Why Trust IBC With Your Revision?"
          subtitle="Revision surgery demands more experience than a first operation. This is where volume and specialisation matter most."
        />

        <StaticTestimonials
          title="Patients Who Got Their Second Chance"
          quotes={[
            {
              name: "Sarah M.", flag: "🇺🇸", date: "October 2025",
              text: "I had my surgery with Dr. Murat and his amazing team. My entire experience was nothing short of fabulous. Within just four months, I have already lost 35 kg. I completely trust my life with Dr. Murat and his team."
            },
            {
              name: "David R.", flag: "🇬🇧", date: "September 2025",
              text: "From the moment I arrived, I felt completely at ease—even though I travelled alone. Dr. Murat's team stayed connected with me from surgery until today, guiding me step by step through nutrition, aftercare, and recovery."
            },
            {
              name: "Peter V.", flag: "🇧🇪", date: "November 2024",
              text: "Had my surgery 6 months ago and have lost 45kg. The continuous support from Dr. Murat's team has been amazing. They check in regularly and answer all my questions promptly."
            },
          ]}
        />

        <FAQSection
          title="Revision Surgery — Frequently Asked Questions"
          faqs={faqs}
        />

        <RelatedLinks
          title="Explore Related Options"
          links={[
            { title: "Mini Gastric Bypass", description: "The most common sleeve conversion", href: "/mini-gastric-bypass" },
            { title: "Transit Bipartition", description: "Powerful metabolic revision", href: "/transit-bipartition" },
            { title: "TORe Procedure", description: "Non-surgical bypass revision", href: "/blog/tore-procedure-gastric-bypass-revision" },
            { title: "Cost Guide", description: "Compare all-inclusive prices", href: "/cost-of-bariatric-surgery-in-turkey" },
          ]}
        />

        <ConversionModule
          title="Find Out Which Revision Pathway Fits You"
          text={<>Send your surgical history to <a href="https://drmuratustun.com" target="_blank" rel="noopener noreferrer" className="text-white underline hover:text-white/80">Dr Murat Ustun's</a> team for a free, no-obligation revision assessment — usually answered within 24 hours.</>}
          buttonLabel="Get My Free Assessment"
        />
      </div>

      <Footer />
    </div>
  );
}

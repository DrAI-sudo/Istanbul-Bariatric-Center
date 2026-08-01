import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { SEO, JsonLd, structuredData } from "@/components/seo";
import { Link } from "wouter";
import {
  MoneyHero,
  ProseSection,
  Candidacy,
  ComparisonBlock,
  SurgeonProof,
  ExpertPOV,
  DecisionBlock,
  MediaBlock,
  StickyCTA,
  FAQSection,
  RelatedLinks,
  ConversionModule,
  InlineCTA,
} from "@/components/money-page";

const faqs = [
  {
    question: "Is ESG as effective as a gastric sleeve?",
    answer: "The surgical sleeve produces more weight loss: 60-70% of excess weight versus 45-60% for ESG (15-20% of total body weight). But ESG requires no incisions, removes no stomach, has a faster recovery, and is largely reversible. For BMI 30-40, ESG results are often sufficient; above BMI 40-45, the surgical sleeve is usually the stronger choice."
  },
  {
    question: "What is the main difference between ESG and gastric sleeve?",
    answer: "The gastric sleeve surgically removes about 80% of the stomach through keyhole incisions. ESG (Endoscopic Sleeve Gastroplasty) reshapes the stomach into a sleeve from the inside using sutures placed through an endoscope passed down the throat — no cuts, no stomach removed, usually same-day discharge."
  },
  {
    question: "Which is safer: ESG or gastric sleeve?",
    answer: "ESG has the lower risk profile: serious adverse events under 2%, no staple line, no risk of leak, and no permanent anatomical change. The surgical sleeve is also very safe (1-3% major complications) but is irreversible and carries a long-term reflux risk of up to 55%. ESG typically improves rather than worsens reflux."
  },
  {
    question: "Does ESG last, or does the stomach stretch back?",
    answer: "MERIT randomised trial data shows durable results: at 5 years, over 80% of ESG patients maintain at least 10% total body weight loss. Sutures create permanent scarring that holds the sleeve shape. If needed, ESG can be endoscopically tightened later — or converted to a surgical sleeve or bypass."
  },
  {
    question: "Can I have ESG if my BMI is over 40?",
    answer: "Yes — ESG-Max with additional reinforcement sutures extends effectiveness into higher BMI ranges, and ESG is a valid option for patients who are unfit or unwilling to have surgery. However, for BMI over 45, the surgical sleeve or bypass generally produces substantially better long-term results."
  },
  {
    question: "How do the costs compare in Turkey?",
    answer: "At Istanbul Bariatric Center the surgical sleeve starts at £2,950 and ESG at £4,950, both all-inclusive. ESG costs more because of the Apollo OverStitch device, but avoids surgery, scars, and a hospital stay beyond one night."
  },
];

export default function ESGVsSleeve() {
  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="ESG vs Gastric Sleeve: Non-Surgical or Surgical? Honest Comparison (2026)"
        description="Endoscopic sleeve gastroplasty vs surgical gastric sleeve: weight loss, safety, reversibility, reflux, recovery and Turkey prices compared side by side."
        keywords="esg vs gastric sleeve, endoscopic sleeve vs surgical sleeve, non surgical gastric sleeve comparison, esg or sleeve which is better"
        url="/esg-vs-gastric-sleeve"
      />
      <JsonLd data={structuredData.createBreadcrumb([
        { name: "Home", url: "/" },
        { name: "Treatments", url: "/treatments" },
        { name: "ESG vs Gastric Sleeve", url: "/esg-vs-gastric-sleeve" },
      ])} />
      <Navbar />
      <MoneyHero
        eyebrow="Decision Guide"
        title="ESG vs Gastric Sleeve: Which Should You Choose?"
        subtitle="One is a scarless endoscopic procedure with same-day discharge; the other is the world's most performed weight loss operation. Here is the honest comparison — including when we advise against each."
        stats={[
          { value: "15–20%", label: "Total weight loss — ESG" },
          { value: "25–30%", label: "Total weight loss — sleeve" },
          { value: "0", label: "Incisions with ESG" },
        ]}
      />

      <div>
        <ComparisonBlock
          title="ESG vs Surgical Sleeve at a Glance"
          columns={["Factor", "ESG (Endoscopic)", "Gastric Sleeve (Surgical)"]}
          rows={[
            ["Technique", "Stomach sutured smaller from inside — no cuts", "~80% of stomach surgically removed"],
            ["Total body weight loss", "15–20%", "25–30%"],
            ["Anaesthesia & duration", "General, 60–90 min", "General, ~60 min"],
            ["Hospital stay", "Same day or 1 night", "2–3 nights"],
            ["Back to work", "3–5 days", "10–14 days"],
            ["Scars", "None", "5 small keyhole scars"],
            ["Reversible / adjustable", "Largely — can be re-tightened", "No — permanent"],
            ["Effect on reflux", "Usually improves", "Can worsen (up to 55% GERD)"],
            ["Best BMI range", "30–40 (ESG-Max up to ~45)", "35–55+"],
            ["Price at IBC (all-inclusive)", "From £4,950", "From £2,950"],
          ]}
        />

        <ProseSection title="The Core Trade-Off">
          <p>
            The decision comes down to <strong>weight loss power versus invasiveness</strong>. The <Link href="/sleeve-gastrectomy" className="text-primary hover:underline">surgical sleeve</Link> removes stomach tissue permanently, produces roughly a third more weight loss, and remains the benchmark for BMI above 40. The <Link href="/esg" className="text-primary hover:underline">ESG</Link> achieves 15–20% total body weight loss with no incisions, no removed organ, a 3–5 day recovery, and a safety profile closer to a diagnostic endoscopy than an operation.
          </p>
          <p>
            Crucially, ESG <strong>keeps every future option open</strong>: if your weight loss goals change, an ESG can later be converted to a surgical sleeve or bypass. A surgical sleeve cannot be undone.
          </p>
          <InlineCTA label="Which Is Right for Me? Ask Free" />
        </ProseSection>

        <ProseSection title="Choose ESG If…" tone="slate">
          <ul className="list-disc pl-6 space-y-3">
            <li>Your BMI is 30–40 and you want meaningful, durable weight loss without surgery</li>
            <li>You have acid reflux — ESG usually improves it, a sleeve can worsen it</li>
            <li>You can only take 3–5 days away from work or family</li>
            <li>You want no scars and no permanent anatomical change</li>
            <li>You're not eligible for surgery, or the idea of it is what has stopped you acting</li>
          </ul>
        </ProseSection>

        <ProseSection title="Choose the Surgical Sleeve If…">
          <ul className="list-disc pl-6 space-y-3">
            <li>Your BMI is above 40–45, where surgery's extra weight loss changes health outcomes</li>
            <li>You have significant type 2 diabetes — surgery's metabolic effect is stronger</li>
            <li>You want the maximum, most-studied long-term result in a single procedure</li>
            <li>Budget matters — the sleeve package is £2,000 less than ESG</li>
          </ul>
        </ProseSection>

        <ExpertPOV title="Who Should Not Have ESG — and Why I Say No">
          <p>
            I was among the first surgeons in Turkey to perform ESG routinely, and I still decline it regularly. The most common refusal: <strong>BMI over 45 with significant metabolic disease</strong>. ESG will give that patient 15–20% weight loss — a genuinely good result — but it is not the result their diabetes and joints need, and selling them a gentler procedure that under-treats their disease is not kindness.
          </p>
          <p>
            I also say no to patients with <strong>large hiatal hernias or established severe reflux with oesophageal damage</strong> — those need surgical correction, not sutures around it — and to anyone whose endoscopy shows previous gastric surgery that changes the suturing anatomy. And I am cautious with patients who tell me, sometimes in these exact words, that they want ESG because "it means I won't have to change anything." No procedure survives that expectation; ESG, with its gentler restriction, survives it least of all.
          </p>
          <p>
            Who delights me as an ESG candidate? BMI 30–40, often with reflux (which ESG tends to improve), a demanding job or young children making a two-week surgical recovery unrealistic, and a clear-eyed understanding that the sutures buy them 18 strong months to rebuild habits. Those patients get outcomes that rival surgery — because the procedure matched the person.
          </p>
        </ExpertPOV>

        <DecisionBlock
          title="ESG Decision Summary"
          bestFor={[
            "BMI 30–40 seeking meaningful loss without surgery",
            "Existing reflux or heartburn (ESG usually improves it)",
            "Fast recovery needs — back to work in 3–5 days",
            "Patients who want future options kept open",
          ]}
          notIdealFor={[
            "BMI over 45 with significant metabolic disease",
            "Large hiatal hernia or severe reflux with oesophageal damage",
            "Previous gastric surgery altering the anatomy",
            "Anyone expecting results without habit change",
          ]}
          typicalRecovery="Same-day or one-night discharge; back to desk work in 3–5 days; liquid-to-soft diet progression over 4 weeks; full routine within 2 weeks."
          tradeOffs={[
            "Roughly a third less weight loss than the surgical sleeve",
            "Higher package price (£4,950 vs £2,950) due to the Apollo device",
            "Results depend more heavily on the aftercare programme",
          ]}
        />

        <MediaBlock
          title="Watch: ESG at Istanbul Bariatric Center"
          description="Dr Murat Ustun's team explains how endoscopic sleeve gastroplasty reshapes the stomach without a single incision — and what patients experience on procedure day."
          youtubeEmbedUrl="https://www.youtube.com/embed/z_NcxpUfPG4"
        />

        <Candidacy
          title="Quick Self-Check"
          intro={<p>ESG is likely your best starting point if most of these apply:</p>}
          criteria={[
            "BMI between 30 and 40",
            "Reflux or heartburn already an issue",
            "Strong preference to avoid surgery and scars",
            "Need to be back at work within a week",
            "Comfortable with 15–20% total body weight loss as the goal",
          ]}
          note={<>If your BMI is over 45, or diabetes control is the priority, read our <Link href="/gastric-sleeve-vs-gastric-bypass" className="text-primary hover:underline font-medium">sleeve vs bypass comparison</Link> instead — that is likely your real decision.</>}
        />

        <SurgeonProof
          title="Experienced in Both — So the Advice Is Neutral"
          subtitle="Dr Ustun performs 2,000+ endoscopic procedures alongside surgical sleeves and bypasses. When we recommend one over the other, it is because it fits you — not because it is the only tool we have."
        />

        <FAQSection title="ESG vs Sleeve — Your Questions Answered" faqs={faqs} />

        <RelatedLinks
          title="Your Next Step"
          links={[
            { title: "ESG in Detail", description: "Apollo ESG & ESG-Max — from £4,950", href: "/esg" },
            { title: "Gastric Sleeve in Detail", description: "Full guide — from £2,950", href: "/sleeve-gastrectomy" },
            { title: "Balloon vs Sleeve", description: "Considering the gastric balloon too?", href: "/gastric-balloon-vs-gastric-sleeve" },
            { title: "Cost Guide", description: "All 2026 prices vs UK, US & EU", href: "/cost-of-bariatric-surgery-in-turkey" },
          ]}
        />

        <ConversionModule
          title="Undecided? Get a Free Expert Opinion"
          text="Send your height, weight and goals on WhatsApp — our clinical team will tell you honestly whether ESG or the surgical sleeve fits your case, within 24 hours."
          buttonLabel="Ask the Clinical Team"
        />
      </div>

      <Footer />
      <StickyCTA />
    </div>
  );
}

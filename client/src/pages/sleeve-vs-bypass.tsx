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
  ExpertPOV,
  StickyCTA,
  FAQSection,
  RelatedLinks,
  ConversionModule,
  InlineCTA,
} from "@/components/money-page";

const faqs = [
  {
    question: "Which is better: gastric sleeve or mini gastric bypass?",
    answer: "Neither is universally better — they suit different patients. The sleeve is simpler, keeps normal intestinal anatomy, and delivers 60-70% excess weight loss. The mini bypass adds a malabsorptive component, delivering 70-80% excess weight loss with stronger type 2 diabetes remission and better reflux control — at the cost of lifelong vitamin supplementation and a slightly more complex operation. The right choice depends on your BMI, reflux status, diabetes, and eating pattern."
  },
  {
    question: "Which causes more weight loss: sleeve or bypass?",
    answer: "The mini gastric bypass typically produces more total weight loss: around 70-80% of excess weight at 2 years versus 60-70% for the sleeve. For patients with BMI over 50 or severe type 2 diabetes, the bypass's metabolic effect usually makes it the stronger option."
  },
  {
    question: "Which is safer: gastric sleeve or bypass?",
    answer: "Both are very safe in experienced hands, with major complication rates of 1-3%. The sleeve is technically simpler with no intestinal rejoining, so early surgical risk is marginally lower. The bypass carries small long-term risks of nutrient deficiency and marginal ulcers, while the sleeve carries a higher long-term risk of acid reflux (GERD)."
  },
  {
    question: "Should I choose the bypass if I already have acid reflux?",
    answer: "Usually yes. A gastric sleeve can worsen existing reflux — GERD affects up to 55% of sleeve patients long-term — whereas the bypass diverts acid away from the oesophagus and typically improves reflux. Significant pre-existing GERD is one of the clearest reasons to prefer a bypass."
  },
  {
    question: "Can a sleeve be converted to a bypass later?",
    answer: "Yes. Sleeve-to-bypass conversion is the most common revision operation worldwide, typically chosen for weight regain or reflux after a sleeve. Many patients start with a sleeve knowing the bypass remains available as a second step if ever needed."
  },
  {
    question: "What do sleeve and bypass cost in Turkey?",
    answer: "At Istanbul Bariatric Center the gastric sleeve starts at £2,950 and the mini gastric bypass at £3,350, both all-inclusive: JCI-accredited hospital, surgeon and anaesthesia fees, tests, transfers, hotel and 12 months of dietitian aftercare."
  },
];

export default function SleeveVsBypass() {
  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="Gastric Sleeve vs Mini Gastric Bypass: Which Is Right for You? (2026)"
        description="Side-by-side comparison of gastric sleeve and mini gastric bypass: weight loss, diabetes remission, reflux, risks, recovery and cost in Turkey. Decide with data."
        keywords="gastric sleeve vs gastric bypass, sleeve vs mini bypass, which is better sleeve or bypass, gastric sleeve or bypass for diabetes, bariatric surgery comparison"
        url="/gastric-sleeve-vs-gastric-bypass"
      />
      <JsonLd data={structuredData.createBreadcrumb([
        { name: "Home", url: "/" },
        { name: "Treatments", url: "/treatments" },
        { name: "Gastric Sleeve vs Mini Gastric Bypass", url: "/gastric-sleeve-vs-gastric-bypass" },
      ])} />
      <Navbar />
      <MoneyHero
        eyebrow="Decision Guide"
        title="Gastric Sleeve vs Mini Gastric Bypass"
        subtitle="The two most performed weight loss operations in the world, compared honestly — weight loss, diabetes remission, reflux, risks and cost — so you can choose the one that fits your body and your goals."
        stats={[
          { value: "60–70%", label: "Excess weight loss — sleeve" },
          { value: "70–80%", label: "Excess weight loss — bypass" },
          { value: "8,000+", label: "Procedures by Dr Ustun" },
        ]}
      />

      <div>
        <ComparisonBlock
          title="Sleeve vs Mini Bypass at a Glance"
          columns={["Factor", "Gastric Sleeve", "Mini Gastric Bypass"]}
          rows={[
            ["How it works", "Removes ~80% of the stomach (restriction)", "Small pouch + intestinal re-routing (restriction + malabsorption)"],
            ["Excess weight loss", "60–70% at 2 years", "70–80% at 2 years"],
            ["Type 2 diabetes remission", "60–70%", "80–90%"],
            ["Effect on acid reflux", "Can worsen (up to 55% GERD long-term)", "Usually improves reflux"],
            ["Operation time", "~1 hour", "~1.5 hours"],
            ["Hospital stay", "2–3 nights", "2–3 nights"],
            ["Lifelong supplements", "Multivitamin recommended", "Multivitamin + B12, iron essential"],
            ["Reversible", "No (stomach removed)", "Technically, rarely done"],
            ["Revision options later", "Convert to bypass, DS, or re-sleeve", "TORe (endoscopic) or limb revision"],
            ["Price at IBC (all-inclusive)", "From £2,950", "From £3,350"],
          ]}
          footnote="Outcome ranges reflect published international series and IBC case data; individual results vary."
        />

        <ProseSection title="How Each Operation Works">
          <p>
            The <Link href="/sleeve-gastrectomy" className="text-primary hover:underline">gastric sleeve</Link> removes around 80% of the stomach, leaving a slim tube. You eat far less, and removing the fundus sharply reduces ghrelin, the hunger hormone. Digestion otherwise continues normally — nothing is re-routed.
          </p>
          <p>
            The <Link href="/mini-gastric-bypass" className="text-primary hover:underline">mini gastric bypass</Link> creates a small stomach pouch and connects it directly to a loop of small intestine, bypassing roughly 150–200 cm. You eat less <em>and</em> absorb fewer calories, and the hormonal shift produces the strongest anti-diabetes effect of any common procedure.
          </p>
          <InlineCTA label="Ask Which Suits Me — Free Assessment" />
        </ProseSection>

        <ProseSection title="Choose the Sleeve If…" tone="slate">
          <ul className="list-disc pl-6 space-y-3">
            <li>You want the simplest effective operation with normal intestinal anatomy</li>
            <li>Your BMI is 35–50 without severe type 2 diabetes</li>
            <li>You have <strong>no significant acid reflux</strong></li>
            <li>You take medications whose absorption must not change (some psychiatric, transplant or arthritis drugs)</li>
            <li>You prefer to keep the bypass in reserve as a possible second step</li>
          </ul>
        </ProseSection>

        <ProseSection title="Choose the Mini Bypass If…">
          <ul className="list-disc pl-6 space-y-3">
            <li>You have <strong>type 2 diabetes</strong> — remission rates reach 80–90%</li>
            <li>You already suffer from <strong>acid reflux / GERD</strong>, which a sleeve can worsen</li>
            <li>Your BMI is above 45–50, where the extra weight loss matters most</li>
            <li>You are a sweet-eater or grazer — malabsorption blunts the effect of calorie-dense food</li>
            <li>You are comfortable with disciplined lifelong supplements and annual blood tests</li>
          </ul>
        </ProseSection>

        <ExpertPOV title="How I Decide Between Sleeve and Mini Bypass">
          <p>
            After 8,000 procedures, my decision rarely starts with BMI — it starts with two questions: <strong>does this patient have reflux, and does this patient have diabetes?</strong> A positive answer to either pushes me firmly toward the bypass, because I have re-operated on too many sleeves done elsewhere in patients whose reflux history was ignored at the first consultation.
          </p>
          <p>
            The second thing I look at is the <strong>eating pattern</strong>, and I ask about it bluntly. A volume eater — big plates, fast meals — does beautifully with a sleeve, because restriction solves their actual problem. A grazer or sweet-eater can out-eat any restriction; for them the bypass's malabsorptive component is not a luxury, it is the mechanism that makes the operation work.
          </p>
          <p>
            What I tell patients who are torn: the sleeve keeps a door open — conversion to bypass remains available years later if ever needed. The reverse journey does not exist. That asymmetry settles more borderline cases in my clinic than any percentage on a comparison table. But when reflux or long-standing diabetes is present on day one, choosing the sleeve to "keep options open" is a false economy — you would simply be booking the second operation in advance.
          </p>
        </ExpertPOV>

        <Candidacy
          title="Still on the Fence? What We Assess"
          intro={<p>At your free assessment, Dr Murat Ustun weighs these factors before recommending one operation over the other:</p>}
          criteria={[
            "BMI and weight distribution",
            "Reflux symptoms and any prior endoscopy findings",
            "Type 2 diabetes status, duration and medication",
            "Eating pattern — volume eater vs sweet-eater/grazer",
            "Current medications that need predictable absorption",
            "Your own preference after understanding both options",
          ]}
          note={<>Around 60% of our patients are best served by a sleeve, 40% by a bypass — the point is matching the operation to the patient, never a one-size-fits-all recommendation.</>}
        />

        <SurgeonProof
          title="One Surgeon, Both Operations, 8,000+ Cases"
          subtitle="Because Dr Ustun performs sleeves, bypasses, revisions and endoscopic procedures at high volume, his recommendation is driven by your anatomy — not by what the clinic happens to offer."
        />

        <FAQSection title="Sleeve vs Bypass — Your Questions Answered" faqs={faqs} />

        <RelatedLinks
          title="Your Next Step"
          links={[
            { title: "Gastric Sleeve", description: "Full procedure guide — from £2,950", href: "/sleeve-gastrectomy" },
            { title: "Mini Gastric Bypass", description: "Full procedure guide — from £3,350", href: "/mini-gastric-bypass" },
            { title: "ESG vs Gastric Sleeve", description: "Prefer a non-surgical route? Compare ESG", href: "/esg-vs-gastric-sleeve" },
            { title: "Cost Guide", description: "All 2026 prices vs UK, US & EU", href: "/cost-of-bariatric-surgery-in-turkey" },
          ]}
        />

        <ConversionModule
          title="Get a Personal Recommendation in 24 Hours"
          text="Send your height, weight, reflux and diabetes status on WhatsApp. Dr Ustun's team will tell you which operation fits — free, and with no obligation."
          buttonLabel="Get My Free Assessment"
        />
      </div>

      <Footer />
      <StickyCTA />
    </div>
  );
}

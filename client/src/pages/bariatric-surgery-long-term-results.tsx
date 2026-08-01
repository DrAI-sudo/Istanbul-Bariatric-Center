import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { SEO, JsonLd, structuredData } from "@/components/seo";
import { Link } from "wouter";
import {
  MoneyHero,
  ProcedureFacts,
  ProseSection,
  ComparisonBlock,
  SurgeonProof,
  StickyCTA,
  Checklist,
  FAQSection,
  RelatedLinks,
  ConversionModule,
  InlineCTA,
} from "@/components/money-page";

const faqs = [
  {
    question: "How much weight do people keep off 10 years after bariatric surgery?",
    answer: "Long-term studies (including the landmark SOS study following patients for 20+ years) show bariatric surgery patients maintain 20-30% total body weight loss at 10 years, versus almost nothing for non-surgical treatment. Sleeve patients typically keep off 50-60% of excess weight at 10 years, bypass patients 55-65%."
  },
  {
    question: "Does bariatric surgery actually make you live longer?",
    answer: "Yes — this is one of the strongest findings in modern surgery. Large cohort studies show 30-50% lower all-cause mortality over 10+ years in surgical patients versus matched controls, driven by fewer cardiovascular deaths, diabetes complications and obesity-related cancers."
  },
  {
    question: "What happens to type 2 diabetes long-term after surgery?",
    answer: "Remission is common and often durable: roughly 60-70% remission after sleeve and 80-90% after bypass at 1-2 years, with about half of remissions sustained past 10 years. Even patients whose diabetes eventually returns typically need less medication and have better control than before surgery."
  },
  {
    question: "Is some weight regain after surgery inevitable?",
    answer: "A modest regain from the lowest point (typically 5-10% of body weight between years 2 and 5) is physiologically normal and factored into the long-term results above. Significant regain — more than 25% of the weight lost — affects up to 30% of sleeve patients within 5 years and is treatable; see our weight regain guide."
  },
  {
    question: "What long-term follow-up does bariatric surgery need?",
    answer: "Annual blood tests (vitamins B12, D, iron, folate, calcium), consistent multivitamin use — lifelong after a bypass — and access to a dietitian when eating drifts. Istanbul Bariatric Center includes 12 months of structured aftercare and remains available on WhatsApp for life."
  },
  {
    question: "How do the long-term results of ESG compare to surgery?",
    answer: "ESG's 5-year data (MERIT randomised trial) shows over 80% of patients maintaining at least 10% total body weight loss — durable, but less than surgery's 20-30%. ESG suits lower BMI ranges; surgery remains the benchmark for BMI over 40 or significant metabolic disease."
  },
];

export default function LongTermResults() {
  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="Bariatric Surgery Long-Term Results: 5, 10 & 20-Year Outcomes Explained"
        description="What the evidence shows 5-20 years after weight loss surgery: sustained weight loss, diabetes remission, 30-50% lower mortality — and the honest regain data."
        keywords="bariatric surgery long term results, gastric sleeve 10 years later, weight loss surgery success rate, bariatric surgery life expectancy, gastric bypass long term outcomes"
        url="/bariatric-surgery-long-term-results"
      />
      <JsonLd data={structuredData.createBreadcrumb([
        { name: "Home", url: "/" },
        { name: "Treatments", url: "/treatments" },
        { name: "Bariatric Surgery Long-Term Results", url: "/bariatric-surgery-long-term-results" },
      ])} />
      <Navbar />
      <MoneyHero
        eyebrow="Evidence Guide"
        title="Bariatric Surgery Long-Term Results: What Really Happens at 5, 10 and 20 Years"
        subtitle="The honest numbers — sustained weight loss, diabetes remission, longer life expectancy, and the regain statistics most clinics won't show you."
        stats={[
          { value: "20–30%", label: "Body weight still off at 10 yrs" },
          { value: "30–50%", label: "Lower long-term mortality" },
          { value: "80–90%", label: "Diabetes remission (bypass)" },
        ]}
      />

      <div>
        <ProcedureFacts
          title="The Long Game, in Numbers"
          facts={[
            { label: "Excess weight off at 10 yrs (sleeve)", value: "50–60%" },
            { label: "Excess weight off at 10 yrs (bypass)", value: "55–65%" },
            { label: "ESG ≥10% loss maintained at 5 yrs", value: ">80%" },
            { label: "Diabetes remission sustained >10 yrs", value: "~50%" },
          ]}
        />

        <ProseSection title="What the Landmark Studies Show">
          <p>
            Bariatric surgery is one of the most studied interventions in medicine. The Swedish Obese Subjects (SOS) study has followed thousands of patients for over 20 years; alongside large national registries it shows a consistent picture:
          </p>
          <ul className="list-disc pl-6 space-y-3">
            <li><strong>Weight:</strong> surgical patients maintain 20–30% total body weight loss at 10 years, versus roughly 1–2% for intensive non-surgical care.</li>
            <li><strong>Survival:</strong> all-cause mortality falls 30–50%, with the largest reductions in cardiovascular death and obesity-related cancers.</li>
            <li><strong>Diabetes:</strong> remission in the majority of patients, with about half of remissions still holding beyond 10 years — and better control even when it returns.</li>
            <li><strong>Quality of life:</strong> sustained improvements in mobility, sleep apnoea, joint pain, fertility and depression scores at every long-term follow-up point.</li>
          </ul>
          <InlineCTA label="Ask What I Could Expect" />
        </ProseSection>

        <ComparisonBlock
          title="Durability by Procedure"
          columns={["Procedure", "Total Weight Loss (peak)", "Maintained at 10 Years", "Key Long-Term Consideration"]}
          rows={[
            ["Gastric Sleeve", "25–30%", "20–25%", "GERD in up to 55%; regain in ~30% by year 5"],
            ["Mini Gastric Bypass", "30–35%", "25–30%", "Lifelong supplements; strongest diabetes effect"],
            ["ESG (Endoscopic)", "15–20%", ">80% keep ≥10% at 5 yrs", "Re-tightenable; surgery stays available"],
            ["Gastric Balloon", "10–15%", "Depends on habits after removal", "A kick-start tool, not a long-term treatment"],
          ]}
          footnote="Ranges from published long-term series including SOS, MERIT and national registry data; individual results vary."
        />

        <ProseSection title="The Honest Part: Regain Happens — and It's Treatable" tone="slate">
          <p>
            A modest bounce from your lowest weight is normal biology, not failure — the long-term averages above already include it. What matters is the minority who regain significantly: up to 30% of sleeve patients within five years. The difference between a temporary setback and a lost result is <strong>acting early</strong> — reset programmes, GLP-1 medication, endoscopic tightening and surgical conversion form a complete treatment ladder. We map it in the <Link href="/weight-regain-after-gastric-sleeve" className="text-primary hover:underline">weight regain guide</Link>.
          </p>
        </ProseSection>

        <Checklist
          title="What Protects Your Result for Decades"
          items={[
            "Annual blood tests — B12, vitamin D, iron, folate, calcium",
            "Daily multivitamin (lifelong after a bypass)",
            "Protein-first eating and limiting liquid calories",
            "Responding to 5 kg of regain, not 25 kg",
            "A surgical team you can still reach in year 7 — not just year 1",
          ]}
        />

        <SurgeonProof
          title="Results Data You Can Interrogate"
          subtitle="Ask any clinic for their long-term numbers before booking. Ours: 8,000+ procedures, published outcome ranges above, and patients from 2015 still in touch on WhatsApp."
        />

        <FAQSection title="Long-Term Outcomes — Your Questions Answered" faqs={faqs} />

        <RelatedLinks
          title="Where to Go From Here"
          links={[
            { title: "Sleeve vs Bypass", description: "Choose the procedure with the durability you need", href: "/gastric-sleeve-vs-gastric-bypass" },
            { title: "Weight Regain After Sleeve", description: "The full regain treatment ladder", href: "/weight-regain-after-gastric-sleeve" },
            { title: "Revision Surgery", description: "When the first operation needs a second step", href: "/revision-bariatric-surgery" },
            { title: "Patient Results", description: "Real before-and-after journeys", href: "/results" },
          ]}
        />

        <ConversionModule
          title="Plan for the Next 20 Years, Not the Next 20 Weeks"
          text="Tell us your height, weight and health goals. We'll tell you which procedure's long-term evidence fits your case — free, honest, within 24 hours."
          buttonLabel="Get My Free Assessment"
        />
      </div>

      <Footer />
      <StickyCTA />
    </div>
  );
}

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
  StickyCTA,
  FAQSection,
  RelatedLinks,
  ConversionModule,
  InlineCTA,
} from "@/components/money-page";

const faqs = [
  {
    question: "Why does acid reflux happen after a gastric sleeve?",
    answer: "The sleeve turns the stomach into a narrow, high-pressure tube and removes part of the natural anti-reflux valve mechanism. Acid has less room and more pressure pushing it up toward the oesophagus. Studies show GERD affects up to 55% of sleeve patients long-term, and around 10% develop reflux severe enough to need intervention."
  },
  {
    question: "Will reflux after my sleeve go away on its own?",
    answer: "Mild reflux in the first months often settles as swelling resolves and weight drops. Reflux that persists beyond a year, worsens over time, or wakes you at night usually will not resolve alone — and long-standing untreated reflux can damage the oesophagus (Barrett's oesophagus), so it needs assessment, not just more antacids."
  },
  {
    question: "What are the treatment options for reflux after a sleeve?",
    answer: "In order of escalation: (1) lifestyle measures and PPI medication (omeprazole family), (2) endoscopic assessment to check for hiatal hernia or sleeve deformity, (3) hiatal hernia repair if one is found, and (4) conversion to a mini gastric bypass — the definitive fix, because it diverts acid away from the oesophagus entirely. Bypass conversion resolves or dramatically improves reflux in around 90% of cases."
  },
  {
    question: "Is it safe to stay on PPIs (omeprazole) for years?",
    answer: "PPIs are generally safe under medical supervision, but needing them daily for years after a sleeve is a signal worth investigating — both because of possible long-term effects (nutrient absorption, bone density) and because ongoing acid exposure can silently damage the oesophagus even when tablets control the burning."
  },
  {
    question: "Does converting a sleeve to a bypass really cure reflux?",
    answer: "It is the most reliable solution available. The bypass creates a small pouch that produces little acid and routes bile and acid far downstream, so there is simply much less to reflux. Around 90% of patients converted for GERD stop their PPIs or reduce them dramatically. The conversion also addresses any weight regain at the same time."
  },
  {
    question: "I have both reflux and weight regain — which do I treat?",
    answer: "Both, usually with one procedure. Sleeve-to-bypass conversion is uniquely suited to this combination — it is the standard answer when regain and GERD occur together, resolving acid exposure while restarting weight loss. This is one of the most common revision scenarios we treat."
  },
];

export default function RefluxAfterSleeve() {
  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="Acid Reflux After Gastric Sleeve: Causes, Red Flags & Every Fix"
        description="Heartburn after your gastric sleeve? GERD affects up to 55% of sleeve patients. Learn the causes, red flags, PPI limits and when bypass conversion is the cure."
        keywords="acid reflux after gastric sleeve, gerd after sleeve gastrectomy, heartburn after bariatric surgery, sleeve to bypass conversion reflux, omeprazole after gastric sleeve"
        url="/reflux-after-gastric-sleeve"
      />
      <JsonLd data={structuredData.createBreadcrumb([
        { name: "Home", url: "/" },
        { name: "Treatments", url: "/treatments" },
        { name: "Reflux After Gastric Sleeve", url: "/reflux-after-gastric-sleeve" },
      ])} />
      <Navbar />
      <MoneyHero
        eyebrow="Outcome Guide"
        title="Acid Reflux After Gastric Sleeve: What It Means and How It's Fixed"
        subtitle="GERD is the sleeve's best-known long-term trade-off — affecting up to 55% of patients. Most cases are manageable; some need repair; a definitive cure exists. Here is how to know which group you're in."
        stats={[
          { value: "55%", label: "Sleeve patients with GERD long-term" },
          { value: "~90%", label: "Resolved by bypass conversion" },
          { value: "1st step", label: "Endoscopy, not more antacids" },
        ]}
      />

      <div>
        <ProseSection title="Why the Sleeve Causes Reflux">
          <p>
            A sleeve converts the stomach from a low-pressure pouch into a narrow, high-pressure tube, and the surgery alters the angle and valve anatomy at the top of the stomach. Add a hiatal hernia — present in many patients with obesity and sometimes developing after surgery — and acid gets pushed upward, especially at night.
          </p>
          <p>
            This is a <strong>mechanical</strong> problem. That matters, because mechanical problems don't respond indefinitely to chemical solutions: PPIs reduce the acid's burn but do nothing about the pressure or the valve, and non-acid reflux can continue damaging the oesophagus silently.
          </p>
          <InlineCTA label="Ask About My Reflux — Free" />
        </ProseSection>

        <Candidacy
          title="Red Flags — Get Assessed If…"
          intro={<p>See a bariatric specialist (not just a GP prescription refill) if any of these apply:</p>}
          criteria={[
            "You need PPIs daily beyond the first year after surgery",
            "Reflux wakes you at night or you sleep propped up",
            "Food or liquid regurgitates when bending or lying down",
            "Symptoms are worsening rather than stable",
            "You also have weight regain alongside the reflux",
            "You have difficulty swallowing or food sticking — see a doctor promptly",
          ]}
          note={<>Long-standing reflux can cause Barrett's oesophagus, a pre-cancerous change that is silent while tablets mask the symptoms. A one-time endoscopy settles whether your oesophagus is safe.</>}
        />

        <ComparisonBlock
          title="Treatment Ladder: From Tablets to Cure"
          columns={["Step", "What It Involves", "Best For", "Limitation"]}
          rows={[
            ["Lifestyle + PPI medication", "Smaller evening meals, elevation, daily PPI", "Mild reflux, first-line for everyone", "Controls symptoms; fixes nothing mechanical"],
            ["Diagnostic endoscopy", "Camera assessment of sleeve, valve and oesophagus", "Anyone on PPIs >12 months or with red flags", "Diagnostic — guides the fix"],
            ["Hiatal hernia repair", "Laparoscopic repair of the diaphragm opening", "Confirmed hernia with preserved sleeve shape", "Doesn't help if the sleeve itself is the problem"],
            ["Conversion to mini gastric bypass", "Sleeve converted to bypass — acid diverted downstream", "Persistent GERD, especially with weight regain", "A second operation — 2–3 nights in hospital"],
          ]}
          footnote="Roughly 90% of patients converted to bypass for GERD stop or dramatically reduce PPIs."
        />

        <ProseSection title="The Definitive Fix: Sleeve-to-Bypass Conversion" tone="slate">
          <p>
            When reflux persists despite medication — or when you're simply done taking tablets every day for a mechanical problem — converting the sleeve to a <Link href="/mini-gastric-bypass" className="text-primary hover:underline">mini gastric bypass</Link> is the definitive answer. The small pouch produces little acid, and what remains is routed a metre and a half downstream. It is the same operation used for <Link href="/weight-regain-after-gastric-sleeve" className="text-primary hover:underline">weight regain after sleeve</Link>, which is why the combination of GERD + regain points so strongly toward conversion.
          </p>
          <p>
            At Istanbul Bariatric Center every conversion starts with diagnostic endoscopy and, where needed, simultaneous hiatal hernia repair — see the full <Link href="/revision-bariatric-surgery" className="text-primary hover:underline">revision surgery guide</Link> for the process and pricing.
          </p>
        </ProseSection>

        <SurgeonProof
          title="Reflux Revision Is Precision Work"
          subtitle="Conversion for GERD demands accurate endoscopic diagnosis and an experienced revision surgeon — the exact combination a high-volume centre provides."
        />

        <FAQSection title="Reflux After Sleeve — Your Questions Answered" faqs={faqs} />

        <RelatedLinks
          title="Where to Go From Here"
          links={[
            { title: "Revision Surgery Hub", description: "Assessment process, pathways & prices", href: "/revision-bariatric-surgery" },
            { title: "Mini Gastric Bypass", description: "The conversion that cures reflux", href: "/mini-gastric-bypass" },
            { title: "Weight Regain After Sleeve", description: "If regain came with the heartburn", href: "/weight-regain-after-gastric-sleeve" },
            { title: "Sleeve vs Bypass", description: "Choosing your first operation? Read this", href: "/gastric-sleeve-vs-gastric-bypass" },
          ]}
        />

        <ConversionModule
          title="Stop Guessing — Get Your Reflux Reviewed Free"
          text="Tell us when you had your sleeve, what medication you take and what your symptoms are. Dr Ustun's team will tell you whether you need reassurance, a repair, or a conversion — within 24 hours."
          buttonLabel="Get My Free Reflux Review"
        />
      </div>

      <Footer />
      <StickyCTA />
    </div>
  );
}

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
  StickyCTA,
  FAQSection,
  RelatedLinks,
  ConversionModule,
  InlineCTA,
} from "@/components/money-page";

const faqs = [
  {
    question: "Is weight regain after gastric sleeve normal?",
    answer: "Some regain is common — studies show up to 30% of sleeve patients regain significant weight within 5 years. It does not mean you failed. The most frequent causes are gradual sleeve dilation (stretching), hormonal adaptation, and the return of old eating patterns. All three are treatable."
  },
  {
    question: "How do I know if my sleeve has stretched?",
    answer: "Warning signs include being able to eat much larger portions than in your first year, hunger returning between meals, and steady regain despite reasonable eating. The only way to confirm is a diagnostic endoscopy, which measures the sleeve and rules out other causes — this is always our first step before recommending any treatment."
  },
  {
    question: "What are my options if I've regained weight after a sleeve?",
    answer: "Four main pathways, in increasing order of intervention: (1) a structured dietitian-led reset programme, (2) GLP-1 medication (Mounjaro/Wegovy) alongside your sleeve, (3) endoscopic re-sleeve — tightening the stretched sleeve from inside with sutures, no surgery, and (4) surgical conversion to a mini gastric bypass or duodenal switch. The right one depends on how much you've regained, your sleeve anatomy, and whether you have reflux."
  },
  {
    question: "Can a stretched sleeve be fixed without surgery?",
    answer: "Often, yes. An endoscopic re-sleeve uses the Apollo OverStitch system to suture the dilated sleeve back to a narrow tube through the mouth — no incisions, usually one night at most, and back to normal within days. It suits moderate dilation with moderate regain."
  },
  {
    question: "When is conversion to a bypass the better answer?",
    answer: "When regain is substantial (more than 25-30% of the weight you lost), when reflux has developed alongside the regain, or when endoscopy shows anatomy unsuited to re-sleeving. Sleeve-to-bypass conversion is the most common revision operation worldwide and addresses both regain and reflux in one step."
  },
  {
    question: "Do GLP-1 medications work after a gastric sleeve?",
    answer: "Yes — studies show meaningful additional weight loss when GLP-1 medication is added after bariatric surgery, and it can be an effective non-procedural option for moderate regain. The limitations: the effect lasts only while on the medication, monthly cost is significant, and side effects stop some patients. We often use it as a bridge or in combination with other pathways."
  },
];

export default function WeightRegainAfterSleeve() {
  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="Weight Regain After Gastric Sleeve: Why It Happens & All 4 Fix Pathways"
        description="Regaining weight after a gastric sleeve? Up to 30% of patients do. Compare all four pathways: dietitian reset, GLP-1 medication, endoscopic re-sleeve, bypass conversion."
        keywords="weight regain after gastric sleeve, gastric sleeve stretched, sleeve not working anymore, regained weight after bariatric surgery, gastric sleeve revision options"
        url="/weight-regain-after-gastric-sleeve"
      />
      <JsonLd data={structuredData.createBreadcrumb([
        { name: "Home", url: "/" },
        { name: "Treatments", url: "/treatments" },
        { name: "Weight Regain After Gastric Sleeve", url: "/weight-regain-after-gastric-sleeve" },
      ])} />
      <Navbar />
      <MoneyHero
        eyebrow="Outcome Guide — No Blame, Just Solutions"
        title="Weight Regain After Gastric Sleeve: Your Four Pathways"
        subtitle="Up to 30% of sleeve patients regain significant weight within five years. It is not a personal failure — it has physical causes, and every one of them has a treatment. Here is the full map."
        stats={[
          { value: "30%", label: "Of patients regain within 5 yrs" },
          { value: "4", label: "Treatment pathways" },
          { value: "1st step", label: "Always diagnostic endoscopy" },
        ]}
      />

      <div>
        <ProseSection title="Why the Weight Comes Back">
          <p>
            Three mechanisms drive regain after a sleeve, and none of them is willpower:
          </p>
          <ul className="list-disc pl-6 space-y-3">
            <li><strong>Sleeve dilation.</strong> The sleeve is a muscular tube under pressure at every meal; over years it can gradually stretch, restoring capacity and appetite.</li>
            <li><strong>Hormonal adaptation.</strong> Ghrelin (the hunger hormone) partially recovers in some patients 2–4 years after surgery.</li>
            <li><strong>Behavioural drift.</strong> Grazing, liquid calories and skipped follow-up quietly erode the restriction that remains.</li>
          </ul>
          <p>
            Because the cause differs patient to patient, the fix must too — which is why every regain case at Istanbul Bariatric Center starts with a <strong>diagnostic endoscopy</strong>, not a sales pitch for one procedure.
          </p>
          <InlineCTA label="Describe My Situation — Free Review" />
        </ProseSection>

        <ComparisonBlock
          title="The Four Pathways Compared"
          subtitle="From least to most intervention. Many patients combine pathways — for example a dietitian reset plus GLP-1 while deciding on an endoscopic re-sleeve."
          columns={["Pathway", "Best For", "Invasiveness", "Expected Result"]}
          rows={[
            ["1. Dietitian-led reset programme", "Regain under ~10 kg, habits identified as the driver", "None — remote programme", "Halt regain, lose 5–10 kg"],
            ["2. GLP-1 medication (Mounjaro/Wegovy)", "Moderate regain, patient prefers no procedure", "None — weekly injection", "10–15% loss while on medication"],
            ["3. Endoscopic re-sleeve", "Confirmed sleeve dilation, moderate regain, no severe reflux", "Endoscopic — no incisions, 0–1 night", "Restore restriction; 60–70% of regained weight lost"],
            ["4. Conversion to mini bypass / DS", "Major regain, reflux, or anatomy unsuited to re-sleeve", "Laparoscopic, 2–3 nights", "Strongest and most durable result"],
          ]}
        />

        <ExpertPOV title="When Regain Is Behavioural vs Anatomical — How I Tell the Difference">
          <p>
            The single most useful question I ask a regain patient is not about food — it is: <strong>"How much can you eat in one sitting compared with your first year after surgery?"</strong> If a full plate now goes down comfortably, I already suspect the anatomy before the endoscope confirms it. If portions are still small but the weight is climbing anyway, the sleeve is almost always intact — the calories are arriving between meals, in liquid form, or in grazing patterns the sleeve was never designed to stop.
          </p>
          <p>
            I never make that call from conversation alone, and neither should any surgeon. Every regain assessment in my clinic starts with a <strong>diagnostic endoscopy</strong>, because the two mistakes are equally expensive: operating on a patient whose sleeve is fine (an operation that fixes nothing, since the problem is behavioural), and sending a patient with a dilated fundus to a dietitian for a year of frustration that no willpower can win.
          </p>
          <p>
            Roughly speaking, in my practice about half of regain cases are behavioural, a quarter are anatomical, and a quarter are both. That last group matters most: a re-sleeve or conversion without a rebuilt eating pattern regains again, and I say so before I offer anyone a second procedure. The honest sequence is diagnosis first, then match the treatment to the mechanism — never the other way around.
          </p>
        </ExpertPOV>

        <ProseSection title="How We Decide, Step by Step" tone="slate">
          <ol className="list-decimal pl-6 space-y-4">
            <li><strong>Free remote review.</strong> Send your original surgery date, weight history and current eating pattern on WhatsApp — Dr Ustun reviews every regain case personally.</li>
            <li><strong>Diagnostic endoscopy in Istanbul.</strong> Measures sleeve size, checks for hiatal hernia and reflux damage. This single test determines which pathways are realistic.</li>
            <li><strong>Pathway decision — least intervention that will actually work.</strong> If a reset programme or medication can achieve your goal, we say so; a procedure is only recommended when anatomy demands it.</li>
            <li><strong>Treatment and 12 months of aftercare</strong> with UK-registered dietitian support, because whichever pathway you choose, habit support decides whether the result lasts this time.</li>
          </ol>
        </ProseSection>

        <Candidacy
          title="When to Get Assessed — Don't Wait for 'Bad Enough'"
          intro={<p>Book a regain assessment if any of these apply:</p>}
          criteria={[
            "You have regained more than 25% of the weight you originally lost",
            "Portion sizes are clearly back toward pre-surgery levels",
            "Hunger between meals has returned",
            "Heartburn or reflux has appeared or worsened alongside the regain",
            "You are considering GLP-1 medication and want to know if it is the right tool",
          ]}
          note={<>Regain accelerates: acting at 10 kg regained keeps every option open, including the simplest ones. If reflux is your bigger problem, start with our <Link href="/reflux-after-gastric-sleeve" className="text-primary hover:underline font-medium">reflux after sleeve guide</Link>.</>}
        />

        <SurgeonProof
          title="Why Regain Patients Come to Istanbul"
          subtitle="Revision assessment demands a centre that offers every pathway — endoscopic and surgical — so the recommendation is driven by your endoscopy, not the clinic's limitations."
        />

        <FAQSection title="Weight Regain — Your Questions Answered" faqs={faqs} />

        <RelatedLinks
          title="Where to Go From Here"
          links={[
            { title: "Revision Surgery Hub", description: "All revision pathways in detail", href: "/revision-bariatric-surgery" },
            { title: "Mini Gastric Bypass", description: "The most common conversion target", href: "/mini-gastric-bypass" },
            { title: "Reflux After Sleeve", description: "If heartburn came back with the weight", href: "/reflux-after-gastric-sleeve" },
            { title: "Long-Term Results", description: "What 'success' looks like at 5–10 years", href: "/bariatric-surgery-long-term-results" },
          ]}
        />

        <ConversionModule
          title="Get an Honest Regain Assessment — Free"
          text="Send your surgery date, lowest weight, current weight and main struggle on WhatsApp. Dr Ustun's team will tell you which pathway fits — including when the answer is 'no procedure needed'."
          buttonLabel="Start My Free Assessment"
        />
      </div>

      <Footer />
      <StickyCTA guideHref="/revision-bariatric-surgery" />
    </div>
  );
}

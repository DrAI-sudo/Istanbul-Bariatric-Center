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
    question: "Is a gastric balloon as effective as a gastric sleeve?",
    answer: "No. A balloon produces 10-15% total body weight loss while it is in place (6-12 months); the surgical sleeve produces 25-30% and the result is permanent. The balloon's advantage is that it is temporary, non-surgical, and fully reversible — a tool to kick-start weight loss or prepare for surgery, not a lifelong solution."
  },
  {
    question: "Does the weight come back after a gastric balloon?",
    answer: "It can. Once the balloon is removed, the stomach returns to normal capacity, so keeping the weight off depends entirely on the eating habits built during the balloon period. Studies show a significant portion of patients regain weight within 1-2 years of removal unless they transition to further treatment or maintain strict habits."
  },
  {
    question: "Who is a gastric balloon actually right for?",
    answer: "Patients with BMI 27-35 who need to lose 10-25 kg, patients who want a fully reversible trial of restriction before committing to surgery, and higher-BMI patients who need to lose weight before an operation. For BMI over 35 seeking a lasting result, ESG or a surgical sleeve is usually the better investment."
  },
  {
    question: "Is the balloon safer than the sleeve?",
    answer: "The balloon avoids surgery entirely — it is placed endoscopically in about 20 minutes, and swallowable versions need no endoscopy at all. Serious complications are rare, though nausea in the first week is common. The sleeve is also very safe (1-3% major complications) but is a permanent operation. In between the two sits ESG: non-surgical like the balloon, durable like the sleeve."
  },
  {
    question: "What do the balloon and sleeve cost in Turkey?",
    answer: "At Istanbul Bariatric Center the gastric balloon starts at £1,650 and the gastric sleeve at £2,950, both all-inclusive. Note that a balloon lasts 6-12 months while the sleeve is permanent — per kilogram kept off long-term, the sleeve and ESG are usually better value."
  },
  {
    question: "Can I have a sleeve or ESG after a balloon?",
    answer: "Yes, and it is a common pathway: balloon first to reduce weight and prove restriction works for you, then ESG or a surgical sleeve for the permanent result. We plan this two-step route deliberately for suitable patients."
  },
];

export default function BalloonVsSleeve() {
  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="Gastric Balloon vs Gastric Sleeve: Temporary or Permanent? (2026)"
        description="Gastric balloon vs gastric sleeve compared: weight loss, reversibility, safety, cost in Turkey, and when the balloon is genuinely the right choice."
        keywords="gastric balloon vs gastric sleeve, balloon or sleeve which is better, gastric balloon vs surgery, temporary vs permanent weight loss procedure"
        url="/gastric-balloon-vs-gastric-sleeve"
      />
      <JsonLd data={structuredData.createBreadcrumb([
        { name: "Home", url: "/" },
        { name: "Treatments", url: "/treatments" },
        { name: "Gastric Balloon vs Gastric Sleeve", url: "/gastric-balloon-vs-gastric-sleeve" },
      ])} />
      <Navbar />
      <MoneyHero
        eyebrow="Decision Guide"
        title="Gastric Balloon vs Gastric Sleeve"
        subtitle="One is temporary, reversible and needs no surgery; the other is permanent and far more powerful. The honest question is not which is 'better' — it's how much weight you need to lose, and for how long."
        stats={[
          { value: "10–15%", label: "Total weight loss — balloon" },
          { value: "25–30%", label: "Total weight loss — sleeve" },
          { value: "6–12 mo", label: "Balloon duration" },
        ]}
      />

      <div>
        <ComparisonBlock
          title="Balloon vs Sleeve at a Glance"
          columns={["Factor", "Gastric Balloon", "Gastric Sleeve"]}
          rows={[
            ["Technique", "Silicone balloon placed in stomach (endoscopic or swallowable)", "~80% of stomach surgically removed"],
            ["Permanence", "Temporary — removed at 6 or 12 months", "Permanent"],
            ["Total body weight loss", "10–15% (while in place)", "25–30% (durable)"],
            ["Anaesthesia", "Sedation, ~20 minutes", "General, ~60 minutes"],
            ["Hospital stay", "None — walk out same day", "2–3 nights"],
            ["Back to work", "1–3 days", "10–14 days"],
            ["Reversible", "Fully", "No"],
            ["Ideal BMI range", "27–35", "35–55+"],
            ["Main drawback", "Weight regain after removal", "Irreversible; reflux risk"],
            ["Price at IBC (all-inclusive)", "From £1,650", "From £2,950"],
          ]}
        />

        <ProseSection title="The Right Way to Think About It">
          <p>
            The balloon and the sleeve solve <strong>different problems</strong>. The <Link href="/gastric-balloon" className="text-primary hover:underline">gastric balloon</Link> is a 6–12 month tool: it fills space in the stomach so you feel full sooner, ideal for losing 10–25 kg, breaking a plateau, or trialling restriction before committing to anything permanent. The <Link href="/sleeve-gastrectomy" className="text-primary hover:underline">gastric sleeve</Link> is a permanent operation that changes both capacity and hunger hormones — the appropriate tool when obesity is established and long-term.
          </p>
          <p>
            If you find yourself wanting the balloon's gentleness but the sleeve's durability, that middle ground exists: <Link href="/esg" className="text-primary hover:underline">ESG (endoscopic sleeve gastroplasty)</Link> is non-surgical like the balloon, yet delivers 15–20% total body weight loss that lasts — compare it in our <Link href="/esg-vs-gastric-sleeve" className="text-primary hover:underline">ESG vs sleeve guide</Link>.
          </p>
          <InlineCTA label="Not Sure? Get Free Advice" />
        </ProseSection>

        <Candidacy
          title="The Balloon Is Right for You If…"
          intro={<p>We genuinely recommend the balloon when:</p>}
          criteria={[
            "Your BMI is 27–35 and you need to lose 10–25 kg",
            "You want a fully reversible, no-surgery option",
            "You need to lose weight before another operation (including bariatric surgery)",
            "You want to test how restriction feels before a permanent decision",
            "You can commit to the dietitian programme — the balloon only works with it",
          ]}
          note={<>If your BMI is over 35 and this is a long-term weight problem, be cautious of choosing the balloon just because it feels easier — regain after removal is the most common complaint we hear from patients who ballooned elsewhere. ESG or the sleeve will serve you better.</>}
        />

        <SurgeonProof
          title="We Offer All Three — So You Get the Right One"
          subtitle="Balloon, ESG and surgical sleeve are all performed in-house, which means our recommendation follows your case, not our menu."
        />

        <FAQSection title="Balloon vs Sleeve — Your Questions Answered" faqs={faqs} />

        <RelatedLinks
          title="Your Next Step"
          links={[
            { title: "Gastric Balloon", description: "Full guide — from £1,650", href: "/gastric-balloon" },
            { title: "ESG — the Middle Ground", description: "Non-surgical & durable — from £4,950", href: "/esg" },
            { title: "Gastric Sleeve", description: "Full guide — from £2,950", href: "/sleeve-gastrectomy" },
            { title: "Cost Guide", description: "All 2026 prices vs UK, US & EU", href: "/cost-of-bariatric-surgery-in-turkey" },
          ]}
        />

        <ConversionModule
          title="Tell Us Your Goal — We'll Map the Route"
          text="Whether it's 10 kg or 60 kg, message our team with your height, weight and target. You'll get an honest recommendation — balloon, ESG, sleeve, or none — within 24 hours."
          buttonLabel="Get My Free Recommendation"
        />
      </div>

      <Footer />
      <StickyCTA />
    </div>
  );
}

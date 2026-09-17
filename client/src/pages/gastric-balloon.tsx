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
  SurgeonProof,
  FAQSection,
  RelatedLinks,
  ConversionModule,
  ExpertPOV,
  DecisionBlock,
  StickyCTA,
  InlineCTA,
} from "@/components/money-page";

const faqs = [
  {
    question: "How much does a gastric balloon cost in Turkey?",
    answer: "At Istanbul Bariatric Center, the Orbera gastric balloon costs £1,900 and the Allurion swallowable balloon costs £2,600. Your written quotation explains what is included after the clinical team reviews your health information.",
  },
  {
    question: "What weight loss can I expect from a gastric balloon?",
    answer: "Typical total body weight loss is 10–15% over 6–12 months, although results vary. The balloon is a temporary tool: food choices, activity, follow-up and continued habits after removal strongly influence the result.",
  },
  {
    question: "What is the difference between Orbera and Allurion?",
    answer: "Orbera is placed and removed endoscopically and normally remains in the stomach for six months. Allurion is swallowed as a capsule under clinical supervision, is filled after its position is checked, and is designed to deflate and pass naturally after about four months.",
  },
  {
    question: "Is a gastric balloon surgery?",
    answer: "No abdominal incision is made and the stomach is not cut or stapled. Orbera does require an endoscopic procedure with sedation for placement and removal; Allurion does not normally require endoscopy or anaesthesia for placement.",
  },
  {
    question: "Is travelling to Turkey for a gastric balloon safe?",
    answer: "No procedure is risk-free. Safety depends on appropriate screening, a qualified clinical team, clear aftercare and knowing when to seek urgent help. Istanbul Bariatric Center treats patients at JCI-accredited Liv Hospital Vadistanbul and gives each eligible patient a personalised plan.",
  },
  {
    question: "What are the common side effects and risks?",
    answer: "Nausea, vomiting, cramps, reflux and dehydration are common during early adjustment. Less common but important risks include intolerance, balloon deflation or migration, ulceration, obstruction and perforation. Your clinician will explain warning signs and alternatives before consent.",
  },
  {
    question: "Will I regain weight after the balloon is removed?",
    answer: "Regain is possible because the device is temporary. A structured eating plan, regular activity and dietetic follow-up help preserve progress. If a balloon is unlikely to provide sufficient or durable benefit, the team may discuss ESG or bariatric surgery instead.",
  },
  {
    question: "How do I find out whether I am eligible?",
    answer: "Request a free consultation and provide an accurate medical history, current medicines, previous procedures and weight history. A clinician must assess suitability; price or preference alone should not determine treatment.",
  },
];

const relatedLinks = [
  { title: "Balloon vs Gastric Sleeve", description: "Compare reversibility, weight loss, recovery and long-term trade-offs.", href: "/gastric-balloon-vs-gastric-sleeve" },
  { title: "Endoscopic Sleeve Gastroplasty", description: "Explore ESG, a non-surgical endoscopic alternative from £5,700.", href: "/esg" },
  { title: "Gastric Sleeve Turkey", description: "Understand permanent surgical treatment and expected outcomes.", href: "/gastric-sleeve-turkey" },
  { title: "Bariatric Treatment Costs", description: "Compare current all-inclusive procedure and package prices.", href: "/cost-of-bariatric-surgery-in-turkey" },
  { title: "Meet Dr Murat Üstün", description: "Review the surgeon's experience, credentials and approach.", href: "/dr-murat-ustun" },
  { title: "All Weight-Loss Treatments", description: "See surgical and endoscopic options available in Istanbul.", href: "/treatments" },
];

export default function GastricBalloon() {
  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="Gastric Balloon Turkey | £1,900"
        description="Gastric balloon Turkey packages: Orbera £1,900 and Allurion £2,600. Compare options, eligibility, risks, aftercare and expected 10–15% weight loss."
        url="/gastric-balloon"
      />
      <JsonLd data={structuredData.createBreadcrumb([
        { name: "Home", url: "/" },
        { name: "Treatments", url: "/treatments" },
        { name: "Gastric Balloon Turkey", url: "/gastric-balloon" },
      ])} />
      <Navbar />

      <MoneyHero
        eyebrow="Non-surgical weight-loss treatment in Istanbul"
        title="Gastric Balloon in Turkey — From £1,900 All-Inclusive"
        subtitle="Gastric balloon Turkey treatment starts at £1,900 for Orbera. The Allurion swallowable gastric balloon costs £2,600, with screening and a personalised care plan for eligible international patients."
        stats={[
          { value: "£1,900", label: "Orbera price" },
          { value: "£2,600", label: "Allurion price" },
          { value: "10–15%", label: "Typical total body weight loss" },
          { value: "No incisions", label: "Temporary treatment" },
        ]}
      />

      <ProcedureFacts
        title="Gastric balloon Turkey at a glance"
        facts={[
          { label: "Orbera duration", value: "6 months" },
          { label: "Allurion duration", value: "About 4 months" },
          { label: "Hospital", value: "Liv Hospital Vadistanbul" },
          { label: "Consultation", value: "Free assessment" },
        ]}
      />

      <ProseSection title="What is a gastric balloon and how does it work?">
        <p>
          A gastric balloon is a temporary device that occupies space in the stomach, helping you feel full after smaller portions. It does not remove, staple or reroute any part of the digestive system. For international patients considering gastric balloon treatment in Turkey, the decision should begin with medical suitability rather than price alone.
        </p>
        <p>
          After placement, the balloon works alongside a calorie-controlled eating plan and gradual activity. It is not a passive cure for obesity: patients must learn portion control, eat slowly, choose nutrient-dense foods and plan for life after the device leaves the stomach. Typical total body weight loss is 10–15% over 6–12 months, but individual results are not guaranteed.
        </p>
        <p>
          Istanbul Bariatric Center offers Orbera and Allurion. Orbera is introduced through the mouth with an endoscope under sedation, filled with saline and removed endoscopically after six months. Allurion is swallowed as a capsule under clinical supervision, then filled once its position is confirmed; it is designed to deflate and pass naturally after about four months.
        </p>
        <InlineCTA label="Ask About the £1,900 Orbera Balloon" />
      </ProseSection>

      <ComparisonBlock
        title="Orbera vs Allurion gastric balloon prices"
        subtitle="Two temporary options, selected according to clinical suitability, preferences and the support needed."
        columns={["Feature", "Orbera", "Allurion"]}
        highlightColumn={0}
        rows={[
          ["Price", "£1,900", "£2,600"],
          ["Placement", "Endoscopy under sedation", "Swallowed capsule, position checked before filling"],
          ["Time in stomach", "6 months", "About 4 months"],
          ["Removal", "Endoscopic removal", "Designed to deflate and pass naturally"],
          ["Incisions", "None", "None"],
          ["Best considered by", "Patients comfortable with placement and removal endoscopy", "Eligible patients who prefer a swallowable option"],
        ]}
        footnote="A clinical assessment is required. These prices apply to the named options and should be confirmed in your written treatment plan."
      />

      <Checklist
        title="What your treatment planning covers"
        background="slate"
        items={[
          "Remote pre-assessment and review of your medical history",
          "Selection between Orbera and Allurion based on suitability",
          "Required clinical checks before the balloon is placed",
          "Clear eating and hydration guidance for the adjustment phase",
          "A plan for medication, travel and return to normal activities",
          "Dietetic guidance focused on habits that continue after removal",
          "Written warning signs and contact instructions",
          "Transparent confirmation of the £1,900 or £2,600 option",
        ]}
      />

      <ProseSection title="Your treatment journey in Istanbul" tone="white">
        <p>
          The process starts before travel. You share your weight history, health conditions, previous abdominal or bariatric procedures, allergies and medicines. The team may request reports or tests. You should disclose reflux, ulcers, swallowing problems, pregnancy plans and medicines that affect bleeding or the stomach lining. Withholding information can make treatment unsafe.
        </p>
        <p>
          On arrival in Istanbul, the clinical team confirms that the planned balloon remains appropriate. Orbera placement is performed endoscopically with sedation. The empty balloon is guided into the stomach and filled with saline, then its position is checked. Allurion placement involves swallowing the capsule attached to a fine catheter; imaging confirms its location before filling, after which the catheter is removed.
        </p>
        <p>
          Most patients experience nausea, cramping or reflux while the stomach adjusts. Hydration is the immediate priority. You progress from liquids according to clinical guidance rather than rushing back to solid food. The team will explain which symptoms are expected and which require urgent review. Arrange enough recovery time and do not book onward travel that conflicts with medical advice.
        </p>
        <p>
          The following months are where the balloon delivers its value: regular meals, appropriate portions, protein and fibre choices, activity and follow-up turn temporary restriction into repeatable habits. Orbera also requires planned endoscopic removal. Allurion is designed to empty and pass naturally, but follow-up still matters.
        </p>
      </ProseSection>

      <Candidacy
        title="Who may be suitable for a gastric balloon?"
        intro={<p>A gastric balloon can suit selected adults who want a temporary, non-surgical tool and are prepared to participate in dietary follow-up. Final eligibility is always an individual clinical decision.</p>}
        criteria={[
          "You have not achieved sufficient progress with lifestyle measures alone",
          "You understand that 10–15% total body weight loss is typical, not guaranteed",
          "You can follow staged eating, hydration and follow-up instructions",
          "You prefer a temporary option without abdominal incisions",
          "You are willing to build habits for the period after the balloon",
          "Your medical history does not identify a contraindication",
        ]}
        note={<p>A balloon may not be appropriate with certain stomach or oesophageal disease, previous gastrointestinal surgery, pregnancy, uncontrolled medical or psychiatric illness, or inability to follow care instructions. Only a qualified clinician can decide after reviewing your history.</p>}
      />

      <DecisionBlock
        title="Is a gastric balloon the right level of treatment?"
        bestFor={[
          "Eligible patients seeking a temporary, non-surgical tool",
          "People comfortable with moderate rather than surgical levels of expected weight loss",
          "Patients ready to use the treatment period to change eating habits",
        ]}
        notIdealFor={[
          "Anyone expecting the device to work without dietary and behavioural change",
          "Patients whose medical history makes balloon placement unsafe",
          "People who need greater or more durable weight loss than a balloon is likely to provide",
        ]}
        typicalRecovery="Early nausea, cramps, reflux and fatigue can occur, especially during the first days. Return to routine varies according to symptoms, hydration and the clinician's advice."
        tradeOffs={[
          "The device is temporary and weight regain can occur after it leaves the stomach",
          "Orbera needs sedation and endoscopy for both placement and removal",
          "Allurion avoids planned removal but is not suitable for every patient",
          "Rare complications can require urgent endoscopy or other treatment",
        ]}
      />

      <ProseSection title="Gastric balloon risks and responsible aftercare" tone="blue">
        <p>
          Common effects include nausea, vomiting, abdominal discomfort, reflux and difficulty maintaining hydration during adjustment. Prescribed medicines and the staged diet can help, but persistent vomiting, severe or worsening pain, abdominal swelling, fever, breathing difficulty, bleeding, inability to drink or a sudden change in symptoms needs prompt clinical advice.
        </p>
        <p>
          Less common complications include severe intolerance, gastric ulceration, balloon deflation, migration, bowel obstruction and perforation. Some situations require early balloon removal or urgent intervention. These possibilities should be discussed during informed consent; marketing terms such as “non-surgical” do not mean risk-free.
        </p>
        <p>
          International treatment also requires practical preparation. Keep the clinic's contacts available, follow flight and medication advice, and understand how care will be coordinated after you return home. Seek local emergency services when symptoms are urgent rather than waiting for an online reply.
        </p>
      </ProseSection>

      <ExpertPOV title="How Dr Murat Üstün approaches balloon selection">
        <p>
          “I first ask whether a temporary balloon can reasonably match the patient's health needs, expectations and willingness to change habits. Orbera and Allurion differ in how they are placed and how they leave the stomach, but neither replaces careful screening or follow-up.”
        </p>
        <p>
          “When someone needs substantially greater weight loss, has significant metabolic disease, or has already regained weight after temporary treatment, I discuss alternatives honestly. That may include <Link href="/esg" className="text-primary hover:underline">endoscopic sleeve gastroplasty</Link> or, for an appropriate surgical candidate, <Link href="/gastric-sleeve-turkey" className="text-primary hover:underline">gastric sleeve in Turkey</Link>. The least invasive choice is useful only when it is also clinically suitable.”
        </p>
      </ExpertPOV>

      <SurgeonProof
        title="Experienced, accountable care in Istanbul"
        subtitle="Istanbul Bariatric Center was founded by Dr Murat Üstün, a bariatric and metabolic surgeon with 25+ years of experience and 6,000+ procedures."
        cards={[
          { icon: "surgeon", title: <Link href="/dr-murat-ustun">Dr Murat Üstün</Link>, text: "IFSO member, bariatric and metabolic surgeon, and a pioneer of ESG in Turkey." },
          { icon: "hospital", title: "JCI-accredited setting", text: "Clinical care is provided at Liv Hospital Vadistanbul in Istanbul." },
          { icon: "pricing", title: "Prices stated clearly", text: "Orbera is £1,900 and the Allurion swallowable balloon is £2,600." },
          { icon: "results", title: "Recognised service", text: "WhatClinic Patient Service Award 2019–2021 and 2023–2025." },
        ]}
      />

      <ProseSection title="Balloon, ESG or gastric sleeve?" tone="slate">
        <p>
          A balloon is temporary and does not alter the stomach. Its typical result of 10–15% total body weight loss can be meaningful, but it is generally more modest than surgical outcomes. ESG uses an endoscope to place sutures that reduce stomach volume without removing stomach tissue; treatment starts from £5,700. A gastric sleeve is surgery that permanently removes part of the stomach and typically achieves 60–70% excess weight loss at 12–18 months.
        </p>
        <p>
          These percentages use different measures, so they should not be compared as though they are identical. Total body weight loss describes a percentage of starting weight; excess weight loss describes a percentage of weight above a reference healthy weight. Read our detailed <Link href="/gastric-balloon-vs-gastric-sleeve" className="text-primary hover:underline">gastric balloon vs gastric sleeve comparison</Link>, then discuss your health goals with a clinician.
        </p>
        <p>
          Cost is one factor, not the diagnosis. Our <Link href="/cost-of-bariatric-surgery-in-turkey" className="text-primary hover:underline">Turkey bariatric treatment cost guide</Link> explains current package prices, while the <Link href="/treatments" className="text-primary hover:underline">treatments overview</Link> helps you understand the full range before committing.
        </p>
      </ProseSection>

      <FAQSection title="Gastric balloon Turkey FAQs" faqs={faqs} />
      <RelatedLinks title="Compare treatments and plan your decision" links={relatedLinks} />
      <ConversionModule
        title="Check eligibility for Orbera from £1,900"
        text="Request a free, no-obligation assessment. Share your medical and weight history to receive an appropriate recommendation and a clear written quotation."
        buttonLabel="Ask About the £1,900 Balloon"
      />
      <Footer />
      <StickyCTA guideHref="/cost-of-bariatric-surgery-in-turkey" />
    </div>
  );
}
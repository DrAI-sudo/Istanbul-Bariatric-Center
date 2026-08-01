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
    question: "Is it safe for UK patients to have weight loss surgery in Turkey?",
    answer: "Yes — when you choose the right provider. Istanbul Bariatric Center operates exclusively at JCI-accredited Liv Hospital, the same international accreditation standard held by leading UK private hospitals. Dr Murat Ustun has performed over 8,000 procedures and the centre has won the WhatClinic Patient Service Award six times. The key is verifying hospital accreditation and surgeon volume before you book — with any provider."
  },
  {
    question: "How long do I need to stay in Istanbul?",
    answer: "Most UK patients stay 4-6 nights in total: arrival and pre-operative tests on day one, surgery on day two, 2-3 nights in hospital, then 1-2 nights at the hotel before flying home. ESG and gastric balloon patients can often return home within 2-3 days."
  },
  {
    question: "What aftercare do I get back in the UK?",
    answer: "Relaxation and Luxury packages include 12 months of support from a UK-registered dietitian, plus care support coordinators in 8 UK locations for in-person help. Our clinical team remains available on WhatsApp for any concern, and we coordinate with your GP where needed."
  },
  {
    question: "Will the NHS look after me if something goes wrong?",
    answer: "The NHS will always treat you in an emergency. For routine follow-up, our UK dietitian network and remote clinical team handle your aftercare. We also strongly recommend specialist medical-travel insurance, which covers complication treatment — policies typically cost £100-£200."
  },
  {
    question: "How do payments work from the UK?",
    answer: "You pay a deposit by card or bank transfer to secure your surgery date, with the balance payable on arrival in Istanbul. All prices are quoted in pounds sterling and fixed — the quote you receive is the amount you pay."
  },
  {
    question: "Do I need a visa to travel to Turkey from the UK?",
    answer: "No. UK passport holders can enter Turkey visa-free for up to 90 days. You only need a passport valid for at least 150 days from your arrival date, plus your booking confirmation from us."
  },
];

export default function BariatricSurgeryUKPatients() {
  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="Bariatric Surgery in Turkey for UK Patients — Aftercare in 8 UK Locations"
        description="Weight loss surgery in Istanbul designed for UK patients: fixed GBP prices from £2,950, UK-registered dietitian aftercare, support in 8 UK locations."
        keywords="bariatric surgery turkey uk patients, gastric sleeve turkey from uk, weight loss surgery abroad uk, gastric sleeve istanbul uk aftercare"
        url="/bariatric-surgery-for-uk-patients"
      />
      <JsonLd data={structuredData.createBreadcrumb([
        { name: "Home", url: "/" },
        { name: "Treatments", url: "/treatments" },
        { name: "Bariatric Surgery for UK Patients", url: "/bariatric-surgery-for-uk-patients" },
      ])} />
      <Navbar />
      <MoneyHero
        eyebrow="Designed for UK Patients"
        title="Bariatric Surgery in Turkey for UK Patients"
        subtitle="Fixed GBP pricing, a 4-hour flight, JCI-accredited hospital care in Istanbul — and aftercare that follows you home, with UK-registered dietitians and support coordinators in 8 UK locations."
        stats={[
          { value: "£2,950", label: "Gastric sleeve from" },
          { value: "8", label: "UK support locations" },
          { value: "12 mo", label: "Dietitian aftercare" },
        ]}
      />

      <div>
        <ProcedureFacts
          title="Your Trip at a Glance"
          facts={[
            { label: "Flight time", value: "~4 hours" },
            { label: "Visa for UK passports", value: "Not required" },
            { label: "Typical stay", value: "4–6 nights" },
            { label: "Time off work", value: "1–2 weeks" },
          ]}
        />

        <ProseSection title="Why Thousands of UK Patients Choose Istanbul">
          <p>
            Private weight loss surgery in the UK costs £10,000–£16,000, and NHS waiting lists for bariatric surgery routinely stretch <strong>beyond two years</strong> — with strict eligibility criteria that exclude many people who would benefit. That is why the UK is now one of the largest sources of bariatric patients travelling to Istanbul.
          </p>
          <p>
            The saving is substantial — typically <strong>60–70% less than UK private prices</strong>, even after flights — but the deciding factor for most of our UK patients is the care model: surgery by a single named surgeon with 8,000+ procedures, a JCI-accredited hospital, and a genuinely all-inclusive package with aftercare that continues in the UK.
          </p>
          <InlineCTA label="Speak to a UK Coordinator" />
        </ProseSection>

        <ComparisonBlock
          title="UK Private Surgery vs Istanbul Bariatric Center"
          columns={["What You Get", "UK Private Clinic", "Istanbul Bariatric Center"]}
          highlightColumn={1}
          rows={[
            ["Gastric sleeve price", "£10,000 – £15,000", "£2,950 – £4,250 all-inclusive"],
            ["Waiting time", "Weeks to months", "Usually 1–3 weeks to your chosen date"],
            ["Hospital accreditation", "CQC-regulated", "JCI-accredited (international gold standard)"],
            ["Surgeon caseload", "Varies widely", "8,000+ procedures (Dr Murat Ustun)"],
            ["Hotel & transfers", "Not included", "Included (Relaxation & Luxury)"],
            ["Dietitian aftercare", "Often extra", "12 months included, UK-registered"],
            ["In-person UK support", "At the clinic", "Coordinators in 8 UK locations"],
          ]}
        />

        <ProseSection title="Your Journey, Step by Step" tone="slate">
          <ol className="list-decimal pl-6 space-y-4">
            <li><strong>Free consultation from home.</strong> Message our UK line on WhatsApp. You'll get an eligibility assessment, a personalised recommendation, and a fixed GBP quote — usually within 24 hours.</li>
            <li><strong>Book your date.</strong> Secure your surgery date with a deposit. We help you find flights; London, Manchester, Birmingham and Edinburgh all have direct Istanbul routes.</li>
            <li><strong>Arrival day.</strong> VIP transfer meets you at Istanbul Airport. Pre-operative tests, consultations and anaesthesia review are completed the same day.</li>
            <li><strong>Surgery and hospital stay.</strong> Your procedure at JCI-accredited Liv Hospital, followed by 2–3 nights of monitored recovery with English-speaking staff and a translator.</li>
            <li><strong>Hotel recovery and fly home.</strong> One or two nights at the Radisson with daily check-ins, a final review, then your transfer back to the airport. Flying 4 hours post-op is safe and routine at this stage.</li>
            <li><strong>Aftercare in the UK.</strong> 12 months of UK-registered dietitian support, supplement guidance, WhatsApp access to the clinical team, and in-person support in 8 UK locations.</li>
          </ol>
        </ProseSection>

        <Candidacy
          title="Am I Eligible?"
          intro={<p>UK patients typically qualify for weight loss surgery with us if:</p>}
          criteria={[
            "Your BMI is 35 or above (30+ for non-surgical options like ESG or gastric balloon)",
            "You have tried diet and exercise without lasting results",
            "You have weight-related conditions such as type 2 diabetes, sleep apnoea or joint pain",
            "You are 18–65 and fit for general anaesthesia",
            "You are committed to the post-op diet and follow-up programme",
            "You can travel to Istanbul for 4–6 nights",
          ]}
          note={<>Not sure? Use our <Link href="/health-profile" className="text-primary hover:underline font-medium">2-minute health profile</Link> or message us — assessment is free and carries no obligation.</>}
        />

        <SurgeonProof
          title="The Safety Standards UK Patients Should Demand"
          subtitle="Wherever you have surgery abroad, verify these four things. Here is how we measure up."
        />

        <StaticTestimonials
          title="What UK & Irish Patients Say"
          quotes={[
            {
              name: "Emma W.", flag: "🇬🇧", date: "August 2025",
              text: "I recently had gastric sleeve surgery and the experience was amazing. The hospital is super clean and you have a whole room to yourself. Dr. Murat and his team provided excellent care throughout my stay. I'm already seeing great results!"
            },
            {
              name: "Michelle F.", flag: "🇬🇧", date: "August 2024",
              text: "From airport pickup to hotel accommodation, everything was perfectly organized. The surgery went smoothly and Dr. Murat visited me multiple times during my recovery. The follow-up care has been excellent. Highly recommend!"
            },
            {
              name: "Robert H.", flag: "🇮🇪", date: "July 2025",
              text: "Outstanding care from start to finish! All tests carried out thoroughly, operation went very well, scar is hardly visible and healing nicely. The aftercare support has been incredible."
            },
          ]}
        />

        <FAQSection title="UK Patients — Frequently Asked Questions" faqs={faqs} />

        <RelatedLinks
          title="Plan Your Procedure"
          links={[
            { title: "Gastric Sleeve", description: "From £2,950 all-inclusive", href: "/sleeve-gastrectomy" },
            { title: "ESG (Non-Surgical)", description: "No incisions, same-day discharge", href: "/esg" },
            { title: "Cost Guide", description: "Full 2026 price comparison", href: "/cost-of-bariatric-surgery-in-turkey" },
            { title: "ESG for UK Patients", description: "Dedicated UK ESG page", href: "/esg/uk" },
          ]}
        />

        <ConversionModule
          title="Talk to Our UK Team Today"
          text={<>Message <a href="https://drmuratustun.com" target="_blank" rel="noopener noreferrer" className="text-white underline hover:text-white/80">Dr Murat Ustun's</a> UK coordinators on WhatsApp for a free assessment, fixed GBP quote, and answers to any question — no obligation, no pressure.</>}
          buttonLabel="Chat on WhatsApp (UK)"
        />
      </div>

      <Footer />
    </div>
  );
}

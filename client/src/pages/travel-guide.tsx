import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { SEO, JsonLd, structuredData } from "@/components/seo";
import { Link } from "wouter";
import {
  MoneyHero,
  ProcedureFacts,
  ProseSection,
  Checklist,
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
    question: "How soon after bariatric surgery can I fly home?",
    answer: "For sleeve and bypass patients, flying 4-6 days after surgery is safe and routine — you'll have had 2-3 monitored nights in hospital and 1-2 recovery nights at the hotel, with a final surgical review before departure. ESG and balloon patients can usually fly within 2-3 days. We schedule your return flight date with you before you ever book it."
  },
  {
    question: "Should I bring someone with me?",
    answer: "You don't have to — many patients travel alone and our coordinators, drivers and nurses look after everything — but a companion makes the trip more comfortable. Companions stay free in your hotel room in our packages, and hospital rooms accommodate an overnight guest. If you come alone, our team checks on you daily at the hotel."
  },
  {
    question: "What happens when I land at Istanbul Airport?",
    answer: "A VIP driver meets you in arrivals holding your name, takes your luggage and drives you directly to the hotel or hospital depending on your schedule. All transfers — airport, hotel, hospital, and back — are included, so you never need a taxi or public transport."
  },
  {
    question: "What should I pack for bariatric surgery abroad?",
    answer: "Essentials: passport (valid 150+ days), comfortable loose clothing, slip-on shoes, chapstick, any regular medications in original packaging, a small pillow for the flight home (hugging it eases coughing and seatbelt pressure), and an empty water bottle for sipping. We send a full packing checklist when you book."
  },
  {
    question: "Is Istanbul safe for medical travel?",
    answer: "Istanbul hosts over a million international medical travellers each year and the districts around Liv Hospital are modern, safe and used to international patients. You'll be accompanied by our drivers and coordinators for every scheduled movement, and the team is reachable on WhatsApp 24/7 throughout your stay."
  },
  {
    question: "What if I have a problem after I fly home?",
    answer: "You keep direct WhatsApp access to the clinical team — send a message or photos any time and you'll get a same-day response. Relaxation and Luxury packages include 12 months of UK-registered dietitian follow-up, and UK patients have in-person care support in 8 locations. For anything urgent, we coordinate with local services and your GP."
  },
];

export default function TravelGuide() {
  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="Bariatric Surgery in Istanbul: Complete Travel Guide — Timeline, Airport, Hotel, Flying Home"
        description="Day-by-day travel guide for weight loss surgery in Istanbul: what happens at the airport, hospital and hotel, when you can fly home, packing list and companion tips."
        keywords="bariatric surgery turkey travel guide, gastric sleeve istanbul what to expect, flying after bariatric surgery, weight loss surgery abroad timeline, istanbul medical travel"
        url="/bariatric-surgery-travel-guide"
      />
      <JsonLd data={structuredData.createBreadcrumb([
        { name: "Home", url: "/" },
        { name: "Treatments", url: "/treatments" },
        { name: "Bariatric Surgery Travel Guide", url: "/bariatric-surgery-travel-guide" },
      ])} />
      <Navbar />
      <MoneyHero
        eyebrow="Travel & Logistics Guide"
        title="Your Trip to Istanbul, Day by Day"
        subtitle="From the moment you land to the moment you're home — every transfer, test, hospital night and hotel stay, planned for you. This is exactly what your week looks like."
        stats={[
          { value: "4–6", label: "Nights in Istanbul (surgery)" },
          { value: "2–3", label: "Nights for ESG / balloon" },
          { value: "24/7", label: "WhatsApp team access" },
        ]}
      />

      <div>
        <ProcedureFacts
          title="Trip Logistics at a Glance"
          facts={[
            { label: "Airport pick-up", value: "VIP, included" },
            { label: "Hotel", value: "Radisson, included" },
            { label: "Companion", value: "Stays free" },
            { label: "Translator", value: "Provided throughout" },
          ]}
        />

        <ProseSection title="The Day-by-Day Timeline (Sleeve & Bypass)">
          <ol className="list-decimal pl-6 space-y-4">
            <li><strong>Day 1 — Arrival & tests.</strong> VIP driver meets you at Istanbul Airport and takes you to the hospital. Blood tests, ECG, chest X-ray, abdominal ultrasound, anaesthesia review and your consultation with Dr Ustun all happen the same afternoon. You sleep at the hotel (or hospital if surgery is early next morning).</li>
            <li><strong>Day 2 — Surgery day.</strong> The operation takes about an hour. You wake in your private room; nurses have you walking the corridor the same evening — the single best thing for recovery.</li>
            <li><strong>Days 3–4 — Hospital recovery.</strong> Leak test, transition to clear liquids, daily visits from Dr Ustun and the dietitian. Most patients describe discomfort, not pain — managed with routine medication.</li>
            <li><strong>Days 4–5 — Hotel recovery.</strong> Discharge to the Radisson with your medication pack. You'll walk short distances, sip fluids on schedule, and the team checks in daily.</li>
            <li><strong>Day 5–6 — Final review & fly home.</strong> Closing check-up, your take-home protocol and supplements, then a transfer to the airport. An aisle seat and regular walks during the flight are all you need.</li>
          </ol>
          <p>
            Having <Link href="/esg" className="text-primary hover:underline">ESG</Link> or a <Link href="/gastric-balloon" className="text-primary hover:underline">gastric balloon</Link> instead? Your version is shorter: procedure on day 1–2, discharge same day or next morning, fly home from day 2–3.
          </p>
          <InlineCTA label="Get My Personal Trip Plan" />
        </ProseSection>

        <Checklist
          title="Packing List — What Patients Wish They'd Brought"
          background="slate"
          items={[
            "Passport valid 150+ days (UK citizens need no visa)",
            "Loose, front-opening clothes and slip-on shoes",
            "Regular medications in original packaging",
            "Small pillow — hugging it eases the flight home",
            "Chapstick and travel-size toiletries",
            "Entertainment for hospital downtime (charger + long cable!)",
            "An empty water bottle for scheduled sipping",
            "Comfortable expectations: this is recovery, not sightseeing",
          ]}
        />

        <ExpertPOV title="What UK Patients Underestimate About Recovery Days 3–10">
          <p>
            Days 1 and 2 surprise nobody — you expect to feel operated on, and you are in hospital where everything is managed. The days my UK patients consistently underestimate are <strong>3 through 10</strong>, which is precisely when most of them fly home and re-enter normal life. Day 3 to 5 brings what I call the gas-pain detour: laparoscopic CO2 tracking to the left shoulder, which frightens patients who expect pain at the incision sites, not in their shoulder. Walking clears it; sitting still on a sofa — or an aeroplane — does not, which is why I am strict about in-flight walking every 45 minutes.
          </p>
          <p>
            Around day 4 to 7 comes the emotional dip almost nobody is warned about elsewhere: hormone shifts from rapid fat mobilisation, low calories, and the anticlimax after months of build-up produce a flat, tearful, "what have I done?" window. It passes — reliably, within days — but patients who don't know it is coming interpret it as regret. It is chemistry, not regret.
          </p>
          <p>
            The practical trap is <strong>hydration</strong>. A stomach that holds 100 ml cannot catch up after a dehydrated day, and days 5–10 back in the UK — cold weather, back at the school run, sipping forgotten — is when I see readmissions for fluids, not surgical complications. My rule: a bottle in your hand all day, 60–80 ml every 15 minutes, and headache or dark urine means stop everything and sip. Patients who treat drinking as their full-time job for the first fortnight almost never call me with problems.
          </p>
        </ExpertPOV>

        <ProseSection title="Flying Home Safely: The Return-to-Fly Rules" tone="white">
          <p>Air travel after bariatric surgery is safe when timed properly. Our standard clearances:</p>
          <ul className="list-disc pl-6 space-y-3">
            <li><strong>Sleeve / bypass / revision:</strong> fly from day 4–6, after your final surgical review</li>
            <li><strong>ESG:</strong> fly from day 2–3</li>
            <li><strong>Gastric balloon:</strong> fly from day 1–2</li>
          </ul>
          <p>
            On the flight: choose an aisle seat, walk every 45–60 minutes, sip fluids constantly, and wear the compression stockings we provide — standard clot prevention after any operation. Long-haul patients (US, Australia) may be advised to stay one extra night; we plan this with you before you book flights.
          </p>
        </ProseSection>

        <ProseSection title="Coming Alone vs Bringing a Companion" tone="slate">
          <p>
            Roughly half of our international patients travel alone — the package is designed for it, with every transfer arranged, English-speaking staff, a translator at every medical step, and daily hotel check-ins. If you bring a companion, they stay free in your hotel room, can stay overnight at the hospital, and Istanbul offers them plenty to do during your procedure day. Either way, you are never left to figure something out by yourself in a foreign city.
          </p>
        </ProseSection>

        <SurgeonProof
          title="Logistics Are Part of Safety"
          subtitle="Smooth transfers and structured recovery days aren't luxury — they're how complications get spotted early and recoveries stay on track."
        />

        <FAQSection title="Travel — Your Questions Answered" faqs={faqs} />

        <RelatedLinks
          title="Plan Your Procedure"
          links={[
            { title: "Guide for UK Patients", description: "Fixed GBP prices & UK aftercare in 8 locations", href: "/bariatric-surgery-for-uk-patients" },
            { title: "Cost Guide", description: "All-inclusive 2026 prices vs UK, US & EU", href: "/cost-of-bariatric-surgery-in-turkey" },
            { title: "Gastric Sleeve", description: "The most chosen procedure — from £2,950", href: "/sleeve-gastrectomy" },
            { title: "ESG (Non-Surgical)", description: "Shortest trip: 2–3 days — from £4,950", href: "/esg" },
          ]}
        />

        <ConversionModule
          title="Get Your Personal Trip Plan"
          text="Tell us your procedure of interest and preferred dates on WhatsApp — you'll receive a day-by-day plan, flight guidance and a fixed all-inclusive quote within 24 hours."
          buttonLabel="Plan My Trip Free"
        />
      </div>

      <Footer />
      <StickyCTA />
    </div>
  );
}

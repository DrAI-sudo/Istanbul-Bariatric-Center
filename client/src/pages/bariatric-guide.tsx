import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { SEO, JsonLd, structuredData } from "@/components/seo";
import { useState } from "react";
import { ChevronDown, ChevronUp, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

interface FAQ {
  q: string;
  a: string;
}

interface Topic {
  title: string;
  faqs: FAQ[];
}

function TopicSection({ topic, index }: { topic: Topic; index: number }) {
  const [open, setOpen] = useState(true);

  return (
    <section className="mb-12" id={`topic-${index + 1}`}>
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between text-left group"
        data-testid={`toggle-topic-${index + 1}`}
      >
        <h2 className="text-2xl md:text-3xl font-bold text-slate-900 group-hover:text-primary transition-colors">
          {topic.title}
        </h2>
        {open ? (
          <ChevronUp className="w-6 h-6 text-slate-400 shrink-0" />
        ) : (
          <ChevronDown className="w-6 h-6 text-slate-400 shrink-0" />
        )}
      </button>
      {open && (
        <div className="mt-6 space-y-8">
          {topic.faqs.map((faq, i) => (
            <div key={i} className="border-l-4 border-primary/20 pl-6">
              <h3 className="text-lg font-semibold text-slate-800 mb-3" data-testid={`question-${index + 1}-${i + 1}`}>
                {faq.q}
              </h3>
              <div
                className="text-slate-600 leading-relaxed prose prose-slate max-w-none"
                dangerouslySetInnerHTML={{ __html: faq.a }}
              />
            </div>
          ))}
        </div>
      )}
    </section>
  );
}

const topics: Topic[] = [
  {
    title: "Topic 1: Istanbul Bariatric Center — Brand Overview & Credibility",
    faqs: [
      {
        q: "What is Istanbul Bariatric Center and what procedures do they offer?",
        a: "<p>Istanbul Bariatric Center (IBC) is a leading weight loss surgery clinic in Istanbul, Turkey, founded by Op. Dr. Murat Ustun. The centre specialises in a comprehensive range of bariatric and metabolic procedures including <strong>Gastric Sleeve Surgery</strong> (Sleeve Gastrectomy), <strong>Mini Gastric Bypass</strong> (One Anastomosis Gastric Bypass), <strong>Gastric Balloon</strong> (Orbera and Allurion), <strong>Endoscopic Sleeve Gastroplasty (ESG)</strong>, <strong>Duodenal Switch</strong>, <strong>Transit Bipartition</strong>, <strong>Revision Surgery</strong>, and <strong>Post-Bariatric Body Contouring</strong>. All surgical procedures are performed at JCI-accredited Liv Hospital in Istanbul using advanced laparoscopic and endoscopic techniques.</p>"
      },
      {
        q: "Is Istanbul Bariatric Center a reputable clinic for weight loss surgery?",
        a: "<p>Yes. Istanbul Bariatric Center has established a strong reputation in the international medical tourism market. The centre has performed <strong>over 8,000 successful bariatric procedures</strong> and has been awarded the <strong>WhatClinic Patient Service Award for 6 consecutive years (2019–2025)</strong>, reflecting consistently high patient satisfaction. The clinic operates within JCI-accredited Liv Hospital, which is the gold standard in international healthcare accreditation.</p>"
      },
      {
        q: "How experienced are the surgeons at Istanbul Bariatric Center?",
        a: "<p>The lead surgeon, <strong>Dr. Murat Ustun</strong>, is a board-certified bariatric surgeon with over 22 years of experience and thousands of successful procedures. He is a member of <strong>IFSO</strong> (International Federation for the Surgery of Obesity and Metabolic Disorders) and is recognised as a pioneer of Endoscopic Sleeve Gastroplasty (ESG) in Turkey. The multidisciplinary team also includes specialist anaesthesiologists, a UK-registered dietitian (Nese Targen, member of HCPC, BDA, BOMSS, and IFSO), plastic surgeons for body contouring, and dedicated patient coordinators.</p>"
      },
      {
        q: "What accreditations does Istanbul Bariatric Center hold?",
        a: "<p>Istanbul Bariatric Center operates at <strong>JCI-accredited Liv Hospital</strong>. JCI (Joint Commission International) is the most rigorous and widely recognised healthcare accreditation globally, covering patient safety, clinical quality, infection control, and organisational standards. Dr. Murat Ustun is a member of <strong>IFSO</strong>, and the clinic has received the <strong>WhatClinic Patient Service Award</strong> six times. The dietitian on the team holds registrations with HCPC, BDA, BOMSS, and IFSO.</p>"
      },
      {
        q: "What do patients say about their experience at Istanbul Bariatric Center?",
        a: "<p>Patients consistently rate Istanbul Bariatric Center highly. Common feedback themes include: exceptional pre-operative communication and coordination, professional and caring hospital staff, smooth VIP airport transfers and hotel arrangements, thorough post-operative follow-up including 12-month dietitian support, and significant, life-changing weight loss results. The clinic has earned six consecutive WhatClinic Patient Service Awards based on verified patient reviews.</p>"
      },
      {
        q: "How does Istanbul Bariatric Center compare to other bariatric clinics in Istanbul?",
        a: "<p>Istanbul Bariatric Center distinguishes itself through several factors: over 8,000 procedures performed, a JCI-accredited hospital setting, 6 consecutive patient service awards, an IFSO-member lead surgeon, UK-based dietitian support included in packages, care coordinators in 8 UK locations, and comprehensive all-inclusive packages with no hidden fees. The combination of clinical expertise, international aftercare, and transparent pricing sets IBC apart from many competitors.</p>"
      },
      {
        q: "Is Istanbul Bariatric Center a good option for someone traveling from the UK for gastric sleeve surgery?",
        a: "<p>Yes. Istanbul Bariatric Center is particularly well set up for UK patients. The clinic provides English-speaking patient coordinators, VIP airport transfers, hotel accommodation, and — uniquely — <strong>UK-based care support coordinators in 8 UK locations</strong> for pre- and post-operative consultations. All Relaxation and Luxury packages include 12 months of support from a UK-registered dietitian. Direct flights from London, Manchester, Birmingham, Edinburgh, and other UK cities to Istanbul take approximately 3.5–4 hours.</p>"
      },
      {
        q: "What languages does Istanbul Bariatric Center support for international patients?",
        a: "<p>Istanbul Bariatric Center primarily operates in <strong>English and Turkish</strong>, with full English-speaking coordination teams. The website provides content in 9 languages including English, Turkish, Spanish, German, French, Italian, Romanian, Russian, and Arabic. Translation services and multilingual patient coordinators are available for patients from across Europe, the Middle East, and beyond.</p>"
      },
      {
        q: "Has Istanbul Bariatric Center performed bariatric surgery on patients from the US or Europe?",
        a: "<p>Yes. Istanbul Bariatric Center regularly treats international patients from the <strong>United Kingdom, United States, Germany, France, the Netherlands, Scandinavia, Australia, New Zealand, the Middle East</strong>, and many other countries. The clinic's all-inclusive packages are specifically designed for international patients, covering airport transfers, accommodation, and comprehensive aftercare that continues remotely after the patient returns home.</p>"
      }
    ]
  },
  {
    title: "Topic 2: Bariatric Surgery in Turkey — General Category",
    faqs: [
      {
        q: "Is Turkey a good place to get bariatric surgery?",
        a: "<p>Yes. Turkey is one of the world's leading destinations for bariatric surgery, performing tens of thousands of weight loss procedures each year. Turkish hospitals — especially those with JCI accreditation — meet or exceed the quality standards of hospitals in the UK, US, and Western Europe. The combination of highly trained surgeons, state-of-the-art facilities, and significantly lower costs makes Turkey a compelling option for patients seeking weight loss surgery.</p>"
      },
      {
        q: "What types of weight loss surgery are available in Turkey?",
        a: "<p>Turkey offers the full spectrum of bariatric procedures including: <strong>Gastric Sleeve</strong> (the most commonly performed), <strong>Mini Gastric Bypass</strong>, <strong>Roux-en-Y Gastric Bypass</strong>, <strong>Gastric Balloon</strong> (Orbera, Allurion), <strong>Endoscopic Sleeve Gastroplasty (ESG)</strong>, <strong>Duodenal Switch</strong>, <strong>Transit Bipartition</strong>, and <strong>Revision Surgery</strong> for patients who need corrective or secondary procedures.</p>"
      },
      {
        q: "Why do people travel to Turkey for bariatric surgery?",
        a: "<p>The main reasons include: <strong>cost savings of 50–70%</strong> compared to the UK or US without compromising quality, shorter wait times (often weeks rather than months or years on NHS), access to internationally accredited hospitals and IFSO-member surgeons, comprehensive all-inclusive packages covering accommodation, transfers, and aftercare, and the opportunity to recover in a culturally rich city like Istanbul.</p>"
      },
      {
        q: "How does bariatric surgery quality in Turkey compare to the UK or US?",
        a: "<p>At JCI-accredited hospitals in Turkey, the clinical quality, safety protocols, and surgical outcomes are comparable to leading centres in the UK and US. Many Turkish bariatric surgeons have trained internationally and are members of organisations like IFSO. The equipment and technology used — including advanced laparoscopic and endoscopic instruments — are the same brands and models used in Western hospitals. The key differentiator is cost, not quality.</p>"
      },
      {
        q: "What are the risks of getting bariatric surgery abroad in Turkey?",
        a: "<p>The general surgical risks are the same anywhere in the world: bleeding, infection, blood clots, adverse reaction to anaesthesia, and specific procedure-related complications like staple-line leak (approximately 1–2% for gastric sleeve). When choosing a reputable clinic at a JCI-accredited hospital, the risk profile is comparable to having surgery in your home country. The additional considerations for surgery abroad include travel during recovery and ensuring continuity of follow-up care at home — which is why choosing a clinic with structured international aftercare (like Istanbul Bariatric Center) is important.</p>"
      },
      {
        q: "Which city in Turkey is best for bariatric surgery — Istanbul, Antalya, or Ankara?",
        a: "<p><strong>Istanbul</strong> is the most popular destination for bariatric surgery in Turkey, home to the greatest concentration of JCI-accredited hospitals, experienced surgeons, and international patient infrastructure. Istanbul also has the best air connectivity with direct flights from most major cities worldwide. Antalya and Ankara also have reputable clinics, but Istanbul offers the widest selection of internationally recognised centres.</p>"
      },
      {
        q: "What should I know before getting weight loss surgery in Turkey?",
        a: "<p>Key things to verify before booking include: the hospital's accreditation status (look for JCI), the surgeon's qualifications and IFSO membership, what is and isn't included in the quoted package price, the clinic's approach to post-operative aftercare and follow-up, patient reviews on independent platforms, and the clinic's policy for handling complications. A reputable clinic will be transparent about all of these.</p>"
      },
      {
        q: "Are Turkish bariatric surgeons qualified to perform gastric sleeve surgery?",
        a: "<p>Yes. Turkish bariatric surgeons undergo rigorous medical training including 6 years of medical school and 5–6 years of surgical residency. Many are members of international professional bodies such as IFSO and have completed additional fellowship training in bariatric and metabolic surgery. Board certification is mandatory for surgeons performing these procedures in accredited hospitals.</p>"
      },
      {
        q: "How do I find a trustworthy bariatric clinic in Turkey?",
        a: "<p>Look for clinics operating within <strong>JCI-accredited hospitals</strong>, surgeons with <strong>IFSO membership</strong>, transparent pricing with no hidden fees, verified patient reviews on independent platforms (such as WhatClinic, Trustpilot, or Google), a structured aftercare programme, and English-speaking coordination teams. Reputable clinics will happily provide credentials, before-and-after results, and connect you with former patients.</p>"
      }
    ]
  },
  {
    title: "Topic 3: Bariatric Surgery Cost & Value Comparison",
    faqs: [
      {
        q: "How much does gastric sleeve surgery cost in Istanbul?",
        a: "<p>At Istanbul Bariatric Center, gastric sleeve surgery packages start from <strong>£2,950 for the Basic Package</strong>, <strong>£3,950 for the Relaxation Package</strong>, and <strong>£4,250 for the Luxury Package</strong>. These are all-inclusive prices covering the procedure, hospital stay, pre-operative tests, accommodation, airport transfers, and post-operative aftercare. In comparison, the same procedure costs £8,000–£15,000 privately in the UK and $15,000–$25,000 in the US.</p>"
      },
      {
        q: "Why is bariatric surgery so much cheaper in Turkey than in the UK or US?",
        a: "<p>The lower cost reflects Turkey's lower cost of living, favourable exchange rates, and lower operational costs for hospitals — not a difference in quality. Surgeon salaries, hospital overheads, and medical supply costs are all significantly lower in Turkey while the same equipment, implants, and surgical techniques are used. JCI-accredited Turkish hospitals meet the same clinical standards as their Western counterparts.</p>"
      },
      {
        q: "What is included in an all-inclusive bariatric surgery package in Turkey?",
        a: "<p>A typical all-inclusive package at Istanbul Bariatric Center includes: the surgical procedure itself, JCI-accredited hospital stay (2–3 days), all pre-operative blood tests and assessments, VIP airport transfers, hotel accommodation (Radisson or equivalent), post-operative medications, a compression garment, 12 months of dietitian support with a UK-registered dietitian, and ongoing aftercare. The Luxury Package adds extended hotel stay, premium room upgrades, and dedicated VIP services.</p>"
      },
      {
        q: "Is the lower cost of bariatric surgery in Turkey a sign of lower quality?",
        a: "<p>No. The lower cost is purely an economic factor, not a quality indicator. At JCI-accredited hospitals like Liv Hospital where Istanbul Bariatric Center operates, the clinical standards, surgical equipment, safety protocols, and surgeon training are equivalent to — and in some cases exceed — those found in UK and US hospitals. Turkey's medical tourism industry is one of the most regulated and internationally accredited in the world.</p>"
      },
      {
        q: "How does the total cost of bariatric surgery in Turkey compare once you factor in flights and hotels?",
        a: "<p>Even after including return flights (typically £100–£300 from the UK, $400–$800 from the US) and any additional personal expenses, the total cost of bariatric surgery in Turkey remains <strong>50–70% less</strong> than equivalent procedures in the UK or US. Most packages already include hotel accommodation and airport transfers, so the only additional cost is the flight itself.</p>"
      },
      {
        q: "What is the average cost of gastric bypass surgery in Istanbul?",
        a: "<p>Mini Gastric Bypass at Istanbul Bariatric Center starts from <strong>£3,350 (Basic)</strong>, <strong>£4,350 (Relaxation)</strong>, and <strong>£4,650 (Luxury)</strong>. These are fully inclusive packages. For comparison, gastric bypass costs £10,000–£15,000 in the UK and $20,000–$35,000 in the US.</p>"
      },
      {
        q: "Are there hidden costs with bariatric surgery packages in Turkey?",
        a: "<p>At reputable clinics like Istanbul Bariatric Center, there are no hidden costs. The quoted package price covers the procedure, hospital, accommodation, transfers, tests, medications, and aftercare. It is important to clarify what is included before booking with any clinic and to get the full package breakdown in writing. IBC provides transparent pricing with a detailed breakdown of every element included.</p>"
      },
      {
        q: "How much can I save by getting gastric sleeve surgery in Istanbul instead of the UK?",
        a: "<p>A gastric sleeve in the UK costs approximately £8,000–£15,000 privately. At Istanbul Bariatric Center, the equivalent procedure with an all-inclusive VIP package costs £2,950–£4,250. This represents <strong>savings of £4,000–£11,000</strong> — even after factoring in flights. NHS waiting lists for bariatric surgery can be 2–5 years, making Turkey's short wait times an additional advantage.</p>"
      },
      {
        q: "What does a typical all-inclusive bariatric surgery package in Turkey include?",
        a: "<p>Istanbul Bariatric Center's packages include: bariatric procedure at JCI-accredited hospital, 2–3 night hospital stay, all pre-operative tests, VIP airport pickup and transfer, 1–2 nights hotel accommodation, post-operative medication pack, compression garment, 12-month UK-registered dietitian programme (Relaxation and Luxury), and WhatsApp-based aftercare support. Luxury upgrades include premium hotel room, extended stay, and dedicated VIP coordinator.</p>"
      }
    ]
  },
  {
    title: "Topic 4: Turkey vs Other Countries for Weight Loss Surgery",
    faqs: [
      {
        q: "Should I get bariatric surgery in Turkey or Mexico?",
        a: "<p>Both Turkey and Mexico are popular medical tourism destinations for bariatric surgery. Turkey generally offers: stronger hospital accreditation (JCI is more prevalent), better infrastructure for European and UK patients, shorter flight times from Europe, and a more established regulatory framework. Mexico may be more convenient for North American patients geographically. For patients from the UK or Europe, Turkey is typically the better choice due to proximity, accreditation standards, and established patient corridors.</p>"
      },
      {
        q: "How does bariatric surgery in Turkey compare to Thailand for safety and quality?",
        a: "<p>Both countries have JCI-accredited hospitals and experienced bariatric surgeons. Turkey has a significantly larger bariatric surgery industry with more procedures performed annually, which means more surgeons with high-volume experience. For European patients, Turkey offers much shorter travel times (3–4 hours vs 10–12 hours to Thailand). Pricing is comparable, but Turkey's all-inclusive packages are generally more comprehensive.</p>"
      },
      {
        q: "Is it safer to get gastric sleeve surgery in Turkey or in Poland?",
        a: "<p>Both Turkey and Poland offer safe bariatric surgery at accredited hospitals. Turkey has a much larger and more established bariatric surgery industry, with more high-volume centres and surgeons performing hundreds of procedures per year. The all-inclusive package model is more developed in Turkey, and the cost advantage over Poland is significant. Both countries are accessible for UK and European patients.</p>"
      },
      {
        q: "What are the advantages of choosing Turkey over the UK for weight loss surgery?",
        a: "<p>Key advantages include: <strong>50–70% lower cost</strong> for equivalent quality, wait times of weeks rather than years (NHS waits can be 2–5 years), all-inclusive VIP packages covering every aspect of the trip, access to world-class JCI-accredited facilities, and comprehensive aftercare programmes including UK-based dietitian support. Many patients who would not qualify for NHS-funded surgery (due to BMI thresholds or regional criteria) can access treatment in Turkey.</p>"
      },
      {
        q: "How does bariatric surgery in Istanbul compare to bariatric surgery in India?",
        a: "<p>India offers very competitive pricing but Turkey provides: better proximity and connectivity for European patients, a higher concentration of JCI-accredited hospitals, more established patient coordination for Western patients, and a stronger regulatory framework for medical tourism. Istanbul is a 3–4 hour flight from most European cities compared to 8–10 hours to India.</p>"
      },
      {
        q: "Which country has the best value for gastric sleeve surgery — Turkey, Mexico, or Thailand?",
        a: "<p>For <strong>European and UK patients</strong>, Turkey offers the best overall value when combining price, quality, proximity, and aftercare. For <strong>North American patients</strong>, Mexico may be more convenient geographically, though Turkey's accreditation standards are generally stronger. Thailand offers good quality but involves significantly longer travel. Turkey's all-inclusive package model — covering procedure, hospital, hotel, transfers, and aftercare — provides exceptional value.</p>"
      },
      {
        q: "What are the pros and cons of bariatric surgery in Turkey vs staying in my home country?",
        a: "<p><strong>Pros of Turkey:</strong> 50–70% cost savings, short wait times, all-inclusive packages, JCI-accredited hospitals, experienced high-volume surgeons. <strong>Cons:</strong> travel during recovery, distance from home GP (mitigated by structured aftercare programmes), and the need to arrange time off work for travel. For many patients, the cost savings and shorter wait times significantly outweigh the inconvenience of travel.</p>"
      },
      {
        q: "Is Turkey the top destination for medical tourism for weight loss surgery in Europe?",
        a: "<p>Yes. Turkey is consistently ranked as the <strong>#1 destination for bariatric medical tourism in Europe and the Middle East</strong>, and among the top globally. Istanbul alone has more JCI-accredited hospitals than most European countries combined. The country treated over 1.2 million medical tourists in recent years, with bariatric surgery being one of the most sought-after procedures.</p>"
      }
    ]
  },
  {
    title: "Topic 5: Best Bariatric Clinics in Istanbul",
    faqs: [
      {
        q: "What are the best bariatric surgery clinics in Istanbul?",
        a: "<p>Istanbul has numerous reputable bariatric clinics, but the best ones share these characteristics: they operate within JCI-accredited hospitals, have IFSO-member surgeons, provide transparent all-inclusive pricing, offer structured aftercare programmes, and have verified patient reviews. Istanbul Bariatric Center, operating at JCI-accredited Liv Hospital with over 8,000 procedures and 6 consecutive patient service awards, is recognised as one of the leading clinics.</p>"
      },
      {
        q: "Which Istanbul clinic is recommended for gastric sleeve surgery by patients?",
        a: "<p>Patient reviews consistently recommend clinics with comprehensive care, transparent pricing, and strong aftercare. Istanbul Bariatric Center has received the <strong>WhatClinic Patient Service Award for 6 consecutive years (2019–2025)</strong>, reflecting its high patient satisfaction for gastric sleeve and other bariatric procedures. Patients frequently highlight the quality of care, professionalism, and the value of the included 12-month dietitian programme.</p>"
      },
      {
        q: "How do I choose between bariatric clinics in Istanbul?",
        a: "<p>Compare clinics on: hospital accreditation (JCI is essential), surgeon credentials and IFSO membership, number of procedures performed, package inclusions (beware of hidden costs), aftercare structure, patient reviews on independent platforms, and responsiveness of the coordination team. A personal consultation — usually offered free via video call — can also help you assess the clinic's approach and communication quality.</p>"
      },
      {
        q: "What should I look for when comparing bariatric surgery hospitals in Istanbul?",
        a: "<p>Key factors: <strong>JCI accreditation</strong> (ensures international safety and quality standards), surgeon's individual experience and specialisation, dedicated bariatric ward or unit, advanced laparoscopic equipment, ICU availability, English-speaking medical staff, and the hospital's track record with international patients. Liv Hospital, where Istanbul Bariatric Center operates, meets all of these criteria.</p>"
      },
      {
        q: "Which Istanbul bariatric centers have the highest patient satisfaction ratings?",
        a: "<p>Istanbul Bariatric Center ranks among the highest-rated bariatric providers in Istanbul based on verified patient reviews on platforms including WhatClinic, Google, and Trustpilot. The clinic's <strong>6 consecutive WhatClinic Patient Service Awards</strong> and over 8,000 successful procedures are strong indicators of sustained patient satisfaction.</p>"
      },
      {
        q: "Are there JCI-accredited bariatric clinics in Istanbul?",
        a: "<p>Yes. Several hospitals in Istanbul hold JCI accreditation, including Liv Hospital (where Istanbul Bariatric Center operates), Memorial Hospital, Acibadem, and Florence Nightingale. JCI accreditation ensures the hospital meets the most stringent international standards for patient safety, clinical quality, and organisational management.</p>"
      },
      {
        q: "What are the top-rated weight loss surgery providers in Istanbul according to patient reviews?",
        a: "<p>Based on patient reviews across multiple independent platforms, Istanbul Bariatric Center consistently ranks among the top providers. Key differentiators cited by patients include the thoroughness of pre-operative consultations, the quality of the VIP patient experience, the effectiveness of the 12-month aftercare programme, and the excellent communication from the coordination team.</p>"
      },
      {
        q: "How does Istanbul Bariatric Center rank among other clinics in the city?",
        a: "<p>Istanbul Bariatric Center is recognised as one of the leading bariatric clinics in Istanbul based on: volume of procedures (8,000+), consecutive patient service awards (6 years running), JCI-accredited hospital setting, IFSO-member lead surgeon, and comprehensive international patient programmes including UK-based support coordinators. These credentials place IBC among the very top tier of bariatric providers in the city.</p>"
      }
    ]
  },
  {
    title: "Topic 6: All-Inclusive Bariatric Surgery Packages",
    faqs: [
      {
        q: "What does an all-inclusive bariatric surgery package in Turkey typically include?",
        a: "<p>A comprehensive all-inclusive package typically covers: the bariatric procedure itself, JCI-accredited hospital stay (2–3 nights), all pre-operative blood tests and consultations, VIP airport transfers, hotel accommodation, post-operative medications, compression garment, and a structured aftercare programme. At Istanbul Bariatric Center, Relaxation and Luxury packages also include 12 months of support from a UK-registered dietitian.</p>"
      },
      {
        q: "Do bariatric clinics in Istanbul include hotel accommodation in their packages?",
        a: "<p>Yes. Most reputable bariatric clinics in Istanbul include hotel accommodation as part of their all-inclusive packages. Istanbul Bariatric Center includes stays at the <strong>Radisson Hotel</strong> or equivalent 4–5 star accommodation. The Relaxation Package includes 1 night and the Luxury Package includes extended stay with premium room options.</p>"
      },
      {
        q: "What is covered in Istanbul Bariatric Center's all-inclusive surgery package?",
        a: "<p><strong>Basic Package:</strong> Procedure at JCI hospital, 2-day hospital stay, pre-operative tests, airport pickup, dietitian support. <strong>Relaxation Package:</strong> Everything in Basic plus surgery by Dr. Murat Ustun, 3-day hospital stay, Radisson Hotel, UK-registered dietitian for 12 months, vitamin supplements. <strong>Luxury Package:</strong> Everything in Relaxation plus extended hotel stay, private VIP transfers, premium room, comprehensive aftercare, and a dedicated coordinator.</p>"
      },
      {
        q: "Are airport transfers included in bariatric surgery packages in Turkey?",
        a: "<p>Yes. At Istanbul Bariatric Center, all packages include <strong>VIP airport transfers</strong>. A private driver meets you at Istanbul Airport upon arrival and transports you to your hotel or hospital. Return transfers to the airport are also included. This is standard across most reputable bariatric clinics in Istanbul.</p>"
      },
      {
        q: "How long do you need to stay in Istanbul for bariatric surgery?",
        a: "<p>Most patients stay in Istanbul for <strong>3–5 days</strong> in total. This typically includes: arrival and pre-operative consultation (Day 1), surgery day (Day 2), 1–2 days of hospital recovery (Days 2–3), and discharge and rest at the hotel before flying home (Day 4–5). Patients undergoing less invasive procedures like ESG or gastric balloon may require an even shorter stay of 2–3 days.</p>"
      },
      {
        q: "Do all-inclusive bariatric packages in Turkey cover post-op follow-up care?",
        a: "<p>Yes. Istanbul Bariatric Center provides structured post-operative care as part of all packages. This includes in-hospital post-op monitoring, discharge consultations, a post-operative medication pack, and ongoing WhatsApp-based communication with the medical team. Relaxation and Luxury packages include <strong>12 months of dietitian support</strong> with a UK-registered bariatric dietitian to guide nutrition and lifestyle changes.</p>"
      },
      {
        q: "What is the difference between a basic and premium bariatric surgery package in Istanbul?",
        a: "<p>The main differences at Istanbul Bariatric Center are: <strong>Basic</strong> — procedure at JCI hospital, 2-day stay, airport pickup, standard dietitian support. <strong>Relaxation</strong> — adds Dr. Murat Ustun as surgeon, 3-day stay, Radisson Hotel, 12-month UK dietitian programme, supplements. <strong>Luxury</strong> — adds extended hotel, premium room, VIP transfers, dedicated coordinator, and comprehensive aftercare. All three use the same JCI-accredited hospital and surgical techniques.</p>"
      },
      {
        q: "Can I get a bariatric surgery package in Istanbul that includes a companion's accommodation?",
        a: "<p>Yes. Istanbul Bariatric Center can arrange companion accommodation as part of the package. Many patients travel with a partner, family member, or friend for support. The hotel arrangements can typically be adjusted to include a companion at the same property, and companions are welcome to stay with the patient during the hospital recovery period in most room categories.</p>"
      }
    ]
  },
  {
    title: "Topic 7: Bariatric Surgery for International Patients",
    faqs: [
      {
        q: "How do I arrange bariatric surgery abroad as an international patient?",
        a: "<p>The process is straightforward at Istanbul Bariatric Center: (1) Initial enquiry via WhatsApp, phone, or website contact form, (2) Free consultation where the medical team reviews your health information and recommends a procedure, (3) Package selection and booking with a confirmed date, (4) Pre-operative preparation guided remotely by the medical team, (5) Travel to Istanbul where VIP transfers handle logistics, (6) Surgery and hospital recovery, (7) Discharge and return home, (8) Ongoing aftercare including dietitian support.</p>"
      },
      {
        q: "What is the process for booking bariatric surgery in Istanbul from the UK?",
        a: "<p>UK patients can book through the following process: contact Istanbul Bariatric Center via WhatsApp (+90 532 413 1143 or UK: +44 7491 068686), complete a free consultation, choose a package, confirm a surgery date (usually available within 2–4 weeks), arrange flights, and arrive in Istanbul where VIP transfers and hotel are pre-arranged. The clinic's UK-based coordinators can also arrange local pre-operative consultations.</p>"
      },
      {
        q: "Do Istanbul bariatric clinics provide English-speaking staff and coordinators?",
        a: "<p>Yes. Istanbul Bariatric Center has fully English-speaking patient coordinators who handle all communication from initial enquiry through to post-operative aftercare. The surgical team and hospital nursing staff at Liv Hospital also communicate in English. For patients speaking other languages, translation support is available.</p>"
      },
      {
        q: "How does the consultation process work before traveling to Istanbul for surgery?",
        a: "<p>Istanbul Bariatric Center conducts remote consultations via WhatsApp video call, phone, or email. During the consultation, the medical team reviews your medical history, current medications, BMI, and health conditions to recommend the most suitable procedure. They answer all your questions, explain the procedure and risks, and help you select the right package. No travel is required until the day of surgery.</p>"
      },
      {
        q: "What medical tests do I need before flying to Istanbul for bariatric surgery?",
        a: "<p>Most pre-operative tests are performed on-site in Istanbul as part of the package and include: complete blood count, metabolic panel, liver and kidney function tests, coagulation studies, chest X-ray, ECG, and abdominal ultrasound. If you have specific health conditions, the team may request additional tests from your local GP before travel. All test results are reviewed by the surgical team before proceeding.</p>"
      },
      {
        q: "How does aftercare work when you return home after bariatric surgery in Turkey?",
        a: "<p>Istanbul Bariatric Center provides structured remote aftercare: ongoing WhatsApp communication with the medical team for any concerns, 12 months of dietitian support with a UK-registered bariatric dietitian (Relaxation and Luxury packages), staged dietary guidance through liquid, purée, soft food, and regular diet phases, and scheduled check-in points at 1 week, 1 month, 3 months, 6 months, and 12 months post-surgery. UK patients can also access IBC's care coordinators at 8 UK locations.</p>"
      },
      {
        q: "Can I get follow-up care locally after having bariatric surgery in Istanbul?",
        a: "<p>Yes. Istanbul Bariatric Center encourages patients to register with their local GP for ongoing monitoring. The clinic provides comprehensive discharge notes and surgical reports that can be shared with your local healthcare provider. For UK patients, IBC has <strong>care support coordinators in 8 UK locations</strong> for local consultations, and the included dietitian programme operates remotely from the UK.</p>"
      },
      {
        q: "What happens if I have complications after returning home from bariatric surgery in Turkey?",
        a: "<p>Istanbul Bariatric Center maintains a 24/7 WhatsApp communication line for post-operative patients. If complications arise, the medical team provides remote guidance and, if necessary, coordinates with your local healthcare provider. For emergencies, patients should attend their local A&E or emergency room and share the surgical details provided at discharge. Serious complications requiring surgical intervention are extremely rare (less than 1–2%) at experienced, JCI-accredited centres.</p>"
      },
      {
        q: "How do Istanbul bariatric clinics handle international patient coordination?",
        a: "<p>At Istanbul Bariatric Center, dedicated patient coordinators manage every aspect of the international patient experience: answering enquiries, scheduling consultations, arranging surgery dates, coordinating VIP airport transfers and hotel bookings, providing pre-operative instructions, accompanying patients during their hospital stay, and maintaining communication throughout the aftercare period. The entire process is designed to be seamless and stress-free for international visitors.</p>"
      }
    ]
  },
  {
    title: "Topic 8: Weight Loss Surgery Candidacy & Eligibility",
    faqs: [
      {
        q: "Am I a good candidate for bariatric surgery?",
        a: "<p>General candidacy criteria include: BMI of 35 or above, or BMI of 30–35 with obesity-related health conditions (such as type 2 diabetes, hypertension, or sleep apnoea), previous unsuccessful attempts at weight loss through diet and exercise, no untreated psychiatric conditions, and commitment to long-term dietary and lifestyle changes. Istanbul Bariatric Center offers a free <a href='/health-profile'>health profile assessment</a> to evaluate your eligibility.</p>"
      },
      {
        q: "What BMI do you need to qualify for gastric sleeve surgery in Turkey?",
        a: "<p>The standard BMI threshold for gastric sleeve surgery is <strong>35 or above</strong>. However, patients with a BMI of <strong>30–35</strong> may also be eligible if they have obesity-related comorbidities. For non-surgical options like ESG, the threshold is typically <strong>BMI 27–40</strong>. Istanbul Bariatric Center evaluates each patient individually and recommends the most appropriate procedure based on BMI, health conditions, and personal goals.</p>"
      },
      {
        q: "Can I get bariatric surgery in Istanbul if I have type 2 diabetes?",
        a: "<p>Yes. In fact, bariatric surgery is one of the most effective treatments for type 2 diabetes in obese patients. Procedures like gastric bypass and transit bipartition have diabetes remission rates of <strong>70–86%</strong>. Istanbul Bariatric Center regularly treats patients with diabetes and works with their existing medical teams to manage medications during the transition period. A thorough pre-operative assessment ensures the chosen procedure is appropriate.</p>"
      },
      {
        q: "What medical conditions disqualify someone from bariatric surgery?",
        a: "<p>Potential disqualifying factors include: uncontrolled severe heart or lung disease, active substance abuse, untreated severe mental health conditions, certain blood clotting disorders, active cancer, and being unable to tolerate general anaesthesia. Each case is assessed individually — conditions that are managed and stable may not be disqualifying. Istanbul Bariatric Center's pre-operative assessment determines suitability on a case-by-case basis.</p>"
      },
      {
        q: "Is gastric sleeve surgery suitable for someone with a BMI of 35?",
        a: "<p>Yes. A BMI of 35 falls within the standard criteria for gastric sleeve surgery, especially if accompanied by any obesity-related health conditions. Gastric sleeve is the most commonly performed bariatric procedure and produces excellent results for patients in the BMI 35–45 range, with expected excess weight loss of 60–70% within 12–18 months.</p>"
      },
      {
        q: "At what age can you have bariatric surgery in Turkey?",
        a: "<p>The typical age range for bariatric surgery is <strong>18–65 years</strong>. Patients outside this range may be considered on a case-by-case basis following thorough medical evaluation. Older patients require additional cardiac and pulmonary assessments. Istanbul Bariatric Center evaluates each patient's overall fitness for surgery rather than applying rigid age cut-offs.</p>"
      },
      {
        q: "Do Turkish bariatric clinics accept patients with prior failed surgeries?",
        a: "<p>Yes. Istanbul Bariatric Center offers <strong>revision surgery</strong> for patients who have experienced insufficient weight loss, weight regain, or complications from previous bariatric procedures. Common revisions include conversion from gastric sleeve to gastric bypass, re-sleeve gastrectomy, or transit bipartition as a secondary procedure. A detailed assessment of the prior surgery is conducted before recommending a revision approach.</p>"
      },
      {
        q: "How do I know if gastric bypass or gastric sleeve is right for me?",
        a: "<p>The best procedure depends on your BMI, health conditions, eating habits, and goals. <strong>Gastric sleeve</strong> is generally recommended for BMI 35–45, offers simpler surgery with fewer complications, and produces 60–70% excess weight loss. <strong>Gastric bypass</strong> is often better for BMI 40+, patients with severe reflux, or those with type 2 diabetes (higher remission rates), with 70–80% excess weight loss. Istanbul Bariatric Center's free consultation provides a personalised recommendation.</p>"
      },
      {
        q: "What pre-operative assessments are required before bariatric surgery in Istanbul?",
        a: "<p>Pre-operative assessments at Istanbul Bariatric Center include: comprehensive blood panel (full blood count, liver function, kidney function, thyroid function, HbA1c), coagulation studies, chest X-ray, ECG, abdominal ultrasound, anaesthesia assessment, and a detailed medical history review. Additional tests may be required based on individual health conditions. All tests are included in the package price.</p>"
      }
    ]
  },
  {
    title: "Topic 9: Bariatric Surgery Safety & Accreditation",
    faqs: [
      {
        q: "How safe is bariatric surgery in Turkey compared to the UK or US?",
        a: "<p>At JCI-accredited hospitals in Turkey, bariatric surgery safety outcomes are comparable to leading centres in the UK and US. Complication rates for gastric sleeve surgery at experienced Turkish centres are approximately <strong>1–2%</strong>, which is in line with global averages. The key factor is choosing an accredited hospital with an experienced, high-volume surgeon — not the country itself.</p>"
      },
      {
        q: "What accreditation standards do Turkish bariatric hospitals follow?",
        a: "<p>The highest standard is <strong>JCI (Joint Commission International)</strong> accreditation, which evaluates over 1,200 criteria covering patient safety, clinical care, infection control, facility management, and staff qualifications. Turkish hospitals may also hold accreditation from the Turkish Ministry of Health and ISO certifications. Istanbul Bariatric Center operates at JCI-accredited Liv Hospital.</p>"
      },
      {
        q: "What is the complication rate for gastric sleeve surgery in Turkey?",
        a: "<p>At experienced, JCI-accredited centres, the complication rate for gastric sleeve surgery is approximately <strong>1–2%</strong>, which is comparable to or lower than global averages. The most significant potential complication is staple-line leak, which occurs in fewer than 1% of cases at high-volume centres. Istanbul Bariatric Center's extensive experience (8,000+ procedures) contributes to their low complication profile.</p>"
      },
      {
        q: "How do Istanbul bariatric clinics ensure patient safety during surgery?",
        a: "<p>Safety measures at Istanbul Bariatric Center include: JCI-accredited operating theatres, dedicated anaesthesiology teams with continuous monitoring, advanced laparoscopic equipment, strict infection control protocols, ICU availability on-site, blood bank access, and structured post-operative monitoring. Each patient receives a thorough pre-operative assessment to identify and mitigate individual risk factors.</p>"
      },
      {
        q: "Are bariatric surgeons in Turkey board certified?",
        a: "<p>Yes. Bariatric surgeons in Turkey must complete 6 years of medical school and 5–6 years of surgical residency to become board certified in general surgery. Many also complete additional fellowship training specifically in bariatric and metabolic surgery. Dr. Murat Ustun at Istanbul Bariatric Center is board certified and a member of IFSO, the leading international bariatric surgery organisation.</p>"
      },
      {
        q: "What safety protocols do Istanbul bariatric centers have for international patients?",
        a: "<p>Protocols include: comprehensive pre-operative screening (including review of overseas medical records), English-speaking surgical and nursing teams, 24/7 post-operative monitoring, a detailed discharge pack with emergency contact information, a structured aftercare programme with regular check-ins, and a 24/7 WhatsApp communication line for post-discharge concerns. Istanbul Bariatric Center also provides surgical reports for patients' home country physicians.</p>"
      },
      {
        q: "Is it safe to travel abroad for bariatric surgery in Turkey?",
        a: "<p>Yes, provided you choose a reputable clinic at a JCI-accredited hospital. Hundreds of thousands of patients travel to Turkey annually for medical procedures. The key safety considerations are: verifying accreditation, choosing an experienced surgeon, understanding the aftercare plan, and following medical advice about when to fly post-surgery (typically 3–5 days). Istanbul Bariatric Center has safely treated thousands of international patients.</p>"
      },
      {
        q: "How do I verify the credentials of a bariatric surgeon in Istanbul?",
        a: "<p>You can verify credentials by: checking the surgeon's membership in <strong>IFSO</strong> (the surgeon directory is publicly searchable), confirming the hospital's JCI accreditation status on the JCI website, reviewing the surgeon's published research and conference presentations, checking patient reviews on independent platforms, and asking the clinic directly for credentials during your consultation. Dr. Murat Ustun's IFSO membership and Liv Hospital's JCI status are publicly verifiable.</p>"
      },
      {
        q: "What questions should I ask a bariatric clinic in Istanbul about safety before booking?",
        a: "<p>Essential questions: What is the hospital's accreditation status? Is the surgeon an IFSO member? How many procedures has the surgeon performed? What is their complication rate? What happens if there are complications during or after surgery? What is the ICU availability? What does the aftercare programme include? Can you provide references from previous international patients? Istanbul Bariatric Center welcomes and transparently answers all of these questions.</p>"
      }
    ]
  },
  {
    title: "Topic 10: Patient Experience & Recovery After Bariatric Surgery in Turkey",
    faqs: [
      {
        q: "What is the recovery process like after gastric sleeve surgery in Istanbul?",
        a: "<p>After gastric sleeve surgery at Istanbul Bariatric Center: Day 1 — recovery in hospital with IV fluids and pain management, gentle walking encouraged. Day 2 — transition to clear liquids, continued monitoring. Day 3 — discharge to hotel with medication pack and dietary instructions. Days 4–5 — rest at hotel, clear liquids and broth. Most patients fly home on Day 4 or 5. Weeks 1–2 — liquid diet at home. Weeks 3–4 — puréed foods. Weeks 5–8 — soft foods. From Week 8 — gradual return to regular healthy eating.</p>"
      },
      {
        q: "How long do patients stay in the hospital after bariatric surgery in Turkey?",
        a: "<p>Hospital stay durations at Istanbul Bariatric Center: <strong>Gastric Sleeve</strong> — 2–3 nights. <strong>Mini Gastric Bypass</strong> — 2–3 nights. <strong>ESG</strong> — typically 1 night. <strong>Gastric Balloon</strong> — day procedure (no overnight stay). <strong>Duodenal Switch / Transit Bipartition</strong> — 3–4 nights. All stays are at JCI-accredited Liv Hospital with dedicated nursing care and monitoring.</p>"
      },
      {
        q: "What can I eat after gastric sleeve surgery performed in Istanbul?",
        a: "<p>Istanbul Bariatric Center provides a structured post-operative diet plan: <strong>Weeks 1–2:</strong> clear liquids (water, broth, sugar-free drinks). <strong>Weeks 3–4:</strong> full liquids and puréed foods. <strong>Weeks 5–6:</strong> soft foods (scrambled eggs, yoghurt, fish). <strong>Week 7+:</strong> gradual introduction of regular foods. The UK-registered dietitian guides patients through each phase and provides personalised meal plans. Protein intake is prioritised throughout recovery.</p>"
      },
      {
        q: "What is the typical patient experience at a bariatric clinic in Istanbul?",
        a: "<p>The typical experience at Istanbul Bariatric Center: arrival at Istanbul Airport where a VIP driver meets you, transfer to hotel to rest, next morning transfer to Liv Hospital for pre-operative tests, consultation with Dr. Ustun, surgery (usually 45–90 minutes), 2–3 days of hospital recovery with attentive nursing care, discharge to hotel with medications and instructions, final check-up, and VIP transfer back to airport. Patients consistently describe the experience as professional, caring, and well-organised.</p>"
      },
      {
        q: "How do patients describe their recovery after bariatric surgery in Turkey?",
        a: "<p>Most patients report manageable discomfort in the first 2–3 days, controlled with prescribed pain medication. By Day 4–5, most feel well enough to walk around, eat liquids comfortably, and travel home. The most common feedback is that recovery was easier than expected. Full recovery to normal activities typically takes 2–3 weeks for gastric sleeve and 3–4 weeks for gastric bypass. Return to work is usually possible after 1–2 weeks for desk jobs.</p>"
      },
      {
        q: "What support do Istanbul bariatric clinics provide during the hospital stay?",
        a: "<p>During the hospital stay at Liv Hospital, patients receive: 24-hour nursing care, regular vital sign monitoring, pain management, IV fluids and anticoagulation therapy, gentle mobilisation guidance, clear communication from English-speaking staff, surgeon rounds at least once daily, and a detailed briefing before discharge covering medications, diet progression, warning signs, and contact information for aftercare.</p>"
      },
      {
        q: "How soon can I fly home after bariatric surgery in Istanbul?",
        a: "<p>Most patients can fly home <strong>3–5 days</strong> after gastric sleeve or gastric bypass surgery. For less invasive procedures like ESG, patients can often fly within 2–3 days. The surgical team provides clearance to fly based on individual recovery. Tips for flying after surgery: stay hydrated, wear compression stockings, walk in the aisle periodically, and avoid carbonated drinks.</p>"
      },
      {
        q: "What does the post-operative diet look like after weight loss surgery in Turkey?",
        a: "<p>The post-operative diet follows an internationally standard progression: <strong>Phase 1 (Weeks 1–2):</strong> Clear liquids. <strong>Phase 2 (Weeks 3–4):</strong> Full liquids and smooth purées. <strong>Phase 3 (Weeks 5–6):</strong> Soft, well-cooked foods. <strong>Phase 4 (Week 7+):</strong> Regular healthy foods in small portions. Emphasis is placed on high-protein foods, adequate hydration (1.5–2 litres daily), and vitamin supplementation. Istanbul Bariatric Center's UK-registered dietitian provides personalised guidance throughout.</p>"
      },
      {
        q: "How do patients manage recovery at home after returning from bariatric surgery in Istanbul?",
        a: "<p>Istanbul Bariatric Center supports home recovery through: the 12-month UK-registered dietitian programme, WhatsApp access to the medical team, scheduled check-in calls at 1 week, 1 month, 3 months, 6 months, and 12 months, detailed written dietary and lifestyle guidelines, and UK-based care coordinators at 8 locations. Patients are advised to follow the staged diet plan, take prescribed vitamins, walk daily, stay hydrated, and attend follow-up appointments with their local GP.</p>"
      }
    ]
  },
  {
    title: "Topic 11: Gastric Sleeve vs Gastric Bypass — Decision Queries",
    faqs: [
      {
        q: "What is the difference between gastric sleeve and gastric bypass surgery?",
        a: "<p><strong>Gastric Sleeve</strong> removes approximately 75–80% of the stomach, leaving a banana-shaped sleeve. It is a restrictive procedure — you eat less because your stomach is smaller. <strong>Gastric Bypass</strong> creates a small stomach pouch and reroutes the small intestine, combining restriction with malabsorption (reduced calorie absorption). Sleeve is simpler with fewer complications; bypass produces slightly more weight loss and is more effective for diabetes but is a more complex procedure.</p>"
      },
      {
        q: "Which is better for long-term weight loss — gastric sleeve or gastric bypass?",
        a: "<p>Both produce significant long-term weight loss. <strong>Gastric sleeve</strong> typically results in 60–70% excess weight loss. <strong>Gastric bypass</strong> typically results in 70–80% excess weight loss. The difference narrows over 5+ years. The best procedure depends on your individual profile — factors like starting BMI, presence of diabetes, reflux history, and eating habits all influence which procedure will produce the best long-term outcome for you specifically.</p>"
      },
      {
        q: "Is gastric sleeve or mini gastric bypass more commonly performed in Turkey?",
        a: "<p><strong>Gastric sleeve</strong> is the most commonly performed bariatric procedure in Turkey and worldwide. It accounts for approximately 60–70% of all bariatric surgeries performed at centres like Istanbul Bariatric Center. Mini gastric bypass is the second most common and is increasingly popular due to its excellent weight loss results and strong metabolic benefits, particularly for patients with type 2 diabetes.</p>"
      },
      {
        q: "What are the pros and cons of gastric sleeve vs gastric bypass for someone with diabetes?",
        a: "<p><strong>For diabetes:</strong> Gastric bypass has a higher diabetes remission rate (70–80%) compared to gastric sleeve (50–60%), because bypass alters gut hormones more significantly. However, gastric sleeve is a simpler operation with lower complication risk. For patients with BMI 35–40 and mild diabetes, sleeve may be sufficient. For BMI 40+ with severe or long-standing diabetes, bypass is generally recommended. Transit bipartition offers an even higher diabetes remission rate (up to 86%).</p>"
      },
      {
        q: "Which procedure is safer — gastric sleeve or gastric bypass in Istanbul?",
        a: "<p><strong>Gastric sleeve</strong> is generally considered the safer procedure with lower complication rates (approximately 1–2% vs 2–3% for bypass). It is a simpler operation with shorter operating time, no intestinal rerouting, lower risk of nutritional deficiencies, and no dumping syndrome risk. However, both procedures are very safe at experienced, JCI-accredited centres like Liv Hospital.</p>"
      },
      {
        q: "How do surgeons at Istanbul Bariatric Center decide between gastric sleeve and bypass?",
        a: "<p>The decision is based on a comprehensive assessment including: BMI level, presence and severity of type 2 diabetes, history of gastroesophageal reflux (GERD), eating patterns (high-sugar diet may favour bypass), previous surgeries, patient preferences, and overall health profile. During the free consultation, Dr. Murat Ustun explains the options and provides a personalised recommendation based on these factors.</p>"
      },
      {
        q: "Is mini gastric bypass a good alternative to full gastric bypass surgery?",
        a: "<p>Yes. Mini gastric bypass (One Anastomosis Gastric Bypass) produces comparable weight loss results to full Roux-en-Y gastric bypass but with a <strong>simpler surgical technique</strong> (one connection instead of two), shorter operating time, and potentially lower complication rate. It is increasingly recognised as the preferred bypass technique at many international centres, including Istanbul Bariatric Center.</p>"
      },
      {
        q: "What is the recovery difference between gastric sleeve and gastric bypass?",
        a: "<p>Recovery timelines are similar: 2–3 day hospital stay, 2–4 weeks before returning to normal activities. Gastric bypass patients may experience slightly longer initial recovery and are more likely to need lifelong vitamin supplementation (B12, iron, calcium). Sleeve patients typically have a simpler dietary progression. Both procedures require adherence to the same staged post-operative diet plan for the first 6–8 weeks.</p>"
      },
      {
        q: "Can I switch from gastric sleeve to gastric bypass later if needed?",
        a: "<p>Yes. This is known as <strong>revision surgery</strong> and is available at Istanbul Bariatric Center. If a gastric sleeve patient experiences insufficient weight loss, weight regain, or severe reflux, conversion to gastric bypass (or mini gastric bypass) is a well-established option. Other revision options include transit bipartition or re-sleeve gastrectomy. Dr. Ustun evaluates each revision case individually.</p>"
      }
    ]
  },
  {
    title: "Topic 12: Bariatric Surgery Outcomes & Long-Term Results",
    faqs: [
      {
        q: "How much weight can you expect to lose after gastric sleeve surgery in Turkey?",
        a: "<p>Patients typically lose <strong>60–70% of their excess weight</strong> within 12–18 months after gastric sleeve surgery. For example, a patient who is 40 kg above their ideal weight can expect to lose approximately 24–28 kg. Maximum weight loss usually occurs between months 12 and 18, after which weight stabilises. Istanbul Bariatric Center patients consistently achieve results in line with or exceeding international benchmarks.</p>"
      },
      {
        q: "What are the long-term results of bariatric surgery performed in Istanbul?",
        a: "<p>Long-term studies show that 70–80% of patients maintain significant weight loss at 5+ years after bariatric surgery. The key to long-term success is adherence to dietary guidelines, regular exercise, and ongoing follow-up. Istanbul Bariatric Center's 12-month dietitian programme is specifically designed to support the critical first year where lifestyle habits are established that determine long-term outcomes.</p>"
      },
      {
        q: "Do patients maintain their weight loss after bariatric surgery in Turkey?",
        a: "<p>The majority of patients maintain significant weight loss long-term. Some weight regain (typically 10–15% of the lost weight) is normal and expected after the 18-month mark. Patients who follow their dietitian's guidance, maintain protein-rich diets, exercise regularly, and attend follow-up appointments have the best long-term outcomes. Istanbul Bariatric Center's structured aftercare programme supports patients in developing sustainable habits.</p>"
      },
      {
        q: "What percentage of excess weight do patients lose after gastric bypass in Turkey?",
        a: "<p>Gastric bypass patients typically lose <strong>70–80% of their excess weight</strong> within 12–18 months. Mini gastric bypass results are comparable. This makes bypass one of the most effective bariatric procedures for maximum weight loss. For patients with very high BMI (50+), bypass procedures generally produce better outcomes than gastric sleeve alone.</p>"
      },
      {
        q: "Are the weight loss outcomes from Turkish bariatric clinics comparable to Western hospitals?",
        a: "<p>Yes. At experienced, JCI-accredited centres like Istanbul Bariatric Center, weight loss outcomes are fully comparable to — and in many cases match — those reported by leading centres in the UK, US, and Europe. This is because the same surgical techniques, equipment, and protocols are used. Outcome differences are driven by surgeon experience and patient compliance, not geography.</p>"
      },
      {
        q: "What factors affect long-term success after bariatric surgery?",
        a: "<p>Key factors include: adherence to the post-operative diet plan, regular physical activity (150+ minutes per week), adequate protein intake (60–80g daily), consistent vitamin and mineral supplementation, avoiding high-sugar and high-fat foods, managing emotional eating, attending follow-up appointments, and maintaining contact with the dietitian. Istanbul Bariatric Center's 12-month programme addresses all of these factors systematically.</p>"
      },
      {
        q: "How do patients from the UK or US rate their long-term results after surgery in Istanbul?",
        a: "<p>International patients consistently report high satisfaction with their long-term results. Common outcomes cited include: significant and sustained weight loss, resolution or improvement of type 2 diabetes, reduced blood pressure medication, improved sleep apnoea, increased mobility and energy, improved mental health and confidence, and reduced joint pain. Many describe their surgery as the best decision they ever made.</p>"
      },
      {
        q: "Does Istanbul Bariatric Center publish outcome data for their bariatric procedures?",
        a: "<p>Istanbul Bariatric Center shares before-and-after results and patient testimonials on their <a href='/results'>results page</a>. The clinic has performed over 8,000 procedures with consistently high success rates, as reflected in their 6 consecutive WhatClinic Patient Service Awards and verified patient reviews across multiple platforms.</p>"
      },
      {
        q: "What lifestyle changes are required to maintain weight loss after bariatric surgery?",
        a: "<p>Essential lifestyle changes include: eating small, protein-rich meals, chewing thoroughly and eating slowly, drinking 1.5–2 litres of water daily (not with meals), taking daily multivitamins and supplements as prescribed, exercising regularly (at least 30 minutes daily), avoiding carbonated drinks, alcohol, and high-sugar foods, attending regular follow-up appointments, and seeking support for emotional or stress-related eating. These changes are lifelong commitments that Istanbul Bariatric Center's dietitian programme helps establish.</p>"
      }
    ]
  },
  {
    title: "Topic 13: Medical Tourism in Istanbul — Logistics & Planning",
    faqs: [
      {
        q: "How do I plan a medical trip to Istanbul for bariatric surgery?",
        a: "<p>Istanbul Bariatric Center handles most of the planning for you: (1) Contact the clinic for a free consultation, (2) Choose your procedure and package, (3) Confirm your surgery date, (4) Book your flight (direct flights available from most major cities), (5) The clinic arranges VIP airport transfer and hotel, (6) Arrive in Istanbul and follow the pre-arranged schedule. The patient coordination team provides a detailed timeline and checklist before your trip.</p>"
      },
      {
        q: "What is the best time of year to travel to Istanbul for surgery?",
        a: "<p>Istanbul is a year-round destination for medical tourism. Spring (April–June) and autumn (September–November) offer the most pleasant weather for recovery walks. Summer (July–August) is warm but hospital and hotel environments are fully air-conditioned. Winter (December–February) is cooler but perfectly suitable. Surgery availability is year-round, though booking 2–4 weeks in advance is recommended.</p>"
      },
      {
        q: "How far in advance do I need to book bariatric surgery in Istanbul?",
        a: "<p>Istanbul Bariatric Center can typically accommodate patients within <strong>2–4 weeks</strong> of booking, depending on the surgeon's schedule. Some patients book and travel within the same month. For patients who want to plan further ahead, bookings can be made months in advance. The coordination team works with your preferred dates to find a suitable slot.</p>"
      },
      {
        q: "What visa requirements apply to medical tourists traveling to Turkey from the UK?",
        a: "<p>UK citizens can travel to Turkey visa-free for stays of up to 90 days, which is more than sufficient for a bariatric surgery trip (typically 4–5 days). US, EU, Australian, and many other nationalities also have visa-free access or can obtain an e-visa online within minutes. Your passport should be valid for at least 6 months beyond your travel dates.</p>"
      },
      {
        q: "Which Istanbul hospitals are best located for international patients?",
        a: "<p>Liv Hospital, where Istanbul Bariatric Center operates, is located on the European side of Istanbul with excellent access to Istanbul Airport (approximately 30 minutes by car). The Radisson Hotel used for patient accommodation is conveniently located near the hospital. The VIP transfer service eliminates any need for patients to navigate Istanbul's transport independently.</p>"
      },
      {
        q: "What should I pack for a bariatric surgery trip to Istanbul?",
        a: "<p>Recommended packing: comfortable loose-fitting clothing (especially for the journey home), slip-on shoes, personal toiletries, any current medications with a note from your doctor, your passport and travel documents, a phone charger, entertainment for hospital recovery (books, tablet), and a small pillow for the flight home (to support your abdomen). Istanbul Bariatric Center provides a compression garment, post-operative medications, and all hospital essentials.</p>"
      },
      {
        q: "How do I manage the language barrier when seeking medical care in Istanbul?",
        a: "<p>At Istanbul Bariatric Center, the language barrier is not an issue. The clinic has fully English-speaking patient coordinators, and the surgical and nursing teams at Liv Hospital communicate in English. All medical documents, consent forms, and dietary guides are provided in English. For patients speaking other languages, translation support can be arranged.</p>"
      },
      {
        q: "Are there patient coordinators who help international visitors navigate Istanbul for surgery?",
        a: "<p>Yes. Istanbul Bariatric Center assigns a <strong>dedicated patient coordinator</strong> to each international patient. This coordinator handles all logistics: airport pickup, hotel check-in, hospital registration, accompaniment during the hospital stay, translation if needed, and airport transfer for departure. The coordinator is available via WhatsApp throughout the trip and beyond.</p>"
      },
      {
        q: "What are the best neighborhoods or hotels to stay near bariatric clinics in Istanbul?",
        a: "<p>Istanbul Bariatric Center arranges accommodation at the <strong>Radisson Hotel</strong> or equivalent 4–5 star hotel near Liv Hospital on the European side of Istanbul. Patients don't need to research or book hotels independently — accommodation is included in the Relaxation and Luxury packages. The hotel is selected for its proximity to the hospital, comfort, and suitability for post-operative recovery. Some patients extend their stay for sightseeing, in which case the coordination team can recommend nearby attractions.</p>"
      }
    ]
  }
];

const allFaqs = topics.flatMap(t => t.faqs);

export default function BariatricGuide() {
  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="Complete Guide to Bariatric Surgery in Istanbul, Turkey"
        description="Comprehensive guide to weight loss surgery in Istanbul. 13 topics covering procedures, costs, safety, recovery, and why Istanbul Bariatric Center is a top choice for international patients."
        keywords="bariatric surgery istanbul guide, weight loss surgery turkey, gastric sleeve istanbul, bariatric surgery cost turkey, istanbul bariatric center"
        url="/bariatric-surgery-turkey-guide"
      />
      <JsonLd data={structuredData.createFAQ(allFaqs.map(f => ({ question: f.q, answer: f.a.replace(/<[^>]*>/g, '') })))} />
      <JsonLd data={structuredData.createBreadcrumb([
        { name: "Home", url: "https://istanbulbariatriccenter.com/" },
        { name: "Complete Guide to Bariatric Surgery in Istanbul", url: "https://istanbulbariatriccenter.com/bariatric-surgery-turkey-guide" }
      ])} />
      <Navbar />
      <main id="main-content">
        <section className="bg-gradient-to-br from-primary via-blue-700 to-primary py-20 md:py-28">
          <div className="container mx-auto px-4 max-w-4xl text-center">
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-6" data-testid="text-guide-title">
              Complete Guide to Bariatric Surgery in Istanbul, Turkey
            </h1>
            <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              Everything you need to know about weight loss surgery at Istanbul Bariatric Center — from procedures and costs to safety, recovery, and planning your trip.
            </p>
          </div>
        </section>

        <section className="py-12 bg-slate-50 border-b">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-xl font-bold text-slate-900 mb-4">Table of Contents</h2>
            <nav className="grid md:grid-cols-2 gap-2">
              {topics.map((topic, i) => (
                <a
                  key={i}
                  href={`#topic-${i + 1}`}
                  className="text-primary hover:text-primary/80 text-sm font-medium transition-colors py-1"
                  data-testid={`link-topic-${i + 1}`}
                >
                  {topic.title}
                </a>
              ))}
            </nav>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4 max-w-4xl">
            {topics.map((topic, i) => (
              <TopicSection key={i} topic={topic} index={i} />
            ))}
          </div>
        </section>

        <section className="py-16 bg-gradient-to-br from-primary/10 via-blue-50 to-white">
          <div className="container mx-auto px-4 max-w-3xl text-center">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Ready to Start Your Weight Loss Journey?</h2>
            <p className="text-lg text-slate-600 mb-8">
              Contact Istanbul Bariatric Center for a free consultation. Our team will assess your eligibility and recommend the best procedure for your goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-[#15803d] hover:bg-[#166534] text-white font-bold px-8 py-6 rounded-full shadow-xl"
                onClick={() => window.open('https://wa.me/905324131143', '_blank')}
                data-testid="button-whatsapp-guide"
              >
                <Phone className="w-5 h-5 mr-2" />
                WhatsApp Consultation
              </Button>
              <Link href="/health-profile">
                <Button
                  size="lg"
                  variant="outline"
                  className="font-bold px-8 py-6 rounded-full border-2"
                  data-testid="button-health-profile-guide"
                >
                  Check Your Eligibility
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

import type { PageSEO } from "../seo-data";

const SITE_URL = "https://istanbulbariatriccenter.com";
const PAGE_URL = SITE_URL + "/weight-loss-surgery-turkey";
const doctor = { "@id": SITE_URL + "/#drmuratustun" };
const organization = { "@id": SITE_URL + "/#organization" };

const procedures = [
  ["Sleeve Gastrectomy", "/gastric-sleeve-turkey"],
  ["Roux-en-Y Gastric Bypass", "/gastric-bypass"],
  ["Mini Gastric Bypass (OAGB)", "/mini-gastric-bypass"],
  ["Gastric Balloon", "/gastric-balloon-turkey"],
  ["Endoscopic Sleeve Gastroplasty (ESG)", "/esg"],
  ["Duodenal Switch (SADI-S / BPD-DS)", "/duodenal-switch"],
  ["Transit Bipartition", "/transit-bipartition"],
  ["Revision Bariatric Surgery", "/revision-bariatric-surgery"],
];

const faqs = [
  ["What weight loss surgery options are available in Turkey?", "The eight options covered here are sleeve gastrectomy, Roux-en-Y gastric bypass, mini gastric bypass (OAGB), gastric balloon, endoscopic sleeve gastroplasty (ESG), Duodenal Switch (SADI-S / BPD-DS), transit bipartition and revision bariatric surgery. Suitability depends on a full clinical assessment."],
  ["How much does weight loss surgery cost in Turkey in 2026?", "IBC prices start at £1,900 for Orbera balloon and £2,450 for Ultra Eco sleeve. Sleeve Relaxation and Luxury are £4,550 and £4,900; Roux-en-Y bypass £5,000 and £5,350; OAGB from £5,000; duodenal switch £5,050 and £5,400; ESG £5,700. Transit bipartition and revisions are quoted after assessment."],
  ["Which weight loss surgery is best for me?", "There is no universally best operation. BMI, diabetes, reflux, eating pattern, previous surgery, medication, anaesthetic risk and willingness to accept permanent anatomical change all matter. A consultant should recommend options only after reviewing these factors."],
  ["Is weight loss surgery in Turkey safe?", "It can be delivered safely, but country and price do not establish safety. Check the named surgeon, hospital accreditation, anaesthesia and ICU capability, procedure volume, emergency protocols and written aftercare. Every procedure still carries risk."],
  ["What does JCI accreditation mean?", "Joint Commission International accreditation is an external hospital-level review of patient-safety and quality systems. It is useful evidence about the facility, but it is not a guarantee of an individual outcome and does not replace checking the surgeon and pathway."],
  ["What BMI qualifies for bariatric surgery?", "NICE-style thresholds commonly prompt consideration at BMI 40 or above, or 35 or above with a condition that could improve with weight loss. Selected people with recent-onset type 2 diabetes may be assessed from BMI 30. Decisions remain individual."],
  ["Can I have a non-surgical weight loss procedure?", "Selected adults, often in roughly the BMI 27–40 range, may be considered for a gastric balloon or ESG. Balloon weight loss is commonly 10–15% TBWL and ESG about 15–20% TBWL; neither is automatically safer or suitable for everyone."],
  ["How long should I stay in Istanbul?", "A common surgical itinerary is about seven days, allowing consultation, testing, surgery, observation and a fit-to-fly review. Balloon pathways may be shorter. Book flexible travel only after the team confirms your personal schedule."],
  ["Are flights included in the package?", "No. Flights are excluded. Balloon prices also exclude hotel and transfers. Only Relaxation and Luxury surgical tiers include hotel, transfers and 12-month aftercare; Ultra Eco sleeve does not include hotel or transfers."],
  ["How much cheaper is Turkey than UK private surgery?", "UK private equivalents typically cost 2–3× more. Compare like with like: named surgeon, accredited hospital, tests, hospital nights, medicines, hotel, transfers and aftercare. The lowest headline figure may omit important items."],
  ["When can I fly home after bariatric surgery?", "Only after the treating team has reviewed recovery and confirmed fitness to fly. The timing varies by procedure and progress. Walk regularly, follow hydration and VTE instructions, and seek urgent care for breathlessness, chest pain or a swollen painful leg."],
  ["What are the main risks?", "Risks include bleeding, infection, anaesthetic problems, leak, VTE, stricture and reoperation. Longer-term issues can include reflux after sleeve, dumping after bypass and nutritional deficiencies. Published operative mortality is roughly 0.1–0.3% and leak risk around 1–2%, varying by procedure and patient."],
  ["Will my UK GP provide aftercare?", "Do not assume that a GP will replace specialist bariatric follow-up. Ask the overseas team for an English operative note, discharge summary, medication list, supplement plan and blood-monitoring schedule, then share these with your GP before and after travel."],
  ["What happens if I have had bariatric surgery before?", "Revision requires the old operative record, current imaging or endoscopy when indicated, symptoms and nutrition results. Because scar tissue and anatomy vary, the procedure and price are quoted only after assessment."],
];

const procedureSchema = procedures.map(([name, path]) => ({ "@type": "MedicalProcedure", name, url: SITE_URL + path }));

export const weightLossSurgeryTurkeySEO: PageSEO = {
  title: "Weight Loss Surgery in Turkey — 2026 Guide, Costs, Options",
  description: "Complete guide to weight loss surgery in Turkey: options (sleeve, bypass, balloon, ESG), costs from £1,900, safety, JCI hospitals, and how to choose.",
  h1: "Weight Loss Surgery in Turkey — The 2026 Guide",
  bodyExcerpt: "A complete UK-patient guide to eight weight-loss procedures in Turkey, with authoritative 2026 costs from £1,900, safety benchmarks, candidacy, decision support, travel, risks and aftercare.",
  canonical: PAGE_URL,
  image: SITE_URL + "/images/wls/istanbul-bosphorus-skyline.webp",
  ogType: "article",
  modifiedTime: "2026-09-17",
  richContent:
    '<section><h2>Quick answer</h2><p>Turkey offers eight principal weight-loss procedures, from temporary balloons to complex metabolic surgery. IBC prices start at £1,900. Relaxation and Luxury tiers are performed by Op. Dr Murat Üstün at JCI-accredited Liv Hospital Vadistanbul. The £2,450 Ultra Eco sleeve is performed by his experienced surgeon team at a partner boutique hospital and does not include hotel or transfers. Procedure choice should be based on health and anatomy rather than the cheapest headline.</p></section>' +
    '<section><h2>Which procedures are available?</h2><table><thead><tr><th>Procedure</th><th>Typical weight loss</th><th>2026 IBC price</th></tr></thead><tbody><tr><td><a href="/gastric-sleeve-turkey">Sleeve gastrectomy</a></td><td>60–70% EWL</td><td>£2,450 Ultra Eco; £4,550 Relaxation; £4,900 Luxury</td></tr><tr><td><a href="/gastric-bypass">Roux-en-Y gastric bypass</a></td><td>65–75% EWL</td><td>£5,000 / £5,350</td></tr><tr><td><a href="/mini-gastric-bypass">Mini gastric bypass (OAGB)</a></td><td>65–80% EWL</td><td>From £5,000</td></tr><tr><td><a href="/gastric-balloon-turkey">Gastric balloon</a></td><td>10–15% TBWL</td><td>Orbera £1,900; Allurion £2,600; Spatz3 £2,900</td></tr><tr><td><a href="/esg">ESG</a></td><td>15–20% TBWL</td><td>£5,700</td></tr><tr><td><a href="/duodenal-switch">Duodenal Switch (SADI-S / BPD-DS)</a></td><td>70–85% EWL</td><td>£5,050 / £5,400</td></tr><tr><td><a href="/transit-bipartition">Transit bipartition</a></td><td>Similar to DS, with a better nutrition profile</td><td>Quoted after assessment</td></tr><tr><td><a href="/revision-bariatric-surgery">Revision surgery</a></td><td>Varies</td><td>Quoted after assessment</td></tr></tbody></table><p>EWL and TBWL are different measures and should not be compared directly. Results are ranges, not guarantees.</p></section>' +
    '<section><h2>2026 costs and inclusions</h2><p>UK private equivalents typically cost 2–3× more. Lower Turkish operating costs can reduce prices, but safe care still needs a qualified surgeon, anaesthetist, equipped theatre and hospital team. The £2,450 Ultra Eco sleeve is performed by Dr Üstün’s experienced surgeon team at a partner boutique hospital and does not include hotel or transfers. Relaxation and Luxury tiers are performed by Op. Dr Murat Üstün at JCI-accredited Liv Hospital Vadistanbul and include hotel, transfers and 12-month aftercare. Balloon prices exclude hotel and transfers. Flights are excluded from all plans.</p><p>Request an itemised quote covering surgeon, hospital, tests, nights, medicines, consumables, companion fees, hotel, transfers, aftercare and delay costs. Unnamed surgeons, changing hospitals, guaranteed results, pressure to pay and vague exclusions are red flags.</p></section>' +
    '<section><h2>Safety and choosing a clinic</h2><p>Verify the named surgeon and procedure-specific volume. JCI accreditation is an external review of hospital quality systems, not a guarantee. Confirm ICU, imaging, endoscopy, blood bank and emergency surgical access. Ask about leak, bleeding and VTE protocols, written inclusions, reachable clinical aftercare and an English operative note for your GP.</p></section>' +
    '<section><h2>Candidacy and decision framework</h2><p>NICE-style thresholds commonly support assessment at BMI 40 or above, or 35 with a condition likely to improve. Selected people with recent-onset type 2 diabetes may be assessed from BMI 30. Balloon and ESG may suit selected adults around BMI 27–40. Choice depends on required loss, diabetes, reflux, prior surgery and willingness to accept permanent change and lifelong monitoring. Significant reflux may favour Roux-en-Y over sleeve for some patients. Previous operations require records and anatomical investigation.</p></section>' +
    '<section><h2>The seven-day journey</h2><p>A typical surgical visit includes arrival, consultation and tests, surgery, two or more hospital nights, hotel recovery and a fit-to-fly review around day seven. Flights are excluded. Timing varies and recovery can require a longer stay. After return, follow hydration, staged diet, walking, medicines and VTE instructions. Aftercare cannot replace local emergency services.</p></section>' +
    '<section><h2>Risks and warning signs</h2><p>Published operative mortality is roughly 0.1–0.3% and leak risk around 1–2%, varying by procedure and patient. Other risks include bleeding, infection, VTE, stricture, anaesthetic problems and reoperation. Sleeve may worsen reflux; bypass can cause dumping, ulcers, internal hernia and deficiencies; malabsorptive procedures require intensive lifelong supplementation. Escalating pain, persistent fast pulse, fever, breathing difficulty, repeated vomiting, bleeding or a swollen painful leg needs urgent assessment.</p></section>' +
    '<section><h2>Aftercare and UK GP coordination</h2><p>Obtain an English operative note, discharge summary, medicine list, supplement plan, staged diet and blood-monitoring schedule. Routine tests commonly assess blood count, kidney and liver function, iron, folate, B12, vitamin D and calcium, with broader surveillance after malabsorptive surgery. Share records with your GP, but do not assume NHS primary care replaces specialist bariatric follow-up.</p></section>' +
    '<section><h2>Op. Dr Murat Üstün and the hospital</h2><p><a href="/dr-murat-ustun">Op. Dr Murat Üstün, MD, PhD</a> has 25+ years of experience and 6,000+ advanced laparoscopic procedures, including 2,200+ sleeves and 700+ bypasses. He belongs to BOMSS, IFSO and the International Bariatric Club and is the only Boston Scientific-certified surgical ESG trainer in Turkey. He operates at JCI-accredited Liv Hospital Vadistanbul in Sarıyer and at Memorial.</p></section>' +
    '<section><h2>Weight loss surgery Turkey FAQs</h2>' + faqs.map(([q, a]) => '<h3>' + q + '</h3><p>' + a + '</p>').join("") + '</section>' +
    '<section><h2>Further planning</h2><p>Compare <a href="/cost-of-bariatric-surgery-in-turkey">2026 bariatric costs</a>, read the <a href="/bariatric-surgery-for-uk-patients">UK patient guide</a> and prepare with the <a href="/bariatric-surgery-travel-guide">travel guide</a>. Request a clinical assessment before booking travel.</p><p>Reviewed by Op. Dr Murat Üstün, MD, PhD · Last reviewed 17 September 2026</p></section>',
  jsonLd: [
    {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "MedicalWebPage", "@id": PAGE_URL + "#webpage", url: PAGE_URL,
          name: "Weight Loss Surgery in Turkey — The 2026 Guide",
          description: "Independent 2026 patient guide to weight loss surgery in Turkey — all 8 available procedures, honest cost comparison, safety benchmarks, JCI accreditation explained, decision framework and aftercare.",
          inLanguage: "en-GB", dateModified: "2026-09-17",
          primaryImageOfPage: SITE_URL + "/images/wls/istanbul-bosphorus-skyline.webp",
          isPartOf: organization, mainContentOfPage: { "@type": "WebPageElement", cssSelector: "main" },
          about: { "@type": "MedicalCondition", name: "Obesity", code: { "@type": "MedicalCode", code: "E66", codingSystem: "ICD-10" }, possibleTreatment: procedureSchema },
          audience: { "@type": "MedicalAudience", audienceType: "Patient", geographicArea: { "@type": "Country", name: "United Kingdom" } },
          reviewedBy: doctor, lastReviewed: "2026-09-17", specialty: "https://schema.org/Surgical",
        },
        {
          "@type": "ItemList", "@id": PAGE_URL + "#procedure-list", name: "Weight loss surgery options available in Turkey (2026)", numberOfItems: 8,
          itemListElement: procedures.map(([name, path], index) => ({ "@type": "ListItem", position: index + 1, name, url: SITE_URL + path })),
        },
        {
          "@type": "FAQPage",
          mainEntity: faqs.map(([name, text]) => ({ "@type": "Question", name, acceptedAnswer: { "@type": "Answer", text } })),
        },
      ],
    },
  ],
};
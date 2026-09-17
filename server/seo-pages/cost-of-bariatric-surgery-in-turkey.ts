import type { PageSEO } from "../seo-data";

const SITE_URL = "https://istanbulbariatriccenter.com";
const PAGE_URL = SITE_URL + "/cost-of-bariatric-surgery-in-turkey";
const doctor = { "@id": SITE_URL + "/#drmuratustun" };
const seller = { "@id": SITE_URL + "/#organization" };

const procedures = [
  ["Gastric balloon", "/gastric-balloon-turkey"],
  ["Sleeve gastrectomy", "/gastric-sleeve-turkey"],
  ["Roux-en-Y gastric bypass", "/gastric-bypass"],
  ["Mini gastric bypass (OAGB)", "/mini-gastric-bypass"],
  ["Duodenal switch", "/duodenal-switch"],
  ["Endoscopic sleeve gastroplasty (ESG)", "/esg"],
  ["Transit bipartition", "/transit-bipartition"],
  ["Revision bariatric surgery", "/revision-bariatric-surgery"],
];

const faqs = [
  ["How much does bariatric surgery cost in Turkey in 2026?", "IBC’s 2026 prices start at £1,900 for an Orbera gastric balloon and £2,450 for an Ultra Eco sleeve. Sleeve Relaxation and Luxury cost £4,550 and £4,900; Roux-en-Y bypass costs £5,000 and £5,350; OAGB starts at £5,000; duodenal switch costs £5,050 and £5,400; and ESG is £5,700. Transit bipartition and revision surgery are quoted after assessment."],
  ["Why is bariatric surgery cheaper in Turkey than the UK?", "Hospital staffing, property, insurance and other operating costs are lower, while procedure volume is high and GBP can buy more locally. These economics can reduce the bill without removing essential clinical resources. Price still does not prove safety, so compare the named surgeon, actual hospital, facilities, inclusions and aftercare."],
  ["What is included in an all-inclusive package?", "Relaxation includes surgery by Op. Dr Murat Üstün at JCI-accredited Liv Hospital Vadistanbul, two hospital nights, four hotel nights, VIP transfers and 12 months of WhatsApp aftercare including a UK-registered dietitian. Luxury adds a fifth luxury-hotel night, private car and full board. Exact inclusions depend on procedure and are listed in the written quote."],
  ["Are there hidden costs?", "IBC lists package inclusions in writing, but patients should budget separately for flights, travel insurance, companion charges not included in the chosen tier, UK tests requested before travel, an extended stay if fit-to-fly is delayed, long-term vitamins, personal spending and possible body contouring later."],
  ["Can I pay in instalments?", "Ask your coordinator about payment options; we do not name third-party lenders. Do not assume an instalment arrangement is available, and request the deposit, balance, card or transfer terms and cancellation conditions in writing before committing."],
  ["Do prices change with the currency?", "You are invoiced in GBP, so the GBP figure in your written quotation is the relevant amount. EUR, USD, AUD and CAD values on this page are static illustrations using approximate September 2026 rates and may differ from the amount charged by your card issuer or bank."],
  ["What is the cheapest bariatric procedure in Turkey?", "The lowest listed treatment is the Orbera gastric balloon at £1,900, followed by the £2,450 Ultra Eco sleeve. They are not equivalent: a balloon is temporary and non-surgical, while sleeve gastrectomy permanently removes part of the stomach. Choose through clinical assessment, not headline price alone."],
  ["Is the cheapest option safe?", "A lower price is neither proof of danger nor proof of safety. Ultra Eco sleeve includes an experienced surgeon team and two nights at a partner boutique hospital but excludes hotel and transfers. Check surgeon responsibility, anaesthesia, emergency facilities, tests, written exclusions and follow-up, and remember every procedure has risks."],
  ["What does Luxury add over Relaxation?", "Luxury retains surgery by Op. Dr Murat Üstün at JCI-accredited Liv Hospital Vadistanbul and adds five luxury-hotel nights rather than four hotel nights, a private car and full board. Procedure prices are £350 higher than Relaxation for sleeve, Roux-en-Y bypass and duodenal switch. Confirm the exact room, companion and meal details in writing."],
  ["Can I claim any cost back from health insurance?", "The NHS and standard travel policies do not normally reimburse planned private bariatric surgery abroad. Coverage varies, so ask your insurer before booking and obtain written confirmation. Specialist medical-travel cover may protect certain travel or complication costs, but exclusions and limits require careful checking."],
];

const offer = (price: string) => ({
  "@type": "Offer",
  price,
  priceCurrency: "GBP",
  priceValidUntil: "2026-12-31",
  availability: "https://schema.org/InStock",
  seller,
});

const aggregateOffer = (lowPrice: string, highPrice: string, offerCount: number) => ({
  "@type": "AggregateOffer",
  lowPrice,
  highPrice,
  offerCount,
  priceCurrency: "GBP",
  priceValidUntil: "2026-12-31",
  availability: "https://schema.org/InStock",
  seller,
});

const productNodes = [
  { "@type": "Product", "@id": PAGE_URL + "#balloon-prices", name: "Gastric balloon 2026 price group", category: "Medical procedure", offers: aggregateOffer("1900", "2900", 3) },
  { "@type": "Product", "@id": PAGE_URL + "#sleeve-prices", name: "Sleeve gastrectomy 2026 package group", category: "Medical procedure", offers: aggregateOffer("2450", "4900", 3) },
  { "@type": "Product", "@id": PAGE_URL + "#roux-en-y-prices", name: "Roux-en-Y gastric bypass 2026 package group", category: "Medical procedure", offers: aggregateOffer("5000", "5350", 2) },
  { "@type": "Product", "@id": PAGE_URL + "#oagb-price", name: "Mini gastric bypass (OAGB) 2026 price", category: "Medical procedure", offers: { "@type": "AggregateOffer", lowPrice: "5000", priceCurrency: "GBP", priceValidUntil: "2026-12-31", availability: "https://schema.org/InStock", seller } },
  { "@type": "Product", "@id": PAGE_URL + "#duodenal-switch-prices", name: "Duodenal switch 2026 package group", category: "Medical procedure", offers: aggregateOffer("5050", "5400", 2) },
  { "@type": "Product", "@id": PAGE_URL + "#esg-price", name: "Endoscopic sleeve gastroplasty 2026 price", category: "Medical procedure", offers: offer("5700") },
];

export const costOfBariatricSurgeryTurkeySEO: PageSEO = {
  title: "Bariatric Surgery Cost in Turkey 2026: All-Inclusive Prices",
  description: "Bariatric surgery cost in Turkey 2026: sleeve £2,450, bypass £5,000, balloon £1,900, ESG £5,700. Relaxation and Luxury are all-inclusive at a JCI hospital.",
  h1: "Bariatric Surgery Cost in Turkey (2026 All-Inclusive Prices)",
  bodyExcerpt: "Authoritative September 2026 IBC prices: gastric balloon from £1,900, sleeve from £2,450, bypass from £5,000 and ESG £5,700. Compare Ultra Eco, Relaxation and Luxury tiers, international private ranges, currencies and costs outside the package.",
  canonical: PAGE_URL,
  image: SITE_URL + "/images/wls/jci-hospital-reception.webp",
  ogType: "article",
  modifiedTime: "2026-09-17",
  richContent:
    '<section><h2>Complete 2026 bariatric surgery price table</h2><p>IBC’s current GBP prices are: Orbera balloon £1,900, Allurion £2,600 and Spatz3 £2,900; sleeve £2,450 Ultra Eco, £4,550 Relaxation and £4,900 Luxury; Roux-en-Y bypass £5,000 Relaxation and £5,350 Luxury; OAGB from £5,000; duodenal switch £5,050 and £5,400; and ESG £5,700. Transit bipartition and revision surgery are quoted after assessment. Balloon and Ultra Eco prices exclude hotel and transfers, and flights are excluded from every plan.</p></section>' +
    '<section><h2>What each tier includes</h2><p>Ultra Eco applies only to sleeve. Its £2,450 price covers the experienced surgeon team, partner boutique hospital and two hospital nights without hotel or transfers. Relaxation uses Op. Dr Murat Üstün at JCI-accredited Liv Hospital Vadistanbul and includes two hospital nights, four hotel nights, VIP transfers and 12 months of WhatsApp aftercare including a UK-registered dietitian. Luxury adds five luxury-hotel nights, a private car and full board. Exact procedure inclusions appear in the written quote.</p></section>' +
    '<section><h2>Turkey compared with NHS and international private costs</h2><p>IBC sleeve costs £2,450–£4,900 and Roux-en-Y bypass £5,000–£5,350. NHS treatment is free for eligible patients but has strict criteria and waiting commonly reported at 2–5 years. Typical published private ranges are UK sleeve £8,000–£12,000 and bypass £10,000–£15,000; Germany €9,000–€15,000; USA $15,000–$25,000; and Australia A$15,000–A$25,000. Inclusions differ, so compare the named surgeon, hospital, tests, nights, medicines, accommodation, transfers and aftercare.</p></section>' +
    '<section><h2>Hidden costs and the real travel budget</h2><p>Flights are excluded and typical UK return fares are £120–£280. Budget for travel insurance, companion costs, pre-operative tests completed in the UK if requested, an extended stay if fit-to-fly is delayed, long-term vitamins and possible body contouring later. IBC quotes list inclusions in writing so patients can distinguish package care from personal travel and future costs.</p></section>' +
    '<section><h2>Why Turkey costs less</h2><p>Hospital staffing, property, insurance and operating inputs generally cost less than in the UK, Germany, USA or Australia. Exchange rates and high procedure volume also support lower prices. These economics do not remove the need for a qualified team, equipped theatre, anaesthesia, assessment and emergency pathways. Price alone never establishes safety.</p></section>' +
    '<section><h2>Payment options</h2><p>Ask your coordinator about payment options; we do not name third-party lenders. Do not assume instalments are available. Obtain deposit, balance, cancellation and accepted-payment terms in writing, and budget for travel, insurance, supplements and possible delay costs.</p></section>' +
    '<section><h2>Approximate currency conversions</h2><p>These are approximate, September 2026 rates; you are invoiced in GBP. Using £1 as approximately €1.17, US$1.32, A$1.98 and C$1.80, £1,900 is about €2,220, US$2,510, A$3,760 or C$3,420; £2,450 is about €2,870, US$3,230, A$4,850 or C$4,410; £4,550 is about €5,320, US$6,010, A$9,010 or C$8,190; and £5,000 is about €5,850, US$6,600, A$9,900 or C$9,000. Values are rounded to the nearest 10 and bank rates differ.</p></section>' +
    '<section><h2>Cost by procedure</h2><p><a href="/gastric-sleeve-turkey">Gastric Sleeve Turkey</a> costs £2,450–£4,900; see the <a href="/gastric-sleeve-turkey-cost">detailed sleeve cost guide</a>. <a href="/gastric-bypass">Roux-en-Y bypass</a> costs £5,000–£5,350 and <a href="/mini-gastric-bypass">OAGB</a> starts at £5,000. <a href="/gastric-balloon-turkey">Gastric balloon</a> costs £1,900–£2,900 and excludes hotel and transfers. <a href="/esg">ESG</a> is £5,700. <a href="/duodenal-switch">Duodenal switch</a> costs £5,050–£5,400. <a href="/transit-bipartition">Transit bipartition</a> and <a href="/revision-bariatric-surgery">revision surgery</a> require assessment before quotation.</p></section>' +
    '<section><h2>Hospital tier and surgeon</h2><p>Relaxation and Luxury are led by Op. Dr Murat Üstün, MD, PhD at JCI-accredited Liv Hospital Vadistanbul in Sarıyer. He has 25+ years of experience, 6,000+ advanced laparoscopic procedures and memberships of BOMSS, IFSO and the International Bariatric Club. Ultra Eco sleeve uses the experienced surgeon team at a partner boutique hospital. Accreditation and volume are useful checks but do not guarantee an outcome.</p></section>' +
    '<section><h2>Bariatric surgery cost FAQs</h2>' + faqs.map(([question, answer]) => '<h3>' + question + '</h3><p>' + answer + '</p>').join("") + '</section>' +
    '<section><h2>Plan your treatment</h2><p>Read the <a href="/weight-loss-surgery-turkey">weight loss surgery Turkey guide</a>, the <a href="/bariatric-surgery-for-uk-patients">UK patient guide</a> and <a href="/insurance">insurance guidance</a>. Request an individual clinical assessment and written GBP quotation before booking travel.</p><p>Reviewed by Op. Dr Murat Üstün, MD, PhD · Last reviewed 17 September 2026</p></section>',
  jsonLd: [
    {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "MedicalWebPage",
          "@id": PAGE_URL + "#webpage",
          url: PAGE_URL,
          name: "Bariatric Surgery Cost in Turkey (2026 All-Inclusive Prices)",
          description: "Bariatric surgery cost in Turkey 2026: sleeve £2,450, bypass £5,000, balloon £1,900, ESG £5,700. Relaxation and Luxury are all-inclusive at a JCI hospital.",
          inLanguage: "en-GB",
          dateModified: "2026-09-17",
          lastReviewed: "2026-09-17",
          reviewedBy: doctor,
          isPartOf: { "@id": SITE_URL + "/#website" },
          about: procedures.map(([name, path]) => ({ "@type": "MedicalProcedure", name, url: SITE_URL + path, performedBy: doctor })),
          mainContentOfPage: { "@type": "WebPageElement", cssSelector: "main" },
        },
        {
          "@type": "FAQPage",
          "@id": PAGE_URL + "#faq",
          mainEntity: faqs.map(([name, text]) => ({ "@type": "Question", name, acceptedAnswer: { "@type": "Answer", text } })),
        },
        ...productNodes,
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL + "/" },
        { "@type": "ListItem", position: 2, name: "Treatments", item: SITE_URL + "/treatments" },
        { "@type": "ListItem", position: 3, name: "Cost of Bariatric Surgery in Turkey", item: PAGE_URL },
      ],
    },
  ],
};
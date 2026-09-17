import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { SEO, JsonLd, structuredData } from "@/components/seo";
import { Link } from "wouter";
import {
  MoneyHero,
  ProseSection,
  Checklist,
  FAQSection,
  RelatedLinks,
  ConversionModule,
  ExpertPOV,
  StickyCTA,
  InlineCTA,
} from "@/components/money-page";

const SITE_URL = "https://istanbulbariatriccenter.com";
const PAGE_URL = SITE_URL + "/cost-of-bariatric-surgery-in-turkey";
const doctor = { "@id": SITE_URL + "/#drmuratustun" };
const seller = { "@id": SITE_URL + "/#organization" };

const prices = [
  { procedure: "Gastric balloon", options: "Orbera / Allurion / Spatz3", dayCase: "£1,900 / £2,600 / £2,900", ultra: "—", relaxation: "—", luxury: "—", href: "/gastric-balloon-turkey" },
  { procedure: "Sleeve gastrectomy", options: "Laparoscopic sleeve", dayCase: "—", ultra: "£2,450", relaxation: "£4,550", luxury: "£4,900", href: "/gastric-sleeve-turkey" },
  { procedure: "Roux-en-Y gastric bypass", options: "RYGB", dayCase: "—", ultra: "—", relaxation: "£5,000", luxury: "£5,350", href: "/gastric-bypass" },
  { procedure: "Mini gastric bypass", options: "OAGB", dayCase: "—", ultra: "—", relaxation: "From £5,000", luxury: "Ask for quote", href: "/mini-gastric-bypass" },
  { procedure: "Duodenal switch", options: "SADI-S / BPD-DS", dayCase: "—", ultra: "—", relaxation: "£5,050", luxury: "£5,400", href: "/duodenal-switch" },
  { procedure: "Endoscopic sleeve gastroplasty", options: "ESG", dayCase: "—", ultra: "—", relaxation: "£5,700", luxury: "—", href: "/esg" },
  { procedure: "Transit bipartition", options: "Individual plan", dayCase: "—", ultra: "—", relaxation: "Quoted after assessment", luxury: "Quoted after assessment", href: "/transit-bipartition" },
  { procedure: "Revision bariatric surgery", options: "Individual plan", dayCase: "—", ultra: "—", relaxation: "Quoted after assessment", luxury: "Quoted after assessment", href: "/revision-bariatric-surgery" },
];

const faqs = [
  {
    question: "How much does bariatric surgery cost in Turkey in 2026?",
    answer: "IBC’s 2026 prices start at £1,900 for an Orbera gastric balloon and £2,450 for an Ultra Eco sleeve. Sleeve Relaxation and Luxury cost £4,550 and £4,900; Roux-en-Y bypass costs £5,000 and £5,350; OAGB starts at £5,000; duodenal switch costs £5,050 and £5,400; and ESG is £5,700. Transit bipartition and revision surgery are quoted after assessment.",
  },
  {
    question: "Why is bariatric surgery cheaper in Turkey than the UK?",
    answer: "Hospital staffing, property, insurance and other operating costs are lower, while procedure volume is high and GBP can buy more locally. These economics can reduce the bill without removing essential clinical resources. Price still does not prove safety, so compare the named surgeon, actual hospital, facilities, inclusions and aftercare.",
  },
  {
    question: "What is included in an all-inclusive package?",
    answer: "Relaxation includes surgery by Op. Dr Murat Üstün at JCI-accredited Liv Hospital Vadistanbul, two hospital nights, four hotel nights, VIP transfers and 12 months of WhatsApp aftercare including a UK-registered dietitian. Luxury adds a fifth luxury-hotel night, private car and full board. Exact inclusions depend on procedure and are listed in the written quote.",
  },
  {
    question: "Are there hidden costs?",
    answer: "IBC lists package inclusions in writing, but patients should budget separately for flights, travel insurance, companion charges not included in the chosen tier, UK tests requested before travel, an extended stay if fit-to-fly is delayed, long-term vitamins, personal spending and possible body contouring later.",
  },
  {
    question: "Can I pay in instalments?",
    answer: "Ask your coordinator about payment options; we do not name third-party lenders. Do not assume an instalment arrangement is available, and request the deposit, balance, card or transfer terms and cancellation conditions in writing before committing.",
  },
  {
    question: "Do prices change with the currency?",
    answer: "You are invoiced in GBP, so the GBP figure in your written quotation is the relevant amount. EUR, USD, AUD and CAD values on this page are static illustrations using approximate September 2026 rates and may differ from the amount charged by your card issuer or bank.",
  },
  {
    question: "What is the cheapest bariatric procedure in Turkey?",
    answer: "The lowest listed treatment is the Orbera gastric balloon at £1,900, followed by the £2,450 Ultra Eco sleeve. They are not equivalent: a balloon is temporary and non-surgical, while sleeve gastrectomy permanently removes part of the stomach. Choose through clinical assessment, not headline price alone.",
  },
  {
    question: "Is the cheapest option safe?",
    answer: "A lower price is neither proof of danger nor proof of safety. Ultra Eco sleeve includes an experienced surgeon team and two nights at a partner boutique hospital but excludes hotel and transfers. Check surgeon responsibility, anaesthesia, emergency facilities, tests, written exclusions and follow-up, and remember every procedure has risks.",
  },
  {
    question: "What does Luxury add over Relaxation?",
    answer: "Luxury retains surgery by Op. Dr Murat Üstün at JCI-accredited Liv Hospital Vadistanbul and adds five luxury-hotel nights rather than four hotel nights, a private car and full board. Procedure prices are £350 higher than Relaxation for sleeve, Roux-en-Y bypass and duodenal switch. Confirm the exact room, companion and meal details in writing.",
  },
  {
    question: "Can I claim any cost back from health insurance?",
    answer: "The NHS and standard travel policies do not normally reimburse planned private bariatric surgery abroad. Coverage varies, so ask your insurer before booking and obtain written confirmation. Specialist medical-travel cover may protect certain travel or complication costs, but exclusions and limits require careful checking.",
  },
];

const procedureNodes = prices.map((item) => ({
  "@type": "MedicalProcedure",
  name: item.procedure,
  url: SITE_URL + item.href,
  performedBy: doctor,
}));

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

const schemaGraph = {
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
      about: procedureNodes,
      mainContentOfPage: { "@type": "WebPageElement", cssSelector: "main" },
    },
    {
      "@type": "FAQPage",
      "@id": PAGE_URL + "#faq",
      mainEntity: faqs.map(({ question, answer }) => ({ "@type": "Question", name: question, acceptedAnswer: { "@type": "Answer", text: answer } })),
    },
    ...productNodes,
  ],
};

const tableClass = "w-full text-left text-sm md:text-base";
const thClass = "p-4 font-semibold";
const tdClass = "p-4 border-t border-slate-200 align-top";

export default function CostOfBariatricSurgery() {
  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="Bariatric Surgery Cost Turkey"
        description="Bariatric surgery cost in Turkey 2026: sleeve £2,450, bypass £5,000, balloon £1,900, ESG £5,700. Relaxation and Luxury are all-inclusive at a JCI hospital."
        image="/images/wls/jci-hospital-reception.webp"
        url="/cost-of-bariatric-surgery-in-turkey"
        type="article"
        author="Op. Dr Murat Üstün, MD, PhD"
      />
      <JsonLd data={structuredData.createBreadcrumb([
        { name: "Home", url: "/" },
        { name: "Treatments", url: "/treatments" },
        { name: "Cost of Bariatric Surgery in Turkey", url: "/cost-of-bariatric-surgery-in-turkey" },
      ])} />
      <JsonLd data={schemaGraph} />
      <Navbar />

      <MoneyHero
        eyebrow="Transparent 2026 pricing · Updated September 2026"
        title="Bariatric Surgery Cost in Turkey (2026 All-Inclusive Prices)"
        subtitle="Compare every priced procedure, Ultra Eco, Relaxation and Luxury inclusions, international private costs and the expenses that sit outside your quotation."
        stats={[
          { value: "£1,900", label: "Balloon from" },
          { value: "£2,450", label: "Sleeve from" },
          { value: "£5,000", label: "Bypass from" },
          { value: "£5,700", label: "ESG" },
        ]}
      />

      <main>
        <section className="py-10 bg-blue-50">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="bg-white border-l-4 border-primary rounded-xl p-6 md:p-8 shadow-sm grid md:grid-cols-2 gap-8 items-center">
              <div>
                <p className="text-sm font-bold text-primary tracking-widest mb-2">QUICK ANSWER</p>
                <p className="text-lg text-slate-700 leading-relaxed">Bariatric surgery prices at IBC range from £2,450 for Ultra Eco sleeve to £5,700 for ESG. Relaxation sleeve is £4,550 and Roux-en-Y bypass £5,000, both performed by Op. Dr Murat Üstün at JCI-accredited Liv Hospital Vadistanbul. Balloon treatment starts at £1,900. Flights are never included, and balloon and Ultra Eco prices exclude hotel and transfers. Your itemised quotation identifies exactly what is included.</p>
              </div>
              <img loading="lazy" width="1024" height="576" src="/images/wls/jci-hospital-reception.webp" alt="Reception at a modern JCI-accredited hospital in Istanbul" className="w-full rounded-2xl" />
            </div>
          </div>
        </section>

        <ProseSection title="Bariatric surgery Turkey prices: the complete 2026 table" id="prices" maxWidth="max-w-7xl">
          <p>These are our current GBP prices for 2026. The columns describe care tiers rather than three versions of every procedure: <strong>Ultra Eco applies only to sleeve gastrectomy</strong>. Balloon services have their own device prices and exclude hotel and transfers. Where anatomy, prior operations or clinical complexity materially alter treatment, an honest price can only follow assessment.</p>
          <div className="overflow-x-auto rounded-xl border border-slate-200">
            <table className={tableClass}>
              <thead className="bg-slate-900 text-white"><tr><th className={thClass}>Procedure</th><th className={thClass}>Option</th><th className={thClass}>Day-case price (no hotel/transfers)</th><th className={thClass}>Ultra Eco</th><th className={thClass}>Relaxation</th><th className={thClass}>Luxury</th></tr></thead>
              <tbody>{prices.map((p) => <tr key={p.procedure}><th scope="row" className={tdClass}><Link href={p.href} className="text-primary hover:underline">{p.procedure}</Link></th><td className={tdClass}>{p.options}</td><td className={tdClass}>{p.dayCase}</td><td className={tdClass}>{p.ultra}</td><td className={tdClass}>{p.relaxation}</td><td className={tdClass}>{p.luxury}</td></tr>)}</tbody>
            </table>
          </div>
          <p><strong>All-inclusive applies to Relaxation and Luxury; Ultra Eco and balloon prices exclude hotel and transfers.</strong></p>
          <p>Prices are valid through 31 December 2026, subject to clinical eligibility and a written quotation. They do not promise an outcome. A recommendation should reflect BMI, reflux, diabetes, eating pattern, medicines, previous surgery, anaesthetic risk and willingness to maintain long-term nutrition monitoring.</p>
          <InlineCTA label="Request an itemised 2026 quote" />
        </ProseSection>

        <ProseSection title="What is included in each package tier?" tone="slate" id="tiers" maxWidth="max-w-7xl">
          <div className="grid md:grid-cols-3 gap-6">
            <article className="bg-white rounded-xl border border-slate-200 p-6">
              <h3 className="text-xl font-bold text-slate-900 mb-3">Ultra Eco · sleeve only</h3>
              <p className="text-base">£2,450 covers the experienced surgeon team, operative care at a partner boutique hospital and two hospital nights. It does not include hotel or transfers. This is a lean clinical pathway, not an all-inclusive travel package, so arrange local transport and accommodation separately.</p>
            </article>
            <article className="bg-white rounded-xl border-2 border-primary p-6">
              <h3 className="text-xl font-bold text-slate-900 mb-3">Relaxation</h3>
              <p className="text-base">Treatment is led by Op. Dr Murat Üstün at Liv Hospital Vadistanbul, a JCI-accredited hospital in Sarıyer. Sleeve includes two hospital nights, four hotel nights, VIP transfers and 12 months of WhatsApp aftercare including a UK-registered dietitian. Confirm procedure-specific details in writing.</p>
            </article>
            <article className="bg-white rounded-xl border border-slate-200 p-6">
              <h3 className="text-xl font-bold text-slate-900 mb-3">Luxury</h3>
              <p className="text-base">Luxury retains Dr Üstün and Liv Hospital, then adds five luxury-hotel nights, a private car and full board. Sleeve is £4,900, Roux-en-Y bypass £5,350 and duodenal switch £5,400. Ask how meals, companion arrangements and vehicle availability apply to your itinerary.</p>
            </article>
          </div>
          <p>“All-inclusive” should not be read as “every possible future expense.” It means the listed package components are bundled. Your quote should name the surgeon, hospital, procedure, included nights, tests, medicines, accommodation, transfers and follow-up. If your health history requires extra investigations or a longer stay, ask whether those costs are included before paying a deposit.</p>
        </ProseSection>

        <ProseSection title="Turkey vs NHS, UK private and international costs" id="comparison" maxWidth="max-w-7xl">
          <p>The figures below compare IBC’s current prices with <strong>typical published private ranges</strong>. Different countries bundle care differently, so ranges are useful for budgeting rather than proof that two pathways are identical. NHS care is free at the point of use for eligible patients, but strict criteria and local commissioning apply.</p>
          <div className="overflow-x-auto rounded-xl border border-slate-200">
            <table className={tableClass}>
              <thead className="bg-slate-900 text-white"><tr><th className={thClass}>Provider / country</th><th className={thClass}>Sleeve</th><th className={thClass}>Bypass</th><th className={thClass}>Context</th></tr></thead>
              <tbody>
                <tr><th scope="row" className={tdClass}>Turkey · IBC</th><td className={tdClass}>£2,450–£4,900</td><td className={tdClass}>£5,000–£5,350 Roux-en-Y</td><td className={tdClass}>Package depends on tier</td></tr>
                <tr><th scope="row" className={tdClass}>UK · NHS</th><td className={tdClass}>Free if eligible</td><td className={tdClass}>Free if eligible</td><td className={tdClass}>Strict criteria; waiting commonly 2–5 years</td></tr>
                <tr><th scope="row" className={tdClass}>UK · private</th><td className={tdClass}>£8,000–£12,000</td><td className={tdClass}>£10,000–£15,000</td><td className={tdClass}>Typical published private ranges</td></tr>
                <tr><th scope="row" className={tdClass}>Germany · private</th><td className={tdClass}>€9,000–€15,000</td><td className={tdClass}>€9,000–€15,000</td><td className={tdClass}>Typical published private ranges</td></tr>
                <tr><th scope="row" className={tdClass}>USA · self-pay</th><td className={tdClass}>$15,000–$25,000</td><td className={tdClass}>$15,000–$25,000</td><td className={tdClass}>Typical published private ranges</td></tr>
                <tr><th scope="row" className={tdClass}>Australia · private</th><td className={tdClass}>A$15,000–A$25,000</td><td className={tdClass}>A$15,000–A$25,000</td><td className={tdClass}>Typical published private ranges</td></tr>
              </tbody>
            </table>
          </div>
          <p>Compare like with like: named operating surgeon, accreditation, hospital nights, anaesthesia and theatre charges, tests, medicines, hotel, transport and meaningful dietetic follow-up. A cheaper total may omit travel support; a higher total may include services you do not need.</p>
        </ProseSection>

        <ProseSection title="Hidden costs to include in your real budget" tone="blue" id="hidden-costs" maxWidth="max-w-6xl">
          <p>IBC quotes list inclusions in writing so the clinical package can be separated from personal travel and longer-term costs. Build a contingency instead of spending your full budget on the headline treatment.</p>
          <Checklist title="Expenses outside or dependent on your package" items={[
            "Return flights are excluded; £120–£280 is a typical UK fare range, but season and airport can move it substantially",
            "Travel insurance, ideally with suitable medical-travel and complication wording",
            "Companion flights, meals, transfers and room supplements not expressly included",
            "Pre-operative tests completed in the UK if the clinical team requests them before travel",
            "Extra accommodation, rebooking and living costs if recovery delays your fit-to-fly approval",
            "Long-term vitamins, minerals, protein products and recommended blood monitoring",
            "Possible body-contouring surgery later, which is a separate decision after weight stabilises",
          ]} />
          <p>Also allow for airport parking or rail fares, mobile roaming, time away from work and ordinary personal spending. A complication can change the itinerary; no responsible provider should guarantee that a fixed travel schedule or total lifetime cost can never change. Read <Link href="/insurance" className="text-primary hover:underline">insurance planning guidance</Link> before booking.</p>
        </ProseSection>

        <ProseSection title="Why is bariatric surgery cheaper in Turkey?" id="why-cheaper">
          <p>Lower prices are mainly an economic difference. Salaries, commercial property, professional services and many hospital operating inputs cost less in Turkey than in the UK, Germany, USA or Australia. Exchange rates can also make locally delivered care less expensive to an international patient paying in GBP.</p>
          <p>Istanbul teams treat a high volume of international and domestic patients, allowing hospitals to use theatres, specialist teams and equipment efficiently. Volume can improve familiarity with a pathway, although it never removes individual risk. Lower cost should not mean fewer pre-operative checks, an unnamed operator or inadequate emergency capability.</p>
          <p>Judge value through verifiable details. Relaxation and Luxury use Op. Dr Murat Üstün and JCI-accredited Liv Hospital Vadistanbul. Dr Üstün has 25+ years of experience and 6,000+ advanced laparoscopic procedures. Ultra Eco costs less because an experienced surgeon team operates at a partner boutique hospital and travel components are excluded—not because it is secretly the same package.</p>
        </ProseSection>

        <ProseSection title="Payment options and price certainty" tone="slate" id="payment">
          <p>Ask your coordinator about payment options; we do not name third-party lenders. Do not make plans on the assumption that instalments or credit will be approved. Request the required deposit, balance deadline, accepted payment methods, card charges, refund conditions and what happens after a clinical postponement in writing.</p>
          <p>Your personalised GBP quotation should state its validity period and whether a medical finding could change the procedure or cost. Never borrow more than you can reasonably repay, and include flights, insurance, supplements and a delay contingency in the total rather than financing only the surgery headline.</p>
        </ProseSection>

        <ProseSection title="Approximate prices in five currencies" id="currency" maxWidth="max-w-6xl">
          <p>These conversions make broad budgeting easier. They are <strong>approximate, September 2026 rates; you are invoiced in GBP</strong>. Rates used are £1 ≈ €1.17, US$1.32, A$1.98 and C$1.80, rounded to the nearest 10. Your bank’s exchange rate and charges may produce a different card or transfer total.</p>
          <div className="overflow-x-auto rounded-xl border border-slate-200">
            <table className={tableClass}>
              <thead className="bg-slate-900 text-white"><tr><th className={thClass}>GBP price</th><th className={thClass}>EUR</th><th className={thClass}>USD</th><th className={thClass}>AUD</th><th className={thClass}>CAD</th></tr></thead>
              <tbody>{[
                ["£1,900", "€2,220", "$2,510", "A$3,760", "C$3,420"],
                ["£2,450", "€2,870", "$3,230", "A$4,850", "C$4,410"],
                ["£4,550", "€5,320", "$6,010", "A$9,010", "C$8,190"],
                ["£4,900", "€5,730", "$6,470", "A$9,700", "C$8,820"],
                ["£5,000", "€5,850", "$6,600", "A$9,900", "C$9,000"],
                ["£5,350", "€6,260", "$7,060", "A$10,590", "C$9,630"],
                ["£5,700", "€6,670", "$7,520", "A$11,290", "C$10,260"],
              ].map((row) => <tr key={row[0]}>{row.map((cell, i) => i === 0 ? <th key={cell} scope="row" className={tdClass}>{cell}</th> : <td key={cell} className={tdClass}>{cell}</td>)}</tr>)}</tbody>
            </table>
          </div>
        </ProseSection>

        <ProseSection title="Cost by procedure" tone="blue" id="procedure-costs" maxWidth="max-w-7xl">
          <div className="grid md:grid-cols-2 gap-6">
            <article className="bg-white rounded-xl border border-slate-200 p-6">
              <h3 className="text-xl font-bold text-slate-900">Gastric sleeve · £2,450–£4,900</h3>
              <p className="text-base mt-3"><Link href="/gastric-sleeve-turkey" className="text-primary hover:underline">Gastric Sleeve Turkey</Link> permanently reduces stomach volume. Ultra Eco is £2,450; Relaxation is £4,550; Luxury is £4,900. The separate <Link href="/gastric-sleeve-turkey-cost" className="text-primary hover:underline">gastric sleeve cost guide</Link> compares every inclusion.</p>
            </article>
            <article className="bg-white rounded-xl border border-slate-200 p-6">
              <h3 className="text-xl font-bold text-slate-900">Gastric bypass · from £5,000</h3>
              <p className="text-base mt-3"><Link href="/gastric-bypass" className="text-primary hover:underline">Roux-en-Y gastric bypass</Link> is £5,000 Relaxation or £5,350 Luxury. <Link href="/mini-gastric-bypass" className="text-primary hover:underline">Mini gastric bypass (OAGB)</Link> starts at £5,000. Reflux, diabetes, BMI and nutritional commitment influence selection.</p>
            </article>
            <article className="bg-white rounded-xl border border-slate-200 p-6">
              <h3 className="text-xl font-bold text-slate-900">Gastric balloon · £1,900–£2,900</h3>
              <p className="text-base mt-3">The <Link href="/gastric-balloon-turkey" className="text-primary hover:underline">gastric balloon</Link> matrix is Orbera £1,900, Allurion £2,600 and adjustable Spatz3 £2,900. These prices exclude hotel and transfers. Device type, eligibility, placement or swallow pathway and removal planning differ.</p>
            </article>
            <article className="bg-white rounded-xl border border-slate-200 p-6">
              <h3 className="text-xl font-bold text-slate-900">ESG · £5,700</h3>
              <p className="text-base mt-3"><Link href="/esg" className="text-primary hover:underline">Endoscopic sleeve gastroplasty</Link> uses internal sutures placed through the mouth and removes no stomach. The £5,700 cost reflects specialist endoscopy, anaesthesia, suturing equipment and aftercare; it should not be compared with balloon price alone.</p>
            </article>
            <article className="bg-white rounded-xl border border-slate-200 p-6">
              <h3 className="text-xl font-bold text-slate-900">Duodenal switch · £5,050–£5,400</h3>
              <p className="text-base mt-3"><Link href="/duodenal-switch" className="text-primary hover:underline">Duodenal switch</Link> is £5,050 Relaxation or £5,400 Luxury. It is a complex metabolic option for selected patients and carries a demanding lifelong supplement, protein and blood-monitoring commitment.</p>
            </article>
            <article className="bg-white rounded-xl border border-slate-200 p-6">
              <h3 className="text-xl font-bold text-slate-900">Individual assessment procedures</h3>
              <p className="text-base mt-3"><Link href="/transit-bipartition" className="text-primary hover:underline">Transit bipartition</Link> and <Link href="/revision-bariatric-surgery" className="text-primary hover:underline">revision bariatric surgery</Link> are quoted after assessment. Prior operative notes, endoscopy or imaging and current anatomy can materially change theatre time and resources.</p>
            </article>
          </div>
          <img loading="lazy" width="1024" height="683" src="/images/balloon/gastric-balloon-anatomy.webp" alt="Medical illustration showing a gastric balloon positioned inside the stomach" className="w-full max-w-4xl mx-auto rounded-2xl mt-8" />
        </ProseSection>

        <ProseSection title="Hospital tier, surgeon and safety value" id="hospital">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <p>The tier difference is not just the room or car. Ultra Eco sleeve uses an experienced surgeon team and partner boutique hospital. Relaxation and Luxury use Op. Dr Murat Üstün at Liv Hospital Vadistanbul in Sarıyer. Liv is JCI accredited, meaning its organisational quality and patient-safety systems undergo external review. Accreditation supports due diligence but does not guarantee an individual result.</p>
              <p>Ask who holds clinical responsibility, which anaesthetist and facility will be used, whether imaging, endoscopy, intensive care and emergency surgery are available, and how bleeding, leak and VTE are handled. A written care pathway is more meaningful than a vague premium label. Read the broader <Link href="/weight-loss-surgery-turkey" className="text-primary hover:underline">weight loss surgery Turkey guide</Link> before comparing options.</p>
            </div>
            <img loading="lazy" width="1024" height="576" src="/images/wls/bariatric-surgeon-consultation.webp" alt="Patient reviewing bariatric procedure and package choices during a surgical consultation" className="w-full rounded-2xl" />
          </div>
        </ProseSection>

        <ExpertPOV title="Clinical review by Op. Dr Murat Üstün" credentials="MD, PhD · 25+ years · 6,000+ advanced laparoscopic procedures">
          <p>Op. Dr Murat Üstün has more than 25 years of experience and has completed 6,000+ advanced laparoscopic procedures. He is a member of BOMSS, IFSO and the International Bariatric Club. Relaxation and Luxury surgery is delivered at JCI-accredited Liv Hospital Vadistanbul in Sarıyer, Istanbul.</p>
          <p>Price should narrow a realistic shortlist, not decide the operation. The clinically appropriate procedure depends on anatomy, reflux, metabolic disease, previous treatment, risk and ability to follow lifelong nutrition guidance. Assessment may recommend further tests, a different option or no intervention.</p>
        </ExpertPOV>

        <FAQSection title="Bariatric surgery cost Turkey FAQs" faqs={faqs} withJsonLd={false} />

        <ConversionModule
          title="Get your itemised 2026 quotation"
          text="Share your BMI, medical history, medicines, reflux or diabetes history and any previous bariatric records. Your coordinator can arrange clinical review and a written GBP quote showing inclusions and exclusions."
          buttonLabel="Request a free assessment"
        />

        <RelatedLinks title="Procedure and planning guides" links={[
          { title: "Gastric Sleeve Turkey", description: "Compare sleeve candidacy, packages, recovery and risks.", href: "/gastric-sleeve-turkey" },
          { title: "Gastric sleeve Turkey cost", description: "See a detailed three-tier sleeve cost breakdown.", href: "/gastric-sleeve-turkey-cost" },
          { title: "Gastric bypass", description: "Understand Roux-en-Y benefits, costs and follow-up.", href: "/gastric-bypass" },
          { title: "Mini gastric bypass", description: "Read about OAGB selection and long-term monitoring.", href: "/mini-gastric-bypass" },
          { title: "Bariatric surgery for UK patients", description: "Plan travel, records and care after returning home.", href: "/bariatric-surgery-for-uk-patients" },
          { title: "Insurance", description: "Questions to ask before buying medical-travel cover.", href: "/insurance" },
        ]} />

        <footer className="py-8 text-center text-sm text-slate-600 border-t">Reviewed by Op. Dr Murat Üstün, MD, PhD · Last reviewed 17 September 2026</footer>
      </main>
      <Footer />
      <StickyCTA guideHref="/weight-loss-surgery-turkey" />
    </div>
  );
}
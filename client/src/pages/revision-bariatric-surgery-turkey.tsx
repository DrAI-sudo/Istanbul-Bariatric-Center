import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { SEO, JsonLd, structuredData } from "@/components/seo";
import { Link } from "wouter";
import {
  MoneyHero,
  ProseSection,
  ComparisonBlock,
  Checklist,
  FAQSection,
  RelatedLinks,
  ConversionModule,
  ExpertPOV,
  StickyCTA,
  InlineCTA,
} from "@/components/money-page";

const SITE_URL = "https://istanbulbariatriccenter.com";
const PAGE_URL = `${SITE_URL}/revision-bariatric-surgery-turkey`;

const faqs = [
  { question: "When should I consider revision bariatric surgery?", answer: "Consider assessment after substantial weight regain, a BMI again above 35 despite consistent lifestyle effort, PPI-refractory reflux after sleeve, or a failed gastric band. Anatomy and contributing factors should be investigated before a revision is chosen." },
  { question: "Can a stretched gastric sleeve be revised without surgery?", answer: "Often, yes. Revisional endoscopic sleeve gastroplasty can re-suture a dilated sleeve from inside without abdominal incisions. Published series report 15.7% total body weight loss at 12 months. Severe reflux or major dilation may instead favour surgical conversion." },
  { question: "What is TORe?", answer: "Transoral Outlet Reduction is an endoscopic procedure for weight regain after Roux-en-Y bypass when the outlet has dilated. It uses ablation and full-thickness sutures to narrow the outlet, with no abdominal incisions. Published mean total body weight loss is about 7–8% at 6–12 months." },
  { question: "What is GFMA and does it help with weight regain?", answer: "Gastric Fundic Mucosal Ablation is an endoscopic treatment of the fundic lining, an area involved in ghrelin production. It may be considered for hunger-driven regain, commonly alongside revisional ESG. Evidence is still developing and individual results vary." },
  { question: "How much does revision surgery cost in Turkey?", answer: "Visible 2026 prices are starting from £2,900 for R-ESG, starting from £3,200 for TORe, starting from £3,200 for GFMA, starting from £3,400 for band removal, starting from £4,200 for band removal with one-stage sleeve, starting from £5,000 for sleeve-to-bypass and starting from £5,500 for sleeve-to-SADI-S. A written assessment confirms suitability, inclusions and final cost." },
  { question: "Is revision more risky than the original operation?", answer: "Revision is generally more complex because previous surgery creates altered anatomy and scar tissue. Endoscopic and surgical risks differ. Surgeon revisional experience, careful investigation, hospital resources and willingness to stage a difficult operation all matter." },
  { question: "How long after my first surgery can I have revision?", answer: "Assessment is usually most informative after at least 12 months, and often 18–24 months, because weight and anatomy continue changing. A symptomatic failed band or another complication may require earlier treatment." },
  { question: "Can a gastric band be removed and converted to a sleeve in one operation?", answer: "It can be appropriate when tissue around the band is suitable. Erosion, inflammation or heavy scarring may make a staged approach safer. The final decision is made after endoscopy and intraoperative assessment." },
  { question: "Can I have revision if my first surgery was in the UK, Germany or the US?", answer: "Yes. The location of the first operation is less important than understanding exactly what was done. Send the operative report, discharge summary, imaging, endoscopy reports and current health information before review." },
  { question: "What records do I need from my original surgeon?", answer: "Send the primary operative report, discharge summary, any later imaging or endoscopy reports, a current medicine and supplement list, recent blood results and a weight history including nadir and current weight." },
  { question: "Will insurance cover revision surgery?", answer: "Cover varies by insurer and policy, and many patients self-fund. Ask your insurer directly and obtain written confirmation. If travelling, choose a policy that explicitly covers planned medical treatment and related complications, and read exclusions carefully." },
  { question: "How long is recovery from revision?", answer: "After an uncomplicated endoscopic revision, desk work may be possible in 3–5 days and physical work in 7–10 days. Surgical conversion commonly requires 10–14 days away from desk work and 3–4 weeks before physical work. Your clinical team must personalise travel and return-to-work advice." },
];

const doctor = { "@id": `${SITE_URL}/#drmuratustun` };
const seller = { "@id": `${SITE_URL}/#organization` };
const procedure = (id: string, name: string, location: string, description: string, how: string, preparation: string, followup: string, minPrice: number, endoscopic = false) => ({
  "@type": "MedicalProcedure", "@id": `${PAGE_URL}#${id}`, name,
  ...(endoscopic ? { procedureType: "https://schema.org/NoninvasiveProcedure" } : {}),
  bodyLocation: location, description, howPerformed: how, preparation, followup, performedBy: doctor,
  offers: {
    "@type": "Offer",
    priceSpecification: { "@type": "PriceSpecification", minPrice, priceCurrency: "GBP" },
    priceCurrency: "GBP",
    availability: "https://schema.org/InStock",
    eligibleRegion: { "@type": "Country", name: "United Kingdom", identifier: "GB" },
    url: `${PAGE_URL}#pricing`,
    seller,
  },
});
const medicalGraph = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "MedicalWebPage", "@id": `${PAGE_URL}#webpage`, url: PAGE_URL,
      name: "Revision Bariatric Surgery in Turkey — TORe, Re-Sleeve & Conversion",
      description: "Revision bariatric surgery in Istanbul for weight regain, reflux, sleeve dilation or band failure, including endoscopic and surgical options.",
      inLanguage: "en-GB", dateModified: "2026-09-17",
      primaryImageOfPage: { "@type": "ImageObject", url: `${SITE_URL}/images/revision/endoscopic-revision-procedure.webp`, width: 1024, height: 683 },
      isPartOf: { "@id": `${SITE_URL}/#website` }, reviewedBy: doctor, lastReviewed: "2026-09-17",
      about: ["tore", "gfma", "resg", "gfma-resg", "sleeve-to-rygb", "sleeve-to-sadi-s", "band-removal", "band-removal-sleeve"].map(id => ({ "@id": `${PAGE_URL}#${id}` })),
    },
    procedure("tore", "Transoral Outlet Reduction (TORe)", "Gastrojejunal anastomosis after Roux-en-Y gastric bypass", "Published series report mean total body weight loss around 7–8% at 6–12 months.", "Endoscopic ablation and full-thickness suturing narrow a dilated outlet without abdominal incisions.", "Blood tests, endoscopy and review of the primary bypass records.", "A phased diet progresses from fluids to purée and soft food.", 3200, true),
    procedure("gfma", "Gastric Fundic Mucosal Ablation (GFMA)", "Gastric fundus", "An emerging option for selected hunger-driven regain; individual results vary.", "Endoscopic ablation treats the fundic mucosa and may be combined with revisional ESG.", "Blood tests, clinical review and upper GI endoscopy.", "A phased diet is followed for four to six weeks.", 3200, true),
    procedure("resg", "Revisional Endoscopic Sleeve Gastroplasty (R-ESG)", "Dilated sleeve stomach", "Published series report mean total body weight loss of 15.7% at 12 months.", "Full-thickness endoscopic sutures reduce a dilated surgical sleeve without abdominal incisions.", "Blood tests, endoscopy and review of the primary sleeve records.", "Fluids followed by purée and soft food under clinical guidance.", 2900, true),
    procedure("gfma-resg", "Combined GFMA and Revisional Endoscopic Sleeve Gastroplasty", "Gastric fundus and dilated sleeve stomach", "A combined endoscopic option for selected patients with hunger-driven regain and sleeve dilation.", "Fundic mucosal ablation and full-thickness endoscopic sleeve suturing are performed in one treatment pathway.", "Blood tests, clinical review, upper GI endoscopy and review of the primary sleeve records.", "A phased diet progresses from fluids to purée and soft food.", 4900, true),
    procedure("sleeve-to-rygb", "Sleeve to Roux-en-Y Gastric Bypass Conversion", "Stomach and small intestine", "A surgical conversion considered particularly for severe reflux after sleeve; outcomes depend on anatomy and adherence.", "Laparoscopic revision converts the sleeve to Roux-en-Y gastric bypass.", "Full pre-operative work-up, endoscopy, imaging and primary operation records.", "Phased diet, supplements and long-term nutritional monitoring are required.", 5000),
    procedure("sleeve-to-sadi-s", "Sleeve to SADI-S Conversion", "Stomach and small intestine", "A surgical conversion with a strong metabolic effect; outcomes depend on anatomy and adherence.", "Laparoscopic revision adds a single-anastomosis duodeno-ileal bypass to the existing sleeve.", "Full pre-operative work-up, endoscopy, imaging and primary operation records.", "Phased diet, supplements and long-term nutritional monitoring are required.", 5500),
    procedure("band-removal", "Gastric Band Removal", "Stomach", "Band removal alone may be appropriate for slippage, erosion, obstruction or intolerance; weight regain can occur.", "The gastric band, port and tubing are removed laparoscopically.", "Upper GI imaging, endoscopy and review of primary records.", "Recovery and diet are personalised after removal.", 3400),
    procedure("band-removal-sleeve", "Gastric Band Removal with One-Stage Sleeve Gastrectomy", "Stomach", "A one-stage conversion may be possible when tissue is suitable; erosion or heavy scarring may require staged treatment.", "The band, port and tubing are removed laparoscopically and sleeve gastrectomy is performed during the same operation.", "Upper GI imaging, endoscopy and review of primary records.", "A phased post-sleeve diet and long-term nutritional monitoring are required.", 4200),
  ],
};

const tableClass = "w-full text-left text-sm md:text-base";
const thClass = "p-4 font-semibold";
const tdClass = "p-4 border-t border-slate-200 align-top";

export default function RevisionBariatricSurgeryTurkey() {
  return (
    <div className="min-h-screen bg-white">
      <SEO title="Revision Surgery Turkey 2026" description="Revision bariatric surgery Turkey: compare TORe, R-ESG, GFMA, band removal and surgical conversion, with 2026 prices, candidacy and risks." image="/images/revision/endoscopic-revision-procedure.webp" url="/revision-bariatric-surgery-turkey" type="article" author="Op. Dr Murat Üstün, MD, PhD" />
      <JsonLd data={structuredData.createBreadcrumb([{ name: "Home", url: "/" }, { name: "Treatments", url: "/treatments" }, { name: "Revision Bariatric Surgery", url: "/revision-bariatric-surgery-turkey" }])} />
      <JsonLd data={medicalGraph} />
      <JsonLd data={structuredData.createFAQ(faqs)} />
      <Navbar />
      <MoneyHero
        eyebrow="Endoscopic and surgical revision at a JCI hospital"
        title="Revision Bariatric Surgery in Turkey — TORe, Re-Sleeve & Conversion"
        subtitle="Explore options for weight regain, sleeve dilation, band failure or severe reflux with Op. Dr Murat Üstün, who has 25+ years of experience and 300+ complex revisional procedures."
        stats={[{ value: "Starting from £2,900", label: "2026 price" }, { value: "300+", label: "Complex revisions" }, { value: "25+ years", label: "Surgical experience" }, { value: "JCI", label: "Liv Hospital Vadistanbul" }]}
      />
      <main>
        <section className="py-10 bg-blue-50">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="bg-white border-l-4 border-primary rounded-xl p-6 md:p-8 shadow-sm grid md:grid-cols-2 gap-7 items-center">
              <div><p className="text-sm font-bold text-primary tracking-widest mb-2">QUICK ANSWER</p><p className="text-lg text-slate-700 leading-relaxed">Weight regain after sleeve may suit R-ESG, starting from £2,900. Weight regain after bypass with a dilated outlet may suit TORe, starting from £3,200. Severe <Link href="/reflux-after-gastric-sleeve" className="text-primary hover:underline">reflux after gastric sleeve</Link> may require conversion to bypass, starting from £5,000. Failed-band conversion is starting from £4,200. Endoscopy, records and clinical goals determine the route.</p></div>
              <img loading="lazy" width="1024" height="683" src="/images/revision/endoscopic-revision-procedure.webp" alt="Illustrative: surgeon performing an endoscopic revision procedure" className="w-full rounded-2xl" />
            </div>
          </div>
        </section>

        <ComparisonBlock title="Which revision fits your case — decision matrix" subtitle="This orientation cannot replace review of your anatomy, symptoms and original operation." columns={["Clinical situation", "Possible pathway", "Key point"]} rows={[
          ["Weight regain after sleeve, mild dilation, no reflux", "R-ESG, sometimes with GFMA", "Starting from £2,900; endoscopic"],
          ["Hunger-led regain after sleeve", "GFMA plus R-ESG", "Hormonal and mechanical approach"],
          ["Severe PPI-refractory reflux after sleeve", "Conversion to RYGB", "Starting from £5,000; surgical"],
          ["Regain after RYGB with dilated outlet", "TORe", "Starting from £3,200; endoscopic"],
          ["Diabetes recurrence and substantial regain", "Consider SADI-S conversion", "Starting from £5,500; surgical"],
          ["Failed adjustable gastric band", "Band removal with possible sleeve", "Starting from £3,400 removal; Starting from £4,200 with sleeve"],
          ["Leak, stricture or complex previous revision", "Individual staged plan", "Records and imaging required"],
        ]} />

        <ProseSection title="Endoscopic revision options" id="endoscopic" maxWidth="max-w-6xl">
          <p>Endoscopic revision avoids abdominal incisions and can be appropriate when anatomy and symptoms support a less invasive route. Dr Üstün is the only Boston Scientific-certified surgical ESG trainer in Turkey. This does not make every patient an endoscopic candidate.</p>
          <div className="grid md:grid-cols-3 gap-5">
            <div id="tore" className="border rounded-xl p-6"><h3 className="font-bold text-xl">TORe</h3><p>For a dilated outlet after Roux-en-Y bypass. Ablation and sutures reduce the outlet to restore restriction. Starting from £3,200.</p></div>
            <div id="gfma" className="border rounded-xl p-6"><h3 className="font-bold text-xl">GFMA</h3><p>Endoscopic treatment of fundic mucosa for selected hunger-driven regain, often combined with R-ESG. Starting from £3,200.</p></div>
            <div id="resg" className="border rounded-xl p-6"><h3 className="font-bold text-xl">R-ESG</h3><p>Full-thickness internal sutures re-narrow a dilated surgical sleeve. Published mean 15.7% TBWL at 12 months. Starting from £2,900.</p></div>
          </div>
          <p>These procedures are generally day-case treatments under sedation, followed by fluids, purée and soft foods. Explore the related <Link href="/esg" className="text-primary hover:underline">endoscopic sleeve gastroplasty pathway</Link>.</p>
        </ProseSection>

        <ProseSection title="When surgical revision is needed" tone="blue" id="surgical">
          <p>Surgical conversion may be more appropriate for severe reflux, major sleeve dilation, recurrent diabetes, obstruction, very high BMI or a failed band. Conversion to <Link href="/gastric-bypass" className="text-primary hover:underline">Roux-en-Y gastric bypass</Link> is commonly considered for refractory reflux. SADI-S may provide a stronger metabolic effect but requires careful nutritional follow-up.</p>
          <p>Sleeve-to-bypass is starting from £5,000; sleeve-to-SADI-S is starting from £5,500; band removal is starting from £3,400; and band removal with one-stage <Link href="/sleeve-gastrectomy" className="text-primary hover:underline">sleeve gastrectomy</Link> is starting from £4,200. Erosion or heavy scarring may make a staged approach safer.</p>
        </ProseSection>

        <ProseSection title="Revision cost by procedure — 2026 pricing" tone="slate" id="pricing" maxWidth="max-w-6xl">
          <div className="overflow-x-auto rounded-xl border bg-white"><table className={tableClass}><thead className="bg-slate-900 text-white"><tr><th className={thClass}>Procedure</th><th className={thClass}>Type</th><th className={thClass}>2026 price</th></tr></thead><tbody>{[
            ["Revisional ESG (R-ESG)", "Endoscopic", "Starting from £2,900"],
            ["TORe", "Endoscopic", "Starting from £3,200"],
            ["GFMA", "Endoscopic", "Starting from £3,200"],
            ["Combined GFMA + R-ESG", "Combined", "Starting from £4,900"],
            ["Gastric band removal", "Surgical", "Starting from £3,400"],
            ["Band removal + one-stage sleeve", "Surgical", "Starting from £4,200"],
            ["Sleeve to RYGB conversion", "Surgical", "Starting from £5,000"],
            ["Sleeve to SADI-S conversion", "Surgical", "Starting from £5,500"],
          ].map(([a,b,c]) => <tr key={a}><th scope="row" className={tdClass}>{a}</th><td className={tdClass}>{b}</td><td className={tdClass}>{c}</td></tr>)}</tbody></table></div>
          <p>Your written quotation should list hospital care, anaesthesia, medicines, accommodation, transfers and aftercare separately. Complexity and findings can change the final plan; no complication-fee guarantee is implied.</p>
          <InlineCTA label="Request a written revision assessment" />
        </ProseSection>

        <ProseSection title="Who qualifies for revision — objective criteria" id="criteria" maxWidth="max-w-6xl">
          <div className="overflow-x-auto rounded-xl border"><table className={tableClass}><thead className="bg-slate-900 text-white"><tr><th className={thClass}>Trigger</th><th className={thClass}>Threshold</th><th className={thClass}>First step</th></tr></thead><tbody>{[
            ["Weight regain", "At least 25% of weight lost from nadir, or BMI again above 35", "Structured lifestyle and anatomical review"],
            ["Time since primary surgery", "Usually at least 12 months; ideally 18–24", "Review weight trajectory and anatomy"],
            ["Reflux after sleeve", "PPI-refractory GERD, oesophagitis or Barrett's", "Optimise medicine and perform endoscopy"],
            ["Failed band", "Slippage, erosion, obstruction or intolerance", "Prompt specialist assessment"],
            ["Diabetes recurrence", "HbA1c above 6.5% despite medical treatment", "Endocrinology and surgical review"],
            ["Contraindication", "Untreated psychiatric instability, substance misuse or inability to follow supplements", "Treat before reconsidering revision"],
          ].map(([a,b,c]) => <tr key={a}><th scope="row" className={tdClass}>{a}</th><td className={tdClass}>{b}</td><td className={tdClass}>{c}</td></tr>)}</tbody></table></div>
          <p>Read more about <Link href="/weight-regain-after-gastric-sleeve" className="text-primary hover:underline">weight regain after gastric sleeve</Link> and why investigation comes before another procedure.</p>
        </ProseSection>

        <ProseSection title="Records checklist for your review" tone="blue" id="records">
          <img loading="lazy" width="1024" height="683" src="/images/revision/surgeon-reviewing-records.webp" alt="Illustrative: surgeon reviewing previous operation records and imaging" className="w-full rounded-2xl mb-8" />
          <Checklist title="Send these records where available" items={[
            "Operative report from the primary procedure",
            "Discharge summary from the original admission",
            "Upper GI series, CT, MRI or other post-operative imaging",
            "Recent endoscopy report",
            "Current medicines and supplements",
            "Recent blood tests including FBC, kidney and liver function, iron, B12, folate, vitamin D, calcium and HbA1c",
            "Weight history including nadir date, nadir weight and current weight",
          ]} />
        </ProseSection>

        <ProseSection title="Video second-opinion pathway" id="review">
          <img loading="lazy" width="1024" height="683" src="/images/revision/patient-video-second-opinion.webp" alt="Patient at home preparing records for a video second opinion" className="w-full rounded-2xl mb-8" />
          <ol className="space-y-3">{[
            ["1 · Records submission", "Send operation notes, imaging, medicines and weight history."],
            ["2 · Clinical triage", "Missing information is identified before review."],
            ["3 · Surgeon review", "Dr Üstün reviews anatomy, symptoms and possible routes."],
            ["4 · Video consultation", "Discuss benefits, alternatives, uncertainty and risk."],
            ["5 · Written summary", "Receive the proposed option, timing, price and alternatives in writing."],
            ["6 · Your decision", "Take time to decide without a treatment guarantee."],
          ].map(([stage,text]) => <li key={stage} className="border rounded-xl p-5"><strong>{stage}</strong><p className="text-base mt-1">{text}</p></li>)}</ol>
          <p>For the full enquiry route, use the <Link href="/contact" className="text-primary hover:underline">contact page</Link>.</p>
        </ProseSection>

        <ProseSection title="Real patient outcomes">
          <p>Genuine, consented patient outcomes are shown on our <Link href="/results" className="text-primary hover:underline">Results page</Link>. Individual results vary.</p>
        </ProseSection>

        <ProseSection title="Risks specific to revision surgery" tone="slate" id="risks" maxWidth="max-w-6xl">
          <p>Revision generally carries more technical complexity than primary surgery. The figures below are broad published ranges and are not a personal risk estimate.</p>
          <div className="overflow-x-auto rounded-xl border bg-white"><table className={tableClass}><thead className="bg-slate-900 text-white"><tr><th className={thClass}>Complication</th><th className={thClass}>Endoscopic revision</th><th className={thClass}>Surgical revision</th><th className={thClass}>Primary surgery comparison</th></tr></thead><tbody>{[
            ["Bleeding", "1–2%", "2–4%", "1–2%"],
            ["Leak", "Under 0.5%", "2–4%", "1–2%"],
            ["Reoperation within 30 days", "Under 1%", "3–5%", "1–3%"],
            ["30-day mortality", "Under 0.05%", "Under 0.3%", "Under 0.1%"],
            ["Stricture", "1–3%", "2–5%", "1–2%"],
          ].map(([a,b,c,d]) => <tr key={a}><th scope="row" className={tdClass}>{a}</th><td className={tdClass}>{b}</td><td className={tdClass}>{c}</td><td className={tdClass}>{d}</td></tr>)}</tbody></table></div>
          <p>Full endoscopy, review of previous records, an appropriately equipped hospital and staging when findings warrant it are important safeguards. Seek urgent local assessment for severe pain, fever, rapid heartbeat, breathlessness, bleeding, fainting or inability to drink.</p>
        </ProseSection>

        <ExpertPOV title="Experience in complex revision" credentials="MD, PhD · 25+ years · 300+ complex revisional procedures">
          <p><Link href="/dr-murat-ustun" className="text-primary hover:underline">Op. Dr Murat Üstün</Link> has 25+ years of experience, 6,000+ procedures and 300+ complex revisional procedures. He is a BOMSS, IFSO and International Bariatric Club member and the only Boston Scientific-certified surgical ESG trainer in Turkey.</p>
          <p>Eligible procedures take place at JCI-accredited Liv Hospital Vadistanbul. Credentials and accreditation support informed selection but cannot guarantee an outcome.</p>
        </ExpertPOV>

        <FAQSection title="Revision bariatric surgery FAQs" faqs={faqs} withJsonLd={false} />
        <ConversionModule title="Request a revision assessment" text="Share your records and current symptoms for a no-obligation clinical review. If a revision is appropriate, request a written plan identifying the procedure, hospital, inclusions, exclusions and individual risks." buttonLabel="Request a free assessment" />
        <RelatedLinks title="Related revision resources" links={[
          { title: "Endoscopic sleeve gastroplasty", description: "Understand incisionless stomach suturing.", href: "/esg" },
          { title: "Reflux after gastric sleeve", description: "Compare investigation and treatment routes.", href: "/reflux-after-gastric-sleeve" },
          { title: "Weight regain after sleeve", description: "Understand causes before choosing revision.", href: "/weight-regain-after-gastric-sleeve" },
          { title: "Gastric bypass", description: "Learn about Roux-en-Y conversion anatomy.", href: "/gastric-bypass" },
          { title: "Weight loss surgery Turkey", description: "Compare surgical and endoscopic procedures.", href: "/weight-loss-surgery-turkey" },
          { title: "Real patient results", description: "Review genuine outcomes.", href: "/results" },
          { title: "All treatments", description: "Explore every treatment pathway.", href: "/treatments" },
        ]} />
        <footer className="py-8 text-center text-sm text-slate-600 border-t">Reviewed by Op. Dr Murat Üstün, MD, PhD · Last reviewed 17 September 2026</footer>
      </main>
      <Footer />
      <StickyCTA guideHref="/contact" />
    </div>
  );
}
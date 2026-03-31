import { useState } from "react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { SEO, JsonLd, structuredData } from "@/components/seo";
import {
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  Plane,
  Hotel,
  Stethoscope,
  ShieldCheck,
  Clock,
  Euro,
  HeartPulse,
  ArrowRight,
  Star,
  MapPin,
  Phone,
  MessageCircle,
  Award,
  Calculator,
  Users,
  TrendingDown,
  Utensils,
  Activity,
} from "lucide-react";
import { Link } from "wouter";

const seFaqs = [
  {
    question: "Är ESG tillgängligt via den svenska sjukvården?",
    answer: "Endoskopisk sleeve gastroplastik erbjuds för närvarande inte inom den offentliga sjukvården i Sverige. Enstaka privata kliniker i Stockholm och Göteborg kan erbjuda proceduren, men till betydligt högre priser (80 000–150 000 SEK). Istanbul Bariatric Center erbjuder samma behandling med internationella kvalitetsstandarder till ett transparent pris på € 6 450 — allt inkluderat.",
  },
  {
    question: "Hur länge behöver jag stanna i Istanbul?",
    answer: "De flesta svenska patienter stannar i Istanbul i 3-4 dagar. Ni anländer dagen före proceduren, ESG genomförs nästa dag, tredje dagen vilar ni på hotellet och fjärde dagen återvänder ni till Sverige. Direktflyg från Stockholm Arlanda, Göteborg Landvetter och andra svenska flygplatser (~3-3,5 timmar).",
  },
  {
    question: "Gör proceduren ont?",
    answer: "ESG genomförs under generell anestesi — ni känner ingenting under proceduren. Efter uppvaknandet kan ni uppleva milt obehag, illamående eller en känsla av tyngd i magen. Dessa symtom försvinner vanligtvis inom 1-3 dagar och hanteras väl med läkemedel. Jämfört med traditionell kirurgi är återhämtningen betydligt mer komfortabel.",
  },
  {
    question: "Är resultaten hållbara?",
    answer: "Ja, med rätt livsstil. ESG skapar en fysisk volymreduktion av magsäcken — det är en strukturell förändring. Men för att bibehålla resultaten är det viktigt att följa kostplanen, vara regelbundet fysiskt aktiv och delta i uppföljningsträffar. Vårt 12-månaders nutritionsprogram med en kvalificerad dietist ingår i alla paket.",
  },
  {
    question: "Vad är skillnaden mellan ESG och Ozempic/Wegovy?",
    answer: "GLP-1-läkemedel som Ozempic och Wegovy kan vara effektiva initialt, men många patienter går upp i vikt igen efter att behandlingen avslutas. De löpande månadskostnaderna (1 500-3 500 SEK/månad) ackumuleras snabbt. ESG erbjuder en engångslösning — en fysisk reduktion av magsäcken utan återkommande kostnader.",
  },
  {
    question: "Vilket BMI krävs för ESG?",
    answer: "ESG rekommenderas generellt för patienter med ett BMI mellan 30 och 40. Proceduren är särskilt lämpad för personer som inte uppnått varaktiga resultat med diet och motion, som inte önskar invasiv kirurgi, eller som föredrar en minimalt invasiv metod med kort återhämtningstid.",
  },
  {
    question: "Är det säkert att få medicinsk behandling utomlands?",
    answer: "Istanbul Bariatric Center verkar i Liv Hospital, ackrediterat av JCI (Joint Commission International) — den internationella guldstandarden för patientsäkerhet och vårdkvalitet. Dr. Murat Üstün har genomfört tusentals ESG-procedurer med utmärkta säkerhetsresultat. Vi erbjuder samma — eller högre — kvalitetsstandarder som de bästa privata klinikerna i Sverige.",
  },
  {
    question: "Vad ingår i all-inclusive-paketet?",
    answer: "Vårt ESG-paket till € 6 450 inkluderar: den fullständiga proceduren, sjukhusvistelse på JCI-ackrediterat sjukhus, preoperativa tester och analyser, VIP-transfer från flygplatsen, hotellboende, postoperativa läkemedel, kvalificerat nutritionsstöd i 12 månader och löpande uppföljning. Inga dolda kostnader.",
  },
];

const journeySteps = [
  {
    step: 1,
    title: "Gratis onlinekonsultation",
    desc: "Kontakta oss via WhatsApp eller vår hemsida. Vårt team utvärderar ert BMI, medicinsk historia och mål för att bekräfta lämplighet för ESG.",
    icon: MessageCircle,
  },
  {
    step: 2,
    title: "Resa till Turkiet",
    desc: "Välj datum — vi organiserar resten. Direktflyg från Stockholm Arlanda, Göteborg Landvetter och andra flygplatser (~3-3,5 timmar).",
    icon: Plane,
  },
  {
    step: 3,
    title: "VIP-transfer och hotell",
    desc: "En privat chaufför möter er på Istanbuls flygplats och kör er till hotellet. Installera er och förbered er inför morgondagen.",
    icon: Hotel,
  },
  {
    step: 4,
    title: "Preoperativa undersökningar",
    desc: "Fullständiga blodprover och hälsokontroll på sjukhuset. Personligt möte med Dr. Murat Üstün och det medicinska teamet.",
    icon: Stethoscope,
  },
  {
    step: 5,
    title: "ESG-proceduren",
    desc: "ESG genomförs under generell anestesi på Liv Hospital (JCI). Varaktighet: 60-90 minuter. Inga snitt, inga ärr.",
    icon: HeartPulse,
  },
  {
    step: 6,
    title: "Återhämtning och hemresa",
    desc: "Vila på hotellet med kontinuerlig medicinsk uppföljning. De flesta patienter återvänder till Sverige inom 2-3 dagar efter proceduren.",
    icon: Plane,
  },
];

const comparisonMeds = [
  { factor: "Långsiktig effekt", meds: "Begränsad — vikten återkommer ofta efter avslutad behandling", esg: "Stabil — permanent fysisk reduktion av magsäcken" },
  { factor: "Biverkningar", meds: "Vanliga (illamående, diarré, risk för pankreatit)", esg: "Få (milt obehag 1-3 dagar)" },
  { factor: "Kostnad", meds: "Löpande 1 500-3 500 SEK/månad (18 000-42 000 SEK/år)", esg: "Engångskostnad: € 6 450 allt inkluderat" },
  { factor: "Viktuppgång", meds: "Vanlig efter avslutad medicinering", esg: "Begränsad vid hälsosam livsstil" },
  { factor: "Ingrepp", meds: "Nej — vecko-/dagliga injektioner", esg: "Ja — en enda endoskopisk procedur (60-90 min)" },
];

const comparisonSurgery = [
  { feature: "Typ av ingrepp", esg: "Endoskopiskt (via munnen)", sleeve: "Laparoskopisk kirurgi (4-5 snitt)" },
  { feature: "Anestesi", esg: "Generell", sleeve: "Generell" },
  { feature: "Varaktighet", esg: "60-90 minuter", sleeve: "~60 minuter" },
  { feature: "Sjukhusvistelse", esg: "Samma dag eller 1 natt", sleeve: "2-3 nätter" },
  { feature: "Återhämtning", esg: "1-3 dagar", sleeve: "2-3 veckor" },
  { feature: "Ärr", esg: "Inga", sleeve: "4-5 små" },
  { feature: "Viktnedgång", esg: "15-20% av kroppsvikten", sleeve: "60-70% av övervikten" },
  { feature: "Reversibilitet", esg: "Potentiellt reversibel", sleeve: "Permanent (magvävnad avlägsnad)" },
  { feature: "Riskprofil", esg: "Mycket låg", sleeve: "Låg" },
];

const seTestimonials = [
  {
    name: "Anna L.",
    location: "Stockholm",
    text: "Efter år av dieter och Ozempic utan varaktiga resultat hittade jag ESG. Teamet på Istanbul Bariatric Center var otroligt professionellt och omtänksamt. På 5 månader gick jag ner 16 kg. Äntligen känner jag mig fri.",
    weight: "−16 kg",
    time: "5 månader",
  },
  {
    name: "Erik M.",
    location: "Göteborg",
    text: "Jag var till en början skeptisk till behandling utomlands. Men Liv Hospital överträffade alla mina förväntningar — kvaliteten var högre än vad jag sett i Sverige. Dr. Murat är en exceptionell läkare och priset var en bråkdel av vad det skulle kosta hemma.",
    weight: "−20 kg",
    time: "6 månader",
  },
  {
    name: "Sofia K.",
    location: "Malmö",
    text: "Från flygplatstransfer till nutritionsstöd — allt var perfekt organiserat. Jag hade aldrig trott att resultaten skulle komma så snabbt. 12-månaders programmet hjälpte mig verkligen att förändra mina matvanor. Rekommenderar starkt!",
    weight: "−14 kg",
    time: "4 månader",
  },
];

function BMICalculator() {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [bmi, setBmi] = useState<number | null>(null);

  const calculateBMI = () => {
    const h = parseFloat(height) / 100;
    const w = parseFloat(weight);
    if (h > 0 && w > 0) {
      setBmi(Math.round((w / (h * h)) * 10) / 10);
    }
  };

  const getBMICategory = (bmi: number) => {
    if (bmi < 18.5) return { label: "Undervikt", color: "text-blue-600", eligible: false };
    if (bmi < 25) return { label: "Normalvikt", color: "text-green-600", eligible: false };
    if (bmi < 30) return { label: "Övervikt", color: "text-yellow-600", eligible: false };
    if (bmi < 35) return { label: "Fetma (grad I)", color: "text-orange-600", eligible: true };
    if (bmi < 40) return { label: "Fetma (grad II)", color: "text-red-500", eligible: true };
    return { label: "Svår fetma (grad III)", color: "text-red-700", eligible: false, surgical: true };
  };

  return (
    <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-200" data-testid="bmi-calculator-se">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
          <Calculator className="w-6 h-6 text-primary" />
        </div>
        <div>
          <h3 className="text-xl font-bold text-slate-900">Passar ESG för mig?</h3>
          <p className="text-sm text-slate-500">Beräkna ditt BMI och kontrollera lämplighet</p>
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-4 mb-4">
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">Längd (cm)</label>
          <input type="number" value={height} onChange={(e) => setHeight(e.target.value)} placeholder="t.ex. 175" className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none" data-testid="input-height-se" />
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">Vikt (kg)</label>
          <input type="number" value={weight} onChange={(e) => setWeight(e.target.value)} placeholder="t.ex. 100" className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none" data-testid="input-weight-se" />
        </div>
      </div>

      <Button onClick={calculateBMI} className="w-full bg-primary hover:bg-primary/90 h-12" data-testid="button-calculate-bmi-se">
        Beräkna BMI
      </Button>

      {bmi !== null && (
        <div className="mt-6 p-4 rounded-xl bg-slate-50 border border-slate-200" data-testid="bmi-result-se">
          <div className="text-center mb-3">
            <span className="text-4xl font-bold text-primary">{bmi}</span>
            <p className={`text-lg font-semibold ${getBMICategory(bmi).color}`}>{getBMICategory(bmi).label}</p>
          </div>
          {getBMICategory(bmi).eligible ? (
            <div className="bg-green-50 border border-green-200 rounded-lg p-3 text-center">
              <p className="text-green-800 font-medium">Ni kan vara en lämplig kandidat för ESG!</p>
              <p className="text-green-600 text-sm mt-1">Kontakta oss för en gratis konsultation.</p>
            </div>
          ) : getBMICategory(bmi).surgical ? (
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 text-center">
              <p className="text-blue-800 font-medium">Bariatrisk kirurgi kan vara mer lämpligt.</p>
              <p className="text-blue-600 text-sm mt-1"><Link href="/treatments" className="underline">Se alla behandlingsalternativ</Link></p>
            </div>
          ) : (
            <div className="bg-slate-100 border border-slate-200 rounded-lg p-3 text-center">
              <p className="text-slate-700 font-medium">ESG rekommenderas vanligtvis för BMI mellan 30 och 40.</p>
              <p className="text-slate-500 text-sm mt-1">Kontakta oss för att diskutera era alternativ.</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

function FAQAccordion({ faqs }: { faqs: typeof seFaqs }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="space-y-3" data-testid="faq-accordion-se">
      {faqs.map((faq, i) => (
        <div key={i} className={`rounded-xl border transition-all duration-200 ${openIndex === i ? "border-primary/30 bg-white shadow-md" : "border-slate-200 bg-white hover:border-slate-300"}`} data-testid={`faq-item-se-${i}`}>
          <button className="w-full flex items-center justify-between p-5 text-left" onClick={() => setOpenIndex(openIndex === i ? null : i)} data-testid={`button-faq-se-${i}`}>
            <span className="font-semibold text-slate-900 pr-4">{faq.question}</span>
            {openIndex === i ? <ChevronUp className="w-5 h-5 text-primary shrink-0" /> : <ChevronDown className="w-5 h-5 text-slate-400 shrink-0" />}
          </button>
          {openIndex === i && (
            <div className="px-5 pb-5 text-slate-600 leading-relaxed animate-in fade-in duration-200">{faq.answer}</div>
          )}
        </div>
      ))}
    </div>
  );
}

export default function ESGSweden() {
  const seFlag = "🇸🇪";
  const trFlag = "🇹🇷";

  const esgSESchema = {
    "@context": "https://schema.org",
    "@type": "MedicalProcedure",
    "name": "Endoskopisk Sleeve Gastroplastik för svenska patienter",
    "alternateName": ["ESG Sverige", "ESG Turkiet", "Gå ner i vikt utan operation", "Gastroplastik"],
    "description": "Endoskopisk Sleeve Gastroplastik (ESG) för patienter från Sverige vid Istanbul Bariatric Center. Magförminskning utan kirurgi. All-inclusive-paket € 6 450. JCI-ackrediterat sjukhus.",
    "procedureType": "Endoscopic",
    "bodyLocation": "Stomach",
    "relevantSpecialty": { "@type": "MedicalSpecialty", "name": "Bariatric Surgery" },
    "offers": [
      { "@type": "Offer", "name": "ESG All-Inclusive-Paket", "price": "6450", "priceCurrency": "EUR", "description": "Fullständig ESG-procedur, JCI-sjukhus, hotell, VIP-transfer, preoperativa tester, läkemedel, 12 månaders nutritionsstöd" }
    ]
  };

  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="ESG Turkiet för svenska patienter | Gå ner i vikt utan operation | € 6 450 allt inkluderat"
        description="ESG utan kirurgi för patienter från Sverige. All-inclusive € 6 450 på JCI-ackrediterat sjukhus i Istanbul. Gratis konsultation."
        keywords="ESG Sverige, gå ner i vikt utan operation, gastroplastik Turkiet, Ozempic alternativ Sverige, viktnedgång behandling, magförminskning utan operation, ESG pris, bariatrisk behandling Turkiet"
        url="/esg/se"
      />
      <JsonLd data={esgSESchema} />
      <JsonLd data={structuredData.createFAQ(seFaqs)} />
      <JsonLd data={structuredData.createBreadcrumb([
        { name: "Home", url: "/" },
        { name: "Treatments", url: "/treatments" },
        { name: "ESG", url: "/esg" },
        { name: "ESG för svenska patienter", url: "/esg/se" },
      ])} />
      <Navbar />

      {/* Hero */}
      <section className="relative bg-slate-900 text-white pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-primary/30 opacity-90" />
        <div className="absolute inset-0 opacity-15" style={{ backgroundImage: "url('/esg-se-hero.webp')", backgroundSize: "cover", backgroundPosition: "center" }} />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center gap-3 mb-6">
              <span className="text-4xl">{seFlag}</span>
              <Badge variant="outline" className="border-white/30 text-white/90 text-sm px-4 py-1">Anpassad för svenska patienter</Badge>
              <span className="text-4xl">{trFlag}</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight" data-testid="heading-esg-se-hero">
              Endoskopisk Sleeve Gastroplastik (ESG) — Gå ner i vikt utan operation i Turkiet
            </h1>
            <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto mb-8 leading-relaxed">
              Att gå ner i vikt och behålla resultaten långsiktigt kan vara en stor utmaning — även med dieter, träning och läkemedel som Ozempic eller Wegovy. ESG är en modern, vetenskapligt baserad metod för viktnedgång utan kirurgi. All-inclusive-paket till € 6 450.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary hover:bg-primary/90 font-bold text-lg h-14 px-8" onClick={() => window.open("https://wa.me/905324131143?text=Hej%2C%20jag%20%C3%A4r%20fr%C3%A5n%20Sverige%20och%20%C3%A4r%20intresserad%20av%20ESG", "_blank")} data-testid="button-hero-whatsapp-se">
                <Phone className="w-5 h-5 mr-2" />Gratis konsultation
              </Button>
              <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 font-bold text-lg h-14 px-8" onClick={() => document.getElementById("bmi-section-se")?.scrollIntoView({ behavior: "smooth" })} data-testid="button-hero-bmi-se">
                <Calculator className="w-5 h-5 mr-2" />Passar det för mig?
              </Button>
            </div>
            <div className="flex flex-wrap gap-6 justify-center mt-10 text-sm text-slate-400">
              <span className="flex items-center gap-2"><ShieldCheck className="w-4 h-4" /> JCI-ackrediterat sjukhus</span>
              <span className="flex items-center gap-2"><Euro className="w-4 h-4" /> € 6 450 allt inkluderat</span>
              <span className="flex items-center gap-2"><Clock className="w-4 h-4" /> 3-4 dagars vistelse</span>
              <span className="flex items-center gap-2"><Stethoscope className="w-4 h-4" /> 8 000+ framgångsrika procedurer</span>
            </div>
          </div>
        </div>
      </section>

      {/* Pris */}
      <section className="py-16 bg-gradient-to-b from-green-50 to-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-white rounded-2xl p-10 shadow-xl border-2 border-green-200 text-center" data-testid="card-pricing-se">
            <Badge className="bg-green-100 text-green-800 hover:bg-green-100 text-sm mb-4">Transparent fast pris</Badge>
            <h2 className="text-3xl font-bold text-slate-900 mb-2">ESG All-Inclusive-Paket</h2>
            <div className="text-6xl font-bold text-primary my-4">€ 6 450</div>
            <p className="text-slate-600 mb-8 text-lg">Inga dolda kostnader. Allt ingår i priset.</p>
            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4 text-left">
              {[
                "Fullständig ESG-procedur",
                "Generell anestesi",
                "JCI-ackrediterat sjukhus",
                "Preoperativa tester",
                "VIP-transfer flygplats",
                "Hotellboende",
                "Postoperativa läkemedel",
                "12 mån nutritionsstöd",
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2 text-sm">
                  <CheckCircle2 className="w-4 h-4 text-green-600 shrink-0" />
                  <span className="text-slate-700">{item}</span>
                </div>
              ))}
            </div>
            <Button className="mt-8 bg-primary hover:bg-primary/90 font-bold text-lg h-12 px-10" onClick={() => window.open("https://wa.me/905324131143?text=Hej%2C%20jag%20%C3%A4r%20intresserad%20av%20ESG-paketet%20%E2%82%AC%206%20450", "_blank")} data-testid="button-book-se">
              Boka gratis konsultation
            </Button>
          </div>
        </div>
      </section>

      {/* Vad är ESG */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-slate-900">Vad är Endoskopisk Sleeve Gastroplastik (ESG)?</h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                ESG är en innovativ procedur för att <strong>minska magsäckens volym utan kirurgi</strong>. Genom munnen förs ett endoskop ned för att placera interna suturer som reducerar magvolymen med 70-80%. Till skillnad från en traditionell <Link href="/sleeve-gastrectomy" className="text-primary hover:underline">sleeve gastrectomy</Link> görs inga snitt, ingen vävnad avlägsnas och återhämtningen är betydligt snabbare.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed">
                Proceduren använder Apollo OverStitch-teknologi — ett avancerat endoskopiskt sutursystem — för att skapa permanenta veck i magväggen. Resultatet: tidigare mättnadskänsla och ett naturligt minskat matintag. Ingreppet tar cirka 60-90 minuter under generell anestesi.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed">
                För svenska patienter fyller ESG ett viktigt gap — mellan livsstilsförändringar som inte fungerat och invasiv kirurgi som man kanske inte är redo för.
              </p>
              <div className="grid grid-cols-3 gap-4 pt-4">
                <div className="text-center p-4 bg-primary/5 rounded-xl">
                  <div className="text-2xl font-bold text-primary">60-90</div>
                  <p className="text-sm text-slate-600 mt-1">minuter</p>
                </div>
                <div className="text-center p-4 bg-primary/5 rounded-xl">
                  <div className="text-2xl font-bold text-primary">Inga</div>
                  <p className="text-sm text-slate-600 mt-1">snitt</p>
                </div>
                <div className="text-center p-4 bg-primary/5 rounded-xl">
                  <div className="text-2xl font-bold text-primary">1-3</div>
                  <p className="text-sm text-slate-600 mt-1">dagars återhämtning</p>
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <img src="/esg-procedure-cdn.webp" alt="ESG-procedur Endoskopisk Sleeve Gastroplastik" className="rounded-2xl shadow-xl max-w-md w-full" width="400" height="400" loading="lazy" />
            </div>
          </div>
        </div>
      </section>

      {/* Varför utomlands */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">{seFlag} Varför väljer svenska patienter ESG i Turkiet</h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">Allt fler svenskar väljer Istanbul för bariatrisk behandling — kvalitet, tillgänglighet och transparens i fokus.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-200 hover:shadow-md transition-shadow" data-testid="card-se-reason-access">
              <div className="w-14 h-14 rounded-full bg-red-50 flex items-center justify-center mb-5"><ShieldCheck className="w-7 h-7 text-red-500" /></div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Begränsad tillgång i Sverige</h3>
              <p className="text-slate-600 leading-relaxed">ESG erbjuds ännu inte inom den offentliga svenska sjukvården. Privata kliniker som erbjuder proceduren är sällsynta, och väntetiderna kan vara långa — även i storstäder som Stockholm och Göteborg.</p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-200 hover:shadow-md transition-shadow" data-testid="card-se-reason-cost">
              <div className="w-14 h-14 rounded-full bg-green-50 flex items-center justify-center mb-5"><Euro className="w-7 h-7 text-green-600" /></div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Betydande besparingar</h3>
              <p className="text-slate-600 leading-relaxed">I Sverige kan ESG kosta <strong>80 000–150 000 SEK</strong> på privata kliniker. Hos Istanbul Bariatric Center är <strong>all-inclusive-paketet € 6 450</strong> (~70 000 SEK) — inklusive procedur, sjukhus, hotell, transfer och 12 månaders uppföljning.</p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-200 hover:shadow-md transition-shadow" data-testid="card-se-reason-time">
              <div className="w-14 h-14 rounded-full bg-blue-50 flex items-center justify-center mb-5"><Clock className="w-7 h-7 text-blue-600" /></div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Snabb tillgång</h3>
              <p className="text-slate-600 leading-relaxed">Ingen väntelista. Snabb konsultation, flexibel planering och fullständig behandling inom 3-4 dagar. Direktflyg från Stockholm Arlanda och Göteborg Landvetter (~3-3,5 timmar).</p>
            </div>
          </div>
        </div>
      </section>

      {/* ESG vs läkemedel */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">ESG vs läkemedel för viktnedgång</h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">Många patienter i Sverige börjar med GLP-1-läkemedel som Ozempic eller Wegovy. ESG kan vara det logiska nästa steget när medicinsk behandling inte ger tillräckliga resultat.</p>
          </div>
          <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-sm">
            <table className="w-full text-left" data-testid="table-esg-vs-meds-se">
              <thead>
                <tr className="bg-slate-900 text-white">
                  <th className="p-4 font-semibold text-sm uppercase tracking-wider">Faktor</th>
                  <th className="p-4 font-semibold text-sm uppercase tracking-wider">Ozempic / Wegovy</th>
                  <th className="p-4 font-semibold text-sm uppercase tracking-wider bg-primary/90">ESG</th>
                </tr>
              </thead>
              <tbody>
                {comparisonMeds.map((row, i) => (
                  <tr key={i} className={`border-b border-slate-100 ${i % 2 === 0 ? "bg-white" : "bg-slate-50/50"}`} data-testid={`row-meds-se-${i}`}>
                    <td className="p-4 font-medium text-slate-900">{row.factor}</td>
                    <td className="p-4 text-slate-700">{row.meds}</td>
                    <td className="p-4 text-slate-700 bg-primary/5 font-medium">{row.esg}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-sm text-slate-500 mt-4 text-center">ESG erbjuder en engångs fysisk reduktion av magsäcken — utan löpande läkemedelskostnader.</p>
        </div>
      </section>

      {/* ESG vs kirurgi */}
      <section className="py-20 bg-blue-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">ESG vs gastric sleeve-operation</h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">Jämförelse mellan ESG och <Link href="/sleeve-gastrectomy" className="text-primary hover:underline">kirurgisk sleeve gastrectomy</Link>.</p>
          </div>
          <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-sm">
            <table className="w-full text-left" data-testid="table-esg-vs-sleeve-se">
              <thead>
                <tr className="bg-slate-900 text-white">
                  <th className="p-4 font-semibold text-sm uppercase tracking-wider">Egenskap</th>
                  <th className="p-4 font-semibold text-sm uppercase tracking-wider bg-primary/90">ESG</th>
                  <th className="p-4 font-semibold text-sm uppercase tracking-wider">Gastric Sleeve</th>
                </tr>
              </thead>
              <tbody>
                {comparisonSurgery.map((row, i) => (
                  <tr key={i} className={`border-b border-slate-100 ${i % 2 === 0 ? "bg-white" : "bg-slate-50/50"}`} data-testid={`row-sleeve-se-${i}`}>
                    <td className="p-4 font-medium text-slate-900">{row.feature}</td>
                    <td className="p-4 text-slate-700 bg-primary/5 font-medium">{row.esg}</td>
                    <td className="p-4 text-slate-700">{row.sleeve}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Varför oss */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold mb-4">Varför välja Istanbul Bariatric Center?</h2>
            <p className="text-lg text-slate-300 max-w-3xl mx-auto">Vi kombinerar medicinsk excellens med en patientupplevelse anpassad för internationella — och särskilt skandinaviska — patienter.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Stethoscope, title: "Dr. Murat Üstün", desc: "Pionjär inom ESG i Turkiet. Tusentals framgångsrika bariatriska ingrepp. Internationellt erkänd." },
              { icon: ShieldCheck, title: "JCI-ackrediterat sjukhus", desc: "Alla procedurer genomförs på Liv Hospital — med JCI-ackreditering, den internationella guldstandarden." },
              { icon: Users, title: "Internationellt team", desc: "Dedikerat team för internationella patienter. Tydlig kommunikation, transparent prissättning, strukturerad uppföljning." },
              { icon: Euro, title: "€ 6 450 allt inkluderat", desc: "Inga dolda kostnader. Procedur, sjukhus, hotell, transfer, tester, 12 mån nutritionsstöd." },
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <div key={i} className="bg-white/10 backdrop-blur rounded-xl p-6 text-center" data-testid={`card-se-ibc-${i}`}>
                  <div className="w-14 h-14 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4"><Icon className="w-7 h-7 text-primary" /></div>
                  <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                  <p className="text-slate-300 text-sm">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Behandlingsprocess */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Er behandlingsprocess — steg för steg</h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">Från första kontakt till hemresa — vi tar hand om varje detalj.</p>
          </div>
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-primary/20 hidden md:block" />
            <div className="space-y-8">
              {journeySteps.map((step) => {
                const Icon = step.icon;
                return (
                  <div key={step.step} className="relative flex gap-6" data-testid={`step-journey-se-${step.step}`}>
                    <div className="relative z-10 shrink-0">
                      <div className="w-16 h-16 rounded-full bg-primary text-white flex items-center justify-center shadow-lg"><Icon className="w-7 h-7" /></div>
                    </div>
                    <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200 flex-1 hover:shadow-md transition-shadow">
                      <div className="flex items-center gap-3 mb-2">
                        <Badge variant="outline" className="text-primary border-primary/30">Steg {step.step}</Badge>
                        <h3 className="text-lg font-bold text-slate-900">{step.title}</h3>
                      </div>
                      <p className="text-slate-600 leading-relaxed">{step.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Komfort */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
            <div>
              <img src="/esg-se-istanbul.webp" alt="Istanbul — medicinsk turism från Sverige" className="rounded-2xl shadow-xl w-full" width="600" height="400" loading="lazy" />
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-slate-900">Komfort och förstklassig service</h2>
              <p className="text-lg text-slate-600 leading-relaxed">Ert välbefinnande är vår högsta prioritet — från det att ni landar i Istanbul. VIP-transfer, komfortabelt hotell och Liv Hospital med den senaste medicinska utrustningen — allt samordnat av vårt team.</p>
              <p className="text-lg text-slate-600 leading-relaxed">Många av våra skandinaviska patienter beskriver sin upplevelse som överlägsen jämfört med privata kliniker hemma — både vad gäller medicinsk kvalitet och helhetorganisation.</p>
              <div className="flex flex-wrap gap-3">
                {["VIP-transfer flygplats", "Komfortabelt hotell", "Liv Hospital (JCI)", "Support dygnet runt", "WhatsApp-kontakt"].map((tag) => (
                  <Badge key={tag} className="bg-primary/10 text-primary hover:bg-primary/10 px-3 py-1">{tag}</Badge>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Resultat */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Förväntade resultat från ESG</h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">ESG ger mätbar och hållbar viktnedgång — särskilt i kombination med vårt uppföljningsprogram.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="bg-primary text-white rounded-2xl p-8 text-center" data-testid="stat-weight-loss-se">
              <TrendingDown className="w-10 h-10 mx-auto mb-3 opacity-80" />
              <div className="text-4xl font-bold mb-2">15-20%</div>
              <p className="text-white/80">Total viktnedgång</p>
              <p className="text-sm text-white/60 mt-2">Under 12-18 månader</p>
            </div>
            <div className="bg-primary text-white rounded-2xl p-8 text-center" data-testid="stat-bmi-38-se">
              <Activity className="w-10 h-10 mx-auto mb-3 opacity-80" />
              <div className="text-4xl font-bold mb-2">~20 kg</div>
              <p className="text-white/80">Genomsnitt (BMI 38+)</p>
              <p className="text-sm text-white/60 mt-2">Första 6 månaderna</p>
            </div>
            <div className="bg-primary text-white rounded-2xl p-8 text-center" data-testid="stat-health-se">
              <HeartPulse className="w-10 h-10 mx-auto mb-3 opacity-80" />
              <div className="text-4xl font-bold mb-2">Betydande</div>
              <p className="text-white/80">Hälsoförbättring</p>
              <p className="text-sm text-white/60 mt-2">Diabetes, blodtryck, sömnapné</p>
            </div>
          </div>
          <div className="p-6 bg-blue-50 rounded-xl border border-blue-100">
            <p className="text-slate-700 leading-relaxed">Resultaten beror på ert engagemang — att följa kostplanen, vara regelbundet fysiskt aktiv och delta i uppföljningsträffar. Vårt 12-månaders nutritionsprogram med kvalificerad dietist ingår i alla paket. <Link href="/results" className="text-primary hover:underline font-medium">Se våra patienters framgångshistorier</Link>.</p>
          </div>
        </div>
      </section>

      {/* Omdömen */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">{seFlag} Upplevelser från svenska patienter</h2>
            <p className="text-lg text-slate-600">Verkliga berättelser från svenska patienter som valt ESG hos Istanbul Bariatric Center.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {seTestimonials.map((t, i) => (
              <div key={i} className="bg-white rounded-2xl p-8 shadow-sm border border-slate-200" data-testid={`testimonial-se-${i}`}>
                <div className="flex items-center gap-1 mb-4">{[...Array(5)].map((_, si) => (<Star key={si} className="w-5 h-5 fill-yellow-400 text-yellow-400" />))}</div>
                <p className="text-slate-600 italic leading-relaxed mb-6">&ldquo;{t.text}&rdquo;</p>
                <div className="flex items-center justify-between mt-auto">
                  <div>
                    <p className="font-bold text-slate-900">{t.name}</p>
                    <p className="text-sm text-slate-500 flex items-center gap-1"><MapPin className="w-3 h-3" /> {t.location}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-bold text-primary">{t.weight}</p>
                    <p className="text-xs text-slate-500">{t.time}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BMI */}
      <section className="py-20" id="bmi-section-se">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-start max-w-6xl mx-auto">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-slate-900">Vem passar ESG för?</h2>
              <p className="text-lg text-slate-600 leading-relaxed">ESG är avsedd för personer som kämpar med övervikt sedan länge och söker en lösning mellan livsstilsförändringar och ett större kirurgiskt ingrepp. Ni kan vara lämplig om:</p>
              <div className="space-y-3">
                {[
                  "Ert BMI ligger mellan 30 och 40",
                  "Dieter och motion inte gett varaktiga resultat",
                  "Ni inte önskar invasiv kirurgi",
                  "Läkemedel har varit otillräckliga eller för kostsamma",
                  "Ni föredrar en minimalt invasiv metod med kort återhämtning",
                  "Ni lider av fetmarelaterade tillstånd (typ 2-diabetes, högt blodtryck, sömnapné)",
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <p className="text-slate-600">{item}</p>
                  </div>
                ))}
              </div>
            </div>
            <BMICalculator />
          </div>
        </div>
      </section>

      {/* Säkerhet */}
      <section className="py-20 bg-green-50">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-slate-900">Säkerhet och kvalitetsstandarder</h2>
              <p className="text-lg text-slate-600 leading-relaxed">ESG anses vara en av de säkraste procedurerna för viktnedgång när den utförs av erfarna specialister i en ackrediterad anläggning. Dr. Murat Üstün har genomfört tusentals ESG-procedurer med utmärkta säkerhetsresultat på det JCI-ackrediterade Liv Hospital.</p>
              <div className="space-y-3">
                {[
                  "JCI-ackrediterat sjukhus (internationell guldstandard)",
                  "Certifierad kirurg med tusentals ESG-procedurer",
                  "Avancerad suturteknik (Apollo OverStitch)",
                  "Fullständig preoperativ hälsokontroll",
                  "Medicinsk support dygnet runt efter proceduren",
                  "Kompletta medicinska protokoll och försäkringar",
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <ShieldCheck className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
                    <p className="text-slate-700">{item}</p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <img src="/esg-se-consultation.webp" alt="Medicinsk konsultation för svenska patienter" className="rounded-2xl shadow-xl w-full" width="600" height="400" loading="lazy" />
            </div>
          </div>
        </div>
      </section>

      {/* Efter behandling */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-slate-900 mb-4 text-center">Livet efter ESG</h2>
          <p className="text-lg text-slate-600 text-center mb-12 max-w-3xl mx-auto">Proceduren är bara början. Så här ser återhämtningen och kostövergången ut.</p>
          <div className="space-y-4">
            {[
              { phase: "Första 8 timmarna", desc: "Enbart klara vätskor. Vila och återhämtning under medicinsk uppsikt.", icon: "🏥", color: "border-red-200 bg-red-50" },
              { phase: "Vecka 1-2", desc: "Flytande kost — proteinshakes, buljong, vatten. Magen läker och anpassar sig.", icon: "🥤", color: "border-orange-200 bg-orange-50" },
              { phase: "Vecka 3-6", desc: "Gradvis introduktion av halvfast föda. Mosad mat och mjuka proteiner.", icon: "🥣", color: "border-yellow-200 bg-yellow-50" },
              { phase: "Från vecka 7", desc: "Stegvis övergång till hälsosam fast föda. Fokus på proteinrik, balanserad kost.", icon: "🥗", color: "border-green-200 bg-green-50" },
              { phase: "Månad 3-12", desc: "Löpande nutritionsstöd med regelbundna träffar för att utvärdera framsteg.", icon: "📊", color: "border-blue-200 bg-blue-50" },
            ].map((phase, i) => (
              <div key={i} className={`flex items-start gap-5 p-6 rounded-xl border ${phase.color}`} data-testid={`phase-aftercare-se-${i}`}>
                <span className="text-3xl shrink-0">{phase.icon}</span>
                <div>
                  <h4 className="font-bold text-slate-900 mb-1">{phase.phase}</h4>
                  <p className="text-slate-600 leading-relaxed">{phase.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-10 p-6 bg-primary/5 rounded-xl border border-primary/10">
            <div className="flex items-start gap-4">
              <Utensils className="w-8 h-8 text-primary shrink-0 mt-1" />
              <div>
                <h4 className="font-bold text-slate-900 mb-2">12 månaders nutritionsstöd ingår</h4>
                <p className="text-slate-600 leading-relaxed">Varje ESG-paket inkluderar tillgång till en kvalificerad dietist som skapar individuella kostplaner, schemalägger regelbundna konsultationer och följer er under hela det första året.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Varför Turkiet */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">{trFlag} Varför Turkiet för medicinsk turism?</h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">Turkiet har etablerat sig som en av världens ledande destinationer för medicinsk turism.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Award, title: "Globalt vårdcenter", desc: "Turkiet tar emot över en miljon internationella medicinska patienter årligen, med JCI-ackrediterade sjukhus i hela Istanbul." },
              { icon: Stethoscope, title: "Högkvalificerade läkare", desc: "Turkiska bariatriska kirurger tillhör de mest erfarna i världen — många internationellt utbildade och IFSO-medlemmar." },
              { icon: Euro, title: "Kostnadseffektivt", desc: "Medicinsk vård av högsta kvalitet till en bråkdel av svenska priser — utan kompromisser på kvalitet eller säkerhet." },
              { icon: Plane, title: "Lättillgängligt", desc: "Direktflyg från Stockholm Arlanda, Göteborg Landvetter och andra flygplatser. Flygtid: ~3-3,5 timmar." },
              { icon: MapPin, title: "Istanbul — världsmetropol", desc: "En dynamisk, modern stad vid gränsen mellan Europa och Asien. Trygg, välkommunicerad och välkomnande." },
              { icon: ShieldCheck, title: "Internationella standarder", desc: "Flertalet JCI-ackrediterade sjukhus, strikt tillsyn och dedikerad infrastruktur för medicinsk turism." },
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <div key={i} className="bg-white rounded-xl p-6 shadow-sm border border-slate-200" data-testid={`card-turkey-reason-se-${i}`}>
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4"><Icon className="w-6 h-6 text-primary" /></div>
                  <h3 className="font-bold text-slate-900 mb-2">{item.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20" data-testid="section-faq-se">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Vanliga frågor — ESG för svenska patienter</h2>
            <p className="text-lg text-slate-600">Allt ni behöver veta innan resan till Istanbul.</p>
          </div>
          <FAQAccordion faqs={seFaqs} />
        </div>
      </section>

      {/* Interna länkar */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-2xl font-bold text-slate-900 mb-8 text-center">Utforska fler behandlingsalternativ</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { title: "ESG — fullständig information", href: "/esg", desc: "Alla detaljer om proceduren" },
              { title: "Sleeve Gastrectomy", href: "/sleeve-gastrectomy", desc: "Den vanligaste bariatriska operationen" },
              { title: "Mini Gastric Bypass", href: "/mini-gastric-bypass", desc: "Kombinerad procedur" },
              { title: "Gastric Balloon", href: "/gastric-balloon", desc: "Icke-kirurgiskt alternativ" },
              { title: "Alla behandlingar", href: "/treatments", desc: "Jämförelse och priser" },
              { title: "Resultat", href: "/results", desc: "Patienternas framgångshistorier" },
              { title: "Om oss", href: "/about", desc: "Dr. Murat Üstün och teamet" },
              { title: "Kontakt", href: "/contact", desc: "Tala med vårt team" },
            ].map((link, i) => (
              <Link key={i} href={link.href} className="flex items-center gap-3 p-4 bg-white rounded-xl border border-slate-200 hover:border-primary/30 hover:shadow-sm transition-all group" data-testid={`link-internal-se-${i}`}>
                <ArrowRight className="w-4 h-4 text-primary shrink-0 group-hover:translate-x-1 transition-transform" />
                <div>
                  <p className="font-medium text-slate-900 group-hover:text-primary transition-colors">{link.title}</p>
                  <p className="text-xs text-slate-500">{link.desc}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary text-white" data-testid="section-cta-se">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <span className="text-5xl mb-6 block">{seFlag}</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ta första steget idag</h2>
          <p className="text-xl text-white/80 mb-4 leading-relaxed">Om ni söker ett säkert och effektivt alternativ till kirurgi kan Endoskopisk Sleeve Gastroplastik vara rätt lösning.</p>
          <p className="text-lg text-white/70 mb-8">Kontakta oss idag för en gratis onlinekonsultation. Vi utvärderar er lämplighet, svarar på alla frågor och utarbetar en personlig behandlingsplan — utan förpliktelser.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-primary hover:bg-white/90 font-bold text-lg h-14 px-10" onClick={() => window.open("https://wa.me/905324131143?text=Hej%2C%20jag%20%C3%A4r%20fr%C3%A5n%20Sverige%20och%20%C3%A4r%20intresserad%20av%20ESG", "_blank")} data-testid="button-cta-whatsapp-se">
              <Phone className="w-5 h-5 mr-2" />WhatsApp: +90 532 413 1143
            </Button>
            <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 font-bold text-lg h-14 px-10" onClick={() => window.open("mailto:drmuratustun@gmail.com?subject=ESG%20f%C3%B6rfr%C3%A5gan%20fr%C3%A5n%20Sverige", "_blank")} data-testid="button-cta-email-se">
              <MessageCircle className="w-5 h-5 mr-2" />Skicka e-post
            </Button>
          </div>
          <p className="text-white/50 mt-6 text-sm">E-post: <a href="mailto:drmuratustun@gmail.com" className="text-white/70 hover:text-white underline">drmuratustun@gmail.com</a></p>
        </div>
      </section>

      <Footer />
    </div>
  );
}

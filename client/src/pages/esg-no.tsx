import { useState } from "react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { SEO, JsonLd, structuredData } from "@/components/seo";
import {
  CheckCircle2, ChevronDown, ChevronUp, Plane, Hotel, Stethoscope, ShieldCheck,
  Clock, Euro, HeartPulse, ArrowRight, Star, MapPin, Phone, MessageCircle,
  Award, Calculator, Users, TrendingDown, Utensils, Activity,
} from "lucide-react";
import { Link } from "wouter";

const noFaqs = [
  {
    question: "Er ESG tilgjengelig via det offentlige helsevesenet i Norge?",
    answer: "Endoskopisk sleeve gastroplastikk tilbys ikke i det offentlige helsevesenet i Norge. Private klinikker i Oslo og Bergen kan tilby prosedyren, men til vesentlig høyere priser (80.000–150.000 NOK). Hos Istanbul Bariatric Center er all-inclusive-pakken € 6.450 (~75.000 NOK) — inkludert prosedyre, JCI-akkreditert sykehus, hotell, VIP-transfer og 12 måneders ernæringsstøtte.",
  },
  {
    question: "Hvor lenge må jeg bli i Istanbul?",
    answer: "De fleste norske pasienter oppholder seg i Istanbul i 3-4 dager. Dere ankommer dagen før prosedyren, ESG utføres neste dag, tredje dag hviler dere på hotellet og fjerde dag reiser dere hjem. Direktefly fra Oslo Gardermoen (~3,5-4 timer).",
  },
  {
    question: "Gjør prosedyren vondt?",
    answer: "ESG utføres under generell anestesi — dere merker ingenting under prosedyren. Etter oppvåkning kan dere oppleve lett ubehag, kvalme eller en følelse av tyngde i magen. Disse symptomene forsvinner vanligvis innen 1-3 dager og håndteres godt med medisiner.",
  },
  {
    question: "Er resultatene varige?",
    answer: "Ja, med riktig livsstil. ESG skaper en fysisk volumreduksjon av magesekken — det er en strukturell endring. For å opprettholde resultatene er det viktig å følge kostplanen, være regelmessig fysisk aktiv og delta i oppfølging. Vårt 12-måneders ernæringsprogram med kvalifisert ernæringsfysiolog er inkludert i alle pakker.",
  },
  {
    question: "Hva er forskjellen mellom ESG og Ozempic/Wegovy?",
    answer: "GLP-1-legemidler som Ozempic og Wegovy kan være effektive i starten, men mange pasienter går opp i vekt igjen etter avsluttet behandling. De løpende månedskostnadene (1.500-3.500 NOK/måned) akkumuleres raskt. ESG tilbyr en engangsløsning — en fysisk reduksjon av magesekken uten løpende kostnader.",
  },
  {
    question: "Hvilken BMI kreves for ESG?",
    answer: "ESG anbefales generelt for pasienter med BMI mellom 30 og 40. Prosedyren er spesielt egnet for personer som ikke har oppnådd varige resultater med diett og trening, som ikke ønsker invasiv kirurgi, eller som foretrekker en minimalt invasiv metode med kort rekonvalesens.",
  },
  {
    question: "Er det trygt å få behandling i utlandet?",
    answer: "Istanbul Bariatric Center opererer på Liv Hospital, akkreditert av JCI (Joint Commission International) — den internasjonale gullstandarden for pasientsikkerhet. Dr. Murat Üstün har gjennomført tusenvis av ESG-prosedyrer med utmerkede sikkerhetsresultater.",
  },
  {
    question: "Hva er inkludert i all-inclusive-pakken?",
    answer: "Vår ESG-pakke til € 6.450 inkluderer: den fullstendige prosedyren, sykehusopphold på JCI-akkreditert sykehus, preoperative tester, VIP-transfer fra flyplassen, hotellopphold, postoperativ medisin, kvalifisert ernæringsstøtte i 12 måneder og løpende oppfølging. Ingen skjulte kostnader.",
  },
];

const journeySteps = [
  { step: 1, title: "Gratis online konsultasjon", desc: "Kontakt oss via WhatsApp eller nettsiden vår. Teamet vårt vurderer BMI, sykehistorie og mål for å bekrefte egnethet for ESG.", icon: MessageCircle },
  { step: 2, title: "Reise til Tyrkia", desc: "Velg en dato — vi organiserer resten. Direktefly fra Oslo Gardermoen (~3,5-4 timer).", icon: Plane },
  { step: 3, title: "VIP-transfer og hotell", desc: "En privat sjåfør møter dere på Istanbuls flyplass og kjører dere til hotellet.", icon: Hotel },
  { step: 4, title: "Preoperative undersøkelser", desc: "Fullstendige blodprøver og helsesjekk på sykehuset. Personlig møte med Dr. Murat Üstün.", icon: Stethoscope },
  { step: 5, title: "ESG-prosedyren", desc: "ESG utføres under generell anestesi på Liv Hospital (JCI). Varighet: 60-90 minutter. Ingen snitt, ingen arr.", icon: HeartPulse },
  { step: 6, title: "Rekonvalesens og hjemreise", desc: "Hvile på hotellet med kontinuerlig medisinsk oppfølging. De fleste pasienter reiser hjem innen 2-3 dager etter prosedyren.", icon: Plane },
];

const comparisonMeds = [
  { factor: "Langvarig effekt", meds: "Begrenset — vekten kommer ofte tilbake", esg: "Stabil — permanent fysisk reduksjon" },
  { factor: "Bivirkninger", meds: "Vanlige (kvalme, diaré, risiko for pankreatitt)", esg: "Få (lett ubehag 1-3 dager)" },
  { factor: "Kostnad", meds: "Løpende 1.500-3.500 NOK/måned (18.000-42.000 NOK/år)", esg: "Engangspris: € 6.450 all-inclusive (~75.000 NOK)" },
  { factor: "Vektøkning", meds: "Vanlig etter avsluttet behandling", esg: "Begrenset med sunn livsstil" },
  { factor: "Inngrep", meds: "Nei — ukentlige/daglige injeksjoner", esg: "Ja — én endoskopisk prosedyre (60-90 min)" },
];

const comparisonSurgery = [
  { feature: "Type inngrep", esg: "Endoskopisk (via munnen)", sleeve: "Laparoskopisk kirurgi (4-5 snitt)" },
  { feature: "Anestesi", esg: "Generell", sleeve: "Generell" },
  { feature: "Varighet", esg: "60-90 minutter", sleeve: "~60 minutter" },
  { feature: "Sykehusopphold", esg: "Samme dag eller 1 natt", sleeve: "2-3 netter" },
  { feature: "Rekonvalesens", esg: "1-3 dager", sleeve: "2-3 uker" },
  { feature: "Arr", esg: "Ingen", sleeve: "4-5 små" },
  { feature: "Vekttap", esg: "15-20% av kroppsvekten", sleeve: "60-70% av overvekten" },
  { feature: "Reversibilitet", esg: "Potensielt reversibel", sleeve: "Permanent (magevev fjernet)" },
  { feature: "Risikoprofil", esg: "Svært lav", sleeve: "Lav" },
];

const noTestimonials = [
  { name: "Hanne L.", location: "Oslo", text: "Etter årevis med dietter og Ozempic uten varige resultater fant jeg ESG. Teamet på Istanbul Bariatric Center var utrolig profesjonelt og omsorgsfullt. På 5 måneder gikk jeg ned 17 kg. Endelig føler jeg meg fri.", weight: "−17 kg", time: "5 måneder" },
  { name: "Lars M.", location: "Bergen", text: "Jeg var i starten skeptisk til behandling utenlands. Men Liv Hospital overgikk alle mine forventninger — kvaliteten var høyere enn noe jeg har sett i Norge. Dr. Murat er en eksepsjonell lege og prisen var en brøkdel av hva det ville kostet hjemme.", weight: "−20 kg", time: "6 måneder" },
  { name: "Kristin S.", location: "Trondheim", text: "Fra flyplass-transfer til ernæringsstøtte — alt var perfekt organisert. Jeg trodde aldri resultatene ville komme så raskt. 12-månedersprogrammet hjalp meg virkelig med å endre matvaner. Anbefaler sterkt!", weight: "−15 kg", time: "4 måneder" },
];

function BMICalculator() {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [bmi, setBmi] = useState<number | null>(null);
  const calculateBMI = () => { const h = parseFloat(height) / 100; const w = parseFloat(weight); if (h > 0 && w > 0) setBmi(Math.round((w / (h * h)) * 10) / 10); };
  const getBMICategory = (bmi: number) => {
    if (bmi < 18.5) return { label: "Undervekt", color: "text-blue-600", eligible: false };
    if (bmi < 25) return { label: "Normalvekt", color: "text-green-600", eligible: false };
    if (bmi < 30) return { label: "Overvekt", color: "text-yellow-600", eligible: false };
    if (bmi < 35) return { label: "Fedme (grad I)", color: "text-orange-600", eligible: true };
    if (bmi < 40) return { label: "Fedme (grad II)", color: "text-red-500", eligible: true };
    return { label: "Alvorlig fedme (grad III)", color: "text-red-700", eligible: false, surgical: true };
  };
  return (
    <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-200" data-testid="bmi-calculator-no">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center"><Calculator className="w-6 h-6 text-primary" /></div>
        <div><h3 className="text-xl font-bold text-slate-900">Passer ESG for meg?</h3><p className="text-sm text-slate-500">Beregn din BMI og sjekk egnethet</p></div>
      </div>
      <div className="grid sm:grid-cols-2 gap-4 mb-4">
        <div><label className="block text-sm font-medium text-slate-700 mb-1">Høyde (cm)</label><input type="number" value={height} onChange={(e) => setHeight(e.target.value)} placeholder="f.eks. 175" className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none" data-testid="input-height-no" /></div>
        <div><label className="block text-sm font-medium text-slate-700 mb-1">Vekt (kg)</label><input type="number" value={weight} onChange={(e) => setWeight(e.target.value)} placeholder="f.eks. 100" className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none" data-testid="input-weight-no" /></div>
      </div>
      <Button onClick={calculateBMI} className="w-full bg-primary hover:bg-primary/90 h-12" data-testid="button-calculate-bmi-no">Beregn BMI</Button>
      {bmi !== null && (
        <div className="mt-6 p-4 rounded-xl bg-slate-50 border border-slate-200" data-testid="bmi-result-no">
          <div className="text-center mb-3"><span className="text-4xl font-bold text-primary">{bmi}</span><p className={`text-lg font-semibold ${getBMICategory(bmi).color}`}>{getBMICategory(bmi).label}</p></div>
          {getBMICategory(bmi).eligible ? (
            <div className="bg-green-50 border border-green-200 rounded-lg p-3 text-center"><p className="text-green-800 font-medium">Du kan være en egnet kandidat for ESG!</p><p className="text-green-600 text-sm mt-1">Kontakt oss for en gratis konsultasjon.</p></div>
          ) : getBMICategory(bmi).surgical ? (
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 text-center"><p className="text-blue-800 font-medium">Bariatrisk kirurgi kan være mer passende.</p><p className="text-blue-600 text-sm mt-1"><Link href="/treatments" className="underline">Se alle behandlingsalternativer</Link></p></div>
          ) : (
            <div className="bg-slate-100 border border-slate-200 rounded-lg p-3 text-center"><p className="text-slate-700 font-medium">ESG anbefales vanligvis for BMI mellom 30 og 40.</p><p className="text-slate-500 text-sm mt-1">Kontakt oss for å diskutere dine alternativer.</p></div>
          )}
        </div>
      )}
    </div>
  );
}

function FAQAccordion({ faqs }: { faqs: typeof noFaqs }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  return (
    <div className="space-y-3" data-testid="faq-accordion-no">
      {faqs.map((faq, i) => (
        <div key={i} className={`rounded-xl border transition-all duration-200 ${openIndex === i ? "border-primary/30 bg-white shadow-md" : "border-slate-200 bg-white hover:border-slate-300"}`} data-testid={`faq-item-no-${i}`}>
          <button className="w-full flex items-center justify-between p-5 text-left" onClick={() => setOpenIndex(openIndex === i ? null : i)} data-testid={`button-faq-no-${i}`}>
            <span className="font-semibold text-slate-900 pr-4">{faq.question}</span>
            {openIndex === i ? <ChevronUp className="w-5 h-5 text-primary shrink-0" /> : <ChevronDown className="w-5 h-5 text-slate-400 shrink-0" />}
          </button>
          {openIndex === i && <div className="px-5 pb-5 text-slate-600 leading-relaxed animate-in fade-in duration-200">{faq.answer}</div>}
        </div>
      ))}
    </div>
  );
}

export default function ESGNorway() {
  const noFlag = "🇳🇴";
  const trFlag = "🇹🇷";

  return (
    <div className="min-h-screen bg-white">
      <SEO title="ESG Tyrkia for norske pasienter | Vekttap uten kirurgi | € 6.450 all-inclusive" description="Endoskopisk sleeve gastroplastikk uten kirurgi for pasienter fra Norge. All-inclusive-pakke € 6.450 på JCI-akkreditert sykehus. Gratis konsultasjon." keywords="ESG Norge, vekttap uten kirurgi, gastroplastikk Tyrkia, Ozempic alternativ, vekttap behandling, mageminsking uten operasjon" url="/esg/no" />
      <JsonLd data={{ "@context": "https://schema.org", "@type": "MedicalProcedure", "name": "Endoskopisk Sleeve Gastroplastikk for norske pasienter", "alternateName": ["ESG Norge", "ESG Tyrkia", "Vekttap uten kirurgi"], "description": "Endoskopisk Sleeve Gastroplastikk (ESG) for pasienter fra Norge ved Istanbul Bariatric Center. JCI-akkreditert sykehus. All-inclusive € 6.450.", "procedureType": "Endoscopic", "bodyLocation": "Stomach", "relevantSpecialty": { "@type": "MedicalSpecialty", "name": "Bariatric Surgery" }, "offers": [{ "@type": "Offer", "name": "ESG All-Inclusive Pakke", "price": "6450", "priceCurrency": "EUR" }] }} />
      <JsonLd data={structuredData.createFAQ(noFaqs)} />
      <JsonLd data={structuredData.createBreadcrumb([{ name: "Home", url: "/" }, { name: "Treatments", url: "/treatments" }, { name: "ESG", url: "/esg" }, { name: "ESG for norske pasienter", url: "/esg/no" }])} />
      <Navbar />

      <section className="relative bg-slate-900 text-white pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-primary/30 opacity-90" />
        <div className="absolute inset-0 opacity-15" style={{ backgroundImage: "url('/esg-no-hero.webp')", backgroundSize: "cover", backgroundPosition: "center" }} />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center gap-3 mb-6">
              <span className="text-4xl">{noFlag}</span>
              <Badge variant="outline" className="border-white/30 text-white/90 text-sm px-4 py-1">Tilpasset norske pasienter</Badge>
              <span className="text-4xl">{trFlag}</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight" data-testid="heading-esg-no-hero">Endoskopisk Sleeve Gastroplastikk (ESG) — Vekttap uten kirurgi i Tyrkia</h1>
            <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto mb-8 leading-relaxed">Å gå ned i vekt og opprettholde resultatene kan være svært utfordrende — selv med dietter, trening og legemidler som Ozempic eller Wegovy. ESG er en moderne, trygg løsning for vekttap uten kirurgi. All-inclusive-pakke til € 6.450.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary hover:bg-primary/90 font-bold text-lg h-14 px-8" onClick={() => window.open("https://wa.me/905324131143?text=Hei%2C%20jeg%20er%20fra%20Norge%20og%20er%20interessert%20i%20ESG", "_blank")} data-testid="button-hero-whatsapp-no"><Phone className="w-5 h-5 mr-2" />Gratis konsultasjon</Button>
              <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 font-bold text-lg h-14 px-8" onClick={() => document.getElementById("bmi-section-no")?.scrollIntoView({ behavior: "smooth" })} data-testid="button-hero-bmi-no"><Calculator className="w-5 h-5 mr-2" />Passer det for meg?</Button>
            </div>
            <div className="flex flex-wrap gap-6 justify-center mt-10 text-sm text-slate-400">
              <span className="flex items-center gap-2"><ShieldCheck className="w-4 h-4" /> JCI-akkreditert sykehus</span>
              <span className="flex items-center gap-2"><Euro className="w-4 h-4" /> € 6.450 all-inclusive</span>
              <span className="flex items-center gap-2"><Clock className="w-4 h-4" /> 3-4 dagers opphold</span>
              <span className="flex items-center gap-2"><Stethoscope className="w-4 h-4" /> 8.000+ vellykkede prosedyrer</span>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-b from-green-50 to-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-white rounded-2xl p-10 shadow-xl border-2 border-green-200 text-center" data-testid="card-pricing-no">
            <Badge className="bg-green-100 text-green-800 hover:bg-green-100 text-sm mb-4">Transparent og komplett pris</Badge>
            <h2 className="text-3xl font-bold text-slate-900 mb-2">ESG All-Inclusive Pakke</h2>
            <div className="text-6xl font-bold text-primary my-4">€ 6.450</div>
            <p className="text-slate-500 text-lg mb-2">~75.000 NOK</p>
            <p className="text-slate-600 mb-8">Ingen skjulte kostnader. Alt er inkludert.</p>
            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4 text-left">
              {["Fullstendig ESG-prosedyre", "Generell anestesi", "JCI-akkreditert sykehus", "Preoperative tester", "VIP-transfer fra flyplassen", "Hotellopphold", "Postoperativ medisin", "12 mnd. ernæringsstøtte"].map((item, i) => (
                <div key={i} className="flex items-center gap-2 text-sm"><CheckCircle2 className="w-4 h-4 text-green-600 shrink-0" /><span className="text-slate-700">{item}</span></div>
              ))}
            </div>
            <Button className="mt-8 bg-primary hover:bg-primary/90 font-bold text-lg h-12 px-10" onClick={() => window.open("https://wa.me/905324131143?text=Hei%2C%20jeg%20er%20interessert%20i%20ESG-pakken%20%E2%82%AC%206.450", "_blank")} data-testid="button-book-no">Book gratis konsultasjon</Button>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-slate-900">Hva er Endoskopisk Sleeve Gastroplastikk (ESG)?</h2>
              <p className="text-lg text-slate-600 leading-relaxed">ESG er en innovativ prosedyre som <strong>reduserer magesekkens volum uten kirurgi</strong>. Gjennom munnen føres et endoskop ned for å plassere interne suturer som reduserer magevolumet med 70-80%. I motsetning til en tradisjonell <Link href="/sleeve-gastrectomy" className="text-primary hover:underline">sleeve gastrectomy</Link> gjøres ingen snitt, intet vev fjernes og rekonvalesensen er vesentlig raskere.</p>
              <p className="text-lg text-slate-600 leading-relaxed">Prosedyren bruker Apollo OverStitch-teknologi og tar ca. 60-90 minutter under generell anestesi. Resultatet: tidligere metthetsfølelse og et naturlig redusert matinntak.</p>
              <div className="grid grid-cols-3 gap-4 pt-4">
                <div className="text-center p-4 bg-primary/5 rounded-xl"><div className="text-2xl font-bold text-primary">60-90</div><p className="text-sm text-slate-600 mt-1">minutter</p></div>
                <div className="text-center p-4 bg-primary/5 rounded-xl"><div className="text-2xl font-bold text-primary">Ingen</div><p className="text-sm text-slate-600 mt-1">snitt</p></div>
                <div className="text-center p-4 bg-primary/5 rounded-xl"><div className="text-2xl font-bold text-primary">1-3</div><p className="text-sm text-slate-600 mt-1">dagers rekonvalesens</p></div>
              </div>
            </div>
            <div className="flex justify-center"><img src="/esg-procedure-cdn.webp" alt="ESG-prosedyre Endoskopisk Sleeve Gastroplastikk" className="rounded-2xl shadow-xl max-w-md w-full" width="400" height="400" loading="lazy" /></div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">{noFlag} Hvorfor velger norske pasienter ESG i Tyrkia</h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">Stadig flere nordmenn velger Istanbul for bariatrisk behandling — kvalitet, tilgjengelighet og transparens i fokus.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: ShieldCheck, title: "Begrenset tilgang i Norge", desc: "ESG tilbys ikke i det offentlige helsevesenet. Private klinikker er sjeldne, og ventetidene kan være lange — selv i Oslo og Bergen.", color: "bg-red-50", iconColor: "text-red-500" },
              { icon: Euro, title: "Vesentlige besparelser", desc: "I Norge kan ESG koste 80.000–150.000 NOK privat. Vår all-inclusive-pakke er € 6.450 (~75.000 NOK) — med prosedyre, sykehus, hotell, transfer og 12 måneders oppfølging.", color: "bg-green-50", iconColor: "text-green-600" },
              { icon: Clock, title: "Rask tilgang", desc: "Ingen venteliste. Rask konsultasjon, fleksible datoer og fullstendig behandling innen 3-4 dager. Direktefly fra Oslo Gardermoen (~3,5-4 timer).", color: "bg-blue-50", iconColor: "text-blue-600" },
            ].map((item, i) => { const Icon = item.icon; return (
              <div key={i} className="bg-white rounded-2xl p-8 shadow-sm border border-slate-200 hover:shadow-md transition-shadow" data-testid={`card-no-reason-${i}`}>
                <div className={`w-14 h-14 rounded-full ${item.color} flex items-center justify-center mb-5`}><Icon className={`w-7 h-7 ${item.iconColor}`} /></div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                <p className="text-slate-600 leading-relaxed">{item.desc}</p>
              </div>
            ); })}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">ESG vs medisiner for vekttap</h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">Mange pasienter i Norge starter med GLP-1-legemidler som Ozempic eller Wegovy. ESG kan være det logiske neste steget.</p>
          </div>
          <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-sm">
            <table className="w-full text-left" data-testid="table-esg-vs-meds-no">
              <thead><tr className="bg-slate-900 text-white"><th className="p-4 font-semibold text-sm uppercase tracking-wider">Faktor</th><th className="p-4 font-semibold text-sm uppercase tracking-wider">Ozempic / Wegovy</th><th className="p-4 font-semibold text-sm uppercase tracking-wider bg-primary/90">ESG</th></tr></thead>
              <tbody>{comparisonMeds.map((row, i) => (<tr key={i} className={`border-b border-slate-100 ${i % 2 === 0 ? "bg-white" : "bg-slate-50/50"}`}><td className="p-4 font-medium text-slate-900">{row.factor}</td><td className="p-4 text-slate-700">{row.meds}</td><td className="p-4 text-slate-700 bg-primary/5 font-medium">{row.esg}</td></tr>))}</tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="py-20 bg-blue-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">ESG vs gastric sleeve-operasjon</h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">Sammenligning av ESG med <Link href="/sleeve-gastrectomy" className="text-primary hover:underline">kirurgisk sleeve gastrectomy</Link>.</p>
          </div>
          <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-sm">
            <table className="w-full text-left" data-testid="table-esg-vs-sleeve-no">
              <thead><tr className="bg-slate-900 text-white"><th className="p-4 font-semibold text-sm uppercase tracking-wider">Egenskap</th><th className="p-4 font-semibold text-sm uppercase tracking-wider bg-primary/90">ESG</th><th className="p-4 font-semibold text-sm uppercase tracking-wider">Gastric Sleeve</th></tr></thead>
              <tbody>{comparisonSurgery.map((row, i) => (<tr key={i} className={`border-b border-slate-100 ${i % 2 === 0 ? "bg-white" : "bg-slate-50/50"}`}><td className="p-4 font-medium text-slate-900">{row.feature}</td><td className="p-4 text-slate-700 bg-primary/5 font-medium">{row.esg}</td><td className="p-4 text-slate-700">{row.sleeve}</td></tr>))}</tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-900 text-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-14"><h2 className="text-3xl font-bold mb-4">Hvorfor velge Istanbul Bariatric Center?</h2><p className="text-lg text-slate-300 max-w-3xl mx-auto">Vi kombinerer medisinsk ekspertise med en pasientopplevelse tilpasset internasjonale — og spesielt skandinaviske — pasienter.</p></div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Stethoscope, title: "Dr. Murat Üstün", desc: "Pioner innen ESG i Tyrkia. Tusenvis av vellykkede bariatriske inngrep." },
              { icon: ShieldCheck, title: "JCI-akkreditert sykehus", desc: "Alle prosedyrer på Liv Hospital — med JCI-akkreditering, den internasjonale gullstandarden." },
              { icon: Users, title: "Internasjonalt team", desc: "Dedikert team for internasjonale pasienter. Klar kommunikasjon og strukturert oppfølging." },
              { icon: Euro, title: "€ 6.450 all-inclusive", desc: "Ingen skjulte kostnader. Prosedyre, sykehus, hotell, transfer, tester, 12 mnd. ernæringsstøtte." },
            ].map((item, i) => { const Icon = item.icon; return (
              <div key={i} className="bg-white/10 backdrop-blur rounded-xl p-6 text-center" data-testid={`card-no-ibc-${i}`}>
                <div className="w-14 h-14 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4"><Icon className="w-7 h-7 text-primary" /></div>
                <h3 className="text-lg font-bold mb-2">{item.title}</h3><p className="text-slate-300 text-sm">{item.desc}</p>
              </div>
            ); })}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-14"><h2 className="text-3xl font-bold text-slate-900 mb-4">Ditt behandlingsforløp — steg for steg</h2><p className="text-lg text-slate-600">Fra første kontakt til hjemreise — vi tar oss av alle detaljer.</p></div>
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-primary/20 hidden md:block" />
            <div className="space-y-8">
              {journeySteps.map((step) => { const Icon = step.icon; return (
                <div key={step.step} className="relative flex gap-6" data-testid={`step-journey-no-${step.step}`}>
                  <div className="relative z-10 shrink-0"><div className="w-16 h-16 rounded-full bg-primary text-white flex items-center justify-center shadow-lg"><Icon className="w-7 h-7" /></div></div>
                  <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200 flex-1 hover:shadow-md transition-shadow">
                    <div className="flex items-center gap-3 mb-2"><Badge variant="outline" className="text-primary border-primary/30">Steg {step.step}</Badge><h3 className="text-lg font-bold text-slate-900">{step.title}</h3></div>
                    <p className="text-slate-600 leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              ); })}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
            <div><img src="/esg-no-istanbul.webp" alt="Istanbul — medisinsk turisme fra Norge" className="rounded-2xl shadow-xl w-full" width="600" height="400" loading="lazy" /></div>
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-slate-900">Komfort og førsteklasses service</h2>
              <p className="text-lg text-slate-600 leading-relaxed">Deres velvære er vår høyeste prioritet — fra dere lander i Istanbul. VIP-transfer, komfortabelt hotell og Liv Hospital med det nyeste medisinske utstyret.</p>
              <div className="flex flex-wrap gap-3">{["VIP-transfer flyplass", "Komfortabelt hotell", "Liv Hospital (JCI)", "Support døgnet rundt", "WhatsApp-kontakt"].map((tag) => (<Badge key={tag} className="bg-primary/10 text-primary hover:bg-primary/10 px-3 py-1">{tag}</Badge>))}</div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-14"><h2 className="text-3xl font-bold text-slate-900 mb-4">Forventede resultater fra ESG</h2></div>
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="bg-primary text-white rounded-2xl p-8 text-center"><TrendingDown className="w-10 h-10 mx-auto mb-3 opacity-80" /><div className="text-4xl font-bold mb-2">15-20%</div><p className="text-white/80">Totalt vekttap</p><p className="text-sm text-white/60 mt-2">Over 12-18 måneder</p></div>
            <div className="bg-primary text-white rounded-2xl p-8 text-center"><Activity className="w-10 h-10 mx-auto mb-3 opacity-80" /><div className="text-4xl font-bold mb-2">~20 kg</div><p className="text-white/80">Gjennomsnitt (BMI 38+)</p><p className="text-sm text-white/60 mt-2">Første 6 måneder</p></div>
            <div className="bg-primary text-white rounded-2xl p-8 text-center"><HeartPulse className="w-10 h-10 mx-auto mb-3 opacity-80" /><div className="text-4xl font-bold mb-2">Betydelig</div><p className="text-white/80">Helseforbedring</p><p className="text-sm text-white/60 mt-2">Diabetes, blodtrykk, søvnapné</p></div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-14"><h2 className="text-3xl font-bold text-slate-900 mb-4">{noFlag} Opplevelser fra norske pasienter</h2></div>
          <div className="grid md:grid-cols-3 gap-8">
            {noTestimonials.map((t, i) => (
              <div key={i} className="bg-white rounded-2xl p-8 shadow-sm border border-slate-200" data-testid={`testimonial-no-${i}`}>
                <div className="flex items-center gap-1 mb-4">{[...Array(5)].map((_, si) => (<Star key={si} className="w-5 h-5 fill-yellow-400 text-yellow-400" />))}</div>
                <p className="text-slate-600 italic leading-relaxed mb-6">&ldquo;{t.text}&rdquo;</p>
                <div className="flex items-center justify-between"><div><p className="font-bold text-slate-900">{t.name}</p><p className="text-sm text-slate-500 flex items-center gap-1"><MapPin className="w-3 h-3" /> {t.location}</p></div><div className="text-right"><p className="font-bold text-primary">{t.weight}</p><p className="text-xs text-slate-500">{t.time}</p></div></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20" id="bmi-section-no">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-start max-w-6xl mx-auto">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-slate-900">Hvem passer ESG for?</h2>
              <p className="text-lg text-slate-600 leading-relaxed">ESG er beregnet for personer som sliter med overvekt og søker en løsning mellom livsstilsendringer og et større kirurgisk inngrep.</p>
              <div className="space-y-3">
                {["BMI mellom 30 og 40", "Dietter og trening har ikke gitt varige resultater", "Ønsker ikke invasiv kirurgi", "Legemidler har vært utilstrekkelige eller for kostbare", "Foretrekker en minimalt invasiv metode med kort rekonvalesens", "Lider av overvektsrelaterte tilstander (type 2-diabetes, høyt blodtrykk, søvnapné)"].map((item, i) => (
                  <div key={i} className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" /><p className="text-slate-600">{item}</p></div>
                ))}
              </div>
            </div>
            <BMICalculator />
          </div>
        </div>
      </section>

      <section className="py-20 bg-green-50">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-slate-900">Sikkerhet og kvalitetsstandarder</h2>
              <p className="text-lg text-slate-600 leading-relaxed">ESG anses som en av de tryggeste prosedyrene for vekttap når den utføres av erfarne spesialister. Dr. Murat Üstün har gjennomført tusenvis av ESG-prosedyrer på JCI-akkreditert Liv Hospital.</p>
              <div className="space-y-3">
                {["JCI-akkreditert sykehus (internasjonal gullstandard)", "Sertifisert kirurg med tusenvis av ESG-prosedyrer", "Avansert suturteknikk (Apollo OverStitch)", "Full preoperativ helsesjekk", "Medisinsk support døgnet rundt etter prosedyren", "Komplette medisinske protokoller"].map((item, i) => (
                  <div key={i} className="flex items-start gap-3"><ShieldCheck className="w-5 h-5 text-green-600 shrink-0 mt-0.5" /><p className="text-slate-700">{item}</p></div>
                ))}
              </div>
            </div>
            <div><img src="/esg-no-consultation.webp" alt="Medisinsk konsultasjon for norske pasienter" className="rounded-2xl shadow-xl w-full" width="600" height="400" loading="lazy" /></div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-slate-900 mb-4 text-center">Livet etter ESG</h2>
          <p className="text-lg text-slate-600 text-center mb-12">Prosedyren er bare begynnelsen. Slik ser rekonvalesensen ut.</p>
          <div className="space-y-4">
            {[
              { phase: "Første 8 timer", desc: "Kun klare væsker. Hvile og rekonvalesens under medisinsk tilsyn.", icon: "🏥", color: "border-red-200 bg-red-50" },
              { phase: "Uke 1-2", desc: "Flytende kost — proteinshaker, buljong, vann.", icon: "🥤", color: "border-orange-200 bg-orange-50" },
              { phase: "Uke 3-6", desc: "Gradvis introduksjon av halvfast mat. Most mat og myke proteiner.", icon: "🥣", color: "border-yellow-200 bg-yellow-50" },
              { phase: "Fra uke 7", desc: "Overgang til sunn fast mat. Fokus på proteinrik, balansert kost.", icon: "🥗", color: "border-green-200 bg-green-50" },
              { phase: "Måned 3-12", desc: "Løpende ernæringsstøtte med regelmessige konsultasjoner.", icon: "📊", color: "border-blue-200 bg-blue-50" },
            ].map((phase, i) => (
              <div key={i} className={`flex items-start gap-5 p-6 rounded-xl border ${phase.color}`}><span className="text-3xl shrink-0">{phase.icon}</span><div><h4 className="font-bold text-slate-900 mb-1">{phase.phase}</h4><p className="text-slate-600 leading-relaxed">{phase.desc}</p></div></div>
            ))}
          </div>
          <div className="mt-10 p-6 bg-primary/5 rounded-xl border border-primary/10">
            <div className="flex items-start gap-4"><Utensils className="w-8 h-8 text-primary shrink-0 mt-1" /><div><h4 className="font-bold text-slate-900 mb-2">12 måneders ernæringsstøtte inkludert</h4><p className="text-slate-600">Hver ESG-pakke inkluderer tilgang til en kvalifisert ernæringsfysiolog som utarbeider individuelle kostplaner og følger dere gjennom hele det første året.</p></div></div>
          </div>
        </div>
      </section>

      <section className="py-20" data-testid="section-faq-no">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12"><h2 className="text-3xl font-bold text-slate-900 mb-4">Vanlige spørsmål — ESG for norske pasienter</h2><p className="text-lg text-slate-600">Alt dere trenger å vite før reisen til Istanbul.</p></div>
          <FAQAccordion faqs={noFaqs} />
        </div>
      </section>

      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-2xl font-bold text-slate-900 mb-8 text-center">Utforsk flere behandlingsalternativer</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { title: "ESG — full informasjon", href: "/esg", desc: "Alle detaljer om prosedyren" },
              { title: "Sleeve Gastrectomy", href: "/sleeve-gastrectomy", desc: "Den mest populære bariatriske operasjonen" },
              { title: "Gastric Balloon", href: "/gastric-balloon", desc: "Ikke-kirurgisk alternativ" },
              { title: "Alle behandlinger", href: "/treatments", desc: "Sammenligning og priser" },
              { title: "Resultater", href: "/results", desc: "Pasientenes suksesshistorier" },
              { title: "Kontakt", href: "/contact", desc: "Snakk med teamet vårt" },
            ].map((link, i) => (
              <Link key={i} href={link.href} className="flex items-center gap-3 p-4 bg-white rounded-xl border border-slate-200 hover:border-primary/30 hover:shadow-sm transition-all group" data-testid={`link-internal-no-${i}`}>
                <ArrowRight className="w-4 h-4 text-primary shrink-0 group-hover:translate-x-1 transition-transform" />
                <div><p className="font-medium text-slate-900 group-hover:text-primary transition-colors">{link.title}</p><p className="text-xs text-slate-500">{link.desc}</p></div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-primary text-white" data-testid="section-cta-no">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <span className="text-5xl mb-6 block">{noFlag}</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ta det første steget i dag</h2>
          <p className="text-xl text-white/80 mb-4 leading-relaxed">Hvis dere søker et trygt og effektivt alternativ til kirurgi, kan Endoskopisk Sleeve Gastroplastikk være den riktige løsningen.</p>
          <p className="text-lg text-white/70 mb-8">Kontakt oss i dag for en gratis online konsultasjon. Vi vurderer deres egnethet, svarer på alle spørsmål og utarbeider en individuell behandlingsplan — uten forpliktelser.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-primary hover:bg-white/90 font-bold text-lg h-14 px-10" onClick={() => window.open("https://wa.me/905324131143?text=Hei%2C%20jeg%20er%20fra%20Norge%20og%20er%20interessert%20i%20ESG", "_blank")} data-testid="button-cta-whatsapp-no"><Phone className="w-5 h-5 mr-2" />WhatsApp: +90 532 413 1143</Button>
            <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 font-bold text-lg h-14 px-10" onClick={() => window.open("mailto:drmuratustun@gmail.com?subject=ESG%20foresp%C3%B8rsel%20fra%20Norge", "_blank")} data-testid="button-cta-email-no"><MessageCircle className="w-5 h-5 mr-2" />Send e-post</Button>
          </div>
          <p className="text-white/50 mt-6 text-sm">E-post: <a href="mailto:drmuratustun@gmail.com" className="text-white/70 hover:text-white underline">drmuratustun@gmail.com</a></p>
        </div>
      </section>

      <Footer />
    </div>
  );
}

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

const dkFaqs = [
  {
    question: "Er ESG tilgængeligt via det offentlige sundhedsvæsen i Danmark?",
    answer: "Endoskopisk sleeve gastroplastik tilbydes ikke i det offentlige sundhedsvæsen i Danmark. Private klinikker i København og Aarhus kan tilbyde proceduren, men til væsentligt højere priser (60.000–120.000 DKK). Hos Istanbul Bariatric Center er all-inclusive-pakken € 6.450 (~48.000 DKK) — inklusive procedure, JCI-akkrediteret hospital, hotel, VIP-transfer og 12 måneders ernæringsstøtte.",
  },
  {
    question: "Hvor længe skal jeg blive i Istanbul?",
    answer: "De fleste danske patienter opholder sig i Istanbul i 3-4 dage. I ankommer dagen før proceduren, ESG udføres næste dag, tredje dag hviler I på hotellet og fjerde dag rejser I hjem. Direkte fly fra København Kastrup (~3-3,5 timer).",
  },
  {
    question: "Gør proceduren ondt?",
    answer: "ESG udføres under generel anæstesi — I mærker intet under proceduren. Efter opvågning kan I opleve let ubehag, kvalme eller en følelse af tyngde i maven. Disse symptomer forsvinder normalt inden for 1-3 dage og håndteres godt med medicin.",
  },
  {
    question: "Er resultaterne varige?",
    answer: "Ja, med den rette livsstil. ESG skaber en fysisk volumenreduktion af mavesækken — det er en strukturel ændring. For at fastholde resultaterne er det vigtigt at følge kostplanen, være regelmæssigt fysisk aktiv og deltage i opfølgning. Vores 12 måneders ernæringsprogram med kvalificeret diætist er inkluderet i alle pakker.",
  },
  {
    question: "Hvad er forskellen mellem ESG og Ozempic/Wegovy?",
    answer: "GLP-1-medicin som Ozempic og Wegovy kan være effektive i starten, men mange patienter tager på igen efter ophør. De løbende månedlige omkostninger (1.000-2.500 DKK/måned) akkumuleres hurtigt. ESG tilbyder en engangsløsning — en fysisk reduktion af mavesækken uden tilbagevendende omkostninger.",
  },
  {
    question: "Hvilket BMI kræves for ESG?",
    answer: "ESG anbefales generelt for patienter med et BMI mellem 30 og 40. Proceduren er særligt velegnet til personer, der ikke har opnået varige resultater med diæt og motion, ikke ønsker invasiv kirurgi eller foretrækker en minimalt invasiv metode med kort restitution.",
  },
  {
    question: "Er det sikkert at få behandling i udlandet?",
    answer: "Istanbul Bariatric Center opererer på Liv Hospital, akkrediteret af JCI (Joint Commission International) — den internationale guldstandard for patientsikkerhed. Dr. Murat Üstün har gennemført tusindvis af ESG-procedurer med fremragende sikkerhedsresultater.",
  },
  {
    question: "Hvad er inkluderet i all-inclusive-pakken?",
    answer: "Vores ESG-pakke til € 6.450 inkluderer: den fulde procedure, hospitalsophold på JCI-akkrediteret hospital, præoperative tests, VIP-transfer fra lufthavnen, hotelophold, postoperativ medicin, kvalificeret ernæringsstøtte i 12 måneder og løbende opfølgning. Ingen skjulte omkostninger.",
  },
];

const journeySteps = [
  { step: 1, title: "Gratis onlinekonsultation", desc: "Kontakt os via WhatsApp eller vores hjemmeside. Vores team vurderer jeres BMI, sygehistorie og mål for at bekræfte egnethed til ESG.", icon: MessageCircle },
  { step: 2, title: "Rejse til Tyrkiet", desc: "Vælg en dato — vi organiserer resten. Direkte fly fra København Kastrup (~3-3,5 timer).", icon: Plane },
  { step: 3, title: "VIP-transfer og hotel", desc: "En privat chauffør møder jer i Istanbuls lufthavn og kører jer til hotellet.", icon: Hotel },
  { step: 4, title: "Præoperative undersøgelser", desc: "Fuldstændige blodprøver og helbredscheck på hospitalet. Personligt møde med Dr. Murat Üstün.", icon: Stethoscope },
  { step: 5, title: "ESG-proceduren", desc: "ESG udføres under generel anæstesi på Liv Hospital (JCI). Varighed: 60-90 minutter. Ingen snit, ingen ar.", icon: HeartPulse },
  { step: 6, title: "Restitution og hjemrejse", desc: "Hvil på hotellet med løbende medicinsk opfølgning. De fleste patienter rejser hjem inden for 2-3 dage efter proceduren.", icon: Plane },
];

const comparisonMeds = [
  { factor: "Langvarig effekt", meds: "Begrænset — vægten vender ofte tilbage", esg: "Stabil — permanent fysisk reduktion" },
  { factor: "Bivirkninger", meds: "Almindelige (kvalme, diarré, risiko for pankreatitis)", esg: "Få (let ubehag 1-3 dage)" },
  { factor: "Omkostning", meds: "Løbende 1.000-2.500 DKK/måned (12.000-30.000 DKK/år)", esg: "Engangspris: € 6.450 all-inclusive (~48.000 DKK)" },
  { factor: "Vægtøgning", meds: "Almindelig efter ophør", esg: "Begrænset med sund livsstil" },
  { factor: "Indgreb", meds: "Nej — ugentlige/daglige injektioner", esg: "Ja — én endoskopisk procedure (60-90 min)" },
];

const comparisonSurgery = [
  { feature: "Type indgreb", esg: "Endoskopisk (via munden)", sleeve: "Laparoskopisk kirurgi (4-5 snit)" },
  { feature: "Anæstesi", esg: "Generel", sleeve: "Generel" },
  { feature: "Varighed", esg: "60-90 minutter", sleeve: "~60 minutter" },
  { feature: "Hospitalsophold", esg: "Samme dag eller 1 nat", sleeve: "2-3 nætter" },
  { feature: "Restitution", esg: "1-3 dage", sleeve: "2-3 uger" },
  { feature: "Ar", esg: "Ingen", sleeve: "4-5 små" },
  { feature: "Vægttab", esg: "15-20% af kropsvægten", sleeve: "60-70% af overvægten" },
  { feature: "Reversibilitet", esg: "Potentielt reversibel", sleeve: "Permanent (mavevæv fjernet)" },
  { feature: "Risikoprofil", esg: "Meget lav", sleeve: "Lav" },
];

const dkTestimonials = [
  { name: "Louise H.", location: "København", text: "Efter år med diæter og Ozempic uden varige resultater fandt jeg ESG. Teamet på Istanbul Bariatric Center var utroligt professionelt. På 5 måneder tabte jeg 16 kg. Endelig føler jeg mig fri.", weight: "−16 kg", time: "5 måneder" },
  { name: "Thomas B.", location: "Aarhus", text: "Jeg var i starten skeptisk over for behandling i udlandet. Men Liv Hospital overgik alle mine forventninger — kvaliteten var højere end noget jeg har set i Danmark. Dr. Murat er en exceptionel læge.", weight: "−21 kg", time: "6 måneder" },
  { name: "Maria S.", location: "Odense", text: "Fra lufthavnstransfer til ernæringsstøtte — alt var perfekt organiseret. Jeg troede aldrig resultaterne ville komme så hurtigt. 12-månedersprogrammet hjalp mig virkelig med at ændre mine kostvaner.", weight: "−14 kg", time: "4 måneder" },
];

function BMICalculator() {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [bmi, setBmi] = useState<number | null>(null);
  const calculateBMI = () => { const h = parseFloat(height) / 100; const w = parseFloat(weight); if (h > 0 && w > 0) setBmi(Math.round((w / (h * h)) * 10) / 10); };
  const getBMICategory = (bmi: number) => {
    if (bmi < 18.5) return { label: "Undervægt", color: "text-blue-600", eligible: false };
    if (bmi < 25) return { label: "Normalvægt", color: "text-green-600", eligible: false };
    if (bmi < 30) return { label: "Overvægt", color: "text-yellow-600", eligible: false };
    if (bmi < 35) return { label: "Fedme (grad I)", color: "text-orange-600", eligible: true };
    if (bmi < 40) return { label: "Fedme (grad II)", color: "text-red-500", eligible: true };
    return { label: "Svær fedme (grad III)", color: "text-red-700", eligible: false, surgical: true };
  };
  return (
    <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-200" data-testid="bmi-calculator-dk">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center"><Calculator className="w-6 h-6 text-primary" /></div>
        <div><h3 className="text-xl font-bold text-slate-900">Er ESG noget for mig?</h3><p className="text-sm text-slate-500">Beregn dit BMI og tjek egnethed</p></div>
      </div>
      <div className="grid sm:grid-cols-2 gap-4 mb-4">
        <div><label className="block text-sm font-medium text-slate-700 mb-1">Højde (cm)</label><input type="number" value={height} onChange={(e) => setHeight(e.target.value)} placeholder="f.eks. 175" className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none" data-testid="input-height-dk" /></div>
        <div><label className="block text-sm font-medium text-slate-700 mb-1">Vægt (kg)</label><input type="number" value={weight} onChange={(e) => setWeight(e.target.value)} placeholder="f.eks. 100" className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none" data-testid="input-weight-dk" /></div>
      </div>
      <Button onClick={calculateBMI} className="w-full bg-primary hover:bg-primary/90 h-12" data-testid="button-calculate-bmi-dk">Beregn BMI</Button>
      {bmi !== null && (
        <div className="mt-6 p-4 rounded-xl bg-slate-50 border border-slate-200" data-testid="bmi-result-dk">
          <div className="text-center mb-3"><span className="text-4xl font-bold text-primary">{bmi}</span><p className={`text-lg font-semibold ${getBMICategory(bmi).color}`}>{getBMICategory(bmi).label}</p></div>
          {getBMICategory(bmi).eligible ? (
            <div className="bg-green-50 border border-green-200 rounded-lg p-3 text-center"><p className="text-green-800 font-medium">I kan være en egnet kandidat til ESG!</p><p className="text-green-600 text-sm mt-1">Kontakt os for en gratis konsultation.</p></div>
          ) : getBMICategory(bmi).surgical ? (
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 text-center"><p className="text-blue-800 font-medium">Bariatrisk kirurgi kan være mere passende.</p><p className="text-blue-600 text-sm mt-1"><Link href="/treatments" className="underline">Se alle behandlingsmuligheder</Link></p></div>
          ) : (
            <div className="bg-slate-100 border border-slate-200 rounded-lg p-3 text-center"><p className="text-slate-700 font-medium">ESG anbefales normalt for BMI mellem 30 og 40.</p><p className="text-slate-500 text-sm mt-1">Kontakt os for at drøfte jeres muligheder.</p></div>
          )}
        </div>
      )}
    </div>
  );
}

function FAQAccordion({ faqs }: { faqs: typeof dkFaqs }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  return (
    <div className="space-y-3" data-testid="faq-accordion-dk">
      {faqs.map((faq, i) => (
        <div key={i} className={`rounded-xl border transition-all duration-200 ${openIndex === i ? "border-primary/30 bg-white shadow-md" : "border-slate-200 bg-white hover:border-slate-300"}`} data-testid={`faq-item-dk-${i}`}>
          <button className="w-full flex items-center justify-between p-5 text-left" onClick={() => setOpenIndex(openIndex === i ? null : i)} data-testid={`button-faq-dk-${i}`}>
            <span className="font-semibold text-slate-900 pr-4">{faq.question}</span>
            {openIndex === i ? <ChevronUp className="w-5 h-5 text-primary shrink-0" /> : <ChevronDown className="w-5 h-5 text-slate-400 shrink-0" />}
          </button>
          {openIndex === i && <div className="px-5 pb-5 text-slate-600 leading-relaxed animate-in fade-in duration-200">{faq.answer}</div>}
        </div>
      ))}
    </div>
  );
}

export default function ESGDenmark() {
  const dkFlag = "🇩🇰";
  const trFlag = "🇹🇷";

  return (
    <div className="min-h-screen bg-white">
      <SEO title="ESG Tyrkiet for danske patienter | Vægttab uden kirurgi | € 6.450 all-inclusive" description="Endoskopisk sleeve gastroplastik uden kirurgi for patienter fra Danmark. All-inclusive-pakke € 6.450 på JCI-akkrediteret hospital. Gratis konsultation." keywords="ESG Danmark, vægttab uden kirurgi, gastroplastik Tyrkiet, Ozempic alternativ, vægttab behandling, mavereduktion uden operation" url="/esg/dk" />
      <JsonLd data={{ "@context": "https://schema.org", "@type": "MedicalProcedure", "name": "Endoskopisk Sleeve Gastroplastik for danske patienter", "alternateName": ["ESG Danmark", "ESG Tyrkiet", "Vægttab uden kirurgi"], "description": "Endoskopisk Sleeve Gastroplastik (ESG) for patienter fra Danmark ved Istanbul Bariatric Center. JCI-akkrediteret hospital. All-inclusive € 6.450.", "procedureType": "Endoscopic", "bodyLocation": "Stomach", "relevantSpecialty": { "@type": "MedicalSpecialty", "name": "Bariatric Surgery" }, "offers": [{ "@type": "Offer", "name": "ESG All-Inclusive Pakke", "price": "6450", "priceCurrency": "EUR" }] }} />
      <JsonLd data={structuredData.createFAQ(dkFaqs)} />
      <JsonLd data={structuredData.createBreadcrumb([{ name: "Home", url: "/" }, { name: "Treatments", url: "/treatments" }, { name: "ESG", url: "/esg" }, { name: "ESG for danske patienter", url: "/esg/dk" }])} />
      <Navbar />

      <section className="relative bg-slate-900 text-white pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-primary/30 opacity-90" />
        <div className="absolute inset-0 opacity-15" style={{ backgroundImage: "url('/esg-dk-hero.webp')", backgroundSize: "cover", backgroundPosition: "center" }} />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center gap-3 mb-6">
              <span className="text-4xl">{dkFlag}</span>
              <Badge variant="outline" className="border-white/30 text-white/90 text-sm px-4 py-1">Tilpasset danske patienter</Badge>
              <span className="text-4xl">{trFlag}</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight" data-testid="heading-esg-dk-hero">Endoskopisk Sleeve Gastroplastik (ESG) — Vægttab uden kirurgi i Tyrkiet</h1>
            <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto mb-8 leading-relaxed">At tabe sig og fastholde resultatet kan være en stor udfordring — selv med diæter, motion og medicin som Ozempic eller Wegovy. ESG er en moderne, evidensbaseret metode til vægttab uden kirurgi. All-inclusive-pakke til € 6.450.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary hover:bg-primary/90 font-bold text-lg h-14 px-8" onClick={() => window.open("https://wa.me/905324131143?text=Hej%2C%20jeg%20er%20fra%20Danmark%20og%20er%20interesseret%20i%20ESG", "_blank")} data-testid="button-hero-whatsapp-dk"><Phone className="w-5 h-5 mr-2" />Gratis konsultation</Button>
              <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 font-bold text-lg h-14 px-8" onClick={() => document.getElementById("bmi-section-dk")?.scrollIntoView({ behavior: "smooth" })} data-testid="button-hero-bmi-dk"><Calculator className="w-5 h-5 mr-2" />Er det noget for mig?</Button>
            </div>
            <div className="flex flex-wrap gap-6 justify-center mt-10 text-sm text-slate-400">
              <span className="flex items-center gap-2"><ShieldCheck className="w-4 h-4" /> JCI-akkrediteret hospital</span>
              <span className="flex items-center gap-2"><Euro className="w-4 h-4" /> € 6.450 all-inclusive</span>
              <span className="flex items-center gap-2"><Clock className="w-4 h-4" /> 3-4 dages ophold</span>
              <span className="flex items-center gap-2"><Stethoscope className="w-4 h-4" /> 8.000+ vellykkede procedurer</span>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-b from-green-50 to-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-white rounded-2xl p-10 shadow-xl border-2 border-green-200 text-center" data-testid="card-pricing-dk">
            <Badge className="bg-green-100 text-green-800 hover:bg-green-100 text-sm mb-4">Fuldstændig transparent pris</Badge>
            <h2 className="text-3xl font-bold text-slate-900 mb-2">ESG All-Inclusive Pakke</h2>
            <div className="text-6xl font-bold text-primary my-4">€ 6.450</div>
            <p className="text-slate-500 text-lg mb-2">~48.000 DKK</p>
            <p className="text-slate-600 mb-8">Ingen skjulte omkostninger. Alt er inkluderet.</p>
            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4 text-left">
              {["Fuld ESG-procedure", "Generel anæstesi", "JCI-akkrediteret hospital", "Præoperative tests", "VIP-transfer fra lufthavn", "Hotelophold", "Postoperativ medicin", "12 mdr. ernæringsstøtte"].map((item, i) => (
                <div key={i} className="flex items-center gap-2 text-sm"><CheckCircle2 className="w-4 h-4 text-green-600 shrink-0" /><span className="text-slate-700">{item}</span></div>
              ))}
            </div>
            <Button className="mt-8 bg-primary hover:bg-primary/90 font-bold text-lg h-12 px-10" onClick={() => window.open("https://wa.me/905324131143?text=Hej%2C%20jeg%20er%20interesseret%20i%20ESG-pakken%20%E2%82%AC%206.450", "_blank")} data-testid="button-book-dk">Book gratis konsultation</Button>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-slate-900">Hvad er Endoskopisk Sleeve Gastroplastik (ESG)?</h2>
              <p className="text-lg text-slate-600 leading-relaxed">ESG er en innovativ procedure, der <strong>reducerer mavesækkens volumen uden kirurgi</strong>. Gennem munden føres et endoskop ned for at placere interne suturer, der reducerer mavevolumenet med 70-80%. I modsætning til en traditionel <Link href="/sleeve-gastrectomy" className="text-primary hover:underline">sleeve gastrectomy</Link> laves ingen snit, intet væv fjernes og restitutionen er væsentligt hurtigere.</p>
              <p className="text-lg text-slate-600 leading-relaxed">Proceduren anvender Apollo OverStitch-teknologi og tager ca. 60-90 minutter under generel anæstesi. Resultatet: tidligere mæthed og et naturligt reduceret madindtag.</p>
              <div className="grid grid-cols-3 gap-4 pt-4">
                <div className="text-center p-4 bg-primary/5 rounded-xl"><div className="text-2xl font-bold text-primary">60-90</div><p className="text-sm text-slate-600 mt-1">minutter</p></div>
                <div className="text-center p-4 bg-primary/5 rounded-xl"><div className="text-2xl font-bold text-primary">Ingen</div><p className="text-sm text-slate-600 mt-1">snit</p></div>
                <div className="text-center p-4 bg-primary/5 rounded-xl"><div className="text-2xl font-bold text-primary">1-3</div><p className="text-sm text-slate-600 mt-1">dages restitution</p></div>
              </div>
            </div>
            <div className="flex justify-center"><img src="/esg-procedure-cdn.webp" alt="ESG-procedure Endoskopisk Sleeve Gastroplastik" className="rounded-2xl shadow-xl max-w-md w-full" width="400" height="400" loading="lazy" /></div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">{dkFlag} Hvorfor vælger danske patienter ESG i Tyrkiet</h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">Flere og flere danskere vælger Istanbul for bariatrisk behandling — kvalitet, tilgængelighed og gennemsigtighed i fokus.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: ShieldCheck, title: "Begrænset adgang i Danmark", desc: "ESG tilbydes ikke i det offentlige sundhedsvæsen. Private klinikker er sjældne, og ventetiderne kan være lange — selv i København og Aarhus.", color: "bg-red-50", iconColor: "text-red-500" },
              { icon: Euro, title: "Betydelige besparelser", desc: "I Danmark kan ESG koste 60.000–120.000 DKK privat. Vores all-inclusive-pakke er € 6.450 (~48.000 DKK) — med procedure, hospital, hotel, transfer og 12 måneders opfølgning.", color: "bg-green-50", iconColor: "text-green-600" },
              { icon: Clock, title: "Hurtig adgang", desc: "Ingen venteliste. Hurtig konsultation, fleksible datoer og fuld behandling inden for 3-4 dage. Direkte fly fra København Kastrup (~3-3,5 timer).", color: "bg-blue-50", iconColor: "text-blue-600" },
            ].map((item, i) => { const Icon = item.icon; return (
              <div key={i} className="bg-white rounded-2xl p-8 shadow-sm border border-slate-200 hover:shadow-md transition-shadow" data-testid={`card-dk-reason-${i}`}>
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
            <h2 className="text-3xl font-bold text-slate-900 mb-4">ESG vs medicin til vægttab</h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">Mange patienter i Danmark starter med GLP-1-medicin som Ozempic eller Wegovy. ESG kan være det logiske næste skridt.</p>
          </div>
          <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-sm">
            <table className="w-full text-left" data-testid="table-esg-vs-meds-dk">
              <thead><tr className="bg-slate-900 text-white"><th className="p-4 font-semibold text-sm uppercase tracking-wider">Faktor</th><th className="p-4 font-semibold text-sm uppercase tracking-wider">Ozempic / Wegovy</th><th className="p-4 font-semibold text-sm uppercase tracking-wider bg-primary/90">ESG</th></tr></thead>
              <tbody>{comparisonMeds.map((row, i) => (<tr key={i} className={`border-b border-slate-100 ${i % 2 === 0 ? "bg-white" : "bg-slate-50/50"}`}><td className="p-4 font-medium text-slate-900">{row.factor}</td><td className="p-4 text-slate-700">{row.meds}</td><td className="p-4 text-slate-700 bg-primary/5 font-medium">{row.esg}</td></tr>))}</tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="py-20 bg-blue-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">ESG vs gastric sleeve-operation</h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">Sammenligning af ESG med <Link href="/sleeve-gastrectomy" className="text-primary hover:underline">kirurgisk sleeve gastrectomy</Link>.</p>
          </div>
          <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-sm">
            <table className="w-full text-left" data-testid="table-esg-vs-sleeve-dk">
              <thead><tr className="bg-slate-900 text-white"><th className="p-4 font-semibold text-sm uppercase tracking-wider">Egenskab</th><th className="p-4 font-semibold text-sm uppercase tracking-wider bg-primary/90">ESG</th><th className="p-4 font-semibold text-sm uppercase tracking-wider">Gastric Sleeve</th></tr></thead>
              <tbody>{comparisonSurgery.map((row, i) => (<tr key={i} className={`border-b border-slate-100 ${i % 2 === 0 ? "bg-white" : "bg-slate-50/50"}`}><td className="p-4 font-medium text-slate-900">{row.feature}</td><td className="p-4 text-slate-700 bg-primary/5 font-medium">{row.esg}</td><td className="p-4 text-slate-700">{row.sleeve}</td></tr>))}</tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-900 text-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-14"><h2 className="text-3xl font-bold mb-4">Hvorfor vælge Istanbul Bariatric Center?</h2><p className="text-lg text-slate-300 max-w-3xl mx-auto">Vi kombinerer medicinsk ekspertise med en patientoplevelse tilpasset internationale — og særligt skandinaviske — patienter.</p></div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Stethoscope, title: "Dr. Murat Üstün", desc: "Pioner inden for ESG i Tyrkiet. Tusindvis af vellykkede bariatriske indgreb." },
              { icon: ShieldCheck, title: "JCI-akkrediteret hospital", desc: "Alle procedurer på Liv Hospital — med JCI-akkreditering, den internationale guldstandard." },
              { icon: Users, title: "Internationalt team", desc: "Dedikeret team for internationale patienter. Klar kommunikation og struktureret opfølgning." },
              { icon: Euro, title: "€ 6.450 all-inclusive", desc: "Ingen skjulte omkostninger. Procedure, hospital, hotel, transfer, tests, 12 mdr. ernæringsstøtte." },
            ].map((item, i) => { const Icon = item.icon; return (
              <div key={i} className="bg-white/10 backdrop-blur rounded-xl p-6 text-center" data-testid={`card-dk-ibc-${i}`}>
                <div className="w-14 h-14 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4"><Icon className="w-7 h-7 text-primary" /></div>
                <h3 className="text-lg font-bold mb-2">{item.title}</h3><p className="text-slate-300 text-sm">{item.desc}</p>
              </div>
            ); })}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-14"><h2 className="text-3xl font-bold text-slate-900 mb-4">Jeres behandlingsforløb — trin for trin</h2><p className="text-lg text-slate-600">Fra første kontakt til hjemrejse — vi tager os af alle detaljer.</p></div>
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-primary/20 hidden md:block" />
            <div className="space-y-8">
              {journeySteps.map((step) => { const Icon = step.icon; return (
                <div key={step.step} className="relative flex gap-6" data-testid={`step-journey-dk-${step.step}`}>
                  <div className="relative z-10 shrink-0"><div className="w-16 h-16 rounded-full bg-primary text-white flex items-center justify-center shadow-lg"><Icon className="w-7 h-7" /></div></div>
                  <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200 flex-1 hover:shadow-md transition-shadow">
                    <div className="flex items-center gap-3 mb-2"><Badge variant="outline" className="text-primary border-primary/30">Trin {step.step}</Badge><h3 className="text-lg font-bold text-slate-900">{step.title}</h3></div>
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
            <div><img src="/esg-dk-istanbul.webp" alt="Istanbul — medicinsk turisme fra Danmark" className="rounded-2xl shadow-xl w-full" width="600" height="400" loading="lazy" /></div>
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-slate-900">Komfort og førsteklasses service</h2>
              <p className="text-lg text-slate-600 leading-relaxed">Jeres velbefindende er vores højeste prioritet — fra I lander i Istanbul. VIP-transfer, komfortabelt hotel og Liv Hospital med det nyeste medicinske udstyr.</p>
              <div className="flex flex-wrap gap-3">{["VIP-transfer lufthavn", "Komfortabelt hotel", "Liv Hospital (JCI)", "Support døgnet rundt", "WhatsApp-kontakt"].map((tag) => (<Badge key={tag} className="bg-primary/10 text-primary hover:bg-primary/10 px-3 py-1">{tag}</Badge>))}</div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-14"><h2 className="text-3xl font-bold text-slate-900 mb-4">Forventede resultater fra ESG</h2></div>
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="bg-primary text-white rounded-2xl p-8 text-center"><TrendingDown className="w-10 h-10 mx-auto mb-3 opacity-80" /><div className="text-4xl font-bold mb-2">15-20%</div><p className="text-white/80">Totalt vægttab</p><p className="text-sm text-white/60 mt-2">Over 12-18 måneder</p></div>
            <div className="bg-primary text-white rounded-2xl p-8 text-center"><Activity className="w-10 h-10 mx-auto mb-3 opacity-80" /><div className="text-4xl font-bold mb-2">~20 kg</div><p className="text-white/80">Gennemsnit (BMI 38+)</p><p className="text-sm text-white/60 mt-2">Første 6 måneder</p></div>
            <div className="bg-primary text-white rounded-2xl p-8 text-center"><HeartPulse className="w-10 h-10 mx-auto mb-3 opacity-80" /><div className="text-4xl font-bold mb-2">Betydelig</div><p className="text-white/80">Sundhedsforbedring</p><p className="text-sm text-white/60 mt-2">Diabetes, blodtryk, søvnapnø</p></div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-14"><h2 className="text-3xl font-bold text-slate-900 mb-4">{dkFlag} Oplevelser fra danske patienter</h2></div>
          <div className="grid md:grid-cols-3 gap-8">
            {dkTestimonials.map((t, i) => (
              <div key={i} className="bg-white rounded-2xl p-8 shadow-sm border border-slate-200" data-testid={`testimonial-dk-${i}`}>
                <div className="flex items-center gap-1 mb-4">{[...Array(5)].map((_, si) => (<Star key={si} className="w-5 h-5 fill-yellow-400 text-yellow-400" />))}</div>
                <p className="text-slate-600 italic leading-relaxed mb-6">&ldquo;{t.text}&rdquo;</p>
                <div className="flex items-center justify-between"><div><p className="font-bold text-slate-900">{t.name}</p><p className="text-sm text-slate-500 flex items-center gap-1"><MapPin className="w-3 h-3" /> {t.location}</p></div><div className="text-right"><p className="font-bold text-primary">{t.weight}</p><p className="text-xs text-slate-500">{t.time}</p></div></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20" id="bmi-section-dk">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-start max-w-6xl mx-auto">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-slate-900">Hvem er egnet til ESG?</h2>
              <p className="text-lg text-slate-600 leading-relaxed">ESG er beregnet til personer, der kæmper med overvægt og søger en løsning mellem livsstilsændringer og et større kirurgisk indgreb.</p>
              <div className="space-y-3">
                {["BMI mellem 30 og 40", "Diæter og motion har ikke givet varige resultater", "Ønsker ikke invasiv kirurgi", "Medicin har været utilstrækkelig eller for kostbar", "Foretrækker en minimalt invasiv metode med kort restitution", "Lider af overvægtsrelaterede tilstande (type 2-diabetes, forhøjet blodtryk, søvnapnø)"].map((item, i) => (
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
              <h2 className="text-3xl font-bold text-slate-900">Sikkerhed og kvalitetsstandarder</h2>
              <p className="text-lg text-slate-600 leading-relaxed">ESG anses for at være en af de sikreste procedurer til vægttab, når den udføres af erfarne specialister. Dr. Murat Üstün har gennemført tusindvis af ESG-procedurer på JCI-akkrediteret Liv Hospital.</p>
              <div className="space-y-3">
                {["JCI-akkrediteret hospital (international guldstandard)", "Certificeret kirurg med tusindvis af ESG-procedurer", "Avanceret suturteknik (Apollo OverStitch)", "Fuld præoperativ sundhedscheck", "Medicinsk support døgnet rundt efter proceduren", "Komplette medicinske protokoller"].map((item, i) => (
                  <div key={i} className="flex items-start gap-3"><ShieldCheck className="w-5 h-5 text-green-600 shrink-0 mt-0.5" /><p className="text-slate-700">{item}</p></div>
                ))}
              </div>
            </div>
            <div><img src="/esg-dk-consultation.webp" alt="Medicinsk konsultation for danske patienter" className="rounded-2xl shadow-xl w-full" width="600" height="400" loading="lazy" /></div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-slate-900 mb-4 text-center">Livet efter ESG</h2>
          <p className="text-lg text-slate-600 text-center mb-12">Proceduren er kun begyndelsen. Sådan ser restitutionen ud.</p>
          <div className="space-y-4">
            {[
              { phase: "Første 8 timer", desc: "Kun klare væsker. Hvile og restitution under medicinsk opsyn.", icon: "🏥", color: "border-red-200 bg-red-50" },
              { phase: "Uge 1-2", desc: "Flydende kost — proteinshakes, bouillon, vand.", icon: "🥤", color: "border-orange-200 bg-orange-50" },
              { phase: "Uge 3-6", desc: "Gradvis introduktion af halvfast føde. Moset mad og bløde proteiner.", icon: "🥣", color: "border-yellow-200 bg-yellow-50" },
              { phase: "Fra uge 7", desc: "Overgang til sund fast føde. Fokus på proteinrig, balanceret kost.", icon: "🥗", color: "border-green-200 bg-green-50" },
              { phase: "Måned 3-12", desc: "Løbende ernæringsstøtte med regelmæssige konsultationer.", icon: "📊", color: "border-blue-200 bg-blue-50" },
            ].map((phase, i) => (
              <div key={i} className={`flex items-start gap-5 p-6 rounded-xl border ${phase.color}`}><span className="text-3xl shrink-0">{phase.icon}</span><div><h4 className="font-bold text-slate-900 mb-1">{phase.phase}</h4><p className="text-slate-600 leading-relaxed">{phase.desc}</p></div></div>
            ))}
          </div>
          <div className="mt-10 p-6 bg-primary/5 rounded-xl border border-primary/10">
            <div className="flex items-start gap-4"><Utensils className="w-8 h-8 text-primary shrink-0 mt-1" /><div><h4 className="font-bold text-slate-900 mb-2">12 måneders ernæringsstøtte inkluderet</h4><p className="text-slate-600">Hver ESG-pakke inkluderer adgang til en kvalificeret diætist, der udarbejder individuelle kostplaner og følger jer gennem hele det første år.</p></div></div>
          </div>
        </div>
      </section>

      <section className="py-20" data-testid="section-faq-dk">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12"><h2 className="text-3xl font-bold text-slate-900 mb-4">Ofte stillede spørgsmål — ESG for danske patienter</h2><p className="text-lg text-slate-600">Alt I har brug for at vide før rejsen til Istanbul.</p></div>
          <FAQAccordion faqs={dkFaqs} />
        </div>
      </section>

      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-2xl font-bold text-slate-900 mb-8 text-center">Udforsk flere behandlingsmuligheder</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { title: "ESG — fuld information", href: "/esg", desc: "Alle detaljer om proceduren" },
              { title: "Sleeve Gastrectomy", href: "/sleeve-gastrectomy", desc: "Den mest populære bariatriske operation" },
              { title: "Gastric Balloon Turkey", href: "/gastric-balloon-turkey", desc: "Ikke-kirurgisk alternativ" },
              { title: "Alle behandlinger", href: "/treatments", desc: "Sammenligning og priser" },
              { title: "Resultater", href: "/results", desc: "Patienternes succeshistorier" },
              { title: "Kontakt", href: "/contact", desc: "Tal med vores team" },
            ].map((link, i) => (
              <Link key={i} href={link.href} className="flex items-center gap-3 p-4 bg-white rounded-xl border border-slate-200 hover:border-primary/30 hover:shadow-sm transition-all group" data-testid={`link-internal-dk-${i}`}>
                <ArrowRight className="w-4 h-4 text-primary shrink-0 group-hover:translate-x-1 transition-transform" />
                <div><p className="font-medium text-slate-900 group-hover:text-primary transition-colors">{link.title}</p><p className="text-xs text-slate-500">{link.desc}</p></div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-primary text-white" data-testid="section-cta-dk">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <span className="text-5xl mb-6 block">{dkFlag}</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Tag det første skridt i dag</h2>
          <p className="text-xl text-white/80 mb-4 leading-relaxed">Hvis I søger et sikkert og effektivt alternativ til kirurgi, kan Endoskopisk Sleeve Gastroplastik være den rette løsning.</p>
          <p className="text-lg text-white/70 mb-8">Kontakt os i dag for en gratis onlinekonsultation. Vi vurderer jeres egnethed, besvarer alle spørgsmål og udarbejder en personlig behandlingsplan — uden forpligtelser.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-primary hover:bg-white/90 font-bold text-lg h-14 px-10" onClick={() => window.open("https://wa.me/905324131143?text=Hej%2C%20jeg%20er%20fra%20Danmark%20og%20er%20interesseret%20i%20ESG", "_blank")} data-testid="button-cta-whatsapp-dk"><Phone className="w-5 h-5 mr-2" />WhatsApp: +90 532 413 1143</Button>
            <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 font-bold text-lg h-14 px-10" onClick={() => window.open("mailto:drmuratustun@gmail.com?subject=ESG%20foresp%C3%B8rgsel%20fra%20Danmark", "_blank")} data-testid="button-cta-email-dk"><MessageCircle className="w-5 h-5 mr-2" />Send e-mail</Button>
          </div>
          <p className="text-white/50 mt-6 text-sm">E-mail: <a href="mailto:drmuratustun@gmail.com" className="text-white/70 hover:text-white underline">drmuratustun@gmail.com</a></p>
        </div>
      </section>

      <Footer />
    </div>
  );
}

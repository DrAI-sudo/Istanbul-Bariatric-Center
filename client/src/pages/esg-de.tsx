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
  BadgePoundSterling,
} from "lucide-react";
import { Link } from "wouter";

const deFaqs = [
  {
    question: "Wird ESG von der Krankenkasse übernommen?",
    answer: "In der Regel übernehmen gesetzliche Krankenkassen in Deutschland die Kosten für ESG nicht. Die Endoskopische Sleeve Gastroplastik gilt als relativ neues Verfahren und ist noch nicht in den Leistungskatalog der GKV aufgenommen. Private Krankenversicherungen prüfen Einzelfälle, eine Kostenübernahme ist jedoch selten. Aus diesem Grund suchen viele deutsche Patienten nach günstigeren Alternativen im Ausland — wie dem Istanbul Bariatric Center, wo All-Inclusive-Pakete ab ca. 5.800 € (£5.700) angeboten werden.",
  },
  {
    question: "Wie lange muss ich in Istanbul bleiben?",
    answer: "Die meisten deutschen Patienten bleiben 3–4 Tage in Istanbul. Sie reisen am Vortag des Eingriffs an, die ESG wird am zweiten Tag durchgeführt, am dritten Tag erholen Sie sich im Hotel, und am vierten Tag fliegen Sie nach Hause. Direktflüge von Berlin, Frankfurt, München, Hamburg und Düsseldorf nach Istanbul dauern nur etwa 2,5–3 Stunden.",
  },
  {
    question: "Ist der Eingriff schmerzhaft?",
    answer: "Die ESG wird unter Vollnarkose durchgeführt — Sie spüren während des Eingriffs nichts. Nach dem Aufwachen können leichte Beschwerden wie Übelkeit oder ein Druckgefühl im Magenbereich auftreten, die in der Regel 1–3 Tage anhalten und mit Medikamenten gut behandelbar sind. Im Vergleich zu chirurgischen Eingriffen ist die Erholung deutlich angenehmer.",
  },
  {
    question: "Nehme ich nach der ESG wieder zu?",
    answer: "Langfristige Ergebnisse hängen von Ihrer Mitarbeit ab. Die ESG bietet ein leistungsstarkes strukturelles Werkzeug — Ihr Magen ist physisch kleiner — aber dauerhafte Ergebnisse erfordern die Einhaltung des Ernährungsplans, regelmäßige Bewegung und die Teilnahme an Nachsorge-Terminen. Unser 12-monatiges Nachsorgeprogramm mit qualifizierten Ernährungsberatern unterstützt Sie dabei, Ihre Ergebnisse langfristig zu halten.",
  },
  {
    question: "Wie schneidet ESG im Vergleich zu Ozempic oder Wegovy ab?",
    answer: "Während GLP-1-Medikamente wie Ozempic und Wegovy anfänglich wirksam sein können, nehmen viele Patienten wieder zu, sobald sie die Medikamente absetzen. Die monatlichen Kosten von 200–400 € summieren sich erheblich. ESG bietet eine einmalige, physische Veränderung des Magens, die eine langfristige Portionskontrolle unterstützt. Viele Patienten sehen ESG als den nächsten logischen Schritt, wenn Medikamente nicht mehr ausreichend wirken.",
  },
  {
    question: "Welchen BMI brauche ich für ESG?",
    answer: "ESG wird typischerweise für Patienten mit einem BMI zwischen 30 und 40 empfohlen. Das Verfahren eignet sich besonders für Personen, die mit Diäten und Sport allein keine dauerhaften Ergebnisse erzielen konnten, sich nicht für eine chirurgische Option entscheiden möchten oder einen minimalinvasiven Ansatz bevorzugen.",
  },
  {
    question: "Ist ein medizinischer Eingriff im Ausland sicher?",
    answer: "Das Istanbul Bariatric Center arbeitet im Liv Hospital, das die JCI-Akkreditierung (Joint Commission International) besitzt — den internationalen Goldstandard in der Gesundheitsversorgung. Dr. Murat Üstün hat Tausende erfolgreiche ESG-Eingriffe durchgeführt. Wir bieten die gleichen — oder höheren — Qualitätsstandards wie private Kliniken in Deutschland, mit deutschsprachiger Patientenbetreuung.",
  },
  {
    question: "Was ist im All-Inclusive-Paket enthalten?",
    answer: "Unsere ESG-Pakete umfassen den Eingriff selbst, den Aufenthalt im JCI-akkreditierten Krankenhaus, präoperative Bluttests und Untersuchungen, VIP-Flughafentransfer, Hotelunterkunft (z. B. Radisson Hotel), qualifizierte Ernährungsberatung für 12 Monate, postoperative Medikamente und fortlaufende Nachsorge. Es gibt keine versteckten Kosten.",
  },
];

const journeySteps = [
  {
    step: 1,
    title: "Kostenlose Online-Beratung",
    desc: "Kontaktieren Sie uns über WhatsApp oder unsere Website. Unser Team prüft Ihren BMI, Ihre Krankengeschichte und Ihre Ziele, um Ihre Eignung für ESG zu bestätigen.",
    icon: MessageCircle,
  },
  {
    step: 2,
    title: "Reise in die Türkei",
    desc: "Wählen Sie Ihren Termin — wir kümmern uns um alles. Direktflüge von Berlin, Frankfurt, München, Hamburg und Düsseldorf nach Istanbul dauern nur 2,5–3 Stunden.",
    icon: Plane,
  },
  {
    step: 3,
    title: "VIP-Flughafentransfer & Hotel",
    desc: "Ein privater Fahrer empfängt Sie am Istanbul Airport und bringt Sie zu Ihrem Hotel (z. B. Radisson Hotel). Entspannen Sie sich und bereiten Sie sich auf den nächsten Tag vor.",
    icon: Hotel,
  },
  {
    step: 4,
    title: "Präoperative Untersuchung",
    desc: "Umfassende Bluttests und Gesundheitsüberprüfung im Krankenhaus. Lernen Sie Dr. Murat Üstün und das medizinische Team kennen.",
    icon: Stethoscope,
  },
  {
    step: 5,
    title: "ESG-Eingriff",
    desc: "Die ESG wird unter Vollnarkose im JCI-akkreditierten Liv Hospital durchgeführt. Dauer: ca. 60–90 Minuten. Keine Schnitte, keine Narben.",
    icon: HeartPulse,
  },
  {
    step: 6,
    title: "Erholung & Heimreise",
    desc: "Erholen Sie sich im Hotel mit medizinischer Unterstützung. Die meisten Patienten fliegen innerhalb von 2–3 Tagen nach Hause — fit und bereit für den neuen Lebensabschnitt.",
    icon: Plane,
  },
];

const comparisonMeds = [
  { factor: "Dauerhafte Wirkung", meds: "Begrenzt — Gewichtszunahme nach Absetzen häufig", esg: "Stabiler — physische Magenverkleinerung bleibt bestehen" },
  { factor: "Nebenwirkungen", meds: "Häufig (Übelkeit, Durchfall, Pankreatitis-Risiko)", esg: "Gering (leichte Beschwerden für 1–3 Tage)" },
  { factor: "Kosten", meds: "200–400 €/Monat laufend (2.400–4.800 €/Jahr)", esg: "Einmalige Investition ab ca. 5.800 €" },
  { factor: "Jojo-Effekt", meds: "Häufig nach Absetzen der Medikamente", esg: "Reduziert bei gesunder Lebensweise" },
  { factor: "Kassenleistung", meds: "Eingeschränkt — strenge Kriterien", esg: "Keine Kassenleistung" },
  { factor: "Eingriff nötig?", meds: "Nein — wöchentliche/tägliche Injektionen", esg: "Ja — ein endoskopischer Eingriff (60–90 Min.)" },
];

const comparisonSurgery = [
  { feature: "Verfahren", esg: "Endoskopisch (über den Mund)", sleeve: "Laparoskopische Chirurgie (4–5 Schnitte)" },
  { feature: "Narkose", esg: "Vollnarkose", sleeve: "Vollnarkose" },
  { feature: "Dauer", esg: "60–90 Minuten", sleeve: "ca. 60 Minuten" },
  { feature: "Krankenhausaufenthalt", esg: "Gleicher Tag oder 1 Nacht", sleeve: "2–3 Nächte" },
  { feature: "Erholungszeit", esg: "1–3 Tage", sleeve: "2–3 Wochen" },
  { feature: "Narben", esg: "Keine", sleeve: "4–5 kleine Narben" },
  { feature: "Gewichtsverlust", esg: "15–20 % des Körpergewichts", sleeve: "60–70 % des Übergewichts" },
  { feature: "Reversibilität", esg: "Potenziell reversibel", sleeve: "Dauerhaft (Magengewebe entfernt)" },
  { feature: "Risikoprofil", esg: "Sehr gering", sleeve: "Gering" },
  { feature: "Preis ab (Istanbul)", esg: "Ab ca. 5.800 € (£5.700)", sleeve: "Ab ca. 3.450 € (£3.400)" },
];

const deTestimonials = [
  {
    name: "Sabine K.",
    location: "Berlin",
    text: "Ich hatte schon alles probiert — Diäten, Ozempic, sogar einen Personal Trainer. Nichts hat langfristig funktioniert. Die ESG im Istanbul Bariatric Center war die beste Entscheidung meines Lebens. 17 kg in 5 Monaten — und ich fühle mich endlich wieder wohl in meinem Körper.",
    weight: "17 kg verloren",
    time: "5 Monate",
  },
  {
    name: "Michael H.",
    location: "München",
    text: "Ich war anfangs skeptisch, ob ein medizinischer Eingriff in der Türkei die richtige Wahl ist. Aber das Liv Hospital hat mich vom ersten Moment überzeugt — alles auf höchstem Niveau. Dr. Murat und sein Team waren professionell, freundlich und kompetent. Die Ersparnisse im Vergleich zu München sind enorm.",
    weight: "21 kg verloren",
    time: "7 Monate",
  },
  {
    name: "Petra W.",
    location: "Hamburg",
    text: "Der gesamte Ablauf war perfekt organisiert — vom Flughafentransfer über das Hotel bis zur Nachsorge. Ich hätte nie gedacht, dass ich so schnell Ergebnisse sehen würde. Das Beste: Die Ernährungsberatung hat mir geholfen, meine Gewohnheiten dauerhaft zu ändern.",
    weight: "14 kg verloren",
    time: "4 Monate",
  },
];

function BMIRechner() {
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
    if (bmi < 18.5) return { label: "Untergewicht", color: "text-blue-600", eligible: false };
    if (bmi < 25) return { label: "Normalgewicht", color: "text-green-600", eligible: false };
    if (bmi < 30) return { label: "Übergewicht", color: "text-yellow-600", eligible: false };
    if (bmi < 35) return { label: "Adipositas (Grad I)", color: "text-orange-600", eligible: true };
    if (bmi < 40) return { label: "Adipositas (Grad II)", color: "text-red-500", eligible: true };
    return { label: "Schwere Adipositas (Grad III)", color: "text-red-700", eligible: false, surgical: true };
  };

  return (
    <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-200" data-testid="bmi-calculator-de">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
          <Calculator className="w-6 h-6 text-primary" />
        </div>
        <div>
          <h3 className="text-xl font-bold text-slate-900">Bin ich ein Kandidat für ESG?</h3>
          <p className="text-sm text-slate-500">Berechnen Sie Ihren BMI und prüfen Sie Ihre Eignung</p>
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-4 mb-4">
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">Größe (cm)</label>
          <input
            type="number"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            placeholder="z. B. 175"
            className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none"
            data-testid="input-height-de"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">Gewicht (kg)</label>
          <input
            type="number"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            placeholder="z. B. 100"
            className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none"
            data-testid="input-weight-de"
          />
        </div>
      </div>

      <Button
        onClick={calculateBMI}
        className="w-full bg-primary hover:bg-primary/90 h-12"
        data-testid="button-calculate-bmi-de"
      >
        BMI berechnen
      </Button>

      {bmi !== null && (
        <div className="mt-6 p-4 rounded-xl bg-slate-50 border border-slate-200" data-testid="bmi-result-de">
          <div className="text-center mb-3">
            <span className="text-4xl font-bold text-primary">{bmi}</span>
            <p className={`text-lg font-semibold ${getBMICategory(bmi).color}`}>{getBMICategory(bmi).label}</p>
          </div>
          {getBMICategory(bmi).eligible ? (
            <div className="bg-green-50 border border-green-200 rounded-lg p-3 text-center">
              <p className="text-green-800 font-medium">Sie könnten ein guter Kandidat für ESG sein!</p>
              <p className="text-green-600 text-sm mt-1">Kontaktieren Sie uns für eine kostenlose Beratung.</p>
            </div>
          ) : getBMICategory(bmi).surgical ? (
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 text-center">
              <p className="text-blue-800 font-medium">Eine bariatrische Operation könnte für Sie geeigneter sein.</p>
              <p className="text-blue-600 text-sm mt-1">
                <Link href="/treatments" className="underline">Alle Behandlungsoptionen ansehen</Link> oder kontaktieren Sie uns.
              </p>
            </div>
          ) : (
            <div className="bg-slate-100 border border-slate-200 rounded-lg p-3 text-center">
              <p className="text-slate-700 font-medium">ESG wird typischerweise ab BMI 30–40 empfohlen.</p>
              <p className="text-slate-500 text-sm mt-1">Kontaktieren Sie uns, um Ihre Optionen zu besprechen.</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

function FAQAccordion({ faqs }: { faqs: typeof deFaqs }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="space-y-3" data-testid="faq-accordion-de">
      {faqs.map((faq, i) => (
        <div
          key={i}
          className={`rounded-xl border transition-all duration-200 ${openIndex === i ? "border-primary/30 bg-white shadow-md" : "border-slate-200 bg-white hover:border-slate-300"}`}
          data-testid={`faq-item-de-${i}`}
        >
          <button
            className="w-full flex items-center justify-between p-5 text-left"
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
            data-testid={`button-faq-de-${i}`}
          >
            <span className="font-semibold text-slate-900 pr-4">{faq.question}</span>
            {openIndex === i ? (
              <ChevronUp className="w-5 h-5 text-primary shrink-0" />
            ) : (
              <ChevronDown className="w-5 h-5 text-slate-400 shrink-0" />
            )}
          </button>
          {openIndex === i && (
            <div className="px-5 pb-5 text-slate-600 leading-relaxed animate-in fade-in duration-200">
              {faq.answer}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default function ESGDeutschland() {
  const deFlag = "🇩🇪";
  const trFlag = "🇹🇷";

  const esgDESchema = {
    "@context": "https://schema.org",
    "@type": "MedicalProcedure",
    "name": "Endoskopische Sleeve Gastroplastik für deutsche Patienten",
    "alternateName": ["ESG Deutschland", "ESG Türkei", "Magenverkleinerung ohne OP", "Non-Surgical Weight Loss Germany"],
    "description": "Endoskopische Sleeve Gastroplastik (ESG) für Patienten aus Deutschland im Istanbul Bariatric Center. Minimalinvasive Magenverkleinerung ohne Operation. All-Inclusive-Pakete ab ca. 5.800 €. Bis zu 70 % günstiger als in Deutschland.",
    "procedureType": "Endoscopic",
    "bodyLocation": "Stomach",
    "preparation": "Kostenlose Online-Beratung, BMI-Analyse, medizinische Bewertung",
    "followup": "12-monatige Nachsorge mit qualifizierter Ernährungsberatung",
    "howPerformed": "Endoskopisches Nahtgerät wird über den Mund eingeführt, um den Magen um 70–80 % zu verkleinern. Keine Schnitte erforderlich.",
    "status": "https://schema.org/ActiveActionStatus",
    "relevantSpecialty": { "@type": "MedicalSpecialty", "name": "Bariatric Surgery" },
  };

  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="ESG Türkei für deutsche Patienten | Magenverkleinerung ohne OP | Bis zu 70 % sparen"
        description="ESG für Patienten aus Deutschland. Bis zu 70 % günstiger. All-Inclusive ab ca. 5.800 € im JCI-akkreditierten Krankenhaus. Kostenlose Beratung."
        keywords="ESG Deutschland, Magenverkleinerung ohne OP, ESG Türkei Kosten, Alternative Ozempic Deutschland, Abnehmen ohne Operation, Endoskopische Sleeve Gastroplastik Türkei, ESG Kosten Deutschland vs Türkei, bariatrische Chirurgie Türkei, Schlauchmagen ohne OP, Magenverkleinerung Istanbul"
        url="/esg/de"
      />
      <JsonLd data={esgDESchema} />
      <JsonLd data={structuredData.createFAQ(deFaqs)} />
      <JsonLd data={structuredData.createBreadcrumb([
        { name: "Home", url: "/" },
        { name: "Treatments", url: "/treatments" },
        { name: "ESG", url: "/esg" },
        { name: "ESG für deutsche Patienten", url: "/esg/de" },
      ])} />
      <Navbar />

      {/* Hero Section */}
      <section className="relative bg-slate-900 text-white pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-primary/30 opacity-90" />
        <div
          className="absolute inset-0 opacity-15"
          style={{
            backgroundImage: "url('/esg-de-hero.webp')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center gap-3 mb-6">
              <span className="text-4xl">{deFlag}</span>
              <Badge variant="outline" className="border-white/30 text-white/90 text-sm px-4 py-1">
                Speziell für deutsche Patienten
              </Badge>
              <span className="text-4xl">{trFlag}</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight" data-testid="heading-esg-de-hero">
              Endoskopische Sleeve Gastroplastik (ESG) für Patienten aus Deutschland — Abnehmen ohne Operation in der Türkei
            </h1>
            <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto mb-8 leading-relaxed">
              Sie haben schon alles versucht — Diäten, Sportprogramme, Medikamente wie Ozempic oder Wegovy — aber das Gewicht kommt immer wieder? Die ESG bietet deutschen Patienten eine moderne, minimalinvasive Alternative — deutlich günstiger als in Deutschland.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 font-bold text-lg h-14 px-8"
                onClick={() => window.open("https://wa.me/905324131143?text=Hallo%2C%20ich%20bin%20ein%20Patient%20aus%20Deutschland%20und%20interessiere%20mich%20f%C3%BCr%20ESG", "_blank")}
                data-testid="button-hero-whatsapp-de"
              >
                <Phone className="w-5 h-5 mr-2" />
                Kostenlose Beratung
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white/30 text-white hover:bg-white/10 font-bold text-lg h-14 px-8"
                onClick={() => document.getElementById("bmi-section-de")?.scrollIntoView({ behavior: "smooth" })}
                data-testid="button-hero-bmi-de"
              >
                <Calculator className="w-5 h-5 mr-2" />
                Bin ich geeignet?
              </Button>
            </div>
            <div className="flex flex-wrap gap-6 justify-center mt-10 text-sm text-slate-400">
              <span className="flex items-center gap-2"><ShieldCheck className="w-4 h-4" /> JCI-akkreditiertes Krankenhaus</span>
              <span className="flex items-center gap-2"><Euro className="w-4 h-4" /> Bis zu 70 % günstiger</span>
              <span className="flex items-center gap-2"><Clock className="w-4 h-4" /> 3–4 Tage Aufenthalt</span>
              <span className="flex items-center gap-2"><Stethoscope className="w-4 h-4" /> 8.000+ erfolgreiche Eingriffe</span>
            </div>
          </div>
        </div>
      </section>

      {/* Was ist ESG? */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-slate-900">Was ist die Endoskopische Sleeve Gastroplastik (ESG)?</h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                Die Endoskopische Sleeve Gastroplastik (ESG) ist ein innovatives, <strong>schnittfreies Verfahren zur Gewichtsreduktion</strong>, bei dem der Magen mithilfe eines Endoskops verkleinert wird, das über den Mund eingeführt wird. Im Gegensatz zur klassischen <Link href="/sleeve-gastrectomy" className="text-primary hover:underline">Schlauchmagen-Operation</Link> werden keine Schnitte am Bauch vorgenommen, kein Magengewebe entfernt, und die Erholung ist deutlich schneller.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed">
                Das Verfahren nutzt ein spezielles Nahtsystem — die Apollo OverStitch-Technologie — um den Magen um bis zu <strong>70–80 %</strong> zu verkleinern. So fühlen Sie sich schneller satt und essen automatisch weniger. Der Eingriff dauert ca. 60–90 Minuten unter Vollnarkose, und die meisten Patienten können am gleichen Tag oder nach einer Nacht im Krankenhaus entlassen werden.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed">
                Für deutsche Patienten stellt die ESG eine bahnbrechende Alternative dar — sowohl zur chirurgischen Gewichtsreduktion als auch zum langfristigen Einsatz von Medikamenten. Sie schließt die Lücke zwischen Lebensstilmaßnahmen, die nicht funktioniert haben, und einer invasiven Operation, für die viele Menschen nicht bereit sind oder die Kriterien nicht erfüllen.
              </p>
              <div className="grid grid-cols-3 gap-4 pt-4">
                <div className="text-center p-4 bg-primary/5 rounded-xl">
                  <div className="text-2xl font-bold text-primary">60–90</div>
                  <p className="text-sm text-slate-600 mt-1">Minuten</p>
                </div>
                <div className="text-center p-4 bg-primary/5 rounded-xl">
                  <div className="text-2xl font-bold text-primary">Null</div>
                  <p className="text-sm text-slate-600 mt-1">Schnitte</p>
                </div>
                <div className="text-center p-4 bg-primary/5 rounded-xl">
                  <div className="text-2xl font-bold text-primary">1–3</div>
                  <p className="text-sm text-slate-600 mt-1">Tage Erholung</p>
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <img
                src="/esg-procedure-cdn.webp"
                alt="ESG Endoskopische Sleeve Gastroplastik Verfahren"
                className="rounded-2xl shadow-xl max-w-md w-full"
                width="400"
                height="400"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Warum ESG im Ausland? */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              {deFlag} Warum deutsche Patienten ESG in der Türkei wählen
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Tausende deutsche Patienten reisen jährlich nach Istanbul für bariatrische Eingriffe. Hier erfahren Sie, warum die ESG im Ausland zur bevorzugten Wahl wird.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-200 hover:shadow-md transition-shadow" data-testid="card-de-reason-access">
              <div className="w-14 h-14 rounded-full bg-red-50 flex items-center justify-center mb-5">
                <ShieldCheck className="w-7 h-7 text-red-500" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Begrenzte Verfügbarkeit in Deutschland</h3>
              <p className="text-slate-600 leading-relaxed">
                Die ESG ist in Deutschland noch nicht flächendeckend verfügbar. Viele Kliniken bieten das Verfahren nicht an, und die gesetzlichen Krankenkassen übernehmen die Kosten in der Regel nicht. Private Anbieter sind selten und haben oft lange Wartelisten — selbst für eine Erstberatung in Berlin, München oder Hamburg.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-200 hover:shadow-md transition-shadow" data-testid="card-de-reason-cost">
              <div className="w-14 h-14 rounded-full bg-green-50 flex items-center justify-center mb-5">
                <Euro className="w-7 h-7 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Erhebliche Kostenersparnis</h3>
              <p className="text-slate-600 leading-relaxed">
                In Deutschland kostet ESG typischerweise <strong>8.000–15.000 €</strong> in privaten Kliniken. Im Istanbul Bariatric Center beginnen <strong>All-Inclusive-Pakete ab ca. 5.800 €</strong> (£5.700) — eine Ersparnis von bis zu 60–70 %. Das Paket umfasst Eingriff, Krankenhausaufenthalt, Hotel, Flughafentransfer, Voruntersuchungen und 12-monatige Ernährungsberatung.
              </p>
              <div className="mt-4 p-3 bg-green-50 rounded-lg">
                <p className="text-green-800 font-semibold text-sm">
                  Durchschnittliche Ersparnis: 4.000–9.000 €
                </p>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-200 hover:shadow-md transition-shadow" data-testid="card-de-reason-time">
              <div className="w-14 h-14 rounded-full bg-blue-50 flex items-center justify-center mb-5">
                <Clock className="w-7 h-7 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Keine Wartezeiten</h3>
              <p className="text-slate-600 leading-relaxed">
                Selbst in Großstädten wie Berlin, München, Frankfurt oder Hamburg können Wartezeiten für private Beratungen Wochen oder Monate betragen. Im Istanbul Bariatric Center erhalten Sie Ihre Beratung innerhalb weniger Tage, der Eingriff wird zeitnah geplant, und die gesamte Behandlung ist innerhalb von 3–4 Tagen abgeschlossen.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ESG vs Medikamente */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              ESG vs Medikamente zur Gewichtsreduktion
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Viele Patienten in Deutschland beginnen mit GLP-1-Medikamenten wie Ozempic oder Wegovy. Aber was passiert, wenn die Wirkung nachlässt, die Nebenwirkungen zunehmen oder die monatlichen Kosten sich summieren? ESG wird zunehmend als effektiver nächster Schritt gesehen.
            </p>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-sm">
            <table className="w-full text-left" data-testid="table-esg-vs-meds-de">
              <thead>
                <tr className="bg-slate-900 text-white">
                  <th className="p-4 font-semibold text-sm uppercase tracking-wider">Faktor</th>
                  <th className="p-4 font-semibold text-sm uppercase tracking-wider">Ozempic / Wegovy</th>
                  <th className="p-4 font-semibold text-sm uppercase tracking-wider bg-primary/90">ESG</th>
                </tr>
              </thead>
              <tbody>
                {comparisonMeds.map((row, i) => (
                  <tr
                    key={i}
                    className={`border-b border-slate-100 hover:bg-blue-50/50 transition-colors ${i % 2 === 0 ? "bg-white" : "bg-slate-50/50"}`}
                    data-testid={`row-meds-comparison-de-${i}`}
                  >
                    <td className="p-4 font-medium text-slate-900">{row.factor}</td>
                    <td className="p-4 text-slate-700">{row.meds}</td>
                    <td className="p-4 text-slate-700 bg-primary/5 font-medium">{row.esg}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="text-sm text-slate-500 mt-4 text-center">
            ESG bietet eine einmalige physische Magenverkleinerung — ohne laufende Medikamentenkosten.
          </p>
        </div>
      </section>

      {/* ESG vs Schlauchmagen */}
      <section className="py-20 bg-blue-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              ESG vs Schlauchmagen-Operation
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Sie sind unsicher, ob ESG oder eine <Link href="/sleeve-gastrectomy" className="text-primary hover:underline">Schlauchmagen-Operation</Link> für Sie die richtige Wahl ist? Hier ein detaillierter Vergleich. ESG eignet sich besonders für Patienten, die einen weniger invasiven Ansatz bevorzugen.
            </p>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-sm">
            <table className="w-full text-left" data-testid="table-esg-vs-sleeve-de">
              <thead>
                <tr className="bg-slate-900 text-white">
                  <th className="p-4 font-semibold text-sm uppercase tracking-wider">Merkmal</th>
                  <th className="p-4 font-semibold text-sm uppercase tracking-wider bg-primary/90">ESG</th>
                  <th className="p-4 font-semibold text-sm uppercase tracking-wider">Schlauchmagen</th>
                </tr>
              </thead>
              <tbody>
                {comparisonSurgery.map((row, i) => (
                  <tr
                    key={i}
                    className={`border-b border-slate-100 hover:bg-blue-50/50 transition-colors ${i % 2 === 0 ? "bg-white" : "bg-slate-50/50"}`}
                    data-testid={`row-sleeve-comparison-de-${i}`}
                  >
                    <td className="p-4 font-medium text-slate-900">{row.feature}</td>
                    <td className="p-4 text-slate-700 bg-primary/5 font-medium">{row.esg}</td>
                    <td className="p-4 text-slate-700">{row.sleeve}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="text-sm text-slate-500 mt-4 text-center">
            Beide Verfahren werden im JCI-akkreditierten Liv Hospital in Istanbul durchgeführt. <Link href="/treatments" className="text-primary hover:underline">Alle Behandlungsoptionen ansehen</Link>.
          </p>
        </div>
      </section>

      {/* Warum Istanbul Bariatric Center */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold mb-4">Warum das Istanbul Bariatric Center?</h2>
            <p className="text-lg text-slate-300 max-w-3xl mx-auto">
              Wir verbinden medizinische Spitzenleistung mit einem Patientenerlebnis, das speziell auf internationale — und insbesondere deutsche — Patienten zugeschnitten ist.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white/10 backdrop-blur rounded-xl p-6 text-center" data-testid="card-de-ibc-surgeon">
              <div className="w-14 h-14 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                <Stethoscope className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-lg font-bold mb-2">
                <a href="https://drmuratustun.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Dr. Murat Üstün</a>
              </h3>
              <p className="text-slate-300 text-sm">Pionier der ESG in der Türkei mit Tausenden erfolgreicher bariatrischer Eingriffe. International anerkannt für endoskopische Innovation und patientenorientierte Behandlung.</p>
            </div>

            <div className="bg-white/10 backdrop-blur rounded-xl p-6 text-center" data-testid="card-de-ibc-hospital">
              <div className="w-14 h-14 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                <ShieldCheck className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-lg font-bold mb-2">JCI-akkreditiertes Krankenhaus</h3>
              <p className="text-slate-300 text-sm">Alle Eingriffe finden im Liv Hospital statt — mit der Joint Commission International-Akkreditierung, dem internationalen Goldstandard für Patientensicherheit und Qualität.</p>
            </div>

            <div className="bg-white/10 backdrop-blur rounded-xl p-6 text-center" data-testid="card-de-ibc-team">
              <div className="w-14 h-14 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                <Users className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-lg font-bold mb-2">{deFlag} Deutsches Patienten-Team</h3>
              <p className="text-slate-300 text-sm">Engagierte Patientenkoordinatoren, die deutsche Erwartungen verstehen. Klare Kommunikation, transparente Preise, strukturierte Nachsorge. Kontakt über WhatsApp.</p>
            </div>

            <div className="bg-white/10 backdrop-blur rounded-xl p-6 text-center" data-testid="card-de-ibc-package">
              <div className="w-14 h-14 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                <BadgePoundSterling className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-lg font-bold mb-2">All-Inclusive ab ca. 5.800 €</h3>
              <p className="text-slate-300 text-sm">Keine versteckten Kosten. Pakete umfassen Eingriff, Krankenhaus, Hotel, Flughafentransfer, Voruntersuchungen, Ernährungsberatung und 12-monatiges Nachsorgeprogramm.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Behandlungsablauf */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Ihr ESG-Behandlungsablauf — Schritt für Schritt
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Von der ersten Anfrage bis zur Rückkehr nach Hause kümmern wir uns um jedes Detail. So läuft Ihre Behandlung als deutscher Patient in Istanbul ab.
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-primary/20 hidden md:block" />

            <div className="space-y-8">
              {journeySteps.map((step) => {
                const Icon = step.icon;
                return (
                  <div key={step.step} className="relative flex gap-6" data-testid={`step-journey-de-${step.step}`}>
                    <div className="relative z-10 shrink-0">
                      <div className="w-16 h-16 rounded-full bg-primary text-white flex items-center justify-center shadow-lg">
                        <Icon className="w-7 h-7" />
                      </div>
                    </div>
                    <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200 flex-1 hover:shadow-md transition-shadow">
                      <div className="flex items-center gap-3 mb-2">
                        <Badge variant="outline" className="text-primary border-primary/30">Schritt {step.step}</Badge>
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

      {/* Istanbul Komfort */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
            <div>
              <img
                src="/esg-de-istanbul.webp"
                alt="Istanbul Panorama — Ziel für Medizintourismus aus Deutschland"
                className="rounded-2xl shadow-xl w-full"
                width="600"
                height="400"
                loading="lazy"
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-slate-900">Erstklassiger Komfort & Betreuung</h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                Ihr Wohlbefinden hat für uns höchste Priorität — vom Moment Ihrer Landung in Istanbul. Unsere Partnerschaft mit Luxushotels wie dem Radisson garantiert Ihnen eine komfortable Basis, während das Liv Hospital modernste medizinische Einrichtungen bereitstellt, die internationalen Standards entsprechen und diese übertreffen.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed">
                Jeder Aspekt Ihres Aufenthalts wird von unserem Patiententeam koordiniert — von der Organisation Ihres Flughafentransfers bis zur Vorbereitung Ihres Hotelzimmers für die Erholung. Viele deutsche Patienten beschreiben ihre Erfahrung als „besser als jede Privatklinik zu Hause."
              </p>
              <div className="flex flex-wrap gap-3">
                <Badge className="bg-primary/10 text-primary hover:bg-primary/10 px-3 py-1">VIP-Flughafentransfer</Badge>
                <Badge className="bg-primary/10 text-primary hover:bg-primary/10 px-3 py-1">Radisson Hotel</Badge>
                <Badge className="bg-primary/10 text-primary hover:bg-primary/10 px-3 py-1">Liv Hospital (JCI)</Badge>
                <Badge className="bg-primary/10 text-primary hover:bg-primary/10 px-3 py-1">24/7 Patientenbetreuung</Badge>
                <Badge className="bg-primary/10 text-primary hover:bg-primary/10 px-3 py-1">WhatsApp-Kontakt</Badge>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ergebnisse */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">ESG-Ergebnisse — Was Sie erwarten können</h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Die ESG liefert messbare, nachhaltige Gewichtsreduktion — besonders in Kombination mit den Lebensstiländerungen, die unser Nachsorgeprogramm unterstützt.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="bg-primary text-white rounded-2xl p-8 text-center" data-testid="stat-weight-loss-de">
              <TrendingDown className="w-10 h-10 mx-auto mb-3 opacity-80" />
              <div className="text-4xl font-bold mb-2">15–20 %</div>
              <p className="text-white/80">Gewichtsverlust gesamt</p>
              <p className="text-sm text-white/60 mt-2">Über 12–18 Monate</p>
            </div>
            <div className="bg-primary text-white rounded-2xl p-8 text-center" data-testid="stat-bmi-38-de">
              <Activity className="w-10 h-10 mx-auto mb-3 opacity-80" />
              <div className="text-4xl font-bold mb-2">~20 kg</div>
              <p className="text-white/80">Durchschnitt (BMI 38+)</p>
              <p className="text-sm text-white/60 mt-2">In den ersten 6 Monaten</p>
            </div>
            <div className="bg-primary text-white rounded-2xl p-8 text-center" data-testid="stat-health-de">
              <HeartPulse className="w-10 h-10 mx-auto mb-3 opacity-80" />
              <div className="text-4xl font-bold mb-2">Deutliche</div>
              <p className="text-white/80">Gesundheitsverbesserung</p>
              <p className="text-sm text-white/60 mt-2">Diabetes, Blutdruck, Schlafapnoe</p>
            </div>
          </div>

          <div className="p-6 bg-blue-50 rounded-xl border border-blue-100">
            <p className="text-slate-700 leading-relaxed">
              Die Ergebnisse hängen von Ihrem Engagement ab — Ernährungsplan, regelmäßige Bewegung und Nachsorge-Termine. Unser 12-monatiges Programm mit qualifizierter Ernährungsberatung ist in allen Paketen enthalten und unterstützt Sie beim Erreichen und Halten Ihrer Ziele. <Link href="/results" className="text-primary hover:underline font-medium">Erfolgsgeschichten unserer Patienten ansehen</Link>.
            </p>
          </div>
        </div>
      </section>

      {/* Deutsche Erfahrungsberichte */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">{deFlag} Erfahrungsberichte deutscher Patienten</h2>
            <p className="text-lg text-slate-600">Echte Erfahrungen von deutschen Patienten, die sich im Istanbul Bariatric Center für ESG entschieden haben.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {deTestimonials.map((t, i) => (
              <div key={i} className="bg-white rounded-2xl p-8 shadow-sm border border-slate-200" data-testid={`testimonial-de-${i}`}>
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, si) => (
                    <Star key={si} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-slate-600 italic leading-relaxed mb-6">&ldquo;{t.text}&rdquo;</p>
                <div className="flex items-center justify-between mt-auto">
                  <div>
                    <p className="font-bold text-slate-900">{t.name}</p>
                    <p className="text-sm text-slate-500 flex items-center gap-1">
                      <MapPin className="w-3 h-3" /> {t.location}
                    </p>
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

      {/* BMI-Rechner & Eignung */}
      <section className="py-20" id="bmi-section-de">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-start max-w-6xl mx-auto">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-slate-900">Wer ist ein guter Kandidat für ESG?</h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                ESG richtet sich an Personen, die langfristig mit dem Abnehmen kämpfen und eine Lösung zwischen Lebensstiländerungen und einer größeren Operation suchen. Sie könnten ein geeigneter Kandidat sein, wenn:
              </p>
              <div className="space-y-3">
                {[
                  "Ihr BMI zwischen 30 und 40 liegt",
                  "Diäten und Sport allein nicht zum gewünschten Ergebnis geführt haben",
                  "Sie keine invasive Operation wünschen oder dafür nicht in Frage kommen",
                  "Medikamente zur Gewichtsreduktion nicht wirksam oder zu teuer waren",
                  "Sie ein Verfahren mit minimaler Erholungszeit bevorzugen",
                  "Sie unter adipositasbedingten Erkrankungen leiden (Typ-2-Diabetes, Bluthochdruck, Schlafapnoe)",
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <p className="text-slate-600">{item}</p>
                  </div>
                ))}
              </div>
              <p className="text-slate-600 leading-relaxed">
                Vor dem Eingriff führt unser medizinisches Team eine gründliche Bewertung Ihrer Krankengeschichte durch. Bei einem BMI über 40 können eine <Link href="/sleeve-gastrectomy" className="text-primary hover:underline">Schlauchmagen-Operation</Link> oder ein <Link href="/mini-gastric-bypass" className="text-primary hover:underline">Magenbypass</Link> geeigneter sein.
              </p>
            </div>
            <BMIRechner />
          </div>
        </div>
      </section>

      {/* Sicherheit */}
      <section className="py-20 bg-green-50">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-slate-900">Sicherheit & Qualitätsstandards</h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                Die ESG gilt als eines der sichersten Verfahren zur Gewichtsreduktion, wenn sie von erfahrenen Spezialisten in einer akkreditierten Einrichtung durchgeführt wird. Im Vergleich zu chirurgischen Alternativen bietet ESG geringere Komplikationsraten, keine chirurgischen Narben und eine deutlich schnellere Erholung.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed">
                Im Istanbul Bariatric Center hat <a href="https://drmuratustun.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Dr. Murat Üstün</a> Tausende ESG-Eingriffe mit hervorragenden Sicherheitsergebnissen durchgeführt. Alle Eingriffe finden im JCI-akkreditierten Liv Hospital statt — mit den gleichen internationalen Standards wie führende Kliniken in Deutschland.
              </p>
              <div className="space-y-3">
                {[
                  "JCI-akkreditiertes Krankenhaus (internationaler Goldstandard)",
                  "Zertifizierter Chirurg mit Tausenden ESG-Eingriffen",
                  "Moderne endoskopische Nahttechnologie (Apollo OverStitch)",
                  "Umfassende präoperative Gesundheitsuntersuchung",
                  "24/7 medizinische Nachsorge nach dem Eingriff",
                  "Umfassende Versicherungs- und Medizinprotokolle",
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <ShieldCheck className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
                    <p className="text-slate-700">{item}</p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <img
                src="/esg-de-consultation.webp"
                alt="Medizinische Beratung mit deutschem Patienten im Istanbul Bariatric Center"
                className="rounded-2xl shadow-xl w-full"
                width="600"
                height="400"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Leben nach ESG */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-slate-900 mb-4 text-center">Leben nach der ESG</h2>
          <p className="text-lg text-slate-600 text-center mb-12 max-w-3xl mx-auto">
            Der ESG-Eingriff ist erst der Anfang. So sieht Ihre Erholung und Ernährungsumstellung in den Wochen und Monaten nach der Behandlung aus.
          </p>

          <div className="space-y-4">
            {[
              { phase: "Erste 8 Stunden", desc: "Nur klare Flüssigkeiten. Ruhe und Erholung im Krankenhaus oder Hotel mit medizinischer Unterstützung.", icon: "🏥", color: "border-red-200 bg-red-50" },
              { phase: "Woche 1–2", desc: "Flüssigphase — Proteinshakes, klare Suppen, Wasser. Ihr Magen heilt und passt sich an seine neue Größe an.", icon: "🥤", color: "border-orange-200 bg-orange-50" },
              { phase: "Woche 3–6", desc: "Schrittweise Einführung von halbfester Nahrung. Pürierte Mahlzeiten und weiche Proteine. Ihre Ernährungsberaterin begleitet Sie.", icon: "🥣", color: "border-yellow-200 bg-yellow-50" },
              { phase: "Ab Woche 7", desc: "Schrittweiser Übergang zu gesunder fester Nahrung. Fokus auf proteinreiche, ausgewogene Mahlzeiten mit kontrollierten Portionen.", icon: "🥗", color: "border-green-200 bg-green-50" },
              { phase: "Monat 3–12", desc: "Fortlaufende Ernährungsberatung mit regelmäßigen Check-ins zur Fortschrittskontrolle und Anpassung Ihres Ernährungsplans.", icon: "📊", color: "border-blue-200 bg-blue-50" },
            ].map((phase, i) => (
              <div key={i} className={`flex items-start gap-5 p-6 rounded-xl border ${phase.color}`} data-testid={`phase-aftercare-de-${i}`}>
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
                <h4 className="font-bold text-slate-900 mb-2">12-monatige Ernährungsberatung inklusive</h4>
                <p className="text-slate-600 leading-relaxed">
                  Jedes ESG-Paket beinhaltet den Zugang zu einer qualifizierten Ernährungsberaterin, die individuelle Ernährungspläne erstellt, regelmäßige Beratungen durchführt und Sie das gesamte erste Jahr begleitet. Das ist keine allgemeine Beratung — es ist ein strukturiertes Programm, das auf Ihren Lebensstil, Ihre Vorlieben und Ihre Ziele zugeschnitten ist.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Warum Türkei */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">{trFlag} Warum die Türkei für Medizintourismus?</h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Die Türkei hat sich zu einem der weltweit führenden Ziele für Medizintourismus entwickelt — und Istanbul steht im Zentrum dieser Entwicklung.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Award, title: "Globales Gesundheitszentrum", desc: "Die Türkei führt jährlich über 1 Million medizintouristische Eingriffe durch, mit international akkreditierten Krankenhäusern in Istanbul." },
              { icon: Stethoscope, title: "Hocherfahrene Chirurgen", desc: "Türkische bariatrische Chirurgen gehören zu den erfahrensten weltweit — viele international ausgebildet und Mitglieder der IFSO." },
              { icon: Euro, title: "Wettbewerbsfähige Preise", desc: "Medizinische Spitzenversorgung zu einem Bruchteil der deutschen Kosten — ohne Kompromisse bei Qualität, Technologie oder Sicherheit." },
              { icon: Plane, title: "Kurze Anreise aus Deutschland", desc: "Direktflüge von Berlin, Frankfurt, München, Hamburg, Düsseldorf und weiteren Städten. Nur 2,5–3 Stunden bis Istanbul." },
              { icon: MapPin, title: "Istanbul — Weltmetropole", desc: "Eine lebendige, moderne Stadt zwischen Europa und Asien. Sicher, gut angebunden und gastfreundlich für internationale Besucher." },
              { icon: ShieldCheck, title: "Internationale Standards", desc: "Mehrere JCI-akkreditierte Krankenhäuser, strenge Aufsicht und eine Infrastruktur für Medizintourismus, die auf internationale Patienten ausgerichtet ist." },
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <div key={i} className="bg-white rounded-xl p-6 shadow-sm border border-slate-200" data-testid={`card-turkey-reason-de-${i}`}>
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-bold text-slate-900 mb-2">{item.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20" data-testid="section-faq-de">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Häufig gestellte Fragen — ESG für deutsche Patienten</h2>
            <p className="text-lg text-slate-600">Alles, was Sie wissen müssen, bevor Sie nach Istanbul reisen.</p>
          </div>
          <FAQAccordion faqs={deFaqs} />
        </div>
      </section>

      {/* Interne Links */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-2xl font-bold text-slate-900 mb-8 text-center">Weitere Behandlungsoptionen entdecken</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { title: "ESG — Alle Details", href: "/esg", desc: "Ausführliche Verfahrensinformationen" },
              { title: "Schlauchmagen-Operation", href: "/sleeve-gastrectomy", desc: "Beliebteste bariatrische Operation" },
              { title: "Mini-Magenbypass", href: "/mini-gastric-bypass", desc: "Kombiniertes Verfahren" },
              { title: "Magenballon", href: "/gastric-balloon", desc: "Nicht-chirurgische Option" },
              { title: "Alle Behandlungen", href: "/treatments", desc: "Verfahren & Preise vergleichen" },
              { title: "Patientenergebnisse", href: "/results", desc: "Vorher-Nachher-Erfolgsgeschichten" },
              { title: "Gesundheitsprofil", href: "/health-profile", desc: "Eignung prüfen" },
              { title: "Über uns", href: "/about", desc: "Dr. Murat Üstün & das Team" },
              { title: "Kontakt", href: "/contact", desc: "Kontaktieren Sie unser Team" },
            ].map((link, i) => (
              <Link key={i} href={link.href} className="flex items-center gap-3 p-4 bg-white rounded-xl border border-slate-200 hover:border-primary/30 hover:shadow-sm transition-all group" data-testid={`link-internal-de-${i}`}>
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
      <section className="py-20 bg-primary text-white" data-testid="section-cta-de">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <span className="text-5xl mb-6 block">{deFlag}</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Starten Sie jetzt Ihre Gewichtsabnahme</h2>
          <p className="text-xl text-white/80 mb-4 leading-relaxed">
            Wenn Sie eine effektive und sichere Alternative zur Operation suchen, könnte die Endoskopische Sleeve Gastroplastik die richtige Lösung für Sie sein.
          </p>
          <p className="text-lg text-white/70 mb-8">
            Kontaktieren Sie unser Team noch heute für eine kostenlose Online-Beratung. Wir prüfen Ihre Eignung, beantworten alle Ihre Fragen und erstellen einen individuellen Behandlungsplan — unverbindlich.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white text-primary hover:bg-white/90 font-bold text-lg h-14 px-10"
              onClick={() => window.open("https://wa.me/905324131143?text=Hallo%2C%20ich%20bin%20ein%20Patient%20aus%20Deutschland%20und%20interessiere%20mich%20f%C3%BCr%20ESG", "_blank")}
              data-testid="button-cta-whatsapp-de"
            >
              <Phone className="w-5 h-5 mr-2" />
              WhatsApp: +90 532 413 1143
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white/30 text-white hover:bg-white/10 font-bold text-lg h-14 px-10"
              onClick={() => window.open("mailto:drmuratustun@gmail.com?subject=ESG-Anfrage%20aus%20Deutschland", "_blank")}
              data-testid="button-cta-email-de"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              E-Mail senden
            </Button>
          </div>
          <p className="text-white/50 mt-6 text-sm">
            E-Mail: <a href="mailto:drmuratustun@gmail.com" className="text-white/70 hover:text-white underline">drmuratustun@gmail.com</a>
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}

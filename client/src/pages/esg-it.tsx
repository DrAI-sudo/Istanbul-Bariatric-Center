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

const itFaqs = [
  {
    question: "La ESG è coperta dal Servizio Sanitario Nazionale?",
    answer: "Attualmente la gastroplastica endoscopica non è inclusa nei LEA (Livelli Essenziali di Assistenza) del SSN italiano. Alcuni centri privati la offrono, ma a costi elevati (€ 8.000–15.000). Questa è una delle ragioni per cui molti pazienti italiani scelgono il trattamento all'estero — presso Istanbul Bariatric Center, il pacchetto tutto incluso è di € 6.450, con gli stessi standard di qualità internazionale.",
  },
  {
    question: "Quanto dura il soggiorno a Istanbul?",
    answer: "La maggior parte dei pazienti italiani rimane a Istanbul per 3-4 giorni. Arrivate il giorno precedente la procedura, la ESG viene eseguita il giorno successivo, vi riposate in hotel il terzo giorno e rientrate in Italia il quarto giorno. Voli diretti da Roma, Milano, Napoli, Venezia e altre città italiane (circa 2,5-3 ore).",
  },
  {
    question: "La procedura è dolorosa?",
    answer: "La ESG viene eseguita in anestesia generale — non sentirete nulla durante l'intervento. Al risveglio possono verificarsi lievi fastidi come nausea o una sensazione di pesantezza allo stomaco. Questi sintomi scompaiono generalmente entro 1-3 giorni e sono ben gestibili con i farmaci. Rispetto alla chirurgia tradizionale, il recupero è notevolmente più confortevole.",
  },
  {
    question: "I risultati sono duraturi?",
    answer: "I risultati a lungo termine dipendono dal vostro impegno. La ESG fornisce un potente strumento strutturale — lo stomaco è fisicamente più piccolo — ma il mantenimento dei risultati richiede il rispetto del piano alimentare, attività fisica regolare e la partecipazione agli appuntamenti di follow-up. Il nostro programma di 12 mesi con una dietista qualificata è incluso in tutti i pacchetti.",
  },
  {
    question: "Qual è la differenza tra ESG e Ozempic/Wegovy?",
    answer: "I farmaci GLP-1 come Ozempic e Wegovy possono essere inizialmente efficaci, ma molti pazienti riprendono peso dopo la sospensione. I costi mensili di € 200-400 si accumulano rapidamente. La ESG offre una soluzione unica e definitiva — una riduzione fisica dello stomaco senza costi ricorrenti. Molti pazienti considerano la ESG il passo logico successivo quando i farmaci non offrono più risultati sufficienti.",
  },
  {
    question: "Quale BMI è necessario per la ESG?",
    answer: "La ESG è generalmente raccomandata per pazienti con un BMI compreso tra 30 e 40. La procedura è particolarmente indicata per chi non ha ottenuto risultati duraturi con diete ed esercizio fisico, chi non desidera un intervento chirurgico invasivo, o chi preferisce un approccio minimamente invasivo con tempi di recupero rapidi.",
  },
  {
    question: "È sicuro un trattamento medico all'estero?",
    answer: "Istanbul Bariatric Center opera presso il Liv Hospital, accreditato JCI (Joint Commission International) — il gold standard internazionale per la qualità dell'assistenza sanitaria. Il Dr. Murat Üstün ha eseguito migliaia di procedure ESG con eccellenti risultati di sicurezza. Offriamo gli stessi — o superiori — standard qualitativi delle migliori cliniche private in Italia.",
  },
  {
    question: "Cosa include il pacchetto tutto incluso?",
    answer: "Il nostro pacchetto ESG a € 6.450 include: la procedura, il ricovero in ospedale accreditato JCI, gli esami e le analisi preoperatorie, il transfer VIP dall'aeroporto, il soggiorno in hotel (es. Radisson Hotel), il supporto nutrizionale qualificato per 12 mesi, i farmaci post-procedura e il follow-up continuo. Nessun costo nascosto.",
  },
];

const journeySteps = [
  {
    step: 1,
    title: "Consulenza online gratuita",
    desc: "Contattateci tramite WhatsApp o il nostro sito web. Il nostro team valuterà il vostro BMI, la storia clinica e gli obiettivi per confermare l'idoneità alla ESG.",
    icon: MessageCircle,
  },
  {
    step: 2,
    title: "Viaggio in Turchia",
    desc: "Scegliete la data — noi organizziamo tutto il resto. Voli diretti da Roma Fiumicino, Milano Malpensa, Napoli, Venezia e altre città. Durata del volo: circa 2,5-3 ore.",
    icon: Plane,
  },
  {
    step: 3,
    title: "Transfer VIP e hotel",
    desc: "Un autista privato vi accoglierà all'aeroporto di Istanbul e vi accompagnerà al vostro hotel (es. Radisson Hotel). Sistematevi e preparatevi per il giorno successivo.",
    icon: Hotel,
  },
  {
    step: 4,
    title: "Esami preoperatori",
    desc: "Analisi del sangue complete e controllo sanitario in ospedale. Incontro personale con il Dr. Murat Üstün e il team medico per un consulto approfondito.",
    icon: Stethoscope,
  },
  {
    step: 5,
    title: "Procedura ESG",
    desc: "La ESG viene eseguita in anestesia generale presso il Liv Hospital accreditato JCI. Durata: 60-90 minuti. Nessuna incisione, nessuna cicatrice.",
    icon: HeartPulse,
  },
  {
    step: 6,
    title: "Recupero e rientro",
    desc: "Riposatevi in hotel con assistenza medica continua. La maggior parte dei pazienti rientra in Italia entro 2-3 giorni dalla procedura — pronti per un nuovo inizio.",
    icon: Plane,
  },
];

const comparisonMeds = [
  { factor: "Efficacia a lungo termine", meds: "Limitata — ripresa del peso frequente dopo la sospensione", esg: "Più stabile — riduzione fisica permanente dello stomaco" },
  { factor: "Effetti collaterali", meds: "Frequenti (nausea, diarrea, rischio pancreatite)", esg: "Limitati (lieve fastidio per 1-3 giorni)" },
  { factor: "Costi", meds: "€ 200-400/mese continuativi (€ 2.400-4.800/anno)", esg: "Una tantum: € 6.450 tutto incluso" },
  { factor: "Ripresa del peso", meds: "Frequente dopo la sospensione del farmaco", esg: "Ridotta con uno stile di vita sano" },
  { factor: "Copertura SSN", meds: "Limitata e con criteri restrittivi", esg: "Non coperta dal SSN" },
  { factor: "Intervento necessario?", meds: "No — iniezioni settimanali/giornaliere", esg: "Sì — una singola procedura endoscopica (60-90 min)" },
];

const comparisonSurgery = [
  { feature: "Tipo di intervento", esg: "Endoscopico (attraverso la bocca)", sleeve: "Chirurgia laparoscopica (4-5 incisioni)" },
  { feature: "Anestesia", esg: "Anestesia generale", sleeve: "Anestesia generale" },
  { feature: "Durata", esg: "60-90 minuti", sleeve: "Circa 60 minuti" },
  { feature: "Degenza ospedaliera", esg: "Stesso giorno o 1 notte", sleeve: "2-3 notti" },
  { feature: "Tempi di recupero", esg: "1-3 giorni", sleeve: "2-3 settimane" },
  { feature: "Cicatrici", esg: "Nessuna", sleeve: "4-5 piccole cicatrici" },
  { feature: "Perdita di peso", esg: "15-20% del peso corporeo", sleeve: "60-70% del peso in eccesso" },
  { feature: "Reversibilità", esg: "Potenzialmente reversibile", sleeve: "Permanente (tessuto gastrico rimosso)" },
  { feature: "Profilo di rischio", esg: "Molto basso", sleeve: "Basso" },
  { feature: "Prezzo (Istanbul)", esg: "€ 6.450 tutto incluso", sleeve: "Da circa € 3.450 (£ 2.950)" },
];

const itTestimonials = [
  {
    name: "Giulia M.",
    location: "Milano",
    text: "Dopo anni di diete yo-yo e sei mesi di Ozempic senza risultati duraturi, ho scoperto la ESG. Il team di Istanbul Bariatric Center mi ha seguita con professionalità eccezionale. In 5 mesi ho perso 16 kg e finalmente mi sento bene nel mio corpo.",
    weight: "16 kg persi",
    time: "5 mesi",
  },
  {
    name: "Marco R.",
    location: "Roma",
    text: "Ero inizialmente scettico riguardo un trattamento medico all'estero. Ma il Liv Hospital ha superato tutte le mie aspettative — un livello di qualità che non avevo visto nemmeno nelle migliori cliniche private italiane. Il Dr. Murat è un professionista straordinario. E il costo totale era meno della metà di quanto mi era stato proposto in Italia.",
    weight: "21 kg persi",
    time: "6 mesi",
  },
  {
    name: "Francesca L.",
    location: "Napoli",
    text: "Dal transfer aeroportuale al supporto nutrizionale: tutto organizzato alla perfezione. Non avrei mai immaginato che i risultati sarebbero stati così rapidi. Il programma di 12 mesi mi ha aiutata a cambiare strutturalmente le mie abitudini alimentari. Lo consiglio a tutti.",
    weight: "14 kg persi",
    time: "4 mesi",
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
    if (bmi < 18.5) return { label: "Sottopeso", color: "text-blue-600", eligible: false };
    if (bmi < 25) return { label: "Peso normale", color: "text-green-600", eligible: false };
    if (bmi < 30) return { label: "Sovrappeso", color: "text-yellow-600", eligible: false };
    if (bmi < 35) return { label: "Obesità (classe I)", color: "text-orange-600", eligible: true };
    if (bmi < 40) return { label: "Obesità (classe II)", color: "text-red-500", eligible: true };
    return { label: "Obesità grave (classe III)", color: "text-red-700", eligible: false, surgical: true };
  };

  return (
    <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-200" data-testid="bmi-calculator-it">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
          <Calculator className="w-6 h-6 text-primary" />
        </div>
        <div>
          <h3 className="text-xl font-bold text-slate-900">Sono idoneo alla ESG?</h3>
          <p className="text-sm text-slate-500">Calcolate il vostro BMI e verificate l'idoneità</p>
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-4 mb-4">
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">Altezza (cm)</label>
          <input
            type="number"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            placeholder="es. 175"
            className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none"
            data-testid="input-height-it"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">Peso (kg)</label>
          <input
            type="number"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            placeholder="es. 100"
            className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none"
            data-testid="input-weight-it"
          />
        </div>
      </div>

      <Button
        onClick={calculateBMI}
        className="w-full bg-primary hover:bg-primary/90 h-12"
        data-testid="button-calculate-bmi-it"
      >
        Calcola BMI
      </Button>

      {bmi !== null && (
        <div className="mt-6 p-4 rounded-xl bg-slate-50 border border-slate-200" data-testid="bmi-result-it">
          <div className="text-center mb-3">
            <span className="text-4xl font-bold text-primary">{bmi}</span>
            <p className={`text-lg font-semibold ${getBMICategory(bmi).color}`}>{getBMICategory(bmi).label}</p>
          </div>
          {getBMICategory(bmi).eligible ? (
            <div className="bg-green-50 border border-green-200 rounded-lg p-3 text-center">
              <p className="text-green-800 font-medium">Potreste essere un buon candidato per la ESG!</p>
              <p className="text-green-600 text-sm mt-1">Contattateci per una consulenza gratuita.</p>
            </div>
          ) : getBMICategory(bmi).surgical ? (
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 text-center">
              <p className="text-blue-800 font-medium">Un intervento di chirurgia bariatrica potrebbe essere più indicato.</p>
              <p className="text-blue-600 text-sm mt-1">
                <Link href="/treatments" className="underline">Scoprite tutte le opzioni</Link> o contattateci.
              </p>
            </div>
          ) : (
            <div className="bg-slate-100 border border-slate-200 rounded-lg p-3 text-center">
              <p className="text-slate-700 font-medium">La ESG è generalmente raccomandata per un BMI tra 30 e 40.</p>
              <p className="text-slate-500 text-sm mt-1">Contattateci per discutere le vostre opzioni.</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

function FAQAccordion({ faqs }: { faqs: typeof itFaqs }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="space-y-3" data-testid="faq-accordion-it">
      {faqs.map((faq, i) => (
        <div
          key={i}
          className={`rounded-xl border transition-all duration-200 ${openIndex === i ? "border-primary/30 bg-white shadow-md" : "border-slate-200 bg-white hover:border-slate-300"}`}
          data-testid={`faq-item-it-${i}`}
        >
          <button
            className="w-full flex items-center justify-between p-5 text-left"
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
            data-testid={`button-faq-it-${i}`}
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

export default function ESGItalia() {
  const itFlag = "🇮🇹";
  const trFlag = "🇹🇷";

  const esgITSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalProcedure",
    "name": "Gastroplastica Endoscopica per pazienti italiani",
    "alternateName": ["ESG Italia", "ESG Turchia", "Dimagrire senza chirurgia", "Gastroplastica endoscopica prezzo"],
    "description": "Gastroplastica Endoscopica (ESG) per pazienti dall'Italia presso Istanbul Bariatric Center. Riduzione dello stomaco senza chirurgia. Pacchetto tutto incluso a € 6.450. Ospedale accreditato JCI.",
    "procedureType": "Endoscopic",
    "bodyLocation": "Stomach",
    "preparation": "Consulenza online gratuita, analisi BMI, valutazione medica",
    "followup": "12 mesi di supporto nutrizionale con dietista qualificata",
    "howPerformed": "Dispositivo di sutura endoscopico introdotto attraverso la bocca per ridurre lo stomaco del 70-80%. Nessuna incisione necessaria.",
    "status": "https://schema.org/ActiveActionStatus",
    "relevantSpecialty": { "@type": "MedicalSpecialty", "name": "Bariatric Surgery" },
  };

  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="ESG Turchia per pazienti italiani | Dimagrire senza chirurgia | € 6.450 tutto incluso"
        description="ESG senza chirurgia per pazienti dall'Italia. Tutto incluso € 6.450 in ospedale accreditato JCI a Istanbul. Consulenza gratuita."
        keywords="ESG Italia, dimagrire senza chirurgia, gastroplastica endoscopica prezzo, alternativa Ozempic Italia, perdere peso Turchia, riduzione stomaco senza operazione, ESG Turchia prezzo, chirurgia bariatrica Turchia, gastroplastica endoscopica Italia"
        url="/esg/it"
      />
      <JsonLd data={esgITSchema} />
      <JsonLd data={structuredData.createFAQ(itFaqs)} />
      <JsonLd data={structuredData.createBreadcrumb([
        { name: "Home", url: "/" },
        { name: "Treatments", url: "/treatments" },
        { name: "ESG", url: "/esg" },
        { name: "ESG per pazienti italiani", url: "/esg/it" },
      ])} />
      <Navbar />

      {/* Hero */}
      <section className="relative bg-slate-900 text-white pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-primary/30 opacity-90" />
        <div
          className="absolute inset-0 opacity-15"
          style={{
            backgroundImage: "url('/esg-it-hero.webp')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center gap-3 mb-6">
              <span className="text-4xl">{itFlag}</span>
              <Badge variant="outline" className="border-white/30 text-white/90 text-sm px-4 py-1">
                Dedicato ai pazienti italiani
              </Badge>
              <span className="text-4xl">{trFlag}</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight" data-testid="heading-esg-it-hero">
              Gastroplastica Endoscopica (ESG) per pazienti dall'Italia — Dimagrire senza chirurgia in Turchia
            </h1>
            <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto mb-8 leading-relaxed">
              Perdere peso in modo duraturo non è sempre facile, anche seguendo diete, attività fisica e trattamenti farmacologici come Ozempic o Wegovy. La Gastroplastica Endoscopica (ESG) rappresenta una soluzione moderna, sicura e minimamente invasiva — a un prezzo chiaro e trasparente di € 6.450 tutto incluso.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 font-bold text-lg h-14 px-8"
                onClick={() => window.open("https://wa.me/905324131143?text=Salve%2C%20sono%20un%20paziente%20dall%27Italia%20e%20sono%20interessato%20alla%20ESG", "_blank")}
                data-testid="button-hero-whatsapp-it"
              >
                <Phone className="w-5 h-5 mr-2" />
                Consulenza gratuita
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white/30 text-white hover:bg-white/10 font-bold text-lg h-14 px-8"
                onClick={() => document.getElementById("bmi-section-it")?.scrollIntoView({ behavior: "smooth" })}
                data-testid="button-hero-bmi-it"
              >
                <Calculator className="w-5 h-5 mr-2" />
                Sono idoneo?
              </Button>
            </div>
            <div className="flex flex-wrap gap-6 justify-center mt-10 text-sm text-slate-400">
              <span className="flex items-center gap-2"><ShieldCheck className="w-4 h-4" /> Ospedale accreditato JCI</span>
              <span className="flex items-center gap-2"><Euro className="w-4 h-4" /> € 6.450 tutto incluso</span>
              <span className="flex items-center gap-2"><Clock className="w-4 h-4" /> 3-4 giorni di soggiorno</span>
              <span className="flex items-center gap-2"><Stethoscope className="w-4 h-4" /> 8.000+ interventi riusciti</span>
            </div>
          </div>
        </div>
      </section>

      {/* Prezzo in evidenza */}
      <section className="py-16 bg-gradient-to-b from-green-50 to-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-white rounded-2xl p-10 shadow-xl border-2 border-green-200 text-center" data-testid="card-pricing-it">
            <Badge className="bg-green-100 text-green-800 hover:bg-green-100 text-sm mb-4">Prezzo chiaro e trasparente</Badge>
            <h2 className="text-3xl font-bold text-slate-900 mb-2">Pacchetto ESG tutto incluso</h2>
            <div className="text-6xl font-bold text-primary my-4">€ 6.450</div>
            <p className="text-slate-600 mb-8 text-lg">Nessun costo nascosto. Tutto compreso nel prezzo.</p>
            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4 text-left">
              {[
                "Procedura ESG completa",
                "Anestesia generale",
                "Ricovero ospedale JCI",
                "Esami preoperatori",
                "Transfer VIP aeroporto",
                "Soggiorno in hotel",
                "Farmaci post-procedura",
                "Follow-up nutrizionale 12 mesi",
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2 text-sm">
                  <CheckCircle2 className="w-4 h-4 text-green-600 shrink-0" />
                  <span className="text-slate-700">{item}</span>
                </div>
              ))}
            </div>
            <Button
              className="mt-8 bg-primary hover:bg-primary/90 font-bold text-lg h-12 px-10"
              onClick={() => window.open("https://wa.me/905324131143?text=Salve%2C%20sono%20interessato%20al%20pacchetto%20ESG%20a%20%E2%82%AC%206.450", "_blank")}
              data-testid="button-book-it"
            >
              Prenota la tua consulenza gratuita
            </Button>
          </div>
        </div>
      </section>

      {/* Cos'è la ESG */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-slate-900">Cos'è la Gastroplastica Endoscopica (ESG)?</h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                La ESG è una procedura innovativa per la <strong>riduzione dello stomaco senza chirurgia</strong>. Attraverso la bocca viene introdotto un endoscopio per applicare suture interne che riducono il volume gastrico del 70-80%. A differenza della classica <Link href="/sleeve-gastrectomy" className="text-primary hover:underline">sleeve gastrectomy</Link>, non vengono praticate incisioni, non viene rimosso tessuto gastrico e il recupero è significativamente più rapido.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed">
                La procedura utilizza la tecnologia Apollo OverStitch — un sistema avanzato di sutura endoscopica — per creare pieghe permanenti nella parete gastrica. Il risultato: una sensazione di sazietà precoce e una riduzione naturale dell'assunzione di cibo. L'intervento dura circa 60-90 minuti in anestesia generale, e la maggior parte dei pazienti può lasciare l'ospedale lo stesso giorno o dopo una notte.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed">
                Per i pazienti italiani, la ESG colma un vuoto importante — tra le misure di stile di vita che non hanno funzionato e un intervento chirurgico invasivo per il quale molti non sono pronti o non soddisfano i criteri.
              </p>
              <div className="grid grid-cols-3 gap-4 pt-4">
                <div className="text-center p-4 bg-primary/5 rounded-xl">
                  <div className="text-2xl font-bold text-primary">60-90</div>
                  <p className="text-sm text-slate-600 mt-1">minuti</p>
                </div>
                <div className="text-center p-4 bg-primary/5 rounded-xl">
                  <div className="text-2xl font-bold text-primary">Zero</div>
                  <p className="text-sm text-slate-600 mt-1">incisioni</p>
                </div>
                <div className="text-center p-4 bg-primary/5 rounded-xl">
                  <div className="text-2xl font-bold text-primary">1-3</div>
                  <p className="text-sm text-slate-600 mt-1">giorni di recupero</p>
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <img
                src="/esg-procedure-cdn.webp"
                alt="Procedura ESG Gastroplastica Endoscopica"
                className="rounded-2xl shadow-xl max-w-md w-full"
                width="400"
                height="400"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Perché l'estero */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              {itFlag} Perché i pazienti italiani scelgono la ESG in Turchia
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Migliaia di italiani scelgono ogni anno Istanbul per trattamenti bariatrici. Scoprite perché la ESG all'estero sta diventando la scelta preferita.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-200 hover:shadow-md transition-shadow" data-testid="card-it-reason-access">
              <div className="w-14 h-14 rounded-full bg-red-50 flex items-center justify-center mb-5">
                <ShieldCheck className="w-7 h-7 text-red-500" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Accesso limitato in Italia</h3>
              <p className="text-slate-600 leading-relaxed">
                La ESG non è ancora diffusa in Italia. La procedura non è disponibile nella maggior parte degli ospedali pubblici e i criteri per i trattamenti bariatrici nel SSN sono restrittivi. Le cliniche private che offrono la ESG sono rare e hanno spesso lunghe liste d'attesa — anche a Milano, Roma o Napoli.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-200 hover:shadow-md transition-shadow" data-testid="card-it-reason-cost">
              <div className="w-14 h-14 rounded-full bg-green-50 flex items-center justify-center mb-5">
                <Euro className="w-7 h-7 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Risparmio significativo</h3>
              <p className="text-slate-600 leading-relaxed">
                In Italia, la ESG costa tipicamente <strong>€ 8.000-15.000</strong> nelle cliniche private. Presso Istanbul Bariatric Center, il <strong>pacchetto tutto incluso è di € 6.450</strong> — un risparmio del 20-55%. Il pacchetto include procedura, ospedale, hotel, transfer e 12 mesi di supporto nutrizionale.
              </p>
              <div className="mt-4 p-3 bg-green-50 rounded-lg">
                <p className="text-green-800 font-semibold text-sm">
                  Risparmio medio: € 1.500-8.500
                </p>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-200 hover:shadow-md transition-shadow" data-testid="card-it-reason-time">
              <div className="w-14 h-14 rounded-full bg-blue-50 flex items-center justify-center mb-5">
                <Clock className="w-7 h-7 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Nessuna lista d'attesa</h3>
              <p className="text-slate-600 leading-relaxed">
                Anche nelle grandi città come Milano, Roma, Napoli o Torino, i tempi d'attesa per un consulto privato in ambito bariatrico possono raggiungere settimane o mesi. Presso Istanbul Bariatric Center, il vostro consulto viene organizzato in pochi giorni e il trattamento completo si conclude in 3-4 giorni.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ESG vs farmaci */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">ESG vs farmaci per dimagrire</h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Molti pazienti in Italia iniziano con farmaci GLP-1 come Ozempic o Wegovy. Ma cosa succede quando l'effetto diminuisce, gli effetti collaterali aumentano o i costi mensili si accumulano? La ESG si propone sempre più come il passo logico successivo.
            </p>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-sm">
            <table className="w-full text-left" data-testid="table-esg-vs-meds-it">
              <thead>
                <tr className="bg-slate-900 text-white">
                  <th className="p-4 font-semibold text-sm uppercase tracking-wider">Fattore</th>
                  <th className="p-4 font-semibold text-sm uppercase tracking-wider">Ozempic / Wegovy</th>
                  <th className="p-4 font-semibold text-sm uppercase tracking-wider bg-primary/90">ESG</th>
                </tr>
              </thead>
              <tbody>
                {comparisonMeds.map((row, i) => (
                  <tr key={i} className={`border-b border-slate-100 hover:bg-blue-50/50 transition-colors ${i % 2 === 0 ? "bg-white" : "bg-slate-50/50"}`} data-testid={`row-meds-comparison-it-${i}`}>
                    <td className="p-4 font-medium text-slate-900">{row.factor}</td>
                    <td className="p-4 text-slate-700">{row.meds}</td>
                    <td className="p-4 text-slate-700 bg-primary/5 font-medium">{row.esg}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-sm text-slate-500 mt-4 text-center">La ESG offre una riduzione fisica unica e definitiva dello stomaco — senza costi farmaceutici ricorrenti.</p>
        </div>
      </section>

      {/* ESG vs sleeve */}
      <section className="py-20 bg-blue-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">ESG vs Sleeve Gastrica chirurgica</h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Siete indecisi tra ESG e <Link href="/sleeve-gastrectomy" className="text-primary hover:underline">sleeve gastrectomy chirurgica</Link>? Ecco un confronto dettagliato. La ESG è particolarmente indicata per chi preferisce un approccio meno invasivo.
            </p>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-sm">
            <table className="w-full text-left" data-testid="table-esg-vs-sleeve-it">
              <thead>
                <tr className="bg-slate-900 text-white">
                  <th className="p-4 font-semibold text-sm uppercase tracking-wider">Caratteristica</th>
                  <th className="p-4 font-semibold text-sm uppercase tracking-wider bg-primary/90">ESG</th>
                  <th className="p-4 font-semibold text-sm uppercase tracking-wider">Sleeve Gastrica</th>
                </tr>
              </thead>
              <tbody>
                {comparisonSurgery.map((row, i) => (
                  <tr key={i} className={`border-b border-slate-100 hover:bg-blue-50/50 transition-colors ${i % 2 === 0 ? "bg-white" : "bg-slate-50/50"}`} data-testid={`row-sleeve-comparison-it-${i}`}>
                    <td className="p-4 font-medium text-slate-900">{row.feature}</td>
                    <td className="p-4 text-slate-700 bg-primary/5 font-medium">{row.esg}</td>
                    <td className="p-4 text-slate-700">{row.sleeve}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-sm text-slate-500 mt-4 text-center">Entrambe le procedure vengono eseguite presso il Liv Hospital accreditato JCI a Istanbul. <Link href="/treatments" className="text-primary hover:underline">Scoprite tutte le opzioni di trattamento</Link>.</p>
        </div>
      </section>

      {/* Perché Istanbul Bariatric Center */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold mb-4">Perché scegliere Istanbul Bariatric Center?</h2>
            <p className="text-lg text-slate-300 max-w-3xl mx-auto">Uniamo eccellenza medica e un'esperienza paziente progettata specificamente per i pazienti internazionali — e in particolare italiani.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white/10 backdrop-blur rounded-xl p-6 text-center" data-testid="card-it-ibc-surgeon">
              <div className="w-14 h-14 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4"><Stethoscope className="w-7 h-7 text-primary" /></div>
              <h3 className="text-lg font-bold mb-2"><a href="https://drmuratustun.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Dr. Murat Üstün</a></h3>
              <p className="text-slate-300 text-sm">Pioniere della ESG in Turchia, con migliaia di interventi bariatrici riusciti. Riconosciuto a livello internazionale per la sua competenza in endoscopia interventistica.</p>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-xl p-6 text-center" data-testid="card-it-ibc-hospital">
              <div className="w-14 h-14 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4"><ShieldCheck className="w-7 h-7 text-primary" /></div>
              <h3 className="text-lg font-bold mb-2">Ospedale accreditato JCI</h3>
              <p className="text-slate-300 text-sm">Tutti gli interventi vengono eseguiti presso il Liv Hospital — con accreditamento JCI, il gold standard internazionale per la sicurezza dei pazienti e la qualità dell'assistenza.</p>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-xl p-6 text-center" data-testid="card-it-ibc-team">
              <div className="w-14 h-14 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4"><Users className="w-7 h-7 text-primary" /></div>
              <h3 className="text-lg font-bold mb-2">{itFlag} Team dedicato</h3>
              <p className="text-slate-300 text-sm">Coordinatori che comprendono le esigenze dei pazienti italiani. Comunicazione chiara, prezzi trasparenti, follow-up strutturato. Contatto via WhatsApp.</p>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-xl p-6 text-center" data-testid="card-it-ibc-package">
              <div className="w-14 h-14 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4"><Euro className="w-7 h-7 text-primary" /></div>
              <h3 className="text-lg font-bold mb-2">€ 6.450 tutto incluso</h3>
              <p className="text-slate-300 text-sm">Nessun costo nascosto. Il pacchetto include procedura, ospedale, hotel, transfer VIP, esami, supporto nutrizionale e programma di 12 mesi.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Percorso */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Il vostro percorso — passo dopo passo</h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">Dal primo contatto al rientro in Italia: ci occupiamo di ogni dettaglio. Ecco come si svolge il vostro trattamento come paziente italiano a Istanbul.</p>
          </div>
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-primary/20 hidden md:block" />
            <div className="space-y-8">
              {journeySteps.map((step) => {
                const Icon = step.icon;
                return (
                  <div key={step.step} className="relative flex gap-6" data-testid={`step-journey-it-${step.step}`}>
                    <div className="relative z-10 shrink-0">
                      <div className="w-16 h-16 rounded-full bg-primary text-white flex items-center justify-center shadow-lg"><Icon className="w-7 h-7" /></div>
                    </div>
                    <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200 flex-1 hover:shadow-md transition-shadow">
                      <div className="flex items-center gap-3 mb-2">
                        <Badge variant="outline" className="text-primary border-primary/30">Passo {step.step}</Badge>
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

      {/* Comfort Istanbul */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
            <div>
              <img src="/esg-it-istanbul.webp" alt="Istanbul — Destinazione per il turismo medico dall'Italia" className="rounded-2xl shadow-xl w-full" width="600" height="400" loading="lazy" />
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-slate-900">Comfort e assistenza di prima classe</h2>
              <p className="text-lg text-slate-600 leading-relaxed">Il vostro benessere è la nostra priorità — dal momento in cui atterrate a Istanbul. La nostra collaborazione con hotel di qualità come il Radisson garantisce una base confortevole, mentre il Liv Hospital dispone delle più moderne attrezzature mediche, conformi ai più alti standard internazionali.</p>
              <p className="text-lg text-slate-600 leading-relaxed">Ogni aspetto del vostro soggiorno viene coordinato dal nostro team — dall'organizzazione del transfer aeroportuale alla preparazione della camera d'hotel per il recupero. Molti dei nostri pazienti italiani descrivono la loro esperienza come «migliore di qualsiasi clinica privata in Italia».</p>
              <div className="flex flex-wrap gap-3">
                <Badge className="bg-primary/10 text-primary hover:bg-primary/10 px-3 py-1">Transfer VIP aeroporto</Badge>
                <Badge className="bg-primary/10 text-primary hover:bg-primary/10 px-3 py-1">Radisson Hotel</Badge>
                <Badge className="bg-primary/10 text-primary hover:bg-primary/10 px-3 py-1">Liv Hospital (JCI)</Badge>
                <Badge className="bg-primary/10 text-primary hover:bg-primary/10 px-3 py-1">Assistenza 24/7</Badge>
                <Badge className="bg-primary/10 text-primary hover:bg-primary/10 px-3 py-1">Contatto WhatsApp</Badge>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Risultati */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Risultati attesi dalla ESG</h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">La ESG produce una perdita di peso misurabile e duratura — soprattutto in combinazione con i cambiamenti nello stile di vita supportati dal nostro programma di follow-up.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="bg-primary text-white rounded-2xl p-8 text-center" data-testid="stat-weight-loss-it">
              <TrendingDown className="w-10 h-10 mx-auto mb-3 opacity-80" />
              <div className="text-4xl font-bold mb-2">15-20%</div>
              <p className="text-white/80">Perdita di peso totale</p>
              <p className="text-sm text-white/60 mt-2">In 12-18 mesi</p>
            </div>
            <div className="bg-primary text-white rounded-2xl p-8 text-center" data-testid="stat-bmi-38-it">
              <Activity className="w-10 h-10 mx-auto mb-3 opacity-80" />
              <div className="text-4xl font-bold mb-2">~20 kg</div>
              <p className="text-white/80">Media (BMI 38+)</p>
              <p className="text-sm text-white/60 mt-2">Nei primi 6 mesi</p>
            </div>
            <div className="bg-primary text-white rounded-2xl p-8 text-center" data-testid="stat-health-it">
              <HeartPulse className="w-10 h-10 mx-auto mb-3 opacity-80" />
              <div className="text-4xl font-bold mb-2">Notevole</div>
              <p className="text-white/80">Miglioramento della salute</p>
              <p className="text-sm text-white/60 mt-2">Diabete, pressione, apnea notturna</p>
            </div>
          </div>
          <div className="p-6 bg-blue-50 rounded-xl border border-blue-100">
            <p className="text-slate-700 leading-relaxed">I risultati dipendono dal vostro impegno — seguire il piano alimentare, praticare regolarmente attività fisica e partecipare agli appuntamenti di follow-up. Il nostro programma di 12 mesi con dietista qualificata è incluso in tutti i pacchetti. <Link href="/results" className="text-primary hover:underline font-medium">Scoprite le storie di successo dei nostri pazienti</Link>.</p>
          </div>
        </div>
      </section>

      {/* Testimonianze */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">{itFlag} Esperienze dei pazienti italiani</h2>
            <p className="text-lg text-slate-600">Storie vere di pazienti italiani che hanno scelto la ESG presso Istanbul Bariatric Center.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {itTestimonials.map((t, i) => (
              <div key={i} className="bg-white rounded-2xl p-8 shadow-sm border border-slate-200" data-testid={`testimonial-it-${i}`}>
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

      {/* BMI Calculator */}
      <section className="py-20" id="bmi-section-it">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-start max-w-6xl mx-auto">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-slate-900">Chi è idoneo alla ESG?</h2>
              <p className="text-lg text-slate-600 leading-relaxed">La ESG è destinata a persone che lottano con il sovrappeso da tempo e cercano una soluzione tra le misure di stile di vita e un intervento chirurgico importante. Potreste essere idonei se:</p>
              <div className="space-y-3">
                {[
                  "Il vostro BMI è compreso tra 30 e 40",
                  "Diete ed esercizio fisico non hanno prodotto risultati duraturi",
                  "Non desiderate un intervento chirurgico invasivo",
                  "I farmaci sono stati insufficienti o troppo costosi",
                  "Preferite una procedura con tempi di recupero minimi",
                  "Soffrite di patologie legate all'obesità (diabete tipo 2, ipertensione, apnea notturna)",
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <p className="text-slate-600">{item}</p>
                  </div>
                ))}
              </div>
              <p className="text-slate-600 leading-relaxed">Prima dell'intervento, il nostro team medico esegue una valutazione approfondita della vostra storia clinica. Con un BMI superiore a 40, una <Link href="/sleeve-gastrectomy" className="text-primary hover:underline">sleeve gastrectomy</Link> o un <Link href="/mini-gastric-bypass" className="text-primary hover:underline">bypass gastrico</Link> potrebbe essere più indicato.</p>
            </div>
            <BMICalculator />
          </div>
        </div>
      </section>

      {/* Sicurezza */}
      <section className="py-20 bg-green-50">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-slate-900">Sicurezza e standard di qualità</h2>
              <p className="text-lg text-slate-600 leading-relaxed">La ESG è considerata una delle procedure più sicure per la perdita di peso quando eseguita da specialisti esperti in una struttura accreditata. Rispetto alle alternative chirurgiche, la ESG presenta tassi di complicanze inferiori, nessuna cicatrice e un recupero significativamente più rapido.</p>
              <p className="text-lg text-slate-600 leading-relaxed">Presso Istanbul Bariatric Center, il <a href="https://drmuratustun.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Dr. Murat Üstün</a> ha eseguito migliaia di procedure ESG con eccellenti risultati di sicurezza. Tutti gli interventi si svolgono presso il Liv Hospital accreditato JCI — con gli stessi standard internazionali dei migliori centri in Italia.</p>
              <div className="space-y-3">
                {[
                  "Ospedale accreditato JCI (gold standard internazionale)",
                  "Chirurgo certificato con migliaia di ESG eseguite",
                  "Tecnologia avanzata di sutura endoscopica (Apollo OverStitch)",
                  "Controllo sanitario preoperatorio completo",
                  "Assistenza medica 24/7 post-procedura",
                  "Protocolli medici e assicurativi completi",
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <ShieldCheck className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
                    <p className="text-slate-700">{item}</p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <img src="/esg-it-consultation.webp" alt="Consulto medico con paziente italiano presso Istanbul Bariatric Center" className="rounded-2xl shadow-xl w-full" width="600" height="400" loading="lazy" />
            </div>
          </div>
        </div>
      </section>

      {/* Dopo la procedura */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-slate-900 mb-4 text-center">La vita dopo la ESG</h2>
          <p className="text-lg text-slate-600 text-center mb-12 max-w-3xl mx-auto">La procedura è solo il punto di partenza. Ecco come si svolge il recupero e la transizione alimentare nelle settimane e nei mesi successivi.</p>
          <div className="space-y-4">
            {[
              { phase: "Prime 8 ore", desc: "Solo liquidi chiari. Riposo e recupero in ospedale o in hotel con assistenza medica continua.", icon: "🏥", color: "border-red-200 bg-red-50" },
              { phase: "Settimana 1-2", desc: "Fase liquida — frullati proteici, brodo chiaro, acqua. Lo stomaco guarisce e si adatta alla sua nuova dimensione.", icon: "🥤", color: "border-orange-200 bg-orange-50" },
              { phase: "Settimana 3-6", desc: "Introduzione graduale di cibi semisolidi. Pasti frullati e proteine morbide. La vostra dietista vi guida ad ogni passo.", icon: "🥣", color: "border-yellow-200 bg-yellow-50" },
              { phase: "Dalla settimana 7", desc: "Transizione graduale verso cibi solidi sani. Focus su pasti ricchi di proteine, equilibrati e con porzioni controllate.", icon: "🥗", color: "border-green-200 bg-green-50" },
              { phase: "Mese 3-12", desc: "Supporto nutrizionale continuo con check-in regolari per valutare i progressi e adattare il piano alimentare.", icon: "📊", color: "border-blue-200 bg-blue-50" },
            ].map((phase, i) => (
              <div key={i} className={`flex items-start gap-5 p-6 rounded-xl border ${phase.color}`} data-testid={`phase-aftercare-it-${i}`}>
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
                <h4 className="font-bold text-slate-900 mb-2">12 mesi di supporto nutrizionale incluso</h4>
                <p className="text-slate-600 leading-relaxed">Ogni pacchetto ESG include l'accesso a una dietista qualificata che elabora piani alimentari individuali, programma consulenze regolari e vi accompagna per tutto il primo anno. Non si tratta di consigli generici — è un programma strutturato, adattato al vostro stile di vita, preferenze e obiettivi.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Perché Turchia */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">{trFlag} Perché la Turchia per il turismo medico?</h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">La Turchia si è affermata come una delle destinazioni leader mondiali per il turismo medico — e Istanbul ne è il cuore pulsante.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Award, title: "Centro sanitario globale", desc: "La Turchia accoglie annualmente più di un milione di pazienti medici internazionali, con ospedali accreditati JCI in tutta Istanbul." },
              { icon: Stethoscope, title: "Chirurghi altamente qualificati", desc: "I chirurghi bariatrici turchi sono tra i più esperti al mondo — molti formati a livello internazionale e membri dell'IFSO." },
              { icon: Euro, title: "Prezzi competitivi", desc: "Assistenza medica di eccellenza a una frazione dei costi italiani — senza compromessi sulla qualità, la tecnologia o la sicurezza." },
              { icon: Plane, title: "Facilmente raggiungibile", desc: "Voli diretti da Roma, Milano, Napoli, Venezia, Bologna e altre città italiane. Durata del volo: circa 2,5-3 ore." },
              { icon: MapPin, title: "Istanbul — metropoli mondiale", desc: "Una città vibrante e moderna al crocevia tra Europa e Asia. Sicura, ben collegata e accogliente per i visitatori internazionali." },
              { icon: ShieldCheck, title: "Standard internazionali", desc: "Numerosi ospedali accreditati JCI, rigorosa supervisione e infrastrutture per il turismo medico dedicate ai pazienti internazionali." },
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <div key={i} className="bg-white rounded-xl p-6 shadow-sm border border-slate-200" data-testid={`card-turkey-reason-it-${i}`}>
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
      <section className="py-20" data-testid="section-faq-it">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Domande frequenti — ESG per pazienti italiani</h2>
            <p className="text-lg text-slate-600">Tutto quello che dovete sapere prima di partire per Istanbul.</p>
          </div>
          <FAQAccordion faqs={itFaqs} />
        </div>
      </section>

      {/* Link interni */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-2xl font-bold text-slate-900 mb-8 text-center">Scoprite altre opzioni di trattamento</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { title: "ESG — Informazioni complete", href: "/esg", desc: "Tutti i dettagli sulla procedura" },
              { title: "Sleeve Gastrectomy", href: "/sleeve-gastrectomy", desc: "L'intervento bariatrico più diffuso" },
              { title: "Mini bypass gastrico", href: "/mini-gastric-bypass", desc: "Procedura combinata" },
              { title: "Palloncino gastrico", href: "/gastric-balloon", desc: "Opzione non chirurgica" },
              { title: "Tutti i trattamenti", href: "/treatments", desc: "Confronto procedure e prezzi" },
              { title: "Risultati dei pazienti", href: "/results", desc: "Storie di successo prima e dopo" },
              { title: "Profilo di salute", href: "/health-profile", desc: "Valutazione dell'idoneità" },
              { title: "Chi siamo", href: "/about", desc: "Dr. Murat Üstün e il team" },
              { title: "Contattaci", href: "/contact", desc: "Parlate con il nostro team" },
            ].map((link, i) => (
              <Link key={i} href={link.href} className="flex items-center gap-3 p-4 bg-white rounded-xl border border-slate-200 hover:border-primary/30 hover:shadow-sm transition-all group" data-testid={`link-internal-it-${i}`}>
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
      <section className="py-20 bg-primary text-white" data-testid="section-cta-it">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <span className="text-5xl mb-6 block">{itFlag}</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Iniziate oggi il vostro percorso</h2>
          <p className="text-xl text-white/80 mb-4 leading-relaxed">Se cercate un'alternativa efficace e sicura alla chirurgia, la Gastroplastica Endoscopica potrebbe essere la soluzione giusta per voi.</p>
          <p className="text-lg text-white/70 mb-8">Contattateci oggi per una consulenza online gratuita. Valuteremo la vostra idoneità, risponderemo a tutte le vostre domande e prepareremo un piano di trattamento personalizzato — senza alcun impegno.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-primary hover:bg-white/90 font-bold text-lg h-14 px-10" onClick={() => window.open("https://wa.me/905324131143?text=Salve%2C%20sono%20un%20paziente%20dall%27Italia%20e%20sono%20interessato%20alla%20ESG", "_blank")} data-testid="button-cta-whatsapp-it">
              <Phone className="w-5 h-5 mr-2" />WhatsApp: +90 532 413 1143
            </Button>
            <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 font-bold text-lg h-14 px-10" onClick={() => window.open("mailto:drmuratustun@gmail.com?subject=Richiesta%20ESG%20dall%27Italia", "_blank")} data-testid="button-cta-email-it">
              <MessageCircle className="w-5 h-5 mr-2" />Invia email
            </Button>
          </div>
          <p className="text-white/50 mt-6 text-sm">Email: <a href="mailto:drmuratustun@gmail.com" className="text-white/70 hover:text-white underline">drmuratustun@gmail.com</a></p>
        </div>
      </section>

      <Footer />
    </div>
  );
}

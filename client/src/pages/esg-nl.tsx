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

const nlFaqs = [
  {
    question: "Wordt ESG vergoed door de zorgverzekering?",
    answer: "Op dit moment wordt ESG niet vergoed door de basisverzekering in Nederland. Het is nog niet opgenomen in het basispakket. Sommige aanvullende verzekeringen beoordelen aanvragen per geval, maar vergoeding is zeldzaam. Dit is een van de redenen waarom veel Nederlandse patiënten kiezen voor behandeling in het buitenland — zoals bij Istanbul Bariatric Center, waar all-inclusive pakketten beginnen vanaf circa € 5.800 (£5.700).",
  },
  {
    question: "Hoe lang moet ik in Istanbul blijven?",
    answer: "De meeste Nederlandse patiënten verblijven 3 tot 4 dagen in Istanbul. U arriveert de dag voor de procedure, de ESG wordt de volgende dag uitgevoerd, u herstelt in het hotel op dag 3, en u vliegt op dag 4 terug naar Nederland. Directe vluchten vanuit Amsterdam, Rotterdam/Den Haag (Eindhoven) en andere steden duren ongeveer 3,5 uur.",
  },
  {
    question: "Is de procedure pijnlijk?",
    answer: "De ESG wordt uitgevoerd onder algehele narcose — u voelt niets tijdens de ingreep. Na het ontwaken kunnen lichte klachten optreden zoals misselijkheid of een vol gevoel in de maag. Deze verdwijnen doorgaans binnen 1 tot 3 dagen en zijn goed te behandelen met medicatie. Vergeleken met chirurgie is het herstel aanzienlijk comfortabeler.",
  },
  {
    question: "Zijn de resultaten blijvend?",
    answer: "De langetermijnresultaten hangen af van uw inzet. ESG biedt een krachtig structureel hulpmiddel — uw maag is fysiek kleiner — maar het behoud van resultaten vereist het volgen van het voedingsplan, regelmatige beweging en deelname aan de nazorgafspraken. Ons 12 maanden durend nazorgprogramma met een gekwalificeerde diëtist is inbegrepen bij alle pakketten.",
  },
  {
    question: "Hoe verhoudt ESG zich tot Ozempic of Wegovy?",
    answer: "GLP-1-medicatie zoals Ozempic en Wegovy kan aanvankelijk effectief zijn, maar veel patiënten komen weer aan na het stoppen. De maandelijkse kosten van € 200 tot € 400 lopen snel op. ESG biedt een eenmalige, fysieke verkleining van de maag, zonder terugkerende kosten. Veel patiënten zien ESG als de logische volgende stap wanneer medicatie niet meer voldoende werkt.",
  },
  {
    question: "Welk BMI heb ik nodig voor ESG?",
    answer: "ESG wordt doorgaans aanbevolen voor patiënten met een BMI tussen 30 en 40. De procedure is bijzonder geschikt voor mensen die geen blijvende resultaten hebben behaald met diëten en beweging, die geen invasieve operatie willen, of die een minimaal invasieve aanpak met snelle hersteltijd verkiezen.",
  },
  {
    question: "Is een medische behandeling in het buitenland veilig?",
    answer: "Istanbul Bariatric Center opereert in het Liv Hospital, dat JCI-geaccrediteerd is (Joint Commission International) — de internationale gouden standaard voor kwaliteit van zorg. Dr. Murat Üstün heeft duizenden ESG-procedures uitgevoerd met uitstekende veiligheidsresultaten. Wij bieden dezelfde — of hogere — kwaliteitsstandaarden als privéklinieken in Nederland, met persoonlijke begeleiding voor Nederlandse patiënten.",
  },
  {
    question: "Wat zit er in het all-inclusive pakket?",
    answer: "Onze ESG-pakketten omvatten de procedure, opname in een JCI-geaccrediteerd ziekenhuis, preoperatieve bloedtesten en onderzoeken, VIP-luchthaventransfer, hotelverblijf (bijv. Radisson Hotel), gekwalificeerde voedingsbegeleiding gedurende 12 maanden, postoperatieve medicatie en doorlopende nazorg. Geen verborgen kosten.",
  },
];

const journeySteps = [
  {
    step: 1,
    title: "Gratis online consult",
    desc: "Neem contact met ons op via WhatsApp of onze website. Ons team beoordeelt uw BMI, medische voorgeschiedenis en doelen om uw geschiktheid voor ESG te bevestigen.",
    icon: MessageCircle,
  },
  {
    step: 2,
    title: "Reis naar Turkije",
    desc: "Kies uw datum — wij regelen de rest. Directe vluchten vanuit Amsterdam Schiphol en Eindhoven. Vluchttijd: circa 3,5 uur.",
    icon: Plane,
  },
  {
    step: 3,
    title: "VIP-transfer en hotel",
    desc: "Een privéchauffeur haalt u op van Istanbul Airport en brengt u naar uw hotel (bijv. Radisson Hotel). Installeer u en bereid u voor op de volgende dag.",
    icon: Hotel,
  },
  {
    step: 4,
    title: "Preoperatief onderzoek",
    desc: "Uitgebreide bloedtesten en gezondheidscontrole in het ziekenhuis. Maak kennis met Dr. Murat Üstün en het medische team voor een persoonlijk consult.",
    icon: Stethoscope,
  },
  {
    step: 5,
    title: "ESG-procedure",
    desc: "De ESG wordt uitgevoerd onder algehele narcose in het JCI-geaccrediteerde Liv Hospital. Duur: 60 tot 90 minuten. Geen sneden, geen littekens.",
    icon: HeartPulse,
  },
  {
    step: 6,
    title: "Herstel en terugkeer",
    desc: "Rust uit in het hotel met medische begeleiding. De meeste patiënten vliegen binnen 2 tot 3 dagen na de procedure terug naar Nederland — klaar voor een nieuw begin.",
    icon: Plane,
  },
];

const comparisonMeds = [
  { factor: "Effectiviteit op lange termijn", meds: "Beperkt — gewichtstoename na stoppen is gebruikelijk", esg: "Stabieler — fysieke maagverkleining blijft bestaan" },
  { factor: "Bijwerkingen", meds: "Regelmatig (misselijkheid, diarree, pancreatitis-risico)", esg: "Beperkt (lichte klachten gedurende 1 tot 3 dagen)" },
  { factor: "Kosten", meds: "€ 200 tot € 400/maand doorlopend (€ 2.400 tot € 4.800/jaar)", esg: "Eenmalige investering vanaf circa € 5.800" },
  { factor: "Gewichtstoename na stoppen", meds: "Gebruikelijk na het stoppen van medicatie", esg: "Verminderd bij een gezonde leefstijl" },
  { factor: "Vergoeding", meds: "Beperkt onder strikte voorwaarden", esg: "Niet vergoed door de basisverzekering" },
  { factor: "Ingreep nodig?", meds: "Nee — wekelijkse/dagelijkse injecties", esg: "Ja — één endoscopische procedure (60–90 min)" },
];

const comparisonSurgery = [
  { feature: "Type ingreep", esg: "Endoscopisch (via de mond)", sleeve: "Laparoscopische chirurgie (4–5 sneden)" },
  { feature: "Narcose", esg: "Algehele narcose", sleeve: "Algehele narcose" },
  { feature: "Duur", esg: "60 tot 90 minuten", sleeve: "Circa 60 minuten" },
  { feature: "Ziekenhuisopname", esg: "Dezelfde dag of 1 nacht", sleeve: "2 tot 3 nachten" },
  { feature: "Hersteltijd", esg: "1 tot 3 dagen", sleeve: "2 tot 3 weken" },
  { feature: "Littekens", esg: "Geen", sleeve: "4 tot 5 kleine littekens" },
  { feature: "Gewichtsverlies", esg: "15 tot 20 % van het lichaamsgewicht", sleeve: "60 tot 70 % van het overgewicht" },
  { feature: "Omkeerbaarheid", esg: "Potentieel omkeerbaar", sleeve: "Permanent (maagweefsel verwijderd)" },
  { feature: "Risicoprofiel", esg: "Zeer laag", sleeve: "Laag" },
  { feature: "Prijs vanaf (Istanbul)", esg: "Vanaf circa € 5.800 (£5.700)", sleeve: "Vanaf circa € 3.450 (£3.400)" },
];

const nlTestimonials = [
  {
    name: "Marieke V.",
    location: "Amsterdam",
    text: "Na jaren van jojo-diëten en acht maanden Ozempic zonder blijvend resultaat, ontdekte ik ESG. Het team van Istanbul Bariatric Center begeleidde mij met uitzonderlijk vakmanschap. In 5 maanden ben ik 17 kg kwijt en ik voel me eindelijk weer goed in mijn vel.",
    weight: "17 kg kwijt",
    time: "5 maanden",
  },
  {
    name: "Jan-Willem B.",
    location: "Rotterdam",
    text: "Ik was aanvankelijk sceptisch over een medische behandeling in het buitenland. Maar het Liv Hospital overtrof al mijn verwachtingen — een kwaliteitsniveau dat ik zelfs niet had gezien in de beste privéklinieken in Nederland. Dr. Murat is een uitzonderlijke professional. En de totale kosten waren minder dan de helft van wat mij in Nederland was aangeboden.",
    weight: "20 kg kwijt",
    time: "6 maanden",
  },
  {
    name: "Anouk de J.",
    location: "Utrecht",
    text: "Van de luchthaventransfer tot de voedingsbegeleiding: alles was perfect georganiseerd. Ik had nooit gedacht dat de resultaten zo snel zichtbaar zouden zijn. Het 12-maandenprogramma heeft me echt geholpen om mijn eetgewoonten structureel te veranderen. Ik raad het iedereen aan.",
    weight: "15 kg kwijt",
    time: "4 maanden",
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
    if (bmi < 18.5) return { label: "Ondergewicht", color: "text-blue-600", eligible: false };
    if (bmi < 25) return { label: "Gezond gewicht", color: "text-green-600", eligible: false };
    if (bmi < 30) return { label: "Overgewicht", color: "text-yellow-600", eligible: false };
    if (bmi < 35) return { label: "Obesitas (klasse I)", color: "text-orange-600", eligible: true };
    if (bmi < 40) return { label: "Obesitas (klasse II)", color: "text-red-500", eligible: true };
    return { label: "Ernstige obesitas (klasse III)", color: "text-red-700", eligible: false, surgical: true };
  };

  return (
    <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-200" data-testid="bmi-calculator-nl">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
          <Calculator className="w-6 h-6 text-primary" />
        </div>
        <div>
          <h3 className="text-xl font-bold text-slate-900">Kom ik in aanmerking voor ESG?</h3>
          <p className="text-sm text-slate-500">Bereken uw BMI en controleer uw geschiktheid</p>
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-4 mb-4">
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">Lengte (cm)</label>
          <input
            type="number"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            placeholder="bijv. 180"
            className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none"
            data-testid="input-height-nl"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">Gewicht (kg)</label>
          <input
            type="number"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            placeholder="bijv. 105"
            className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none"
            data-testid="input-weight-nl"
          />
        </div>
      </div>

      <Button
        onClick={calculateBMI}
        className="w-full bg-primary hover:bg-primary/90 h-12"
        data-testid="button-calculate-bmi-nl"
      >
        BMI berekenen
      </Button>

      {bmi !== null && (
        <div className="mt-6 p-4 rounded-xl bg-slate-50 border border-slate-200" data-testid="bmi-result-nl">
          <div className="text-center mb-3">
            <span className="text-4xl font-bold text-primary">{bmi}</span>
            <p className={`text-lg font-semibold ${getBMICategory(bmi).color}`}>{getBMICategory(bmi).label}</p>
          </div>
          {getBMICategory(bmi).eligible ? (
            <div className="bg-green-50 border border-green-200 rounded-lg p-3 text-center">
              <p className="text-green-800 font-medium">U zou een goede kandidaat voor ESG kunnen zijn!</p>
              <p className="text-green-600 text-sm mt-1">Neem contact met ons op voor een gratis consult.</p>
            </div>
          ) : getBMICategory(bmi).surgical ? (
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 text-center">
              <p className="text-blue-800 font-medium">Een bariatrische operatie zou geschikter voor u kunnen zijn.</p>
              <p className="text-blue-600 text-sm mt-1">
                <Link href="/treatments" className="underline">Bekijk alle opties</Link> of neem contact met ons op.
              </p>
            </div>
          ) : (
            <div className="bg-slate-100 border border-slate-200 rounded-lg p-3 text-center">
              <p className="text-slate-700 font-medium">ESG wordt doorgaans aanbevolen bij een BMI van 30 tot 40.</p>
              <p className="text-slate-500 text-sm mt-1">Neem contact met ons op om uw opties te bespreken.</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

function FAQAccordion({ faqs }: { faqs: typeof nlFaqs }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="space-y-3" data-testid="faq-accordion-nl">
      {faqs.map((faq, i) => (
        <div
          key={i}
          className={`rounded-xl border transition-all duration-200 ${openIndex === i ? "border-primary/30 bg-white shadow-md" : "border-slate-200 bg-white hover:border-slate-300"}`}
          data-testid={`faq-item-nl-${i}`}
        >
          <button
            className="w-full flex items-center justify-between p-5 text-left"
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
            data-testid={`button-faq-nl-${i}`}
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

export default function ESGNederland() {
  const nlFlag = "🇳🇱";
  const trFlag = "🇹🇷";

  const esgNLSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalProcedure",
    "name": "Endoscopische Sleeve Gastroplastiek voor Nederlandse patiënten",
    "alternateName": ["ESG Nederland", "ESG Turkije", "Maag verkleinen zonder operatie", "Afvallen zonder operatie Nederland"],
    "description": "Endoscopische Sleeve Gastroplastiek (ESG) voor patiënten uit Nederland bij Istanbul Bariatric Center. Maagverkleining zonder operatie. All-inclusive pakketten vanaf circa € 5.800. Tot 70% goedkoper dan in Nederland.",
    "procedureType": "Endoscopic",
    "bodyLocation": "Stomach",
    "preparation": "Gratis online consult, BMI-analyse, medische beoordeling",
    "followup": "12 maanden nazorg met gekwalificeerde diëtist",
    "howPerformed": "Endoscopisch hechtapparaat wordt via de mond ingebracht om de maag met 70 tot 80% te verkleinen. Geen sneden nodig.",
    "status": "https://schema.org/ActiveActionStatus",
    "relevantSpecialty": { "@type": "MedicalSpecialty", "name": "Bariatric Surgery" },
  };

  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="ESG Turkije voor Nederlandse patiënten | Afvallen zonder operatie | Tot 70% besparing"
        description="ESG zonder operatie voor patiënten uit Nederland. Tot 70% goedkoper. All-inclusive vanaf € 5.800 in JCI-geaccrediteerd ziekenhuis. Gratis consult."
        keywords="ESG Nederland, afvallen zonder operatie, maag verkleinen zonder operatie, alternatief Ozempic Nederland, afvallen Turkije, endoscopische sleeve gastroplastiek, ESG Turkije prijs, bariatrische chirurgie Turkije, maagverkleining zonder operatie, gewichtsverlies zonder operatie"
        url="/esg/nl"
      />
      <JsonLd data={esgNLSchema} />
      <JsonLd data={structuredData.createFAQ(nlFaqs)} />
      <JsonLd data={structuredData.createBreadcrumb([
        { name: "Home", url: "/" },
        { name: "Treatments", url: "/treatments" },
        { name: "ESG", url: "/esg" },
        { name: "ESG voor Nederlandse patiënten", url: "/esg/nl" },
      ])} />
      <Navbar />

      {/* Hero */}
      <section className="relative bg-slate-900 text-white pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-primary/30 opacity-90" />
        <div
          className="absolute inset-0 opacity-15"
          style={{
            backgroundImage: "url('/esg-nl-hero.webp')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center gap-3 mb-6">
              <span className="text-4xl">{nlFlag}</span>
              <Badge variant="outline" className="border-white/30 text-white/90 text-sm px-4 py-1">
                Speciaal voor Nederlandse patiënten
              </Badge>
              <span className="text-4xl">{trFlag}</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight" data-testid="heading-esg-nl-hero">
              Endoscopische Sleeve Gastroplastiek (ESG) voor patiënten uit Nederland — Afvallen zonder operatie in Turkije
            </h1>
            <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto mb-8 leading-relaxed">
              Afvallen op een duurzame manier is voor veel Nederlanders een grote uitdaging. Ondanks diëten, sporten en medicatie zoals Ozempic of Wegovy blijft het gewicht vaak terugkomen. De ESG biedt een moderne, veilige en betaalbare oplossing — tot 70% goedkoper dan in Nederland.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 font-bold text-lg h-14 px-8"
                onClick={() => window.open("https://wa.me/905324131143?text=Hallo%2C%20ik%20ben%20een%20pati%C3%ABnt%20uit%20Nederland%20en%20ik%20ben%20ge%C3%AFnteresseerd%20in%20ESG", "_blank")}
                data-testid="button-hero-whatsapp-nl"
              >
                <Phone className="w-5 h-5 mr-2" />
                Gratis consult
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white/30 text-white hover:bg-white/10 font-bold text-lg h-14 px-8"
                onClick={() => document.getElementById("bmi-section-nl")?.scrollIntoView({ behavior: "smooth" })}
                data-testid="button-hero-bmi-nl"
              >
                <Calculator className="w-5 h-5 mr-2" />
                Kom ik in aanmerking?
              </Button>
            </div>
            <div className="flex flex-wrap gap-6 justify-center mt-10 text-sm text-slate-400">
              <span className="flex items-center gap-2"><ShieldCheck className="w-4 h-4" /> JCI-geaccrediteerd ziekenhuis</span>
              <span className="flex items-center gap-2"><Euro className="w-4 h-4" /> Tot 70% besparing</span>
              <span className="flex items-center gap-2"><Clock className="w-4 h-4" /> 3 tot 4 dagen verblijf</span>
              <span className="flex items-center gap-2"><Stethoscope className="w-4 h-4" /> 8.000+ succesvolle ingrepen</span>
            </div>
          </div>
        </div>
      </section>

      {/* Wat is ESG? */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-slate-900">Wat is de Endoscopische Sleeve Gastroplastiek (ESG)?</h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                De ESG is een innovatieve procedure voor <strong>maagverkleining zonder operatie</strong>. Via de mond wordt een endoscoop ingebracht waarmee interne hechtingen worden geplaatst die het maagvolume met 70 tot 80% verkleinen. In tegenstelling tot de klassieke <Link href="/sleeve-gastrectomy" className="text-primary hover:underline">maagverkleining (sleeve gastrectomy)</Link> worden er geen sneden gemaakt, wordt er geen maagweefsel verwijderd en is het herstel aanzienlijk sneller.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed">
                De procedure maakt gebruik van de Apollo OverStitch-technologie — een geavanceerd endoscopisch hechtsysteem — om permanente plooien in de maagwand aan te brengen. Het resultaat: sneller een verzadigd gevoel en een natuurlijke vermindering van de voedselinname. De ingreep duurt circa 60 tot 90 minuten onder algehele narcose, en de meeste patiënten kunnen dezelfde dag of na één nacht het ziekenhuis verlaten.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed">
                Voor Nederlandse patiënten vult de ESG een belangrijke leemte — tussen leefstijlmaatregelen die niet hebben gewerkt en een invasieve operatie waarvoor velen niet in aanmerking komen of niet klaar voor zijn. Het is een medisch verantwoorde, persoonlijke en respectvolle aanpak.
              </p>
              <div className="grid grid-cols-3 gap-4 pt-4">
                <div className="text-center p-4 bg-primary/5 rounded-xl">
                  <div className="text-2xl font-bold text-primary">60–90</div>
                  <p className="text-sm text-slate-600 mt-1">minuten</p>
                </div>
                <div className="text-center p-4 bg-primary/5 rounded-xl">
                  <div className="text-2xl font-bold text-primary">Nul</div>
                  <p className="text-sm text-slate-600 mt-1">sneden</p>
                </div>
                <div className="text-center p-4 bg-primary/5 rounded-xl">
                  <div className="text-2xl font-bold text-primary">1–3</div>
                  <p className="text-sm text-slate-600 mt-1">dagen herstel</p>
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <img
                src="/esg-procedure-cdn.webp"
                alt="ESG Endoscopische Sleeve Gastroplastiek procedure"
                className="rounded-2xl shadow-xl max-w-md w-full"
                width="400"
                height="400"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Waarom ESG in het buitenland? */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              {nlFlag} Waarom Nederlandse patiënten voor ESG in Turkije kiezen
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Duizenden Nederlanders reizen jaarlijks naar Istanbul voor bariatrische behandelingen. Ontdek waarom ESG in het buitenland steeds vaker de voorkeur krijgt.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-200 hover:shadow-md transition-shadow" data-testid="card-nl-reason-access">
              <div className="w-14 h-14 rounded-full bg-red-50 flex items-center justify-center mb-5">
                <ShieldCheck className="w-7 h-7 text-red-500" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Beperkte beschikbaarheid in Nederland</h3>
              <p className="text-slate-600 leading-relaxed">
                De ESG is in Nederland nog niet breed beschikbaar. De procedure wordt niet aangeboden in de reguliere ziekenhuiszorg en de criteria voor bariatrische behandelingen zijn strikt. Privéklinieken die ESG aanbieden zijn schaars en hebben vaak lange wachttijden — zelfs in Amsterdam, Rotterdam of Utrecht.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-200 hover:shadow-md transition-shadow" data-testid="card-nl-reason-cost">
              <div className="w-14 h-14 rounded-full bg-green-50 flex items-center justify-center mb-5">
                <Euro className="w-7 h-7 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Aanzienlijke kostenbesparing</h3>
              <p className="text-slate-600 leading-relaxed">
                In Nederland kost ESG doorgaans <strong>€ 8.000 tot € 15.000</strong> bij privéklinieken. Bij Istanbul Bariatric Center beginnen <strong>all-inclusive pakketten vanaf circa € 5.800</strong> (£5.700) — een besparing van 40 tot 60%. Het pakket omvat de procedure, ziekenhuisopname, hotel, transfer en 12 maanden voedingsbegeleiding.
              </p>
              <div className="mt-4 p-3 bg-green-50 rounded-lg">
                <p className="text-green-800 font-semibold text-sm">
                  Gemiddelde besparing: € 3.000 tot € 9.000
                </p>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-200 hover:shadow-md transition-shadow" data-testid="card-nl-reason-time">
              <div className="w-14 h-14 rounded-full bg-blue-50 flex items-center justify-center mb-5">
                <Clock className="w-7 h-7 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Geen wachttijden</h3>
              <p className="text-slate-600 leading-relaxed">
                Zelfs in grote steden als Amsterdam, Rotterdam, Den Haag of Utrecht kunnen wachttijden voor privéconsulten in de bariatrische zorg weken of maanden bedragen. Bij Istanbul Bariatric Center wordt uw consult binnen enkele dagen georganiseerd en is de volledige behandeling binnen 3 tot 4 dagen afgerond.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ESG vs medicatie */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">ESG vs afslankmedicatie</h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Veel patiënten in Nederland beginnen met GLP-1-medicatie zoals Ozempic of Wegovy. Maar wat gebeurt er wanneer het effect afneemt, de bijwerkingen toenemen of de maandelijkse kosten oplopen? ESG positioneert zich steeds vaker als de logische volgende stap.
            </p>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-sm">
            <table className="w-full text-left" data-testid="table-esg-vs-meds-nl">
              <thead>
                <tr className="bg-slate-900 text-white">
                  <th className="p-4 font-semibold text-sm uppercase tracking-wider">Factor</th>
                  <th className="p-4 font-semibold text-sm uppercase tracking-wider">Ozempic / Wegovy</th>
                  <th className="p-4 font-semibold text-sm uppercase tracking-wider bg-primary/90">ESG</th>
                </tr>
              </thead>
              <tbody>
                {comparisonMeds.map((row, i) => (
                  <tr key={i} className={`border-b border-slate-100 hover:bg-blue-50/50 transition-colors ${i % 2 === 0 ? "bg-white" : "bg-slate-50/50"}`} data-testid={`row-meds-comparison-nl-${i}`}>
                    <td className="p-4 font-medium text-slate-900">{row.factor}</td>
                    <td className="p-4 text-slate-700">{row.meds}</td>
                    <td className="p-4 text-slate-700 bg-primary/5 font-medium">{row.esg}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-sm text-slate-500 mt-4 text-center">ESG biedt een eenmalige fysieke maagverkleining — zonder doorlopende medicatiekosten.</p>
        </div>
      </section>

      {/* ESG vs maagverkleining */}
      <section className="py-20 bg-blue-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">ESG vs chirurgische maagverkleining</h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Twijfelt u tussen ESG en een <Link href="/sleeve-gastrectomy" className="text-primary hover:underline">chirurgische maagverkleining (sleeve gastrectomy)</Link>? Hier vindt u een gedetailleerde vergelijking. ESG is bijzonder geschikt voor patiënten die de voorkeur geven aan een minder invasieve aanpak.
            </p>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-sm">
            <table className="w-full text-left" data-testid="table-esg-vs-sleeve-nl">
              <thead>
                <tr className="bg-slate-900 text-white">
                  <th className="p-4 font-semibold text-sm uppercase tracking-wider">Kenmerk</th>
                  <th className="p-4 font-semibold text-sm uppercase tracking-wider bg-primary/90">ESG</th>
                  <th className="p-4 font-semibold text-sm uppercase tracking-wider">Maagverkleining</th>
                </tr>
              </thead>
              <tbody>
                {comparisonSurgery.map((row, i) => (
                  <tr key={i} className={`border-b border-slate-100 hover:bg-blue-50/50 transition-colors ${i % 2 === 0 ? "bg-white" : "bg-slate-50/50"}`} data-testid={`row-sleeve-comparison-nl-${i}`}>
                    <td className="p-4 font-medium text-slate-900">{row.feature}</td>
                    <td className="p-4 text-slate-700 bg-primary/5 font-medium">{row.esg}</td>
                    <td className="p-4 text-slate-700">{row.sleeve}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-sm text-slate-500 mt-4 text-center">Beide procedures worden uitgevoerd in het JCI-geaccrediteerde Liv Hospital in Istanbul. <Link href="/treatments" className="text-primary hover:underline">Bekijk alle behandelopties</Link>.</p>
        </div>
      </section>

      {/* Waarom Istanbul Bariatric Center */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold mb-4">Waarom Istanbul Bariatric Center?</h2>
            <p className="text-lg text-slate-300 max-w-3xl mx-auto">Wij combineren medische excellentie met een patiëntervaring die speciaal is ontwikkeld voor internationale — en in het bijzonder Nederlandse — patiënten.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white/10 backdrop-blur rounded-xl p-6 text-center" data-testid="card-nl-ibc-surgeon">
              <div className="w-14 h-14 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4"><Stethoscope className="w-7 h-7 text-primary" /></div>
              <h3 className="text-lg font-bold mb-2"><a href="https://drmuratustun.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Dr. Murat Üstün</a></h3>
              <p className="text-slate-300 text-sm">Pionier van ESG in Turkije, met duizenden succesvolle bariatrische ingrepen. Internationaal erkend voor zijn expertise in interventionele endoscopie en patiëntgerichte behandeling.</p>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-xl p-6 text-center" data-testid="card-nl-ibc-hospital">
              <div className="w-14 h-14 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4"><ShieldCheck className="w-7 h-7 text-primary" /></div>
              <h3 className="text-lg font-bold mb-2">JCI-geaccrediteerd ziekenhuis</h3>
              <p className="text-slate-300 text-sm">Alle ingrepen worden uitgevoerd in het Liv Hospital — met JCI-accreditatie, de internationale gouden standaard voor patiëntveiligheid en kwaliteit van zorg.</p>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-xl p-6 text-center" data-testid="card-nl-ibc-team">
              <div className="w-14 h-14 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4"><Users className="w-7 h-7 text-primary" /></div>
              <h3 className="text-lg font-bold mb-2">{nlFlag} Nederlands patiëntenteam</h3>
              <p className="text-slate-300 text-sm">Toegewijde coördinatoren die de verwachtingen van Nederlandse patiënten begrijpen. Duidelijke communicatie, transparante prijzen, gestructureerde nazorg. Contact via WhatsApp.</p>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-xl p-6 text-center" data-testid="card-nl-ibc-package">
              <div className="w-14 h-14 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4"><Euro className="w-7 h-7 text-primary" /></div>
              <h3 className="text-lg font-bold mb-2">All-inclusive vanaf ~€ 5.800</h3>
              <p className="text-slate-300 text-sm">Geen verborgen kosten. Pakketten omvatten procedure, ziekenhuis, hotel, VIP-transfer, vooronderzoeken, voedingsbegeleiding en 12-maandenprogramma.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Behandeltraject */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Uw behandeltraject — stap voor stap</h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">Van het eerste contact tot uw terugkeer naar Nederland: wij zorgen voor elk detail. Zo verloopt uw behandeling als Nederlandse patiënt in Istanbul.</p>
          </div>
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-primary/20 hidden md:block" />
            <div className="space-y-8">
              {journeySteps.map((step) => {
                const Icon = step.icon;
                return (
                  <div key={step.step} className="relative flex gap-6" data-testid={`step-journey-nl-${step.step}`}>
                    <div className="relative z-10 shrink-0">
                      <div className="w-16 h-16 rounded-full bg-primary text-white flex items-center justify-center shadow-lg"><Icon className="w-7 h-7" /></div>
                    </div>
                    <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200 flex-1 hover:shadow-md transition-shadow">
                      <div className="flex items-center gap-3 mb-2">
                        <Badge variant="outline" className="text-primary border-primary/30">Stap {step.step}</Badge>
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

      {/* Istanbul comfort */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
            <div>
              <img src="/esg-nl-istanbul.webp" alt="Istanbul — Bestemming voor medisch toerisme vanuit Nederland" className="rounded-2xl shadow-xl w-full" width="600" height="400" loading="lazy" />
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-slate-900">Eersteklas comfort en begeleiding</h2>
              <p className="text-lg text-slate-600 leading-relaxed">Uw welzijn is onze prioriteit — vanaf het moment dat u landt in Istanbul. Onze samenwerking met luxe hotels zoals het Radisson garandeert een comfortabele basis, terwijl het Liv Hospital beschikt over de modernste medische apparatuur, conform de hoogste internationale standaarden.</p>
              <p className="text-lg text-slate-600 leading-relaxed">Elk aspect van uw verblijf wordt gecoördineerd door ons team — van de organisatie van uw luchthaventransfer tot de voorbereiding van uw hotelkamer voor het herstel. Veel van onze Nederlandse patiënten beschrijven hun ervaring als «beter dan welke privékliniek dan ook in Nederland».</p>
              <div className="flex flex-wrap gap-3">
                <Badge className="bg-primary/10 text-primary hover:bg-primary/10 px-3 py-1">VIP-luchthaventransfer</Badge>
                <Badge className="bg-primary/10 text-primary hover:bg-primary/10 px-3 py-1">Radisson Hotel</Badge>
                <Badge className="bg-primary/10 text-primary hover:bg-primary/10 px-3 py-1">Liv Hospital (JCI)</Badge>
                <Badge className="bg-primary/10 text-primary hover:bg-primary/10 px-3 py-1">24/7 begeleiding</Badge>
                <Badge className="bg-primary/10 text-primary hover:bg-primary/10 px-3 py-1">WhatsApp-contact</Badge>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Resultaten */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Verwachte resultaten van ESG</h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">De ESG levert meetbaar en duurzaam gewichtsverlies — vooral in combinatie met de leefstijlveranderingen die ons nazorgprogramma ondersteunt.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="bg-primary text-white rounded-2xl p-8 text-center" data-testid="stat-weight-loss-nl">
              <TrendingDown className="w-10 h-10 mx-auto mb-3 opacity-80" />
              <div className="text-4xl font-bold mb-2">15–20%</div>
              <p className="text-white/80">Totaal gewichtsverlies</p>
              <p className="text-sm text-white/60 mt-2">Over 12 tot 18 maanden</p>
            </div>
            <div className="bg-primary text-white rounded-2xl p-8 text-center" data-testid="stat-bmi-38-nl">
              <Activity className="w-10 h-10 mx-auto mb-3 opacity-80" />
              <div className="text-4xl font-bold mb-2">~20 kg</div>
              <p className="text-white/80">Gemiddeld (BMI 38+)</p>
              <p className="text-sm text-white/60 mt-2">In de eerste 6 maanden</p>
            </div>
            <div className="bg-primary text-white rounded-2xl p-8 text-center" data-testid="stat-health-nl">
              <HeartPulse className="w-10 h-10 mx-auto mb-3 opacity-80" />
              <div className="text-4xl font-bold mb-2">Merkbare</div>
              <p className="text-white/80">Gezondheidsverbetering</p>
              <p className="text-sm text-white/60 mt-2">Diabetes, bloeddruk, slaapapneu</p>
            </div>
          </div>
          <div className="p-6 bg-blue-50 rounded-xl border border-blue-100">
            <p className="text-slate-700 leading-relaxed">De resultaten zijn afhankelijk van uw inzet — het volgen van het voedingsplan, regelmatige beweging en deelname aan nazorgafspraken. Ons 12-maandenprogramma met gekwalificeerde diëtist is inbegrepen bij alle pakketten. <Link href="/results" className="text-primary hover:underline font-medium">Bekijk succesverhalen van onze patiënten</Link>.</p>
          </div>
        </div>
      </section>

      {/* Ervaringen */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">{nlFlag} Ervaringen van Nederlandse patiënten</h2>
            <p className="text-lg text-slate-600">Echte verhalen van Nederlandse patiënten die kozen voor ESG bij Istanbul Bariatric Center.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {nlTestimonials.map((t, i) => (
              <div key={i} className="bg-white rounded-2xl p-8 shadow-sm border border-slate-200" data-testid={`testimonial-nl-${i}`}>
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
      <section className="py-20" id="bmi-section-nl">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-start max-w-6xl mx-auto">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-slate-900">Wie komt in aanmerking voor ESG?</h2>
              <p className="text-lg text-slate-600 leading-relaxed">ESG is bedoeld voor mensen die langdurig worstelen met overgewicht en een oplossing zoeken tussen leefstijlmaatregelen en een grote operatie. U zou in aanmerking kunnen komen als:</p>
              <div className="space-y-3">
                {[
                  "Uw BMI tussen 30 en 40 ligt",
                  "Diëten en beweging geen blijvende resultaten hebben opgeleverd",
                  "U geen invasieve operatie wenst of er niet voor in aanmerking komt",
                  "Medicatie onvoldoende effectief of te kostbaar is gebleken",
                  "U een procedure met minimale hersteltijd verkiest",
                  "U lijdt aan obesitas-gerelateerde aandoeningen (diabetes type 2, hoge bloeddruk, slaapapneu)",
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <p className="text-slate-600">{item}</p>
                  </div>
                ))}
              </div>
              <p className="text-slate-600 leading-relaxed">Voor de ingreep voert ons medisch team een grondige beoordeling van uw medische voorgeschiedenis uit. Bij een BMI boven 40 kan een <Link href="/sleeve-gastrectomy" className="text-primary hover:underline">maagverkleining</Link> of <Link href="/mini-gastric-bypass" className="text-primary hover:underline">gastric bypass</Link> geschikter zijn.</p>
            </div>
            <BMICalculator />
          </div>
        </div>
      </section>

      {/* Veiligheid */}
      <section className="py-20 bg-green-50">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-slate-900">Veiligheid en kwaliteitsnormen</h2>
              <p className="text-lg text-slate-600 leading-relaxed">De ESG wordt beschouwd als een van de veiligste procedures voor gewichtsverlies wanneer uitgevoerd door ervaren specialisten in een geaccrediteerde instelling. Vergeleken met chirurgische alternatieven heeft ESG lagere complicatiepercentages, geen littekens en een aanzienlijk sneller herstel.</p>
              <p className="text-lg text-slate-600 leading-relaxed">Bij Istanbul Bariatric Center heeft <a href="https://drmuratustun.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Dr. Murat Üstün</a> duizenden ESG-procedures uitgevoerd met uitstekende veiligheidsresultaten. Alle ingrepen vinden plaats in het JCI-geaccrediteerde Liv Hospital — met dezelfde internationale standaarden als de beste centra in Nederland.</p>
              <div className="space-y-3">
                {[
                  "JCI-geaccrediteerd ziekenhuis (internationale gouden standaard)",
                  "Gecertificeerd chirurg met duizenden ESG-procedures",
                  "Geavanceerde endoscopische hechttechnologie (Apollo OverStitch)",
                  "Uitgebreide preoperatieve gezondheidscontrole",
                  "24/7 medische nazorg na de ingreep",
                  "Uitgebreide verzekerings- en medische protocollen",
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <ShieldCheck className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
                    <p className="text-slate-700">{item}</p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <img src="/esg-nl-consultation.webp" alt="Medisch consult met Nederlandse patiënt bij Istanbul Bariatric Center" className="rounded-2xl shadow-xl w-full" width="600" height="400" loading="lazy" />
            </div>
          </div>
        </div>
      </section>

      {/* Na de behandeling */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-slate-900 mb-4 text-center">Het leven na ESG</h2>
          <p className="text-lg text-slate-600 text-center mb-12 max-w-3xl mx-auto">De procedure is slechts het startpunt. Zo verloopt uw herstel en voedingsovergang in de weken en maanden na de behandeling.</p>
          <div className="space-y-4">
            {[
              { phase: "Eerste 8 uur", desc: "Alleen heldere vloeistoffen. Rust en herstel in het ziekenhuis of hotel met doorlopende medische begeleiding.", icon: "🏥", color: "border-red-200 bg-red-50" },
              { phase: "Week 1–2", desc: "Vloeibare fase — eiwitshakes, heldere bouillon, water. Uw maag geneest en past zich aan zijn nieuwe grootte aan.", icon: "🥤", color: "border-orange-200 bg-orange-50" },
              { phase: "Week 3–6", desc: "Geleidelijke introductie van halfvaste voeding. Gepureerde maaltijden en zachte eiwitten. Uw diëtist begeleidt u bij elke stap.", icon: "🥣", color: "border-yellow-200 bg-yellow-50" },
              { phase: "Vanaf week 7", desc: "Geleidelijke overgang naar gezond vast voedsel. Focus op eiwitrijke, uitgebalanceerde maaltijden met gecontroleerde porties.", icon: "🥗", color: "border-green-200 bg-green-50" },
              { phase: "Maand 3–12", desc: "Doorlopende voedingsbegeleiding met regelmatige check-ins om uw voortgang te evalueren en uw voedingsplan bij te stellen.", icon: "📊", color: "border-blue-200 bg-blue-50" },
            ].map((phase, i) => (
              <div key={i} className={`flex items-start gap-5 p-6 rounded-xl border ${phase.color}`} data-testid={`phase-aftercare-nl-${i}`}>
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
                <h4 className="font-bold text-slate-900 mb-2">12 maanden voedingsbegeleiding inbegrepen</h4>
                <p className="text-slate-600 leading-relaxed">Elk ESG-pakket omvat toegang tot een gekwalificeerde diëtist die individuele voedingsplannen opstelt, regelmatige consulten verzorgt en u het gehele eerste jaar begeleidt. Dit is geen algemeen advies — het is een gestructureerd programma, afgestemd op uw leefstijl, voorkeuren en doelen.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Waarom Turkije */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">{trFlag} Waarom Turkije voor medisch toerisme?</h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">Turkije heeft zich gevestigd als een van de toonaangevende bestemmingen voor medisch toerisme wereldwijd — en Istanbul is het kloppend hart.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Award, title: "Mondiaal gezondheidscentrum", desc: "Turkije ontvangt jaarlijks meer dan een miljoen internationale medische patiënten, met JCI-geaccrediteerde ziekenhuizen in heel Istanbul." },
              { icon: Stethoscope, title: "Hooggekwalificeerde chirurgen", desc: "Turkse bariatrische chirurgen behoren tot de meest ervaren ter wereld — velen internationaal opgeleid en lid van de IFSO." },
              { icon: Euro, title: "Concurrerende prijzen", desc: "Medische topzorg voor een fractie van de Nederlandse kosten — zonder concessies aan kwaliteit, technologie of veiligheid." },
              { icon: Plane, title: "Gemakkelijk bereikbaar", desc: "Directe vluchten vanuit Amsterdam Schiphol en Eindhoven. Vluchttijd: circa 3,5 uur naar Istanbul." },
              { icon: MapPin, title: "Istanbul — wereldstad", desc: "Een levendige, moderne stad op het kruispunt van Europa en Azië. Veilig, goed bereikbaar en gastvrij voor internationale bezoekers." },
              { icon: ShieldCheck, title: "Internationale standaarden", desc: "Talrijke JCI-geaccrediteerde ziekenhuizen, streng toezicht en infrastructuur voor medisch toerisme gericht op internationale patiënten." },
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <div key={i} className="bg-white rounded-xl p-6 shadow-sm border border-slate-200" data-testid={`card-turkey-reason-nl-${i}`}>
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
      <section className="py-20" data-testid="section-faq-nl">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Veelgestelde vragen — ESG voor Nederlandse patiënten</h2>
            <p className="text-lg text-slate-600">Alles wat u moet weten voordat u naar Istanbul reist.</p>
          </div>
          <FAQAccordion faqs={nlFaqs} />
        </div>
      </section>

      {/* Interne links */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-2xl font-bold text-slate-900 mb-8 text-center">Ontdek andere behandelopties</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { title: "ESG — Volledige informatie", href: "/esg", desc: "Alle details over de procedure" },
              { title: "Maagverkleining (Sleeve)", href: "/sleeve-gastrectomy", desc: "Populairste bariatrische operatie" },
              { title: "Mini gastric bypass", href: "/mini-gastric-bypass", desc: "Gecombineerde procedure" },
              { title: "Maagballon", href: "/gastric-balloon", desc: "Niet-chirurgische optie" },
              { title: "Alle behandelingen", href: "/treatments", desc: "Procedures en prijzen vergelijken" },
              { title: "Patiëntresultaten", href: "/results", desc: "Voor-en-na succesverhalen" },
              { title: "Gezondheidsprofiel", href: "/health-profile", desc: "Geschiktheid beoordelen" },
              { title: "Over ons", href: "/about", desc: "Dr. Murat Üstün en het team" },
              { title: "Contact", href: "/contact", desc: "Neem contact op met ons team" },
            ].map((link, i) => (
              <Link key={i} href={link.href} className="flex items-center gap-3 p-4 bg-white rounded-xl border border-slate-200 hover:border-primary/30 hover:shadow-sm transition-all group" data-testid={`link-internal-nl-${i}`}>
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
      <section className="py-20 bg-primary text-white" data-testid="section-cta-nl">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <span className="text-5xl mb-6 block">{nlFlag}</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Begin vandaag met uw transformatie</h2>
          <p className="text-xl text-white/80 mb-4 leading-relaxed">Als u op zoek bent naar een effectief en veilig alternatief voor chirurgie, kan de Endoscopische Sleeve Gastroplastiek de juiste oplossing voor u zijn.</p>
          <p className="text-lg text-white/70 mb-8">Neem vandaag nog contact op met ons team voor een gratis online consult. Wij beoordelen uw geschiktheid, beantwoorden al uw vragen en stellen een persoonlijk behandelplan op — geheel vrijblijvend.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-primary hover:bg-white/90 font-bold text-lg h-14 px-10" onClick={() => window.open("https://wa.me/905324131143?text=Hallo%2C%20ik%20ben%20een%20pati%C3%ABnt%20uit%20Nederland%20en%20ik%20ben%20ge%C3%AFnteresseerd%20in%20ESG", "_blank")} data-testid="button-cta-whatsapp-nl">
              <Phone className="w-5 h-5 mr-2" />WhatsApp: +90 532 413 1143
            </Button>
            <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 font-bold text-lg h-14 px-10" onClick={() => window.open("mailto:drmuratustun@gmail.com?subject=ESG-aanvraag%20uit%20Nederland", "_blank")} data-testid="button-cta-email-nl">
              <MessageCircle className="w-5 h-5 mr-2" />E-mail sturen
            </Button>
          </div>
          <p className="text-white/50 mt-6 text-sm">E-mail: <a href="mailto:drmuratustun@gmail.com" className="text-white/70 hover:text-white underline">drmuratustun@gmail.com</a></p>
        </div>
      </section>

      <Footer />
    </div>
  );
}

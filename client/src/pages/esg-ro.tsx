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

const roFaqs = [
  {
    question: "ESG este acoperită de asigurarea de sănătate în România?",
    answer: "În prezent, gastroplastia endoscopică nu este acoperită de CNAS în România. Clinicile private din țară o oferă la prețuri de 6.000-12.000 €. La Istanbul Bariatric Center, pachetul complet all-inclusive este mult mai accesibil, cu aceleași standarde internaționale de calitate — spital acreditat JCI, echipă experimentată și urmărire nutrițională 12 luni.",
  },
  {
    question: "Cât timp trebuie să stau la Istanbul?",
    answer: "Majoritatea pacienților români stau la Istanbul 3-4 zile. Ajungeți cu o zi înainte de procedură, ESG se realizează în ziua următoare, vă odihniți la hotel în ziua a treia și vă întoarceți în România în ziua a patra. Zboruri directe din București, Cluj-Napoca și alte orașe (~1,5-2 ore).",
  },
  {
    question: "Procedura este dureroasă?",
    answer: "ESG se realizează sub anestezie generală — nu veți simți nimic în timpul procedurii. După trezire, pot apărea un ușor disconfort sau greață, care dispar de obicei în 1-3 zile și sunt ușor de gestionat cu medicație. Recuperarea este mult mai confortabilă comparativ cu chirurgia tradițională.",
  },
  {
    question: "Rezultatele sunt durabile?",
    answer: "Da, cu condiția unui stil de viață sănătos. ESG creează o reducere fizică a stomacului — este o modificare structurală. Programul nostru de urmărire nutrițională de 12 luni, inclus în toate pachetele, vă ajută să mențineți rezultatele pe termen lung.",
  },
  {
    question: "Care este diferența dintre ESG și Ozempic/Wegovy?",
    answer: "Medicamentele GLP-1 precum Ozempic și Wegovy pot fi eficiente inițial, dar mulți pacienți recâștigă greutatea după oprirea tratamentului. Costurile lunare sunt semnificative. ESG oferă o soluție unică — o reducere fizică permanentă a stomacului, fără costuri recurente.",
  },
  {
    question: "Ce IMC este necesar pentru ESG?",
    answer: "ESG este recomandată pentru pacienți cu un IMC între 30 și 40. Este potrivită mai ales pentru cei care nu au obținut rezultate durabile cu diete și exerciții fizice, nu doresc o intervenție chirurgicală invazivă sau preferă o abordare minim invazivă cu recuperare rapidă.",
  },
  {
    question: "Este sigur tratamentul medical în străinătate?",
    answer: "Istanbul Bariatric Center operează în spitalul Liv Hospital, acreditat JCI (Joint Commission International) — standardul de aur mondial pentru calitatea îngrijirii medicale. Dr. Murat Üstün a realizat mii de proceduri ESG cu rezultate excelente de siguranță.",
  },
  {
    question: "Ce include pachetul complet?",
    answer: "Pachetul nostru ESG include: procedura completă, spitalizare în clinica acreditată JCI, analize preoperatorii, transfer VIP de la aeroport, cazare la hotel, medicație post-procedură, urmărire nutrițională 12 luni și monitorizare continuă. Fără costuri ascunse.",
  },
];

const journeySteps = [
  {
    step: 1,
    title: "Consultație online gratuită",
    desc: "Contactați-ne prin WhatsApp sau site-ul nostru. Echipa noastră va evalua IMC-ul, istoricul medical și obiectivele dumneavoastră.",
    icon: MessageCircle,
  },
  {
    step: 2,
    title: "Călătorie la Istanbul",
    desc: "Alegeți data — noi organizăm totul. Zboruri directe din București, Cluj-Napoca și alte orașe românești (~1,5-2 ore).",
    icon: Plane,
  },
  {
    step: 3,
    title: "Transfer VIP și hotel",
    desc: "Un șofer privat vă va întâmpina la aeroportul din Istanbul și vă va conduce la hotel. Instalați-vă și pregătiți-vă pentru ziua următoare.",
    icon: Hotel,
  },
  {
    step: 4,
    title: "Investigații preoperatorii",
    desc: "Set complet de analize de sânge și examinare medicală la spital. Întâlnire personală cu Dr. Murat Üstün.",
    icon: Stethoscope,
  },
  {
    step: 5,
    title: "Procedura ESG",
    desc: "ESG se realizează sub anestezie generală la Liv Hospital (JCI). Durată: 60-90 minute. Fără incizii, fără cicatrici.",
    icon: HeartPulse,
  },
  {
    step: 6,
    title: "Recuperare și întoarcere",
    desc: "Odihniți-vă la hotel cu asistență medicală continuă. Majoritatea pacienților se întorc în România în 2-3 zile de la procedură.",
    icon: Plane,
  },
];

const comparisonMeds = [
  { factor: "Eficacitate pe termen lung", meds: "Limitată — greutatea revine adesea după oprire", esg: "Stabilă — reducere fizică permanentă a stomacului" },
  { factor: "Efecte secundare", meds: "Frecvente (greață, diaree, risc pancreatită)", esg: "Minime (disconfort ușor 1-3 zile)" },
  { factor: "Cost", meds: "Lunar, continuu (150-350 €/lună)", esg: "O singură dată — pachet all-inclusive" },
  { factor: "Recâștigare greutate", meds: "Frecventă după oprirea medicației", esg: "Redusă cu stil de viață sănătos" },
  { factor: "Intervenție", meds: "Nu — injecții săptămânale/zilnice", esg: "Da — o singură procedură endoscopică (60-90 min)" },
];

const comparisonSurgery = [
  { feature: "Tip procedură", esg: "Endoscopică (prin gură)", sleeve: "Chirurgie laparoscopică (4-5 incizii)" },
  { feature: "Anestezie", esg: "Generală", sleeve: "Generală" },
  { feature: "Durată", esg: "60-90 minute", sleeve: "~60 minute" },
  { feature: "Spitalizare", esg: "1 zi sau ambulatoriu", sleeve: "2-3 zile" },
  { feature: "Recuperare", esg: "1-3 zile", sleeve: "2-3 săptămâni" },
  { feature: "Cicatrici", esg: "Niciuna", sleeve: "4-5 mici" },
  { feature: "Pierdere greutate", esg: "15-20% din greutatea corporală", sleeve: "60-70% din excesul ponderal" },
  { feature: "Reversibilitate", esg: "Potențial reversibilă", sleeve: "Permanentă (țesut gastric îndepărtat)" },
  { feature: "Riscuri", esg: "Foarte scăzute", sleeve: "Scăzute" },
];

const roTestimonials = [
  {
    name: "Maria D.",
    location: "București",
    text: "După ani de diete fără succes și câteva luni cu Ozempic, am descoperit ESG. Echipa de la Istanbul Bariatric Center a fost incredibil de profesionistă. În 5 luni am slăbit 15 kg. Cel mai bun lucru pe care l-am făcut pentru sănătatea mea.",
    weight: "−15 kg",
    time: "5 luni",
  },
  {
    name: "Andrei P.",
    location: "Cluj-Napoca",
    text: "Am fost impresionat de nivelul spitalului Liv Hospital — depășește multe clinici private din România. Dr. Murat este un profesionist excepțional. Procedura a fost rapidă, recuperarea confortabilă. Am slăbit 19 kg în 6 luni și mă simt ca un om nou.",
    weight: "−19 kg",
    time: "6 luni",
  },
  {
    name: "Elena S.",
    location: "Timișoara",
    text: "Totul a fost organizat perfect: transferul, hotelul, clinica. Nu a trebuit să-mi fac griji de nimic. Programul nutrițional pe 12 luni m-a ajutat să-mi schimb complet obiceiurile alimentare. Recomand cu încredere!",
    weight: "−13 kg",
    time: "4 luni",
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
    if (bmi < 18.5) return { label: "Subponderal", color: "text-blue-600", eligible: false };
    if (bmi < 25) return { label: "Greutate normală", color: "text-green-600", eligible: false };
    if (bmi < 30) return { label: "Supraponderal", color: "text-yellow-600", eligible: false };
    if (bmi < 35) return { label: "Obezitate (gradul I)", color: "text-orange-600", eligible: true };
    if (bmi < 40) return { label: "Obezitate (gradul II)", color: "text-red-500", eligible: true };
    return { label: "Obezitate severă (gradul III)", color: "text-red-700", eligible: false, surgical: true };
  };

  return (
    <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-200" data-testid="bmi-calculator-ro">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
          <Calculator className="w-6 h-6 text-primary" />
        </div>
        <div>
          <h3 className="text-xl font-bold text-slate-900">Sunt eligibil pentru ESG?</h3>
          <p className="text-sm text-slate-500">Calculați-vă IMC-ul</p>
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-4 mb-4">
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">Înălțime (cm)</label>
          <input type="number" value={height} onChange={(e) => setHeight(e.target.value)} placeholder="ex. 175" className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none" data-testid="input-height-ro" />
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">Greutate (kg)</label>
          <input type="number" value={weight} onChange={(e) => setWeight(e.target.value)} placeholder="ex. 100" className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none" data-testid="input-weight-ro" />
        </div>
      </div>

      <Button onClick={calculateBMI} className="w-full bg-primary hover:bg-primary/90 h-12" data-testid="button-calculate-bmi-ro">
        Calculează IMC
      </Button>

      {bmi !== null && (
        <div className="mt-6 p-4 rounded-xl bg-slate-50 border border-slate-200" data-testid="bmi-result-ro">
          <div className="text-center mb-3">
            <span className="text-4xl font-bold text-primary">{bmi}</span>
            <p className={`text-lg font-semibold ${getBMICategory(bmi).color}`}>{getBMICategory(bmi).label}</p>
          </div>
          {getBMICategory(bmi).eligible ? (
            <div className="bg-green-50 border border-green-200 rounded-lg p-3 text-center">
              <p className="text-green-800 font-medium">Ați putea fi un candidat potrivit pentru ESG!</p>
              <p className="text-green-600 text-sm mt-1">Contactați-ne pentru o consultație gratuită.</p>
            </div>
          ) : getBMICategory(bmi).surgical ? (
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 text-center">
              <p className="text-blue-800 font-medium">Chirurgia bariatrică ar putea fi mai potrivită.</p>
              <p className="text-blue-600 text-sm mt-1"><Link href="/treatments" className="underline">Vedeți toate opțiunile</Link></p>
            </div>
          ) : (
            <div className="bg-slate-100 border border-slate-200 rounded-lg p-3 text-center">
              <p className="text-slate-700 font-medium">ESG este recomandată pentru un IMC între 30 și 40.</p>
              <p className="text-slate-500 text-sm mt-1">Contactați-ne pentru discuții.</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

function FAQAccordion({ faqs }: { faqs: typeof roFaqs }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="space-y-3" data-testid="faq-accordion-ro">
      {faqs.map((faq, i) => (
        <div key={i} className={`rounded-xl border transition-all duration-200 ${openIndex === i ? "border-primary/30 bg-white shadow-md" : "border-slate-200 bg-white hover:border-slate-300"}`} data-testid={`faq-item-ro-${i}`}>
          <button className="w-full flex items-center justify-between p-5 text-left" onClick={() => setOpenIndex(openIndex === i ? null : i)} data-testid={`button-faq-ro-${i}`}>
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

export default function ESGRomania() {
  const roFlag = "🇷🇴";
  const trFlag = "🇹🇷";

  const esgROSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalProcedure",
    "name": "Gastroplastie Endoscopică pentru pacienți din România",
    "alternateName": ["ESG România", "ESG Turcia", "Slăbire fără operație", "Gastroplastie endoscopică"],
    "description": "Gastroplastie Endoscopică (ESG) pentru pacienți din România la Istanbul Bariatric Center. Reducerea stomacului fără chirurgie. Spital acreditat JCI.",
    "procedureType": "Endoscopic",
    "bodyLocation": "Stomach",
    "relevantSpecialty": { "@type": "MedicalSpecialty", "name": "Bariatric Surgery" },
  };

  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="ESG Turcia pentru pacienți din România | Slăbire fără operație | Spital JCI"
        description="Gastroplastie endoscopică fără chirurgie pentru pacienți din România. Spital acreditat JCI. Pachete all-inclusive. Consultație gratuită."
        keywords="ESG România, slăbire fără operație, gastroplastie endoscopică, tratament obezitate Turcia, alternativă Ozempic, chirurgie bariatrică Turcia, ESG preț, pierdere greutate Istanbul"
        url="/esg/ro"
      />
      <JsonLd data={esgROSchema} />
      <JsonLd data={structuredData.createFAQ(roFaqs)} />
      <JsonLd data={structuredData.createBreadcrumb([
        { name: "Home", url: "/" },
        { name: "Treatments", url: "/treatments" },
        { name: "ESG", url: "/esg" },
        { name: "ESG pentru pacienți din România", url: "/esg/ro" },
      ])} />
      <Navbar />

      {/* Hero */}
      <section className="relative bg-slate-900 text-white pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-primary/30 opacity-90" />
        <div className="absolute inset-0 opacity-15" style={{ backgroundImage: "url('/esg-ro-hero.webp')", backgroundSize: "cover", backgroundPosition: "center" }} />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center gap-3 mb-6">
              <span className="text-4xl">{roFlag}</span>
              <Badge variant="outline" className="border-white/30 text-white/90 text-sm px-4 py-1">Dedicat pacienților din România</Badge>
              <span className="text-4xl">{trFlag}</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight" data-testid="heading-esg-ro-hero">
              Gastroplastie Endoscopică (ESG) — Slăbire fără operație în Turcia pentru pacienți din România
            </h1>
            <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto mb-8 leading-relaxed">
              Pierderea în greutate pe termen lung este dificilă, chiar și cu diete stricte, sport și medicamente precum Ozempic sau Wegovy. Gastroplastia Endoscopică (ESG) este o soluție modernă, sigură și minim invazivă — fără intervenție chirurgicală.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary hover:bg-primary/90 font-bold text-lg h-14 px-8" onClick={() => window.open("https://wa.me/905324131143?text=Bună%20ziua%2C%20sunt%20din%20România%20și%20sunt%20interesat%20de%20procedura%20ESG", "_blank")} data-testid="button-hero-whatsapp-ro">
                <Phone className="w-5 h-5 mr-2" />Consultație gratuită
              </Button>
              <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 font-bold text-lg h-14 px-8" onClick={() => document.getElementById("bmi-section-ro")?.scrollIntoView({ behavior: "smooth" })} data-testid="button-hero-bmi-ro">
                <Calculator className="w-5 h-5 mr-2" />Sunt eligibil?
              </Button>
            </div>
            <div className="flex flex-wrap gap-6 justify-center mt-10 text-sm text-slate-400">
              <span className="flex items-center gap-2"><ShieldCheck className="w-4 h-4" /> Spital acreditat JCI</span>
              <span className="flex items-center gap-2"><Plane className="w-4 h-4" /> ~1,5-2 ore zbor</span>
              <span className="flex items-center gap-2"><Clock className="w-4 h-4" /> 3-4 zile ședere</span>
              <span className="flex items-center gap-2"><Stethoscope className="w-4 h-4" /> 8.000+ proceduri reușite</span>
            </div>
          </div>
        </div>
      </section>

      {/* Ce este ESG */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-slate-900">Ce este Gastroplastia Endoscopică (ESG)?</h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                ESG este o procedură inovatoare pentru <strong>reducerea volumului stomacului fără chirurgie</strong>. Prin gură se introduce un endoscop cu care se aplică suturi interne, reducând volumul gastric cu 70-80%. Spre deosebire de <Link href="/sleeve-gastrectomy" className="text-primary hover:underline">sleeve gastrectomy</Link>, nu se fac incizii, nu se îndepărtează țesut gastric, iar recuperarea este semnificativ mai rapidă.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed">
                Procedura folosește tehnologia Apollo OverStitch și durează aproximativ 60-90 de minute sub anestezie generală. Rezultatul: senzație de sațietate precoce și reducerea naturală a cantității de alimente consumate.
              </p>
              <div className="grid grid-cols-3 gap-4 pt-4">
                <div className="text-center p-4 bg-primary/5 rounded-xl">
                  <div className="text-2xl font-bold text-primary">60-90</div>
                  <p className="text-sm text-slate-600 mt-1">minute</p>
                </div>
                <div className="text-center p-4 bg-primary/5 rounded-xl">
                  <div className="text-2xl font-bold text-primary">Zero</div>
                  <p className="text-sm text-slate-600 mt-1">incizii</p>
                </div>
                <div className="text-center p-4 bg-primary/5 rounded-xl">
                  <div className="text-2xl font-bold text-primary">1-3</div>
                  <p className="text-sm text-slate-600 mt-1">zile recuperare</p>
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <img src="/esg-procedure-cdn.webp" alt="Procedura ESG Gastroplastie Endoscopică" className="rounded-2xl shadow-xl max-w-md w-full" width="400" height="400" loading="lazy" />
            </div>
          </div>
        </div>
      </section>

      {/* De ce Turcia */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">{roFlag} De ce pacienții români aleg ESG în Turcia</h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">Turcia este una dintre cele mai populare destinații de turism medical pentru români — în special pentru proceduri bariatrice.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-200 hover:shadow-md transition-shadow" data-testid="card-ro-reason-cost">
              <div className="w-14 h-14 rounded-full bg-green-50 flex items-center justify-center mb-5"><Euro className="w-7 h-7 text-green-600" /></div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Costuri accesibile</h3>
              <p className="text-slate-600 leading-relaxed">ESG în clinicile private din România costă între 6.000 și 12.000 €. La Istanbul Bariatric Center, pachetul all-inclusive este semnificativ mai accesibil — cu aceleași standarde internaționale. Include procedura, spitalul JCI, hotelul, transferul și 12 luni de urmărire.</p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-200 hover:shadow-md transition-shadow" data-testid="card-ro-reason-access">
              <div className="w-14 h-14 rounded-full bg-blue-50 flex items-center justify-center mb-5"><Clock className="w-7 h-7 text-blue-600" /></div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Acces rapid</h3>
              <p className="text-slate-600 leading-relaxed">Fără liste lungi de așteptare. Consultația se organizează în câteva zile, iar tratamentul complet durează doar 3-4 zile. Programare rapidă și flexibilă.</p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-200 hover:shadow-md transition-shadow" data-testid="card-ro-reason-quality">
              <div className="w-14 h-14 rounded-full bg-purple-50 flex items-center justify-center mb-5"><Award className="w-7 h-7 text-purple-600" /></div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Experiență medicală</h3>
              <p className="text-slate-600 leading-relaxed">Turcia este un lider mondial în chirurgia bariatrică. Dr. Murat Üstün a realizat mii de proceduri ESG cu rezultate excelente, în spitalul Liv Hospital acreditat JCI.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ESG vs medicamente */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">ESG vs medicamente pentru slăbire</h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">Multe persoane încep cu medicamente GLP-1 precum Ozempic sau Wegovy. ESG oferă o alternativă stabilă și accesibilă.</p>
          </div>
          <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-sm">
            <table className="w-full text-left" data-testid="table-esg-vs-meds-ro">
              <thead>
                <tr className="bg-slate-900 text-white">
                  <th className="p-4 font-semibold text-sm uppercase tracking-wider">Factor</th>
                  <th className="p-4 font-semibold text-sm uppercase tracking-wider">Ozempic / Wegovy</th>
                  <th className="p-4 font-semibold text-sm uppercase tracking-wider bg-primary/90">ESG</th>
                </tr>
              </thead>
              <tbody>
                {comparisonMeds.map((row, i) => (
                  <tr key={i} className={`border-b border-slate-100 ${i % 2 === 0 ? "bg-white" : "bg-slate-50/50"}`} data-testid={`row-meds-ro-${i}`}>
                    <td className="p-4 font-medium text-slate-900">{row.factor}</td>
                    <td className="p-4 text-slate-700">{row.meds}</td>
                    <td className="p-4 text-slate-700 bg-primary/5 font-medium">{row.esg}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ESG vs chirurgie */}
      <section className="py-20 bg-blue-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">ESG vs Sleeve Gastric</h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">Comparație detaliată între ESG și <Link href="/sleeve-gastrectomy" className="text-primary hover:underline">gastrectomia sleeve chirurgicală</Link>.</p>
          </div>
          <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-sm">
            <table className="w-full text-left" data-testid="table-esg-vs-sleeve-ro">
              <thead>
                <tr className="bg-slate-900 text-white">
                  <th className="p-4 font-semibold text-sm uppercase tracking-wider">Caracteristică</th>
                  <th className="p-4 font-semibold text-sm uppercase tracking-wider bg-primary/90">ESG</th>
                  <th className="p-4 font-semibold text-sm uppercase tracking-wider">Sleeve Gastric</th>
                </tr>
              </thead>
              <tbody>
                {comparisonSurgery.map((row, i) => (
                  <tr key={i} className={`border-b border-slate-100 ${i % 2 === 0 ? "bg-white" : "bg-slate-50/50"}`} data-testid={`row-sleeve-ro-${i}`}>
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

      {/* De ce noi */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold mb-4">De ce Istanbul Bariatric Center?</h2>
            <p className="text-lg text-slate-300 max-w-3xl mx-auto">Combinăm excelența medicală cu o experiență pacient completă, accesibilă și transparentă.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Stethoscope, title: "Dr. Murat Üstün", desc: "Pionier ESG în Turcia. Mii de proceduri bariatrice reușite. Recunoaștere internațională." },
              { icon: ShieldCheck, title: "Spital acreditat JCI", desc: "Toate procedurile la Liv Hospital — standardul de aur internațional pentru calitate." },
              { icon: Users, title: "Suport complet", desc: "Echipă dedicată pacienților internaționali. Comunicare clară, organizare completă." },
              { icon: Euro, title: "Pachete all-inclusive", desc: "Procedură, spital, hotel, transfer, analize, nutriție 12 luni. Fără costuri ascunse." },
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <div key={i} className="bg-white/10 backdrop-blur rounded-xl p-6 text-center" data-testid={`card-ro-ibc-${i}`}>
                  <div className="w-14 h-14 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4"><Icon className="w-7 h-7 text-primary" /></div>
                  <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                  <p className="text-slate-300 text-sm">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Etape */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Procesul dumneavoastră — pas cu pas</h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">De la primul contact până la întoarcerea în România — ne ocupăm de fiecare detaliu.</p>
          </div>
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-primary/20 hidden md:block" />
            <div className="space-y-8">
              {journeySteps.map((step) => {
                const Icon = step.icon;
                return (
                  <div key={step.step} className="relative flex gap-6" data-testid={`step-journey-ro-${step.step}`}>
                    <div className="relative z-10 shrink-0">
                      <div className="w-16 h-16 rounded-full bg-primary text-white flex items-center justify-center shadow-lg"><Icon className="w-7 h-7" /></div>
                    </div>
                    <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200 flex-1 hover:shadow-md transition-shadow">
                      <div className="flex items-center gap-3 mb-2">
                        <Badge variant="outline" className="text-primary border-primary/30">Pasul {step.step}</Badge>
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

      {/* Confort Istanbul */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
            <div>
              <img src="/esg-ro-istanbul.webp" alt="Istanbul — destinație turism medical din România" className="rounded-2xl shadow-xl w-full" width="600" height="400" loading="lazy" />
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-slate-900">Confort și asistență de primă clasă</h2>
              <p className="text-lg text-slate-600 leading-relaxed">Bunăstarea dumneavoastră este prioritatea noastră din momentul aterizării la Istanbul. Transfer VIP, hotel confortabil, spitalul Liv Hospital cu echipamente de ultimă generație — totul organizat de echipa noastră.</p>
              <p className="text-lg text-slate-600 leading-relaxed">Mulți dintre pacienții noștri români spun că experiența a depășit așteptările — atât în ceea ce privește calitatea medicală, cât și organizarea generală a șederii.</p>
              <div className="flex flex-wrap gap-3">
                {["Transfer VIP aeroport", "Hotel confortabil", "Spital JCI", "Asistență 24/7", "WhatsApp dedicat"].map((tag) => (
                  <Badge key={tag} className="bg-primary/10 text-primary hover:bg-primary/10 px-3 py-1">{tag}</Badge>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Rezultate */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Rezultate așteptate</h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">ESG oferă o pierdere în greutate măsurabilă și durabilă — în combinație cu programul nostru de urmărire.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="bg-primary text-white rounded-2xl p-8 text-center" data-testid="stat-weight-loss-ro">
              <TrendingDown className="w-10 h-10 mx-auto mb-3 opacity-80" />
              <div className="text-4xl font-bold mb-2">15-20%</div>
              <p className="text-white/80">Pierdere totală greutate</p>
              <p className="text-sm text-white/60 mt-2">În 12-18 luni</p>
            </div>
            <div className="bg-primary text-white rounded-2xl p-8 text-center" data-testid="stat-bmi-38-ro">
              <Activity className="w-10 h-10 mx-auto mb-3 opacity-80" />
              <div className="text-4xl font-bold mb-2">~20 kg</div>
              <p className="text-white/80">Media (IMC 38+)</p>
              <p className="text-sm text-white/60 mt-2">În primele 6 luni</p>
            </div>
            <div className="bg-primary text-white rounded-2xl p-8 text-center" data-testid="stat-health-ro">
              <HeartPulse className="w-10 h-10 mx-auto mb-3 opacity-80" />
              <div className="text-4xl font-bold mb-2">Semnificativă</div>
              <p className="text-white/80">Îmbunătățire a sănătății</p>
              <p className="text-sm text-white/60 mt-2">Diabet, tensiune, apnee</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimoniale */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">{roFlag} Experiențele pacienților români</h2>
            <p className="text-lg text-slate-600">Povești reale ale pacienților români care au ales ESG la Istanbul Bariatric Center.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {roTestimonials.map((t, i) => (
              <div key={i} className="bg-white rounded-2xl p-8 shadow-sm border border-slate-200" data-testid={`testimonial-ro-${i}`}>
                <div className="flex items-center gap-1 mb-4">{[...Array(5)].map((_, si) => (<Star key={si} className="w-5 h-5 fill-yellow-400 text-yellow-400" />))}</div>
                <p className="text-slate-600 italic leading-relaxed mb-6">&bdquo;{t.text}&rdquo;</p>
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
      <section className="py-20" id="bmi-section-ro">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-start max-w-6xl mx-auto">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-slate-900">Cine este eligibil pentru ESG?</h2>
              <p className="text-lg text-slate-600 leading-relaxed">ESG este destinată persoanelor care se luptă cu excesul de greutate de mult timp și caută o soluție între măsurile de stil de viață și o intervenție chirurgicală majoră.</p>
              <div className="space-y-3">
                {[
                  "IMC-ul dumneavoastră este între 30 și 40",
                  "Dietele și exercițiile fizice nu au dat rezultate durabile",
                  "Nu doriți o intervenție chirurgicală invazivă",
                  "Medicamentele nu au fost suficiente sau sunt prea scumpe",
                  "Preferați o abordare minim invazivă cu recuperare rapidă",
                  "Suferiți de afecțiuni legate de obezitate (diabet tip 2, hipertensiune)",
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

      {/* Siguranță */}
      <section className="py-20 bg-green-50">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-slate-900">Siguranță și standarde de calitate</h2>
              <p className="text-lg text-slate-600 leading-relaxed">ESG este considerată una dintre cele mai sigure proceduri pentru pierderea în greutate. Dr. Murat Üstün a realizat mii de proceduri ESG cu rezultate excelente de siguranță la Liv Hospital, acreditat JCI.</p>
              <div className="space-y-3">
                {[
                  "Spital cu acreditare internațională JCI",
                  "Chirurg certificat cu mii de proceduri ESG",
                  "Tehnologie avansată Apollo OverStitch",
                  "Examinare preoperatorie completă",
                  "Asistență medicală 24/7 post-procedură",
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <ShieldCheck className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
                    <p className="text-slate-700">{item}</p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <img src="/esg-ro-consultation.webp" alt="Consultație medicală pentru pacienți români" className="rounded-2xl shadow-xl w-full" width="600" height="400" loading="lazy" />
            </div>
          </div>
        </div>
      </section>

      {/* După procedură */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-slate-900 mb-4 text-center">Viața după ESG</h2>
          <p className="text-lg text-slate-600 text-center mb-12 max-w-3xl mx-auto">Procedura este doar începutul. Iată cum se desfășoară recuperarea și tranziția alimentară.</p>
          <div className="space-y-4">
            {[
              { phase: "Primele 8 ore", desc: "Doar lichide clare. Odihnă și recuperare sub supraveghere medicală.", icon: "🏥", color: "border-red-200 bg-red-50" },
              { phase: "Săptămâna 1-2", desc: "Faza lichidă — shake-uri proteice, supă clară, apă. Stomacul se vindecă.", icon: "🥤", color: "border-orange-200 bg-orange-50" },
              { phase: "Săptămâna 3-6", desc: "Introducerea treptată a alimentelor semi-solide. Piureuri și proteine moi.", icon: "🥣", color: "border-yellow-200 bg-yellow-50" },
              { phase: "Din săptămâna 7", desc: "Tranziție treptată către alimente solide sănătoase. Porții controlate.", icon: "🥗", color: "border-green-200 bg-green-50" },
              { phase: "Luna 3-12", desc: "Suport nutrițional continuu cu consultații regulate pentru ajustarea planului.", icon: "📊", color: "border-blue-200 bg-blue-50" },
            ].map((phase, i) => (
              <div key={i} className={`flex items-start gap-5 p-6 rounded-xl border ${phase.color}`} data-testid={`phase-aftercare-ro-${i}`}>
                <span className="text-3xl shrink-0">{phase.icon}</span>
                <div>
                  <h4 className="font-bold text-slate-900 mb-1">{phase.phase}</h4>
                  <p className="text-slate-600 leading-relaxed">{phase.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-slate-50" data-testid="section-faq-ro">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Întrebări frecvente — ESG pentru pacienți din România</h2>
            <p className="text-lg text-slate-600">Tot ce trebuie să știți înainte de a pleca la Istanbul.</p>
          </div>
          <FAQAccordion faqs={roFaqs} />
        </div>
      </section>

      {/* Linkuri interne */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-2xl font-bold text-slate-900 mb-8 text-center">Descoperiți alte opțiuni de tratament</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { title: "ESG — Informații complete", href: "/esg", desc: "Toate detaliile despre procedură" },
              { title: "Sleeve Gastrectomy", href: "/sleeve-gastrectomy", desc: "Cea mai populară operație bariatrică" },
              { title: "Mini bypass gastric", href: "/mini-gastric-bypass", desc: "Procedură combinată" },
              { title: "Balon gastric", href: "/gastric-balloon-turkey", desc: "Opțiune non-chirurgicală" },
              { title: "Toate tratamentele", href: "/treatments", desc: "Comparație și prețuri" },
              { title: "Rezultate", href: "/results", desc: "Povești de succes" },
              { title: "Despre noi", href: "/about", desc: "Dr. Murat Üstün și echipa" },
              { title: "Contact", href: "/contact", desc: "Vorbiți cu echipa noastră" },
            ].map((link, i) => (
              <Link key={i} href={link.href} className="flex items-center gap-3 p-4 bg-white rounded-xl border border-slate-200 hover:border-primary/30 hover:shadow-sm transition-all group" data-testid={`link-internal-ro-${i}`}>
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
      <section className="py-20 bg-primary text-white" data-testid="section-cta-ro">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <span className="text-5xl mb-6 block">{roFlag}</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Începeți transformarea dumneavoastră</h2>
          <p className="text-xl text-white/80 mb-4 leading-relaxed">Dacă sunteți în căutarea unei alternative sigure și eficiente la chirurgie, gastroplastia endoscopică ar putea fi soluția potrivită.</p>
          <p className="text-lg text-white/70 mb-8">Contactați-ne astăzi pentru o consultație online gratuită. Vom evalua eligibilitatea, vom răspunde la toate întrebările și vom pregăti un plan de tratament personalizat — fără niciun angajament.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-primary hover:bg-white/90 font-bold text-lg h-14 px-10" onClick={() => window.open("https://wa.me/905324131143?text=Bună%20ziua%2C%20sunt%20din%20România%20și%20sunt%20interesat%20de%20procedura%20ESG", "_blank")} data-testid="button-cta-whatsapp-ro">
              <Phone className="w-5 h-5 mr-2" />WhatsApp: +90 532 413 1143
            </Button>
            <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 font-bold text-lg h-14 px-10" onClick={() => window.open("mailto:drmuratustun@gmail.com?subject=ESG%20cerere%20din%20România", "_blank")} data-testid="button-cta-email-ro">
              <MessageCircle className="w-5 h-5 mr-2" />Trimite email
            </Button>
          </div>
          <p className="text-white/50 mt-6 text-sm">Email: <a href="mailto:drmuratustun@gmail.com" className="text-white/70 hover:text-white underline">drmuratustun@gmail.com</a></p>
        </div>
      </section>

      <Footer />
    </div>
  );
}

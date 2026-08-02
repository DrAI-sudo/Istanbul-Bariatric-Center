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

const frFaqs = [
  {
    question: "L'ESG est-elle remboursée par la Sécurité sociale ou les mutuelles ?",
    answer: "L'ESG n'est actuellement pas prise en charge par l'Assurance maladie en France. Ce dispositif n'est pas encore inscrit dans la nomenclature des actes remboursables. Certaines mutuelles haut de gamme peuvent évaluer les demandes au cas par cas, mais le remboursement reste très rare. C'est l'une des raisons pour lesquelles de nombreux patients français se tournent vers Istanbul, où les forfaits tout compris à partir d'environ 6 700 € (£5 700) offrent un excellent rapport qualité-prix.",
  },
  {
    question: "Combien de temps dure le séjour à Istanbul ?",
    answer: "La plupart des patients français restent 3 à 4 jours à Istanbul. Vous arrivez la veille de l'intervention, l'ESG est réalisée le lendemain (jour 2), vous vous reposez à l'hôtel le jour 3, et vous pouvez rentrer en France dès le jour 4. Les vols directs depuis Paris, Lyon, Marseille, Toulouse et Nice durent environ 3 h 30.",
  },
  {
    question: "L'intervention est-elle douloureuse ?",
    answer: "L'ESG est réalisée sous anesthésie générale — vous ne ressentez rien pendant l'intervention. Après le réveil, des inconforts légers peuvent survenir : nausées, sensation de pesanteur gastrique. Ces symptômes sont bien pris en charge par les médicaments et se résolvent généralement en 1 à 3 jours. Comparé à la chirurgie, la récupération est nettement plus confortable.",
  },
  {
    question: "Les résultats sont-ils durables ?",
    answer: "Les résultats à long terme dépendent de votre implication personnelle. L'ESG offre un outil structurel puissant — votre estomac est physiquement plus petit — mais le maintien des résultats nécessite le respect du programme nutritionnel, une activité physique régulière et un suivi médical continu. Notre programme de suivi de 12 mois avec une diététicienne qualifiée est inclus dans tous les forfaits.",
  },
  {
    question: "Comment l'ESG se compare-t-elle à Ozempic ou Wegovy ?",
    answer: "Les médicaments GLP-1 comme Ozempic et Wegovy peuvent être efficaces initialement, mais de nombreux patients reprennent du poids à l'arrêt du traitement. Les coûts mensuels (200 à 400 €) s'accumulent rapidement. L'ESG propose une modification physique unique de l'estomac, sans frais récurrents. Beaucoup de patients voient l'ESG comme l'étape logique suivante lorsque les médicaments ne suffisent plus.",
  },
  {
    question: "Quel IMC faut-il pour l'ESG ?",
    answer: "L'ESG est généralement recommandée pour les patients ayant un IMC entre 30 et 40. Le dispositif convient particulièrement aux personnes qui n'ont pas obtenu de résultats durables avec les régimes et l'exercice physique seuls, qui ne souhaitent pas de chirurgie invasive, ou qui recherchent une approche mini-invasive avec une récupération rapide.",
  },
  {
    question: "Un acte médical à l'étranger est-il sûr ?",
    answer: "Istanbul Bariatric Center opère au sein du Liv Hospital, accrédité JCI (Joint Commission International) — le standard international le plus élevé en matière de qualité des soins. Le Dr Murat Üstün a réalisé des milliers d'ESG avec d'excellents résultats de sécurité. Nous offrons les mêmes standards — voire supérieurs — que les cliniques privées en France, avec un accompagnement dédié aux patients francophones.",
  },
  {
    question: "Que comprend le forfait tout compris ?",
    answer: "Nos forfaits ESG incluent l'intervention, l'hospitalisation en établissement accrédité JCI, les bilans sanguins et examens préopératoires, les transferts VIP aéroport, l'hébergement hôtelier (ex. Radisson Hotel), le suivi nutritionnel qualifié pendant 12 mois, les médicaments postopératoires et un suivi continu. Aucun frais caché.",
  },
];

const journeySteps = [
  {
    step: 1,
    title: "Consultation en ligne gratuite",
    desc: "Contactez-nous via WhatsApp ou notre site web. Notre équipe évalue votre IMC, vos antécédents médicaux et vos objectifs pour confirmer votre éligibilité à l'ESG.",
    icon: MessageCircle,
  },
  {
    step: 2,
    title: "Voyage en Turquie",
    desc: "Choisissez votre date — nous nous occupons du reste. Vols directs depuis Paris, Lyon, Marseille, Toulouse et Nice. Durée : environ 3 h 30.",
    icon: Plane,
  },
  {
    step: 3,
    title: "Transfert VIP et hôtel",
    desc: "Un chauffeur privé vous accueille à l'aéroport d'Istanbul et vous conduit à votre hôtel (ex. Radisson Hotel). Installez-vous et préparez-vous pour le lendemain.",
    icon: Hotel,
  },
  {
    step: 4,
    title: "Bilan préopératoire",
    desc: "Examens sanguins complets et bilan de santé à l'hôpital. Rencontrez le Dr Murat Üstün et l'équipe médicale pour un entretien personnalisé.",
    icon: Stethoscope,
  },
  {
    step: 5,
    title: "Intervention ESG",
    desc: "L'ESG est réalisée sous anesthésie générale au Liv Hospital, accrédité JCI. Durée : 60 à 90 minutes. Aucune incision, aucune cicatrice.",
    icon: HeartPulse,
  },
  {
    step: 6,
    title: "Récupération et retour",
    desc: "Reposez-vous à l'hôtel avec un suivi médical. La plupart des patients rentrent en France dans les 2 à 3 jours suivant l'intervention, prêts pour leur nouveau départ.",
    icon: Plane,
  },
];

const comparisonMeds = [
  { factor: "Durée d'efficacité", meds: "Variable — reprise de poids fréquente à l'arrêt", esg: "Plus stable — réduction physique de l'estomac durable" },
  { factor: "Effets secondaires", meds: "Fréquents (nausées, diarrhées, risque de pancréatite)", esg: "Limités (inconfort léger pendant 1 à 3 jours)" },
  { factor: "Coût", meds: "200 à 400 €/mois en continu (2 400 à 4 800 €/an)", esg: "Investissement unique à partir d'environ 6 700 €" },
  { factor: "Reprise de poids", meds: "Fréquente après l'arrêt du traitement", esg: "Réduite avec un mode de vie sain" },
  { factor: "Prise en charge", meds: "Partielle sous conditions strictes", esg: "Non remboursée" },
  { factor: "Acte médical ?", meds: "Non — injections hebdomadaires/quotidiennes", esg: "Oui — un acte endoscopique unique (60–90 min)" },
];

const comparisonSurgery = [
  { feature: "Type d'acte", esg: "Endoscopique (par la bouche)", sleeve: "Chirurgie laparoscopique (4–5 incisions)" },
  { feature: "Anesthésie", esg: "Anesthésie générale", sleeve: "Anesthésie générale" },
  { feature: "Durée", esg: "60 à 90 minutes", sleeve: "Environ 60 minutes" },
  { feature: "Hospitalisation", esg: "Jour même ou 1 nuit", sleeve: "2 à 3 nuits" },
  { feature: "Récupération", esg: "1 à 3 jours", sleeve: "2 à 3 semaines" },
  { feature: "Cicatrices", esg: "Aucune", sleeve: "4 à 5 petites cicatrices" },
  { feature: "Perte de poids", esg: "15 à 20 % du poids corporel", sleeve: "60 à 70 % de l'excès de poids" },
  { feature: "Réversibilité", esg: "Potentiellement réversible", sleeve: "Définitive (tissu gastrique retiré)" },
  { feature: "Profil de risque", esg: "Très faible", sleeve: "Faible" },
  { feature: "Prix à partir de (Istanbul)", esg: "À partir d'environ 6 700 € (£5 700)", sleeve: "À partir d'environ 4 000 € (£3 400)" },
];

const frTestimonials = [
  {
    name: "Sophie L.",
    location: "Paris",
    text: "Après des années de régimes yo-yo et six mois sous Ozempic sans résultat durable, j'ai découvert l'ESG. L'équipe d'Istanbul Bariatric Center m'a accompagnée avec un professionnalisme remarquable. En 5 mois, j'ai perdu 16 kg et je me sens enfin en harmonie avec mon corps.",
    weight: "16 kg perdus",
    time: "5 mois",
  },
  {
    name: "Julien M.",
    location: "Lyon",
    text: "J'étais sceptique à l'idée de faire un acte médical à l'étranger. Mais le Liv Hospital m'a bluffé — un niveau de qualité que je n'avais jamais vu, même dans les meilleures cliniques privées à Lyon. Le Dr Murat est un professionnel exceptionnel. Et le coût total était inférieur de moitié à ce qu'on m'avait proposé en France.",
    weight: "19 kg perdus",
    time: "6 mois",
  },
  {
    name: "Nathalie R.",
    location: "Marseille",
    text: "Du transfert aéroport au suivi nutritionnel, tout était parfaitement organisé. Je n'aurais jamais pensé que les résultats seraient si rapides. Le programme de 12 mois m'a vraiment aidée à changer mes habitudes alimentaires en profondeur. Je recommande sans hésiter.",
    weight: "14 kg perdus",
    time: "4 mois",
  },
];

function CalculateurIMC() {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [imc, setImc] = useState<number | null>(null);

  const calculateIMC = () => {
    const h = parseFloat(height) / 100;
    const w = parseFloat(weight);
    if (h > 0 && w > 0) {
      setImc(Math.round((w / (h * h)) * 10) / 10);
    }
  };

  const getIMCCategory = (imc: number) => {
    if (imc < 18.5) return { label: "Insuffisance pondérale", color: "text-blue-600", eligible: false };
    if (imc < 25) return { label: "Poids normal", color: "text-green-600", eligible: false };
    if (imc < 30) return { label: "Surpoids", color: "text-yellow-600", eligible: false };
    if (imc < 35) return { label: "Obésité (classe I)", color: "text-orange-600", eligible: true };
    if (imc < 40) return { label: "Obésité (classe II)", color: "text-red-500", eligible: true };
    return { label: "Obésité sévère (classe III)", color: "text-red-700", eligible: false, surgical: true };
  };

  return (
    <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-200" data-testid="bmi-calculator-fr">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
          <Calculator className="w-6 h-6 text-primary" />
        </div>
        <div>
          <h3 className="text-xl font-bold text-slate-900">Suis-je éligible à l'ESG ?</h3>
          <p className="text-sm text-slate-500">Calculez votre IMC et vérifiez votre éligibilité</p>
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-4 mb-4">
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">Taille (cm)</label>
          <input
            type="number"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            placeholder="ex. 170"
            className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none"
            data-testid="input-height-fr"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">Poids (kg)</label>
          <input
            type="number"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            placeholder="ex. 95"
            className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none"
            data-testid="input-weight-fr"
          />
        </div>
      </div>

      <Button
        onClick={calculateIMC}
        className="w-full bg-primary hover:bg-primary/90 h-12"
        data-testid="button-calculate-imc-fr"
      >
        Calculer mon IMC
      </Button>

      {imc !== null && (
        <div className="mt-6 p-4 rounded-xl bg-slate-50 border border-slate-200" data-testid="imc-result-fr">
          <div className="text-center mb-3">
            <span className="text-4xl font-bold text-primary">{imc}</span>
            <p className={`text-lg font-semibold ${getIMCCategory(imc).color}`}>{getIMCCategory(imc).label}</p>
          </div>
          {getIMCCategory(imc).eligible ? (
            <div className="bg-green-50 border border-green-200 rounded-lg p-3 text-center">
              <p className="text-green-800 font-medium">Vous pourriez être un(e) bon(ne) candidat(e) pour l'ESG !</p>
              <p className="text-green-600 text-sm mt-1">Contactez-nous pour une consultation gratuite.</p>
            </div>
          ) : getIMCCategory(imc).surgical ? (
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 text-center">
              <p className="text-blue-800 font-medium">Une chirurgie bariatrique pourrait être plus adaptée à votre situation.</p>
              <p className="text-blue-600 text-sm mt-1">
                <Link href="/treatments" className="underline">Voir toutes les options</Link> ou contactez-nous.
              </p>
            </div>
          ) : (
            <div className="bg-slate-100 border border-slate-200 rounded-lg p-3 text-center">
              <p className="text-slate-700 font-medium">L'ESG est généralement recommandée pour un IMC de 30 à 40.</p>
              <p className="text-slate-500 text-sm mt-1">Contactez-nous pour discuter de vos options.</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

function FAQAccordion({ faqs }: { faqs: typeof frFaqs }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="space-y-3" data-testid="faq-accordion-fr">
      {faqs.map((faq, i) => (
        <div
          key={i}
          className={`rounded-xl border transition-all duration-200 ${openIndex === i ? "border-primary/30 bg-white shadow-md" : "border-slate-200 bg-white hover:border-slate-300"}`}
          data-testid={`faq-item-fr-${i}`}
        >
          <button
            className="w-full flex items-center justify-between p-5 text-left"
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
            data-testid={`button-faq-fr-${i}`}
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

export default function ESGFrance() {
  const frFlag = "🇫🇷";
  const trFlag = "🇹🇷";

  const esgFRSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalProcedure",
    "name": "Sleeve Gastroplastie Endoscopique pour patients français",
    "alternateName": ["ESG France", "ESG Turquie", "Sleeve sans chirurgie", "Perte de poids sans opération France"],
    "description": "Sleeve Gastroplastie Endoscopique (ESG) pour les patients en France à Istanbul Bariatric Center. Réduction gastrique sans chirurgie. Forfaits tout compris à partir d'environ 6 700 €. Jusqu'à 70 % moins cher qu'en France.",
    "procedureType": "Endoscopic",
    "bodyLocation": "Stomach",
    "preparation": "Consultation en ligne gratuite, analyse d'IMC, évaluation médicale",
    "followup": "Suivi nutritionnel de 12 mois avec diététicienne qualifiée",
    "howPerformed": "Dispositif de suture endoscopique introduit par la bouche pour réduire l'estomac de 70 à 80 %. Aucune incision nécessaire.",
    "status": "https://schema.org/ActiveActionStatus",
    "relevantSpecialty": { "@type": "MedicalSpecialty", "name": "Bariatric Surgery" },
  };

  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="ESG Turquie pour patients français | Sleeve sans chirurgie | Jusqu'à 70 % d'économie"
        description="ESG pour patients en France. Jusqu'à 70 % moins cher. Forfaits tout compris dès 6 700 € en hôpital accrédité JCI. Consultation gratuite."
        keywords="ESG France, sleeve sans chirurgie, perte de poids sans opération, alternative Ozempic France, ESG Turquie prix, gastroplastie endoscopique France, chirurgie bariatrique Turquie, réduction gastrique sans opération, ESG coût France vs Turquie, maigrir sans chirurgie"
        url="/esg/fr"
      />
      <JsonLd data={esgFRSchema} />
      <JsonLd data={structuredData.createFAQ(frFaqs)} />
      <JsonLd data={structuredData.createBreadcrumb([
        { name: "Home", url: "/" },
        { name: "Treatments", url: "/treatments" },
        { name: "ESG", url: "/esg" },
        { name: "ESG pour patients français", url: "/esg/fr" },
      ])} />
      <Navbar />

      {/* Hero */}
      <section className="relative bg-slate-900 text-white pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-primary/30 opacity-90" />
        <div
          className="absolute inset-0 opacity-15"
          style={{
            backgroundImage: "url('/esg-fr-hero.webp')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center gap-3 mb-6">
              <span className="text-4xl">{frFlag}</span>
              <Badge variant="outline" className="border-white/30 text-white/90 text-sm px-4 py-1">
                Spécialement pour les patients français
              </Badge>
              <span className="text-4xl">{trFlag}</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight" data-testid="heading-esg-fr-hero">
              Sleeve Gastroplastie Endoscopique (ESG) pour les patients en France — Perdre du poids sans chirurgie en Turquie
            </h1>
            <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto mb-8 leading-relaxed">
              En France, de plus en plus de patients cherchent des solutions efficaces pour perdre du poids durablement, sans recourir à une chirurgie lourde. Malgré les régimes, le sport et les traitements comme Ozempic ou Wegovy, beaucoup constatent une reprise de poids progressive. L'ESG représente aujourd'hui une alternative moderne, sûre et accessible.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 font-bold text-lg h-14 px-8"
                onClick={() => window.open("https://wa.me/905324131143?text=Bonjour%2C%20je%20suis%20un%20patient%20fran%C3%A7ais%20int%C3%A9ress%C3%A9%20par%20l%27ESG", "_blank")}
                data-testid="button-hero-whatsapp-fr"
              >
                <Phone className="w-5 h-5 mr-2" />
                Consultation gratuite
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white/30 text-white hover:bg-white/10 font-bold text-lg h-14 px-8"
                onClick={() => document.getElementById("imc-section-fr")?.scrollIntoView({ behavior: "smooth" })}
                data-testid="button-hero-imc-fr"
              >
                <Calculator className="w-5 h-5 mr-2" />
                Suis-je éligible ?
              </Button>
            </div>
            <div className="flex flex-wrap gap-6 justify-center mt-10 text-sm text-slate-400">
              <span className="flex items-center gap-2"><ShieldCheck className="w-4 h-4" /> Hôpital accrédité JCI</span>
              <span className="flex items-center gap-2"><Euro className="w-4 h-4" /> Jusqu'à 70 % d'économie</span>
              <span className="flex items-center gap-2"><Clock className="w-4 h-4" /> Séjour de 3 à 4 jours</span>
              <span className="flex items-center gap-2"><Stethoscope className="w-4 h-4" /> 8 000+ interventions réussies</span>
            </div>
          </div>
        </div>
      </section>

      {/* Qu'est-ce que l'ESG ? */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-slate-900">Qu'est-ce que la Sleeve Gastroplastie Endoscopique (ESG) ?</h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                L'ESG est une technique innovante de <strong>réduction gastrique sans chirurgie</strong>. Un endoscope est introduit par la bouche pour réaliser des sutures internes qui réduisent le volume de l'estomac de 70 à 80 %. Contrairement à la <Link href="/sleeve-gastrectomy" className="text-primary hover:underline">sleeve gastrectomie classique</Link>, aucune incision n'est pratiquée, aucun tissu gastrique n'est retiré, et la récupération est considérablement plus rapide.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed">
                L'intervention utilise la technologie Apollo OverStitch — un système de suture endoscopique de pointe — pour créer des plis permanents dans la paroi gastrique. Le résultat : une sensation de satiété plus rapide et une réduction naturelle des portions alimentaires. L'intervention dure environ 60 à 90 minutes sous anesthésie générale, et la plupart des patients sortent le jour même ou après une nuit d'observation.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed">
                Pour les patients français, l'ESG comble un vide important entre les mesures hygiéno-diététiques qui n'ont pas fonctionné et une chirurgie invasive pour laquelle beaucoup ne sont pas prêts ou ne remplissent pas les critères. C'est une approche médicale rigoureuse, personnalisée et respectueuse du corps.
              </p>
              <div className="grid grid-cols-3 gap-4 pt-4">
                <div className="text-center p-4 bg-primary/5 rounded-xl">
                  <div className="text-2xl font-bold text-primary">60–90</div>
                  <p className="text-sm text-slate-600 mt-1">minutes</p>
                </div>
                <div className="text-center p-4 bg-primary/5 rounded-xl">
                  <div className="text-2xl font-bold text-primary">Zéro</div>
                  <p className="text-sm text-slate-600 mt-1">incision</p>
                </div>
                <div className="text-center p-4 bg-primary/5 rounded-xl">
                  <div className="text-2xl font-bold text-primary">1–3</div>
                  <p className="text-sm text-slate-600 mt-1">jours de récupération</p>
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <img
                src="/esg-procedure-cdn.webp"
                alt="Procédure ESG — Sleeve Gastroplastie Endoscopique"
                className="rounded-2xl shadow-xl max-w-md w-full"
                width="400"
                height="400"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Pourquoi l'ESG à l'étranger ? */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              {frFlag} Pourquoi les patients français choisissent l'ESG en Turquie
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Des milliers de patients français se rendent chaque année à Istanbul pour des interventions bariatriques. Voici pourquoi l'ESG à l'étranger devient un choix de plus en plus privilégié.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-200 hover:shadow-md transition-shadow" data-testid="card-fr-reason-access">
              <div className="w-14 h-14 rounded-full bg-red-50 flex items-center justify-center mb-5">
                <ShieldCheck className="w-7 h-7 text-red-500" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Accès limité en France</h3>
              <p className="text-slate-600 leading-relaxed">
                L'ESG reste encore peu répandue en France. Elle n'est pas largement proposée dans les hôpitaux publics et n'est généralement pas prise en charge par l'Assurance maladie. Les cliniques privées qui la proposent sont rares et les délais d'attente peuvent être longs, même à Paris, Lyon ou Marseille.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-200 hover:shadow-md transition-shadow" data-testid="card-fr-reason-cost">
              <div className="w-14 h-14 rounded-full bg-green-50 flex items-center justify-center mb-5">
                <Euro className="w-7 h-7 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Économie significative</h3>
              <p className="text-slate-600 leading-relaxed">
                En France, l'ESG coûte typiquement <strong>8 000 à 15 000 €</strong> dans le secteur privé. À Istanbul Bariatric Center, les <strong>forfaits tout compris débutent à environ 6 700 €</strong> (£5 700) — soit une économie de 40 à 60 %. Ce forfait inclut l'intervention, l'hospitalisation, l'hôtel, les transferts et 12 mois de suivi nutritionnel.
              </p>
              <div className="mt-4 p-3 bg-green-50 rounded-lg">
                <p className="text-green-800 font-semibold text-sm">
                  Économie moyenne : 3 000 à 9 000 €
                </p>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-200 hover:shadow-md transition-shadow" data-testid="card-fr-reason-time">
              <div className="w-14 h-14 rounded-full bg-blue-50 flex items-center justify-center mb-5">
                <Clock className="w-7 h-7 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Aucun délai d'attente</h3>
              <p className="text-slate-600 leading-relaxed">
                Même dans les grandes villes comme Paris, Lyon, Marseille ou Toulouse, les délais pour une consultation privée en endoscopie bariatrique peuvent atteindre plusieurs semaines, voire des mois. À Istanbul Bariatric Center, votre consultation est organisée en quelques jours et l'ensemble du traitement se déroule en 3 à 4 jours.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ESG vs médicaments */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              ESG vs traitements médicamenteux
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              De nombreux patients en France débutent avec des médicaments GLP-1 comme Ozempic ou Wegovy. Mais que se passe-t-il lorsque l'efficacité diminue, que les effets secondaires s'accumulent ou que les coûts mensuels deviennent pesants ? L'ESG s'inscrit de plus en plus comme l'étape suivante logique.
            </p>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-sm">
            <table className="w-full text-left" data-testid="table-esg-vs-meds-fr">
              <thead>
                <tr className="bg-slate-900 text-white">
                  <th className="p-4 font-semibold text-sm uppercase tracking-wider">Critère</th>
                  <th className="p-4 font-semibold text-sm uppercase tracking-wider">Ozempic / Wegovy</th>
                  <th className="p-4 font-semibold text-sm uppercase tracking-wider bg-primary/90">ESG</th>
                </tr>
              </thead>
              <tbody>
                {comparisonMeds.map((row, i) => (
                  <tr
                    key={i}
                    className={`border-b border-slate-100 hover:bg-blue-50/50 transition-colors ${i % 2 === 0 ? "bg-white" : "bg-slate-50/50"}`}
                    data-testid={`row-meds-comparison-fr-${i}`}
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
            L'ESG offre une réduction gastrique physique et unique — sans frais médicamenteux récurrents.
          </p>
        </div>
      </section>

      {/* ESG vs Sleeve chirurgicale */}
      <section className="py-20 bg-blue-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              ESG vs Sleeve chirurgicale
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Vous hésitez entre l'ESG et une <Link href="/sleeve-gastrectomy" className="text-primary hover:underline">sleeve gastrectomie</Link> ? Voici une comparaison détaillée. L'ESG convient particulièrement aux patients qui privilégient une approche moins invasive.
            </p>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-sm">
            <table className="w-full text-left" data-testid="table-esg-vs-sleeve-fr">
              <thead>
                <tr className="bg-slate-900 text-white">
                  <th className="p-4 font-semibold text-sm uppercase tracking-wider">Critère</th>
                  <th className="p-4 font-semibold text-sm uppercase tracking-wider bg-primary/90">ESG</th>
                  <th className="p-4 font-semibold text-sm uppercase tracking-wider">Sleeve chirurgicale</th>
                </tr>
              </thead>
              <tbody>
                {comparisonSurgery.map((row, i) => (
                  <tr
                    key={i}
                    className={`border-b border-slate-100 hover:bg-blue-50/50 transition-colors ${i % 2 === 0 ? "bg-white" : "bg-slate-50/50"}`}
                    data-testid={`row-sleeve-comparison-fr-${i}`}
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
            Les deux interventions sont réalisées au Liv Hospital, accrédité JCI, à Istanbul. <Link href="/treatments" className="text-primary hover:underline">Voir toutes les options de traitement</Link>.
          </p>
        </div>
      </section>

      {/* Pourquoi Istanbul Bariatric Center */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold mb-4">Pourquoi Istanbul Bariatric Center ?</h2>
            <p className="text-lg text-slate-300 max-w-3xl mx-auto">
              Nous associons excellence médicale et accompagnement sur mesure pour les patients internationaux — et en particulier français.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white/10 backdrop-blur rounded-xl p-6 text-center" data-testid="card-fr-ibc-surgeon">
              <div className="w-14 h-14 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                <Stethoscope className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-lg font-bold mb-2">
                <a href="https://drmuratustun.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Dr Murat Üstün</a>
              </h3>
              <p className="text-slate-300 text-sm">Pionnier de l'ESG en Turquie, avec des milliers d'interventions bariatriques réussies. Reconnu internationalement pour son expertise en endoscopie interventionnelle et son approche centrée sur le patient.</p>
            </div>

            <div className="bg-white/10 backdrop-blur rounded-xl p-6 text-center" data-testid="card-fr-ibc-hospital">
              <div className="w-14 h-14 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                <ShieldCheck className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-lg font-bold mb-2">Hôpital accrédité JCI</h3>
              <p className="text-slate-300 text-sm">Toutes les interventions sont réalisées au Liv Hospital — détenteur de l'accréditation Joint Commission International, le standard mondial le plus exigeant en matière de sécurité et de qualité des soins.</p>
            </div>

            <div className="bg-white/10 backdrop-blur rounded-xl p-6 text-center" data-testid="card-fr-ibc-team">
              <div className="w-14 h-14 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                <Users className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-lg font-bold mb-2">{frFlag} Accompagnement francophone</h3>
              <p className="text-slate-300 text-sm">Des coordinateurs dédiés qui comprennent les attentes des patients français. Communication claire, transparence tarifaire, suivi structuré. Contact via WhatsApp à tout moment.</p>
            </div>

            <div className="bg-white/10 backdrop-blur rounded-xl p-6 text-center" data-testid="card-fr-ibc-package">
              <div className="w-14 h-14 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                <Euro className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-lg font-bold mb-2">Tout compris dès ~6 700 €</h3>
              <p className="text-slate-300 text-sm">Aucun frais caché. Les forfaits incluent l'intervention, l'hospitalisation, l'hôtel, les transferts VIP, les examens préopératoires, le suivi nutritionnel et le programme de 12 mois.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Déroulement */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Votre parcours de soin — étape par étape
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              De la première prise de contact à votre retour en France, nous prenons en charge chaque détail. Voici le déroulement de votre traitement en tant que patient français à Istanbul.
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-primary/20 hidden md:block" />

            <div className="space-y-8">
              {journeySteps.map((step) => {
                const Icon = step.icon;
                return (
                  <div key={step.step} className="relative flex gap-6" data-testid={`step-journey-fr-${step.step}`}>
                    <div className="relative z-10 shrink-0">
                      <div className="w-16 h-16 rounded-full bg-primary text-white flex items-center justify-center shadow-lg">
                        <Icon className="w-7 h-7" />
                      </div>
                    </div>
                    <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200 flex-1 hover:shadow-md transition-shadow">
                      <div className="flex items-center gap-3 mb-2">
                        <Badge variant="outline" className="text-primary border-primary/30">Étape {step.step}</Badge>
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

      {/* Confort */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
            <div>
              <img
                src="/esg-fr-istanbul.webp"
                alt="Istanbul — Destination de tourisme médical pour les patients français"
                className="rounded-2xl shadow-xl w-full"
                width="600"
                height="400"
                loading="lazy"
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-slate-900">Confort et accompagnement premium</h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                Votre bien-être est notre priorité — dès votre arrivée à Istanbul. Notre partenariat avec des hôtels de standing comme le Radisson vous garantit un cadre confortable, tandis que le Liv Hospital met à votre disposition des équipements médicaux de dernière génération, conformes aux plus hauts standards internationaux.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed">
                Chaque aspect de votre séjour est coordonné par notre équipe — de l'organisation de votre transfert aéroport à la préparation de votre chambre d'hôtel pour la récupération. Beaucoup de nos patients français décrivent leur expérience comme « supérieure à tout ce qu'ils ont connu en clinique privée en France ».
              </p>
              <div className="flex flex-wrap gap-3">
                <Badge className="bg-primary/10 text-primary hover:bg-primary/10 px-3 py-1">Transfert VIP aéroport</Badge>
                <Badge className="bg-primary/10 text-primary hover:bg-primary/10 px-3 py-1">Radisson Hotel</Badge>
                <Badge className="bg-primary/10 text-primary hover:bg-primary/10 px-3 py-1">Liv Hospital (JCI)</Badge>
                <Badge className="bg-primary/10 text-primary hover:bg-primary/10 px-3 py-1">Accompagnement 24h/24</Badge>
                <Badge className="bg-primary/10 text-primary hover:bg-primary/10 px-3 py-1">Contact WhatsApp</Badge>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Résultats */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Résultats attendus de l'ESG</h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              L'ESG produit une perte de poids mesurable et durable — surtout lorsqu'elle est associée aux changements de mode de vie accompagnés par notre programme de suivi.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="bg-primary text-white rounded-2xl p-8 text-center" data-testid="stat-weight-loss-fr">
              <TrendingDown className="w-10 h-10 mx-auto mb-3 opacity-80" />
              <div className="text-4xl font-bold mb-2">15–20 %</div>
              <p className="text-white/80">Perte de poids totale</p>
              <p className="text-sm text-white/60 mt-2">Sur 12 à 18 mois</p>
            </div>
            <div className="bg-primary text-white rounded-2xl p-8 text-center" data-testid="stat-imc-38-fr">
              <Activity className="w-10 h-10 mx-auto mb-3 opacity-80" />
              <div className="text-4xl font-bold mb-2">~20 kg</div>
              <p className="text-white/80">Moyenne (IMC 38+)</p>
              <p className="text-sm text-white/60 mt-2">Dans les 6 premiers mois</p>
            </div>
            <div className="bg-primary text-white rounded-2xl p-8 text-center" data-testid="stat-health-fr">
              <HeartPulse className="w-10 h-10 mx-auto mb-3 opacity-80" />
              <div className="text-4xl font-bold mb-2">Nette</div>
              <p className="text-white/80">Amélioration de la santé</p>
              <p className="text-sm text-white/60 mt-2">Diabète, tension, apnée du sommeil</p>
            </div>
          </div>

          <div className="p-6 bg-blue-50 rounded-xl border border-blue-100">
            <p className="text-slate-700 leading-relaxed">
              Les résultats dépendent de votre engagement personnel — respect du programme nutritionnel, activité physique régulière et participation aux consultations de suivi. Notre programme de 12 mois avec diététicienne qualifiée est inclus dans tous les forfaits et vous accompagne vers vos objectifs. <Link href="/results" className="text-primary hover:underline font-medium">Voir les témoignages de nos patients</Link>.
            </p>
          </div>
        </div>
      </section>

      {/* Témoignages */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">{frFlag} Témoignages de patients français</h2>
            <p className="text-lg text-slate-600">Des expériences authentiques de patients français ayant choisi l'ESG à Istanbul Bariatric Center.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {frTestimonials.map((t, i) => (
              <div key={i} className="bg-white rounded-2xl p-8 shadow-sm border border-slate-200" data-testid={`testimonial-fr-${i}`}>
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

      {/* Calculateur IMC & Éligibilité */}
      <section className="py-20" id="imc-section-fr">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-start max-w-6xl mx-auto">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-slate-900">Qui est éligible à l'ESG ?</h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                L'ESG s'adresse aux personnes qui luttent durablement contre le surpoids et recherchent une solution entre les mesures hygiéno-diététiques et une chirurgie lourde. Vous pourriez être éligible si :
              </p>
              <div className="space-y-3">
                {[
                  "Votre IMC se situe entre 30 et 40",
                  "Les régimes et l'exercice physique n'ont pas produit de résultats durables",
                  "Vous ne souhaitez pas de chirurgie invasive ou n'y êtes pas éligible",
                  "Les traitements médicamenteux se sont avérés insuffisants ou trop coûteux",
                  "Vous recherchez un acte avec un temps de récupération minimal",
                  "Vous souffrez de comorbidités liées à l'obésité (diabète de type 2, hypertension, apnée du sommeil)",
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <p className="text-slate-600">{item}</p>
                  </div>
                ))}
              </div>
              <p className="text-slate-600 leading-relaxed">
                Avant l'intervention, notre équipe médicale réalise une évaluation approfondie de vos antécédents. Pour un IMC supérieur à 40, une <Link href="/sleeve-gastrectomy" className="text-primary hover:underline">sleeve gastrectomie</Link> ou un <Link href="/mini-gastric-bypass" className="text-primary hover:underline">bypass gastrique</Link> pourraient être plus adaptés.
              </p>
            </div>
            <CalculateurIMC />
          </div>
        </div>
      </section>

      {/* Sécurité */}
      <section className="py-20 bg-green-50">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-slate-900">Sécurité et standards de qualité</h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                L'ESG est considérée comme l'un des actes de perte de poids les plus sûrs lorsqu'elle est réalisée par des spécialistes expérimentés dans un établissement accrédité. Par rapport aux alternatives chirurgicales, l'ESG présente un taux de complications plus faible, aucune cicatrice et une récupération nettement plus rapide.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed">
                Au sein d'Istanbul Bariatric Center, <a href="https://drmuratustun.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">le Dr Murat Üstün</a> a réalisé des milliers d'ESG avec d'excellents résultats de sécurité. Toutes les interventions ont lieu au Liv Hospital, accrédité JCI — avec les mêmes standards internationaux que les meilleurs établissements en France.
              </p>
              <div className="space-y-3">
                {[
                  "Hôpital accrédité JCI (standard international le plus exigeant)",
                  "Chirurgien certifié avec des milliers d'ESG réalisées",
                  "Technologie de suture endoscopique de pointe (Apollo OverStitch)",
                  "Bilan de santé préopératoire complet",
                  "Suivi médical 24h/24 après l'intervention",
                  "Protocoles médicaux et d'assurance exhaustifs",
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
                src="/esg-fr-consultation.webp"
                alt="Consultation médicale avec un patient français à Istanbul Bariatric Center"
                className="rounded-2xl shadow-xl w-full"
                width="600"
                height="400"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Vie après l'ESG */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-slate-900 mb-4 text-center">La vie après l'ESG</h2>
          <p className="text-lg text-slate-600 text-center mb-12 max-w-3xl mx-auto">
            L'intervention n'est que le point de départ. Voici comment se déroulent votre récupération et votre transition alimentaire dans les semaines et mois qui suivent.
          </p>

          <div className="space-y-4">
            {[
              { phase: "Premières 8 heures", desc: "Liquides clairs uniquement. Repos et récupération à l'hôpital ou à l'hôtel avec suivi médical continu.", icon: "🏥", color: "border-red-200 bg-red-50" },
              { phase: "Semaines 1–2", desc: "Phase liquide — shakes protéinés, bouillons clairs, eau. Votre estomac guérit et s'adapte à sa nouvelle taille.", icon: "🥤", color: "border-orange-200 bg-orange-50" },
              { phase: "Semaines 3–6", desc: "Introduction progressive d'aliments semi-solides. Purées et protéines molles. Votre diététicienne vous accompagne à chaque étape.", icon: "🥣", color: "border-yellow-200 bg-yellow-50" },
              { phase: "À partir de la semaine 7", desc: "Transition vers une alimentation solide saine. Accent sur les repas riches en protéines, équilibrés, avec des portions contrôlées.", icon: "🥗", color: "border-green-200 bg-green-50" },
              { phase: "Mois 3–12", desc: "Suivi nutritionnel continu avec consultations régulières pour évaluer vos progrès et ajuster votre programme alimentaire.", icon: "📊", color: "border-blue-200 bg-blue-50" },
            ].map((phase, i) => (
              <div key={i} className={`flex items-start gap-5 p-6 rounded-xl border ${phase.color}`} data-testid={`phase-aftercare-fr-${i}`}>
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
                <h4 className="font-bold text-slate-900 mb-2">Suivi nutritionnel de 12 mois inclus</h4>
                <p className="text-slate-600 leading-relaxed">
                  Chaque forfait ESG inclut l'accès à une diététicienne qualifiée qui élabore des plans alimentaires individualisés, réalise des consultations régulières et vous accompagne tout au long de la première année. Ce n'est pas un conseil générique — c'est un programme structuré, adapté à votre mode de vie, vos préférences et vos objectifs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pourquoi la Turquie */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">{trFlag} Pourquoi la Turquie pour le tourisme médical ?</h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              La Turquie s'est imposée comme l'une des destinations mondiales de référence pour le tourisme médical — et Istanbul en est le centre névralgique.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Award, title: "Pôle de santé mondial", desc: "La Turquie accueille plus d'un million de patients médicaux internationaux par an, avec des hôpitaux accrédités JCI dans toute la ville d'Istanbul." },
              { icon: Stethoscope, title: "Chirurgiens hautement qualifiés", desc: "Les chirurgiens bariatriques turcs comptent parmi les plus expérimentés au monde — beaucoup formés à l'international et membres de l'IFSO." },
              { icon: Euro, title: "Tarifs compétitifs", desc: "Des soins médicaux d'excellence à une fraction du coût français — sans compromis sur la qualité, la technologie ou la sécurité." },
              { icon: Plane, title: "Accès facile depuis la France", desc: "Vols directs depuis Paris, Lyon, Marseille, Toulouse, Nice et d'autres villes. Durée : environ 3 h 30 jusqu'à Istanbul." },
              { icon: MapPin, title: "Istanbul — métropole mondiale", desc: "Une ville vibrante et moderne, à la croisée de l'Europe et de l'Asie. Sûre, bien desservie et accueillante pour les visiteurs internationaux." },
              { icon: ShieldCheck, title: "Standards internationaux", desc: "De nombreux hôpitaux accrédités JCI, une réglementation stricte et une infrastructure de tourisme médical pensée pour les patients internationaux." },
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <div key={i} className="bg-white rounded-xl p-6 shadow-sm border border-slate-200" data-testid={`card-turkey-reason-fr-${i}`}>
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
      <section className="py-20" data-testid="section-faq-fr">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Questions fréquentes — ESG pour patients français</h2>
            <p className="text-lg text-slate-600">Tout ce que vous devez savoir avant de vous rendre à Istanbul.</p>
          </div>
          <FAQAccordion faqs={frFaqs} />
        </div>
      </section>

      {/* Liens internes */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-2xl font-bold text-slate-900 mb-8 text-center">Découvrir d'autres options de traitement</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { title: "ESG — Informations complètes", href: "/esg", desc: "Détails complets de la procédure" },
              { title: "Sleeve gastrectomie", href: "/sleeve-gastrectomy", desc: "L'opération bariatrique la plus populaire" },
              { title: "Mini bypass gastrique", href: "/mini-gastric-bypass", desc: "Procédure combinée" },
              { title: "Ballon gastrique", href: "/gastric-balloon", desc: "Option non chirurgicale" },
              { title: "Tous les traitements", href: "/treatments", desc: "Comparer les procédures et tarifs" },
              { title: "Résultats patients", href: "/results", desc: "Avant-après et témoignages" },
              { title: "Profil de santé", href: "/health-profile", desc: "Évaluer votre éligibilité" },
              { title: "À propos de nous", href: "/about", desc: "Dr Murat Üstün et l'équipe" },
              { title: "Contact", href: "/contact", desc: "Contacter notre équipe" },
            ].map((link, i) => (
              <Link key={i} href={link.href} className="flex items-center gap-3 p-4 bg-white rounded-xl border border-slate-200 hover:border-primary/30 hover:shadow-sm transition-all group" data-testid={`link-internal-fr-${i}`}>
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
      <section className="py-20 bg-primary text-white" data-testid="section-cta-fr">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <span className="text-5xl mb-6 block">{frFlag}</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Commencez votre transformation dès aujourd'hui</h2>
          <p className="text-xl text-white/80 mb-4 leading-relaxed">
            Si vous recherchez une alternative efficace et sûre à la chirurgie, la Sleeve Gastroplastie Endoscopique pourrait être la solution adaptée à votre situation.
          </p>
          <p className="text-lg text-white/70 mb-8">
            Contactez notre équipe dès maintenant pour une consultation en ligne gratuite. Nous évaluons votre éligibilité, répondons à toutes vos questions et élaborons un plan de traitement personnalisé — sans engagement.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white text-primary hover:bg-white/90 font-bold text-lg h-14 px-10"
              onClick={() => window.open("https://wa.me/905324131143?text=Bonjour%2C%20je%20suis%20un%20patient%20fran%C3%A7ais%20int%C3%A9ress%C3%A9%20par%20l%27ESG", "_blank")}
              data-testid="button-cta-whatsapp-fr"
            >
              <Phone className="w-5 h-5 mr-2" />
              WhatsApp : +90 532 413 1143
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white/30 text-white hover:bg-white/10 font-bold text-lg h-14 px-10"
              onClick={() => window.open("mailto:drmuratustun@gmail.com?subject=Demande%20ESG%20depuis%20la%20France", "_blank")}
              data-testid="button-cta-email-fr"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Envoyer un e-mail
            </Button>
          </div>
          <p className="text-white/50 mt-6 text-sm">
            E-mail : <a href="mailto:drmuratustun@gmail.com" className="text-white/70 hover:text-white underline">drmuratustun@gmail.com</a>
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}

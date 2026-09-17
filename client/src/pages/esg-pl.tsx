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

const plFaqs = [
  {
    question: "Czy ESG jest dostępne w ramach NFZ w Polsce?",
    answer: "Endoskopowa gastroplastyka rękawowa nie jest obecnie dostępna w ramach NFZ. Prywatne kliniki w Polsce oferują zabieg w cenach 25 000–50 000 PLN. W Istanbul Bariatric Center pakiet all-inclusive kosztuje € 6 450 (~28 000 PLN) — obejmuje zabieg, szpital z akredytacją JCI, hotel, transfer VIP i 12-miesięczną opiekę dietetyczną.",
  },
  {
    question: "Jak długo trwa pobyt w Stambule?",
    answer: "Większość polskich pacjentów przebywa w Stambule 3-4 dni. Przylatujesz dzień przed zabiegiem, ESG wykonywane jest następnego dnia, trzeciego dnia odpoczywasz w hotelu, a czwartego wracasz do Polski. Bezpośrednie loty z Warszawy, Krakowa, Wrocławia i Gdańska (~2,5–3 godziny).",
  },
  {
    question: "Czy zabieg jest bolesny?",
    answer: "ESG wykonywane jest w znieczuleniu ogólnym — podczas zabiegu nie czujesz nic. Po przebudzeniu możesz odczuwać lekki dyskomfort, nudności lub uczucie ciężkości w żołądku. Te objawy zwykle ustępują w ciągu 1-3 dni i są dobrze kontrolowane lekami. W porównaniu z tradycyjną operacją rekonwalescencja jest znacznie łagodniejsza.",
  },
  {
    question: "Czy wyniki są trwałe?",
    answer: "Tak, przy odpowiednim stylu życia. ESG powoduje fizyczne zmniejszenie objętości żołądka — to trwała zmiana strukturalna. Aby utrzymać efekty, ważne jest przestrzeganie planu dietetycznego, regularna aktywność fizyczna i uczestnictwo w konsultacjach kontrolnych. Nasz 12-miesięczny program żywieniowy z wykwalifikowanym dietetykiem jest wliczony w cenę każdego pakietu.",
  },
  {
    question: "Czym ESG różni się od Ozempic/Wegovy?",
    answer: "Leki GLP-1 takie jak Ozempic i Wegovy mogą być skuteczne na początku, ale wielu pacjentów wraca do poprzedniej wagi po zakończeniu terapii. Miesięczne koszty (400-800 PLN/miesiąc) szybko się kumulują. ESG to jednorazowe rozwiązanie — fizyczna redukcja żołądka bez powtarzających się kosztów.",
  },
  {
    question: "Jakie BMI jest wymagane do ESG?",
    answer: "ESG jest zalecane dla pacjentów z BMI od 30 do 40. Zabieg jest szczególnie odpowiedni dla osób, u których diety i ćwiczenia nie przyniosły trwałych rezultatów, które nie chcą przechodzić inwazyjnej operacji lub preferują metodę minimalnie inwazyjną z krótkim czasem rekonwalescencji.",
  },
  {
    question: "Czy leczenie za granicą jest bezpieczne?",
    answer: "Istanbul Bariatric Center działa w Liv Hospital z akredytacją JCI (Joint Commission International) — międzynarodowym złotym standardem bezpieczeństwa pacjenta. Dr Murat Üstün przeprowadził tysiące zabiegów ESG z doskonałymi wynikami bezpieczeństwa. Oferujemy takie same — lub wyższe — standardy jakości jak najlepsze prywatne kliniki w Polsce.",
  },
  {
    question: "Co obejmuje pakiet all-inclusive?",
    answer: "Nasz pakiet ESG za € 6 450 obejmuje: pełną procedurę ESG, pobyt w szpitalu z akredytacją JCI, badania przedoperacyjne, transfer VIP z lotniska, zakwaterowanie w hotelu, leki pooperacyjne, wykwalifikowane wsparcie dietetyczne przez 12 miesięcy i regularne konsultacje kontrolne. Bez ukrytych kosztów.",
  },
];

const journeySteps = [
  {
    step: 1,
    title: "Bezpłatna konsultacja online",
    desc: "Skontaktuj się z nami przez WhatsApp lub stronę internetową. Nasz zespół oceni Twoje BMI, historię medyczną i cele, aby potwierdzić kwalifikację do ESG.",
    icon: MessageCircle,
  },
  {
    step: 2,
    title: "Podróż do Turcji",
    desc: "Wybierz datę — my organizujemy resztę. Bezpośrednie loty z Warszawy, Krakowa, Wrocławia i Gdańska (~2,5-3 godziny).",
    icon: Plane,
  },
  {
    step: 3,
    title: "Transfer VIP i hotel",
    desc: "Prywatny kierowca odbierze Cię z lotniska w Stambule i zawiezie do hotelu. Zamelduj się i przygotuj na jutrzejszy dzień.",
    icon: Hotel,
  },
  {
    step: 4,
    title: "Badania przedoperacyjne",
    desc: "Pełna morfologia krwi i badania w szpitalu. Osobiste spotkanie z Dr. Muratem Üstünem i zespołem medycznym.",
    icon: Stethoscope,
  },
  {
    step: 5,
    title: "Zabieg ESG",
    desc: "ESG wykonywane w znieczuleniu ogólnym w Liv Hospital (JCI). Czas trwania: 60-90 minut. Bez cięć, bez blizn.",
    icon: HeartPulse,
  },
  {
    step: 6,
    title: "Rekonwalescencja i powrót",
    desc: "Odpoczynek w hotelu z ciągłą opieką medyczną. Większość pacjentów wraca do Polski w ciągu 2-3 dni po zabiegu.",
    icon: Plane,
  },
];

const comparisonMeds = [
  { factor: "Długotrwałość efektu", meds: "Ograniczona — waga często wraca po odstawieniu", esg: "Trwała — fizyczne zmniejszenie żołądka" },
  { factor: "Skutki uboczne", meds: "Częste (nudności, biegunka, ryzyko zapalenia trzustki)", esg: "Minimalne (lekki dyskomfort 1-3 dni)" },
  { factor: "Koszt", meds: "Stały: 400-800 PLN/miesiąc (5 000-10 000 PLN/rok)", esg: "Jednorazowy: € 6 450 all-inclusive (~28 000 PLN)" },
  { factor: "Powrót wagi", meds: "Częsty po zakończeniu terapii", esg: "Ograniczony przy zdrowym stylu życia" },
  { factor: "Zabieg", meds: "Nie — cotygodniowe/codzienne zastrzyki", esg: "Tak — jeden zabieg endoskopowy (60-90 min)" },
];

const comparisonSurgery = [
  { feature: "Typ zabiegu", esg: "Endoskopowy (przez usta)", sleeve: "Laparoskopowy (4-5 cięć)" },
  { feature: "Znieczulenie", esg: "Ogólne", sleeve: "Ogólne" },
  { feature: "Czas trwania", esg: "60-90 minut", sleeve: "~60 minut" },
  { feature: "Pobyt w szpitalu", esg: "Tego samego dnia lub 1 noc", sleeve: "2-3 noce" },
  { feature: "Rekonwalescencja", esg: "1-3 dni", sleeve: "2-3 tygodnie" },
  { feature: "Blizny", esg: "Brak", sleeve: "4-5 małych" },
  { feature: "Utrata wagi", esg: "15-20% masy ciała", sleeve: "60-70% nadwagi" },
  { feature: "Odwracalność", esg: "Potencjalnie odwracalna", sleeve: "Trwała (tkanka żołądka usunięta)" },
  { feature: "Profil ryzyka", esg: "Bardzo niski", sleeve: "Niski" },
];

const plTestimonials = [
  {
    name: "Katarzyna W.",
    location: "Warszawa",
    text: "Po latach nieskutecznych diet i Ozempic, które dawało tylko tymczasowe efekty, zdecydowałam się na ESG. Zespół Istanbul Bariatric Center był niesamowicie profesjonalny. W 5 miesięcy schudłam 17 kg. W końcu czuję się wolna od efektu jo-jo.",
    weight: "−17 kg",
    time: "5 miesięcy",
  },
  {
    name: "Marcin K.",
    location: "Kraków",
    text: "Początkowo miałem obawy przed leczeniem za granicą, ale Liv Hospital przeszedł moje najśmielsze oczekiwania. Dr Murat to wybitny specjalista, a cena była ułamkiem tego, co zapłaciłbym w Polsce. Schudłem 22 kg i czuję się świetnie.",
    weight: "−22 kg",
    time: "6 miesięcy",
  },
  {
    name: "Agnieszka D.",
    location: "Wrocław",
    text: "Od transferu z lotniska po wsparcie dietetyczne — wszystko było perfekcyjnie zorganizowane. Nigdy nie sądziłam, że efekty przyjdą tak szybko. 12-miesięczny program pomógł mi trwale zmienić nawyki żywieniowe. Polecam z całego serca!",
    weight: "−15 kg",
    time: "4 miesiące",
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
    if (bmi < 18.5) return { label: "Niedowaga", color: "text-blue-600", eligible: false };
    if (bmi < 25) return { label: "Waga prawidłowa", color: "text-green-600", eligible: false };
    if (bmi < 30) return { label: "Nadwaga", color: "text-yellow-600", eligible: false };
    if (bmi < 35) return { label: "Otyłość (I stopień)", color: "text-orange-600", eligible: true };
    if (bmi < 40) return { label: "Otyłość (II stopień)", color: "text-red-500", eligible: true };
    return { label: "Otyłość ciężka (III stopień)", color: "text-red-700", eligible: false, surgical: true };
  };

  return (
    <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-200" data-testid="bmi-calculator-pl">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
          <Calculator className="w-6 h-6 text-primary" />
        </div>
        <div>
          <h3 className="text-xl font-bold text-slate-900">Czy ESG jest dla mnie?</h3>
          <p className="text-sm text-slate-500">Oblicz swoje BMI i sprawdź kwalifikację</p>
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-4 mb-4">
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">Wzrost (cm)</label>
          <input type="number" value={height} onChange={(e) => setHeight(e.target.value)} placeholder="np. 175" className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none" data-testid="input-height-pl" />
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">Waga (kg)</label>
          <input type="number" value={weight} onChange={(e) => setWeight(e.target.value)} placeholder="np. 100" className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none" data-testid="input-weight-pl" />
        </div>
      </div>

      <Button onClick={calculateBMI} className="w-full bg-primary hover:bg-primary/90 h-12" data-testid="button-calculate-bmi-pl">
        Oblicz BMI
      </Button>

      {bmi !== null && (
        <div className="mt-6 p-4 rounded-xl bg-slate-50 border border-slate-200" data-testid="bmi-result-pl">
          <div className="text-center mb-3">
            <span className="text-4xl font-bold text-primary">{bmi}</span>
            <p className={`text-lg font-semibold ${getBMICategory(bmi).color}`}>{getBMICategory(bmi).label}</p>
          </div>
          {getBMICategory(bmi).eligible ? (
            <div className="bg-green-50 border border-green-200 rounded-lg p-3 text-center">
              <p className="text-green-800 font-medium">Możesz być dobrym kandydatem do ESG!</p>
              <p className="text-green-600 text-sm mt-1">Skontaktuj się z nami po bezpłatną konsultację.</p>
            </div>
          ) : getBMICategory(bmi).surgical ? (
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 text-center">
              <p className="text-blue-800 font-medium">Chirurgia bariatryczna może być bardziej odpowiednia.</p>
              <p className="text-blue-600 text-sm mt-1"><Link href="/treatments" className="underline">Zobacz wszystkie opcje leczenia</Link></p>
            </div>
          ) : (
            <div className="bg-slate-100 border border-slate-200 rounded-lg p-3 text-center">
              <p className="text-slate-700 font-medium">ESG jest zwykle zalecane przy BMI od 30 do 40.</p>
              <p className="text-slate-500 text-sm mt-1">Skontaktuj się z nami, aby omówić Twoje opcje.</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

function FAQAccordion({ faqs }: { faqs: typeof plFaqs }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="space-y-3" data-testid="faq-accordion-pl">
      {faqs.map((faq, i) => (
        <div key={i} className={`rounded-xl border transition-all duration-200 ${openIndex === i ? "border-primary/30 bg-white shadow-md" : "border-slate-200 bg-white hover:border-slate-300"}`} data-testid={`faq-item-pl-${i}`}>
          <button className="w-full flex items-center justify-between p-5 text-left" onClick={() => setOpenIndex(openIndex === i ? null : i)} data-testid={`button-faq-pl-${i}`}>
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

export default function ESGPoland() {
  const plFlag = "🇵🇱";
  const trFlag = "🇹🇷";

  const esgPLSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalProcedure",
    "name": "Endoskopowa Gastroplastyka Rękawowa dla pacjentów z Polski",
    "alternateName": ["ESG Polska", "ESG Turcja", "Odchudzanie bez operacji", "Gastroplastyka endoskopowa"],
    "description": "Endoskopowa Gastroplastyka Rękawowa (ESG) dla pacjentów z Polski w Istanbul Bariatric Center. Zmniejszenie żołądka bez operacji. Pakiet all-inclusive € 6 450. Szpital z akredytacją JCI.",
    "procedureType": "Endoscopic",
    "bodyLocation": "Stomach",
    "relevantSpecialty": { "@type": "MedicalSpecialty", "name": "Bariatric Surgery" },
    "offers": [
      { "@type": "Offer", "name": "ESG Pakiet All-Inclusive", "price": "6450", "priceCurrency": "EUR", "description": "Pełna procedura ESG, szpital JCI, hotel, transfer VIP, badania, leki, 12 miesięcy wsparcia dietetycznego" }
    ]
  };

  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="ESG Turcja dla pacjentów z Polski | Odchudzanie bez operacji | € 6 450 all-inclusive"
        description="ESG bez chirurgii dla pacjentów z Polski. All-inclusive € 6 450 w szpitalu z akredytacją JCI w Stambule. Bezpłatna konsultacja."
        keywords="ESG Polska, odchudzanie bez operacji, gastroplastyka Turcja, alternatywa Ozempic, redukcja wagi, zmniejszenie żołądka bez operacji, ESG cena, chirurgia bariatryczna Turcja"
        url="/esg/pl"
      />
      <JsonLd data={esgPLSchema} />
      <JsonLd data={structuredData.createFAQ(plFaqs)} />
      <JsonLd data={structuredData.createBreadcrumb([
        { name: "Home", url: "/" },
        { name: "Treatments", url: "/treatments" },
        { name: "ESG", url: "/esg" },
        { name: "ESG dla pacjentów z Polski", url: "/esg/pl" },
      ])} />
      <Navbar />

      {/* Hero */}
      <section className="relative bg-slate-900 text-white pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-primary/30 opacity-90" />
        <div className="absolute inset-0 opacity-15" style={{ backgroundImage: "url('/esg-pl-hero.webp')", backgroundSize: "cover", backgroundPosition: "center" }} />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center gap-3 mb-6">
              <span className="text-4xl">{plFlag}</span>
              <Badge variant="outline" className="border-white/30 text-white/90 text-sm px-4 py-1">Dedykowane dla pacjentów z Polski</Badge>
              <span className="text-4xl">{trFlag}</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight" data-testid="heading-esg-pl-hero">
              Endoskopowa Gastroplastyka Rękawowa (ESG) — Odchudzanie bez operacji w Turcji
            </h1>
            <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto mb-8 leading-relaxed">
              Utrata wagi i utrzymanie efektów to ogromne wyzwanie — nawet z dietami, ćwiczeniami i lekami jak Ozempic czy Wegovy. ESG to nowoczesna, naukowo potwierdzona metoda odchudzania bez chirurgii. Pakiet all-inclusive od € 6 450.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary hover:bg-primary/90 font-bold text-lg h-14 px-8" onClick={() => window.open("https://wa.me/905324131143?text=Dzie%C5%84%20dobry%2C%20jestem%20z%20Polski%20i%20interesuj%C4%99%20si%C4%99%20zabiegiem%20ESG", "_blank")} data-testid="button-hero-whatsapp-pl">
                <Phone className="w-5 h-5 mr-2" />Bezpłatna konsultacja
              </Button>
              <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 font-bold text-lg h-14 px-8" onClick={() => document.getElementById("bmi-section-pl")?.scrollIntoView({ behavior: "smooth" })} data-testid="button-hero-bmi-pl">
                <Calculator className="w-5 h-5 mr-2" />Czy to dla mnie?
              </Button>
            </div>
            <div className="flex flex-wrap gap-6 justify-center mt-10 text-sm text-slate-400">
              <span className="flex items-center gap-2"><ShieldCheck className="w-4 h-4" /> Szpital z akredytacją JCI</span>
              <span className="flex items-center gap-2"><Euro className="w-4 h-4" /> € 6 450 all-inclusive</span>
              <span className="flex items-center gap-2"><Clock className="w-4 h-4" /> Pobyt 3-4 dni</span>
              <span className="flex items-center gap-2"><Stethoscope className="w-4 h-4" /> 8 000+ udanych zabiegów</span>
            </div>
          </div>
        </div>
      </section>

      {/* Cena */}
      <section className="py-16 bg-gradient-to-b from-green-50 to-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-white rounded-2xl p-10 shadow-xl border-2 border-green-200 text-center" data-testid="card-pricing-pl">
            <Badge className="bg-green-100 text-green-800 hover:bg-green-100 text-sm mb-4">Przejrzysta cena</Badge>
            <h2 className="text-3xl font-bold text-slate-900 mb-2">Pakiet ESG All-Inclusive</h2>
            <div className="text-6xl font-bold text-primary my-4">€ 6 450</div>
            <p className="text-slate-500 text-lg mb-2">~28 000 PLN</p>
            <p className="text-slate-600 mb-8">Bez ukrytych kosztów. Wszystko w cenie.</p>
            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4 text-left">
              {[
                "Pełna procedura ESG",
                "Znieczulenie ogólne",
                "Szpital z akredytacją JCI",
                "Badania przedoperacyjne",
                "Transfer VIP z lotniska",
                "Zakwaterowanie w hotelu",
                "Leki pooperacyjne",
                "12 mies. wsparcia dietetycznego",
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2 text-sm">
                  <CheckCircle2 className="w-4 h-4 text-green-600 shrink-0" />
                  <span className="text-slate-700">{item}</span>
                </div>
              ))}
            </div>
            <Button className="mt-8 bg-primary hover:bg-primary/90 font-bold text-lg h-12 px-10" onClick={() => window.open("https://wa.me/905324131143?text=Dzie%C5%84%20dobry%2C%20interesuje%20mnie%20pakiet%20ESG%20%E2%82%AC%206%20450", "_blank")} data-testid="button-book-pl">
              Umów bezpłatną konsultację
            </Button>
          </div>
        </div>
      </section>

      {/* Czym jest ESG */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-slate-900">Czym jest Endoskopowa Gastroplastyka Rękawowa (ESG)?</h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                ESG to innowacyjny zabieg polegający na <strong>zmniejszeniu objętości żołądka bez chirurgii</strong>. Przez usta wprowadzany jest endoskop, za pomocą którego zakładane są wewnętrzne szwy zmniejszające objętość żołądka o 70-80%. W odróżnieniu od tradycyjnej <Link href="/sleeve-gastrectomy" className="text-primary hover:underline">resekcji rękawowej</Link> nie wykonuje się żadnych cięć, nie usuwa się tkanki żołądka, a rekonwalescencja jest znacznie krótsza.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed">
                Zabieg wykorzystuje technologię Apollo OverStitch — zaawansowany endoskopowy system szycia — do tworzenia trwałych fałdów w ścianie żołądka. Efekt: szybsze uczucie sytości i naturalne zmniejszenie spożycia pokarmu. Procedura trwa 60-90 minut w znieczuleniu ogólnym.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed">
                Dla polskich pacjentów ESG wypełnia ważną lukę — pomiędzy zmianami stylu życia, które nie przyniosły efektów, a inwazyjną operacją, na którą nie są gotowi.
              </p>
              <div className="grid grid-cols-3 gap-4 pt-4">
                <div className="text-center p-4 bg-primary/5 rounded-xl">
                  <div className="text-2xl font-bold text-primary">60-90</div>
                  <p className="text-sm text-slate-600 mt-1">minut</p>
                </div>
                <div className="text-center p-4 bg-primary/5 rounded-xl">
                  <div className="text-2xl font-bold text-primary">Brak</div>
                  <p className="text-sm text-slate-600 mt-1">cięć</p>
                </div>
                <div className="text-center p-4 bg-primary/5 rounded-xl">
                  <div className="text-2xl font-bold text-primary">1-3</div>
                  <p className="text-sm text-slate-600 mt-1">dni rekonwalescencji</p>
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <img src="/esg-procedure-cdn.webp" alt="Procedura ESG — Endoskopowa Gastroplastyka Rękawowa" className="rounded-2xl shadow-xl max-w-md w-full" width="400" height="400" loading="lazy" />
            </div>
          </div>
        </div>
      </section>

      {/* Dlaczego Turcja */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">{plFlag} Dlaczego polscy pacjenci wybierają ESG w Turcji</h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">Coraz więcej Polaków wybiera Stambuł na zabieg bariatryczny — ze względu na doświadczenie, cenę i dostępność.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-200 hover:shadow-md transition-shadow" data-testid="card-pl-reason-experience">
              <div className="w-14 h-14 rounded-full bg-blue-50 flex items-center justify-center mb-5"><Award className="w-7 h-7 text-blue-600" /></div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Doświadczenie i standardy</h3>
              <p className="text-slate-600 leading-relaxed">Turcja jest światowym liderem w chirurgii bariatrycznej. Nowoczesne szpitale z akredytacją JCI, doświadczeni specjaliści i międzynarodowe standardy opieki. Dr Murat Üstün wykonał tysiące zabiegów ESG z doskonałymi wynikami.</p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-200 hover:shadow-md transition-shadow" data-testid="card-pl-reason-cost">
              <div className="w-14 h-14 rounded-full bg-green-50 flex items-center justify-center mb-5"><Euro className="w-7 h-7 text-green-600" /></div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Oszczędności finansowe</h3>
              <p className="text-slate-600 leading-relaxed">W Polsce prywatne kliniki pobierają <strong>25 000–50 000 PLN</strong> za ESG. Nasz pakiet all-inclusive to <strong>€ 6 450 (~28 000 PLN)</strong> — z procedurą, szpitalem JCI, hotelem, transferem i 12-miesięcznym wsparciem dietetycznym.</p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-200 hover:shadow-md transition-shadow" data-testid="card-pl-reason-access">
              <div className="w-14 h-14 rounded-full bg-orange-50 flex items-center justify-center mb-5"><Clock className="w-7 h-7 text-orange-600" /></div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Szybki dostęp</h3>
              <p className="text-slate-600 leading-relaxed">Bez długich kolejek. Szybka konsultacja, elastyczne terminy i pełne leczenie w 3-4 dni. Bezpośrednie loty z Warszawy, Krakowa, Wrocławia i Gdańska (~2,5-3 godziny).</p>
            </div>
          </div>
        </div>
      </section>

      {/* ESG vs leki */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">ESG vs leki odchudzające</h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">Wielu pacjentów w Polsce zaczyna od leków GLP-1 jak Ozempic czy Wegovy. ESG może być następnym krokiem, gdy leczenie farmakologiczne nie daje wystarczających rezultatów.</p>
          </div>
          <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-sm">
            <table className="w-full text-left" data-testid="table-esg-vs-meds-pl">
              <thead>
                <tr className="bg-slate-900 text-white">
                  <th className="p-4 font-semibold text-sm uppercase tracking-wider">Czynnik</th>
                  <th className="p-4 font-semibold text-sm uppercase tracking-wider">Ozempic / Wegovy</th>
                  <th className="p-4 font-semibold text-sm uppercase tracking-wider bg-primary/90">ESG</th>
                </tr>
              </thead>
              <tbody>
                {comparisonMeds.map((row, i) => (
                  <tr key={i} className={`border-b border-slate-100 ${i % 2 === 0 ? "bg-white" : "bg-slate-50/50"}`} data-testid={`row-meds-pl-${i}`}>
                    <td className="p-4 font-medium text-slate-900">{row.factor}</td>
                    <td className="p-4 text-slate-700">{row.meds}</td>
                    <td className="p-4 text-slate-700 bg-primary/5 font-medium">{row.esg}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-sm text-slate-500 mt-4 text-center">ESG to jednorazowa fizyczna redukcja żołądka — bez stałych kosztów leków.</p>
        </div>
      </section>

      {/* ESG vs chirurgia */}
      <section className="py-20 bg-blue-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">ESG vs chirurgiczna resekcja żołądka</h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">Porównanie ESG z tradycyjną <Link href="/sleeve-gastrectomy" className="text-primary hover:underline">resekcją rękawową żołądka</Link>.</p>
          </div>
          <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-sm">
            <table className="w-full text-left" data-testid="table-esg-vs-sleeve-pl">
              <thead>
                <tr className="bg-slate-900 text-white">
                  <th className="p-4 font-semibold text-sm uppercase tracking-wider">Cecha</th>
                  <th className="p-4 font-semibold text-sm uppercase tracking-wider bg-primary/90">ESG</th>
                  <th className="p-4 font-semibold text-sm uppercase tracking-wider">Gastric Sleeve</th>
                </tr>
              </thead>
              <tbody>
                {comparisonSurgery.map((row, i) => (
                  <tr key={i} className={`border-b border-slate-100 ${i % 2 === 0 ? "bg-white" : "bg-slate-50/50"}`} data-testid={`row-sleeve-pl-${i}`}>
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

      {/* Dlaczego my */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold mb-4">Dlaczego Istanbul Bariatric Center?</h2>
            <p className="text-lg text-slate-300 max-w-3xl mx-auto">Łączymy medyczną doskonałość z kompleksową opieką dostosowaną do pacjentów z Polski i całej Europy.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Stethoscope, title: "Dr Murat Üstün", desc: "Pionier ESG w Turcji. Tysiące udanych zabiegów bariatrycznych. Uznanie międzynarodowe." },
              { icon: ShieldCheck, title: "Szpital z akredytacją JCI", desc: "Wszystkie zabiegi w Liv Hospital — ze złotym standardem międzynarodowej akredytacji JCI." },
              { icon: Users, title: "Opieka międzynarodowa", desc: "Dedykowany zespół dla pacjentów zagranicznych. Przejrzysta komunikacja, jasne ceny, zorganizowana opieka." },
              { icon: Euro, title: "€ 6 450 all-inclusive", desc: "Bez ukrytych kosztów. Zabieg, szpital, hotel, transfer, badania, 12 mies. wsparcia dietetycznego." },
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <div key={i} className="bg-white/10 backdrop-blur rounded-xl p-6 text-center" data-testid={`card-pl-ibc-${i}`}>
                  <div className="w-14 h-14 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4"><Icon className="w-7 h-7 text-primary" /></div>
                  <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                  <p className="text-slate-300 text-sm">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Proces leczenia */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Twój proces leczenia — krok po kroku</h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">Od pierwszego kontaktu do powrotu do domu — zajmujemy się każdym szczegółem.</p>
          </div>
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-primary/20 hidden md:block" />
            <div className="space-y-8">
              {journeySteps.map((step) => {
                const Icon = step.icon;
                return (
                  <div key={step.step} className="relative flex gap-6" data-testid={`step-journey-pl-${step.step}`}>
                    <div className="relative z-10 shrink-0">
                      <div className="w-16 h-16 rounded-full bg-primary text-white flex items-center justify-center shadow-lg"><Icon className="w-7 h-7" /></div>
                    </div>
                    <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200 flex-1 hover:shadow-md transition-shadow">
                      <div className="flex items-center gap-3 mb-2">
                        <Badge variant="outline" className="text-primary border-primary/30">Krok {step.step}</Badge>
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
              <img src="/esg-pl-istanbul.webp" alt="Stambuł — turystyka medyczna z Polski" className="rounded-2xl shadow-xl w-full" width="600" height="400" loading="lazy" />
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-slate-900">Komfort i najwyższa jakość obsługi</h2>
              <p className="text-lg text-slate-600 leading-relaxed">Twoje samopoczucie jest naszym najwyższym priorytetem — od momentu lądowania w Stambule. Transfer VIP, komfortowy hotel i Liv Hospital z najnowszym wyposażeniem medycznym — wszystko koordynowane przez nasz zespół.</p>
              <p className="text-lg text-slate-600 leading-relaxed">Wielu naszych polskich pacjentów opisuje swoje doświadczenie jako lepsze niż w prywatnych klinikach w kraju — zarówno pod względem jakości medycznej, jak i organizacji całego pobytu.</p>
              <div className="flex flex-wrap gap-3">
                {["Transfer VIP z lotniska", "Komfortowy hotel", "Liv Hospital (JCI)", "Wsparcie 24/7", "Kontakt WhatsApp"].map((tag) => (
                  <Badge key={tag} className="bg-primary/10 text-primary hover:bg-primary/10 px-3 py-1">{tag}</Badge>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Wyniki */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Oczekiwane wyniki ESG</h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">ESG zapewnia mierzalną i trwałą utratę wagi — szczególnie w połączeniu z naszym programem opieki pooperacyjnej.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="bg-primary text-white rounded-2xl p-8 text-center" data-testid="stat-weight-loss-pl">
              <TrendingDown className="w-10 h-10 mx-auto mb-3 opacity-80" />
              <div className="text-4xl font-bold mb-2">15-20%</div>
              <p className="text-white/80">Utrata masy ciała</p>
              <p className="text-sm text-white/60 mt-2">W ciągu 12-18 miesięcy</p>
            </div>
            <div className="bg-primary text-white rounded-2xl p-8 text-center" data-testid="stat-bmi-38-pl">
              <Activity className="w-10 h-10 mx-auto mb-3 opacity-80" />
              <div className="text-4xl font-bold mb-2">~20 kg</div>
              <p className="text-white/80">Średnia (BMI 38+)</p>
              <p className="text-sm text-white/60 mt-2">Pierwsze 6 miesięcy</p>
            </div>
            <div className="bg-primary text-white rounded-2xl p-8 text-center" data-testid="stat-health-pl">
              <HeartPulse className="w-10 h-10 mx-auto mb-3 opacity-80" />
              <div className="text-4xl font-bold mb-2">Znacząca</div>
              <p className="text-white/80">Poprawa zdrowia</p>
              <p className="text-sm text-white/60 mt-2">Cukrzyca, ciśnienie, bezdech senny</p>
            </div>
          </div>
          <div className="p-6 bg-blue-50 rounded-xl border border-blue-100">
            <p className="text-slate-700 leading-relaxed">Wyniki zależą od Twojego zaangażowania — przestrzegania diety, regularnej aktywności fizycznej i udziału w konsultacjach kontrolnych. Nasz 12-miesięczny program z wykwalifikowanym dietetykiem jest wliczony w każdy pakiet. <Link href="/results" className="text-primary hover:underline font-medium">Zobacz historie sukcesu naszych pacjentów</Link>.</p>
          </div>
        </div>
      </section>

      {/* Opinie */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">{plFlag} Opinie polskich pacjentów</h2>
            <p className="text-lg text-slate-600">Prawdziwe historie pacjentów z Polski, którzy wybrali ESG w Istanbul Bariatric Center.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {plTestimonials.map((t, i) => (
              <div key={i} className="bg-white rounded-2xl p-8 shadow-sm border border-slate-200" data-testid={`testimonial-pl-${i}`}>
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
      <section className="py-20" id="bmi-section-pl">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-start max-w-6xl mx-auto">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-slate-900">Kto jest kandydatem do ESG?</h2>
              <p className="text-lg text-slate-600 leading-relaxed">ESG jest przeznaczone dla osób zmagających się z otyłością, które szukają rozwiązania pomiędzy zmianą stylu życia a dużą operacją. Możesz być kandydatem, jeśli:</p>
              <div className="space-y-3">
                {[
                  "Twoje BMI wynosi od 30 do 40",
                  "Diety i ćwiczenia nie przyniosły trwałych rezultatów",
                  "Nie chcesz przechodzić inwazyjnej operacji",
                  "Leki okazały się niewystarczające lub zbyt kosztowne",
                  "Preferujesz metodę minimalnie inwazyjną z krótką rekonwalescencją",
                  "Cierpisz na schorzenia związane z otyłością (cukrzyca typu 2, nadciśnienie, bezdech senny)",
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

      {/* Bezpieczeństwo */}
      <section className="py-20 bg-green-50">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-slate-900">Bezpieczeństwo i standardy jakości</h2>
              <p className="text-lg text-slate-600 leading-relaxed">ESG jest uważana za jedną z najbezpieczniejszych procedur odchudzających, gdy jest wykonywana przez doświadczonych specjalistów w akredytowanym ośrodku. Dr Murat Üstün przeprowadził tysiące zabiegów ESG z doskonałymi wynikami bezpieczeństwa w szpitalu Liv Hospital z akredytacją JCI.</p>
              <div className="space-y-3">
                {[
                  "Szpital z akredytacją JCI (międzynarodowy złoty standard)",
                  "Certyfikowany chirurg z tysiącami zabiegów ESG",
                  "Zaawansowana technika szycia (Apollo OverStitch)",
                  "Pełna przedoperacyjna kontrola zdrowia",
                  "Opieka medyczna 24/7 po zabiegu",
                  "Kompletne protokoły medyczne i ubezpieczenia",
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <ShieldCheck className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
                    <p className="text-slate-700">{item}</p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <img src="/esg-pl-consultation.webp" alt="Konsultacja medyczna dla polskich pacjentów" className="rounded-2xl shadow-xl w-full" width="600" height="400" loading="lazy" />
            </div>
          </div>
        </div>
      </section>

      {/* Po zabiegu */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-slate-900 mb-4 text-center">Życie po ESG</h2>
          <p className="text-lg text-slate-600 text-center mb-12 max-w-3xl mx-auto">Zabieg to dopiero początek. Oto jak wygląda rekonwalescencja i przejście na nowy sposób odżywiania.</p>
          <div className="space-y-4">
            {[
              { phase: "Pierwsze 8 godzin", desc: "Wyłącznie klarowne płyny. Odpoczynek i rekonwalescencja pod opieką medyczną.", icon: "🏥", color: "border-red-200 bg-red-50" },
              { phase: "Tydzień 1-2", desc: "Dieta płynna — koktajle proteinowe, bulion, woda. Żołądek goi się i adaptuje.", icon: "🥤", color: "border-orange-200 bg-orange-50" },
              { phase: "Tydzień 3-6", desc: "Stopniowe wprowadzanie pokarmów półstałych. Purée i miękkie proteiny.", icon: "🥣", color: "border-yellow-200 bg-yellow-50" },
              { phase: "Od 7. tygodnia", desc: "Przejście do zdrowej diety stałej. Nacisk na pokarmy bogate w białko i zbilansowaną dietę.", icon: "🥗", color: "border-green-200 bg-green-50" },
              { phase: "Miesiąc 3-12", desc: "Bieżące wsparcie dietetyczne z regularnymi konsultacjami oceniającymi postępy.", icon: "📊", color: "border-blue-200 bg-blue-50" },
            ].map((phase, i) => (
              <div key={i} className={`flex items-start gap-5 p-6 rounded-xl border ${phase.color}`} data-testid={`phase-aftercare-pl-${i}`}>
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
                <h4 className="font-bold text-slate-900 mb-2">12 miesięcy wsparcia dietetycznego w cenie</h4>
                <p className="text-slate-600 leading-relaxed">Każdy pakiet ESG obejmuje dostęp do wykwalifikowanego dietetyka, który przygotuje indywidualny plan żywieniowy, zaplanuje regularne konsultacje i będzie towarzyszyć Ci przez cały pierwszy rok.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dlaczego Turcja */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">{trFlag} Dlaczego Turcja w turystyce medycznej?</h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">Turcja jest jednym z najważniejszych centrów turystyki medycznej na świecie.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Award, title: "Globalne centrum medyczne", desc: "Turcja przyjmuje ponad milion międzynarodowych pacjentów medycznych rocznie. Szpitale z akredytacją JCI w całym Stambule." },
              { icon: Stethoscope, title: "Wysoko wykwalifikowani lekarze", desc: "Tureccy chirurdzy bariatryczni należą do najdoświadczonych na świecie — wielu kształconych międzynarodowo i będących członkami IFSO." },
              { icon: Euro, title: "Konkurencyjne ceny", desc: "Opieka medyczna najwyższej jakości za ułamek polskich cen — bez kompromisów w zakresie jakości czy bezpieczeństwa." },
              { icon: Plane, title: "Łatwy dojazd", desc: "Bezpośrednie loty z Warszawy, Krakowa, Wrocławia i Gdańska. Czas lotu: ~2,5-3 godziny." },
              { icon: MapPin, title: "Stambuł — światowa metropolia", desc: "Dynamiczne, nowoczesne miasto na granicy Europy i Azji. Bezpieczne, dobrze skomunikowane i gościnne." },
              { icon: ShieldCheck, title: "Międzynarodowe standardy", desc: "Liczne szpitale z akredytacją JCI, ścisły nadzór i dedykowana infrastruktura dla turystyki medycznej." },
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <div key={i} className="bg-white rounded-xl p-6 shadow-sm border border-slate-200" data-testid={`card-turkey-reason-pl-${i}`}>
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
      <section className="py-20" data-testid="section-faq-pl">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Najczęściej zadawane pytania — ESG dla pacjentów z Polski</h2>
            <p className="text-lg text-slate-600">Wszystko, co musisz wiedzieć przed podróżą do Stambułu.</p>
          </div>
          <FAQAccordion faqs={plFaqs} />
        </div>
      </section>

      {/* Linki wewnętrzne */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-2xl font-bold text-slate-900 mb-8 text-center">Poznaj inne opcje leczenia</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { title: "ESG — pełne informacje", href: "/esg", desc: "Szczegóły procedury" },
              { title: "Sleeve Gastrectomy", href: "/sleeve-gastrectomy", desc: "Najpopularniejsza operacja bariatryczna" },
              { title: "Mini Gastric Bypass", href: "/mini-gastric-bypass", desc: "Procedura łączona" },
              { title: "Balon żołądkowy", href: "/gastric-balloon-turkey", desc: "Alternatywa niechirurgiczna" },
              { title: "Wszystkie zabiegi", href: "/treatments", desc: "Porównanie i ceny" },
              { title: "Wyniki", href: "/results", desc: "Historie sukcesu pacjentów" },
              { title: "O nas", href: "/about", desc: "Dr Murat Üstün i zespół" },
              { title: "Kontakt", href: "/contact", desc: "Porozmawiaj z naszym zespołem" },
            ].map((link, i) => (
              <Link key={i} href={link.href} className="flex items-center gap-3 p-4 bg-white rounded-xl border border-slate-200 hover:border-primary/30 hover:shadow-sm transition-all group" data-testid={`link-internal-pl-${i}`}>
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
      <section className="py-20 bg-primary text-white" data-testid="section-cta-pl">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <span className="text-5xl mb-6 block">{plFlag}</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Zrób pierwszy krok już dziś</h2>
          <p className="text-xl text-white/80 mb-4 leading-relaxed">Jeśli szukasz bezpiecznej i skutecznej alternatywy dla operacji, Endoskopowa Gastroplastyka Rękawowa może być idealnym rozwiązaniem.</p>
          <p className="text-lg text-white/70 mb-8">Skontaktuj się z nami po bezpłatną konsultację online. Ocenimy Twoją kwalifikację, odpowiemy na wszystkie pytania i przygotujemy indywidualny plan leczenia — bez zobowiązań.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-primary hover:bg-white/90 font-bold text-lg h-14 px-10" onClick={() => window.open("https://wa.me/905324131143?text=Dzie%C5%84%20dobry%2C%20jestem%20z%20Polski%20i%20interesuj%C4%99%20si%C4%99%20zabiegiem%20ESG", "_blank")} data-testid="button-cta-whatsapp-pl">
              <Phone className="w-5 h-5 mr-2" />WhatsApp: +90 532 413 1143
            </Button>
            <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 font-bold text-lg h-14 px-10" onClick={() => window.open("mailto:drmuratustun@gmail.com?subject=Zapytanie%20ESG%20z%20Polski", "_blank")} data-testid="button-cta-email-pl">
              <MessageCircle className="w-5 h-5 mr-2" />Wyślij e-mail
            </Button>
          </div>
          <p className="text-white/50 mt-6 text-sm">E-mail: <a href="mailto:drmuratustun@gmail.com" className="text-white/70 hover:text-white underline">drmuratustun@gmail.com</a></p>
        </div>
      </section>

      <Footer />
    </div>
  );
}

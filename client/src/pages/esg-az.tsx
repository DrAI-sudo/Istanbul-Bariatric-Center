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

const azFaqs = [
  {
    question: "ESG Azərbaycan səhiyyə sistemində mövcuddurmu?",
    answer: "ESG hal-hazırda Azərbaycanda geniş yayılmamışdır. Özəl klinikalar nadir hallarda bunu təklif edir və xərclər çox yüksək ola bilər. Istanbul Bariatric Center-in hər şey daxil paketi € 6.450 (~11.900 AZN) — prosedur, JCI xəstəxanası, otel, VIP transfer və 12 aylıq dietoloq dəstəyi daxildir.",
  },
  {
    question: "İstanbulda nə qədər qalmalıyam?",
    answer: "Əksər azərbaycanlı xəstələr 3-4 gün qalır. Prosedurdan əvvəlki gün gəlmək, 2-ci gündə ESG, 3-cü gündə oteldə istirahət etmək və 4-cü gündə evə qayıtmaq. Bakı Heydər Əliyev Beynəlxalq Hava Limanından birbaşa uçuşlar (~3-3,5 saat).",
  },
  {
    question: "Prosedur ağrılıdırmı?",
    answer: "ESG ümumi anesteziya altında icra olunur — prosedur zamanı heç nə hiss etmirsiniz. Oyananda yüngül narahatlıq, ürəkbulanma və ya doluluq hiss edə bilərsiniz. Bu simptomlar adətən 1-3 gün ərzində keçər və dərmanlarla yaxşı idarə olunur.",
  },
  {
    question: "Nəticələr daimi olurmu?",
    answer: "Bəli, düzgün həyat tərzi ilə. ESG mədədə fiziki həcmin azalmasına səbəb olur — bu struktur dəyişikliyidir. Nəticələri saxlamaq üçün yemək planına riayət etmək, müntəzəm idman etmək və mütəmadi olaraq müayinə olunmaq vacibdir. Bizim 12 aylıq dietoloq proqramımız paketə daxildir.",
  },
  {
    question: "ESG ilə Ozempic/Wegovy arasında fərq nədir?",
    answer: "GLP-1 dərmanları, məsələn, Ozempic və Wegovy başlanğıcda effektiv ola bilər, lakin bir çox xəstə dayandıqdan sonra çəki qazanır. Davamlı aylıq xərclər tez bir zamanda yığılır. ESG bir dəfəlik həll təqdim edir — fiziki mədə azalması, təkrarlanan xərclər olmadan.",
  },
  {
    question: "ESG üçün hansı BMI tələb olunur?",
    answer: "ESG adətən BMI-si 30 ilə 40 arasında olan xəstələr üçün tövsiyə olunur. Pəhriz və idmanla davamlı nəticə əldə edə bilməyən, invaziv cərrahiyyə istəməyən və ya qısa bərpa müddəti ilə minimal invaziv yanaşmanı üstün tutanlar üçün idealdır.",
  },
  {
    question: "Xaricdə müalicə almaq təhlükəsizdirmi?",
    answer: "Istanbul Bariatric Center Liv Hospital-da fəaliyyət göstərir, bu da JCI (Joint Commission International) akkreditasiyasına malikdir — xəstə təhlükəsizliyi üçün beynəlxalq qızıl standart. Dr Murat Ustun minlərlə ESG proseduru icra edib və mükəmməl təhlükəsizlik rekorduna malikdir.",
  },
  {
    question: "Hər şey daxil paketə nələr daxildir?",
    answer: "Bizim ESG paketimiz € 6.450-a daxildir: tam prosedur, JCI akkreditasiyalı xəstəxanada qalma, əməliyyatdan əvvəlki testlər, VIP hava limanı transferi, otel yerləşməsi, əməliyyatdan sonrakı dərmanlar, 12 aylıq dietoloq dəstəyi və davamlı müayinə. Gizli xərclər yoxdur.",
  },
];

const journeySteps = [
  { step: 1, title: "Pulsuz onlayn konsultasiya", desc: "Bizimlə WhatsApp və ya veb sayt vasitəsilə əlaqə saxlayın. Komandamız sizin BMI, tibbi tarixçənizi və ESG uyğunluğunuz üçün məqsədlərinizi qiymətləndirəcək.", icon: MessageCircle },
  { step: 2, title: "Türkiyəyə səyahət", desc: "Tarixinizi seçin — qalanını biz təşkil edirik. Bakı Heydər Əliyev Hava Limanından birbaşa uçuşlar (~3-3,5 saat).", icon: Plane },
  { step: 3, title: "VIP transfer və otel", desc: "Şəxsi sürücü sizi İstanbul hava limanında qarşılayır və otelə aparır.", icon: Hotel },
  { step: 4, title: "Əməliyyatönü testlər", desc: "Xəstəxanada tam qan analizi və sağlamlıq yoxlaması. Dr Murat Ustun ilə şəxsi görüş.", icon: Stethoscope },
  { step: 5, title: "ESG proseduru", desc: "ESG Liv Hospital-da (JCI) ümumi anesteziya altında icra edilir. Müddət: 60-90 dəqiqə. Kəsik yoxdur, iz yoxdur.", icon: HeartPulse },
  { step: 6, title: "Bərpa və evə qayıdış", desc: "Oteldə istirahət edin, davamlı tibbi nəzarət altında. Əksər xəstələr prosedurdan 2-3 gün sonra evə qayıdır.", icon: Plane },
];

const comparisonMeds = [
  { factor: "Uzunmüddətli təsir", meds: "Məhdud — çəki tez-tez geri qayıdır", esg: "Sabit — davamlı fiziki azalma" },
  { factor: "Tərəf təsirləri", meds: "Tez-tez (ürəkbulanma, ishal, pankreatit riski)", esg: "Az (yüngül narahatlıq 1-3 gün)" },
  { factor: "Xərc", meds: "Davamlı aylıq xərclər", esg: "Bir dəfəlik: € 6.450 hər şey daxil (~11.900 AZN)" },
  { factor: "Çəkinin geri qayıtması", meds: "Dayandırdıqdan sonra tez-tez baş verir", esg: "Sağlam həyat tərzi ilə məhduddur" },
  { factor: "Müdaxilə", meds: "Yox — həftəlik/gündəlik inyeksiyalar", esg: "Bəli — tək endoskopik prosedur (60-90 dəqiqə)" },
];

const comparisonSurgery = [
  { feature: "Növ", esg: "Endoskopik (ağızdan)", sleeve: "Laparoskopik cərrahiyyə (4-5 kəsik)" },
  { feature: "Anesteziya", esg: "Ümumi", sleeve: "Ümumi" },
  { feature: "Müddət", esg: "60-90 dəqiqə", sleeve: "~60 dəqiqə" },
  { feature: "Xəstəxanada qalma", esg: "Eyni gün və ya 1 gecə", sleeve: "2-3 gecə" },
  { feature: "Bərpa", esg: "1-3 gün", sleeve: "2-3 həftə" },
  { feature: "İzlər", esg: "Yoxdur", sleeve: "4-5 kiçik iz" },
  { feature: "Çəki itkisi", esg: "Bədən çəkisinin 15-20%-i", sleeve: "Artıq çəkinin 60-70%-i" },
  { feature: "Geri dönməzlik", esg: "Potensial olaraq geri çevrilə bilər", sleeve: "Daimi (mədə toxuması çıxarılır)" },
  { feature: "Risk profili", esg: "Çox aşağı", sleeve: "Aşağı" },
];

const azTestimonials = [
  { name: "Elvin Məmmədov", location: "Bakı", text: "Istanbul Bariatric Center-dəki komanda çox peşəkar idi. 5 ayda 15 kq itirdim. Artıq özümü daha sağlam hiss edirəm.", weight: "−15 kq", time: "5 ay" },
  { name: "Leyla Quliyeva", location: "Gəncə", text: "Mən ESG əməliyyatını Istanbul Bariatric Center-də etdirdim. 4 ayda 12 kq itirdim və həyatım dəyişdi. İndi daha enerjiliyəm.", weight: "−12 kq", time: "4 ay" },
  { name: "Ramin Həsənov", location: "Sumqayıt", text: "Istanbul Bariatric Center-dəki müalicə prosesi çox rahat keçdi. 6 ayda 20 kq itirdim. Özümə inamım artdı.", weight: "−20 kq", time: "6 ay" },
];

function BMICalculator() {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [bmi, setBmi] = useState<number | null>(null);
  const calculateBMI = () => { const h = parseFloat(height) / 100; const w = parseFloat(weight); if (h > 0 && w > 0) setBmi(Math.round((w / (h * h)) * 10) / 10); };
  const getBMICategory = (bmi: number) => {
    if (bmi < 18.5) return { label: "Çəkisiz", color: "text-blue-600", eligible: false };
    if (bmi < 25) return { label: "Normal çəki", color: "text-green-600", eligible: false };
    if (bmi < 30) return { label: "Artıq çəki", color: "text-yellow-600", eligible: false };
    if (bmi < 35) return { label: "Piylənmə (I dərəcə)", color: "text-orange-600", eligible: true };
    if (bmi < 40) return { label: "Piylənmə (II dərəcə)", color: "text-red-500", eligible: true };
    return { label: "Ağır piylənmə (III dərəcə)", color: "text-red-700", eligible: false, surgical: true };
  };
  return (
    <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-200" data-testid="bmi-calculator-az">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center"><Calculator className="w-6 h-6 text-primary" /></div>
        <div><h3 className="text-xl font-bold text-slate-900">ESG üçün uyğunam?</h3><p className="text-sm text-slate-500">BMI-nizi hesablayın və uyğunluğunuzu yoxlayın</p></div>
      </div>
      <div className="grid sm:grid-cols-2 gap-4 mb-4">
        <div><label className="block text-sm font-medium text-slate-700 mb-1">Boy (sm)</label><input type="number" value={height} onChange={(e) => setHeight(e.target.value)} placeholder="məs. 175" className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none" data-testid="input-height-az" /></div>
        <div><label className="block text-sm font-medium text-slate-700 mb-1">Çəki (kq)</label><input type="number" value={weight} onChange={(e) => setWeight(e.target.value)} placeholder="məs. 100" className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none" data-testid="input-weight-az" /></div>
      </div>
      <Button onClick={calculateBMI} className="w-full bg-primary hover:bg-primary/90 h-12" data-testid="button-calculate-bmi-az">BMI hesabla</Button>
      {bmi !== null && (
        <div className="mt-6 p-4 rounded-xl bg-slate-50 border border-slate-200" data-testid="bmi-result-az">
          <div className="text-center mb-3"><span className="text-4xl font-bold text-primary">{bmi}</span><p className={`text-lg font-semibold ${getBMICategory(bmi).color}`}>{getBMICategory(bmi).label}</p></div>
          {getBMICategory(bmi).eligible ? (
            <div className="bg-green-50 border border-green-200 rounded-lg p-3 text-center"><p className="text-green-800 font-medium">Siz ESG üçün uyğun namizəd ola bilərsiniz!</p><p className="text-green-600 text-sm mt-1">Pulsuz konsultasiya üçün bizimlə əlaqə saxlayın.</p></div>
          ) : getBMICategory(bmi).surgical ? (
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 text-center"><p className="text-blue-800 font-medium">Bariatrik cərrahiyyə daha uyğun ola bilər.</p><p className="text-blue-600 text-sm mt-1"><Link href="/treatments" className="underline">Bütün müalicələrimizə baxın</Link></p></div>
          ) : (
            <div className="bg-slate-100 border border-slate-200 rounded-lg p-3 text-center"><p className="text-slate-700 font-medium">ESG adətən BMI 30-40 arasında tövsiyə olunur.</p><p className="text-slate-500 text-sm mt-1">İmkanlarınızı müzakirə etmək üçün bizimlə əlaqə saxlayın.</p></div>
          )}
        </div>
      )}
    </div>
  );
}

function FAQAccordion({ faqs }: { faqs: typeof azFaqs }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  return (
    <div className="space-y-3" data-testid="faq-accordion-az">
      {faqs.map((faq, i) => (
        <div key={i} className={`rounded-xl border transition-all duration-200 ${openIndex === i ? "border-primary/30 bg-white shadow-md" : "border-slate-200 bg-white hover:border-slate-300"}`} data-testid={`faq-item-az-${i}`}>
          <button className="w-full flex items-center justify-between p-5 text-left" onClick={() => setOpenIndex(openIndex === i ? null : i)} data-testid={`button-faq-az-${i}`}>
            <span className="font-semibold text-slate-900 pr-4">{faq.question}</span>
            {openIndex === i ? <ChevronUp className="w-5 h-5 text-primary shrink-0" /> : <ChevronDown className="w-5 h-5 text-slate-400 shrink-0" />}
          </button>
          {openIndex === i && <div className="px-5 pb-5 text-slate-600 leading-relaxed animate-in fade-in duration-200">{faq.answer}</div>}
        </div>
      ))}
    </div>
  );
}

export default function ESGAzerbaijan() {
  const azFlag = "🇦🇿";
  const trFlag = "🇹🇷";

  return (
    <div className="min-h-screen bg-white">
      <SEO title="Türkiyədə Azərbaycanlı Xəstələr üçün ESG | Cərrahiyyəsiz Arıqlama | € 6.450 hər şey daxil" description="Azərbaycanlı xəstələr üçün cərrahiyyəsiz ESG. İstanbulda JCI akkreditasiyalı xəstəxanada hər şey daxil € 6.450. Pulsuz məsləhət." keywords="ESG Azərbaycan, cərrahiyyəsiz arıqlama, qastroplastika Türkiyə, Ozempic alternativ, çəki itkisi, mədə azaltma cərrahiyyəsiz" url="/esg/az" />
      <JsonLd data={{ "@context": "https://schema.org", "@type": "MedicalProcedure", "name": "Azərbaycanlı xəstələr üçün Endoskopik Sleeve Qastroplastika", "alternateName": ["ESG Azərbaycan", "ESG Türkiyə", "Cərrahiyyəsiz arıqlama"], "description": "Azərbaycanlı xəstələr üçün Endoskopik Sleeve Qastroplastika (ESG) Istanbul Bariatric Center-də. JCI-akkreditasiyalı xəstəxana. Hər şey daxil € 6.450.", "procedureType": "Endoscopic", "bodyLocation": "Stomach", "relevantSpecialty": { "@type": "MedicalSpecialty", "name": "Bariatric Surgery" }, "offers": [{ "@type": "Offer", "name": "ESG Hər Şey Daxil Paketi", "price": "6450", "priceCurrency": "EUR" }] }} />
      <JsonLd data={structuredData.createFAQ(azFaqs)} />
      <JsonLd data={structuredData.createBreadcrumb([{ name: "Home", url: "/" }, { name: "Treatments", url: "/treatments" }, { name: "ESG", url: "/esg" }, { name: "ESG azərbaycanlı xəstələr üçün", url: "/esg/az" }])} />
      <Navbar />

      <section className="relative bg-slate-900 text-white pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-primary/30 opacity-90" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center gap-3 mb-6">
              <span className="text-4xl">{azFlag}</span>
              <Badge variant="outline" className="border-white/30 text-white/90 text-sm px-4 py-1">Azərbaycanlı xəstələr üçün</Badge>
              <span className="text-4xl">{trFlag}</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight" data-testid="heading-esg-az-hero">Endoskopik Sleeve Qastroplastika (ESG) — Cərrahiyyəsiz arıqlama Türkiyədə</h1>
            <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto mb-8 leading-relaxed">Davamlı arıqlama bir çoxları üçün çətin olub — hətta pəhriz, idman və Ozempic və ya Wegovy kimi dərmanlarla belə. ESG cərrahiyyəsiz arıqlamağın müasir, təhlükəsiz üsuludur. Hər şey daxil paket € 6.450-dən.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary hover:bg-primary/90 font-bold text-lg h-14 px-8" onClick={() => window.open("https://wa.me/905324131143?text=Salam%2C%20Az%C9%99rbaycan%C4%B1dan%20yaz%C4%B1ram%20v%C9%99%20ESG%20il%C9%99%20maraqlan%C4%B1ram", "_blank")} data-testid="button-hero-whatsapp-az"><Phone className="w-5 h-5 mr-2" />Pulsuz konsultasiya</Button>
              <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 font-bold text-lg h-14 px-8" onClick={() => document.getElementById("bmi-section-az")?.scrollIntoView({ behavior: "smooth" })} data-testid="button-hero-bmi-az"><Calculator className="w-5 h-5 mr-2" />Uyğunam?</Button>
            </div>
            <div className="flex flex-wrap gap-6 justify-center mt-10 text-sm text-slate-400">
              <span className="flex items-center gap-2"><ShieldCheck className="w-4 h-4" /> JCI-akkreditasiyalı xəstəxana</span>
              <span className="flex items-center gap-2"><Euro className="w-4 h-4" /> € 6.450 hər şey daxil</span>
              <span className="flex items-center gap-2"><Clock className="w-4 h-4" /> 3-4 günlük qalma</span>
              <span className="flex items-center gap-2"><Stethoscope className="w-4 h-4" /> 8.000+ uğurlu əməliyyat</span>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-b from-green-50 to-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-white rounded-2xl p-10 shadow-xl border-2 border-green-200 text-center" data-testid="card-pricing-az">
            <Badge className="bg-green-100 text-green-800 hover:bg-green-100 text-sm mb-4">Tam şəffaf qiymət</Badge>
            <h2 className="text-3xl font-bold text-slate-900 mb-2">ESG Hər Şey Daxil Paketi</h2>
            <div className="text-6xl font-bold text-primary my-4">€ 6.450</div>
            <p className="text-slate-500 text-lg mb-2">~11.900 AZN</p>
            <p className="text-slate-600 mb-8">Gizli xərclər yoxdur. Hər şey daxildir.</p>
            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4 text-left">
              {["Tam ESG proseduru", "Ümumi anesteziya", "JCI-akkreditasiyalı xəstəxana", "Əməliyyatönü müayinələr", "VIP hava limanı transferi", "Otel yerləşdirmə", "Əməliyyatsonrası dərmanlar", "12 ay dietoloq dəstəyi"].map((item, i) => (
                <div key={i} className="flex items-center gap-2 text-sm"><CheckCircle2 className="w-4 h-4 text-green-600 shrink-0" /><span className="text-slate-700">{item}</span></div>
              ))}
            </div>
            <Button className="mt-8 bg-primary hover:bg-primary/90 font-bold text-lg h-12 px-10" onClick={() => window.open("https://wa.me/905324131143?text=Salam%2C%20ESG%20paketi%20il%C9%99%20maraqlan%C4%B1ram%20%E2%82%AC%206.450", "_blank")} data-testid="button-book-az">Pulsuz konsultasiya sifariş edin</Button>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-slate-900">Endoskopik Sleeve Qastroplastika (ESG) nədir?</h2>
              <p className="text-lg text-slate-600 leading-relaxed">ESG mədənin həcmini <strong>cərrahiyyəsiz azaldan</strong> innovativ prosedurdur. Ağızdan endoskop daxil edilir və daxili tikişlər qoyulur, mədənin həcmini 70-80% azaldır. Ənənəvi <Link href="/sleeve-gastrectomy" className="text-primary hover:underline">sleeve qastrektomiyadan</Link> fərqli olaraq kəsik yoxdur, toxuma çıxarılmır və sağalma xeyli sürətlidir.</p>
              <p className="text-lg text-slate-600 leading-relaxed">Prosedur Apollo OverStitch texnologiyasından istifadə edir və ümumi anesteziya altında təxminən 60-90 dəqiqə davam edir. Nəticə: erkən doyma hissi və təbii şəkildə azalmış qida qəbulu.</p>
              <div className="grid grid-cols-3 gap-4 pt-4">
                <div className="text-center p-4 bg-primary/5 rounded-xl"><div className="text-2xl font-bold text-primary">60-90</div><p className="text-sm text-slate-600 mt-1">dəqiqə</p></div>
                <div className="text-center p-4 bg-primary/5 rounded-xl"><div className="text-2xl font-bold text-primary">Kəsik</div><p className="text-sm text-slate-600 mt-1">yoxdur</p></div>
                <div className="text-center p-4 bg-primary/5 rounded-xl"><div className="text-2xl font-bold text-primary">1-3</div><p className="text-sm text-slate-600 mt-1">gün bərpa</p></div>
              </div>
            </div>
            <div className="flex justify-center"><img src="/esg-procedure-cdn.webp" alt="ESG proseduru Endoskopik Sleeve Qastroplastika" className="rounded-2xl shadow-xl max-w-md w-full" width="400" height="400" loading="lazy" /></div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">{azFlag} Niyə azərbaycanlı xəstələr ESG üçün Türkiyəni seçir</h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">Getdikcə daha çox azərbaycanlı xəstə bariatrik müalicə üçün İstanbulu seçir — keyfiyyət, əlçatanlıq və şəffaflıq əsas amillərdir.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: ShieldCheck, title: "Azərbaycanda məhdud imkanlar", desc: "ESG Azərbaycanda geniş mövcud deyil. Özəl klinikalarda qiymətlər çox yüksəkdir. Istanbul Bariatric Center-in hər şey daxil paketi cəmi € 6.450 (~11.900 AZN).", color: "bg-red-50", iconColor: "text-red-500" },
              { icon: Euro, title: "Əhəmiyyətli qənaət", desc: "Hər şey daxil paketimiz € 6.450 (~11.900 AZN) — prosedur, xəstəxana, otel, transfer və 12 aylıq dietoloq dəstəyi ilə. Gizli xərclər yoxdur.", color: "bg-green-50", iconColor: "text-green-600" },
              { icon: Clock, title: "Sürətli çıxış", desc: "Gözləmə siyahısı yoxdur. Sürətli konsultasiya, çevik vaxtlar və 3-4 gün ərzində tam müalicə. Bakıdan birbaşa uçuşlar (~3-3,5 saat).", color: "bg-blue-50", iconColor: "text-blue-600" },
            ].map((item, i) => { const Icon = item.icon; return (
              <div key={i} className="bg-white rounded-2xl p-8 shadow-sm border border-slate-200 hover:shadow-md transition-shadow" data-testid={`card-az-reason-${i}`}>
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
            <h2 className="text-3xl font-bold text-slate-900 mb-4">ESG vs arıqlama dərmanları</h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">Bir çox azərbaycanlı xəstə Ozempic və ya Wegovy kimi GLP-1 dərmanları ilə başlayır. ESG növbəti məntiqi addım ola bilər.</p>
          </div>
          <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-sm">
            <table className="w-full text-left" data-testid="table-esg-vs-meds-az">
              <thead><tr className="bg-slate-900 text-white"><th className="p-4 font-semibold text-sm uppercase tracking-wider">Amil</th><th className="p-4 font-semibold text-sm uppercase tracking-wider">Ozempic / Wegovy</th><th className="p-4 font-semibold text-sm uppercase tracking-wider bg-primary/90">ESG</th></tr></thead>
              <tbody>{comparisonMeds.map((row, i) => (<tr key={i} className={`border-b border-slate-100 ${i % 2 === 0 ? "bg-white" : "bg-slate-50/50"}`}><td className="p-4 font-medium text-slate-900">{row.factor}</td><td className="p-4 text-slate-700">{row.meds}</td><td className="p-4 text-slate-700 bg-primary/5 font-medium">{row.esg}</td></tr>))}</tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="py-20 bg-blue-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">ESG vs mədə borusu (sleeve) əməliyyatı</h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">ESG ilə <Link href="/sleeve-gastrectomy" className="text-primary hover:underline">cərrahi sleeve qastrektomiyanın</Link> müqayisəsi.</p>
          </div>
          <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-sm">
            <table className="w-full text-left" data-testid="table-esg-vs-sleeve-az">
              <thead><tr className="bg-slate-900 text-white"><th className="p-4 font-semibold text-sm uppercase tracking-wider">Xüsusiyyət</th><th className="p-4 font-semibold text-sm uppercase tracking-wider bg-primary/90">ESG</th><th className="p-4 font-semibold text-sm uppercase tracking-wider">Gastric Sleeve</th></tr></thead>
              <tbody>{comparisonSurgery.map((row, i) => (<tr key={i} className={`border-b border-slate-100 ${i % 2 === 0 ? "bg-white" : "bg-slate-50/50"}`}><td className="p-4 font-medium text-slate-900">{row.feature}</td><td className="p-4 text-slate-700 bg-primary/5 font-medium">{row.esg}</td><td className="p-4 text-slate-700">{row.sleeve}</td></tr>))}</tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-900 text-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-14"><h2 className="text-3xl font-bold mb-4">Niyə Istanbul Bariatric Center?</h2><p className="text-lg text-slate-300 max-w-3xl mx-auto">Tibbi ekspertiza və beynəlxalq xəstə təcrübəsi — azərbaycanlı xəstələrimizin ehtiyaclarına uyğun.</p></div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Stethoscope, title: "Dr. Murat Ustun", desc: "Türkiyədə ESG-nin pioneri. Minlərlə uğurlu bariatrik əməliyyat." },
              { icon: ShieldCheck, title: "JCI-akkreditasiyalı xəstəxana", desc: "Bütün əməliyyatlar Liv Hospital-da — JCI-akkreditasiyası ilə, beynəlxalq qızıl standart." },
              { icon: Users, title: "Beynəlxalq komanda", desc: "Beynəlxalq xəstələr üçün xüsusi komanda. Aydın ünsiyyət və strukturlaşdırılmış izləmə." },
              { icon: Euro, title: "€ 6.450 hər şey daxil", desc: "Gizli xərclər yoxdur. Prosedur, xəstəxana, otel, transfer, müayinələr, 12 ay dietoloq dəstəyi." },
            ].map((item, i) => { const Icon = item.icon; return (
              <div key={i} className="bg-white/10 backdrop-blur rounded-xl p-6 text-center" data-testid={`card-az-ibc-${i}`}>
                <div className="w-14 h-14 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4"><Icon className="w-7 h-7 text-primary" /></div>
                <h3 className="text-lg font-bold mb-2">{item.title}</h3><p className="text-slate-300 text-sm">{item.desc}</p>
              </div>
            ); })}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-14"><h2 className="text-3xl font-bold text-slate-900 mb-4">Müalicə prosesi — addım-addım</h2><p className="text-lg text-slate-600">İlk əlaqədən evə qayıdışa qədər — biz hər şeyi təşkil edirik.</p></div>
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-primary/20 hidden md:block" />
            <div className="space-y-8">
              {journeySteps.map((step) => { const Icon = step.icon; return (
                <div key={step.step} className="relative flex gap-6" data-testid={`step-journey-az-${step.step}`}>
                  <div className="relative z-10 shrink-0"><div className="w-16 h-16 rounded-full bg-primary text-white flex items-center justify-center shadow-lg"><Icon className="w-7 h-7" /></div></div>
                  <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200 flex-1 hover:shadow-md transition-shadow">
                    <div className="flex items-center gap-3 mb-2"><Badge variant="outline" className="text-primary border-primary/30">{step.step}. addım</Badge><h3 className="text-lg font-bold text-slate-900">{step.title}</h3></div>
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
            <div><img src="/esg-procedure-cdn.webp" alt="İstanbul — Azərbaycandan tibbi turizm" className="rounded-2xl shadow-xl w-full" width="600" height="400" loading="lazy" /></div>
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-slate-900">Rahatlıq və birinci sinif xidmət</h2>
              <p className="text-lg text-slate-600 leading-relaxed">Sizin rifahınız ən vacib prioritetimizdir — İstanbula gəldiyiniz andan. VIP transfer, rahat otel və Liv Hospital ən müasir tibbi avadanlıqla.</p>
              <div className="flex flex-wrap gap-3">{["VIP hava limanı transferi", "Rahat otel", "Liv Hospital (JCI)", "24/7 dəstək", "WhatsApp əlaqə"].map((tag) => (<Badge key={tag} className="bg-primary/10 text-primary hover:bg-primary/10 px-3 py-1">{tag}</Badge>))}</div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-14"><h2 className="text-3xl font-bold text-slate-900 mb-4">ESG ilə gözlənilən nəticələr</h2></div>
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="bg-primary text-white rounded-2xl p-8 text-center"><TrendingDown className="w-10 h-10 mx-auto mb-3 opacity-80" /><div className="text-4xl font-bold mb-2">15-20%</div><p className="text-white/80">Ümumi çəki itkisi</p><p className="text-sm text-white/60 mt-2">12-18 ay ərzində</p></div>
            <div className="bg-primary text-white rounded-2xl p-8 text-center"><Activity className="w-10 h-10 mx-auto mb-3 opacity-80" /><div className="text-4xl font-bold mb-2">~20 kq</div><p className="text-white/80">Orta (BMI 38+)</p><p className="text-sm text-white/60 mt-2">İlk 6 ay</p></div>
            <div className="bg-primary text-white rounded-2xl p-8 text-center"><HeartPulse className="w-10 h-10 mx-auto mb-3 opacity-80" /><div className="text-4xl font-bold mb-2">Əhəmiyyətli</div><p className="text-white/80">Sağlamlıq yaxşılaşması</p><p className="text-sm text-white/60 mt-2">Diabet, qan təzyiqi, yuxu apnesi</p></div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-14"><h2 className="text-3xl font-bold text-slate-900 mb-4">{azFlag} Azərbaycanlı xəstələrimizin təcrübələri</h2></div>
          <div className="grid md:grid-cols-3 gap-8">
            {azTestimonials.map((t, i) => (
              <div key={i} className="bg-white rounded-2xl p-8 shadow-sm border border-slate-200" data-testid={`testimonial-az-${i}`}>
                <div className="flex items-center gap-1 mb-4">{[...Array(5)].map((_, si) => (<Star key={si} className="w-5 h-5 fill-yellow-400 text-yellow-400" />))}</div>
                <p className="text-slate-600 italic leading-relaxed mb-6">&ldquo;{t.text}&rdquo;</p>
                <div className="flex items-center justify-between"><div><p className="font-bold text-slate-900">{t.name}</p><p className="text-sm text-slate-500 flex items-center gap-1"><MapPin className="w-3 h-3" /> {t.location}</p></div><div className="text-right"><p className="font-bold text-primary">{t.weight}</p><p className="text-xs text-slate-500">{t.time}</p></div></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20" id="bmi-section-az">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-start max-w-6xl mx-auto">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-slate-900">ESG üçün kim uyğundur?</h2>
              <p className="text-lg text-slate-600 leading-relaxed">ESG artıq çəkidən əziyyət çəkən və həyat tərzi dəyişikliyi ilə böyük cərrahiyyə arasında həll axtaranlara yönəlibdir.</p>
              <div className="space-y-3">
                {["BMI 30 ilə 40 arasında", "Pəhrizlər və idman davamlı nəticə gətirməyib", "İnvaziv cərrahiyyə istəmir", "Dərmanlar kifayət etməyib və ya çox bahadır", "Qısa bərpa ilə minimal invaziv üsul üstünlük verir", "Artıq çəkiyə bağlı xəstəliklər (tip 2 diabet, yüksək qan təzyiqi, yuxu apnesi)"].map((item, i) => (
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
              <h2 className="text-3xl font-bold text-slate-900">Təhlükəsizlik və keyfiyyət standartları</h2>
              <p className="text-lg text-slate-600 leading-relaxed">ESG təcrübəli mütəxəssislər tərəfindən həyata keçirildikdə ən təhlükəsiz arıqlama prosedurlarından biridir. Dr Murat Ustun JCI-akkreditasiyalı Liv Hospital-da minlərlə ESG əməliyyatı icra etmişdir.</p>
              <div className="space-y-3">
                {["JCI-akkreditasiyalı xəstəxana (beynəlxalq qızıl standart)", "Minlərlə ESG əməliyyatı olan cərrah", "Qabaqcıl tikiş texnologiyası (Apollo OverStitch)", "Tam əməliyyatönü sağlamlıq yoxlaması", "Əməliyyatdan sonra 24/7 tibbi dəstək", "Tam tibbi protokollar"].map((item, i) => (
                  <div key={i} className="flex items-start gap-3"><ShieldCheck className="w-5 h-5 text-green-600 shrink-0 mt-0.5" /><p className="text-slate-700">{item}</p></div>
                ))}
              </div>
            </div>
            <div><img src="/esg-procedure-cdn.webp" alt="Azərbaycanlı xəstələr üçün tibbi konsultasiya" className="rounded-2xl shadow-xl w-full" width="600" height="400" loading="lazy" /></div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-slate-900 mb-4 text-center">ESG-dən sonra həyat</h2>
          <p className="text-lg text-slate-600 text-center mb-12">Prosedur yalnız başlanğıcdır. Bərpa belə görünür.</p>
          <div className="space-y-4">
            {[
              { phase: "İlk 8 saat", desc: "Yalnız təmiz mayelər. Tibbi nəzarət altında istirahət.", icon: "🏥", color: "border-red-200 bg-red-50" },
              { phase: "1-2-ci həftə", desc: "Maye pəhriz — protein kokteyiləri, bulyonlar, su.", icon: "🥤", color: "border-orange-200 bg-orange-50" },
              { phase: "3-6-cı həftə", desc: "Tədricən yarımqatı yeməklərə keçid. Püre edilmiş yeməklər və yumşaq proteinlər.", icon: "🥣", color: "border-yellow-200 bg-yellow-50" },
              { phase: "7-ci həftədən", desc: "Sağlam qatı yeməklərə keçid. Proteinlə zəngin, balanslaşdırılmış pəhriz.", icon: "🥗", color: "border-green-200 bg-green-50" },
              { phase: "3-12-ci ay", desc: "Müntəzəm konsultasiyalarla davamlı dietoloq dəstəyi.", icon: "📊", color: "border-blue-200 bg-blue-50" },
            ].map((phase, i) => (
              <div key={i} className={`flex items-start gap-5 p-6 rounded-xl border ${phase.color}`}><span className="text-3xl shrink-0">{phase.icon}</span><div><h4 className="font-bold text-slate-900 mb-1">{phase.phase}</h4><p className="text-slate-600 leading-relaxed">{phase.desc}</p></div></div>
            ))}
          </div>
          <div className="mt-10 p-6 bg-primary/5 rounded-xl border border-primary/10">
            <div className="flex items-start gap-4"><Utensils className="w-8 h-8 text-primary shrink-0 mt-1" /><div><h4 className="font-bold text-slate-900 mb-2">12 aylıq dietoloq dəstəyi</h4><p className="text-slate-600">Hər ESG paketinə fərdi pəhriz planı hazırlayan və ilk il ərzində sizi müşayiət edən təlim keçmiş dietoloqa çıxış daxildir.</p></div></div>
          </div>
        </div>
      </section>

      <section className="py-20" data-testid="section-faq-az">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12"><h2 className="text-3xl font-bold text-slate-900 mb-4">Tez-tez verilən suallar — ESG azərbaycanlı xəstələr üçün</h2><p className="text-lg text-slate-600">İstanbul səfərinizdən əvvəl bilmək istədiyiniz hər şey.</p></div>
          <FAQAccordion faqs={azFaqs} />
        </div>
      </section>

      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-2xl font-bold text-slate-900 mb-8 text-center">Digər müalicə imkanlarımızı kəşf edin</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { title: "ESG — tam məlumat", href: "/esg", desc: "Prosedur haqqında bütün detallar" },
              { title: "Sleeve Qastrektomiya", href: "/sleeve-gastrectomy", desc: "Ən populyar bariatrik əməliyyat" },
              { title: "Mədə balonu", href: "/gastric-balloon", desc: "Cərrahiyyəsiz alternativ" },
              { title: "Bütün müalicələr", href: "/treatments", desc: "Müqayisə və qiymətlər" },
              { title: "Nəticələr", href: "/results", desc: "Xəstə uğur hekayələri" },
              { title: "Əlaqə", href: "/contact", desc: "Komandamızla danışın" },
            ].map((link, i) => (
              <Link key={i} href={link.href} className="flex items-center gap-3 p-4 bg-white rounded-xl border border-slate-200 hover:border-primary/30 hover:shadow-sm transition-all group" data-testid={`link-internal-az-${i}`}>
                <ArrowRight className="w-4 h-4 text-primary shrink-0 group-hover:translate-x-1 transition-transform" />
                <div><p className="font-medium text-slate-900 group-hover:text-primary transition-colors">{link.title}</p><p className="text-xs text-slate-500">{link.desc}</p></div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-primary text-white" data-testid="section-cta-az">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <span className="text-5xl mb-6 block">{azFlag}</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Bu gün ilk addımı atın</h2>
          <p className="text-xl text-white/80 mb-4 leading-relaxed">Cərrahiyyəyə təhlükəsiz və effektiv alternativ axtarırsınızsa, Endoskopik Sleeve Qastroplastika sizin üçün ideal həll ola bilər.</p>
          <p className="text-lg text-white/70 mb-8">Bu gün pulsuz onlayn konsultasiya üçün bizimlə əlaqə saxlayın. Uyğunluğunuzu qiymətləndirəcəyik, bütün suallarınıza cavab verəcəyik və fərdi müalicə planı hazırlayacağıq — heç bir öhdəlik olmadan.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-primary hover:bg-white/90 font-bold text-lg h-14 px-10" onClick={() => window.open("https://wa.me/905324131143?text=Salam%2C%20Az%C9%99rbaycan%C4%B1dan%20yaz%C4%B1ram%20v%C9%99%20ESG%20il%C9%99%20maraqlan%C4%B1ram", "_blank")} data-testid="button-cta-whatsapp-az"><Phone className="w-5 h-5 mr-2" />WhatsApp: +90 532 413 1143</Button>
            <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 font-bold text-lg h-14 px-10" onClick={() => window.open("mailto:drmuratustun@gmail.com?subject=ESG%20sor%C4%9Fu%20Az%C9%99rbaycan", "_blank")} data-testid="button-cta-email-az"><MessageCircle className="w-5 h-5 mr-2" />E-poçt göndərin</Button>
          </div>
          <p className="text-white/50 mt-6 text-sm">E-poçt: <a href="mailto:drmuratustun@gmail.com" className="text-white/70 hover:text-white underline">drmuratustun@gmail.com</a></p>
        </div>
      </section>

      <Footer />
    </div>
  );
}

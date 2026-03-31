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

const huFaqs = [
  {
    question: "Elérhető az ESG a magyar egészségügyi rendszerben?",
    answer: "Az endoszkópos sleeve gastroplasztika jelenleg nem érhető el a magyar társadalombiztosítás (TB) keretében. Magyarországi magánklinikákon az ár 2.000.000-4.000.000 Ft között mozog. Az Istanbul Bariatric Center all-inclusive csomagja € 6.450 (~2.600.000 Ft) — beleértve a beavatkozást, JCI-akkreditált kórházat, szállodát, VIP transzfert és 12 hónapos dietetikai támogatást.",
  },
  {
    question: "Mennyi időt kell Isztambulban tölteni?",
    answer: "A legtöbb magyar páciens 3-4 napot tölt Isztambulban. A beavatkozás előtti napon érkezés, másnap az ESG elvégzése, harmadik nap pihenés a szállodában, negyedik nap hazautazás. Közvetlen járatok Budapest Liszt Ferenc repülőtérről (~2-2,5 óra).",
  },
  {
    question: "Fájdalmas a beavatkozás?",
    answer: "Az ESG-t általános altatásban végzik — a beavatkozás során semmit sem érez. Ébredés után enyhe kellemetlenséget, hányingert vagy teltségérzetet tapasztalhat. Ezek a tünetek jellemzően 1-3 napon belül elmúlnak, és jól kezelhetők gyógyszerekkel.",
  },
  {
    question: "Tartósak az eredmények?",
    answer: "Igen, a megfelelő életmóddal. Az ESG fizikai térfogatcsökkentést hoz létre a gyomorban — ez strukturális változás. Az eredmények fenntartásához fontos az étkezési terv követése, a rendszeres testmozgás és az utánkövetésen való részvétel. 12 hónapos dietetikai programunk képzett dietetikussal minden csomag részét képezi.",
  },
  {
    question: "Mi a különbség az ESG és az Ozempic/Wegovy között?",
    answer: "A GLP-1 gyógyszerek, mint az Ozempic és a Wegovy, kezdetben hatékonyak lehetnek, de sok páciens visszahízik az abbahagyás után. A folyamatos havi költségek (50.000-100.000 Ft/hó) gyorsan összeadódnak. Az ESG egyszeri megoldást kínál — a gyomor fizikai csökkentését, visszatérő költségek nélkül.",
  },
  {
    question: "Milyen BMI szükséges az ESG-hez?",
    answer: "Az ESG általában 30 és 40 közötti BMI-vel rendelkező pácienseknek ajánlott. Az eljárás különösen alkalmas azoknak, akik diétával és mozgással nem értek el tartós eredményt, nem szeretnének invazív műtétet, vagy minimálisan invazív módszert preferálnak rövid felépülési idővel.",
  },
  {
    question: "Biztonságos a külföldi kezelés?",
    answer: "Az Istanbul Bariatric Center a Liv Hospitalban működik, amely JCI (Joint Commission International) akkreditációval rendelkezik — ez a nemzetközi aranyszabvány a betegbiztonságban. Dr. Murat Üstün több ezer ESG beavatkozást végzett kiváló biztonsági mutatókkal.",
  },
  {
    question: "Mit tartalmaz az all-inclusive csomag?",
    answer: "Az ESG csomagunk € 6.450-ért tartalmazza: a teljes beavatkozást, kórházi tartózkodást JCI-akkreditált kórházban, preoperatív vizsgálatokat, VIP repülőtéri transzfert, szállodai elhelyezést, posztoperatív gyógyszereket, 12 hónapos dietetikai támogatást és folyamatos utánkövetést. Nincsenek rejtett költségek.",
  },
];

const journeySteps = [
  { step: 1, title: "Ingyenes online konzultáció", desc: "Vegye fel velünk a kapcsolatot WhatsApp-on vagy weboldalunkon. Csapatunk felméri BMI-jét, kórtörténetét és céljait az ESG alkalmasság megállapításához.", icon: MessageCircle },
  { step: 2, title: "Utazás Törökországba", desc: "Válasszon időpontot — mi szervezzük a többit. Közvetlen járatok Budapest Liszt Ferencről (~2-2,5 óra).", icon: Plane },
  { step: 3, title: "VIP transzfer és szálloda", desc: "Személyes sofőr várja Önt az isztambuli repülőtéren és a szállodába szállítja.", icon: Hotel },
  { step: 4, title: "Preoperatív vizsgálatok", desc: "Teljes vérvizsgálat és egészségügyi ellenőrzés a kórházban. Személyes találkozás Dr. Murat Üstünnel.", icon: Stethoscope },
  { step: 5, title: "ESG beavatkozás", desc: "Az ESG-t általános altatásban végzik a Liv Hospitalban (JCI). Időtartam: 60-90 perc. Nincs vágás, nincsenek hegek.", icon: HeartPulse },
  { step: 6, title: "Felépülés és hazautazás", desc: "Pihenés a szállodában folyamatos orvosi felügyelettel. A legtöbb páciens 2-3 nappal a beavatkozás után hazautazik.", icon: Plane },
];

const comparisonMeds = [
  { factor: "Hosszú távú hatás", meds: "Korlátozott — a súly gyakran visszatér", esg: "Stabil — tartós fizikai csökkentés" },
  { factor: "Mellékhatások", meds: "Gyakoriak (hányinger, hasmenés, pankreatitisz kockázat)", esg: "Kevés (enyhe kellemetlenség 1-3 nap)" },
  { factor: "Költség", meds: "Folyamatos 50.000-100.000 Ft/hó (600.000-1.200.000 Ft/év)", esg: "Egyszeri: € 6.450 all-inclusive (~2.600.000 Ft)" },
  { factor: "Visszahízás", meds: "Gyakori az abbahagyás után", esg: "Korlátozott egészséges életmóddal" },
  { factor: "Beavatkozás", meds: "Nem — heti/napi injekciók", esg: "Igen — egyetlen endoszkópos beavatkozás (60-90 perc)" },
];

const comparisonSurgery = [
  { feature: "Beavatkozás típusa", esg: "Endoszkópos (szájon át)", sleeve: "Laparoszkópos műtét (4-5 bemetszés)" },
  { feature: "Altatás", esg: "Általános", sleeve: "Általános" },
  { feature: "Időtartam", esg: "60-90 perc", sleeve: "~60 perc" },
  { feature: "Kórházi tartózkodás", esg: "Azonos nap vagy 1 éjszaka", sleeve: "2-3 éjszaka" },
  { feature: "Felépülés", esg: "1-3 nap", sleeve: "2-3 hét" },
  { feature: "Hegek", esg: "Nincsenek", sleeve: "4-5 kis heg" },
  { feature: "Fogyás", esg: "15-20% testsúlyból", sleeve: "60-70% túlsúlyból" },
  { feature: "Visszafordíthatóság", esg: "Potenciálisan visszafordítható", sleeve: "Végleges (gyomorszövet eltávolítva)" },
  { feature: "Kockázati profil", esg: "Nagyon alacsony", sleeve: "Alacsony" },
];

const huTestimonials = [
  { name: "Kovács Anna", location: "Budapest", text: "Évekig küzdöttem a diétákkal és az Ozempickel — tartós eredmény nélkül. Az ESG volt az áttörés. Az Istanbul Bariatric Center csapata hihetetlen professzionális volt. 5 hónap alatt 17 kg-ot fogytam. Végre szabadnak érzem magam.", weight: "−17 kg", time: "5 hónap" },
  { name: "Nagy Péter", location: "Debrecen", text: "Eleinte kétkedtem a külföldi kezeléssel kapcsolatban. De a Liv Hospital minden várakozásomat felülmúlta — a minőség magasabb volt, mint amit Magyarországon láttam. Dr. Murat kivételes orvos, és az ár töredéke az itthoninak.", weight: "−22 kg", time: "6 hónap" },
  { name: "Szabó Eszter", location: "Szeged", text: "A reptéri transzfertől a dietetikai támogatásig — minden tökéletesen szervezett volt. Sosem hittem volna, hogy az eredmények ilyen gyorsan jönnek. A 12 hónapos program igazán segített megváltoztatni az étkezési szokásaimat.", weight: "−15 kg", time: "4 hónap" },
];

function BMICalculator() {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [bmi, setBmi] = useState<number | null>(null);
  const calculateBMI = () => { const h = parseFloat(height) / 100; const w = parseFloat(weight); if (h > 0 && w > 0) setBmi(Math.round((w / (h * h)) * 10) / 10); };
  const getBMICategory = (bmi: number) => {
    if (bmi < 18.5) return { label: "Alulsúlyos", color: "text-blue-600", eligible: false };
    if (bmi < 25) return { label: "Normál súly", color: "text-green-600", eligible: false };
    if (bmi < 30) return { label: "Túlsúlyos", color: "text-yellow-600", eligible: false };
    if (bmi < 35) return { label: "Elhízás (I. fokozat)", color: "text-orange-600", eligible: true };
    if (bmi < 40) return { label: "Elhízás (II. fokozat)", color: "text-red-500", eligible: true };
    return { label: "Súlyos elhízás (III. fokozat)", color: "text-red-700", eligible: false, surgical: true };
  };
  return (
    <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-200" data-testid="bmi-calculator-hu">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center"><Calculator className="w-6 h-6 text-primary" /></div>
        <div><h3 className="text-xl font-bold text-slate-900">Alkalmas vagyok az ESG-re?</h3><p className="text-sm text-slate-500">Számítsa ki BMI-jét és ellenőrizze alkalmasságát</p></div>
      </div>
      <div className="grid sm:grid-cols-2 gap-4 mb-4">
        <div><label className="block text-sm font-medium text-slate-700 mb-1">Magasság (cm)</label><input type="number" value={height} onChange={(e) => setHeight(e.target.value)} placeholder="pl. 175" className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none" data-testid="input-height-hu" /></div>
        <div><label className="block text-sm font-medium text-slate-700 mb-1">Testsúly (kg)</label><input type="number" value={weight} onChange={(e) => setWeight(e.target.value)} placeholder="pl. 100" className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none" data-testid="input-weight-hu" /></div>
      </div>
      <Button onClick={calculateBMI} className="w-full bg-primary hover:bg-primary/90 h-12" data-testid="button-calculate-bmi-hu">BMI kiszámítása</Button>
      {bmi !== null && (
        <div className="mt-6 p-4 rounded-xl bg-slate-50 border border-slate-200" data-testid="bmi-result-hu">
          <div className="text-center mb-3"><span className="text-4xl font-bold text-primary">{bmi}</span><p className={`text-lg font-semibold ${getBMICategory(bmi).color}`}>{getBMICategory(bmi).label}</p></div>
          {getBMICategory(bmi).eligible ? (
            <div className="bg-green-50 border border-green-200 rounded-lg p-3 text-center"><p className="text-green-800 font-medium">Ön alkalmas jelölt lehet az ESG-re!</p><p className="text-green-600 text-sm mt-1">Vegye fel velünk a kapcsolatot ingyenes konzultációért.</p></div>
          ) : getBMICategory(bmi).surgical ? (
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 text-center"><p className="text-blue-800 font-medium">Bariatrikus műtét alkalmasabb lehet.</p><p className="text-blue-600 text-sm mt-1"><Link href="/treatments" className="underline">Tekintse meg összes kezelésünket</Link></p></div>
          ) : (
            <div className="bg-slate-100 border border-slate-200 rounded-lg p-3 text-center"><p className="text-slate-700 font-medium">Az ESG általában 30-40 közötti BMI-hez ajánlott.</p><p className="text-slate-500 text-sm mt-1">Vegye fel velünk a kapcsolatot lehetőségei megbeszéléséhez.</p></div>
          )}
        </div>
      )}
    </div>
  );
}

function FAQAccordion({ faqs }: { faqs: typeof huFaqs }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  return (
    <div className="space-y-3" data-testid="faq-accordion-hu">
      {faqs.map((faq, i) => (
        <div key={i} className={`rounded-xl border transition-all duration-200 ${openIndex === i ? "border-primary/30 bg-white shadow-md" : "border-slate-200 bg-white hover:border-slate-300"}`} data-testid={`faq-item-hu-${i}`}>
          <button className="w-full flex items-center justify-between p-5 text-left" onClick={() => setOpenIndex(openIndex === i ? null : i)} data-testid={`button-faq-hu-${i}`}>
            <span className="font-semibold text-slate-900 pr-4">{faq.question}</span>
            {openIndex === i ? <ChevronUp className="w-5 h-5 text-primary shrink-0" /> : <ChevronDown className="w-5 h-5 text-slate-400 shrink-0" />}
          </button>
          {openIndex === i && <div className="px-5 pb-5 text-slate-600 leading-relaxed animate-in fade-in duration-200">{faq.answer}</div>}
        </div>
      ))}
    </div>
  );
}

export default function ESGHungary() {
  const huFlag = "🇭🇺";
  const trFlag = "🇹🇷";

  return (
    <div className="min-h-screen bg-white">
      <SEO title="ESG Törökország magyar betegeknek | Fogyás műtét nélkül | € 6.450 all-inclusive" description="ESG műtét nélkül magyar pácienseknek. All-inclusive € 6.450 JCI-akkreditált kórházban Isztambulban. Ingyenes konzultáció." keywords="ESG Magyarország, fogyás műtét nélkül, gastroplasztika Törökország, Ozempic alternatíva, testsúlycsökkentés, gyomor csökkentés műtét nélkül" url="/esg/hu" />
      <JsonLd data={{ "@context": "https://schema.org", "@type": "MedicalProcedure", "name": "Endoszkópos Sleeve Gastroplasztika magyar betegeknek", "alternateName": ["ESG Magyarország", "ESG Törökország", "Fogyás műtét nélkül"], "description": "Endoszkópos Sleeve Gastroplasztika (ESG) magyar pácienseknek az Istanbul Bariatric Centerben. JCI-akkreditált kórház. All-inclusive € 6.450.", "procedureType": "Endoscopic", "bodyLocation": "Stomach", "relevantSpecialty": { "@type": "MedicalSpecialty", "name": "Bariatric Surgery" }, "offers": [{ "@type": "Offer", "name": "ESG All-Inclusive Csomag", "price": "6450", "priceCurrency": "EUR" }] }} />
      <JsonLd data={structuredData.createFAQ(huFaqs)} />
      <JsonLd data={structuredData.createBreadcrumb([{ name: "Home", url: "/" }, { name: "Treatments", url: "/treatments" }, { name: "ESG", url: "/esg" }, { name: "ESG magyar betegeknek", url: "/esg/hu" }])} />
      <Navbar />

      <section className="relative bg-slate-900 text-white pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-primary/30 opacity-90" />
        <div className="absolute inset-0 opacity-15" style={{ backgroundImage: "url('/esg-hu-hero.webp')", backgroundSize: "cover", backgroundPosition: "center" }} />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center gap-3 mb-6">
              <span className="text-4xl">{huFlag}</span>
              <Badge variant="outline" className="border-white/30 text-white/90 text-sm px-4 py-1">Magyar pácienseknek</Badge>
              <span className="text-4xl">{trFlag}</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight" data-testid="heading-esg-hu-hero">Endoszkópos Sleeve Gastroplasztika (ESG) — Fogyás műtét nélkül Törökországban</h1>
            <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto mb-8 leading-relaxed">A tartós fogyás sokak számára kihívást jelent — még diétákkal, mozgással és gyógyszerekkel, mint az Ozempic vagy Wegovy is. Az ESG modern, biztonságos módszer a fogyásra, műtét nélkül. All-inclusive csomag € 6.450-ért.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary hover:bg-primary/90 font-bold text-lg h-14 px-8" onClick={() => window.open("https://wa.me/905324131143?text=Szia%2C%20Magyarorsz%C3%A1gr%C3%B3l%20%C3%ADrok%20%C3%A9s%20%C3%A9rdekel%20az%20ESG", "_blank")} data-testid="button-hero-whatsapp-hu"><Phone className="w-5 h-5 mr-2" />Ingyenes konzultáció</Button>
              <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 font-bold text-lg h-14 px-8" onClick={() => document.getElementById("bmi-section-hu")?.scrollIntoView({ behavior: "smooth" })} data-testid="button-hero-bmi-hu"><Calculator className="w-5 h-5 mr-2" />Alkalmas vagyok?</Button>
            </div>
            <div className="flex flex-wrap gap-6 justify-center mt-10 text-sm text-slate-400">
              <span className="flex items-center gap-2"><ShieldCheck className="w-4 h-4" /> JCI-akkreditált kórház</span>
              <span className="flex items-center gap-2"><Euro className="w-4 h-4" /> € 6.450 all-inclusive</span>
              <span className="flex items-center gap-2"><Clock className="w-4 h-4" /> 3-4 napos tartózkodás</span>
              <span className="flex items-center gap-2"><Stethoscope className="w-4 h-4" /> 8.000+ sikeres beavatkozás</span>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-b from-green-50 to-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-white rounded-2xl p-10 shadow-xl border-2 border-green-200 text-center" data-testid="card-pricing-hu">
            <Badge className="bg-green-100 text-green-800 hover:bg-green-100 text-sm mb-4">Teljesen átlátható ár</Badge>
            <h2 className="text-3xl font-bold text-slate-900 mb-2">ESG All-Inclusive Csomag</h2>
            <div className="text-6xl font-bold text-primary my-4">€ 6.450</div>
            <p className="text-slate-500 text-lg mb-2">~2.600.000 Ft</p>
            <p className="text-slate-600 mb-8">Nincsenek rejtett költségek. Minden benne van.</p>
            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4 text-left">
              {["Teljes ESG beavatkozás", "Általános altatás", "JCI-akkreditált kórház", "Preoperatív vizsgálatok", "VIP repülőtéri transzfer", "Szállodai elhelyezés", "Posztoperatív gyógyszerek", "12 hó dietetikai támogatás"].map((item, i) => (
                <div key={i} className="flex items-center gap-2 text-sm"><CheckCircle2 className="w-4 h-4 text-green-600 shrink-0" /><span className="text-slate-700">{item}</span></div>
              ))}
            </div>
            <Button className="mt-8 bg-primary hover:bg-primary/90 font-bold text-lg h-12 px-10" onClick={() => window.open("https://wa.me/905324131143?text=Szia%2C%20%C3%A9rdekel%20az%20ESG%20csomag%20%E2%82%AC%206.450", "_blank")} data-testid="button-book-hu">Ingyenes konzultáció foglalása</Button>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-slate-900">Mi az Endoszkópos Sleeve Gastroplasztika (ESG)?</h2>
              <p className="text-lg text-slate-600 leading-relaxed">Az ESG egy innovatív eljárás, amely <strong>műtét nélkül csökkenti a gyomor térfogatát</strong>. A szájon át egy endoszkópot vezetnek le, amellyel belső varratokat helyeznek el, 70-80%-kal csökkentve a gyomor térfogatát. A hagyományos <Link href="/sleeve-gastrectomy" className="text-primary hover:underline">sleeve gastrectomyval</Link> ellentétben nincs vágás, nem távolítanak el szövetet, és a felépülés lényegesen gyorsabb.</p>
              <p className="text-lg text-slate-600 leading-relaxed">Az eljárás Apollo OverStitch technológiát alkalmaz, és kb. 60-90 percig tart általános altatásban. Az eredmény: korai teltségérzet és természetesen csökkent ételbevitel.</p>
              <div className="grid grid-cols-3 gap-4 pt-4">
                <div className="text-center p-4 bg-primary/5 rounded-xl"><div className="text-2xl font-bold text-primary">60-90</div><p className="text-sm text-slate-600 mt-1">perc</p></div>
                <div className="text-center p-4 bg-primary/5 rounded-xl"><div className="text-2xl font-bold text-primary">Nincs</div><p className="text-sm text-slate-600 mt-1">vágás</p></div>
                <div className="text-center p-4 bg-primary/5 rounded-xl"><div className="text-2xl font-bold text-primary">1-3</div><p className="text-sm text-slate-600 mt-1">nap felépülés</p></div>
              </div>
            </div>
            <div className="flex justify-center"><img src="/esg-procedure-cdn.webp" alt="ESG eljárás Endoszkópos Sleeve Gastroplasztika" className="rounded-2xl shadow-xl max-w-md w-full" width="400" height="400" loading="lazy" /></div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">{huFlag} Miért választják a magyar betegek az ESG-t Törökországban</h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">Egyre több magyar páciens választja Isztambult bariatrikus kezelésre — minőség, elérhetőség és átláthatóság áll a középpontban.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: ShieldCheck, title: "Korlátozott hozzáférés Magyarországon", desc: "Az ESG nem érhető el a TB keretében. Magánklinikák ritkán kínálják, és az árak 2-4 millió Ft között mozognak — hosszú várólistákkal.", color: "bg-red-50", iconColor: "text-red-500" },
              { icon: Euro, title: "Jelentős megtakarítás", desc: "Magyarországon az ESG 2.000.000-4.000.000 Ft-ba kerülhet magánúton. All-inclusive csomagunk € 6.450 (~2.600.000 Ft) — beavatkozással, kórházzal, szállodával, transzferrel és 12 hónapos utánkövetéssel.", color: "bg-green-50", iconColor: "text-green-600" },
              { icon: Clock, title: "Gyors hozzáférés", desc: "Nincs várólista. Gyors konzultáció, rugalmas időpontok és teljes kezelés 3-4 napon belül. Közvetlen járatok Budapestről (~2-2,5 óra).", color: "bg-blue-50", iconColor: "text-blue-600" },
            ].map((item, i) => { const Icon = item.icon; return (
              <div key={i} className="bg-white rounded-2xl p-8 shadow-sm border border-slate-200 hover:shadow-md transition-shadow" data-testid={`card-hu-reason-${i}`}>
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
            <h2 className="text-3xl font-bold text-slate-900 mb-4">ESG vs fogyókúrás gyógyszerek</h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">Sok magyar páciens GLP-1 gyógyszerekkel kezdi, mint az Ozempic vagy Wegovy. Az ESG lehet a következő logikus lépés.</p>
          </div>
          <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-sm">
            <table className="w-full text-left" data-testid="table-esg-vs-meds-hu">
              <thead><tr className="bg-slate-900 text-white"><th className="p-4 font-semibold text-sm uppercase tracking-wider">Tényező</th><th className="p-4 font-semibold text-sm uppercase tracking-wider">Ozempic / Wegovy</th><th className="p-4 font-semibold text-sm uppercase tracking-wider bg-primary/90">ESG</th></tr></thead>
              <tbody>{comparisonMeds.map((row, i) => (<tr key={i} className={`border-b border-slate-100 ${i % 2 === 0 ? "bg-white" : "bg-slate-50/50"}`}><td className="p-4 font-medium text-slate-900">{row.factor}</td><td className="p-4 text-slate-700">{row.meds}</td><td className="p-4 text-slate-700 bg-primary/5 font-medium">{row.esg}</td></tr>))}</tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="py-20 bg-blue-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">ESG vs gyomorcső (sleeve) műtét</h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">Az ESG összehasonlítása a <Link href="/sleeve-gastrectomy" className="text-primary hover:underline">műtéti sleeve gastrectomyval</Link>.</p>
          </div>
          <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-sm">
            <table className="w-full text-left" data-testid="table-esg-vs-sleeve-hu">
              <thead><tr className="bg-slate-900 text-white"><th className="p-4 font-semibold text-sm uppercase tracking-wider">Tulajdonság</th><th className="p-4 font-semibold text-sm uppercase tracking-wider bg-primary/90">ESG</th><th className="p-4 font-semibold text-sm uppercase tracking-wider">Gastric Sleeve</th></tr></thead>
              <tbody>{comparisonSurgery.map((row, i) => (<tr key={i} className={`border-b border-slate-100 ${i % 2 === 0 ? "bg-white" : "bg-slate-50/50"}`}><td className="p-4 font-medium text-slate-900">{row.feature}</td><td className="p-4 text-slate-700 bg-primary/5 font-medium">{row.esg}</td><td className="p-4 text-slate-700">{row.sleeve}</td></tr>))}</tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-900 text-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-14"><h2 className="text-3xl font-bold mb-4">Miért az Istanbul Bariatric Center?</h2><p className="text-lg text-slate-300 max-w-3xl mx-auto">Orvosi szaktudás és nemzetközi betegélmény — magyar pácienseink igényeire szabva.</p></div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Stethoscope, title: "Dr. Murat Üstün", desc: "Az ESG úttörője Törökországban. Több ezer sikeres bariatrikus beavatkozás." },
              { icon: ShieldCheck, title: "JCI-akkreditált kórház", desc: "Minden beavatkozás a Liv Hospitalban — JCI-akkreditációval, a nemzetközi aranyszabvánnyal." },
              { icon: Users, title: "Nemzetközi csapat", desc: "Dedikált csapat nemzetközi pácienseknek. Világos kommunikáció és strukturált utánkövetés." },
              { icon: Euro, title: "€ 6.450 all-inclusive", desc: "Nincsenek rejtett költségek. Beavatkozás, kórház, szálloda, transzfer, vizsgálatok, 12 hó dietetikai támogatás." },
            ].map((item, i) => { const Icon = item.icon; return (
              <div key={i} className="bg-white/10 backdrop-blur rounded-xl p-6 text-center" data-testid={`card-hu-ibc-${i}`}>
                <div className="w-14 h-14 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4"><Icon className="w-7 h-7 text-primary" /></div>
                <h3 className="text-lg font-bold mb-2">{item.title}</h3><p className="text-slate-300 text-sm">{item.desc}</p>
              </div>
            ); })}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-14"><h2 className="text-3xl font-bold text-slate-900 mb-4">Kezelési folyamat — lépésről lépésre</h2><p className="text-lg text-slate-600">Az első kapcsolatfelvételtől a hazautazásig — mi mindent megszervezünk.</p></div>
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-primary/20 hidden md:block" />
            <div className="space-y-8">
              {journeySteps.map((step) => { const Icon = step.icon; return (
                <div key={step.step} className="relative flex gap-6" data-testid={`step-journey-hu-${step.step}`}>
                  <div className="relative z-10 shrink-0"><div className="w-16 h-16 rounded-full bg-primary text-white flex items-center justify-center shadow-lg"><Icon className="w-7 h-7" /></div></div>
                  <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200 flex-1 hover:shadow-md transition-shadow">
                    <div className="flex items-center gap-3 mb-2"><Badge variant="outline" className="text-primary border-primary/30">{step.step}. lépés</Badge><h3 className="text-lg font-bold text-slate-900">{step.title}</h3></div>
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
            <div><img src="/esg-hu-istanbul.webp" alt="Isztambul — orvosi turizmus Magyarországról" className="rounded-2xl shadow-xl w-full" width="600" height="400" loading="lazy" /></div>
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-slate-900">Kényelem és elsőosztályú szolgáltatás</h2>
              <p className="text-lg text-slate-600 leading-relaxed">Az Ön jóléte a legfontosabb prioritásunk — attól a pillanattól, hogy megérkezik Isztambulba. VIP transzfer, kényelmes szálloda és a Liv Hospital a legmodernebb orvosi felszereléssel.</p>
              <div className="flex flex-wrap gap-3">{["VIP reptéri transzfer", "Kényelmes szálloda", "Liv Hospital (JCI)", "24/7 támogatás", "WhatsApp kapcsolat"].map((tag) => (<Badge key={tag} className="bg-primary/10 text-primary hover:bg-primary/10 px-3 py-1">{tag}</Badge>))}</div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-14"><h2 className="text-3xl font-bold text-slate-900 mb-4">Várható eredmények az ESG-vel</h2></div>
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="bg-primary text-white rounded-2xl p-8 text-center"><TrendingDown className="w-10 h-10 mx-auto mb-3 opacity-80" /><div className="text-4xl font-bold mb-2">15-20%</div><p className="text-white/80">Teljes súlycsökkenés</p><p className="text-sm text-white/60 mt-2">12-18 hónap alatt</p></div>
            <div className="bg-primary text-white rounded-2xl p-8 text-center"><Activity className="w-10 h-10 mx-auto mb-3 opacity-80" /><div className="text-4xl font-bold mb-2">~20 kg</div><p className="text-white/80">Átlag (BMI 38+)</p><p className="text-sm text-white/60 mt-2">Első 6 hónap</p></div>
            <div className="bg-primary text-white rounded-2xl p-8 text-center"><HeartPulse className="w-10 h-10 mx-auto mb-3 opacity-80" /><div className="text-4xl font-bold mb-2">Jelentős</div><p className="text-white/80">Egészségjavulás</p><p className="text-sm text-white/60 mt-2">Diabétesz, vérnyomás, alvási apnoé</p></div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-14"><h2 className="text-3xl font-bold text-slate-900 mb-4">{huFlag} Magyar pácienseink tapasztalatai</h2></div>
          <div className="grid md:grid-cols-3 gap-8">
            {huTestimonials.map((t, i) => (
              <div key={i} className="bg-white rounded-2xl p-8 shadow-sm border border-slate-200" data-testid={`testimonial-hu-${i}`}>
                <div className="flex items-center gap-1 mb-4">{[...Array(5)].map((_, si) => (<Star key={si} className="w-5 h-5 fill-yellow-400 text-yellow-400" />))}</div>
                <p className="text-slate-600 italic leading-relaxed mb-6">&ldquo;{t.text}&rdquo;</p>
                <div className="flex items-center justify-between"><div><p className="font-bold text-slate-900">{t.name}</p><p className="text-sm text-slate-500 flex items-center gap-1"><MapPin className="w-3 h-3" /> {t.location}</p></div><div className="text-right"><p className="font-bold text-primary">{t.weight}</p><p className="text-xs text-slate-500">{t.time}</p></div></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20" id="bmi-section-hu">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-start max-w-6xl mx-auto">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-slate-900">Ki alkalmas az ESG-re?</h2>
              <p className="text-lg text-slate-600 leading-relaxed">Az ESG azoknak szól, akik túlsúllyal küzdenek, és az életmódváltoztatás és a nagyobb műtét közötti megoldást keresnek.</p>
              <div className="space-y-3">
                {["BMI 30 és 40 között", "Diéták és mozgás nem hoztak tartós eredményt", "Nem szeretne invazív műtétet", "Gyógyszerek nem voltak elégségesek vagy túl drágák", "Minimálisan invazív módszert preferál rövid felépüléssel", "Túlsúlyhoz kapcsolódó betegségek (2-es típusú diabétesz, magas vérnyomás, alvási apnoé)"].map((item, i) => (
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
              <h2 className="text-3xl font-bold text-slate-900">Biztonság és minőségi szabványok</h2>
              <p className="text-lg text-slate-600 leading-relaxed">Az ESG az egyik legbiztonságosabb fogyási eljárásnak számít, ha tapasztalt specialisták végzik. Dr. Murat Üstün több ezer ESG beavatkozást végzett a JCI-akkreditált Liv Hospitalban.</p>
              <div className="space-y-3">
                {["JCI-akkreditált kórház (nemzetközi aranyszabvány)", "Több ezer ESG beavatkozással rendelkező sebész", "Fejlett varratechnológia (Apollo OverStitch)", "Teljes preoperatív egészségügyi ellenőrzés", "24/7 orvosi támogatás a beavatkozás után", "Komplett orvosi protokollok"].map((item, i) => (
                  <div key={i} className="flex items-start gap-3"><ShieldCheck className="w-5 h-5 text-green-600 shrink-0 mt-0.5" /><p className="text-slate-700">{item}</p></div>
                ))}
              </div>
            </div>
            <div><img src="/esg-hu-consultation.webp" alt="Orvosi konzultáció magyar pácienseknek" className="rounded-2xl shadow-xl w-full" width="600" height="400" loading="lazy" /></div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-slate-900 mb-4 text-center">Élet az ESG után</h2>
          <p className="text-lg text-slate-600 text-center mb-12">A beavatkozás csak a kezdet. Így néz ki a felépülés.</p>
          <div className="space-y-4">
            {[
              { phase: "Első 8 óra", desc: "Csak tiszta folyadékok. Pihenés és felépülés orvosi felügyelet alatt.", icon: "🏥", color: "border-red-200 bg-red-50" },
              { phase: "1-2. hét", desc: "Folyékony étrend — fehérjeturmixok, húsleves, víz.", icon: "🥤", color: "border-orange-200 bg-orange-50" },
              { phase: "3-6. hét", desc: "Fokozatos átállás félszilárd ételekre. Pépesített ételek és puha fehérjék.", icon: "🥣", color: "border-yellow-200 bg-yellow-50" },
              { phase: "7. héttől", desc: "Átállás egészséges szilárd ételekre. Fehérjedús, kiegyensúlyozott étrend.", icon: "🥗", color: "border-green-200 bg-green-50" },
              { phase: "3-12. hónap", desc: "Folyamatos dietetikai támogatás rendszeres konzultációkkal.", icon: "📊", color: "border-blue-200 bg-blue-50" },
            ].map((phase, i) => (
              <div key={i} className={`flex items-start gap-5 p-6 rounded-xl border ${phase.color}`}><span className="text-3xl shrink-0">{phase.icon}</span><div><h4 className="font-bold text-slate-900 mb-1">{phase.phase}</h4><p className="text-slate-600 leading-relaxed">{phase.desc}</p></div></div>
            ))}
          </div>
          <div className="mt-10 p-6 bg-primary/5 rounded-xl border border-primary/10">
            <div className="flex items-start gap-4"><Utensils className="w-8 h-8 text-primary shrink-0 mt-1" /><div><h4 className="font-bold text-slate-900 mb-2">12 hónapos dietetikai támogatás</h4><p className="text-slate-600">Minden ESG csomag tartalmazza a hozzáférést egy képzett dietetikushoz, aki egyéni étrendtervet készít és végigkíséri Önt az első év során.</p></div></div>
          </div>
        </div>
      </section>

      <section className="py-20" data-testid="section-faq-hu">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12"><h2 className="text-3xl font-bold text-slate-900 mb-4">Gyakran ismételt kérdések — ESG magyar pácienseknek</h2><p className="text-lg text-slate-600">Minden, amit tudnia kell az isztambuli utazás előtt.</p></div>
          <FAQAccordion faqs={huFaqs} />
        </div>
      </section>

      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-2xl font-bold text-slate-900 mb-8 text-center">Fedezze fel további kezelési lehetőségeinket</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { title: "ESG — teljes tájékoztatás", href: "/esg", desc: "Az eljárás minden részlete" },
              { title: "Sleeve Gastrectomy", href: "/sleeve-gastrectomy", desc: "A legnépszerűbb bariatrikus műtét" },
              { title: "Gyomorballon", href: "/gastric-balloon", desc: "Nem-sebészeti alternatíva" },
              { title: "Összes kezelés", href: "/treatments", desc: "Összehasonlítás és árak" },
              { title: "Eredmények", href: "/results", desc: "Páciens sikertörténetek" },
              { title: "Kapcsolat", href: "/contact", desc: "Beszéljen csapatunkkal" },
            ].map((link, i) => (
              <Link key={i} href={link.href} className="flex items-center gap-3 p-4 bg-white rounded-xl border border-slate-200 hover:border-primary/30 hover:shadow-sm transition-all group" data-testid={`link-internal-hu-${i}`}>
                <ArrowRight className="w-4 h-4 text-primary shrink-0 group-hover:translate-x-1 transition-transform" />
                <div><p className="font-medium text-slate-900 group-hover:text-primary transition-colors">{link.title}</p><p className="text-xs text-slate-500">{link.desc}</p></div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-primary text-white" data-testid="section-cta-hu">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <span className="text-5xl mb-6 block">{huFlag}</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Tegye meg az első lépést még ma</h2>
          <p className="text-xl text-white/80 mb-4 leading-relaxed">Ha biztonságos és hatékony alternatívát keres a műtéttel szemben, az Endoszkópos Sleeve Gastroplasztika lehet az Ön számára ideális megoldás.</p>
          <p className="text-lg text-white/70 mb-8">Lépjen velünk kapcsolatba még ma egy ingyenes online konzultációért. Felmérjük alkalmasságát, megválaszolunk minden kérdést és egyéni kezelési tervet készítünk — kötelezettségek nélkül.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-primary hover:bg-white/90 font-bold text-lg h-14 px-10" onClick={() => window.open("https://wa.me/905324131143?text=Szia%2C%20Magyarorsz%C3%A1gr%C3%B3l%20%C3%ADrok%20%C3%A9s%20%C3%A9rdekel%20az%20ESG", "_blank")} data-testid="button-cta-whatsapp-hu"><Phone className="w-5 h-5 mr-2" />WhatsApp: +90 532 413 1143</Button>
            <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 font-bold text-lg h-14 px-10" onClick={() => window.open("mailto:drmuratustun@gmail.com?subject=ESG%20%C3%A9rdekl%C5%91d%C3%A9s%20Magyarorsz%C3%A1gr%C3%B3l", "_blank")} data-testid="button-cta-email-hu"><MessageCircle className="w-5 h-5 mr-2" />E-mail küldése</Button>
          </div>
          <p className="text-white/50 mt-6 text-sm">E-mail: <a href="mailto:drmuratustun@gmail.com" className="text-white/70 hover:text-white underline">drmuratustun@gmail.com</a></p>
        </div>
      </section>

      <Footer />
    </div>
  );
}

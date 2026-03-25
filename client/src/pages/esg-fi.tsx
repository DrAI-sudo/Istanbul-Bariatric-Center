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

const fiFaqs = [
  {
    question: "Onko ESG saatavilla julkisessa terveydenhuollossa Suomessa?",
    answer: "Endoskooppista sleeve gastroplastiaa ei ole saatavilla julkisessa terveydenhuollossa Suomessa. Yksityisklinikkojen hinnat Helsingissä ja Tampereella ovat 8.000-15.000 € välillä. Istanbul Bariatric Centerin all-inclusive-paketti on € 6.450 — sisältäen toimenpiteen, JCI-akkreditoidun sairaalan, hotellin, VIP-kuljetuksen ja 12 kuukauden ravitsemustuen.",
  },
  {
    question: "Kuinka kauan minun täytyy olla Istanbulissa?",
    answer: "Useimmat suomalaiset potilaat viipyvät Istanbulissa 3-4 päivää. Saavutte toimenpidettä edeltävänä päivänä, ESG tehdään seuraavana päivänä, kolmantena päivänä levätään hotellissa ja neljäntenä päivänä palataan kotiin. Suorat lennot Helsinki-Vantaalta (~3,5-4 tuntia).",
  },
  {
    question: "Onko toimenpide kivulias?",
    answer: "ESG tehdään yleisanestesiassa — ette tunne mitään toimenpiteen aikana. Heräämisen jälkeen voitte tuntea lievää epämukavuutta, pahoinvointia tai täysinäisyyden tunnetta. Nämä oireet häviävät yleensä 1-3 päivässä ja niitä hallitaan hyvin lääkkeillä.",
  },
  {
    question: "Ovatko tulokset pysyviä?",
    answer: "Kyllä, oikealla elämäntavalla. ESG luo fyysisen tilavuuden pienennyksen mahaan — se on rakenteellinen muutos. Tulosten ylläpitämiseksi on tärkeää noudattaa ruokavaliosuunnitelmaa, harrastaa säännöllistä liikuntaa ja osallistua seurantaan. 12 kuukauden ravitsemusohjelma pätevän ravitsemusterapeutin kanssa sisältyy kaikkiin paketteihin.",
  },
  {
    question: "Mikä on ESG:n ja Ozempicin/Wegovyn ero?",
    answer: "GLP-1-lääkkeet kuten Ozempic ja Wegovy voivat olla tehokkaita aluksi, mutta monet potilaat lihoavat uudelleen lopetuksen jälkeen. Jatkuvat kuukausikustannukset (200-400 €/kk) kertyvät nopeasti. ESG tarjoaa kertaratkaisun — mahan fyysisen pienennyksen ilman toistuvia kustannuksia.",
  },
  {
    question: "Mikä BMI vaaditaan ESG:hen?",
    answer: "ESG suositellaan yleensä potilaille, joiden BMI on 30-40. Toimenpide sopii erityisesti henkilöille, jotka eivät ole saavuttaneet pysyviä tuloksia ruokavaliolla ja liikunnalla, eivät halua invasiivista leikkausta tai suosivat minimaalisesti invasiivista menetelmää lyhyellä toipumisajalla.",
  },
  {
    question: "Onko hoito ulkomailla turvallista?",
    answer: "Istanbul Bariatric Center toimii Liv Hospitalissa, jolla on JCI-akkreditointi (Joint Commission International) — kansainvälinen kultastandardi potilasturvallisuudessa. Dr. Murat Üstün on suorittanut tuhansia ESG-toimenpiteitä erinomaisilla turvallisuustuloksilla.",
  },
  {
    question: "Mitä all-inclusive-paketti sisältää?",
    answer: "ESG-pakettimme hintaan € 6.450 sisältää: täydellisen toimenpiteen, sairaalahoitojakson JCI-akkreditoidussa sairaalassa, preoperatiiviset testit, VIP-lentokenttäkuljetuksen, hotellimajoituksen, postoperatiivisen lääkityksen, 12 kuukauden ravitsemustuen ja jatkuvan seurannan. Ei piilokustannuksia.",
  },
];

const journeySteps = [
  { step: 1, title: "Ilmainen online-konsultaatio", desc: "Ottakaa yhteyttä WhatsAppin tai verkkosivustomme kautta. Tiimimme arvioi BMI:nne, sairaushistorianne ja tavoitteenne ESG-soveltuvuuden varmistamiseksi.", icon: MessageCircle },
  { step: 2, title: "Matka Turkkiin", desc: "Valitkaa päivämäärä — me järjestämme loput. Suorat lennot Helsinki-Vantaalta (~3,5-4 tuntia).", icon: Plane },
  { step: 3, title: "VIP-kuljetus ja hotelli", desc: "Henkilökohtainen kuljettaja odottaa Istanbulin lentokentällä ja vie teidät hotellille.", icon: Hotel },
  { step: 4, title: "Preoperatiiviset tutkimukset", desc: "Täydelliset verikokeet ja terveystarkastus sairaalassa. Henkilökohtainen tapaaminen Dr. Murat Üstünin kanssa.", icon: Stethoscope },
  { step: 5, title: "ESG-toimenpide", desc: "ESG tehdään yleisanestesiassa Liv Hospitalissa (JCI). Kesto: 60-90 minuuttia. Ei viiltoja, ei arpia.", icon: HeartPulse },
  { step: 6, title: "Toipuminen ja kotimatka", desc: "Lepoa hotellissa jatkuvan lääketieteellisen seurannan alaisena. Useimmat potilaat matkustavat kotiin 2-3 päivän kuluttua toimenpiteestä.", icon: Plane },
];

const comparisonMeds = [
  { factor: "Pitkäaikainen vaikutus", meds: "Rajallinen — paino palaa usein", esg: "Vakaa — pysyvä fyysinen pienennys" },
  { factor: "Haittavaikutukset", meds: "Yleisiä (pahoinvointi, ripuli, haimatulehdusriski)", esg: "Vähäisiä (lievä epämukavuus 1-3 pv)" },
  { factor: "Kustannus", meds: "Jatkuva 200-400 €/kk (2.400-4.800 €/vuosi)", esg: "Kertamaksu: € 6.450 all-inclusive" },
  { factor: "Painonnousu", meds: "Yleistä lopetuksen jälkeen", esg: "Rajallista terveellisellä elämäntavalla" },
  { factor: "Toimenpide", meds: "Ei — viikottaiset/päivittäiset injektiot", esg: "Kyllä — yksi endoskooppinen toimenpide (60-90 min)" },
];

const comparisonSurgery = [
  { feature: "Toimenpiteen tyyppi", esg: "Endoskooppinen (suun kautta)", sleeve: "Laparoskooppinen leikkaus (4-5 viiltoa)" },
  { feature: "Anestesia", esg: "Yleinen", sleeve: "Yleinen" },
  { feature: "Kesto", esg: "60-90 minuuttia", sleeve: "~60 minuuttia" },
  { feature: "Sairaalajakso", esg: "Samana päivänä tai 1 yö", sleeve: "2-3 yötä" },
  { feature: "Toipuminen", esg: "1-3 päivää", sleeve: "2-3 viikkoa" },
  { feature: "Arvet", esg: "Ei lainkaan", sleeve: "4-5 pientä" },
  { feature: "Painonpudotus", esg: "15-20% kehonpainosta", sleeve: "60-70% ylipainosta" },
  { feature: "Palautuvuus", esg: "Mahdollisesti palautettavissa", sleeve: "Pysyvä (mahakudos poistettu)" },
  { feature: "Riskiprofiili", esg: "Erittäin matala", sleeve: "Matala" },
];

const fiTestimonials = [
  { name: "Liisa K.", location: "Helsinki", text: "Vuosien diettien ja Ozempicin jälkeen ilman pysyviä tuloksia löysin ESG:n. Istanbul Bariatric Centerin tiimi oli uskomattoman ammattimainen. 5 kuukaudessa laihduin 16 kg. Vihdoinkin tunnen itseni vapaaksi.", weight: "−16 kg", time: "5 kk" },
  { name: "Mikko T.", location: "Tampere", text: "Olin aluksi skeptinen hoidosta ulkomailla. Mutta Liv Hospital ylitti kaikki odotukseni — laatu oli korkeampaa kuin mitään mitä olen nähnyt Suomessa. Dr. Murat on poikkeuksellinen lääkäri ja hinta oli murto-osa kotimaisesta.", weight: "−21 kg", time: "6 kk" },
  { name: "Anna S.", location: "Turku", text: "Lentokenttäkuljetuksesta ravitsemustukeen — kaikki oli täydellisesti järjestetty. En olisi koskaan uskonut tulosten tulevan niin nopeasti. 12 kuukauden ohjelma auttoi todella muuttamaan ruokailutottumuksiani.", weight: "−14 kg", time: "4 kk" },
];

function BMICalculator() {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [bmi, setBmi] = useState<number | null>(null);
  const calculateBMI = () => { const h = parseFloat(height) / 100; const w = parseFloat(weight); if (h > 0 && w > 0) setBmi(Math.round((w / (h * h)) * 10) / 10); };
  const getBMICategory = (bmi: number) => {
    if (bmi < 18.5) return { label: "Alipainoinen", color: "text-blue-600", eligible: false };
    if (bmi < 25) return { label: "Normaalipaino", color: "text-green-600", eligible: false };
    if (bmi < 30) return { label: "Ylipaino", color: "text-yellow-600", eligible: false };
    if (bmi < 35) return { label: "Lihavuus (aste I)", color: "text-orange-600", eligible: true };
    if (bmi < 40) return { label: "Lihavuus (aste II)", color: "text-red-500", eligible: true };
    return { label: "Vaikea lihavuus (aste III)", color: "text-red-700", eligible: false, surgical: true };
  };
  return (
    <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-200" data-testid="bmi-calculator-fi">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center"><Calculator className="w-6 h-6 text-primary" /></div>
        <div><h3 className="text-xl font-bold text-slate-900">Sopiiko ESG minulle?</h3><p className="text-sm text-slate-500">Laske BMI ja tarkista soveltuvuutesi</p></div>
      </div>
      <div className="grid sm:grid-cols-2 gap-4 mb-4">
        <div><label className="block text-sm font-medium text-slate-700 mb-1">Pituus (cm)</label><input type="number" value={height} onChange={(e) => setHeight(e.target.value)} placeholder="esim. 175" className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none" data-testid="input-height-fi" /></div>
        <div><label className="block text-sm font-medium text-slate-700 mb-1">Paino (kg)</label><input type="number" value={weight} onChange={(e) => setWeight(e.target.value)} placeholder="esim. 100" className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none" data-testid="input-weight-fi" /></div>
      </div>
      <Button onClick={calculateBMI} className="w-full bg-primary hover:bg-primary/90 h-12" data-testid="button-calculate-bmi-fi">Laske BMI</Button>
      {bmi !== null && (
        <div className="mt-6 p-4 rounded-xl bg-slate-50 border border-slate-200" data-testid="bmi-result-fi">
          <div className="text-center mb-3"><span className="text-4xl font-bold text-primary">{bmi}</span><p className={`text-lg font-semibold ${getBMICategory(bmi).color}`}>{getBMICategory(bmi).label}</p></div>
          {getBMICategory(bmi).eligible ? (
            <div className="bg-green-50 border border-green-200 rounded-lg p-3 text-center"><p className="text-green-800 font-medium">Saatat olla sopiva ESG-ehdokas!</p><p className="text-green-600 text-sm mt-1">Ota yhteyttä ilmaista konsultaatiota varten.</p></div>
          ) : getBMICategory(bmi).surgical ? (
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 text-center"><p className="text-blue-800 font-medium">Bariatrinen leikkaus voi olla sopivampi.</p><p className="text-blue-600 text-sm mt-1"><Link href="/treatments" className="underline">Katso kaikki hoitovaihtoehdot</Link></p></div>
          ) : (
            <div className="bg-slate-100 border border-slate-200 rounded-lg p-3 text-center"><p className="text-slate-700 font-medium">ESG suositellaan yleensä BMI:lle 30-40.</p><p className="text-slate-500 text-sm mt-1">Ota yhteyttä keskustellaksesi vaihtoehdoistasi.</p></div>
          )}
        </div>
      )}
    </div>
  );
}

function FAQAccordion({ faqs }: { faqs: typeof fiFaqs }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  return (
    <div className="space-y-3" data-testid="faq-accordion-fi">
      {faqs.map((faq, i) => (
        <div key={i} className={`rounded-xl border transition-all duration-200 ${openIndex === i ? "border-primary/30 bg-white shadow-md" : "border-slate-200 bg-white hover:border-slate-300"}`} data-testid={`faq-item-fi-${i}`}>
          <button className="w-full flex items-center justify-between p-5 text-left" onClick={() => setOpenIndex(openIndex === i ? null : i)} data-testid={`button-faq-fi-${i}`}>
            <span className="font-semibold text-slate-900 pr-4">{faq.question}</span>
            {openIndex === i ? <ChevronUp className="w-5 h-5 text-primary shrink-0" /> : <ChevronDown className="w-5 h-5 text-slate-400 shrink-0" />}
          </button>
          {openIndex === i && <div className="px-5 pb-5 text-slate-600 leading-relaxed animate-in fade-in duration-200">{faq.answer}</div>}
        </div>
      ))}
    </div>
  );
}

export default function ESGFinland() {
  const fiFlag = "🇫🇮";
  const trFlag = "🇹🇷";

  return (
    <div className="min-h-screen bg-white">
      <SEO title="ESG Turkki suomalaisille potilaille | Laihtuminen ilman leikkausta | € 6.450 all-inclusive" description="Endoskooppinen sleeve gastroplastia ilman leikkausta suomalaisille potilaille. All-inclusive-paketti € 6.450 JCI-akkreditoidussa sairaalassa. Säästöjä Suomeen verrattuna. Ilmainen konsultaatio." keywords="ESG Suomi, laihtuminen ilman leikkausta, gastroplastia Turkki, Ozempic vaihtoehto, painonpudotus hoito, mahalaukun pienennys ilman leikkausta" url="/esg/fi" />
      <JsonLd data={{ "@context": "https://schema.org", "@type": "MedicalProcedure", "name": "Endoskooppinen Sleeve Gastroplastia suomalaisille potilaille", "alternateName": ["ESG Suomi", "ESG Turkki", "Laihtuminen ilman leikkausta"], "description": "Endoskooppinen Sleeve Gastroplastia (ESG) suomalaisille potilaille Istanbul Bariatric Centerissä. JCI-akkreditoitu sairaala. All-inclusive € 6.450.", "procedureType": "Endoscopic", "bodyLocation": "Stomach", "relevantSpecialty": { "@type": "MedicalSpecialty", "name": "Bariatric Surgery" }, "offers": [{ "@type": "Offer", "name": "ESG All-Inclusive Paketti", "price": "6450", "priceCurrency": "EUR" }] }} />
      <JsonLd data={structuredData.createFAQ(fiFaqs)} />
      <JsonLd data={structuredData.createBreadcrumb([{ name: "Home", url: "/" }, { name: "Treatments", url: "/treatments" }, { name: "ESG", url: "/esg" }, { name: "ESG suomalaisille", url: "/esg/fi" }])} />
      <Navbar />

      <section className="relative bg-slate-900 text-white pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-primary/30 opacity-90" />
        <div className="absolute inset-0 opacity-15" style={{ backgroundImage: "url('/esg-fi-hero.webp')", backgroundSize: "cover", backgroundPosition: "center" }} />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center gap-3 mb-6">
              <span className="text-4xl">{fiFlag}</span>
              <Badge variant="outline" className="border-white/30 text-white/90 text-sm px-4 py-1">Suomalaisille potilaille</Badge>
              <span className="text-4xl">{trFlag}</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight" data-testid="heading-esg-fi-hero">Endoskooppinen Sleeve Gastroplastia (ESG) — Laihtuminen ilman leikkausta Turkissa</h1>
            <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto mb-8 leading-relaxed">Painonpudotus ja tulosten ylläpitäminen voi olla erittäin haastavaa — jopa ruokavalioilla, liikunnalla ja lääkkeillä kuten Ozempic tai Wegovy. ESG on moderni, turvallinen ratkaisu laihtumiseen ilman leikkausta. All-inclusive-paketti € 6.450.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary hover:bg-primary/90 font-bold text-lg h-14 px-8" onClick={() => window.open("https://wa.me/905324131143?text=Hei%2C%20olen%20Suomesta%20ja%20olen%20kiinnostunut%20ESG%3Ast%C3%A4", "_blank")} data-testid="button-hero-whatsapp-fi"><Phone className="w-5 h-5 mr-2" />Ilmainen konsultaatio</Button>
              <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 font-bold text-lg h-14 px-8" onClick={() => document.getElementById("bmi-section-fi")?.scrollIntoView({ behavior: "smooth" })} data-testid="button-hero-bmi-fi"><Calculator className="w-5 h-5 mr-2" />Sopiiko minulle?</Button>
            </div>
            <div className="flex flex-wrap gap-6 justify-center mt-10 text-sm text-slate-400">
              <span className="flex items-center gap-2"><ShieldCheck className="w-4 h-4" /> JCI-akkreditoitu sairaala</span>
              <span className="flex items-center gap-2"><Euro className="w-4 h-4" /> € 6.450 all-inclusive</span>
              <span className="flex items-center gap-2"><Clock className="w-4 h-4" /> 3-4 päivän oleskelu</span>
              <span className="flex items-center gap-2"><Stethoscope className="w-4 h-4" /> 8 000+ onnistunutta toimenpidettä</span>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-b from-green-50 to-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-white rounded-2xl p-10 shadow-xl border-2 border-green-200 text-center" data-testid="card-pricing-fi">
            <Badge className="bg-green-100 text-green-800 hover:bg-green-100 text-sm mb-4">Täysin läpinäkyvä hinta</Badge>
            <h2 className="text-3xl font-bold text-slate-900 mb-2">ESG All-Inclusive Paketti</h2>
            <div className="text-6xl font-bold text-primary my-4">€ 6.450</div>
            <p className="text-slate-500 text-lg mb-2">Suomessa yksityisesti 8.000-15.000 €</p>
            <p className="text-slate-600 mb-8">Ei piilokustannuksia. Kaikki sisältyy.</p>
            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4 text-left">
              {["Täydellinen ESG-toimenpide", "Yleisanestesia", "JCI-akkreditoitu sairaala", "Preoperatiiviset testit", "VIP-lentokenttäkuljetus", "Hotellimajoitus", "Postoperatiivinen lääkitys", "12 kk ravitsemustuki"].map((item, i) => (
                <div key={i} className="flex items-center gap-2 text-sm"><CheckCircle2 className="w-4 h-4 text-green-600 shrink-0" /><span className="text-slate-700">{item}</span></div>
              ))}
            </div>
            <Button className="mt-8 bg-primary hover:bg-primary/90 font-bold text-lg h-12 px-10" onClick={() => window.open("https://wa.me/905324131143?text=Hei%2C%20olen%20kiinnostunut%20ESG-paketista%20%E2%82%AC%206.450", "_blank")} data-testid="button-book-fi">Varaa ilmainen konsultaatio</Button>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-slate-900">Mikä on Endoskooppinen Sleeve Gastroplastia (ESG)?</h2>
              <p className="text-lg text-slate-600 leading-relaxed">ESG on innovatiivinen toimenpide, joka <strong>pienentää mahalaukun tilavuutta ilman leikkausta</strong>. Suun kautta viedään endoskooppi, jolla asetetaan sisäiset ompeleet, jotka pienentävät mahalaukun tilavuutta 70-80 %. Toisin kuin perinteisessä <Link href="/sleeve-gastrectomy" className="text-primary hover:underline">sleeve gastrectomyssa</Link> ei tehdä viiltoja, kudosta ei poisteta ja toipuminen on huomattavasti nopeampaa.</p>
              <p className="text-lg text-slate-600 leading-relaxed">Toimenpide käyttää Apollo OverStitch -teknologiaa ja kestää noin 60-90 minuuttia yleisanestesiassa. Tulos: nopeampi kylläisyyden tunne ja luonnollisesti vähentynyt ruokamäärä.</p>
              <div className="grid grid-cols-3 gap-4 pt-4">
                <div className="text-center p-4 bg-primary/5 rounded-xl"><div className="text-2xl font-bold text-primary">60-90</div><p className="text-sm text-slate-600 mt-1">minuuttia</p></div>
                <div className="text-center p-4 bg-primary/5 rounded-xl"><div className="text-2xl font-bold text-primary">Ei</div><p className="text-sm text-slate-600 mt-1">viiltoja</p></div>
                <div className="text-center p-4 bg-primary/5 rounded-xl"><div className="text-2xl font-bold text-primary">1-3</div><p className="text-sm text-slate-600 mt-1">päivää toipumista</p></div>
              </div>
            </div>
            <div className="flex justify-center"><img src="/esg-procedure-cdn.webp" alt="ESG-toimenpide Endoskooppinen Sleeve Gastroplastia" className="rounded-2xl shadow-xl max-w-md w-full" width="400" height="400" loading="lazy" /></div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">{fiFlag} Miksi suomalaiset potilaat valitsevat ESG:n Turkissa</h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">Yhä useammat suomalaiset valitsevat Istanbulin bariatriseen hoitoon — laatu, saatavuus ja läpinäkyvyys keskiössä.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: ShieldCheck, title: "Rajallinen saatavuus Suomessa", desc: "ESG ei ole saatavilla julkisessa terveydenhuollossa. Yksityisklinikkojen hinnat ovat 8.000-15.000 € ja jonotusajat pitkiä.", color: "bg-red-50", iconColor: "text-red-500" },
              { icon: Euro, title: "Merkittävät säästöt", desc: "Suomessa yksityinen ESG maksaa 8.000-15.000 €. All-inclusive-pakettimme on € 6.450 — toimenpiteellä, sairaalalla, hotellilla, kuljetuksella ja 12 kk seurannalla.", color: "bg-green-50", iconColor: "text-green-600" },
              { icon: Clock, title: "Nopea hoitoonpääsy", desc: "Ei jonotuslistaa. Nopea konsultaatio, joustavat päivämäärät ja täydellinen hoito 3-4 päivässä. Suorat lennot Helsinki-Vantaalta (~3,5-4 tuntia).", color: "bg-blue-50", iconColor: "text-blue-600" },
            ].map((item, i) => { const Icon = item.icon; return (
              <div key={i} className="bg-white rounded-2xl p-8 shadow-sm border border-slate-200 hover:shadow-md transition-shadow" data-testid={`card-fi-reason-${i}`}>
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
            <h2 className="text-3xl font-bold text-slate-900 mb-4">ESG vs painonpudotuslääkkeet</h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">Monet suomalaiset potilaat aloittavat GLP-1-lääkkeillä kuten Ozempic tai Wegovy. ESG voi olla seuraava looginen askel.</p>
          </div>
          <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-sm">
            <table className="w-full text-left" data-testid="table-esg-vs-meds-fi">
              <thead><tr className="bg-slate-900 text-white"><th className="p-4 font-semibold text-sm uppercase tracking-wider">Tekijä</th><th className="p-4 font-semibold text-sm uppercase tracking-wider">Ozempic / Wegovy</th><th className="p-4 font-semibold text-sm uppercase tracking-wider bg-primary/90">ESG</th></tr></thead>
              <tbody>{comparisonMeds.map((row, i) => (<tr key={i} className={`border-b border-slate-100 ${i % 2 === 0 ? "bg-white" : "bg-slate-50/50"}`}><td className="p-4 font-medium text-slate-900">{row.factor}</td><td className="p-4 text-slate-700">{row.meds}</td><td className="p-4 text-slate-700 bg-primary/5 font-medium">{row.esg}</td></tr>))}</tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="py-20 bg-blue-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">ESG vs mahalaukun ohitusleikkaus</h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">ESG:n vertailu <Link href="/sleeve-gastrectomy" className="text-primary hover:underline">kirurgiseen sleeve gastrectomyyn</Link>.</p>
          </div>
          <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-sm">
            <table className="w-full text-left" data-testid="table-esg-vs-sleeve-fi">
              <thead><tr className="bg-slate-900 text-white"><th className="p-4 font-semibold text-sm uppercase tracking-wider">Ominaisuus</th><th className="p-4 font-semibold text-sm uppercase tracking-wider bg-primary/90">ESG</th><th className="p-4 font-semibold text-sm uppercase tracking-wider">Gastric Sleeve</th></tr></thead>
              <tbody>{comparisonSurgery.map((row, i) => (<tr key={i} className={`border-b border-slate-100 ${i % 2 === 0 ? "bg-white" : "bg-slate-50/50"}`}><td className="p-4 font-medium text-slate-900">{row.feature}</td><td className="p-4 text-slate-700 bg-primary/5 font-medium">{row.esg}</td><td className="p-4 text-slate-700">{row.sleeve}</td></tr>))}</tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-900 text-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-14"><h2 className="text-3xl font-bold mb-4">Miksi valita Istanbul Bariatric Center?</h2><p className="text-lg text-slate-300 max-w-3xl mx-auto">Yhdistämme lääketieteellisen osaamisen potilaskokemukseen, joka on räätälöity kansainvälisille — ja erityisesti pohjoismaisille — potilaille.</p></div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Stethoscope, title: "Dr. Murat Üstün", desc: "ESG:n uranuurtaja Turkissa. Tuhansia onnistuneita bariatrisiä toimenpiteitä." },
              { icon: ShieldCheck, title: "JCI-akkreditoitu sairaala", desc: "Kaikki toimenpiteet Liv Hospitalissa — JCI-akkreditoinnilla, kansainvälisellä kultastandardilla." },
              { icon: Users, title: "Kansainvälinen tiimi", desc: "Omistettu tiimi kansainvälisille potilaille. Selkeä viestintä ja jäsennelty seuranta." },
              { icon: Euro, title: "€ 6.450 all-inclusive", desc: "Ei piilokustannuksia. Toimenpide, sairaala, hotelli, kuljetus, testit, 12 kk ravitsemustuki." },
            ].map((item, i) => { const Icon = item.icon; return (
              <div key={i} className="bg-white/10 backdrop-blur rounded-xl p-6 text-center" data-testid={`card-fi-ibc-${i}`}>
                <div className="w-14 h-14 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4"><Icon className="w-7 h-7 text-primary" /></div>
                <h3 className="text-lg font-bold mb-2">{item.title}</h3><p className="text-slate-300 text-sm">{item.desc}</p>
              </div>
            ); })}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-14"><h2 className="text-3xl font-bold text-slate-900 mb-4">Hoitoprosessi — askel askeleelta</h2><p className="text-lg text-slate-600">Ensimmäisestä yhteydenotosta kotiinpaluuseen — me hoidamme kaikki yksityiskohdat.</p></div>
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-primary/20 hidden md:block" />
            <div className="space-y-8">
              {journeySteps.map((step) => { const Icon = step.icon; return (
                <div key={step.step} className="relative flex gap-6" data-testid={`step-journey-fi-${step.step}`}>
                  <div className="relative z-10 shrink-0"><div className="w-16 h-16 rounded-full bg-primary text-white flex items-center justify-center shadow-lg"><Icon className="w-7 h-7" /></div></div>
                  <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200 flex-1 hover:shadow-md transition-shadow">
                    <div className="flex items-center gap-3 mb-2"><Badge variant="outline" className="text-primary border-primary/30">Vaihe {step.step}</Badge><h3 className="text-lg font-bold text-slate-900">{step.title}</h3></div>
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
            <div><img src="/esg-fi-istanbul.webp" alt="Istanbul — lääketieteellinen matkailu Suomesta" className="rounded-2xl shadow-xl w-full" width="600" height="400" loading="lazy" /></div>
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-slate-900">Mukavuus ja ensiluokkainen palvelu</h2>
              <p className="text-lg text-slate-600 leading-relaxed">Hyvinvointinne on korkein prioriteettimme — siitä hetkestä kun saavutte Istanbuliin. VIP-kuljetus, mukava hotelli ja Liv Hospital uusimmalla lääketieteellisellä varustuksella.</p>
              <div className="flex flex-wrap gap-3">{["VIP-lentokenttäkuljetus", "Mukava hotelli", "Liv Hospital (JCI)", "24/7 tuki", "WhatsApp-yhteys"].map((tag) => (<Badge key={tag} className="bg-primary/10 text-primary hover:bg-primary/10 px-3 py-1">{tag}</Badge>))}</div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-14"><h2 className="text-3xl font-bold text-slate-900 mb-4">Odotetut tulokset ESG:stä</h2></div>
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="bg-primary text-white rounded-2xl p-8 text-center"><TrendingDown className="w-10 h-10 mx-auto mb-3 opacity-80" /><div className="text-4xl font-bold mb-2">15-20%</div><p className="text-white/80">Kokonaispainonpudotus</p><p className="text-sm text-white/60 mt-2">12-18 kuukauden aikana</p></div>
            <div className="bg-primary text-white rounded-2xl p-8 text-center"><Activity className="w-10 h-10 mx-auto mb-3 opacity-80" /><div className="text-4xl font-bold mb-2">~20 kg</div><p className="text-white/80">Keskiarvo (BMI 38+)</p><p className="text-sm text-white/60 mt-2">Ensimmäiset 6 kuukautta</p></div>
            <div className="bg-primary text-white rounded-2xl p-8 text-center"><HeartPulse className="w-10 h-10 mx-auto mb-3 opacity-80" /><div className="text-4xl font-bold mb-2">Merkittävä</div><p className="text-white/80">Terveyden paraneminen</p><p className="text-sm text-white/60 mt-2">Diabetes, verenpaine, uniapnea</p></div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-14"><h2 className="text-3xl font-bold text-slate-900 mb-4">{fiFlag} Suomalaisten potilaiden kokemuksia</h2></div>
          <div className="grid md:grid-cols-3 gap-8">
            {fiTestimonials.map((t, i) => (
              <div key={i} className="bg-white rounded-2xl p-8 shadow-sm border border-slate-200" data-testid={`testimonial-fi-${i}`}>
                <div className="flex items-center gap-1 mb-4">{[...Array(5)].map((_, si) => (<Star key={si} className="w-5 h-5 fill-yellow-400 text-yellow-400" />))}</div>
                <p className="text-slate-600 italic leading-relaxed mb-6">&ldquo;{t.text}&rdquo;</p>
                <div className="flex items-center justify-between"><div><p className="font-bold text-slate-900">{t.name}</p><p className="text-sm text-slate-500 flex items-center gap-1"><MapPin className="w-3 h-3" /> {t.location}</p></div><div className="text-right"><p className="font-bold text-primary">{t.weight}</p><p className="text-xs text-slate-500">{t.time}</p></div></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20" id="bmi-section-fi">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-start max-w-6xl mx-auto">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-slate-900">Kenelle ESG sopii?</h2>
              <p className="text-lg text-slate-600 leading-relaxed">ESG on tarkoitettu henkilöille, jotka kamppailevat ylipainon kanssa ja etsivät ratkaisua elämäntapamuutosten ja suuremman kirurgisen toimenpiteen väliltä.</p>
              <div className="space-y-3">
                {["BMI 30-40", "Ruokavaliot ja liikunta eivät ole tuottaneet pysyviä tuloksia", "Ei halua invasiivista leikkausta", "Lääkkeet ovat olleet riittämättömiä tai liian kalliita", "Suosii minimaalisesti invasiivista menetelmää lyhyellä toipumisajalla", "Ylipainoon liittyvät sairaudet (tyypin 2 diabetes, korkea verenpaine, uniapnea)"].map((item, i) => (
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
              <h2 className="text-3xl font-bold text-slate-900">Turvallisuus ja laatustandardit</h2>
              <p className="text-lg text-slate-600 leading-relaxed">ESG:tä pidetään yhtenä turvallisimmista painonpudotustoimenpiteistä, kun sen suorittavat kokeneet asiantuntijat. Dr. Murat Üstün on suorittanut tuhansia ESG-toimenpiteitä JCI-akkreditoidussa Liv Hospitalissa.</p>
              <div className="space-y-3">
                {["JCI-akkreditoitu sairaala (kansainvälinen kultastandardi)", "Sertifioitu kirurgi tuhansilla ESG-toimenpiteillä", "Kehittynyt ommelteknologia (Apollo OverStitch)", "Täydellinen preoperatiivinen terveystarkastus", "24/7 lääketieteellinen tuki toimenpiteen jälkeen", "Täydelliset lääketieteelliset protokollat"].map((item, i) => (
                  <div key={i} className="flex items-start gap-3"><ShieldCheck className="w-5 h-5 text-green-600 shrink-0 mt-0.5" /><p className="text-slate-700">{item}</p></div>
                ))}
              </div>
            </div>
            <div><img src="/esg-fi-consultation.webp" alt="Lääketieteellinen konsultaatio suomalaisille potilaille" className="rounded-2xl shadow-xl w-full" width="600" height="400" loading="lazy" /></div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-slate-900 mb-4 text-center">Elämä ESG:n jälkeen</h2>
          <p className="text-lg text-slate-600 text-center mb-12">Toimenpide on vasta alku. Näin toipuminen etenee.</p>
          <div className="space-y-4">
            {[
              { phase: "Ensimmäiset 8 tuntia", desc: "Vain kirkkaita nesteitä. Lepoa ja toipumista lääketieteellisessä valvonnassa.", icon: "🏥", color: "border-red-200 bg-red-50" },
              { phase: "Viikot 1-2", desc: "Nestemäinen ruokavalio — proteiinipirtelöt, liemi, vesi.", icon: "🥤", color: "border-orange-200 bg-orange-50" },
              { phase: "Viikot 3-6", desc: "Asteittainen siirtyminen puolikiinteään ruokaan. Soseutettu ruoka ja pehmeät proteiinit.", icon: "🥣", color: "border-yellow-200 bg-yellow-50" },
              { phase: "Viikosta 7", desc: "Siirtyminen terveelliseen kiinteään ruokaan. Painopiste proteiinirikkaassa, tasapainoisessa ruokavaliossa.", icon: "🥗", color: "border-green-200 bg-green-50" },
              { phase: "Kuukaudet 3-12", desc: "Jatkuva ravitsemustuki säännöllisillä konsultaatioilla.", icon: "📊", color: "border-blue-200 bg-blue-50" },
            ].map((phase, i) => (
              <div key={i} className={`flex items-start gap-5 p-6 rounded-xl border ${phase.color}`}><span className="text-3xl shrink-0">{phase.icon}</span><div><h4 className="font-bold text-slate-900 mb-1">{phase.phase}</h4><p className="text-slate-600 leading-relaxed">{phase.desc}</p></div></div>
            ))}
          </div>
          <div className="mt-10 p-6 bg-primary/5 rounded-xl border border-primary/10">
            <div className="flex items-start gap-4"><Utensils className="w-8 h-8 text-primary shrink-0 mt-1" /><div><h4 className="font-bold text-slate-900 mb-2">12 kuukauden ravitsemustuki sisältyy</h4><p className="text-slate-600">Jokaiseen ESG-pakettiin sisältyy pääsy pätevään ravitsemusterapeuttiin, joka laatii yksilölliset ruokavaliosuunnitelmat ja seuraa edistymistänne koko ensimmäisen vuoden ajan.</p></div></div>
          </div>
        </div>
      </section>

      <section className="py-20" data-testid="section-faq-fi">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12"><h2 className="text-3xl font-bold text-slate-900 mb-4">Usein kysytyt kysymykset — ESG suomalaisille potilaille</h2><p className="text-lg text-slate-600">Kaikki mitä tarvitsee tietää ennen matkaa Istanbuliin.</p></div>
          <FAQAccordion faqs={fiFaqs} />
        </div>
      </section>

      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-2xl font-bold text-slate-900 mb-8 text-center">Tutustu muihin hoitovaihtoehtoihin</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { title: "ESG — täydelliset tiedot", href: "/esg", desc: "Kaikki yksityiskohdat toimenpiteestä" },
              { title: "Sleeve Gastrectomy", href: "/sleeve-gastrectomy", desc: "Suosituin bariatrinen leikkaus" },
              { title: "Mahapallohoito", href: "/gastric-balloon", desc: "Ei-kirurginen vaihtoehto" },
              { title: "Kaikki hoidot", href: "/treatments", desc: "Vertailu ja hinnat" },
              { title: "Tulokset", href: "/results", desc: "Potilaiden menestystarinoita" },
              { title: "Yhteystiedot", href: "/contact", desc: "Keskustele tiimimme kanssa" },
            ].map((link, i) => (
              <Link key={i} href={link.href} className="flex items-center gap-3 p-4 bg-white rounded-xl border border-slate-200 hover:border-primary/30 hover:shadow-sm transition-all group" data-testid={`link-internal-fi-${i}`}>
                <ArrowRight className="w-4 h-4 text-primary shrink-0 group-hover:translate-x-1 transition-transform" />
                <div><p className="font-medium text-slate-900 group-hover:text-primary transition-colors">{link.title}</p><p className="text-xs text-slate-500">{link.desc}</p></div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-primary text-white" data-testid="section-cta-fi">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <span className="text-5xl mb-6 block">{fiFlag}</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ota ensimmäinen askel tänään</h2>
          <p className="text-xl text-white/80 mb-4 leading-relaxed">Jos etsitte turvallista ja tehokasta vaihtoehtoa leikkaukselle, Endoskooppinen Sleeve Gastroplastia voi olla oikea ratkaisu teille.</p>
          <p className="text-lg text-white/70 mb-8">Ottakaa yhteyttä tänään ilmaista online-konsultaatiota varten. Arvioimme soveltuvuutenne, vastaamme kaikkiin kysymyksiin ja laadimme henkilökohtaisen hoitosuunnitelman — ilman sitoumuksia.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-primary hover:bg-white/90 font-bold text-lg h-14 px-10" onClick={() => window.open("https://wa.me/905324131143?text=Hei%2C%20olen%20Suomesta%20ja%20olen%20kiinnostunut%20ESG%3Ast%C3%A4", "_blank")} data-testid="button-cta-whatsapp-fi"><Phone className="w-5 h-5 mr-2" />WhatsApp: +90 532 413 1143</Button>
            <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 font-bold text-lg h-14 px-10" onClick={() => window.open("mailto:drmuratustun@gmail.com?subject=ESG%20tiedustelu%20Suomesta", "_blank")} data-testid="button-cta-email-fi"><MessageCircle className="w-5 h-5 mr-2" />Lähetä sähköposti</Button>
          </div>
          <p className="text-white/50 mt-6 text-sm">Sähköposti: <a href="mailto:drmuratustun@gmail.com" className="text-white/70 hover:text-white underline">drmuratustun@gmail.com</a></p>
        </div>
      </section>

      <Footer />
    </div>
  );
}

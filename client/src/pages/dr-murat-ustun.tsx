import { Link } from "wouter";
import { Award, Building2, GraduationCap, Stethoscope, ArrowRight } from "lucide-react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { SEO, JsonLd, structuredData } from "@/components/seo";
import { FAQSection, ConversionModule } from "@/components/money-page";
import { getSrcSet } from "@/lib/image-variants";

const procedures = [
  { name: "Gastric Sleeve (Sleeve Gastrectomy)", href: "/sleeve-gastrectomy" },
  { name: "Mini Gastric Bypass", href: "/mini-gastric-bypass" },
  { name: "Endoscopic Sleeve Gastroplasty (ESG)", href: "/esg" },
  { name: "Gastric Balloon", href: "/gastric-balloon" },
  { name: "Duodenal Switch", href: "/duodenal-switch" },
  { name: "Transit Bipartition", href: "/transit-bipartition" },
  { name: "Revision Bariatric Surgery", href: "/revision-bariatric-surgery" },
  { name: "POSE-2, TORe & GFMA (endoscopic)", href: "/treatments" },
];

const stats = [
  { value: "25+", label: "Years' experience" },
  { value: "6,000+", label: "Advanced laparoscopic procedures" },
  { value: "2,200+", label: "Sleeve gastrectomies" },
  { value: "700+", label: "Gastric bypass operations" },
  { value: "700+", label: "Endoscopic balloon placements" },
  { value: "300+", label: "Complex revisional surgeries" },
];

const expertise = [
  {
    icon: Stethoscope,
    title: "Surgical",
    items: ["Laparoscopic sleeve gastrectomy", "Roux-en-Y and mini gastric bypass", "Duodenal switch (SADI-S / BPD-DS)", "Revisional bariatric surgery", "Robotic bariatric surgery"],
  },
  {
    icon: Building2,
    title: "Endoscopic",
    items: ["ESG with Apollo OverStitch", "TORe for post-bypass weight regain", "Orbera 12-month balloon", "Allurion swallowable balloon"],
  },
  {
    icon: Award,
    title: "Metabolic & innovation",
    items: ["Metabolic surgery for type 2 diabetes", "AI & digital health innovation", "Medical education", "English and Turkish patient education"],
  },
];

const education = [
  { period: "1986–1992", title: "MD & PhD in Medicine", text: "Ege University Faculty of Medicine, İzmir." },
  { period: "1992–1996", title: "Specialist training in General Surgery", text: "Ministry of Health, Ankara Dışkapı Training & Research Hospital. Specialist qualification awarded in 1996." },
  { period: "Ongoing", title: "Advanced professional training", text: "IRCAD European Institute of Telesurgery; ESG and Apollo OverStitch workshops; laparoscopic and robotic bariatric surgery training; Eurosurgery obesity treatment workshops; International Bariatric Club Oxford congresses; and the Boston Scientific Certification of Trainers Program for Endosleeve." },
];

const experience = [
  { period: "2022–present", title: "Consultant Bariatric Surgeon", text: "Liv Hospital Vadistanbul." },
  { period: "2011–present", title: "Founder & Lead Surgeon", text: "Private bariatric clinic in London and Istanbul, now Istanbul Bariatric Center." },
  { period: "2010–2011", title: "Founder", text: "Bariatric & Metabolic Surgery Center, Acıbadem Maslak Hospital." },
  { period: "2005–2008", title: "Consultant General Surgeon", text: "Bayındır Levent Surgical Clinic." },
  { period: "2001–2005", title: "Consultant General Surgeon", text: "Esenler Hayat Hospital." },
  { period: "1996–2001", title: "Specialist General Surgeon", text: "Ministry of Health hospitals, including Etlik and Atatürk Training & Research Hospitals in Ankara." },
];

const memberships = [
  "BOMSS — British Obesity & Metabolic Surgery Society",
  "IFSO — International Federation for the Surgery of Obesity and Metabolic Disorders",
  "International Bariatric Club (IBC)",
  "TUGS Upper Gastrointestinal Surgeons Society",
  "Turkish National Surgery Association",
  "Turkish National Obesity Surgery Association",
  "Turkish Bariatric & Metabolic Surgery Association",
  "Turkish laparoscopic, endoscopic, colorectal and minimally invasive surgery societies",
];

const awards = ["2019", "2020", "2021", "2023", "2024", "2025"];

const faqs = [
  {
    question: "Where does Dr Üstün operate?",
    answer:
      "Dr Üstün operates at Liv Hospital Vadistanbul and Memorial Hospitals Group in Istanbul.",
  },
  {
    question: "What is his experience?",
    answer:
      "Dr Üstün has over 25 years' experience and has performed more than 6,000 advanced laparoscopic procedures, including 2,200+ sleeve gastrectomies, 700+ gastric bypass operations, 700+ endoscopic balloon placements and 300+ complex revisional surgeries.",
  },
  {
    question: "Which professional organisations is Dr Üstün a member of?",
    answer:
      "He is a member of BOMSS, IFSO and the International Bariatric Club (IBC), alongside leading Turkish surgical societies.",
  },
  {
    question: "Is Dr Üstün based in the UK?",
    answer:
      "Dr Üstün is British-Turkish and has been resident in London since 2016. He leads international patient pathways from London and Istanbul and operates in Istanbul.",
  },
  {
    question: "Is Dr Üstün an ESG trainer?",
    answer:
      "Yes. He is Turkey's first and most experienced performer of Apollo OverStitch Endosleeve (ESG) procedures and the country's only Boston Scientific-certified surgical ESG trainer.",
  },
  {
    question: "How do I book a consultation?",
    answer:
      "Send a message via WhatsApp (+44 7491 068686 for the UK, +90 532 413 1143 international) or use the contact form. Consultations are free and include a personalised procedure and price recommendation.",
  },
];

export default function DrMuratUstun() {
  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="Dr Murat Üstün: Surgeon Profile"
        description="Dr Murat Üstün, MD, PhD: consultant bariatric surgeon with 25+ years and 6,000+ procedures. BOMSS and IFSO member, operating in Istanbul."
        url="/dr-murat-ustun"
        image="https://istanbulbariatriccenter.com/dr-murat-ustun.webp"
      />
      <JsonLd data={structuredData.physician} />
      <JsonLd
        data={structuredData.createBreadcrumb([
          { name: "Home", url: "/" },
          { name: "About", url: "/about" },
          { name: "Dr Murat Üstün", url: "/dr-murat-ustun" },
        ])}
      />
      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:bg-primary focus:text-white focus:px-4 focus:py-2 focus:rounded">
        Skip to main content
      </a>
      <Navbar />

      <main id="main-content" role="main">
        <section className="pt-36 pb-16 bg-slate-900 text-white">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-[320px_1fr] gap-10 items-center max-w-5xl mx-auto">
              <div className="rounded-2xl overflow-hidden bg-slate-800 aspect-[4/5] max-w-xs mx-auto lg:mx-0 w-full">
                <img
                  src="/dr-murat-ustun.webp"
                  srcSet={getSrcSet("/dr-murat-ustun.webp")}
                  sizes="(min-width: 1024px) 320px, 80vw"
                  alt="Dr Murat Üstün, bariatric and metabolic surgeon at Istanbul Bariatric Center"
                  width={320}
                  height={400}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <p className="text-sm font-semibold uppercase tracking-wide text-primary mb-3">Consultant Bariatric & Metabolic Surgeon · Founder</p>
                <h1 className="text-4xl md:text-5xl font-bold mb-4">Dr Murat Üstün</h1>
                <p className="text-xl text-slate-300 mb-3">Op. Dr Murat Üstün, MD, PhD</p>
                <p className="text-lg text-slate-300 mb-6">Over 25 years in advanced laparoscopic and bariatric surgery, with more than 6,000 advanced laparoscopic procedures performed.</p>
                <div className="flex flex-wrap gap-2 mb-8">
                  {["Gastric Sleeve", "Gastric Bypass", "ESG", "Revision Surgery", "Duodenal Switch"].map((s) => (
                    <Badge key={s} variant="secondary" className="bg-slate-800 text-slate-100 border-slate-700">{s}</Badge>
                  ))}
                </div>
                <div className="flex flex-wrap gap-3">
                  <Button asChild size="lg" className="bg-primary hover:bg-primary/90" data-testid="button-book-consultation">
                    <a href="https://wa.me/447491068686" target="_blank" rel="noopener noreferrer">Book a Free Consultation</a>
                  </Button>
                  <Button asChild size="lg" variant="outline" className="border-slate-500 text-white bg-transparent hover:bg-slate-800 hover:text-white">
                    <a href="https://drmuratustun.com" target="_blank" rel="noopener noreferrer">Personal Website</a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-10 border-b border-slate-200" aria-labelledby="at-a-glance">
          <div className="container mx-auto px-4 max-w-6xl">
            <h2 id="at-a-glance" className="text-2xl font-bold text-slate-900 mb-8 text-center">At a glance</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-3xl font-bold text-primary">{stat.value}</div>
                  <div className="text-sm text-slate-600 mt-2">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4 max-w-5xl">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Professional profile</h2>
            <div className="space-y-5 text-lg text-slate-600 leading-relaxed max-w-3xl">
              <p>
                Op. Dr Murat Üstün, MD, PhD, is a Consultant Bariatric & Metabolic Surgeon and founder of Istanbul Bariatric Center. He has over 25 years' experience in advanced laparoscopic and bariatric surgery and has worked in bariatric and metabolic surgery since 2002.
              </p>
              <p>
                He has performed more than 6,000 advanced laparoscopic procedures. He pioneered endoscopic bariatric therapies in Turkey, becoming the country's first and most experienced performer of Apollo OverStitch Endosleeve (ESG) and its only Boston Scientific-certified surgical ESG trainer.
              </p>
              <p>
                A dual British-Turkish citizen resident in London since 2016, Dr Üstün leads international patient pathways from London and Istanbul. He practises at JCI-accredited Liv Hospital Vadistanbul in Sarıyer and Memorial Hospitals Group in Istanbul.
              </p>
            </div>
          </div>
        </section>

        <section className="py-20 bg-slate-50">
          <div className="container mx-auto px-4 max-w-5xl">
            <h2 className="text-3xl font-bold text-slate-900 mb-10">Key expertise</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {expertise.map((group) => (
                <div key={group.title} className="bg-white rounded-2xl border border-slate-200 p-6">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                    <group.icon className="w-6 h-6 text-primary" aria-hidden="true" />
                  </div>
                  <h3 className="font-semibold text-slate-900 mt-4 mb-3">{group.title}</h3>
                  <ul className="space-y-2 text-slate-600">{group.items.map((item) => <li key={item}>• {item}</li>)}</ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4 max-w-5xl grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-8 flex items-center gap-3"><GraduationCap className="w-7 h-7 text-primary" aria-hidden="true" /> Education & training</h2>
              <div className="space-y-6">{education.map((item) => (
                <div key={item.period} className="border-l-2 border-primary pl-5">
                  <p className="text-sm font-semibold text-primary">{item.period}</p>
                  <h3 className="font-semibold text-slate-900">{item.title}</h3>
                  <p className="text-slate-600 mt-1">{item.text}</p>
                </div>
              ))}</div>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-8 flex items-center gap-3"><Building2 className="w-7 h-7 text-primary" aria-hidden="true" /> Professional experience</h2>
              <div className="space-y-6">{experience.map((item) => (
                <div key={`${item.period}-${item.title}`} className="border-l-2 border-primary pl-5">
                  <p className="text-sm font-semibold text-primary">{item.period}</p>
                  <h3 className="font-semibold text-slate-900">{item.title}</h3>
                  <p className="text-slate-600 mt-1">{item.text}</p>
                </div>
              ))}</div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-slate-50">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="grid lg:grid-cols-[1fr_340px] gap-10">
              <div>
                <h2 className="text-3xl font-bold text-slate-900 mb-6">Professional memberships</h2>
                <ul className="grid sm:grid-cols-2 gap-3 text-slate-700">
                  {memberships.map((membership) => <li key={membership} className="bg-white border border-slate-200 rounded-xl p-4">{membership}</li>)}
                </ul>
              </div>
              <div className="bg-white rounded-2xl border border-slate-200 p-6 self-start">
                <h2 className="font-semibold text-slate-900 mb-3 flex items-center gap-2">
                  <Award className="w-5 h-5 text-amber-500" aria-hidden="true" /> WhatClinic Patient Service Awards
                </h2>
                <p className="text-slate-600 mb-4">Six awards for patient service.</p>
                <div className="flex flex-wrap gap-2">
                  {awards.map((y) => (
                    <Badge key={y} variant="outline" className="border-amber-300 text-amber-700 bg-amber-50">{y}</Badge>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4 max-w-5xl">
            <h2 className="text-3xl font-bold text-slate-900 mb-3">Procedures Performed by Dr Üstün</h2>
            <p className="text-slate-600 mb-8 max-w-2xl">Each procedure page explains who it suits, expected results, recovery and all-inclusive package pricing.</p>
            <div className="grid sm:grid-cols-2 gap-4">
              {procedures.map((p) => (
                <Link
                  key={p.href}
                  href={p.href}
                  className="group flex items-center justify-between rounded-xl border border-slate-200 px-5 py-4 hover:border-primary hover:bg-primary/5 transition-colors"
                  data-testid={`link-procedure-${p.href.replace(/\//g, "")}`}
                >
                  <span className="font-medium text-slate-900">{p.name}</span>
                  <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-primary transition-colors" aria-hidden="true" />
                </Link>
              ))}
            </div>
          </div>
        </section>

        <FAQSection title="Frequently Asked Questions" faqs={faqs} />

        <ConversionModule
          title="Talk to Dr Üstün's team"
          text="Send your height, weight and medical history on WhatsApp for a free assessment and a personalised procedure and price recommendation."
          buttonLabel="Start on WhatsApp"
        />
      </main>

      <Footer />
    </div>
  );
}

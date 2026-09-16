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

const credentials = [
  {
    icon: GraduationCap,
    title: "22+ years of surgical experience",
    text: "General surgery training at Ankara Training and Research Hospital, followed by a career dedicated to bariatric and metabolic surgery.",
  },
  {
    icon: Stethoscope,
    title: "8,000+ bariatric procedures",
    text: "Patients from more than 20 countries, from primary gastric sleeve and bypass to complex revision and endoscopic cases.",
  },
  {
    icon: Building2,
    title: "JCI-accredited Liv Hospital Vadistanbul",
    text: "All procedures are performed at Liv Hospital in Istanbul, holding the gold-standard Joint Commission International accreditation.",
  },
  {
    icon: Award,
    title: "IFSO member · ESG pioneer in Turkey",
    text: "Member of the International Federation for the Surgery of Obesity and Metabolic Disorders; among the first surgeons to bring Endoscopic Sleeve Gastroplasty to Turkey.",
  },
];

const awards = ["2019", "2020", "2021", "2023", "2024", "2025"];

const faqs = [
  {
    question: "Where does Dr Üstün operate?",
    answer:
      "All procedures are performed at Liv Hospital Vadistanbul in Istanbul, Turkey, a hospital holding Joint Commission International (JCI) accreditation.",
  },
  {
    question: "What is his experience?",
    answer:
      "Over 22 years in surgery and more than 8,000 bariatric and metabolic procedures, including gastric sleeve, mini gastric bypass, duodenal switch, revision surgery and endoscopic procedures such as ESG, POSE-2, TORe and GFMA.",
  },
  {
    question: "Is he IFSO-certified?",
    answer:
      "Yes. Dr Üstün is a member of IFSO, the International Federation for the Surgery of Obesity and Metabolic Disorders, and Istanbul Bariatric Center is an IFSO member institution.",
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
        description="Dr Murat Üstün: bariatric & metabolic surgeon in Istanbul, 8,000+ procedures, IFSO member, ESG pioneer in Turkey. Operates at JCI-accredited Liv Hospital."
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
                <p className="text-sm font-semibold uppercase tracking-wide text-primary mb-3">Founder & Lead Surgeon</p>
                <h1 className="text-4xl md:text-5xl font-bold mb-4">Dr Murat Üstün</h1>
                <p className="text-xl text-slate-300 mb-6">
                  Bariatric & metabolic surgeon in Istanbul. 22+ years of experience, 8,000+ procedures, IFSO member and pioneer of Endoscopic Sleeve Gastroplasty (ESG) in Turkey.
                </p>
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

        <section className="py-20">
          <div className="container mx-auto px-4 max-w-5xl">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">About Dr Üstün</h2>
            <div className="space-y-5 text-lg text-slate-600 leading-relaxed max-w-3xl">
              <p>
                Dr Murat Üstün is the founder and lead surgeon of Istanbul Bariatric Center. After completing his general surgery training at Ankara Training and Research Hospital, he dedicated his career to the surgical and endoscopic treatment of obesity and metabolic disease.
              </p>
              <p>
                He has performed more than 8,000 bariatric procedures for patients from over 20 countries and has presented at more than 100 national and international congresses. He was among the first surgeons to introduce Endoscopic Sleeve Gastroplasty (ESG) in Turkey and continues to offer the full range of surgical and incisionless options, from gastric sleeve and mini gastric bypass to POSE-2, TORe and GFMA.
              </p>
              <p>
                Every patient is assessed personally by Dr Üstün, and every procedure is performed at JCI-accredited Liv Hospital Vadistanbul in Istanbul with a multidisciplinary team of anaesthesiologists, UK-registered dietitians and patient coordinators.
              </p>
            </div>
          </div>
        </section>

        <section className="py-20 bg-slate-50">
          <div className="container mx-auto px-4 max-w-5xl">
            <h2 className="text-3xl font-bold text-slate-900 mb-10">Credentials & Experience</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {credentials.map((c) => (
                <div key={c.title} className="bg-white rounded-2xl border border-slate-200 p-6 flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                    <c.icon className="w-6 h-6 text-primary" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-1">{c.title}</h3>
                    <p className="text-slate-600 leading-relaxed">{c.text}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-10 bg-white rounded-2xl border border-slate-200 p-6">
              <h3 className="font-semibold text-slate-900 mb-3 flex items-center gap-2">
                <Award className="w-5 h-5 text-amber-500" aria-hidden="true" /> WhatClinic Patient Service Award
              </h3>
              <div className="flex flex-wrap gap-2">
                {awards.map((y) => (
                  <Badge key={y} variant="outline" className="border-amber-300 text-amber-700 bg-amber-50">{y}</Badge>
                ))}
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

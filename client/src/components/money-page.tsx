import { ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Check, ArrowRight, CheckCircle2, Award, ShieldCheck, Stethoscope, BadgePoundSterling, Quote, Star, BadgeCheck } from "lucide-react";
import { JsonLd, structuredData } from "@/components/seo";
import { SummarizeWithAI } from "@/components/summarize-with-ai";
import { Link } from "wouter";

/**
 * Money-page section library.
 * Reusable, semantic, static-first sections shared by the six high-value
 * "money pages" and the homepage. All content is passed via props — no
 * hardcoded copy — and every section renders its core content in the
 * initial markup (no lazy loading, no JS-dependent content).
 */

const WHATSAPP_UK = "https://wa.me/447491068686";

/* ---------------------------------- Hero --------------------------------- */

export interface MoneyHeroProps {
  title: string;
  subtitle: string;
  eyebrow?: string;
  stats?: { value: string; label: string }[];
}

export function MoneyHero({ title, subtitle, eyebrow, stats }: MoneyHeroProps) {
  return (
    <header className="bg-slate-900 text-white pt-40 pb-20">
      <div className="container mx-auto px-4 text-center">
        {eyebrow && (
          <p className="text-primary font-semibold uppercase tracking-wider text-sm mb-4">{eyebrow}</p>
        )}
        <h1 className="text-4xl md:text-5xl font-bold mb-6">{title}</h1>
        <p className="text-xl text-slate-300 max-w-3xl mx-auto">{subtitle}</p>
        {stats && stats.length > 0 && (
          <dl className="flex flex-wrap justify-center gap-8 mt-10">
            {stats.map((s, i) => (
              <div key={i} className="text-center">
                <dt className="sr-only">{s.label}</dt>
                <dd className="text-3xl font-bold text-primary">{s.value}</dd>
                <dd className="text-slate-400 text-sm mt-1">{s.label}</dd>
              </div>
            ))}
          </dl>
        )}
        <SummarizeWithAI variant="dark" />
      </div>
    </header>
  );
}

/* ----------------------------- Procedure facts ---------------------------- */

export interface ProcedureFactsProps {
  title: string;
  facts: { label: string; value: string }[];
}

export function ProcedureFacts({ title, facts }: ProcedureFactsProps) {
  return (
    <section className="py-14 bg-blue-50" aria-label={title}>
      <div className="container mx-auto px-4 max-w-5xl">
        <h2 className="text-2xl font-bold text-slate-900 mb-8 text-center">{title}</h2>
        <dl className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {facts.map((f, i) => (
            <div key={i} className="bg-white rounded-xl p-5 text-center shadow-sm border border-slate-100">
              <dt className="text-sm text-slate-500 mb-1">{f.label}</dt>
              <dd className="font-bold text-slate-900">{f.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

/* -------------------------------- Prose block ----------------------------- */

export interface ProseSectionProps {
  id?: string;
  title: string;
  children: ReactNode;
  tone?: "white" | "slate" | "blue" | "green";
  maxWidth?: string;
}

const TONES: Record<string, string> = {
  white: "bg-white",
  slate: "bg-slate-50",
  blue: "bg-blue-50",
  green: "bg-green-50",
};

export function ProseSection({ id, title, children, tone = "white", maxWidth = "max-w-4xl" }: ProseSectionProps) {
  return (
    <section id={id} className={`py-16 scroll-mt-24 ${TONES[tone]}`}>
      <div className={`container mx-auto px-4 ${maxWidth}`}>
        <h2 className="text-3xl font-bold text-slate-900 mb-8">{title}</h2>
        <div className="space-y-6 text-lg text-slate-600 leading-relaxed">{children}</div>
      </div>
    </section>
  );
}

/* ------------------------------ Surgeon proof ----------------------------- */

export interface SurgeonProofProps {
  title: string;
  subtitle?: string;
  cards?: { icon: "surgeon" | "hospital" | "pricing" | "results"; title: ReactNode; text: ReactNode }[];
}

const PROOF_ICONS = {
  surgeon: Stethoscope,
  hospital: ShieldCheck,
  pricing: BadgePoundSterling,
  results: Award,
};

export function SurgeonProof({ title, subtitle, cards }: SurgeonProofProps) {
  const defaultCards: SurgeonProofProps["cards"] = [
    {
      icon: "surgeon",
      title: <a href="https://drmuratustun.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Dr Murat Ustun</a>,
      text: <>Bariatric surgeon with 8,000+ successful procedures, IFSO member and <a href="https://drmuratustun.com" target="_blank" rel="noopener noreferrer" className="text-slate-200 hover:text-primary transition-colors">pioneer of ESG in Turkey</a>.</>,
    },
    {
      icon: "hospital",
      title: "JCI-Accredited Hospital",
      text: "All procedures are performed at Liv Hospital, Istanbul — holding the gold-standard Joint Commission International accreditation.",
    },
    {
      icon: "pricing",
      title: "Transparent All-Inclusive Pricing",
      text: "No hidden fees. Packages include hospital stay, pre-operative tests, transfers, hotel and dietitian aftercare.",
    },
    {
      icon: "results",
      title: "Award-Winning Care",
      text: "WhatClinic Patient Service Award winner six times (2019–2025), with dedicated UK-based aftercare coordinators.",
    },
  ];
  const items = cards && cards.length > 0 ? cards : defaultCards;
  return (
    <section className="py-20 bg-slate-900 text-white" aria-label={title}>
      <div className="container mx-auto px-4 max-w-6xl">
        <h2 className="text-3xl font-bold mb-4 text-center">{title}</h2>
        {subtitle && <p className="text-lg text-slate-300 text-center mb-12 max-w-3xl mx-auto">{subtitle}</p>}
        <div className={`grid md:grid-cols-2 lg:grid-cols-4 gap-6 ${subtitle ? "" : "mt-10"}`}>
          {items.map((c, i) => {
            const Icon = PROOF_ICONS[c.icon];
            return (
              <article key={i} className="bg-white/10 backdrop-blur rounded-xl p-6 text-center">
                <div className="w-14 h-14 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-lg font-bold mb-2">{c.title}</h3>
                <p className="text-slate-300 text-sm">{c.text}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* -------------------------------- Candidacy ------------------------------- */

export interface CandidacyProps {
  title: string;
  intro?: ReactNode;
  criteria: ReactNode[];
  note?: ReactNode;
}

export function Candidacy({ title, intro, criteria, note }: CandidacyProps) {
  return (
    <section className="py-16 bg-slate-50">
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="text-3xl font-bold text-slate-900 mb-6">{title}</h2>
        {intro && <div className="text-lg text-slate-600 leading-relaxed mb-8">{intro}</div>}
        <ul className="grid md:grid-cols-2 gap-4">
          {criteria.map((c, i) => (
            <li key={i} className="flex items-start gap-3 p-4 bg-white rounded-lg border border-green-100">
              <span className="w-6 h-6 rounded-full bg-green-500 text-white flex items-center justify-center shrink-0 mt-0.5">
                <Check className="w-4 h-4" aria-hidden="true" />
              </span>
              <span className="text-slate-700">{c}</span>
            </li>
          ))}
        </ul>
        {note && (
          <div className="mt-8 p-6 bg-amber-50 rounded-xl border border-amber-100 text-slate-700">{note}</div>
        )}
      </div>
    </section>
  );
}

/* --------------------------------- Checklist ------------------------------ */

export interface ChecklistProps {
  title: string;
  items: ReactNode[];
  tone?: "positive" | "warning";
  background?: "white" | "slate" | "green";
}

export function Checklist({ title, items, tone = "positive", background = "white" }: ChecklistProps) {
  const bg = { white: "bg-white", slate: "bg-slate-50", green: "bg-green-50" }[background];
  return (
    <section className={`py-16 ${bg}`}>
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="text-3xl font-bold text-slate-900 mb-8">{title}</h2>
        <ul className="grid md:grid-cols-2 gap-4">
          {items.map((item, i) => (
            <li
              key={i}
              className={`flex items-start gap-3 p-4 rounded-lg border ${
                tone === "positive" ? "bg-green-50 border-green-100" : "bg-amber-50 border-amber-100"
              }`}
            >
              {tone === "positive" ? (
                <span className="w-6 h-6 rounded-full bg-green-500 text-white flex items-center justify-center shrink-0 mt-0.5">
                  <CheckCircle2 className="w-4 h-4" aria-hidden="true" />
                </span>
              ) : (
                <span className="w-6 h-6 rounded-full bg-amber-500 text-white flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold" aria-hidden="true">!</span>
              )}
              <span className="text-slate-700">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/* ------------------------------ Comparison table -------------------------- */

export interface ComparisonBlockProps {
  title: string;
  subtitle?: string;
  columns: string[];           // first column is the criteria label header
  rows: (string | ReactNode)[][]; // each row: [criteria, ...values]
  highlightColumn?: number;    // index into value columns (0 = first value column)
  footnote?: ReactNode;
}

export function ComparisonBlock({ title, subtitle, columns, rows, highlightColumn, footnote }: ComparisonBlockProps) {
  return (
    <section className="py-20" aria-label={title}>
      <div className="container mx-auto px-4 max-w-6xl">
        <h2 className="text-3xl font-bold text-slate-900 mb-4 text-center">{title}</h2>
        {subtitle && <p className="text-lg text-slate-600 text-center mb-12 max-w-3xl mx-auto">{subtitle}</p>}
        <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-sm">
          <table className="w-full text-left">
            <caption className="sr-only">{title}</caption>
            <thead>
              <tr className="bg-slate-900 text-white">
                {columns.map((col, i) => (
                  <th
                    key={i}
                    scope="col"
                    className={`p-4 font-semibold text-sm uppercase tracking-wider ${i - 1 === highlightColumn ? "bg-primary/90" : ""}`}
                  >
                    {col}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((row, i) => (
                <tr key={i} className={`border-b border-slate-100 hover:bg-blue-50/50 transition-colors ${i % 2 === 0 ? "bg-white" : "bg-slate-50/50"}`}>
                  <th scope="row" className="p-4 font-medium text-slate-900 text-left">{row[0]}</th>
                  {row.slice(1).map((cell, j) => (
                    <td key={j} className={`p-4 text-slate-700 ${j === highlightColumn ? "bg-primary/5 font-medium" : ""}`}>
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {footnote && <p className="text-sm text-slate-500 mt-4 text-center">{footnote}</p>}
      </div>
    </section>
  );
}

/* ------------------------------- Testimonials ----------------------------- */

export interface StaticTestimonialsProps {
  title: string;
  subtitle?: string;
  quotes: { name: string; flag: string; date: string; text: string }[];
}

export function StaticTestimonials({ title, subtitle, quotes }: StaticTestimonialsProps) {
  return (
    <section className="py-20 bg-slate-50" aria-label={title}>
      <div className="container mx-auto px-4 max-w-6xl">
        <h2 className="text-3xl font-bold text-slate-900 mb-4 text-center">{title}</h2>
        {subtitle && <p className="text-lg text-slate-600 text-center mb-12">{subtitle}</p>}
        <div className={`grid md:grid-cols-3 gap-6 ${subtitle ? "" : "mt-10"}`}>
          {quotes.map((q, i) => (
            <figure key={i} className="h-full p-6 bg-white rounded-2xl shadow-sm border border-slate-100 flex flex-col">
              <div className="flex items-center justify-between mb-3">
                <div className="flex gap-0.5" aria-label="5 star rating">
                  {[...Array(5)].map((_, s) => (
                    <Star key={s} className="w-4 h-4 fill-yellow-400 text-yellow-400" aria-hidden="true" />
                  ))}
                </div>
                <span className="text-xs text-slate-600">{q.date}</span>
              </div>
              <Quote className="w-7 h-7 text-primary/20 mb-3" aria-hidden="true" />
              <blockquote className="text-slate-600 leading-relaxed italic flex-grow">&ldquo;{q.text}&rdquo;</blockquote>
              <figcaption className="mt-4 font-bold text-slate-900 flex items-center gap-2">
                {q.name} <span className="text-lg">{q.flag}</span>
                <span className="text-xs font-normal text-slate-600 flex items-center gap-1 ml-auto">
                  <BadgeCheck className="w-3 h-3 text-green-500" aria-hidden="true" /> Verified Patient
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------ FAQ --------------------------------- */

export interface FAQSectionProps {
  title: string;
  subtitle?: string;
  faqs: { question: string; answer: string }[];
  /** Set false if the page already emits FAQPage JSON-LD elsewhere. */
  withJsonLd?: boolean;
}

export function FAQSection({ title, subtitle, faqs, withJsonLd = true }: FAQSectionProps) {
  return (
    <section className="py-20" aria-label={title}>
      {withJsonLd && <JsonLd data={structuredData.createFAQ(faqs)} />}
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="text-3xl font-bold text-slate-900 mb-4 text-center">{title}</h2>
        {subtitle && <p className="text-lg text-slate-600 text-center mb-12">{subtitle}</p>}
        <Accordion type="single" collapsible className={`space-y-4 ${subtitle ? "" : "mt-12"}`}>
          {faqs.map((faq, i) => (
            <AccordionItem key={i} value={`faq-${i}`} className="border rounded-lg px-6 bg-white shadow-sm">
              <AccordionTrigger className="text-left font-bold text-slate-900 hover:no-underline">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-slate-600 leading-relaxed">{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}

/* -------------------------------- Related links --------------------------- */

export interface RelatedLinksProps {
  title: string;
  links: { title: string; description: string; href: string }[];
}

export function RelatedLinks({ title, links }: RelatedLinksProps) {
  return (
    <nav className="py-16 bg-slate-50" aria-label={title}>
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold text-slate-900 mb-8 text-center">{title}</h2>
        <ul className={`grid md:grid-cols-2 gap-6 max-w-5xl mx-auto ${links.length >= 4 ? "lg:grid-cols-4" : links.length === 3 ? "lg:grid-cols-3" : "lg:grid-cols-2"}`}>
          {links.map((link, i) => (
            <li key={i}>
              <Link href={link.href}>
                <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow text-center cursor-pointer h-full">
                  <h3 className="font-bold text-primary mb-2">{link.title}</h3>
                  <p className="text-sm text-slate-600">{link.description}</p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

/* ------------------------------ Conversion CTA ---------------------------- */

export interface ConversionModuleProps {
  title: string;
  text: ReactNode;
  buttonLabel: string;
  whatsappUrl?: string;
}

export function ConversionModule({ title, text, buttonLabel, whatsappUrl = WHATSAPP_UK }: ConversionModuleProps) {
  return (
    <section className="py-20 bg-primary text-white" aria-label={title}>
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-6">{title}</h2>
        <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">{text}</p>
        <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
          <Button size="lg" className="bg-white text-primary hover:bg-white/90 font-bold text-lg h-14 px-10">
            {buttonLabel}
          </Button>
        </a>
      </div>
    </section>
  );
}

/* ------------------------- Expert point of view --------------------------- */

export interface ExpertPOVProps {
  /** Module heading, e.g. "How Dr Murat Decides Between Sleeve and Mini Bypass" */
  title: string;
  /** First-person, surgeon-authored paragraphs / lists */
  children: ReactNode;
  /** Short credential line under the byline */
  credentials?: string;
  id?: string;
}

/**
 * Surgeon-authored perspective block. Visually distinct from generic prose:
 * byline, credential line, and a left rule — signalling first-hand expertise
 * rather than commodity summary content.
 */
export function ExpertPOV({ title, children, credentials = "Bariatric & metabolic surgeon — 8,000+ procedures, IFSO member", id }: ExpertPOVProps) {
  return (
    <section id={id} className="py-16 scroll-mt-24 bg-white">
      <div className="container mx-auto px-4 max-w-4xl">
        <article className="border-l-4 border-primary bg-slate-50 rounded-r-2xl p-8 md:p-10">
          <header className="mb-6">
            <p className="text-sm font-semibold uppercase tracking-wide text-primary mb-2">Surgeon's Perspective</p>
            <h2 className="text-3xl font-bold text-slate-900 mb-4">{title}</h2>
            <p className="text-slate-900 font-semibold">
              By{" "}
              <a href="https://drmuratustun.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                Dr Murat Ustun
              </a>
            </p>
            <p className="text-sm text-slate-500">{credentials}</p>
          </header>
          <div className="space-y-5 text-lg text-slate-600 leading-relaxed">{children}</div>
        </article>
      </div>
    </section>
  );
}

/* ------------------------------ Decision block ---------------------------- */

export interface DecisionBlockProps {
  title: string;
  bestFor: string[];
  notIdealFor: string[];
  typicalRecovery: string;
  tradeOffs: string[];
}

/**
 * Structured decision summary: best for / not ideal for / typical recovery /
 * common trade-offs — the four answers every procedure decision needs.
 */
export function DecisionBlock({ title, bestFor, notIdealFor, typicalRecovery, tradeOffs }: DecisionBlockProps) {
  return (
    <section className="py-16 bg-slate-50" aria-label={title}>
      <div className="container mx-auto px-4 max-w-5xl">
        <h2 className="text-3xl font-bold text-slate-900 mb-10 text-center">{title}</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white rounded-2xl border border-green-200 p-6">
            <h3 className="font-bold text-green-700 mb-4">Best for</h3>
            <ul className="space-y-3">
              {bestFor.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-slate-600">
                  <Check className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-white rounded-2xl border border-amber-200 p-6">
            <h3 className="font-bold text-amber-700 mb-4">Not ideal for</h3>
            <ul className="space-y-3">
              {notIdealFor.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-slate-600">
                  <span className="text-amber-600 font-bold mt-0.5 flex-shrink-0" aria-hidden="true">✕</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-white rounded-2xl border border-slate-200 p-6">
            <h3 className="font-bold text-slate-900 mb-4">Typical recovery</h3>
            <p className="text-slate-600 leading-relaxed">{typicalRecovery}</p>
          </div>
          <div className="bg-white rounded-2xl border border-slate-200 p-6">
            <h3 className="font-bold text-slate-900 mb-4">Common trade-offs</h3>
            <ul className="space-y-3">
              {tradeOffs.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-slate-600">
                  <span className="text-slate-400 mt-0.5 flex-shrink-0" aria-hidden="true">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

/* -------------------------------- Media block ----------------------------- */

export interface MediaBlockProps {
  title: string;
  description: string;
  /** Full YouTube embed URL, e.g. https://www.youtube.com/embed/xxxx */
  youtubeEmbedUrl: string;
  /** ISO-8601 publication date. VideoObject JSON-LD is only emitted when this is provided. */
  uploadDate?: string;
  withJsonLd?: boolean;
}

export function MediaBlock({ title, description, youtubeEmbedUrl, uploadDate, withJsonLd = true }: MediaBlockProps) {
  const videoId = youtubeEmbedUrl.split("/").pop()?.split("?")[0];
  return (
    <section className="py-16 bg-slate-900" aria-label={title}>
      {withJsonLd && !!uploadDate && (
        <JsonLd
          data={{
            "@context": "https://schema.org",
            "@type": "VideoObject",
            name: title,
            description,
            embedUrl: youtubeEmbedUrl,
            thumbnailUrl: videoId ? `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg` : undefined,
            uploadDate,
            publisher: { "@type": "Organization", name: "Istanbul Bariatric Center" },
          }}
        />
      )}
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="text-3xl font-bold text-white mb-3 text-center">{title}</h2>
        <p className="text-slate-300 text-center mb-8 max-w-2xl mx-auto">{description}</p>
        <div className="aspect-video rounded-2xl overflow-hidden shadow-2xl">
          <iframe
            src={youtubeEmbedUrl}
            title={title}
            loading="lazy"
            className="w-full h-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>
    </section>
  );
}

/* -------------------------------- Sticky CTA ------------------------------ */

export interface StickyCTAProps {
  whatsappUrl?: string;
  /** Where the "Package Guide" action points */
  guideHref?: string;
}

/**
 * Persistent bottom action bar: WhatsApp consult, free assessment, package
 * guide. Kept compact so it never obscures content; offset from the right so
 * it does not collide with the chat bubble.
 */
export function StickyCTA({ whatsappUrl = WHATSAPP_UK, guideHref = "/cost-of-bariatric-surgery-in-turkey" }: StickyCTAProps) {
  return (
    <>
      {/* Reserve flow space so the fixed bar never obscures the footer */}
      <div className="h-16" aria-hidden="true" />
      <nav
        aria-label="Quick actions"
        className="fixed bottom-0 inset-x-0 z-40 bg-white/95 backdrop-blur border-t border-slate-200 shadow-[0_-4px_16px_rgba(0,0,0,0.08)] pb-[env(safe-area-inset-bottom)]"
      >
      <div className="container mx-auto px-3 py-2.5 flex items-center justify-center gap-2 md:gap-3 pr-20 md:pr-24">
        <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="flex-1 md:flex-none">
          <Button className="w-full md:w-auto bg-primary hover:bg-primary/90 h-11 px-5 font-semibold">
            WhatsApp Consult
          </Button>
        </a>
        <Link href="/health-profile" className="flex-1 md:flex-none hidden sm:block">
          <Button variant="outline" className="w-full md:w-auto h-11 px-5 font-semibold border-slate-300">
            Free Assessment
          </Button>
        </Link>
        <Link href={guideHref} className="flex-1 md:flex-none">
          <Button variant="outline" className="w-full md:w-auto h-11 px-5 font-semibold border-slate-300">
            Package Guide
          </Button>
        </Link>
      </div>
      </nav>
    </>
  );
}

/* ----------------------------- Inline CTA button -------------------------- */

export function InlineCTA({ label, whatsappUrl = WHATSAPP_UK }: { label: string; whatsappUrl?: string }) {
  return (
    <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="inline-block">
      <Button className="bg-primary hover:bg-primary/90 h-12 px-8">
        {label} <ArrowRight className="ml-2 w-4 h-4" aria-hidden="true" />
      </Button>
    </a>
  );
}

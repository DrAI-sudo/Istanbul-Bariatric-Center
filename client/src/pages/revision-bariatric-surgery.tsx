import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { SEO, JsonLd, structuredData } from "@/components/seo";
import { Link } from "wouter";
import { useTranslation, Trans } from "react-i18next";
import {
  MoneyHero,
  ProcedureFacts,
  ProseSection,
  Candidacy,
  ComparisonBlock,
  SurgeonProof,
  StaticTestimonials,
  FAQSection,
  RelatedLinks,
  ConversionModule,
  InlineCTA,
} from "@/components/money-page";

const relatedHrefs = [
  "/mini-gastric-bypass",
  "/transit-bipartition",
  "/blog/tore-procedure-gastric-bypass-revision",
  "/cost-of-bariatric-surgery-in-turkey",
];

export default function RevisionBariatricSurgery() {
  const { t } = useTranslation("treatments");

  const stats = t("revisionPage.hero.stats", { returnObjects: true }) as { value: string; label: string }[];
  const facts = t("revisionPage.facts.items", { returnObjects: true }) as { label: string; value: string }[];
  const pathwayColumns = t("revisionPage.pathways.columns", { returnObjects: true }) as string[];
  const pathwayRows = t("revisionPage.pathways.rows", { returnObjects: true }) as string[][];
  const criteria = t("revisionPage.candidacy.criteria", { returnObjects: true }) as string[];
  const steps = t("revisionPage.process.steps", { returnObjects: true }) as string[];
  const quotes = t("revisionPage.testimonials.quotes", { returnObjects: true }) as { name: string; flag: string; date: string; text: string }[];
  const faqs = t("revisionPage.faq.items", { returnObjects: true }) as { question: string; answer: string }[];
  const relatedLinks = [
    ...(t("revisionPage.related.links", { returnObjects: true }) as { title: string; description: string }[])
      .map((link, i) => ({ ...link, href: relatedHrefs[i] })),
    { title: t("guides.weightRegain.title"), description: t("guides.weightRegain.description"), href: "/weight-regain-after-gastric-sleeve" },
    { title: t("guides.reflux.title"), description: t("guides.reflux.description"), href: "/reflux-after-gastric-sleeve" },
    { title: t("guides.longTermResults.title"), description: t("guides.longTermResults.description"), href: "/bariatric-surgery-long-term-results" },
  ];

  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="Revision Bariatric Surgery in Turkey — Fix Weight Regain After Sleeve or Bypass"
        description="Revision weight loss surgery in Istanbul: sleeve-to-bypass conversion, TORe, re-sleeve & transit bipartition. JCI hospital, Dr Murat Ustun. Free assessment."
        keywords="revision bariatric surgery turkey, gastric sleeve revision, weight regain after gastric sleeve, sleeve to bypass conversion, TORe turkey, failed weight loss surgery"
        url="/revision-bariatric-surgery"
      />
      <JsonLd data={structuredData.createBreadcrumb([
        { name: "Home", url: "/" },
        { name: "Treatments", url: "/treatments" },
        { name: "Revision Bariatric Surgery", url: "/revision-bariatric-surgery" },
      ])} />
      <Navbar />
      <MoneyHero
        eyebrow={t("revisionPage.hero.eyebrow")}
        title={t("revisionPage.hero.title")}
        subtitle={t("revisionPage.hero.subtitle")}
        stats={stats}
      />

      <div>
        <ProcedureFacts title={t("revisionPage.facts.title")} facts={facts} />

        <ProseSection title={t("revisionPage.why.title")}>
          <p><Trans t={t} i18nKey="revisionPage.why.p1" components={{ strong: <strong /> }} /></p>
          <p><Trans t={t} i18nKey="revisionPage.why.p2" components={{ strong: <strong /> }} /></p>
          <p><Trans t={t} i18nKey="revisionPage.why.p3" components={{ em: <em /> }} /></p>
          <InlineCTA label={t("revisionPage.why.cta")} />
        </ProseSection>

        <ComparisonBlock
          title={t("revisionPage.pathways.title")}
          subtitle={t("revisionPage.pathways.subtitle")}
          columns={pathwayColumns}
          rows={pathwayRows}
        />

        <Candidacy
          title={t("revisionPage.candidacy.title")}
          intro={<p>{t("revisionPage.candidacy.intro")}</p>}
          criteria={criteria}
          note={<Trans t={t} i18nKey="revisionPage.candidacy.note" components={{ strong: <strong /> }} />}
        />

        <ProseSection title={t("revisionPage.process.title")} tone="slate">
          <ol className="list-decimal pl-6 space-y-4">
            {steps.map((step, i) => (
              <li key={i}><Trans t={t} i18nKey={`revisionPage.process.steps.${i}`} components={{ strong: <strong /> }} /></li>
            ))}
          </ol>
          <p>
            <Trans
              t={t}
              i18nKey="revisionPage.process.readMore"
              components={{
                guideRevision: <Link href="/blog/revisional-bariatric-surgery-in-turkey" className="text-primary hover:underline" />,
                guideTore: <Link href="/blog/tore-procedure-gastric-bypass-revision" className="text-primary hover:underline" />,
              }}
            />
          </p>
        </ProseSection>

        <SurgeonProof
          title={t("revisionPage.surgeonProof.title")}
          subtitle={t("revisionPage.surgeonProof.subtitle")}
        />

        <StaticTestimonials title={t("revisionPage.testimonials.title")} quotes={quotes} />

        <FAQSection title={t("revisionPage.faq.title")} faqs={faqs} />

        <RelatedLinks title={t("revisionPage.related.title")} links={relatedLinks} />

        <ConversionModule
          title={t("revisionPage.conversion.title")}
          text={
            <Trans
              t={t}
              i18nKey="revisionPage.conversion.text"
              components={{
                doctorLink: <a href="https://drmuratustun.com" target="_blank" rel="noopener noreferrer" className="text-white underline hover:text-white/80" />,
              }}
            />
          }
          buttonLabel={t("revisionPage.conversion.button")}
        />
      </div>

      <Footer />
    </div>
  );
}

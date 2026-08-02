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
  "/sleeve-gastrectomy",
  "/esg",
  "/cost-of-bariatric-surgery-in-turkey",
  "/esg/uk",
];

export default function BariatricSurgeryUKPatients() {
  const { t } = useTranslation("treatments");

  const stats = t("ukPage.hero.stats", { returnObjects: true }) as { value: string; label: string }[];
  const facts = t("ukPage.facts.items", { returnObjects: true }) as { label: string; value: string }[];
  const comparisonColumns = t("ukPage.comparison.columns", { returnObjects: true }) as string[];
  const comparisonRows = t("ukPage.comparison.rows", { returnObjects: true }) as string[][];
  const steps = t("ukPage.journey.steps", { returnObjects: true }) as string[];
  const criteria = t("ukPage.candidacy.criteria", { returnObjects: true }) as string[];
  const quotes = t("ukPage.testimonials.quotes", { returnObjects: true }) as { name: string; flag: string; date: string; text: string }[];
  const faqs = t("ukPage.faq.items", { returnObjects: true }) as { question: string; answer: string }[];
  const relatedLinks = (t("ukPage.related.links", { returnObjects: true }) as { title: string; description: string }[])
    .map((link, i) => ({ ...link, href: relatedHrefs[i] }));

  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="Bariatric Surgery in Turkey for UK Patients — Aftercare in 8 UK Locations"
        description="Weight loss surgery in Istanbul designed for UK patients: fixed GBP prices from £3,400, UK-registered dietitian aftercare, support in 8 UK locations."
        keywords="bariatric surgery turkey uk patients, gastric sleeve turkey from uk, weight loss surgery abroad uk, gastric sleeve istanbul uk aftercare"
        url="/bariatric-surgery-for-uk-patients"
      />
      <JsonLd data={structuredData.createBreadcrumb([
        { name: "Home", url: "/" },
        { name: "Treatments", url: "/treatments" },
        { name: "Bariatric Surgery for UK Patients", url: "/bariatric-surgery-for-uk-patients" },
      ])} />
      <Navbar />
      <MoneyHero
        eyebrow={t("ukPage.hero.eyebrow")}
        title={t("ukPage.hero.title")}
        subtitle={t("ukPage.hero.subtitle")}
        stats={stats}
      />

      <div>
        <ProcedureFacts title={t("ukPage.facts.title")} facts={facts} />

        <ProseSection title={t("ukPage.why.title")}>
          <p><Trans t={t} i18nKey="ukPage.why.p1" components={{ strong: <strong /> }} /></p>
          <p><Trans t={t} i18nKey="ukPage.why.p2" components={{ strong: <strong /> }} /></p>
          <InlineCTA label={t("ukPage.why.cta")} />
        </ProseSection>

        <ComparisonBlock
          title={t("ukPage.comparison.title")}
          columns={comparisonColumns}
          highlightColumn={1}
          rows={comparisonRows}
        />

        <ProseSection title={t("ukPage.journey.title")} tone="slate">
          <ol className="list-decimal pl-6 space-y-4">
            {steps.map((_, i) => (
              <li key={i}><Trans t={t} i18nKey={`ukPage.journey.steps.${i}`} components={{ strong: <strong /> }} /></li>
            ))}
          </ol>
        </ProseSection>

        <Candidacy
          title={t("ukPage.candidacy.title")}
          intro={<p>{t("ukPage.candidacy.intro")}</p>}
          criteria={criteria}
          note={
            <Trans
              t={t}
              i18nKey="ukPage.candidacy.note"
              components={{
                profileLink: <Link href="/health-profile" className="text-primary hover:underline font-medium" />,
              }}
            />
          }
        />

        <SurgeonProof
          title={t("ukPage.surgeonProof.title")}
          subtitle={t("ukPage.surgeonProof.subtitle")}
        />

        <StaticTestimonials title={t("ukPage.testimonials.title")} quotes={quotes} />

        <FAQSection title={t("ukPage.faq.title")} faqs={faqs} />

        <RelatedLinks title={t("ukPage.related.title")} links={relatedLinks} />

        <ConversionModule
          title={t("ukPage.conversion.title")}
          text={
            <Trans
              t={t}
              i18nKey="ukPage.conversion.text"
              components={{
                doctorLink: <a href="https://drmuratustun.com" target="_blank" rel="noopener noreferrer" className="text-white underline hover:text-white/80" />,
              }}
            />
          }
          buttonLabel={t("ukPage.conversion.button")}
        />
      </div>

      <Footer />
    </div>
  );
}

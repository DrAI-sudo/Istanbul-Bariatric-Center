import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { SEO, JsonLd, structuredData } from "@/components/seo";
import { Link } from "wouter";
import { useTranslation, Trans } from "react-i18next";
import {
  MoneyHero,
  ProcedureFacts,
  ProseSection,
  ComparisonBlock,
  SurgeonProof,
  Checklist,
  FAQSection,
  RelatedLinks,
  ConversionModule,
  InlineCTA,
} from "@/components/money-page";

const relatedHrefs = [
  "/gastric-sleeve-vs-gastric-bypass",
  "/weight-regain-after-gastric-sleeve",
  "/revision-bariatric-surgery",
  "/results",
];

export default function LongTermResults() {
  const { t } = useTranslation("treatments");

  const stats = t("longTermResultsPage.hero.stats", { returnObjects: true }) as { value: string; label: string }[];
  const facts = t("longTermResultsPage.facts.items", { returnObjects: true }) as { label: string; value: string }[];
  const studyPoints = t("longTermResultsPage.studies.points", { returnObjects: true }) as string[];
  const comparisonColumns = t("longTermResultsPage.comparison.columns", { returnObjects: true }) as string[];
  const comparisonRows = t("longTermResultsPage.comparison.rows", { returnObjects: true }) as string[][];
  const checklistItems = t("longTermResultsPage.checklist.items", { returnObjects: true }) as string[];
  const faqs = t("longTermResultsPage.faq.items", { returnObjects: true }) as { question: string; answer: string }[];
  const relatedLinks = (t("longTermResultsPage.related.links", { returnObjects: true }) as { title: string; description: string }[])
    .map((link, i) => ({ ...link, href: relatedHrefs[i] }));

  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="Bariatric Surgery Long-Term Results: 5, 10 & 20-Year Outcomes Explained"
        description="What the evidence shows 5-20 years after weight loss surgery: sustained weight loss, diabetes remission, 30-50% lower mortality — and the honest regain data."
        keywords="bariatric surgery long term results, gastric sleeve 10 years later, weight loss surgery success rate, bariatric surgery life expectancy, gastric bypass long term outcomes"
        url="/bariatric-surgery-long-term-results"
      />
      <JsonLd data={structuredData.createBreadcrumb([
        { name: "Home", url: "/" },
        { name: "Treatments", url: "/treatments" },
        { name: "Bariatric Surgery Long-Term Results", url: "/bariatric-surgery-long-term-results" },
      ])} />
      <Navbar />
      <MoneyHero
        eyebrow={t("longTermResultsPage.hero.eyebrow")}
        title={t("longTermResultsPage.hero.title")}
        subtitle={t("longTermResultsPage.hero.subtitle")}
        stats={stats}
      />

      <div>
        <ProcedureFacts title={t("longTermResultsPage.facts.title")} facts={facts} />

        <ProseSection title={t("longTermResultsPage.studies.title")}>
          <p>{t("longTermResultsPage.studies.intro")}</p>
          <ul className="list-disc pl-6 space-y-3">
            {studyPoints.map((_, i) => (
              <li key={i}><Trans t={t} i18nKey={`longTermResultsPage.studies.points.${i}`} components={{ strong: <strong /> }} /></li>
            ))}
          </ul>
          <InlineCTA label={t("longTermResultsPage.studies.cta")} />
        </ProseSection>

        <ComparisonBlock
          title={t("longTermResultsPage.comparison.title")}
          columns={comparisonColumns}
          rows={comparisonRows}
          footnote={t("longTermResultsPage.comparison.footnote")}
        />

        <ProseSection title={t("longTermResultsPage.regain.title")} tone="slate">
          <p>
            <Trans
              t={t}
              i18nKey="longTermResultsPage.regain.p1"
              components={{
                strong: <strong />,
                link1: <Link href="/weight-regain-after-gastric-sleeve" className="text-primary hover:underline" />,
              }}
            />
          </p>
        </ProseSection>

        <Checklist
          title={t("longTermResultsPage.checklist.title")}
          items={checklistItems}
        />

        <SurgeonProof
          title={t("longTermResultsPage.surgeonProof.title")}
          subtitle={t("longTermResultsPage.surgeonProof.subtitle")}
        />

        <FAQSection title={t("longTermResultsPage.faq.title")} faqs={faqs} />

        <RelatedLinks
          title={t("longTermResultsPage.related.title")}
          links={relatedLinks}
        />

        <ConversionModule
          title={t("longTermResultsPage.conversion.title")}
          text={t("longTermResultsPage.conversion.text")}
          buttonLabel={t("longTermResultsPage.conversion.button")}
        />
      </div>

      <Footer />
    </div>
  );
}

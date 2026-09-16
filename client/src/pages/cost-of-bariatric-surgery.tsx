import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { SEO, JsonLd, structuredData } from "@/components/seo";
import { Link } from "wouter";
import { useTranslation, Trans } from "react-i18next";
import {
  MoneyHero,
  ProcedureFacts,
  ProseSection,
  Checklist,
  ComparisonBlock,
  SurgeonProof,
  FAQSection,
  RelatedLinks,
  ConversionModule,
  InlineCTA,
} from "@/components/money-page";

const relatedHrefs = [
  "/sleeve-gastrectomy",
  "/mini-gastric-bypass",
  "/esg",
  "/revision-bariatric-surgery",
];

export default function CostOfBariatricSurgery() {
  const { t } = useTranslation("treatments");

  const stats = t("costPage.hero.stats", { returnObjects: true }) as { value: string; label: string }[];
  const facts = t("costPage.facts.items", { returnObjects: true }) as { label: string; value: string }[];
  const comparisonColumns = t("costPage.comparison.columns", { returnObjects: true }) as string[];
  const comparisonRows = t("costPage.comparison.rows", { returnObjects: true }) as string[][];
  const includes = t("costPage.includes.items", { returnObjects: true }) as string[];
  const factors = t("costPage.whyCheaper.factors", { returnObjects: true }) as string[];
  const budgetItems = t("costPage.budget.items", { returnObjects: true }) as string[];
  const faqs = t("costPage.faq.items", { returnObjects: true }) as { question: string; answer: string }[];
  const relatedLinks = (t("costPage.related.links", { returnObjects: true }) as { title: string; description: string }[])
    .map((link, i) => ({ ...link, href: relatedHrefs[i] }))
    .concat([
      { title: "Gastric Sleeve Turkey Cost", description: "Detailed sleeve price breakdown and package comparison.", href: "/gastric-sleeve-turkey-cost" },
      { title: "Gastric Sleeve Turkey 2026", description: "Cost, best clinics and all-inclusive packages guide.", href: "/gastric-sleeve-turkey" },
      { title: "Gastric Bypass in Turkey", description: "Bypass packages from £5,000 all-inclusive.", href: "/gastric-bypass" },
    ]);

  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="Cost of Bariatric Surgery in Turkey (2026): All-Inclusive Prices"
        description="Transparent 2026 weight loss surgery prices in Turkey: gastric sleeve from £2,450, bypass from £5,000 and ESG from £5,700. Compare UK, US and EU costs."
        keywords="cost of bariatric surgery turkey, gastric sleeve price turkey, weight loss surgery cost istanbul, bariatric surgery prices 2026, cheap gastric sleeve turkey"
        url="/cost-of-bariatric-surgery-in-turkey"
      />
      <JsonLd data={structuredData.createBreadcrumb([
        { name: "Home", url: "/" },
        { name: "Treatments", url: "/treatments" },
        { name: "Cost of Bariatric Surgery in Turkey", url: "/cost-of-bariatric-surgery-in-turkey" },
      ])} />
      <Navbar />
      <MoneyHero
        eyebrow={t("costPage.hero.eyebrow")}
        title={t("costPage.hero.title")}
        subtitle={t("costPage.hero.subtitle")}
        stats={stats}
      />

      <div>
        <ProcedureFacts title={t("costPage.facts.title")} facts={facts} />

        <ComparisonBlock
          title={t("costPage.comparison.title")}
          subtitle={t("costPage.comparison.subtitle")}
          columns={comparisonColumns}
          highlightColumn={0}
          rows={comparisonRows}
          footnote={t("costPage.comparison.footnote")}
        />

        <Checklist
          title={t("costPage.includes.title")}
          background="slate"
          items={includes}
        />

        <ProseSection title={t("costPage.whyCheaper.title")} tone="white">
          <p><Trans t={t} i18nKey="costPage.whyCheaper.p1" components={{ strong: <strong /> }} /></p>
          <p>{t("costPage.whyCheaper.p2")}</p>
          <ul className="list-disc pl-6 space-y-3">
            {factors.map((_, i) => (
              <li key={i}><Trans t={t} i18nKey={`costPage.whyCheaper.factors.${i}`} components={{ strong: <strong /> }} /></li>
            ))}
          </ul>
          <p><Trans t={t} i18nKey="costPage.whyCheaper.p3" components={{ strong: <strong /> }} /></p>
          <InlineCTA label={t("costPage.whyCheaper.cta")} />
        </ProseSection>

        <ProseSection title={t("costPage.budget.title")} tone="slate">
          <p>{t("costPage.budget.intro")}</p>
          <ul className="list-disc pl-6 space-y-3">
            {budgetItems.map((_, i) => (
              <li key={i}><Trans t={t} i18nKey={`costPage.budget.items.${i}`} components={{ strong: <strong /> }} /></li>
            ))}
          </ul>
          <p>
            <Trans
              t={t}
              i18nKey="costPage.budget.total"
              components={{
                strong: <strong />,
                ukLink: <Link href="/bariatric-surgery-for-uk-patients" className="text-primary hover:underline" />,
              }}
            />
          </p>
        </ProseSection>

        <SurgeonProof
          title={t("costPage.surgeonProof.title")}
          subtitle={t("costPage.surgeonProof.subtitle")}
        />

        <FAQSection title={t("costPage.faq.title")} faqs={faqs} />

        <RelatedLinks title={t("costPage.related.title")} links={relatedLinks} />

        <ConversionModule
          title={t("costPage.conversion.title")}
          text={t("costPage.conversion.text")}
          buttonLabel={t("costPage.conversion.button")}
        />
      </div>

      <Footer />
    </div>
  );
}

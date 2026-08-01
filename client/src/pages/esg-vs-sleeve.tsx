import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { SEO, JsonLd, structuredData } from "@/components/seo";
import { Link } from "wouter";
import { useTranslation, Trans } from "react-i18next";
import {
  MoneyHero,
  ProseSection,
  Candidacy,
  ComparisonBlock,
  SurgeonProof,
  FAQSection,
  RelatedLinks,
  ConversionModule,
  InlineCTA,
} from "@/components/money-page";

const relatedHrefs = [
  "/esg",
  "/sleeve-gastrectomy",
  "/gastric-balloon-vs-gastric-sleeve",
  "/cost-of-bariatric-surgery-in-turkey",
];

export default function ESGVsSleeve() {
  const { t } = useTranslation("treatments");

  const stats = t("esgVsSleevePage.hero.stats", { returnObjects: true }) as { value: string; label: string }[];
  const comparisonColumns = t("esgVsSleevePage.comparison.columns", { returnObjects: true }) as string[];
  const comparisonRows = t("esgVsSleevePage.comparison.rows", { returnObjects: true }) as string[][];
  const chooseEsgItems = t("esgVsSleevePage.chooseEsg.items", { returnObjects: true }) as string[];
  const chooseSleeveItems = t("esgVsSleevePage.chooseSleeve.items", { returnObjects: true }) as string[];
  const criteria = t("esgVsSleevePage.candidacy.criteria", { returnObjects: true }) as string[];
  const faqs = t("esgVsSleevePage.faq.items", { returnObjects: true }) as { question: string; answer: string }[];
  const relatedLinks = (t("esgVsSleevePage.related.links", { returnObjects: true }) as { title: string; description: string }[])
    .map((link, i) => ({ ...link, href: relatedHrefs[i] }));

  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="ESG vs Gastric Sleeve: Non-Surgical or Surgical? Honest Comparison (2026)"
        description="Endoscopic sleeve gastroplasty vs surgical gastric sleeve: weight loss, safety, reversibility, reflux, recovery and Turkey prices compared side by side."
        keywords="esg vs gastric sleeve, endoscopic sleeve vs surgical sleeve, non surgical gastric sleeve comparison, esg or sleeve which is better"
        url="/esg-vs-gastric-sleeve"
      />
      <JsonLd data={structuredData.createBreadcrumb([
        { name: "Home", url: "/" },
        { name: "Treatments", url: "/treatments" },
        { name: "ESG vs Gastric Sleeve", url: "/esg-vs-gastric-sleeve" },
      ])} />
      <Navbar />
      <MoneyHero
        eyebrow={t("esgVsSleevePage.hero.eyebrow")}
        title={t("esgVsSleevePage.hero.title")}
        subtitle={t("esgVsSleevePage.hero.subtitle")}
        stats={stats}
      />

      <div>
        <ComparisonBlock
          title={t("esgVsSleevePage.comparison.title")}
          columns={comparisonColumns}
          rows={comparisonRows}
        />

        <ProseSection title={t("esgVsSleevePage.tradeOff.title")}>
          <p>
            <Trans
              t={t}
              i18nKey="esgVsSleevePage.tradeOff.p1"
              components={{
                strong: <strong />,
                sleeveLink: <Link href="/sleeve-gastrectomy" className="text-primary hover:underline" />,
                esgLink: <Link href="/esg" className="text-primary hover:underline" />,
              }}
            />
          </p>
          <p>
            <Trans t={t} i18nKey="esgVsSleevePage.tradeOff.p2" components={{ strong: <strong /> }} />
          </p>
          <InlineCTA label={t("esgVsSleevePage.tradeOff.cta")} />
        </ProseSection>

        <ProseSection title={t("esgVsSleevePage.chooseEsg.title")} tone="slate">
          <ul className="list-disc pl-6 space-y-3">
            {chooseEsgItems.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </ProseSection>

        <ProseSection title={t("esgVsSleevePage.chooseSleeve.title")}>
          <ul className="list-disc pl-6 space-y-3">
            {chooseSleeveItems.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </ProseSection>

        <Candidacy
          title={t("esgVsSleevePage.candidacy.title")}
          intro={<p>{t("esgVsSleevePage.candidacy.intro")}</p>}
          criteria={criteria}
          note={
            <Trans
              t={t}
              i18nKey="esgVsSleevePage.candidacy.note"
              components={{
                bypassLink: <Link href="/gastric-sleeve-vs-gastric-bypass" className="text-primary hover:underline font-medium" />,
              }}
            />
          }
        />

        <SurgeonProof
          title={t("esgVsSleevePage.surgeonProof.title")}
          subtitle={t("esgVsSleevePage.surgeonProof.subtitle")}
        />

        <FAQSection title={t("esgVsSleevePage.faq.title")} faqs={faqs} />

        <RelatedLinks title={t("esgVsSleevePage.related.title")} links={relatedLinks} />

        <ConversionModule
          title={t("esgVsSleevePage.conversion.title")}
          text={t("esgVsSleevePage.conversion.text")}
          buttonLabel={t("esgVsSleevePage.conversion.button")}
        />
      </div>

      <Footer />
    </div>
  );
}

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
  "/revision-bariatric-surgery",
  "/mini-gastric-bypass",
  "/reflux-after-gastric-sleeve",
  "/bariatric-surgery-long-term-results",
];

export default function WeightRegainAfterSleeve() {
  const { t } = useTranslation("treatments");

  const stats = t("weightRegainPage.hero.stats", { returnObjects: true }) as { value: string; label: string }[];
  const mechanisms = t("weightRegainPage.whyBack.mechanisms", { returnObjects: true }) as string[];
  const comparisonColumns = t("weightRegainPage.comparison.columns", { returnObjects: true }) as string[];
  const comparisonRows = t("weightRegainPage.comparison.rows", { returnObjects: true }) as string[][];
  const steps = t("weightRegainPage.howDecide.steps", { returnObjects: true }) as string[];
  const criteria = t("weightRegainPage.candidacy.criteria", { returnObjects: true }) as string[];
  const faqs = t("weightRegainPage.faq.items", { returnObjects: true }) as { question: string; answer: string }[];
  const relatedLinks = (t("weightRegainPage.related.links", { returnObjects: true }) as { title: string; description: string }[])
    .map((link, i) => ({ ...link, href: relatedHrefs[i] }));

  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="Weight Regain After Gastric Sleeve: Why It Happens & All 4 Fix Pathways"
        description="Regaining weight after a gastric sleeve? Up to 30% of patients do. Compare all four pathways: dietitian reset, GLP-1 medication, endoscopic re-sleeve, bypass conversion."
        keywords="weight regain after gastric sleeve, gastric sleeve stretched, sleeve not working anymore, regained weight after bariatric surgery, gastric sleeve revision options"
        url="/weight-regain-after-gastric-sleeve"
      />
      <JsonLd data={structuredData.createBreadcrumb([
        { name: "Home", url: "/" },
        { name: "Treatments", url: "/treatments" },
        { name: "Weight Regain After Gastric Sleeve", url: "/weight-regain-after-gastric-sleeve" },
      ])} />
      <Navbar />
      <MoneyHero
        eyebrow={t("weightRegainPage.hero.eyebrow")}
        title={t("weightRegainPage.hero.title")}
        subtitle={t("weightRegainPage.hero.subtitle")}
        stats={stats}
      />

      <div>
        <ProseSection title={t("weightRegainPage.whyBack.title")}>
          <p>{t("weightRegainPage.whyBack.intro")}</p>
          <ul className="list-disc pl-6 space-y-3">
            {mechanisms.map((_, i) => (
              <li key={i}><Trans t={t} i18nKey={`weightRegainPage.whyBack.mechanisms.${i}`} components={{ strong: <strong /> }} /></li>
            ))}
          </ul>
          <p><Trans t={t} i18nKey="weightRegainPage.whyBack.outro" components={{ strong: <strong /> }} /></p>
          <InlineCTA label={t("weightRegainPage.whyBack.cta")} />
        </ProseSection>

        <ComparisonBlock
          title={t("weightRegainPage.comparison.title")}
          subtitle={t("weightRegainPage.comparison.subtitle")}
          columns={comparisonColumns}
          rows={comparisonRows}
        />

        <ProseSection title={t("weightRegainPage.howDecide.title")} tone="slate">
          <ol className="list-decimal pl-6 space-y-4">
            {steps.map((_, i) => (
              <li key={i}><Trans t={t} i18nKey={`weightRegainPage.howDecide.steps.${i}`} components={{ strong: <strong /> }} /></li>
            ))}
          </ol>
        </ProseSection>

        <Candidacy
          title={t("weightRegainPage.candidacy.title")}
          intro={<p>{t("weightRegainPage.candidacy.intro")}</p>}
          criteria={criteria}
          note={
            <Trans
              t={t}
              i18nKey="weightRegainPage.candidacy.note"
              components={{ refluxLink: <Link href="/reflux-after-gastric-sleeve" className="text-primary hover:underline font-medium" /> }}
            />
          }
        />

        <SurgeonProof
          title={t("weightRegainPage.surgeonProof.title")}
          subtitle={t("weightRegainPage.surgeonProof.subtitle")}
        />

        <FAQSection title={t("weightRegainPage.faq.title")} faqs={faqs} />

        <RelatedLinks title={t("weightRegainPage.related.title")} links={relatedLinks} />

        <ConversionModule
          title={t("weightRegainPage.conversion.title")}
          text={t("weightRegainPage.conversion.text")}
          buttonLabel={t("weightRegainPage.conversion.button")}
        />
      </div>

      <Footer />
    </div>
  );
}

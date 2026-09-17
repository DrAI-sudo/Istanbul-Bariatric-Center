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
  "/gastric-balloon-turkey",
  "/esg",
  "/sleeve-gastrectomy",
  "/cost-of-bariatric-surgery-in-turkey",
];

export default function BalloonVsSleeve() {
  const { t } = useTranslation("treatments");

  const stats = t("balloonVsSleevePage.hero.stats", { returnObjects: true }) as { value: string; label: string }[];
  const comparisonColumns = t("balloonVsSleevePage.comparison.columns", { returnObjects: true }) as string[];
  const comparisonRows = t("balloonVsSleevePage.comparison.rows", { returnObjects: true }) as string[][];
  const criteria = t("balloonVsSleevePage.candidacy.criteria", { returnObjects: true }) as string[];
  const faqs = t("balloonVsSleevePage.faq.items", { returnObjects: true }) as { question: string; answer: string }[];
  const relatedLinks = (t("balloonVsSleevePage.related.links", { returnObjects: true }) as { title: string; description: string }[])
    .map((link, i) => ({ ...link, href: relatedHrefs[i] }));

  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="Gastric Balloon vs Gastric Sleeve: Temporary or Permanent? (2026)"
        description="Gastric balloon vs gastric sleeve compared: weight loss, reversibility, safety, cost in Turkey, and when the balloon is genuinely the right choice."
        keywords="gastric balloon vs gastric sleeve, balloon or sleeve which is better, gastric balloon vs surgery, temporary vs permanent weight loss procedure"
        url="/gastric-balloon-vs-gastric-sleeve"
      />
      <JsonLd data={structuredData.createBreadcrumb([
        { name: "Home", url: "/" },
        { name: "Treatments", url: "/treatments" },
        { name: "Gastric Balloon vs Gastric Sleeve", url: "/gastric-balloon-vs-gastric-sleeve" },
      ])} />
      <Navbar />
      <MoneyHero
        eyebrow={t("balloonVsSleevePage.hero.eyebrow")}
        title={t("balloonVsSleevePage.hero.title")}
        subtitle={t("balloonVsSleevePage.hero.subtitle")}
        stats={stats}
      />

      <div>
        <ComparisonBlock
          title={t("balloonVsSleevePage.comparison.title")}
          columns={comparisonColumns}
          rows={comparisonRows}
        />

        <ProseSection title={t("balloonVsSleevePage.prose.title")}>
          <p>
            <Trans
              t={t}
              i18nKey="balloonVsSleevePage.prose.p1"
              components={{
                strong: <strong />,
                link1: <Link href="/gastric-balloon-turkey" className="text-primary hover:underline" />,
                link2: <Link href="/sleeve-gastrectomy" className="text-primary hover:underline" />,
              }}
            />
          </p>
          <p>
            <Trans
              t={t}
              i18nKey="balloonVsSleevePage.prose.p2"
              components={{
                link1: <Link href="/esg" className="text-primary hover:underline" />,
                link2: <Link href="/esg-vs-gastric-sleeve" className="text-primary hover:underline" />,
              }}
            />
          </p>
          <InlineCTA label={t("balloonVsSleevePage.prose.cta")} />
        </ProseSection>

        <Candidacy
          title={t("balloonVsSleevePage.candidacy.title")}
          intro={<p>{t("balloonVsSleevePage.candidacy.intro")}</p>}
          criteria={criteria}
          note={<>{t("balloonVsSleevePage.candidacy.note")}</>}
        />

        <SurgeonProof
          title={t("balloonVsSleevePage.surgeonProof.title")}
          subtitle={t("balloonVsSleevePage.surgeonProof.subtitle")}
        />

        <FAQSection title={t("balloonVsSleevePage.faq.title")} faqs={faqs} />

        <RelatedLinks title={t("balloonVsSleevePage.related.title")} links={relatedLinks} />

        <ConversionModule
          title={t("balloonVsSleevePage.conversion.title")}
          text={t("balloonVsSleevePage.conversion.text")}
          buttonLabel={t("balloonVsSleevePage.conversion.button")}
        />
      </div>

      <Footer />
    </div>
  );
}

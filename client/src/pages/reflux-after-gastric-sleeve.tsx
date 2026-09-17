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
  "/revision-bariatric-surgery-turkey",
  "/mini-gastric-bypass",
  "/weight-regain-after-gastric-sleeve",
  "/gastric-sleeve-vs-gastric-bypass",
];

export default function RefluxAfterSleeve() {
  const { t } = useTranslation("treatments");

  const stats = t("refluxPage.hero.stats", { returnObjects: true }) as { value: string; label: string }[];
  const criteria = t("refluxPage.redFlags.criteria", { returnObjects: true }) as string[];
  const ladderColumns = t("refluxPage.ladder.columns", { returnObjects: true }) as string[];
  const ladderRows = t("refluxPage.ladder.rows", { returnObjects: true }) as string[][];
  const faqs = t("refluxPage.faq.items", { returnObjects: true }) as { question: string; answer: string }[];
  const relatedLinks = (t("refluxPage.related.links", { returnObjects: true }) as { title: string; description: string }[])
    .map((link, i) => ({ ...link, href: relatedHrefs[i] }));

  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="Acid Reflux After Gastric Sleeve: Causes, Red Flags & Every Fix"
        description="Heartburn after your gastric sleeve? GERD affects up to 55% of sleeve patients. Learn the causes, red flags, PPI limits and when bypass conversion is the cure."
        keywords="acid reflux after gastric sleeve, gerd after sleeve gastrectomy, heartburn after bariatric surgery, sleeve to bypass conversion reflux, omeprazole after gastric sleeve"
        url="/reflux-after-gastric-sleeve"
      />
      <JsonLd data={structuredData.createBreadcrumb([
        { name: "Home", url: "/" },
        { name: "Treatments", url: "/treatments" },
        { name: "Reflux After Gastric Sleeve", url: "/reflux-after-gastric-sleeve" },
      ])} />
      <Navbar />
      <MoneyHero
        eyebrow={t("refluxPage.hero.eyebrow")}
        title={t("refluxPage.hero.title")}
        subtitle={t("refluxPage.hero.subtitle")}
        stats={stats}
      />

      <div>
        <ProseSection title={t("refluxPage.whyReflux.title")}>
          <p>{t("refluxPage.whyReflux.p1")}</p>
          <p><Trans t={t} i18nKey="refluxPage.whyReflux.p2" components={{ strong: <strong /> }} /></p>
          <InlineCTA label={t("refluxPage.whyReflux.cta")} />
        </ProseSection>

        <Candidacy
          title={t("refluxPage.redFlags.title")}
          intro={<p>{t("refluxPage.redFlags.intro")}</p>}
          criteria={criteria}
          note={<>{t("refluxPage.redFlags.note")}</>}
        />

        <ComparisonBlock
          title={t("refluxPage.ladder.title")}
          columns={ladderColumns}
          rows={ladderRows}
          footnote={t("refluxPage.ladder.footnote")}
        />

        <ProseSection title={t("refluxPage.definitiveFix.title")} tone="slate">
          <p>
            <Trans
              t={t}
              i18nKey="refluxPage.definitiveFix.p1"
              components={{
                link1: <Link href="/mini-gastric-bypass" className="text-primary hover:underline" />,
                link2: <Link href="/weight-regain-after-gastric-sleeve" className="text-primary hover:underline" />,
              }}
            />
          </p>
          <p>
            <Trans
              t={t}
              i18nKey="refluxPage.definitiveFix.p2"
              components={{
                link1: <Link href="/revision-bariatric-surgery-turkey" className="text-primary hover:underline" />,
              }}
            />
          </p>
        </ProseSection>

        <SurgeonProof
          title={t("refluxPage.surgeonProof.title")}
          subtitle={t("refluxPage.surgeonProof.subtitle")}
        />

        <FAQSection title={t("refluxPage.faq.title")} faqs={faqs} />

        <RelatedLinks title={t("refluxPage.related.title")} links={relatedLinks} />

        <ConversionModule
          title={t("refluxPage.conversion.title")}
          text={t("refluxPage.conversion.text")}
          buttonLabel={t("refluxPage.conversion.button")}
        />
      </div>

      <Footer />
    </div>
  );
}

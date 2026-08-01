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
  ExpertPOV,
  StickyCTA,
  FAQSection,
  RelatedLinks,
  ConversionModule,
  InlineCTA,
} from "@/components/money-page";

const relatedHrefs = [
  "/sleeve-gastrectomy",
  "/mini-gastric-bypass",
  "/esg-vs-gastric-sleeve",
  "/cost-of-bariatric-surgery-in-turkey",
];

export default function SleeveVsBypass() {
  const { t } = useTranslation("treatments");

  const stats = t("sleeveVsBypassPage.hero.stats", { returnObjects: true }) as { value: string; label: string }[];
  const comparisonColumns = t("sleeveVsBypassPage.comparison.columns", { returnObjects: true }) as string[];
  const comparisonRows = t("sleeveVsBypassPage.comparison.rows", { returnObjects: true }) as string[][];
  const chooseSleeveItems = t("sleeveVsBypassPage.chooseSleeve.items", { returnObjects: true }) as string[];
  const chooseBypassItems = t("sleeveVsBypassPage.chooseBypass.items", { returnObjects: true }) as string[];
  const criteria = t("sleeveVsBypassPage.candidacy.criteria", { returnObjects: true }) as string[];
  const faqs = t("sleeveVsBypassPage.faq.items", { returnObjects: true }) as { question: string; answer: string }[];
  const relatedLinks = (t("sleeveVsBypassPage.related.links", { returnObjects: true }) as { title: string; description: string }[])
    .map((link, i) => ({ ...link, href: relatedHrefs[i] }));

  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="Gastric Sleeve vs Mini Gastric Bypass: Which Is Right for You? (2026)"
        description="Side-by-side comparison of gastric sleeve and mini gastric bypass: weight loss, diabetes remission, reflux, risks, recovery and cost in Turkey. Decide with data."
        keywords="gastric sleeve vs gastric bypass, sleeve vs mini bypass, which is better sleeve or bypass, gastric sleeve or bypass for diabetes, bariatric surgery comparison"
        url="/gastric-sleeve-vs-gastric-bypass"
      />
      <JsonLd data={structuredData.createBreadcrumb([
        { name: "Home", url: "/" },
        { name: "Treatments", url: "/treatments" },
        { name: "Gastric Sleeve vs Mini Gastric Bypass", url: "/gastric-sleeve-vs-gastric-bypass" },
      ])} />
      <Navbar />
      <MoneyHero
        eyebrow={t("sleeveVsBypassPage.hero.eyebrow")}
        title={t("sleeveVsBypassPage.hero.title")}
        subtitle={t("sleeveVsBypassPage.hero.subtitle")}
        stats={stats}
      />

      <div>
        <ComparisonBlock
          title={t("sleeveVsBypassPage.comparison.title")}
          columns={comparisonColumns}
          rows={comparisonRows}
          footnote={t("sleeveVsBypassPage.comparison.footnote")}
        />

        <ProseSection title={t("sleeveVsBypassPage.howItWorks.title")}>
          <p>
            <Trans
              t={t}
              i18nKey="sleeveVsBypassPage.howItWorks.p1"
              components={{ link1: <Link href="/sleeve-gastrectomy" className="text-primary hover:underline" /> }}
            />
          </p>
          <p>
            <Trans
              t={t}
              i18nKey="sleeveVsBypassPage.howItWorks.p2"
              components={{
                link1: <Link href="/mini-gastric-bypass" className="text-primary hover:underline" />,
                em: <em />,
              }}
            />
          </p>
          <InlineCTA label={t("sleeveVsBypassPage.howItWorks.cta")} />
        </ProseSection>

        <ProseSection title={t("sleeveVsBypassPage.chooseSleeve.title")} tone="slate">
          <ul className="list-disc pl-6 space-y-3">
            {chooseSleeveItems.map((_, i) => (
              <li key={i}><Trans t={t} i18nKey={`sleeveVsBypassPage.chooseSleeve.items.${i}`} components={{ strong: <strong /> }} /></li>
            ))}
          </ul>
        </ProseSection>

        <ProseSection title={t("sleeveVsBypassPage.chooseBypass.title")}>
          <ul className="list-disc pl-6 space-y-3">
            {chooseBypassItems.map((_, i) => (
              <li key={i}><Trans t={t} i18nKey={`sleeveVsBypassPage.chooseBypass.items.${i}`} components={{ strong: <strong /> }} /></li>
            ))}
          </ul>
        </ProseSection>

        <ExpertPOV title={t("sleeveVsBypassPage.expertPov.title")}>
          <p><Trans t={t} i18nKey="sleeveVsBypassPage.expertPov.p1" components={{ strong: <strong /> }} /></p>
          <p><Trans t={t} i18nKey="sleeveVsBypassPage.expertPov.p2" components={{ strong: <strong /> }} /></p>
          <p>{t("sleeveVsBypassPage.expertPov.p3")}</p>
        </ExpertPOV>

        <Candidacy
          title={t("sleeveVsBypassPage.candidacy.title")}
          intro={<p>{t("sleeveVsBypassPage.candidacy.intro")}</p>}
          criteria={criteria}
          note={<>{t("sleeveVsBypassPage.candidacy.note")}</>}
        />

        <SurgeonProof
          title={t("sleeveVsBypassPage.surgeonProof.title")}
          subtitle={t("sleeveVsBypassPage.surgeonProof.subtitle")}
        />

        <FAQSection title={t("sleeveVsBypassPage.faq.title")} faqs={faqs} />

        <RelatedLinks title={t("sleeveVsBypassPage.related.title")} links={relatedLinks} />

        <ConversionModule
          title={t("sleeveVsBypassPage.conversion.title")}
          text={t("sleeveVsBypassPage.conversion.text")}
          buttonLabel={t("sleeveVsBypassPage.conversion.button")}
        />
      </div>

      <Footer />
      <StickyCTA />
    </div>
  );
}

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
  SurgeonProof,
  FAQSection,
  RelatedLinks,
  ConversionModule,
  InlineCTA,
} from "@/components/money-page";

const relatedHrefs = [
  "/bariatric-surgery-for-uk-patients",
  "/cost-of-bariatric-surgery-in-turkey",
  "/sleeve-gastrectomy",
  "/esg",
];

export default function TravelGuide() {
  const { t } = useTranslation("treatments");

  const stats = t("travelGuidePage.hero.stats", { returnObjects: true }) as { value: string; label: string }[];
  const facts = t("travelGuidePage.facts.items", { returnObjects: true }) as { label: string; value: string }[];
  const timelineSteps = t("travelGuidePage.timeline.steps", { returnObjects: true }) as string[];
  const packingItems = t("travelGuidePage.packing.items", { returnObjects: true }) as string[];
  const flyingRules = t("travelGuidePage.flyingHome.rules", { returnObjects: true }) as string[];
  const faqs = t("travelGuidePage.faq.items", { returnObjects: true }) as { question: string; answer: string }[];
  const relatedLinks = (t("travelGuidePage.related.links", { returnObjects: true }) as { title: string; description: string }[])
    .map((link, i) => ({ ...link, href: relatedHrefs[i] }));

  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="Bariatric Surgery in Istanbul: Complete Travel Guide — Timeline, Airport, Hotel, Flying Home"
        description="Day-by-day travel guide for weight loss surgery in Istanbul: what happens at the airport, hospital and hotel, when you can fly home, packing list and companion tips."
        keywords="bariatric surgery turkey travel guide, gastric sleeve istanbul what to expect, flying after bariatric surgery, weight loss surgery abroad timeline, istanbul medical travel"
        url="/bariatric-surgery-travel-guide"
      />
      <JsonLd data={structuredData.createBreadcrumb([
        { name: "Home", url: "/" },
        { name: "Treatments", url: "/treatments" },
        { name: "Bariatric Surgery Travel Guide", url: "/bariatric-surgery-travel-guide" },
      ])} />
      <Navbar />
      <MoneyHero
        eyebrow={t("travelGuidePage.hero.eyebrow")}
        title={t("travelGuidePage.hero.title")}
        subtitle={t("travelGuidePage.hero.subtitle")}
        stats={stats}
      />

      <div>
        <ProcedureFacts title={t("travelGuidePage.facts.title")} facts={facts} />

        <ProseSection title={t("travelGuidePage.timeline.title")}>
          <ol className="list-decimal pl-6 space-y-4">
            {timelineSteps.map((_, i) => (
              <li key={i}><Trans t={t} i18nKey={`travelGuidePage.timeline.steps.${i}`} components={{ strong: <strong /> }} /></li>
            ))}
          </ol>
          <p>
            <Trans
              t={t}
              i18nKey="travelGuidePage.timeline.p1"
              components={{
                esgLink: <Link href="/esg" className="text-primary hover:underline" />,
                balloonLink: <Link href="/gastric-balloon-turkey" className="text-primary hover:underline" />,
              }}
            />
          </p>
          <InlineCTA label={t("travelGuidePage.timeline.cta")} />
        </ProseSection>

        <Checklist
          title={t("travelGuidePage.packing.title")}
          background="slate"
          items={packingItems}
        />

        <ProseSection title={t("travelGuidePage.flyingHome.title")} tone="white">
          <p>{t("travelGuidePage.flyingHome.intro")}</p>
          <ul className="list-disc pl-6 space-y-3">
            {flyingRules.map((_, i) => (
              <li key={i}><Trans t={t} i18nKey={`travelGuidePage.flyingHome.rules.${i}`} components={{ strong: <strong /> }} /></li>
            ))}
          </ul>
          <p>
            {t("travelGuidePage.flyingHome.outro")}
          </p>
        </ProseSection>

        <ProseSection title={t("travelGuidePage.companion.title")} tone="slate">
          <p>
            {t("travelGuidePage.companion.p1")}
          </p>
        </ProseSection>

        <SurgeonProof
          title={t("travelGuidePage.surgeonProof.title")}
          subtitle={t("travelGuidePage.surgeonProof.subtitle")}
        />

        <FAQSection title={t("travelGuidePage.faq.title")} faqs={faqs} />

        <RelatedLinks title={t("travelGuidePage.related.title")} links={relatedLinks} />

        <ConversionModule
          title={t("travelGuidePage.conversion.title")}
          text={t("travelGuidePage.conversion.text")}
          buttonLabel={t("travelGuidePage.conversion.button")}
        />
      </div>

      <Footer />
    </div>
  );
}

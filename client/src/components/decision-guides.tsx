import { useTranslation } from "react-i18next";
import { Link } from "wouter";
import { ArrowRight, Scale, HeartPulse, Plane } from "lucide-react";

/**
 * Homepage decision-support section. Surfaces the guide clusters —
 * comparisons, complications/outcomes, and travel logistics — so the
 * homepage leads with expertise and decision help, not only packages.
 * Guide titles/descriptions reuse the translated `treatments:guides.*`
 * keys; section framing lives in `home:decisionGuides.*`.
 */
export function DecisionGuides() {
  const { t } = useTranslation(["home", "treatments"]);

  const groups = [
    {
      icon: Scale,
      label: t("home:decisionGuides.compare"),
      links: [
        { href: "/gastric-sleeve-vs-gastric-bypass", key: "sleeveVsBypass" },
        { href: "/esg-vs-gastric-sleeve", key: "esgVsSleeve" },
        { href: "/gastric-balloon-vs-gastric-sleeve", key: "balloonVsSleeve" },
      ],
    },
    {
      icon: HeartPulse,
      label: t("home:decisionGuides.fix"),
      links: [
        { href: "/weight-regain-after-gastric-sleeve", key: "weightRegain" },
        { href: "/reflux-after-gastric-sleeve", key: "reflux" },
        { href: "/bariatric-surgery-long-term-results", key: "longTermResults" },
      ],
    },
    {
      icon: Plane,
      label: t("home:decisionGuides.plan"),
      links: [{ href: "/bariatric-surgery-travel-guide", key: "travelGuide" }],
    },
  ];

  return (
    <section className="py-20 bg-slate-50" aria-label={t("home:decisionGuides.title")}>
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            {t("home:decisionGuides.title")}
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            {t("home:decisionGuides.subtitle")}
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {groups.map(({ icon: Icon, label, links }) => (
            <div key={label} className="bg-white rounded-2xl border border-slate-200 p-6">
              <div className="flex items-center gap-3 mb-5">
                <span className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <Icon className="w-5 h-5 text-primary" aria-hidden="true" />
                </span>
                <h3 className="font-bold text-slate-900">{label}</h3>
              </div>
              <ul className="space-y-4">
                {links.map(({ href, key }) => (
                  <li key={href}>
                    <Link href={href} className="group block">
                      <span className="font-semibold text-slate-800 group-hover:text-primary transition-colors flex items-center gap-1.5">
                        {t(`treatments:guides.${key}.title`)}
                        <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" aria-hidden="true" />
                      </span>
                      <span className="text-sm text-slate-500">
                        {t(`treatments:guides.${key}.description`)}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <p className="text-center text-slate-500 mt-10 max-w-2xl mx-auto">
          {t("home:decisionGuides.expertNote")}
        </p>
      </div>
    </section>
  );
}

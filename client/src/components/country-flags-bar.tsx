import { Link } from "wouter";

const esgCountries = [
  { code: "uk", flag: "🇬🇧", name: "United Kingdom", path: "/esg/uk" },
  { code: "de", flag: "🇩🇪", name: "Germany", path: "/esg/de" },
  { code: "fr", flag: "🇫🇷", name: "France", path: "/esg/fr" },
  { code: "es", flag: "🇪🇸", name: "Spain", path: "/esg/es" },
  { code: "nl", flag: "🇳🇱", name: "Netherlands", path: "/esg/nl" },
  { code: "it", flag: "🇮🇹", name: "Italy", path: "/esg/it" },
  { code: "ar", flag: "🇸🇦", name: "Arabic", path: "/esg/ar" },
  { code: "ru", flag: "🇷🇺", name: "Russia", path: "/esg/ru" },
  { code: "ro", flag: "🇷🇴", name: "Romania", path: "/esg/ro" },
  { code: "se", flag: "🇸🇪", name: "Sweden", path: "/esg/se" },
  { code: "pl", flag: "🇵🇱", name: "Poland", path: "/esg/pl" },
  { code: "dk", flag: "🇩🇰", name: "Denmark", path: "/esg/dk" },
  { code: "no", flag: "🇳🇴", name: "Norway", path: "/esg/no" },
  { code: "hu", flag: "🇭🇺", name: "Hungary", path: "/esg/hu" },
  { code: "fi", flag: "🇫🇮", name: "Finland", path: "/esg/fi" },
  { code: "ca", flag: "🇨🇦", name: "Canada", path: "/esg/ca" },
  { code: "us", flag: "🇺🇸", name: "United States", path: "/esg/us" },
  { code: "anz", flag: "🇦🇺", name: "Australia & NZ", path: "/esg/anz" },
  { code: "az", flag: "🇦🇿", name: "Azerbaijan", path: "/esg/az" },
];

const treatmentLanguages = [
  { code: "tr", flag: "🇹🇷", name: "Türkçe", path: "/treatments/tr" },
  { code: "es", flag: "🇪🇸", name: "Español", path: "/treatments/es" },
  { code: "de", flag: "🇩🇪", name: "Deutsch", path: "/treatments/de" },
  { code: "fr", flag: "🇫🇷", name: "Français", path: "/treatments/fr" },
  { code: "it", flag: "🇮🇹", name: "Italiano", path: "/treatments/it" },
  { code: "ro", flag: "🇷🇴", name: "Română", path: "/treatments/ro" },
  { code: "ru", flag: "🇷🇺", name: "Русский", path: "/treatments/ru" },
  { code: "ar", flag: "🇸🇦", name: "العربية", path: "/treatments/ar" },
];

interface CountryFlagsBarProps {
  variant: "esg" | "treatments";
}

export function CountryFlagsBar({ variant }: CountryFlagsBarProps) {
  const items = variant === "esg" ? esgCountries : treatmentLanguages;
  const title = variant === "esg"
    ? "ESG Procedure — Available for Patients Worldwide"
    : "Browse Treatments in Your Language";
  const subtitle = variant === "esg"
    ? "Find ESG information tailored to your country with local pricing, travel details and patient stories"
    : "View our full treatment guide in your preferred language";

  return (
    <section className="py-16 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50" data-testid="country-flags-bar">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-3" data-testid="flags-bar-title">
            {title}
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            {subtitle}
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 md:gap-4 max-w-5xl mx-auto">
          {items.map((item) => (
            <Link
              key={item.code}
              href={item.path}
              className="group flex items-center gap-2 bg-white hover:bg-primary hover:text-white rounded-full px-4 py-2.5 shadow-sm border border-slate-200 hover:border-primary hover:shadow-md transition-all duration-200"
              data-testid={`flag-link-${item.code}`}
            >
              <span className="text-2xl leading-none" role="img" aria-label={`${item.name} flag`}>
                {item.flag}
              </span>
              <span className="text-sm font-medium text-slate-700 group-hover:text-white whitespace-nowrap">
                {item.name}
              </span>
            </Link>
          ))}
        </div>

        {variant === "treatments" && (
          <div className="mt-10 pt-8 border-t border-slate-200">
            <div className="text-center mb-6">
              <h3 className="text-xl font-bold text-slate-900 mb-2">
                ESG by Country
              </h3>
              <p className="text-slate-600 text-sm">
                Explore Endoscopic Sleeve Gastroplasty information for your region
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-3 md:gap-4 max-w-5xl mx-auto">
              {esgCountries.map((item) => (
                <Link
                  key={item.code}
                  href={item.path}
                  className="group flex items-center gap-2 bg-white hover:bg-emerald-600 hover:text-white rounded-full px-4 py-2.5 shadow-sm border border-slate-200 hover:border-emerald-600 hover:shadow-md transition-all duration-200"
                  data-testid={`esg-flag-link-${item.code}`}
                >
                  <span className="text-2xl leading-none" role="img" aria-label={`${item.name} flag`}>
                    {item.flag}
                  </span>
                  <span className="text-sm font-medium text-slate-700 group-hover:text-white whitespace-nowrap">
                    {item.name}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

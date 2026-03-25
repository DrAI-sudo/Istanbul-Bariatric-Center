import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Calculator, ClipboardList } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Link } from "wouter";

type UnitSystem = "metric" | "imperial";

interface BMIResult {
  bmi: number;
  category: string;
  color: string;
}

export function BMICalculator() {
  const { t } = useTranslation(['home', 'common']);
  const [unitSystem, setUnitSystem] = useState<UnitSystem>("metric");
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [heightFt, setHeightFt] = useState("");
  const [heightIn, setHeightIn] = useState("");
  const [result, setResult] = useState<BMIResult | null>(null);

  const bmiCategories = [
    { range: "<18.5", labelKey: "underweight", color: "bg-blue-400" },
    { range: "18.5-24.9", labelKey: "normal", color: "bg-green-500" },
    { range: "25-29.9", labelKey: "overweight", color: "bg-yellow-500" },
    { range: "30-34.9", labelKey: "obeseI", color: "bg-orange-500" },
    { range: "35-39.9", labelKey: "obeseII", color: "bg-red-500" },
    { range: "40+", labelKey: "obeseIII", color: "bg-red-700" },
  ];

  function getBMICategory(bmi: number): { category: string; color: string } {
    if (bmi < 18.5) return { category: t('home:bmi.underweight'), color: "text-blue-500" };
    if (bmi < 25) return { category: t('home:bmi.normal'), color: "text-green-500" };
    if (bmi < 30) return { category: t('home:bmi.overweight'), color: "text-yellow-500" };
    if (bmi < 35) return { category: t('home:bmi.obeseI'), color: "text-orange-500" };
    if (bmi < 40) return { category: t('home:bmi.obeseII'), color: "text-red-500" };
    return { category: t('home:bmi.obeseIII'), color: "text-red-700" };
  }

  const calculateBMI = () => {
    let weightKg: number;
    let heightM: number;

    if (unitSystem === "metric") {
      weightKg = parseFloat(weight);
      heightM = parseFloat(height) / 100;
    } else {
      weightKg = parseFloat(weight) * 0.453592;
      const totalInches = parseFloat(heightFt) * 12 + parseFloat(heightIn || "0");
      heightM = totalInches * 0.0254;
    }

    if (isNaN(weightKg) || isNaN(heightM) || heightM === 0) {
      return;
    }

    const bmi = weightKg / (heightM * heightM);
    const { category, color } = getBMICategory(bmi);
    setResult({ bmi, category, color });
  };

  const reset = () => {
    setWeight("");
    setHeight("");
    setHeightFt("");
    setHeightIn("");
    setResult(null);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-white" aria-labelledby="bmi-heading">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center gap-3 mb-4">
          <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center" aria-hidden="true">
            <Calculator className="w-6 h-6 text-white" />
          </div>
          <span className="text-primary font-semibold text-lg">BMI</span>
        </div>
        
        <h2 id="bmi-heading" className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">
          {t('home:bmi.title')}
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          {t('home:bmi.subtitle')}
        </p>

        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="flex mb-6 bg-gray-100 rounded-lg p-1">
              <button
                onClick={() => setUnitSystem("metric")}
                className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-colors ${
                  unitSystem === "metric"
                    ? "bg-primary text-white"
                    : "text-gray-600 hover:text-gray-900"
                }`}
                data-testid="button-metric"
              >
                {t('home:bmi.metric')}
              </button>
              <button
                onClick={() => setUnitSystem("imperial")}
                className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-colors ${
                  unitSystem === "imperial"
                    ? "bg-primary text-white"
                    : "text-gray-600 hover:text-gray-900"
                }`}
                data-testid="button-imperial"
              >
                {t('home:bmi.imperial')}
              </button>
            </div>

            <div className="space-y-4">
              <div>
                <label htmlFor="bmi-weight" className="block text-sm font-medium text-gray-700 mb-2">
                  {t('home:bmi.weight')} ({unitSystem === "metric" ? "kg" : "lb"})
                </label>
                <Input
                  id="bmi-weight"
                  type="number"
                  value={weight}
                  onChange={(e) => setWeight(e.target.value)}
                  placeholder={unitSystem === "metric" ? "e.g., 85" : "e.g., 187"}
                  className="w-full"
                  data-testid="input-weight"
                  aria-label={`Weight in ${unitSystem === "metric" ? "kilograms" : "pounds"}`}
                />
              </div>

              <div className={unitSystem === "metric" ? "block" : "hidden"}>
                <label htmlFor="bmi-height" className="block text-sm font-medium text-gray-700 mb-2">
                  {t('home:bmi.height')} (cm)
                </label>
                <Input
                  id="bmi-height"
                  type="number"
                  value={height}
                  onChange={(e) => setHeight(e.target.value)}
                  placeholder="e.g., 175"
                  className="w-full"
                  data-testid="input-height"
                  aria-label="Height in centimeters"
                />
              </div>
              <div className={unitSystem === "imperial" ? "grid grid-cols-2 gap-3" : "hidden"}>
                <div>
                  <label htmlFor="bmi-height-ft" className="block text-sm font-medium text-gray-700 mb-2">
                    {t('home:bmi.height')} (ft)
                  </label>
                  <Input
                    id="bmi-height-ft"
                    type="number"
                    value={heightFt}
                    onChange={(e) => setHeightFt(e.target.value)}
                    placeholder="e.g., 5"
                    className="w-full"
                    data-testid="input-height-ft"
                    aria-label="Height in feet"
                  />
                </div>
                <div>
                  <label htmlFor="bmi-height-in" className="block text-sm font-medium text-gray-700 mb-2">
                    {t('home:bmi.height')} (in)
                  </label>
                  <Input
                    id="bmi-height-in"
                    type="number"
                    value={heightIn}
                    onChange={(e) => setHeightIn(e.target.value)}
                    placeholder="e.g., 9"
                    className="w-full"
                    data-testid="input-height-in"
                    aria-label="Height in inches"
                  />
                </div>
              </div>
            </div>

            <div className="flex gap-3 mt-6">
              <Button
                onClick={calculateBMI}
                className="flex-1 bg-primary hover:bg-primary/90"
                data-testid="button-calculate-bmi"
              >
                {t('home:bmi.calculate')}
              </Button>
              <Button
                onClick={reset}
                variant="outline"
                className="flex-1"
                data-testid="button-reset-bmi"
              >
                {t('home:bmi.reset')}
              </Button>
            </div>

            {result && (
              <div className="mt-6 p-6 bg-gray-50 rounded-xl text-center">
                <p className="text-sm text-gray-600 mb-2">{t('home:bmi.yourBmi')}</p>
                <p className="text-5xl font-bold text-gray-900 mb-2">
                  {result.bmi.toFixed(1)}
                </p>
                <p className={`text-lg font-semibold ${result.color}`}>
                  {result.category}
                </p>
                <a
                  href="https://wa.me/905324131143?text=Hello%2C%20I%20just%20calculated%20my%20BMI%20and%20I%20would%20like%20to%20inquire%20about%20my%20options."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center justify-center gap-2 w-full bg-green-700 hover:bg-green-800 text-white font-medium py-3 px-6 rounded-lg transition-colors"
                  data-testid="button-whatsapp-bmi"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  {t('common:askDrUstun')}
                </a>
              </div>
            )}

            {!result && (
              <div className="mt-6 p-6 bg-gray-50 rounded-xl">
                <h3 className="font-semibold text-gray-900 mb-2">{t('home:bmi.enterDetails')}</h3>
                <p className="text-sm text-gray-600">
                  {t('home:bmi.inputMessage')}
                </p>
              </div>
            )}
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h3 className="font-semibold text-gray-900 mb-6">{t('home:bmi.categories')}</h3>
            <div className="space-y-3">
              {bmiCategories.map((cat, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 p-3 rounded-lg bg-gray-50"
                >
                  <div className={`w-3 h-3 rounded-full ${cat.color}`} />
                  <span className="text-sm font-medium text-gray-700 w-20">
                    {cat.range}
                  </span>
                  <span className="text-sm text-gray-600">{t(`home:bmi.${cat.labelKey}`)}</span>
                </div>
              ))}
            </div>

            <div className="mt-8 p-4 bg-blue-50 rounded-xl">
              <h3 className="font-medium text-gray-900 mb-2">{t('home:bmi.whyBmiMatters')}</h3>
              <p className="text-sm text-gray-600">
                {t('home:bmi.bmiExplanation')}
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <Link href="/health-profile">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-white font-bold text-lg px-10 py-6 rounded-full shadow-xl transition-transform hover:scale-105"
              data-testid="button-am-i-eligible"
            >
              <ClipboardList className="w-5 h-5 mr-2" />
              Am I Eligible?
            </Button>
          </Link>
          <p className="text-gray-500 text-sm mt-3">Complete your health profile to find out if you qualify for bariatric surgery</p>
        </div>

        <div className="mt-12">
          <h3 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-6">
            Financing Options for EU Patients - Apply Now!
          </h3>
          <iframe 
            width="100%" 
            height="400px" 
            src="https://clinics.euromedfin.com/clinic-iframe/34173cb38f07f89ddbebc2ac9128303f?lang=en" 
            frameBorder="0" 
            allowFullScreen
            loading="lazy"
            title="EuroMedFin Clinic"
          />
        </div>
      </div>
    </section>
  );
}

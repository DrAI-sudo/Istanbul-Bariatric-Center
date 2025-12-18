import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Calculator } from "lucide-react";

type UnitSystem = "metric" | "imperial";

interface BMIResult {
  bmi: number;
  category: string;
  color: string;
}

const bmiCategories = [
  { range: "<18.5", label: "Underweight", color: "bg-blue-400" },
  { range: "18.5-24.9", label: "Normal", color: "bg-green-500" },
  { range: "25-29.9", label: "Overweight", color: "bg-yellow-500" },
  { range: "30-34.9", label: "Obese I", color: "bg-orange-500" },
  { range: "35-39.9", label: "Obese II", color: "bg-red-500" },
  { range: "40+", label: "Obese III", color: "bg-red-700" },
];

function getBMICategory(bmi: number): { category: string; color: string } {
  if (bmi < 18.5) return { category: "Underweight", color: "text-blue-500" };
  if (bmi < 25) return { category: "Normal", color: "text-green-500" };
  if (bmi < 30) return { category: "Overweight", color: "text-yellow-500" };
  if (bmi < 35) return { category: "Obese I", color: "text-orange-500" };
  if (bmi < 40) return { category: "Obese II", color: "text-red-500" };
  return { category: "Obese III", color: "text-red-700" };
}

export function BMICalculator() {
  const [unitSystem, setUnitSystem] = useState<UnitSystem>("metric");
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [heightFt, setHeightFt] = useState("");
  const [heightIn, setHeightIn] = useState("");
  const [result, setResult] = useState<BMIResult | null>(null);

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
    <section className="py-20 bg-gradient-to-br from-blue-50 to-white">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center gap-3 mb-4">
          <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
            <Calculator className="w-6 h-6 text-white" />
          </div>
          <span className="text-primary font-semibold text-lg">BMI</span>
        </div>
        
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">
          Check Your Body Mass Index
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Calculate your BMI to understand your weight category and discover if bariatric surgery could help you achieve a healthier life.
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
                Metric (kg/cm)
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
                Imperial (lb/ft)
              </button>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Weight ({unitSystem === "metric" ? "kg" : "lb"})
                </label>
                <Input
                  type="number"
                  value={weight}
                  onChange={(e) => setWeight(e.target.value)}
                  placeholder={unitSystem === "metric" ? "e.g., 85" : "e.g., 187"}
                  className="w-full"
                  data-testid="input-weight"
                />
              </div>

              {unitSystem === "metric" ? (
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Height (cm)
                  </label>
                  <Input
                    type="number"
                    value={height}
                    onChange={(e) => setHeight(e.target.value)}
                    placeholder="e.g., 175"
                    className="w-full"
                    data-testid="input-height"
                  />
                </div>
              ) : (
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Height (ft)
                    </label>
                    <Input
                      type="number"
                      value={heightFt}
                      onChange={(e) => setHeightFt(e.target.value)}
                      placeholder="e.g., 5"
                      className="w-full"
                      data-testid="input-height-ft"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Height (in)
                    </label>
                    <Input
                      type="number"
                      value={heightIn}
                      onChange={(e) => setHeightIn(e.target.value)}
                      placeholder="e.g., 9"
                      className="w-full"
                      data-testid="input-height-in"
                    />
                  </div>
                </div>
              )}
            </div>

            <div className="flex gap-3 mt-6">
              <Button
                onClick={calculateBMI}
                className="flex-1 bg-primary hover:bg-primary/90"
                data-testid="button-calculate-bmi"
              >
                Calculate BMI
              </Button>
              <Button
                onClick={reset}
                variant="outline"
                className="flex-1"
                data-testid="button-reset-bmi"
              >
                Reset
              </Button>
            </div>

            {result && (
              <div className="mt-6 p-6 bg-gray-50 rounded-xl text-center">
                <p className="text-sm text-gray-600 mb-2">Your BMI</p>
                <p className="text-5xl font-bold text-gray-900 mb-2">
                  {result.bmi.toFixed(1)}
                </p>
                <p className={`text-lg font-semibold ${result.color}`}>
                  {result.category}
                </p>
                {result.bmi >= 30 && (
                  <p className="mt-4 text-sm text-gray-600">
                    Based on your BMI, you may be a candidate for bariatric surgery. 
                    <a href="/contact" className="text-primary font-medium ml-1 hover:underline">
                      Contact us for a free consultation.
                    </a>
                  </p>
                )}
              </div>
            )}

            {!result && (
              <div className="mt-6 p-6 bg-gray-50 rounded-xl">
                <h4 className="font-semibold text-gray-900 mb-2">Enter Your Details</h4>
                <p className="text-sm text-gray-600">
                  Input your weight and height to calculate your BMI and get personalized recommendations.
                </p>
              </div>
            )}
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h4 className="font-semibold text-gray-900 mb-6">BMI Categories</h4>
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
                  <span className="text-sm text-gray-600">{cat.label}</span>
                </div>
              ))}
            </div>

            <div className="mt-8 p-4 bg-blue-50 rounded-xl">
              <h5 className="font-medium text-gray-900 mb-2">Why BMI Matters</h5>
              <p className="text-sm text-gray-600">
                BMI is an important indicator of overall health. A BMI of 30 or higher 
                indicates obesity, which increases the risk of various health conditions. 
                Bariatric surgery is typically recommended for individuals with a BMI of 
                35+ or 30+ with obesity-related health issues.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

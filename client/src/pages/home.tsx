import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { VIPPackage } from "@/components/vip-package";
import { Treatments } from "@/components/treatments";
import { Awards } from "@/components/awards";
import { Testimonials } from "@/components/testimonials";
import { Footer } from "@/components/footer";
import { Calculator } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import doctorImage from "@assets/generated_images/friendly_male_doctor_in_white_coat.png";

function BMICalculatorSection() {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [bmi, setBmi] = useState<number | null>(null);

  const calculateBMI = () => {
    const w = parseFloat(weight);
    const h = parseFloat(height) / 100; // convert cm to m
    if (w && h) {
      setBmi(parseFloat((w / (h * h)).toFixed(1)));
    }
  };

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <div className="relative">
             <div className="absolute -inset-4 bg-blue-100 rounded-3xl transform rotate-3"></div>
             <img 
              src={doctorImage} 
              alt="Dr Murat Ustun" 
              className="relative rounded-2xl shadow-2xl w-full max-w-md mx-auto"
             />
             <div className="absolute bottom-8 -right-4 bg-white p-6 rounded-xl shadow-xl max-w-xs animate-in slide-in-from-bottom-10 delay-300">
               <p className="font-bold text-slate-900">Dr. Murat Üstün</p>
               <p className="text-slate-500 text-sm">Lead Bariatric Surgeon</p>
               <div className="flex gap-1 mt-2">
                 {[1,2,3,4,5].map(i => <div key={i} className="w-4 h-4 text-amber-400 fill-current">★</div>)}
               </div>
             </div>
          </div>

          <div className="space-y-8">
            <h2 className="text-4xl font-heading font-bold text-slate-900">
              Calculate Your <span className="text-primary">BMI</span>
            </h2>
            <p className="text-lg text-slate-600">
              Unsure if you qualify for bariatric surgery? Use our BMI calculator to check your eligibility instantly.
            </p>

            <Card className="border-slate-200 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calculator className="w-5 h-5 text-primary" />
                  BMI Calculator
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="weight">Weight (kg)</Label>
                    <Input 
                      id="weight" 
                      placeholder="e.g. 90" 
                      type="number"
                      value={weight}
                      onChange={(e) => setWeight(e.target.value)}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="height">Height (cm)</Label>
                    <Input 
                      id="height" 
                      placeholder="e.g. 175" 
                      type="number"
                      value={height}
                      onChange={(e) => setHeight(e.target.value)}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                   <Label>Gender</Label>
                   <Select>
                     <SelectTrigger>
                       <SelectValue placeholder="Select gender" />
                     </SelectTrigger>
                     <SelectContent>
                       <SelectItem value="female">Female</SelectItem>
                       <SelectItem value="male">Male</SelectItem>
                     </SelectContent>
                   </Select>
                </div>

                <Button onClick={calculateBMI} className="w-full bg-primary h-12 text-lg">
                  Calculate Now
                </Button>

                {bmi !== null && (
                  <div className="mt-6 p-4 bg-slate-50 rounded-lg border border-slate-200 text-center animate-in zoom-in">
                    <p className="text-sm text-slate-500 uppercase tracking-wide font-bold mb-1">Your BMI Is</p>
                    <p className="text-4xl font-bold text-primary">{bmi}</p>
                    <p className="text-sm mt-2 font-medium text-slate-700">
                      {bmi < 18.5 ? "Underweight" : bmi < 25 ? "Normal Weight" : bmi < 30 ? "Overweight" : "Obese"}
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>

        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Awards />
      <VIPPackage />
      <Treatments />
      <BMICalculatorSection />
      <Testimonials />
      <Footer />
    </div>
  );
}

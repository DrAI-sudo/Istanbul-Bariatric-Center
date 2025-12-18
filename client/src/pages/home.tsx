import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { VIPPackage } from "@/components/vip-package";
import { Treatments } from "@/components/treatments";
import { Awards } from "@/components/awards";
import { Testimonials } from "@/components/testimonials";
import { Footer } from "@/components/footer";
import { BMICalculator } from "@/components/bmi-calculator";

// Simplified Home to match the layout request
export default function Home() {
  return (
    <div className="min-h-screen bg-white font-sans">
      <Navbar />
      <Hero />
      <VIPPackage />
      {/* We keep these as they are likely relevant content blocks, but structured simply */}
      <Awards />
      <BMICalculator />
      <Treatments />
      <Testimonials />
      <Footer />
    </div>
  );
}

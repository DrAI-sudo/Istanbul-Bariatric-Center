import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { VIPPackage } from "@/components/vip-package";
import { Treatments } from "@/components/treatments";
import { Awards } from "@/components/awards";
import { Testimonials } from "@/components/testimonials";
import { Footer } from "@/components/footer";
import { BMICalculator } from "@/components/bmi-calculator";
import { SEO, JsonLd, structuredData } from "@/components/seo";

export default function Home() {
  return (
    <div className="min-h-screen bg-white font-sans">
      <SEO
        title="Gastric Sleeve & Weight Loss Surgery in Turkey"
        description="Istanbul Bariatric Center offers world-class gastric sleeve, gastric bypass, and bariatric surgery in Turkey. 8,000+ successful surgeries. Free consultation with Dr. Murat Ustun."
        keywords="gastric sleeve turkey, weight loss surgery istanbul, bariatric surgery turkey, gastric bypass turkey, obesity surgery"
        url="/"
      />
      <JsonLd data={structuredData.medicalBusiness} />
      <JsonLd data={structuredData.physician} />
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

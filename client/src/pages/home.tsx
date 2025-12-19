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
      <JsonLd data={structuredData.websiteSearch} />
      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:bg-primary focus:text-white focus:px-4 focus:py-2 focus:rounded">
        Skip to main content
      </a>
      <Navbar />
      <main id="main-content" role="main">
        <Hero />
        <VIPPackage />
        <Awards />
        <BMICalculator />
        <Treatments />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
}

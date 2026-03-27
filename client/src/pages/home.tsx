import { lazy, Suspense, useEffect, useRef, useState } from "react";
import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { VIPPackage } from "@/components/vip-package";
import { Awards } from "@/components/awards";
import { Footer } from "@/components/footer";
import { SEO, JsonLd, structuredData } from "@/components/seo";

const Treatments = lazy(() => import("@/components/treatments").then(m => ({ default: m.Treatments })));
const BMICalculator = lazy(() => import("@/components/bmi-calculator").then(m => ({ default: m.BMICalculator })));
const Testimonials = lazy(() => import("@/components/testimonials").then(m => ({ default: m.Testimonials })));

function LazySection({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || !('IntersectionObserver' in window)) {
      setVisible(true);
      return;
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: "200px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} style={{ minHeight: visible ? undefined : "100px" }}>
      {visible && <Suspense fallback={null}>{children}</Suspense>}
    </div>
  );
}

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
      <JsonLd data={structuredData.website} />
      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:bg-primary focus:text-white focus:px-4 focus:py-2 focus:rounded">
        Skip to main content
      </a>
      <Navbar />
      <main id="main-content" role="main">
        <Hero />
        <VIPPackage />
        <Awards />
        <LazySection><BMICalculator /></LazySection>
        <LazySection><Treatments /></LazySection>
        <LazySection><Testimonials /></LazySection>
      </main>
      <Footer />
    </div>
  );
}

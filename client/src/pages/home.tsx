import { lazy, Suspense, useEffect, useRef, useState } from "react";
import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { VIPPackage } from "@/components/vip-package";
import { Awards } from "@/components/awards";
import { Footer } from "@/components/footer";
import { SEO, JsonLd, structuredData } from "@/components/seo";

import { Treatments } from "@/components/treatments";

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
        title="Weight Loss Surgery in Istanbul: Options & Free Consultation"
        description="Istanbul Bariatric Center: Expert weight loss surgery in Turkey. Gastric sleeve & bypass options with Dr. Murat Ustun. Book your free consultation."
        keywords="gastric sleeve turkey, weight loss surgery istanbul, bariatric surgery turkey, gastric bypass turkey, obesity surgery"
        url="/"
      />
      <JsonLd data={structuredData.medicalBusiness} />
      <JsonLd data={structuredData.physician} />
      <JsonLd data={structuredData.website} />
      <Navbar />
      <div>
        <Hero />
        <VIPPackage />
        <Awards />
        <Treatments />
        <LazySection><BMICalculator /></LazySection>
        <LazySection><Testimonials /></LazySection>
      </div>
      <Footer />
    </div>
  );
}

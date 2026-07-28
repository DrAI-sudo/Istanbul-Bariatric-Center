import { useEffect } from "react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { SEO } from "@/components/seo";

const SORO_EMBED_SRC = "https://app.trysoro.com/api/embed/c1ef6b53-783f-41f0-b5c6-1136e0746912";

export default function News() {
  useEffect(() => {
    // Load the Soro embed script once; re-append if navigating back to this page
    const existing = document.querySelector(`script[src="${SORO_EMBED_SRC}"]`);
    if (existing) existing.remove();
    const script = document.createElement("script");
    script.src = SORO_EMBED_SRC;
    script.defer = true;
    document.body.appendChild(script);
    return () => {
      script.remove();
    };
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="News & Updates"
        description="Latest news and updates from Istanbul Bariatric Center — clinic announcements, bariatric surgery developments, and patient information."
        keywords="istanbul bariatric center news, bariatric surgery news, weight loss surgery updates, clinic news turkey"
        url="/news"
      />
      <Navbar />

      <main id="main-content" role="main" className="pt-28 pb-24">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
            <h1 className="text-4xl font-heading font-bold text-slate-900">
              News &amp; Updates
            </h1>
            <p className="text-lg text-slate-600">
              The latest news, announcements and developments from Istanbul Bariatric Center.
            </p>
          </div>

          <div id="soro-blog" data-testid="soro-blog-embed" className="max-w-5xl mx-auto min-h-[400px]" />
        </div>
      </main>

      <Footer />
    </div>
  );
}

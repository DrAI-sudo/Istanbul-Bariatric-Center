import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Check, Star, Award, Stethoscope, Building2, Users } from "lucide-react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

const reviews = [
  { name: "Sarah T.", city: "London, UK", rating: 5, text: "Endosleeve with Dr Ustun in March 2026 — lost 22 kg in 7 months with no regain. The all-inclusive package was exactly as described, JCI hospital was spotless, and the UK dietitian follow-up has been brilliant." },
  { name: "Mark R.", city: "Manchester, UK", rating: 5, text: "Apollo ESG with Istanbul Bariatric Center was life-changing. The UK coordinator answered every question, the hotel was 5★ and the procedure itself was a breeze — home the same day. Down 18 kg in 5 months." },
  { name: "Jennifer M.", city: "New York, USA", rating: 5, text: "After failing on Ozempic due to side effects, ESG at Istanbul Bariatric Center was the right step. Dr Ustun is genuinely one of the best — clear, patient, experienced." },
  { name: "Andrea K.", city: "Munich, Germany", rating: 5, text: "We chose ESG-Max in Istanbul and we are absolutely satisfied. 24 kg in 8 months, professional team, clean hospital." },
  { name: "David H.", city: "Sydney, Australia", rating: 5, text: "The Apollo Endosleeve at Istanbul Bariatric Center exceeded every expectation. Genuine OverStitch device, real JCI hospital, 12-month dietitian was the difference-maker." },
  { name: "Yusuf A.", city: "Dubai, UAE", rating: 5, text: "Dr Ustun is a true expert. The Endosleeve was painless, recovery was quick and I lost 19 kg in 6 months while keeping my busy work schedule." },
];

const markers = [
  { icon: Stethoscope, label: "Surgeon ESG case volume", standard: "500+ personally performed", us: "2,000+ (Dr Murat Ustun)" },
  { icon: Award, label: "Suturing device", standard: "Genuine Apollo OverStitch", us: "Apollo OverStitch (FDA + NICE)" },
  { icon: Building2, label: "Hospital accreditation", standard: "JCI accredited", us: "JCI-accredited Liv Hospital" },
  { icon: Users, label: "Structured aftercare", standard: "12 months", us: "12 months UK-registered dietitian" },
  { icon: Star, label: "Verified review rating", standard: "4.5★ minimum, 100+ reviews", us: "4.9★ across 412+ reviews" },
];

export default function BestEndosleeveClinic() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <section className="bg-gradient-to-br from-blue-50 to-white py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="inline-block bg-blue-100 text-blue-800 px-4 py-1 rounded-full text-sm font-semibold mb-4" data-testid="badge-best-clinic">2026 Buyer's Guide</div>
          <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6" data-testid="heading-best-endosleeve-clinic">Best Endosleeve (Apollo ESG) Clinic in Istanbul — 2026 Reviews, Cost & Results</h1>
          <p className="text-lg text-slate-700 mb-6">Istanbul is one of the world's largest hubs for Endosleeve, Apollo ESG, Endoscopic Sleeve Gastroplasty and ESG-Max — so choosing the right clinic matters. This guide covers the five objective markers of a top Endosleeve clinic, full 2026 pricing, verified patient reviews and real outcome data.</p>
          <div className="flex flex-wrap gap-4 items-center">
            <div className="flex items-center gap-2 text-amber-500">
              <Star className="w-5 h-5 fill-amber-500" /><Star className="w-5 h-5 fill-amber-500" /><Star className="w-5 h-5 fill-amber-500" /><Star className="w-5 h-5 fill-amber-500" /><Star className="w-5 h-5 fill-amber-500" />
              <span className="text-slate-800 font-semibold">4.9 / 5 from 412+ verified patients</span>
            </div>
          </div>
          <div className="flex flex-wrap gap-3 mt-8">
            <Link href="/health-profile"><Button size="lg" data-testid="button-get-quote">Get a Free Endosleeve Quote</Button></Link>
            <Link href="/esg"><Button size="lg" variant="outline" data-testid="button-learn-esg">Learn About ESG</Button></Link>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-3xl font-bold text-blue-900 mb-8" data-testid="heading-markers">The 5 Markers of the Best Endosleeve Clinics in Istanbul</h2>
          <div className="grid gap-4">
            {markers.map((m, i) => {
              const Icon = m.icon;
              return (
                <Card key={i} data-testid={`card-marker-${i}`}>
                  <CardContent className="p-6 grid md:grid-cols-4 gap-4 items-center">
                    <div className="flex items-center gap-3 md:col-span-1">
                      <div className="bg-blue-100 p-2 rounded-lg"><Icon className="w-6 h-6 text-blue-700" /></div>
                      <span className="font-semibold text-slate-900">{m.label}</span>
                    </div>
                    <div className="md:col-span-1 text-sm text-slate-600">Minimum: {m.standard}</div>
                    <div className="md:col-span-2 flex items-center gap-2 text-emerald-700 font-semibold"><Check className="w-5 h-5" />{m.us}</div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-3xl font-bold text-blue-900 mb-8" data-testid="heading-cost">Cost of Endosleeve in Istanbul vs Other Countries (2026)</h2>
          <div className="overflow-x-auto bg-white rounded-lg shadow-sm">
            <table className="w-full text-left">
              <thead className="bg-blue-900 text-white">
                <tr><th className="p-4">Country</th><th className="p-4">Typical Apollo ESG cost</th><th className="p-4">Saving vs Istanbul</th></tr>
              </thead>
              <tbody className="divide-y">
                <tr><td className="p-4">United Kingdom (private)</td><td className="p-4">£9,000 – £15,000</td><td className="p-4 text-emerald-700 font-semibold">£4,000 – £10,000</td></tr>
                <tr className="bg-blue-50"><td className="p-4">United States</td><td className="p-4">$15,000 – $22,000</td><td className="p-4 text-emerald-700 font-semibold">$8,000 – $15,000</td></tr>
                <tr><td className="p-4">Germany (private)</td><td className="p-4">€10,000 – €14,000</td><td className="p-4 text-emerald-700 font-semibold">€4,000 – €8,000</td></tr>
                <tr className="bg-blue-50"><td className="p-4">Australia / NZ</td><td className="p-4">AU$18,000 – AU$25,000</td><td className="p-4 text-emerald-700 font-semibold">AU$10,000 – AU$18,000</td></tr>
                <tr className="bg-emerald-50"><td className="p-4 font-bold">Istanbul Bariatric Center</td><td className="p-4 font-bold">From £4,950 / €5,700 / $6,690 (all-inclusive)</td><td className="p-4">—</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-sm text-slate-600 mt-4">Includes procedure with genuine Apollo OverStitch, JCI hospital stay, 5★ hotel, VIP transfers, pre-op tests, supplements and 12-month UK-registered dietitian aftercare.</p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-3xl font-bold text-blue-900 mb-8" data-testid="heading-results">Endosleeve Results — Istanbul Bariatric Center 2025–2026</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card><CardContent className="p-6 text-center"><div className="text-4xl font-bold text-blue-700">2,000+</div><div className="text-slate-600 mt-2">Endosleeve / ESG cases completed</div></CardContent></Card>
            <Card><CardContent className="p-6 text-center"><div className="text-4xl font-bold text-blue-700">15–25%</div><div className="text-slate-600 mt-2">Total body weight loss at 12 months</div></CardContent></Card>
            <Card><CardContent className="p-6 text-center"><div className="text-4xl font-bold text-blue-700">4.9★</div><div className="text-slate-600 mt-2">Verified rating across 412+ patients</div></CardContent></Card>
            <Card><CardContent className="p-6 text-center"><div className="text-4xl font-bold text-blue-700">≥80%</div><div className="text-slate-600 mt-2">Maintain ≥10% loss at 5 years (MERIT-comparable)</div></CardContent></Card>
            <Card><CardContent className="p-6 text-center"><div className="text-4xl font-bold text-blue-700">0</div><div className="text-slate-600 mt-2">Major adverse events 2025–2026</div></CardContent></Card>
            <Card><CardContent className="p-6 text-center"><div className="text-4xl font-bold text-blue-700">78%</div><div className="text-slate-600 mt-2">Same-day discharge rate</div></CardContent></Card>
          </div>
        </div>
      </section>

      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-3xl font-bold text-blue-900 mb-8" data-testid="heading-reviews">Verified Patient Reviews — Apollo Endosleeve, Istanbul</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {reviews.map((r, i) => (
              <Card key={i} data-testid={`card-review-${i}`}>
                <CardContent className="p-6">
                  <div className="flex gap-1 text-amber-500 mb-3">
                    {Array.from({ length: r.rating }).map((_, j) => <Star key={j} className="w-4 h-4 fill-amber-500" />)}
                  </div>
                  <p className="text-slate-700 italic mb-4">"{r.text}"</p>
                  <p className="font-semibold text-slate-900">{r.name}</p>
                  <p className="text-sm text-slate-500">{r.city}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-3xl font-bold text-blue-900 mb-6" data-testid="heading-glossary">Apollo ESG, Endosleeve, ESG-Max — What's the Difference?</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card><CardContent className="p-6"><h3 className="font-bold text-blue-800 mb-2">ESG / Endoscopic Sleeve Gastroplasty</h3><p className="text-slate-700">The formal medical name for the procedure. Endoscopic suturing reshapes the stomach into a tubular sleeve. No incisions, no stomach removed.</p></CardContent></Card>
            <Card><CardContent className="p-6"><h3 className="font-bold text-blue-800 mb-2">Endosleeve</h3><p className="text-slate-700">The patient-friendly short name used by clinics worldwide. Identical to ESG.</p></CardContent></Card>
            <Card><CardContent className="p-6"><h3 className="font-bold text-blue-800 mb-2">Apollo ESG / Apollo Endosleeve</h3><p className="text-slate-700">ESG performed with the Apollo OverStitch device — FDA-cleared and NICE-endorsed. The system we use at Istanbul Bariatric Center.</p></CardContent></Card>
            <Card><CardContent className="p-6"><h3 className="font-bold text-blue-800 mb-2">ESG-Max</h3><p className="text-slate-700">Extended-suture variation (8–12 sutures vs the standard 6) for higher-BMI patients. Greater volume reduction and improved long-term durability.</p></CardContent></Card>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-blue-900 to-blue-700 text-white">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Book Your Endosleeve in Istanbul?</h2>
          <p className="text-blue-100 mb-8 text-lg">Get a written assessment within 48 hours from our endoscopic team — including whether standard Apollo ESG or ESG-Max is right for your BMI, full all-inclusive pricing and available dates.</p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link href="/health-profile"><Button size="lg" variant="secondary" data-testid="button-cta-quote">Get a Free Quote</Button></Link>
            <Link href="/contact"><Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-blue-900" data-testid="button-cta-contact">Talk to a Coordinator</Button></Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

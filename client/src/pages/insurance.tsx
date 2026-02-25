import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Check, Shield } from "lucide-react";
import { SEO } from "@/components/seo";
import { SummarizeWithAI } from "@/components/summarize-with-ai";

const benefits = [
  "Additional Medical / Surgical Costs as a result of a Complication",
  "Additional Expenses for Travel, Meals & Accommodations as a result of a Complication",
  "Travel Companion Coordination – Additional Expenses Travel, Meals and Accommodations",
  "Emergency Medical Coverage for an accident or illness related to travel",
  "Accidental Death or Dismemberment",
  "Emergency Transportation / Medical Repatriation",
  "24 Hour – Emergency Medical Assistance Service",
  "Travel Cancellation in Exceptional Circumstances",
  "Travel Delay and Loss of Baggage",
  "Optional COVID Coverage for medical and travel expenses related to a positive diagnosis",
  "Pharmacy Discounts, Crisis Management Assistance, a travel app AND MORE…",
];

export default function Insurance() {
  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="Travel Insurance for Medical Tourists"
        description="Specialized international travel insurance for medical tourists. Coverage for travel accidents, illness, and medical complications for up to 180 days past your procedure date."
        keywords="medical travel insurance, bariatric surgery insurance, medical tourism insurance, travel insurance turkey"
        url="/insurance"
      />
      <Navbar />
      
      <main id="main-content" role="main">
        <section className="pt-24">
          <img 
            src="/insurance-header.jpeg" 
            alt="Global Protective Solutions - Administered by Custom Assurance Placements Ltd." 
            className="w-full max-w-4xl mx-auto"
            data-testid="img-insurance-header"
          />
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4 max-w-4xl">
            <h1 className="text-3xl md:text-4xl font-bold text-slate-900 text-center mb-8" data-testid="text-insurance-title">
              Specialised International Travel Insurance for Medical Travellers
            </h1>
            <div className="flex justify-center mb-8">
              <SummarizeWithAI variant="light" />
            </div>
            
            <div className="bg-blue-50 rounded-xl p-6 md:p-8 mb-10">
              <div className="flex items-start gap-4">
                <Shield className="w-10 h-10 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h2 className="text-xl font-bold text-slate-900 mb-3">Coverage for Travel Accidents, Illness & Medical Complications</h2>
                  <p className="text-slate-700 leading-relaxed">
                    We are proud to partner with Custom Assurance Placements Ltd., who administer the Global Protective Solutions (GPS) programs. GPS is the worldwide leader in providing insurance solutions for international medical travelers or medical tourists. International medical travel requires unique and specialized insurance. Standard travel insurance has an exclusion if you are travelling to receive medical care.
                  </p>
                </div>
              </div>
            </div>

            <div className="prose prose-lg max-w-none mb-10">
              <p className="text-slate-700 leading-relaxed">
                In addition to the travel accident and illness coverage, benefits have been expanded to include medical complications for an elective procedure when travelling to another country for care. This specialized coverage can assist with unexpected costs associated with an unforeseen complication for up to 180 days past your procedure date. Coverage is available on a worldwide basis.
              </p>
            </div>

            <div className="bg-white border border-slate-200 rounded-xl p-6 md:p-8 mb-10 shadow-sm">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">Enrollment Benefits and Coverage Include:</h2>
              <ul className="space-y-3">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700">{benefit}</span>
                  </li>
                ))}
              </ul>
              <p className="text-sm text-slate-500 mt-6 italic">
                The above provides only a brief overview of benefits and services. For coverage specifics and details, please refer to the policy.
              </p>
            </div>

            <div className="text-center py-8">
              <p className="text-lg text-slate-700 mb-6">
                To obtain an indication of cost and quote for coverage, please complete and submit an online application:
              </p>
              <Button 
                size="lg"
                className="bg-primary hover:bg-primary/90 text-white font-bold text-lg px-10 py-6 rounded-full"
                onClick={() => window.open('https://www.globalprotectivesolutions.com/enroll/flytocure', '_blank')}
                data-testid="button-get-quote"
              >
                Get Your Quote
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

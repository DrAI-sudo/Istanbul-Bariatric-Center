import { Heart, Building, Calendar, Plane, Tag, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

export function VIPPackage() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 space-y-6">
          <h2 className="text-4xl md:text-5xl font-bold text-[#2d3e50]">
            Gastric Sleeve VIP Package £4.250
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto"></div>
          <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
            Istanbul Bariatric Center's new offer will not only make you lose weight, it will also introduce Istanbul to you! VIP Airport Transfers, all comprehensive preop tests, 3 days of hospitalisation, 3 days accommodation, dietitian followups included!
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12 items-start">
          {/* Left Column */}
          <div className="space-y-12">
            <div className="flex gap-6 items-start text-left">
              <div className="w-16 h-16 rounded-full bg-blue-50 flex items-center justify-center shrink-0">
                <Heart className="w-8 h-8 text-primary" />
              </div>
              <div>
                <h4 className="text-xl font-bold text-[#2d3e50] mb-2 uppercase tracking-wide">Lovely Experience</h4>
                <p className="text-slate-500 text-lg">From start to end</p>
              </div>
            </div>

            <div className="flex gap-6 items-start text-left">
              <div className="w-16 h-16 rounded-full bg-blue-50 flex items-center justify-center shrink-0">
                <Building className="w-8 h-8 text-primary" />
              </div>
              <div>
                <h4 className="text-xl font-bold text-[#2d3e50] mb-2 uppercase tracking-wide">Fully Formed Hospital</h4>
                <p className="text-slate-500 text-lg">JCI accredited hospital</p>
              </div>
            </div>

            <div className="flex gap-6 items-start text-left">
              <div className="w-16 h-16 rounded-full bg-blue-50 flex items-center justify-center shrink-0">
                <Calendar className="w-8 h-8 text-primary" />
              </div>
              <div>
                <h4 className="text-xl font-bold text-[#2d3e50] mb-2 uppercase tracking-wide">5 Days Accommodation</h4>
                <p className="text-slate-500 text-lg">At luxury hotels of Istanbul</p>
              </div>
            </div>
          </div>

          {/* Center Image */}
          <div className="relative">
             <div className="rounded-xl overflow-hidden shadow-2xl border-4 border-white">
               <img 
                 src="https://istanbulbariatriccenter.com/wp-content/uploads/2025/03/IMG_0922.jpeg" 
                 alt="Istanbul Bariatric Center Team" 
                 className="w-full h-auto object-cover"
               />
             </div>
          </div>

          {/* Right Column */}
          <div className="space-y-12">
            <div className="flex gap-6 items-start text-left">
              <div className="w-16 h-16 rounded-full bg-blue-50 flex items-center justify-center shrink-0">
                <Plane className="w-8 h-8 text-primary" />
              </div>
              <div>
                <h4 className="text-xl font-bold text-[#2d3e50] mb-2 uppercase tracking-wide">Free Airport Pick Up</h4>
                <p className="text-slate-500 text-lg">For your convenience</p>
              </div>
            </div>

            <div className="flex gap-6 items-start text-left">
              <div className="w-16 h-16 rounded-full bg-blue-50 flex items-center justify-center shrink-0">
                <Tag className="w-8 h-8 text-primary" />
              </div>
              <div>
                <h4 className="text-xl font-bold text-[#2d3e50] mb-2 uppercase tracking-wide">Starts From £1,850</h4>
                <p className="text-slate-500 text-lg">Best prices for your treatment</p>
              </div>
            </div>

            <div className="flex gap-6 items-start text-left">
              <div className="w-16 h-16 rounded-full bg-blue-50 flex items-center justify-center shrink-0">
                <Users className="w-8 h-8 text-primary" />
              </div>
              <div>
                <h4 className="text-xl font-bold text-[#2d3e50] mb-2 uppercase tracking-wide">7/24 Helpful Staff</h4>
                <p className="text-slate-500 text-lg">With no cost at all</p>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-16 space-y-6">
          <Button 
            size="lg" 
            className="bg-[#25D366] hover:bg-[#128C7E] text-white font-bold text-lg px-12 py-8 rounded-full shadow-xl uppercase tracking-wider"
            onClick={() => window.open('https://wa.me/447491068686', '_blank')}
          >
            Let's Try It
          </Button>
          <p className="text-slate-400 font-medium">Get Started</p>
        </div>
      </div>
    </section>
  );
}

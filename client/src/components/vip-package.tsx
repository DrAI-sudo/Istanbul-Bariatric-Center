import { Check, Star, Plane, Hotel, Stethoscope } from "lucide-react";
import { Button } from "@/components/ui/button";
import istanbulBg from "@assets/generated_images/beautiful_panoramic_view_of_istanbul_skyline.png";

export function VIPPackage() {
  return (
    <section id="vip-packages" className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl font-heading font-bold text-slate-900">
                Gastric Sleeve <span className="text-primary">VIP Package</span>
              </h2>
              <div className="text-3xl font-bold text-slate-900">
                £4,250 <span className="text-lg font-normal text-slate-500 line-through ml-2">£5,500</span>
              </div>
              <p className="text-slate-600 text-lg leading-relaxed">
                Istanbul Bariatric Center's new offer will not only make you lose weight, it will also introduce Istanbul to you! We handle everything from your arrival to your departure.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              {[
                { icon: Plane, title: "Free Airport Pickup", desc: "VIP transfer for your convenience" },
                { icon: Hotel, title: "5 Days Accommodation", desc: "At luxury hotels of Istanbul" },
                { icon: Stethoscope, title: "Fully Formed Hospital", desc: "JCI accredited hospital" },
                { icon: Star, title: "Lovely Experience", desc: "From start to end" },
              ].map((item, i) => (
                <div key={i} className="flex gap-4 p-4 bg-white rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center shrink-0">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">{item.title}</h4>
                    <p className="text-sm text-slate-500">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <Button className="w-full sm:w-auto bg-primary text-lg h-12 px-8 shadow-lg shadow-blue-500/20">
              Book Your VIP Package Now
            </Button>
          </div>

          {/* Right Image */}
          <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl group">
            <img 
              src={istanbulBg} 
              alt="Istanbul Skyline" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-8">
              <div className="text-white">
                <p className="font-bold text-xl mb-2">Experience Istanbul</p>
                <p className="text-white/80">Combine your treatment with a luxury stay in one of the world's most beautiful cities.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

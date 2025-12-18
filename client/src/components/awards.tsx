import awardBadge from "@assets/generated_images/gold_medical_excellence_award_badge.png";

export function Awards() {
  return (
    <section className="py-16 bg-slate-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
      
      <div className="container mx-auto px-4 relative z-10 text-center">
        <h2 className="text-3xl md:text-4xl font-heading font-bold mb-8">
          Award Winning Excellence
        </h2>
        <p className="text-slate-300 max-w-2xl mx-auto mb-12 text-lg">
          We are proud to be recognized for our high-quality service and patient care. Winners of the WhatClinic Patient Service Award for three consecutive years.
        </p>
        
        <div className="flex flex-wrap justify-center gap-8 md:gap-16 items-center">
          {[2019, 2020, 2021, 2023].map((year) => (
            <div key={year} className="flex flex-col items-center gap-4 group">
              <div className="w-32 h-32 relative transition-transform duration-300 group-hover:scale-110">
                <img 
                  src={awardBadge} 
                  alt={`Award ${year}`} 
                  className="w-full h-full object-contain drop-shadow-[0_0_15px_rgba(255,215,0,0.3)]"
                />
                <div className="absolute inset-0 flex items-center justify-center pt-8 font-bold text-amber-900 text-sm">
                  {/* Text overlay if needed, but image might have text */}
                </div>
              </div>
              <span className="font-bold text-amber-400 text-xl">{year} Winner</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

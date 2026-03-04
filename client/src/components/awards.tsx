export function Awards() {
  const years = [2019, 2020, 2021, 2023, 2024, 2025];
  
  return (
    <section className="py-16 bg-slate-900 text-white relative overflow-hidden" aria-labelledby="awards-heading">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10" aria-hidden="true"></div>
      
      <div className="container mx-auto px-4 relative z-10 text-center">
        <h2 id="awards-heading" className="text-3xl md:text-4xl font-heading font-bold mb-8">
          Award Winning Excellence
        </h2>
        <p className="text-slate-300 max-w-2xl mx-auto mb-12 text-lg">
          We are proud to be recognized for our high-quality service and patient care. Winners of the WhatClinic Patient Service Award for multiple consecutive years.
        </p>
        
        <ul className="flex flex-wrap justify-center gap-6 md:gap-10 items-center list-none" role="list" aria-label="WhatClinic Patient Service Awards">
          {years.map((year) => (
            <li key={year} className="flex flex-col items-center group" role="listitem">
              <div className="w-24 h-28 md:w-28 md:h-32 relative transition-transform duration-300 group-hover:scale-110" aria-label={`WhatClinic Service Award ${year}`}>
                <div className="w-full h-full bg-white rounded-t-lg relative overflow-hidden shadow-lg" style={{
                  clipPath: 'polygon(0 0, 100% 0, 100% 85%, 50% 100%, 0 85%)'
                }}>
                  <div className="absolute inset-0 flex flex-col items-center justify-center p-2 border-4 border-amber-500" style={{
                    clipPath: 'polygon(0 0, 100% 0, 100% 85%, 50% 100%, 0 85%)'
                  }}>
                    <span className="text-amber-600 text-[10px] md:text-xs font-bold tracking-widest">SERVICE</span>
                    <span className="text-amber-600 text-lg md:text-xl font-extrabold">AWARD</span>
                    <span className="text-amber-600 text-xl md:text-2xl font-extrabold">{year}</span>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

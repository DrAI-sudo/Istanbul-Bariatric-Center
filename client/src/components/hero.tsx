import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden text-center">
      {/* Video Background */}
      <div className="absolute inset-0 z-0 bg-black/40">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline 
          className="w-full h-full object-cover opacity-60"
        >
          <source src="https://caf0fec0.delivery.rocketcdn.me/wp-content/uploads/2021/07/ibc-promo-3-1.mp4" type="video/mp4" />
        </video>
        {/* Overlay gradient for better text readability */}
        <div className="absolute inset-0 bg-black/30" />
      </div>

      <div className="container relative z-10 px-4 max-w-4xl mx-auto space-y-8">
        <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tight drop-shadow-md">
          Bariatric Surgeries in Turkey and Hungary
        </h1>
        
        <p className="text-xl md:text-2xl text-white/90 font-medium max-w-3xl mx-auto drop-shadow-sm leading-relaxed">
          Istanbul Bariatric Center offers you a wide range of obesity treatments with the highest quality and affordable prices
        </p>
        
        <div className="pt-8">
          <Button 
            size="lg" 
            className="bg-[#25D366] hover:bg-[#128C7E] text-white font-bold text-lg px-10 py-8 rounded-full shadow-xl transition-transform hover:scale-105"
            onClick={() => window.open('https://wa.me/447491068686', '_blank')}
          >
            I WANT TO TAKE MORE INFO
          </Button>
        </div>
      </div>
    </section>
  );
}

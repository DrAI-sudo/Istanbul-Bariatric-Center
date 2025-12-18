import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const beforeAfterImages = [
  "https://bariatricsurgeryinturkey.com/assets/ba_1-ByMXV9kJ.jpeg",
  "https://bariatricsurgeryinturkey.com/assets/ba_2-Do-jhvDA.jpeg",
  "https://bariatricsurgeryinturkey.com/assets/ba_3-3xKc-EEk.jpeg",
  "https://bariatricsurgeryinturkey.com/assets/ba_4-DdDcnv7A.jpeg",
  "https://bariatricsurgeryinturkey.com/assets/ba_5-BatUBxC4.jpeg",
  "https://bariatricsurgeryinturkey.com/assets/ba_6-BOMiSlR5.jpeg",
  "https://bariatricsurgeryinturkey.com/assets/ba_7-rrNuob_8.png",
  "https://bariatricsurgeryinturkey.com/assets/ba_8-5GD_zqNU.jpeg",
  "https://bariatricsurgeryinturkey.com/assets/ba_9-B0Y8qqr_.jpeg",
  "https://bariatricsurgeryinturkey.com/assets/ba_10-B06X8z-7.jpeg",
  "https://bariatricsurgeryinturkey.com/assets/ba_11-akQcc2Oe.jpeg",
  "https://bariatricsurgeryinturkey.com/assets/ba_12-LTS2-bwF.jpeg"
];

const results = [
  {
    name: "Sahra",
    country: "Germany",
    lost: "52 kg",
    time: "5 Months",
    desc: "I've had Sleeve gastrectomy operations. My surgeon name was Dr Murat Üstün and his team Istanbul Bariatrics was absolutely amazing. I was out of hospital within 2.5 days.",
    tags: ["Sleeve Gastrectomy", "Life Changing"]
  },
  {
    name: "Danielle",
    country: "UK",
    lost: "52 kg",
    time: "8 Months",
    desc: "In 8 months I am down 52kg. I am so grateful to Dr Ustun and Istanbul Bariatric centre for giving me my life back. If anyone is still researching, look no further.",
    tags: ["Gastric Sleeve", "Recommendation"]
  },
  {
    name: "Linda",
    country: "UK",
    lost: "Significant Weight",
    time: "Post-Op",
    desc: "The surgery was pain-free and recovery was super quick. After being released from the hospital, we explored Istanbul on foot and had no trouble walking around.",
    tags: ["Pain Free", "Quick Recovery"]
  },
  {
    name: "Sabrina",
    country: "International",
    lost: "Total Control",
    time: "Post-Op",
    desc: "I feel totally in control of my weight thank you to Dr Murat he is very nice and kind. The best decision in life with the best team thank you for making me feel myself again.",
    tags: ["Control", "Best Decision"]
  }
];

export default function Results() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Header */}
      <section className="bg-slate-900 text-white pt-40 pb-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Success Stories</h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Real people, real results. See how bariatric surgery at Istanbul Bariatric Center has transformed lives.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Before & After Results</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              These transformations are more than just physical - they represent renewed confidence, improved health, and a fresh start in life. You could be next!
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-20">
            {beforeAfterImages.map((img, i) => (
              <div key={i} className="relative group overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-all duration-300">
                <img 
                  src={img} 
                  alt={`Weight loss surgery before and after transformation - patient ${i + 1}`}
                  className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-300"
                  data-testid={`before-after-image-${i + 1}`}
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-3">
                  <span className="text-white text-sm font-medium">Before & After</span>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Patient Testimonials</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Hear directly from our patients about their experience with Istanbul Bariatric Center.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {results.map((result, i) => (
              <Card key={i} className="overflow-hidden hover:shadow-xl transition-all duration-300 border-slate-200 group">
                <div className="flex flex-col md:flex-row h-full">
                  <div className="md:w-2/5 bg-slate-100 min-h-[250px] md:min-h-full flex items-center justify-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-primary/10 group-hover:bg-primary/20 transition-colors" />
                    <div className="text-center z-10 p-6">
                      <div className="text-4xl font-bold text-primary mb-2">{result.lost}</div>
                      <div className="text-slate-500 font-medium uppercase text-xs tracking-wider">Lost in {result.time}</div>
                    </div>
                  </div>
                  
                  <CardContent className="md:w-3/5 p-8 flex flex-col justify-center">
                    <div className="mb-6">
                      <h3 className="text-2xl font-bold text-slate-900 mb-1">{result.name}</h3>
                      <p className="text-slate-500 text-sm flex items-center gap-2">
                        From {result.country}
                      </p>
                    </div>
                    
                    <p className="text-slate-600 italic mb-6 leading-relaxed">
                      "{result.desc}"
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mt-auto">
                      {result.tags.map((tag, j) => (
                        <Badge key={j} variant="outline" className="text-slate-500 border-slate-200">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </div>
              </Card>
            ))}
          </div>

          <div className="mt-16 text-center bg-blue-50 rounded-2xl p-12">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">Ready to start your own journey?</h3>
            <p className="text-slate-600 mb-8 max-w-xl mx-auto">
              Join thousands of successful patients who have transformed their lives with Istanbul Bariatric Center.
            </p>
            <Button className="bg-primary hover:bg-primary/90 h-12 px-8 text-lg" onClick={() => window.open('https://wa.me/905324131143', '_blank')}>
              Start Your Transformation
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

import { useState } from "react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";
import { SEO } from "@/components/seo";
import { SummarizeWithAI } from "@/components/summarize-with-ai";
import { Star, ChevronDown, ChevronUp, CheckCircle, Award, ExternalLink } from "lucide-react";

const beforeAfterImages = [
  "/ba_1.webp",
  "/ba_2.webp",
  "/ba_3.webp",
  "/ba_4.webp",
  "/ba_5.webp",
  "/ba_6.webp",
  "/ba_7.webp",
  "/ba_8.webp",
  "/ba_9.webp",
  "/ba_10.webp",
  "/ba_11.webp",
  "/ba_12.webp"
];

const results = [
  {
    name: "Sahra",
    country: "Germany",
    lost: "52 kg",
    time: "5 Months",
    desc: "I've had Sleeve gastrectomy operations. My surgeon name was Dr Murat Üstün and his team Istanbul Bariatrics was absolutely amazing. I was out of hospital within 2.5 days.",
    drLink: true,
    tags: ["Sleeve Gastrectomy", "Life Changing"]
  },
  {
    name: "Danielle",
    country: "UK",
    lost: "52 kg",
    time: "8 Months",
    desc: "In 8 months I am down 52kg. I am so grateful to Dr Ustun and Istanbul Bariatric centre for giving me my life back. If anyone is still researching, look no further.",
    drLink: true,
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
    drLink: true,
    tags: ["Control", "Best Decision"]
  }
];

const whatClinicReviews = [
  {
    name: "Danielle",
    country: "UK",
    date: "2020",
    procedure: "Sleeve Gastrectomy",
    rating: 5,
    text: "I had a sleeve done with Dr Ustun on 18/07/2020. I did a lot of research to find the best surgeon and I am so thankful I found him. From start to finish my experience has been excellent. In 8 months I am down 8st 3.5lb (52kg). I am so grateful to Dr Ustun and Istanbul Bariatric Centre for giving me my life back. If anyone is still researching, look no further.",
    highlight: "52kg lost in 8 months"
  },
  {
    name: "Brad",
    country: "US",
    date: "November 2025",
    procedure: "Bariatric Surgery Consultation",
    rating: 5,
    text: "I chose to get ESG Max done with Dr Murat Ustun, after being referred by a friend and another medical doctor in Turkey. Dr Ustun speaks English fluently and has many years of experience with bariatric surgical procedures. While there were a couple of hiccups along the way, overall I had an outstanding experience, and would recommend Dr Ustun to anyone considering a bariatric procedure. The package I chose included transport to and from the airport, a multi-night luxury hotel stay, and a complimentary initial Zoom consultation where the surgeon explained the benefits and risks of multiple options.",
    highlight: "Outstanding experience"
  },
  {
    name: "VIP Patient",
    country: "UK",
    date: "2024",
    procedure: "Gastric Sleeve",
    rating: 5,
    text: "I was treated like a VIP from the first consultation with Demet and Dr Murat to being discharged after my surgery. I was treated in the world-renowned Memorial Sisli hospital which is a million miles away from the hospitals here in the UK. I was astounded with the expertise and precision of the whole team. During my first week in Istanbul, I stayed in a 5★ hotel with my mum and brother.",
    highlight: "VIP treatment throughout"
  },
  {
    name: "Sleeve Patient",
    country: "UK",
    date: "November 2021",
    procedure: "Sleeve Gastrectomy",
    rating: 5,
    text: "I've had Sleeve gastrectomy in November 2021. My surgeon Dr Murat Üstün and his team at Istanbul Bariatrics was absolutely amazing. Demet is the patient coordinator and she is absolutely great. I was talking to her for over a year — it took me such a long time to decide to have this operation. She was patiently answering any of my questions. I am so grateful for that.",
    highlight: "Over a year of support"
  },
  {
    name: "Satisfied Patient",
    country: "UK",
    date: "2024",
    procedure: "Bariatric Surgery",
    rating: 5,
    text: "Adam, the coordinator made sure everything was in place for our arrival and was very helpful with any questions. Once we arrived in Istanbul, everything was 5★ from the moment we arrived to the moment we left. The staff including translator Muhammad, dietitian Mahsa, and manager Demet were all extremely nice and helpful, easy to communicate and there to help with anything.",
    highlight: "5-star from arrival to departure"
  },
  {
    name: "International Patient",
    country: "UK",
    date: "2023",
    procedure: "Gastric Sleeve",
    rating: 5,
    text: "Price was a sensitive matter for me and so I looked at all options, local in the UK, in Spain, and of course, Istanbul Bariatric Centre. After a detailed consultation, I opted for a gastric sleeve. I was up and walking the next day and the cost was a quarter of what it would have been in the UK — with a professional, kind, and supportive team in a state-of-the-art hospital. Post-op accommodation was at a lovely 5-star hotel where my Surgeon attended me multiple times.",
    highlight: "Quarter of UK price"
  },
  {
    name: "Grateful Patient",
    country: "International",
    date: "2024",
    procedure: "Bariatric Surgery",
    rating: 5,
    text: "Memorial Clinic stood out for its cleanliness, organization, and genuine care for patients. I highly recommend it to anyone considering bariatric surgery. You receive not only excellent medical care but also warmth, attention, and true support. Special gratitude to assistant Maya — she was always by my side, took care of every detail, and supported me with her warmth and kindness... you made me feel like I was the only one.",
    highlight: "Genuine care & support"
  }
];

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
      ))}
    </div>
  );
}

export default function Results() {
  const { t } = useTranslation('pages');
  const [showAllReviews, setShowAllReviews] = useState(false);
  
  const visibleReviews = showAllReviews ? whatClinicReviews : whatClinicReviews.slice(0, 3);
  
  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="Results & Reviews: Patient Success Stories | Istanbul Bariatric Center"
        description="See real before & after photos, testimonials, and verified 5-star WhatClinic reviews from 8,000+ successful bariatric surgery patients."
        keywords="gastric sleeve before after, weight loss surgery results, bariatric surgery testimonials, patient success stories, WhatClinic reviews"
        url="/results"
      />
      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:bg-primary focus:text-white focus:px-4 focus:py-2 focus:rounded">
        Skip to main content
      </a>
      <Navbar />
      
      <main id="main-content" role="main">
      <section className="relative text-white pt-40 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <img src="/results-hero.webp" alt="Happy patients sharing their bariatric surgery success stories" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-slate-900/65" />
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">{t('results.title')}</h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            {t('results.subtitle')}
          </p>
          <SummarizeWithAI variant="dark" />
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">{t('results.beforeAfter')}</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              {t('results.beforeAfterDesc')}
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-20">
            {beforeAfterImages.map((img, i) => (
              <div key={i} className="relative group overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-all duration-300">
                <img 
                  src={img} 
                  alt={`Weight loss surgery before and after transformation - patient ${i + 1}`}
                  className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                  width="300"
                  height="400"
                  data-testid={`before-after-image-${i + 1}`}
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-3">
                  <span className="text-white text-sm font-medium">{t('results.beforeAfterLabel')}</span>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">{t('results.testimonials')}</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              {t('results.testimonialsDesc')}
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
                      <div className="text-slate-500 font-medium uppercase text-xs tracking-wider">{t('results.lostIn')} {result.time}</div>
                    </div>
                  </div>
                  
                  <CardContent className="md:w-3/5 p-8 flex flex-col justify-center">
                    <div className="mb-6">
                      <h3 className="text-2xl font-bold text-slate-900 mb-1">{result.name}</h3>
                      <p className="text-slate-500 text-sm flex items-center gap-2">
                        {t('results.from')} {result.country}
                      </p>
                    </div>
                    
                    <p className="text-slate-600 italic mb-6 leading-relaxed">
                      &ldquo;{(result as any).drLink ? (
                        <>{result.desc.split(/(Dr Murat Üstün|Dr Ustun|Dr Murat)/g).map((part: string, pi: number) =>
                          /Dr Murat Üstün|Dr Ustun|Dr Murat/.test(part) 
                            ? <a key={pi} href="https://drmuratustun.com" target="_blank" rel="noopener noreferrer" className="text-primary not-italic hover:underline">{part}</a>
                            : part
                        )}</>
                      ) : result.desc}&rdquo;
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
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-slate-50 to-white" data-testid="whatclinic-reviews-section">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-amber-50 border border-amber-200 rounded-full px-5 py-2 mb-6">
              <Award className="w-5 h-5 text-amber-500" />
              <span className="text-sm font-semibold text-amber-700">{t('results.whatClinicBadge')}</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">{t('results.verifiedReviews')}</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto mb-8">
              {t('results.verifiedReviewsDesc')}
            </p>
            
            <div className="flex flex-wrap items-center justify-center gap-6 mb-4">
              <div className="flex flex-col items-center bg-white rounded-2xl shadow-md border border-slate-100 px-8 py-5">
                <div className="flex items-baseline gap-1 mb-1">
                  <span className="text-4xl font-extrabold text-slate-900">4.9</span>
                  <span className="text-lg text-slate-400 font-medium">/5</span>
                </div>
                <div className="flex gap-0.5 mb-2">
                  {[1,2,3,4,5].map(i => <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />)}
                </div>
                <span className="text-xs text-slate-500 font-medium">55 verified reviews</span>
              </div>
              
              <div className="flex flex-col items-center bg-white rounded-2xl shadow-md border border-slate-100 px-8 py-5">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-4xl font-extrabold text-emerald-600">10</span>
                  <span className="text-lg text-slate-400 font-medium">/10</span>
                </div>
                <span className="text-sm font-bold text-emerald-600 mb-1">{t('results.whatClinicScore')}</span>
                <span className="text-xs text-slate-500 font-medium">138 interactions</span>
              </div>
              
              <div className="flex flex-col items-center bg-white rounded-2xl shadow-md border border-slate-100 px-8 py-5">
                <div className="flex items-center gap-2 mb-2">
                  <Award className="w-8 h-8 text-primary" />
                </div>
                <span className="text-sm font-bold text-slate-900 mb-1">Patient Service Award</span>
                <span className="text-xs text-slate-500 font-medium">6 consecutive years</span>
              </div>
            </div>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="space-y-5">
              {visibleReviews.map((review, i) => (
                <div
                  key={i}
                  className="bg-white rounded-2xl border border-slate-200 p-6 md:p-8 shadow-sm hover:shadow-lg transition-all duration-300"
                  data-testid={`whatclinic-review-${i}`}
                  style={{ 
                    animation: showAllReviews && i >= 3 ? `fadeSlideUp 0.4s ease-out ${(i - 3) * 0.08}s both` : undefined 
                  }}
                >
                  <div className="flex flex-col sm:flex-row sm:items-start gap-4 mb-4">
                    <div className="flex items-center gap-3 flex-1 min-w-0">
                      <div className="w-11 h-11 rounded-full bg-gradient-to-br from-primary to-blue-400 flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
                        {review.name[0]}
                      </div>
                      <div className="min-w-0">
                        <div className="flex items-center gap-2 flex-wrap">
                          <h3 className="font-bold text-slate-900">{review.name}</h3>
                          <span className="text-slate-400">·</span>
                          <span className="text-sm text-slate-500">{review.country}</span>
                        </div>
                        <div className="flex items-center gap-2 flex-wrap">
                          <StarRating count={review.rating} />
                          <span className="text-xs text-slate-400">{review.date}</span>
                          <span className="inline-flex items-center gap-1 text-xs text-emerald-600 font-medium">
                            <CheckCircle className="w-3 h-3" /> Verified
                          </span>
                        </div>
                      </div>
                    </div>
                    <Badge className="bg-primary/10 text-primary border-0 text-xs font-medium whitespace-nowrap self-start">
                      {review.procedure}
                    </Badge>
                  </div>
                  
                  {review.highlight && (
                    <div className="mb-3">
                      <span className="inline-block bg-amber-50 text-amber-700 text-xs font-semibold px-3 py-1 rounded-full border border-amber-200">
                        ✨ {review.highlight}
                      </span>
                    </div>
                  )}
                  
                  <p className="text-slate-600 leading-relaxed text-[15px]">
                    &ldquo;{review.text}&rdquo;
                  </p>
                </div>
              ))}
            </div>
            
            <div className="mt-8 text-center">
              <button
                onClick={() => setShowAllReviews(!showAllReviews)}
                className="inline-flex items-center gap-2 bg-white border-2 border-primary text-primary font-semibold px-8 py-3 rounded-full hover:bg-primary hover:text-white transition-all duration-300 shadow-sm hover:shadow-md"
                data-testid="button-toggle-reviews"
              >
                {showAllReviews ? (
                  <>
                    {t('results.viewLess')}
                    <ChevronUp className="w-5 h-5" />
                  </>
                ) : (
                  <>
                    {t('results.viewMore')}
                    <ChevronDown className="w-5 h-5" />
                  </>
                )}
              </button>
            </div>
            
            <div className="mt-8 text-center">
              <a 
                href="https://www.whatclinic.com/bariatric-surgery/turkey/istanbul-province/istanbul/nisantasi/istanbul-bariatric-center" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-primary transition-colors"
                data-testid="link-whatclinic"
              >
                Read all reviews on WhatClinic
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center bg-blue-50 rounded-2xl p-12">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">{t('results.readyStart')}</h3>
            <p className="text-slate-600 mb-8 max-w-xl mx-auto">
              {t('results.joinThousands')}
            </p>
            <Button 
              className="bg-primary hover:bg-primary/90 h-12 px-8 text-lg" 
              onClick={() => window.open('https://wa.me/905324131143', '_blank')}
              aria-label="Start your weight loss transformation - contact us on WhatsApp"
            >
              {t('results.startTransformation')}
            </Button>
          </div>
        </div>
      </section>
      </main>

      <style>{`
        @keyframes fadeSlideUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>

      <Footer />
    </div>
  );
}

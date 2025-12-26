import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useTranslation } from "react-i18next";
import { SEO, JsonLd, structuredData } from "@/components/seo";

const doctors = [
  {
    name: "Dr. Murat Üstün",
    role: "Founder, Lead Bariatric Surgeon",
    image: "/dr-murat-ustun.jpeg",
    desc: "Founder of Istanbul Bariatric Center (IBC) and one of the most competent bariatric surgeons in Turkey. Specialized in Ankara Training and Research Hospital and participated in more than 100 national and international congresses.",
    specialties: ["Gastric Sleeve", "Gastric Bypass", "Duodenal Switch"]
  },
  {
    name: "Neşe Targen",
    role: "Senior UK Registered Bariatric Dietitian",
    image: "/nese-targen.webp",
    desc: "Senior clinical dietitian specializing in complex obesity and bariatric surgery with extensive NHS and private sector experience. Provides pre and post-operative dietary support, fluent in Turkish and English. Member of HCPC, BDA, BOMSS, and IFSO.",
    specialties: ["Weight Management", "Bariatric Nutrition", "Complex Obesity"]
  },
  {
    name: "Dr. Erhan Eryılmaz",
    role: "Plastic Surgeon",
    image: "https://caf0fec0.delivery.rocketcdn.me/wp-content/uploads/2024/01/Untitled-design-1.jpeg",
    desc: "Specialized in Plastic and Reconstructive Surgery since 2000. Received Plastic and Reconstructive Surgery training after weight loss (bariatric surgery) in Pittsburg in 2006.",
    specialties: ["Reconstructive Surgery", "Body Contouring", "Facial Surgery"]
  },
  {
    name: "Dr. Esra Bilgen",
    role: "Plastic Surgeon",
    image: "/esra-bilgen.webp",
    desc: "Completed her medical training at 19 Mayıs University and specialty training at Ankara Dışkapı Yıldırım Beyazıt Training and Research Hospital in 2010. Participated in numerous national and international scientific conferences with internationally recognized publications.",
    specialties: ["Rhinoplasty", "Body Contouring", "Breast Surgery"]
  },
  {
    name: "Dr. Levent Bakisgan",
    role: "General Surgeon-Bariatric Endoscopist",
    image: "https://caf0fec0.delivery.rocketcdn.me/wp-content/uploads/2024/01/Untitled-design-3.jpeg",
    desc: "Well-renowned Surgeon with strong background and expertise in bariatric surgeries. Expert in gastric bypass, sleeve gastrectomy and adjustable gastric banding.",
    specialties: ["General Surgery", "Bariatric Endoscopy"]
  }
];

export default function About() {
  const { t } = useTranslation('pages');
  
  const stats = [
    { value: "8,000+", label: t('about.stats.surgeries') },
    { value: "22+", label: t('about.stats.experience') },
    { value: "20+", label: t('about.stats.countries') },
    { value: "10+", label: t('about.stats.team') },
  ];

  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="About Us - Expert Bariatric Surgeons"
        description="Meet our team of expert bariatric surgeons at Istanbul Bariatric Center. Over 8,000 successful surgeries and 22+ years of experience in weight loss surgery."
        keywords="bariatric surgeon turkey, dr murat ustun, weight loss doctors istanbul, obesity specialists"
        url="/about"
      />
      <JsonLd data={structuredData.medicalBusiness} />
      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:bg-primary focus:text-white focus:px-4 focus:py-2 focus:rounded">
        Skip to main content
      </a>
      <Navbar />
      
      <main id="main-content" role="main">
      <section className="bg-slate-900 text-white pt-40 pb-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">{t('about.title')}</h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            {t('about.subtitle')}
          </p>
        </div>
      </section>

      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-slate-600 font-medium uppercase tracking-wider text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center space-y-6">
            <h2 className="text-3xl font-bold text-slate-900">{t('about.mission')}</h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              {t('about.missionText')}
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-slate-900 mb-16">{t('about.meetTeam')}</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {doctors.map((doctor, i) => (
              <Card key={i} className="overflow-hidden hover:shadow-lg transition-shadow border-slate-200">
                <div className="aspect-[4/5] overflow-hidden bg-slate-200">
                  <img 
                    src={doctor.image} 
                    alt={doctor.name} 
                    className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
                    loading="lazy"
                    width="320"
                    height="400"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-slate-900 mb-1">{doctor.name}</h3>
                  <p className="text-primary font-medium text-sm mb-4 uppercase">{doctor.role}</p>
                  <p className="text-slate-600 text-sm mb-6 leading-relaxed">
                    {doctor.desc}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {doctor.specialties.map((tag, j) => (
                      <Badge key={j} variant="secondary" className="bg-blue-50 text-blue-700 hover:bg-blue-100">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      </main>

      <Footer />
    </div>
  );
}

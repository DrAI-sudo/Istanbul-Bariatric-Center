import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const doctors = [
  {
    name: "Dr. Murat Üstün",
    role: "Founder, Lead Bariatric Surgeon",
    image: "https://caf0fec0.delivery.rocketcdn.me/wp-content/uploads/2024/01/IMG_6366.jpeg",
    desc: "Founder of Istanbul Bariatric Center (IBC) and one of the most competent bariatric surgeons in Turkey. Specialized in Ankara Training and Research Hospital and participated in more than 100 national and international congresses.",
    specialties: ["Gastric Sleeve", "Gastric Bypass", "Duodenal Switch"]
  },
  {
    name: "Dr. Erhan Eryılmaz",
    role: "Plastic Surgeon",
    image: "https://caf0fec0.delivery.rocketcdn.me/wp-content/uploads/2024/01/Untitled-design-1.jpeg",
    desc: "Specialized in Plastic and Reconstructive Surgery since 2000. Received Plastic and Reconstructive Surgery training after weight loss (bariatric surgery) in Pittsburg in 2006.",
    specialties: ["Reconstructive Surgery", "Body Contouring", "Facial Surgery"]
  },
  {
    name: "Dr. Hasan Alim",
    role: "Plastic Surgeon",
    image: "https://caf0fec0.delivery.rocketcdn.me/wp-content/uploads/2024/01/Untitled-design-2.jpeg",
    desc: "Board-certified plastic reconstructive surgeon specializing in cosmetic surgery, facial rejuvenation, body contouring, and breast surgery.",
    specialties: ["Cosmetic Surgery", "Body Contouring", "Breast Surgery"]
  },
  {
    name: "Prof. Dr. Erdem Akbal",
    role: "Interventional Gastroenterologist",
    image: "https://caf0fec0.delivery.rocketcdn.me/wp-content/uploads/2024/01/Untitled-design-3.jpeg",
    desc: "Skilled gastroenterologist trained at John Hopkins Hospital and Amsterdam Academic Medical Center. Expert in advanced endoscopic procedures.",
    specialties: ["Endoscopic Sleeve", "Gastric Balloon", "ERCP"]
  },
  {
    name: "Dr. Levent Bakisgan",
    role: "General Surgeon-Bariatric Endoscopist",
    image: "https://caf0fec0.delivery.rocketcdn.me/wp-content/uploads/2024/01/B38DCB6B-384F-4670-8E67-A38E040904AE.jpeg",
    desc: "Well-renowned Surgeon with strong background and expertise in bariatric surgeries. Expert in gastric bypass, sleeve gastrectomy and adjustable gastric banding.",
    specialties: ["General Surgery", "Bariatric Endoscopy"]
  }
];

const stats = [
  { value: "8,000+", label: "Total Surgeries" },
  { value: "22+", label: "Years Experience" },
  { value: "20+", label: "Countries Served" },
  { value: "10+", label: "Team Members" },
];

export default function About() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Header */}
      <section className="bg-slate-900 text-white pt-40 pb-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About Us</h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Istanbul Bariatric Center is one of the most experienced obesity surgery clinics in Turkey, dedicated to changing lives through weight loss surgery.
          </p>
        </div>
      </section>

      {/* Stats Section */}
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

      {/* Mission Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center space-y-6">
            <h2 className="text-3xl font-bold text-slate-900">Our Mission</h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              Obesity is one of the most renowned reasons that lead to numerous sicknesses and medical conditions. 
              As Istanbul Bariatric Center team, we are here to remove the obesity related problems in the patients' lives.
              We believe that health and safety of the patient is the main goal, and this is a part of the excellence equation.
            </p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-slate-900 mb-16">Meet Our Team</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {doctors.map((doctor, i) => (
              <Card key={i} className="overflow-hidden hover:shadow-lg transition-shadow border-slate-200">
                <div className="aspect-[4/5] overflow-hidden bg-slate-200">
                  <img 
                    src={doctor.image} 
                    alt={doctor.name} 
                    className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
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

      <Footer />
    </div>
  );
}

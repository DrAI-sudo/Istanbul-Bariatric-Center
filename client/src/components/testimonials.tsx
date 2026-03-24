import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Quote, Star, BadgeCheck } from "lucide-react";
import { useTranslation } from "react-i18next";

const testimonials = [
  {
    name: "Sarah M.",
    text: "I had my gastric sleeve surgery at Memorial Hospital, Turkey, by Dr. Murat and his amazing team. My entire experience was nothing short of fabulous. The care, support, and professionalism made me feel completely at ease. Within just four months, I have already lost 35 kg. I completely trust my life with Dr. Murat and his team.",
    flag: "🇺🇸",
    rating: 5,
    date: "October 2025",
    verified: true
  },
  {
    name: "Michael K.",
    text: "Very good service with strong support from Dr. Murat, as well as from his team. Surgery went really fast and seamless. The crew took care of me right from the airport with a private shuttle and hotel stay. Nurses and hospital crew were very, very nice and flexible. Would definitely recommend it to anyone!",
    flag: "🇺🇸",
    rating: 5,
    date: "October 2025",
    verified: true
  },
  {
    name: "Jennifer L.",
    text: "The surgeon was kind and knowledgeable, and I felt that I was adequately prepared for my treatment. He was good at explaining everything and came in to check on me a few times after the surgery. Having a translator was also very helpful throughout. The nurses were great and very attentive to my needs.",
    flag: "🇺🇸",
    rating: 5,
    date: "November 2025",
    verified: true
  },
  {
    name: "David R.",
    text: "From the moment I arrived, I felt completely at ease—even though I travelled alone. The surgery itself was incredibly smooth, far beyond what I had imagined. Dr. Murat's team stayed connected with me from surgery until today, guiding me step by step through nutrition, aftercare, and recovery.",
    flag: "🇬🇧",
    rating: 5,
    date: "September 2025",
    verified: true
  },
  {
    name: "Emma W.",
    text: "I recently had gastric sleeve surgery and the experience was amazing. The hospital is super clean and you have a whole room to yourself. Dr. Murat and his team provided excellent care throughout my stay. I'm already seeing great results!",
    flag: "🇬🇧",
    rating: 5,
    date: "August 2025",
    verified: true
  },
  {
    name: "Robert H.",
    text: "Outstanding care from start to finish! All tests carried out thoroughly, operation went very well, scar is hardly visible and healing nicely. The aftercare support has been incredible. Would recommend this clinic to anybody thinking of getting treatment.",
    flag: "🇮🇪",
    rating: 5,
    date: "July 2025",
    verified: true
  },
  {
    name: "Lisa T.",
    text: "One week after my surgery, I am feeling well. The doctor and the whole team were amazing. I only have good words to say. The dietitian was very kind and provided a lot of helpful information. These are the first days of the rest of my life!",
    flag: "🇩🇪",
    rating: 5,
    date: "June 2025",
    verified: true
  },
  {
    name: "James P.",
    text: "I was very impressed by the professionalism of Dr. Murat and his team. The hospital facilities were excellent, and the care I received was top-notch. I've lost 40kg in 5 months and feel like a new person. Highly recommend!",
    flag: "🇦🇺",
    rating: 5,
    date: "May 2025",
    verified: true
  },
  {
    name: "Maria G.",
    text: "The entire process was seamless from booking to recovery. Dr. Murat explained everything clearly and made me feel confident about my decision. The hospital staff were attentive and caring. Best decision I ever made for my health!",
    flag: "🇪🇸",
    rating: 5,
    date: "April 2025",
    verified: true
  },
  {
    name: "Thomas B.",
    text: "Excellent experience from beginning to end. The coordination was perfect, airport pickup was smooth, and the hospital was world-class. Dr. Murat is a true professional. I've already recommended Istanbul Bariatric Center to friends.",
    flag: "🇳🇱",
    rating: 5,
    date: "March 2025",
    verified: true
  },
  {
    name: "Sophie M.",
    text: "I traveled from France for my gastric sleeve surgery and couldn't be happier. The team spoke English fluently and made me feel at home. The surgery was quick and recovery was faster than expected. Down 30kg and counting!",
    flag: "🇫🇷",
    rating: 5,
    date: "February 2025",
    verified: true
  },
  {
    name: "Ahmed K.",
    text: "Dr. Murat is an exceptional surgeon. His expertise and bedside manner put me at ease immediately. The hospital was immaculate and the nursing staff were wonderful. I'm so grateful I chose Istanbul Bariatric Center.",
    flag: "🇦🇪",
    rating: 5,
    date: "January 2025",
    verified: true
  },
  {
    name: "Caroline S.",
    text: "What an incredible journey! From my first consultation to post-op check-ups, the team has been supportive every step of the way. The VIP package was worth every penny. Life-changing experience!",
    flag: "🇨🇦",
    rating: 5,
    date: "December 2024",
    verified: true
  },
  {
    name: "Peter V.",
    text: "Had my surgery 6 months ago and have lost 45kg. The continuous support from Dr. Murat's team has been amazing. They check in regularly and answer all my questions promptly. Couldn't ask for better care!",
    flag: "🇧🇪",
    rating: 5,
    date: "November 2024",
    verified: true
  },
  {
    name: "Anna R.",
    text: "I was nervous about traveling abroad for surgery, but Istanbul Bariatric Center exceeded all my expectations. The hospital is modern, staff is professional, and Dr. Murat is simply the best. No complications at all!",
    flag: "🇸🇪",
    rating: 5,
    date: "October 2024",
    verified: true
  },
  {
    name: "John D.",
    text: "The value for money is incredible. Top-quality care at a fraction of what I'd pay at home. Dr. Murat took his time to explain the procedure and answered all my questions. Recovery was smooth and I'm thrilled with the results!",
    flag: "🇺🇸",
    rating: 5,
    date: "September 2024",
    verified: true
  },
  {
    name: "Michelle F.",
    text: "From airport pickup to hotel accommodation, everything was perfectly organized. The surgery went smoothly and Dr. Murat visited me multiple times during my recovery. The follow-up care has been excellent. Highly recommend!",
    flag: "🇬🇧",
    rating: 5,
    date: "August 2024",
    verified: true
  },
  {
    name: "Hans M.",
    text: "Professional team, modern facilities, and excellent results. I felt safe and well-cared for throughout my entire stay. Dr. Murat is a skilled surgeon with a caring approach. Thank you for changing my life!",
    flag: "🇩🇪",
    rating: 5,
    date: "July 2024",
    verified: true
  },
  {
    name: "Elena P.",
    text: "The best medical decision I've ever made. The team at Istanbul Bariatric Center treated me like family. Dr. Murat's expertise is evident in everything he does. I've lost 38kg and feel amazing!",
    flag: "🇮🇹",
    rating: 5,
    date: "June 2024",
    verified: true
  },
  {
    name: "Chris O.",
    text: "Absolutely fantastic experience! The hospital is spotless, the staff are friendly and professional, and Dr. Murat is an exceptional surgeon. The whole process was stress-free. I can't thank them enough!",
    flag: "🇮🇪",
    rating: 5,
    date: "May 2024",
    verified: true
  }
];

export function Testimonials() {
  const { t } = useTranslation('home');
  
  return (
    <section className="py-24 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-heading font-bold text-slate-900 mb-4">
            {t('testimonials.title')}
          </h2>
          <p className="text-lg text-slate-600">
            {t('testimonials.subtitle')}
          </p>
        </div>

        <Carousel className="w-full max-w-5xl mx-auto">
          <CarouselContent>
            {testimonials.map((item, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/2 p-4">
                <div className="h-full p-8 bg-white rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-all flex flex-col">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex gap-0.5">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <span className="text-xs text-slate-600">{item.date}</span>
                  </div>
                  <Quote className="w-8 h-8 text-primary/20 mb-4" />
                  <p className="text-slate-600 mb-6 leading-relaxed italic flex-grow">
                    &ldquo;{item.text.includes('Dr. Murat') || item.text.includes('Dr Murat') ? (
                      <>{item.text.split(/(Dr\.?\s*Murat(?:'s)?)/g).map((part: string, pi: number) =>
                        /Dr\.?\s*Murat/.test(part)
                          ? <a key={pi} href="https://drmuratustun.com" target="_blank" rel="noopener noreferrer" className="text-primary not-italic hover:underline">{part}</a>
                          : part
                      )}</>
                    ) : item.text}&rdquo;
                  </p>
                  <div className="flex items-center gap-4 mt-auto">
                    <Avatar className="h-10 w-10 border border-slate-200">
                      <AvatarFallback className="bg-primary/10 text-primary font-bold">
                        {item.name[0]}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-grow">
                      <p className="font-bold text-slate-900 flex items-center gap-2">
                        {item.name} <span className="text-lg">{item.flag}</span>
                      </p>
                      <p className="text-xs text-slate-600 flex items-center gap-1">
                        <BadgeCheck className="w-3 h-3 text-green-500" />
                        Verified Patient
                      </p>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex justify-center gap-4 mt-8">
             <CarouselPrevious className="static translate-y-0" />
             <CarouselNext className="static translate-y-0" />
          </div>
        </Carousel>
      </div>
    </section>
  );
}

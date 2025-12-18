import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Quote } from "lucide-react";
import { useTranslation } from "react-i18next";

const testimonials = [
  {
    name: "Iren Oyster",
    text: "I've had Sleeve gastrectomy operations in November 2021. My surgeon name was Dr Murat Üstün and his team Istanbul Bariatrics was absolutely amazing... I was out of hospital within 2.5 days.",
    flag: "🇬🇧"
  },
  {
    name: "Mihaela Golban",
    text: "One week after my surgery, I am feeling well. The doctor and the whole team were amazing. I only have good words to say. This are the first days of the rest of my life.",
    flag: "🇬🇧"
  },
  {
    name: "Ornela",
    text: "I recently had mini gastric bypass surgery... It is definitely good value for money! It is a super clean environment and you have a whole room to yourself which makes you feel like you not at the hospital.",
    flag: "🇬🇧"
  },
  {
    name: "Danielle Brophy",
    text: "Outstanding care! All tests carried out operation went very well scare hardly visible and healing nicely. Would recommend this clinic to anybody thinking of getting treatment with them.",
    flag: "🇬🇧"
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
                <div className="h-full p-8 bg-white rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-all">
                  <Quote className="w-10 h-10 text-primary/20 mb-6" />
                  <p className="text-slate-600 mb-6 leading-relaxed italic">
                    "{item.text}"
                  </p>
                  <div className="flex items-center gap-4 mt-auto">
                    <Avatar className="h-10 w-10 border border-slate-200">
                      <AvatarFallback className="bg-primary/10 text-primary font-bold">
                        {item.name[0]}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-bold text-slate-900 flex items-center gap-2">
                        {item.name} <span className="text-lg">{item.flag}</span>
                      </p>
                      <p className="text-xs text-slate-400">Verified Patient</p>
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

import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, Mail, MapPin, Building2, Video } from "lucide-react";
import { SummarizeWithAI } from "@/components/summarize-with-ai";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { insertContactSubmissionSchema, type InsertContactSubmission } from "@shared/schema";
import { toast } from "sonner";
import { useTranslation } from "react-i18next";
import hospitalImage from "@assets/IMG_1801_1766124176672.jpeg";
import { SEO, JsonLd, structuredData } from "@/components/seo";

export default function Contact() {
  const { t } = useTranslation('pages');
  
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<InsertContactSubmission>({
    resolver: zodResolver(insertContactSubmissionSchema),
  });

  const mutation = useMutation({
    mutationFn: async (data: InsertContactSubmission) => {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      
      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.error || "Failed to submit form");
      }
      
      return response.json();
    },
    onSuccess: () => {
      toast.success(t('contact.successMessage'));
      reset();
    },
    onError: (error: Error) => {
      toast.error(error.message || t('contact.errorMessage'));
    },
  });

  const onSubmit = (data: InsertContactSubmission) => {
    mutation.mutate(data);
  };

  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="Contact Us - Free Consultation"
        description="Contact Istanbul Bariatric Center for a free consultation. Reach us via WhatsApp, email, or visit our hospital in Istanbul, Turkey. 24/7 patient support."
        keywords="contact bariatric surgeon, free consultation weight loss surgery, istanbul bariatric center contact"
        url="/contact"
      />
      <JsonLd data={structuredData.medicalBusiness} />
      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:bg-primary focus:text-white focus:px-4 focus:py-2 focus:rounded">
        Skip to main content
      </a>
      <Navbar />
      
      <main id="main-content" role="main">
      <section className="relative text-white pt-40 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <img src="/contact-hero.webp" alt="Contact our patient coordinator" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-slate-900/65" />
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">{t('contact.title')}</h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            {t('contact.subtitle')}
          </p>
          <SummarizeWithAI variant="dark" />
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-12">
            
            <div className="lg:col-span-1 space-y-8">
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-slate-900">{t('contact.getInTouch')}</h3>
                <p className="text-slate-600">
                  {t('contact.getInTouchDesc')}
                </p>
              </div>

              <div className="space-y-6">
                <Card className="border-slate-100 shadow-sm">
                  <CardContent className="p-6 flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center shrink-0">
                      <Phone className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-bold text-slate-900">{t('contact.phoneWhatsapp')}</p>
                      <a href="tel:+905324131143" className="text-slate-600 hover:text-primary transition-colors">+90 532 413 1143</a>
                      <p className="text-slate-400 text-sm mt-1">{t('contact.available247')}</p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-slate-100 shadow-sm">
                  <CardContent className="p-6 flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center shrink-0">
                      <Mail className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-bold text-slate-900">{t('contact.email')}</p>
                      <a href="mailto:drmuratustun@gmail.com" className="text-slate-600 hover:text-primary transition-colors">drmuratustun@gmail.com</a>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-slate-100 shadow-sm">
                  <CardContent className="p-6 flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center shrink-0">
                      <Building2 className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-bold text-slate-900">Liv Vadi Hospital</p>
                      <p className="text-slate-600">
                        Ayazağa Mahallesi, Kemerburgaz Caddesi<br />
                        Vadistanbul Park Etabı, 7F Blok<br />
                        34396 Sarıyer/İstanbul, Türkiye
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            <div className="lg:col-span-2">
              <Card className="border-slate-200 shadow-lg">
                <CardContent className="p-8 md:p-10">
                  <h3 className="text-2xl font-bold text-slate-900 mb-6">{t('contact.sendMessage')}</h3>
                  
                  <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="name">{t('contact.fullName')}</Label>
                        <Input 
                          id="name" 
                          placeholder="John Doe"
                          {...register("name")}
                          className={errors.name ? "border-red-500" : ""}
                        />
                        {errors.name && (
                          <p className="text-sm text-red-500">{errors.name.message}</p>
                        )}
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">{t('contact.emailAddress')}</Label>
                        <Input 
                          id="email" 
                          type="email" 
                          placeholder="john@example.com"
                          {...register("email")}
                          className={errors.email ? "border-red-500" : ""}
                        />
                        {errors.email && (
                          <p className="text-sm text-red-500">{errors.email.message}</p>
                        )}
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone">{t('contact.phoneNumber')}</Label>
                      <Input 
                        id="phone" 
                        placeholder="+1 234 567 890"
                        {...register("phone")}
                        className={errors.phone ? "border-red-500" : ""}
                      />
                      {errors.phone && (
                        <p className="text-sm text-red-500">{errors.phone.message}</p>
                      )}
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="subject">{t('contact.subject')}</Label>
                      <Input 
                        id="subject" 
                        placeholder="Inquiry about Gastric Sleeve"
                        {...register("subject")}
                        className={errors.subject ? "border-red-500" : ""}
                      />
                      {errors.subject && (
                        <p className="text-sm text-red-500">{errors.subject.message}</p>
                      )}
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">{t('contact.message')}</Label>
                      <Textarea 
                        id="message" 
                        placeholder={t('contact.messagePlaceholder')}
                        className={`min-h-[150px] ${errors.message ? "border-red-500" : ""}`}
                        {...register("message")}
                      />
                      {errors.message && (
                        <p className="text-sm text-red-500">{errors.message.message}</p>
                      )}
                    </div>

                    <Button 
                      type="submit" 
                      className="w-full bg-primary h-12 text-lg"
                      disabled={mutation.isPending}
                    >
                      {mutation.isPending ? t('contact.sending') : t('contact.send')}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Our Hospital</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Istanbul Bariatric Center, led by <a href="https://drmuratustun.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Dr Murat Ustun</a>, is located at Liv Vadi Hospital, one of Turkey's most modern healthcare facilities.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8">
            <div className="rounded-2xl overflow-hidden shadow-xl relative">
              <img 
                src={hospitalImage} 
                alt="Liv Vadi Hospital - Istanbul Bariatric Center" 
                className="w-full h-auto object-cover block"
                width="600"
                height="400"
                loading="lazy"
              />
              <a
                href="https://vr.livhospital.com/videoroom.html#!/Genel-Goruntuler/0a3/?dil=Tr&ath=-57&atv=-6&fov=80"
                target="_blank"
                rel="noopener noreferrer"
                className="absolute bottom-6 right-6 z-10 bg-primary hover:bg-primary/90 text-white font-bold px-6 py-3 rounded-full shadow-lg flex items-center gap-2 transition-all duration-300 hover:scale-105"
                data-testid="button-virtual-tour"
              >
                <Video className="w-5 h-5" />
                Virtual Tour
              </a>
            </div>
            
            <div className="rounded-2xl overflow-hidden shadow-xl h-[400px] lg:h-auto">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3007.0654799368597!2d29.01234037605461!3d41.10892231317744!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cab5d7c9e97e01%3A0x8d8e0e8e8e8e8e8e!2sLiv%20Hospital%20Vadistanbul!5e0!3m2!1sen!2str!4v1702000000000!5m2!1sen!2str"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: "400px" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Liv Vadi Hospital Location"
              />
            </div>
          </div>
        </div>
      </section>
      </main>

      <Footer />
    </div>
  );
}

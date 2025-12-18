import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, Mail, MapPin } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { insertContactSubmissionSchema, type InsertContactSubmission } from "@shared/schema";
import { toast } from "sonner";
import { useTranslation } from "react-i18next";

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
      <Navbar />
      
      <section className="bg-slate-900 text-white pt-40 pb-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">{t('contact.title')}</h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            {t('contact.subtitle')}
          </p>
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
                      <p className="text-slate-600">+90 532 413 1143</p>
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
                      <p className="text-slate-600">info@istanbulbariatriccenter.com</p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-slate-100 shadow-sm">
                  <CardContent className="p-6 flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center shrink-0">
                      <MapPin className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-bold text-slate-900">{t('contact.londonOffice')}</p>
                      <p className="text-slate-600">
                        284 Chase Road, A Block 2nd Floor Suite 104<br />
                        London N14 6HF
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

      <Footer />
    </div>
  );
}

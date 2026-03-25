import { useState, useEffect } from "react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { SEO, JsonLd, structuredData } from "@/components/seo";
import {
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  Plane,
  Hotel,
  Stethoscope,
  ShieldCheck,
  Clock,
  DollarSign,
  HeartPulse,
  ArrowLeft,
  Star,
  MapPin,
  Phone,
  MessageCircle,
  Award,
  Calculator,
  Users,
  TrendingDown,
  Utensils,
  Activity,
  Crown,
  Gem,
} from "lucide-react";
import { Link } from "wouter";

const arFaqs = [
  {
    question: "هل عملية ESG مؤلمة؟",
    answer: "تُجرى عملية طي المعدة بالمنظار تحت التخدير العام — لن تشعر بأي شيء أثناء الإجراء. بعد الاستيقاظ، قد تشعر بألم خفيف أو غثيان لمدة يوم إلى ثلاثة أيام، ويمكن السيطرة عليه بسهولة بالأدوية. مقارنةً بالجراحة التقليدية، فإن التعافي أسرع وأكثر راحة بكثير.",
  },
  {
    question: "كم مدة الإقامة في إسطنبول؟",
    answer: "يحتاج معظم مرضى الخليج إلى ٣ إلى ٤ أيام في إسطنبول. تصلون في اليوم الأول، تُجرى العملية في اليوم الثاني، تستريحون في الفندق في اليوم الثالث، وتعودون إلى بلدكم في اليوم الرابع. رحلات مباشرة من الرياض وجدة ودبي وأبوظبي والدوحة والكويت (٣ إلى ٤,٥ ساعات).",
  },
  {
    question: "هل النتائج دائمة؟",
    answer: "نعم، مع الالتزام بنمط حياة صحي. عملية ESG توفر تصغيرًا فعليًا للمعدة — معدتكم تصبح أصغر بشكل دائم. لكن الحفاظ على النتائج يتطلب اتباع نظام غذائي صحي وممارسة الرياضة بانتظام. برنامجنا يتضمن متابعة غذائية لمدة ١٢ شهرًا مع أخصائية تغذية مؤهلة.",
  },
  {
    question: "ما الفرق بين ESG وأوزمبيك/ويغوفي؟",
    answer: "أدوية GLP-1 مثل أوزمبيك وويغوفي قد تكون فعالة مؤقتًا، لكن كثيرًا من المرضى يستعيدون الوزن بعد التوقف عنها. تكلفتها الشهرية المرتفعة تتراكم بسرعة. عملية ESG تقدم حلاً واحدًا ودائمًا — تصغير فعلي للمعدة بدون تكاليف متكررة. كثير من المرضى يعتبرون ESG الخطوة المنطقية التالية عندما لا تحقق الأدوية النتائج المرجوة.",
  },
  {
    question: "ما هو مؤشر كتلة الجسم (BMI) المطلوب؟",
    answer: "يُنصح بعملية ESG عادةً لمن لديهم مؤشر كتلة جسم بين ٣٠ و٤٠. العملية مناسبة بشكل خاص للأشخاص الذين لم يحققوا نتائج دائمة مع الحميات والرياضة، أو الذين لا يريدون جراحة تقليدية، أو الذين يفضلون إجراءً أقل تدخلاً مع فترة تعافٍ سريعة.",
  },
  {
    question: "هل العلاج في الخارج آمن؟",
    answer: "مركز إسطنبول لجراحة السمنة يعمل في مستشفى ليف الحاصل على اعتماد JCI (اللجنة الدولية المشتركة) — وهو المعيار الذهبي العالمي لجودة الرعاية الصحية. الدكتور مراد أوستون أجرى آلاف عمليات ESG بنتائج ممتازة. نقدم نفس معايير الجودة — أو أعلى — من أفضل المراكز الطبية الخاصة في الخليج.",
  },
  {
    question: "ماذا تتضمن الباقة الشاملة؟",
    answer: "باقتنا الشاملة بقيمة ٨,٥٠٠ دولار أمريكي تشمل: العملية، الإقامة في مستشفى معتمد JCI، الفحوصات والتحاليل، استقبال VIP من المطار، إقامة فندقية فاخرة، متابعة غذائية لمدة ١٢ شهرًا، أدوية ما بعد العملية، ومتابعة مستمرة. بدون أي تكاليف مخفية.",
  },
  {
    question: "هل يتوفر مترجمون عرب؟",
    answer: "نعم. فريقنا يضم منسقين ومترجمين يتحدثون العربية بطلاقة. نضمن لكم تواصلًا واضحًا في كل مرحلة — من الاستشارة الأولى حتى المتابعة بعد العودة إلى بلدكم. التواصل متاح عبر واتساب على مدار الساعة.",
  },
];

const journeySteps = [
  {
    step: 1,
    title: "استشارة مجانية عبر الإنترنت",
    desc: "تواصلوا معنا عبر واتساب أو موقعنا الإلكتروني. يقوم فريقنا بتقييم مؤشر كتلة الجسم والتاريخ الطبي والأهداف لتأكيد ملاءمتكم لعملية ESG.",
    icon: MessageCircle,
  },
  {
    step: 2,
    title: "السفر إلى تركيا",
    desc: "اختاروا التاريخ المناسب — نحن نتولى الباقي. رحلات مباشرة من الرياض، جدة، دبي، أبوظبي، الدوحة، والكويت. مدة الرحلة: ٣ إلى ٤,٥ ساعات.",
    icon: Plane,
  },
  {
    step: 3,
    title: "استقبال VIP وإقامة فاخرة",
    desc: "سائق خاص يستقبلكم من مطار إسطنبول ويصحبكم إلى فندقكم الفاخر. استمتعوا بالراحة واستعدوا لليوم التالي.",
    icon: Hotel,
  },
  {
    step: 4,
    title: "الفحوصات الطبية",
    desc: "تحاليل دم شاملة وفحوصات صحية في المستشفى. لقاء شخصي مع الدكتور مراد أوستون والفريق الطبي للاستشارة النهائية.",
    icon: Stethoscope,
  },
  {
    step: 5,
    title: "إجراء عملية ESG",
    desc: "تُجرى العملية تحت التخدير العام في مستشفى ليف المعتمد دوليًا JCI. المدة: ٦٠ إلى ٩٠ دقيقة. بدون جراحة، بدون شقوق، بدون ندوب.",
    icon: HeartPulse,
  },
  {
    step: 6,
    title: "التعافي والعودة",
    desc: "استريحوا في الفندق مع متابعة طبية مستمرة. معظم المرضى يعودون إلى بلدهم خلال ٢ إلى ٣ أيام بعد العملية — جاهزين لبداية جديدة.",
    icon: Plane,
  },
];

const comparisonMeds = [
  { factor: "الفعالية على المدى الطويل", meds: "محدودة — عودة الوزن شائعة بعد التوقف", esg: "أكثر استقرارًا — تصغير فعلي ودائم للمعدة" },
  { factor: "الأعراض الجانبية", meds: "شائعة (غثيان، إسهال، خطر التهاب البنكرياس)", esg: "قليلة (انزعاج خفيف لمدة ١ إلى ٣ أيام)" },
  { factor: "التكلفة", meds: "٢٠٠ إلى ٥٠٠ دولار/شهريًا بشكل مستمر", esg: "دفعة واحدة تبدأ من ٧,٥٠٠ دولار" },
  { factor: "عودة الوزن بعد التوقف", meds: "شائعة جدًا", esg: "أقل بكثير مع نمط حياة صحي" },
  { factor: "هل يتطلب إجراء طبي؟", meds: "لا — حقن أسبوعية/يومية", esg: "نعم — إجراء واحد بالمنظار (٦٠-٩٠ دقيقة)" },
];

const comparisonSurgery = [
  { feature: "نوع الإجراء", esg: "بالمنظار (عبر الفم)", sleeve: "جراحة بالمنظار (٤-٥ شقوق)" },
  { feature: "التخدير", esg: "تخدير عام", sleeve: "تخدير عام" },
  { feature: "المدة", esg: "٦٠ إلى ٩٠ دقيقة", sleeve: "حوالي ٦٠ دقيقة" },
  { feature: "الإقامة في المستشفى", esg: "نفس اليوم أو ليلة واحدة", sleeve: "٢ إلى ٣ ليالٍ" },
  { feature: "فترة التعافي", esg: "١ إلى ٣ أيام", sleeve: "٢ إلى ٣ أسابيع" },
  { feature: "الندوب", esg: "لا يوجد", sleeve: "٤ إلى ٥ ندوب صغيرة" },
  { feature: "فقدان الوزن", esg: "١٥ إلى ٢٠٪ من وزن الجسم", sleeve: "٦٠ إلى ٧٠٪ من الوزن الزائد" },
  { feature: "قابلية الإرجاع", esg: "ممكنة", sleeve: "دائمة (إزالة أنسجة المعدة)" },
  { feature: "مستوى المخاطر", esg: "منخفض جدًا", sleeve: "منخفض" },
];

const arTestimonials = [
  {
    name: "محمد ع.",
    location: "الرياض، السعودية",
    text: "بعد سنوات من المحاولات الفاشلة مع الحميات وأوزمبيك، قررت تجربة ESG في إسطنبول. الخدمة كانت استثنائية — من الاستقبال VIP حتى المتابعة بعد العودة. خسرت ١٩ كيلو في ٥ أشهر وأشعر بتحسن كبير في صحتي.",
    weight: "١٩ كيلو",
    time: "٥ أشهر",
  },
  {
    name: "فاطمة س.",
    location: "دبي، الإمارات",
    text: "كنت متخوفة من إجراء العملية خارج الإمارات، لكن مستشفى ليف فاق كل توقعاتي. الدكتور مراد محترف ومتمكن، والفريق العربي جعل التجربة مريحة جدًا. الخصوصية الكاملة والرعاية الشخصية كانت على أعلى مستوى.",
    weight: "١٦ كيلو",
    time: "٤ أشهر",
  },
  {
    name: "عبدالله ك.",
    location: "الكويت",
    text: "التجربة كانت فاخرة بكل معنى الكلمة. الفندق ممتاز، النقل الخاص مريح، والمستشفى بمعايير عالمية. سعر الباقة الشاملة كان معقولاً جدًا مقارنة بما عُرض عليّ في الخليج. أنصح بها بقوة.",
    weight: "٢٢ كيلو",
    time: "٦ أشهر",
  },
];

function BMICalculator() {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [bmi, setBmi] = useState<number | null>(null);

  const calculateBMI = () => {
    const h = parseFloat(height) / 100;
    const w = parseFloat(weight);
    if (h > 0 && w > 0) {
      setBmi(Math.round((w / (h * h)) * 10) / 10);
    }
  };

  const getBMICategory = (bmi: number) => {
    if (bmi < 18.5) return { label: "نقص في الوزن", color: "text-blue-600", eligible: false };
    if (bmi < 25) return { label: "وزن صحي", color: "text-green-600", eligible: false };
    if (bmi < 30) return { label: "وزن زائد", color: "text-yellow-600", eligible: false };
    if (bmi < 35) return { label: "سمنة (الدرجة الأولى)", color: "text-orange-600", eligible: true };
    if (bmi < 40) return { label: "سمنة (الدرجة الثانية)", color: "text-red-500", eligible: true };
    return { label: "سمنة مفرطة (الدرجة الثالثة)", color: "text-red-700", eligible: false, surgical: true };
  };

  return (
    <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-200" data-testid="bmi-calculator-ar">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
          <Calculator className="w-6 h-6 text-primary" />
        </div>
        <div>
          <h3 className="text-xl font-bold text-slate-900">هل أنا مرشح لعملية ESG؟</h3>
          <p className="text-sm text-slate-500">احسب مؤشر كتلة الجسم وتحقق من ملاءمتك</p>
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-4 mb-4">
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">الطول (سم)</label>
          <input
            type="number"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            placeholder="مثال: ١٧٥"
            className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none text-right"
            data-testid="input-height-ar"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">الوزن (كجم)</label>
          <input
            type="number"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            placeholder="مثال: ١١٠"
            className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none text-right"
            data-testid="input-weight-ar"
          />
        </div>
      </div>

      <Button
        onClick={calculateBMI}
        className="w-full bg-primary hover:bg-primary/90 h-12"
        data-testid="button-calculate-bmi-ar"
      >
        احسب مؤشر كتلة الجسم
      </Button>

      {bmi !== null && (
        <div className="mt-6 p-4 rounded-xl bg-slate-50 border border-slate-200" data-testid="bmi-result-ar">
          <div className="text-center mb-3">
            <span className="text-4xl font-bold text-primary">{bmi}</span>
            <p className={`text-lg font-semibold ${getBMICategory(bmi).color}`}>{getBMICategory(bmi).label}</p>
          </div>
          {getBMICategory(bmi).eligible ? (
            <div className="bg-green-50 border border-green-200 rounded-lg p-3 text-center">
              <p className="text-green-800 font-medium">قد تكون مرشحًا مناسبًا لعملية ESG!</p>
              <p className="text-green-600 text-sm mt-1">تواصل معنا للحصول على استشارة مجانية.</p>
            </div>
          ) : getBMICategory(bmi).surgical ? (
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 text-center">
              <p className="text-blue-800 font-medium">قد تكون الجراحة خيارًا أنسب لك.</p>
              <p className="text-blue-600 text-sm mt-1">
                <Link href="/treatments" className="underline">اطلع على جميع الخيارات</Link> أو تواصل معنا.
              </p>
            </div>
          ) : (
            <div className="bg-slate-100 border border-slate-200 rounded-lg p-3 text-center">
              <p className="text-slate-700 font-medium">يُنصح بعملية ESG عادةً لمؤشر كتلة جسم بين ٣٠ و٤٠.</p>
              <p className="text-slate-500 text-sm mt-1">تواصل معنا لمناقشة خياراتك.</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

function FAQAccordion({ faqs }: { faqs: typeof arFaqs }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="space-y-3" data-testid="faq-accordion-ar">
      {faqs.map((faq, i) => (
        <div
          key={i}
          className={`rounded-xl border transition-all duration-200 ${openIndex === i ? "border-primary/30 bg-white shadow-md" : "border-slate-200 bg-white hover:border-slate-300"}`}
          data-testid={`faq-item-ar-${i}`}
        >
          <button
            className="w-full flex items-center justify-between p-5 text-right"
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
            data-testid={`button-faq-ar-${i}`}
          >
            <span className="font-semibold text-slate-900 pl-4">{faq.question}</span>
            {openIndex === i ? (
              <ChevronUp className="w-5 h-5 text-primary shrink-0" />
            ) : (
              <ChevronDown className="w-5 h-5 text-slate-400 shrink-0" />
            )}
          </button>
          {openIndex === i && (
            <div className="px-5 pb-5 text-slate-600 leading-relaxed animate-in fade-in duration-200">
              {faq.answer}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default function ESGArabic() {
  useEffect(() => {
    document.documentElement.setAttribute("dir", "rtl");
    document.documentElement.setAttribute("lang", "ar");
    return () => {
      document.documentElement.setAttribute("dir", "ltr");
      document.documentElement.setAttribute("lang", "en");
    };
  }, []);

  const saFlag = "🇸🇦";
  const aeFlag = "🇦🇪";
  const trFlag = "🇹🇷";

  const esgARSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalProcedure",
    "name": "عملية طي المعدة بالمنظار للمرضى من الخليج",
    "alternateName": ["ESG Gulf", "ESG Saudi Arabia", "ESG UAE", "طي المعدة بالمنظار", "عملية بدون جراحة"],
    "description": "عملية طي المعدة بالمنظار (ESG) للمرضى من السعودية والإمارات في مركز إسطنبول لجراحة السمنة. تصغير المعدة بدون جراحة. باقات شاملة تبدأ من ٧,٥٠٠ دولار. مستشفى معتمد JCI.",
    "procedureType": "Endoscopic",
    "bodyLocation": "Stomach",
    "preparation": "استشارة مجانية عبر الإنترنت، تحليل BMI، تقييم طبي شامل",
    "followup": "متابعة غذائية لمدة ١٢ شهرًا مع أخصائية تغذية مؤهلة",
    "howPerformed": "يتم إدخال جهاز الخياطة بالمنظار عبر الفم لتصغير المعدة بنسبة ٧٠ إلى ٨٠٪. بدون شقوق جراحية.",
    "status": "https://schema.org/ActiveActionStatus",
    "relevantSpecialty": { "@type": "MedicalSpecialty", "name": "Bariatric Surgery" },
  };

  return (
    <div className="min-h-screen bg-white" style={{ fontFamily: "'Inter', 'Plus Jakarta Sans', 'Segoe UI', Tahoma, sans-serif" }}>
      <SEO
        title="عملية طي المعدة بالمنظار في تركيا | ESG للمرضى من الخليج | من ٧,٥٠٠ دولار"
        description="عملية ESG بدون جراحة للمرضى من السعودية والإمارات والكويت وقطر. نتائج فعالة مع تجربة VIP فاخرة. باقات شاملة تبدأ من ٧,٥٠٠ دولار. مستشفى معتمد JCI. استشارة مجانية."
        keywords="طي المعدة بالمنظار, ESG تركيا, عملية بدون جراحة, بديل اوزمبيك, علاج السمنة تركيا, تصغير المعدة بدون جراحة, عملية ESG اسطنبول, جراحة السمنة للخليجيين"
        url="/esg/ar"
      />
      <JsonLd data={esgARSchema} />
      <JsonLd data={structuredData.createFAQ(arFaqs)} />
      <JsonLd data={structuredData.createBreadcrumb([
        { name: "Home", url: "/" },
        { name: "Treatments", url: "/treatments" },
        { name: "ESG", url: "/esg" },
        { name: "ESG للمرضى من الخليج", url: "/esg/ar" },
      ])} />
      <Navbar />

      {/* Hero */}
      <section className="relative bg-slate-900 text-white pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-bl from-amber-900/40 via-slate-900 to-slate-900 opacity-95" />
        <div
          className="absolute inset-0 opacity-15"
          style={{
            backgroundImage: "url('/esg-ar-hero.webp')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center gap-3 mb-6">
              <span className="text-4xl">{saFlag}</span>
              <span className="text-4xl">{aeFlag}</span>
              <Badge variant="outline" className="border-amber-400/50 text-amber-200 text-sm px-4 py-1">
                <Crown className="w-4 h-4 ml-1" />
                خدمة VIP حصرية لمرضى الخليج
              </Badge>
              <span className="text-4xl">{trFlag}</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight" data-testid="heading-esg-ar-hero">
              عملية طي المعدة بالمنظار (ESG) بدون جراحة — حل متطور لإنقاص الوزن للمرضى من الخليج في تركيا
            </h1>
            <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto mb-8 leading-relaxed">
              إذا كنت تبحث عن طريقة فعالة وآمنة لإنقاص الوزن بدون جراحة، فقد تكون عملية طي المعدة بالمنظار (ESG) هي الخيار الأمثل لك. نقدم في مركز إسطنبول لجراحة السمنة تجربة علاجية فاخرة تجمع بين الخبرة الطبية العالية والخدمة المميزة.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-amber-500 hover:bg-amber-600 text-slate-900 font-bold text-lg h-14 px-8"
                onClick={() => window.open("https://wa.me/905324131143?text=%D9%85%D8%B1%D8%AD%D8%A8%D8%A7%D9%8B%D8%8C%20%D8%A3%D9%86%D8%A7%20%D9%85%D9%87%D8%AA%D9%85%20%D8%A8%D8%B9%D9%85%D9%84%D9%8A%D8%A9%20ESG", "_blank")}
                data-testid="button-hero-whatsapp-ar"
              >
                <Phone className="w-5 h-5 ml-2" />
                استشارة مجانية عبر واتساب
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white/30 text-white hover:bg-white/10 font-bold text-lg h-14 px-8"
                onClick={() => document.getElementById("bmi-section-ar")?.scrollIntoView({ behavior: "smooth" })}
                data-testid="button-hero-bmi-ar"
              >
                <Calculator className="w-5 h-5 ml-2" />
                هل أنا مرشح؟
              </Button>
            </div>
            <div className="flex flex-wrap gap-6 justify-center mt-10 text-sm text-slate-400">
              <span className="flex items-center gap-2"><ShieldCheck className="w-4 h-4" /> مستشفى معتمد JCI</span>
              <span className="flex items-center gap-2"><DollarSign className="w-4 h-4" /> من ٧,٥٠٠ دولار</span>
              <span className="flex items-center gap-2"><Clock className="w-4 h-4" /> ٣ إلى ٤ أيام</span>
              <span className="flex items-center gap-2"><Stethoscope className="w-4 h-4" /> +٨,٠٠٠ عملية ناجحة</span>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 bg-gradient-to-b from-amber-50 to-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">الأسعار — شفافية كاملة</h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">أسعار واضحة بدون أي تكاليف مخفية. نقدم خيارين يناسبان احتياجاتكم.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-slate-200 relative" data-testid="card-pricing-procedure-ar">
              <div className="text-center">
                <DollarSign className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-bold text-slate-900 mb-2">الإجراء فقط</h3>
                <div className="text-5xl font-bold text-primary mb-2">$7,500</div>
                <p className="text-slate-500 mb-6">دولار أمريكي</p>
                <ul className="space-y-3 text-right">
                  {[
                    "عملية ESG بالمنظار",
                    "تخدير عام",
                    "إقامة في مستشفى JCI",
                    "فحوصات وتحاليل",
                    "متابعة غذائية ١٢ شهر",
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-slate-600">
                      <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="bg-gradient-to-br from-amber-50 to-white rounded-2xl p-8 shadow-xl border-2 border-amber-400 relative" data-testid="card-pricing-allinclusive-ar">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                <Badge className="bg-amber-500 text-white text-sm px-4 py-1.5">
                  <Gem className="w-4 h-4 ml-1" />
                  الباقة الموصى بها
                </Badge>
              </div>
              <div className="text-center">
                <Crown className="w-12 h-12 text-amber-500 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-slate-900 mb-2">الباقة الشاملة (VIP)</h3>
                <div className="text-5xl font-bold text-amber-600 mb-2">$8,500</div>
                <p className="text-slate-500 mb-6">دولار أمريكي — كل شيء متضمن</p>
                <ul className="space-y-3 text-right">
                  {[
                    "عملية ESG بالمنظار",
                    "تخدير عام + إقامة مستشفى JCI",
                    "جميع الفحوصات والتحاليل",
                    "استقبال VIP من المطار",
                    "إقامة فندقية فاخرة",
                    "أدوية ما بعد العملية",
                    "متابعة غذائية ١٢ شهر",
                    "متابعة مستمرة بعد العودة",
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-slate-700">
                      <CheckCircle2 className="w-5 h-5 text-amber-500 shrink-0" />
                      <span className="font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <Button
                className="w-full mt-6 bg-amber-500 hover:bg-amber-600 text-slate-900 font-bold h-12"
                onClick={() => window.open("https://wa.me/905324131143?text=%D9%85%D8%B1%D8%AD%D8%A8%D8%A7%D9%8B%D8%8C%20%D8%A3%D8%B1%D9%8A%D8%AF%20%D8%AD%D8%AC%D8%B2%20%D8%A7%D9%84%D8%A8%D8%A7%D9%82%D8%A9%20%D8%A7%D9%84%D8%B4%D8%A7%D9%85%D9%84%D8%A9", "_blank")}
                data-testid="button-book-vip-ar"
              >
                احجز الباقة الشاملة الآن
              </Button>
            </div>
          </div>
          <p className="text-center text-slate-500 text-sm mt-8">جميع الأسعار بالدولار الأمريكي. بدون أي تكاليف مخفية أو رسوم إضافية.</p>
        </div>
      </section>

      {/* ما هي ESG */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-slate-900">ما هي عملية طي المعدة بالمنظار (ESG)؟</h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                عملية ESG هي إجراء مبتكر <strong>لتصغير المعدة بدون جراحة</strong>. يتم إدخال منظار عبر الفم لوضع غرز داخلية تقلل حجم المعدة بنسبة ٧٠ إلى ٨٠٪. بخلاف <Link href="/sleeve-gastrectomy" className="text-primary hover:underline">عملية تكميم المعدة الجراحية</Link>، لا يتم عمل أي شقوق، ولا يُستأصل أي نسيج من المعدة، والتعافي أسرع بكثير.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed">
                يستخدم الإجراء تقنية Apollo OverStitch — نظام خياطة بالمنظار متقدم — لإنشاء طيات دائمة في جدار المعدة. النتيجة: الشعور بالشبع بشكل أسرع وتقليل طبيعي لكمية الطعام. تستغرق العملية حوالي ٦٠ إلى ٩٠ دقيقة تحت التخدير العام، ويمكن لمعظم المرضى مغادرة المستشفى في نفس اليوم أو بعد ليلة واحدة.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed">
                لمرضى الخليج، تمثل عملية ESG حلاً ثوريًا يسد الفجوة بين الحميات التي لم تنجح والجراحة التقليدية التي قد لا يكون المريض مستعدًا لها.
              </p>
              <div className="grid grid-cols-3 gap-4 pt-4">
                <div className="text-center p-4 bg-primary/5 rounded-xl">
                  <div className="text-2xl font-bold text-primary">٦٠-٩٠</div>
                  <p className="text-sm text-slate-600 mt-1">دقيقة</p>
                </div>
                <div className="text-center p-4 bg-primary/5 rounded-xl">
                  <div className="text-2xl font-bold text-primary">صفر</div>
                  <p className="text-sm text-slate-600 mt-1">شقوق</p>
                </div>
                <div className="text-center p-4 bg-primary/5 rounded-xl">
                  <div className="text-2xl font-bold text-primary">١-٣</div>
                  <p className="text-sm text-slate-600 mt-1">أيام تعافي</p>
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <img
                src="/esg-procedure-cdn.webp"
                alt="عملية طي المعدة بالمنظار ESG"
                className="rounded-2xl shadow-xl max-w-md w-full"
                width="400"
                height="400"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* لماذا تركيا */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              {saFlag} {aeFlag} لماذا يختار مرضى الخليج عملية ESG في تركيا؟
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              آلاف المرضى من السعودية والإمارات والكويت وقطر والبحرين يختارون إسطنبول للعلاج الطبي. اكتشفوا الأسباب.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-200 hover:shadow-md transition-shadow" data-testid="card-ar-reason-quality">
              <div className="w-14 h-14 rounded-full bg-amber-50 flex items-center justify-center mb-5">
                <Award className="w-7 h-7 text-amber-500" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">جودة طبية عالمية بتكلفة تنافسية</h3>
              <p className="text-slate-600 leading-relaxed">
                في دول الخليج، تكلفة الإجراءات الطبية مرتفعة جدًا. في مركز إسطنبول لجراحة السمنة، نقدم نفس الجودة الطبية — أو أعلى — في مستشفى معتمد JCI، بأسعار تنافسية تبدأ من ٧,٥٠٠ دولار أمريكي.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-200 hover:shadow-md transition-shadow" data-testid="card-ar-reason-vip">
              <div className="w-14 h-14 rounded-full bg-amber-50 flex items-center justify-center mb-5">
                <Crown className="w-7 h-7 text-amber-500" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">تجربة علاجية فاخرة (VIP)</h3>
              <p className="text-slate-600 leading-relaxed">
                نقدم تجربة متكاملة تشمل استقبال VIP من المطار، إقامة في فنادق فاخرة، مترجمين عرب، خصوصية كاملة، ومتابعة شخصية دقيقة. تجربة تليق بمرضى الخليج.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-200 hover:shadow-md transition-shadow" data-testid="card-ar-reason-speed">
              <div className="w-14 h-14 rounded-full bg-amber-50 flex items-center justify-center mb-5">
                <Clock className="w-7 h-7 text-amber-500" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">سرعة في المواعيد</h3>
              <p className="text-slate-600 leading-relaxed">
                بدون قوائم انتظار طويلة. استشارة سريعة، حجز مرن، وإجراء العملية خلال أيام. رحلات مباشرة من الرياض وجدة ودبي والدوحة والكويت (٣ إلى ٤,٥ ساعات).
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ESG vs أدوية */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">ESG مقابل أدوية إنقاص الوزن</h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              كثير من المرضى في الخليج يبدأون بأدوية GLP-1 مثل أوزمبيك أو ويغوفي. لكن ماذا يحدث عندما تقل فعاليتها أو تزداد تكاليفها الشهرية؟ عملية ESG تقدم الحل الأمثل كخطوة تالية.
            </p>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-sm">
            <table className="w-full text-right" data-testid="table-esg-vs-meds-ar">
              <thead>
                <tr className="bg-slate-900 text-white">
                  <th className="p-4 font-semibold text-sm">العامل</th>
                  <th className="p-4 font-semibold text-sm">أوزمبيك / ويغوفي</th>
                  <th className="p-4 font-semibold text-sm bg-amber-600/90">ESG</th>
                </tr>
              </thead>
              <tbody>
                {comparisonMeds.map((row, i) => (
                  <tr key={i} className={`border-b border-slate-100 hover:bg-amber-50/50 transition-colors ${i % 2 === 0 ? "bg-white" : "bg-slate-50/50"}`} data-testid={`row-meds-comparison-ar-${i}`}>
                    <td className="p-4 font-medium text-slate-900">{row.factor}</td>
                    <td className="p-4 text-slate-700">{row.meds}</td>
                    <td className="p-4 text-slate-700 bg-amber-50/50 font-medium">{row.esg}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-sm text-slate-500 mt-4 text-center">عملية ESG تقدم تصغيرًا فعليًا ودائمًا للمعدة — بدون تكاليف شهرية متكررة.</p>
        </div>
      </section>

      {/* ESG vs تكميم المعدة */}
      <section className="py-20 bg-amber-50/50">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">ESG مقابل جراحة تكميم المعدة</h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              هل تتردد بين ESG و<Link href="/sleeve-gastrectomy" className="text-primary hover:underline">جراحة تكميم المعدة</Link>؟ إليكم مقارنة تفصيلية. عملية ESG مثالية لمن يفضلون إجراءً أقل تدخلاً.
            </p>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-sm">
            <table className="w-full text-right" data-testid="table-esg-vs-sleeve-ar">
              <thead>
                <tr className="bg-slate-900 text-white">
                  <th className="p-4 font-semibold text-sm">العنصر</th>
                  <th className="p-4 font-semibold text-sm bg-amber-600/90">ESG</th>
                  <th className="p-4 font-semibold text-sm">تكميم المعدة</th>
                </tr>
              </thead>
              <tbody>
                {comparisonSurgery.map((row, i) => (
                  <tr key={i} className={`border-b border-slate-100 hover:bg-amber-50/50 transition-colors ${i % 2 === 0 ? "bg-white" : "bg-slate-50/50"}`} data-testid={`row-sleeve-comparison-ar-${i}`}>
                    <td className="p-4 font-medium text-slate-900">{row.feature}</td>
                    <td className="p-4 text-slate-700 bg-amber-50/50 font-medium">{row.esg}</td>
                    <td className="p-4 text-slate-700">{row.sleeve}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-sm text-slate-500 mt-4 text-center">كلا الإجراءين يتم تنفيذهما في مستشفى ليف المعتمد JCI في إسطنبول. <Link href="/treatments" className="text-primary hover:underline">اطلعوا على جميع خيارات العلاج</Link>.</p>
        </div>
      </section>

      {/* لماذا مركزنا */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold mb-4">لماذا مركز إسطنبول لجراحة السمنة؟</h2>
            <p className="text-lg text-slate-300 max-w-3xl mx-auto">نجمع بين التميز الطبي وتجربة فاخرة مصممة خصيصًا لمرضى الخليج.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white/10 backdrop-blur rounded-xl p-6 text-center" data-testid="card-ar-ibc-surgeon">
              <div className="w-14 h-14 rounded-full bg-amber-500/20 flex items-center justify-center mx-auto mb-4"><Stethoscope className="w-7 h-7 text-amber-400" /></div>
              <h3 className="text-lg font-bold mb-2"><a href="https://drmuratustun.com" target="_blank" rel="noopener noreferrer" className="hover:text-amber-400 transition-colors">د. مراد أوستون</a></h3>
              <p className="text-slate-300 text-sm">رائد عمليات ESG في تركيا مع آلاف العمليات الناجحة. معترف به دوليًا لخبرته في المنظار التدخلي والرعاية الشخصية للمرضى.</p>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-xl p-6 text-center" data-testid="card-ar-ibc-hospital">
              <div className="w-14 h-14 rounded-full bg-amber-500/20 flex items-center justify-center mx-auto mb-4"><ShieldCheck className="w-7 h-7 text-amber-400" /></div>
              <h3 className="text-lg font-bold mb-2">مستشفى معتمد JCI</h3>
              <p className="text-slate-300 text-sm">جميع العمليات تُجرى في مستشفى ليف الحاصل على اعتماد JCI — المعيار الذهبي العالمي لسلامة المرضى وجودة الرعاية الصحية.</p>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-xl p-6 text-center" data-testid="card-ar-ibc-team">
              <div className="w-14 h-14 rounded-full bg-amber-500/20 flex items-center justify-center mx-auto mb-4"><Users className="w-7 h-7 text-amber-400" /></div>
              <h3 className="text-lg font-bold mb-2">{saFlag} {aeFlag} فريق عربي مخصص</h3>
              <p className="text-slate-300 text-sm">منسقون ومترجمون يتحدثون العربية بطلاقة. خصوصية كاملة، تواصل واضح، أسعار شفافة، ومتابعة شخصية مستمرة.</p>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-xl p-6 text-center" data-testid="card-ar-ibc-package">
              <div className="w-14 h-14 rounded-full bg-amber-500/20 flex items-center justify-center mx-auto mb-4"><Crown className="w-7 h-7 text-amber-400" /></div>
              <h3 className="text-lg font-bold mb-2">باقة VIP شاملة</h3>
              <p className="text-slate-300 text-sm">من ٧,٥٠٠ دولار. باقة شاملة من ٨,٥٠٠ دولار تتضمن العملية، المستشفى، الفندق الفاخر، استقبال VIP، الفحوصات، المتابعة الغذائية ١٢ شهرًا.</p>
            </div>
          </div>
        </div>
      </section>

      {/* خطوات العلاج */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">خطوات العلاج — من البداية حتى العودة</h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">من التواصل الأول حتى عودتكم إلى بلدكم: نحن نتولى كل التفاصيل. إليكم كيف تسير رحلتكم العلاجية.</p>
          </div>
          <div className="relative">
            <div className="absolute right-8 top-0 bottom-0 w-0.5 bg-amber-200 hidden md:block" />
            <div className="space-y-8">
              {journeySteps.map((step) => {
                const Icon = step.icon;
                return (
                  <div key={step.step} className="relative flex gap-6" data-testid={`step-journey-ar-${step.step}`}>
                    <div className="relative z-10 shrink-0">
                      <div className="w-16 h-16 rounded-full bg-amber-500 text-white flex items-center justify-center shadow-lg"><Icon className="w-7 h-7" /></div>
                    </div>
                    <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200 flex-1 hover:shadow-md transition-shadow">
                      <div className="flex items-center gap-3 mb-2">
                        <Badge variant="outline" className="text-amber-600 border-amber-300">الخطوة {step.step}</Badge>
                        <h3 className="text-lg font-bold text-slate-900">{step.title}</h3>
                      </div>
                      <p className="text-slate-600 leading-relaxed">{step.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Istanbul comfort */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
            <div>
              <img src="/esg-ar-istanbul.webp" alt="إسطنبول — وجهة السياحة العلاجية الفاخرة" className="rounded-2xl shadow-xl w-full" width="600" height="400" loading="lazy" />
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-slate-900">راحة فاخرة ورعاية شخصية</h2>
              <p className="text-lg text-slate-600 leading-relaxed">راحتكم وخصوصيتكم هي أولويتنا — منذ لحظة وصولكم إلى إسطنبول. تضمن شراكتنا مع فنادق فاخرة قاعدة مريحة لإقامتكم، بينما يتمتع مستشفى ليف بأحدث المعدات الطبية وفقًا لأعلى المعايير الدولية.</p>
              <p className="text-lg text-slate-600 leading-relaxed">كل جانب من جوانب إقامتكم يُنسق بعناية من قبل فريقنا — من تنظيم استقبالكم VIP من المطار إلى تجهيز غرفتكم في الفندق للتعافي. كثير من مرضانا من الخليج يصفون تجربتهم بأنها «أفضل من أي مركز طبي خاص في الخليج».</p>
              <div className="flex flex-wrap gap-3">
                <Badge className="bg-amber-100 text-amber-800 hover:bg-amber-100 px-3 py-1">استقبال VIP</Badge>
                <Badge className="bg-amber-100 text-amber-800 hover:bg-amber-100 px-3 py-1">فندق فاخر</Badge>
                <Badge className="bg-amber-100 text-amber-800 hover:bg-amber-100 px-3 py-1">مستشفى ليف (JCI)</Badge>
                <Badge className="bg-amber-100 text-amber-800 hover:bg-amber-100 px-3 py-1">خصوصية كاملة</Badge>
                <Badge className="bg-amber-100 text-amber-800 hover:bg-amber-100 px-3 py-1">مترجمون عرب</Badge>
                <Badge className="bg-amber-100 text-amber-800 hover:bg-amber-100 px-3 py-1">واتساب ٢٤/٧</Badge>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* النتائج */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">النتائج المتوقعة من عملية ESG</h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">عملية ESG تقدم نتائج قابلة للقياس ومستدامة — خاصة مع التغييرات في نمط الحياة التي يدعمها برنامج المتابعة.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="bg-amber-500 text-white rounded-2xl p-8 text-center" data-testid="stat-weight-loss-ar">
              <TrendingDown className="w-10 h-10 mx-auto mb-3 opacity-80" />
              <div className="text-4xl font-bold mb-2">١٥-٢٠٪</div>
              <p className="text-white/80">فقدان إجمالي من الوزن</p>
              <p className="text-sm text-white/60 mt-2">خلال ١٢ إلى ١٨ شهرًا</p>
            </div>
            <div className="bg-amber-500 text-white rounded-2xl p-8 text-center" data-testid="stat-bmi-38-ar">
              <Activity className="w-10 h-10 mx-auto mb-3 opacity-80" />
              <div className="text-4xl font-bold mb-2">~٢٠ كجم</div>
              <p className="text-white/80">المتوسط (BMI ٣٨+)</p>
              <p className="text-sm text-white/60 mt-2">في أول ٦ أشهر</p>
            </div>
            <div className="bg-amber-500 text-white rounded-2xl p-8 text-center" data-testid="stat-health-ar">
              <HeartPulse className="w-10 h-10 mx-auto mb-3 opacity-80" />
              <div className="text-4xl font-bold mb-2">تحسن ملحوظ</div>
              <p className="text-white/80">في الصحة العامة</p>
              <p className="text-sm text-white/60 mt-2">السكري، ضغط الدم، انقطاع التنفس أثناء النوم</p>
            </div>
          </div>
          <div className="p-6 bg-amber-50 rounded-xl border border-amber-100">
            <p className="text-slate-700 leading-relaxed">النتائج تعتمد على التزامكم — اتباع النظام الغذائي، ممارسة الرياضة بانتظام، والمشاركة في برنامج المتابعة. برنامجنا يتضمن متابعة غذائية لمدة ١٢ شهرًا مع أخصائية تغذية مؤهلة. <Link href="/results" className="text-primary hover:underline font-medium">شاهدوا قصص نجاح مرضانا</Link>.</p>
          </div>
        </div>
      </section>

      {/* تجارب المرضى */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">{saFlag} {aeFlag} تجارب مرضى الخليج</h2>
            <p className="text-lg text-slate-600">قصص حقيقية من مرضى اختاروا عملية ESG في مركز إسطنبول لجراحة السمنة.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {arTestimonials.map((t, i) => (
              <div key={i} className="bg-white rounded-2xl p-8 shadow-sm border border-slate-200" data-testid={`testimonial-ar-${i}`}>
                <div className="flex items-center gap-1 mb-4">{[...Array(5)].map((_, si) => (<Star key={si} className="w-5 h-5 fill-amber-400 text-amber-400" />))}</div>
                <p className="text-slate-600 italic leading-relaxed mb-6">&ldquo;{t.text}&rdquo;</p>
                <div className="flex items-center justify-between mt-auto">
                  <div>
                    <p className="font-bold text-slate-900">{t.name}</p>
                    <p className="text-sm text-slate-500 flex items-center gap-1"><MapPin className="w-3 h-3" /> {t.location}</p>
                  </div>
                  <div className="text-left">
                    <p className="font-bold text-amber-600">{t.weight}</p>
                    <p className="text-xs text-slate-500">{t.time}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BMI Calculator */}
      <section className="py-20" id="bmi-section-ar">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-start max-w-6xl mx-auto">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-slate-900">من هو المرشح المناسب لعملية ESG؟</h2>
              <p className="text-lg text-slate-600 leading-relaxed">عملية ESG مخصصة للأشخاص الذين يعانون من زيادة الوزن منذ فترة طويلة ويبحثون عن حل بين تغيير نمط الحياة والجراحة التقليدية. قد تكون مناسبًا إذا:</p>
              <div className="space-y-3">
                {[
                  "مؤشر كتلة الجسم بين ٣٠ و٤٠",
                  "لم تحقق الحميات والرياضة نتائج دائمة",
                  "لا ترغب في جراحة تقليدية أو لا تنطبق عليك شروطها",
                  "الأدوية لم تكن فعالة بما يكفي أو مكلفة جدًا",
                  "تفضل إجراءً بأقل فترة تعافي ممكنة",
                  "تعاني من أمراض مرتبطة بالسمنة (سكري النوع الثاني، ارتفاع ضغط الدم، انقطاع التنفس أثناء النوم)",
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                    <p className="text-slate-600">{item}</p>
                  </div>
                ))}
              </div>
              <p className="text-slate-600 leading-relaxed">قبل الإجراء، يجري فريقنا الطبي تقييمًا شاملاً لتاريخكم الطبي. في حالة مؤشر كتلة الجسم فوق ٤٠، قد تكون <Link href="/sleeve-gastrectomy" className="text-primary hover:underline">جراحة تكميم المعدة</Link> أو <Link href="/mini-gastric-bypass" className="text-primary hover:underline">تحويل مسار المعدة</Link> أكثر ملاءمة.</p>
            </div>
            <BMICalculator />
          </div>
        </div>
      </section>

      {/* الأمان */}
      <section className="py-20 bg-green-50">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-slate-900">الأمان ومعايير الجودة</h2>
              <p className="text-lg text-slate-600 leading-relaxed">تُعتبر عملية ESG من أكثر إجراءات إنقاص الوزن أمانًا عند إجرائها من قبل متخصصين ذوي خبرة في مؤسسة معتمدة. مقارنةً بالبدائل الجراحية، تتميز ESG بنسب مضاعفات أقل، بدون ندوب، وتعافٍ أسرع بكثير.</p>
              <p className="text-lg text-slate-600 leading-relaxed">في مركز إسطنبول لجراحة السمنة، أجرى <a href="https://drmuratustun.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">الدكتور مراد أوستون</a> آلاف عمليات ESG بنتائج سلامة ممتازة. جميع العمليات تتم في مستشفى ليف المعتمد JCI — بنفس المعايير الدولية المطبقة في أفضل المراكز العالمية.</p>
              <div className="space-y-3">
                {[
                  "مستشفى معتمد JCI (المعيار الذهبي العالمي)",
                  "جراح معتمد بآلاف عمليات ESG الناجحة",
                  "تقنية خياطة بالمنظار متقدمة (Apollo OverStitch)",
                  "فحوصات صحية شاملة قبل العملية",
                  "رعاية طبية ٢٤/٧ بعد الإجراء",
                  "بروتوكولات طبية وتأمينية شاملة",
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <ShieldCheck className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
                    <p className="text-slate-700">{item}</p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <img src="/esg-ar-consultation.webp" alt="استشارة طبية مع مريض خليجي في مركز إسطنبول لجراحة السمنة" className="rounded-2xl shadow-xl w-full" width="600" height="400" loading="lazy" />
            </div>
          </div>
        </div>
      </section>

      {/* الحياة بعد العملية */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-slate-900 mb-4 text-center">الحياة بعد عملية ESG</h2>
          <p className="text-lg text-slate-600 text-center mb-12 max-w-3xl mx-auto">العملية هي البداية فقط. إليكم كيف يسير التعافي والتحول الغذائي في الأسابيع والأشهر التالية.</p>
          <div className="space-y-4">
            {[
              { phase: "أول ٨ ساعات", desc: "سوائل صافية فقط. راحة وتعافي في المستشفى أو الفندق مع رعاية طبية مستمرة.", icon: "🏥", color: "border-red-200 bg-red-50" },
              { phase: "الأسبوع ١-٢", desc: "مرحلة السوائل — مشروبات بروتينية، مرق صافي، ماء. معدتكم تتعافى وتتكيف مع حجمها الجديد.", icon: "🥤", color: "border-orange-200 bg-orange-50" },
              { phase: "الأسبوع ٣-٦", desc: "إدخال تدريجي للأطعمة شبه الصلبة. وجبات مهروسة وبروتينات طرية. أخصائية التغذية ترافقكم في كل خطوة.", icon: "🥣", color: "border-yellow-200 bg-yellow-50" },
              { phase: "من الأسبوع ٧", desc: "انتقال تدريجي إلى الأطعمة الصلبة الصحية. التركيز على وجبات غنية بالبروتين ومتوازنة بحصص محددة.", icon: "🥗", color: "border-green-200 bg-green-50" },
              { phase: "الشهر ٣-١٢", desc: "متابعة غذائية مستمرة مع مراجعات دورية لتقييم تقدمكم وتعديل خطتكم الغذائية.", icon: "📊", color: "border-blue-200 bg-blue-50" },
            ].map((phase, i) => (
              <div key={i} className={`flex items-start gap-5 p-6 rounded-xl border ${phase.color}`} data-testid={`phase-aftercare-ar-${i}`}>
                <span className="text-3xl shrink-0">{phase.icon}</span>
                <div>
                  <h4 className="font-bold text-slate-900 mb-1">{phase.phase}</h4>
                  <p className="text-slate-600 leading-relaxed">{phase.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-10 p-6 bg-amber-50 rounded-xl border border-amber-100">
            <div className="flex items-start gap-4">
              <Utensils className="w-8 h-8 text-amber-500 shrink-0 mt-1" />
              <div>
                <h4 className="font-bold text-slate-900 mb-2">متابعة غذائية لمدة ١٢ شهرًا — مشمولة في كل باقة</h4>
                <p className="text-slate-600 leading-relaxed">كل باقة ESG تتضمن برنامجًا كاملاً مع أخصائية تغذية مؤهلة تعد خططًا غذائية فردية، تقدم استشارات منتظمة، وترافقكم طوال السنة الأولى. هذا ليس نصيحة عامة — إنه برنامج منظم ومخصص لنمط حياتكم وأهدافكم.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* لماذا تركيا */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">{trFlag} لماذا تركيا للسياحة العلاجية؟</h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">تركيا ترسخت كواحدة من أبرز الوجهات العالمية للسياحة العلاجية — وإسطنبول هي القلب النابض.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Award, title: "مركز صحي عالمي", desc: "تستقبل تركيا أكثر من مليون مريض دولي سنويًا، مع مستشفيات معتمدة JCI في أرجاء إسطنبول." },
              { icon: Stethoscope, title: "أطباء من الطراز الأول", desc: "الجراحون الأتراك في مجال السمنة من بين الأكثر خبرة في العالم — كثير منهم تدربوا دوليًا وأعضاء في IFSO." },
              { icon: DollarSign, title: "جودة عالية بأسعار تنافسية", desc: "رعاية طبية فاخرة بجزء من تكلفة دول الخليج — بدون أي تنازل عن الجودة أو التقنية أو السلامة." },
              { icon: Plane, title: "سهولة الوصول", desc: "رحلات مباشرة من الرياض، جدة، دبي، أبوظبي، الدوحة، والكويت. مدة الرحلة: ٣ إلى ٤,٥ ساعات." },
              { icon: MapPin, title: "إسطنبول — مدينة عالمية", desc: "مدينة نابضة بالحياة على مفترق طرق أوروبا وآسيا. آمنة، سهلة الوصول، ومضيافة للزوار الدوليين." },
              { icon: ShieldCheck, title: "معايير دولية", desc: "مستشفيات معتمدة JCI، إشراف صارم، وبنية تحتية متطورة للسياحة العلاجية تخدم المرضى الدوليين." },
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <div key={i} className="bg-white rounded-xl p-6 shadow-sm border border-slate-200" data-testid={`card-turkey-reason-ar-${i}`}>
                  <div className="w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center mb-4"><Icon className="w-6 h-6 text-amber-600" /></div>
                  <h3 className="font-bold text-slate-900 mb-2">{item.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20" data-testid="section-faq-ar">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">الأسئلة الشائعة — ESG لمرضى الخليج</h2>
            <p className="text-lg text-slate-600">كل ما تحتاجون معرفته قبل السفر إلى إسطنبول.</p>
          </div>
          <FAQAccordion faqs={arFaqs} />
        </div>
      </section>

      {/* روابط داخلية */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-2xl font-bold text-slate-900 mb-8 text-center">اكتشفوا خيارات العلاج الأخرى</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { title: "ESG — المعلومات الكاملة", href: "/esg", desc: "كل التفاصيل عن الإجراء" },
              { title: "تكميم المعدة", href: "/sleeve-gastrectomy", desc: "أشهر عملية لجراحة السمنة" },
              { title: "تحويل مسار المعدة", href: "/mini-gastric-bypass", desc: "إجراء مركب" },
              { title: "بالون المعدة", href: "/gastric-balloon", desc: "خيار غير جراحي" },
              { title: "جميع العلاجات", href: "/treatments", desc: "مقارنة الإجراءات والأسعار" },
              { title: "نتائج المرضى", href: "/results", desc: "قصص نجاح قبل وبعد" },
              { title: "الملف الصحي", href: "/health-profile", desc: "تقييم الأهلية" },
              { title: "من نحن", href: "/about", desc: "د. مراد أوستون والفريق" },
              { title: "تواصل معنا", href: "/contact", desc: "تواصلوا مع فريقنا" },
            ].map((link, i) => (
              <Link key={i} href={link.href} className="flex items-center gap-3 p-4 bg-white rounded-xl border border-slate-200 hover:border-amber-300 hover:shadow-sm transition-all group" data-testid={`link-internal-ar-${i}`}>
                <ArrowLeft className="w-4 h-4 text-amber-500 shrink-0 group-hover:-translate-x-1 transition-transform" />
                <div>
                  <p className="font-medium text-slate-900 group-hover:text-amber-600 transition-colors">{link.title}</p>
                  <p className="text-xs text-slate-500">{link.desc}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-amber-500 to-amber-600 text-white" data-testid="section-cta-ar">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <span className="text-5xl mb-6 block">{saFlag} {aeFlag}</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">ابدأ رحلتك اليوم</h2>
          <p className="text-xl text-white/90 mb-4 leading-relaxed">إذا كنت تبحث عن بديل فعال وآمن للجراحة التقليدية، فقد تكون عملية طي المعدة بالمنظار الحل المناسب لك.</p>
          <p className="text-lg text-white/80 mb-8">تواصلوا معنا اليوم للحصول على استشارة مجانية عبر الإنترنت. سنقيّم أهليتكم، نجيب على جميع أسئلتكم، ونعد خطة علاج مخصصة لكم — بدون أي التزام.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-amber-700 hover:bg-white/90 font-bold text-lg h-14 px-10" onClick={() => window.open("https://wa.me/905324131143?text=%D9%85%D8%B1%D8%AD%D8%A8%D8%A7%D9%8B%D8%8C%20%D8%A3%D9%86%D8%A7%20%D9%85%D9%87%D8%AA%D9%85%20%D8%A8%D8%B9%D9%85%D9%84%D9%8A%D8%A9%20ESG", "_blank")} data-testid="button-cta-whatsapp-ar">
              <Phone className="w-5 h-5 ml-2" />واتساب: 1143 413 532 90+
            </Button>
            <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 font-bold text-lg h-14 px-10" onClick={() => window.open("mailto:drmuratustun@gmail.com?subject=ESG%20inquiry%20from%20Gulf%20patient", "_blank")} data-testid="button-cta-email-ar">
              <MessageCircle className="w-5 h-5 ml-2" />إرسال بريد إلكتروني
            </Button>
          </div>
          <p className="text-white/50 mt-6 text-sm">البريد الإلكتروني: <a href="mailto:drmuratustun@gmail.com" className="text-white/70 hover:text-white underline">drmuratustun@gmail.com</a></p>
        </div>
      </section>

      <Footer />
    </div>
  );
}

import { useState } from "react";
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
  ArrowRight,
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
} from "lucide-react";
import { Link } from "wouter";

const ruFaqs = [
  {
    question: "Процедура ESG болезненна?",
    answer: "ESG проводится под общим наркозом — во время процедуры вы ничего не чувствуете. После пробуждения может быть лёгкий дискомфорт, тошнота или ощущение тяжести в желудке. Эти симптомы обычно проходят в течение 1-3 дней и хорошо купируются медикаментами. По сравнению с хирургическим вмешательством, восстановление значительно более комфортное.",
  },
  {
    question: "Сколько дней нужно провести в Стамбуле?",
    answer: "Большинство пациентов из России и СНГ проводят в Стамбуле 3-4 дня. Вы прилетаете за день до процедуры, ESG проводится на следующий день, третий день — отдых в отеле, и на четвёртый день — возвращение домой. Прямые рейсы из Москвы, Санкт-Петербурга и других городов (~3-4 часа).",
  },
  {
    question: "Результат сохраняется надолго?",
    answer: "Да, при условии соблюдения здорового образа жизни. ESG создаёт физическое уменьшение объёма желудка — это структурное изменение. Но для стабильного результата важно соблюдать план питания и заниматься физической активностью. Наша программа наблюдения в течение 12 месяцев включена во все пакеты.",
  },
  {
    question: "Чем ESG отличается от Ozempic/Wegovy?",
    answer: "Препараты GLP-1, такие как Ozempic и Wegovy, могут быть эффективны на начальном этапе, но многие пациенты набирают вес после прекращения приёма. Ежемесячные расходы также значительны. ESG предлагает разовое решение — физическое уменьшение желудка без постоянных затрат. Многие пациенты рассматривают ESG как логичный следующий шаг.",
  },
  {
    question: "Какой ИМТ нужен для ESG?",
    answer: "ESG обычно рекомендуется пациентам с ИМТ от 30 до 40. Процедура особенно подходит тем, кто не добился устойчивых результатов с помощью диет и физических нагрузок, не хочет инвазивной операции, или предпочитает минимально инвазивный подход с быстрым восстановлением.",
  },
  {
    question: "Безопасно ли лечение за границей?",
    answer: "Istanbul Bariatric Center работает на базе клиники Liv Hospital, аккредитованной JCI (Joint Commission International) — это золотой стандарт качества медицинской помощи в мире. Доктор Мурат Юстюн провёл тысячи процедур ESG с отличными показателями безопасности. Мы предлагаем те же — или более высокие — стандарты качества, что и ведущие клиники.",
  },
  {
    question: "Что включено в пакет?",
    answer: "Наш пакет ESG включает: саму процедуру, пребывание в клинике JCI, предоперационные анализы, VIP-трансфер из аэропорта, проживание в отеле, послеоперационные медикаменты, нутритивное сопровождение в течение 12 месяцев и постоянное наблюдение. Никаких скрытых платежей.",
  },
  {
    question: "Есть ли русскоговорящий персонал?",
    answer: "Да. Наша команда включает координаторов и переводчиков, свободно владеющих русским языком. Все этапы лечения — от первой консультации до послеоперационного наблюдения — проходят на русском языке. Связь через WhatsApp доступна круглосуточно.",
  },
];

const journeySteps = [
  {
    step: 1,
    title: "Бесплатная онлайн-консультация",
    desc: "Свяжитесь с нами через WhatsApp или сайт. Наша команда оценит ваш ИМТ, медицинскую историю и цели, чтобы подтвердить пригодность для ESG.",
    icon: MessageCircle,
  },
  {
    step: 2,
    title: "Прибытие в Стамбул",
    desc: "Выберите дату — мы организуем всё остальное. Прямые рейсы из Москвы, Санкт-Петербурга, Казани и других городов (~3-4 часа).",
    icon: Plane,
  },
  {
    step: 3,
    title: "VIP-трансфер и отель",
    desc: "Частный водитель встретит вас в аэропорту Стамбула и доставит в отель. Устройтесь и отдохните перед процедурой.",
    icon: Hotel,
  },
  {
    step: 4,
    title: "Предоперационное обследование",
    desc: "Полный набор анализов крови и медицинский осмотр в клинике. Личная встреча с доктором Мурат Юстюн и медицинской командой.",
    icon: Stethoscope,
  },
  {
    step: 5,
    title: "Процедура ESG",
    desc: "ESG проводится под общим наркозом в клинике Liv Hospital (JCI). Продолжительность: 60-90 минут. Без разрезов, без шрамов.",
    icon: HeartPulse,
  },
  {
    step: 6,
    title: "Восстановление и возвращение",
    desc: "Отдыхайте в отеле с постоянным медицинским сопровождением. Большинство пациентов возвращается домой через 2-3 дня после процедуры.",
    icon: Plane,
  },
];

const comparisonMeds = [
  { factor: "Долгосрочный эффект", meds: "Ограниченный — вес часто возвращается после отмены", esg: "Стабильный — физическое уменьшение желудка" },
  { factor: "Побочные эффекты", meds: "Частые (тошнота, диарея, риск панкреатита)", esg: "Минимальные (лёгкий дискомфорт 1-3 дня)" },
  { factor: "Стоимость", meds: "Постоянная ежемесячная оплата", esg: "Разовый платёж — всё включено" },
  { factor: "Возврат веса", meds: "Часто после прекращения приёма", esg: "Минимален при здоровом образе жизни" },
  { factor: "Вмешательство", meds: "Нет — еженедельные/ежедневные инъекции", esg: "Одна эндоскопическая процедура (60-90 мин)" },
];

const comparisonSurgery = [
  { feature: "Тип процедуры", esg: "Эндоскопическая (через рот)", sleeve: "Лапароскопическая хирургия (4-5 разрезов)" },
  { feature: "Наркоз", esg: "Общий", sleeve: "Общий" },
  { feature: "Продолжительность", esg: "60-90 минут", sleeve: "~60 минут" },
  { feature: "Госпитализация", esg: "1 день или амбулаторно", sleeve: "2-3 дня" },
  { feature: "Восстановление", esg: "1-3 дня", sleeve: "2-3 недели" },
  { feature: "Шрамы", esg: "Нет", sleeve: "4-5 маленьких" },
  { feature: "Потеря веса", esg: "15-20% от массы тела", sleeve: "60-70% избыточного веса" },
  { feature: "Обратимость", esg: "Потенциально обратима", sleeve: "Необратима (ткань желудка удалена)" },
  { feature: "Риски", esg: "Очень низкие", sleeve: "Низкие" },
];

const ruTestimonials = [
  {
    name: "Анна К.",
    location: "Москва",
    text: "После многих лет неудачных диет и полугода на Ozempic я узнала о ESG. Команда Istanbul Bariatric Center сопровождала меня на каждом этапе — на русском языке. За 5 месяцев я потеряла 17 кг. Наконец-то я чувствую себя свободной.",
    weight: "−17 кг",
    time: "5 месяцев",
  },
  {
    name: "Дмитрий С.",
    location: "Санкт-Петербург",
    text: "Я был удивлён уровнем клиники Liv Hospital — это превосходит многие медицинские центры в России. Доктор Мурат — настоящий профессионал. Процедура прошла гладко, восстановление быстрое. Рекомендую всем, кто ищет решение без операции.",
    weight: "−22 кг",
    time: "6 месяцев",
  },
  {
    name: "Елена В.",
    location: "Казань",
    text: "Всё организовано идеально: трансфер, отель, клиника, переводчик. Мне не пришлось ни о чём беспокоиться. Программа питания на 12 месяцев действительно помогла изменить привычки. Я уже потеряла 14 кг за 4 месяца!",
    weight: "−14 кг",
    time: "4 месяца",
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
    if (bmi < 18.5) return { label: "Недостаточный вес", color: "text-blue-600", eligible: false };
    if (bmi < 25) return { label: "Нормальный вес", color: "text-green-600", eligible: false };
    if (bmi < 30) return { label: "Избыточный вес", color: "text-yellow-600", eligible: false };
    if (bmi < 35) return { label: "Ожирение (I степень)", color: "text-orange-600", eligible: true };
    if (bmi < 40) return { label: "Ожирение (II степень)", color: "text-red-500", eligible: true };
    return { label: "Тяжёлое ожирение (III степень)", color: "text-red-700", eligible: false, surgical: true };
  };

  return (
    <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-200" data-testid="bmi-calculator-ru">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
          <Calculator className="w-6 h-6 text-primary" />
        </div>
        <div>
          <h3 className="text-xl font-bold text-slate-900">Подхожу ли я для ESG?</h3>
          <p className="text-sm text-slate-500">Рассчитайте свой ИМТ</p>
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-4 mb-4">
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">Рост (см)</label>
          <input type="number" value={height} onChange={(e) => setHeight(e.target.value)} placeholder="напр. 175" className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none" data-testid="input-height-ru" />
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">Вес (кг)</label>
          <input type="number" value={weight} onChange={(e) => setWeight(e.target.value)} placeholder="напр. 100" className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none" data-testid="input-weight-ru" />
        </div>
      </div>

      <Button onClick={calculateBMI} className="w-full bg-primary hover:bg-primary/90 h-12" data-testid="button-calculate-bmi-ru">
        Рассчитать ИМТ
      </Button>

      {bmi !== null && (
        <div className="mt-6 p-4 rounded-xl bg-slate-50 border border-slate-200" data-testid="bmi-result-ru">
          <div className="text-center mb-3">
            <span className="text-4xl font-bold text-primary">{bmi}</span>
            <p className={`text-lg font-semibold ${getBMICategory(bmi).color}`}>{getBMICategory(bmi).label}</p>
          </div>
          {getBMICategory(bmi).eligible ? (
            <div className="bg-green-50 border border-green-200 rounded-lg p-3 text-center">
              <p className="text-green-800 font-medium">Вы можете быть подходящим кандидатом для ESG!</p>
              <p className="text-green-600 text-sm mt-1">Свяжитесь с нами для бесплатной консультации.</p>
            </div>
          ) : getBMICategory(bmi).surgical ? (
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 text-center">
              <p className="text-blue-800 font-medium">Бариатрическая хирургия может быть более подходящим вариантом.</p>
              <p className="text-blue-600 text-sm mt-1">
                <Link href="/treatments" className="underline">Все варианты лечения</Link>
              </p>
            </div>
          ) : (
            <div className="bg-slate-100 border border-slate-200 rounded-lg p-3 text-center">
              <p className="text-slate-700 font-medium">ESG обычно рекомендуется при ИМТ от 30 до 40.</p>
              <p className="text-slate-500 text-sm mt-1">Свяжитесь с нами для обсуждения вариантов.</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

function FAQAccordion({ faqs }: { faqs: typeof ruFaqs }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="space-y-3" data-testid="faq-accordion-ru">
      {faqs.map((faq, i) => (
        <div key={i} className={`rounded-xl border transition-all duration-200 ${openIndex === i ? "border-primary/30 bg-white shadow-md" : "border-slate-200 bg-white hover:border-slate-300"}`} data-testid={`faq-item-ru-${i}`}>
          <button className="w-full flex items-center justify-between p-5 text-left" onClick={() => setOpenIndex(openIndex === i ? null : i)} data-testid={`button-faq-ru-${i}`}>
            <span className="font-semibold text-slate-900 pr-4">{faq.question}</span>
            {openIndex === i ? <ChevronUp className="w-5 h-5 text-primary shrink-0" /> : <ChevronDown className="w-5 h-5 text-slate-400 shrink-0" />}
          </button>
          {openIndex === i && (
            <div className="px-5 pb-5 text-slate-600 leading-relaxed animate-in fade-in duration-200">{faq.answer}</div>
          )}
        </div>
      ))}
    </div>
  );
}

export default function ESGRussia() {
  const ruFlag = "🇷🇺";
  const trFlag = "🇹🇷";

  const esgRUSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalProcedure",
    "name": "Эндоскопическая гастропластика для пациентов из России и СНГ",
    "alternateName": ["ESG Россия", "ESG Турция", "Похудение без операции", "Эндоскопическая гастропластика"],
    "description": "Эндоскопическая гастропластика (ESG) для пациентов из России и СНГ в Istanbul Bariatric Center. Уменьшение желудка без операции. Клиника JCI. Русскоговорящий персонал.",
    "procedureType": "Endoscopic",
    "bodyLocation": "Stomach",
    "relevantSpecialty": { "@type": "MedicalSpecialty", "name": "Bariatric Surgery" },
  };

  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="ESG Турция для пациентов из России | Похудение без операции | Клиника JCI"
        description="Эндоскопическая гастропластика для пациентов из России и СНГ. Клиника JCI. Пакеты всё включено. Бесплатная консультация."
        keywords="ESG Россия, похудение без операции, гастропластика Турция, уменьшение желудка без операции, альтернатива Ozempic, бариатрия Турция, ESG цена, снижение веса Стамбул"
        url="/esg/ru"
      />
      <JsonLd data={esgRUSchema} />
      <JsonLd data={structuredData.createFAQ(ruFaqs)} />
      <JsonLd data={structuredData.createBreadcrumb([
        { name: "Home", url: "/" },
        { name: "Treatments", url: "/treatments" },
        { name: "ESG", url: "/esg" },
        { name: "ESG для пациентов из России", url: "/esg/ru" },
      ])} />
      <Navbar />

      {/* Hero */}
      <section className="relative bg-slate-900 text-white pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-primary/30 opacity-90" />
        <div className="absolute inset-0 opacity-15" style={{ backgroundImage: "url('/esg-ru-hero.webp')", backgroundSize: "cover", backgroundPosition: "center" }} />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center gap-3 mb-6">
              <span className="text-4xl">{ruFlag}</span>
              <Badge variant="outline" className="border-white/30 text-white/90 text-sm px-4 py-1">Для пациентов из России и СНГ</Badge>
              <span className="text-4xl">{trFlag}</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight" data-testid="heading-esg-ru-hero">
              Эндоскопическая гастропластика (ESG) — эффективное снижение веса без операции в Турции
            </h1>
            <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto mb-8 leading-relaxed">
              Если диеты, спорт и препараты вроде Ozempic или Wegovy не дали устойчивого результата — ESG предлагает современное решение. Уменьшение желудка без хирургии, без разрезов, в клинике с международной аккредитацией JCI.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary hover:bg-primary/90 font-bold text-lg h-14 px-8" onClick={() => window.open("https://wa.me/905324131143?text=Здравствуйте%2C%20я%20из%20России%20и%20интересуюсь%20процедурой%20ESG", "_blank")} data-testid="button-hero-whatsapp-ru">
                <Phone className="w-5 h-5 mr-2" />Бесплатная консультация
              </Button>
              <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 font-bold text-lg h-14 px-8" onClick={() => document.getElementById("bmi-section-ru")?.scrollIntoView({ behavior: "smooth" })} data-testid="button-hero-bmi-ru">
                <Calculator className="w-5 h-5 mr-2" />Подхожу ли я?
              </Button>
            </div>
            <div className="flex flex-wrap gap-6 justify-center mt-10 text-sm text-slate-400">
              <span className="flex items-center gap-2"><ShieldCheck className="w-4 h-4" /> Клиника JCI</span>
              <span className="flex items-center gap-2"><Users className="w-4 h-4" /> Русскоговорящий персонал</span>
              <span className="flex items-center gap-2"><Clock className="w-4 h-4" /> 3-4 дня в Стамбуле</span>
              <span className="flex items-center gap-2"><Stethoscope className="w-4 h-4" /> 8 000+ успешных процедур</span>
            </div>
          </div>
        </div>
      </section>

      {/* Что такое ESG */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-slate-900">Что такое эндоскопическая гастропластика (ESG)?</h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                ESG — это инновационная процедура для <strong>уменьшения объёма желудка без хирургического вмешательства</strong>. Через рот вводится эндоскоп, с помощью которого накладываются внутренние швы, уменьшающие объём желудка на 70-80%. В отличие от классической <Link href="/sleeve-gastrectomy" className="text-primary hover:underline">рукавной гастрэктомии</Link>, не делается ни одного разреза, ткань желудка не удаляется, а восстановление происходит значительно быстрее.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed">
                Процедура использует технологию Apollo OverStitch — передовую систему эндоскопического шитья — для создания постоянных складок в стенке желудка. Результат: быстрое чувство сытости и естественное снижение объёма потребляемой пищи. Процедура длится 60-90 минут под общим наркозом.
              </p>
              <div className="grid grid-cols-3 gap-4 pt-4">
                <div className="text-center p-4 bg-primary/5 rounded-xl">
                  <div className="text-2xl font-bold text-primary">60-90</div>
                  <p className="text-sm text-slate-600 mt-1">минут</p>
                </div>
                <div className="text-center p-4 bg-primary/5 rounded-xl">
                  <div className="text-2xl font-bold text-primary">Ноль</div>
                  <p className="text-sm text-slate-600 mt-1">разрезов</p>
                </div>
                <div className="text-center p-4 bg-primary/5 rounded-xl">
                  <div className="text-2xl font-bold text-primary">1-3</div>
                  <p className="text-sm text-slate-600 mt-1">дня восстановления</p>
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <img src="/esg-procedure-cdn.webp" alt="Процедура ESG — эндоскопическая гастропластика" className="rounded-2xl shadow-xl max-w-md w-full" width="400" height="400" loading="lazy" />
            </div>
          </div>
        </div>
      </section>

      {/* Почему Турция */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">{ruFlag} Почему пациенты из России выбирают ESG в Турции</h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">Тысячи россиян и жителей стран СНГ ежегодно выбирают Стамбул для бариатрического лечения.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-200 hover:shadow-md transition-shadow" data-testid="card-ru-reason-experience">
              <div className="w-14 h-14 rounded-full bg-blue-50 flex items-center justify-center mb-5"><Award className="w-7 h-7 text-blue-600" /></div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Опыт и доступность</h3>
              <p className="text-slate-600 leading-relaxed">Турция — мировой лидер в области бариатрической медицины. Современные клиники, опытные хирурги и международные стандарты качества. ESG доступна без длительного ожидания — запись возможна в течение нескольких дней.</p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-200 hover:shadow-md transition-shadow" data-testid="card-ru-reason-cost">
              <div className="w-14 h-14 rounded-full bg-green-50 flex items-center justify-center mb-5"><DollarSign className="w-7 h-7 text-green-600" /></div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Доступные цены</h3>
              <p className="text-slate-600 leading-relaxed">Стоимость ESG в Стамбуле значительно ниже, чем в частных клиниках России и Европы — при том же или более высоком уровне качества. Полный пакет «всё включено» с клиникой JCI, отелем, трансфером и 12 месяцами наблюдения.</p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-200 hover:shadow-md transition-shadow" data-testid="card-ru-reason-logistics">
              <div className="w-14 h-14 rounded-full bg-purple-50 flex items-center justify-center mb-5"><Plane className="w-7 h-7 text-purple-600" /></div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Удобная логистика</h3>
              <p className="text-slate-600 leading-relaxed">Прямые рейсы из Москвы, Санкт-Петербурга, Казани, Екатеринбурга и других городов (~3-4 часа). Безвизовый режим для граждан России. VIP-трансфер и организация всего пребывания нашей командой.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ESG vs медикаменты */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">ESG vs медикаменты для снижения веса</h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">Многие пациенты начинают с препаратов GLP-1 — Ozempic, Wegovy. ESG предлагает стабильную альтернативу.</p>
          </div>
          <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-sm">
            <table className="w-full text-left" data-testid="table-esg-vs-meds-ru">
              <thead>
                <tr className="bg-slate-900 text-white">
                  <th className="p-4 font-semibold text-sm uppercase tracking-wider">Фактор</th>
                  <th className="p-4 font-semibold text-sm uppercase tracking-wider">Ozempic / Wegovy</th>
                  <th className="p-4 font-semibold text-sm uppercase tracking-wider bg-primary/90">ESG</th>
                </tr>
              </thead>
              <tbody>
                {comparisonMeds.map((row, i) => (
                  <tr key={i} className={`border-b border-slate-100 ${i % 2 === 0 ? "bg-white" : "bg-slate-50/50"}`} data-testid={`row-meds-ru-${i}`}>
                    <td className="p-4 font-medium text-slate-900">{row.factor}</td>
                    <td className="p-4 text-slate-700">{row.meds}</td>
                    <td className="p-4 text-slate-700 bg-primary/5 font-medium">{row.esg}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ESG vs хирургия */}
      <section className="py-20 bg-blue-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">ESG vs рукавная гастрэктомия</h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">Сравнение ESG и <Link href="/sleeve-gastrectomy" className="text-primary hover:underline">хирургической рукавной гастрэктомии</Link>.</p>
          </div>
          <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-sm">
            <table className="w-full text-left" data-testid="table-esg-vs-sleeve-ru">
              <thead>
                <tr className="bg-slate-900 text-white">
                  <th className="p-4 font-semibold text-sm uppercase tracking-wider">Характеристика</th>
                  <th className="p-4 font-semibold text-sm uppercase tracking-wider bg-primary/90">ESG</th>
                  <th className="p-4 font-semibold text-sm uppercase tracking-wider">Рукавная гастрэктомия</th>
                </tr>
              </thead>
              <tbody>
                {comparisonSurgery.map((row, i) => (
                  <tr key={i} className={`border-b border-slate-100 ${i % 2 === 0 ? "bg-white" : "bg-slate-50/50"}`} data-testid={`row-sleeve-ru-${i}`}>
                    <td className="p-4 font-medium text-slate-900">{row.feature}</td>
                    <td className="p-4 text-slate-700 bg-primary/5 font-medium">{row.esg}</td>
                    <td className="p-4 text-slate-700">{row.sleeve}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Почему мы */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold mb-4">Почему Istanbul Bariatric Center?</h2>
            <p className="text-lg text-slate-300 max-w-3xl mx-auto">Международная экспертиза и сервис, адаптированный для русскоговорящих пациентов.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Stethoscope, title: "Доктор Мурат Юстюн", desc: "Пионер ESG в Турции. Тысячи успешных бариатрических операций. Международное признание." },
              { icon: ShieldCheck, title: "Клиника JCI", desc: "Все процедуры проводятся в Liv Hospital — с международной аккредитацией JCI." },
              { icon: Users, title: "Русскоговорящий персонал", desc: "Координаторы и переводчики на русском языке. WhatsApp-поддержка 24/7." },
              { icon: DollarSign, title: "Пакеты «всё включено»", desc: "Процедура, клиника, отель, трансфер, анализы, питание 12 мес. Без скрытых платежей." },
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <div key={i} className="bg-white/10 backdrop-blur rounded-xl p-6 text-center" data-testid={`card-ru-ibc-${i}`}>
                  <div className="w-14 h-14 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4"><Icon className="w-7 h-7 text-primary" /></div>
                  <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                  <p className="text-slate-300 text-sm">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Этапы */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Этапы лечения — шаг за шагом</h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">От первого контакта до возвращения домой — мы берём на себя все организационные вопросы.</p>
          </div>
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-primary/20 hidden md:block" />
            <div className="space-y-8">
              {journeySteps.map((step) => {
                const Icon = step.icon;
                return (
                  <div key={step.step} className="relative flex gap-6" data-testid={`step-journey-ru-${step.step}`}>
                    <div className="relative z-10 shrink-0">
                      <div className="w-16 h-16 rounded-full bg-primary text-white flex items-center justify-center shadow-lg"><Icon className="w-7 h-7" /></div>
                    </div>
                    <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200 flex-1 hover:shadow-md transition-shadow">
                      <div className="flex items-center gap-3 mb-2">
                        <Badge variant="outline" className="text-primary border-primary/30">Шаг {step.step}</Badge>
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

      {/* Комфорт */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
            <div>
              <img src="/esg-ru-istanbul.webp" alt="Стамбул — медицинский туризм из России" className="rounded-2xl shadow-xl w-full" width="600" height="400" loading="lazy" />
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-slate-900">Комфорт и первоклассный сервис</h2>
              <p className="text-lg text-slate-600 leading-relaxed">Ваше благополучие — наш приоритет с момента прилёта в Стамбул. VIP-трансфер, комфортный отель, клиника Liv Hospital с современнейшим оборудованием — всё организовано нашей командой.</p>
              <p className="text-lg text-slate-600 leading-relaxed">Многие наши русскоязычные пациенты отмечают, что уровень сервиса превзошёл их ожидания — как в плане медицинского обслуживания, так и общей организации пребывания.</p>
              <div className="flex flex-wrap gap-3">
                {["VIP-трансфер", "Отель", "Клиника JCI", "Поддержка 24/7", "Русский язык"].map((tag) => (
                  <Badge key={tag} className="bg-primary/10 text-primary hover:bg-primary/10 px-3 py-1">{tag}</Badge>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Результаты */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Ожидаемые результаты</h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">ESG обеспечивает измеримое и устойчивое снижение веса — особенно в сочетании с нашей программой сопровождения.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="bg-primary text-white rounded-2xl p-8 text-center" data-testid="stat-weight-loss-ru">
              <TrendingDown className="w-10 h-10 mx-auto mb-3 opacity-80" />
              <div className="text-4xl font-bold mb-2">15-20%</div>
              <p className="text-white/80">Общая потеря веса</p>
              <p className="text-sm text-white/60 mt-2">За 12-18 месяцев</p>
            </div>
            <div className="bg-primary text-white rounded-2xl p-8 text-center" data-testid="stat-bmi-38-ru">
              <Activity className="w-10 h-10 mx-auto mb-3 opacity-80" />
              <div className="text-4xl font-bold mb-2">~20 кг</div>
              <p className="text-white/80">В среднем (ИМТ 38+)</p>
              <p className="text-sm text-white/60 mt-2">За первые 6 месяцев</p>
            </div>
            <div className="bg-primary text-white rounded-2xl p-8 text-center" data-testid="stat-health-ru">
              <HeartPulse className="w-10 h-10 mx-auto mb-3 opacity-80" />
              <div className="text-4xl font-bold mb-2">Заметное</div>
              <p className="text-white/80">Улучшение здоровья</p>
              <p className="text-sm text-white/60 mt-2">Диабет, давление, апноэ</p>
            </div>
          </div>
        </div>
      </section>

      {/* Отзывы */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">{ruFlag} Отзывы пациентов из России</h2>
            <p className="text-lg text-slate-600">Реальные истории пациентов, выбравших ESG в Istanbul Bariatric Center.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {ruTestimonials.map((t, i) => (
              <div key={i} className="bg-white rounded-2xl p-8 shadow-sm border border-slate-200" data-testid={`testimonial-ru-${i}`}>
                <div className="flex items-center gap-1 mb-4">{[...Array(5)].map((_, si) => (<Star key={si} className="w-5 h-5 fill-yellow-400 text-yellow-400" />))}</div>
                <p className="text-slate-600 italic leading-relaxed mb-6">&laquo;{t.text}&raquo;</p>
                <div className="flex items-center justify-between mt-auto">
                  <div>
                    <p className="font-bold text-slate-900">{t.name}</p>
                    <p className="text-sm text-slate-500 flex items-center gap-1"><MapPin className="w-3 h-3" /> {t.location}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-bold text-primary">{t.weight}</p>
                    <p className="text-xs text-slate-500">{t.time}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BMI */}
      <section className="py-20" id="bmi-section-ru">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-start max-w-6xl mx-auto">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-slate-900">Кому подходит ESG?</h2>
              <p className="text-lg text-slate-600 leading-relaxed">ESG предназначена для людей, которые давно борются с избыточным весом и ищут решение между мерами образа жизни и серьёзной операцией.</p>
              <div className="space-y-3">
                {[
                  "Ваш ИМТ составляет от 30 до 40",
                  "Диеты и спорт не принесли устойчивых результатов",
                  "Вы не хотите инвазивную операцию",
                  "Медикаменты не помогли или слишком дороги",
                  "Вы предпочитаете минимально инвазивный подход",
                  "Вы страдаете от заболеваний, связанных с ожирением",
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <p className="text-slate-600">{item}</p>
                  </div>
                ))}
              </div>
            </div>
            <BMICalculator />
          </div>
        </div>
      </section>

      {/* Безопасность */}
      <section className="py-20 bg-green-50">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-slate-900">Безопасность и стандарты качества</h2>
              <p className="text-lg text-slate-600 leading-relaxed">ESG считается одной из самых безопасных процедур для снижения веса. Доктор Мурат Юстюн провёл тысячи процедур ESG с отличными показателями безопасности в клинике Liv Hospital с аккредитацией JCI.</p>
              <div className="space-y-3">
                {[
                  "Клиника с международной аккредитацией JCI",
                  "Сертифицированный хирург с тысячами процедур ESG",
                  "Технология Apollo OverStitch",
                  "Полное предоперационное обследование",
                  "Медицинское наблюдение 24/7 после процедуры",
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <ShieldCheck className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
                    <p className="text-slate-700">{item}</p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <img src="/esg-ru-consultation.webp" alt="Консультация с русскоговорящим пациентом" className="rounded-2xl shadow-xl w-full" width="600" height="400" loading="lazy" />
            </div>
          </div>
        </div>
      </section>

      {/* После процедуры */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-slate-900 mb-4 text-center">Жизнь после ESG</h2>
          <p className="text-lg text-slate-600 text-center mb-12 max-w-3xl mx-auto">Процедура — это только начало. Вот как проходит восстановление и переход к новому питанию.</p>
          <div className="space-y-4">
            {[
              { phase: "Первые 8 часов", desc: "Только прозрачные жидкости. Отдых и восстановление под медицинским наблюдением.", icon: "🏥", color: "border-red-200 bg-red-50" },
              { phase: "Неделя 1-2", desc: "Жидкая фаза — протеиновые коктейли, бульон, вода. Желудок заживает.", icon: "🥤", color: "border-orange-200 bg-orange-50" },
              { phase: "Неделя 3-6", desc: "Постепенное введение полутвёрдой пищи. Протертые продукты и мягкие белки.", icon: "🥣", color: "border-yellow-200 bg-yellow-50" },
              { phase: "С 7-й недели", desc: "Переход к здоровой твёрдой пище. Контроль порций, акцент на белки.", icon: "🥗", color: "border-green-200 bg-green-50" },
              { phase: "Месяц 3-12", desc: "Постоянная нутритивная поддержка и регулярные консультации для корректировки плана.", icon: "📊", color: "border-blue-200 bg-blue-50" },
            ].map((phase, i) => (
              <div key={i} className={`flex items-start gap-5 p-6 rounded-xl border ${phase.color}`} data-testid={`phase-aftercare-ru-${i}`}>
                <span className="text-3xl shrink-0">{phase.icon}</span>
                <div>
                  <h4 className="font-bold text-slate-900 mb-1">{phase.phase}</h4>
                  <p className="text-slate-600 leading-relaxed">{phase.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-slate-50" data-testid="section-faq-ru">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Часто задаваемые вопросы</h2>
            <p className="text-lg text-slate-600">Всё, что нужно знать перед поездкой в Стамбул.</p>
          </div>
          <FAQAccordion faqs={ruFaqs} />
        </div>
      </section>

      {/* Ссылки */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-2xl font-bold text-slate-900 mb-8 text-center">Другие варианты лечения</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { title: "ESG — подробности", href: "/esg", desc: "Полная информация о процедуре" },
              { title: "Рукавная гастрэктомия", href: "/sleeve-gastrectomy", desc: "Самая популярная бариатрическая операция" },
              { title: "Мини-шунтирование", href: "/mini-gastric-bypass", desc: "Комбинированная процедура" },
              { title: "Желудочный баллон", href: "/gastric-balloon-turkey", desc: "Нехирургический вариант" },
              { title: "Все процедуры", href: "/treatments", desc: "Сравнение и цены" },
              { title: "Результаты", href: "/results", desc: "Истории успеха пациентов" },
              { title: "О нас", href: "/about", desc: "Доктор Мурат Юстюн и команда" },
              { title: "Контакты", href: "/contact", desc: "Свяжитесь с нами" },
            ].map((link, i) => (
              <Link key={i} href={link.href} className="flex items-center gap-3 p-4 bg-white rounded-xl border border-slate-200 hover:border-primary/30 hover:shadow-sm transition-all group" data-testid={`link-internal-ru-${i}`}>
                <ArrowRight className="w-4 h-4 text-primary shrink-0 group-hover:translate-x-1 transition-transform" />
                <div>
                  <p className="font-medium text-slate-900 group-hover:text-primary transition-colors">{link.title}</p>
                  <p className="text-xs text-slate-500">{link.desc}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary text-white" data-testid="section-cta-ru">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <span className="text-5xl mb-6 block">{ruFlag}</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Начните свой путь к снижению веса</h2>
          <p className="text-xl text-white/80 mb-4 leading-relaxed">Если вы ищете безопасную и эффективную альтернативу хирургии — эндоскопическая гастропластика может стать вашим решением.</p>
          <p className="text-lg text-white/70 mb-8">Свяжитесь с нами сегодня для бесплатной онлайн-консультации на русском языке. Мы оценим вашу пригодность, ответим на все вопросы и составим индивидуальный план лечения — без каких-либо обязательств.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-primary hover:bg-white/90 font-bold text-lg h-14 px-10" onClick={() => window.open("https://wa.me/905324131143?text=Здравствуйте%2C%20я%20из%20России%20и%20интересуюсь%20процедурой%20ESG", "_blank")} data-testid="button-cta-whatsapp-ru">
              <Phone className="w-5 h-5 mr-2" />WhatsApp: +90 532 413 1143
            </Button>
            <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 font-bold text-lg h-14 px-10" onClick={() => window.open("mailto:drmuratustun@gmail.com?subject=ESG%20запрос%20из%20России", "_blank")} data-testid="button-cta-email-ru">
              <MessageCircle className="w-5 h-5 mr-2" />Написать на email
            </Button>
          </div>
          <p className="text-white/50 mt-6 text-sm">Email: <a href="mailto:drmuratustun@gmail.com" className="text-white/70 hover:text-white underline">drmuratustun@gmail.com</a></p>
        </div>
      </section>

      <Footer />
    </div>
  );
}

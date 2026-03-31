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
  Euro,
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

const esFaqs = [
  {
    question: "¿La ESG está cubierta por la Seguridad Social en España?",
    answer: "Actualmente, la ESG no está incluida en la cartera de servicios de la Seguridad Social española. Al tratarse de un procedimiento relativamente nuevo, no está ampliamente disponible en hospitales públicos. Algunos seguros privados pueden valorar la cobertura caso por caso, pero es poco frecuente. Por este motivo, muchos pacientes españoles optan por realizarlo en el extranjero — como en Istanbul Bariatric Center, donde los paquetes todo incluido comienzan desde aproximadamente 5.800 € (£4.950).",
  },
  {
    question: "¿Cuánto tiempo debo quedarme en Estambul?",
    answer: "La mayoría de los pacientes españoles permanecen entre 3 y 4 días en Estambul. Llegan el día anterior al procedimiento, la ESG se realiza al día siguiente, se recuperan en el hotel el tercer día y vuelan de regreso a España el cuarto día. Los vuelos directos desde Madrid, Barcelona, Málaga, Valencia y otras ciudades duran aproximadamente 3,5 a 4 horas.",
  },
  {
    question: "¿Es doloroso el procedimiento?",
    answer: "La ESG se realiza bajo anestesia general — no se siente nada durante la intervención. Tras despertar, pueden aparecer molestias leves como náuseas o sensación de presión gástrica, que suelen resolverse en 1 a 3 días con medicación. Comparado con la cirugía, la recuperación es mucho más cómoda.",
  },
  {
    question: "¿Los resultados son duraderos?",
    answer: "Los resultados a largo plazo dependen de su compromiso personal. La ESG ofrece una herramienta estructural potente — su estómago es físicamente más pequeño — pero mantener los resultados requiere seguir el plan nutricional, realizar ejercicio regularmente y acudir a las revisiones de seguimiento. Nuestro programa de 12 meses con nutricionista cualificada está incluido en todos los paquetes.",
  },
  {
    question: "¿Cómo se compara la ESG con Ozempic o Wegovy?",
    answer: "Los medicamentos GLP-1 como Ozempic y Wegovy pueden ser eficaces inicialmente, pero muchos pacientes recuperan el peso al dejar el tratamiento. Los costes mensuales de 200 a 400 € se acumulan rápidamente. La ESG ofrece una modificación física única del estómago, sin gastos recurrentes. Muchos pacientes ven la ESG como el paso lógico siguiente cuando la medicación ya no es suficiente.",
  },
  {
    question: "¿Qué IMC necesito para la ESG?",
    answer: "La ESG se recomienda generalmente para pacientes con un IMC entre 30 y 40. Es especialmente adecuada para personas que no han logrado resultados duraderos con dietas y ejercicio, que no desean una cirugía invasiva o que buscan un procedimiento con recuperación mínima.",
  },
  {
    question: "¿Es seguro un procedimiento médico en el extranjero?",
    answer: "Istanbul Bariatric Center opera en el Liv Hospital, acreditado por la JCI (Joint Commission International) — el estándar internacional más exigente en calidad sanitaria. El Dr. Murat Üstün ha realizado miles de ESG con excelentes resultados de seguridad. Ofrecemos los mismos estándares — o superiores — que las clínicas privadas en España, con atención dedicada a pacientes hispanohablantes.",
  },
  {
    question: "¿Qué incluye el paquete todo incluido?",
    answer: "Nuestros paquetes de ESG incluyen el procedimiento, la hospitalización en centro acreditado JCI, análisis de sangre y exámenes preoperatorios, traslados VIP al aeropuerto, alojamiento en hotel (ej. Radisson Hotel), seguimiento nutricional cualificado durante 12 meses, medicación postoperatoria y seguimiento continuo. Sin costes ocultos.",
  },
];

const journeySteps = [
  {
    step: 1,
    title: "Consulta online gratuita",
    desc: "Contáctenos por WhatsApp o a través de nuestra web. Nuestro equipo evalúa su IMC, historial médico y objetivos para confirmar su elegibilidad para la ESG.",
    icon: MessageCircle,
  },
  {
    step: 2,
    title: "Viaje a Turquía",
    desc: "Elija su fecha — nosotros nos encargamos del resto. Vuelos directos desde Madrid, Barcelona, Málaga, Valencia y otras ciudades. Duración: aproximadamente 3,5 a 4 horas.",
    icon: Plane,
  },
  {
    step: 3,
    title: "Traslado VIP y hotel",
    desc: "Un chófer privado le recibe en el aeropuerto de Estambul y le lleva a su hotel (ej. Radisson Hotel). Instálese y prepárese para el día siguiente.",
    icon: Hotel,
  },
  {
    step: 4,
    title: "Exámenes preoperatorios",
    desc: "Análisis de sangre completos y evaluación de salud en el hospital. Conozca al Dr. Murat Üstün y al equipo médico en una consulta personalizada.",
    icon: Stethoscope,
  },
  {
    step: 5,
    title: "Procedimiento ESG",
    desc: "La ESG se realiza bajo anestesia general en el Liv Hospital, acreditado JCI. Duración: 60 a 90 minutos. Sin incisiones, sin cicatrices.",
    icon: HeartPulse,
  },
  {
    step: 6,
    title: "Recuperación y regreso",
    desc: "Descanse en el hotel con seguimiento médico. La mayoría de los pacientes regresan a España en 2 a 3 días tras el procedimiento, listos para su nueva etapa.",
    icon: Plane,
  },
];

const comparisonMeds = [
  { factor: "Duración de eficacia", meds: "Variable — recuperación de peso frecuente al suspender", esg: "Más estable — reducción física del estómago permanente" },
  { factor: "Efectos secundarios", meds: "Frecuentes (náuseas, diarrea, riesgo de pancreatitis)", esg: "Mínimos (molestias leves durante 1 a 3 días)" },
  { factor: "Coste", meds: "200 a 400 €/mes de forma continua (2.400 a 4.800 €/año)", esg: "Inversión única desde aproximadamente 5.800 €" },
  { factor: "Recuperación de peso", meds: "Frecuente tras suspender la medicación", esg: "Menor con un estilo de vida saludable" },
  { factor: "Cobertura sanitaria", meds: "Parcial bajo criterios estrictos", esg: "No cubierta por la Seguridad Social" },
  { factor: "¿Requiere intervención?", meds: "No — inyecciones semanales/diarias", esg: "Sí — un procedimiento endoscópico único (60–90 min)" },
];

const comparisonSurgery = [
  { feature: "Tipo de procedimiento", esg: "Endoscópico (por la boca)", sleeve: "Cirugía laparoscópica (4–5 incisiones)" },
  { feature: "Anestesia", esg: "Anestesia general", sleeve: "Anestesia general" },
  { feature: "Duración", esg: "60 a 90 minutos", sleeve: "Aproximadamente 60 minutos" },
  { feature: "Hospitalización", esg: "Mismo día o 1 noche", sleeve: "2 a 3 noches" },
  { feature: "Recuperación", esg: "1 a 3 días", sleeve: "2 a 3 semanas" },
  { feature: "Cicatrices", esg: "Ninguna", sleeve: "4 a 5 pequeñas cicatrices" },
  { feature: "Pérdida de peso", esg: "15 a 20 % del peso corporal", sleeve: "60 a 70 % del exceso de peso" },
  { feature: "Reversibilidad", esg: "Potencialmente reversible", sleeve: "Permanente (tejido gástrico eliminado)" },
  { feature: "Perfil de riesgo", esg: "Muy bajo", sleeve: "Bajo" },
  { feature: "Precio desde (Estambul)", esg: "Desde aprox. 5.800 € (£4.950)", sleeve: "Desde aprox. 3.450 € (£2.950)" },
];

const esTestimonials = [
  {
    name: "Carmen G.",
    location: "Madrid",
    text: "Llevaba años probando dietas y había estado con Ozempic durante 8 meses sin resultados duraderos. La ESG en Istanbul Bariatric Center cambió mi vida. En 5 meses perdí 18 kg y por fin me siento cómoda con mi cuerpo. El equipo fue excepcional desde el primer momento.",
    weight: "18 kg perdidos",
    time: "5 meses",
  },
  {
    name: "Alejandro R.",
    location: "Barcelona",
    text: "Tenía mis dudas sobre hacerme un procedimiento médico fuera de España. Pero el Liv Hospital me dejó impresionado — un nivel de calidad que no había visto ni en las mejores clínicas privadas de Barcelona. El Dr. Murat es un profesional excepcional y el ahorro económico fue enorme.",
    weight: "22 kg perdidos",
    time: "7 meses",
  },
  {
    name: "Lucía M.",
    location: "Málaga",
    text: "Desde el traslado del aeropuerto hasta el seguimiento nutricional, todo estuvo perfectamente organizado. Nunca pensé que vería resultados tan rápidos. El programa de 12 meses me ayudó a cambiar mis hábitos alimenticios de verdad. Lo recomiendo sin dudarlo.",
    weight: "15 kg perdidos",
    time: "4 meses",
  },
];

function CalculadoraIMC() {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [imc, setImc] = useState<number | null>(null);

  const calculateIMC = () => {
    const h = parseFloat(height) / 100;
    const w = parseFloat(weight);
    if (h > 0 && w > 0) {
      setImc(Math.round((w / (h * h)) * 10) / 10);
    }
  };

  const getIMCCategory = (imc: number) => {
    if (imc < 18.5) return { label: "Bajo peso", color: "text-blue-600", eligible: false };
    if (imc < 25) return { label: "Peso normal", color: "text-green-600", eligible: false };
    if (imc < 30) return { label: "Sobrepeso", color: "text-yellow-600", eligible: false };
    if (imc < 35) return { label: "Obesidad (grado I)", color: "text-orange-600", eligible: true };
    if (imc < 40) return { label: "Obesidad (grado II)", color: "text-red-500", eligible: true };
    return { label: "Obesidad severa (grado III)", color: "text-red-700", eligible: false, surgical: true };
  };

  return (
    <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-200" data-testid="bmi-calculator-es">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
          <Calculator className="w-6 h-6 text-primary" />
        </div>
        <div>
          <h3 className="text-xl font-bold text-slate-900">¿Soy candidato/a para la ESG?</h3>
          <p className="text-sm text-slate-500">Calcule su IMC y compruebe su elegibilidad</p>
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-4 mb-4">
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">Altura (cm)</label>
          <input
            type="number"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            placeholder="ej. 170"
            className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none"
            data-testid="input-height-es"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">Peso (kg)</label>
          <input
            type="number"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            placeholder="ej. 100"
            className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none"
            data-testid="input-weight-es"
          />
        </div>
      </div>

      <Button
        onClick={calculateIMC}
        className="w-full bg-primary hover:bg-primary/90 h-12"
        data-testid="button-calculate-imc-es"
      >
        Calcular mi IMC
      </Button>

      {imc !== null && (
        <div className="mt-6 p-4 rounded-xl bg-slate-50 border border-slate-200" data-testid="imc-result-es">
          <div className="text-center mb-3">
            <span className="text-4xl font-bold text-primary">{imc}</span>
            <p className={`text-lg font-semibold ${getIMCCategory(imc).color}`}>{getIMCCategory(imc).label}</p>
          </div>
          {getIMCCategory(imc).eligible ? (
            <div className="bg-green-50 border border-green-200 rounded-lg p-3 text-center">
              <p className="text-green-800 font-medium">¡Podría ser un/a buen/a candidato/a para la ESG!</p>
              <p className="text-green-600 text-sm mt-1">Contáctenos para una consulta gratuita.</p>
            </div>
          ) : getIMCCategory(imc).surgical ? (
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 text-center">
              <p className="text-blue-800 font-medium">Una cirugía bariátrica podría ser más adecuada para su caso.</p>
              <p className="text-blue-600 text-sm mt-1">
                <Link href="/treatments" className="underline">Ver todas las opciones</Link> o contáctenos.
              </p>
            </div>
          ) : (
            <div className="bg-slate-100 border border-slate-200 rounded-lg p-3 text-center">
              <p className="text-slate-700 font-medium">La ESG se recomienda generalmente para un IMC de 30 a 40.</p>
              <p className="text-slate-500 text-sm mt-1">Contáctenos para explorar sus opciones.</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

function FAQAccordion({ faqs }: { faqs: typeof esFaqs }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="space-y-3" data-testid="faq-accordion-es">
      {faqs.map((faq, i) => (
        <div
          key={i}
          className={`rounded-xl border transition-all duration-200 ${openIndex === i ? "border-primary/30 bg-white shadow-md" : "border-slate-200 bg-white hover:border-slate-300"}`}
          data-testid={`faq-item-es-${i}`}
        >
          <button
            className="w-full flex items-center justify-between p-5 text-left"
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
            data-testid={`button-faq-es-${i}`}
          >
            <span className="font-semibold text-slate-900 pr-4">{faq.question}</span>
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

export default function ESGEspana() {
  const esFlag = "🇪🇸";
  const trFlag = "🇹🇷";

  const esgESSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalProcedure",
    "name": "Gastroplastia Endoscópica en Manga para pacientes españoles",
    "alternateName": ["ESG España", "ESG Turquía", "Reducción de estómago sin cirugía", "Adelgazar sin cirugía España"],
    "description": "Gastroplastia Endoscópica en Manga (ESG) para pacientes en España en Istanbul Bariatric Center. Reducción gástrica sin cirugía. Paquetes todo incluido desde aproximadamente 5.800 €. Hasta un 70 % más barato que en España.",
    "procedureType": "Endoscopic",
    "bodyLocation": "Stomach",
    "preparation": "Consulta online gratuita, análisis de IMC, evaluación médica",
    "followup": "Seguimiento nutricional de 12 meses con nutricionista cualificada",
    "howPerformed": "Dispositivo de sutura endoscópica introducido por la boca para reducir el estómago entre un 70 y un 80 %. Sin incisiones necesarias.",
    "status": "https://schema.org/ActiveActionStatus",
    "relevantSpecialty": { "@type": "MedicalSpecialty", "name": "Bariatric Surgery" },
  };

  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="ESG Turquía para pacientes de España | Adelgazar sin cirugía | Hasta 70 % de ahorro"
        description="ESG sin cirugía para pacientes en España. Hasta 70 % más barato. Todo incluido desde 5.800 € en hospital acreditado JCI. Consulta gratuita."
        keywords="ESG España, adelgazar sin cirugía, gastroplastia endoscópica precio, alternativa Ozempic España, perder peso Turquía, reducción de estómago sin cirugía, ESG Turquía precio, cirugía bariátrica Turquía, manga gástrica sin cirugía, perder peso sin operación"
        url="/esg/es"
      />
      <JsonLd data={esgESSchema} />
      <JsonLd data={structuredData.createFAQ(esFaqs)} />
      <JsonLd data={structuredData.createBreadcrumb([
        { name: "Home", url: "/" },
        { name: "Treatments", url: "/treatments" },
        { name: "ESG", url: "/esg" },
        { name: "ESG para pacientes españoles", url: "/esg/es" },
      ])} />
      <Navbar />

      {/* Hero */}
      <section className="relative bg-slate-900 text-white pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-primary/30 opacity-90" />
        <div
          className="absolute inset-0 opacity-15"
          style={{
            backgroundImage: "url('/esg-es-hero.webp')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center gap-3 mb-6">
              <span className="text-4xl">{esFlag}</span>
              <Badge variant="outline" className="border-white/30 text-white/90 text-sm px-4 py-1">
                Especialmente para pacientes españoles
              </Badge>
              <span className="text-4xl">{trFlag}</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight" data-testid="heading-esg-es-hero">
              Gastroplastia Endoscópica en Manga (ESG) para pacientes en España — Adelgazar sin cirugía en Turquía
            </h1>
            <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto mb-8 leading-relaxed">
              Perder peso de forma duradera puede ser un desafío, incluso con dieta, ejercicio o tratamientos médicos. En España, cada vez más personas buscan alternativas eficaces sin cirugía invasiva. La ESG representa hoy una solución moderna, segura y accesible — con un ahorro de hasta el 70 % respecto a España.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 font-bold text-lg h-14 px-8"
                onClick={() => window.open("https://wa.me/905324131143?text=Hola%2C%20soy%20un%20paciente%20de%20Espa%C3%B1a%20interesado%20en%20la%20ESG", "_blank")}
                data-testid="button-hero-whatsapp-es"
              >
                <Phone className="w-5 h-5 mr-2" />
                Consulta gratuita
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white/30 text-white hover:bg-white/10 font-bold text-lg h-14 px-8"
                onClick={() => document.getElementById("imc-section-es")?.scrollIntoView({ behavior: "smooth" })}
                data-testid="button-hero-imc-es"
              >
                <Calculator className="w-5 h-5 mr-2" />
                ¿Soy candidato/a?
              </Button>
            </div>
            <div className="flex flex-wrap gap-6 justify-center mt-10 text-sm text-slate-400">
              <span className="flex items-center gap-2"><ShieldCheck className="w-4 h-4" /> Hospital acreditado JCI</span>
              <span className="flex items-center gap-2"><Euro className="w-4 h-4" /> Hasta 70 % de ahorro</span>
              <span className="flex items-center gap-2"><Clock className="w-4 h-4" /> Estancia de 3 a 4 días</span>
              <span className="flex items-center gap-2"><Stethoscope className="w-4 h-4" /> 8.000+ procedimientos exitosos</span>
            </div>
          </div>
        </div>
      </section>

      {/* ¿Qué es la ESG? */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-slate-900">¿Qué es la Gastroplastia Endoscópica en Manga (ESG)?</h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                La ESG es un procedimiento innovador de <strong>reducción gástrica sin cirugía</strong>. Se introduce un endoscopio por la boca para realizar suturas internas que reducen el volumen del estómago entre un 70 y un 80 %. A diferencia de la <Link href="/sleeve-gastrectomy" className="text-primary hover:underline">manga gástrica quirúrgica</Link>, no se realizan incisiones, no se extrae tejido gástrico y la recuperación es considerablemente más rápida.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed">
                El procedimiento utiliza la tecnología Apollo OverStitch — un sistema de sutura endoscópica de última generación — para crear pliegues permanentes en la pared gástrica. El resultado: una sensación de saciedad más rápida y una reducción natural de las porciones alimentarias. La intervención dura aproximadamente 60 a 90 minutos bajo anestesia general, y la mayoría de los pacientes reciben el alta el mismo día o tras una noche de observación.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed">
                Para los pacientes españoles, la ESG representa una alternativa revolucionaria que cierra la brecha entre las medidas de estilo de vida que no han funcionado y una cirugía invasiva para la que muchos no están preparados o no cumplen los criterios. Es un enfoque médico riguroso, personalizado y respetuoso con el cuerpo.
              </p>
              <div className="grid grid-cols-3 gap-4 pt-4">
                <div className="text-center p-4 bg-primary/5 rounded-xl">
                  <div className="text-2xl font-bold text-primary">60–90</div>
                  <p className="text-sm text-slate-600 mt-1">minutos</p>
                </div>
                <div className="text-center p-4 bg-primary/5 rounded-xl">
                  <div className="text-2xl font-bold text-primary">Cero</div>
                  <p className="text-sm text-slate-600 mt-1">incisiones</p>
                </div>
                <div className="text-center p-4 bg-primary/5 rounded-xl">
                  <div className="text-2xl font-bold text-primary">1–3</div>
                  <p className="text-sm text-slate-600 mt-1">días de recuperación</p>
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <img
                src="/esg-procedure-cdn.webp"
                alt="Procedimiento ESG — Gastroplastia Endoscópica en Manga"
                className="rounded-2xl shadow-xl max-w-md w-full"
                width="400"
                height="400"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ¿Por qué ESG en Turquía? */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              {esFlag} ¿Por qué los pacientes españoles eligen la ESG en Turquía?
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Miles de pacientes españoles viajan cada año a Estambul para procedimientos bariátricos. Descubra por qué la ESG en el extranjero se está convirtiendo en la opción preferida.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-200 hover:shadow-md transition-shadow" data-testid="card-es-reason-access">
              <div className="w-14 h-14 rounded-full bg-red-50 flex items-center justify-center mb-5">
                <ShieldCheck className="w-7 h-7 text-red-500" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Acceso limitado en España</h3>
              <p className="text-slate-600 leading-relaxed">
                Aunque la ESG está creciendo en popularidad, todavía no está ampliamente disponible en el sistema sanitario público español. El acceso en hospitales públicos es muy limitado, y las clínicas privadas que la ofrecen son escasas, con listas de espera que pueden extenderse semanas o meses — incluso en Madrid, Barcelona o Valencia.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-200 hover:shadow-md transition-shadow" data-testid="card-es-reason-cost">
              <div className="w-14 h-14 rounded-full bg-green-50 flex items-center justify-center mb-5">
                <Euro className="w-7 h-7 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Ahorro económico significativo</h3>
              <p className="text-slate-600 leading-relaxed">
                En España, la ESG cuesta típicamente entre <strong>8.000 y 14.000 €</strong> en clínicas privadas. En Istanbul Bariatric Center, los <strong>paquetes todo incluido comienzan desde aproximadamente 5.800 €</strong> (£4.950) — un ahorro de hasta el 60–70 %. El paquete incluye procedimiento, hospitalización, hotel, traslados y 12 meses de seguimiento nutricional.
              </p>
              <div className="mt-4 p-3 bg-green-50 rounded-lg">
                <p className="text-green-800 font-semibold text-sm">
                  Ahorro medio: 3.000 a 8.000 €
                </p>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-200 hover:shadow-md transition-shadow" data-testid="card-es-reason-time">
              <div className="w-14 h-14 rounded-full bg-blue-50 flex items-center justify-center mb-5">
                <Clock className="w-7 h-7 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Sin tiempos de espera</h3>
              <p className="text-slate-600 leading-relaxed">
                Incluso en grandes ciudades como Madrid, Barcelona, Valencia o Málaga, los tiempos de espera para una consulta privada en endoscopia bariátrica pueden alcanzar varias semanas o meses. En Istanbul Bariatric Center, su consulta se organiza en pocos días y el tratamiento completo se realiza en 3 a 4 días.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ESG vs medicamentos */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              ESG vs medicamentos para adelgazar
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Muchos pacientes en España empiezan con medicamentos GLP-1 como Ozempic o Wegovy. Pero, ¿qué ocurre cuando la eficacia disminuye, los efectos secundarios se acumulan o los costes mensuales se vuelven insostenibles? La ESG se posiciona cada vez más como el siguiente paso lógico.
            </p>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-sm">
            <table className="w-full text-left" data-testid="table-esg-vs-meds-es">
              <thead>
                <tr className="bg-slate-900 text-white">
                  <th className="p-4 font-semibold text-sm uppercase tracking-wider">Factor</th>
                  <th className="p-4 font-semibold text-sm uppercase tracking-wider">Ozempic / Wegovy</th>
                  <th className="p-4 font-semibold text-sm uppercase tracking-wider bg-primary/90">ESG</th>
                </tr>
              </thead>
              <tbody>
                {comparisonMeds.map((row, i) => (
                  <tr
                    key={i}
                    className={`border-b border-slate-100 hover:bg-blue-50/50 transition-colors ${i % 2 === 0 ? "bg-white" : "bg-slate-50/50"}`}
                    data-testid={`row-meds-comparison-es-${i}`}
                  >
                    <td className="p-4 font-medium text-slate-900">{row.factor}</td>
                    <td className="p-4 text-slate-700">{row.meds}</td>
                    <td className="p-4 text-slate-700 bg-primary/5 font-medium">{row.esg}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="text-sm text-slate-500 mt-4 text-center">
            La ESG ofrece una reducción gástrica física y única — sin gastos farmacéuticos recurrentes.
          </p>
        </div>
      </section>

      {/* ESG vs Cirugía */}
      <section className="py-20 bg-blue-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              ESG vs Manga gástrica quirúrgica
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              ¿Duda entre la ESG y una <Link href="/sleeve-gastrectomy" className="text-primary hover:underline">manga gástrica quirúrgica</Link>? Aquí tiene una comparación detallada. La ESG es especialmente adecuada para pacientes que prefieren un enfoque menos invasivo.
            </p>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-sm">
            <table className="w-full text-left" data-testid="table-esg-vs-sleeve-es">
              <thead>
                <tr className="bg-slate-900 text-white">
                  <th className="p-4 font-semibold text-sm uppercase tracking-wider">Característica</th>
                  <th className="p-4 font-semibold text-sm uppercase tracking-wider bg-primary/90">ESG</th>
                  <th className="p-4 font-semibold text-sm uppercase tracking-wider">Manga gástrica</th>
                </tr>
              </thead>
              <tbody>
                {comparisonSurgery.map((row, i) => (
                  <tr
                    key={i}
                    className={`border-b border-slate-100 hover:bg-blue-50/50 transition-colors ${i % 2 === 0 ? "bg-white" : "bg-slate-50/50"}`}
                    data-testid={`row-sleeve-comparison-es-${i}`}
                  >
                    <td className="p-4 font-medium text-slate-900">{row.feature}</td>
                    <td className="p-4 text-slate-700 bg-primary/5 font-medium">{row.esg}</td>
                    <td className="p-4 text-slate-700">{row.sleeve}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="text-sm text-slate-500 mt-4 text-center">
            Ambos procedimientos se realizan en el Liv Hospital, acreditado JCI, en Estambul. <Link href="/treatments" className="text-primary hover:underline">Ver todas las opciones de tratamiento</Link>.
          </p>
        </div>
      </section>

      {/* ¿Por qué Istanbul Bariatric Center? */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold mb-4">¿Por qué Istanbul Bariatric Center?</h2>
            <p className="text-lg text-slate-300 max-w-3xl mx-auto">
              Combinamos excelencia médica con una experiencia de paciente diseñada especialmente para pacientes internacionales — y en particular españoles.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white/10 backdrop-blur rounded-xl p-6 text-center" data-testid="card-es-ibc-surgeon">
              <div className="w-14 h-14 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                <Stethoscope className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-lg font-bold mb-2">
                <a href="https://drmuratustun.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Dr. Murat Üstün</a>
              </h3>
              <p className="text-slate-300 text-sm">Pionero de la ESG en Turquía, con miles de procedimientos bariátricos exitosos. Reconocido internacionalmente por su experiencia en endoscopia intervencionista y su enfoque centrado en el paciente.</p>
            </div>

            <div className="bg-white/10 backdrop-blur rounded-xl p-6 text-center" data-testid="card-es-ibc-hospital">
              <div className="w-14 h-14 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                <ShieldCheck className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-lg font-bold mb-2">Hospital acreditado JCI</h3>
              <p className="text-slate-300 text-sm">Todos los procedimientos se realizan en el Liv Hospital — con acreditación Joint Commission International, el estándar mundial más exigente en seguridad y calidad asistencial.</p>
            </div>

            <div className="bg-white/10 backdrop-blur rounded-xl p-6 text-center" data-testid="card-es-ibc-team">
              <div className="w-14 h-14 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                <Users className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-lg font-bold mb-2">{esFlag} Atención en español</h3>
              <p className="text-slate-300 text-sm">Coordinadores dedicados que entienden las expectativas de los pacientes españoles. Comunicación clara, precios transparentes, seguimiento estructurado. Contacto por WhatsApp en todo momento.</p>
            </div>

            <div className="bg-white/10 backdrop-blur rounded-xl p-6 text-center" data-testid="card-es-ibc-package">
              <div className="w-14 h-14 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                <Euro className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-lg font-bold mb-2">Todo incluido desde ~5.800 €</h3>
              <p className="text-slate-300 text-sm">Sin costes ocultos. Los paquetes incluyen procedimiento, hospitalización, hotel, traslados VIP, exámenes preoperatorios, seguimiento nutricional y programa de 12 meses.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Proceso paso a paso */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Su proceso de tratamiento — paso a paso
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Desde el primer contacto hasta su regreso a España, nos encargamos de cada detalle. Así es como funciona su tratamiento como paciente español en Estambul.
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-primary/20 hidden md:block" />
            <div className="space-y-8">
              {journeySteps.map((step) => {
                const Icon = step.icon;
                return (
                  <div key={step.step} className="relative flex gap-6" data-testid={`step-journey-es-${step.step}`}>
                    <div className="relative z-10 shrink-0">
                      <div className="w-16 h-16 rounded-full bg-primary text-white flex items-center justify-center shadow-lg">
                        <Icon className="w-7 h-7" />
                      </div>
                    </div>
                    <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200 flex-1 hover:shadow-md transition-shadow">
                      <div className="flex items-center gap-3 mb-2">
                        <Badge variant="outline" className="text-primary border-primary/30">Paso {step.step}</Badge>
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

      {/* Estambul confort */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
            <div>
              <img
                src="/esg-es-istanbul.webp"
                alt="Estambul — Destino de turismo médico para pacientes españoles"
                className="rounded-2xl shadow-xl w-full"
                width="600"
                height="400"
                loading="lazy"
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-slate-900">Confort y atención de primera clase</h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                Su bienestar es nuestra prioridad — desde el momento en que aterriza en Estambul. Nuestra colaboración con hoteles de alta categoría como el Radisson le garantiza un entorno cómodo, mientras que el Liv Hospital pone a su disposición equipamiento médico de última generación, conforme a los más altos estándares internacionales.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed">
                Cada aspecto de su estancia es coordinado por nuestro equipo — desde la organización de su traslado del aeropuerto hasta la preparación de su habitación de hotel para la recuperación. Muchos de nuestros pacientes españoles describen su experiencia como «superior a cualquier clínica privada en España».
              </p>
              <div className="flex flex-wrap gap-3">
                <Badge className="bg-primary/10 text-primary hover:bg-primary/10 px-3 py-1">Traslado VIP aeropuerto</Badge>
                <Badge className="bg-primary/10 text-primary hover:bg-primary/10 px-3 py-1">Radisson Hotel</Badge>
                <Badge className="bg-primary/10 text-primary hover:bg-primary/10 px-3 py-1">Liv Hospital (JCI)</Badge>
                <Badge className="bg-primary/10 text-primary hover:bg-primary/10 px-3 py-1">Atención 24/7</Badge>
                <Badge className="bg-primary/10 text-primary hover:bg-primary/10 px-3 py-1">Contacto WhatsApp</Badge>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Resultados */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Resultados esperados de la ESG</h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              La ESG produce una pérdida de peso medible y duradera — especialmente cuando se combina con los cambios de estilo de vida que acompaña nuestro programa de seguimiento.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="bg-primary text-white rounded-2xl p-8 text-center" data-testid="stat-weight-loss-es">
              <TrendingDown className="w-10 h-10 mx-auto mb-3 opacity-80" />
              <div className="text-4xl font-bold mb-2">15–20 %</div>
              <p className="text-white/80">Pérdida de peso total</p>
              <p className="text-sm text-white/60 mt-2">En 12 a 18 meses</p>
            </div>
            <div className="bg-primary text-white rounded-2xl p-8 text-center" data-testid="stat-imc-38-es">
              <Activity className="w-10 h-10 mx-auto mb-3 opacity-80" />
              <div className="text-4xl font-bold mb-2">~20 kg</div>
              <p className="text-white/80">Media (IMC 38+)</p>
              <p className="text-sm text-white/60 mt-2">En los primeros 6 meses</p>
            </div>
            <div className="bg-primary text-white rounded-2xl p-8 text-center" data-testid="stat-health-es">
              <HeartPulse className="w-10 h-10 mx-auto mb-3 opacity-80" />
              <div className="text-4xl font-bold mb-2">Notable</div>
              <p className="text-white/80">Mejora de la salud</p>
              <p className="text-sm text-white/60 mt-2">Diabetes, hipertensión, apnea del sueño</p>
            </div>
          </div>

          <div className="p-6 bg-blue-50 rounded-xl border border-blue-100">
            <p className="text-slate-700 leading-relaxed">
              Los resultados dependen de su compromiso personal — seguir el plan nutricional, mantener actividad física regular y asistir a las consultas de seguimiento. Nuestro programa de 12 meses con nutricionista cualificada está incluido en todos los paquetes y le acompaña hacia sus objetivos. <Link href="/results" className="text-primary hover:underline font-medium">Ver testimonios de nuestros pacientes</Link>.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonios */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">{esFlag} Testimonios de pacientes españoles</h2>
            <p className="text-lg text-slate-600">Experiencias reales de pacientes españoles que eligieron la ESG en Istanbul Bariatric Center.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {esTestimonials.map((t, i) => (
              <div key={i} className="bg-white rounded-2xl p-8 shadow-sm border border-slate-200" data-testid={`testimonial-es-${i}`}>
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, si) => (
                    <Star key={si} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-slate-600 italic leading-relaxed mb-6">&ldquo;{t.text}&rdquo;</p>
                <div className="flex items-center justify-between mt-auto">
                  <div>
                    <p className="font-bold text-slate-900">{t.name}</p>
                    <p className="text-sm text-slate-500 flex items-center gap-1">
                      <MapPin className="w-3 h-3" /> {t.location}
                    </p>
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

      {/* Calculadora IMC */}
      <section className="py-20" id="imc-section-es">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-start max-w-6xl mx-auto">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-slate-900">¿Quién es candidato/a para la ESG?</h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                La ESG está dirigida a personas que luchan de forma prolongada con el sobrepeso y buscan una solución entre las medidas de estilo de vida y una cirugía mayor. Podría ser candidato/a si:
              </p>
              <div className="space-y-3">
                {[
                  "Su IMC se sitúa entre 30 y 40",
                  "Las dietas y el ejercicio no han producido resultados duraderos",
                  "No desea una cirugía invasiva o no cumple los criterios para ella",
                  "Los tratamientos farmacológicos han resultado insuficientes o demasiado costosos",
                  "Busca un procedimiento con un tiempo de recuperación mínimo",
                  "Padece comorbilidades asociadas a la obesidad (diabetes tipo 2, hipertensión, apnea del sueño)",
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <p className="text-slate-600">{item}</p>
                  </div>
                ))}
              </div>
              <p className="text-slate-600 leading-relaxed">
                Antes de la intervención, nuestro equipo médico realiza una evaluación exhaustiva de su historial clínico. Para un IMC superior a 40, una <Link href="/sleeve-gastrectomy" className="text-primary hover:underline">manga gástrica</Link> o un <Link href="/mini-gastric-bypass" className="text-primary hover:underline">bypass gástrico</Link> podrían ser más adecuados.
              </p>
            </div>
            <CalculadoraIMC />
          </div>
        </div>
      </section>

      {/* Seguridad */}
      <section className="py-20 bg-green-50">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-slate-900">Seguridad y estándares de calidad</h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                La ESG es considerada uno de los procedimientos de pérdida de peso más seguros cuando es realizado por especialistas experimentados en un centro acreditado. En comparación con las alternativas quirúrgicas, la ESG presenta tasas de complicación más bajas, ninguna cicatriz y una recuperación significativamente más rápida.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed">
                En Istanbul Bariatric Center, <a href="https://drmuratustun.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">el Dr. Murat Üstün</a> ha realizado miles de ESG con excelentes resultados de seguridad. Todos los procedimientos se realizan en el Liv Hospital, acreditado JCI — con los mismos estándares internacionales que los mejores centros en España.
              </p>
              <div className="space-y-3">
                {[
                  "Hospital acreditado JCI (estándar internacional más exigente)",
                  "Cirujano certificado con miles de ESG realizadas",
                  "Tecnología de sutura endoscópica de última generación (Apollo OverStitch)",
                  "Evaluación de salud preoperatoria completa",
                  "Seguimiento médico 24/7 tras la intervención",
                  "Protocolos médicos y de seguro exhaustivos",
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <ShieldCheck className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
                    <p className="text-slate-700">{item}</p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <img
                src="/esg-es-consultation.webp"
                alt="Consulta médica con paciente español en Istanbul Bariatric Center"
                className="rounded-2xl shadow-xl w-full"
                width="600"
                height="400"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Vida después de la ESG */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-slate-900 mb-4 text-center">La vida después de la ESG</h2>
          <p className="text-lg text-slate-600 text-center mb-12 max-w-3xl mx-auto">
            El procedimiento es solo el punto de partida. Así es como se desarrollan su recuperación y transición alimentaria en las semanas y meses posteriores.
          </p>

          <div className="space-y-4">
            {[
              { phase: "Primeras 8 horas", desc: "Solo líquidos claros. Reposo y recuperación en el hospital o hotel con seguimiento médico continuo.", icon: "🏥", color: "border-red-200 bg-red-50" },
              { phase: "Semanas 1–2", desc: "Fase líquida — batidos de proteínas, caldos claros, agua. Su estómago sana y se adapta a su nuevo tamaño.", icon: "🥤", color: "border-orange-200 bg-orange-50" },
              { phase: "Semanas 3–6", desc: "Introducción progresiva de alimentos semisólidos. Purés y proteínas blandas. Su nutricionista le acompaña en cada paso.", icon: "🥣", color: "border-yellow-200 bg-yellow-50" },
              { phase: "A partir de la semana 7", desc: "Transición gradual hacia una alimentación sólida saludable. Enfoque en comidas ricas en proteínas, equilibradas, con porciones controladas.", icon: "🥗", color: "border-green-200 bg-green-50" },
              { phase: "Meses 3–12", desc: "Seguimiento nutricional continuo con consultas regulares para evaluar su progreso y ajustar su plan alimentario.", icon: "📊", color: "border-blue-200 bg-blue-50" },
            ].map((phase, i) => (
              <div key={i} className={`flex items-start gap-5 p-6 rounded-xl border ${phase.color}`} data-testid={`phase-aftercare-es-${i}`}>
                <span className="text-3xl shrink-0">{phase.icon}</span>
                <div>
                  <h4 className="font-bold text-slate-900 mb-1">{phase.phase}</h4>
                  <p className="text-slate-600 leading-relaxed">{phase.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 p-6 bg-primary/5 rounded-xl border border-primary/10">
            <div className="flex items-start gap-4">
              <Utensils className="w-8 h-8 text-primary shrink-0 mt-1" />
              <div>
                <h4 className="font-bold text-slate-900 mb-2">Seguimiento nutricional de 12 meses incluido</h4>
                <p className="text-slate-600 leading-relaxed">
                  Cada paquete de ESG incluye acceso a una nutricionista cualificada que elabora planes alimentarios individualizados, realiza consultas regulares y le acompaña durante todo el primer año. No es un consejo genérico — es un programa estructurado, adaptado a su estilo de vida, sus preferencias y sus objetivos.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ¿Por qué Turquía? */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">{trFlag} ¿Por qué Turquía para turismo médico?</h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Turquía se ha consolidado como uno de los destinos mundiales de referencia para el turismo médico — y Estambul es su epicentro.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Award, title: "Centro de salud global", desc: "Turquía acoge más de un millón de pacientes médicos internacionales al año, con hospitales acreditados JCI en toda la ciudad de Estambul." },
              { icon: Stethoscope, title: "Cirujanos altamente cualificados", desc: "Los cirujanos bariátricos turcos se encuentran entre los más experimentados del mundo — muchos formados internacionalmente y miembros de la IFSO." },
              { icon: Euro, title: "Precios competitivos", desc: "Atención médica de excelencia a una fracción del coste español — sin comprometer calidad, tecnología ni seguridad." },
              { icon: Plane, title: "Acceso fácil desde España", desc: "Vuelos directos desde Madrid, Barcelona, Málaga, Valencia, Sevilla y otras ciudades. Duración: aproximadamente 3,5 a 4 horas hasta Estambul." },
              { icon: MapPin, title: "Estambul — metrópolis mundial", desc: "Una ciudad vibrante y moderna, en la encrucijada de Europa y Asia. Segura, bien comunicada y acogedora para los visitantes internacionales." },
              { icon: ShieldCheck, title: "Estándares internacionales", desc: "Numerosos hospitales acreditados JCI, regulación estricta e infraestructura de turismo médico diseñada para pacientes internacionales." },
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <div key={i} className="bg-white rounded-xl p-6 shadow-sm border border-slate-200" data-testid={`card-turkey-reason-es-${i}`}>
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-bold text-slate-900 mb-2">{item.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20" data-testid="section-faq-es">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Preguntas frecuentes — ESG para pacientes españoles</h2>
            <p className="text-lg text-slate-600">Todo lo que necesita saber antes de viajar a Estambul.</p>
          </div>
          <FAQAccordion faqs={esFaqs} />
        </div>
      </section>

      {/* Enlaces internos */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-2xl font-bold text-slate-900 mb-8 text-center">Descubra otras opciones de tratamiento</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { title: "ESG — Información completa", href: "/esg", desc: "Detalles completos del procedimiento" },
              { title: "Manga gástrica", href: "/sleeve-gastrectomy", desc: "La operación bariátrica más popular" },
              { title: "Mini bypass gástrico", href: "/mini-gastric-bypass", desc: "Procedimiento combinado" },
              { title: "Balón gástrico", href: "/gastric-balloon", desc: "Opción no quirúrgica" },
              { title: "Todos los tratamientos", href: "/treatments", desc: "Comparar procedimientos y precios" },
              { title: "Resultados de pacientes", href: "/results", desc: "Antes y después, testimonios" },
              { title: "Perfil de salud", href: "/health-profile", desc: "Evalúe su elegibilidad" },
              { title: "Sobre nosotros", href: "/about", desc: "Dr. Murat Üstün y el equipo" },
              { title: "Contacto", href: "/contact", desc: "Contacte con nuestro equipo" },
            ].map((link, i) => (
              <Link key={i} href={link.href} className="flex items-center gap-3 p-4 bg-white rounded-xl border border-slate-200 hover:border-primary/30 hover:shadow-sm transition-all group" data-testid={`link-internal-es-${i}`}>
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
      <section className="py-20 bg-primary text-white" data-testid="section-cta-es">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <span className="text-5xl mb-6 block">{esFlag}</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Empiece su transformación hoy</h2>
          <p className="text-xl text-white/80 mb-4 leading-relaxed">
            Si busca una alternativa eficaz y segura a la cirugía, la Gastroplastia Endoscópica en Manga podría ser la solución adecuada para usted.
          </p>
          <p className="text-lg text-white/70 mb-8">
            Contacte con nuestro equipo hoy mismo para una consulta online gratuita. Evaluamos su elegibilidad, respondemos a todas sus preguntas y elaboramos un plan de tratamiento personalizado — sin compromiso.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white text-primary hover:bg-white/90 font-bold text-lg h-14 px-10"
              onClick={() => window.open("https://wa.me/905324131143?text=Hola%2C%20soy%20un%20paciente%20de%20Espa%C3%B1a%20interesado%20en%20la%20ESG", "_blank")}
              data-testid="button-cta-whatsapp-es"
            >
              <Phone className="w-5 h-5 mr-2" />
              WhatsApp: +90 532 413 1143
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white/30 text-white hover:bg-white/10 font-bold text-lg h-14 px-10"
              onClick={() => window.open("mailto:drmuratustun@gmail.com?subject=Consulta%20ESG%20desde%20Espa%C3%B1a", "_blank")}
              data-testid="button-cta-email-es"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Enviar correo electrónico
            </Button>
          </div>
          <p className="text-white/50 mt-6 text-sm">
            Email: <a href="mailto:drmuratustun@gmail.com" className="text-white/70 hover:text-white underline">drmuratustun@gmail.com</a>
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}

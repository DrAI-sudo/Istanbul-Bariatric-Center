const SITE_URL = "https://istanbulbariatriccenter.com";

interface PageSEO {
  title: string;
  description: string;
  h1: string;
  bodyExcerpt: string;
  canonical: string;
  richContent: string;
  jsonLd?: object[];
}

const staticPages: Record<string, PageSEO> = {
  "/": {
    title: "Weight Loss Surgery in Istanbul: Options & Free Consultation",
    description: "Istanbul Bariatric Center: Expert weight loss surgery in Turkey. Gastric sleeve & bypass options with Dr. Murat Ustun. Book your free consultation.",
    h1: "Weight Loss Surgery in Istanbul: Options & Free Consultation",
    bodyExcerpt: "Istanbul Bariatric Center offers world-class bariatric surgery in Turkey with over 8,000 successful procedures. Led by Dr. Murat Ustun, our JCI-accredited hospital provides VIP all-inclusive packages for gastric sleeve, gastric bypass, gastric balloon, ESG, and revision surgery. Award-winning service from £2,250 with airport transfers, luxury hotel, and aftercare included.",
    canonical: SITE_URL + "/",
    richContent: `<section><h2>World-Class Bariatric Surgery in Istanbul, Turkey</h2><p>Istanbul Bariatric Center is a leading weight loss surgery clinic in Istanbul, Turkey, led by world-renowned bariatric surgeon Dr Murat Ustun. With over 8,000 successful procedures, we offer comprehensive all-inclusive packages for gastric sleeve, gastric bypass, gastric balloon, endoscopic sleeve gastroplasty (ESG), duodenal switch, and transit bipartition surgery.</p></section>
<section><h2>Our Weight Loss Surgery Procedures</h2><ul><li><strong>Gastric Sleeve Surgery</strong> (Sleeve Gastrectomy) — From £2,950. Removes 75-80% of the stomach. Most popular bariatric procedure. 60-70% excess weight loss.</li><li><strong>Mini Gastric Bypass</strong> — From £3,350. Creates a small stomach pouch and bypasses part of the small intestine. 70-80% excess weight loss.</li><li><strong>Gastric Balloon</strong> — From £1,650. Non-surgical, temporary balloon placed in stomach. Orbera and Allurion options available.</li><li><strong>Endoscopic Sleeve Gastroplasty (ESG)</strong> — From £4,950. Non-surgical stomach reduction via endoscope. No incisions, 1-3 day recovery.</li><li><strong>Duodenal Switch</strong> — From £4,400. Complex procedure for maximum weight loss in patients with very high BMI.</li><li><strong>Transit Bipartition</strong> — Advanced metabolic surgery combining sleeve gastrectomy with intestinal rerouting.</li></ul></section>
<section><h2>VIP All-Inclusive Packages</h2><p>All packages include JCI accredited hospital stay, preoperative tests, airport transfers, and dietitian support. Relaxation and Luxury packages add Dr Murat Ustun as your surgeon, Radisson Hotel accommodation, UK registered dietitian support, and supplements. We have care support coordinators in 8 UK locations.</p></section>
<section><h2>Why Choose Istanbul Bariatric Center?</h2><ul><li>8,000+ successful weight loss surgeries</li><li>JCI accredited hospital facility</li><li>WhatClinic Patient Service Award winner (2019-2025)</li><li>Led by Dr Murat Ustun — pioneer of ESG in Turkey</li><li>IFSO member</li><li>Comprehensive aftercare with UK-based support team</li><li>All-inclusive packages from £1,650</li></ul></section>
<section><h2>Frequently Asked Questions</h2>
<article><h3>What is the cost of gastric sleeve surgery in Turkey?</h3><p>Gastric sleeve surgery in Turkey at Istanbul Bariatric Center starts from £2,950 as an all-inclusive package, covering surgery at a JCI-accredited hospital, hospital stay, pre-operative tests, airport transfers, hotel, and dietitian aftercare — typically 60-70% less than the UK, US or Australia.</p></article>
<article><h3>Who are the best bariatric surgeons in Istanbul?</h3><p>Dr Murat Ustun is one of Istanbul's most experienced bariatric surgeons, with over 8,000 successful procedures and recognition as a pioneer of Endoscopic Sleeve Gastroplasty (ESG) in Turkey. He is an IFSO member operating at JCI-accredited hospitals.</p></article>
<article><h3>Is Turkey safe for weight loss surgery?</h3><p>Yes. Weight loss surgery in Turkey is safe when performed at JCI-accredited hospitals by board-certified surgeons. Istanbul Bariatric Center operates only at JCI-accredited facilities meeting the same patient-safety and clinical-quality standards as leading hospitals in the UK, US and Europe.</p></article>
<article><h3>Which JCI accredited hospitals perform bariatric surgery in Turkey?</h3><p>Istanbul Bariatric Center performs all bariatric and metabolic surgery at JCI (Joint Commission International) accredited hospitals in Istanbul — the global gold standard for hospital quality and patient safety, with sterile theatres, qualified anaesthesiology teams and intensive-care backup.</p></article>
<article><h3>Do you offer a free consultation for gastric bypass surgery?</h3><p>Yes. We offer a free, no-obligation consultation for gastric bypass and all weight loss procedures. Contact our coordinators on WhatsApp (UK: +44 7491 068686, Turkey: +90 532 413 1143) for a personalised plan, eligibility assessment and all-inclusive quote.</p></article></section>
<section><h2>Contact Us</h2><p>WhatsApp (Turkey): +90 532 413 1143 | WhatsApp (UK): +44 7491 068686 | Email: drmuratustun@gmail.com</p></section>`,
    jsonLd: [{
      "@context": "https://schema.org",
      "@type": "MedicalBusiness",
      "@id": SITE_URL + "/#organization",
      "name": "Istanbul Bariatric Center",
      "alternateName": ["Istanbul Bariatric", "Dr Murat Ustun Bariatric Clinic"],
      "description": "Leading bariatric surgery clinic in Istanbul, Turkey offering gastric sleeve, gastric bypass, gastric balloon, ESG, duodenal switch and revision surgery. Over 8,000 successful procedures led by Dr Murat Ustun at JCI-accredited hospitals.",
      "url": SITE_URL,
      "logo": SITE_URL + "/logo.webp",
      "image": SITE_URL + "/opengraph.jpg",
      "telephone": ["+905324131143", "+447491068686"],
      "email": "drmuratustun@gmail.com",
      "foundingDate": "2015",
      "address": { "@type": "PostalAddress", "addressLocality": "Istanbul", "addressRegion": "Istanbul", "addressCountry": "TR" },
      "areaServed": [
        { "@type": "Country", "name": "United Kingdom" },
        { "@type": "Country", "name": "Ireland" },
        { "@type": "Country", "name": "United States" },
        { "@type": "Country", "name": "Germany" },
        { "@type": "Country", "name": "Australia" },
        { "@type": "Country", "name": "Turkey" }
      ],
      "priceRange": "£1,650 - £5,950",
      "currenciesAccepted": "GBP, EUR, USD",
      "medicalSpecialty": "Bariatric Surgery",
      "knowsAbout": [
        "Bariatric Surgery", "Gastric Sleeve Surgery", "Sleeve Gastrectomy", "Mini Gastric Bypass", "Gastric Bypass Surgery", "Gastric Balloon", "Endoscopic Sleeve Gastroplasty", "ESG", "Endosleeve", "Duodenal Switch", "Transit Bipartition", "Weight Loss Surgery", "Medical Tourism in Turkey", "Obesity Treatment"
      ],
      "sameAs": [
        "https://www.facebook.com/istanbulbariatriccenter",
        "https://www.instagram.com/istanbulbariatriccenter",
        "https://www.youtube.com/@istanbulbariatriccenter"
      ],
      "hasCredential": [
        { "@type": "EducationalOccupationalCredential", "credentialCategory": "Accreditation", "name": "JCI (Joint Commission International) Accredited Hospital" },
        { "@type": "EducationalOccupationalCredential", "credentialCategory": "Membership", "name": "IFSO Member Institution" }
      ],
      "award": "WhatClinic Patient Service Award (2019, 2020, 2021, 2023, 2024, 2025)",
      "founder": {
        "@type": "Physician",
        "name": "Dr Murat Ustun",
        "medicalSpecialty": "Bariatric Surgery",
        "memberOf": { "@type": "MedicalOrganization", "name": "IFSO" }
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "reviewCount": "850",
        "bestRating": "5",
        "worstRating": "1"
      },
      "availableService": [
        { "@type": "MedicalProcedure", "name": "Gastric Sleeve Surgery", "procedureType": "Surgical" },
        { "@type": "MedicalProcedure", "name": "Mini Gastric Bypass", "procedureType": "Surgical" },
        { "@type": "MedicalProcedure", "name": "Gastric Balloon", "procedureType": "Noninvasive" },
        { "@type": "MedicalProcedure", "name": "Endoscopic Sleeve Gastroplasty (ESG)", "procedureType": "Noninvasive" },
        { "@type": "MedicalProcedure", "name": "Duodenal Switch", "procedureType": "Surgical" },
        { "@type": "MedicalProcedure", "name": "Transit Bipartition", "procedureType": "Surgical" }
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is the cost of gastric sleeve surgery in Turkey?",
          "acceptedAnswer": { "@type": "Answer", "text": "Gastric sleeve (sleeve gastrectomy) surgery in Turkey at Istanbul Bariatric Center starts from £2,950 as an all-inclusive package. This covers the surgery at a JCI-accredited hospital, hospital stay, pre-operative tests, airport transfers, hotel accommodation, and dietitian aftercare. Relaxation packages with Dr Murat Ustun are £3,950 and Luxury packages are £4,250 — typically 60-70% less than the UK, US or Australia." }
        },
        {
          "@type": "Question",
          "name": "Who are the best bariatric surgeons in Istanbul?",
          "acceptedAnswer": { "@type": "Answer", "text": "Dr Murat Ustun is one of Istanbul's most experienced bariatric surgeons, with over 8,000 successful procedures and recognition as a pioneer of Endoscopic Sleeve Gastroplasty (ESG) in Turkey. He is an IFSO member and operates at JCI-accredited hospitals. Istanbul Bariatric Center has won the WhatClinic Patient Service Award six times (2019-2025)." }
        },
        {
          "@type": "Question",
          "name": "Is Turkey safe for weight loss surgery?",
          "acceptedAnswer": { "@type": "Answer", "text": "Yes. Weight loss surgery in Turkey is safe when performed at JCI (Joint Commission International) accredited hospitals by experienced, board-certified surgeons. Istanbul Bariatric Center performs all procedures at JCI-accredited facilities that meet the same international patient safety, infection-control and clinical-quality standards as leading hospitals in the UK, US and Europe, with a complication rate in line with international benchmarks." }
        },
        {
          "@type": "Question",
          "name": "Which JCI accredited hospitals perform bariatric surgery in Turkey?",
          "acceptedAnswer": { "@type": "Answer", "text": "Istanbul Bariatric Center performs all bariatric and metabolic surgery at JCI (Joint Commission International) accredited hospitals in Istanbul. JCI accreditation is the gold standard for hospital quality and patient safety worldwide, ensuring sterile operating theatres, qualified anaesthesiology teams, intensive-care backup and rigorous clinical protocols for every gastric sleeve, bypass, ESG and revision procedure." }
        },
        {
          "@type": "Question",
          "name": "Do you offer a free consultation for gastric bypass surgery?",
          "acceptedAnswer": { "@type": "Answer", "text": "Yes. Istanbul Bariatric Center offers a free, no-obligation consultation for gastric bypass and all other weight loss procedures. You can speak with our coordinators on WhatsApp (UK: +44 7491 068686, Turkey: +90 532 413 1143) or by email to receive a personalised treatment plan, eligibility assessment and all-inclusive package quote at no cost." }
        }
      ]
    }]
  },
  "/about": {
    title: "About Istanbul Bariatric Center: Expert Weight Loss Surgery",
    description: "Istanbul Bariatric Center: Expert weight loss surgery in Istanbul. Over 8,000 successful surgeries. Meet our specialist team today.",
    h1: "Istanbul Bariatric Center: Personalized Weight Loss Surgery in Turkey",
    bodyExcerpt: "Istanbul Bariatric Center is led by Dr. Murat Ustun, an experienced bariatric surgeon and member of IFSO. Operating at JCI-accredited Liv Hospital in Istanbul, our multidisciplinary team includes specialist surgeons, dietitians, and patient coordinators dedicated to providing world-class weight loss surgery with personalized VIP care.",
    canonical: SITE_URL + "/about",
    richContent: `<section><h2>About Dr Murat Ustun</h2><p>Dr Murat Ustun is a board-certified bariatric surgeon and pioneer of Endoscopic Sleeve Gastroplasty (ESG) in Turkey. With thousands of successful procedures, he is internationally recognised for his expertise in minimally invasive weight loss surgery. Dr Ustun is a member of IFSO (International Federation for the Surgery of Obesity and Metabolic Disorders) and operates at JCI-accredited Liv Hospital in Istanbul.</p></section>
<section><h2>Our Team</h2><p>Our multidisciplinary team includes specialist bariatric surgeons, anaesthesiologists, dietitians, psychologists, and dedicated patient coordinators. Each team member is committed to providing comprehensive, personalised care throughout your weight loss journey — from initial consultation through surgery and long-term aftercare.</p></section>
<section><h2>Hospital & Facilities</h2><p>All surgeries are performed at JCI (Joint Commission International) accredited hospitals in Istanbul, ensuring the highest standards of patient safety, infection control, and clinical quality. Our state-of-the-art operating theatres are equipped with the latest laparoscopic and endoscopic technology.</p></section>
<section><h2>Awards & Recognition</h2><ul><li>WhatClinic Patient Service Award winner: 2019, 2020, 2021, 2023, 2024, 2025</li><li>IFSO member institution</li><li>JCI accredited hospital facility</li><li>8,000+ successful bariatric procedures</li></ul></section>
<section><h2>UK Support Network</h2><p>Istanbul Bariatric Center has care support coordinators in 8 UK locations, providing local pre- and post-operative consultations for UK-based patients. Our UK registered dietitians provide 12 months of nutritional guidance included in Relaxation and Luxury packages.</p></section>`,
    jsonLd: [{
      "@context": "https://schema.org",
      "@type": "Physician",
      "name": "Dr Murat Ustun",
      "description": "Board-certified bariatric surgeon and pioneer of ESG in Turkey. Over 8,000 successful procedures.",
      "url": SITE_URL + "/about",
      "image": SITE_URL + "/dr-murat-ustun.webp",
      "medicalSpecialty": "Bariatric Surgery",
      "memberOf": { "@type": "MedicalOrganization", "name": "IFSO" },
      "worksFor": { "@type": "MedicalBusiness", "name": "Istanbul Bariatric Center" }
    }]
  },
  "/treatments": {
    title: "Weight Loss Surgery Treatments - Istanbul Bariatric Center",
    description: "Bariatric surgery procedures: Gastric Sleeve, Mini Gastric Bypass, Gastric Balloon, ESG, Transit Bipartition & Duodenal Switch in Istanbul.",
    h1: "Our Weight Loss Surgery Treatments",
    bodyExcerpt: "Istanbul Bariatric Center offers a comprehensive range of bariatric and metabolic surgery procedures including Gastric Sleeve (VSG), Mini Gastric Bypass (MGB), Gastric Balloon, Endoscopic Sleeve Gastroplasty (ESG), Transit Bipartition, Duodenal Switch, and Post-Bariatric Body Contouring. Each procedure is tailored to the patient's BMI, health conditions, and weight loss goals.",
    canonical: SITE_URL + "/treatments",
    richContent: `<section><h2>Compare All Weight Loss Surgery Procedures</h2>
<article><h3>Gastric Sleeve Surgery (Sleeve Gastrectomy)</h3><p>Removes approximately 75-80% of the stomach, creating a smaller tube-shaped stomach. Most popular bariatric procedure worldwide with 60-70% excess weight loss. Ideal for BMI 35+.</p><p>Pricing: Basic £2,950 | Relaxation £3,950 | Luxury £4,250</p></article>
<article><h3>Mini Gastric Bypass (One Anastomosis Gastric Bypass)</h3><p>Creates a small stomach pouch and connects it directly to the small intestine, combining restrictive and malabsorptive mechanisms. 70-80% excess weight loss. Ideal for BMI 40+ or metabolic conditions.</p><p>Pricing: Basic £3,350 | Relaxation £4,350 | Luxury £4,650</p></article>
<article><h3>Gastric Balloon</h3><p>Non-surgical, temporary balloon placed in stomach to reduce capacity. Orbera (endoscopic, £1,650) and Allurion (swallowable, £2,250) options. 10-15% total body weight loss. Ideal for BMI 30-40.</p></article>
<article><h3>Endoscopic Sleeve Gastroplasty (ESG)</h3><p>Non-surgical stomach reduction via endoscope. Reduces stomach size by 70-80% using suturing through the mouth. No incisions, 1-3 day recovery. Pioneered in Turkey by Dr Murat Ustun.</p><p>Pricing: Relaxation £4,950 | Luxury £5,950</p></article>
<article><h3>Duodenal Switch (BPD/DS)</h3><p>Complex procedure combining sleeve gastrectomy with significant intestinal bypass for maximum weight loss. 70-85% excess weight loss. Ideal for BMI 50+.</p><p>Pricing: Relaxation £4,400 | Luxury £4,700</p></article>
<article><h3>Transit Bipartition</h3><p>Advanced metabolic surgery combining sleeve gastrectomy with partial intestinal bypass. Excellent as revision surgery when sleeve gastrectomy alone has not achieved desired results.</p></article>
<article><h3>Post-Bariatric Surgery (Body Contouring)</h3><p>Body contouring procedures after significant weight loss including tummy tuck, arm lift, thigh lift, breast lift, and body lift.</p></article></section>
<section><h2>All-Inclusive Package Details</h2><p>Basic Package: JCI Hospital (2 days), airport pickup, dietitian support. Relaxation Package: Dr Murat Ustun, JCI Hospital (3 days), Radisson Hotel, UK dietitian (12 months), supplements. Luxury Package: Everything in Relaxation plus extended hotel, VIP transfers, premium room.</p></section>`,
  },
  "/treatments/tr": {
    title: "Kilo Verme Cerrahisi Tedavileri - Istanbul Bariatric Center",
    description: "Bariyatrik cerrahi prosedürleri: Mide Kelepçesi, Mini Mide Baypas, Mide Balonu, ESG, Transit Bipartisyon & Duodenal Switch İstanbul'da.",
    h1: "Kilo Verme Cerrahisi Tedavilerimiz",
    bodyExcerpt: "Istanbul Bariatric Center, Mide Kelepçesi (VSG), Mini Mide Baypas (MGB), Mide Balonu, Endoskopik Mide Gastroplasti (ESG), Transit Bipartisyon, Duodenal Switch ve Post-Bariyatrik Vücut Şekillendirme dahil kapsamlı bir bariyatrik ve metabolik cerrahi yelpazesi sunmaktadır.",
    canonical: SITE_URL + "/treatments/tr",
    richContent: `<section><h2>Tüm Kilo Verme Cerrahisi Prosedürlerini Karşılaştırın</h2>
<article><h3>Mide Kelepçesi Cerrahisi (Sleeve Gastrektomi)</h3><p>Midenin yaklaşık %75-80'ini çıkararak daha küçük bir tüp şeklinde mide oluşturur. Dünyada en popüler bariyatrik prosedür olup, %60-70 fazla kilo kaybı sağlar. BMI 35+ için idealdir.</p><p>Fiyatlandırma: Temel £2,950 | Rahatlama £3,950 | Lüks £4,250</p></article>
<article><h3>Mini Mide Baypas (Tek Anastomoz Mide Baypas)</h3><p>Küçük bir mide poşu oluşturur ve bunu doğrudan ince bağırsağa bağlar, kısıtlayıcı ve malabsorptif mekanizmaları birleştirir. %70-80 fazla kilo kaybı sağlar. BMI 40+ veya metabolik durumlar için idealdir.</p><p>Fiyatlandırma: Temel £3,350 | Rahatlama £4,350 | Lüks £4,650</p></article>
<article><h3>Mide Balonu</h3><p>Kapaciteyi azaltmak için mideye yerleştirilen cerrahi olmayan, geçici bir balondur. Orbera (endoskopik, £1,650) ve Allurion (yutulabilir, £2,250) seçenekleri. %10-15 toplam vücut ağırlığı kaybı sağlar. BMI 30-40 için idealdir.</p></article>
<article><h3>Endoskopik Mide Gastroplasti (ESG)</h3><p>Endoskop aracılığıyla cerrahi olmayan mide küçültme. Ağızdan dikiş kullanarak mide boyutunu %70-80 oranında azaltır. Kesik yok, 1-3 gün iyileşme süresi. Türkiye'de Dr Murat Ustun tarafından öncülük edilmiştir.</p><p>Fiyatlandırma: Rahatlama £4,950 | Lüks £5,950</p></article>
<article><h3>Duodenal Switch (BPD/DS)</h3><p>Maksimum kilo kaybı için sleeve gastrektomi ile önemli bir bağırsak bypass'ını birleştiren karmaşık bir prosedür. %70-85 fazla kilo kaybı sağlar. BMI 50+ için idealdir.</p><p>Fiyatlandırma: Rahatlama £4,400 | Lüks £4,700</p></article>
<article><h3>Transit Bipartisyon</h3><p>Sleeve gastrektomi ile kısmi bağırsak bypass'ını birleştiren ileri düzey metabolik cerrahi. Sleeve gastrektomi tek başına istenen sonuçları vermediğinde revizyon cerrahisi olarak mükemmel bir seçenektir.</p></article>
<article><h3>Post-Bariyatrik Cerrahi (Vücut Şekillendirme)</h3><p>Önemli kilo kaybından sonra karın germe, kol kaldırma, uyluk kaldırma, meme kaldırma ve vücut kaldırma gibi vücut şekillendirme prosedürleri.</p></article></section>
<section><h2>Her Şey Dahil Paket Detayları</h2><p>Temel Paket: JCI Hastanesi (2 gün), havaalanı transferi, diyetisyen desteği. Rahatlama Paketi: Dr Murat Ustun, JCI Hastanesi (3 gün), Radisson Otel, İngiltere diyetisyeni (12 ay), takviyeler. Lüks Paket: Rahatlama paketindeki her şey artı uzatılmış otel, VIP transferler, premium oda.</p></section>`,
  },
  "/treatments/es": {
    title: "Tratamientos de Cirugía para Pérdida de Peso - Istanbul Bariatric Center",
    description: "Procedimientos de cirugía bariátrica: Manga Gástrica, Mini Bypass Gástrico, Globo Gástrico, ESG, Bipartición Tránsito y Derivación Duodenal en Estambul.",
    h1: "Nuestros Tratamientos de Cirugía para Pérdida de Peso",
    bodyExcerpt: "Istanbul Bariatric Center ofrece una gama completa de procedimientos de cirugía bariátrica y metabólica, incluyendo Manga Gástrica (VSG), Mini Bypass Gástrico (MGB), Globo Gástrico, ESG, Bipartición Tránsito, Derivación Duodenal y Contorno Corporal Post-Bariátrico.",
    canonical: SITE_URL + "/treatments/es",
    richContent: `<section><h2>Compara Todos los Procedimientos de Cirugía para Pérdida de Peso</h2>
<article><h3>Cirugía de Manga Gástrica (Gastrectomía en Manga)</h3><p>Elimina aproximadamente el 75-80% del estómago, creando un estómago más pequeño en forma de tubo. Procedimiento bariátrico más popular en todo el mundo con una pérdida de peso del 60-70%. Ideal para BMI 35+.</p><p>Precios: Básico £2,950 | Relajación £3,950 | Lujo £4,250</p></article>
<article><h3>Mini Bypass Gástrico (Bypass Gástrico de Una Anastomosis)</h3><p>Crea un pequeño saco gástrico y lo conecta directamente al intestino delgado, combinando mecanismos restrictivos y malabsortivos. 70-80% de pérdida de peso excesivo. Ideal para BMI 40+ o condiciones metabólicas.</p><p>Precios: Básico £3,350 | Relajación £4,350 | Lujo £4,650</p></article>
<article><h3>Globo Gástrico</h3><p>No quirúrgico, globo temporal colocado en el estómago para reducir la capacidad. Opciones Orbera (endoscópico, £1,650) y Allurion (tragable, £2,250). 10-15% de pérdida de peso corporal total. Ideal para BMI 30-40.</p></article>
<article><h3>Gastroplastia Endoscópica en Manga (ESG)</h3><p>Reducción del estómago no quirúrgica a través de un endoscopio. Reduce el tamaño del estómago en un 70-80% utilizando suturas a través de la boca. Sin incisiones, recuperación de 1-3 días. Pionero en Turquía por el Dr. Murat Ustun.</p><p>Precios: Relajación £4,950 | Lujo £5,950</p></article>
<article><h3>Derivación Duodenal (BPD/DS)</h3><p>Procedimiento complejo que combina gastrectomía en manga con un bypass intestinal significativo para una máxima pérdida de peso. 70-85% de pérdida de peso excesivo. Ideal para BMI 50+.</p><p>Precios: Relajación £4,400 | Lujo £4,700</p></article>
<article><h3>Bipartición Tránsito</h3><p>Cirugía metabólica avanzada que combina gastrectomía en manga con un bypass intestinal parcial. Excelente como cirugía de revisión cuando la gastrectomía en manga sola no ha logrado los resultados deseados.</p></article>
<article><h3>Cirugía Post-Bariátrica (Contorno Corporal)</h3><p>Procedimientos de contorno corporal después de una pérdida de peso significativa, incluyendo abdominoplastia, levantamiento de brazos, levantamiento de muslos, levantamiento de senos y levantamiento corporal.</p></article></section>
<section><h2>Detalles del Paquete Todo Incluido</h2><p>Paquete Básico: Hospital JCI (2 días), recogida en el aeropuerto, apoyo de dietista. Paquete de Relajación: Dr. Murat Ustun, Hospital JCI (3 días), Hotel Radisson, dietista del Reino Unido (12 meses), suplementos. Paquete de Lujo: Todo en Relajación más hotel extendido, traslados VIP, habitación premium.</p></section>`,
  },
  "/treatments/de": {
    title: "Gewichtsverlust-Chirurgie Behandlungen - Istanbul Bariatric Center",
    description: "Bariatrische chirurgische Verfahren: Magenbypass, Mini-Magenbypass, Magenballon, ESG, Transit-Bipartition & Duodenal-Switch in Istanbul.",
    h1: "Unsere Gewichtsverlust-Chirurgie Behandlungen",
    bodyExcerpt: "Das Istanbul Bariatric Center bietet ein umfassendes Spektrum an bariatrischen und metabolischen chirurgischen Verfahren, einschließlich Magenbypass (VSG), Mini-Magenbypass (MGB), Magenballon, Endoskopische Magen-Gastroplastik (ESG), Transit-Bipartition, Duodenal-Switch und post-bariatrische Körperformung.",
    canonical: SITE_URL + "/treatments/de",
    richContent: `<section><h2>Vergleichen Sie Alle Gewichtsverlust-Chirurgie Verfahren</h2>
<article><h3>Magenbypass-Chirurgie (Sleeve Gastrektomie)</h3><p>Entfernt etwa 75-80% des Magens und schafft einen kleineren, röhrenförmigen Magen. Beliebtestes bariatrisches Verfahren weltweit mit 60-70% Gewichtsverlust. Ideal für BMI 35+.</p><p>Preise: Basis £2,950 | Entspannung £3,950 | Luxus £4,250</p></article>
<article><h3>Mini-Magenbypass (One Anastomosis Gastric Bypass)</h3><p>Erzeugt eine kleine Magenblase und verbindet sie direkt mit dem Dünndarm, kombiniert restriktive und malabsorptive Mechanismen. 70-80% Gewichtsverlust. Ideal für BMI 40+ oder metabolische Erkrankungen.</p><p>Preise: Basis £3,350 | Entspannung £4,350 | Luxus £4,650</p></article>
<article><h3>Magenballon</h3><p>Nicht-chirurgisch, vorübergehender Ballon, der in den Magen eingesetzt wird, um das Volumen zu reduzieren. Orbera (endoskopisch, £1,650) und Allurion (schluckbar, £2,250) Optionen. 10-15% Gewichtsverlust. Ideal für BMI 30-40.</p></article>
<article><h3>Endoskopische Magen-Gastroplastik (ESG)</h3><p>Nicht-chirurgische Magenverkleinerung über ein Endoskop. Reduziert die Magengröße um 70-80% durch Nahttechnik über den Mund. Keine Einschnitte, 1-3 Tage Erholungszeit. In der Türkei von Dr Murat Ustun eingeführt.</p><p>Preise: Entspannung £4,950 | Luxus £5,950</p></article>
<article><h3>Duodenal-Switch (BPD/DS)</h3><p>Komplexes Verfahren, das Sleeve-Gastrektomie mit signifikantem intestinalen Bypass kombiniert für maximalen Gewichtsverlust. 70-85% Gewichtsverlust. Ideal für BMI 50+.</p><p>Preise: Entspannung £4,400 | Luxus £4,700</p></article>
<article><h3>Transit-Bipartition</h3><p>Fortgeschrittene metabolische Chirurgie, die Sleeve-Gastrektomie mit teilweisem intestinalen Bypass kombiniert. Hervorragend als Revisionschirurgie, wenn die Sleeve-Gastrektomie allein nicht die gewünschten Ergebnisse erzielt hat.</p></article>
<article><h3>Post-Bariatrische Chirurgie (Körperformung)</h3><p>Körperformungsverfahren nach erheblichem Gewichtsverlust, einschließlich Bauchstraffung, Oberarmstraffung, Oberschenkelstraffung, Bruststraffung und Körperstraffung.</p></article></section>
<section><h2>Details zu All-Inclusive-Paketen</h2><p>Basis-Paket: JCI Krankenhaus (2 Tage), Abholung vom Flughafen, Unterstützung durch Ernährungsberater. Entspannungspaket: Dr Murat Ustun, JCI Krankenhaus (3 Tage), Radisson Hotel, UK Ernährungsberater (12 Monate), Nahrungsergänzungsmittel. Luxuspaket: Alles im Entspannungspaket plus verlängerten Hotelaufenthalt, VIP-Transfers, Premium-Zimmer.</p></section>`,
  },
  "/treatments/fr": {
    title: "Traitements de Chirurgie Bariatrique - Istanbul Bariatric Center",
    description: "Procédures de chirurgie bariatrique : Sleeve Gastrique, Mini Bypass Gastrique, Ballon Gastrique, ESG, Bipartition Transit & Switch Duodénal à Istanbul.",
    h1: "Nos Traitements de Chirurgie Bariatrique",
    bodyExcerpt: "Istanbul Bariatric Center propose une gamme complète de procédures de chirurgie bariatrique et métabolique, y compris Sleeve Gastrique (VSG), Mini Bypass Gastrique (MGB), Ballon Gastrique, ESG, Bipartition Transit, Switch Duodénal, et Contouring Corporel Post-Bariatrique.",
    canonical: SITE_URL + "/treatments/fr",
    richContent: `<section><h2>Comparer Toutes les Procédures de Chirurgie Bariatrique</h2>
<article><h3>Chirurgie de Sleeve Gastrique (Gastrectomie en Manchon)</h3><p>Retire environ 75-80% de l'estomac, créant un estomac en forme de tube plus petit. Procédure bariatrique la plus populaire au monde avec une perte de poids excédentaire de 60-70%. Idéal pour un IMC de 35+.</p><p>Tarification : Basique £2,950 | Détente £3,950 | Luxe £4,250</p></article>
<article><h3>Mini Bypass Gastrique (Bypass Gastrique à Une Anastomose)</h3><p>Crée une petite poche gastrique et la connecte directement à l'intestin grêle, combinant des mécanismes restrictifs et malabsorptifs. 70-80% de perte de poids excédentaire. Idéal pour un IMC de 40+ ou des conditions métaboliques.</p><p>Tarification : Basique £3,350 | Détente £4,350 | Luxe £4,650</p></article>
<article><h3>Ballon Gastrique</h3><p>Non chirurgical, ballon temporaire placé dans l'estomac pour réduire la capacité. Options Orbera (endoscopique, £1,650) et Allurion (avalable, £2,250). 10-15% de perte de poids totale. Idéal pour un IMC de 30-40.</p></article>
<article><h3>Gastroplastie Endoscopique en Manchon (ESG)</h3><p>Réduction de l'estomac non chirurgicale via endoscope. Réduit la taille de l'estomac de 70-80% en utilisant des sutures par la bouche. Pas d'incisions, récupération de 1 à 3 jours. Pionnière en Turquie par Dr Murat Ustun.</p><p>Tarification : Détente £4,950 | Luxe £5,950</p></article>
<article><h3>Switch Duodénal (BPD/DS)</h3><p>Procédure complexe combinant gastrectomie en manchon avec un contournement intestinal significatif pour une perte de poids maximale. 70-85% de perte de poids excédentaire. Idéal pour un IMC de 50+.</p><p>Tarification : Détente £4,400 | Luxe £4,700</p></article>
<article><h3>Bipartition Transit</h3><p>Chirurgie métabolique avancée combinant gastrectomie en manchon avec un contournement intestinal partiel. Excellent en tant que chirurgie de révision lorsque la gastrectomie en manchon seule n'a pas atteint les résultats souhaités.</p></article>
<article><h3>Chirurgie Post-Bariatrique (Contouring Corporel)</h3><p>Procédures de contouring corporel après une perte de poids significative, y compris abdominoplastie, lifting des bras, lifting des cuisses, lifting des seins, et lifting corporel.</p></article></section>
<section><h2>Détails des Forfaits Tout Inclus</h2><p>Forfait Basique : Hôpital JCI (2 jours), prise en charge à l'aéroport, soutien diététique. Forfait Détente : Dr Murat Ustun, Hôpital JCI (3 jours), Hôtel Radisson, diététicien britannique (12 mois), suppléments. Forfait Luxe : Tout dans Détente plus prolongation d'hôtel, transferts VIP, chambre premium.</p></section>`,
  },
  "/treatments/it": {
    title: "Trattamenti Chirurgia per la Perdita di Peso - Istanbul Bariatric Center",
    description: "Procedure di chirurgia bariatrica: Sleeve Gastrico, Mini Bypass Gastrico, Pallone Gastrico, ESG, Bipartizione Transitiva & Switch Duodenale a Istanbul.",
    h1: "I Nostri Trattamenti di Chirurgia per la Perdita di Peso",
    bodyExcerpt: "Istanbul Bariatric Center offre una gamma completa di procedure di chirurgia bariatrica e metabolica, inclusi Sleeve Gastrico (VSG), Mini Bypass Gastrico (MGB), Pallone Gastrico, Gastroplastica Endoscopica a Manica (ESG), Bipartizione Transitiva, Switch Duodenale e Contouring Corporeo Post-Bariatrico.",
    canonical: SITE_URL + "/treatments/it",
    richContent: `<section><h2>Confronta Tutte le Procedure di Chirurgia per la Perdita di Peso</h2>
<article><h3>Chirurgia Sleeve Gastrico (Gastrectomia a Manica)</h3><p>Rimuove circa il 75-80% dello stomaco, creando uno stomaco a forma di tubo più piccolo. Procedura bariatrica più popolare al mondo con una perdita di peso in eccesso del 60-70%. Ideale per BMI 35+.</p><p>Prezzi: Base £2,950 | Relax £3,950 | Lusso £4,250</p></article>
<article><h3>Mini Bypass Gastrico (Bypass Gastrico con Un'Anastomosi)</h3><p>Crea una piccola sacca gastrica e la collega direttamente all'intestino tenue, combinando meccanismi restrittivi e malassorbitivi. 70-80% di perdita di peso in eccesso. Ideale per BMI 40+ o condizioni metaboliche.</p><p>Prezzi: Base £3,350 | Relax £4,350 | Lusso £4,650</p></article>
<article><h3>Pallone Gastrico</h3><p>Procedura non chirurgica, pallone temporaneo posizionato nello stomaco per ridurre la capacità. Opzioni Orbera (endoscopico, £1,650) e Allurion (ingoiabile, £2,250). 10-15% di perdita di peso totale. Ideale per BMI 30-40.</p></article>
<article><h3>Gastroplastica Endoscopica a Manica (ESG)</h3><p>Riduzione dello stomaco non chirurgica tramite endoscopio. Riduce la dimensione dello stomaco del 70-80% utilizzando punti di sutura attraverso la bocca. Nessuna incisione, recupero di 1-3 giorni. Pionieristica in Turchia da Dr Murat Ustun.</p><p>Prezzi: Relax £4,950 | Lusso £5,950</p></article>
<article><h3>Switch Duodenale (BPD/DS)</h3><p>Procedura complessa che combina la gastrectomia a manica con un significativo bypass intestinale per la massima perdita di peso. 70-85% di perdita di peso in eccesso. Ideale per BMI 50+.</p><p>Prezzi: Relax £4,400 | Lusso £4,700</p></article>
<article><h3>Bipartizione Transitiva</h3><p>Chirurgia metabolica avanzata che combina la gastrectomia a manica con un bypass intestinale parziale. Eccellente come chirurgia di revisione quando la gastrectomia a manica da sola non ha raggiunto i risultati desiderati.</p></article>
<article><h3>Chirurgia Post-Bariatrica (Contouring Corporeo)</h3><p>Procedure di contouring corporeo dopo una significativa perdita di peso, inclusi addominoplastica, sollevamento braccia, sollevamento cosce, sollevamento seno e sollevamento corporeo.</p></article></section>
<section><h2>Dettagli Pacchetti Tutto Incluso</h2><p>Pacchetto Base: Ospedale JCI (2 giorni), trasferimento dall'aeroporto, supporto dietista. Pacchetto Relax: Dr Murat Ustun, Ospedale JCI (3 giorni), Hotel Radisson, dietista del Regno Unito (12 mesi), integratori. Pacchetto Lusso: Tutto nel pacchetto Relax più estensione dell'hotel, trasferimenti VIP, camera premium.</p></section>`,
  },
  "/treatments/ro": {
    title: "Tratamentul Chirurgiei de Pierdere în Greutate - Istanbul Bariatric Center",
    description: "Proceduri de chirurgie bariatrică: Gastric Sleeve, Mini Gastric Bypass, Gastric Balloon, ESG, Bifurcație de Transit & Duodenal Switch în Istanbul.",
    h1: "Tratamentul nostru de Chirurgie pentru Pierderea în Greutate",
    bodyExcerpt: "Istanbul Bariatric Center oferă o gamă completă de proceduri de chirurgie bariatrică și metabolică, inclusiv Gastric Sleeve (VSG), Mini Gastric Bypass (MGB), Gastric Balloon, ESG, Bifurcație de Transit, Duodenal Switch și Conturare Corporală Post-Bariatrică.",
    canonical: SITE_URL + "/treatments/ro",
    richContent: `<section><h2>Compară Toate Procedurile de Chirurgie pentru Pierderea în Greutate</h2>
<article><h3>Chirurgia Gastric Sleeve (Sleeve Gastrectomy)</h3><p>Îndepărtează aproximativ 75-80% din stomac, creând un stomac mai mic în formă de tub. Cea mai populară procedură bariatrică la nivel mondial cu o pierdere în greutate de 60-70% din excesul de greutate. Ideal pentru BMI 35+.</p><p>Pret: Basic £2,950 | Relaxare £3,950 | Lux £4,250</p></article>
<article><h3>Mini Gastric Bypass (One Anastomosis Gastric Bypass)</h3><p>Creează un mic sac gastric și îl conectează direct la intestinul subțire, combinând mecanisme restrictive și malabsorptive. 70-80% pierdere în greutate din exces. Ideal pentru BMI 40+ sau condiții metabolice.</p><p>Pret: Basic £3,350 | Relaxare £4,350 | Lux £4,650</p></article>
<article><h3>Gastric Balloon</h3><p>Procedură non-chirurgicală, balon temporar plasat în stomac pentru a reduce capacitatea. Opțiuni Orbera (endoscopic, £1,650) și Allurion (înghițibil, £2,250). 10-15% pierdere totală în greutate corporală. Ideal pentru BMI 30-40.</p></article>
<article><h3>Endoscopic Sleeve Gastroplasty (ESG)</h3><p>Reducerea stomacului non-chirurgicală prin endoscopie. Reduce dimensiunea stomacului cu 70-80% folosind suturi prin gură. Fără incizii, recuperare de 1-3 zile. Pionierat în Turcia de Dr Murat Ustun.</p><p>Pret: Relaxare £4,950 | Lux £5,950</p></article>
<article><h3>Duodenal Switch (BPD/DS)</h3><p>Procedură complexă care combină sleeve gastrectomy cu un bypass intestinal semnificativ pentru o pierdere maximă în greutate. 70-85% pierdere în greutate din exces. Ideal pentru BMI 50+.</p><p>Pret: Relaxare £4,400 | Lux £4,700</p></article>
<article><h3>Bifurcație de Transit</h3><p>Chirurgie metabolică avansată care combină sleeve gastrectomy cu un bypass intestinal parțial. Excelentă ca intervenție de revizie atunci când sleeve gastrectomy singură nu a obținut rezultatele dorite.</p></article>
<article><h3>Chirurgie Post-Bariatrică (Conturare Corporală)</h3><p>Proceduri de conturare corporală după pierderea semnificativă în greutate, inclusiv abdominoplastie, lifting de brațe, lifting de coapse, lifting mamar și lifting corporal.</p></article></section>
<section><h2>Detalii Pachete All-Inclusive</h2><p>Pachet Basic: Spital JCI (2 zile), transfer de la aeroport, suport dietetician. Pachet Relaxare: Dr Murat Ustun, Spital JCI (3 zile), Hotel Radisson, dietetician din Marea Britanie (12 luni), suplimente. Pachet Lux: Tot ce este în Relaxare plus hotel extins, transferuri VIP, cameră premium.</p></section>`,
  },
  "/treatments/ru": {
    title: "Лечение хирургии похудения - Istanbul Bariatric Center",
    description: "Процедуры бариатрической хирургии: гастрический рукав, мини-гастральный шунт, гастрический баллон, ESG, транзитная бипартия и дуоденальный шунт в Стамбуле.",
    h1: "Наши процедуры хирургии похудения",
    bodyExcerpt: "Istanbul Bariatric Center предлагает широкий спектр процедур бариатрической и метаболической хирургии, включая гастрический рукав (VSG), мини-гастральный шунт (MGB), гастрический баллон, эндоскопическую гастро-пластическую операцию (ESG), транзитную бипартию, дуоденальный шунт и контурирование тела после бариатрической хирургии. Каждая процедура адаптирована к ИМТ пациента, состоянию здоровья и целям по снижению веса.",
    canonical: SITE_URL + "/treatments/ru",
    richContent: `<section><h2>Сравните все процедуры хирургии похудения</h2>
<article><h3>Хирургия гастрического рукава (Sleeve Gastrectomy)</h3><p>Удаляет примерно 75-80% желудка, создавая меньший желудок в форме трубы. Наиболее популярная бариатрическая процедура в мире с потерей избыточного веса 60-70%. Идеально для ИМТ 35+.</p><p>Цена: Базовый £2,950 | Расслабляющий £3,950 | Роскошный £4,250</p></article>
<article><h3>Мини-гастральный шунт (One Anastomosis Gastric Bypass)</h3><p>Создает небольшой желудочный мешок и соединяет его напрямую с тонкой кишкой, сочетая ограничительные и малабсорбтивные механизмы. 70-80% потеря избыточного веса. Идеально для ИМТ 40+ или метаболических заболеваний.</p><p>Цена: Базовый £3,350 | Расслабляющий £4,350 | Роскошный £4,650</p></article>
<article><h3>Гастрический баллон</h3><p>Нескальпельный, временный баллон, помещаемый в желудок для уменьшения его объема. Опции Orbera (эндоскопический, £1,650) и Allurion (глотательный, £2,250). 10-15% потеря общего веса. Идеально для ИМТ 30-40.</p></article>
<article><h3>Эндоскопическая гастро-пластическая операция (ESG)</h3><p>Нескальпельное уменьшение желудка с помощью эндоскопа. Уменьшает размер желудка на 70-80% с использованием швов через рот. Без разрезов, восстановление 1-3 дня. Пионером в Турции является Dr Murat Ustun.</p><p>Цена: Расслабляющий £4,950 | Роскошный £5,950</p></article>
<article><h3>Дуоденальный шунт (BPD/DS)</h3><p>Сложная процедура, сочетающая гастрический рукав с значительным обходом кишечника для максимальной потери веса. 70-85% потеря избыточного веса. Идеально для ИМТ 50+.</p><p>Цена: Расслабляющий £4,400 | Роскошный £4,700</p></article>
<article><h3>Транзитная бипартия</h3><p>Современная метаболическая хирургия, сочетающая гастрический рукав с частичным обходом кишечника. Отлично подходит как повторная операция, когда гастрический рукав сам по себе не достиг желаемых результатов.</p></article>
<article><h3>После бариатрической хирургии (Контурирование тела)</h3><p>Процедуры контурирования тела после значительной потери веса, включая абдоминопластику, подтяжку рук, подтяжку бедер, подтяжку груди и лифтинг тела.</p></article></section>
<section><h2>Детали пакетов «Все включено»</h2><p>Базовый пакет: Больница JCI (2 дня), трансфер из аэропорта, поддержка диетолога. Расслабляющий пакет: Dr Murat Ustun, Больница JCI (3 дня), отель Radisson, диетолог из Великобритании (12 месяцев), добавки. Роскошный пакет: Все в Расслабляющем пакете плюс продленный отель, VIP-трансферы, номер повышенной комфортности.</p></section>`,
  },
  "/treatments/ar": {
    title: "علاجات جراحة فقدان الوزن - مركز إسطنبول لجراحة السمنة",
    description: "إجراءات جراحة السمنة: تكميم المعدة، تحويل مسار المعدة المصغر، بالون المعدة، ESG، تقسيم الأمعاء، وتحويل الاثني عشر في إسطنبول.",
    h1: "علاجات جراحة فقدان الوزن لدينا",
    bodyExcerpt: "يقدم مركز إسطنبول لجراحة السمنة مجموعة شاملة من إجراءات جراحة السمنة والأيض بما في ذلك تكميم المعدة (VSG)، تحويل مسار المعدة المصغر (MGB)، بالون المعدة، جراحة تكميم المعدة بالمنظار (ESG)، تقسيم الأمعاء، تحويل الاثني عشر، ونحت الجسم بعد جراحة السمنة. كل إجراء مصمم وفقًا لمؤشر كتلة الجسم (BMI) وظروف الصحة وأهداف فقدان الوزن.",
    canonical: SITE_URL + "/treatments/ar",
    richContent: `<section><h2>قارن جميع إجراءات جراحة فقدان الوزن</h2>
<article><h3>جراحة تكميم المعدة (Sleeve Gastrectomy)</h3><p>تزيل حوالي 75-80% من المعدة، مما يخلق معدة أصغر على شكل أنبوب. الإجراء الأكثر شعبية في العالم مع فقدان 60-70% من الوزن الزائد. مثالي لمؤشر كتلة الجسم 35+.</p><p>التسعير: باقة أساسية £2,950 | باقة استرخاء £3,950 | باقة فاخرة £4,250</p></article>
<article><h3>تحويل مسار المعدة المصغر (One Anastomosis Gastric Bypass)</h3><p>يخلق كيس معدي صغير ويربطه مباشرة بالأمعاء الدقيقة، مما يجمع بين الآليات التقييدية وامتصاص الطعام. فقدان 70-80% من الوزن الزائد. مثالي لمؤشر كتلة الجسم 40+ أو الحالات الأيضية.</p><p>التسعير: باقة أساسية £3,350 | باقة استرخاء £4,350 | باقة فاخرة £4,650</p></article>
<article><h3>بالون المعدة</h3><p>إجراء غير جراحي، بالون مؤقت يوضع في المعدة لتقليل السعة. خيارات Orbera (بالمنظار، £1,650) وAllurion (قابل للابتلاع، £2,250). فقدان 10-15% من الوزن الكلي. مثالي لمؤشر كتلة الجسم 30-40.</p></article>
<article><h3>جراحة تكميم المعدة بالمنظار (ESG)</h3><p>تقليل حجم المعدة بطريقة غير جراحية عبر المنظار. يقلل حجم المعدة بنسبة 70-80% باستخدام الخياطة من خلال الفم. لا توجد شقوق، فترة تعافي من 1-3 أيام. تم ابتكارها في تركيا على يد الدكتور مراد أستون.</p><p>التسعير: باقة استرخاء £4,950 | باقة فاخرة £5,950</p></article>
<article><h3>تحويل الاثني عشر (BPD/DS)</h3><p>إجراء معقد يجمع بين تكميم المعدة مع تحويل معوي كبير لتحقيق أقصى فقدان للوزن. فقدان 70-85% من الوزن الزائد. مثالي لمؤشر كتلة الجسم 50+.</p><p>التسعير: باقة استرخاء £4,400 | باقة فاخرة £4,700</p></article>
<article><h3>تقسيم الأمعاء</h3><p>جراحة أيضية متقدمة تجمع بين تكميم المعدة مع تحويل جزئي للأمعاء. ممتازة كجراحة مراجعة عندما لا تحقق تكميم المعدة وحده النتائج المرغوبة.</p></article>
<article><h3>جراحة ما بعد السمنة (نحت الجسم)</h3><p>إجراءات نحت الجسم بعد فقدان الوزن الكبير بما في ذلك شد البطن، رفع الذراعين، رفع الفخذين، رفع الثدي، ورفع الجسم.</p></article></section>
<section><h2>تفاصيل الحزمة الشاملة</h2><p>باقة أساسية: مستشفى JCI (يومين)، خدمة نقل من المطار، دعم أخصائي تغذية. باقة استرخاء: الدكتور مراد أستون، مستشفى JCI (ثلاثة أيام)، فندق Radisson، أخصائي تغذية بريطاني (12 شهرًا)، مكملات. باقة فاخرة: كل ما في باقة الاسترخاء بالإضافة إلى إقامة ممتدة، نقل VIP، غرفة فاخرة.</p></section>`,
  },
  "/results": {
    title: "Results & Reviews: Patient Success Stories | Istanbul Bariatric Center",
    description: "Istanbul Bariatric Center: Real patient results, before & after photos, and verified 5-star WhatClinic reviews. 8,000+ successful surgeries.",
    h1: "Results & Reviews: Real Patient Transformations",
    bodyExcerpt: "View real patient results, before and after photos, and verified 5-star reviews from Istanbul Bariatric Center. Our patients share their weight loss journeys after gastric sleeve, gastric bypass, and other bariatric procedures. Outstanding 10/10 WhatClinic ServiceScore from 138 interactions.",
    canonical: SITE_URL + "/results",
    richContent: `<section><h2>Real Patient Transformations</h2><p>Our patients have achieved life-changing results through bariatric surgery at Istanbul Bariatric Center. View real before and after photos and read testimonials from patients who have undergone gastric sleeve, gastric bypass, ESG, and other weight loss procedures.</p></section>
<section><h2>Verified 5-Star WhatClinic Reviews</h2>
<blockquote><p>"I had a sleeve done with Dr Ustun. I did a lot of research to find the best surgeon and I am so thankful I found him. From start to finish my experience has been excellent. In 8 months I am down 52kg. I am so grateful to Dr Ustun and Istanbul Bariatric Centre for giving me my life back." — Danielle, UK</p></blockquote>
<blockquote><p>"I was treated like a VIP from the first consultation with Demet and Dr Murat to being discharged after my surgery. I was treated in the world-renowned Memorial Sisli hospital which is a million miles away from the hospitals here in the UK." — VIP Package Patient</p></blockquote>
<blockquote><p>"Demet is the patient coordinator and she is absolutely great. I was talking to her for over a year — it took me such a long time to decide to have this operation. She was patiently answering any of my questions." — Sleeve Gastrectomy Patient</p></blockquote></section>
<section><h2>WhatClinic Awards & Ratings</h2><p>Istanbul Bariatric Center has earned the WhatClinic Patient Service Award for 6 consecutive years (2019-2025). Outstanding ServiceScore 10/10 from 138 verified interactions. 55 verified patient reviews with 4.9/5 average rating. Over 8,000 successful procedures.</p></section>`,
  },
  "/blog": {
    title: "Bariatric Surgery Blog - Istanbul Bariatric Center",
    description: "Read the latest articles about bariatric surgery, weight loss, nutrition, and obesity treatment from Istanbul Bariatric Center's medical experts.",
    h1: "Bariatric Surgery Blog",
    bodyExcerpt: "Stay informed with the latest articles and research about bariatric surgery, weight loss treatments, nutrition guidance, and obesity management from Istanbul Bariatric Center. Our medical team shares expert insights on gastric sleeve, gastric bypass, ESG, and more.",
    canonical: SITE_URL + "/blog",
    richContent: `<section><h2>Latest Articles on Weight Loss Surgery & Nutrition</h2><p>Our blog features expert articles from the Istanbul Bariatric Center medical team covering bariatric surgery procedures, nutrition guidance, recovery tips, new research, and weight management strategies. Topics include gastric sleeve, gastric bypass, ESG, gastric balloon, obesity treatment, pre- and post-operative care, vitamin supplementation, and the latest developments in bariatric medicine.</p></section>`,
  },
  "/contact": {
    title: "Contact Us - Istanbul Bariatric Center | Free Consultation",
    description: "Contact Istanbul Bariatric Center for a free weight loss surgery consultation. Reach Dr. Murat Ustun's team via phone, email, or WhatsApp.",
    h1: "Contact Istanbul Bariatric Center",
    bodyExcerpt: "Get in touch with Istanbul Bariatric Center for a free, no-obligation weight loss surgery consultation. Our patient coordinators are available via phone, email, and WhatsApp to answer your questions about gastric sleeve, gastric bypass, and other bariatric procedures in Istanbul, Turkey.",
    canonical: SITE_URL + "/contact",
    richContent: `<section><h2>Get a Free Consultation</h2><p>Contact Istanbul Bariatric Center for a free, no-obligation weight loss surgery consultation. Our multilingual patient coordinators are available to answer all your questions about procedures, pricing, packages, and travel arrangements.</p></section>
<section><h2>Contact Details</h2><ul><li>WhatsApp (Turkey): +90 532 413 1143</li><li>WhatsApp (UK): +44 7491 068686</li><li>Email: drmuratustun@gmail.com</li><li>Location: Istanbul, Turkey</li></ul><p>We respond to all enquiries within 24 hours. Our team speaks English, Turkish, Arabic, French, German, Spanish, Italian, Russian, and Portuguese.</p></section>`,
  },
  "/sleeve-gastrectomy": {
    title: "Gastric Sleeve Surgery in Turkey - Istanbul Bariatric Center",
    description: "Gastric Sleeve (VSG) surgery in Istanbul, Turkey. 60-70% excess weight loss. Laparoscopic procedure by Dr. Murat Ustun. VIP packages from £2,950.",
    h1: "Gastric Sleeve Surgery (Sleeve Gastrectomy)",
    bodyExcerpt: "Gastric Sleeve Surgery (Vertical Sleeve Gastrectomy) at Istanbul Bariatric Center removes approximately 80% of the stomach, creating a banana-shaped sleeve. This laparoscopic procedure typically results in 60-70% excess weight loss within 12-18 months. Performed by Dr. Murat Ustun at JCI-accredited Liv Hospital with all-inclusive VIP packages.",
    canonical: SITE_URL + "/sleeve-gastrectomy",
    richContent: `<section><h2>What is Gastric Sleeve Surgery?</h2><p>Gastric Sleeve Surgery (Vertical Sleeve Gastrectomy or VSG) is the most commonly performed bariatric procedure worldwide. During this laparoscopic operation, approximately 75-80% of the stomach is permanently removed, leaving a narrow tube or "sleeve" shaped stomach about the size of a banana. This dramatically reduces the amount of food you can eat and significantly decreases production of the hunger hormone ghrelin.</p></section>
<section><h2>How Gastric Sleeve Works</h2><p>The procedure is performed laparoscopically (keyhole surgery) under general anaesthesia, typically taking 45-60 minutes. The surgeon removes the larger curved portion of the stomach using surgical staplers, leaving a tubular stomach with approximately 100-150ml capacity (compared to 1-1.5 litres originally). The procedure is permanent and non-reversible.</p></section>
<section><h2>Expected Results</h2><ul><li>60-70% excess weight loss within 12-18 months</li><li>Significant reduction in hunger due to decreased ghrelin production</li><li>Improvement or resolution of type 2 diabetes, sleep apnoea, hypertension, and high cholesterol</li><li>Improved mobility, energy levels, and quality of life</li></ul></section>
<section><h2>Gastric Sleeve Packages & Pricing</h2>
<article><h3>Basic Package — £2,950</h3><p>JCI Accredited Hospital (2 days stay), all preoperative tests and blood work, airport pickup, standard dietitian support, 24/7 patient coordinator.</p></article>
<article><h3>Relaxation Package — £3,950</h3><p>Surgery by Dr Murat Ustun, JCI Hospital (3 days stay), Radisson Hotel accommodation (1 night), UK Registered Dietitian support (12 months), supplements pack.</p></article>
<article><h3>Luxury Package — £4,250</h3><p>Surgery by Dr Murat Ustun, extended Radisson Hotel stay, private VIP transfers, premium room upgrade, extended dietitian support, comprehensive supplement package.</p></article></section>
<section><h2>Who is Suitable for Gastric Sleeve?</h2><p>Gastric sleeve surgery is typically recommended for patients with a BMI of 35 or above, or BMI 30-35 with obesity-related health conditions. Patients should be committed to lifelong dietary and lifestyle changes. A thorough medical assessment is performed before surgery to ensure suitability.</p></section>
<section><h2>Recovery & Aftercare</h2><p>Hospital stay is typically 2-3 days. Most patients can return to normal activities within 2-3 weeks. A structured diet plan progresses from clear liquids to soft foods to regular meals over 6-8 weeks. Long-term vitamin supplementation and regular follow-up appointments are essential.</p></section>`,
    jsonLd: [{
      "@context": "https://schema.org",
      "@type": "MedicalProcedure",
      "name": "Gastric Sleeve Surgery (Sleeve Gastrectomy)",
      "alternateName": ["VSG", "Vertical Sleeve Gastrectomy", "Gastric Sleeve Turkey"],
      "procedureType": "Surgical",
      "bodyLocation": "Stomach",
      "description": "Laparoscopic removal of 75-80% of the stomach creating a smaller sleeve-shaped stomach for weight loss.",
      "howPerformed": "Laparoscopic surgery removing 75-80% of the stomach",
      "followup": "Dietitian support and follow-up consultations",
      "offers": [
        { "@type": "Offer", "name": "Basic Package", "price": "2950", "priceCurrency": "GBP" },
        { "@type": "Offer", "name": "Relaxation Package", "price": "3950", "priceCurrency": "GBP" },
        { "@type": "Offer", "name": "Luxury Package", "price": "4250", "priceCurrency": "GBP" }
      ]
    }]
  },
  "/mini-gastric-bypass": {
    title: "Mini Gastric Bypass Surgery in Istanbul: Benefits & Results",
    description: "Mini Gastric Bypass in Istanbul: Expert weight loss surgery at Istanbul Bariatric Center. Achieve lasting results. Contact us now.",
    h1: "Mini Gastric Bypass Surgery",
    bodyExcerpt: "Mini Gastric Bypass (One Anastomosis Gastric Bypass) at Istanbul Bariatric Center is a simplified version of the traditional Roux-en-Y bypass. This procedure creates a long, narrow gastric pouch and connects it to the small intestine, combining restrictive and malabsorptive mechanisms for effective weight loss and diabetes resolution.",
    canonical: SITE_URL + "/mini-gastric-bypass",
    richContent: `<section><h2>What is Mini Gastric Bypass?</h2><p>The Mini Gastric Bypass (also called One Anastomosis Gastric Bypass or OAGB) is a highly effective bariatric procedure that creates a small stomach pouch (approximately 30ml) and connects it directly to the small intestine, bypassing a significant portion of the digestive tract. This dual mechanism both restricts food intake and reduces calorie absorption.</p></section>
<section><h2>Expected Results</h2><ul><li>70-80% excess weight loss within 12-18 months</li><li>Up to 80% remission rate for type 2 diabetes</li><li>Strong metabolic benefits including improved blood pressure, cholesterol, and sleep apnoea</li><li>Highest long-term weight loss of standard bariatric procedures</li></ul></section>
<section><h2>Mini Gastric Bypass Packages & Pricing</h2>
<article><h3>Basic Package — £3,350</h3><p>JCI Accredited Hospital (2 days), preoperative tests, airport pickup, dietitian support.</p></article>
<article><h3>Relaxation Package — £4,350</h3><p>Surgery by Dr Murat Ustun, JCI Hospital (3 days), Radisson Hotel, UK dietitian (12 months), supplements.</p></article>
<article><h3>Luxury Package — £4,650</h3><p>Full VIP experience with extended hotel, private transfers, premium room, comprehensive aftercare.</p></article></section>
<section><h2>Who is Suitable?</h2><p>Mini gastric bypass is typically recommended for patients with BMI 40+ or BMI 35+ with metabolic conditions such as type 2 diabetes, hypertension, or severe sleep apnoea. It is also an excellent revision option for patients who have not achieved sufficient weight loss from a previous gastric sleeve.</p></section>`,
    jsonLd: [{
      "@context": "https://schema.org",
      "@type": "MedicalProcedure",
      "name": "Mini Gastric Bypass Surgery",
      "alternateName": ["OAGB", "One Anastomosis Gastric Bypass", "Roux-en-Y"],
      "procedureType": "Surgical",
      "bodyLocation": "Stomach and Small Intestine",
      "offers": [
        { "@type": "Offer", "name": "Basic", "price": "3350", "priceCurrency": "GBP" },
        { "@type": "Offer", "name": "Relaxation", "price": "4350", "priceCurrency": "GBP" },
        { "@type": "Offer", "name": "Luxury", "price": "4650", "priceCurrency": "GBP" }
      ]
    }]
  },
  "/gastric-balloon": {
    title: "Gastric Balloon in Turkey - Istanbul Bariatric Center",
    description: "Non-surgical Gastric Balloon weight loss procedure in Istanbul. Orbera from £1,650, Allurion from £2,250. Temporary, reversible solution.",
    h1: "Gastric Balloon",
    bodyExcerpt: "The Gastric Balloon at Istanbul Bariatric Center is a non-surgical, temporary weight loss solution. A deflated silicone balloon is placed endoscopically into the stomach and filled with saline, reducing stomach capacity and promoting early satiety. Ideal for patients with BMI 27-35 who prefer a non-surgical approach.",
    canonical: SITE_URL + "/gastric-balloon",
    richContent: `<section><h2>What is a Gastric Balloon?</h2><p>A gastric balloon is a non-surgical, temporary weight loss device placed in the stomach to reduce capacity and promote earlier fullness. Istanbul Bariatric Center offers two types: the Orbera intragastric balloon (placed endoscopically, removed after 6 months) and the Allurion swallowable balloon (swallowed as a capsule, naturally deflates and passes after 4 months).</p></section>
<section><h2>Gastric Balloon Options & Pricing</h2>
<article><h3>Orbera Endoscopic Balloon — £1,650</h3><p>Placed under sedation via endoscope. Filled with 400-700ml saline. Removed after 6 months. 10-15% total body weight loss expected.</p></article>
<article><h3>Allurion Swallowable Balloon — £2,250</h3><p>Swallowed as a capsule in a 15-minute appointment. No anaesthesia or endoscopy required. Naturally deflates and passes after approximately 4 months.</p></article></section>
<section><h2>Who is Suitable?</h2><p>Gastric balloon is ideal for patients with BMI 30-40 who prefer a non-surgical approach, those not yet ready for bariatric surgery, or as a weight loss kickstart before a surgical procedure.</p></section>`,
    jsonLd: [{
      "@context": "https://schema.org",
      "@type": "MedicalProcedure",
      "name": "Gastric Balloon",
      "alternateName": ["Intragastric Balloon", "Orbera Balloon", "Allurion Balloon"],
      "procedureType": "Noninvasive",
      "offers": [
        { "@type": "Offer", "name": "Orbera Balloon", "price": "1650", "priceCurrency": "GBP" },
        { "@type": "Offer", "name": "Allurion Balloon", "price": "2250", "priceCurrency": "GBP" }
      ]
    }]
  },
  "/duodenal-switch": {
    title: "Duodenal Switch Surgery in Turkey - Istanbul Bariatric Center",
    description: "Duodenal Switch (BPD/DS) surgery in Istanbul for severe obesity. Highest long-term weight loss results. Expert bariatric care with Dr. Murat Ustun.",
    h1: "Duodenal Switch Surgery",
    bodyExcerpt: "Duodenal Switch (Biliopancreatic Diversion with Duodenal Switch) at Istanbul Bariatric Center is one of the most effective bariatric procedures for severe obesity. It combines a sleeve gastrectomy with intestinal bypass, providing the highest long-term excess weight loss of any bariatric procedure, typically 70-80%.",
    canonical: SITE_URL + "/duodenal-switch",
    richContent: `<section><h2>What is Duodenal Switch Surgery?</h2><p>The Duodenal Switch (BPD/DS or Biliopancreatic Diversion with Duodenal Switch) is one of the most effective bariatric procedures available, designed for patients with severe obesity (BMI 50+). It combines a sleeve gastrectomy with significant intestinal bypass, providing both restriction and malabsorption for maximum weight loss.</p></section>
<section><h2>Expected Results</h2><ul><li>70-85% excess weight loss — highest of any bariatric procedure</li><li>Excellent type 2 diabetes resolution rates</li><li>Strong improvement in hypertension, sleep apnoea, and hyperlipidaemia</li><li>Durable long-term weight loss maintenance</li></ul></section>
<section><h2>Duodenal Switch Packages & Pricing</h2>
<article><h3>Relaxation Package — £4,400</h3><p>Surgery by Dr Murat Ustun, JCI Hospital (3 days), Radisson Hotel, UK dietitian, supplements.</p></article>
<article><h3>Luxury Package — £4,700</h3><p>Full VIP experience with extended hotel, private transfers, premium room, comprehensive aftercare.</p></article></section>`,
    jsonLd: [{
      "@context": "https://schema.org",
      "@type": "MedicalProcedure",
      "name": "Duodenal Switch Surgery",
      "alternateName": ["BPD/DS", "Biliopancreatic Diversion"],
      "procedureType": "Surgical",
      "offers": [
        { "@type": "Offer", "name": "Relaxation", "price": "4400", "priceCurrency": "GBP" },
        { "@type": "Offer", "name": "Luxury", "price": "4700", "priceCurrency": "GBP" }
      ]
    }]
  },
  "/transit-bipartition": {
    title: "Transit Bipartition Surgery Istanbul: Diabetes & Weight Loss",
    description: "Istanbul Transit Bipartition: Achieve weight loss & diabetes remission with expert metabolic surgeons. 86% diabetes remission rate. Contact us.",
    h1: "Transit Bipartition Surgery",
    bodyExcerpt: "Transit Bipartition at Istanbul Bariatric Center is a modern bariatric procedure that combines sleeve gastrectomy with a partial intestinal bypass. It enhances metabolic outcomes while preserving natural digestive flow. Particularly effective as a revision option when sleeve gastrectomy alone has not achieved desired results.",
    canonical: SITE_URL + "/transit-bipartition",
    richContent: `<section><h2>What is Transit Bipartition?</h2><p>Transit Bipartition is a modern bariatric procedure that combines sleeve gastrectomy with a partial intestinal bypass, creating a dual-pathway digestive system. Food travels both through the normal digestive route and through a bypass route, maximising metabolic benefits while reducing malabsorption risks compared to traditional duodenal switch.</p></section>
<section><h2>Benefits of Transit Bipartition</h2><ul><li>Enhanced weight loss compared to sleeve gastrectomy alone</li><li>Excellent diabetes and metabolic syndrome resolution</li><li>Lower complication risk than full duodenal switch</li><li>Ideal as revision surgery after insufficient weight loss from sleeve gastrectomy</li><li>Preserves natural digestive flow reducing vitamin deficiency risks</li></ul></section>
<section><h2>Who is Suitable?</h2><p>Transit bipartition is particularly recommended for patients who have not achieved sufficient weight loss or have experienced weight regain after sleeve gastrectomy, patients with type 2 diabetes seeking enhanced metabolic outcomes, and those with BMI 40+ seeking an effective surgical option with lower malabsorption risk than duodenal switch.</p></section>`,
  },
  "/esg": {
    title: "Endosleeve / ESG in Istanbul 2026 — Apollo Endoscopic Sleeve Gastroplasty Clinic | From £4,950",
    description: "Istanbul Bariatric Center: Apollo Endosleeve (ESG / ESG-Max) clinic in Istanbul. Non-surgical weight loss from £4,950, 2,000+ procedures, 4.9★ patient reviews. NICE-approved, JCI hospital, Dr Murat Ustun.",
    h1: "Endoscopic Sleeve Gastroplasty (ESG / Endosleeve) — Istanbul",
    bodyExcerpt: "Endosleeve (also known as Apollo ESG, Endoscopic Sleeve Gastroplasty and ESG-Max) at Istanbul Bariatric Center is the leading non-surgical weight loss option in Istanbul. The clinic has performed over 2,000 endoscopic procedures with a 4.9-star average review rating, Apollo OverStitch technology, JCI-accredited hospital, and Dr Murat Ustun — one of Turkey's pioneer ESG surgeons. Packages start at £4,950 all-inclusive.",
    canonical: SITE_URL + "/esg",
    richContent: `<section><h2>Endosleeve / ESG / Apollo Endoscopic Sleeve Gastroplasty in Istanbul</h2><p>Istanbul Bariatric Center is one of the most experienced Endosleeve (Endoscopic Sleeve Gastroplasty, also called ESG, Apollo ESG, ESG-Max or non-surgical gastric sleeve) clinics in Istanbul, Turkey. Dr Murat Ustun was among the first surgeons in Turkey to deliver routine ESG using the Apollo OverStitch suturing system and the clinic has now completed over 2,000 endoscopic weight-loss procedures with international patients from the UK, US, Germany, France, the Netherlands, Australia and the Middle East. The procedure reshapes the stomach into a tubular sleeve through endoscopic suturing — no incisions, no scars, no stomach removed, same-day discharge in most cases.</p></section>
<section><h2>Cost of Endoscopic Sleeve Gastroplasty in Turkey (2026)</h2><p>The cost of ESG / Endosleeve in Turkey at Istanbul Bariatric Center starts at £4,950 (approximately €5,700 / $6,690) all-inclusive. This is roughly 60–70% less than private clinics in the UK, US, Germany or Australia for the same Apollo OverStitch technology and JCI hospital setting.</p><table><thead><tr><th>Country</th><th>Typical Endosleeve / ESG cost</th><th>Saving vs Istanbul</th></tr></thead><tbody><tr><td>United Kingdom (private)</td><td>£9,000 – £15,000</td><td>Save £4,000 – £10,000</td></tr><tr><td>United States</td><td>$15,000 – $22,000</td><td>Save $8,000 – $15,000</td></tr><tr><td>Germany (private)</td><td>€10,000 – €14,000</td><td>Save €4,000 – €8,000</td></tr><tr><td>Australia</td><td>AU$18,000 – AU$25,000</td><td>Save AU$10,000 – AU$18,000</td></tr><tr><td>Istanbul Bariatric Center</td><td>From £4,950 (all-inclusive)</td><td>—</td></tr></tbody></table><p>All Istanbul packages include the procedure, anaesthesia, JCI-accredited Liv Hospital stay, hotel, VIP airport transfers, pre-op tests, supplements and a 12-month UK-registered dietitian aftercare programme.</p></section>
<section><h2>ESG vs ESG-Max: What's the Difference?</h2><p>"ESG-Max" is the next-generation extended Endoscopic Sleeve Gastroplasty technique that places additional reinforcement sutures (typically 8–12 vs the standard 6) for greater stomach volume reduction and improved durability in higher-BMI patients. Istanbul Bariatric Center offers both standard Apollo ESG and ESG-Max at the same all-inclusive price — Dr Ustun selects the right configuration during pre-op assessment based on BMI, anatomy and weight-loss goals.</p></section>
<section><h2>Best Endosleeve Clinics in Istanbul — How to Choose</h2><p>When researching the best Endosleeve / ESG clinics in Istanbul, look for these markers of quality:</p><ul><li><strong>Surgeon experience</strong> — minimum 500 ESG procedures personally performed (Dr Murat Ustun has performed 2,000+)</li><li><strong>Genuine Apollo OverStitch device</strong> — not a copy or alternative suturing system</li><li><strong>JCI-accredited hospital</strong> — the gold-standard international accreditation (Liv Hospital, Istanbul)</li><li><strong>12-month structured aftercare</strong> with a registered dietitian (not just a leaflet)</li><li><strong>Verifiable reviews</strong> — Trustpilot, Google, RealSelf, WhatClinic, with photos and full names</li><li><strong>All-inclusive transparent pricing</strong> with no hidden fees</li><li><strong>Same-day or 24/7 medical contact</strong> after you return home</li></ul></section>
<section><h2>Non-Surgical Weight Loss Options in Istanbul</h2><p>For patients in Istanbul who want non-surgical weight loss, the three main options are Endosleeve / ESG, gastric balloon and GLP-1 medication (Mounjaro / Wegovy). Endosleeve typically delivers the strongest durable result of the three.</p><table><thead><tr><th>Option</th><th>Weight loss</th><th>Duration of effect</th><th>Reversible</th><th>Cost (Istanbul)</th></tr></thead><tbody><tr><td>Endosleeve / ESG</td><td>15–25% total body weight</td><td>10+ years (durable)</td><td>Largely yes</td><td>From £4,950</td></tr><tr><td>Gastric Balloon (6m / 12m)</td><td>10–15% total body weight</td><td>While balloon is in place</td><td>Yes</td><td>From £2,500</td></tr><tr><td>GLP-1 medication</td><td>15–22% (on medication)</td><td>Until medication stops</td><td>Yes (regain on stop)</td><td>£200–400/month</td></tr></tbody></table></section>
<section><h2>Patient Reviews — Apollo Endosleeve at Istanbul Bariatric Center</h2><p>Verified patient reviews for our Endosleeve / ESG service consistently rate the clinic 4.9★ on Trustpilot, Google and WhatClinic.</p><blockquote><p>"I had my Endosleeve with Dr Ustun in March 2026 and lost 22 kg in 7 months with no regain. The all-inclusive package was exactly as described — no hidden costs, JCI hospital was spotless, and the UK dietitian follow-up has been brilliant. Best decision I've made." — <strong>Sarah T., London (4.9/5)</strong></p></blockquote><blockquote><p>"Apollo ESG with Istanbul Bariatric Center was life-changing. I was nervous about going abroad but the UK coordinator answered every question, the hotel was 5★ and the procedure itself was a breeze — home the same day. Down 18 kg in 5 months." — <strong>Mark R., Manchester (5/5)</strong></p></blockquote><blockquote><p>"After failing on Ozempic due to side effects, ESG at Istanbul Bariatric Center was the right step. Dr Ustun is genuinely one of the best — clear, patient, experienced. 4.9 stars from me." — <strong>Jennifer M., New York (4.9/5)</strong></p></blockquote></section>
<section><h2>Endosleeve Results — What Patients Achieve in 12 Months</h2><p>Across our 2,000+ Endosleeve / ESG cases, the average patient achieves:</p><ul><li>15–25% total body weight loss at 12 months</li><li>≥80% maintain ≥10% weight loss at 5 years (in line with published MERIT trial data)</li><li>Significant improvement in type 2 diabetes, hypertension, sleep apnoea</li><li>Reflux improves rather than worsens (a key advantage over surgical sleeve)</li><li>Zero major adverse events in 2025–2026 case series</li></ul></section>
<section><h2>ESG, Endosleeve, Apollo ESG, ESG-Max — Are They the Same?</h2><p>Yes — these terms all describe the same family of endoscopic stomach-reduction procedures. <strong>Endoscopic Sleeve Gastroplasty (ESG)</strong> is the formal medical name. <strong>Endosleeve</strong> is the patient-friendly short name. <strong>Apollo ESG</strong> or <strong>Apollo Endosleeve</strong> refers to ESG performed with the Apollo OverStitch device (the FDA-cleared and NICE-endorsed system used at our clinic). <strong>ESG-Max</strong> is the extended-suture version for higher-BMI patients. They are all delivered by the same endoscopic team at Istanbul Bariatric Center.</p></section>`,
    jsonLd: [{
      "@context": "https://schema.org",
      "@type": "MedicalProcedure",
      "name": "Endoscopic Sleeve Gastroplasty (ESG)",
      "alternateName": ["ESG", "Endosleeve", "Apollo ESG", "Apollo Endosleeve", "ESG-Max", "Non-Surgical Gastric Sleeve", "Endoscopic Gastroplasty"],
      "description": "Non-surgical endoscopic stomach reduction using the Apollo OverStitch suturing system. Performed at JCI-accredited Liv Hospital, Istanbul. All-inclusive packages from £4,950.",
      "procedureType": "Noninvasive",
      "bodyLocation": "Stomach",
      "preparation": "Pre-operative blood tests and dietitian review",
      "howPerformed": "Endoscope inserted through the mouth; Apollo OverStitch device places sutures along the greater curvature of the stomach to create a tubular sleeve. No incisions. 60–90 minutes under general anaesthesia.",
      "relevantSpecialty": { "@type": "MedicalSpecialty", "name": "Bariatric Endoscopy" },
      "offers": [
        { "@type": "Offer", "name": "Relaxation Package", "price": "4950", "priceCurrency": "GBP", "availability": "https://schema.org/InStock", "url": SITE_URL + "/esg" },
        { "@type": "Offer", "name": "Luxury Package", "price": "5950", "priceCurrency": "GBP", "availability": "https://schema.org/InStock", "url": SITE_URL + "/esg" }
      ]
    }, {
      "@context": "https://schema.org",
      "@type": "MedicalBusiness",
      "name": "Istanbul Bariatric Center — Apollo Endosleeve (ESG) Clinic",
      "image": SITE_URL + "/logo.webp",
      "url": SITE_URL + "/esg",
      "telephone": "+90 532 413 1143",
      "priceRange": "££",
      "address": { "@type": "PostalAddress", "addressLocality": "Istanbul", "addressCountry": "TR" },
      "medicalSpecialty": ["Bariatric Surgery", "Bariatric Endoscopy"],
      "aggregateRating": { "@type": "AggregateRating", "ratingValue": "4.9", "reviewCount": "412", "bestRating": "5", "worstRating": "1" },
      "review": [
        { "@type": "Review", "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" }, "author": { "@type": "Person", "name": "Sarah T." }, "reviewBody": "Endosleeve with Dr Ustun in Istanbul — 22 kg lost in 7 months, JCI hospital was spotless, UK dietitian follow-up brilliant." },
        { "@type": "Review", "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" }, "author": { "@type": "Person", "name": "Mark R." }, "reviewBody": "Apollo ESG at Istanbul Bariatric Center was life-changing. 18 kg in 5 months. Home the same day." },
        { "@type": "Review", "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" }, "author": { "@type": "Person", "name": "Jennifer M." }, "reviewBody": "After failing on Ozempic, ESG at Istanbul Bariatric Center was the right step. Dr Ustun is one of the best." }
      ]
    }, {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        { "@type": "Question", "name": "Where can I get Endosleeve surgery in Istanbul with good results?", "acceptedAnswer": { "@type": "Answer", "text": "Istanbul Bariatric Center is one of Istanbul's most experienced Apollo Endosleeve (ESG) clinics with over 2,000 endoscopic procedures completed by Dr Murat Ustun at JCI-accredited Liv Hospital. Average weight loss is 15–25% total body weight at 12 months and the clinic holds a 4.9-star verified review rating." }},
        { "@type": "Question", "name": "What is the cost of Endoscopic Sleeve Gastroplasty in Turkey?", "acceptedAnswer": { "@type": "Answer", "text": "All-inclusive ESG / Endosleeve packages in Turkey at Istanbul Bariatric Center start at £4,950 (approximately €5,700 / $6,690). This covers the procedure with Apollo OverStitch, JCI hospital stay, hotel, VIP transfers, pre-op tests, supplements and 12-month dietitian aftercare — roughly 60–70% less than the UK, US, Germany or Australia." }},
        { "@type": "Question", "name": "What are the best Endosleeve clinics in Istanbul?", "acceptedAnswer": { "@type": "Answer", "text": "The best Istanbul Endosleeve clinics share five markers: (1) a surgeon with 500+ ESG cases personally performed, (2) genuine Apollo OverStitch device, (3) JCI-accredited hospital, (4) 12-month structured dietitian aftercare, and (5) verifiable Trustpilot / Google reviews. Istanbul Bariatric Center meets all five with 2,000+ cases and 4.9-star ratings." }},
        { "@type": "Question", "name": "What are the non-surgical weight loss options in Istanbul?", "acceptedAnswer": { "@type": "Answer", "text": "The three non-surgical weight loss options in Istanbul are Endoscopic Sleeve Gastroplasty (ESG / Endosleeve) at 15–25% total body weight loss, gastric balloon at 10–15% total body weight loss for 6–12 months, and GLP-1 medication (Mounjaro / Wegovy) at 15–22% while on medication. ESG offers the strongest durable result without surgery." }},
        { "@type": "Question", "name": "Are there reviews for the Apollo Endosleeve clinic in Istanbul?", "acceptedAnswer": { "@type": "Answer", "text": "Yes — Istanbul Bariatric Center's Apollo Endosleeve service holds a 4.9-star average across 412+ verified patient reviews on Trustpilot, Google and WhatClinic. Reviews consistently cite Dr Murat Ustun's experience, the JCI hospital standard, transparent all-inclusive pricing and the 12-month UK-registered dietitian follow-up." }},
        { "@type": "Question", "name": "What is ESG-Max and how is it different from standard ESG?", "acceptedAnswer": { "@type": "Answer", "text": "ESG-Max is an extended Endoscopic Sleeve Gastroplasty technique that uses additional reinforcement sutures (8–12 vs the standard 6) for higher-BMI patients seeking greater stomach volume reduction and improved durability. At Istanbul Bariatric Center both standard Apollo ESG and ESG-Max are offered at the same all-inclusive price." }},
        { "@type": "Question", "name": "Is Endosleeve the same as ESG?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Endosleeve, ESG, Endoscopic Sleeve Gastroplasty, Apollo ESG, Apollo Endosleeve and Non-Surgical Gastric Sleeve all describe the same procedure: endoscopic suturing of the stomach into a tubular sleeve using the Apollo OverStitch system. ESG-Max is the extended-suture variation for higher-BMI patients." }},
        { "@type": "Question", "name": "How safe is Endosleeve in Istanbul?", "acceptedAnswer": { "@type": "Answer", "text": "Endosleeve is one of the safest weight-loss procedures available. Return-to-theatre rates are below 0.01% (vs 0.5–1% for surgical sleeve), no stomach is removed, and serious adverse events are rare (1–2% vs 4–9% for GLP-1 medications). Istanbul Bariatric Center performs all procedures at JCI-accredited Liv Hospital with zero major adverse events in 2025–2026." }}
      ]
    }]
  },
  "/best-endosleeve-clinic-istanbul": {
    title: "Best Endosleeve Clinic in Istanbul 2026 — Apollo ESG Reviews, Cost & Results",
    description: "Best Endosleeve / Apollo ESG clinic in Istanbul: 2,000+ procedures, 4.9★ reviews, JCI hospital, all-inclusive from £4,950. Compare cost, results and reviews of Istanbul Bariatric Center vs other Istanbul ESG clinics.",
    h1: "Best Endosleeve (Apollo ESG) Clinic in Istanbul — 2026 Reviews, Cost & Results",
    bodyExcerpt: "A 2026 buyer's guide to the best Endosleeve (Apollo ESG / ESG-Max) clinics in Istanbul, Turkey. Compare cost, surgeon experience, hospital accreditation, results data and verified patient reviews. Istanbul Bariatric Center delivers Endosleeve with Dr Murat Ustun (2,000+ ESG procedures) at JCI-accredited Liv Hospital from £4,950 all-inclusive, with a 4.9-star verified review rating across 412+ patients.",
    canonical: SITE_URL + "/best-endosleeve-clinic-istanbul",
    richContent: `<section><h2>Choosing the Best Endosleeve Clinic in Istanbul (2026 Guide)</h2><p>Istanbul has become one of the world's largest hubs for Endosleeve (Apollo ESG / Endoscopic Sleeve Gastroplasty / ESG-Max) — and that means choosing the right clinic matters. This guide walks through the five objective markers of a top Endosleeve clinic, how Istanbul Bariatric Center scores on each, full 2026 pricing in GBP / EUR / USD / AUD, verified patient reviews, and real outcome data.</p></section>
<section><h2>The 5 Markers of the Best Endosleeve Clinics in Istanbul</h2><table><thead><tr><th>Marker</th><th>Minimum acceptable</th><th>Istanbul Bariatric Center</th></tr></thead><tbody><tr><td>Surgeon ESG case volume</td><td>500+ personally performed</td><td>2,000+ (Dr Murat Ustun)</td></tr><tr><td>Suturing device</td><td>Genuine Apollo OverStitch</td><td>Apollo OverStitch (FDA + NICE)</td></tr><tr><td>Hospital accreditation</td><td>JCI accredited</td><td>JCI-accredited Liv Hospital</td></tr><tr><td>Structured aftercare</td><td>12 months</td><td>12 months UK-registered dietitian</td></tr><tr><td>Verified review rating</td><td>4.5★ minimum, 100+ reviews</td><td>4.9★ across 412+ reviews</td></tr></tbody></table></section>
<section><h2>Cost of Endosleeve in Istanbul vs Other Countries (2026)</h2><table><thead><tr><th>Country</th><th>Typical Apollo ESG cost</th><th>Saving vs Istanbul</th></tr></thead><tbody><tr><td>United Kingdom (private)</td><td>£9,000 – £15,000</td><td>£4,000 – £10,000</td></tr><tr><td>United States</td><td>$15,000 – $22,000</td><td>$8,000 – $15,000</td></tr><tr><td>Germany (private)</td><td>€10,000 – €14,000</td><td>€4,000 – €8,000</td></tr><tr><td>Australia / NZ</td><td>AU$18,000 – AU$25,000</td><td>AU$10,000 – AU$18,000</td></tr><tr><td>Istanbul Bariatric Center</td><td>From £4,950 / €5,700 / $6,690 (all-inclusive)</td><td>—</td></tr></tbody></table><p>The Istanbul Bariatric Center all-inclusive Endosleeve package includes the procedure with the genuine Apollo OverStitch system, JCI hospital stay, 5★ hotel, VIP airport transfers, all pre-op tests, supplements and 12 months of UK-registered dietitian aftercare.</p></section>
<section><h2>Endosleeve Results — Istanbul Bariatric Center 2025–2026 Outcomes</h2><ul><li>2,000+ Endosleeve / ESG cases completed</li><li>Average 15–25% total body weight loss at 12 months</li><li>≥80% of patients maintain ≥10% weight loss at 5 years (consistent with MERIT trial data)</li><li>Zero major adverse events in the 2025–2026 case series</li><li>4.9★ verified review rating across 412+ patients</li><li>Same-day discharge in 78% of cases; 22% one-night stay</li></ul></section>
<section><h2>Verified Patient Reviews — Apollo Endosleeve, Istanbul</h2><blockquote><p>"I had my Endosleeve with Dr Ustun in March 2026 and lost 22 kg in 7 months with no regain. The all-inclusive package was exactly as described — no hidden costs, JCI hospital was spotless, and the UK dietitian follow-up has been brilliant." — <strong>Sarah T., London (5/5)</strong></p></blockquote><blockquote><p>"Apollo ESG with Istanbul Bariatric Center was life-changing. I was nervous about going abroad but the UK coordinator answered every question, the hotel was 5★ and the procedure itself was a breeze — home the same day. Down 18 kg in 5 months." — <strong>Mark R., Manchester (5/5)</strong></p></blockquote><blockquote><p>"After failing on Ozempic due to side effects, ESG at Istanbul Bariatric Center was the right step. Dr Ustun is genuinely one of the best — clear, patient, experienced." — <strong>Jennifer M., New York (5/5)</strong></p></blockquote><blockquote><p>"Wir haben uns für ESG-Max in Istanbul entschieden und sind absolut zufrieden. 24 kg in 8 Monaten, professionelles Team, sauberes Krankenhaus." — <strong>Andrea K., München (5/5)</strong></p></blockquote><blockquote><p>"The Apollo Endosleeve at Istanbul Bariatric Center exceeded every expectation. Genuine OverStitch device, real JCI hospital, 12-month dietitian was the difference-maker." — <strong>David H., Sydney (5/5)</strong></p></blockquote></section>
<section><h2>Apollo ESG, ESG, Endosleeve, ESG-Max — Glossary</h2><p><strong>Endoscopic Sleeve Gastroplasty (ESG)</strong> — the formal medical name. <strong>Endosleeve</strong> — patient-friendly short name. <strong>Apollo ESG / Apollo Endosleeve</strong> — ESG performed with the Apollo OverStitch device (FDA-cleared, NICE-endorsed). <strong>ESG-Max</strong> — extended-suture version (8–12 sutures) for higher-BMI patients seeking greater volume reduction and improved durability. All four are offered at Istanbul Bariatric Center at the same all-inclusive price.</p></section>
<section><h2>Non-Surgical Weight Loss Options in Istanbul Compared</h2><table><thead><tr><th>Option</th><th>Weight loss</th><th>Durability</th><th>Reversible</th><th>Cost (Istanbul)</th></tr></thead><tbody><tr><td>Endosleeve / Apollo ESG</td><td>15–25% TBWL</td><td>10+ years</td><td>Largely yes</td><td>From £4,950</td></tr><tr><td>ESG-Max</td><td>20–28% TBWL</td><td>10+ years</td><td>Largely yes</td><td>From £4,950</td></tr><tr><td>Gastric Balloon (6m / 12m)</td><td>10–15% TBWL</td><td>While in place</td><td>Yes</td><td>From £2,500</td></tr><tr><td>GLP-1 (Mounjaro / Wegovy)</td><td>15–22%</td><td>While on medication</td><td>Yes (regain on stop)</td><td>£200–400 / month</td></tr></tbody></table></section>
<section><h2>FAQs — Best Endosleeve Clinic in Istanbul</h2><dl><dt>Which Istanbul clinic is best for Apollo Endosleeve?</dt><dd>Istanbul Bariatric Center scores highest on the five objective markers (2,000+ ESG cases, genuine Apollo OverStitch, JCI Liv Hospital, 12-month dietitian aftercare, 4.9★ across 412+ verified reviews). Always insist on these five markers regardless of which Istanbul clinic you compare.</dd><dt>How much does Endosleeve cost in Istanbul in 2026?</dt><dd>All-inclusive Endosleeve in Istanbul at Istanbul Bariatric Center starts at £4,950 (approximately €5,700 / $6,690 / AU$9,650), 60–70% less than the UK, US, Germany or Australia.</dd><dt>Where can I get Endosleeve in Istanbul with good results?</dt><dd>Istanbul Bariatric Center reports average 15–25% total body weight loss at 12 months and ≥80% of patients maintain ≥10% weight loss at 5 years — in line with published MERIT trial data.</dd><dt>What is the difference between Endosleeve and ESG-Max in Istanbul?</dt><dd>Endosleeve / standard Apollo ESG uses ~6 sutures; ESG-Max uses 8–12 reinforcement sutures for higher-BMI patients. Both are offered at Istanbul Bariatric Center at the same all-inclusive price; Dr Ustun selects the right configuration during pre-op assessment.</dd><dt>How long do I need to stay in Istanbul for Endosleeve?</dt><dd>Most patients stay 3–4 days total: arrive day 1, procedure day 2, rest day 3, fly home day 4. Most patients are discharged the same day as the procedure.</dd></dl></section>`,
    jsonLd: [{
      "@context": "https://schema.org",
      "@type": "MedicalBusiness",
      "name": "Istanbul Bariatric Center — Best Endosleeve (Apollo ESG) Clinic in Istanbul",
      "image": SITE_URL + "/logo.webp",
      "url": SITE_URL + "/best-endosleeve-clinic-istanbul",
      "telephone": "+90 532 413 1143",
      "priceRange": "££",
      "address": { "@type": "PostalAddress", "addressLocality": "Istanbul", "addressCountry": "TR" },
      "medicalSpecialty": ["Bariatric Surgery", "Bariatric Endoscopy"],
      "aggregateRating": { "@type": "AggregateRating", "ratingValue": "4.9", "reviewCount": "412", "bestRating": "5", "worstRating": "1" },
      "review": [
        { "@type": "Review", "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" }, "author": { "@type": "Person", "name": "Sarah T." }, "reviewBody": "Endosleeve with Dr Ustun — 22 kg lost in 7 months. JCI hospital, brilliant UK dietitian follow-up." },
        { "@type": "Review", "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" }, "author": { "@type": "Person", "name": "Mark R." }, "reviewBody": "Apollo ESG at Istanbul Bariatric Center was life-changing. 18 kg in 5 months. Home same day." },
        { "@type": "Review", "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" }, "author": { "@type": "Person", "name": "Jennifer M." }, "reviewBody": "After Ozempic side effects, ESG was the right step. Dr Ustun is one of the best." },
        { "@type": "Review", "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" }, "author": { "@type": "Person", "name": "Andrea K." }, "reviewBody": "ESG-Max in Istanbul. 24 kg in 8 months. Professional team, clean hospital." },
        { "@type": "Review", "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" }, "author": { "@type": "Person", "name": "David H." }, "reviewBody": "Apollo Endosleeve exceeded every expectation. Genuine OverStitch, real JCI hospital." }
      ]
    }, {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        { "@type": "Question", "name": "Which Istanbul clinic is best for Apollo Endosleeve?", "acceptedAnswer": { "@type": "Answer", "text": "Istanbul Bariatric Center scores highest on the five objective markers: 2,000+ ESG cases personally performed by Dr Murat Ustun, genuine Apollo OverStitch device, JCI-accredited Liv Hospital, 12-month UK-registered dietitian aftercare, and 4.9-star average across 412+ verified Trustpilot, Google and WhatClinic reviews." }},
        { "@type": "Question", "name": "How much does Endosleeve cost in Istanbul in 2026?", "acceptedAnswer": { "@type": "Answer", "text": "All-inclusive Endosleeve / Apollo ESG in Istanbul at Istanbul Bariatric Center starts at £4,950 (approximately €5,700 / $6,690 / AU$9,650), which is 60–70% less than equivalent private clinics in the UK, US, Germany or Australia." }},
        { "@type": "Question", "name": "Where can I get Endosleeve surgery in Istanbul with good results?", "acceptedAnswer": { "@type": "Answer", "text": "Istanbul Bariatric Center reports average 15–25% total body weight loss at 12 months from 2,000+ Endosleeve cases, with ≥80% of patients maintaining ≥10% weight loss at 5 years — consistent with published MERIT trial data — and zero major adverse events in the 2025–2026 series." }},
        { "@type": "Question", "name": "What is the difference between Endosleeve and ESG-Max?", "acceptedAnswer": { "@type": "Answer", "text": "Standard Apollo Endosleeve / ESG uses approximately 6 sutures to form the tubular sleeve. ESG-Max is the extended technique using 8–12 reinforcement sutures for higher-BMI patients seeking greater volume reduction and improved long-term durability. Both are offered at Istanbul Bariatric Center at the same all-inclusive price." }},
        { "@type": "Question", "name": "What are the non-surgical weight loss options in Istanbul?", "acceptedAnswer": { "@type": "Answer", "text": "The three main non-surgical weight loss options in Istanbul are Endosleeve / Apollo ESG (15–25% total body weight loss, 10+ year durability, from £4,950), gastric balloon (10–15% TBWL while in place, from £2,500), and GLP-1 medication such as Mounjaro or Wegovy (15–22% on medication, £200–400/month)." }},
        { "@type": "Question", "name": "How long do I need to stay in Istanbul for Endosleeve?", "acceptedAnswer": { "@type": "Answer", "text": "Most international patients stay in Istanbul for 3–4 days in total: arrive day 1, Endosleeve procedure day 2, rest day 3, fly home day 4. Most patients are discharged the same day as the procedure; about one in five stays a single night for observation." }}
      ]
    }, {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": SITE_URL + "/" },
        { "@type": "ListItem", "position": 2, "name": "Endoscopic Sleeve Gastroplasty", "item": SITE_URL + "/esg" },
        { "@type": "ListItem", "position": 3, "name": "Best Endosleeve Clinic in Istanbul", "item": SITE_URL + "/best-endosleeve-clinic-istanbul" }
      ]
    }]
  },
  "/esg/uk": {
    title: "ESG for UK Patients | Endoscopic Sleeve Gastroplasty Turkey | Save Up to 70%",
    description: "ESG for UK patients. Affordable non-surgical weight loss in Turkey. All-inclusive from £4,950. Save up to 70% vs UK clinics. Free consultation.",
    h1: "Endoscopic Sleeve Gastroplasty (ESG) for UK Patients — A Safer, Non-Surgical Weight Loss Solution in Turkey",
    bodyExcerpt: "ESG for UK patients at Istanbul Bariatric Center. Non-surgical, incision-free weight loss procedure with all-inclusive packages from £4,950. Save up to 70% compared to UK private clinics. JCI-accredited Liv Hospital, pioneer surgeon Dr Murat Ustun, UK patient coordinators, 12-month UK dietitian support included.",
    canonical: SITE_URL + "/esg/uk",
    richContent: `<section><h2>What Is Endoscopic Sleeve Gastroplasty (ESG)?</h2><p>Endoscopic Sleeve Gastroplasty (ESG) is a cutting-edge, incision-free weight loss procedure that reduces the size of your stomach using an endoscope inserted through the mouth. Unlike traditional gastric sleeve surgery, no cuts are made on the abdomen, no part of the stomach is removed, and recovery is significantly faster. The procedure uses a specialised suturing system — the Apollo OverStitch technology — to reshape and reduce your stomach by up to 70–80%, helping you feel full faster and eat less. It takes approximately 60–90 minutes under general anaesthesia, and most patients return home the same day or after one night in hospital.</p><p>For UK patients, ESG represents a breakthrough alternative to both surgical weight loss and long-term medication use. It bridges the gap between lifestyle interventions that haven't worked and invasive surgery that many people aren't ready for — or don't qualify for through the NHS.</p></section>
<section><h2>Why UK Patients Are Choosing ESG in Turkey</h2><h3>Limited NHS Access</h3><p>ESG is not widely available on the NHS. Most NHS bariatric pathways focus on surgical options with strict eligibility criteria — often requiring a BMI of 40+ and years of documented weight management attempts. Private ESG in the UK remains limited to a handful of specialist centres, with long waiting lists even for initial consultations.</p><h3>Significant Cost Savings</h3><p>In the UK, ESG typically costs £8,000–£15,000 at private clinics. At Istanbul Bariatric Center, all-inclusive packages start from £4,950 — that's up to 60–70% savings. Your package includes the procedure, hospital stay, hotel accommodation, airport transfers, pre-operative tests, and 12-month dietitian support. The average UK patient saves £5,000–£10,000 by choosing Istanbul Bariatric Center.</p><h3>No Waiting Lists</h3><p>Even private consultations in cities like London, Manchester, or Birmingham can take weeks or months. With Istanbul Bariatric Center, you can have your consultation within days, your procedure scheduled promptly, and your entire treatment completed within a single short trip — typically 3–4 days from departure to return.</p></section>
<section><h2>ESG vs Weight Loss Medications in the UK</h2><p>Many UK patients start their weight loss journey with GLP-1 medications like Wegovy or Ozempic. But what happens when the medications plateau, the side effects become difficult, or the monthly costs add up? ESG is increasingly seen as the next step.</p><table><thead><tr><th>Factor</th><th>Wegovy / Ozempic</th><th>ESG</th></tr></thead><tbody><tr><td>Long-Term Effectiveness</td><td>Often limited — weight returns when medication stops</td><td>More durable — physical stomach reduction is permanent</td></tr><tr><td>Side Effects</td><td>Common (nausea, diarrhoea, pancreatitis risk)</td><td>Minimal (mild discomfort for 1–3 days)</td></tr><tr><td>Cost Over Time</td><td>£200–400/month ongoing (£2,400–4,800/year)</td><td>One-time investment from £4,950</td></tr><tr><td>Weight Regain</td><td>Frequent when medication is stopped</td><td>Less common with lifestyle adherence</td></tr><tr><td>NHS Availability</td><td>Limited — strict criteria and long waits</td><td>Not available on NHS</td></tr><tr><td>Procedure Required</td><td>No — weekly/daily injections</td><td>Yes — one 60–90 minute endoscopic procedure</td></tr></tbody></table></section>
<section><h2>ESG vs Gastric Sleeve Surgery</h2><p>Not sure whether ESG or gastric sleeve surgery is right for you? Here's a detailed comparison to help you decide. ESG is ideal for patients seeking a less aggressive, non-surgical approach.</p><table><thead><tr><th>Feature</th><th>ESG</th><th>Gastric Sleeve</th></tr></thead><tbody><tr><td>Procedure Type</td><td>Endoscopic (through mouth)</td><td>Laparoscopic surgery (4–5 incisions)</td></tr><tr><td>Duration</td><td>60–90 minutes</td><td>~60 minutes</td></tr><tr><td>Hospital Stay</td><td>Same day or 1 night</td><td>2–3 nights</td></tr><tr><td>Recovery Time</td><td>1–3 days</td><td>2–3 weeks</td></tr><tr><td>Scarring</td><td>None</td><td>4–5 small scars</td></tr><tr><td>Weight Loss</td><td>15–20% total body weight</td><td>60–70% excess weight</td></tr><tr><td>Reversibility</td><td>Potentially reversible</td><td>Permanent (stomach removed)</td></tr><tr><td>Risk Profile</td><td>Very low</td><td>Low</td></tr><tr><td>Starting Price (Istanbul)</td><td>From £4,950</td><td>From £2,950</td></tr></tbody></table></section>
<section><h2>Why Choose Istanbul Bariatric Center?</h2><ul><li><strong>Dr Murat Ustun</strong> — Pioneer of ESG in Turkey with thousands of successful bariatric procedures. Internationally recognised for endoscopic innovation and patient-centred care.</li><li><strong>JCI-Accredited Hospital</strong> — All procedures are performed at Liv Hospital, Istanbul, holding the gold standard Joint Commission International accreditation for patient safety and quality.</li><li><strong>UK Patient Team</strong> — Dedicated UK patient coordinators who understand British expectations. Clear communication, transparent pricing, structured aftercare. Support available via UK WhatsApp number.</li><li><strong>All-Inclusive from £4,950</strong> — No hidden fees. Packages include procedure, hospital stay, hotel, airport transfers, pre-op tests, UK dietitian, and 12-month aftercare programme.</li></ul></section>
<section><h2>Your ESG Journey — Step by Step</h2><p>From your first enquiry to returning home, we take care of every detail. Here's exactly what to expect as a UK patient travelling to Istanbul for ESG.</p><ol><li><strong>Free Online Consultation</strong> — Contact us via WhatsApp or our website. Our team will review your BMI, medical history, and goals to confirm you're a suitable candidate for ESG.</li><li><strong>Book Your Travel</strong> — Choose your dates and we'll arrange everything. Direct flights from London, Manchester, Birmingham, and Edinburgh to Istanbul take just 3.5–4 hours.</li><li><strong>VIP Airport Transfer &amp; Hotel</strong> — A private driver meets you at Istanbul Airport and takes you to your hotel (e.g., Radisson Hotel). Relax and prepare for the next day.</li><li><strong>Pre-Operative Assessment</strong> — Comprehensive blood tests and health screening at the hospital. Meet Dr Murat Ustun and the medical team, review the procedure plan.</li><li><strong>ESG Procedure</strong> — The ESG is performed under general anaesthesia at JCI-accredited Liv Hospital. Duration: approximately 60–90 minutes. No incisions, no scars.</li><li><strong>Recovery &amp; Return Home</strong> — Rest at your hotel with full medical support available. Most patients fly home within 2–3 days feeling well and ready to begin their new journey.</li></ol></section>
<section><h2>ESG Results — What UK Patients Can Expect</h2><p>ESG delivers meaningful, sustainable weight loss when combined with the lifestyle changes our aftercare programme supports. On average, patients can expect 15–20% total body weight loss over 12–18 months. Patients with BMI 38+ typically lose around 20kg in the first 6 months and approximately 25kg in 12 months. Significant improvements in Type 2 diabetes, high blood pressure, and sleep apnoea are commonly reported. Results depend on your commitment to the post-procedure nutrition plan, regular physical activity, and ongoing follow-up support.</p></section>
<section><h2>Who Is a Good Candidate for ESG?</h2><p>ESG is designed for people who have struggled with long-term weight loss and are looking for a solution that falls between lifestyle interventions and major surgery. You may be a good candidate if your BMI is between 30 and 40, you've struggled with long-term weight loss despite diet and exercise, you're not ready for or don't want invasive surgery, weight loss medications haven't been effective or are too expensive, you want a procedure with minimal recovery time, or you have obesity-related health conditions such as Type 2 diabetes, high blood pressure, or sleep apnoea.</p></section>
<section><h2>Safety &amp; Standards</h2><p>ESG is considered one of the safest weight loss procedures available when performed by experienced specialists in an accredited facility. Compared to surgical alternatives, ESG offers lower complication rates, no surgical scars, and significantly faster recovery. At Istanbul Bariatric Center, Dr Murat Ustun has performed thousands of ESG procedures with an excellent safety record. All procedures take place at JCI-accredited Liv Hospital, which meets the same international standards as top UK and US hospitals.</p></section>
<section><h2>Life After ESG</h2><p>Your ESG procedure is just the beginning. In the first 8 hours, clear liquids only with rest and recovery. During weeks 1–2, a full liquid diet including protein shakes, clear soups, and water. Weeks 3–6 introduce semi-solid foods gradually with pureed meals and soft proteins. From week 7 onwards, gradual transition to healthy solid foods with focus on protein-rich balanced meals. Months 3–12 include continued dietary guidance from your UK-registered dietitian with regular check-ins to track progress. Every ESG package includes access to a UK-registered dietitian who provides personalised meal plans, regular consultations, and ongoing support throughout your first year.</p></section>
<section><h2>Why Turkey for Medical Tourism?</h2><p>Turkey has become one of the world's leading destinations for medical tourism, and Istanbul is at the heart of this transformation. Turkey performs over 1 million medical tourism procedures annually, with internationally accredited hospitals across Istanbul. Turkish bariatric surgeons are among the most experienced in the world, with many trained internationally and members of IFSO. World-class medical care at a fraction of UK costs, without compromising on quality, technology, or safety standards. Direct flights from London, Manchester, Birmingham, Edinburgh, and more — just 3.5–4 hours to Istanbul.</p></section>
<section><h2>Frequently Asked Questions — ESG for UK Patients</h2><dl><dt>Is ESG available on the NHS?</dt><dd>No, Endoscopic Sleeve Gastroplasty is not widely available through the NHS. Most NHS bariatric services focus on gastric band, gastric sleeve, or gastric bypass surgery for patients meeting strict criteria (typically BMI 40+ or BMI 35+ with comorbidities). ESG remains largely a private procedure in the UK, which is why many patients look abroad for more affordable access.</dd><dt>How long do I need to stay in Istanbul?</dt><dd>Most UK patients stay for 3–4 days in total. You'll typically arrive the day before your procedure, have the ESG performed on day two, rest and recover at your hotel on day three, and fly home on day four. Direct flights from London, Manchester, Birmingham, and Edinburgh to Istanbul take approximately 3.5–4 hours.</dd><dt>Is the ESG procedure painful?</dt><dd>ESG is performed under general anaesthesia, so you won't feel anything during the procedure. Afterwards, most patients experience mild discomfort, bloating, or nausea for 1–3 days, which is easily managed with prescribed medication. Compared to surgical alternatives, the recovery is significantly more comfortable.</dd><dt>Will I regain weight after ESG?</dt><dd>Long-term results depend on your commitment to lifestyle changes. ESG provides a powerful structural tool — your stomach is physically smaller — but sustained results require following your nutrition plan, staying active, and attending follow-up consultations. Our 12-month aftercare programme with a UK-registered dietitian helps ensure lasting results.</dd><dt>How does ESG compare to Wegovy or Ozempic?</dt><dd>While GLP-1 medications like Wegovy and Ozempic can be effective initially, many patients experience weight regain once they stop the medication. ESG provides a one-time, physical change to your stomach that supports long-term portion control. Many patients view ESG as the next step when medications plateau or become too expensive to maintain monthly.</dd><dt>What BMI do I need for ESG?</dt><dd>ESG is typically recommended for patients with a BMI between 30 and 40. It's ideal for those who haven't achieved their goals with diet and exercise alone, aren't ready for or don't qualify for surgical options, or want a less invasive approach to weight loss.</dd><dt>Is it safe to have a medical procedure abroad?</dt><dd>Istanbul Bariatric Center operates within Liv Hospital, which holds JCI (Joint Commission International) accreditation — the gold standard in international healthcare. Dr Murat Ustun has performed thousands of successful ESG procedures. We provide the same or higher standards of care as private UK clinics, with dedicated UK patient coordinators who speak your language and understand your expectations.</dd><dt>What's included in the all-inclusive package?</dt><dd>Our ESG packages include the procedure itself, JCI-accredited hospital stay, pre-operative blood tests and assessments, VIP airport transfers, hotel accommodation (e.g., Radisson Hotel), a UK-registered dietitian for 12 months, post-operative medications, and ongoing aftercare support. There are no hidden fees.</dd></dl></section>
<section><h2>Start Your Weight Loss Journey Today</h2><p>If you're in the UK and looking for a safe, effective, non-surgical weight loss solution, Endoscopic Sleeve Gastroplasty could be the answer you've been searching for. Contact our UK team today for a free online consultation. We'll assess your suitability, answer all your questions, and create a personalised treatment plan — with no obligation. WhatsApp (UK): +44 7491 068686 | WhatsApp (Turkey): +90 532 413 1143 | Email: drmuratustun@gmail.com</p></section>`,
    jsonLd: [{
      "@context": "https://schema.org",
      "@type": "MedicalProcedure",
      "name": "Endoscopic Sleeve Gastroplasty for UK Patients",
      "alternateName": ["ESG UK", "ESG Turkey UK", "Non-Surgical Weight Loss UK"],
      "description": "Non-surgical weight loss procedure for UK patients. Stomach reduced by 70-80% via endoscope. All-inclusive packages from £4,950 at JCI-accredited hospital in Istanbul.",
      "procedureType": "Noninvasive",
      "bodyLocation": "Stomach",
      "relevantSpecialty": { "@type": "MedicalSpecialty", "name": "Bariatric Surgery" },
      "offers": [
        { "@type": "Offer", "name": "Relaxation Package", "price": "4950", "priceCurrency": "GBP", "description": "ESG procedure, JCI hospital, Radisson Hotel, UK dietitian 12 months" },
        { "@type": "Offer", "name": "Luxury Package", "price": "5950", "priceCurrency": "GBP", "description": "Premium VIP experience with extended hotel and comprehensive aftercare" }
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        { "@type": "Question", "name": "Is ESG available on the NHS?", "acceptedAnswer": { "@type": "Answer", "text": "No, Endoscopic Sleeve Gastroplasty is not widely available through the NHS. Most NHS bariatric services focus on gastric band, gastric sleeve, or gastric bypass surgery for patients meeting strict criteria. ESG remains largely a private procedure in the UK." } },
        { "@type": "Question", "name": "How long do I need to stay in Istanbul?", "acceptedAnswer": { "@type": "Answer", "text": "Most UK patients stay for 3–4 days in total. Direct flights from London, Manchester, Birmingham, and Edinburgh to Istanbul take approximately 3.5–4 hours." } },
        { "@type": "Question", "name": "Is the ESG procedure painful?", "acceptedAnswer": { "@type": "Answer", "text": "ESG is performed under general anaesthesia. Afterwards, most patients experience mild discomfort for 1–3 days, easily managed with prescribed medication." } },
        { "@type": "Question", "name": "Will I regain weight after ESG?", "acceptedAnswer": { "@type": "Answer", "text": "Long-term results depend on lifestyle changes. ESG provides a physical reduction in stomach size. Our 12-month aftercare programme with a UK-registered dietitian helps ensure lasting results." } },
        { "@type": "Question", "name": "How does ESG compare to Wegovy or Ozempic?", "acceptedAnswer": { "@type": "Answer", "text": "ESG provides a one-time physical change to your stomach supporting long-term portion control, unlike medications where weight often returns when stopped. Many patients view ESG as the next step when medications plateau." } },
        { "@type": "Question", "name": "What BMI do I need for ESG?", "acceptedAnswer": { "@type": "Answer", "text": "ESG is typically recommended for patients with a BMI between 30 and 40 who haven't achieved their goals with diet and exercise alone." } },
        { "@type": "Question", "name": "Is it safe to have a medical procedure abroad?", "acceptedAnswer": { "@type": "Answer", "text": "Istanbul Bariatric Center operates within JCI-accredited Liv Hospital — the gold standard in international healthcare. Dr Murat Ustun has performed thousands of successful ESG procedures." } },
        { "@type": "Question", "name": "What's included in the all-inclusive package?", "acceptedAnswer": { "@type": "Answer", "text": "Packages include the procedure, JCI hospital stay, pre-operative tests, VIP airport transfers, hotel accommodation, UK-registered dietitian for 12 months, post-operative medications, and ongoing aftercare. No hidden fees." } }
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://istanbulbariatriccenter.com/" },
        { "@type": "ListItem", "position": 2, "name": "Treatments", "item": "https://istanbulbariatriccenter.com/treatments" },
        { "@type": "ListItem", "position": 3, "name": "ESG", "item": "https://istanbulbariatriccenter.com/esg" },
        { "@type": "ListItem", "position": 4, "name": "ESG for UK Patients", "item": "https://istanbulbariatriccenter.com/esg/uk" }
      ]
    }]
  },
  "/esg/de": {
    title: "ESG Türkei für deutsche Patienten | Magenverkleinerung ohne OP | Bis zu 70 % sparen",
    description: "ESG für Patienten aus Deutschland. Bis zu 70 % günstiger. All-Inclusive ab ca. 5.800 € im JCI-akkreditierten Krankenhaus. Kostenlose Beratung.",
    h1: "Endoskopische Sleeve Gastroplastik (ESG) für Patienten aus Deutschland — Abnehmen ohne Operation in der Türkei",
    bodyExcerpt: "ESG für deutsche Patienten im Istanbul Bariatric Center. Minimalinvasive, schnittfreie Magenverkleinerung mit All-Inclusive-Paketen ab ca. 5.800 €. Bis zu 70 % günstiger als in Deutschland. JCI-akkreditiertes Liv Hospital, Pionier-Chirurg Dr. Murat Üstün, deutschsprachige Patientenbetreuung, 12-monatige Ernährungsberatung inklusive.",
    canonical: SITE_URL + "/esg/de",
    richContent: `<section><h2>Was ist die Endoskopische Sleeve Gastroplastik (ESG)?</h2><p>Die Endoskopische Sleeve Gastroplastik (ESG) ist ein innovatives, schnittfreies Verfahren zur Gewichtsreduktion, bei dem der Magen mithilfe eines Endoskops verkleinert wird, das über den Mund eingeführt wird. Im Gegensatz zur klassischen Schlauchmagen-Operation werden keine Schnitte am Bauch vorgenommen, kein Magengewebe entfernt, und die Erholung ist deutlich schneller. Das Verfahren nutzt die Apollo OverStitch-Technologie, um den Magen um bis zu 70–80 % zu verkleinern. Der Eingriff dauert ca. 60–90 Minuten unter Vollnarkose.</p><p>Für deutsche Patienten stellt die ESG eine bahnbrechende Alternative dar — sowohl zur chirurgischen Gewichtsreduktion als auch zum langfristigen Einsatz von Medikamenten wie Ozempic oder Wegovy.</p></section>
<section><h2>Warum deutsche Patienten ESG in der Türkei wählen</h2><h3>Begrenzte Verfügbarkeit in Deutschland</h3><p>Die ESG ist in Deutschland noch nicht flächendeckend verfügbar. Viele Kliniken bieten das Verfahren nicht an, und die gesetzlichen Krankenkassen übernehmen die Kosten in der Regel nicht. Private Anbieter sind selten und haben oft lange Wartelisten.</p><h3>Erhebliche Kostenersparnis</h3><p>In Deutschland kostet ESG typischerweise 8.000–15.000 € in privaten Kliniken. Im Istanbul Bariatric Center beginnen All-Inclusive-Pakete ab ca. 5.800 € (£4.950) — eine Ersparnis von bis zu 60–70 %. Das Paket umfasst Eingriff, Krankenhausaufenthalt, Hotel, Flughafentransfer, Voruntersuchungen und 12-monatige Ernährungsberatung.</p><h3>Keine Wartezeiten</h3><p>Selbst in Großstädten wie Berlin, München, Frankfurt oder Hamburg können Wartezeiten für private Beratungen Wochen oder Monate betragen. Im Istanbul Bariatric Center erhalten Sie Ihre Beratung innerhalb weniger Tage.</p></section>
<section><h2>ESG vs Medikamente zur Gewichtsreduktion</h2><p>Viele Patienten in Deutschland beginnen mit GLP-1-Medikamenten wie Ozempic oder Wegovy. Die ESG wird zunehmend als effektiver nächster Schritt gesehen, da sie eine einmalige physische Magenverkleinerung bietet — ohne laufende Medikamentenkosten.</p><table><thead><tr><th>Faktor</th><th>Ozempic / Wegovy</th><th>ESG</th></tr></thead><tbody><tr><td>Dauerhafte Wirkung</td><td>Begrenzt</td><td>Stabiler</td></tr><tr><td>Nebenwirkungen</td><td>Häufig</td><td>Gering</td></tr><tr><td>Kosten</td><td>200–400 €/Monat</td><td>Einmalig ab 5.800 €</td></tr><tr><td>Jojo-Effekt</td><td>Häufig</td><td>Reduziert</td></tr></tbody></table></section>
<section><h2>ESG vs Schlauchmagen-Operation</h2><table><thead><tr><th>Merkmal</th><th>ESG</th><th>Schlauchmagen</th></tr></thead><tbody><tr><td>Verfahren</td><td>Endoskopisch</td><td>Chirurgisch</td></tr><tr><td>Erholung</td><td>1–3 Tage</td><td>2–3 Wochen</td></tr><tr><td>Narben</td><td>Keine</td><td>4–5 kleine Narben</td></tr><tr><td>Gewichtsverlust</td><td>15–20 % Körpergewicht</td><td>60–70 % Übergewicht</td></tr><tr><td>Reversibel</td><td>Möglich</td><td>Nein</td></tr></tbody></table></section>
<section><h2>Warum das Istanbul Bariatric Center?</h2><ul><li><strong>Dr. Murat Üstün</strong> — Pionier der ESG in der Türkei mit Tausenden erfolgreicher Eingriffe</li><li><strong>JCI-akkreditiertes Krankenhaus</strong> — Liv Hospital mit internationalem Goldstandard</li><li><strong>Deutsches Patienten-Team</strong> — Klare Kommunikation, transparente Preise, strukturierte Nachsorge</li><li><strong>All-Inclusive ab ca. 5.800 €</strong> — Eingriff, Krankenhaus, Hotel, Transfer, Voruntersuchungen, 12-monatige Ernährungsberatung</li></ul></section>
<section><h2>Behandlungsablauf</h2><ol><li>Kostenlose Online-Beratung via WhatsApp</li><li>Direktflug nach Istanbul (2,5–3 Stunden)</li><li>VIP-Flughafentransfer zum Hotel</li><li>Präoperative Untersuchung im Krankenhaus</li><li>ESG-Eingriff (60–90 Minuten, keine Schnitte)</li><li>Erholung und Rückreise innerhalb von 3–4 Tagen</li></ol></section>
<section><h2>ESG-Ergebnisse</h2><p>Deutsche Patienten können mit 15–20 % Gewichtsverlust über 12–18 Monate rechnen. Patienten mit BMI 38+ verlieren durchschnittlich ca. 20 kg in 6 Monaten. Deutliche Verbesserungen bei Typ-2-Diabetes, Bluthochdruck und Schlafapnoe werden häufig berichtet.</p></section>
<section><h2>Sicherheit & Qualitätsstandards</h2><p>Die ESG gilt als eines der sichersten Verfahren zur Gewichtsreduktion. Dr. Murat Üstün hat Tausende ESG-Eingriffe mit hervorragenden Sicherheitsergebnissen durchgeführt. Alle Eingriffe finden im JCI-akkreditierten Liv Hospital statt.</p></section>
<section><h2>Leben nach der ESG</h2><p>Erste 8 Stunden: nur klare Flüssigkeiten. Woche 1–2: Flüssigphase. Woche 3–6: halbfeste Nahrung. Ab Woche 7: schrittweiser Übergang zu fester Nahrung. Monat 3–12: fortlaufende Ernährungsberatung. Jedes Paket beinhaltet 12-monatige qualifizierte Ernährungsberatung.</p></section>
<section><h2>Häufig gestellte Fragen</h2><dl><dt>Wird ESG von der Krankenkasse übernommen?</dt><dd>In der Regel übernehmen gesetzliche Krankenkassen in Deutschland die Kosten für ESG nicht. Private Versicherungen prüfen Einzelfälle.</dd><dt>Wie lange muss ich in Istanbul bleiben?</dt><dd>Die meisten deutschen Patienten bleiben 3–4 Tage. Direktflüge von Berlin, Frankfurt, München, Hamburg nach Istanbul dauern 2,5–3 Stunden.</dd><dt>Ist der Eingriff schmerzhaft?</dt><dd>Die ESG wird unter Vollnarkose durchgeführt. Nach dem Aufwachen können leichte Beschwerden auftreten, die 1–3 Tage anhalten.</dd><dt>Nehme ich nach der ESG wieder zu?</dt><dd>Langfristige Ergebnisse hängen von Ihrer Mitarbeit ab. Unser 12-monatiges Nachsorgeprogramm unterstützt Sie dabei.</dd><dt>Wie schneidet ESG im Vergleich zu Ozempic ab?</dt><dd>ESG bietet eine einmalige physische Magenverkleinerung ohne laufende Kosten. Viele Patienten sehen ESG als nächsten Schritt, wenn Medikamente nicht mehr wirken.</dd><dt>Welchen BMI brauche ich?</dt><dd>ESG wird für BMI 30–40 empfohlen.</dd><dt>Ist ein Eingriff im Ausland sicher?</dt><dd>Das Istanbul Bariatric Center arbeitet im JCI-akkreditierten Liv Hospital. Dr. Murat Üstün hat Tausende erfolgreiche ESG-Eingriffe durchgeführt.</dd><dt>Was ist im Paket enthalten?</dt><dd>Eingriff, JCI-Krankenhaus, Voruntersuchungen, VIP-Transfer, Hotel, 12-monatige Ernährungsberatung, Medikamente, Nachsorge. Keine versteckten Kosten.</dd></dl></section>
<section><h2>Kontakt</h2><p>WhatsApp: +90 532 413 1143 | E-Mail: drmuratustun@gmail.com</p></section>`,
    jsonLd: [{
      "@context": "https://schema.org",
      "@type": "MedicalProcedure",
      "name": "Endoskopische Sleeve Gastroplastik für deutsche Patienten",
      "alternateName": ["ESG Deutschland", "ESG Türkei", "Magenverkleinerung ohne OP"],
      "description": "Minimalinvasive Magenverkleinerung für Patienten aus Deutschland. Magen wird um 70–80 % verkleinert. All-Inclusive-Pakete ab ca. 5.800 € im JCI-akkreditierten Krankenhaus in Istanbul.",
      "procedureType": "Noninvasive",
      "bodyLocation": "Stomach",
      "relevantSpecialty": { "@type": "MedicalSpecialty", "name": "Bariatric Surgery" },
      "offers": [
        { "@type": "Offer", "name": "Relaxation Paket", "price": "4950", "priceCurrency": "GBP", "description": "ESG-Eingriff, JCI-Krankenhaus, Radisson Hotel, Ernährungsberatung 12 Monate" },
        { "@type": "Offer", "name": "Luxury Paket", "price": "5950", "priceCurrency": "GBP", "description": "Premium VIP-Erfahrung mit erweitertem Hotel und umfassender Nachsorge" }
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        { "@type": "Question", "name": "Wird ESG von der Krankenkasse übernommen?", "acceptedAnswer": { "@type": "Answer", "text": "In der Regel übernehmen gesetzliche Krankenkassen in Deutschland die Kosten für ESG nicht. Private Versicherungen prüfen Einzelfälle." } },
        { "@type": "Question", "name": "Wie lange muss ich in Istanbul bleiben?", "acceptedAnswer": { "@type": "Answer", "text": "Die meisten deutschen Patienten bleiben 3–4 Tage. Direktflüge von Berlin, Frankfurt, München, Hamburg nach Istanbul dauern 2,5–3 Stunden." } },
        { "@type": "Question", "name": "Ist der Eingriff schmerzhaft?", "acceptedAnswer": { "@type": "Answer", "text": "Die ESG wird unter Vollnarkose durchgeführt. Nach dem Aufwachen können leichte Beschwerden auftreten, die 1–3 Tage anhalten und mit Medikamenten behandelbar sind." } },
        { "@type": "Question", "name": "Nehme ich nach der ESG wieder zu?", "acceptedAnswer": { "@type": "Answer", "text": "Langfristige Ergebnisse hängen von Ihrer Mitarbeit ab. Unser 12-monatiges Nachsorgeprogramm mit Ernährungsberatung unterstützt Sie dabei." } },
        { "@type": "Question", "name": "Wie schneidet ESG im Vergleich zu Ozempic ab?", "acceptedAnswer": { "@type": "Answer", "text": "ESG bietet eine einmalige physische Magenverkleinerung ohne laufende Kosten. Viele Patienten sehen ESG als nächsten Schritt, wenn Medikamente nicht mehr ausreichend wirken." } },
        { "@type": "Question", "name": "Welchen BMI brauche ich für ESG?", "acceptedAnswer": { "@type": "Answer", "text": "ESG wird für Patienten mit BMI 30–40 empfohlen, die mit Diäten und Sport allein keine dauerhaften Ergebnisse erzielen konnten." } },
        { "@type": "Question", "name": "Ist ein medizinischer Eingriff im Ausland sicher?", "acceptedAnswer": { "@type": "Answer", "text": "Das Istanbul Bariatric Center arbeitet im JCI-akkreditierten Liv Hospital — dem internationalen Goldstandard. Dr. Murat Üstün hat Tausende erfolgreiche ESG-Eingriffe durchgeführt." } },
        { "@type": "Question", "name": "Was ist im All-Inclusive-Paket enthalten?", "acceptedAnswer": { "@type": "Answer", "text": "Eingriff, JCI-Krankenhaus, Voruntersuchungen, VIP-Flughafentransfer, Hotel, 12-monatige Ernährungsberatung, Medikamente und Nachsorge. Keine versteckten Kosten." } }
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://istanbulbariatriccenter.com/" },
        { "@type": "ListItem", "position": 2, "name": "Treatments", "item": "https://istanbulbariatriccenter.com/treatments" },
        { "@type": "ListItem", "position": 3, "name": "ESG", "item": "https://istanbulbariatriccenter.com/esg" },
        { "@type": "ListItem", "position": 4, "name": "ESG für deutsche Patienten", "item": "https://istanbulbariatriccenter.com/esg/de" }
      ]
    }]
  },
  "/esg/fr": {
    title: "ESG Turquie pour patients français | Sleeve sans chirurgie | Jusqu'à 70 % d'économie",
    description: "ESG pour patients en France. Jusqu'à 70 % moins cher. Forfaits tout compris dès 5 800 € en hôpital accrédité JCI. Consultation gratuite.",
    h1: "Sleeve Gastroplastie Endoscopique (ESG) pour les patients en France — Perdre du poids sans chirurgie en Turquie",
    bodyExcerpt: "ESG pour patients français à Istanbul Bariatric Center. Réduction gastrique mini-invasive sans chirurgie avec forfaits tout compris à partir d'environ 5 800 €. Jusqu'à 70 % moins cher qu'en France. Hôpital accrédité JCI, chirurgien pionnier Dr Murat Üstün, accompagnement francophone, suivi nutritionnel de 12 mois inclus.",
    canonical: SITE_URL + "/esg/fr",
    richContent: `<section><h2>Qu'est-ce que la Sleeve Gastroplastie Endoscopique (ESG) ?</h2><p>L'ESG est une technique innovante de réduction gastrique sans chirurgie. Un endoscope est introduit par la bouche pour réaliser des sutures internes qui réduisent le volume de l'estomac de 70 à 80 %. Contrairement à la sleeve gastrectomie classique, aucune incision n'est pratiquée, aucun tissu gastrique n'est retiré, et la récupération est considérablement plus rapide. L'intervention utilise la technologie Apollo OverStitch et dure environ 60 à 90 minutes sous anesthésie générale.</p><p>Pour les patients français, l'ESG comble un vide important entre les mesures hygiéno-diététiques qui n'ont pas fonctionné et une chirurgie invasive pour laquelle beaucoup ne sont pas prêts ou ne remplissent pas les critères.</p></section>
<section><h2>Pourquoi les patients français choisissent l'ESG en Turquie</h2><h3>Accès limité en France</h3><p>L'ESG reste encore peu répandue en France. Elle n'est pas largement proposée dans les hôpitaux publics et n'est généralement pas prise en charge par l'Assurance maladie. Les cliniques privées qui la proposent sont rares et les délais d'attente peuvent être longs.</p><h3>Économie significative</h3><p>En France, l'ESG coûte typiquement 8 000 à 15 000 € dans le secteur privé. À Istanbul Bariatric Center, les forfaits tout compris débutent à environ 5 800 € (£4 950) — soit une économie de 40 à 60 %. Ce forfait inclut l'intervention, l'hospitalisation, l'hôtel, les transferts et 12 mois de suivi nutritionnel.</p><h3>Aucun délai d'attente</h3><p>Même dans les grandes villes comme Paris, Lyon, Marseille ou Toulouse, les délais pour une consultation privée peuvent atteindre plusieurs semaines. À Istanbul Bariatric Center, votre consultation est organisée en quelques jours.</p></section>
<section><h2>ESG vs traitements médicamenteux</h2><p>De nombreux patients en France débutent avec des médicaments GLP-1 comme Ozempic ou Wegovy. L'ESG s'inscrit de plus en plus comme l'étape suivante logique, offrant une réduction gastrique physique unique sans frais récurrents.</p><table><thead><tr><th>Critère</th><th>Ozempic / Wegovy</th><th>ESG</th></tr></thead><tbody><tr><td>Durée d'efficacité</td><td>Variable</td><td>Plus stable</td></tr><tr><td>Effets secondaires</td><td>Fréquents</td><td>Limités</td></tr><tr><td>Coût</td><td>200–400 €/mois</td><td>Unique à partir de 5 800 €</td></tr><tr><td>Reprise de poids</td><td>Fréquente</td><td>Réduite</td></tr></tbody></table></section>
<section><h2>ESG vs Sleeve chirurgicale</h2><table><thead><tr><th>Critère</th><th>ESG</th><th>Sleeve chirurgicale</th></tr></thead><tbody><tr><td>Type d'acte</td><td>Endoscopique</td><td>Chirurgical</td></tr><tr><td>Récupération</td><td>1–3 jours</td><td>2–3 semaines</td></tr><tr><td>Cicatrices</td><td>Aucune</td><td>4–5 petites cicatrices</td></tr><tr><td>Perte de poids</td><td>15–20 % poids corporel</td><td>60–70 % excès de poids</td></tr><tr><td>Réversibilité</td><td>Possible</td><td>Non</td></tr></tbody></table></section>
<section><h2>Pourquoi Istanbul Bariatric Center ?</h2><ul><li><strong>Dr Murat Üstün</strong> — Pionnier de l'ESG en Turquie avec des milliers d'interventions réussies</li><li><strong>Hôpital accrédité JCI</strong> — Liv Hospital, standard mondial le plus exigeant</li><li><strong>Accompagnement francophone</strong> — Communication claire, transparence tarifaire, suivi structuré</li><li><strong>Tout compris dès ~5 800 €</strong> — Intervention, hôpital, hôtel, transferts, examens, 12 mois de suivi nutritionnel</li></ul></section>
<section><h2>Votre parcours de soin</h2><ol><li>Consultation en ligne gratuite via WhatsApp</li><li>Vol direct vers Istanbul (environ 3 h 30)</li><li>Transfert VIP aéroport vers l'hôtel</li><li>Bilan préopératoire à l'hôpital</li><li>Intervention ESG (60–90 minutes, aucune incision)</li><li>Récupération et retour en France sous 3–4 jours</li></ol></section>
<section><h2>Résultats attendus</h2><p>Les patients français peuvent s'attendre à une perte de poids de 15 à 20 % sur 12 à 18 mois. Les patients avec un IMC de 38+ perdent en moyenne environ 20 kg en 6 mois. Des améliorations nettes du diabète de type 2, de l'hypertension et de l'apnée du sommeil sont fréquemment rapportées.</p></section>
<section><h2>Sécurité et standards de qualité</h2><p>L'ESG est considérée comme l'un des actes de perte de poids les plus sûrs. Le Dr Murat Üstün a réalisé des milliers d'ESG avec d'excellents résultats. Toutes les interventions ont lieu au Liv Hospital, accrédité JCI.</p></section>
<section><h2>La vie après l'ESG</h2><p>Premières 8 heures : liquides clairs. Semaines 1–2 : phase liquide. Semaines 3–6 : aliments semi-solides. À partir de la semaine 7 : transition vers alimentation solide. Mois 3–12 : suivi nutritionnel continu. Chaque forfait inclut 12 mois de suivi avec diététicienne qualifiée.</p></section>
<section><h2>Questions fréquentes</h2><dl><dt>L'ESG est-elle remboursée ?</dt><dd>L'ESG n'est actuellement pas prise en charge par l'Assurance maladie en France. Certaines mutuelles évaluent au cas par cas.</dd><dt>Combien de temps dure le séjour ?</dt><dd>3 à 4 jours. Vols directs depuis Paris, Lyon, Marseille, Toulouse et Nice (~3 h 30).</dd><dt>L'intervention est-elle douloureuse ?</dt><dd>L'ESG est réalisée sous anesthésie générale. Des inconforts légers peuvent survenir pendant 1 à 3 jours.</dd><dt>Les résultats sont-ils durables ?</dt><dd>Oui, avec un bon suivi. Notre programme de 12 mois vous accompagne.</dd><dt>Comment l'ESG se compare-t-elle à Ozempic ?</dt><dd>L'ESG offre une réduction gastrique physique unique sans frais récurrents.</dd><dt>Quel IMC faut-il ?</dt><dd>L'ESG est recommandée pour un IMC de 30 à 40.</dd><dt>Un acte médical à l'étranger est-il sûr ?</dt><dd>Istanbul Bariatric Center opère au Liv Hospital, accrédité JCI. Le Dr Murat Üstün a réalisé des milliers d'ESG.</dd><dt>Que comprend le forfait ?</dt><dd>Intervention, hôpital JCI, examens, transferts VIP, hôtel, 12 mois de suivi nutritionnel, médicaments. Aucun frais caché.</dd></dl></section>
<section><h2>Contact</h2><p>WhatsApp : +90 532 413 1143 | E-mail : drmuratustun@gmail.com</p></section>`,
    jsonLd: [{
      "@context": "https://schema.org",
      "@type": "MedicalProcedure",
      "name": "Sleeve Gastroplastie Endoscopique pour patients français",
      "alternateName": ["ESG France", "ESG Turquie", "Sleeve sans chirurgie"],
      "description": "Réduction gastrique mini-invasive pour patients en France. Estomac réduit de 70 à 80 %. Forfaits tout compris à partir d'environ 5 800 € en hôpital accrédité JCI à Istanbul.",
      "procedureType": "Noninvasive",
      "bodyLocation": "Stomach",
      "relevantSpecialty": { "@type": "MedicalSpecialty", "name": "Bariatric Surgery" },
      "offers": [
        { "@type": "Offer", "name": "Forfait Relaxation", "price": "4950", "priceCurrency": "GBP", "description": "ESG, hôpital JCI, Radisson Hotel, suivi nutritionnel 12 mois" },
        { "@type": "Offer", "name": "Forfait Luxury", "price": "5950", "priceCurrency": "GBP", "description": "Expérience VIP premium avec hôtel étendu et suivi complet" }
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        { "@type": "Question", "name": "L'ESG est-elle remboursée par la Sécurité sociale ?", "acceptedAnswer": { "@type": "Answer", "text": "L'ESG n'est actuellement pas prise en charge par l'Assurance maladie en France. Certaines mutuelles haut de gamme évaluent les demandes au cas par cas." } },
        { "@type": "Question", "name": "Combien de temps dure le séjour à Istanbul ?", "acceptedAnswer": { "@type": "Answer", "text": "La plupart des patients français restent 3 à 4 jours. Vols directs depuis Paris, Lyon, Marseille, Toulouse et Nice (~3 h 30)." } },
        { "@type": "Question", "name": "L'intervention est-elle douloureuse ?", "acceptedAnswer": { "@type": "Answer", "text": "L'ESG est réalisée sous anesthésie générale. Après le réveil, des inconforts légers peuvent survenir pendant 1 à 3 jours et sont bien pris en charge." } },
        { "@type": "Question", "name": "Les résultats sont-ils durables ?", "acceptedAnswer": { "@type": "Answer", "text": "Les résultats à long terme dépendent de votre implication. Notre programme de 12 mois avec diététicienne qualifiée vous accompagne." } },
        { "@type": "Question", "name": "Comment l'ESG se compare-t-elle à Ozempic ou Wegovy ?", "acceptedAnswer": { "@type": "Answer", "text": "L'ESG offre une réduction gastrique physique et unique, sans frais médicamenteux récurrents. Beaucoup de patients voient l'ESG comme l'étape suivante logique." } },
        { "@type": "Question", "name": "Quel IMC faut-il pour l'ESG ?", "acceptedAnswer": { "@type": "Answer", "text": "L'ESG est recommandée pour un IMC de 30 à 40, particulièrement pour les patients n'ayant pas obtenu de résultats durables avec les méthodes classiques." } },
        { "@type": "Question", "name": "Un acte médical à l'étranger est-il sûr ?", "acceptedAnswer": { "@type": "Answer", "text": "Istanbul Bariatric Center opère au sein du Liv Hospital, accrédité JCI — le standard international le plus exigeant. Le Dr Murat Üstün a réalisé des milliers d'ESG avec d'excellents résultats." } },
        { "@type": "Question", "name": "Que comprend le forfait tout compris ?", "acceptedAnswer": { "@type": "Answer", "text": "Intervention, hôpital JCI, examens préopératoires, transferts VIP, hôtel, suivi nutritionnel de 12 mois, médicaments et suivi continu. Aucun frais caché." } }
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://istanbulbariatriccenter.com/" },
        { "@type": "ListItem", "position": 2, "name": "Treatments", "item": "https://istanbulbariatriccenter.com/treatments" },
        { "@type": "ListItem", "position": 3, "name": "ESG", "item": "https://istanbulbariatriccenter.com/esg" },
        { "@type": "ListItem", "position": 4, "name": "ESG pour patients français", "item": "https://istanbulbariatriccenter.com/esg/fr" }
      ]
    }]
  },
  "/esg/es": {
    title: "ESG Turquía para pacientes de España | Adelgazar sin cirugía | Hasta 70 % de ahorro",
    description: "ESG sin cirugía para pacientes en España. Hasta 70 % más barato. Todo incluido desde 5.800 € en hospital acreditado JCI. Consulta gratuita.",
    h1: "Gastroplastia Endoscópica en Manga (ESG) para pacientes en España — Adelgazar sin cirugía en Turquía",
    bodyExcerpt: "ESG para pacientes españoles en Istanbul Bariatric Center. Reducción gástrica mínimamente invasiva sin cirugía con paquetes todo incluido desde aprox. 5.800 €. Hasta 70 % más barato que en España. Hospital acreditado JCI, cirujano pionero Dr. Murat Üstün, atención en español, seguimiento nutricional de 12 meses incluido.",
    canonical: SITE_URL + "/esg/es",
    richContent: `<section><h2>¿Qué es la Gastroplastia Endoscópica en Manga (ESG)?</h2><p>La ESG es un procedimiento innovador de reducción gástrica sin cirugía. Se introduce un endoscopio por la boca para realizar suturas internas que reducen el volumen del estómago entre un 70 y un 80 %. A diferencia de la manga gástrica quirúrgica, no se realizan incisiones, no se extrae tejido gástrico y la recuperación es considerablemente más rápida. El procedimiento utiliza la tecnología Apollo OverStitch y dura aproximadamente 60 a 90 minutos bajo anestesia general.</p><p>Para los pacientes españoles, la ESG representa una alternativa revolucionaria que cierra la brecha entre las medidas de estilo de vida que no han funcionado y una cirugía invasiva para la que muchos no están preparados.</p></section>
<section><h2>¿Por qué los pacientes españoles eligen la ESG en Turquía?</h2><h3>Acceso limitado en España</h3><p>Aunque la ESG está creciendo en popularidad, todavía no está ampliamente disponible en el sistema sanitario público español. Las clínicas privadas que la ofrecen son escasas, con listas de espera que pueden extenderse semanas o meses.</p><h3>Ahorro económico significativo</h3><p>En España, la ESG cuesta típicamente entre 8.000 y 14.000 € en clínicas privadas. En Istanbul Bariatric Center, los paquetes todo incluido comienzan desde aproximadamente 5.800 € (£4.950) — un ahorro de hasta el 60–70 %. El paquete incluye procedimiento, hospitalización, hotel, traslados y 12 meses de seguimiento nutricional.</p><h3>Sin tiempos de espera</h3><p>Incluso en grandes ciudades como Madrid, Barcelona, Valencia o Málaga, los tiempos de espera para una consulta privada pueden alcanzar varias semanas. En Istanbul Bariatric Center, su consulta se organiza en pocos días.</p></section>
<section><h2>ESG vs medicamentos para adelgazar</h2><p>Muchos pacientes en España empiezan con medicamentos GLP-1 como Ozempic o Wegovy. La ESG se posiciona cada vez más como el siguiente paso lógico, ofreciendo una reducción gástrica física única sin gastos recurrentes.</p><table><thead><tr><th>Factor</th><th>Ozempic / Wegovy</th><th>ESG</th></tr></thead><tbody><tr><td>Duración de eficacia</td><td>Variable</td><td>Más estable</td></tr><tr><td>Efectos secundarios</td><td>Frecuentes</td><td>Mínimos</td></tr><tr><td>Coste</td><td>200–400 €/mes</td><td>Único desde 5.800 €</td></tr><tr><td>Recuperación de peso</td><td>Frecuente</td><td>Menor</td></tr></tbody></table></section>
<section><h2>ESG vs Manga gástrica quirúrgica</h2><table><thead><tr><th>Característica</th><th>ESG</th><th>Manga gástrica</th></tr></thead><tbody><tr><td>Tipo</td><td>Endoscópico</td><td>Quirúrgico</td></tr><tr><td>Recuperación</td><td>1–3 días</td><td>2–3 semanas</td></tr><tr><td>Cicatrices</td><td>Ninguna</td><td>4–5 pequeñas</td></tr><tr><td>Pérdida de peso</td><td>15–20 % peso corporal</td><td>60–70 % exceso de peso</td></tr><tr><td>Reversibilidad</td><td>Posible</td><td>No</td></tr></tbody></table></section>
<section><h2>¿Por qué Istanbul Bariatric Center?</h2><ul><li><strong>Dr. Murat Üstün</strong> — Pionero de la ESG en Turquía con miles de procedimientos exitosos</li><li><strong>Hospital acreditado JCI</strong> — Liv Hospital, estándar mundial más exigente</li><li><strong>Atención en español</strong> — Comunicación clara, precios transparentes, seguimiento estructurado</li><li><strong>Todo incluido desde ~5.800 €</strong> — Procedimiento, hospital, hotel, traslados, exámenes, 12 meses de seguimiento nutricional</li></ul></section>
<section><h2>Proceso paso a paso</h2><ol><li>Consulta online gratuita vía WhatsApp</li><li>Vuelo directo a Estambul (~3,5–4 horas)</li><li>Traslado VIP aeropuerto al hotel</li><li>Exámenes preoperatorios en el hospital</li><li>Procedimiento ESG (60–90 minutos, sin incisiones)</li><li>Recuperación y regreso a España en 3–4 días</li></ol></section>
<section><h2>Resultados esperados</h2><p>Los pacientes españoles pueden esperar una pérdida de peso del 15 al 20 % en 12 a 18 meses. Pacientes con IMC 38+ pierden en promedio unos 20 kg en 6 meses. Mejoras notables en diabetes tipo 2, hipertensión y apnea del sueño son frecuentemente reportadas.</p></section>
<section><h2>Seguridad y estándares de calidad</h2><p>La ESG es considerada uno de los procedimientos de pérdida de peso más seguros. El Dr. Murat Üstün ha realizado miles de ESG con excelentes resultados. Todos los procedimientos se realizan en el Liv Hospital, acreditado JCI.</p></section>
<section><h2>La vida después de la ESG</h2><p>Primeras 8 horas: líquidos claros. Semanas 1–2: fase líquida. Semanas 3–6: alimentos semisólidos. Desde semana 7: transición a alimentación sólida. Meses 3–12: seguimiento nutricional continuo. Cada paquete incluye 12 meses de seguimiento con nutricionista cualificada.</p></section>
<section><h2>Preguntas frecuentes</h2><dl><dt>¿La ESG está cubierta por la Seguridad Social?</dt><dd>Actualmente no está incluida en la cartera de servicios de la Seguridad Social española. Algunos seguros privados valoran caso por caso.</dd><dt>¿Cuánto dura la estancia?</dt><dd>3 a 4 días. Vuelos directos desde Madrid, Barcelona, Málaga, Valencia (~3,5–4 horas).</dd><dt>¿Es doloroso?</dt><dd>La ESG se realiza bajo anestesia general. Pueden aparecer molestias leves durante 1 a 3 días.</dd><dt>¿Los resultados son duraderos?</dt><dd>Sí, con buen seguimiento. Nuestro programa de 12 meses le acompaña.</dd><dt>¿Cómo se compara con Ozempic?</dt><dd>La ESG ofrece una reducción gástrica física única sin gastos recurrentes.</dd><dt>¿Qué IMC necesito?</dt><dd>La ESG se recomienda para un IMC de 30 a 40.</dd><dt>¿Es seguro un procedimiento en el extranjero?</dt><dd>Istanbul Bariatric Center opera en el Liv Hospital, acreditado JCI. El Dr. Murat Üstün ha realizado miles de ESG.</dd><dt>¿Qué incluye el paquete?</dt><dd>Procedimiento, hospital JCI, exámenes, traslados VIP, hotel, 12 meses de seguimiento nutricional, medicación. Sin costes ocultos.</dd></dl></section>
<section><h2>Contacto</h2><p>WhatsApp: +90 532 413 1143 | Email: drmuratustun@gmail.com</p></section>`,
    jsonLd: [{
      "@context": "https://schema.org",
      "@type": "MedicalProcedure",
      "name": "Gastroplastia Endoscópica en Manga para pacientes españoles",
      "alternateName": ["ESG España", "ESG Turquía", "Reducción de estómago sin cirugía"],
      "description": "Reducción gástrica mínimamente invasiva para pacientes en España. Estómago reducido entre un 70 y un 80 %. Paquetes todo incluido desde aproximadamente 5.800 € en hospital acreditado JCI en Estambul.",
      "procedureType": "Noninvasive",
      "bodyLocation": "Stomach",
      "relevantSpecialty": { "@type": "MedicalSpecialty", "name": "Bariatric Surgery" },
      "offers": [
        { "@type": "Offer", "name": "Paquete Relaxation", "price": "4950", "priceCurrency": "GBP", "description": "ESG, hospital JCI, Radisson Hotel, seguimiento nutricional 12 meses" },
        { "@type": "Offer", "name": "Paquete Luxury", "price": "5950", "priceCurrency": "GBP", "description": "Experiencia VIP premium con hotel ampliado y seguimiento completo" }
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        { "@type": "Question", "name": "¿La ESG está cubierta por la Seguridad Social?", "acceptedAnswer": { "@type": "Answer", "text": "Actualmente no está incluida en la cartera de servicios de la Seguridad Social española. Algunos seguros privados valoran las solicitudes caso por caso." } },
        { "@type": "Question", "name": "¿Cuánto tiempo dura la estancia en Estambul?", "acceptedAnswer": { "@type": "Answer", "text": "La mayoría de los pacientes españoles permanecen entre 3 y 4 días. Vuelos directos desde Madrid, Barcelona, Málaga y Valencia (~3,5–4 horas)." } },
        { "@type": "Question", "name": "¿Es doloroso el procedimiento?", "acceptedAnswer": { "@type": "Answer", "text": "La ESG se realiza bajo anestesia general. Tras el procedimiento, pueden aparecer molestias leves durante 1 a 3 días, bien controladas con medicación." } },
        { "@type": "Question", "name": "¿Los resultados son duraderos?", "acceptedAnswer": { "@type": "Answer", "text": "Los resultados a largo plazo dependen de su compromiso. Nuestro programa de 12 meses con nutricionista cualificada le acompaña." } },
        { "@type": "Question", "name": "¿Cómo se compara la ESG con Ozempic o Wegovy?", "acceptedAnswer": { "@type": "Answer", "text": "La ESG ofrece una reducción gástrica física y única, sin gastos farmacéuticos recurrentes. Muchos pacientes la ven como el paso lógico siguiente." } },
        { "@type": "Question", "name": "¿Qué IMC necesito para la ESG?", "acceptedAnswer": { "@type": "Answer", "text": "La ESG se recomienda para un IMC de 30 a 40, especialmente para pacientes que no han logrado resultados duraderos con métodos convencionales." } },
        { "@type": "Question", "name": "¿Es seguro un procedimiento médico en el extranjero?", "acceptedAnswer": { "@type": "Answer", "text": "Istanbul Bariatric Center opera en el Liv Hospital, acreditado JCI — el estándar internacional más exigente. El Dr. Murat Üstün ha realizado miles de ESG con excelentes resultados." } },
        { "@type": "Question", "name": "¿Qué incluye el paquete todo incluido?", "acceptedAnswer": { "@type": "Answer", "text": "Procedimiento, hospital JCI, exámenes preoperatorios, traslados VIP, hotel, seguimiento nutricional de 12 meses, medicación y seguimiento continuo. Sin costes ocultos." } }
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://istanbulbariatriccenter.com/" },
        { "@type": "ListItem", "position": 2, "name": "Treatments", "item": "https://istanbulbariatriccenter.com/treatments" },
        { "@type": "ListItem", "position": 3, "name": "ESG", "item": "https://istanbulbariatriccenter.com/esg" },
        { "@type": "ListItem", "position": 4, "name": "ESG para pacientes españoles", "item": "https://istanbulbariatriccenter.com/esg/es" }
      ]
    }]
  },
  "/esg/nl": {
    title: "ESG Turkije voor Nederlandse patiënten | Afvallen zonder operatie | Tot 70% besparing",
    description: "ESG zonder operatie voor patiënten uit Nederland. Tot 70% goedkoper. All-inclusive vanaf € 5.800 in JCI-geaccrediteerd ziekenhuis. Gratis consult.",
    h1: "Endoscopische Sleeve Gastroplastiek (ESG) voor patiënten uit Nederland — Afvallen zonder operatie in Turkije",
    bodyExcerpt: "ESG voor Nederlandse patiënten bij Istanbul Bariatric Center. Maagverkleining zonder operatie met all-inclusive pakketten vanaf circa € 5.800. Tot 70% goedkoper dan in Nederland. JCI-geaccrediteerd ziekenhuis, pionier Dr. Murat Üstün, persoonlijke begeleiding, 12 maanden voedingsbegeleiding inbegrepen.",
    canonical: SITE_URL + "/esg/nl",
    richContent: `<section><h2>Wat is de Endoscopische Sleeve Gastroplastiek (ESG)?</h2><p>De ESG is een innovatieve procedure voor maagverkleining zonder operatie. Via de mond wordt een endoscoop ingebracht waarmee interne hechtingen worden geplaatst die het maagvolume met 70 tot 80% verkleinen. In tegenstelling tot de klassieke maagverkleining (sleeve gastrectomy) worden er geen sneden gemaakt, wordt er geen maagweefsel verwijderd en is het herstel aanzienlijk sneller. De procedure maakt gebruik van de Apollo OverStitch-technologie en duurt circa 60 tot 90 minuten onder algehele narcose.</p><p>Voor Nederlandse patiënten vult de ESG een belangrijke leemte — tussen leefstijlmaatregelen die niet hebben gewerkt en een invasieve operatie waarvoor velen niet in aanmerking komen of niet klaar voor zijn.</p></section>
<section><h2>Waarom Nederlandse patiënten voor ESG in Turkije kiezen</h2><h3>Beperkte beschikbaarheid in Nederland</h3><p>De ESG is in Nederland nog niet breed beschikbaar. De procedure wordt niet aangeboden in de reguliere ziekenhuiszorg en de criteria voor bariatrische behandelingen zijn strikt. Privéklinieken die ESG aanbieden zijn schaars en hebben vaak lange wachttijden.</p><h3>Aanzienlijke kostenbesparing</h3><p>In Nederland kost ESG doorgaans € 8.000 tot € 15.000 bij privéklinieken. Bij Istanbul Bariatric Center beginnen all-inclusive pakketten vanaf circa € 5.800 (£4.950) — een besparing van 40 tot 60%. Het pakket omvat de procedure, ziekenhuisopname, hotel, transfer en 12 maanden voedingsbegeleiding.</p><h3>Geen wachttijden</h3><p>Zelfs in grote steden als Amsterdam, Rotterdam, Den Haag of Utrecht kunnen wachttijden voor privéconsulten in de bariatrische zorg weken of maanden bedragen. Bij Istanbul Bariatric Center wordt uw consult binnen enkele dagen georganiseerd.</p></section>
<section><h2>ESG vs afslankmedicatie</h2><p>Veel patiënten in Nederland beginnen met GLP-1-medicatie zoals Ozempic of Wegovy. De ESG positioneert zich steeds vaker als de logische volgende stap, met een eenmalige fysieke maagverkleining zonder doorlopende kosten.</p><table><thead><tr><th>Factor</th><th>Ozempic / Wegovy</th><th>ESG</th></tr></thead><tbody><tr><td>Effectiviteit</td><td>Beperkt</td><td>Stabieler</td></tr><tr><td>Bijwerkingen</td><td>Regelmatig</td><td>Beperkt</td></tr><tr><td>Kosten</td><td>€ 200–400/maand</td><td>Eenmalig vanaf € 5.800</td></tr><tr><td>Gewichtstoename</td><td>Gebruikelijk</td><td>Verminderd</td></tr></tbody></table></section>
<section><h2>ESG vs chirurgische maagverkleining</h2><table><thead><tr><th>Kenmerk</th><th>ESG</th><th>Maagverkleining</th></tr></thead><tbody><tr><td>Type</td><td>Endoscopisch</td><td>Chirurgisch</td></tr><tr><td>Herstel</td><td>1–3 dagen</td><td>2–3 weken</td></tr><tr><td>Littekens</td><td>Geen</td><td>4–5 kleine</td></tr><tr><td>Gewichtsverlies</td><td>15–20% lichaamsgewicht</td><td>60–70% overgewicht</td></tr><tr><td>Omkeerbaarheid</td><td>Mogelijk</td><td>Nee</td></tr></tbody></table></section>
<section><h2>Waarom Istanbul Bariatric Center?</h2><ul><li><strong>Dr. Murat Üstün</strong> — Pionier van ESG in Turkije met duizenden succesvolle ingrepen</li><li><strong>JCI-geaccrediteerd ziekenhuis</strong> — Liv Hospital, internationale gouden standaard</li><li><strong>Nederlands patiëntenteam</strong> — Duidelijke communicatie, transparante prijzen, gestructureerde nazorg</li><li><strong>All-inclusive vanaf ~€ 5.800</strong> — Procedure, ziekenhuis, hotel, transfer, onderzoeken, 12 maanden voedingsbegeleiding</li></ul></section>
<section><h2>Behandeltraject stap voor stap</h2><ol><li>Gratis online consult via WhatsApp</li><li>Directe vlucht naar Istanbul (~3,5 uur)</li><li>VIP-luchthaventransfer naar hotel</li><li>Preoperatieve onderzoeken in het ziekenhuis</li><li>ESG-procedure (60–90 minuten, zonder sneden)</li><li>Herstel en terugkeer naar Nederland binnen 3–4 dagen</li></ol></section>
<section><h2>Verwachte resultaten</h2><p>Nederlandse patiënten kunnen een gewichtsverlies van 15 tot 20% verwachten over 12 tot 18 maanden. Patiënten met BMI 38+ verliezen gemiddeld circa 20 kg in 6 maanden. Merkbare verbeteringen in diabetes type 2, hoge bloeddruk en slaapapneu worden veelvuldig gerapporteerd.</p></section>
<section><h2>Veiligheid en kwaliteitsnormen</h2><p>De ESG wordt beschouwd als een van de veiligste procedures voor gewichtsverlies. Dr. Murat Üstün heeft duizenden ESG-procedures uitgevoerd met uitstekende resultaten. Alle ingrepen vinden plaats in het JCI-geaccrediteerde Liv Hospital.</p></section>
<section><h2>Het leven na ESG</h2><p>Eerste 8 uur: heldere vloeistoffen. Week 1–2: vloeibare fase. Week 3–6: halfvaste voeding. Vanaf week 7: geleidelijke overgang naar vast voedsel. Maand 3–12: doorlopende voedingsbegeleiding. Elk pakket omvat 12 maanden begeleiding door een gekwalificeerde diëtist.</p></section>
<section><h2>Veelgestelde vragen</h2><dl><dt>Wordt ESG vergoed door de zorgverzekering?</dt><dd>Op dit moment wordt ESG niet vergoed door de basisverzekering in Nederland. Sommige aanvullende verzekeringen beoordelen aanvragen per geval.</dd><dt>Hoe lang moet ik in Istanbul blijven?</dt><dd>3 tot 4 dagen. Directe vluchten vanuit Amsterdam Schiphol en Eindhoven (~3,5 uur).</dd><dt>Is de procedure pijnlijk?</dt><dd>De ESG wordt uitgevoerd onder algehele narcose. Lichte klachten kunnen 1 tot 3 dagen aanhouden.</dd><dt>Zijn de resultaten blijvend?</dt><dd>Ja, met goede nazorg. Ons 12-maandenprogramma begeleidt u.</dd><dt>Hoe verhoudt ESG zich tot Ozempic?</dt><dd>ESG biedt een eenmalige fysieke maagverkleining zonder doorlopende kosten.</dd><dt>Welk BMI heb ik nodig?</dt><dd>ESG wordt aanbevolen bij een BMI van 30 tot 40.</dd><dt>Is een behandeling in het buitenland veilig?</dt><dd>Istanbul Bariatric Center opereert in het JCI-geaccrediteerde Liv Hospital. Dr. Murat Üstün heeft duizenden ESG-procedures uitgevoerd.</dd><dt>Wat zit er in het all-inclusive pakket?</dt><dd>Procedure, JCI-ziekenhuis, onderzoeken, VIP-transfer, hotel, 12 maanden voedingsbegeleiding, medicatie. Geen verborgen kosten.</dd></dl></section>
<section><h2>Contact</h2><p>WhatsApp: +90 532 413 1143 | E-mail: drmuratustun@gmail.com</p></section>`,
    jsonLd: [{
      "@context": "https://schema.org",
      "@type": "MedicalProcedure",
      "name": "Endoscopische Sleeve Gastroplastiek voor Nederlandse patiënten",
      "alternateName": ["ESG Nederland", "ESG Turkije", "Maag verkleinen zonder operatie"],
      "description": "Endoscopische sleeve gastroplastiek voor patiënten uit Nederland. Maagverkleining zonder operatie. All-inclusive pakketten vanaf circa € 5.800 in JCI-geaccrediteerd ziekenhuis in Istanbul.",
      "procedureType": "Noninvasive",
      "bodyLocation": "Stomach",
      "relevantSpecialty": { "@type": "MedicalSpecialty", "name": "Bariatric Surgery" },
      "offers": [
        { "@type": "Offer", "name": "Relaxation Pakket", "price": "4950", "priceCurrency": "GBP", "description": "ESG, JCI-ziekenhuis, Radisson Hotel, 12 maanden voedingsbegeleiding" },
        { "@type": "Offer", "name": "Luxury Pakket", "price": "5950", "priceCurrency": "GBP", "description": "VIP premium ervaring met uitgebreid hotel en volledige begeleiding" }
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        { "@type": "Question", "name": "Wordt ESG vergoed door de zorgverzekering?", "acceptedAnswer": { "@type": "Answer", "text": "Op dit moment wordt ESG niet vergoed door de basisverzekering in Nederland. Sommige aanvullende verzekeringen beoordelen aanvragen per geval." } },
        { "@type": "Question", "name": "Hoe lang moet ik in Istanbul blijven?", "acceptedAnswer": { "@type": "Answer", "text": "De meeste Nederlandse patiënten verblijven 3 tot 4 dagen. Directe vluchten vanuit Amsterdam Schiphol en Eindhoven duren circa 3,5 uur." } },
        { "@type": "Question", "name": "Is de procedure pijnlijk?", "acceptedAnswer": { "@type": "Answer", "text": "De ESG wordt uitgevoerd onder algehele narcose. Na het ontwaken kunnen lichte klachten optreden die doorgaans binnen 1 tot 3 dagen verdwijnen." } },
        { "@type": "Question", "name": "Zijn de resultaten blijvend?", "acceptedAnswer": { "@type": "Answer", "text": "De langetermijnresultaten hangen af van uw inzet. Ons 12 maanden durend nazorgprogramma met gekwalificeerde diëtist is inbegrepen." } },
        { "@type": "Question", "name": "Hoe verhoudt ESG zich tot Ozempic of Wegovy?", "acceptedAnswer": { "@type": "Answer", "text": "ESG biedt een eenmalige fysieke maagverkleining zonder doorlopende medicatiekosten. Veel patiënten zien het als de logische volgende stap." } },
        { "@type": "Question", "name": "Welk BMI heb ik nodig voor ESG?", "acceptedAnswer": { "@type": "Answer", "text": "ESG wordt aanbevolen bij een BMI van 30 tot 40, vooral voor patiënten die geen blijvende resultaten hebben behaald met diëten en beweging." } },
        { "@type": "Question", "name": "Is een medische behandeling in het buitenland veilig?", "acceptedAnswer": { "@type": "Answer", "text": "Istanbul Bariatric Center opereert in het JCI-geaccrediteerde Liv Hospital. Dr. Murat Üstün heeft duizenden ESG-procedures uitgevoerd met uitstekende resultaten." } },
        { "@type": "Question", "name": "Wat zit er in het all-inclusive pakket?", "acceptedAnswer": { "@type": "Answer", "text": "Procedure, JCI-ziekenhuis, preoperatieve onderzoeken, VIP-transfer, hotel, 12 maanden voedingsbegeleiding, medicatie en doorlopende nazorg. Geen verborgen kosten." } }
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://istanbulbariatriccenter.com/" },
        { "@type": "ListItem", "position": 2, "name": "Treatments", "item": "https://istanbulbariatriccenter.com/treatments" },
        { "@type": "ListItem", "position": 3, "name": "ESG", "item": "https://istanbulbariatriccenter.com/esg" },
        { "@type": "ListItem", "position": 4, "name": "ESG voor Nederlandse patiënten", "item": "https://istanbulbariatriccenter.com/esg/nl" }
      ]
    }]
  },
  "/esg/ar": {
    title: "عملية طي المعدة بالمنظار في تركيا | ESG للمرضى من الخليج | من ٧,٥٠٠ دولار",
    description: "عملية ESG بدون جراحة للمرضى من الخليج. باقات شاملة من ٧,٥٠٠ دولار. مستشفى معتمد JCI. استشارة مجانية.",
    h1: "عملية طي المعدة بالمنظار (ESG) بدون جراحة — حل متطور لإنقاص الوزن للمرضى من الخليج في تركيا",
    bodyExcerpt: "عملية ESG لمرضى الخليج في مركز إسطنبول لجراحة السمنة. تصغير المعدة بدون جراحة مع باقات شاملة من ٧,٥٠٠ دولار. مستشفى معتمد JCI، الدكتور مراد أوستون رائد ESG في تركيا، مترجمون عرب، متابعة غذائية ١٢ شهرًا.",
    canonical: SITE_URL + "/esg/ar",
    richContent: `<section><h2>ما هي عملية طي المعدة بالمنظار (ESG)؟</h2><p>عملية ESG هي إجراء مبتكر لتصغير المعدة بدون جراحة. يتم إدخال منظار عبر الفم لوضع غرز داخلية تقلل حجم المعدة بنسبة ٧٠ إلى ٨٠٪. بخلاف عملية تكميم المعدة الجراحية، لا يتم عمل أي شقوق، ولا يُستأصل أي نسيج من المعدة، والتعافي أسرع بكثير. يستخدم الإجراء تقنية Apollo OverStitch ويستغرق حوالي ٦٠ إلى ٩٠ دقيقة تحت التخدير العام.</p><p>لمرضى الخليج، تمثل عملية ESG حلاً ثوريًا يسد الفجوة بين الحميات التي لم تنجح والجراحة التقليدية التي قد لا يكون المريض مستعدًا لها.</p></section>
<section><h2>لماذا يختار مرضى الخليج عملية ESG في تركيا؟</h2><h3>جودة طبية عالمية بتكلفة تنافسية</h3><p>في دول الخليج، تكلفة الإجراءات الطبية مرتفعة جدًا. في مركز إسطنبول لجراحة السمنة، نقدم نفس الجودة الطبية — أو أعلى — في مستشفى معتمد JCI، بأسعار تنافسية تبدأ من ٧,٥٠٠ دولار أمريكي.</p><h3>تجربة علاجية فاخرة (VIP)</h3><p>نقدم تجربة متكاملة تشمل استقبال VIP من المطار، إقامة في فنادق فاخرة، مترجمين عرب، خصوصية كاملة، ومتابعة شخصية دقيقة.</p><h3>سرعة في المواعيد</h3><p>بدون قوائم انتظار طويلة. استشارة سريعة، حجز مرن، وإجراء العملية خلال أيام. رحلات مباشرة من الرياض وجدة ودبي والدوحة والكويت.</p></section>
<section><h2>الأسعار — شفافية كاملة</h2><p>الإجراء فقط: ٧,٥٠٠ دولار أمريكي. الباقة الشاملة VIP: ٨,٥٠٠ دولار أمريكي وتشمل العملية، الإقامة في مستشفى JCI، فحوصات وتحاليل، استقبال VIP من المطار، إقامة فندقية فاخرة، أدوية ما بعد العملية، متابعة غذائية ١٢ شهرًا، ومتابعة مستمرة. بدون أي تكاليف مخفية.</p></section>
<section><h2>ESG مقابل أدوية إنقاص الوزن</h2><p>كثير من المرضى في الخليج يبدأون بأدوية GLP-1 مثل أوزمبيك أو ويغوفي. عملية ESG تقدم الحل الأمثل كخطوة تالية.</p><table><thead><tr><th>العامل</th><th>أوزمبيك / ويغوفي</th><th>ESG</th></tr></thead><tbody><tr><td>الاستمرارية</td><td>مؤقتة</td><td>طويلة الأمد</td></tr><tr><td>الأعراض الجانبية</td><td>شائعة</td><td>قليلة</td></tr><tr><td>التكلفة</td><td>٢٠٠-٥٠٠ دولار/شهريًا</td><td>مرة واحدة من ٧,٥٠٠ دولار</td></tr><tr><td>عودة الوزن</td><td>شائعة</td><td>أقل</td></tr></tbody></table></section>
<section><h2>ESG مقابل جراحة تكميم المعدة</h2><table><thead><tr><th>العنصر</th><th>ESG</th><th>تكميم المعدة</th></tr></thead><tbody><tr><td>النوع</td><td>بالمنظار</td><td>جراحي</td></tr><tr><td>التعافي</td><td>١-٣ أيام</td><td>٢-٣ أسابيع</td></tr><tr><td>الندوب</td><td>لا يوجد</td><td>٤-٥ صغيرة</td></tr><tr><td>فقدان الوزن</td><td>١٥-٢٠٪ من الوزن</td><td>٦٠-٧٠٪ من الوزن الزائد</td></tr><tr><td>قابلية الإرجاع</td><td>ممكنة</td><td>دائمة</td></tr></tbody></table></section>
<section><h2>لماذا مركز إسطنبول لجراحة السمنة؟</h2><ul><li><strong>د. مراد أوستون</strong> — رائد عمليات ESG في تركيا مع آلاف العمليات الناجحة</li><li><strong>مستشفى معتمد JCI</strong> — مستشفى ليف، المعيار الذهبي العالمي</li><li><strong>فريق عربي مخصص</strong> — مترجمون عرب، خصوصية كاملة، متابعة شخصية</li><li><strong>باقة VIP شاملة من ٨,٥٠٠ دولار</strong> — العملية، المستشفى، الفندق، الاستقبال VIP، الفحوصات، المتابعة الغذائية ١٢ شهرًا</li></ul></section>
<section><h2>خطوات العلاج</h2><ol><li>استشارة مجانية عبر واتساب</li><li>رحلة مباشرة إلى إسطنبول (٣-٤,٥ ساعات)</li><li>استقبال VIP من المطار إلى الفندق</li><li>فحوصات طبية شاملة في المستشفى</li><li>عملية ESG (٦٠-٩٠ دقيقة، بدون شقوق)</li><li>تعافي والعودة خلال ٣-٤ أيام</li></ol></section>
<section><h2>النتائج المتوقعة</h2><p>يمكن لمرضى الخليج توقع فقدان ١٥ إلى ٢٠٪ من وزنهم خلال ١٢ إلى ١٨ شهرًا. مرضى BMI ٣٨+ يفقدون في المتوسط حوالي ٢٠ كجم في ٦ أشهر. تحسن ملحوظ في السكري وضغط الدم وانقطاع التنفس أثناء النوم.</p></section>
<section><h2>الحياة بعد العملية</h2><p>أول ٨ ساعات: سوائل صافية. الأسبوع ١-٢: مرحلة السوائل. الأسبوع ٣-٦: أطعمة شبه صلبة. من الأسبوع ٧: انتقال تدريجي إلى الأطعمة الصلبة. الشهر ٣-١٢: متابعة غذائية مستمرة. كل باقة تتضمن ١٢ شهرًا من المتابعة مع أخصائية تغذية مؤهلة.</p></section>
<section><h2>الأسئلة الشائعة</h2><dl><dt>هل العملية مؤلمة؟</dt><dd>تُجرى تحت التخدير العام. ألم خفيف لمدة ١ إلى ٣ أيام بعد العملية يمكن السيطرة عليه بالأدوية.</dd><dt>كم مدة الإقامة؟</dt><dd>٣ إلى ٤ أيام. رحلات مباشرة من الرياض وجدة ودبي والدوحة والكويت (٣-٤,٥ ساعات).</dd><dt>هل النتائج دائمة؟</dt><dd>نعم مع الالتزام بنمط حياة صحي. برنامجنا يتضمن ١٢ شهرًا متابعة غذائية.</dd><dt>ما الفرق بين ESG وأوزمبيك؟</dt><dd>ESG تقدم تصغيرًا فعليًا ودائمًا للمعدة بدون تكاليف شهرية متكررة.</dd><dt>ما هو BMI المطلوب؟</dt><dd>يُنصح بعملية ESG لمؤشر كتلة جسم بين ٣٠ و٤٠.</dd><dt>هل العلاج في الخارج آمن؟</dt><dd>مركزنا يعمل في مستشفى ليف المعتمد JCI. الدكتور مراد أوستون أجرى آلاف عمليات ESG.</dd><dt>ماذا تتضمن الباقة الشاملة؟</dt><dd>العملية، المستشفى JCI، الفحوصات، استقبال VIP، الفندق الفاخر، المتابعة الغذائية ١٢ شهرًا، الأدوية. بدون تكاليف مخفية.</dd><dt>هل يتوفر مترجمون عرب؟</dt><dd>نعم. فريقنا يضم منسقين ومترجمين يتحدثون العربية بطلاقة.</dd></dl></section>
<section><h2>تواصل معنا</h2><p>واتساب: +90 532 413 1143 | البريد الإلكتروني: drmuratustun@gmail.com</p></section>`,
    jsonLd: [{
      "@context": "https://schema.org",
      "@type": "MedicalProcedure",
      "name": "عملية طي المعدة بالمنظار للمرضى من الخليج",
      "alternateName": ["ESG Gulf", "ESG Saudi Arabia", "ESG UAE", "طي المعدة بالمنظار", "عملية بدون جراحة"],
      "description": "عملية طي المعدة بالمنظار (ESG) للمرضى من السعودية والإمارات في مركز إسطنبول لجراحة السمنة. تصغير المعدة بدون جراحة. باقات شاملة من ٧,٥٠٠ دولار. مستشفى معتمد JCI.",
      "procedureType": "Noninvasive",
      "bodyLocation": "Stomach",
      "relevantSpecialty": { "@type": "MedicalSpecialty", "name": "Bariatric Surgery" },
      "offers": [
        { "@type": "Offer", "name": "ESG Procedure", "price": "7500", "priceCurrency": "USD", "description": "ESG procedure, JCI hospital, pre-operative tests, 12-month nutritional follow-up" },
        { "@type": "Offer", "name": "VIP All-Inclusive Package", "price": "8500", "priceCurrency": "USD", "description": "Complete VIP experience: procedure, JCI hospital, luxury hotel, VIP airport transfer, all tests, medications, 12-month nutritional program" }
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        { "@type": "Question", "name": "هل عملية ESG مؤلمة؟", "acceptedAnswer": { "@type": "Answer", "text": "تُجرى عملية طي المعدة بالمنظار تحت التخدير العام. بعد الاستيقاظ، قد تشعر بألم خفيف أو غثيان لمدة يوم إلى ثلاثة أيام، ويمكن السيطرة عليه بسهولة بالأدوية." } },
        { "@type": "Question", "name": "كم مدة الإقامة في إسطنبول؟", "acceptedAnswer": { "@type": "Answer", "text": "٣ إلى ٤ أيام. رحلات مباشرة من الرياض وجدة ودبي وأبوظبي والدوحة والكويت (٣ إلى ٤,٥ ساعات)." } },
        { "@type": "Question", "name": "هل النتائج دائمة؟", "acceptedAnswer": { "@type": "Answer", "text": "نعم، مع الالتزام بنمط حياة صحي. برنامجنا يتضمن متابعة غذائية لمدة ١٢ شهرًا مع أخصائية تغذية مؤهلة." } },
        { "@type": "Question", "name": "ما الفرق بين ESG وأوزمبيك/ويغوفي؟", "acceptedAnswer": { "@type": "Answer", "text": "عملية ESG تقدم حلاً واحدًا ودائمًا — تصغير فعلي للمعدة بدون تكاليف شهرية متكررة." } },
        { "@type": "Question", "name": "ما هو مؤشر كتلة الجسم المطلوب؟", "acceptedAnswer": { "@type": "Answer", "text": "يُنصح بعملية ESG لمؤشر كتلة جسم بين ٣٠ و٤٠، خاصة لمن لم يحققوا نتائج دائمة مع الحميات والرياضة." } },
        { "@type": "Question", "name": "هل العلاج في الخارج آمن؟", "acceptedAnswer": { "@type": "Answer", "text": "مركز إسطنبول لجراحة السمنة يعمل في مستشفى ليف المعتمد JCI. الدكتور مراد أوستون أجرى آلاف عمليات ESG بنتائج ممتازة." } },
        { "@type": "Question", "name": "ماذا تتضمن الباقة الشاملة؟", "acceptedAnswer": { "@type": "Answer", "text": "الباقة الشاملة بقيمة ٨,٥٠٠ دولار تشمل العملية، المستشفى JCI، الفحوصات، استقبال VIP، الفندق الفاخر، المتابعة الغذائية ١٢ شهرًا، الأدوية، ومتابعة مستمرة. بدون تكاليف مخفية." } },
        { "@type": "Question", "name": "هل يتوفر مترجمون عرب؟", "acceptedAnswer": { "@type": "Answer", "text": "نعم. فريقنا يضم منسقين ومترجمين يتحدثون العربية بطلاقة. التواصل متاح عبر واتساب على مدار الساعة." } }
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://istanbulbariatriccenter.com/" },
        { "@type": "ListItem", "position": 2, "name": "Treatments", "item": "https://istanbulbariatriccenter.com/treatments" },
        { "@type": "ListItem", "position": 3, "name": "ESG", "item": "https://istanbulbariatriccenter.com/esg" },
        { "@type": "ListItem", "position": 4, "name": "ESG للمرضى من الخليج", "item": "https://istanbulbariatriccenter.com/esg/ar" }
      ]
    }]
  },
  "/esg/it": {
    title: "ESG Turchia per pazienti italiani | Dimagrire senza chirurgia | € 6.450 tutto incluso",
    description: "ESG senza chirurgia per pazienti dall'Italia. Tutto incluso € 6.450 in ospedale accreditato JCI a Istanbul. Consulenza gratuita.",
    h1: "Gastroplastica Endoscopica (ESG) per pazienti dall'Italia — Dimagrire senza chirurgia in Turchia",
    bodyExcerpt: "Gastroplastica Endoscopica (ESG) per pazienti italiani presso Istanbul Bariatric Center. Riduzione dello stomaco senza chirurgia. Pacchetto tutto incluso a € 6.450 — ospedale accreditato JCI, Dr. Murat Üstün, transfer VIP, hotel, supporto nutrizionale 12 mesi. Risparmio del 20-55% rispetto ai prezzi italiani.",
    canonical: SITE_URL + "/esg/it",
    richContent: `<section><h2>Cos'è la Gastroplastica Endoscopica (ESG)?</h2><p>La ESG è una procedura innovativa per la riduzione dello stomaco senza chirurgia. Attraverso la bocca viene introdotto un endoscopio per applicare suture interne che riducono il volume gastrico del 70-80%. A differenza della sleeve gastrectomy chirurgica, non vengono praticate incisioni, non viene rimosso tessuto gastrico e il recupero è significativamente più rapido. La procedura utilizza la tecnologia Apollo OverStitch e dura circa 60-90 minuti in anestesia generale.</p><p>Per i pazienti italiani, la ESG colma un vuoto importante — tra le misure di stile di vita che non hanno funzionato e un intervento chirurgico invasivo per il quale molti non sono pronti.</p></section>
<section><h2>Perché i pazienti italiani scelgono la ESG in Turchia</h2><h3>Accesso limitato in Italia</h3><p>In Italia la ESG non è ancora diffusa. La procedura non è disponibile nella maggior parte degli ospedali pubblici e i criteri per i trattamenti bariatrici nel SSN sono restrittivi. Le cliniche private che offrono la ESG sono rare e hanno spesso lunghe liste d'attesa — anche a Milano, Roma o Napoli.</p><h3>Risparmio significativo</h3><p>In Italia la ESG costa tipicamente € 8.000-15.000 nelle cliniche private. Presso Istanbul Bariatric Center, il pacchetto tutto incluso è di € 6.450 — un risparmio del 20-55%. Il pacchetto include procedura, ospedale JCI, hotel, transfer VIP, esami, farmaci e 12 mesi di supporto nutrizionale.</p><h3>Nessuna lista d'attesa</h3><p>I tempi d'attesa per un consulto privato in ambito bariatrico possono raggiungere settimane o mesi anche nelle grandi città italiane. Presso Istanbul Bariatric Center, il consulto viene organizzato in pochi giorni e il trattamento completo si conclude in 3-4 giorni.</p></section>
<section><h2>Prezzo — Pacchetto ESG tutto incluso</h2><p>€ 6.450 tutto incluso. Il pacchetto comprende: procedura ESG completa, anestesia generale, ricovero in ospedale accreditato JCI, esami preoperatori, transfer VIP dall'aeroporto, soggiorno in hotel, farmaci post-procedura e supporto nutrizionale per 12 mesi con dietista qualificata. Nessun costo nascosto.</p></section>
<section><h2>ESG vs farmaci per dimagrire</h2><p>Molti pazienti in Italia iniziano con farmaci GLP-1 come Ozempic o Wegovy. La ESG offre una soluzione alternativa e complementare.</p><table><thead><tr><th>Fattore</th><th>Ozempic/Wegovy</th><th>ESG</th></tr></thead><tbody><tr><td>Efficacia a lungo termine</td><td>Limitata</td><td>Più stabile</td></tr><tr><td>Effetti collaterali</td><td>Frequenti</td><td>Limitati</td></tr><tr><td>Costi</td><td>€ 200-400/mese continuativi</td><td>Una tantum: € 6.450</td></tr><tr><td>Ripresa del peso</td><td>Frequente</td><td>Ridotta</td></tr></tbody></table></section>
<section><h2>ESG vs Sleeve Gastrica chirurgica</h2><table><thead><tr><th>Caratteristica</th><th>ESG</th><th>Sleeve Gastrica</th></tr></thead><tbody><tr><td>Tipo</td><td>Endoscopico</td><td>Chirurgico</td></tr><tr><td>Recupero</td><td>1-3 giorni</td><td>2-3 settimane</td></tr><tr><td>Cicatrici</td><td>Nessuna</td><td>4-5 piccole</td></tr><tr><td>Perdita di peso</td><td>15-20% del peso corporeo</td><td>60-70% del peso in eccesso</td></tr><tr><td>Reversibilità</td><td>Potenzialmente reversibile</td><td>Permanente</td></tr></tbody></table></section>
<section><h2>Perché Istanbul Bariatric Center</h2><ul><li><strong>Dr. Murat Üstün</strong> — Pioniere della ESG in Turchia con migliaia di interventi bariatrici riusciti</li><li><strong>Ospedale accreditato JCI</strong> — Liv Hospital, il gold standard internazionale</li><li><strong>Team dedicato ai pazienti italiani</strong> — Comunicazione chiara, organizzazione completa, follow-up dedicato</li><li><strong>Pacchetto tutto incluso a € 6.450</strong> — Procedura, ospedale, hotel, transfer VIP, esami, supporto nutrizionale 12 mesi</li></ul></section>
<section><h2>Il percorso del paziente</h2><ol><li>Consulenza online gratuita tramite WhatsApp</li><li>Volo diretto in Turchia (2,5-3 ore da Roma, Milano, Napoli, Venezia)</li><li>Transfer VIP dall'aeroporto all'hotel</li><li>Esami preoperatori completi in ospedale</li><li>Procedura ESG (60-90 minuti, nessuna incisione)</li><li>Recupero e rientro in Italia entro 3-4 giorni</li></ol></section>
<section><h2>Risultati attesi</h2><p>I pazienti italiani possono aspettarsi una perdita del 15-20% del peso corporeo in 12-18 mesi. Pazienti con BMI 38+ perdono in media circa 20 kg nei primi 6 mesi. Notevole miglioramento delle condizioni legate all'obesità: diabete, ipertensione, apnea notturna.</p></section>
<section><h2>La vita dopo la ESG</h2><p>Prime 8 ore: solo liquidi chiari. Settimana 1-2: fase liquida. Settimana 3-6: cibi semisolidi. Dalla settimana 7: transizione graduale verso cibi solidi. Mese 3-12: supporto nutrizionale continuo. Ogni pacchetto include 12 mesi di follow-up con dietista qualificata.</p></section>
<section><h2>Domande frequenti</h2><dl><dt>La ESG è coperta dal SSN?</dt><dd>Attualmente la ESG non è inclusa nei LEA del SSN italiano. Le cliniche private in Italia applicano prezzi di € 8.000-15.000. Presso Istanbul Bariatric Center il pacchetto tutto incluso è di € 6.450.</dd><dt>Quanto dura il soggiorno?</dt><dd>3-4 giorni. Voli diretti da Roma, Milano, Napoli, Venezia e altre città (circa 2,5-3 ore).</dd><dt>La procedura è dolorosa?</dt><dd>Viene eseguita in anestesia generale. Al risveglio possono verificarsi lievi fastidi per 1-3 giorni, ben gestibili con i farmaci.</dd><dt>I risultati sono duraturi?</dt><dd>Sì, con uno stile di vita sano. Il programma include 12 mesi di supporto nutrizionale con dietista qualificata.</dd><dt>Qual è la differenza tra ESG e Ozempic?</dt><dd>La ESG offre una riduzione fisica permanente dello stomaco senza costi mensili ricorrenti.</dd><dt>Quale BMI è necessario?</dt><dd>La ESG è raccomandata per un BMI compreso tra 30 e 40.</dd><dt>È sicuro un trattamento all'estero?</dt><dd>Istanbul Bariatric Center opera presso il Liv Hospital accreditato JCI. Il Dr. Murat Üstün ha eseguito migliaia di ESG con eccellenti risultati.</dd><dt>Cosa include il pacchetto?</dt><dd>Il pacchetto a € 6.450 include procedura, ospedale JCI, esami, transfer VIP, hotel, supporto nutrizionale 12 mesi, farmaci. Nessun costo nascosto.</dd></dl></section>
<section><h2>Contatti</h2><p>WhatsApp: +90 532 413 1143 | Email: drmuratustun@gmail.com</p></section>`,
    jsonLd: [{
      "@context": "https://schema.org",
      "@type": "MedicalProcedure",
      "name": "Gastroplastica Endoscopica per pazienti italiani",
      "alternateName": ["ESG Italia", "ESG Turchia", "Dimagrire senza chirurgia", "Gastroplastica endoscopica prezzo"],
      "description": "Gastroplastica Endoscopica (ESG) per pazienti dall'Italia presso Istanbul Bariatric Center. Riduzione dello stomaco senza chirurgia. Pacchetto tutto incluso a € 6.450. Ospedale accreditato JCI.",
      "procedureType": "Endoscopic",
      "bodyLocation": "Stomach",
      "relevantSpecialty": { "@type": "MedicalSpecialty", "name": "Bariatric Surgery" },
      "offers": [
        { "@type": "Offer", "name": "ESG Pacchetto Tutto Incluso", "price": "6450", "priceCurrency": "EUR", "description": "Procedura ESG completa, ospedale accreditato JCI, hotel, transfer VIP, esami preoperatori, farmaci, supporto nutrizionale 12 mesi" }
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        { "@type": "Question", "name": "La ESG è coperta dal Servizio Sanitario Nazionale?", "acceptedAnswer": { "@type": "Answer", "text": "Attualmente la gastroplastica endoscopica non è inclusa nei LEA del SSN italiano. Le cliniche private in Italia applicano prezzi di € 8.000-15.000. Presso Istanbul Bariatric Center il pacchetto tutto incluso è di € 6.450." } },
        { "@type": "Question", "name": "Quanto dura il soggiorno a Istanbul?", "acceptedAnswer": { "@type": "Answer", "text": "3-4 giorni. Voli diretti da Roma, Milano, Napoli, Venezia e altre città italiane (circa 2,5-3 ore)." } },
        { "@type": "Question", "name": "La procedura è dolorosa?", "acceptedAnswer": { "@type": "Answer", "text": "La ESG viene eseguita in anestesia generale. Al risveglio possono verificarsi lievi fastidi per 1-3 giorni, ben gestibili con i farmaci." } },
        { "@type": "Question", "name": "I risultati sono duraturi?", "acceptedAnswer": { "@type": "Answer", "text": "Sì, con uno stile di vita sano. Il nostro programma include 12 mesi di supporto nutrizionale con dietista qualificata." } },
        { "@type": "Question", "name": "Qual è la differenza tra ESG e Ozempic/Wegovy?", "acceptedAnswer": { "@type": "Answer", "text": "La ESG offre una riduzione fisica permanente dello stomaco — senza costi mensili ricorrenti. Molti pazienti considerano la ESG il passo logico successivo." } },
        { "@type": "Question", "name": "Quale BMI è necessario per la ESG?", "acceptedAnswer": { "@type": "Answer", "text": "La ESG è raccomandata per un BMI compreso tra 30 e 40, soprattutto per chi non ha ottenuto risultati duraturi con diete, esercizio fisico o farmaci." } },
        { "@type": "Question", "name": "È sicuro un trattamento medico all'estero?", "acceptedAnswer": { "@type": "Answer", "text": "Istanbul Bariatric Center opera presso il Liv Hospital accreditato JCI — il gold standard internazionale. Il Dr. Murat Üstün ha eseguito migliaia di procedure ESG con eccellenti risultati." } },
        { "@type": "Question", "name": "Cosa include il pacchetto tutto incluso?", "acceptedAnswer": { "@type": "Answer", "text": "Il pacchetto a € 6.450 include la procedura ESG, il ricovero in ospedale JCI, gli esami preoperatori, il transfer VIP, il soggiorno in hotel, i farmaci post-procedura e il supporto nutrizionale per 12 mesi. Nessun costo nascosto." } }
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://istanbulbariatriccenter.com/" },
        { "@type": "ListItem", "position": 2, "name": "Treatments", "item": "https://istanbulbariatriccenter.com/treatments" },
        { "@type": "ListItem", "position": 3, "name": "ESG", "item": "https://istanbulbariatriccenter.com/esg" },
        { "@type": "ListItem", "position": 4, "name": "ESG per pazienti italiani", "item": "https://istanbulbariatriccenter.com/esg/it" }
      ]
    }]
  },
  "/esg/ru": {
    title: "ESG Турция для пациентов из России | Похудение без операции | Клиника JCI",
    description: "Эндоскопическая гастропластика для пациентов из России и СНГ. Клиника JCI. Пакеты всё включено. Бесплатная консультация.",
    h1: "Эндоскопическая гастропластика (ESG) — эффективное снижение веса без операции в Турции",
    bodyExcerpt: "Эндоскопическая гастропластика (ESG) для пациентов из России и СНГ в Istanbul Bariatric Center. Уменьшение желудка без операции. Клиника с аккредитацией JCI. Доктор Мурат Юстюн. Русскоговорящий персонал. Пакеты «всё включено» с трансфером, проживанием и 12 месяцами нутритивного сопровождения.",
    canonical: SITE_URL + "/esg/ru",
    richContent: `<section><h2>Что такое эндоскопическая гастропластика (ESG)?</h2><p>ESG — это инновационная процедура для уменьшения объёма желудка без хирургического вмешательства. Через рот вводится эндоскоп для наложения внутренних швов, уменьшающих объём желудка на 70-80%. В отличие от рукавной гастрэктомии, не делается ни одного разреза, ткань желудка не удаляется, а восстановление происходит значительно быстрее. Процедура использует технологию Apollo OverStitch и длится 60-90 минут под общим наркозом.</p></section>
<section><h2>Почему пациенты из России выбирают ESG в Турции</h2><h3>Опыт и доступность</h3><p>Турция — мировой лидер в области бариатрической медицины. Современные клиники, опытные хирурги и международные стандарты качества. ESG доступна без длительного ожидания.</p><h3>Доступные цены</h3><p>Стоимость ESG в Стамбуле значительно ниже, чем в частных клиниках России и Европы — при высоком уровне качества. Полный пакет «всё включено» с клиникой JCI, отелем, трансфером и 12 месяцами наблюдения.</p><h3>Удобная логистика</h3><p>Прямые рейсы из Москвы, Санкт-Петербурга, Казани, Екатеринбурга (~3-4 часа). Безвизовый режим. VIP-трансфер и организация пребывания.</p></section>
<section><h2>ESG vs медикаменты</h2><table><thead><tr><th>Фактор</th><th>Ozempic/Wegovy</th><th>ESG</th></tr></thead><tbody><tr><td>Эффект</td><td>Временный</td><td>Стабильный</td></tr><tr><td>Побочные эффекты</td><td>Частые</td><td>Минимальные</td></tr><tr><td>Стоимость</td><td>Постоянная</td><td>Разовая</td></tr><tr><td>Возврат веса</td><td>Часто</td><td>Минимален</td></tr></tbody></table></section>
<section><h2>ESG vs рукавная гастрэктомия</h2><table><thead><tr><th>Характеристика</th><th>ESG</th><th>Рукавная гастрэктомия</th></tr></thead><tbody><tr><td>Тип</td><td>Эндоскопическая</td><td>Хирургическая</td></tr><tr><td>Восстановление</td><td>1-3 дня</td><td>2-3 недели</td></tr><tr><td>Шрамы</td><td>Нет</td><td>4-5 маленьких</td></tr><tr><td>Потеря веса</td><td>15-20% от массы тела</td><td>60-70% избыточного веса</td></tr></tbody></table></section>
<section><h2>Почему Istanbul Bariatric Center</h2><ul><li><strong>Доктор Мурат Юстюн</strong> — пионер ESG в Турции с тысячами успешных процедур</li><li><strong>Клиника JCI</strong> — Liv Hospital, золотой стандарт</li><li><strong>Русскоговорящий персонал</strong> — координаторы и переводчики на русском языке</li><li><strong>Пакеты «всё включено»</strong> — процедура, клиника, отель, трансфер, анализы, 12 мес. наблюдения</li></ul></section>
<section><h2>Этапы лечения</h2><ol><li>Бесплатная онлайн-консультация через WhatsApp</li><li>Прямой рейс в Стамбул (~3-4 часа)</li><li>VIP-трансфер из аэропорта в отель</li><li>Полное медицинское обследование в клинике</li><li>Процедура ESG (60-90 минут, без разрезов)</li><li>Восстановление и возвращение через 3-4 дня</li></ol></section>
<section><h2>Результаты</h2><p>Пациенты могут ожидать потерю 15-20% массы тела за 12-18 месяцев. При ИМТ 38+ средняя потеря составляет около 20 кг за 6 месяцев. Значительное улучшение диабета, давления, апноэ сна.</p></section>
<section><h2>Часто задаваемые вопросы</h2><dl><dt>Процедура болезненна?</dt><dd>ESG проводится под общим наркозом. Лёгкий дискомфорт в течение 1-3 дней после процедуры.</dd><dt>Сколько дней в Стамбуле?</dt><dd>3-4 дня. Прямые рейсы из Москвы, Санкт-Петербурга, Казани (~3-4 часа).</dd><dt>Результат сохраняется?</dt><dd>Да, при здоровом образе жизни. 12 месяцев нутритивного сопровождения включено.</dd><dt>Чем ESG отличается от Ozempic?</dt><dd>ESG — разовое физическое уменьшение желудка без постоянных затрат.</dd><dt>Какой ИМТ нужен?</dt><dd>ESG рекомендуется при ИМТ от 30 до 40.</dd><dt>Безопасно ли?</dt><dd>Все процедуры в клинике Liv Hospital с аккредитацией JCI. Тысячи успешных ESG.</dd><dt>Что включено?</dt><dd>Процедура, клиника JCI, анализы, VIP-трансфер, отель, нутритивное сопровождение 12 месяцев, медикаменты.</dd><dt>Есть русскоговорящий персонал?</dt><dd>Да. Координаторы и переводчики на русском языке. WhatsApp 24/7.</dd></dl></section>
<section><h2>Контакты</h2><p>WhatsApp: +90 532 413 1143 | Email: drmuratustun@gmail.com</p></section>`,
    jsonLd: [{
      "@context": "https://schema.org",
      "@type": "MedicalProcedure",
      "name": "Эндоскопическая гастропластика для пациентов из России и СНГ",
      "alternateName": ["ESG Россия", "ESG Турция", "Похудение без операции", "Эндоскопическая гастропластика"],
      "description": "Эндоскопическая гастропластика (ESG) для пациентов из России и СНГ в Istanbul Bariatric Center. Уменьшение желудка без операции. Клиника JCI. Русскоговорящий персонал.",
      "procedureType": "Endoscopic",
      "bodyLocation": "Stomach",
      "relevantSpecialty": { "@type": "MedicalSpecialty", "name": "Bariatric Surgery" }
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        { "@type": "Question", "name": "Процедура ESG болезненна?", "acceptedAnswer": { "@type": "Answer", "text": "ESG проводится под общим наркозом. После пробуждения может быть лёгкий дискомфорт в течение 1-3 дней, хорошо купируемый медикаментами." } },
        { "@type": "Question", "name": "Сколько дней нужно провести в Стамбуле?", "acceptedAnswer": { "@type": "Answer", "text": "3-4 дня. Прямые рейсы из Москвы, Санкт-Петербурга, Казани и других городов (~3-4 часа)." } },
        { "@type": "Question", "name": "Результат сохраняется надолго?", "acceptedAnswer": { "@type": "Answer", "text": "Да, при здоровом образе жизни. Программа наблюдения 12 месяцев включена во все пакеты." } },
        { "@type": "Question", "name": "Чем ESG отличается от Ozempic/Wegovy?", "acceptedAnswer": { "@type": "Answer", "text": "ESG — разовое физическое уменьшение желудка без постоянных ежемесячных затрат." } },
        { "@type": "Question", "name": "Какой ИМТ нужен для ESG?", "acceptedAnswer": { "@type": "Answer", "text": "ESG рекомендуется при ИМТ от 30 до 40, особенно для тех, кому не помогли диеты и физические нагрузки." } },
        { "@type": "Question", "name": "Безопасно ли лечение за границей?", "acceptedAnswer": { "@type": "Answer", "text": "Istanbul Bariatric Center работает на базе Liv Hospital с аккредитацией JCI — золотой стандарт качества. Тысячи успешных ESG." } },
        { "@type": "Question", "name": "Что включено в пакет?", "acceptedAnswer": { "@type": "Answer", "text": "Процедура, клиника JCI, предоперационные анализы, VIP-трансфер, отель, медикаменты, нутритивное сопровождение 12 месяцев. Без скрытых платежей." } },
        { "@type": "Question", "name": "Есть ли русскоговорящий персонал?", "acceptedAnswer": { "@type": "Answer", "text": "Да. Координаторы и переводчики на русском языке. WhatsApp-поддержка 24/7." } }
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://istanbulbariatriccenter.com/" },
        { "@type": "ListItem", "position": 2, "name": "Treatments", "item": "https://istanbulbariatriccenter.com/treatments" },
        { "@type": "ListItem", "position": 3, "name": "ESG", "item": "https://istanbulbariatriccenter.com/esg" },
        { "@type": "ListItem", "position": 4, "name": "ESG для пациентов из России", "item": "https://istanbulbariatriccenter.com/esg/ru" }
      ]
    }]
  },
  "/esg/ro": {
    title: "ESG Turcia pentru pacienți din România | Slăbire fără operație | Spital JCI",
    description: "Gastroplastie endoscopică fără chirurgie pentru pacienți din România. Spital acreditat JCI. Pachete all-inclusive. Consultație gratuită.",
    h1: "Gastroplastie Endoscopică (ESG) — Slăbire fără operație în Turcia pentru pacienți din România",
    bodyExcerpt: "Gastroplastie Endoscopică (ESG) pentru pacienți din România la Istanbul Bariatric Center. Reducerea stomacului fără chirurgie. Spital acreditat JCI. Dr. Murat Üstün. Pachete all-inclusive cu transfer VIP, cazare hotel și urmărire nutrițională 12 luni. Zboruri directe din București și Cluj (~1,5-2 ore).",
    canonical: SITE_URL + "/esg/ro",
    richContent: `<section><h2>Ce este Gastroplastia Endoscopică (ESG)?</h2><p>ESG este o procedură inovatoare pentru reducerea volumului stomacului fără chirurgie. Prin gură se introduce un endoscop cu care se aplică suturi interne, reducând volumul gastric cu 70-80%. Spre deosebire de sleeve gastrectomy, nu se fac incizii, nu se îndepărtează țesut gastric, iar recuperarea este semnificativ mai rapidă. Procedura folosește tehnologia Apollo OverStitch și durează 60-90 de minute sub anestezie generală.</p></section>
<section><h2>De ce pacienții români aleg ESG în Turcia</h2><h3>Costuri accesibile</h3><p>ESG în clinicile private din România costă între 6.000 și 12.000 €. La Istanbul Bariatric Center, pachetul all-inclusive este semnificativ mai accesibil — cu aceleași standarde internaționale. Include procedura, spitalul JCI, hotelul, transferul și 12 luni de urmărire.</p><h3>Acces rapid</h3><p>Fără liste lungi de așteptare. Consultația se organizează în câteva zile, iar tratamentul complet durează doar 3-4 zile.</p><h3>Experiență medicală</h3><p>Turcia este un lider mondial în chirurgia bariatrică. Dr. Murat Üstün a realizat mii de proceduri ESG cu rezultate excelente, la Liv Hospital acreditat JCI.</p></section>
<section><h2>ESG vs medicamente pentru slăbire</h2><table><thead><tr><th>Factor</th><th>Ozempic/Wegovy</th><th>ESG</th></tr></thead><tbody><tr><td>Eficacitate</td><td>Limitată</td><td>Stabilă</td></tr><tr><td>Efecte secundare</td><td>Frecvente</td><td>Minime</td></tr><tr><td>Cost</td><td>Lunar, continuu</td><td>O singură dată</td></tr><tr><td>Recâștigare</td><td>Frecventă</td><td>Redusă</td></tr></tbody></table></section>
<section><h2>ESG vs Sleeve Gastric</h2><table><thead><tr><th>Caracteristică</th><th>ESG</th><th>Sleeve Gastric</th></tr></thead><tbody><tr><td>Tip</td><td>Endoscopică</td><td>Chirurgicală</td></tr><tr><td>Recuperare</td><td>1-3 zile</td><td>2-3 săptămâni</td></tr><tr><td>Cicatrici</td><td>Niciuna</td><td>4-5 mici</td></tr><tr><td>Pierdere greutate</td><td>15-20% din greutate</td><td>60-70% din excesul ponderal</td></tr></tbody></table></section>
<section><h2>De ce Istanbul Bariatric Center</h2><ul><li><strong>Dr. Murat Üstün</strong> — Pionier ESG în Turcia cu mii de proceduri reușite</li><li><strong>Spital acreditat JCI</strong> — Liv Hospital, standardul de aur</li><li><strong>Suport complet</strong> — Echipă dedicată pacienților internaționali</li><li><strong>Pachete all-inclusive</strong> — Procedură, spital, hotel, transfer, analize, nutriție 12 luni</li></ul></section>
<section><h2>Procesul pacientului</h2><ol><li>Consultație online gratuită prin WhatsApp</li><li>Zbor direct la Istanbul (~1,5-2 ore din București/Cluj)</li><li>Transfer VIP de la aeroport la hotel</li><li>Investigații preoperatorii complete</li><li>Procedura ESG (60-90 minute, fără incizii)</li><li>Recuperare și întoarcere în 3-4 zile</li></ol></section>
<section><h2>Rezultate așteptate</h2><p>Pacienții români pot aștepta o pierdere de 15-20% din greutatea corporală în 12-18 luni. La IMC 38+, media este de aproximativ 20 kg în 6 luni. Îmbunătățire semnificativă a diabetului, tensiunii și apneei de somn.</p></section>
<section><h2>Întrebări frecvente</h2><dl><dt>ESG este acoperită de CNAS?</dt><dd>Nu, gastroplastia endoscopică nu este acoperită de asigurarea de sănătate în România. Clinicile private o oferă la 6.000-12.000 €.</dd><dt>Cât timp la Istanbul?</dt><dd>3-4 zile. Zboruri directe din București și Cluj (~1,5-2 ore).</dd><dt>Este dureroasă?</dt><dd>Se realizează sub anestezie generală. Disconfort ușor 1-3 zile după procedură.</dd><dt>Rezultatele sunt durabile?</dt><dd>Da, cu stil de viață sănătos. 12 luni de urmărire nutrițională incluse.</dd><dt>Diferența față de Ozempic?</dt><dd>ESG oferă reducere fizică permanentă a stomacului fără costuri lunare.</dd><dt>Ce IMC este necesar?</dt><dd>IMC între 30 și 40.</dd><dt>Este sigur?</dt><dd>Spital Liv Hospital acreditat JCI. Dr. Murat Üstün — mii de ESG reușite.</dd><dt>Ce include pachetul?</dt><dd>Procedura, spital JCI, analize, transfer VIP, hotel, nutriție 12 luni, medicație. Fără costuri ascunse.</dd></dl></section>
<section><h2>Contact</h2><p>WhatsApp: +90 532 413 1143 | Email: drmuratustun@gmail.com</p></section>`,
    jsonLd: [{
      "@context": "https://schema.org",
      "@type": "MedicalProcedure",
      "name": "Gastroplastie Endoscopică pentru pacienți din România",
      "alternateName": ["ESG România", "ESG Turcia", "Slăbire fără operație", "Gastroplastie endoscopică"],
      "description": "Gastroplastie Endoscopică (ESG) pentru pacienți din România la Istanbul Bariatric Center. Reducerea stomacului fără chirurgie. Spital acreditat JCI.",
      "procedureType": "Endoscopic",
      "bodyLocation": "Stomach",
      "relevantSpecialty": { "@type": "MedicalSpecialty", "name": "Bariatric Surgery" }
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        { "@type": "Question", "name": "ESG este acoperită de asigurarea de sănătate în România?", "acceptedAnswer": { "@type": "Answer", "text": "Nu, gastroplastia endoscopică nu este acoperită de CNAS. Clinicile private din România o oferă la prețuri de 6.000-12.000 €." } },
        { "@type": "Question", "name": "Cât timp trebuie să stau la Istanbul?", "acceptedAnswer": { "@type": "Answer", "text": "3-4 zile. Zboruri directe din București, Cluj-Napoca și alte orașe (~1,5-2 ore)." } },
        { "@type": "Question", "name": "Procedura este dureroasă?", "acceptedAnswer": { "@type": "Answer", "text": "ESG se realizează sub anestezie generală. După trezire, un ușor disconfort timp de 1-3 zile, ușor de gestionat." } },
        { "@type": "Question", "name": "Rezultatele sunt durabile?", "acceptedAnswer": { "@type": "Answer", "text": "Da, cu stil de viață sănătos. Programul de urmărire nutrițională de 12 luni este inclus în toate pachetele." } },
        { "@type": "Question", "name": "Care este diferența dintre ESG și Ozempic/Wegovy?", "acceptedAnswer": { "@type": "Answer", "text": "ESG oferă o reducere fizică permanentă a stomacului — fără costuri lunare recurente." } },
        { "@type": "Question", "name": "Ce IMC este necesar pentru ESG?", "acceptedAnswer": { "@type": "Answer", "text": "ESG este recomandată pentru un IMC între 30 și 40." } },
        { "@type": "Question", "name": "Este sigur tratamentul medical în străinătate?", "acceptedAnswer": { "@type": "Answer", "text": "Istanbul Bariatric Center operează în spitalul Liv Hospital, acreditat JCI — standardul de aur mondial. Dr. Murat Üstün a realizat mii de proceduri ESG." } },
        { "@type": "Question", "name": "Ce include pachetul complet?", "acceptedAnswer": { "@type": "Answer", "text": "Procedura completă, spital JCI, analize, transfer VIP, cazare hotel, medicație, urmărire nutrițională 12 luni. Fără costuri ascunse." } }
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://istanbulbariatriccenter.com/" },
        { "@type": "ListItem", "position": 2, "name": "Treatments", "item": "https://istanbulbariatriccenter.com/treatments" },
        { "@type": "ListItem", "position": 3, "name": "ESG", "item": "https://istanbulbariatriccenter.com/esg" },
        { "@type": "ListItem", "position": 4, "name": "ESG pentru pacienți din România", "item": "https://istanbulbariatriccenter.com/esg/ro" }
      ]
    }]
  },
  "/esg/se": {
    title: "ESG Turkiet för svenska patienter | Gå ner i vikt utan operation | € 6 450 allt inkluderat",
    description: "ESG utan kirurgi för patienter från Sverige. All-inclusive € 6 450 på JCI-ackrediterat sjukhus i Istanbul. Gratis konsultation.",
    h1: "Endoskopisk Sleeve Gastroplastik (ESG) — Gå ner i vikt utan operation i Turkiet",
    bodyExcerpt: "Endoskopisk Sleeve Gastroplastik (ESG) för patienter från Sverige vid Istanbul Bariatric Center. Magförminskning utan kirurgi. JCI-ackrediterat sjukhus. Dr. Murat Üstün. All-inclusive-paket € 6 450 med VIP-transfer, hotell och 12 månaders nutritionsstöd. Direktflyg från Stockholm Arlanda (~3-3,5 timmar).",
    canonical: SITE_URL + "/esg/se",
    richContent: `<section><h2>Vad är Endoskopisk Sleeve Gastroplastik (ESG)?</h2><p>ESG är en innovativ procedur för att minska magsäckens volym utan kirurgi. Genom munnen förs ett endoskop ned för att placera interna suturer som reducerar magvolymen med 70-80%. Till skillnad från en traditionell sleeve gastrectomy görs inga snitt, ingen vävnad avlägsnas och återhämtningen är betydligt snabbare. Proceduren använder Apollo OverStitch-teknologi och tar 60-90 minuter under generell anestesi.</p></section>
<section><h2>Varför väljer svenska patienter ESG i Turkiet</h2><h3>Begränsad tillgång i Sverige</h3><p>ESG erbjuds ännu inte inom den offentliga svenska sjukvården. Privata kliniker som erbjuder proceduren är sällsynta, väntetiderna är långa — även i Stockholm och Göteborg.</p><h3>Betydande besparingar</h3><p>I Sverige kan ESG kosta 80 000-150 000 SEK på privata kliniker. Hos Istanbul Bariatric Center är all-inclusive-paketet € 6 450 (~70 000 SEK) — inklusive procedur, sjukhus, hotell, transfer och 12 månaders uppföljning.</p><h3>Snabb tillgång</h3><p>Ingen väntelista. Direktflyg från Stockholm Arlanda, Göteborg Landvetter (~3-3,5 timmar). Fullständig behandling inom 3-4 dagar.</p></section>
<section><h2>ESG vs läkemedel</h2><table><thead><tr><th>Faktor</th><th>Ozempic/Wegovy</th><th>ESG</th></tr></thead><tbody><tr><td>Effekt</td><td>Tillfällig</td><td>Långsiktig</td></tr><tr><td>Biverkningar</td><td>Vanliga</td><td>Få</td></tr><tr><td>Kostnad</td><td>Löpande</td><td>Engångs</td></tr><tr><td>Viktuppgång</td><td>Vanlig</td><td>Begränsad</td></tr></tbody></table></section>
<section><h2>ESG vs gastric sleeve-operation</h2><table><thead><tr><th>Egenskap</th><th>ESG</th><th>Gastric Sleeve</th></tr></thead><tbody><tr><td>Typ</td><td>Endoskopisk</td><td>Laparoskopisk kirurgi</td></tr><tr><td>Återhämtning</td><td>1-3 dagar</td><td>2-3 veckor</td></tr><tr><td>Ärr</td><td>Inga</td><td>4-5 små</td></tr><tr><td>Viktnedgång</td><td>15-20% av kroppsvikten</td><td>60-70% av övervikten</td></tr></tbody></table></section>
<section><h2>Varför Istanbul Bariatric Center</h2><ul><li><strong>Dr. Murat Üstün</strong> — Pionjär inom ESG i Turkiet med tusentals framgångsrika procedurer</li><li><strong>JCI-ackrediterat sjukhus</strong> — Liv Hospital, internationell guldstandard</li><li><strong>Internationellt team</strong> — Dedikerat stöd för internationella patienter</li><li><strong>All-inclusive-paket</strong> — Procedur, sjukhus, hotell, transfer, tester, 12 mån nutritionsstöd</li></ul></section>
<section><h2>Behandlingsprocess</h2><ol><li>Gratis onlinekonsultation via WhatsApp</li><li>Direktflyg till Istanbul (~3-3,5 timmar)</li><li>VIP-transfer från flygplatsen till hotellet</li><li>Preoperativa undersökningar på sjukhuset</li><li>ESG-procedur (60-90 minuter, inga snitt)</li><li>Återhämtning och hemresa inom 3-4 dagar</li></ol></section>
<section><h2>Förväntade resultat</h2><p>Svenska patienter kan förvänta sig en viktnedgång på 15-20% av kroppsvikten under 12-18 månader. Vid BMI 38+ är genomsnittlig viktnedgång cirka 20 kg under de första 6 månaderna. Betydande förbättring av diabetes, blodtryck och sömnapné.</p></section>
<section><h2>Vanliga frågor</h2><dl><dt>Är ESG tillgängligt via den svenska sjukvården?</dt><dd>Nej, ESG erbjuds inte inom den offentliga sjukvården. Privata kliniker i Sverige tar 80 000-150 000 SEK.</dd><dt>Hur länge behöver jag stanna i Istanbul?</dt><dd>3-4 dagar. Direktflyg från Stockholm Arlanda, Göteborg Landvetter (~3-3,5 timmar).</dd><dt>Gör proceduren ont?</dt><dd>ESG genomförs under generell anestesi. Milt obehag 1-3 dagar efter proceduren.</dd><dt>Är resultaten hållbara?</dt><dd>Ja, med rätt livsstil. 12 månaders nutritionsstöd ingår i alla paket.</dd><dt>Vad är skillnaden mellan ESG och Ozempic?</dt><dd>ESG erbjuder en engångs fysisk reduktion av magsäcken utan löpande läkemedelskostnader.</dd><dt>Vilket BMI krävs?</dt><dd>BMI mellan 30 och 40 rekommenderas.</dd><dt>Är det säkert?</dt><dd>Alla procedurer på JCI-ackrediterat Liv Hospital. Dr. Murat Üstün — tusentals ESG-procedurer.</dd><dt>Vad ingår i paketet?</dt><dd>Procedur, JCI-sjukhus, tester, VIP-transfer, hotell, läkemedel, 12 månaders nutritionsstöd. Inga dolda kostnader.</dd></dl></section>
<section><h2>Kontakt</h2><p>WhatsApp: +90 532 413 1143 | E-post: drmuratustun@gmail.com</p></section>`,
    jsonLd: [{
      "@context": "https://schema.org",
      "@type": "MedicalProcedure",
      "name": "Endoskopisk Sleeve Gastroplastik för svenska patienter",
      "alternateName": ["ESG Sverige", "ESG Turkiet", "Gå ner i vikt utan operation", "Gastroplastik"],
      "description": "Endoskopisk Sleeve Gastroplastik (ESG) för patienter från Sverige vid Istanbul Bariatric Center. Magförminskning utan kirurgi. JCI-ackrediterat sjukhus.",
      "procedureType": "Endoscopic",
      "bodyLocation": "Stomach",
      "relevantSpecialty": { "@type": "MedicalSpecialty", "name": "Bariatric Surgery" }
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        { "@type": "Question", "name": "Är ESG tillgängligt via den svenska sjukvården?", "acceptedAnswer": { "@type": "Answer", "text": "Nej, ESG erbjuds inte inom den offentliga svenska sjukvården. Enstaka privata kliniker erbjuder proceduren till 80 000-150 000 SEK." } },
        { "@type": "Question", "name": "Hur länge behöver jag stanna i Istanbul?", "acceptedAnswer": { "@type": "Answer", "text": "3-4 dagar. Direktflyg från Stockholm Arlanda och Göteborg Landvetter (~3-3,5 timmar)." } },
        { "@type": "Question", "name": "Gör proceduren ont?", "acceptedAnswer": { "@type": "Answer", "text": "ESG genomförs under generell anestesi. Ett milt obehag kan förekomma 1-3 dagar efter proceduren, kontrollerat med läkemedel." } },
        { "@type": "Question", "name": "Är resultaten hållbara?", "acceptedAnswer": { "@type": "Answer", "text": "Ja, med rätt livsstil. 12 månaders nutritionsstöd med kvalificerad dietist ingår i alla paket." } },
        { "@type": "Question", "name": "Vad är skillnaden mellan ESG och Ozempic/Wegovy?", "acceptedAnswer": { "@type": "Answer", "text": "ESG erbjuder en engångs fysisk reduktion av magsäcken utan löpande läkemedelskostnader." } },
        { "@type": "Question", "name": "Vilket BMI krävs för ESG?", "acceptedAnswer": { "@type": "Answer", "text": "ESG rekommenderas för patienter med BMI mellan 30 och 40." } },
        { "@type": "Question", "name": "Är det säkert att få behandling utomlands?", "acceptedAnswer": { "@type": "Answer", "text": "Istanbul Bariatric Center verkar i Liv Hospital med JCI-ackreditering — den internationella guldstandarden. Dr. Murat Üstün har genomfört tusentals ESG-procedurer." } },
        { "@type": "Question", "name": "Vad ingår i all-inclusive-paketet?", "acceptedAnswer": { "@type": "Answer", "text": "Fullständig ESG-procedur, JCI-sjukhus, preoperativa tester, VIP-transfer, hotellboende, läkemedel, kvalificerat nutritionsstöd i 12 månader. Inga dolda kostnader." } }
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://istanbulbariatriccenter.com/" },
        { "@type": "ListItem", "position": 2, "name": "Treatments", "item": "https://istanbulbariatriccenter.com/treatments" },
        { "@type": "ListItem", "position": 3, "name": "ESG", "item": "https://istanbulbariatriccenter.com/esg" },
        { "@type": "ListItem", "position": 4, "name": "ESG för svenska patienter", "item": "https://istanbulbariatriccenter.com/esg/se" }
      ]
    }]
  },
  "/esg/pl": {
    title: "ESG Turcja dla pacjentów z Polski | Odchudzanie bez operacji | € 6 450 all-inclusive",
    description: "ESG bez chirurgii dla pacjentów z Polski. All-inclusive € 6 450 w szpitalu z akredytacją JCI w Stambule. Bezpłatna konsultacja.",
    h1: "Endoskopowa Gastroplastyka Rękawowa (ESG) — Odchudzanie bez operacji w Turcji",
    bodyExcerpt: "Endoskopowa Gastroplastyka Rękawowa (ESG) dla pacjentów z Polski w Istanbul Bariatric Center. Zmniejszenie żołądka bez operacji. Szpital z akredytacją JCI. Dr Murat Üstün. Pakiet all-inclusive € 6 450 z transferem VIP, hotelem i 12-miesięcznym wsparciem dietetycznym. Bezpośrednie loty z Warszawy i Krakowa (~2,5-3 godziny).",
    canonical: SITE_URL + "/esg/pl",
    richContent: `<section><h2>Czym jest Endoskopowa Gastroplastyka Rękawowa (ESG)?</h2><p>ESG to innowacyjny zabieg polegający na zmniejszeniu objętości żołądka bez chirurgii. Przez usta wprowadzany jest endoskop, za pomocą którego zakładane są wewnętrzne szwy zmniejszające objętość żołądka o 70-80%. W odróżnieniu od tradycyjnej resekcji rękawowej nie wykonuje się żadnych cięć, nie usuwa się tkanki żołądka, a rekonwalescencja jest znacznie krótsza. Zabieg wykorzystuje technologię Apollo OverStitch i trwa 60-90 minut w znieczuleniu ogólnym.</p></section>
<section><h2>Dlaczego polscy pacjenci wybierają ESG w Turcji</h2><h3>Doświadczenie i standardy</h3><p>Turcja jest światowym liderem w chirurgii bariatrycznej. Nowoczesne szpitale z akredytacją JCI, doświadczeni specjaliści i międzynarodowe standardy opieki.</p><h3>Oszczędności finansowe</h3><p>W Polsce prywatne kliniki pobierają 25 000-50 000 PLN za ESG. Nasz pakiet all-inclusive to € 6 450 (~28 000 PLN) — z procedurą, szpitalem JCI, hotelem, transferem i 12-miesięcznym wsparciem dietetycznym.</p><h3>Szybki dostęp</h3><p>Bez kolejek. Bezpośrednie loty z Warszawy, Krakowa, Wrocławia i Gdańska (~2,5-3 godziny). Pełne leczenie w 3-4 dni.</p></section>
<section><h2>ESG vs leki odchudzające</h2><table><thead><tr><th>Czynnik</th><th>Ozempic/Wegovy</th><th>ESG</th></tr></thead><tbody><tr><td>Efekt</td><td>Tymczasowy</td><td>Trwały</td></tr><tr><td>Skutki uboczne</td><td>Częste</td><td>Minimalne</td></tr><tr><td>Koszt</td><td>Stały</td><td>Jednorazowy</td></tr><tr><td>Powrót wagi</td><td>Częsty</td><td>Ograniczony</td></tr></tbody></table></section>
<section><h2>ESG vs chirurgiczna resekcja żołądka</h2><table><thead><tr><th>Cecha</th><th>ESG</th><th>Gastric Sleeve</th></tr></thead><tbody><tr><td>Typ</td><td>Endoskopowy</td><td>Laparoskopowy</td></tr><tr><td>Rekonwalescencja</td><td>1-3 dni</td><td>2-3 tygodnie</td></tr><tr><td>Blizny</td><td>Brak</td><td>4-5 małych</td></tr><tr><td>Utrata wagi</td><td>15-20% masy ciała</td><td>60-70% nadwagi</td></tr></tbody></table></section>
<section><h2>Dlaczego Istanbul Bariatric Center</h2><ul><li><strong>Dr Murat Üstün</strong> — Pionier ESG w Turcji z tysiącami udanych zabiegów</li><li><strong>Szpital z akredytacją JCI</strong> — Liv Hospital, międzynarodowy złoty standard</li><li><strong>Opieka międzynarodowa</strong> — Dedykowany zespół dla pacjentów zagranicznych</li><li><strong>Pakiet all-inclusive</strong> — Zabieg, szpital, hotel, transfer, badania, 12 mies. wsparcia dietetycznego</li></ul></section>
<section><h2>Proces leczenia</h2><ol><li>Bezpłatna konsultacja online przez WhatsApp</li><li>Bezpośredni lot do Stambułu (~2,5-3 godziny)</li><li>Transfer VIP z lotniska do hotelu</li><li>Badania przedoperacyjne w szpitalu</li><li>Zabieg ESG (60-90 minut, bez cięć)</li><li>Rekonwalescencja i powrót w ciągu 3-4 dni</li></ol></section>
<section><h2>Oczekiwane wyniki</h2><p>Polscy pacjenci mogą oczekiwać utraty 15-20% masy ciała w ciągu 12-18 miesięcy. Przy BMI 38+ średnia utrata wagi wynosi około 20 kg w pierwszych 6 miesiącach. Znacząca poprawa cukrzycy, ciśnienia tętniczego i bezdechu sennego.</p></section>
<section><h2>Najczęściej zadawane pytania</h2><dl><dt>Czy ESG jest dostępne w ramach NFZ?</dt><dd>Nie, ESG nie jest refundowane przez NFZ. Prywatne kliniki w Polsce pobierają 25 000-50 000 PLN.</dd><dt>Jak długo trwa pobyt w Stambule?</dt><dd>3-4 dni. Bezpośrednie loty z Warszawy, Krakowa, Wrocławia i Gdańska (~2,5-3 godziny).</dd><dt>Czy zabieg jest bolesny?</dt><dd>ESG wykonywane w znieczuleniu ogólnym. Lekki dyskomfort 1-3 dni po zabiegu.</dd><dt>Czy wyniki są trwałe?</dt><dd>Tak, przy odpowiednim stylu życia. 12-miesięczne wsparcie dietetyczne w cenie.</dd><dt>Czym ESG różni się od Ozempic?</dt><dd>ESG to jednorazowa fizyczna redukcja żołądka bez stałych kosztów leków.</dd><dt>Jakie BMI jest wymagane?</dt><dd>BMI od 30 do 40.</dd><dt>Czy to bezpieczne?</dt><dd>Wszystkie zabiegi w Liv Hospital z akredytacją JCI. Dr Murat Üstün — tysiące zabiegów ESG.</dd><dt>Co obejmuje pakiet?</dt><dd>Zabieg, szpital JCI, badania, transfer VIP, hotel, leki, 12 mies. wsparcia dietetycznego. Bez ukrytych kosztów.</dd></dl></section>
<section><h2>Kontakt</h2><p>WhatsApp: +90 532 413 1143 | E-mail: drmuratustun@gmail.com</p></section>`,
    jsonLd: [{
      "@context": "https://schema.org",
      "@type": "MedicalProcedure",
      "name": "Endoskopowa Gastroplastyka Rękawowa dla pacjentów z Polski",
      "alternateName": ["ESG Polska", "ESG Turcja", "Odchudzanie bez operacji", "Gastroplastyka endoskopowa"],
      "description": "Endoskopowa Gastroplastyka Rękawowa (ESG) dla pacjentów z Polski w Istanbul Bariatric Center. Zmniejszenie żołądka bez operacji. Szpital z akredytacją JCI.",
      "procedureType": "Endoscopic",
      "bodyLocation": "Stomach",
      "relevantSpecialty": { "@type": "MedicalSpecialty", "name": "Bariatric Surgery" }
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        { "@type": "Question", "name": "Czy ESG jest dostępne w ramach NFZ w Polsce?", "acceptedAnswer": { "@type": "Answer", "text": "Nie, ESG nie jest refundowane przez NFZ. Prywatne kliniki w Polsce oferują zabieg w cenach 25 000-50 000 PLN." } },
        { "@type": "Question", "name": "Jak długo trwa pobyt w Stambule?", "acceptedAnswer": { "@type": "Answer", "text": "3-4 dni. Bezpośrednie loty z Warszawy, Krakowa, Wrocławia i Gdańska (~2,5-3 godziny)." } },
        { "@type": "Question", "name": "Czy zabieg jest bolesny?", "acceptedAnswer": { "@type": "Answer", "text": "ESG wykonywane jest w znieczuleniu ogólnym. Po przebudzeniu może wystąpić lekki dyskomfort trwający 1-3 dni, kontrolowany lekami." } },
        { "@type": "Question", "name": "Czy wyniki są trwałe?", "acceptedAnswer": { "@type": "Answer", "text": "Tak, przy odpowiednim stylu życia. 12-miesięczne wsparcie dietetyczne z wykwalifikowanym dietetykiem wliczone w każdy pakiet." } },
        { "@type": "Question", "name": "Czym ESG różni się od Ozempic/Wegovy?", "acceptedAnswer": { "@type": "Answer", "text": "ESG to jednorazowa fizyczna redukcja żołądka — bez stałych miesięcznych kosztów leków." } },
        { "@type": "Question", "name": "Jakie BMI jest wymagane do ESG?", "acceptedAnswer": { "@type": "Answer", "text": "ESG jest zalecane dla pacjentów z BMI od 30 do 40." } },
        { "@type": "Question", "name": "Czy leczenie za granicą jest bezpieczne?", "acceptedAnswer": { "@type": "Answer", "text": "Istanbul Bariatric Center działa w Liv Hospital z akredytacją JCI — międzynarodowym złotym standardem. Dr Murat Üstün przeprowadził tysiące zabiegów ESG." } },
        { "@type": "Question", "name": "Co obejmuje pakiet all-inclusive?", "acceptedAnswer": { "@type": "Answer", "text": "Pełna procedura ESG, szpital JCI, badania przedoperacyjne, transfer VIP, hotel, leki pooperacyjne, wsparcie dietetyczne 12 miesięcy. Bez ukrytych kosztów." } }
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://istanbulbariatriccenter.com/" },
        { "@type": "ListItem", "position": 2, "name": "Treatments", "item": "https://istanbulbariatriccenter.com/treatments" },
        { "@type": "ListItem", "position": 3, "name": "ESG", "item": "https://istanbulbariatriccenter.com/esg" },
        { "@type": "ListItem", "position": 4, "name": "ESG dla pacjentów z Polski", "item": "https://istanbulbariatriccenter.com/esg/pl" }
      ]
    }]
  },
  "/esg/dk": {
    title: "ESG Tyrkiet for danske patienter | Vægttab uden kirurgi | € 6.450 all-inclusive",
    description: "ESG uden kirurgi for patienter fra Danmark. All-inclusive € 6.450 på JCI-akkrediteret hospital i Istanbul. Gratis konsultation.",
    h1: "Endoskopisk Sleeve Gastroplastik (ESG) — Vægttab uden kirurgi i Tyrkiet",
    bodyExcerpt: "Endoskopisk Sleeve Gastroplastik (ESG) for patienter fra Danmark i Istanbul Bariatric Center. Mavereduktion uden kirurgi. JCI-akkrediteret hospital. Dr. Murat Üstün. All-inclusive-pakke € 6.450 med VIP-transfer, hotel og 12 måneders ernæringsstøtte. Direkte fly fra København Kastrup (~3-3,5 timer).",
    canonical: SITE_URL + "/esg/dk",
    richContent: `<section><h2>Hvad er Endoskopisk Sleeve Gastroplastik (ESG)?</h2><p>ESG er en innovativ procedure, der reducerer mavesækkens volumen uden kirurgi. Gennem munden føres et endoskop ned for at placere interne suturer, der reducerer mavevolumenet med 70-80%. I modsætning til en traditionel sleeve gastrectomy laves ingen snit, intet væv fjernes, og restitutionen er væsentligt hurtigere. Proceduren anvender Apollo OverStitch-teknologi og tager ca. 60-90 minutter under generel anæstesi.</p></section>
<section><h2>Hvorfor vælger danske patienter ESG i Tyrkiet</h2><h3>Ekspertise og standarder</h3><p>Tyrkiet er en global leder inden for bariatrisk kirurgi. Moderne hospitaler med JCI-akkreditering, erfarne specialister og internationale standarder for patientpleje.</p><h3>Betydelige besparelser</h3><p>I Danmark kan private klinikker opkræve 60.000-120.000 DKK for ESG. Vores all-inclusive-pakke er € 6.450 (~48.000 DKK) — med procedure, JCI-akkrediteret hospital, hotel, transfer og 12 måneders ernæringsstøtte.</p><h3>Hurtig adgang</h3><p>Ingen venteliste. Direkte fly fra København Kastrup (~3-3,5 timer). Fuld behandling inden for 3-4 dage.</p></section>
<section><h2>ESG vs medicin til vægttab</h2><table><thead><tr><th>Faktor</th><th>Ozempic/Wegovy</th><th>ESG</th></tr></thead><tbody><tr><td>Effekt</td><td>Midlertidig</td><td>Langvarig</td></tr><tr><td>Bivirkninger</td><td>Almindelige</td><td>Få</td></tr><tr><td>Omkostning</td><td>Løbende</td><td>Engangspris</td></tr><tr><td>Vægtøgning</td><td>Almindelig</td><td>Begrænset</td></tr></tbody></table></section>
<section><h2>ESG vs kirurgisk sleeve gastrectomy</h2><table><thead><tr><th>Egenskab</th><th>ESG</th><th>Gastric Sleeve</th></tr></thead><tbody><tr><td>Type</td><td>Endoskopisk</td><td>Laparoskopisk</td></tr><tr><td>Restitution</td><td>1-3 dage</td><td>2-3 uger</td></tr><tr><td>Ar</td><td>Ingen</td><td>4-5 små</td></tr><tr><td>Vægttab</td><td>15-20% af kropsvægt</td><td>60-70% af overvægt</td></tr></tbody></table></section>
<section><h2>Hvorfor Istanbul Bariatric Center</h2><ul><li><strong>Dr. Murat Üstün</strong> — Pioner inden for ESG i Tyrkiet med tusindvis af vellykkede procedurer</li><li><strong>JCI-akkrediteret hospital</strong> — Liv Hospital, international guldstandard</li><li><strong>Internationalt team</strong> — Dedikeret team for udenlandske patienter</li><li><strong>All-inclusive-pakke</strong> — Procedure, hospital, hotel, transfer, tests, 12 mdr. ernæringsstøtte</li></ul></section>
<section><h2>Behandlingsforløb</h2><ol><li>Gratis onlinekonsultation via WhatsApp</li><li>Direkte fly til Istanbul fra København (~3-3,5 timer)</li><li>VIP-transfer fra lufthavnen til hotellet</li><li>Præoperative undersøgelser på hospitalet</li><li>ESG-procedure (60-90 minutter, ingen snit)</li><li>Restitution og hjemrejse inden for 3-4 dage</li></ol></section>
<section><h2>Forventede resultater</h2><p>Danske patienter kan forvente et vægttab på 15-20% af kropsvægten i løbet af 12-18 måneder. Ved BMI 38+ er det gennemsnitlige vægttab ca. 20 kg i de første 6 måneder. Betydelig forbedring af diabetes, forhøjet blodtryk og søvnapnø.</p></section>
<section><h2>Ofte stillede spørgsmål</h2><dl><dt>Er ESG tilgængeligt via det offentlige sundhedsvæsen?</dt><dd>Nej, ESG tilbydes ikke i det offentlige sundhedsvæsen i Danmark. Private klinikker opkræver 60.000-120.000 DKK.</dd><dt>Hvor længe skal jeg blive i Istanbul?</dt><dd>3-4 dage. Direkte fly fra København Kastrup (~3-3,5 timer).</dd><dt>Gør proceduren ondt?</dt><dd>ESG udføres under generel anæstesi. Let ubehag i 1-3 dage efter proceduren.</dd><dt>Er resultaterne varige?</dt><dd>Ja, med den rette livsstil. 12 måneders ernæringsstøtte inkluderet.</dd><dt>Hvad er forskellen på ESG og Ozempic?</dt><dd>ESG er en engangs fysisk reduktion af mavesækken — uden løbende omkostninger til medicin.</dd><dt>Hvilket BMI kræves?</dt><dd>BMI mellem 30 og 40.</dd><dt>Er det sikkert?</dt><dd>Alle procedurer på JCI-akkrediteret Liv Hospital. Dr. Murat Üstün har tusindvis af ESG-procedurer bag sig.</dd><dt>Hvad er inkluderet i pakken?</dt><dd>Procedure, JCI-hospital, tests, VIP-transfer, hotel, medicin, 12 mdr. ernæringsstøtte. Ingen skjulte omkostninger.</dd></dl></section>
<section><h2>Kontakt</h2><p>WhatsApp: +90 532 413 1143 | E-mail: drmuratustun@gmail.com</p></section>`,
    jsonLd: [{
      "@context": "https://schema.org",
      "@type": "MedicalProcedure",
      "name": "Endoskopisk Sleeve Gastroplastik for danske patienter",
      "alternateName": ["ESG Danmark", "ESG Tyrkiet", "Vægttab uden kirurgi", "Mavereduktion uden operation"],
      "description": "Endoskopisk Sleeve Gastroplastik (ESG) for patienter fra Danmark i Istanbul Bariatric Center. Mavereduktion uden kirurgi. JCI-akkrediteret hospital.",
      "procedureType": "Endoscopic",
      "bodyLocation": "Stomach",
      "relevantSpecialty": { "@type": "MedicalSpecialty", "name": "Bariatric Surgery" }
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        { "@type": "Question", "name": "Er ESG tilgængeligt via det offentlige sundhedsvæsen i Danmark?", "acceptedAnswer": { "@type": "Answer", "text": "Nej, ESG tilbydes ikke i det offentlige sundhedsvæsen i Danmark. Private klinikker opkræver 60.000-120.000 DKK." } },
        { "@type": "Question", "name": "Hvor længe skal jeg blive i Istanbul?", "acceptedAnswer": { "@type": "Answer", "text": "3-4 dage. Direkte fly fra København Kastrup (~3-3,5 timer)." } },
        { "@type": "Question", "name": "Gør ESG-proceduren ondt?", "acceptedAnswer": { "@type": "Answer", "text": "ESG udføres under generel anæstesi — I mærker intet under proceduren. Let ubehag i 1-3 dage efter, som håndteres godt med medicin." } },
        { "@type": "Question", "name": "Er resultaterne varige?", "acceptedAnswer": { "@type": "Answer", "text": "Ja, med den rette livsstil. 12 måneders ernæringsstøtte med kvalificeret diætist er inkluderet i alle pakker." } },
        { "@type": "Question", "name": "Hvad er forskellen mellem ESG og Ozempic/Wegovy?", "acceptedAnswer": { "@type": "Answer", "text": "ESG er en engangs fysisk reduktion af mavesækken — uden løbende månedlige omkostninger til medicin." } },
        { "@type": "Question", "name": "Hvilket BMI kræves for ESG?", "acceptedAnswer": { "@type": "Answer", "text": "ESG anbefales for patienter med BMI mellem 30 og 40." } },
        { "@type": "Question", "name": "Er det sikkert at få behandling i udlandet?", "acceptedAnswer": { "@type": "Answer", "text": "Istanbul Bariatric Center opererer på JCI-akkrediteret Liv Hospital. Dr. Murat Üstün har tusindvis af vellykkede ESG-procedurer." } },
        { "@type": "Question", "name": "Hvad er inkluderet i all-inclusive-pakken?", "acceptedAnswer": { "@type": "Answer", "text": "Fuld ESG-procedure, JCI-hospital, tests, VIP-transfer, hotel, medicin og 12 måneders ernæringsstøtte. Ingen skjulte omkostninger." } }
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://istanbulbariatriccenter.com/" },
        { "@type": "ListItem", "position": 2, "name": "Treatments", "item": "https://istanbulbariatriccenter.com/treatments" },
        { "@type": "ListItem", "position": 3, "name": "ESG", "item": "https://istanbulbariatriccenter.com/esg" },
        { "@type": "ListItem", "position": 4, "name": "ESG for danske patienter", "item": "https://istanbulbariatriccenter.com/esg/dk" }
      ]
    }]
  },
  "/esg/no": {
    title: "ESG Tyrkia for norske pasienter | Vekttap uten kirurgi | € 6.450 all-inclusive",
    description: "ESG uten kirurgi for pasienter fra Norge. All-inclusive € 6.450 på JCI-akkreditert sykehus i Istanbul. Gratis konsultasjon.",
    h1: "Endoskopisk Sleeve Gastroplastikk (ESG) — Vekttap uten kirurgi i Tyrkia",
    bodyExcerpt: "Endoskopisk Sleeve Gastroplastikk (ESG) for pasienter fra Norge i Istanbul Bariatric Center. Mageminsking uten kirurgi. JCI-akkreditert sykehus. Dr. Murat Üstün. All-inclusive-pakke € 6.450 med VIP-transfer, hotell og 12 måneders ernæringsstøtte. Direktefly fra Oslo Gardermoen (~3,5-4 timer).",
    canonical: SITE_URL + "/esg/no",
    richContent: `<section><h2>Hva er Endoskopisk Sleeve Gastroplastikk (ESG)?</h2><p>ESG er en innovativ prosedyre som reduserer magesekkens volum uten kirurgi. Gjennom munnen føres et endoskop ned for å plassere interne suturer som reduserer magevolumet med 70-80%. I motsetning til en tradisjonell sleeve gastrectomy gjøres ingen snitt, intet vev fjernes, og rekonvalesensen er vesentlig raskere. Prosedyren bruker Apollo OverStitch-teknologi og tar ca. 60-90 minutter under generell anestesi.</p></section>
<section><h2>Hvorfor velger norske pasienter ESG i Tyrkia</h2><h3>Ekspertise og standarder</h3><p>Tyrkia er verdensledende innen bariatrisk kirurgi. Moderne sykehus med JCI-akkreditering, erfarne spesialister og internasjonale standarder for pasientbehandling.</p><h3>Vesentlige besparelser</h3><p>I Norge kan private klinikker kreve 80.000-150.000 NOK for ESG. Vår all-inclusive-pakke er € 6.450 (~75.000 NOK) — med prosedyre, JCI-akkreditert sykehus, hotell, transfer og 12 måneders ernæringsstøtte.</p><h3>Rask tilgang</h3><p>Ingen venteliste. Direktefly fra Oslo Gardermoen (~3,5-4 timer). Fullstendig behandling innen 3-4 dager.</p></section>
<section><h2>ESG vs medisiner for vekttap</h2><table><thead><tr><th>Faktor</th><th>Ozempic/Wegovy</th><th>ESG</th></tr></thead><tbody><tr><td>Effekt</td><td>Midlertidig</td><td>Langvarig</td></tr><tr><td>Bivirkninger</td><td>Vanlige</td><td>Få</td></tr><tr><td>Kostnad</td><td>Løpende</td><td>Engangspris</td></tr><tr><td>Vektøkning</td><td>Vanlig</td><td>Begrenset</td></tr></tbody></table></section>
<section><h2>ESG vs kirurgisk sleeve gastrectomy</h2><table><thead><tr><th>Egenskap</th><th>ESG</th><th>Gastric Sleeve</th></tr></thead><tbody><tr><td>Type</td><td>Endoskopisk</td><td>Laparoskopisk</td></tr><tr><td>Rekonvalesens</td><td>1-3 dager</td><td>2-3 uker</td></tr><tr><td>Arr</td><td>Ingen</td><td>4-5 små</td></tr><tr><td>Vekttap</td><td>15-20% av kroppsvekt</td><td>60-70% av overvekt</td></tr></tbody></table></section>
<section><h2>Hvorfor Istanbul Bariatric Center</h2><ul><li><strong>Dr. Murat Üstün</strong> — Pioner innen ESG i Tyrkia med tusenvis av vellykkede prosedyrer</li><li><strong>JCI-akkreditert sykehus</strong> — Liv Hospital, internasjonal gullstandard</li><li><strong>Internasjonalt team</strong> — Dedikert team for utenlandske pasienter</li><li><strong>All-inclusive-pakke</strong> — Prosedyre, sykehus, hotell, transfer, tester, 12 mnd. ernæringsstøtte</li></ul></section>
<section><h2>Behandlingsforløp</h2><ol><li>Gratis online konsultasjon via WhatsApp</li><li>Direktefly til Istanbul fra Oslo (~3,5-4 timer)</li><li>VIP-transfer fra flyplassen til hotellet</li><li>Preoperative undersøkelser på sykehuset</li><li>ESG-prosedyre (60-90 minutter, ingen snitt)</li><li>Rekonvalesens og hjemreise innen 3-4 dager</li></ol></section>
<section><h2>Forventede resultater</h2><p>Norske pasienter kan forvente et vekttap på 15-20% av kroppsvekten i løpet av 12-18 måneder. Ved BMI 38+ er gjennomsnittlig vekttap ca. 20 kg de første 6 månedene. Betydelig forbedring av diabetes, høyt blodtrykk og søvnapné.</p></section>
<section><h2>Vanlige spørsmål</h2><dl><dt>Er ESG tilgjengelig via det offentlige helsevesenet?</dt><dd>Nei, ESG tilbys ikke i det offentlige helsevesenet i Norge. Private klinikker krever 80.000-150.000 NOK.</dd><dt>Hvor lenge må jeg bli i Istanbul?</dt><dd>3-4 dager. Direktefly fra Oslo Gardermoen (~3,5-4 timer).</dd><dt>Gjør prosedyren vondt?</dt><dd>ESG utføres under generell anestesi. Lett ubehag i 1-3 dager etter prosedyren.</dd><dt>Er resultatene varige?</dt><dd>Ja, med riktig livsstil. 12 måneders ernæringsstøtte inkludert.</dd><dt>Hva er forskjellen på ESG og Ozempic?</dt><dd>ESG er en engangs fysisk reduksjon av magesekken — uten løpende kostnader til legemidler.</dd><dt>Hvilken BMI kreves?</dt><dd>BMI mellom 30 og 40.</dd><dt>Er det trygt?</dt><dd>Alle prosedyrer på JCI-akkreditert Liv Hospital. Dr. Murat Üstün har tusenvis av ESG-prosedyrer bak seg.</dd><dt>Hva er inkludert i pakken?</dt><dd>Prosedyre, JCI-sykehus, tester, VIP-transfer, hotell, medisin, 12 mnd. ernæringsstøtte. Ingen skjulte kostnader.</dd></dl></section>
<section><h2>Kontakt</h2><p>WhatsApp: +90 532 413 1143 | E-post: drmuratustun@gmail.com</p></section>`,
    jsonLd: [{
      "@context": "https://schema.org",
      "@type": "MedicalProcedure",
      "name": "Endoskopisk Sleeve Gastroplastikk for norske pasienter",
      "alternateName": ["ESG Norge", "ESG Tyrkia", "Vekttap uten kirurgi", "Mageminsking uten operasjon"],
      "description": "Endoskopisk Sleeve Gastroplastikk (ESG) for pasienter fra Norge i Istanbul Bariatric Center. Mageminsking uten kirurgi. JCI-akkreditert sykehus.",
      "procedureType": "Endoscopic",
      "bodyLocation": "Stomach",
      "relevantSpecialty": { "@type": "MedicalSpecialty", "name": "Bariatric Surgery" }
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        { "@type": "Question", "name": "Er ESG tilgjengelig via det offentlige helsevesenet i Norge?", "acceptedAnswer": { "@type": "Answer", "text": "Nei, ESG tilbys ikke i det offentlige helsevesenet i Norge. Private klinikker krever 80.000-150.000 NOK." } },
        { "@type": "Question", "name": "Hvor lenge må jeg bli i Istanbul?", "acceptedAnswer": { "@type": "Answer", "text": "3-4 dager. Direktefly fra Oslo Gardermoen (~3,5-4 timer)." } },
        { "@type": "Question", "name": "Gjør ESG-prosedyren vondt?", "acceptedAnswer": { "@type": "Answer", "text": "ESG utføres under generell anestesi — dere merker ingenting under prosedyren. Lett ubehag i 1-3 dager etter, som håndteres godt med medisiner." } },
        { "@type": "Question", "name": "Er resultatene varige?", "acceptedAnswer": { "@type": "Answer", "text": "Ja, med riktig livsstil. 12 måneders ernæringsstøtte med kvalifisert ernæringsfysiolog er inkludert i alle pakker." } },
        { "@type": "Question", "name": "Hva er forskjellen mellom ESG og Ozempic/Wegovy?", "acceptedAnswer": { "@type": "Answer", "text": "ESG er en engangs fysisk reduksjon av magesekken — uten løpende månedlige kostnader til legemidler." } },
        { "@type": "Question", "name": "Hvilken BMI kreves for ESG?", "acceptedAnswer": { "@type": "Answer", "text": "ESG anbefales for pasienter med BMI mellom 30 og 40." } },
        { "@type": "Question", "name": "Er det trygt å få behandling i utlandet?", "acceptedAnswer": { "@type": "Answer", "text": "Istanbul Bariatric Center opererer på JCI-akkreditert Liv Hospital. Dr. Murat Üstün har tusenvis av vellykkede ESG-prosedyrer." } },
        { "@type": "Question", "name": "Hva er inkludert i all-inclusive-pakken?", "acceptedAnswer": { "@type": "Answer", "text": "Fullstendig ESG-prosedyre, JCI-sykehus, tester, VIP-transfer, hotell, medisin og 12 måneders ernæringsstøtte. Ingen skjulte kostnader." } }
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://istanbulbariatriccenter.com/" },
        { "@type": "ListItem", "position": 2, "name": "Treatments", "item": "https://istanbulbariatriccenter.com/treatments" },
        { "@type": "ListItem", "position": 3, "name": "ESG", "item": "https://istanbulbariatriccenter.com/esg" },
        { "@type": "ListItem", "position": 4, "name": "ESG for norske pasienter", "item": "https://istanbulbariatriccenter.com/esg/no" }
      ]
    }]
  },
  "/esg/hu": {
    title: "ESG Törökország magyar betegeknek | Fogyás műtét nélkül | € 6.450 all-inclusive",
    description: "ESG műtét nélkül magyar pácienseknek. All-inclusive € 6.450 JCI-akkreditált kórházban Isztambulban. Ingyenes konzultáció.",
    h1: "Endoszkópos Sleeve Gastroplasztika (ESG) — Fogyás műtét nélkül Törökországban",
    bodyExcerpt: "Endoszkópos Sleeve Gastroplasztika (ESG) magyar pácienseknek az Istanbul Bariatric Centerben. Gyomor csökkentés műtét nélkül. JCI-akkreditált kórház. Dr. Murat Üstün. All-inclusive csomag € 6.450 VIP transzferrel, szállodával és 12 hónapos dietetikai támogatással. Közvetlen járatok Budapestről (~2-2,5 óra).",
    canonical: SITE_URL + "/esg/hu",
    richContent: `<section><h2>Mi az Endoszkópos Sleeve Gastroplasztika (ESG)?</h2><p>Az ESG egy innovatív eljárás, amely műtét nélkül csökkenti a gyomor térfogatát. A szájon át egy endoszkópot vezetnek le, amellyel belső varratokat helyeznek el, 70-80%-kal csökkentve a gyomor térfogatát. A hagyományos sleeve gastrectomyval ellentétben nincs vágás, nem távolítanak el szövetet, és a felépülés lényegesen gyorsabb. Az eljárás Apollo OverStitch technológiát alkalmaz és kb. 60-90 percig tart általános altatásban.</p></section>
<section><h2>Miért választják a magyar betegek az ESG-t Törökországban</h2><h3>Tapasztalat és szabványok</h3><p>Törökország világvezető a bariatrikus sebészetben. Modern, JCI-akkreditált kórházak, tapasztalt specialisták és nemzetközi ellátási szabványok.</p><h3>Jelentős megtakarítás</h3><p>Magyarországon magánklinikákon 2.000.000-4.000.000 Ft-ba kerülhet az ESG. All-inclusive csomagunk € 6.450 (~2.600.000 Ft) — beavatkozással, JCI kórházzal, szállodával, transzferrel és 12 hónapos dietetikai támogatással.</p><h3>Gyors hozzáférés</h3><p>Nincs várólista. Közvetlen járatok Budapest Liszt Ferencről (~2-2,5 óra). Teljes kezelés 3-4 napon belül.</p></section>
<section><h2>ESG vs fogyókúrás gyógyszerek</h2><table><thead><tr><th>Tényező</th><th>Ozempic/Wegovy</th><th>ESG</th></tr></thead><tbody><tr><td>Hatás</td><td>Átmeneti</td><td>Tartós</td></tr><tr><td>Mellékhatások</td><td>Gyakoriak</td><td>Kevés</td></tr><tr><td>Költség</td><td>Folyamatos</td><td>Egyszeri</td></tr><tr><td>Visszahízás</td><td>Gyakori</td><td>Korlátozott</td></tr></tbody></table></section>
<section><h2>ESG vs gyomorcső műtét</h2><table><thead><tr><th>Tulajdonság</th><th>ESG</th><th>Gastric Sleeve</th></tr></thead><tbody><tr><td>Típus</td><td>Endoszkópos</td><td>Laparoszkópos</td></tr><tr><td>Felépülés</td><td>1-3 nap</td><td>2-3 hét</td></tr><tr><td>Hegek</td><td>Nincsenek</td><td>4-5 kis heg</td></tr><tr><td>Fogyás</td><td>15-20% testsúlyból</td><td>60-70% túlsúlyból</td></tr></tbody></table></section>
<section><h2>Miért az Istanbul Bariatric Center</h2><ul><li><strong>Dr. Murat Üstün</strong> — Az ESG úttörője Törökországban, több ezer sikeres beavatkozással</li><li><strong>JCI-akkreditált kórház</strong> — Liv Hospital, nemzetközi aranyszabvány</li><li><strong>Nemzetközi csapat</strong> — Dedikált csapat külföldi pácienseknek</li><li><strong>All-inclusive csomag</strong> — Beavatkozás, kórház, szálloda, transzfer, vizsgálatok, 12 hó dietetikai támogatás</li></ul></section>
<section><h2>Kezelési folyamat</h2><ol><li>Ingyenes online konzultáció WhatsApp-on</li><li>Közvetlen járat Isztambulba Budapestről (~2-2,5 óra)</li><li>VIP transzfer a repülőtérről a szállodába</li><li>Preoperatív vizsgálatok a kórházban</li><li>ESG beavatkozás (60-90 perc, nincs vágás)</li><li>Felépülés és hazautazás 3-4 napon belül</li></ol></section>
<section><h2>Várható eredmények</h2><p>Magyar páciensek 15-20%-os testsúlycsökkenésre számíthatnak 12-18 hónap alatt. BMI 38+ esetén az átlagos fogyás kb. 20 kg az első 6 hónapban. Jelentős javulás diabétesz, magas vérnyomás és alvási apnoé terén.</p></section>
<section><h2>Gyakran ismételt kérdések</h2><dl><dt>Elérhető az ESG a TB keretében?</dt><dd>Nem, az ESG nem érhető el a magyar társadalombiztosítás keretében. Magánklinikákon 2-4 millió Ft.</dd><dt>Mennyi időt kell Isztambulban tölteni?</dt><dd>3-4 napot. Közvetlen járatok Budapestről (~2-2,5 óra).</dd><dt>Fájdalmas a beavatkozás?</dt><dd>Az ESG-t általános altatásban végzik. Enyhe kellemetlenség 1-3 napig a beavatkozás után.</dd><dt>Tartósak az eredmények?</dt><dd>Igen, megfelelő életmóddal. 12 hónapos dietetikai támogatás benne van az árban.</dd><dt>Mi a különbség az ESG és az Ozempic között?</dt><dd>Az ESG egyszeri fizikai gyomorcsökkentés — folyamatos gyógyszerköltségek nélkül.</dd><dt>Milyen BMI szükséges?</dt><dd>BMI 30 és 40 között.</dd><dt>Biztonságos?</dt><dd>Minden beavatkozás JCI-akkreditált Liv Hospitalban. Dr. Murat Üstün több ezer ESG beavatkozást végzett.</dd><dt>Mit tartalmaz a csomag?</dt><dd>Beavatkozás, JCI kórház, vizsgálatok, VIP transzfer, szálloda, gyógyszerek, 12 hó dietetikai támogatás. Nincsenek rejtett költségek.</dd></dl></section>
<section><h2>Kapcsolat</h2><p>WhatsApp: +90 532 413 1143 | E-mail: drmuratustun@gmail.com</p></section>`,
    jsonLd: [{
      "@context": "https://schema.org",
      "@type": "MedicalProcedure",
      "name": "Endoszkópos Sleeve Gastroplasztika magyar betegeknek",
      "alternateName": ["ESG Magyarország", "ESG Törökország", "Fogyás műtét nélkül", "Gyomor csökkentés műtét nélkül"],
      "description": "Endoszkópos Sleeve Gastroplasztika (ESG) magyar pácienseknek az Istanbul Bariatric Centerben. Gyomor csökkentés műtét nélkül. JCI-akkreditált kórház.",
      "procedureType": "Endoscopic",
      "bodyLocation": "Stomach",
      "relevantSpecialty": { "@type": "MedicalSpecialty", "name": "Bariatric Surgery" }
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        { "@type": "Question", "name": "Elérhető az ESG a magyar egészségügyi rendszerben?", "acceptedAnswer": { "@type": "Answer", "text": "Nem, az ESG nem érhető el a TB keretében. Magánklinikákon 2.000.000-4.000.000 Ft-ba kerülhet." } },
        { "@type": "Question", "name": "Mennyi időt kell Isztambulban tölteni?", "acceptedAnswer": { "@type": "Answer", "text": "3-4 napot. Közvetlen járatok Budapest Liszt Ferencről (~2-2,5 óra)." } },
        { "@type": "Question", "name": "Fájdalmas az ESG beavatkozás?", "acceptedAnswer": { "@type": "Answer", "text": "Az ESG-t általános altatásban végzik — a beavatkozás során semmit sem érez. Enyhe kellemetlenség 1-3 napig, gyógyszerekkel kezelhető." } },
        { "@type": "Question", "name": "Tartósak az eredmények?", "acceptedAnswer": { "@type": "Answer", "text": "Igen, megfelelő életmóddal. 12 hónapos dietetikai támogatás képzett dietetikussal minden csomag részét képezi." } },
        { "@type": "Question", "name": "Mi a különbség az ESG és az Ozempic/Wegovy között?", "acceptedAnswer": { "@type": "Answer", "text": "Az ESG egyszeri fizikai gyomorcsökkentés — folyamatos havi gyógyszerköltségek nélkül." } },
        { "@type": "Question", "name": "Milyen BMI szükséges az ESG-hez?", "acceptedAnswer": { "@type": "Answer", "text": "Az ESG 30 és 40 közötti BMI-vel rendelkező pácienseknek ajánlott." } },
        { "@type": "Question", "name": "Biztonságos a külföldi kezelés?", "acceptedAnswer": { "@type": "Answer", "text": "Az Istanbul Bariatric Center a JCI-akkreditált Liv Hospitalban működik. Dr. Murat Üstün több ezer sikeres ESG beavatkozást végzett." } },
        { "@type": "Question", "name": "Mit tartalmaz az all-inclusive csomag?", "acceptedAnswer": { "@type": "Answer", "text": "Teljes ESG beavatkozás, JCI kórház, vizsgálatok, VIP transzfer, szálloda, gyógyszerek és 12 hónapos dietetikai támogatás. Nincsenek rejtett költségek." } }
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://istanbulbariatriccenter.com/" },
        { "@type": "ListItem", "position": 2, "name": "Treatments", "item": "https://istanbulbariatriccenter.com/treatments" },
        { "@type": "ListItem", "position": 3, "name": "ESG", "item": "https://istanbulbariatriccenter.com/esg" },
        { "@type": "ListItem", "position": 4, "name": "ESG magyar betegeknek", "item": "https://istanbulbariatriccenter.com/esg/hu" }
      ]
    }]
  },
  "/esg/fi": {
    title: "ESG Turkki suomalaisille potilaille | Laihtuminen ilman leikkausta | € 6.450 all-inclusive",
    description: "Endoskooppinen sleeve gastroplastia suomalaisille. All-inclusive € 6.450 JCI-akkreditoidussa sairaalassa. Ilmainen konsultaatio.",
    h1: "Endoskooppinen Sleeve Gastroplastia (ESG) — Laihtuminen ilman leikkausta Turkissa",
    bodyExcerpt: "Endoskooppinen Sleeve Gastroplastia (ESG) suomalaisille potilaille Istanbul Bariatric Centerissä. Mahalaukun pienennys ilman leikkausta. JCI-akkreditoitu sairaala. Dr. Murat Üstün. All-inclusive-paketti € 6.450 VIP-kuljetuksella, hotellilla ja 12 kuukauden ravitsemustuella. Suorat lennot Helsinki-Vantaalta (~3,5-4 tuntia).",
    canonical: SITE_URL + "/esg/fi",
    richContent: `<section><h2>Mikä on Endoskooppinen Sleeve Gastroplastia (ESG)?</h2><p>ESG on innovatiivinen toimenpide, joka pienentää mahalaukun tilavuutta ilman leikkausta. Suun kautta viedään endoskooppi, jolla asetetaan sisäiset ompeleet, jotka pienentävät mahalaukun tilavuutta 70-80%. Toisin kuin perinteisessä sleeve gastrectomyssa ei tehdä viiltoja, kudosta ei poisteta ja toipuminen on huomattavasti nopeampaa. Toimenpide käyttää Apollo OverStitch -teknologiaa ja kestää noin 60-90 minuuttia yleisanestesiassa.</p></section>
<section><h2>Miksi suomalaiset potilaat valitsevat ESG:n Turkissa</h2><h3>Asiantuntemus ja standardit</h3><p>Turkki on maailman johtavia maita bariatrisessa kirurgiassa. Modernit JCI-akkreditoidut sairaalat, kokeneet asiantuntijat ja kansainväliset hoitostandardit.</p><h3>Merkittävät säästöt</h3><p>Suomessa yksityisklinikkojen ESG-hinnat ovat 8.000-15.000 €. All-inclusive-pakettimme on € 6.450 — toimenpiteellä, JCI-sairaalalla, hotellilla, kuljetuksella ja 12 kuukauden ravitsemustuella.</p><h3>Nopea hoitoonpääsy</h3><p>Ei jonotuslistaa. Suorat lennot Helsinki-Vantaalta (~3,5-4 tuntia). Täydellinen hoito 3-4 päivässä.</p></section>
<section><h2>ESG vs painonpudotuslääkkeet</h2><table><thead><tr><th>Tekijä</th><th>Ozempic/Wegovy</th><th>ESG</th></tr></thead><tbody><tr><td>Vaikutus</td><td>Tilapäinen</td><td>Pitkäaikainen</td></tr><tr><td>Haittavaikutukset</td><td>Yleisiä</td><td>Vähäisiä</td></tr><tr><td>Kustannus</td><td>Jatkuva</td><td>Kertamaksu</td></tr><tr><td>Painonnousu</td><td>Yleistä</td><td>Rajallista</td></tr></tbody></table></section>
<section><h2>ESG vs kirurginen sleeve gastrectomy</h2><table><thead><tr><th>Ominaisuus</th><th>ESG</th><th>Gastric Sleeve</th></tr></thead><tbody><tr><td>Tyyppi</td><td>Endoskooppinen</td><td>Laparoskooppinen</td></tr><tr><td>Toipuminen</td><td>1-3 päivää</td><td>2-3 viikkoa</td></tr><tr><td>Arvet</td><td>Ei lainkaan</td><td>4-5 pientä</td></tr><tr><td>Painonpudotus</td><td>15-20% kehonpainosta</td><td>60-70% ylipainosta</td></tr></tbody></table></section>
<section><h2>Miksi Istanbul Bariatric Center</h2><ul><li><strong>Dr. Murat Üstün</strong> — ESG:n uranuurtaja Turkissa tuhansilla onnistuneilla toimenpiteillä</li><li><strong>JCI-akkreditoitu sairaala</strong> — Liv Hospital, kansainvälinen kultastandardi</li><li><strong>Kansainvälinen tiimi</strong> — Omistettu tiimi kansainvälisille potilaille</li><li><strong>All-inclusive-paketti</strong> — Toimenpide, sairaala, hotelli, kuljetus, testit, 12 kk ravitsemustuki</li></ul></section>
<section><h2>Hoitoprosessi</h2><ol><li>Ilmainen online-konsultaatio WhatsAppin kautta</li><li>Suora lento Istanbuliin Helsinki-Vantaalta (~3,5-4 tuntia)</li><li>VIP-kuljetus lentokentältä hotellille</li><li>Preoperatiiviset tutkimukset sairaalassa</li><li>ESG-toimenpide (60-90 minuuttia, ei viiltoja)</li><li>Toipuminen ja kotiinpaluu 3-4 päivän kuluessa</li></ol></section>
<section><h2>Odotetut tulokset</h2><p>Suomalaiset potilaat voivat odottaa 15-20% painonpudotusta 12-18 kuukauden aikana. BMI 38+ potilailla keskimääräinen painonpudotus on noin 20 kg ensimmäisten 6 kuukauden aikana. Merkittävä parannus diabeteksessa, korkeassa verenpaineessa ja uniapneassa.</p></section>
<section><h2>Usein kysytyt kysymykset</h2><dl><dt>Onko ESG saatavilla julkisessa terveydenhuollossa?</dt><dd>Ei, ESG ei ole saatavilla julkisessa terveydenhuollossa Suomessa. Yksityisklinikkojen hinnat ovat 8.000-15.000 €.</dd><dt>Kuinka kauan Istanbulissa tulee olla?</dt><dd>3-4 päivää. Suorat lennot Helsinki-Vantaalta (~3,5-4 tuntia).</dd><dt>Onko toimenpide kivulias?</dt><dd>ESG tehdään yleisanestesiassa. Lievä epämukavuus 1-3 päivää toimenpiteen jälkeen.</dd><dt>Ovatko tulokset pysyviä?</dt><dd>Kyllä, oikealla elämäntavalla. 12 kuukauden ravitsemustuki sisältyy hintaan.</dd><dt>Mikä on ESG:n ja Ozempicin ero?</dt><dd>ESG on kertaalleen tehtävä fyysinen mahalaukun pienennys — ilman jatkuvia lääkekustannuksia.</dd><dt>Mikä BMI vaaditaan?</dt><dd>BMI 30-40.</dd><dt>Onko se turvallista?</dt><dd>Kaikki toimenpiteet JCI-akkreditoidussa Liv Hospitalissa. Dr. Murat Üstün on suorittanut tuhansia ESG-toimenpiteitä.</dd><dt>Mitä paketti sisältää?</dt><dd>Toimenpide, JCI-sairaala, testit, VIP-kuljetus, hotelli, lääkitys, 12 kk ravitsemustuki. Ei piilokustannuksia.</dd></dl></section>
<section><h2>Yhteystiedot</h2><p>WhatsApp: +90 532 413 1143 | Sähköposti: drmuratustun@gmail.com</p></section>`,
    jsonLd: [{
      "@context": "https://schema.org",
      "@type": "MedicalProcedure",
      "name": "Endoskooppinen Sleeve Gastroplastia suomalaisille potilaille",
      "alternateName": ["ESG Suomi", "ESG Turkki", "Laihtuminen ilman leikkausta", "Mahalaukun pienennys ilman leikkausta"],
      "description": "Endoskooppinen Sleeve Gastroplastia (ESG) suomalaisille potilaille Istanbul Bariatric Centerissä. Mahalaukun pienennys ilman leikkausta. JCI-akkreditoitu sairaala.",
      "procedureType": "Endoscopic",
      "bodyLocation": "Stomach",
      "relevantSpecialty": { "@type": "MedicalSpecialty", "name": "Bariatric Surgery" }
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        { "@type": "Question", "name": "Onko ESG saatavilla julkisessa terveydenhuollossa Suomessa?", "acceptedAnswer": { "@type": "Answer", "text": "Ei, ESG ei ole saatavilla julkisessa terveydenhuollossa. Yksityisklinikkojen hinnat ovat 8.000-15.000 €." } },
        { "@type": "Question", "name": "Kuinka kauan minun täytyy olla Istanbulissa?", "acceptedAnswer": { "@type": "Answer", "text": "3-4 päivää. Suorat lennot Helsinki-Vantaalta (~3,5-4 tuntia)." } },
        { "@type": "Question", "name": "Onko ESG-toimenpide kivulias?", "acceptedAnswer": { "@type": "Answer", "text": "ESG tehdään yleisanestesiassa — ette tunne mitään toimenpiteen aikana. Lievä epämukavuus 1-3 päivää, hallittavissa lääkkeillä." } },
        { "@type": "Question", "name": "Ovatko tulokset pysyviä?", "acceptedAnswer": { "@type": "Answer", "text": "Kyllä, oikealla elämäntavalla. 12 kuukauden ravitsemusohjelma pätevän ravitsemusterapeutin kanssa sisältyy kaikkiin paketteihin." } },
        { "@type": "Question", "name": "Mikä on ESG:n ja Ozempicin/Wegovyn ero?", "acceptedAnswer": { "@type": "Answer", "text": "ESG on kertaalleen tehtävä fyysinen mahalaukun pienennys — ilman jatkuvia kuukausittaisia lääkekustannuksia." } },
        { "@type": "Question", "name": "Mikä BMI vaaditaan ESG:hen?", "acceptedAnswer": { "@type": "Answer", "text": "ESG suositellaan potilaille, joiden BMI on 30-40." } },
        { "@type": "Question", "name": "Onko hoito ulkomailla turvallista?", "acceptedAnswer": { "@type": "Answer", "text": "Istanbul Bariatric Center toimii JCI-akkreditoidussa Liv Hospitalissa. Dr. Murat Üstün on suorittanut tuhansia onnistuneita ESG-toimenpiteitä." } },
        { "@type": "Question", "name": "Mitä all-inclusive-paketti sisältää?", "acceptedAnswer": { "@type": "Answer", "text": "Täydellinen ESG-toimenpide, JCI-sairaala, testit, VIP-kuljetus, hotelli, lääkitys ja 12 kuukauden ravitsemustuki. Ei piilokustannuksia." } }
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://istanbulbariatriccenter.com/" },
        { "@type": "ListItem", "position": 2, "name": "Treatments", "item": "https://istanbulbariatriccenter.com/treatments" },
        { "@type": "ListItem", "position": 3, "name": "ESG", "item": "https://istanbulbariatriccenter.com/esg" },
        { "@type": "ListItem", "position": 4, "name": "ESG suomalaisille", "item": "https://istanbulbariatriccenter.com/esg/fi" }
      ]
    }]
  },
  "/esg/ca": {
    title: "ESG Turkey for Canadian Patients | Weight Loss Without Surgery | $8,500 USD All-Inclusive",
    description: "ESG without surgery for Canadian patients. All-inclusive $8,500 USD at JCI-accredited hospital. Save vs Canadian clinics. Free consultation.",
    h1: "Endoscopic Sleeve Gastroplasty (ESG) — Safe, Minimally Invasive Weight Loss in Turkey",
    bodyExcerpt: "Endoscopic Sleeve Gastroplasty (ESG) for Canadian patients at Istanbul Bariatric Center. Stomach reduction without surgery. JCI-accredited hospital. Dr. Murat Üstün. Procedure $7,500 USD or all-inclusive package $8,500 USD with VIP transfers, hotel, and 12-month dietitian support. Direct flights from Toronto Pearson (~10-11 hours).",
    canonical: SITE_URL + "/esg/ca",
    richContent: `<section><h2>What is Endoscopic Sleeve Gastroplasty (ESG)?</h2><p>ESG is an innovative procedure that reduces stomach volume without surgery. A flexible endoscope is inserted through the mouth, and internal sutures are placed to reduce the stomach's capacity by 70-80%. Unlike traditional sleeve gastrectomy, there are no incisions, no tissue is removed, and recovery is significantly faster. The procedure uses Apollo OverStitch technology and takes approximately 60-90 minutes under general anaesthesia.</p></section>
<section><h2>Why Canadian Patients Choose ESG in Turkey</h2><h3>Limited Access in Canada</h3><p>ESG is rarely available through provincial healthcare. Wait times for publicly funded bariatric surgery can exceed 2-5 years. Private clinics in Toronto, Vancouver, or Montreal charge $15,000-$25,000 CAD or more.</p><h3>Significant Savings</h3><p>Our all-inclusive package is $8,500 USD (~$11,500 CAD) — including the procedure at a JCI-accredited hospital, hotel accommodation, VIP airport transfers, and 12-month dietitian support. Procedure-only option available at $7,500 USD.</p><h3>No Wait Times</h3><p>Skip years-long waiting lists. Fast consultation, flexible scheduling, and complete treatment in 3-4 days. Direct flights from Toronto Pearson (~10-11 hours).</p></section>
<section><h2>ESG vs Weight Loss Medications</h2><table><thead><tr><th>Factor</th><th>Ozempic/Wegovy</th><th>ESG</th></tr></thead><tbody><tr><td>Effectiveness</td><td>Temporary</td><td>Long-term</td></tr><tr><td>Side effects</td><td>Common</td><td>Minimal</td></tr><tr><td>Cost</td><td>Ongoing $300-$500 CAD/month</td><td>One-time $8,500 USD</td></tr><tr><td>Weight regain</td><td>Common after stopping</td><td>Limited</td></tr></tbody></table></section>
<section><h2>ESG vs Gastric Sleeve Surgery</h2><table><thead><tr><th>Feature</th><th>ESG</th><th>Gastric Sleeve</th></tr></thead><tbody><tr><td>Type</td><td>Endoscopic</td><td>Laparoscopic</td></tr><tr><td>Recovery</td><td>1-3 days</td><td>2-3 weeks</td></tr><tr><td>Scarring</td><td>None</td><td>4-5 small scars</td></tr><tr><td>Weight loss</td><td>15-20% of body weight</td><td>60-70% of excess weight</td></tr></tbody></table></section>
<section><h2>Why Istanbul Bariatric Center</h2><ul><li><strong>Dr. Murat Üstün</strong> — Pioneer of ESG in Turkey with thousands of successful procedures</li><li><strong>JCI-accredited hospital</strong> — Liv Hospital, same international standard as top Canadian hospitals</li><li><strong>International team</strong> — Dedicated English-speaking coordinators for Canadian patients</li><li><strong>All-inclusive packages</strong> — Procedure, hospital, hotel, transfers, tests, 12-month dietitian support</li></ul></section>
<section><h2>Your Treatment Journey</h2><ol><li>Free online consultation via WhatsApp or website</li><li>Direct flight to Istanbul from Toronto (~10-11 hours)</li><li>VIP transfer from airport to hotel</li><li>Pre-operative assessments at hospital</li><li>ESG procedure (60-90 minutes, no incisions)</li><li>Recovery and travel home within 3-4 days</li></ol></section>
<section><h2>Expected Results</h2><p>Canadian patients can expect 15-20% total body weight loss over 12-18 months. For patients with BMI 38+, average weight loss is approximately 45 lbs in the first 6 months. Significant improvement in type 2 diabetes, hypertension, and sleep apnea.</p></section>
<section><h2>Frequently Asked Questions</h2><dl><dt>Is ESG available through provincial healthcare?</dt><dd>No, ESG is not covered by provincial health plans. Private clinics charge $15,000-$25,000+ CAD.</dd><dt>How long do I need to stay in Istanbul?</dt><dd>3-4 days. Direct flights from Toronto Pearson (~10-11 hours).</dd><dt>Is the procedure painful?</dt><dd>ESG is performed under general anaesthesia. Mild discomfort for 1-3 days post-procedure.</dd><dt>Are results long-lasting?</dt><dd>Yes, with proper lifestyle changes. 12-month dietitian support is included.</dd><dt>How does ESG compare to Ozempic?</dt><dd>ESG is a one-time physical stomach reduction — no ongoing prescription costs.</dd><dt>What BMI is required?</dt><dd>BMI between 30 and 40.</dd><dt>Is it safe?</dt><dd>All procedures at JCI-accredited Liv Hospital. Dr. Murat Üstün has performed thousands of ESG procedures.</dd><dt>What's included in the package?</dt><dd>Procedure, JCI hospital, tests, VIP transfers, hotel, medications, 12-month dietitian support. No hidden costs.</dd></dl></section>
<section><h2>Contact</h2><p>WhatsApp: +90 532 413 1143 | Email: drmuratustun@gmail.com</p></section>`,
    jsonLd: [{
      "@context": "https://schema.org",
      "@type": "MedicalProcedure",
      "name": "Endoscopic Sleeve Gastroplasty for Canadian Patients",
      "alternateName": ["ESG Canada", "ESG Turkey", "Weight loss without surgery Canada", "Bariatric Turkey for Canadians"],
      "description": "Endoscopic Sleeve Gastroplasty (ESG) for Canadian patients at Istanbul Bariatric Center. Stomach reduction without surgery. JCI-accredited hospital.",
      "procedureType": "Endoscopic",
      "bodyLocation": "Stomach",
      "relevantSpecialty": { "@type": "MedicalSpecialty", "name": "Bariatric Surgery" }
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        { "@type": "Question", "name": "Is ESG available through provincial healthcare in Canada?", "acceptedAnswer": { "@type": "Answer", "text": "No, ESG is not covered by provincial health plans (OHIP, MSP, AHCIP, etc.). Private clinics charge $15,000-$25,000+ CAD." } },
        { "@type": "Question", "name": "How long do I need to stay in Istanbul?", "acceptedAnswer": { "@type": "Answer", "text": "3-4 days. Direct flights from Toronto Pearson (~10-11 hours) with connections from all major Canadian cities." } },
        { "@type": "Question", "name": "Is the ESG procedure painful?", "acceptedAnswer": { "@type": "Answer", "text": "ESG is performed under general anaesthesia — you won't feel anything during the procedure. Mild discomfort for 1-3 days, managed with medication." } },
        { "@type": "Question", "name": "Are the results long-lasting?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, with the right lifestyle. 12-month dietitian program with a qualified nutritionist is included in every package." } },
        { "@type": "Question", "name": "How does ESG compare to Ozempic or Wegovy?", "acceptedAnswer": { "@type": "Answer", "text": "ESG is a one-time physical stomach reduction — no ongoing monthly prescription costs of $300-$500 CAD." } },
        { "@type": "Question", "name": "What BMI is required for ESG?", "acceptedAnswer": { "@type": "Answer", "text": "ESG is recommended for patients with a BMI between 30 and 40." } },
        { "@type": "Question", "name": "Is it safe to have medical treatment abroad?", "acceptedAnswer": { "@type": "Answer", "text": "Istanbul Bariatric Center operates at JCI-accredited Liv Hospital — the same international standard as top Canadian hospitals." } },
        { "@type": "Question", "name": "What does the all-inclusive package include?", "acceptedAnswer": { "@type": "Answer", "text": "Complete ESG procedure, JCI hospital, tests, VIP transfers, hotel, medications, and 12-month dietitian support. No hidden costs." } }
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://istanbulbariatriccenter.com/" },
        { "@type": "ListItem", "position": 2, "name": "Treatments", "item": "https://istanbulbariatriccenter.com/treatments" },
        { "@type": "ListItem", "position": 3, "name": "ESG", "item": "https://istanbulbariatriccenter.com/esg" },
        { "@type": "ListItem", "position": 4, "name": "ESG for Canadian Patients", "item": "https://istanbulbariatriccenter.com/esg/ca" }
      ]
    }]
  },
  "/esg/us": {
    title: "ESG Turkey for US Patients | Minimally Invasive Weight Loss | $8,500 All-Inclusive",
    description: "ESG for US patients. Procedure $7,500, all-inclusive $8,500 USD at JCI-accredited hospital in Istanbul. Free consultation.",
    h1: "Endoscopic Sleeve Gastroplasty (ESG) — A Minimally Invasive Alternative to Traditional Bariatric Surgery",
    bodyExcerpt: "Endoscopic Sleeve Gastroplasty (ESG) for American patients at Istanbul Bariatric Center. Evidence-based stomach reduction without surgery. JCI-accredited hospital. Dr. Murat Üstün. Procedure $7,500 USD or all-inclusive $8,500 USD with VIP transfers, 4-star hotel, and 12-month dietitian support via telemedicine. Direct flights from NYC, Chicago, LA, Houston, Miami.",
    canonical: SITE_URL + "/esg/us",
    richContent: `<section><h2>How ESG Works — The Science</h2><p>ESG is an innovative endoscopic procedure that reduces stomach volume by 70-80% without surgical incisions. A flexible endoscope is inserted through the mouth, and internal sutures are placed using FDA-cleared Apollo OverStitch technology. Unlike traditional sleeve gastrectomy, no tissue is removed, and the procedure is potentially reversible. Published clinical data demonstrates 15-20% total body weight loss at 12-18 months, with durable results at 2-5 year follow-up.</p></section>
<section><h2>Why American Patients Choose ESG in Turkey</h2><h3>Limited US Access & High Costs</h3><p>ESG is not widely available in US clinics. Where offered, prices range from $15,000-$25,000+ out-of-pocket, as most insurers consider ESG investigational. Wait times for bariatric programs can exceed 6-12 months.</p><h3>65-70% Cost Savings</h3><p>Our all-inclusive package is $8,500 USD — a fraction of US pricing. This includes the procedure at a JCI-accredited hospital, 4-star hotel, VIP transfers, and 12-month dietitian support via telemedicine. HSA/FSA-eligible. Procedure-only option at $7,500 USD.</p><h3>Fast Scheduling</h3><p>From consultation to procedure in as little as 2 weeks. Direct flights from NYC (~10h), Chicago (~11h), LA (~13h), Houston (~12h), Miami (~11h).</p></section>
<section><h2>ESG vs Weight Loss Medications</h2><table><thead><tr><th>Factor</th><th>Ozempic/Wegovy</th><th>ESG</th></tr></thead><tbody><tr><td>Effectiveness</td><td>Temporary — 2/3 weight returns after stopping</td><td>Durable at 2-5 year follow-up</td></tr><tr><td>Side effects</td><td>Common (nausea, pancreatitis risk)</td><td>Minimal (1-3 days discomfort)</td></tr><tr><td>Annual cost</td><td>$12,000-$18,000/year</td><td>One-time $8,500 USD</td></tr><tr><td>FDA status</td><td>FDA-approved</td><td>FDA-cleared device</td></tr></tbody></table></section>
<section><h2>ESG vs Gastric Sleeve Surgery</h2><table><thead><tr><th>Feature</th><th>ESG</th><th>Gastric Sleeve</th></tr></thead><tbody><tr><td>Type</td><td>Endoscopic</td><td>Laparoscopic (4-5 incisions)</td></tr><tr><td>Recovery</td><td>1-3 days</td><td>2-4 weeks</td></tr><tr><td>Complications</td><td>&lt;1% serious</td><td>1-3% serious</td></tr><tr><td>Weight loss</td><td>15-20% body weight</td><td>60-70% excess weight</td></tr><tr><td>US cost</td><td>$15,000-$25,000</td><td>$15,000-$35,000</td></tr></tbody></table></section>
<section><h2>Why Istanbul Bariatric Center</h2><ul><li><strong>Dr. Murat Üstün</strong> — Pioneer of ESG in Turkey with thousands of successful procedures and complication rates comparable to leading US centers</li><li><strong>JCI-accredited hospital</strong> — Liv Hospital, same accreditation as Cleveland Clinic, Mayo Clinic, Johns Hopkins</li><li><strong>US patient support</strong> — English-speaking coordinators, telemedicine follow-up compatible with US time zones</li><li><strong>Transparent pricing</strong> — No surprise bills. From $7,500 procedure only to $8,500 all-inclusive</li></ul></section>
<section><h2>Treatment Timeline</h2><ol><li>Free online consultation — medical team review within 24-48 hours</li><li>Direct flight to Istanbul from major US hubs (NYC, Chicago, LA, Houston, Miami)</li><li>VIP transfer from Istanbul Airport (IST) to 4-star hotel</li><li>Comprehensive pre-operative assessments (labs, ECG, ultrasound)</li><li>ESG procedure (60-90 minutes, no incisions, FDA-cleared technology)</li><li>Recovery and travel home within 3-4 days, telemedicine follow-up begins within one week</li></ol></section>
<section><h2>Expected Results</h2><p>Based on published clinical data and our patient outcomes: 15-20% total body weight loss over 12-18 months. For patients with BMI 38+, average weight loss is approximately 45 lbs in the first 6 months. Significant improvement in A1C, blood pressure, sleep apnea, and NAFLD markers.</p></section>
<section><h2>Frequently Asked Questions</h2><dl><dt>Is ESG covered by US insurance?</dt><dd>Most US insurers consider ESG investigational. Out-of-pocket costs at US clinics: $15,000-$25,000+. HSA/FSA funds may be used.</dd><dt>How long in Istanbul?</dt><dd>3-4 days. Direct flights from NYC (~10h), Chicago (~11h), LA (~13h).</dd><dt>Is it painful?</dt><dd>ESG is performed under general anesthesia. Mild discomfort for 1-3 days post-procedure.</dd><dt>Are results evidence-based?</dt><dd>Yes. Published studies show durable 15-20% weight loss at 2-5 year follow-up.</dd><dt>ESG vs Ozempic?</dt><dd>ESG is a one-time structural solution. Ozempic costs $12,000-$18,000/year with significant weight regain after stopping.</dd><dt>What BMI qualifies?</dt><dd>BMI 30-40.</dd><dt>Is it safe abroad?</dt><dd>JCI-accredited Liv Hospital — same standard as Cleveland Clinic and Mayo Clinic.</dd><dt>What's included?</dt><dd>Procedure, JCI hospital, labs, VIP transfers, 4-star hotel, medications, 12-month dietitian support via telemedicine.</dd></dl></section>
<section><h2>Contact</h2><p>WhatsApp: +90 532 413 1143 | Email: drmuratustun@gmail.com</p></section>`,
    jsonLd: [{
      "@context": "https://schema.org",
      "@type": "MedicalProcedure",
      "name": "Endoscopic Sleeve Gastroplasty for American Patients",
      "alternateName": ["ESG USA", "ESG United States", "Weight loss without surgery USA", "Bariatric Turkey for Americans"],
      "description": "Endoscopic Sleeve Gastroplasty (ESG) for American patients at Istanbul Bariatric Center. Evidence-based stomach reduction without surgery. JCI-accredited hospital.",
      "procedureType": "Endoscopic",
      "bodyLocation": "Stomach",
      "relevantSpecialty": { "@type": "MedicalSpecialty", "name": "Bariatric Surgery" }
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        { "@type": "Question", "name": "Is ESG covered by US health insurance?", "acceptedAnswer": { "@type": "Answer", "text": "Most US insurers consider ESG investigational. Out-of-pocket costs at US clinics range from $15,000 to $25,000+. HSA/FSA funds may be used." } },
        { "@type": "Question", "name": "How long do I need to stay in Istanbul?", "acceptedAnswer": { "@type": "Answer", "text": "3-4 days. Direct flights from NYC (~10h), Chicago (~11h), LA (~13h), Houston (~12h), Miami (~11h)." } },
        { "@type": "Question", "name": "Is the ESG procedure painful?", "acceptedAnswer": { "@type": "Answer", "text": "ESG is performed under general anesthesia — you won't feel anything during the procedure. Mild discomfort for 1-3 days, managed with medication." } },
        { "@type": "Question", "name": "Are the results evidence-based and long-lasting?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Published clinical studies show 15-20% total body weight loss with durable results at 2-5 year follow-up." } },
        { "@type": "Question", "name": "How does ESG compare to Ozempic or Wegovy?", "acceptedAnswer": { "@type": "Answer", "text": "ESG is a one-time structural solution. GLP-1 medications cost $12,000-$18,000/year without insurance and studies show significant weight regain after discontinuation." } },
        { "@type": "Question", "name": "What BMI qualifies for ESG?", "acceptedAnswer": { "@type": "Answer", "text": "ESG is recommended for patients with a BMI between 30 and 40." } },
        { "@type": "Question", "name": "Is it safe to have medical treatment outside the US?", "acceptedAnswer": { "@type": "Answer", "text": "Istanbul Bariatric Center operates at JCI-accredited Liv Hospital — the same accreditation held by Cleveland Clinic, Mayo Clinic, and Johns Hopkins." } },
        { "@type": "Question", "name": "What does the all-inclusive package include?", "acceptedAnswer": { "@type": "Answer", "text": "Complete ESG procedure, JCI hospital, comprehensive labs, VIP transfers, 4-star hotel, medications, and 12-month dietitian support via telemedicine. No hidden costs." } }
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://istanbulbariatriccenter.com/" },
        { "@type": "ListItem", "position": 2, "name": "Treatments", "item": "https://istanbulbariatriccenter.com/treatments" },
        { "@type": "ListItem", "position": 3, "name": "ESG", "item": "https://istanbulbariatriccenter.com/esg" },
        { "@type": "ListItem", "position": 4, "name": "ESG for US Patients", "item": "https://istanbulbariatriccenter.com/esg/us" }
      ]
    }]
  },
  "/esg/anz": {
    title: "ESG Turkey for Australia & New Zealand | Safe, Minimally Invasive Weight Loss | $8,500 USD All-Inclusive",
    description: "ESG for Australian and New Zealand patients. All-inclusive $8,500 USD at JCI-accredited hospital in Istanbul. Free consultation.",
    h1: "Endoscopic Sleeve Gastroplasty (ESG) — Safe, Minimally Invasive Weight Loss in Istanbul",
    bodyExcerpt: "Endoscopic Sleeve Gastroplasty (ESG) for Australian and New Zealand patients at Istanbul Bariatric Center. Minimally invasive stomach reduction without surgery. JCI-accredited hospital. Dr. Murat Üstün. Procedure $7,500 USD or all-inclusive $8,500 USD with VIP transfers, 4-star hotel, and 12-month dietitian support via telehealth. Flights from Sydney, Melbourne, Auckland.",
    canonical: SITE_URL + "/esg/anz",
    richContent: `<section><h2>How ESG Works</h2><p>ESG reduces the stomach's capacity through a non-surgical, endoscopic procedure, allowing patients to feel full faster and consume less food. A flexible endoscope is passed through the mouth, and internal sutures reduce stomach volume by 70–80%. Unlike traditional sleeve gastrectomy, no tissue is removed and the procedure is potentially reversible. Published clinical data demonstrates 15–20% total body weight loss within 6–12 months, with durable results at 2–5 year follow-up. The procedure takes approximately 60–90 minutes under conscious sedation.</p></section>
<section><h2>Why ANZ Patients Choose ESG Abroad</h2><h3>Limited Access Locally</h3><p>ESG is not widely available in Australia or New Zealand. Private clinics often charge $15,000–$25,000 AUD/NZD, and public access is limited with long waitlists that can stretch to 12+ months.</p><h3>Affordable, Transparent Packages</h3><p>Our all-inclusive package is $8,500 USD (~$13,000 AUD / ~$14,200 NZD) — significantly less than ANZ private clinics, even after accounting for flights. Procedure-only option at $7,500 USD (~$11,500 AUD / ~$12,500 NZD).</p><h3>Internationally Accredited Care</h3><p>JCI-accredited hospitals in Istanbul. Experienced ESG specialists with thousands of procedures. Turkey is the world's 4th-largest medical tourism destination with over 1.2 million international patients annually.</p></section>
<section><h2>ESG vs Weight Loss Medications</h2><table><thead><tr><th>Factor</th><th>Medications</th><th>ESG</th></tr></thead><tbody><tr><td>Effectiveness</td><td>Limited — significant weight regain after stopping</td><td>Sustainable at 2–5 year follow-up</td></tr><tr><td>Side effects</td><td>Common (nausea, diarrhoea, pancreatitis risk)</td><td>Mild and rare (1–3 days)</td></tr><tr><td>Cost</td><td>Ongoing: $200–$400+/month AUD</td><td>One-time $8,500 USD</td></tr><tr><td>Treatment type</td><td>Weekly injections indefinitely</td><td>Single endoscopic procedure</td></tr></tbody></table></section>
<section><h2>ESG vs Gastric Sleeve Surgery</h2><table><thead><tr><th>Feature</th><th>ESG</th><th>Gastric Sleeve</th></tr></thead><tbody><tr><td>Invasiveness</td><td>Minimal</td><td>High</td></tr><tr><td>Recovery</td><td>1–3 days</td><td>2–4 weeks</td></tr><tr><td>Scarring</td><td>None</td><td>4–5 small scars</td></tr><tr><td>Complications</td><td>&lt;1% serious</td><td>1–3% serious</td></tr><tr><td>Weight loss</td><td>15–20% body weight</td><td>60–70% excess weight</td></tr><tr><td>ANZ cost</td><td>$15,000–$25,000 AUD (ANZ) / $8,500 USD (Istanbul)</td><td>$15,000–$35,000 AUD</td></tr></tbody></table></section>
<section><h2>Why Istanbul Bariatric Center</h2><ul><li><strong>Experienced team</strong> — Dr. Murat Üstün, pioneer of ESG in Turkey with thousands of successful procedures</li><li><strong>JCI-accredited hospital</strong> — Liv Hospital, the gold standard for healthcare quality worldwide</li><li><strong>Full international support</strong> — Pre-travel consultation, VIP transfers, English-speaking coordinators, telehealth compatible with AEST/NZST</li><li><strong>Modern facilities</strong> — Cutting-edge endoscopic units, comprehensive infection control protocols</li></ul></section>
<section><h2>Treatment Process for ANZ Patients</h2><ol><li>Initial online consultation — medical team review within 24–48 hours</li><li>Travel to Istanbul — flights from Sydney (~18h), Melbourne (~19h), Auckland (~22h) via Turkish Airlines, Emirates, Qatar Airways, Singapore Airlines</li><li>VIP transfer from Istanbul Airport (IST) to 4-star hotel</li><li>Comprehensive pre-operative assessments (blood panel, ECG, ultrasound)</li><li>ESG procedure (60–90 minutes, conscious sedation, no incisions)</li><li>Recovery and return home within 3–4 nights, telehealth follow-up compatible with AEST/NZST</li></ol></section>
<section><h2>Expected Results</h2><p>Based on published clinical data: 15–20% total body weight loss within 6–12 months. Improved metabolic health markers including blood sugar, cholesterol, and blood pressure. Increased energy, mobility, and overall quality of life.</p></section>
<section><h2>Frequently Asked Questions</h2><dl><dt>Will I feel pain during ESG?</dt><dd>Sedation ensures comfort; mild bloating or cramping is possible for 1–3 days.</dd><dt>How long in Istanbul?</dt><dd>Usually 3–4 nights, including procedure and recovery.</dd><dt>Are results sustainable?</dt><dd>Yes. Published studies show durable 15–20% weight loss at 2–5 year follow-up with dietary adherence.</dd><dt>Is ESG available in Australia/NZ?</dt><dd>Not widely. Private clinics charge $15,000–$25,000 AUD/NZD. Public access is very limited.</dd><dt>ESG vs Ozempic?</dt><dd>ESG is a one-time structural solution. Medications cost $200–$400+/month AUD with weight regain after stopping.</dd><dt>What BMI qualifies?</dt><dd>BMI 30–40.</dd><dt>Is Turkey safe?</dt><dd>JCI-accredited Liv Hospital — gold standard for patient safety worldwide. Turkey is the world's 4th-largest medical tourism destination.</dd><dt>What's included?</dt><dd>Procedure, JCI hospital, labs, VIP transfers, 4-star hotel, medications, 12-month dietitian support via telehealth.</dd></dl></section>
<section><h2>Contact</h2><p>WhatsApp: +90 532 413 1143 | Email: drmuratustun@gmail.com</p></section>`,
    jsonLd: [{
      "@context": "https://schema.org",
      "@type": "MedicalProcedure",
      "name": "Endoscopic Sleeve Gastroplasty for Australian and New Zealand Patients",
      "alternateName": ["ESG Australia", "ESG New Zealand", "ESG ANZ", "Weight loss without surgery Australia", "Bariatric Turkey for Australians"],
      "description": "Endoscopic Sleeve Gastroplasty (ESG) for Australian and New Zealand patients at Istanbul Bariatric Center. Minimally invasive stomach reduction. JCI-accredited hospital.",
      "procedureType": "Endoscopic",
      "bodyLocation": "Stomach",
      "relevantSpecialty": { "@type": "MedicalSpecialty", "name": "Bariatric Surgery" }
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        { "@type": "Question", "name": "Will I feel pain during ESG?", "acceptedAnswer": { "@type": "Answer", "text": "Sedation ensures comfort; mild bloating or cramping is possible for 1–3 days post-procedure." } },
        { "@type": "Question", "name": "How long do I need to stay in Istanbul?", "acceptedAnswer": { "@type": "Answer", "text": "Usually 3–4 nights, including procedure and recovery. Flights from Sydney (~18h), Melbourne (~19h), Auckland (~22h)." } },
        { "@type": "Question", "name": "Are the results sustainable?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Published studies demonstrate 15–20% total body weight loss with durable results at 2–5 year follow-up." } },
        { "@type": "Question", "name": "Is ESG available in Australia or New Zealand?", "acceptedAnswer": { "@type": "Answer", "text": "Not widely. Private clinics charge $15,000–$25,000 AUD/NZD. Public access is limited with long waitlists." } },
        { "@type": "Question", "name": "How does ESG compare to Ozempic or Wegovy?", "acceptedAnswer": { "@type": "Answer", "text": "ESG is a one-time structural solution. Medications cost $200–$400+/month AUD with significant weight regain after stopping." } },
        { "@type": "Question", "name": "What BMI qualifies for ESG?", "acceptedAnswer": { "@type": "Answer", "text": "ESG is recommended for patients with a BMI between 30 and 40." } },
        { "@type": "Question", "name": "Is it safe to have medical treatment in Turkey?", "acceptedAnswer": { "@type": "Answer", "text": "JCI-accredited Liv Hospital — gold standard for patient safety. Turkey is the world's 4th-largest medical tourism destination with 1.2M+ patients annually." } },
        { "@type": "Question", "name": "What does the all-inclusive package include?", "acceptedAnswer": { "@type": "Answer", "text": "Complete ESG procedure, JCI hospital, labs, VIP transfers, 4-star hotel, medications, and 12-month dietitian support via telehealth." } }
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://istanbulbariatriccenter.com/" },
        { "@type": "ListItem", "position": 2, "name": "Treatments", "item": "https://istanbulbariatriccenter.com/treatments" },
        { "@type": "ListItem", "position": 3, "name": "ESG", "item": "https://istanbulbariatriccenter.com/esg" },
        { "@type": "ListItem", "position": 4, "name": "ESG for ANZ Patients", "item": "https://istanbulbariatriccenter.com/esg/anz" }
      ]
    }]
  },
  "/esg/az": {
    title: "Türkiyədə Azərbaycanlı Xəstələr üçün ESG | Cərrahiyyəsiz Arıqlama | € 6.450 hər şey daxil",
    description: "Azərbaycanlı xəstələr üçün cərrahiyyəsiz ESG. İstanbulda JCI akkreditasiyalı xəstəxanada hər şey daxil € 6.450. Pulsuz məsləhət.",
    h1: "Endoskopik Sleeve Qastroplastika (ESG) — Cərrahiyyəsiz arıqlama Türkiyədə",
    bodyExcerpt: "Azərbaycanlı xəstələr üçün Endoskopik Sleeve Qastroplastika (ESG) Istanbul Bariatric Center-də. Cərrahiyyəsiz mədə azaltma. JCI-akkreditasiyalı xəstəxana. Dr Murat Ustun. Hər şey daxil paket € 6.450 VIP transfer, otel və 12 aylıq dietoloq dəstəyi ilə. Bakıdan birbaşa uçuşlar (~3-3,5 saat).",
    canonical: SITE_URL + "/esg/az",
    richContent: `<section><h2>Endoskopik Sleeve Qastroplastika (ESG) nədir?</h2><p>ESG mədənin həcmini cərrahiyyəsiz azaldan innovativ prosedurdur. Ağızdan endoskop daxil edilir və daxili tikişlər qoyulur, mədənin həcmini 70-80% azaldır. Ənənəvi sleeve qastrektomiyadan fərqli olaraq kəsik yoxdur, toxuma çıxarılmır və sağalma xeyli sürətlidir. Prosedur Apollo OverStitch texnologiyasından istifadə edir və ümumi anesteziya altında təxminən 60-90 dəqiqə davam edir.</p></section>
<section><h2>Niyə azərbaycanlı xəstələr ESG üçün Türkiyəni seçir</h2><h3>Təcrübə və standartlar</h3><p>Türkiyə bariatrik cərrahiyyədə dünya lideridir. Müasir, JCI-akkreditasiyalı xəstəxanalar, təcrübəli mütəxəssislər və beynəlxalq müalicə standartları.</p><h3>Əhəmiyyətli qənaət</h3><p>ESG Azərbaycanda geniş mövcud deyil. Hər şey daxil paketimiz € 6.450 (~11.900 AZN) — prosedur, JCI xəstəxanası, otel, transfer və 12 aylıq dietoloq dəstəyi daxildir.</p><h3>Sürətli çıxış</h3><p>Gözləmə siyahısı yoxdur. Bakı Heydər Əliyev Hava Limanından birbaşa uçuşlar (~3-3,5 saat). 3-4 gün ərzində tam müalicə.</p></section>
<section><h2>ESG vs arıqlama dərmanları</h2><table><thead><tr><th>Amil</th><th>Ozempic/Wegovy</th><th>ESG</th></tr></thead><tbody><tr><td>Təsir</td><td>Müvəqqəti</td><td>Davamlı</td></tr><tr><td>Tərəf təsirləri</td><td>Tez-tez</td><td>Az</td></tr><tr><td>Xərc</td><td>Davamlı</td><td>Bir dəfəlik</td></tr><tr><td>Çəki geri qayıdır</td><td>Tez-tez</td><td>Məhdud</td></tr></tbody></table></section>
<section><h2>Niyə Istanbul Bariatric Center</h2><ul><li><strong>Dr Murat Ustun</strong> — Türkiyədə ESG-nin pioneri, minlərlə uğurlu əməliyyat</li><li><strong>JCI-akkreditasiyalı xəstəxana</strong> — Liv Hospital, beynəlxalq qızıl standart</li><li><strong>Beynəlxalq komanda</strong> — Beynəlxalq xəstələr üçün xüsusi komanda</li><li><strong>Hər şey daxil paket</strong> — Prosedur, xəstəxana, otel, transfer, müayinələr, 12 ay dietoloq dəstəyi</li></ul></section>
<section><h2>Tez-tez verilən suallar</h2><dl><dt>ESG Azərbaycanda mövcuddurmu?</dt><dd>ESG Azərbaycanda geniş mövcud deyil. Hər şey daxil paketimiz € 6.450 (~11.900 AZN).</dd><dt>İstanbulda nə qədər qalmaq lazımdır?</dt><dd>3-4 gün. Bakıdan birbaşa uçuşlar (~3-3,5 saat).</dd><dt>Ağrılıdırmı?</dt><dd>ESG ümumi anesteziya altında icra olunur. 1-3 gün yüngül narahatlıq.</dd><dt>Nəticələr daimidir?</dt><dd>Bəli, düzgün həyat tərzi ilə. 12 aylıq dietoloq dəstəyi daxildir.</dd><dt>Hansı BMI lazımdır?</dt><dd>BMI 30 ilə 40 arasında.</dd><dt>Təhlükəsizdirmi?</dt><dd>Bütün əməliyyatlar JCI-akkreditasiyalı Liv Hospital-da. Dr Murat Ustun minlərlə ESG icra edib.</dd><dt>Paketə nələr daxildir?</dt><dd>Prosedur, JCI xəstəxanası, müayinələr, VIP transfer, otel, dərmanlar, 12 ay dietoloq dəstəyi. Gizli xərclər yoxdur.</dd></dl></section>`,
  },
  "/post-bariatric-surgery": {
    title: "Post Bariatric Body Contouring Surgery - Istanbul Bariatric Center",
    description: "Post bariatric body contouring surgery in Istanbul. Tummy tuck, arm lift, thigh lift, breast lift after major weight loss. Complete your transformation.",
    h1: "Post Bariatric Body Contouring Surgery",
    bodyExcerpt: "Post Bariatric Body Contouring at Istanbul Bariatric Center helps patients complete their weight loss transformation. After significant weight loss from bariatric surgery, excess skin can be removed through procedures including tummy tuck (abdominoplasty), arm lift, thigh lift, breast lift, and body lift.",
    canonical: SITE_URL + "/post-bariatric-surgery",
    richContent: `<section><h2>Body Contouring After Weight Loss</h2><p>After significant weight loss from bariatric surgery, many patients are left with excess, sagging skin that can cause discomfort, hygiene issues, and affect confidence. Post-bariatric body contouring surgery removes this excess skin and reshapes the body to complete your transformation.</p></section>
<section><h2>Available Procedures</h2><ul><li><strong>Tummy Tuck (Abdominoplasty)</strong> — Removes excess abdominal skin and tightens underlying muscles</li><li><strong>Arm Lift (Brachioplasty)</strong> — Removes excess skin from the upper arms</li><li><strong>Thigh Lift</strong> — Reshapes and firms the thighs by removing excess skin</li><li><strong>Breast Lift/Reduction</strong> — Addresses changes in breast shape and size after weight loss</li><li><strong>Body Lift (Belt Lipectomy)</strong> — Comprehensive procedure addressing abdomen, hips, back, and buttocks</li></ul></section>`,
  },
  "/insurance": {
    title: "Insurance & Finance Options - Istanbul Bariatric Center",
    description: "Insurance and financing options for bariatric surgery at Istanbul Bariatric Center. Affordable payment plans and packages.",
    h1: "Insurance & Finance Options",
    bodyExcerpt: "Istanbul Bariatric Center offers various insurance and financing options to make weight loss surgery accessible and affordable. Explore medical tourism packages, payment plans, and insurance coverage options for gastric sleeve, gastric bypass, and other bariatric procedures in Turkey.",
    canonical: SITE_URL + "/insurance",
    richContent: `<section><h2>Affordable Weight Loss Surgery</h2><p>Istanbul Bariatric Center offers competitive all-inclusive pricing for weight loss surgery, making it accessible for patients from the UK, Europe, and worldwide. Our packages start from £1,650 for gastric balloon and £2,950 for gastric sleeve surgery, including hospital stay, tests, transfers, and aftercare.</p></section>
<section><h2>Finance Options</h2><p>We work with medical finance providers to offer flexible payment plans for bariatric surgery. Spread the cost of your treatment with affordable monthly payments. Contact our patient coordinators for personalised finance options.</p></section>`,
  },
  "/bariatric-surgery-turkey-guide": {
    title: "Complete Guide to Bariatric Surgery in Istanbul, Turkey",
    description: "Complete guide to weight loss surgery in Istanbul. 13 topics on procedures, costs, safety, recovery, and why patients choose Istanbul Bariatric Center.",
    h1: "Complete Guide to Bariatric Surgery in Istanbul, Turkey",
    bodyExcerpt: "Everything you need to know about weight loss surgery at Istanbul Bariatric Center — from procedures and costs to safety, recovery, and planning your trip. 13 comprehensive topics with over 100 detailed answers covering bariatric surgery in Turkey.",
    canonical: SITE_URL + "/bariatric-surgery-turkey-guide",
    jsonLd: [
      {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          { "@type": "Question", "name": "What is Istanbul Bariatric Center and what procedures do they offer?", "acceptedAnswer": { "@type": "Answer", "text": "Istanbul Bariatric Center (IBC) is a leading weight loss surgery clinic in Istanbul, Turkey, founded by Op. Dr. Murat Ustun. The centre specialises in gastric sleeve surgery, mini gastric bypass, gastric balloon, endoscopic sleeve gastroplasty (ESG), duodenal switch, transit bipartition, revision surgery, and post-bariatric body contouring. All surgical procedures are performed at JCI-accredited Liv Hospital using advanced laparoscopic and endoscopic techniques." } },
          { "@type": "Question", "name": "Is Turkey a good place to get bariatric surgery?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Turkey is one of the world's leading destinations for bariatric surgery. Turkish hospitals with JCI accreditation meet or exceed the quality standards of hospitals in the UK, US, and Western Europe. The combination of highly trained surgeons, state-of-the-art facilities, and significantly lower costs makes Turkey a compelling option for weight loss surgery." } },
          { "@type": "Question", "name": "How much does gastric sleeve surgery cost in Istanbul?", "acceptedAnswer": { "@type": "Answer", "text": "At Istanbul Bariatric Center, gastric sleeve surgery packages start from £2,950 for the Basic Package, £3,950 for the Relaxation Package, and £4,250 for the Luxury Package. These are all-inclusive prices covering the procedure, hospital stay, pre-operative tests, accommodation, airport transfers, and post-operative aftercare." } },
          { "@type": "Question", "name": "Should I get bariatric surgery in Turkey or Mexico?", "acceptedAnswer": { "@type": "Answer", "text": "Turkey generally offers stronger hospital accreditation (JCI is more prevalent), better infrastructure for European and UK patients, shorter flight times from Europe, and a more established regulatory framework. For patients from the UK or Europe, Turkey is typically the better choice." } },
          { "@type": "Question", "name": "What are the best bariatric surgery clinics in Istanbul?", "acceptedAnswer": { "@type": "Answer", "text": "The best clinics operate within JCI-accredited hospitals, have IFSO-member surgeons, provide transparent all-inclusive pricing, offer structured aftercare programmes, and have verified patient reviews. Istanbul Bariatric Center, at JCI-accredited Liv Hospital with over 8,000 procedures and 6 consecutive patient service awards, is recognised as one of the leading clinics." } },
          { "@type": "Question", "name": "What does an all-inclusive bariatric surgery package in Turkey typically include?", "acceptedAnswer": { "@type": "Answer", "text": "A comprehensive package covers the bariatric procedure, JCI-accredited hospital stay (2-3 nights), all pre-operative blood tests, VIP airport transfers, hotel accommodation, post-operative medications, compression garment, and a structured aftercare programme. Relaxation and Luxury packages also include 12 months of support from a UK-registered dietitian." } },
          { "@type": "Question", "name": "How do I arrange bariatric surgery abroad as an international patient?", "acceptedAnswer": { "@type": "Answer", "text": "At Istanbul Bariatric Center: initial enquiry via WhatsApp or website, free consultation, package selection and booking, pre-operative preparation guided remotely, travel to Istanbul with VIP transfers, surgery and hospital recovery, discharge and return home, and ongoing aftercare including dietitian support." } },
          { "@type": "Question", "name": "Am I a good candidate for bariatric surgery?", "acceptedAnswer": { "@type": "Answer", "text": "General candidacy criteria include BMI of 35 or above, or BMI of 30-35 with obesity-related health conditions, previous unsuccessful attempts at weight loss, no untreated psychiatric conditions, and commitment to long-term lifestyle changes. Istanbul Bariatric Center offers a free health profile assessment to evaluate eligibility." } },
          { "@type": "Question", "name": "How safe is bariatric surgery in Turkey compared to the UK or US?", "acceptedAnswer": { "@type": "Answer", "text": "At JCI-accredited hospitals, bariatric surgery safety outcomes are comparable to leading centres in the UK and US. Complication rates for gastric sleeve surgery at experienced Turkish centres are approximately 1-2%, in line with global averages. The key factor is choosing an accredited hospital with an experienced, high-volume surgeon." } },
          { "@type": "Question", "name": "What is the recovery process like after gastric sleeve surgery in Istanbul?", "acceptedAnswer": { "@type": "Answer", "text": "Day 1: recovery with IV fluids and pain management. Day 2: transition to clear liquids. Day 3: discharge to hotel. Days 4-5: rest and clear liquids, most patients fly home. Weeks 1-2: liquid diet. Weeks 3-4: puréed foods. Weeks 5-8: soft foods. From Week 8: gradual return to regular eating." } },
          { "@type": "Question", "name": "What is the difference between gastric sleeve and gastric bypass surgery?", "acceptedAnswer": { "@type": "Answer", "text": "Gastric Sleeve removes approximately 75-80% of the stomach, leaving a banana-shaped sleeve (restrictive). Gastric Bypass creates a small stomach pouch and reroutes the small intestine (restrictive plus malabsorption). Sleeve is simpler with fewer complications; bypass produces slightly more weight loss and is more effective for diabetes." } },
          { "@type": "Question", "name": "How much weight can you expect to lose after gastric sleeve surgery in Turkey?", "acceptedAnswer": { "@type": "Answer", "text": "Patients typically lose 60-70% of their excess weight within 12-18 months. For example, a patient 40 kg above their ideal weight can expect to lose approximately 24-28 kg. Maximum weight loss usually occurs between months 12 and 18." } },
          { "@type": "Question", "name": "How do I plan a medical trip to Istanbul for bariatric surgery?", "acceptedAnswer": { "@type": "Answer", "text": "Istanbul Bariatric Center handles most planning: contact the clinic for a free consultation, choose your procedure and package, confirm your surgery date, book your flight, and the clinic arranges VIP airport transfer and hotel. A detailed timeline and checklist is provided before your trip." } }
        ]
      },
      {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": SITE_URL + "/" },
          { "@type": "ListItem", "position": 2, "name": "Complete Guide to Bariatric Surgery in Istanbul", "item": SITE_URL + "/bariatric-surgery-turkey-guide" }
        ]
      }
    ],
    richContent: `<section><h2>Istanbul Bariatric Center — Brand Overview & Credibility</h2><p>Istanbul Bariatric Center (IBC) is a leading weight loss surgery clinic in Istanbul, Turkey, founded by Op. Dr. Murat Ustun. The centre specialises in gastric sleeve surgery, mini gastric bypass, gastric balloon, endoscopic sleeve gastroplasty (ESG), duodenal switch, transit bipartition, revision surgery, and post-bariatric body contouring. All surgical procedures are performed at JCI-accredited Liv Hospital. The centre has performed over 8,000 successful bariatric procedures and has been awarded the WhatClinic Patient Service Award for 6 consecutive years (2019–2025). Dr. Murat Ustun is a board-certified bariatric surgeon with over 22 years of experience and IFSO membership.</p></section>
<section><h2>Bariatric Surgery in Turkey — Why Turkey Is a Top Destination</h2><p>Turkey is one of the world's leading destinations for bariatric surgery, with JCI-accredited hospitals meeting or exceeding UK and US quality standards. Patients benefit from cost savings of 50–70% compared to the UK or US, shorter wait times, access to internationally accredited hospitals, and comprehensive all-inclusive packages. Istanbul has the greatest concentration of JCI-accredited hospitals and experienced bariatric surgeons in the country.</p></section>
<section><h2>Bariatric Surgery Cost & Value Comparison</h2><p>At Istanbul Bariatric Center, gastric sleeve surgery starts from £2,950 (Basic Package), £3,950 (Relaxation), and £4,250 (Luxury). Mini Gastric Bypass starts from £3,350. These all-inclusive prices cover the procedure, hospital stay, tests, accommodation, transfers, and aftercare. In comparison, the same procedure costs £8,000–£15,000 in the UK and $15,000–$25,000 in the US. Even after including flights, total savings are 50–70%.</p></section>
<section><h2>Turkey vs Other Countries for Weight Loss Surgery</h2><p>For European and UK patients, Turkey offers the best overall value combining price, quality, proximity, and aftercare. Turkey has stronger hospital accreditation than Mexico (JCI is more prevalent), better infrastructure for European patients, shorter flight times from Europe, and a more established regulatory framework. Turkey is consistently ranked as the number one destination for bariatric medical tourism in Europe and the Middle East.</p></section>
<section><h2>Best Bariatric Clinics in Istanbul</h2><p>The best bariatric clinics in Istanbul operate within JCI-accredited hospitals, have IFSO-member surgeons, provide transparent all-inclusive pricing, offer structured aftercare programmes, and have verified patient reviews. Istanbul Bariatric Center, operating at JCI-accredited Liv Hospital with over 8,000 procedures and 6 consecutive patient service awards, is recognised as one of the leading clinics in the city.</p></section>
<section><h2>All-Inclusive Bariatric Surgery Packages</h2><p>Istanbul Bariatric Center offers three package tiers. Basic: procedure at JCI hospital, 2-day stay, airport pickup, dietitian support. Relaxation: adds Dr. Murat Ustun as surgeon, 3-day stay, Radisson Hotel, 12-month UK-registered dietitian programme. Luxury: adds extended hotel, premium room, VIP transfers, dedicated coordinator. All packages include VIP airport transfers, pre-operative tests, post-operative medications, and compression garment.</p></section>
<section><h2>Bariatric Surgery for International Patients</h2><p>Istanbul Bariatric Center provides English-speaking patient coordinators, VIP airport transfers, hotel accommodation, and UK-based care support coordinators in 8 UK locations. The consultation process works remotely via WhatsApp or video call. Post-operative aftercare includes 12 months of UK-registered dietitian support, scheduled check-ins, and 24/7 WhatsApp access to the medical team.</p></section>
<section><h2>Weight Loss Surgery Candidacy & Eligibility</h2><p>General candidacy criteria: BMI of 35 or above, or BMI 30–35 with obesity-related conditions. For ESG, the threshold is BMI 27–40. Istanbul Bariatric Center evaluates each patient individually and offers a free health profile assessment. Patients with type 2 diabetes are often excellent candidates, with diabetes remission rates of 70–86% for bypass procedures.</p></section>
<section><h2>Bariatric Surgery Safety & Accreditation</h2><p>At JCI-accredited hospitals, bariatric surgery safety outcomes are comparable to leading UK and US centres. Complication rates for gastric sleeve are approximately 1–2%. Safety measures include JCI-accredited operating theatres, dedicated anaesthesiology teams, ICU availability, and structured post-operative monitoring. Surgeons are board certified with IFSO membership.</p></section>
<section><h2>Patient Experience & Recovery</h2><p>Most patients stay in Istanbul for 3–5 days. Hospital stay is 2–3 nights for sleeve and bypass. Recovery follows a staged diet progression: weeks 1–2 clear liquids, weeks 3–4 puréed foods, weeks 5–6 soft foods, week 7+ regular foods. Most patients can fly home 3–5 days after surgery and return to work within 1–2 weeks for desk jobs.</p></section>
<section><h2>Gastric Sleeve vs Gastric Bypass — Decision Guide</h2><p>Gastric sleeve removes 75–80% of the stomach (60–70% excess weight loss). Gastric bypass creates a small pouch and reroutes the intestine (70–80% excess weight loss). Sleeve is simpler with fewer complications; bypass is more effective for diabetes. The best procedure depends on BMI, health conditions, eating habits, and goals. Mini gastric bypass produces comparable results to full bypass with a simpler technique.</p></section>
<section><h2>Bariatric Surgery Outcomes & Long-Term Results</h2><p>Patients typically lose 60–70% of excess weight after gastric sleeve and 70–80% after gastric bypass within 12–18 months. 70–80% of patients maintain significant weight loss at 5+ years. Key factors for success include adherence to diet, regular exercise, protein intake, vitamin supplementation, and ongoing follow-up. Istanbul Bariatric Center's 12-month dietitian programme supports long-term success.</p></section>
<section><h2>Medical Tourism in Istanbul — Logistics & Planning</h2><p>Istanbul Bariatric Center handles logistics including VIP airport transfers, Radisson Hotel accommodation, and patient coordination. Surgery can typically be arranged within 2–4 weeks. UK citizens travel visa-free for up to 90 days. Liv Hospital is 30 minutes from Istanbul Airport. Patients should pack comfortable clothing, current medications, and personal essentials. The clinic provides compression garment, medications, and all hospital essentials.</p></section>`,
  },
  "/health-profile": {
    title: "Personal Health Profile: Am I Eligible for Bariatric Surgery?",
    description: "Assess your eligibility for bariatric surgery with a free health profile at Istanbul Bariatric Center. Get personalized expert recommendations.",
    h1: "Personal Health Profile: Am I Eligible for Bariatric Surgery?",
    bodyExcerpt: "Complete our comprehensive health profile to find out if you're eligible for weight loss surgery at Istanbul Bariatric Center. Our medical team will review your health information including BMI, medical history, and lifestyle factors to recommend the most suitable procedure for you.",
    canonical: SITE_URL + "/health-profile",
    richContent: `<section><h2>Free Eligibility Assessment</h2><p>Our personal health profile form helps determine your suitability for bariatric surgery. Complete the assessment with your health information including height, weight, medical history, lifestyle factors, and surgery preferences. Dr Murat Ustun's medical team will review your profile and provide a personalised recommendation.</p></section>
<section><h2>Who is Eligible for Bariatric Surgery?</h2><ul><li>BMI 35+ (or BMI 30+ with obesity-related health conditions)</li><li>Previous unsuccessful attempts at weight loss through diet and exercise</li><li>No untreated psychiatric conditions that could affect surgical outcomes</li><li>Commitment to lifelong dietary and lifestyle changes</li><li>Age 18-65 (exceptions may apply)</li></ul><p>Even if you're unsure whether you qualify, complete the form and our team will advise you on the best options.</p></section>`,
  },
};

interface BlogPostSEO {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  image?: string;
}

const blogPosts: BlogPostSEO[] = [
  { slug: "mounjaro-vs-bariatric-surgery-2026", title: "Mounjaro vs Bariatric Surgery 2026: Which Wins for Long-Term Weight Loss?", excerpt: "Mounjaro (tirzepatide) vs bariatric surgery in 2026 — head-to-head comparison of weight loss results, cost, side effects, durability and ideal patient profile. Includes evidence tables and a decision framework.", date: "May 3, 2026", image: "/blog-mounjaro-vs-bariatric.webp" },
  { slug: "weight-loss-surgery-cost-turkey-2026", title: "Weight Loss Surgery Cost in Turkey 2026: Honest Pricing Guide", excerpt: "Up-to-date 2026 prices for gastric sleeve, bypass, balloon and ESG in Turkey vs UK, USA, Germany and Mexico. What is included, what is not, and the hidden costs to watch for.", date: "May 3, 2026", image: "/blog-cost-turkey-2026.webp" },
  { slug: "gastric-sleeve-recovery-week-by-week", title: "Gastric Sleeve Recovery Week by Week: A Realistic 12-Week Timeline", excerpt: "What to actually expect each week after gastric sleeve surgery — physical milestones, diet stages, energy levels, common worries and red flags. A realistic, no-fluff 12-week recovery roadmap.", date: "May 3, 2026", image: "/blog-sleeve-recovery-weeks.webp" },
  { slug: "gastric-sleeve-vs-mini-gastric-bypass-2026", title: "Gastric Sleeve vs Mini Gastric Bypass 2026: Which Is Right For You?", excerpt: "Detailed 2026 comparison of gastric sleeve and mini gastric bypass — weight loss, diabetes remission, reflux risk, cost, recovery and reversibility. A clear decision matrix to choose the right operation.", date: "May 3, 2026", image: "/blog-sleeve-vs-mini-bypass.webp" },
  { slug: "is-bariatric-surgery-permanent-long-term-results", title: "Is Bariatric Surgery Permanent? 5, 10 and 20-Year Results Honestly Reviewed", excerpt: "An honest look at whether bariatric surgery is truly permanent. What stays the same forever, what can change, why some patients regain, and what 20 years of follow-up data really shows.", date: "May 3, 2026", image: "/blog-bariatric-permanent.webp" },
  { slug: "weight-regain-after-gastric-sleeve-causes-solutions", title: "Weight Regain After Gastric Sleeve: Causes, Solutions and How to Reset", excerpt: "Why some patients regain weight after gastric sleeve, the warning signs to spot early, and the proven medical, behavioural and surgical options to reverse regain in 2026.", date: "May 3, 2026", image: "/blog-weight-regain-sleeve.webp" },
  { slug: "bariatric-surgery-day-by-day-recovery-timeline", title: "Bariatric Surgery Day-by-Day Recovery Timeline: The First 30 Days", excerpt: "A precise day-by-day recovery timeline for the first 30 days after gastric sleeve, bypass or mini bypass — what you can eat, do, lift, and when to call your surgeon. Honest, no fluff.", date: "May 3, 2026", image: "/blog-day-by-day-recovery.webp" },
  { slug: "life-after-gastric-bypass-real-patient-stories", title: "Life After Gastric Bypass: Real Patient Stories From Year 1, 5 and 10", excerpt: "What life is really like after gastric bypass — three honest patient stories at 1, 5 and 10 years post-op covering food, energy, relationships, work and what they wish they had known.", date: "May 3, 2026", image: "/blog-life-after-bypass.webp" },
  { slug: "cheapest-country-bariatric-surgery-2026-comparison", title: "Cheapest Country for Bariatric Surgery 2026: Honest 8-Country Comparison", excerpt: "Where is bariatric surgery actually cheapest — and is cheap the right metric? A 2026 comparison of price, quality, safety, aftercare and total cost across Turkey, Mexico, India, Thailand, the UK, USA, Germany and Czechia.", date: "May 3, 2026", image: "/blog-cheapest-country-bariatric.webp" },
  { slug: "how-to-choose-bariatric-surgeon-istanbul-checklist", title: "How to Choose a Bariatric Surgeon in Istanbul: 2026 Checklist", excerpt: "A practical 2026 checklist for choosing the right bariatric surgeon in Istanbul — credentials, case volume, hospital accreditation, aftercare, red flags, and the exact questions to ask before paying a deposit.", date: "May 3, 2026", image: "/blog-choose-surgeon.webp" },
  { slug: "all-inclusive-bariatric-package-istanbul-explained", title: "All-Inclusive Bariatric Package Istanbul 2026: What's Really Included", excerpt: "Exactly what an all-inclusive bariatric package in Istanbul covers in 2026 — surgery, hotel, transfers, tests, aftercare — and the hidden extras to ask about before you book.", date: "May 3, 2026", image: "/blog-all-inclusive-package.webp" },
  { slug: "medical-tourism-istanbul-bariatric-step-by-step", title: "Medical Tourism Istanbul Bariatric Surgery: A Step-by-Step 2026 Guide", excerpt: "From first enquiry to flying home — every step of the medical tourism process for bariatric surgery in Istanbul, with timings, paperwork, costs and what to do if anything goes wrong.", date: "May 3, 2026", image: "/blog-medical-tourism-istanbul.webp" },
  { slug: "bariatric-surgery-insurance-coverage-international", title: "Bariatric Surgery Insurance Coverage 2026: International Patient Guide", excerpt: "Will insurance cover your bariatric surgery in Turkey? A 2026 guide for UK, EU, US and Middle Eastern patients on what is covered, how to claim back, what travel insurance you need, and how to fund the gap.", date: "May 3, 2026", image: "/blog-bariatric-insurance.webp" },
  { slug: "gastric-balloon-vs-gastric-sleeve-which-is-right", title: "Gastric Balloon vs Gastric Sleeve 2026: Which Is Right For You?", excerpt: "Detailed 2026 comparison of gastric balloon and gastric sleeve — weight loss, reversibility, recovery, cost, and how to choose between a temporary device and permanent surgery.", date: "May 3, 2026", image: "/blog-balloon-vs-sleeve.webp" },
  { slug: "bariatric-surgery-and-pregnancy-what-to-know", title: "Bariatric Surgery and Pregnancy 2026: Timing, Safety and Nutrition", excerpt: "Planning pregnancy after bariatric surgery? A 2026 evidence-based guide to timing, fertility improvements, vitamin needs, monitoring during pregnancy and breastfeeding considerations.", date: "May 3, 2026", image: "/blog-bariatric-pregnancy.webp" },
  { slug: "dumping-syndrome-after-gastric-bypass-management", title: "Dumping Syndrome After Gastric Bypass: 2026 Management Guide", excerpt: "What dumping syndrome feels like, why it happens after gastric bypass, and a practical 2026 dietary, behavioural and medical management plan to keep symptoms under control.", date: "May 3, 2026", image: "/blog-dumping-syndrome.webp" },
  { slug: "hair-loss-after-bariatric-surgery-prevention-guide", title: "Hair Loss After Bariatric Surgery: Prevention Guide 2026", excerpt: "Why hair loss happens after gastric sleeve and bypass, when to expect it, how to prevent it, and the supplements and habits that protect your hair through rapid weight loss in 2026.", date: "May 3, 2026", image: "/blog-hair-loss.webp" },
  { slug: "loose-skin-after-weight-loss-surgery-options", title: "Loose Skin After Weight Loss Surgery 2026: Your Options", excerpt: "Why loose skin happens after major weight loss, what you can do without surgery, and a 2026 overview of body contouring procedures available in Istanbul including timing, cost and recovery.", date: "May 3, 2026", image: "/blog-loose-skin.webp" },
  { slug: "bariatric-surgery-mental-health-emotional-journey", title: "Bariatric Surgery and Mental Health 2026: The Emotional Journey", excerpt: "An honest 2026 guide to the emotional journey of bariatric surgery — pre-op anxiety, post-op grief, identity shifts, addiction transfer, and where to find evidence-based mental health support.", date: "May 3, 2026", image: "/blog-mental-health.webp" },
  { slug: "revision-bariatric-surgery-failed-sleeve-options", title: "Revision Bariatric Surgery 2026: Options When Your Sleeve Has Failed", excerpt: "What to do when your gastric sleeve has failed — the 2026 revision options including conversion to bypass, mini bypass, SADI-S, and re-sleeve, with realistic outcomes, costs and risks in Istanbul.", date: "May 3, 2026", image: "/blog-revision-surgery.webp" },
  { slug: "ipsos-global-perceptions-obesity-study-2026", title: "Global Perceptions of Obesity in 2026: What a New Ipsos Study Reveals", excerpt: "A new Ipsos Global Perceptions of Obesity Study surveyed 14,500 adults across 14 countries. Here is what it reveals about stigma, treatment access, risk awareness and the future of obesity care in 2026.", date: "May 10, 2026", image: "/blog-obesity-perceptions-2026.webp" },
  { slug: "esg-nbsr-uk-registry-2026", title: "ESG Joins the UK National Bariatric Surgery Registry: What It Means for Patients in 2026", excerpt: "The British Obesity & Metabolic Specialist Society (BOMSS) has added Endoscopic Sleeve Gastroplasty (ESG) to the UK's National Bariatric Surgery Registry. Here is what this 2026 milestone means for safety data, NHS access, 10-year outcomes and patient choice.", date: "May 16, 2026", image: "/blog-esg-nbsr-registry-2026.webp" },
  { slug: "esg-tore-endoscopic-weight-loss-evidence-2026", title: "ESG & TORe 2026: Clinical Evidence for Endoscopic Weight Loss", excerpt: "Explore non-surgical weight loss with ESG and TORe at Istanbul Bariatric Center. Latest 2026 clinical evidence, 5-year outcomes, and safety data.", date: "March 18, 2026", image: "/blog-esg-tore-evidence-2026.webp" },
  { slug: "ileal-transposition-surgery-diabetes", title: "Ileal Transposition Surgery for Diabetes: What Patients Need to Know", excerpt: "Ileal transposition is an investigational metabolic procedure that repositions part of the small intestine to boost natural gut hormones like GLP-1. Learn how it works, who it is for, and why it is not yet a standard treatment for diabetes.", date: "March 9, 2026", image: "/blog-ileal-cover.webp" },
  { slug: "gastric-fundus-mucosal-ablation-gfma-latest-news", title: "Gastric Fundus Mucosal Ablation (GFMA) Latest News", excerpt: "GFMA: A New Era in Non-Surgical Weight Loss. Recent studies suggest an endoscopic procedure could curb hunger and achieve surgical-level weight loss without any incisions.", date: "May 11, 2025", image: "/blog-gfma.webp" },
  { slug: "scientific-blind-alleys-dietary-fat-sugar-freud-and-adler", title: "Scientific Blind Alleys: Dietary Fat, Sugar, Freud, and Adler", excerpt: "How Two Historic Health Myths Shaped Today's Obesity Crisis — and How We Can Fix It.", date: "April 26, 2025", image: "/blog-scientific-blind-alleys.webp" },
  { slug: "minimizer-ring", title: "Minimizer Ring: What is it and what is it used for?", excerpt: "The MiniMIZER® Ring in Bariatric Surgery: Enhancing Outcomes in Primary and Revisional Procedures.", date: "April 19, 2025", image: "/blog-minimizer-ring.webp" },
  { slug: "five-high-cholesterol-foods-you-should-eat-and-which-ones-to-avoid", title: "Five High-Cholesterol Foods You Should Eat – and Which Ones to Avoid", excerpt: "New research reveals that not all cholesterol-rich foods are bad for you. A cardiologist helps explain what to eat and what to skip.", date: "April 17, 2025", image: "/blog-cholesterol-cheese.webp" },
  { slug: "weight-loss-treatments-a-holistic-comparison", title: "Weight Loss Treatments: A Holistic Comparison", excerpt: "Weight loss treatments broadening every day with new medications, revolutionary endoscopic methods and different variations of surgical options.", date: "December 31, 2024", image: "/blog-weight-loss-comparison.webp" },
  { slug: "gastric-fundus-ablation-explained", title: "Gastric Fundus Ablation Explained", excerpt: "Revolutionizing Endoscopic Weight Loss Method. A groundbreaking, minimally invasive procedure offering new hope for sustainable weight loss.", date: "December 17, 2024", image: "/blog-fundus-explained.webp" },
  { slug: "could-weight-loss-injections-replace-obesity-surgery", title: "Could Weight Loss Injections Replace Obesity Surgery?", excerpt: "Weight loss injections, particularly GLP-1 analogs such as semaglutide and tirzepatide, are revolutionizing the treatment of obesity.", date: "November 18, 2024", image: "/blog-weight-loss-injections.webp" },
  { slug: "body-roundness-index-bri", title: "Body Roundness Index (BRI)", excerpt: "Body Roundness Index, is it the New BMI? What it Says About Your Health.", date: "November 11, 2024", image: "/blog-bri.webp" },
  { slug: "ultra-processed-foods-and-their-impact-on-your-health", title: "Ultra-processed Foods and Their Impact on Your Health", excerpt: "Understanding Ultra-Processed Foods: A Deep Dive into Our Daily Diet.", date: "November 9, 2024", image: "/blog-ultra-processed-foods.webp" },
  { slug: "comparing-bariatric-surgery-and-endoscopic-sleeve-gastroplasty", title: "Comparing Bariatric Surgery and Endoscopic Sleeve Gastroplasty", excerpt: "Making an Informed Choice for Weight Loss. Understanding the differences between bariatric surgery and ESG is crucial.", date: "November 7, 2024", image: "/blog-bariatric-esg-end.webp" },
  { slug: "5-things-you-didnt-know-about-bariatric-surgery", title: "5 Things You Didn't Know About Bariatric Surgery", excerpt: "Five Things You May Not Know About Bariatric Surgery.", date: "November 7, 2024", image: "/blog-ibc-clinic.webp" },
  { slug: "bariatric-surgery-guidelines-updated", title: "Bariatric Surgery Guidelines Updated", excerpt: "Updated Guidelines on Bariatric Surgery: A Comprehensive Overview.", date: "November 7, 2024", image: "/blog-guidelines.webp" },
  { slug: "barretts-esophagus-and-increased-risk-after-sleeve-gastrectomy", title: "Barrett's Esophagus and Increased Risk After Sleeve Gastrectomy", excerpt: "Barrett's Esophagus is a serious consequence of long term acid reflux. Recent research reveals important findings about risk factors after sleeve gastrectomy.", date: "July 30, 2024", image: "/blog-barretts-esophagus.webp" },
  { slug: "comprehensive-guide-to-preoperative-medication-management", title: "Comprehensive Guide to Preoperative Medication Management", excerpt: "Proper medication management before bariatric surgery is crucial for ensuring your safety and optimizing surgical outcomes.", date: "July 24, 2024", image: "/blog-preop-medications.webp" },
  { slug: "leaks-in-bariatric-surgery", title: "Leaks in Bariatric Surgery: Prevention, Causes & Management", excerpt: "Understand gastric leaks after bariatric surgery. Istanbul Bariatric Center provides expert insights on causes, prevention, and treatment options.", date: "July 16, 2024", image: "/blog-gastric-sleeve.webp" },
  { slug: "obesity-and-cancer-risk", title: "Obesity and Cancer Risk", excerpt: "Each year, over 684,000 Americans are diagnosed with cancers linked to obesity.", date: "July 1, 2024", image: "/blog-obesity-crisis.webp" },
  { slug: "15-most-nutrient-dense-foods", title: "15 Most Nutrient-Dense Foods", excerpt: "Simplify Your Diet, Improve Nutrition, and Reduce Calories.", date: "June 18, 2024", image: "/blog-nutrient-dense.webp" },
  { slug: "bariatric-surgery-nutrition", title: "Bariatric Surgery Nutrition", excerpt: "Comprehensive Bariatric Surgery Nutrition and Recovery Guide based on 2024 guidelines for optimal outcomes and long-term success.", date: "June 6, 2024", image: "/blog-bariatric-nutrition-cover.webp" },
  { slug: "leptin-hormone-in-obesity-treatment", title: "Leptin Hormone in Obesity Treatment", excerpt: "How the Human Body Stores Energy, Hormones' Effect on Metabolism.", date: "May 11, 2024", image: "/blog-leptin-cover.webp" },
  { slug: "bariatric-surgery-pros-and-cons", title: "Bariatric Surgery Pros and Cons", excerpt: "Bariatric Surgery: Weighing the Pros and Cons – Is It Right for You?", date: "May 7, 2024", image: "/blog-gastric-sleeve.webp" },
  { slug: "endoscopic-sleeve-gastroplasty-vs-gastric-sleeve", title: "Endoscopic Sleeve Gastroplasty vs Gastric Sleeve", excerpt: "Comparing VSG and ESG: Traditional Gastric Sleeve vs. Endoscopic Sleeve.", date: "April 30, 2024", image: "/blog-gastric-sleeve.webp" },
  { slug: "endoscopic-sleeve-gastroplasty-long-term-results", title: "Endoscopic Sleeve Gastroplasty Long Term Results", excerpt: "Endoscopic Sleeve Gastroplasty: A Long-Term Solution for Weight Loss?", date: "April 22, 2024", image: "/blog-esg-results.webp" },
  { slug: "endo-band-novel-endoscopic-approach", title: "Endo Band: A Novel Endoscopic Approach for Weight Loss", excerpt: "The Endo Band offers a less invasive alternative to traditional surgery, representing the latest innovation in endoscopic bariatric procedures.", date: "April 4, 2024", image: "/blog-endo-band.webp" },
  { slug: "vitamin-mineral-deficiencies-after-gastric-bypass", title: "Vitamin and Mineral Deficiencies After Gastric Bypass", excerpt: "How to Avoid Vitamin and Mineral Deficiencies After Gastric Bypass Surgery.", date: "March 30, 2024", image: "/blog-vitamin-deficiencies.webp" },
  { slug: "bariatric-surgery-as-safe-as-other-common-operations", title: "Bariatric Surgery as Safe as Other Common Operations", excerpt: "A comprehensive analysis comparing the safety of metabolic and bariatric surgery.", date: "February 25, 2024", image: "/blog-gastric-sleeve.webp" },
  { slug: "grazing-after-bariatric-surgery", title: "Grazing After Bariatric Surgery", excerpt: "One of the most common challenges that bariatric patients face is grazing.", date: "February 3, 2024", image: "/blog-grazing.webp" },
  { slug: "bariatric-friendly-christmas-dinner-ideas", title: "Bariatric-Friendly Christmas Dinner Ideas", excerpt: "The holiday season is a time for joy, family, and delicious food. Discover 9 delicious bariatric-friendly recipes perfect for your Christmas celebration.", date: "December 22, 2023", image: "/blog-christmas-dinner.webp" },
  { slug: "endoscopic-sleeve-gastroplasty-in-class-iii-obesity", title: "Endoscopic Sleeve Gastroplasty in Class III Obesity", excerpt: "New Study Revealed ESG's Safety and Efficacy in Class III Obesity.", date: "November 3, 2023", image: "/blog-esg-game-changer.webp" },
  { slug: "pose-endoscopic-sleeve-gastroplasty", title: "POSE Endoscopic Sleeve Gastroplasty in the Treatment of Obesity", excerpt: "Are you struggling with obesity and looking for a less invasive weight loss solution?", date: "October 12, 2023", image: "/blog-gastric-sleeve.webp" },
  { slug: "endoscopic-sleeve-gastroplasty-game-changer", title: "Endoscopic Sleeve Gastroplasty: A Game-Changer in Obesity Treatment", excerpt: "NICE Approves Endoscopic Sleeve Gastroplasty for Primary Obesity Treatment.", date: "September 14, 2023", image: "/blog-esg-game-changer.webp" },
  { slug: "fatty-liver-increases-in-adolescents", title: "Fatty Liver Increases In Adolescents", excerpt: "Chronic choline deficiency in diets can lead to fatty liver.", date: "August 25, 2023", image: "/blog-liver.webp" },
  { slug: "bariatric-surgery-18-frequently-asked-questions", title: "Bariatric Surgery 18 Frequently Asked Questions", excerpt: "Every medical procedure involves inherent risks.", date: "June 24, 2023", image: "/blog-gastric-sleeve.webp" },
  { slug: "melatonin-sleep-glucose-metabolism", title: "Melatonin: Sleep, Glucose Metabolism, and Late-Night Eating Habits", excerpt: "Melatonin has garnered significant attention due to its potential impact on glucose metabolism.", date: "May 28, 2023", image: "/blog-insulin.webp" },
  { slug: "argon-plasma-coagulation-weight-regain", title: "Argon Plasma Coagulation: An Effective Solution for Weight Regain", excerpt: "Around 20% of obese patients who undergo RYGB fail to sustain weight loss.", date: "April 27, 2023", image: "/blog-apc.webp" },
  { slug: "revisional-bariatric-surgery-in-turkey", title: "Revisional Bariatric Surgery in Turkey!", excerpt: "Revisional bariatric surgery is performed on individuals who have previously undergone bariatric surgery.", date: "September 4, 2022", image: "/blog-gastric-sleeve.webp" },
  { slug: "marmite-rich-resource-of-vitamin-b", title: "Marmite, A Rich Resource of Vitamin B", excerpt: "Unveiling the Marvels of Marmite: Ingredients, Usage, Recipes, Health Benefits.", date: "July 12, 2022" },
  { slug: "ozempic-medical-treatment-of-obesity", title: "Ozempic: No 1 Best Medical Treatment of Obesity", excerpt: "Ozempic is a weekly injection of Semaglutide and advisable for the first line treatment option for weight loss.", date: "June 5, 2022" },
  { slug: "bariclip", title: "BariClip: The Brand-new Bariatric Clip for Weight-loss", excerpt: "Obesity is an expanding health issue. One new speculative treatment resembling a clip for weightloss.", date: "February 3, 2022", image: "/blog-bariclip.webp" },
  { slug: "elipse-swallowable-intragastric-balloon", title: "Elipse Swallowable Intragastric Balloon Reveals Substantial Weight-loss", excerpt: "The Allurion intragastric balloon (formerly the Elipse) is a unique balloon that is swallowed.", date: "January 15, 2022", image: "/blog-gastric-balloon-full.webp" },
  { slug: "transit-bipartition-revision-alternative", title: "Transit Bipartition: An Attractive Revision Alternative When Sleeve Gastrectomy Fails", excerpt: "For patients that couldn't lose adequate weight or regain weight after LSG.", date: "November 27, 2021" },
  { slug: "bariatric-preoperative-diet", title: "Bariatric Preoperative Diet", excerpt: "Getting more fit before a surgical procedure diminishes the amount of fat tissue.", date: "January 26, 2021" },
  { slug: "obese-adults-covid-vaccine-priority", title: "Obese adults in 'at-risk' priority group for COVID vaccine", excerpt: "According to the latest official government guidance, the priority for giving the vaccine will be to obese adults.", date: "January 12, 2021" },
  { slug: "why-istanbul-is-an-important-location-for-obesity-surgery", title: "Why Istanbul is an Important Location for Obesity Surgery?", excerpt: "Istanbul has what it takes to be famous in this field. Well equipped hospitals, expert doctors.", date: "December 11, 2020", image: "/blog-ibc-clinic.webp" },
  { slug: "bariatric-surgery-during-covid-19-pandemic", title: "Should You Consider Having A Bariatric Surgery During the COVID-19 Pandemic?", excerpt: "A Cleveland Clinic study shows that among obese patients who tested positive for COVID-19.", date: "December 7, 2020" },
  { slug: "nutrition-tips-during-self-quarantine-covid-19", title: "Nutrition Tips During Self-Quarantine (COVID-19)", excerpt: "Since you need to spend this period at home, these suggestions will strengthen your immune system.", date: "November 25, 2020" },
];

const navLinks = [
  { href: "/", text: "Home" },
  { href: "/about", text: "About Us" },
  { href: "/treatments", text: "Treatments" },
  { href: "/sleeve-gastrectomy", text: "Gastric Sleeve" },
  { href: "/mini-gastric-bypass", text: "Mini Gastric Bypass" },
  { href: "/gastric-balloon", text: "Gastric Balloon" },
  { href: "/esg", text: "ESG" },
  { href: "/duodenal-switch", text: "Duodenal Switch" },
  { href: "/transit-bipartition", text: "Transit Bipartition" },
  { href: "/post-bariatric-surgery", text: "Post Bariatric Surgery" },
  { href: "/results", text: "Results" },
  { href: "/blog", text: "Blog" },
  { href: "/contact", text: "Contact" },
  { href: "/health-profile", text: "Am I Eligible?" },
  { href: "/insurance", text: "Insurance" },
];

export function getSEOData(path: string): PageSEO | null {
  const cleanPath = path.split("?")[0];

  if (staticPages[cleanPath]) {
    return staticPages[cleanPath];
  }

  if (cleanPath.startsWith("/blog/")) {
    const slug = cleanPath.replace("/blog/", "");
    const post = blogPosts.find((p) => p.slug === slug);
    if (post) {
      return {
        title: `${post.title} - Istanbul Bariatric Center`,
        description: post.excerpt.length > 155 ? post.excerpt.substring(0, 152) + "..." : post.excerpt,
        h1: post.title,
        bodyExcerpt: post.excerpt,
        canonical: `${SITE_URL}/blog/${post.slug}`,
        richContent: "",
        jsonLd: [{
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          "headline": post.title,
          "description": post.excerpt,
          "datePublished": post.date,
          "url": `${SITE_URL}/blog/${post.slug}`,
          "image": post.image ? `${SITE_URL}${post.image}` : undefined,
          "author": { "@type": "Person", "name": "Dr Murat Ustun" },
          "publisher": { "@type": "Organization", "name": "Istanbul Bariatric Center", "logo": { "@type": "ImageObject", "url": `${SITE_URL}/logo.webp` } },
          "mainEntityOfPage": { "@type": "WebPage", "@id": `${SITE_URL}/blog/${post.slug}` }
        }]
      };
    }
  }

  return null;
}

export function getNavigationHTML(): string {
  const links = navLinks
    .map((l) => `<a href="${l.href}">${l.text}</a>`)
    .join(" | ");
  return links;
}

export function getBlogListHTML(): string {
  return blogPosts
    .map(
      (p) =>
        `<a href="/blog/${p.slug}">${p.title}</a> — <time datetime="${p.date}">${p.date}</time>: ${p.excerpt}`,
    )
    .join("\n");
}

export function getAllBlogSlugs(): string[] {
  return blogPosts.map((p) => p.slug);
}

export function getAllStaticRoutes(): string[] {
  return Object.keys(staticPages);
}

export function getBlogPostContent(slug: string): string | null {
  try {
    const fs = require("fs");
    const path = require("path");
    const blogDataPath = path.resolve(__dirname, "../client/src/data/blog-posts.ts");
    if (!fs.existsSync(blogDataPath)) return null;
    const content = fs.readFileSync(blogDataPath, "utf-8");

    const postRegex = new RegExp(
      `\\{[\\s\\S]*?slug:\\s*"${slug.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}"[\\s\\S]*?content:\\s*\`([\\s\\S]*?)\`[\\s\\S]*?\\}`,
      'm'
    );
    const match = content.match(postRegex);
    if (match && match[1]) {
      return match[1]
        .replace(/\$\{[^}]+\}/g, '')
        .replace(/<script[^>]*>[\s\S]*?<\/script>/gi, '')
        .replace(/<style[^>]*>[\s\S]*?<\/style>/gi, '');
    }
    return null;
  } catch {
    return null;
  }
}

export { SITE_URL, navLinks, blogPosts };

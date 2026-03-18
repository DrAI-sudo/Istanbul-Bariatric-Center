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
    title: "Istanbul Bariatric Center - Weight Loss Surgery in Turkey",
    description: "World-class gastric sleeve, gastric bypass & bariatric surgery in Turkey. 8,000+ successful surgeries. JCI accredited. Free consultation.",
    h1: "Istanbul Bariatric Center - Weight Loss Surgery in Turkey",
    bodyExcerpt: "Istanbul Bariatric Center offers world-class bariatric surgery in Turkey with over 8,000 successful procedures. Led by Dr. Murat Ustun, our JCI-accredited hospital provides VIP all-inclusive packages for gastric sleeve, gastric bypass, gastric balloon, ESG, and revision surgery. Award-winning service from £2,250 with airport transfers, luxury hotel, and aftercare included.",
    canonical: SITE_URL + "/",
    richContent: `<section><h2>World-Class Bariatric Surgery in Istanbul, Turkey</h2><p>Istanbul Bariatric Center is a leading weight loss surgery clinic in Istanbul, Turkey, led by world-renowned bariatric surgeon Dr Murat Ustun. With over 8,000 successful procedures, we offer comprehensive all-inclusive packages for gastric sleeve, gastric bypass, gastric balloon, endoscopic sleeve gastroplasty (ESG), duodenal switch, and transit bipartition surgery.</p></section>
<section><h2>Our Weight Loss Surgery Procedures</h2><ul><li><strong>Gastric Sleeve Surgery</strong> (Sleeve Gastrectomy) — From £2,950. Removes 75-80% of the stomach. Most popular bariatric procedure. 60-70% excess weight loss.</li><li><strong>Mini Gastric Bypass</strong> — From £3,350. Creates a small stomach pouch and bypasses part of the small intestine. 70-80% excess weight loss.</li><li><strong>Gastric Balloon</strong> — From £1,650. Non-surgical, temporary balloon placed in stomach. Orbera and Allurion options available.</li><li><strong>Endoscopic Sleeve Gastroplasty (ESG)</strong> — From £4,950. Non-surgical stomach reduction via endoscope. No incisions, 1-3 day recovery.</li><li><strong>Duodenal Switch</strong> — From £4,400. Complex procedure for maximum weight loss in patients with very high BMI.</li><li><strong>Transit Bipartition</strong> — Advanced metabolic surgery combining sleeve gastrectomy with intestinal rerouting.</li></ul></section>
<section><h2>VIP All-Inclusive Packages</h2><p>All packages include JCI accredited hospital stay, preoperative tests, airport transfers, and dietitian support. Relaxation and Luxury packages add Dr Murat Ustun as your surgeon, Radisson Hotel accommodation, UK registered dietitian support, and supplements. We have care support coordinators in 8 UK locations.</p></section>
<section><h2>Why Choose Istanbul Bariatric Center?</h2><ul><li>8,000+ successful weight loss surgeries</li><li>JCI accredited hospital facility</li><li>WhatClinic Patient Service Award winner (2019-2025)</li><li>Led by Dr Murat Ustun — pioneer of ESG in Turkey</li><li>IFSO member</li><li>Comprehensive aftercare with UK-based support team</li><li>All-inclusive packages from £1,650</li></ul></section>
<section><h2>Contact Us</h2><p>WhatsApp (Turkey): +90 532 413 1143 | WhatsApp (UK): +44 7491 068686 | Email: drmuratustun@gmail.com</p></section>`,
    jsonLd: [{
      "@context": "https://schema.org",
      "@type": "MedicalBusiness",
      "name": "Istanbul Bariatric Center",
      "description": "Leading bariatric surgery clinic in Istanbul, Turkey offering gastric sleeve, gastric bypass, gastric balloon, ESG, and more.",
      "url": SITE_URL,
      "logo": SITE_URL + "/logo.webp",
      "image": SITE_URL + "/opengraph.jpg",
      "telephone": ["+905324131143", "+447491068686"],
      "email": "drmuratustun@gmail.com",
      "address": { "@type": "PostalAddress", "addressLocality": "Istanbul", "addressCountry": "TR" },
      "priceRange": "£1,650 - £5,950",
      "medicalSpecialty": "Bariatric Surgery",
      "availableService": [
        { "@type": "MedicalProcedure", "name": "Gastric Sleeve Surgery", "procedureType": "Surgical" },
        { "@type": "MedicalProcedure", "name": "Mini Gastric Bypass", "procedureType": "Surgical" },
        { "@type": "MedicalProcedure", "name": "Gastric Balloon", "procedureType": "Noninvasive" },
        { "@type": "MedicalProcedure", "name": "Endoscopic Sleeve Gastroplasty (ESG)", "procedureType": "Noninvasive" },
        { "@type": "MedicalProcedure", "name": "Duodenal Switch", "procedureType": "Surgical" },
        { "@type": "MedicalProcedure", "name": "Transit Bipartition", "procedureType": "Surgical" }
      ]
    }]
  },
  "/about": {
    title: "About Us - Istanbul Bariatric Center | Dr. Murat Ustun",
    description: "About Istanbul Bariatric Center, led by Dr. Murat Ustun. 8,000+ successful bariatric surgeries. IFSO member, JCI accredited Liv Hospital.",
    h1: "About Istanbul Bariatric Center",
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
  "/results": {
    title: "Patient Results & Testimonials - Istanbul Bariatric Center",
    description: "Real patient results and testimonials from Istanbul Bariatric Center. Before and after weight loss surgery transformations.",
    h1: "Patient Results & Testimonials",
    bodyExcerpt: "View real patient results and testimonials from Istanbul Bariatric Center. Our patients share their weight loss journeys and transformations after gastric sleeve, gastric bypass, and other bariatric procedures. Over 8,000 successful surgeries with verified 5-star reviews on WhatClinic.",
    canonical: SITE_URL + "/results",
    richContent: `<section><h2>Real Patient Transformations</h2><p>Our patients have achieved life-changing results through bariatric surgery at Istanbul Bariatric Center. View real before and after photos and read testimonials from patients who have undergone gastric sleeve, gastric bypass, ESG, and other weight loss procedures.</p></section>
<section><h2>Patient Testimonials</h2>
<blockquote><p>"The whole experience was amazing from start to finish. Dr Ustun and the team made me feel so comfortable and looked after. I've lost over 40kg and my life has completely changed." — Gastric Sleeve Patient</p></blockquote>
<blockquote><p>"Best decision I ever made. The VIP package was incredible — hotel, transfers, everything was taken care of. The aftercare support from the UK dietitian has been invaluable." — Gastric Bypass Patient</p></blockquote>
<blockquote><p>"I was nervous about having surgery abroad but Istanbul Bariatric Center exceeded all my expectations. The hospital was world-class and the care was outstanding." — ESG Patient</p></blockquote></section>
<section><h2>Verified Reviews</h2><p>Istanbul Bariatric Center has earned the WhatClinic Patient Service Award for 6 consecutive years (2019-2025) based on verified patient reviews. Over 8,000 successful procedures with consistently high satisfaction ratings.</p></section>`,
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
    title: "Mini Gastric Bypass Surgery in Turkey - Istanbul Bariatric Center",
    description: "Mini Gastric Bypass (One Anastomosis Gastric Bypass) surgery in Istanbul. Effective weight loss with metabolic benefits. Expert care by Dr. Murat Ustun.",
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
    title: "Transit Bipartition Surgery in Turkey - Istanbul Bariatric Center",
    description: "Transit Bipartition (TB) surgery in Istanbul. A modern alternative combining sleeve gastrectomy with metabolic benefits. Excellent for revision surgery.",
    h1: "Transit Bipartition Surgery",
    bodyExcerpt: "Transit Bipartition at Istanbul Bariatric Center is a modern bariatric procedure that combines sleeve gastrectomy with a partial intestinal bypass. It enhances metabolic outcomes while preserving natural digestive flow. Particularly effective as a revision option when sleeve gastrectomy alone has not achieved desired results.",
    canonical: SITE_URL + "/transit-bipartition",
    richContent: `<section><h2>What is Transit Bipartition?</h2><p>Transit Bipartition is a modern bariatric procedure that combines sleeve gastrectomy with a partial intestinal bypass, creating a dual-pathway digestive system. Food travels both through the normal digestive route and through a bypass route, maximising metabolic benefits while reducing malabsorption risks compared to traditional duodenal switch.</p></section>
<section><h2>Benefits of Transit Bipartition</h2><ul><li>Enhanced weight loss compared to sleeve gastrectomy alone</li><li>Excellent diabetes and metabolic syndrome resolution</li><li>Lower complication risk than full duodenal switch</li><li>Ideal as revision surgery after insufficient weight loss from sleeve gastrectomy</li><li>Preserves natural digestive flow reducing vitamin deficiency risks</li></ul></section>
<section><h2>Who is Suitable?</h2><p>Transit bipartition is particularly recommended for patients who have not achieved sufficient weight loss or have experienced weight regain after sleeve gastrectomy, patients with type 2 diabetes seeking enhanced metabolic outcomes, and those with BMI 40+ seeking an effective surgical option with lower malabsorption risk than duodenal switch.</p></section>`,
  },
  "/esg": {
    title: "Endoscopic Sleeve Gastroplasty (ESG) in Turkey - Istanbul Bariatric Center",
    description: "ESG (Endoscopic Sleeve Gastroplasty) - non-surgical stomach reduction in Istanbul. No incisions, faster recovery. From £4,950. NICE approved.",
    h1: "Endoscopic Sleeve Gastroplasty (ESG)",
    bodyExcerpt: "Endoscopic Sleeve Gastroplasty (ESG) at Istanbul Bariatric Center is a minimally invasive, incisionless procedure that reduces stomach volume by up to 70% using endoscopic suturing. NICE approved for primary obesity treatment, ESG offers faster recovery, lower risk, and effective weight loss for patients seeking a non-surgical option.",
    canonical: SITE_URL + "/esg",
    richContent: `<section><h2>What is ESG (Endoscopic Sleeve Gastroplasty)?</h2><p>ESG is a revolutionary non-surgical weight loss procedure that reduces stomach size by 70-80% using endoscopic suturing through the mouth. No incisions are made — a flexible endoscope is inserted through the mouth and sutures are placed in the stomach wall to create a smaller, tubular stomach shape similar to a surgical sleeve. The procedure takes approximately 60-90 minutes and is performed under general anaesthesia.</p></section>
<section><h2>Why Choose ESG?</h2><ul><li>No incisions, no scars — performed entirely through the mouth</li><li>Fastest recovery: return to normal activities in 1-3 days</li><li>15-20% total body weight loss within 12 months</li><li>NICE approved for primary obesity treatment</li><li>Reversible and can be converted to surgery if needed</li><li>Lower complication risk than surgical alternatives</li><li>Pioneered in Turkey by Dr Murat Ustun</li></ul></section>
<section><h2>ESG Packages & Pricing</h2>
<article><h3>Relaxation Package — £4,950</h3><p>Procedure by Dr Murat Ustun, JCI Hospital (1 night), Radisson Hotel, UK dietitian (12 months), supplements.</p></article>
<article><h3>Luxury Package — £5,950</h3><p>Full VIP experience with extended hotel, private transfers, premium room, comprehensive aftercare and supplement package.</p></article></section>
<section><h2>Who is Suitable for ESG?</h2><p>ESG is ideal for patients with BMI 30-40 who want significant weight loss without surgery, those not suitable for or reluctant to undergo surgical procedures, and patients seeking a minimally invasive option with fast recovery.</p></section>`,
    jsonLd: [{
      "@context": "https://schema.org",
      "@type": "MedicalProcedure",
      "name": "Endoscopic Sleeve Gastroplasty (ESG)",
      "alternateName": ["ESG", "Apollo ESG", "Non-Surgical Gastric Sleeve"],
      "procedureType": "Noninvasive",
      "offers": [
        { "@type": "Offer", "name": "Relaxation", "price": "4950", "priceCurrency": "GBP" },
        { "@type": "Offer", "name": "Luxury", "price": "5950", "priceCurrency": "GBP" }
      ]
    }]
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
  "/health-profile": {
    title: "Am I Eligible for Weight Loss Surgery? - Istanbul Bariatric Center",
    description: "Complete our free health profile assessment to find out if you're eligible for bariatric surgery. Personal health evaluation by Dr Murat Ustun's team.",
    h1: "Personal Health Profile - Am I Eligible?",
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
  { slug: "esg-tore-endoscopic-weight-loss-evidence-2026", title: "ESG and TORe: The Latest Clinical Evidence for Endoscopic Weight Loss (2026 Update)", excerpt: "A comprehensive look at the latest clinical evidence for Endoscopic Sleeve Gastroplasty (ESG) and Transoral Outlet Reduction (TORe) — including long-term results up to 5 years, safety data from over 15,000 patients, and how these non-surgical procedures compare.", date: "March 18, 2026", image: "/blog-esg-tore-evidence-2026.webp" },
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
  { slug: "leaks-in-bariatric-surgery", title: "Leaks in Bariatric Surgery", excerpt: "Understanding the Risks of Gastrointestinal Leaks in Bariatric Surgery.", date: "July 16, 2024", image: "/blog-gastric-sleeve.webp" },
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

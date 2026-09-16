import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { SEO, JsonLd, structuredData } from "@/components/seo";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";
import { Link } from "wouter";
import {
  MoneyHero,
  ProcedureFacts,
  ProseSection,
  SurgeonProof,
  Candidacy,
  Checklist,
  ComparisonBlock,
  FAQSection,
  RelatedLinks,
  ConversionModule,
  ExpertPOV,
  DecisionBlock,
  StickyCTA,
  InlineCTA,
} from "@/components/money-page";

const faqs = [
  {
    question: "How much does gastric bypass surgery cost in Turkey?",
    answer: "At Istanbul Bariatric Center, the all-inclusive Gastric Bypass Relaxation package is £5,000 and the Luxury package is £5,350. These prices apply to both Roux-en-Y and mini (OAGB) bypass when clinically appropriate. There is no basic bypass package. Your written treatment plan confirms the recommended operation and everything included before you travel.",
  },
  {
    question: "Is gastric bypass surgery in Turkey safe?",
    answer: "Every operation has risk, and travelling abroad does not remove it. Safety depends on appropriate patient selection, an experienced bariatric surgeon, an accredited hospital, careful anaesthesia assessment and reliable aftercare. Dr Murat Üstün operates at JCI-accredited Liv Hospital Vadistanbul. Your medical history is reviewed before acceptance, and risks are discussed during consent.",
  },
  {
    question: "What is the difference between Roux-en-Y and mini gastric bypass?",
    answer: "Roux-en-Y gastric bypass creates a small stomach pouch and two intestinal joins. Mini gastric bypass, also called one-anastomosis gastric bypass or OAGB, uses a longer pouch and one join. OAGB is technically simpler, while Roux-en-Y may be preferred where bile reflux is a concern. The choice is individual, not simply a matter of price.",
  },
  {
    question: "How long is recovery after gastric bypass?",
    answer: "Recovery is gradual and varies with health, work and the exact procedure. The package includes three hospital nights. Patients then progress through a staged diet, increase gentle activity as advised and return to work only when the surgical team considers it appropriate. Heavy lifting and strenuous exercise wait until medical clearance.",
  },
  {
    question: "Can gastric bypass put type-2 diabetes into remission?",
    answer: "Gastric bypass has a strong metabolic effect and published outcomes include up to 80% type-2 diabetes remission. Remission is not guaranteed and is not the same as a permanent cure. Duration of diabetes, pancreatic function, medication use and weight response all influence the result, so medicines must only be changed under clinical supervision.",
  },
  {
    question: "What is included in the gastric bypass Turkey package?",
    answer: "The Relaxation package includes surgery by Dr Murat Üstün, three nights at the JCI-accredited hospital, Radisson hotel accommodation, VIP airport transfers, all pre-operative tests, a supplements pack and support from a UK-registered dietitian for 12 months. Luxury adds an extended hotel stay, private VIP transfers throughout, a premium room and extended dietitian support.",
  },
  {
    question: "Can a gastric sleeve be revised to gastric bypass?",
    answer: "A sleeve can sometimes be converted to Roux-en-Y or OAGB for significant reflux, inadequate weight loss or weight regain, but revision surgery is more complex than a primary operation. The surgeon needs the original operation details, current imaging or endoscopy where indicated, eating history and a full medical assessment before recommending a revision.",
  },
  {
    question: "How much weight can I lose after gastric bypass?",
    answer: "A commonly used benchmark is 70–80% excess weight loss, although an individual result cannot be promised. Starting weight, procedure choice, eating behaviour, activity, metabolic health and engagement with dietitian follow-up all matter. The aim is durable health improvement rather than reaching a particular number as quickly as possible.",
  },
];

const packages = [
  {
    name: "Gastric Bypass Relaxation",
    price: "£5,000",
    color: "emerald",
    recommended: true,
    features: [
      "Surgery by Dr Murat Üstün",
      "JCI-accredited hospital for 3 nights",
      "Radisson hotel accommodation",
      "VIP airport transfers",
      "All pre-operative tests",
      "UK-registered dietitian support for 12 months",
      "Supplements pack",
    ],
  },
  {
    name: "Gastric Bypass Luxury",
    price: "£5,350",
    color: "amber",
    recommended: false,
    features: [
      "Surgery by Dr Murat Üstün",
      "JCI-accredited hospital for 3 nights",
      "Extended Radisson hotel stay",
      "Private VIP transfers throughout",
      "All pre-operative tests",
      "Premium room",
      "Extended dietitian support",
      "Supplements pack",
    ],
  },
];

const procedureJsonLd = {
  "@context": "https://schema.org",
  "@type": "MedicalProcedure",
  "@id": "https://istanbulbariatriccenter.com/gastric-bypass#procedure",
  name: "Gastric Bypass Surgery",
  alternateName: ["Roux-en-Y Gastric Bypass", "RYGB", "One-Anastomosis Gastric Bypass", "OAGB", "Mini Gastric Bypass"],
  description: "Gastric bypass surgery in Turkey, including Roux-en-Y and mini one-anastomosis gastric bypass, with all-inclusive care at Liv Hospital Vadistanbul.",
  procedureType: "https://schema.org/SurgicalProcedure",
  bodyLocation: "Stomach and small intestine",
  performedBy: { "@id": "https://istanbulbariatriccenter.com/#drmuratustun" },
  provider: { "@id": "https://istanbulbariatriccenter.com/#organization" },
  url: "https://istanbulbariatriccenter.com/gastric-bypass",
  offers: packages.map((pkg) => ({
    "@type": "Offer",
    name: pkg.name,
    price: pkg.price.replace("£", "").replace(",", ""),
    priceCurrency: "GBP",
    url: "https://istanbulbariatriccenter.com/gastric-bypass",
  })),
};

export default function GastricBypass() {
  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="Gastric Bypass Turkey 2026"
        description="Roux-en-Y and mini gastric bypass surgery in Turkey with Dr Murat Üstün. Compare options, risks and all-inclusive packages from £5,000."
        url="/gastric-bypass"
      />
      <JsonLd data={structuredData.createBreadcrumb([
        { name: "Home", url: "/" },
        { name: "Treatments", url: "/treatments" },
        { name: "Gastric Bypass Surgery in Turkey", url: "/gastric-bypass" },
      ])} />
      <JsonLd data={procedureJsonLd} />
      <Navbar />

      <MoneyHero
        eyebrow="Bariatric and metabolic surgery in Istanbul"
        title="Gastric Bypass Surgery in Turkey"
        subtitle="A surgeon-led guide to Roux-en-Y and mini (OAGB) gastric bypass, with transparent 2026 packages and structured international aftercare."
        stats={[
          { value: "£5,000", label: "All-inclusive from" },
          { value: "70–80%", label: "Excess weight loss benchmark" },
          { value: "3 nights", label: "JCI hospital stay" },
          { value: "12 months", label: "Dietitian support" },
        ]}
      />

      <ProcedureFacts
        title="Gastric bypass at a glance"
        facts={[
          { label: "Techniques covered", value: "Roux-en-Y and OAGB" },
          { label: "Diabetes remission", value: "Up to 80%" },
          { label: "Hospital", value: "Liv Vadistanbul" },
          { label: "Surgeon experience", value: "22+ years" },
        ]}
      />

      <ProseSection title="What is gastric bypass surgery?" id="overview">
        <p>
          Gastric bypass is a family of bariatric operations that changes both the stomach and the route food takes through the small intestine. It creates a smaller functional stomach pouch and bypasses part of the digestive tract. This supports earlier fullness, changes hunger signalling and produces a metabolic effect that can be particularly relevant when obesity is accompanied by type-2 diabetes.
        </p>
        <p>
          This is the umbrella guide to <strong>gastric bypass surgery in Turkey</strong>. It covers the established Roux-en-Y gastric bypass (RYGB) and the one-anastomosis gastric bypass (OAGB), often called a mini gastric bypass. They share important principles, but they are not identical operations. Patients specifically researching the one-join technique should also read our detailed <Link href="/mini-gastric-bypass" className="text-primary font-semibold hover:underline">mini gastric bypass guide</Link>.
        </p>
        <p>
          At Istanbul Bariatric Center, procedure selection follows clinical assessment rather than a one-size-fits-all sales pathway. Dr Murat Üstün reviews weight history, metabolic disease, reflux symptoms, previous abdominal surgery, medicines, eating patterns and relevant investigations. If a sleeve may be a better fit, our <Link href="/gastric-sleeve-vs-gastric-bypass" className="text-primary font-semibold hover:underline">gastric sleeve versus gastric bypass comparison</Link> sets out the practical trade-offs.
        </p>
        <InlineCTA label="Request a free clinical assessment" />
      </ProseSection>

      <ComparisonBlock
        title="Roux-en-Y vs mini gastric bypass"
        subtitle="Both can be effective. Anatomy, reflux profile, metabolic priorities and long-term nutritional follow-up guide the decision."
        columns={["Decision point", "Roux-en-Y (RYGB)", "Mini bypass (OAGB)"]}
        rows={[
          ["Surgical layout", "Small pouch with two intestinal joins", "Longer pouch with one intestinal join"],
          ["Also known as", "Standard or traditional gastric bypass", "One-anastomosis or mini gastric bypass"],
          ["Reflux considerations", "Often considered when acid reflux influences procedure choice", "Bile reflux risk requires careful assessment"],
          ["Nutritional effect", "Reduced absorption requires lifelong monitoring", "Reduced absorption requires lifelong monitoring"],
          ["Best choice", "Depends on individual anatomy and clinical priorities", "Depends on individual anatomy and clinical priorities"],
        ]}
        footnote={<>Explore OAGB in depth on the <Link href="/mini-gastric-bypass" className="text-primary hover:underline">dedicated mini gastric bypass page</Link>.</>}
      />

      <ExpertPOV title="How I choose the right bypass operation">
        <p>
          I do not recommend Roux-en-Y or OAGB from weight alone. I look at the whole clinical picture: reflux and swallowing symptoms, diabetes history, previous surgery, medicines, dietary behaviour and whether the patient can commit to lifelong blood tests and supplements.
        </p>
        <p>
          The most suitable operation is the one whose benefits and trade-offs match that person. Sometimes that is Roux-en-Y, sometimes OAGB, and sometimes bypass is not the responsible choice. A clear pre-operative discussion should explain why a technique is being recommended and what follow-up it requires.
        </p>
      </ExpertPOV>

      <Candidacy
        title="Who may be suitable for gastric bypass?"
        intro={<p>Suitability is confirmed only after medical and nutritional review. Gastric bypass may be discussed when durable weight reduction and metabolic improvement are important and the patient understands the permanent follow-up responsibilities.</p>}
        criteria={[
          "People with clinically significant obesity after appropriate non-surgical efforts",
          "Patients whose type-2 diabetes or other metabolic disease influences procedure choice",
          "People comparing bypass with sleeve because reflux is an important concern",
          "Patients able to follow staged eating guidance after surgery",
          "People willing to take prescribed supplements and attend lifelong nutritional monitoring",
          "Selected patients considering revision after a previous sleeve operation",
        ]}
        note={<>Pregnancy plans, active substance dependence, uncontrolled mental health conditions, untreated eating disorders, major anaesthetic risk and inability to follow aftercare may delay or rule out surgery. A free consultation is an assessment, not an automatic approval.</>}
      />

      <DecisionBlock
        title="Gastric bypass decision summary"
        bestFor={[
          "Patients seeking a strong weight-loss and metabolic procedure",
          "Selected people with type-2 diabetes",
          "Patients for whom reflux affects the sleeve-versus-bypass decision",
          "People committed to long-term dietary and laboratory follow-up",
        ]}
        notIdealFor={[
          "Anyone seeking a reversible or maintenance-free procedure",
          "Patients unable to take lifelong prescribed supplements",
          "People not medically fit for general anaesthesia",
          "Anyone unwilling to stop smoking or follow the clinical preparation plan",
        ]}
        typicalRecovery="The initial stay includes three nights in hospital. Drinking, walking and a staged diet begin under the team’s guidance. Energy and work readiness return gradually; travel, driving, lifting and exercise advice is personalised at discharge."
        tradeOffs={[
          "More complex anatomy than sleeve gastrectomy",
          "Lifelong vitamin, mineral and blood-test follow-up",
          "Potential dumping symptoms and altered medicine or alcohol absorption",
          "Procedure-specific risks including leak, bleeding, obstruction, ulcer and nutritional deficiency",
        ]}
      />

      <ProseSection title="Expected results and metabolic benefits" tone="blue">
        <p>
          Gastric bypass patients commonly use <strong>70–80% excess weight loss</strong> as an outcome benchmark. Excess weight loss is not the same as total body weight loss, and it should never be presented as a guaranteed personal result. Weight generally changes over time as food tolerance, appetite, activity and metabolic health evolve.
        </p>
        <p>
          The bypass also changes gut hormone signalling and can improve blood glucose control before all expected weight has been lost. Outcomes include <strong>up to 80% type-2 diabetes remission</strong>, but remission varies and requires ongoing monitoring. Patients should not stop insulin or other medication without the clinicians managing their diabetes.
        </p>
        <p>
          Durable results depend on the operation working together with protein-led eating, hydration, activity, supplements and follow-up. Our UK-registered dietitian provides structured support rather than leaving international patients to interpret symptoms alone. See anonymised patient journeys on the <Link href="/results" className="text-primary font-semibold hover:underline">results page</Link>, while remembering that another person’s result cannot predict yours.
        </p>
      </ProseSection>

      <Checklist
        title="Benefits considered during shared decision-making"
        background="slate"
        items={[
          "A strong established option for excess weight loss",
          "Meaningful metabolic effect for selected patients with type-2 diabetes",
          "Earlier fullness from the smaller functional pouch",
          "Roux-en-Y and OAGB options allow anatomy to be matched to clinical priorities",
          "May be considered as revision after sleeve in carefully selected cases",
          "A defined package with hospital, transfers, hotel and dietitian aftercare",
        ]}
      />

      <Checklist
        title="Risks and long-term responsibilities"
        tone="warning"
        items={[
          "Bleeding, infection, blood clots, anaesthetic complications and leakage are recognised surgical risks",
          "Stricture, bowel obstruction, internal hernia or ulcer may require investigation or further treatment",
          "Dumping symptoms can follow rapidly absorbed sugary foods",
          "Iron, vitamin and mineral deficiencies can develop without supplements and blood monitoring",
          "OAGB requires specific discussion of bile reflux; reflux history matters when choosing technique",
          "Weight regain remains possible, especially without sustained nutrition and behaviour changes",
        ]}
      />

      <ProseSection title="Recovery, diet and follow-up after bypass">
        <p>
          Recovery starts in hospital with monitoring, pain and nausea control, early walking and carefully introduced fluids. The all-inclusive package provides three hospital nights at Liv Hospital Vadistanbul. Discharge happens only after the clinical team is satisfied with hydration, mobility and the immediate surgical course.
        </p>
        <p>
          Eating progresses in stages from liquids toward softer textures and then an individually tolerated long-term pattern. Small portions, slow eating, thorough chewing and separating food from drinks can improve comfort. Protein, hydration and prescribed supplementation are priorities. Vomiting, persistent pain, fever, shortness of breath, an inability to drink or other concerning symptoms require prompt clinical contact rather than reassurance from social media.
        </p>
        <p>
          International planning includes flight timing, medication instructions, thrombosis precautions and arrangements for support after returning home. Read the <Link href="/bariatric-surgery-travel-guide" className="text-primary font-semibold hover:underline">bariatric surgery travel guide</Link> before booking. The package’s UK-registered dietitian support provides continuity, but it complements rather than replaces emergency and routine healthcare in your home country.
        </p>
      </ProseSection>

      <section className="py-20 bg-slate-50" aria-label="Gastric bypass packages and prices">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Gastric bypass packages in Turkey</h2>
            <p className="text-slate-600 text-lg max-w-3xl mx-auto">
              Transparent all-inclusive pricing for clinically appropriate Roux-en-Y or mini (OAGB) bypass. There is no basic gastric bypass package.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {packages.map((pkg, idx) => {
              const colorStyles = {
                emerald: { border: "border-emerald-500", bg: "bg-emerald-50", price: "text-emerald-600", check: "bg-emerald-100", checkIcon: "text-emerald-600", btn: "bg-emerald-600 hover:bg-emerald-700", badge: "bg-emerald-600" },
                amber: { border: "border-amber-500", bg: "bg-amber-50", price: "text-amber-600", check: "bg-amber-100", checkIcon: "text-amber-600", btn: "bg-amber-600 hover:bg-amber-700", badge: "bg-amber-600" },
              }[pkg.color] || { border: "border-blue-500", bg: "bg-blue-50", price: "text-blue-600", check: "bg-blue-100", checkIcon: "text-blue-600", btn: "bg-blue-600 hover:bg-blue-700", badge: "bg-blue-600" };
              return (
                <Card key={idx} className={`relative overflow-hidden border-2 transition-all duration-300 hover:shadow-xl ${pkg.recommended ? `${colorStyles.border} shadow-lg scale-105 z-10` : `${colorStyles.border} shadow-sm`}`}>
                  {pkg.recommended && (
                    <div className={`absolute top-0 right-0 ${colorStyles.badge} text-white text-xs font-bold px-3 py-1 rounded-bl-lg`}>
                      Recommended
                    </div>
                  )}
                  <CardHeader className={`text-center pb-2 ${colorStyles.bg}`}>
                    <CardTitle className="text-xl font-bold text-slate-900">{pkg.name}</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center space-y-6 pt-6">
                    <div className={`text-4xl font-extrabold ${colorStyles.price}`}>{pkg.price}</div>
                    <ul className="space-y-4 text-left mx-auto max-w-[280px]">
                      {pkg.features.map((feature, i) => (
                        <li key={i} className="flex items-center gap-3 text-slate-700">
                          <div className={`w-5 h-5 rounded-full ${colorStyles.check} flex items-center justify-center shrink-0`}>
                            <Check className={`w-3 h-3 ${colorStyles.checkIcon}`} aria-hidden="true" />
                          </div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                  <CardFooter className="pt-4 pb-8">
                    <a href={`https://wa.me/447491068686?text=${encodeURIComponent(`Hi, I'm interested in the ${pkg.name} package`)}`} target="_blank" rel="noopener noreferrer" className="w-full">
                      <Button className={`w-full ${colorStyles.btn} text-white`}>Select package</Button>
                    </a>
                  </CardFooter>
                </Card>
              );
            })}
          </div>
          <p className="text-sm text-slate-500 text-center mt-10 max-w-3xl mx-auto">
            A clinical assessment is required. Your written quote should be reviewed alongside travel and personal expenses. For broader context, compare the <Link href="/cost-of-bariatric-surgery-in-turkey" className="text-primary hover:underline">cost of bariatric surgery in Turkey</Link>.
          </p>
        </div>
      </section>

      <SurgeonProof
        title="Specialist bypass care in Istanbul"
        subtitle="Istanbul Bariatric Center was founded by Dr Murat Üstün, a bariatric and metabolic surgeon with 22+ years’ experience and 8,000+ procedures."
        cards={[
          { icon: "surgeon", title: <Link href="/dr-murat-ustun" className="hover:text-primary">Dr Murat Üstün</Link>, text: "IFSO member, founder of Istanbul Bariatric Center and pioneer of ESG in Turkey." },
          { icon: "hospital", title: "JCI-accredited hospital", text: "Surgery and the three-night hospital stay take place at Liv Hospital Vadistanbul." },
          { icon: "pricing", title: "Two transparent packages", text: "Relaxation is £5,000 and Luxury is £5,350, with no basic bypass package." },
          { icon: "results", title: "Recognised patient service", text: "WhatClinic Patient Service Awards in 2019–2021 and 2023–2025." },
        ]}
      />

      <FAQSection
        title="Gastric bypass Turkey FAQs"
        subtitle="Clear answers about cost, technique, safety, recovery and long-term care."
        faqs={faqs}
      />

      <RelatedLinks
        title="Compare your treatment options"
        links={[
          { title: "Mini Gastric Bypass", description: "A detailed guide to the one-anastomosis OAGB technique.", href: "/mini-gastric-bypass" },
          { title: "Sleeve vs Bypass", description: "Compare anatomy, suitability, benefits and trade-offs.", href: "/gastric-sleeve-vs-gastric-bypass" },
          { title: "Gastric Sleeve", description: "Understand the non-bypass surgical alternative.", href: "/sleeve-gastrectomy" },
          { title: "UK Patient Guide", description: "Plan treatment and aftercare from the United Kingdom.", href: "/bariatric-surgery-for-uk-patients" },
        ]}
      />

      <ConversionModule
        title="Ask which bypass is right for you"
        text="Send your health and weight history for a free consultation with the Istanbul Bariatric Center team. We will explain whether Roux-en-Y, OAGB or another approach deserves consideration."
        buttonLabel="WhatsApp our UK team"
      />
      <Footer />
      <StickyCTA guideHref="/bariatric-surgery-turkey-guide" />
    </div>
  );
}
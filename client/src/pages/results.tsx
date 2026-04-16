import { useState } from "react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";
import { SEO } from "@/components/seo";
import { SummarizeWithAI } from "@/components/summarize-with-ai";
import { Star, ChevronDown, ChevronUp, CheckCircle, Award, ExternalLink } from "lucide-react";

const beforeAfterImages = [
  "/ba_1.webp",
  "/ba_2.webp",
  "/ba_3.webp",
  "/ba_4.webp",
  "/ba_5.webp",
  "/ba_6.webp",
  "/ba_7.webp",
  "/ba_8.webp",
  "/ba_9.webp",
  "/ba_10.webp",
  "/ba_11.webp",
  "/ba_12.webp"
];

const patientResults = [
  {
    name: "Sahra",
    country: "Germany",
    lost: "52 kg",
    time: "5 Months",
    desc: "I've had Sleeve gastrectomy operations. My surgeon name was Dr Murat Üstün and his team Istanbul Bariatrics was absolutely amazing. I was out of hospital within 2.5 days.",
    drLink: true,
    tags: ["Sleeve Gastrectomy", "Life Changing"]
  },
  {
    name: "Danielle",
    country: "UK",
    lost: "52 kg",
    time: "8 Months",
    desc: "In 8 months I am down 52kg. I am so grateful to Dr Ustun and Istanbul Bariatric centre for giving me my life back. If anyone is still researching, look no further.",
    drLink: true,
    tags: ["Gastric Sleeve", "Recommendation"]
  },
  {
    name: "Linda",
    country: "UK",
    lost: "Significant Weight",
    time: "Post-Op",
    desc: "The surgery was pain-free and recovery was super quick. After being released from the hospital, we explored Istanbul on foot and had no trouble walking around.",
    tags: ["Pain Free", "Quick Recovery"]
  },
  {
    name: "Sabrina",
    country: "International",
    lost: "Total Control",
    time: "Post-Op",
    desc: "I feel totally in control of my weight thank you to Dr Murat he is very nice and kind. The best decision in life with the best team thank you for making me feel myself again.",
    drLink: true,
    tags: ["Control", "Best Decision"]
  }
];

const countryFlags: Record<string, string> = {
  "US": "🇺🇸",
  "UK": "🇬🇧",
  "Canada": "🇨🇦",
  "Romania": "🇷🇴",
  "Germany": "🇩🇪",
  "Malta": "🇲🇹",
  "Georgia": "🇬🇪",
  "Bosnia and Herzegovina": "🇧🇦",
  "Turkey": "🇹🇷",
  "Denmark": "🇩🇰",
  "International": "🌍",
  "Spain": "🇪🇸",
};

const whatClinicReviews = [
  {
    name: "Brad",
    country: "US",
    date: "11.11.2025",
    procedure: "ESG Max",
    verified: "email",
    headline: "He was also present in the operating room after I woke up from anaesthesia",
    text: "I chose to get ESG Max done with Dr Murat Ustun, after being referred by a friend and another medical doctor in Turkey. Dr Ustun speaks English fluently and has many years of experience with bariatric surgical procedures. While there were a couple of hiccups along the way, overall I had an outstanding experience, and would recommend Dr Ustun to anyone considering a bariatric procedure. The package I chose included transport to and from the airport, as well as a multi-night stay in a luxury hotel within walking distance of the hospital. I had an initial consult with him by Zoom, which was complimentary. He explained to me the benefits and risks of multiple options. Dr Ustun came and greeted me before the procedure. He was also present in the operating room after I woke up from anaesthesia. After I was back in my patient room later that day, he came to check on me and explain the results of my procedure. He also came back once per day to check in, until I left and went to the hotel. I have also had access to him by phone ever since the initial consultation, and he continued to follow up on my progress even after I left Turkey. I have been very impressed with his availability and dedication to follow-up care."
  },
  {
    name: "Javier V",
    country: "Romania",
    date: "03.11.2025",
    procedure: "Bariatric Surgery",
    verified: "phone",
    headline: "I'm very happy with the results",
    text: "I'm very distrustful, especially since I'm a nurse in Spain. However, from the moment they picked me up at the airport, I felt comfortable; everyone was very kind. Dr. Murat explained the entire process to me beforehand, on the day of the surgery, and even in the days that followed, answering all my questions. I'm very happy with the results; the surgery was uncomplicated, and the nurses were also very attentive. THANK YOU"
  },
  {
    name: "Shariq A",
    country: "Canada",
    date: "30.10.2025",
    procedure: "Gastric Sleeve",
    verified: "phone",
    headline: "My entire experience was nothing short of fabulous",
    text: "I had my gastric sleeve surgery in Turkey by Dr. Murat and his amazing team on July 1, 2025. My entire experience was nothing short of fabulous. From the moment I arrived, I felt completely at ease — even though I travelled alone. The care, support, and professionalism made me feel like I never needed to have a family member by my side. The surgery itself was incredibly smooth, far beyond what I had imagined. What impressed me most was the continuous support. Dr. Murat's team stayed connected with me from surgery until today, guiding me step by step through nutrition, aftercare, and recovery. I have not faced a single complication since the procedure, and within just four months, I have already lost 35 kg. All I can say is that I completely trust my life with Dr. Murat and his team. Hats off to them for their dedication, compassion, and excellence."
  },
  {
    name: "Alina Boyko",
    country: "US",
    date: "24.10.2025",
    procedure: "Bariatric Surgery",
    verified: "phone",
    headline: "Very nice and pleasant rehabilitation time",
    text: "Very good service with strong support from Dr., as well as from his team. Surgery went really fast and seamless. I picked the hospital with the medical tourism advisor, and it was the right one for me! As I arrived at the airport, it was very easy to find the centre. Once I got there, the crew took care of me right from there with a private shuttle and hotel stay. On the following day, I got picked up by the cab arranged by the hospital team, and they got me right to the main doors. Once I entered, I got directed to the international centre, where I got my translator, who took me around to each doctor and lab I needed for my surgery. In one day, I did all the tests I needed, and on the following already went for the surgery. Very fast surgery, I didn't even notice how the time passed. The doctor was coming to see me at least twice a day. Nurses and hospital crew were very, very nice and flexible with all the requests or questions I had. Very nice and pleasant rehabilitation time. Past the time I left the country, the team stayed in touch with me the entire time, supported me with all the questions, as well as guided me where required. I'm very happy with the entire process. Would definitely recommend it to anyone!"
  },
  {
    name: "Ketlene",
    country: "Canada",
    date: "23.10.2025",
    procedure: "Gastric Sleeve",
    verified: "phone",
    headline: "Truly a five-star experience",
    text: "I had my sleeve surgery with Dr. Murat Ustun, and the experience was absolutely amazing. From the very beginning, I was treated like a princess. Before the operation, I met several specialists — a cardiologist, a lung doctor, and others — to ensure everything was safe. After surgery, I had zero pain, only a bit of nausea from the anaesthesia. That same evening, I was already feeling well. The hospital room looked like a luxury hotel, and the nurses were incredibly caring — I accidentally pressed the call button once, and they were in my room within seconds. Dr. Ustun came to check on me personally every morning. I stayed a few days at the hospital and then returned to my hotel. I felt so good that I flew back home to Canada two days earlier than planned, and the next day I was already back at work full-time, completely pain-free. Two weeks later, I had already lost 10 pounds. What makes this experience even better is that I have one full year of follow-up with Dr. Ustun's team, including regular appointments with a nutritionist and the doctor. I 100% recommend Dr. Murat Ustun and his entire team — they are professional, compassionate, and provide exceptional care. Truly a five-star experience!"
  },
  {
    name: "Monty J",
    country: "UK",
    date: "21.10.2025",
    procedure: "Gastric Sleeve",
    verified: "phone",
    headline: "A paradigm shift in my quality of life",
    text: "I weighed 146.8kg and was 1.73 meters tall. Price was a sensitive matter for me and so I looked at all options, local in the UK, in Spain, and of course, Istanbul Bariatric Centre. After initial contact and a detailed consultation with my surgeon, I opted for a gastric sleeve. I followed their suggested diet and was up and walking around the next day after the operation. It cost me a quarter of what the operation costs in the UK. The team were professional, kind, and supportive throughout the operation and recovery; the hospital was state-of-the-art, the experience was top-notch as private hospitals should be. My accommodation post op was a lovely 5-star hotel where my Surgeon attended me multiple times before my departure flight back to the UK. 20 months later and I have lost 85lbs or 6.14 stones. The whole experience has brought about a paradigm shift experientially in my quality of life, strength, fitness and love of life. I am eternally grateful to Dr Murat Ustun and Zahid Hamid for helping me change my life."
  },
  {
    name: "Xheni",
    country: "Malta",
    date: "21.10.2025",
    procedure: "Gastric Sleeve",
    verified: "phone",
    headline: "The surgery has truly changed my life",
    text: "I would like to express my deepest gratitude to my doctor and the entire medical team for their professionalism, care, and dedication throughout my gastric sleeve journey. From the first consultation to the post-surgery follow-ups, I always felt supported, informed, and in the best hands possible. The surgery has truly changed my life. I have not only lost a significant amount of weight but also gained energy, confidence, and a much healthier relationship with food. Every day, I feel stronger and more motivated to maintain the results and continue living a balanced life. Thank you, doctor, for your expertise, kindness, and encouragement during every step of this transformation. This experience has been one of the best decisions I've ever made for my health and well-being."
  },
  {
    name: "Diana",
    country: "Georgia",
    date: "19.10.2025",
    procedure: "Bariatric Surgery",
    verified: "phone",
    headline: "You stop thinking about risks and simply feel safe",
    text: "I had my bariatric surgery with Dr. Murat Üstün, and it was an experience that showed me what true professionalism, humanity, and heartfelt care for a patient really look like. Just 15 minutes with Dr. Murat Üstün is enough to understand what kind of person and doctor he is — you immediately feel a sense of strength, calm, and complete trust. You stop thinking about risks and simply feel safe enough to close your eyes and let go. When I was taken into the operating room, he asked me what kind of music I liked. He played that music, we took a photo together, and the whole process started in such a warm, positive, and cheerful atmosphere that I instantly forgot about fear. On the third day after surgery, I had a bit of a psychological crisis — I felt weak and found it hard to walk, and I became emotional. That's when Dr. Üstün told me a sentence I will never forget: 'This is exactly what we wanted — your body is in shock because you stopped feeding it, and that's exactly what both of us aimed for.' Those words calmed me instantly and gave me so much strength that the very next day I walked 6 kilometers."
  },
  {
    name: "Kerry H.",
    country: "UK",
    date: "08.07.2023",
    procedure: "Mini Bypass",
    verified: "phone and email",
    headline: "37kg down so far",
    text: "Right from enquiring about this surgery the clinic has been immensely helpful and communication has been great. The surgery went well and aftercare was 5★ I felt at ease & comfortable throughout. Even afterwards the team have been there for any queries I have had. I'm currently 19 weeks post-op (mini bypass) and 37kg down so far 😁"
  },
  {
    name: "Danielle T.",
    country: "UK",
    date: "06.07.2023",
    procedure: "Bariatric Surgery",
    verified: "email",
    headline: "The surgeons were absolutely amazing",
    text: "I can't recommend this place enough! From the moment I stepped off the plane I was looked after and made to feel so welcome and safe. The surgeons were absolutely amazing, the nurses were attentive and so caring, I don't have a bad word to say. If you're like me and looking for a safe place outside the U.K to have surgery and change your life, this is the place to go. I will definitely be going back if I need any body contouring after I lose all this weight!"
  },
  {
    name: "Christine",
    country: "UK",
    date: "17.06.2023",
    procedure: "Gastric Bypass",
    verified: "email",
    headline: "The surgeons saved my life",
    text: "I had my mini gastric bypass in April but unfortunately had some complications. The many many pre-op assessments didn't show anything was wrong. The surgeons saved my life due to their knowledge and experience. This hospital is the most amazing place. It is spotlessly clean with well-trained staff. The nurses attended me every time I needed and they couldn't do enough to ensure I was comfortable. The surgeons came to see me every day and check my health and encourage me when I was down. My husband was with me and he was fed 3 meals a day without fail and he had a comfortable bed beside me. I cannot recommend this hospital enough."
  },
  {
    name: "Neslihan Eldred",
    country: "UK",
    date: "11.11.2021",
    procedure: "Sleeve Gastrectomy",
    verified: "phone",
    headline: "Overall it was a very pleasant experience",
    text: "I've had Sleeve gastrectomy operations in November 2021. My surgeon name was Dr Murat Üstün and his team Istanbul Bariatrics was absolutely amazing. I was talking to the patient coordinator for over a year. It took me such a long time to decide to have this operation. She was patiently answering any of my questions. I am so grateful for that. My operation day everything went so smoothly and I was out of hospital within 2.5 days. Overall it was a very pleasant experience. I would highly recommend Istanbul Bariatrics to anyone who is desperate to lose weight."
  },
  {
    name: "Mihaela",
    country: "UK",
    date: "10.11.2021",
    procedure: "Bariatric Surgery",
    verified: "phone",
    headline: "The doctor and the whole team were amazing",
    text: "One week after my surgery, I am feeling well. The doctor and the whole team were amazing. I only have good words to say. These are the first days of the rest of my life, it gotta be good, because of you guys. Thank you so much."
  },
  {
    name: "Roxana Vlonga",
    country: "Germany",
    date: "06.11.2021",
    procedure: "Gastric Sleeve",
    verified: "phone and email",
    headline: "Always at your disposal to provide you with any information",
    text: "Thank you from the bottom of my heart to this wonderful team led by Dr. Murat Ustun. I was skeptical about doing this operation Gastric Sleeve in Turkey, I didn't know what was waiting for me there. But we have found a team of professional people. Always at your disposal to provide you with any information and need. Organize from all points of view. From my arrival in Istanbul to my departure. I highly recommend Istanbul Bariatric Center."
  },
  {
    name: "Ornela",
    country: "UK",
    date: "09.10.2021",
    procedure: "Gastric Bypass",
    verified: "email",
    headline: "Constantly checked up on me, answered any questions",
    text: "I recently had mini gastric bypass surgery as I have been struggling to lose weight. A friend of mine who had the surgery previously with Dr Murat had amazing results. It is definitely good value for money! It is a super clean environment and you have a whole room to yourself which makes you feel like you're not at the hospital. Before the surgery, all the necessary tests were carried out to check if everything was okay and continue with the surgery. There was no language barrier which is important. Dr Murat's team made my journey super easy and comfortable. I cannot recommend Istanbul Bariatric Center enough! The team were amazing from arriving in Istanbul and till the very end."
  },
  {
    name: "Duta Sorinel-Catalin",
    country: "Romania",
    date: "09.10.2021",
    procedure: "Bariatric Surgery",
    verified: "phone",
    headline: "Great staff and great clinic with an amazing doctor",
    text: "Absolute superb! Great staff and great clinic with an amazing doctor!"
  },
  {
    name: "Lisa Hewitt",
    country: "UK",
    date: "04.10.2021",
    procedure: "Gastric Sleeve",
    verified: "phone and email",
    headline: "Post-op day 2 and I'm feeling really good",
    text: "I flew from the UK to Istanbul Bariatric Centre to have a Gastric sleeve. I'm post-op day 2 and I'm feeling really good, I'm walking, eating soup and drinking water ok. This is the start of my journey and a new healthy life. I would like to say a huge Thank you to everyone at Istanbul Bariatric Centre for all your help and support throughout. All the staff have been incredible."
  },
  {
    name: "Nafize",
    country: "Germany",
    date: "22.05.2021",
    procedure: "SASI Bypass",
    verified: "phone and email",
    headline: "The whole experience was amazing",
    text: "On our 21st wedding anniversary my husband and I went to Istanbul. Everything was organised by IBC — the best service and care was given to us from airport pick up to hospital service. IBC has team members who speak fluently English and German which again was outstanding for communication. I had SASI Bypass and my husband DHI Hair implant. Upon arriving in the hospital firstly Covid tests were done and then bloods taken, next day I saw 7 or more Doctors and several scans and x-Rays were done before surgery. When every Dr. gave their green light the surgery was done. My surgery took 2.5 hours. All the hospital staff were very helpful and polite all the time. The aftercare was amazing. Dr Murat came every day to check on both of us. Dr Murat is a very helpful and great surgeon — he did so small incisions and so neatly stitched."
  },
  {
    name: "Sabrina Bampini",
    country: "UK",
    date: "26.03.2021",
    procedure: "Gastric Sleeve",
    verified: "phone",
    headline: "In 8 months I am down 52kg",
    text: "So I had a sleeve done with Dr Ustun on 18/07/2020. I did a lot of research to find the best surgeon and I am so thankful I found him. From start to finish my experience has been excellent. In 8 months I am down 8st 3.5lb (52kg). I am so grateful to Dr Ustun and Istanbul Bariatric centre for giving me my life back. If anyone is still researching, look no further. You are in the best hands and will be looked after by everyone in the team x"
  },
  {
    name: "Warda Ahmed",
    country: "UK",
    date: "31.10.2020",
    procedure: "Gastric Bypass",
    verified: "phone and email",
    headline: "Lost a whopping 19kgs in two and a half months",
    text: "I had mini gastric bypass in August this year with Istanbul Bariatric Centre and it was the best decision I made in a long time. I was treated like a VIP from the first consultation to being discharged after my surgery. I was astounded with the expertise and precision of the whole team. During my first week in Istanbul, I stayed in a 5★ hotel with my mum and brother. In two and a half months I have already lost a whopping 19kgs! I am so glad that I went for the mini gastric bypass instead of the traditional gastric bypass thanks to Dr Murat for explaining in-depth that this procedure has long and sustained weight loss. If you are thinking about weight loss surgery, I wouldn't hesitate to contact Dr Murat and his team at Istanbul Bariatric Centre. Best decision I ever made!"
  },
  {
    name: "Danielle Brophy",
    country: "UK",
    date: "09.10.2020",
    procedure: "Gastric Sleeve",
    verified: "phone and email",
    headline: "5★ treatment — wish I had it done 10 years ago",
    text: "Outstanding care! All tests carried out, operation went very well, scar hardly visible and healing nicely. Would recommend this clinic to anybody thinking of getting treatment with them. Thank you, Dr Murat and team for looking after me so well — 5★ treatment. I had a gastric sleeve… wish I had it done 10 years ago!"
  },
  {
    name: "Moshgan",
    country: "UK",
    date: "01.10.2020",
    procedure: "Gastric Sleeve",
    verified: "email",
    headline: "They exceeded my expectations",
    text: "I want to share my journey to Istanbul and the operation I had. From the beginning I contacted the coordinator who was so kind, professional and very approachable. Every single information I received regarding the procedure was correct and no hidden agenda. Dr Murat who did operate on me was the Best, I mean the best surgeon ever. He is the most knowledgeable, kind and put the patient in ease. I can't thank him enough. Everything was straightforward. All nurses and all bariatric hospital staff were extremely lovely. They exceeded my expectations. The hospital itself was so clean and one of the best hospitals I ever stayed. I strongly advise you to use this route because you won't be disappointed."
  },
  {
    name: "Martina Mohan",
    country: "Turkey",
    date: "22.09.2020",
    procedure: "Gastric Band",
    verified: "phone",
    headline: "I was made to feel comfortable and relaxed at all times",
    text: "I have been delaying having weight loss surgery for many years, so I finally booked it a few weeks ago. The hospital in Istanbul is amazing and all the staff and team are amazing. The doctor Murat was brilliant, I was made to feel comfortable and relaxed at all times. The aftercare was also brilliant. I had the Lap Gastric Band Surgery, all the team took good care of me and I was kept pain free with plenty of pain relief. I stayed 2 nights at the hospital and then discharged back to the most beautiful hotel. The transition was simple and smooth, all the team stayed in contact and helped me with any information I needed to know. I highly recommend this team."
  },
  {
    name: "Hozan",
    country: "UK",
    date: "31.08.2020",
    procedure: "Gastric Sleeve",
    verified: "phone and email",
    headline: "The surgery was pain-free and recovery was super quick",
    text: "After months of deliberation, I decided to do the gastric sleeve surgery. The number one place I came across was the Istanbul Bariatric Centre. I was impressed by the centre and especially the experience and reputation of Dr Murat. After having a video call with him to discuss everything, I was sure he was the best choice. Adam, the coordinator made sure everything was in place for our arrival and was very helpful with any questions. Once we arrived in Istanbul, everything was 5★ from the moment we arrived to the moment we left. The surgery was pain-free and recovery was super quick. After being released from the hospital, we explored Istanbul on foot and had no trouble walking around after the operation. I would 100% recommend Dr Murat and his team to anyone who is thinking about having surgery in Istanbul, they are the best."
  },
  {
    name: "Ash",
    country: "UK",
    date: "26.08.2020",
    procedure: "Bariatric Surgery",
    verified: "email",
    headline: "Lost over 12.7kg — can't wait to see my future",
    text: "I couldn't thank the centre enough for everything they've done for me. For the amazing experience but for also helping me with the start of my journey. I've lost over 12.7kg so far and I can't wait to see how my future's going to look! Thank you!"
  },
  {
    name: "Samantha Short",
    country: "UK",
    date: "26.08.2020",
    procedure: "Gastric Bypass",
    verified: "phone and email",
    headline: "Thoroughly tested, amazingly neat incisions",
    text: "I spent so much time researching about gastric bypass and sleeve. After speaking to Dr Murat I decided to go ahead with the gastric bypass. Zahid couldn't have been more helpful. He reassured my worrying mum that also had so many questions. I stayed in hospital 1 day before surgery where thorough testing happened, and 3 days after surgery. I was completely shocked at how tiny my incisions and how neat they were, I only had 4 tiny little ones. I loved the fact the surgeon Dr Murat went to see my mother after and let her know everything went well. During my hospital stay, I saw the surgeon every day who came in to see how I was getting on. He made us feel so welcomed and at ease."
  },
  {
    name: "Lucy K",
    country: "UK",
    date: "19.08.2020",
    procedure: "Gastric Sleeve",
    verified: "phone",
    headline: "The hotel was superb with very good service",
    text: "Had a gastric sleeve on the 14th, everything went according to plan. The hotel was superb with very good service. The hospital was just as good. Overly impressed… let the weight loss start, I'm so excited. Thank you to the whole team. The dietician made sure I understood the days ahead and Dr Ustun was extra lovely. Great Team."
  },
  {
    name: "Yomna Elbanna",
    country: "Turkey",
    date: "05.08.2020",
    procedure: "Gastric Bypass",
    verified: "phone and email",
    headline: "The hospital was top notch — I feel 100% amazing",
    text: "Dr. Murat and his team are absolutely brilliant. They are truly what you call a reliable team that takes care of all the details. I have just finished my Mini Gastric Bypass (MGB) operation with them yesterday, and I now feel 100% amazing. I have considered this operation in 6 different places: London, Dubai, Cairo, Czech, Istanbul and Lithuania; and after much research I chose to do it in Istanbul with Dr Murat because of how confident I felt towards their professionalism. The hospital was top notch and the nurses and all staff members were absolutely brilliant."
  },
  {
    name: "Sabrina Dufaan",
    country: "Canada",
    date: "15.10.2019",
    procedure: "Gastric Sleeve",
    verified: "phone and email",
    headline: "I am so much happier now and more energetic than ever",
    text: "I'm Sabrina from Canada and I'm on my 7th day after gastric sleeve surgery here in Istanbul's medical bariatric centre. I'm so thankful to all the staff for taking care of me, medically, mentally, and physically. I feel great, I have no pain. I've already lost weight, something I couldn't do before on my own. I was not able to move around or walk much or play with my children, but now thank God I can. They really saved my life, being overweight didn't only affect me it also affected my whole family. I am so much happier now and more energetic than I ever was before. If anyone out there is looking into this type of weight loss surgery, Istanbul Bariatric Centre is where to go and put your trust in. Thank you so much — best team ever!"
  },
  {
    name: "Victoria Diamond",
    country: "UK",
    date: "14.10.2019",
    procedure: "Bariatric Surgery",
    verified: "phone",
    headline: "5-star treatment — Dr Ustun had me singing Bob Marley!",
    text: "Couldn't thank the staff enough, they were just brilliant! And for Dr Murat Ustun — well he made me feel completely relaxed and safe when going down to theatre, even had a little sing to Bob Marley 'No Woman No Cry'! I couldn't be happier with the 5-star treatment I have received! Day 3 and I have been discharged and now in a 5★ hotel! Would definitely recommend 100% Dr Ustun and his team!"
  },
  {
    name: "Chantel",
    country: "UK",
    date: "14.07.2019",
    procedure: "Gastric Sleeve",
    verified: "phone and email",
    headline: "Everything has been 5★ from the hotel to the hospital",
    text: "I went to Prague last year to have surgery but it was unsuccessful. A friend recommended Dr Murat and his team. I had a consultation in London where all my questions and concerns were answered. Dr Murat assured me my surgery could and would be done. I was very nervous about trying again but knew this is what I wanted. With Dr Murat's confident words I booked for a Gastric Sleeve in Turkey. I cannot thank Dr Murat and his team for the excellent service I have received from beginning to end — everything has been 5★ from the hotel to the hospital. Thank you, Dr Murat, I am excited to start the new journey you have given me so much happiness."
  },
  {
    name: "Assia",
    country: "UK",
    date: "10.07.2019",
    procedure: "Gastric Sleeve",
    verified: "phone and email",
    headline: "I felt very safe and looked after",
    text: "I had gastric sleeve surgery 1 year ago — it really has changed my life! Dr Murat and the whole team are absolutely amazing! So caring and professional, they have been so supportive, and I feel I have had the best possible care from them on my weight loss journey. The hospital was clean and well maintained. All of the nurses were very professional and kind. The tests that were performed prior to surgery were very thorough, I felt very safe and looked after. I would highly recommend Dr Murat and team, thank you."
  },
  {
    name: "Flemming Larsen",
    country: "Denmark",
    date: "17.06.2019",
    procedure: "Gastric Bypass",
    verified: "phone",
    headline: "I cannot imagine a better doctor or team",
    text: "Dr Murat Üstün and his fantastic team are simply amazing! I arrived in Istanbul with my daughter on the 13th of June, and from the first minute our anxious nerves were calmed because we felt the team behind us. Dr Murat was a top professional. They took us to the hospital and we were given a beautiful room, they explained the entire plan for our operation, step by step and very calmly. We were both very nervous about the procedure, but the team took our hands and followed us around to all the pre-examinations, not one single minute were we left alone with our anxious minds. The hospital is among the very best in Turkey. We are from Denmark and the price we would pay for the same operation there would be a minimum 4 times as much. Thank you team, and Dr Murat Üstün."
  },
  {
    name: "Oana Buica",
    country: "UK",
    date: "10.06.2019",
    procedure: "Gastric Sleeve",
    verified: "phone and email",
    headline: "Best doctor ever — any questions answered straight away",
    text: "What a team! Best doctor ever! I had the sleeve surgery in April 2019, it was the best decision in my life to work with Doctor Murat and his team. Everyone was amazing, the hospital and staff were 5 stars from every point of view. If I would have to decide to do it again it would definitely be with Doctor Murat. They took really good care of me. The nurses will come and check on you constantly and the doctors as well. The follow-up and diet are closely checked. Any questions I had were answered straight away. If you want your life to change smoothly then choose Doctor Murat — he is just brilliant."
  },
  {
    name: "Grace Olakanmi",
    country: "UK",
    date: "27.05.2019",
    procedure: "Gastric Sleeve",
    verified: "phone and email",
    headline: "The best decision I have ever made",
    text: "I had the gastric sleeve surgery in Istanbul and it was the best decision I have ever made. I have been struggling with my weight ever since I can remember and after doing years of research, I finally decided to do the surgery. The clinic was extremely helpful every step of the way from my day of enquiry to today. My doctor and the hospital staff were excellent. Also, my dietician constantly checks in with me to make sure I'm staying on track. I highly recommend this clinic for anyone considering bariatric surgery."
  },
  {
    name: "Lisa McKay",
    country: "US",
    date: "24.05.2019",
    procedure: "Gastric Sleeve",
    verified: "phone and email",
    headline: "The care and attention is second to none",
    text: "I travelled to Istanbul Bariatric Centre. Having done lots of research prior to making my final decision, I chose Dr Murat Ustun to perform my gastric sleeve after reading lots of reviews but also looking at his medical history as well as his qualifications. I was nervous about flying out to Istanbul on my own. But as soon as I arrived I was made to feel at ease and knew then I had made the right choice for me. I feel the care and attention is second to none."
  },
  {
    name: "Annie Stevenson",
    country: "UK",
    date: "01.04.2020",
    procedure: "Revision Surgery",
    verified: "phone",
    headline: "100% recommendation — nothing was too much for them",
    text: "Wonderful from the start, every question answered. I went into surgery confident and happy and had great aftercare. I had revision surgery, it was more expensive but still good value. My hospital stay was comfortable and so clean. The hotel stay was lovely and relaxing, nothing was too much for them. I chose Dr. Murat Ustun to perform my surgery after searching for weeks. I contacted many surgeons and questioned them all. Dr Ustun was the only Doctor that answered everything and had full knowledge of my previous kidney disease, dialysis, transplant and most importantly my suppressed immune system. 100% recommendation from me. Thank you."
  },
  {
    name: "Amanda Chambers",
    country: "UK",
    date: "27.11.2019",
    procedure: "Revision Surgery",
    verified: "phone and email",
    headline: "The whole procedure was smoothly run",
    text: "I came out to Istanbul for a RnY revision due to issues with loss of satiation. After talking to Dr Murat, he knew instantly what my problem was. Within four weeks from initial communication, I was out in Istanbul having my preoperative assessments. The whole procedure was smoothly run, Dr Murat was wonderful, explaining everything clearly and his English is great. His team are friendly and professional and have been there every step of the way. My actual procedure turned out to be more complicated than expected due to a giant hernia they found on the day. Dr Murat dealt with this with skill and amended the procedure as required, no extra charges. I highly recommend."
  },
  {
    name: "Rachel Tindale",
    country: "UK",
    date: "24.10.2019",
    procedure: "Gastric Bypass",
    verified: "phone and email",
    headline: "Dr Ustun has saved my life",
    text: "I had a mini gastric bypass done by Dr Murat Ustun in 12/10/2019, and I was well enough to be discharged on 14/10/2019! The surgery was a success. Dr Ustun has saved my life. I was sure that without it, I wouldn't reach the age of 30. Already my life has improved dramatically and I'll never be able to thank him and his team enough. The hospital is immaculate, the staff are attentive and rapidly respond to any issues that may arise. The package price was value for money, a quarter of the price I would have had to pay here in the UK, and the service I received was infinitely better."
  },
  {
    name: "Nicola Crisci",
    country: "UK",
    date: "19.07.2019",
    procedure: "Gastric Bypass",
    verified: "phone and email",
    headline: "The doctor is amazing — so welcoming",
    text: "I had my mini gastric bypass 13th July and I loved the hotel and hospital. The doctor is amazing — he was so welcoming to me and my husband. I will be having an arm lift surgery which I will be going back next year for. The hospital is so clean. Definitely take someone with you though as I had my hubby and it just makes it so much easier. Would recommend — can't wait to see what the next few months hold. Thanks Dr Murat!"
  },
];

function StarRating() {
  return (
    <div className="flex gap-0.5">
      {[1,2,3,4,5].map((i) => (
        <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
      ))}
    </div>
  );
}

export default function Results() {
  const { t } = useTranslation('pages');
  const [showAllReviews, setShowAllReviews] = useState(false);
  
  const visibleReviews = showAllReviews ? whatClinicReviews : whatClinicReviews.slice(0, 3);
  
  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="Results & Reviews: Patient Success Stories | Istanbul Bariatric Center"
        description="See real before & after photos, testimonials, and verified 5-star WhatClinic reviews from 8,000+ successful bariatric surgery patients."
        keywords="gastric sleeve before after, weight loss surgery results, bariatric surgery testimonials, patient success stories, WhatClinic reviews"
        url="/results"
      />
      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:bg-primary focus:text-white focus:px-4 focus:py-2 focus:rounded">
        Skip to main content
      </a>
      <Navbar />
      
      <main id="main-content" role="main">
      <section className="relative text-white pt-40 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <img src="/results-hero.webp" alt="Happy patients sharing their bariatric surgery success stories" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-slate-900/65" />
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">{t('results.title')}</h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            {t('results.subtitle')}
          </p>
          <SummarizeWithAI variant="dark" />
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">{t('results.beforeAfter')}</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              {t('results.beforeAfterDesc')}
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-20">
            {beforeAfterImages.map((img, i) => (
              <div key={i} className="relative group overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-all duration-300">
                <img 
                  src={img} 
                  alt={`Weight loss surgery before and after transformation - patient ${i + 1}`}
                  className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                  width="300"
                  height="400"
                  data-testid={`before-after-image-${i + 1}`}
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-3">
                  <span className="text-white text-sm font-medium">{t('results.beforeAfterLabel')}</span>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">{t('results.testimonials')}</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              {t('results.testimonialsDesc')}
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {patientResults.map((result, i) => (
              <Card key={i} className="overflow-hidden hover:shadow-xl transition-all duration-300 border-slate-200 group">
                <div className="flex flex-col md:flex-row h-full">
                  <div className="md:w-2/5 bg-slate-100 min-h-[250px] md:min-h-full flex items-center justify-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-primary/10 group-hover:bg-primary/20 transition-colors" />
                    <div className="text-center z-10 p-6">
                      <div className="text-4xl font-bold text-primary mb-2">{result.lost}</div>
                      <div className="text-slate-500 font-medium uppercase text-xs tracking-wider">{t('results.lostIn')} {result.time}</div>
                    </div>
                  </div>
                  
                  <CardContent className="md:w-3/5 p-8 flex flex-col justify-center">
                    <div className="mb-6">
                      <h3 className="text-2xl font-bold text-slate-900 mb-1">{result.name}</h3>
                      <p className="text-slate-500 text-sm flex items-center gap-2">
                        {t('results.from')} {result.country}
                      </p>
                    </div>
                    
                    <p className="text-slate-600 italic mb-6 leading-relaxed">
                      &ldquo;{(result as any).drLink ? (
                        <>{result.desc.split(/(Dr Murat Üstün|Dr Ustun|Dr Murat)/g).map((part: string, pi: number) =>
                          /Dr Murat Üstün|Dr Ustun|Dr Murat/.test(part) 
                            ? <a key={pi} href="https://drmuratustun.com" target="_blank" rel="noopener noreferrer" className="text-primary not-italic hover:underline">{part}</a>
                            : part
                        )}</>
                      ) : result.desc}&rdquo;
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mt-auto">
                      {result.tags.map((tag, j) => (
                        <Badge key={j} variant="outline" className="text-slate-500 border-slate-200">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-slate-50 to-white" data-testid="whatclinic-reviews-section">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-amber-50 border border-amber-200 rounded-full px-5 py-2 mb-6">
              <Award className="w-5 h-5 text-amber-500" />
              <span className="text-sm font-semibold text-amber-700">{t('results.whatClinicBadge')}</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">{t('results.verifiedReviews')}</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto mb-8">
              {t('results.verifiedReviewsDesc')}
            </p>
            
            <div className="flex flex-wrap items-center justify-center gap-6 mb-4">
              <div className="flex flex-col items-center bg-white rounded-2xl shadow-md border border-slate-100 px-8 py-5">
                <div className="flex items-baseline gap-1 mb-1">
                  <span className="text-4xl font-extrabold text-slate-900">4.9</span>
                  <span className="text-lg text-slate-400 font-medium">/5</span>
                </div>
                <div className="flex gap-0.5 mb-2">
                  {[1,2,3,4,5].map(i => <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />)}
                </div>
                <span className="text-xs text-slate-500 font-medium">55 verified reviews</span>
              </div>
              
              <div className="flex flex-col items-center bg-white rounded-2xl shadow-md border border-slate-100 px-8 py-5">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-4xl font-extrabold text-emerald-600">10</span>
                  <span className="text-lg text-slate-400 font-medium">/10</span>
                </div>
                <span className="text-sm font-bold text-emerald-600 mb-1">{t('results.whatClinicScore')}</span>
                <span className="text-xs text-slate-500 font-medium">138 interactions</span>
              </div>
              
              <div className="flex flex-col items-center bg-white rounded-2xl shadow-md border border-slate-100 px-8 py-5">
                <div className="flex items-center gap-2 mb-2">
                  <Award className="w-8 h-8 text-primary" />
                </div>
                <span className="text-sm font-bold text-slate-900 mb-1">Patient Service Award</span>
                <span className="text-xs text-slate-500 font-medium">6 consecutive years</span>
              </div>
            </div>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="space-y-5">
              {visibleReviews.map((review, i) => (
                <div
                  key={i}
                  className="bg-white rounded-2xl border border-slate-200 p-6 md:p-8 shadow-sm hover:shadow-lg transition-all duration-300"
                  data-testid={`whatclinic-review-${i}`}
                  style={{ 
                    animation: showAllReviews && i >= 3 ? `fadeSlideUp 0.4s ease-out ${(i - 3) * 0.06}s both` : undefined 
                  }}
                >
                  <div className="flex flex-col sm:flex-row sm:items-start gap-4 mb-4">
                    <div className="flex items-center gap-3 flex-1 min-w-0">
                      <div className="w-11 h-11 rounded-full bg-gradient-to-br from-primary to-blue-400 flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
                        {review.name[0]}
                      </div>
                      <div className="min-w-0">
                        <div className="flex items-center gap-2 flex-wrap">
                          <h3 className="font-bold text-slate-900">{review.name}</h3>
                          <span className="text-lg" title={review.country}>{countryFlags[review.country] || "🌍"}</span>
                          <span className="text-sm text-slate-500">{review.country}</span>
                        </div>
                        <div className="flex items-center gap-2 flex-wrap">
                          <StarRating />
                          <span className="text-xs text-slate-400">{review.date}</span>
                          <span className="inline-flex items-center gap-1 text-xs text-emerald-600 font-medium">
                            <CheckCircle className="w-3 h-3" /> Verified by {review.verified}
                          </span>
                        </div>
                      </div>
                    </div>
                    <Badge className="bg-primary/10 text-primary border-0 text-xs font-medium whitespace-nowrap self-start">
                      {review.procedure}
                    </Badge>
                  </div>
                  
                  <div className="mb-3">
                    <span className="inline-block text-slate-800 text-sm font-semibold">
                      &ldquo;{review.headline}&rdquo;
                    </span>
                  </div>
                  
                  <p className="text-slate-600 leading-relaxed text-[15px]">
                    {review.text}
                  </p>
                </div>
              ))}
            </div>
            
            {!showAllReviews && (
              <div className="relative mt-0">
                <div className="absolute -top-20 left-0 right-0 h-20 bg-gradient-to-t from-slate-50 to-transparent pointer-events-none z-10" />
              </div>
            )}
            
            <div className="mt-8 text-center">
              <button
                onClick={() => setShowAllReviews(!showAllReviews)}
                className="inline-flex items-center gap-2 bg-white border-2 border-primary text-primary font-semibold px-8 py-3 rounded-full hover:bg-primary hover:text-white transition-all duration-300 shadow-sm hover:shadow-md"
                data-testid="button-toggle-reviews"
              >
                {showAllReviews ? (
                  <>
                    {t('results.viewLess')}
                    <ChevronUp className="w-5 h-5" />
                  </>
                ) : (
                  <>
                    {t('results.viewMore')} ({whatClinicReviews.length - 3} more)
                    <ChevronDown className="w-5 h-5" />
                  </>
                )}
              </button>
            </div>
            
            <div className="mt-8 text-center">
              <a 
                href="https://www.whatclinic.com/bariatric-surgery/turkey/istanbul-province/istanbul/nisantasi/istanbul-bariatric-center" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-primary transition-colors"
                data-testid="link-whatclinic"
              >
                Read all reviews on WhatClinic
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center bg-blue-50 rounded-2xl p-12">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">{t('results.readyStart')}</h3>
            <p className="text-slate-600 mb-8 max-w-xl mx-auto">
              {t('results.joinThousands')}
            </p>
            <Button 
              className="bg-primary hover:bg-primary/90 h-12 px-8 text-lg" 
              onClick={() => window.open('https://wa.me/905324131143', '_blank')}
              aria-label="Start your weight loss transformation - contact us on WhatsApp"
            >
              {t('results.startTransformation')}
            </Button>
          </div>
        </div>
      </section>
      </main>

      <style>{`
        @keyframes fadeSlideUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>

      <Footer />
    </div>
  );
}

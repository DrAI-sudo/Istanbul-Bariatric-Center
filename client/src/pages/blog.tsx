import { useState } from "react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, ChevronLeft, ChevronRight } from "lucide-react";

const posts = [
  {
    title: "Gastric Fundus Mucosal Ablation (GFMA) Latest News",
    date: "May 11, 2025",
    category: "New Technology",
    excerpt: "GFMA: A New Era in Non-Surgical Weight Loss. Recent studies suggest an endoscopic procedure could curb hunger and achieve surgical-level weight loss without any incisions.",
    image: "https://istanbulbariatriccenter.com/wp-content/uploads/2025/05/IMG_8589-1-1024x995.jpeg"
  },
  {
    title: "Scientific Blind Alleys: Dietary Fat, Sugar, Freud, and Adler",
    date: "April 26, 2025",
    category: "Science",
    excerpt: "How Two Historic Health Myths Shaped Today's Obesity Crisis — and How We Can Fix It. The mid-20th-century diet-heart hypothesis and early psychoanalytic theory changed our understanding.",
    image: "https://caf0fec0.delivery.rocketcdn.me/wp-content/uploads/2021/12/insuline.jpg"
  },
  {
    title: "Minimizer Ring: What is it and what is it used for?",
    date: "April 19, 2025",
    category: "New Technology",
    excerpt: "The MiniMIZER® Ring in Bariatric Surgery: Enhancing Outcomes in Primary and Revisional Procedures. Learn how this device helps prevent weight regain.",
    image: "https://istanbulbariatriccenter.com/wp-content/uploads/2025/04/IMG_1129-1024x681.jpeg"
  },
  {
    title: "Five High-Cholesterol Foods You Should Eat – and Which Ones to Avoid",
    date: "April 17, 2025",
    category: "Nutrition",
    excerpt: "New research reveals that not all cholesterol-rich foods are bad for you. A cardiologist helps explain what to eat and what to skip.",
    image: "https://caf0fec0.delivery.rocketcdn.me/wp-content/uploads/2020/10/Gastric-Balloon-300x278.png"
  },
  {
    title: "Weight Loss Treatments: A Holistic Comparison",
    date: "December 31, 2024",
    category: "Comparison",
    excerpt: "Weight loss treatments broadening every day with new medications, revolutionary endoscopic methods and different variations of surgical options.",
    image: "https://istanbulbariatriccenter.com/wp-content/uploads/2024/12/IMG_0728.png"
  },
  {
    title: "Gastric Fundus Ablation Explained",
    date: "December 17, 2024",
    category: "New Technology",
    excerpt: "Revolutionizing Endoscopic Weight Loss Method. A groundbreaking, minimally invasive procedure offering new hope for sustainable weight loss.",
    image: "https://istanbulbariatriccenter.com/wp-content/uploads/2024/12/IMG_6417.jpeg"
  },
  {
    title: "Could Weight Loss Injections Replace Obesity Surgery?",
    date: "November 18, 2024",
    category: "Medical Weight Loss",
    excerpt: "Weight loss injections, particularly GLP-1 analogs such as semaglutide and tirzepatide, are revolutionizing the treatment of obesity.",
    image: "https://istanbulbariatriccenter.com/wp-content/uploads/2024/11/IMG_0508.png"
  },
  {
    title: "Body Roundness Index (BRI)",
    date: "November 11, 2024",
    category: "Research",
    excerpt: "Body Roundness Index, is it the New BMI? What it Says About Your Health. BRI incorporates waist circumference providing more detailed body composition analysis.",
    image: "https://caf0fec0.delivery.rocketcdn.me/wp-content/uploads/2020/10/gastric-sleeve.png"
  },
  {
    title: "Ultra-processed Foods and Their Impact on Your Health",
    date: "November 9, 2024",
    category: "Nutrition",
    excerpt: "Understanding Ultra-Processed Foods: A Deep Dive into Our Daily Diet. Have you ever stopped to consider what ultra-processed foods really are?",
    image: "https://istanbulbariatriccenter.com/wp-content/uploads/2024/12/IMG_0729.png"
  },
  {
    title: "Comparing Bariatric Surgery and Endoscopic Sleeve Gastroplasty",
    date: "November 7, 2024",
    category: "Comparison",
    excerpt: "Making an Informed Choice for Weight Loss. Understanding the differences between bariatric surgery and ESG is crucial for individuals considering weight loss procedures.",
    image: "https://istanbulbariatriccenter.com/wp-content/uploads/2024/12/IMG_8041-768x1024.jpeg"
  },
  {
    title: "5 Things You Didn't Know About Bariatric Surgery",
    date: "November 7, 2024",
    category: "Education",
    excerpt: "Five Things You May Not Know About Bariatric Surgery. Today we are going to discuss five things that you may not know about bariatric surgery.",
    image: "https://caf0fec0.delivery.rocketcdn.me/wp-content/uploads/2023/03/IMG_4450-1024x941.jpeg"
  },
  {
    title: "Bariatric Surgery Guidelines Updated",
    date: "November 7, 2024",
    category: "Guidelines",
    excerpt: "Updated Guidelines on Bariatric Surgery: A Comprehensive Overview. The ASMBS and IFSO updated guidelines marking a shift from the previous NIH criteria.",
    image: "https://istanbulbariatriccenter.com/wp-content/uploads/2024/12/IMG_0731.png"
  },
  {
    title: "Barrett's Esophagus and Increased Risk After Sleeve Gastrectomy",
    date: "July 30, 2024",
    category: "Research",
    excerpt: "Barrett's Esophagus is a serious consequence of long term acid reflux. If you've undergone a sleeve gastrectomy, you might be at a higher risk.",
    image: "https://caf0fec0.delivery.rocketcdn.me/wp-content/uploads/2020/10/gastric-sleeve.png"
  },
  {
    title: "Comprehensive Guide to Preoperative Medication Management",
    date: "July 6, 2024",
    category: "Pre-Surgery",
    excerpt: "Proper medication management before surgery is crucial for ensuring your safety and optimizing your surgical outcome.",
    image: "https://istanbulbariatriccenter.com/wp-content/uploads/2024/12/IMG_0728.png"
  },
  {
    title: "Leaks in Bariatric Surgery",
    date: "May 30, 2024",
    category: "Education",
    excerpt: "Understanding the Risks of Gastrointestinal Leaks in Bariatric Surgery: A Detailed Overview of one of the most serious complications.",
    image: "https://caf0fec0.delivery.rocketcdn.me/wp-content/uploads/2020/10/gastric-sleeve.png"
  },
  {
    title: "Obesity and Cancer Risk",
    date: "May 30, 2024",
    category: "Research",
    excerpt: "Each year, over 684,000 Americans are diagnosed with cancers linked to obesity, according to the CDC. This troubling trend shows an increase especially among younger people.",
    image: "https://caf0fec0.delivery.rocketcdn.me/wp-content/uploads/2021/12/insuline.jpg"
  },
  {
    title: "15 Most Nutrient-Dense Foods",
    date: "May 30, 2024",
    category: "Nutrition",
    excerpt: "Simplify Your Diet, Improve Nutrition, and Reduce Calories. Managing weight is a challenge many of us face.",
    image: "https://istanbulbariatriccenter.com/wp-content/uploads/2024/12/IMG_0729.png"
  },
  {
    title: "Bariatric Surgery Nutrition",
    date: "May 30, 2024",
    category: "Nutrition",
    excerpt: "Comprehensive Bariatric Surgery Nutrition and Recovery Guide. Success largely depends on strict adherence to pre and post-operative nutrition guidelines.",
    image: "https://istanbulbariatriccenter.com/wp-content/uploads/2024/12/IMG_0729.png"
  },
  {
    title: "Leptin Hormone in Obesity Treatment",
    date: "May 28, 2024",
    category: "Research",
    excerpt: "How the Human Body Stores Energy, Hormones' Effect on Metabolism, and the Role of Leptin in Obesity Treatment.",
    image: "https://caf0fec0.delivery.rocketcdn.me/wp-content/uploads/2021/12/insuline.jpg"
  },
  {
    title: "Bariatric Surgery Pros and Cons",
    date: "May 20, 2024",
    category: "Education",
    excerpt: "Bariatric Surgery: Weighing the Pros and Cons – Is It Right for You? Like any medical procedure, it comes with its own set of considerations.",
    image: "https://caf0fec0.delivery.rocketcdn.me/wp-content/uploads/2020/10/gastric-sleeve.png"
  },
  {
    title: "Endoscopic Sleeve Gastroplasty vs Gastric Sleeve",
    date: "May 20, 2024",
    category: "Comparison",
    excerpt: "Comparing VSG and ESG: Traditional Gastric Sleeve vs. Endoscopic Sleeve. Morbid obesity remains a significant global health challenge.",
    image: "https://istanbulbariatriccenter.com/wp-content/uploads/2024/12/IMG_8041-768x1024.jpeg"
  },
  {
    title: "Endoscopic Sleeve Gastroplasty Long Term Results",
    date: "May 1, 2024",
    category: "Research",
    excerpt: "Endoscopic Sleeve Gastroplasty: A Long-Term Solution for Weight Loss? Obesity has become a global epidemic, impacting millions.",
    image: "https://istanbulbariatriccenter.com/wp-content/uploads/2024/12/IMG_8041-768x1024.jpeg"
  },
  {
    title: "Endo Band: A Novel Endoscopic Approach for Weight Loss",
    date: "February 24, 2024",
    category: "New Technology",
    excerpt: "Obesity is a global health problem that affects millions of people. The Endo Band offers a less invasive alternative to traditional surgery.",
    image: "https://caf0fec0.delivery.rocketcdn.me/wp-content/uploads/2022/02/BariClip-1.jpeg"
  },
  {
    title: "Vitamin and Mineral Deficiencies After Gastric Bypass",
    date: "January 16, 2024",
    category: "Nutrition",
    excerpt: "How to Avoid Vitamin and Mineral Deficiencies After Gastric Bypass Surgery. This procedure comes with some risks and challenges.",
    image: "https://istanbulbariatriccenter.com/wp-content/uploads/2024/12/IMG_0729.png"
  },
  {
    title: "Bariatric Surgery as Safe as Other Common Operations",
    date: "January 5, 2024",
    category: "Research",
    excerpt: "A comprehensive analysis that compares the safety of metabolic and bariatric surgery with other frequently performed surgical procedures.",
    image: "https://caf0fec0.delivery.rocketcdn.me/wp-content/uploads/2020/10/gastric-sleeve.png"
  },
  {
    title: "Grazing After Bariatric Surgery",
    date: "January 5, 2024",
    category: "Post-Surgery",
    excerpt: "One of the most common challenges that bariatric patients face is grazing, which is the habit of eating small amounts of food frequently.",
    image: "https://istanbulbariatriccenter.com/wp-content/uploads/2024/12/IMG_0729.png"
  },
  {
    title: "Bariatric-Friendly Christmas Dinner Ideas",
    date: "December 25, 2023",
    category: "Nutrition",
    excerpt: "The holiday season is a time for joy, family, and delicious food. With creativity and mindful choices, you can enjoy a bariatric-friendly Christmas dinner.",
    image: "https://istanbulbariatriccenter.com/wp-content/uploads/2024/12/IMG_0729.png"
  },
  {
    title: "Endoscopic Sleeve Gastroplasty in Class III Obesity",
    date: "December 8, 2023",
    category: "Research",
    excerpt: "New Study Revealed ESG's Safety and Efficacy in Class III Obesity. A groundbreaking study sheds light on the effectiveness of ESG for BMI ≥40.",
    image: "https://istanbulbariatriccenter.com/wp-content/uploads/2024/12/IMG_8041-768x1024.jpeg"
  },
  {
    title: "POSE Endoscopic Sleeve Gastroplasty in the Treatment of Obesity",
    date: "November 16, 2023",
    category: "Treatments",
    excerpt: "Are you struggling with obesity and looking for a less invasive weight loss solution? The POSE procedure might be the answer.",
    image: "https://caf0fec0.delivery.rocketcdn.me/wp-content/uploads/2023/03/IMG_4450-1024x941.jpeg"
  },
  {
    title: "Endoscopic Sleeve Gastroplasty: A Game-Changer in Obesity Treatment",
    date: "October 2, 2023",
    category: "New Technology",
    excerpt: "NICE Approves Endoscopic Sleeve Gastroplasty for Primary Obesity Treatment. A new procedure has emerged as a promising alternative.",
    image: "https://istanbulbariatriccenter.com/wp-content/uploads/2024/12/IMG_8041-768x1024.jpeg"
  },
  {
    title: "Fatty Liver Increases In Adolescents",
    date: "October 2, 2023",
    category: "Research",
    excerpt: "Chronic choline deficiency in diets can lead to fatty liver, irrespective of the overall diet's healthiness. NAFLD affects at least 25-30% of the population.",
    image: "https://caf0fec0.delivery.rocketcdn.me/wp-content/uploads/2021/12/insuline.jpg"
  },
  {
    title: "Bariatric Surgery 18 Frequently Asked Questions",
    date: "September 17, 2023",
    category: "FAQ",
    excerpt: "I have major obesity issues, however I hesitate to have surgical procedure, what is the risk? Every medical procedure involves inherent risks.",
    image: "https://caf0fec0.delivery.rocketcdn.me/wp-content/uploads/2020/10/gastric-sleeve.png"
  },
  {
    title: "Melatonin: Sleep, Glucose Metabolism, and Late-Night Eating Habits",
    date: "July 29, 2023",
    category: "Research",
    excerpt: "Melatonin has garnered significant attention due to its potential impact on glucose metabolism and late-night eating habits.",
    image: "https://caf0fec0.delivery.rocketcdn.me/wp-content/uploads/2021/12/insuline.jpg"
  },
  {
    title: "Argon Plasma Coagulation: An Effective Solution for Weight Regain",
    date: "July 26, 2023",
    category: "Treatments",
    excerpt: "Around 20% of obese patients who undergo RYGB fail to sustain weight loss. APC offers an effective solution for weight regain after gastric bypass.",
    image: "https://caf0fec0.delivery.rocketcdn.me/wp-content/uploads/2020/10/gastric-sleeve.png"
  },
  {
    title: "Revisional Bariatric Surgery in Turkey!",
    date: "May 19, 2023",
    category: "Treatments",
    excerpt: "Revisional bariatric surgery is performed on individuals who have previously undergone bariatric surgery but require further surgical intervention.",
    image: "https://caf0fec0.delivery.rocketcdn.me/wp-content/uploads/2020/10/gastric-sleeve.png"
  },
  {
    title: "Marmite, A Rich Resource of Vitamin B",
    date: "May 16, 2023",
    category: "Nutrition",
    excerpt: "Unveiling the Marvels of Marmite: Ingredients, Usage, Recipes, Health Benefits, and Precautions for bariatric patients.",
    image: "https://istanbulbariatriccenter.com/wp-content/uploads/2024/12/IMG_0729.png"
  },
  {
    title: "Ozempic: No 1 Best Medical Treatment of Obesity",
    date: "August 24, 2022",
    category: "Medical Weight Loss",
    excerpt: "Ozempic is a weekly injection of Semaglutide and advisable for the first line treatment option for weight loss.",
    image: "https://istanbulbariatriccenter.com/wp-content/uploads/2024/11/IMG_0508.png"
  },
  {
    title: "BariClip: The Brand-new Bariatric Clip for Weight-loss",
    date: "February 3, 2022",
    category: "New Technology",
    excerpt: "Obesity is an expanding health issue. One new speculative treatment resembling a clip for weightloss, known as BariClip.",
    image: "https://caf0fec0.delivery.rocketcdn.me/wp-content/uploads/2022/02/BariClip-1.jpeg"
  },
  {
    title: "Elipse Swallowable Intragastric Balloon Reveals Substantial Weight-loss",
    date: "January 15, 2022",
    category: "New Technology",
    excerpt: "The Allurion intragastric balloon (formerly the Elipse) is a unique balloon that is swallowed, requiring no surgery or endoscopic positioning.",
    image: "https://caf0fec0.delivery.rocketcdn.me/wp-content/uploads/2020/10/Gastric-Balloon-300x278.png"
  },
  {
    title: "Transit Bipartition: An Attractive Revision Alternative When Sleeve Gastrectomy Fails",
    date: "November 27, 2021",
    category: "Treatments",
    excerpt: "For patients that couldn't lose adequate weight or regain weight after LSG, transit bipartition is an effective next step.",
    image: "https://caf0fec0.delivery.rocketcdn.me/wp-content/uploads/2021/12/insuline.jpg"
  },
  {
    title: "Bariatric Preoperative Diet",
    date: "January 26, 2021",
    category: "Pre-Surgery",
    excerpt: "Getting more fit before a surgical procedure diminishes the amount of fat tissue in and around your liver and intraabdominal area.",
    image: "https://istanbulbariatriccenter.com/wp-content/uploads/2024/12/IMG_0729.png"
  },
  {
    title: "Obese adults in 'at-risk' priority group for COVID vaccine",
    date: "January 12, 2021",
    category: "News",
    excerpt: "According to the latest official government guidance, the priority for giving the vaccine will be to obese adults before healthy individuals aged over 60.",
    image: "https://caf0fec0.delivery.rocketcdn.me/wp-content/uploads/2021/12/insuline.jpg"
  },
  {
    title: "Why Istanbul is an Important Location for Obesity Surgery?",
    date: "December 11, 2020",
    category: "Medical Tourism",
    excerpt: "Istanbul has what it takes to be famous in this field. Well equipped hospitals, expert doctors, and professional medical teams.",
    image: "https://caf0fec0.delivery.rocketcdn.me/wp-content/uploads/2023/03/IMG_4450-1024x941.jpeg"
  },
  {
    title: "Should You Consider Having A Bariatric Surgery During the COVID-19 Pandemic?",
    date: "December 7, 2020",
    category: "News",
    excerpt: "A Cleveland Clinic study shows that among obese patients who tested positive for COVID-19, previous bariatric surgery was significantly associated with lower risk.",
    image: "https://caf0fec0.delivery.rocketcdn.me/wp-content/uploads/2021/12/insuline.jpg"
  },
  {
    title: "Some Nutrition Tips During Self-Quarantine (COVID-19)",
    date: "November 25, 2020",
    category: "Nutrition",
    excerpt: "Since you need to spend this period at home, these suggestions will strengthen your immune system and are easily prepared.",
    image: "https://istanbulbariatriccenter.com/wp-content/uploads/2024/12/IMG_0729.png"
  }
];

const POSTS_PER_PAGE = 6;

export default function Blog() {
  const [currentPage, setCurrentPage] = useState(1);
  
  const totalPages = Math.ceil(posts.length / POSTS_PER_PAGE);
  const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
  const endIndex = startIndex + POSTS_PER_PAGE;
  const currentPosts = posts.slice(startIndex, endIndex);

  const goToPage = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const goToPrevious = () => {
    if (currentPage > 1) {
      goToPage(currentPage - 1);
    }
  };

  const goToNext = () => {
    if (currentPage < totalPages) {
      goToPage(currentPage + 1);
    }
  };

  const getPageNumbers = () => {
    const pages: (number | string)[] = [];
    
    if (totalPages <= 5) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      if (currentPage <= 3) {
        pages.push(1, 2, 3, 4, '...', totalPages);
      } else if (currentPage >= totalPages - 2) {
        pages.push(1, '...', totalPages - 3, totalPages - 2, totalPages - 1, totalPages);
      } else {
        pages.push(1, '...', currentPage - 1, currentPage, currentPage + 1, '...', totalPages);
      }
    }
    
    return pages;
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Header */}
      <section className="bg-slate-900 text-white pt-40 pb-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Obesity News & Blog</h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Stay updated with the latest news, medical advancements, and health tips from our experts.
          </p>
        </div>
      </section>

      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          {/* Post count info */}
          <div className="text-center mb-8">
            <p className="text-slate-500">
              Showing {startIndex + 1}-{Math.min(endIndex, posts.length)} of {posts.length} articles
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {currentPosts.map((post, i) => (
              <Card key={startIndex + i} className="hover:shadow-lg transition-all duration-300 border-slate-200 flex flex-col h-full overflow-hidden group" data-testid={`card-blog-${startIndex + i}`}>
                <div className="aspect-video bg-slate-200 relative overflow-hidden">
                   <img 
                     src={post.image} 
                     alt={post.title}
                     className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                     onError={(e) => {
                       e.currentTarget.src = "https://caf0fec0.delivery.rocketcdn.me/wp-content/uploads/2020/10/gastric-sleeve.png";
                     }}
                   />
                   <div className="absolute top-4 left-4 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full">
                     {post.category}
                   </div>
                </div>
                <CardHeader>
                  <div className="flex items-center gap-2 text-slate-400 text-sm mb-2">
                    <Calendar className="w-4 h-4" />
                    {post.date}
                  </div>
                  <CardTitle className="text-xl font-bold text-slate-900 leading-tight group-hover:text-primary transition-colors">
                    {post.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="mt-auto">
                  <p className="text-slate-600 text-sm leading-relaxed mb-6">
                    {post.excerpt}
                  </p>
                  <Button variant="link" className="p-0 h-auto text-primary font-bold hover:no-underline hover:text-primary/80" data-testid={`button-read-more-${startIndex + i}`}>
                    Read More &rarr;
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex items-center justify-center gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={goToPrevious}
              disabled={currentPage === 1}
              className="flex items-center gap-1"
              data-testid="button-previous"
            >
              <ChevronLeft className="w-4 h-4" />
              Previous
            </Button>

            <div className="flex items-center gap-1 mx-4">
              {getPageNumbers().map((page, index) => (
                typeof page === 'number' ? (
                  <Button
                    key={index}
                    variant={currentPage === page ? "default" : "outline"}
                    size="sm"
                    onClick={() => goToPage(page)}
                    className={`w-10 h-10 ${currentPage === page ? 'bg-primary text-white' : ''}`}
                    data-testid={`button-page-${page}`}
                  >
                    {page}
                  </Button>
                ) : (
                  <span key={index} className="px-2 text-slate-400">...</span>
                )
              ))}
            </div>

            <Button
              variant="outline"
              size="sm"
              onClick={goToNext}
              disabled={currentPage === totalPages}
              className="flex items-center gap-1"
              data-testid="button-next"
            >
              Next
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

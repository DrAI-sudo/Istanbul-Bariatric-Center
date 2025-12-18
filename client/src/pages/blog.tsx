import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar } from "lucide-react";

const posts = [
  {
    title: "Minimizer Ring in Bariatric Surgery",
    date: "April 15, 2025",
    category: "New Technology",
    excerpt: "The MiniMIZER® Ring is a surgical adjunct used in primary and revisional bariatric procedures to enhance outcomes and prevent weight regain."
  },
  {
    title: "Ozempic: Medical Treatment of Obesity",
    date: "March 28, 2025",
    category: "Medical Weight Loss",
    excerpt: "Ozempic (Semaglutide) has become a first-line medical treatment option for obesity. Learn about how it works and if it's right for you."
  },
  {
    title: "Updated Bariatric Surgery Guidelines 2025",
    date: "January 10, 2025",
    category: "Guidelines",
    excerpt: "New ASMBS/IFSO guidelines have expanded eligibility for weight loss surgery. Find out if you now qualify under the new criteria."
  },
  {
    title: "Endoscopic Sleeve Gastroplasty vs Traditional",
    date: "December 05, 2024",
    category: "Comparison",
    excerpt: "Comparing the non-surgical ESG procedure with the traditional laparoscopic sleeve gastrectomy. Which one offers better results?"
  },
  {
    title: "Why Istanbul is Ideal for Obesity Surgery",
    date: "November 20, 2024",
    category: "Medical Tourism",
    excerpt: "Istanbul offers world-class medical facilities, experienced surgeons, and affordable prices, making it a top destination for bariatric surgery."
  },
  {
    title: "Marmite: A Rich Resource of Vitamin B",
    date: "October 15, 2024",
    category: "Nutrition",
    excerpt: "Post-surgery nutrition is crucial. Discover how Marmite can help prevent Vitamin B deficiency after your bariatric procedure."
  }
];

export default function Blog() {
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
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, i) => (
              <Card key={i} className="hover:shadow-lg transition-all duration-300 border-slate-200 flex flex-col h-full">
                <div className="aspect-video bg-slate-200 relative">
                   {/* Placeholder for blog image */}
                   <div className="absolute inset-0 flex items-center justify-center text-slate-400 bg-slate-100">
                     Image: {post.title}
                   </div>
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
                  <Button variant="link" className="p-0 h-auto text-primary font-bold hover:no-underline hover:text-primary/80">
                    Read More &rarr;
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

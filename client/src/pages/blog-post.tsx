import { useParams, Link } from "wouter";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Calendar, ArrowLeft, User } from "lucide-react";
import { getBlogPostBySlug, blogPosts } from "@/data/blog-posts";

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const post = getBlogPostBySlug(slug || "");

  if (!post) {
    return (
      <div className="min-h-screen bg-white">
        <Navbar />
        <section className="py-40 text-center">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold mb-4">Post Not Found</h1>
            <p className="text-slate-600 mb-8">The blog post you're looking for doesn't exist.</p>
            <Link href="/blog">
              <Button data-testid="button-back-to-blog">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Blog
              </Button>
            </Link>
          </div>
        </section>
        <Footer />
      </div>
    );
  }

  const currentIndex = blogPosts.findIndex(p => p.slug === slug);
  const prevPost = currentIndex > 0 ? blogPosts[currentIndex - 1] : null;
  const nextPost = currentIndex < blogPosts.length - 1 ? blogPosts[currentIndex + 1] : null;

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <article className="pt-32 pb-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <Link href="/blog">
            <Button variant="ghost" className="mb-8 text-primary hover:text-primary/80" data-testid="button-back-to-blog">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Blog
            </Button>
          </Link>

          <div className="mb-6">
            <span className="inline-block bg-primary text-white text-sm font-bold px-4 py-1 rounded-full mb-4">
              {post.category}
            </span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 leading-tight mb-6" data-testid="text-post-title">
              {post.title}
            </h1>
            <div className="flex flex-wrap items-center gap-4 text-slate-500">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <User className="w-4 h-4" />
                <span>Istanbul Bariatric Center Editorial Team</span>
              </div>
            </div>
          </div>

          <div className="aspect-video bg-slate-200 rounded-xl overflow-hidden mb-10">
            <img 
              src={post.image} 
              alt={post.title}
              className="w-full h-full object-cover"
              onError={(e) => {
                e.currentTarget.src = "https://caf0fec0.delivery.rocketcdn.me/wp-content/uploads/2020/10/gastric-sleeve.png";
              }}
            />
          </div>

          <div 
            className="prose prose-lg max-w-none prose-headings:text-slate-900 prose-p:text-slate-700 prose-a:text-primary prose-strong:text-slate-900 prose-ul:text-slate-700 prose-ol:text-slate-700"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          <div className="border-t border-slate-200 mt-12 pt-8">
            <div className="flex flex-col md:flex-row justify-between gap-4">
              {prevPost ? (
                <Link href={`/blog/${prevPost.slug}`} className="flex-1">
                  <div className="p-4 border border-slate-200 rounded-lg hover:border-primary transition-colors group">
                    <span className="text-sm text-slate-400 mb-1 block">Previous Article</span>
                    <span className="font-semibold text-slate-900 group-hover:text-primary transition-colors line-clamp-2">
                      {prevPost.title}
                    </span>
                  </div>
                </Link>
              ) : <div className="flex-1" />}
              
              {nextPost ? (
                <Link href={`/blog/${nextPost.slug}`} className="flex-1">
                  <div className="p-4 border border-slate-200 rounded-lg hover:border-primary transition-colors group text-right">
                    <span className="text-sm text-slate-400 mb-1 block">Next Article</span>
                    <span className="font-semibold text-slate-900 group-hover:text-primary transition-colors line-clamp-2">
                      {nextPost.title}
                    </span>
                  </div>
                </Link>
              ) : <div className="flex-1" />}
            </div>
          </div>

          <div className="mt-12 p-6 bg-slate-50 rounded-xl">
            <h3 className="text-xl font-bold text-slate-900 mb-4">Need More Information?</h3>
            <p className="text-slate-600 mb-4">
              If you have questions about bariatric surgery or would like to schedule a consultation, our team is here to help.
            </p>
            <Link href="/contact">
              <Button className="bg-primary hover:bg-primary/90" data-testid="button-contact-us">
                Contact Us Today
              </Button>
            </Link>
          </div>
        </div>
      </article>

      <Footer />
    </div>
  );
}

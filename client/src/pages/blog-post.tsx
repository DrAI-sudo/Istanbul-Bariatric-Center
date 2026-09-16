import { getSrcSet, addSrcSetToHtml } from "@/lib/image-variants";
import { useParams, Link } from "wouter";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Calendar, ArrowLeft, User, Clock, Share2, Mail, Copy, Check } from "lucide-react";
import { useState } from "react";
import { getBlogPostBySlug, blogPosts } from "@/data/blog-posts";
import { useTranslation } from "react-i18next";
import { SEO, JsonLd, structuredData } from "@/components/seo";
import { SummarizeWithAI } from "@/components/summarize-with-ai";

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const { t } = useTranslation('blog');
  const post = getBlogPostBySlug(slug || "");
  const [copied, setCopied] = useState(false);

  const shareUrl = `https://istanbulbariatriccenter.com/blog/${slug}`;

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(shareUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  const shareOnFacebook = () => {
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`, '_blank', 'width=600,height=400');
  };

  const shareOnTwitter = (title: string) => {
    window.open(`https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(title)}`, '_blank', 'width=600,height=400');
  };

  const shareViaEmail = (title: string, excerpt: string) => {
    window.location.href = `mailto:?subject=${encodeURIComponent(title)}&body=${encodeURIComponent(`${excerpt}\n\nRead more: ${shareUrl}`)}`;
  };

  const getPostTitle = (postSlug: string, fallback: string) => {
    const translated = t(`posts.${postSlug}.title`, { defaultValue: '' });
    return translated || fallback;
  };

  const getPostContent = (postSlug: string, fallback: string) => {
    const translated = t(`posts.${postSlug}.content`, { defaultValue: '' });
    return translated || fallback;
  };

  if (!post) {
    return (
      <div className="min-h-screen bg-white">
        <Navbar />
        <section className="py-40 text-center">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold mb-4">{t('common.noResults')}</h1>
            <p className="text-slate-600 mb-8">The blog post you're looking for doesn't exist.</p>
            <Link href="/blog">
              <Button data-testid="button-back-to-blog">
                <ArrowLeft className="w-4 h-4 mr-2" />
                {t('common.backToBlog')}
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

  const postTitle = getPostTitle(post.slug, post.title);
  const postExcerpt = t(`posts.${post.slug}.excerpt`, { defaultValue: post.excerpt });

  return (
    <div className="min-h-screen bg-white">
      <SEO
        title={postTitle}
        description={postExcerpt}
        keywords={`${post.category.toLowerCase()}, bariatric surgery, weight loss, ${post.title.toLowerCase().split(' ').slice(0, 3).join(', ')}`}
        image={post.image}
        url={`/blog/${post.slug}`}
        type="article"
        publishedTime={post.publishedAt || post.date}
        modifiedTime={post.updatedAt || post.publishedAt || post.date}
      />
      <JsonLd data={structuredData.createArticle({
        title: postTitle,
        excerpt: postExcerpt,
        date: post.date,
        publishedAt: post.publishedAt,
        updatedAt: post.updatedAt,
        slug: post.slug,
        image: post.image
      })} />
      <JsonLd data={structuredData.createBreadcrumb([
        { name: "Home", url: "/" },
        { name: "Blog", url: "/blog" },
        { name: postTitle, url: `/blog/${post.slug}` }
      ])} />
      <Navbar />
      
      <article className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Link href="/blog">
              <Button variant="ghost" className="mb-8 text-primary hover:text-primary/80" data-testid="button-back-to-blog">
                <ArrowLeft className="w-4 h-4 mr-2" />
                {t('common.backToBlog')}
              </Button>
            </Link>

            <div className="mb-8">
              <span className="inline-block bg-gradient-to-r from-primary to-blue-600 text-white text-sm font-bold px-5 py-2 rounded-full mb-6 shadow-lg">
                {post.category}
              </span>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary leading-tight mb-6" data-testid="text-post-title">
                {getPostTitle(post.slug, post.title)}
              </h1>
              <div className="mb-4">
                <SummarizeWithAI variant="light" />
              </div>
              <div className="flex flex-wrap items-center gap-6 text-slate-500 border-b border-slate-200 pb-6">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                    <Calendar className="w-4 h-4 text-primary" />
                  </div>
                  <span className="font-medium">{post.date}</span>
                </div>
                {post.updatedAt && (
                  <div className="flex items-center gap-2" data-testid="text-post-updated">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                      <Calendar className="w-4 h-4 text-primary" />
                    </div>
                    <span className="font-medium">
                      Updated: {new Date(post.updatedAt).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
                    </span>
                  </div>
                )}
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                    <User className="w-4 h-4 text-primary" />
                  </div>
                  <a href="/dr-murat-ustun" className="font-medium hover:text-primary transition-colors" rel="author" data-testid="link-author">Dr. Murat Ustun</a>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                    <Clock className="w-4 h-4 text-primary" />
                  </div>
                  <span className="font-medium">8 min read</span>
                </div>
              </div>
            </div>

            <div className="aspect-video bg-slate-200 rounded-2xl overflow-hidden mb-12 shadow-2xl ring-1 ring-slate-200">
              <img 
                src={post.image} 
                srcSet={getSrcSet(post.image)}
                sizes="(max-width: 767px) 92vw, (max-width: 1023px) 90vw, 800px"
                alt={getPostTitle(post.slug, post.title)}
                className="w-full h-full object-cover"
                width="800"
                height="450"
                onError={(e) => {
                  e.currentTarget.src = "/gastric-sleeve.webp";
                }}
              />
            </div>

            <div 
              className="blog-content prose prose-lg max-w-none"
              dangerouslySetInnerHTML={{ __html: addSrcSetToHtml(getPostContent(post.slug, post.content)) }}
            />

            {/* Share Buttons */}
            <div className="border-t border-slate-200 mt-12 pt-8">
              <div className="flex flex-wrap items-center gap-4">
                <span className="flex items-center gap-2 text-slate-600 font-medium">
                  <Share2 className="w-5 h-5" />
                  Share this article:
                </span>
                <div className="flex gap-2">
                  <button
                    onClick={shareOnFacebook}
                    className="w-10 h-10 rounded-full bg-[#1877F2] hover:bg-[#166FE5] text-white flex items-center justify-center transition-colors"
                    aria-label="Share on Facebook"
                    data-testid="button-share-facebook"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                  </button>
                  <button
                    onClick={() => shareOnTwitter(postTitle)}
                    className="w-10 h-10 rounded-full bg-black hover:bg-gray-800 text-white flex items-center justify-center transition-colors"
                    aria-label="Share on X (Twitter)"
                    data-testid="button-share-twitter"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                  </button>
                  <button
                    onClick={() => shareViaEmail(postTitle, postExcerpt)}
                    className="w-10 h-10 rounded-full bg-slate-600 hover:bg-slate-700 text-white flex items-center justify-center transition-colors"
                    aria-label="Share via Email"
                    data-testid="button-share-email"
                  >
                    <Mail className="w-5 h-5" />
                  </button>
                  <button
                    onClick={handleCopyLink}
                    className={`w-10 h-10 rounded-full ${copied ? 'bg-green-500' : 'bg-slate-400 hover:bg-slate-500'} text-white flex items-center justify-center transition-colors`}
                    aria-label={copied ? "Link copied!" : "Copy link"}
                    data-testid="button-copy-link"
                  >
                    {copied ? <Check className="w-5 h-5" /> : <Copy className="w-5 h-5" />}
                  </button>
                </div>
              </div>
            </div>

            <div className="border-t border-slate-200 mt-8 pt-8">
              <div className="flex flex-col md:flex-row justify-between gap-4">
                {prevPost ? (
                  <Link href={`/blog/${prevPost.slug}`} className="flex-1">
                    <div className="p-4 border border-slate-200 rounded-lg hover:border-primary transition-colors group">
                      <span className="text-sm text-slate-400 mb-1 block">Previous Article</span>
                      <span className="font-semibold text-slate-900 group-hover:text-primary transition-colors line-clamp-2">
                        {getPostTitle(prevPost.slug, prevPost.title)}
                      </span>
                    </div>
                  </Link>
                ) : <div className="flex-1" />}
                
                {nextPost ? (
                  <Link href={`/blog/${nextPost.slug}`} className="flex-1">
                    <div className="p-4 border border-slate-200 rounded-lg hover:border-primary transition-colors group text-right">
                      <span className="text-sm text-slate-400 mb-1 block">Next Article</span>
                      <span className="font-semibold text-slate-900 group-hover:text-primary transition-colors line-clamp-2">
                        {getPostTitle(nextPost.slug, nextPost.title)}
                      </span>
                    </div>
                  </Link>
                ) : <div className="flex-1" />}
              </div>
            </div>

            <div className="mt-16 p-8 bg-gradient-to-br from-primary/10 via-blue-50 to-white rounded-2xl border border-primary/20 shadow-lg">
              <div className="flex flex-col md:flex-row items-center gap-6">
                <div className="w-20 h-20 rounded-full bg-primary flex items-center justify-center shrink-0">
                  <User className="w-10 h-10 text-white" />
                </div>
                <div className="text-center md:text-left flex-1">
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">Ready to Start Your Journey?</h3>
                  <p className="text-slate-600 mb-4">
                    Contact Dr. Murat Ustun for a free consultation and learn about your weight loss options.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
                    <Link href="/contact">
                      <Button className="bg-primary hover:bg-primary/90 shadow-lg" data-testid="button-contact-us">
                        Book Free Consultation
                      </Button>
                    </Link>
                    <a 
                      href="https://wa.me/905324131143" 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      <Button variant="outline" className="border-green-500 text-green-600 hover:bg-green-50">
                        WhatsApp
                      </Button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>

      <Footer />
    </div>
  );
}

import { useState } from "react";
import { Link } from "wouter";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, ChevronLeft, ChevronRight } from "lucide-react";
import { blogPosts } from "@/data/blog-posts";
import { useTranslation } from "react-i18next";

const POSTS_PER_PAGE = 6;

export default function Blog() {
  const { t } = useTranslation(['pages', 'blog']);
  const [currentPage, setCurrentPage] = useState(1);
  
  const totalPages = Math.ceil(blogPosts.length / POSTS_PER_PAGE);
  const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
  const endIndex = startIndex + POSTS_PER_PAGE;
  const currentPosts = blogPosts.slice(startIndex, endIndex);

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

  const getPostTitle = (slug: string, fallback: string) => {
    const translated = t(`blog:posts.${slug}.title`, { defaultValue: '' });
    return translated || fallback;
  };

  const getPostExcerpt = (slug: string, fallback: string) => {
    const translated = t(`blog:posts.${slug}.excerpt`, { defaultValue: '' });
    return translated || fallback;
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <section className="bg-slate-900 text-white pt-40 pb-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">{t('pages:blog.title')}</h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            {t('pages:blog.subtitle')}
          </p>
        </div>
      </section>

      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <p className="text-slate-500">
              {t('pages:blog.showing')} {startIndex + 1}-{Math.min(endIndex, blogPosts.length)} {t('pages:blog.of')} {blogPosts.length} {t('pages:blog.articles')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {currentPosts.map((post, i) => (
              <Card key={post.slug} className="hover:shadow-lg transition-all duration-300 border-slate-200 flex flex-col h-full overflow-hidden group" data-testid={`card-blog-${startIndex + i}`}>
                <div className="aspect-video bg-slate-200 relative overflow-hidden">
                   <img 
                     src={post.image} 
                     alt={getPostTitle(post.slug, post.title)}
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
                    {getPostTitle(post.slug, post.title)}
                  </CardTitle>
                </CardHeader>
                <CardContent className="mt-auto">
                  <p className="text-slate-600 text-sm leading-relaxed mb-6">
                    {getPostExcerpt(post.slug, post.excerpt)}
                  </p>
                  <Link href={`/blog/${post.slug}`}>
                    <Button variant="link" className="p-0 h-auto text-primary font-bold hover:no-underline hover:text-primary/80" data-testid={`button-read-more-${post.slug}`}>
                      {t('blog:common.readMore')} &rarr;
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>

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
              {t('pages:blog.previous')}
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
              {t('pages:blog.next')}
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

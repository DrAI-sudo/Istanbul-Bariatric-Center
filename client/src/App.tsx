import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { lazy, Suspense, useEffect } from "react";
import { useLocation } from "wouter";

const Toaster = lazy(() => import("@/components/ui/toaster").then(m => ({ default: m.Toaster })));
const SonnerToaster = lazy(() => import("sonner").then(m => ({ default: m.Toaster })));
const TooltipProvider = lazy(() => import("@/components/ui/tooltip").then(m => ({ default: m.TooltipProvider })));
const MayaChatbot = lazy(() => import("@/components/maya-chatbot"));

const Home = lazy(() => import("@/pages/home"));
const About = lazy(() => import("@/pages/about"));
const Treatments = lazy(() => import("@/pages/treatments"));
const Results = lazy(() => import("@/pages/results"));
const Blog = lazy(() => import("@/pages/blog"));
const BlogPost = lazy(() => import("@/pages/blog-post"));
const Contact = lazy(() => import("@/pages/contact"));
const SleeveGastrectomy = lazy(() => import("@/pages/sleeve-gastrectomy"));
const MiniGastricBypass = lazy(() => import("@/pages/mini-gastric-bypass"));
const GastricBalloon = lazy(() => import("@/pages/gastric-balloon"));
const DuodenalSwitch = lazy(() => import("@/pages/duodenal-switch"));
const TransitBipartition = lazy(() => import("@/pages/transit-bipartition"));
const ESG = lazy(() => import("@/pages/esg"));
const ESGUK = lazy(() => import("@/pages/esg-uk"));
const ESGDE = lazy(() => import("@/pages/esg-de"));
const ESGFR = lazy(() => import("@/pages/esg-fr"));
const ESGES = lazy(() => import("@/pages/esg-es"));
const ESGNL = lazy(() => import("@/pages/esg-nl"));
const ESGAR = lazy(() => import("@/pages/esg-ar"));
const ESGIT = lazy(() => import("@/pages/esg-it"));
const ESGRU = lazy(() => import("@/pages/esg-ru"));
const ESGRO = lazy(() => import("@/pages/esg-ro"));
const ESGSE = lazy(() => import("@/pages/esg-se"));
const ESGPL = lazy(() => import("@/pages/esg-pl"));
const ESGDK = lazy(() => import("@/pages/esg-dk"));
const ESGNO = lazy(() => import("@/pages/esg-no"));
const ESGHU = lazy(() => import("@/pages/esg-hu"));
const ESGFI = lazy(() => import("@/pages/esg-fi"));
const ESGCA = lazy(() => import("@/pages/esg-ca"));
const ESGUS = lazy(() => import("@/pages/esg-us"));
const ESGANZ = lazy(() => import("@/pages/esg-anz"));
const PostBariatricSurgery = lazy(() => import("@/pages/post-bariatric-surgery"));
const Insurance = lazy(() => import("@/pages/insurance"));
const BariatricGuide = lazy(() => import("@/pages/bariatric-guide"));
const HealthProfile = lazy(() => import("@/pages/health-profile"));
const AdminDashboard = lazy(() => import("@/pages/admin"));
const NotFound = lazy(() => import("@/pages/not-found"));

function PageLoader() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="animate-pulse flex flex-col items-center gap-4">
        <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin" />
        <p className="text-slate-500 font-medium">Loading...</p>
      </div>
    </div>
  );
}

function ScrollToTop() {
  const [pathname] = useLocation();

  useEffect(() => {
    requestAnimationFrame(() => {
      window.scrollTo({ top: 0, behavior: 'instant' });
    });
  }, [pathname]);

  return null;
}

function Router() {
  return (
    <>
      <ScrollToTop />
      <Suspense fallback={<PageLoader />}>
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/treatments" component={Treatments} />
          <Route path="/results" component={Results} />
          <Route path="/blog" component={Blog} />
          <Route path="/blog/:slug" component={BlogPost} />
          <Route path="/contact" component={Contact} />
          <Route path="/sleeve-gastrectomy" component={SleeveGastrectomy} />
          <Route path="/mini-gastric-bypass" component={MiniGastricBypass} />
          <Route path="/gastric-balloon" component={GastricBalloon} />
          <Route path="/duodenal-switch" component={DuodenalSwitch} />
          <Route path="/transit-bipartition" component={TransitBipartition} />
          <Route path="/esg" component={ESG} />
          <Route path="/esg/uk" component={ESGUK} />
          <Route path="/esg/de" component={ESGDE} />
          <Route path="/esg/fr" component={ESGFR} />
          <Route path="/esg/es" component={ESGES} />
          <Route path="/esg/nl" component={ESGNL} />
          <Route path="/esg/ar" component={ESGAR} />
          <Route path="/esg/it" component={ESGIT} />
          <Route path="/esg/ru" component={ESGRU} />
          <Route path="/esg/ro" component={ESGRO} />
          <Route path="/esg/se" component={ESGSE} />
          <Route path="/esg/pl" component={ESGPL} />
          <Route path="/esg/dk" component={ESGDK} />
          <Route path="/esg/no" component={ESGNO} />
          <Route path="/esg/hu" component={ESGHU} />
          <Route path="/esg/fi" component={ESGFI} />
          <Route path="/esg/ca" component={ESGCA} />
          <Route path="/esg/us" component={ESGUS} />
          <Route path="/esg/anz" component={ESGANZ} />
          <Route path="/post-bariatric-surgery" component={PostBariatricSurgery} />
          <Route path="/insurance" component={Insurance} />
          <Route path="/health-profile" component={HealthProfile} />
          <Route path="/bariatric-surgery-turkey-guide" component={BariatricGuide} />
          <Route path="/admin" component={AdminDashboard} />
          <Route component={NotFound} />
        </Switch>
      </Suspense>
    </>
  );
}

function SkipToContent() {
  return (
    <a
      href="#main-content"
      className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[9999] focus:bg-primary focus:text-white focus:px-4 focus:py-2 focus:rounded-md focus:shadow-lg focus:outline-none focus:ring-2 focus:ring-white"
      data-testid="link-skip-to-content"
    >
      Skip to main content
    </a>
  );
}

function PageTracker() {
  const [pathname] = useLocation();

  useEffect(() => {
    if (pathname === "/admin") return;

    let sessionId = sessionStorage.getItem("session_id");
    if (!sessionId) {
      sessionId = Math.random().toString(36).substring(2) + Date.now().toString(36);
      sessionStorage.setItem("session_id", sessionId);
    }

    const doTrack = () => {
      fetch("/api/track", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          path: pathname,
          sessionId,
          referrer: document.referrer || null,
        }),
      }).catch(() => {});
    };
    
    if ('requestIdleCallback' in window) {
      (window as any).requestIdleCallback(doTrack, { timeout: 3000 });
    } else {
      setTimeout(doTrack, 2000);
    }

    const startTime = Date.now();
    return () => {
      const duration = Math.round((Date.now() - startTime) / 1000);
      if (duration > 0) {
        navigator.sendBeacon(
          "/api/track",
          new Blob([JSON.stringify({ path: pathname, sessionId, duration })], { type: "application/json" })
        );
      }
    };
  }, [pathname]);

  return null;
}

function AppContent() {
  const [pathname] = useLocation();
  const isAdmin = pathname === "/admin";

  return (
    <>
      <SkipToContent />
      <Suspense fallback={null}>
        <Toaster />
        <SonnerToaster position="top-center" richColors />
      </Suspense>
      <PageTracker />
      <main id="main-content">
        <Router />
      </main>
      {!isAdmin && <Suspense fallback={null}><MayaChatbot /></Suspense>}
    </>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Suspense fallback={null}>
        <TooltipProvider>
          <AppContent />
        </TooltipProvider>
      </Suspense>
    </QueryClientProvider>
  );
}

export default App;

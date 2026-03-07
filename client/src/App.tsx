import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as SonnerToaster } from "sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { lazy, Suspense, useEffect } from "react";
import { useLocation } from "wouter";
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
const PostBariatricSurgery = lazy(() => import("@/pages/post-bariatric-surgery"));
const Insurance = lazy(() => import("@/pages/insurance"));
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
          <Route path="/post-bariatric-surgery" component={PostBariatricSurgery} />
          <Route path="/insurance" component={Insurance} />
          <Route path="/health-profile" component={HealthProfile} />
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

    fetch("/api/track", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        path: pathname,
        sessionId,
        referrer: document.referrer || null,
      }),
    }).catch(() => {});

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
      <Toaster />
      <SonnerToaster position="top-center" richColors />
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
      <TooltipProvider>
        <AppContent />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;

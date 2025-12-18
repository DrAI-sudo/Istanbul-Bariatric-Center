import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as SonnerToaster } from "sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Home from "@/pages/home";
import About from "@/pages/about";
import Treatments from "@/pages/treatments";
import Results from "@/pages/results";
import Blog from "@/pages/blog";
import BlogPost from "@/pages/blog-post";
import Contact from "@/pages/contact";
import SleeveGastrectomy from "@/pages/sleeve-gastrectomy";
import MiniGastricBypass from "@/pages/mini-gastric-bypass";
import GastricBalloon from "@/pages/gastric-balloon";
import DuodenalSwitch from "@/pages/duodenal-switch";
import TransitBipartition from "@/pages/transit-bipartition";
import ESG from "@/pages/esg";
import PostBariatricSurgery from "@/pages/post-bariatric-surgery";
import { WhatsAppBubble } from "@/components/whatsapp-bubble";
import { useEffect } from "react";
import { useLocation } from "wouter";

function ScrollToTop() {
  const [pathname] = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function Router() {
  return (
    <>
      <ScrollToTop />
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
        <Route component={NotFound} />
      </Switch>
    </>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <SonnerToaster position="top-center" richColors />
        <Router />
        <WhatsAppBubble />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;

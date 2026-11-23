import { lazy, Suspense } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const Index = lazy(() => import("./pages/Index"));
const About = lazy(() => import("./pages/About"));
const FounderPortfolio = lazy(() => import("./pages/FounderPortfolio"));
const Ventures = lazy(() => import("./pages/Ventures"));
const Books = lazy(() => import("./pages/Books"));
const Reflections = lazy(() => import("./pages/Reflections"));
const Speaking = lazy(() => import("./pages/Speaking"));
const Media = lazy(() => import("./pages/Media"));
const AbaaWorld = lazy(() => import("./pages/AbaaWorld"));
const Contact = lazy(() => import("./pages/Contact"));
const Resources = lazy(() => import("./pages/Resources"));
const EntrepreneurByDNA = lazy(() => import("./pages/EntrepreneurByDNA"));
const Privacy = lazy(() => import("./pages/Privacy"));
const Terms = lazy(() => import("./pages/Terms"));
const Press = lazy(() => import("./pages/Press"));
const ReflectionDetail = lazy(() => import("./pages/ReflectionDetail"));
const BookDetail = lazy(() => import("./pages/BookDetail"));
const NotFound = lazy(() => import("./pages/NotFound"));

const queryClient = new QueryClient();

const PageFallback = () => (
  <div className="min-h-screen bg-ivory flex items-center justify-center">
    <div className="w-8 h-8 border-2 border-gold/40 border-t-gold rounded-full animate-spin" />
  </div>
);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Suspense fallback={<PageFallback />}>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<About />} />
            <Route path="/portfolio" element={<FounderPortfolio />} />
            <Route path="/ventures" element={<Ventures />} />
            <Route path="/books" element={<Books />} />
            <Route path="/reflections" element={<Reflections />} />
            <Route path="/speaking" element={<Speaking />} />
            <Route path="/media" element={<Media />} />
            <Route path="/abaa-world" element={<AbaaWorld />} />
            <Route path="/press" element={<Press />} />
            <Route path="/reflections/:slug" element={<ReflectionDetail />} />
            <Route path="/books/:slug" element={<BookDetail />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/entrepreneurbydna" element={<EntrepreneurByDNA />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

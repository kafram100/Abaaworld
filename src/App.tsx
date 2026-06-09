import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import FounderPortfolio from "./pages/FounderPortfolio";
import Ventures from "./pages/Ventures";
import Books from "./pages/Books";
import Reflections from "./pages/Reflections";
import Speaking from "./pages/Speaking";
import Media from "./pages/Media";
import AbaaWorld from "./pages/AbaaWorld";
import Contact from "./pages/Contact";
import Resources from "./pages/Resources";
import EntrepreneurByDNA from "./pages/EntrepreneurByDNA";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import Press from "./pages/Press";
import ReflectionDetail from "./pages/ReflectionDetail";
import BookDetail from "./pages/BookDetail";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
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
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

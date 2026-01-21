import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import NotFound from "./pages/NotFound.tsx";

const queryClient = new QueryClient();

const getBasePath = () => {
  const path = window.location.pathname;
  const pathParts = path.split('/').filter(Boolean);
  if (pathParts.length > 0 && pathParts[0] === 'HF-Beauty-Spa-Center') {
    return '/HF-Beauty-Spa-Center';
  }
  const urlParams = new URLSearchParams(window.location.search);
  const redirectPath = urlParams.get('p');
  if (redirectPath) {
    window.history.replaceState({}, '', redirectPath);
    const newPathParts = redirectPath.split('/').filter(Boolean);
    if (newPathParts.length > 0 && newPathParts[0] === 'HF-Beauty-Spa-Center') {
      return '/HF-Beauty-Spa-Center';
    }
  }
  return '';
};

const App = () => {
  const basename = getBasePath();
  
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter basename={basename}>
          <Routes>
            <Route path="/" element={<Index />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;

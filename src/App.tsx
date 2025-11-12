import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Biografie from "./pages/Biografie";
import Discografie from "./pages/Discografie";
import Kontakt from "./pages/Kontakt";
import Impressum from "./pages/Impressum";
import NotFound from "./pages/NotFound";

// Album Detail Pages
import Fastfood from "./pages/albums/Fastfood";
import NoDay from "./pages/albums/NoDay";
import WhatsUp from "./pages/albums/WhatsUp";
import OhneDich from "./pages/albums/OhneDich";
import HappyBirthday from "./pages/albums/HappyBirthday";
import Geburtstag from "./pages/albums/Geburtstag";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/biografie" element={<Biografie />} />
          <Route path="/discografie" element={<Discografie />} />
          <Route path="/kontakt" element={<Kontakt />} />
          <Route path="/impressum" element={<Impressum />} />
          
          {/* Album Detail Routes */}
          <Route path="/album/fastfood" element={<Fastfood />} />
          <Route path="/album/noday" element={<NoDay />} />
          <Route path="/album/whats-up" element={<WhatsUp />} />
          <Route path="/album/ohne-dich" element={<OhneDich />} />
          <Route path="/album/happy-birthday" element={<HappyBirthday />} />
          <Route path="/album/geburtstag" element={<Geburtstag />} />
          
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

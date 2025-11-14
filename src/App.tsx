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
import IWishYouThisDay from "./pages/albums/IWishYouThisDay";
import ManchmalIstDasLeben from "./pages/albums/ManchmalIstDasLeben";
import DerGoldfischOscar from "./pages/albums/DerGoldfischOscar";
import Fussballfieber from "./pages/albums/Fussballfieber";
import Gluecksgefuehl from "./pages/albums/Gluecksgefuehl";
import StrasseDerZerbrochenenTraeume from "./pages/albums/StrasseDerZerbrochenenTraeume";
import Lebenskraft from "./pages/albums/Lebenskraft";
import HerzenBrennen from "./pages/albums/HerzenBrennen";
import GehMirNichtDurchsHaar from "./pages/albums/GehMirNichtDurchsHaar";
import TonightIllBeWithYou from "./pages/albums/TonightIllBeWithYou";
import EinFastPerfektesJahr from "./pages/albums/EinFastPerfektesJahr";
import EineNacht from "./pages/albums/EineNacht";
import TheFutureIsNow from "./pages/albums/TheFutureIsNow";
import Discokoenigin from "./pages/albums/Discokoenigin";
import DieWildeErna from "./pages/albums/DieWildeErna";
import WillkommenAufDerErde from "./pages/albums/WillkommenAufDerErde";
import Wochenende from "./pages/albums/Wochenende";
import MeineSonne from "./pages/albums/MeineSonne";
import Digital from "./pages/albums/Digital";
import BassThatQuakes from "./pages/albums/BassThatQuakes";
import UrlaubZuHause from "./pages/albums/UrlaubZuHause";
import LassMichDeinHeldSein from "./pages/albums/LassMichDeinHeldSein";
import GlaubImmerAnDich from "./pages/albums/GlaubImmerAnDich";
import FuerDich from "./pages/albums/FuerDich";
import WiesoGeradeIch from "./pages/albums/WiesoGeradeIch";
import DuMachstMirGaensehaut from "./pages/albums/DuMachstMirGaensehaut";
import Hampelmann from "./pages/albums/Hampelmann";

// Admin Pages
import Auth from "./pages/Auth";
import Dashboard from "./pages/admin/Dashboard";
import AlbumsManager from "./pages/admin/AlbumsManager";
import BiographyManager from "./pages/admin/BiographyManager";
import ContactManager from "./pages/admin/ContactManager";
import LegalManager from "./pages/admin/LegalManager";
import { AdminRoute } from "./components/AdminRoute";

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
          <Route path="/album/i-wish-you-this-day" element={<IWishYouThisDay />} />
          <Route path="/album/manchmal-ist-das-leben" element={<ManchmalIstDasLeben />} />
          <Route path="/album/der-goldfisch-oscar" element={<DerGoldfischOscar />} />
          <Route path="/album/fussballfieber" element={<Fussballfieber />} />
          <Route path="/album/gluecksgefuehl" element={<Gluecksgefuehl />} />
          <Route path="/album/strasse-der-zerbrochenen-traeume" element={<StrasseDerZerbrochenenTraeume />} />
          <Route path="/album/lebenskraft" element={<Lebenskraft />} />
          <Route path="/album/herzen-brennen" element={<HerzenBrennen />} />
          <Route path="/album/geh-mir-nicht-durchs-haar" element={<GehMirNichtDurchsHaar />} />
          <Route path="/album/tonight-ill-be-with-you" element={<TonightIllBeWithYou />} />
          <Route path="/album/ein-fast-perfektes-jahr" element={<EinFastPerfektesJahr />} />
          <Route path="/album/eine-nacht" element={<EineNacht />} />
          <Route path="/album/the-future-is-now" element={<TheFutureIsNow />} />
          <Route path="/album/discokoenigin" element={<Discokoenigin />} />
          <Route path="/album/die-wilde-erna" element={<DieWildeErna />} />
          <Route path="/album/willkommen-auf-der-erde" element={<WillkommenAufDerErde />} />
          <Route path="/album/wochenende" element={<Wochenende />} />
          <Route path="/album/meine-sonne" element={<MeineSonne />} />
          <Route path="/album/digital" element={<Digital />} />
          <Route path="/album/bass-that-quakes" element={<BassThatQuakes />} />
          <Route path="/album/urlaub-zu-hause" element={<UrlaubZuHause />} />
          <Route path="/album/lass-mich-dein-held-sein" element={<LassMichDeinHeldSein />} />
          <Route path="/album/glaub-immer-an-dich" element={<GlaubImmerAnDich />} />
          <Route path="/album/fuer-dich" element={<FuerDich />} />
          <Route path="/album/wieso-gerade-ich" element={<WiesoGeradeIch />} />
          <Route path="/album/du-machst-mir-gaensehaut" element={<DuMachstMirGaensehaut />} />
          <Route path="/album/hampelmann" element={<Hampelmann />} />
          
          {/* Auth & Admin Routes */}
          <Route path="/auth" element={<Auth />} />
          <Route path="/admin" element={<AdminRoute><Dashboard /></AdminRoute>} />
          <Route path="/admin/albums" element={<AdminRoute><AlbumsManager /></AdminRoute>} />
          <Route path="/admin/biography" element={<AdminRoute><BiographyManager /></AdminRoute>} />
          <Route path="/admin/contact" element={<AdminRoute><ContactManager /></AdminRoute>} />
          <Route path="/admin/legal" element={<AdminRoute><LegalManager /></AdminRoute>} />
          
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

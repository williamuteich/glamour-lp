import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Confirmacao from "./pages/Confirmacao";
import { useEffect } from "react";
import { captureVisitor, confirmVisitor, VisitorData } from "@/lib/visitorTracking";

const queryClient = new QueryClient();

function getStoredVisitor() {
  const v = localStorage.getItem("visitor_tracking");
  if (!v) return null;
  try {
    return JSON.parse(v) as VisitorData;
  } catch (e) {
    return null;
  }
}

function saveVisitor(v: VisitorData) {
  try {
    localStorage.setItem("visitor_tracking", JSON.stringify(v));
  } catch (e) {
  }
}

function makeVisitorFromLocation(): VisitorData {
  const params = new URLSearchParams(window.location.search);
  const visitorId = params.get("vid") || params.get("visitorId") || (crypto && (crypto as any).randomUUID ? (crypto as any).randomUUID() : `v-${Date.now()}`);
  return {
    visitorId,
    gclid: params.get("gclid") || undefined,
    utmSource: params.get("utm_source") || params.get("utmSource") || undefined,
    utmCampaign: params.get("utm_campaign") || params.get("utmCampaign") || undefined,
    ip: undefined,
    userAgent: navigator.userAgent,
  };
}

const App = () => {
  useEffect(() => {
    let visitor = getStoredVisitor();
    const params = new URLSearchParams(window.location.search);
    const urlExtras: Partial<VisitorData> = {
      gclid: params.get("gclid") || undefined,
      utmSource: params.get("utm_source") || params.get("utmSource") || undefined,
      utmCampaign: params.get("utm_campaign") || params.get("utmCampaign") || undefined,
    };
    const urlVid = params.get("vid") || params.get("visitorId");
    
    let currentVisitor: VisitorData;
    if (!visitor) {
      currentVisitor = { ...makeVisitorFromLocation(), ...urlExtras };
      saveVisitor(currentVisitor);
      captureVisitor(currentVisitor);
    } else {
      currentVisitor = { ...visitor, ...Object.fromEntries(Object.entries(urlExtras).filter(([, v]) => v !== undefined)) } as VisitorData;
      if (urlVid) currentVisitor.visitorId = urlVid;
      
      const changed = JSON.stringify(currentVisitor) !== JSON.stringify(visitor);
      if (changed) {
        saveVisitor(currentVisitor);
      }
      captureVisitor(currentVisitor);
    }

    const handleUnload = () => {
      if (currentVisitor && typeof navigator !== "undefined" && typeof navigator.sendBeacon === "function") {
        const beaconUrl = "https://googlegclid.bazarelegance.com.br/api/public/visitor";
        const blob = new Blob([JSON.stringify({ ...currentVisitor, converted: false })], { type: "application/json" });
        navigator.sendBeacon(beaconUrl, blob);
      }
    };

    window.addEventListener("beforeunload", handleUnload);
    window.addEventListener("pagehide", handleUnload);
    return () => {
      window.removeEventListener("beforeunload", handleUnload);
      window.removeEventListener("pagehide", handleUnload);
    };
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/googleads-confirmacao" element={<Confirmacao />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;

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
  const keys = ["visitor_tracking", "visitorTracking"];
  for (const k of keys) {
    const v = localStorage.getItem(k);
    if (v) {
      try {
        return JSON.parse(v) as VisitorData;
      } catch (e) {
        // ignore
      }
    }
  }
  return null;
}

function saveVisitor(v: VisitorData) {
  try {
    localStorage.setItem("visitor_tracking", JSON.stringify(v));
  } catch (e) {
    // ignore
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
    // create or reuse visitor data
    let visitor = getStoredVisitor();
    if (!visitor) {
      visitor = makeVisitorFromLocation();
      saveVisitor(visitor);
      captureVisitor(visitor);
    } else {
      // refresh capture (non-blocking)
      captureVisitor(visitor);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
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

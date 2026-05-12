import type { VisitorData } from "@/lib/visitorTracking";

function readStoredVisitor() {
  const key = "visitor_tracking";
  const value = localStorage.getItem(key);
  if (!value) return null;
  try {
    return JSON.parse(value) as VisitorData;
  } catch (e) {
    return null;
  }
  return null;
}

function writeStoredVisitor(visitor: VisitorData) {
  const serialized = JSON.stringify(visitor);
  localStorage.setItem("visitor_tracking", serialized);
}

export function bootstrapVisitorTracking() {
  if (typeof window === "undefined") return null;

  const params = new URLSearchParams(window.location.search);
  const urlVisitorId = params.get("vid") || params.get("visitorId");
  const urlExtras: Partial<VisitorData> = {
    gclid: params.get("gclid") || undefined,
    utmSource: params.get("utm_source") || params.get("utmSource") || undefined,
    utmCampaign: params.get("utm_campaign") || params.get("utmCampaign") || undefined,
  };

  const existing = readStoredVisitor();
  const visitorId = urlVisitorId || existing?.visitorId || (crypto?.randomUUID?.() ?? `v-${Date.now()}`);

  const visitor: VisitorData = {
    visitorId,
    gclid: urlExtras.gclid ?? existing?.gclid,
    utmSource: urlExtras.utmSource ?? existing?.utmSource,
    utmCampaign: urlExtras.utmCampaign ?? existing?.utmCampaign,
    ip: existing?.ip,
    userAgent: existing?.userAgent ?? navigator.userAgent,
  };

  try {
    writeStoredVisitor(visitor);
  } catch (e) {
  }

  return visitor;
}
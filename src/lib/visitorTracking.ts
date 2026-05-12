export type VisitorData = {
  visitorId: string;
  gclid?: string;
  utmSource?: string;
  utmCampaign?: string;
  ip?: string;
  userAgent?: string;
};
import axios from "axios";

const API_BASE = "";

function sleep(ms: number) {
  return new Promise((r) => setTimeout(r, ms));
}

async function post(path: string, body: unknown, maxAttempts = 3): Promise<boolean> {
  const url = `${API_BASE.replace(/\/$/, "")}${path}`;
  let attempt = 0;
  while (attempt < maxAttempts) {
    try {
      await axios.post(url, body, { headers: { "Content-Type": "application/json" }, timeout: 5000 });
      return true;
    } catch (err) {
      attempt += 1;
      if (attempt >= maxAttempts) return false;
      const backoff = Math.pow(2, attempt) * 200 + Math.random() * 100;
      await sleep(backoff);
    }
  }
  return false;
}

function scheduleSend(fn: () => void, delayMs = 1500) {
  if (typeof (window as any).requestIdleCallback === "function") {
    (window as any).requestIdleCallback(() => fn(), { timeout: Math.max(500, delayMs) });
    return;
  }
  setTimeout(fn, delayMs);
}

export function captureVisitor(data: VisitorData, options?: { delayMs?: number }) {
  const payload = { ...data, converted: false };
  scheduleSend(() => void post("/api/public/visitor", payload), options?.delayMs ?? 1500);
}

export async function confirmVisitor(data: VisitorData) {
  const payload = { ...data, converted: true };
  try {
    const ok = await post("/api/public/visitor/confirm", payload);
    if (!ok && typeof navigator !== "undefined" && typeof navigator.sendBeacon === "function") {
      try {
        const beaconUrl = `${API_BASE.replace(/\/$/, "")}/api/public/visitor/confirm`;
        const blob = new Blob([JSON.stringify(payload)], { type: "application/json" });
        navigator.sendBeacon(beaconUrl, blob);
      } catch (e) {
      }
    }
  } catch (e) {
  }
}

export default { captureVisitor, confirmVisitor };

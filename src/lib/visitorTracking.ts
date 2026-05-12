export type VisitorData = {
  visitorId: string;
  gclid?: string;
  utmSource?: string;
  utmCampaign?: string;
  ip?: string;
  userAgent?: string;
};
import axios from "axios";

const API_BASE = (import.meta as any).env?.VITE_VISITOR_API_URL || "http://localhost:3000";

function sleep(ms: number) {
  return new Promise((r) => setTimeout(r, ms));
}

async function post(path: string, body: unknown, maxAttempts = 3) {
  const url = `${API_BASE.replace(/\/$/, "")}${path}`;
  let attempt = 0;
  while (attempt < maxAttempts) {
    try {
      await axios.post(url, body, { headers: { "Content-Type": "application/json" }, timeout: 5000 });
      return;
    } catch (err) {
      attempt += 1;
      if (attempt >= maxAttempts) return;
      const backoff = Math.pow(2, attempt) * 200 + Math.random() * 100;
      await sleep(backoff);
    }
  }
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
    await post("/api/public/visitor/confirm", payload);
  } catch (e) {
    // ignore
  }
}

export default { captureVisitor, confirmVisitor };

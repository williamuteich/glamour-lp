import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function trackEvent(action: string, category: string, label?: string) {
  if (typeof window !== "undefined" && (window as any).gtag) {
    (window as any).gtag("event", action, {
      event_category: category,
      event_label: label,
    });
  }
}

export function trackWhatsAppConversion() {
  if (typeof window !== "undefined" && (window as any).gtag) {
    (window as any).gtag("event", "conversion", {
      send_to: "AW-18090998787/2h0mCNvfrpwcEIP4urJD",
      value: 1.0,
      currency: "BRL",
    });
  }
}

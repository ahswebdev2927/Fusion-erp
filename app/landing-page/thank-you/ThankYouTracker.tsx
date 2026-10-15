"use client";

import { useEffect } from "react";

export default function ThankYouTracker() {
  useEffect(() => {
    if (typeof window !== "undefined") {
      const windowWithDataLayer = window as unknown as { dataLayer?: Array<Record<string, unknown>> };
      windowWithDataLayer.dataLayer = windowWithDataLayer.dataLayer || [];
      windowWithDataLayer.dataLayer.push({ event: "lead_submitted" });
    }
  }, []);

  return null;
}

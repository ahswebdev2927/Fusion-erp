"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const LEAD_URL =
  "https://script.google.com/macros/s/AKfycbwjO91-qJEhIestk3HUmONVrDaaoF8Y71qjR-TWbgiPdxHV6FzQcxuZrWqk5dLZn0VR/exec";

export default function LandingForm() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    city: "",
    email: "",
    website: "", // honeypot
    gclid: "",
    fbclid: "",
    utm_source: "",
    utm_medium: "",
    utm_campaign: "",
    utm_term: "",
    page_url: "",
  });

  const [errors, setErrors] = useState<{ [key: string]: boolean }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const p = new URLSearchParams(window.location.search);
      const trackingKeys = [
        "gclid",
        "fbclid",
        "utm_source",
        "utm_medium",
        "utm_campaign",
        "utm_term",
      ];

      const captured: Record<string, string> = {};
      trackingKeys.forEach((key) => {
        let val = p.get(key);
        try {
          if (val) {
            sessionStorage.setItem(key, val);
          } else {
            val = sessionStorage.getItem(key) || "";
          }
        } catch {
          // ignore storage error
        }
        captured[key] = val || "";
      });

      setFormData((prev) => ({
        ...prev,
        ...captured,
        page_url: window.location.href.split("#")[0],
      }));
    }
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: false }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (formData.website) {
      // honeypot triggered
      return;
    }

    const cleanPhone = formData.phone
      .replace(/\D/g, "")
      .replace(/^(91|0)(?=\d{10}$)/, "");

    const newErrors: { [key: string]: boolean } = {};
    if (formData.name.trim().length < 2) newErrors.name = true;
    if (!/^[6-9]\d{9}$/.test(cleanPhone)) newErrors.phone = true;
    if (formData.city.trim().length < 2) newErrors.city = true;
    if (
      formData.email.trim() !== "" &&
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())
    ) {
      newErrors.email = true;
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsSubmitting(true);

    if (typeof window !== "undefined") {
      const windowWithDataLayer = window as unknown as { dataLayer?: Array<Record<string, unknown>> };
      windowWithDataLayer.dataLayer = windowWithDataLayer.dataLayer || [];
      windowWithDataLayer.dataLayer.push({ event: "form_submit_attempt" });
    }

    const payload = new URLSearchParams();
    payload.append("name", formData.name);
    payload.append("phone", cleanPhone);
    payload.append("city", formData.city);
    payload.append("email", formData.email);
    payload.append("gclid", formData.gclid);
    payload.append("fbclid", formData.fbclid);
    payload.append("utm_source", formData.utm_source);
    payload.append("utm_medium", formData.utm_medium);
    payload.append("utm_campaign", formData.utm_campaign);
    payload.append("utm_term", formData.utm_term);
    payload.append("page_url", formData.page_url);

    try {
      await fetch(LEAD_URL, {
        method: "POST",
        mode: "no-cors",
        keepalive: true,
        body: payload,
      });

      try {
        sessionStorage.setItem("lead_ok", "1");
      } catch {
        // ignore
      }

      router.push("/landing-page/thank-you");
    } catch {
      setIsSubmitting(false);
      alert(
        "Sorry, something went wrong. Please call or WhatsApp us directly at +91 92479 54331."
      );
    }
  };

  return (
    <div className="landing-form-card" id="enquire">
      <span className="landing-tag">✦ Free Career Roadmap Session</span>
      <h2>Book a Free 1-on-1 Consultation</h2>
      <p className="sub">
        Speak directly with our senior Oracle Cloud consultant to assess your profile.
      </p>

      <form onSubmit={handleSubmit} noValidate>
        <div className={`landing-field ${errors.name ? "invalid" : ""}`}>
          <label htmlFor="f_name">
            Full Name <span className="landing-req">*</span>
          </label>
          <input
            id="f_name"
            name="name"
            type="text"
            autoComplete="name"
            placeholder="e.g. Rahul Sharma"
            maxLength={80}
            value={formData.name}
            onChange={handleChange}
          />
          <div className="landing-err">Please enter your name.</div>
        </div>

        <div className="landing-row2">
          <div className={`landing-field ${errors.phone ? "invalid" : ""}`}>
            <label htmlFor="f_phone">
              Phone / WhatsApp <span className="landing-req">*</span>
            </label>
            <input
              id="f_phone"
              name="phone"
              type="tel"
              inputMode="numeric"
              autoComplete="tel"
              placeholder="98765 43210"
              maxLength={17}
              value={formData.phone}
              onChange={handleChange}
            />
            <div className="landing-err">Enter a valid 10-digit number.</div>
          </div>

          <div className={`landing-field ${errors.city ? "invalid" : ""}`}>
            <label htmlFor="f_city">
              City / Location <span className="landing-req">*</span>
            </label>
            <input
              id="f_city"
              name="city"
              type="text"
              autoComplete="address-level2"
              placeholder="e.g. Hyderabad"
              maxLength={60}
              value={formData.city}
              onChange={handleChange}
            />
            <div className="landing-err">Please enter your city.</div>
          </div>
        </div>

        <div className={`landing-field ${errors.email ? "invalid" : ""}`}>
          <label htmlFor="f_email">
            Email <span className="landing-opt">(optional)</span>
          </label>
          <input
            id="f_email"
            name="email"
            type="email"
            autoComplete="email"
            placeholder="rahul.sharma@example.com"
            maxLength={120}
            value={formData.email}
            onChange={handleChange}
          />
          <div className="landing-err">Please enter a valid email.</div>
        </div>

        {/* Honeypot field for bot protection */}
        <div className="landing-hp" aria-hidden="true">
          <label>
            Website
            <input
              type="text"
              name="website"
              tabIndex={-1}
              autoComplete="off"
              value={formData.website}
              onChange={handleChange}
            />
          </label>
        </div>

        <button
          className="landing-btn landing-btn-blue text-white"
          type="submit"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Submitting..." : "Reserve Free Consultation Call →"}
        </button>

        <p className="landing-safe">🛡 Direct 1-on-1 access. No sales spam.</p>
        <p className="landing-consent">
          By submitting, you agree to be contacted via call, WhatsApp, SMS or email about this program.{" "}
          <a href="/terms" target="_blank" rel="noopener noreferrer">Terms &amp; Conditions</a> •{" "}
          <a href="/privacy" target="_blank" rel="noopener noreferrer">Privacy Policy</a>
        </p>
      </form>
    </div>
  );
}

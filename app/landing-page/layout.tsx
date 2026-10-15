import type { Metadata, Viewport } from "next";
import Script from "next/script";
import "./landing.css";

export const viewport: Viewport = {
  themeColor: "#0b1b3f",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: "Oracle Fusion Financials Training in Hyderabad | 100% Job-Assured | FusionERPTraining.com",
  description:
    "Oracle Fusion Financials training in Hyderabad. 100% Job-Assured program with live Oracle Cloud labs, P2P, O2C & R2R business cycles, 15+ years expert mentors, ATS resume and 1-on-1 mock interviews. Book a free career consultation.",
  keywords: [
    "Oracle Fusion Financials Training in Hyderabad",
    "Oracle Fusion Finance Training",
    "Oracle Fusion Financials Online Training",
    "Oracle Fusion Training Institute Kukatpally",
    "Oracle Cloud Financials Course",
    "Oracle Fusion ERP Certification",
    "Procure to Pay P2P",
    "Order to Cash O2C",
    "Record to Report R2R",
  ],
  openGraph: {
    title: "Oracle Fusion Financials Training in Hyderabad | FusionERPTraining.com",
    description:
      "100% Job-Assured Oracle Fusion Financials course with live cloud labs and expert guidance. Book a free 1-on-1 consultation.",
    url: "https://fusionerptraining.com/landing-page",
    siteName: "FusionERPTraining.com",
    type: "website",
    images: [
      {
        url: "https://fusionerptraining.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Oracle Fusion Financials Training in Hyderabad",
      },
    ],
  },
  other: {
    "facebook-domain-verification": "YOUR_VERIFICATION_CODE",
  },
};

export default function LandingPageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {/* Google Tag Manager */}
      <Script
        id="gtm-script"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-T7RGWVZ2');`,
        }}
      />
      <noscript>
        <iframe
          src="https://www.googletagmanager.com/ns.html?id=GTM-T7RGWVZ2"
          height="0"
          width="0"
          style={{ display: "none", visibility: "hidden" }}
        />
      </noscript>
      <div className="landing-page-wrapper">
        {children}
      </div>
    </>
  );
}

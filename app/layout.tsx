import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ScrollToTop from "@/components/layout/ScrollToTop";
import WhatsAppFloatingButton from "@/components/ui/WhatsAppFloatingButton";
import { siteConfig } from "@/lib/site-config";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const viewport: Viewport = {
  themeColor: "#0B1F3A",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "FusionERPTraining.com | Oracle Fusion ERP Training & Certification",
    template: "%s | FusionERPTraining.com",
  },
  description: siteConfig.description,
  keywords: [
    "Oracle Fusion Financials Training",
    "Oracle Cloud ERP Training",
    "Oracle Fusion ERP Certification",
    "Procure to Pay Fusion",
    "Order to Cash Fusion",
    "Record to Report",
    "Oracle Fusion Functional Consultant",
    "ERP Financials Online Course",
  ],
  authors: [{ name: "FusionERPTraining Team" }],
  creator: "FusionERPTraining.com",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: "FusionERPTraining.com | Oracle Fusion ERP Training & Career Guidance",
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "FusionERPTraining.com - Practical Oracle Fusion Cloud Education",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "FusionERPTraining.com | Oracle Fusion ERP Training",
    description: siteConfig.description,
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.png", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} scroll-smooth`}>
      <body className="min-h-screen flex flex-col bg-[#F8FAFC] text-[#0F172A] font-sans selection:bg-[#1769E0] selection:text-white">
        <Navbar />
        <main className="flex-1 w-full">{children}</main>
        <Footer />
        <ScrollToTop />
        <WhatsAppFloatingButton />
      </body>
    </html>
  );
}

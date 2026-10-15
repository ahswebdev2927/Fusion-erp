"use client";

import { usePathname } from "next/navigation";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppFloatingButton from "@/components/ui/WhatsAppFloatingButton";
import CallFloatingButton from "@/components/ui/CallFloatingButton";

export default function SiteShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isLandingPage = pathname?.startsWith("/landing-page");

  if (isLandingPage) {
    return <main className="w-full">{children}</main>;
  }

  return (
    <>
      <Navbar />
      <main className="flex-1 w-full">{children}</main>
      <Footer />
      <CallFloatingButton />
      <WhatsAppFloatingButton />
    </>
  );
}

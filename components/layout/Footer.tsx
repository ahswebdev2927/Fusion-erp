import React from "react";
import Link from "next/link";
import { Layers, Mail, Phone, MapPin, ShieldCheck } from "lucide-react";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube, FaTwitter } from "react-icons/fa";
import Container from "@/components/ui/Container";
import { footerLinks } from "@/lib/navigation";
import { siteConfig } from "@/lib/site-config";

export default function Footer() {
  return (
    <footer className="bg-[#0B1F3A] text-slate-300 pt-16 pb-12 border-t border-slate-800">
      <Container size="xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-14 border-b border-slate-800/80">
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-4">
            <Link
              href="/"
              className="inline-block group focus-visible:ring-2 focus-visible:ring-[#1D63ED] rounded-xl"
              aria-label="FusionERPTraining.com Homepage"
            >
              <div className="bg-white px-4 py-2.5 rounded-xl shadow-md border border-slate-200/20 transition-all group-hover:scale-[1.01] w-fit max-w-[240px] sm:max-w-[260px]">
                <img
                  src="/images/logo.png"
                  alt="Fusion ERP Training"
                  className="w-full h-auto max-h-12 object-contain"
                />
              </div>
            </Link>

            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              Practical, career-focused Oracle Fusion Cloud Financials education designed around authentic enterprise business processes, real ledgers, and functional consulting mentorship.
            </p>

            <div className="space-y-2 pt-2 text-xs text-slate-300">
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#2F80ED] shrink-0" />
                <a href={`mailto:${siteConfig.contact.email}`} className="hover:text-white transition-colors">
                  {siteConfig.contact.email}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#22A06B] shrink-0" />
                <a href={`tel:${siteConfig.contact.phone.replace(/[^0-9+]/g, '')}`} className="hover:text-white transition-colors">
                  {siteConfig.contact.phone}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <MapPin className="w-4 h-4 text-slate-400 shrink-0" />
                <span>{siteConfig.contact.location}</span>
              </div>
            </div>

            {/* Social Media Links */}
            <div className="flex items-center gap-2.5 pt-4">
              <a
                href={siteConfig.social.facebook}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-lg bg-slate-800/80 hover:bg-[#1877F2] text-slate-300 hover:text-white flex items-center justify-center transition-all hover:scale-105 shadow-xs"
                aria-label="Facebook page"
                title="Facebook"
              >
                <FaFacebookF className="w-4 h-4" />
              </a>
              <a
                href={siteConfig.social.instagram}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-lg bg-slate-800/80 hover:bg-gradient-to-tr hover:from-[#F58529] hover:via-[#DD2A7B] hover:to-[#8134AF] text-slate-300 hover:text-white flex items-center justify-center transition-all hover:scale-105 shadow-xs"
                aria-label="Instagram profile"
                title="Instagram"
              >
                <FaInstagram className="w-4 h-4" />
              </a>
              {/* 
              <a
                href={siteConfig.social.linkedin}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-lg bg-slate-800/80 hover:bg-[#0A66C2] text-slate-300 hover:text-white flex items-center justify-center transition-all hover:scale-105 shadow-xs"
                aria-label="LinkedIn profile"
                title="LinkedIn"
              >
                <FaLinkedinIn className="w-4 h-4" />
              </a>
              <a
                href={siteConfig.social.youtube}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-lg bg-slate-800/80 hover:bg-[#FF0000] text-slate-300 hover:text-white flex items-center justify-center transition-all hover:scale-105 shadow-xs"
                aria-label="YouTube Channel"
                title="YouTube"
              >
                <FaYoutube className="w-4 h-4" />
              </a>
              <a
                href={siteConfig.social.twitter}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-lg bg-slate-800/80 hover:bg-[#1D9BF0] text-slate-300 hover:text-white flex items-center justify-center transition-all hover:scale-105 shadow-xs"
                aria-label="Twitter profile"
                title="Twitter"
              >
                <FaTwitter className="w-4 h-4" />
              </a>
              */}
            </div>
          </div>

          {/* Column 2: Training */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
              Training
            </h3>
            <ul className="space-y-2.5 text-sm">
              {footerLinks.training.map((link) => (
                <li key={link.href + link.label}>
                  <Link
                    href={link.href}
                    className="text-slate-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Company */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
              Company
            </h3>
            <ul className="space-y-2.5 text-sm">
              {footerLinks.company.map((link) => (
                <li key={link.href + link.label}>
                  <Link
                    href={link.href}
                    className="text-slate-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Resources & Legal */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
              Resources & Legal
            </h3>
            <ul className="space-y-2.5 text-sm mb-6">
              {footerLinks.resources.map((link) => (
                <li key={link.href + link.label}>
                  <Link
                    href={link.href}
                    className="text-slate-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            <h4 className="text-white font-semibold text-xs uppercase tracking-wider mb-2">
              Policies
            </h4>
            <ul className="space-y-2 text-xs">
              {footerLinks.legal.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-slate-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Trust & Copyright Row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-[#22A06B]" />
            <span>
              FusionERPTraining.com is an independent professional training provider. Oracle, Oracle Fusion, and Oracle Cloud are registered trademarks of Oracle Corporation.
            </span>
          </div>
          <div>
            © {new Date().getFullYear()} FusionERPTraining.com. All rights reserved.
          </div>
        </div>
      </Container>
    </footer>
  );
}

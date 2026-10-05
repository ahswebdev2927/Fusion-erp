import React from "react";
import type { Metadata } from "next";
import Container from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy and user data protection commitments for FusionERPTraining.com.",
};

export default function PrivacyPage() {
  return (
    <div className="py-12 sm:py-16">
      <Container size="md">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-[#0B1F3A] mb-4">
          Privacy Policy
        </h1>
        <p className="text-xs text-slate-400 mb-8">Last Updated: October 2026</p>

        <div className="prose prose-slate max-w-none text-sm leading-relaxed text-slate-600 space-y-6">
          <p>
            At <strong>FusionERPTraining.com</strong>, we are committed to respecting and protecting the privacy of our learners, corporate clients, and visitors. This Privacy Policy outlines our transparent policies regarding the collection, use, and disclosure of personal information.
          </p>

          <h2 className="text-lg font-bold text-[#0B1F3A] pt-4">1. Information We Collect</h2>
          <p>
            When you submit a contact enquiry, book a consultation, or register for an Oracle Fusion training cohort, we collect personal information you explicitly provide:
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Contact details such as name, email address, and phone/WhatsApp number.</li>
            <li>Professional background information such as current role, degrees, and ERP experience.</li>
            <li>Questions or schedule preferences you share with our advisory team.</li>
          </ul>

          <h2 className="text-lg font-bold text-[#0B1F3A] pt-4">2. How We Use Your Information</h2>
          <p>
            We strictly use collected information to:
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Deliver personalized educational counseling and assess course compatibility.</li>
            <li>Coordinate cohort scheduling, syllabus walkthroughs, and mock interview slots.</li>
            <li>Provide course updates, lab credentials, and educational support materials.</li>
            <li>Comply with necessary accounting, billing, and legal requirements.</li>
          </ul>

          <h2 className="text-lg font-bold text-[#0B1F3A] pt-4">3. We Never Sell Your Data</h2>
          <p>
            FusionERPTraining.com has a zero-tolerance spam policy. We never sell, rent, trade, or distribute your email address, phone number, or personal details to third-party marketing lists, lead aggregators, or unauthorized recruitment agencies.
          </p>

          <h2 className="text-lg font-bold text-[#0B1F3A] pt-4">4. Security</h2>
          <p>
            We employ industry-standard encryption, firewalls, and access protocols to protect your personal information against unauthorized disclosure or loss.
          </p>

          <h2 className="text-lg font-bold text-[#0B1F3A] pt-4">5. Contact Us</h2>
          <p>
            If you have questions or wish to request data deletion, contact us at: <strong>fusionsrikanth.erp@gmail.com</strong>.
          </p>
        </div>
      </Container>
    </div>
  );
}

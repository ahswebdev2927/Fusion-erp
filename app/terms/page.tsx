import React from "react";
import type { Metadata } from "next";
import Container from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: "Terms and conditions governing course participation and materials at FusionERPTraining.com.",
};

export default function TermsPage() {
  return (
    <div className="py-12 sm:py-16">
      <Container size="md">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-[#0B1F3A] mb-4">
          Terms & Conditions
        </h1>
        <p className="text-xs text-slate-400 mb-8">Last Updated: October 2026</p>

        <div className="prose prose-slate max-w-none text-sm leading-relaxed text-slate-600 space-y-6">
          <p>
            Welcome to <strong>FusionERPTraining.com</strong>. By accessing our website, attending webinars, or enrolling in training programs, you agree to comply with and be bound by the following terms and conditions.
          </p>

          <h2 className="text-lg font-bold text-[#0B1F3A] pt-4">1. Independent Educational Provider</h2>
          <p>
            FusionERPTraining.com is an independent professional educational provider. <strong>Oracle, Oracle Cloud, Oracle Fusion, and Oracle E-Business Suite</strong> are registered trademarks of Oracle Corporation. FusionERPTraining.com is not affiliated with, sponsored by, or endorsed by Oracle Corporation unless expressly stated.
          </p>

          <h2 className="text-lg font-bold text-[#0B1F3A] pt-4">2. Ethical Career & Placement Disclaimer</h2>
          <p>
            We prepare learners with authentic enterprise knowledge, business workflows, project portfolio guidance, and rigorous mock interview rounds. We do NOT offer or promise guaranteed job placements, guaranteed salaries, or proxy interview services. Learner employment outcomes depend on individual dedication, market conditions, and interview performance.
          </p>

          <h2 className="text-lg font-bold text-[#0B1F3A] pt-4">3. Intellectual Property & Training Materials</h2>
          <p>
            All custom course slide decks, lab sheets, video recordings, and mock scenarios provided during training are the intellectual property of FusionERPTraining.com and are licensed solely for the personal, non-commercial educational use of the enrolled learner.
          </p>

          <h2 className="text-lg font-bold text-[#0B1F3A] pt-4">4. Sandbox & Lab Instances</h2>
          <p>
            Cloud lab environments are provided for training and practice simulations. Learners agree not to use training instances for illegal purposes, commercial hosting, or unauthorized data export.
          </p>

          <h2 className="text-lg font-bold text-[#0B1F3A] pt-4">5. Governing Law</h2>
          <p>
            These terms are governed by the laws applicable to enterprise educational services. For any disputes or inquiries, contact <strong>fusionerptraining@gmail.com</strong>.
          </p>
        </div>
      </Container>
    </div>
  );
}

import React from "react";
import Hero from "@/components/Home/Hero";
import TrustBar from "@/components/Home/TrustBar";
import ProblemSolution from "@/components/Home/ProblemSolution";
import WhyChooseUs from "@/components/Home/WhyChooseUs";
import TrainingPath from "@/components/Home/TrainingPath";
import ModulesGrid from "@/components/Home/ModulesGrid";
import BusinessProcesses from "@/components/Home/BusinessProcesses";
import HandsOnLearning from "@/components/Home/HandsOnLearning";
import AudienceSection from "@/components/Home/AudienceSection";
import LearningExperience from "@/components/Home/LearningExperience";
import CareerSupport from "@/components/Home/CareerSupport";
import Instructor from "@/components/Home/Instructor";
import Testimonials from "@/components/Home/Testimonials";
import FAQPreview from "@/components/Home/FAQPreview";
import FinalCTA from "@/components/Home/FinalCTA";

export default function HomePage() {
  return (
    <>
      {/* 1. Hero */}
      <Hero />

      {/* 2. Trust Bar */}
      <TrustBar />

      {/* 3. Problem / Solution Transformation */}
      <ProblemSolution />

      {/* 4. Why Fusion ERP Training */}
      <WhyChooseUs />

      {/* 5. Structured Training Program Path */}
      <TrainingPath />

      {/* 6. Oracle Fusion Financials 12-Module Matrix */}
      <ModulesGrid />

      {/* 7. Real Business Processes (P2P, O2C, R2R) */}
      <BusinessProcesses />

      {/* 8. Hands-On Cloud Sandbox Environment */}
      <HandsOnLearning />

      {/* 9. Target Audience Personas */}
      <AudienceSection />

      {/* 10. The Mentorship Learning Experience */}
      <LearningExperience />

      {/* 11. Career & Interview Support */}
      <CareerSupport />

      {/* 12. Instructor Credentials & Industry Stats */}
      <Instructor />

      {/* 13. Testimonials & Learner Reviews */}
      <Testimonials />

      {/* 14. Frequently Asked Questions */}
      <FAQPreview />

      {/* 15. Final High-Trust Conversion CTA */}
      <FinalCTA />
    </>
  );
}

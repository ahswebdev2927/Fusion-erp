"use client";

import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { CheckCircle2, ShieldCheck, Sparkles, ArrowRight } from "lucide-react";
import Container from "@/components/ui/Container";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";

const DemoSchema = Yup.object().shape({
  name: Yup.string().trim().required("Your full name is required"),
  phone: Yup.string().trim().min(7, "Valid phone or WhatsApp number is required").required("Phone number is required"),
  email: Yup.string().trim().email("Valid email required").required("Email is required"),
  experience: Yup.string().required("Please select your background level"),
  currentRole: Yup.string().trim(),
});

export default function BookDemoPage() {
  const [isBooked, setIsBooked] = useState(false);

  return (
    <div className="py-16 sm:py-24 bg-tech-mesh min-h-screen">
      <Container size="md">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-mono font-bold uppercase tracking-wider text-[#1D63ED] bg-blue-50 border border-blue-200 mb-4 shadow-xs">
            <Sparkles className="w-3.5 h-3.5" />
            FREE 1-ON-1 ADVISORY CALL
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0A192F] tracking-tight leading-tight mb-4">
            Let&apos;s Find the Right Learning Path for You.
          </h1>
          <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-normal">
            Schedule a personalized 15-minute phone or video conversation with a senior Oracle Cloud advisor.
          </p>

          <div className="mt-4 inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white border-2 border-slate-200 text-xs sm:text-sm font-bold text-slate-800 shadow-sm">
            <ShieldCheck className="w-4 h-4 text-[#059669]" />
            <span>No pressure. Just a conversation about your career goals.</span>
          </div>
        </div>

        <div className="p-8 sm:p-12 shadow-elevation-2 border-2 border-slate-300 rounded-3xl max-w-xl mx-auto bg-white">
          {isBooked ? (
            <div className="py-10 text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-50 text-[#059669] border border-emerald-200 flex items-center justify-center mx-auto shadow-sm">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h2 className="text-2xl font-black text-[#0A192F]">
                Consultation Request Received!
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed max-w-md mx-auto">
                Thank you! Your details have been formatted and directed to our WhatsApp admissions desk (+91 92479 54331). We look forward to connecting with you.
              </p>
              <div className="pt-2 flex flex-col sm:flex-row justify-center gap-3">
                <a
                  href="https://wa.me/919247954331"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-[#059669] text-white font-bold text-sm shadow-sm hover:bg-[#047857] transition-colors"
                >
                  Open WhatsApp Chat
                </a>
                <Button href="/" variant="outline">
                  Return to Homepage
                </Button>
              </div>
            </div>
          ) : (
            <Formik
              initialValues={{
                name: "",
                phone: "",
                email: "",
                experience: "Finance / Accounting Graduate",
                currentRole: "",
              }}
              validationSchema={DemoSchema}
              onSubmit={(values, { setSubmitting }) => {
                const message = [
                  `*New Demo & Consultation Request - FusionERPTraining*`,
                  ``,
                  `*Name:* ${values.name}`,
                  `*Phone/WhatsApp:* ${values.phone}`,
                  `*Email:* ${values.email}`,
                  `*Background Level:* ${values.experience}`,
                  values.currentRole ? `*Current Role:* ${values.currentRole}` : null,
                ]
                  .filter(Boolean)
                  .join("\n");

                const whatsappUrl = `https://wa.me/919247954331?text=${encodeURIComponent(message)}`;

                setSubmitting(false);
                setIsBooked(true);

                // Open WhatsApp chat in a new tab/window
                if (typeof window !== "undefined") {
                  window.open(whatsappUrl, "_blank", "noopener,noreferrer");
                }
              }}
            >
              {({ isSubmitting }) => (
                <Form className="space-y-5">
                  <div>
                    <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-1.5">
                      Full Name *
                    </label>
                    <Field
                      name="name"
                      type="text"
                      placeholder="Jane Smith"
                      className="w-full px-4 py-3 rounded-xl border-2 border-slate-300 text-sm focus:outline-none focus:border-[#1D63ED] focus:ring-2 focus:ring-[#1D63ED]/20 font-medium text-slate-900 bg-white"
                    />
                    <ErrorMessage name="name" component="div" className="text-xs text-rose-600 font-bold mt-1" />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-1.5">
                        Phone / WhatsApp *
                      </label>
                      <Field
                        name="phone"
                        type="text"
                        placeholder="+91 92479 54331"
                        className="w-full px-4 py-3 rounded-xl border-2 border-slate-300 text-sm focus:outline-none focus:border-[#1D63ED] focus:ring-2 focus:ring-[#1D63ED]/20 font-medium text-slate-900 bg-white"
                      />
                      <ErrorMessage name="phone" component="div" className="text-xs text-rose-600 font-bold mt-1" />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-1.5">
                        Email Address *
                      </label>
                      <Field
                        name="email"
                        type="email"
                        placeholder="jane@example.com"
                        className="w-full px-4 py-3 rounded-xl border-2 border-slate-300 text-sm focus:outline-none focus:border-[#1D63ED] focus:ring-2 focus:ring-[#1D63ED]/20 font-medium text-slate-900 bg-white"
                      />
                      <ErrorMessage name="email" component="div" className="text-xs text-rose-600 font-bold mt-1" />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-1.5">
                        Background Level *
                      </label>
                      <div className="relative">
                        <Field
                          as="select"
                          name="experience"
                          className="w-full px-4 py-3 rounded-xl border-2 border-slate-300 text-sm focus:outline-none focus:border-[#1D63ED] focus:ring-2 focus:ring-[#1D63ED]/20 font-medium text-slate-900 bg-white cursor-pointer"
                        >
                          <option value="Any Graduate">Any Graduate</option>
                          <option value="Finance / Accounting Graduate">Finance / Accounting Graduate</option>
                          <option value="Commerce Graduate">Commerce Graduate</option>
                          <option value="MBA / Management">MBA / Management</option>
                          <option value="CA / CMA / ACCA">CA / CMA / ACCA</option>
                          <option value="Engineering Graduate">Engineering Graduate</option>
                          <option value="Other Graduate">Other Graduate</option>
                          <option value="Postgraduate">Postgraduate</option>
                          <option value="Working Professional">Working Professional</option>
                        </Field>
                      </div>
                      <ErrorMessage name="experience" component="div" className="text-xs text-rose-600 font-bold mt-1" />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-1.5">
                        Current Role (Optional)
                      </label>
                      <Field
                        name="currentRole"
                        type="text"
                        placeholder="e.g. Accountant, Financial Analyst"
                        className="w-full px-4 py-3 rounded-xl border-2 border-slate-300 text-sm focus:outline-none focus:border-[#1D63ED] focus:ring-2 focus:ring-[#1D63ED]/20 font-medium text-slate-900 bg-white"
                      />
                    </div>
                  </div>

                  <div className="pt-2">
                    <Button
                      type="submit"
                      variant="primary"
                      size="lg"
                      className="w-full text-center"
                      disabled={isSubmitting}
                      icon={<ArrowRight className="w-4 h-4" />}
                    >
                      {isSubmitting ? "Reserving Slot..." : "Confirm Free Consultation Request"}
                    </Button>
                  </div>
                </Form>
              )}
            </Formik>
          )}
        </div>
      </Container>
    </div>
  );
}

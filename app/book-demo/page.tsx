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
  experience: Yup.string().required("Please select your background"),
  currentRole: Yup.string().trim(),
  preferredSchedule: Yup.string().required("Please select your preferred schedule"),
  question: Yup.string().trim(),
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
              <p className="text-sm text-slate-600 leading-relaxed">
                Thank you. We have received your schedule request. An advisor will reach out via WhatsApp or email within a few hours to confirm the exact time slot that works best for you.
              </p>
              <Button href="/" variant="primary" className="mt-4">
                Return to Homepage
              </Button>
            </div>
          ) : (
            <Formik
              initialValues={{
                name: "",
                phone: "",
                email: "",
                experience: "Finance / Accounting Graduate",
                currentRole: "",
                preferredSchedule: "Weekend Morning (EST / IST)",
                question: "",
              }}
              validationSchema={DemoSchema}
              onSubmit={(values, { setSubmitting }) => {
                console.log("Book Demo submission:", values);
                setTimeout(() => {
                  setSubmitting(false);
                  setIsBooked(true);
                }, 500);
              }}
            >
              {({ isSubmitting }) => (
                <Form className="space-y-4.5">
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
                        placeholder="+1 (555) 123-4567"
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
                      <Field
                        as="select"
                        name="experience"
                        className="w-full px-4 py-3 rounded-xl border-2 border-slate-300 text-sm focus:outline-none focus:border-[#1D63ED] focus:ring-2 focus:ring-[#1D63ED]/20 font-medium text-slate-900 bg-white"
                      >
                        <option value="Finance / Accounting Graduate">Finance / Accounting Graduate</option>
                        <option value="Working Accountant / Controller">Working Accountant / Controller</option>
                        <option value="Oracle EBS R12 Consultant">Oracle EBS R12 Consultant</option>
                        <option value="Other ERP Consultant (SAP/NetSuite)">Other ERP Consultant (SAP/NetSuite)</option>
                        <option value="Career Switcher / Career Gap">Career Switcher / Career Gap</option>
                      </Field>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-1.5">
                        Preferred Timing *
                      </label>
                      <Field
                        as="select"
                        name="preferredSchedule"
                        className="w-full px-4 py-3 rounded-xl border-2 border-slate-300 text-sm focus:outline-none focus:border-[#1D63ED] focus:ring-2 focus:ring-[#1D63ED]/20 font-medium text-slate-900 bg-white"
                      >
                        <option value="Weekend Morning (EST / IST)">Weekend Morning (EST / IST)</option>
                        <option value="Weekend Evening (EST / IST)">Weekend Evening (EST / IST)</option>
                        <option value="Weekday Evening (EST / IST)">Weekday Evening (EST / IST)</option>
                        <option value="Any Flexible Time Slot">Any Flexible Time Slot</option>
                      </Field>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-1.5">
                      Current Role (Optional)
                    </label>
                    <Field
                      name="currentRole"
                      type="text"
                      placeholder="e.g. Accounts Payable Specialist, MBA Student"
                      className="w-full px-4 py-3 rounded-xl border-2 border-slate-300 text-sm focus:outline-none focus:border-[#1D63ED] focus:ring-2 focus:ring-[#1D63ED]/20 font-medium text-slate-900 bg-white"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-1.5">
                      What is your biggest question? (Optional)
                    </label>
                    <Field
                      as="textarea"
                      name="question"
                      rows={3}
                      placeholder="Tell us what you'd like clarity on during our call..."
                      className="w-full px-4 py-3 rounded-xl border-2 border-slate-300 text-sm focus:outline-none focus:border-[#1D63ED] focus:ring-2 focus:ring-[#1D63ED]/20 font-medium text-slate-900 bg-white"
                    />
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

"use client";

import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { CheckCircle2, ShieldCheck, Mail, Phone, Clock, Send, Sparkles } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import { siteConfig } from "@/lib/site-config";

const ContactSchema = Yup.object().shape({
  name: Yup.string().trim().required("Full name is required"),
  email: Yup.string().trim().email("Please enter a valid email address").required("Email is required"),
  phone: Yup.string()
    .trim()
    .min(7, "Please enter a valid phone number")
    .required("Phone number is required"),
  currentRole: Yup.string().trim(),
  experienceLevel: Yup.string().required("Please select your background level"),
  interestedTraining: Yup.string().required("Please select a training interest"),
  message: Yup.string().trim(),
});

export default function ContactPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  return (
    <div className="py-16 sm:py-24 bg-tech-mesh min-h-screen">
      <Container size="xl">
        <div className="max-w-3xl mb-14">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-mono font-bold uppercase tracking-wider text-[#1D63ED] bg-blue-50 border border-blue-200 mb-4 shadow-xs">
            LET&apos;S CONNECT
          </span>
          <h1 className="text-4xl sm:text-5xl font-black text-[#0A192F] tracking-tight leading-tight mb-4">
            Let&apos;s Talk About Your Learning Goals
          </h1>
          <p className="text-lg text-slate-700 leading-relaxed font-normal">
            Have questions about whether your background aligns with Oracle Fusion Consulting? Reach out directly. We provide clear, objective guidance without pressure.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start mb-20">
          {/* Contact Details & Direct Help */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-8 sm:p-9 bg-white border-2 border-slate-300 rounded-2xl shadow-card">
              <h3 className="text-xl font-black text-[#0A192F] mb-4">
                Admissions & Advising Office
              </h3>
              <p className="text-sm text-slate-600 mb-6 leading-relaxed">
                Connect with our senior program coordinator for batch dates, cohort syllabus walk-throughs, and individual profile reviews.
              </p>

              <div className="space-y-4 text-sm text-slate-800 font-medium">
                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-[#1D63ED] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold block text-xs uppercase text-slate-500 font-mono">Email Admissions</span>
                    <a href={`mailto:${siteConfig.contact.email}`} className="text-slate-900 font-bold hover:text-[#1D63ED]">
                      {siteConfig.contact.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-[#059669] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold block text-xs uppercase text-slate-500 font-mono">Phone / WhatsApp</span>
                    <a href={`tel:${siteConfig.contact.phone.replace(/[^0-9+]/g, '')}`} className="text-slate-900 font-bold hover:text-[#1D63ED]">
                      {siteConfig.contact.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-slate-500 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold block text-xs uppercase text-slate-500 font-mono">Counseling Hours</span>
                    <span>{siteConfig.contact.hours}</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-white border-2 border-slate-200 text-xs text-slate-700 space-y-2.5 shadow-2xs">
              <div className="flex items-center gap-2 font-black text-[#0A192F] text-sm">
                <ShieldCheck className="w-5 h-5 text-[#059669]" />
                <span>Our Communication Promise</span>
              </div>
              <p className="font-medium">
                We do not spam, we do not sell your contact details to third parties, and we never call repeatedly with high-pressure sales scripts.
              </p>
            </div>
          </div>

          {/* Formik Form Container */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 shadow-elevation-2 border-2 border-slate-300 rounded-3xl bg-white">
              {isSubmitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-50 text-[#059669] border border-emerald-200 flex items-center justify-center mx-auto shadow-sm">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-black text-[#0A192F]">
                    Enquiry Received Successfully!
                  </h3>
                  <p className="text-slate-600 max-w-md mx-auto text-sm leading-relaxed">
                    Thank you for reaching out. One of our senior advisors will review your background and respond within 24 business hours.
                  </p>
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => setIsSubmitted(false)}
                    className="mt-4"
                  >
                    Send Another Message
                  </Button>
                </div>
              ) : (
                <Formik
                  initialValues={{
                    name: "",
                    email: "",
                    phone: "",
                    currentRole: "",
                    experienceLevel: "Finance Graduate (B.Com/MBA)",
                    interestedTraining: "Oracle Fusion Financials (Comprehensive)",
                    message: "",
                  }}
                  validationSchema={ContactSchema}
                  onSubmit={(values, { setSubmitting }) => {
                    console.log("Contact form submission:", values);
                    setTimeout(() => {
                      setSubmitting(false);
                      setIsSubmitted(true);
                    }, 500);
                  }}
                >
                  {({ isSubmitting }) => (
                    <Form className="space-y-4 text-left">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-1.5">
                            Full Name *
                          </label>
                          <Field
                            name="name"
                            type="text"
                            placeholder="John Doe"
                            className="w-full px-4 py-2.5 rounded-xl border-2 border-slate-300 text-sm focus:outline-none focus:border-[#1D63ED] focus:ring-2 focus:ring-[#1D63ED]/20 font-medium text-slate-900 bg-white"
                          />
                          <ErrorMessage name="name" component="div" className="text-xs text-rose-600 font-bold mt-1" />
                        </div>

                        <div>
                          <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-1.5">
                            Email Address *
                          </label>
                          <Field
                            name="email"
                            type="email"
                            placeholder="john@example.com"
                            className="w-full px-4 py-2.5 rounded-xl border-2 border-slate-300 text-sm focus:outline-none focus:border-[#1D63ED] focus:ring-2 focus:ring-[#1D63ED]/20 font-medium text-slate-900 bg-white"
                          />
                          <ErrorMessage name="email" component="div" className="text-xs text-rose-600 font-bold mt-1" />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-1.5">
                            Phone / WhatsApp *
                          </label>
                          <Field
                            name="phone"
                            type="text"
                            placeholder="+1 (555) 000-0000"
                            className="w-full px-4 py-2.5 rounded-xl border-2 border-slate-300 text-sm focus:outline-none focus:border-[#1D63ED] focus:ring-2 focus:ring-[#1D63ED]/20 font-medium text-slate-900 bg-white"
                          />
                          <ErrorMessage name="phone" component="div" className="text-xs text-rose-600 font-bold mt-1" />
                        </div>

                        <div>
                          <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-1.5">
                            Current Role / Background
                          </label>
                          <Field
                            name="currentRole"
                            type="text"
                            placeholder="e.g. Accountant, Student, EBS Developer"
                            className="w-full px-4 py-2.5 rounded-xl border-2 border-slate-300 text-sm focus:outline-none focus:border-[#1D63ED] focus:ring-2 focus:ring-[#1D63ED]/20 font-medium text-slate-900 bg-white"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-1.5">
                            Experience Level *
                          </label>
                          <Field
                            as="select"
                            name="experienceLevel"
                            className="w-full px-4 py-2.5 rounded-xl border-2 border-slate-300 text-sm focus:outline-none focus:border-[#1D63ED] focus:ring-2 focus:ring-[#1D63ED]/20 font-medium text-slate-900 bg-white"
                          >
                            <option value="Finance Graduate (B.Com/MBA)">Finance Graduate (B.Com / MBA)</option>
                            <option value="Practicing Accountant / CA Inter">Practicing Accountant / CA Inter</option>
                            <option value="Oracle EBS / Legacy ERP Consultant">Oracle EBS / Legacy ERP Consultant</option>
                            <option value="Career Switcher / Transitioning">Career Switcher / Transitioning</option>
                            <option value="Returning After Career Gap">Returning After Career Gap</option>
                          </Field>
                        </div>

                        <div>
                          <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-1.5">
                            Interested Training *
                          </label>
                          <Field
                            as="select"
                            name="interestedTraining"
                            className="w-full px-4 py-2.5 rounded-xl border-2 border-slate-300 text-sm focus:outline-none focus:border-[#1D63ED] focus:ring-2 focus:ring-[#1D63ED]/20 font-medium text-slate-900 bg-white"
                          >
                            <option value="Oracle Fusion Financials (Comprehensive)">Oracle Fusion Financials (Comprehensive)</option>
                            <option value="Weekend Professional Batch">Weekend Professional Batch</option>
                            <option value="Corporate Team Upskilling">Corporate Team Upskilling</option>
                            <option value="Career Mentorship & Mocks Only">Career Mentorship & Mocks Only</option>
                          </Field>
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-1.5">
                          Questions or Details About Your Goals
                        </label>
                        <Field
                          as="textarea"
                          name="message"
                          rows={4}
                          placeholder="Tell us what you are hoping to achieve, your preferred timings, or specific questions about the syllabus..."
                          className="w-full px-4 py-2.5 rounded-xl border-2 border-slate-300 text-sm focus:outline-none focus:border-[#1D63ED] focus:ring-2 focus:ring-[#1D63ED]/20 font-medium text-slate-900 bg-white"
                        />
                      </div>

                      <div className="pt-2">
                        <Button
                          type="submit"
                          variant="primary"
                          size="lg"
                          className="w-full text-center"
                          disabled={isSubmitting}
                          icon={<Send className="w-4 h-4" />}
                        >
                          {isSubmitting ? "Sending..." : "Submit Enquiry"}
                        </Button>
                      </div>

                      <p className="text-center text-xs text-slate-500 pt-2 font-medium">
                        No spam. No aggressive follow-ups. Just an honest conversation about your goals.
                      </p>
                    </Form>
                  )}
                </Formik>
              )}
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

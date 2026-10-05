import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Clock, ArrowRight } from "lucide-react";
import Container from "@/components/ui/Container";
import { blogPosts } from "@/lib/faq";

export const metadata: Metadata = {
  title: "Oracle Fusion Articles & ERP Career Resources",
  description:
    "Expert articles on Oracle Fusion Financials workflows, P2P and O2C deep dives, EBS-to-Cloud migration tips, and consulting interview guides.",
};

export default function BlogPage() {
  return (
    <div className="py-16 sm:py-24 bg-tech-mesh min-h-screen">
      <Container size="xl">
        <div className="max-w-3xl mb-14">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-mono font-bold uppercase tracking-wider text-[#1D63ED] bg-blue-50 border border-blue-200 mb-4 shadow-xs">
            KNOWLEDGE HUB & ARTICLES
          </span>
          <h1 className="text-4xl sm:text-5xl font-black text-[#0A192F] tracking-tight leading-tight mb-4">
            Oracle Fusion ERP Insights & Career Guides
          </h1>
          <p className="text-lg text-slate-700 leading-relaxed font-normal">
            Practical architectural tutorials, real client scenario explanations, and strategic career advice written by enterprise Oracle consultants.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {blogPosts.map((post) => (
            <div
              key={post.slug}
              className="p-8 sm:p-9 bg-white border-2 border-slate-300 rounded-2xl shadow-card hover:shadow-card-hover hover:border-[#1D63ED] flex flex-col justify-between transition-all group"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="text-xs font-mono font-bold text-[#1D63ED] bg-blue-50 px-2.5 py-1 rounded border border-blue-200">
                    {post.category}
                  </span>
                  <div className="flex items-center gap-2 text-xs font-mono font-semibold text-slate-500">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-slate-400" />
                      {post.readTime}
                    </span>
                    <span>•</span>
                    <span>{post.publishDate}</span>
                  </div>
                </div>

                <h2 className="text-xl sm:text-2xl font-black text-[#0A192F] mb-3 group-hover:text-[#1D63ED] transition-colors leading-snug tracking-tight">
                  {post.title}
                </h2>

                <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-6 font-normal">
                  {post.excerpt}
                </p>
              </div>

              <div className="pt-4 border-t-2 border-slate-100 flex items-center justify-between text-xs">
                <div>
                  <span className="font-bold text-slate-900 block text-sm">
                    {post.author.name}
                  </span>
                  <span className="text-slate-500 font-medium">{post.author.role}</span>
                </div>
                <div className="inline-flex items-center gap-1.5 font-bold text-[#1D63ED] group-hover:translate-x-1 transition-transform">
                  <span>Read Article</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}

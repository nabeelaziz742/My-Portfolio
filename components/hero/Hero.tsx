"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Database,
  ShieldCheck,
  FileDown,
  Terminal,
  Server,
  CheckCircle,
  Briefcase,
  ChevronRight,
} from "lucide-react";
import { portfolioData } from "@/data/portfolio";
import { TypeAnimation } from "react-type-animation";

export default function Hero() {
  return (
    <section className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 overflow-hidden bg-[#081522]">
      {/* Background Subtle Tech Grid & Radial Glow */}
      <div className="absolute inset-0 bg-grid-pattern [mask-image:radial-gradient(ellipse_75%_65%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none opacity-80" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#20B8A5]/8 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Heading, Positioning, Typing Terminal & CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 text-center lg:text-left space-y-6"
          >
            {/* Status & Experience Badge */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#122638] border border-[#263E50] shadow-sm">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#20B8A5] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#20B8A5]"></span>
                </span>
                <span className="text-xs font-mono font-medium text-[#A5B7C3] tracking-wider uppercase">
                  Available for Backend Roles
                </span>
              </div>

              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#122638] border border-[#263E50] text-xs font-mono text-[#20B8A5]">
                <Briefcase className="w-3.5 h-3.5 text-[#20B8A5]" />
                <span>6 Months Ex-Nexrupt Technologies</span>
              </div>
            </div>

            {/* Main Title & Role Positioning */}
            <div className="space-y-3">
              <p className="text-sm font-mono text-[#20B8A5] font-medium tracking-wide">
                HELLO WORLD, I'M {portfolioData.personal.name.toUpperCase()}
              </p>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#EAF2F5] font-space leading-[1.1]">
                Python Django{" "}
                <span className="text-[#20B8A5]">
                  Backend Developer
                </span>
              </h1>

              {/* Dynamic Terminal Subtitle */}
              <div className="text-sm sm:text-base text-[#A5B7C3] font-mono h-8 flex items-center justify-center lg:justify-start gap-2">
                <span className="text-[#20B8A5] font-bold">&gt;</span>
                <TypeAnimation
                  sequence={[
                    "Building Scalable REST APIs with Django & DRF",
                    2200,
                    "Relational Modeling: PostgreSQL, MySQL & Django ORM",
                    2200,
                    "Implementing JWT Auth & Multi-Tenant RBAC Security",
                    2200,
                    "Systematic API Debugging with Postman in Agile Teams",
                    2200,
                  ]}
                  wrapper="span"
                  speed={55}
                  repeat={Infinity}
                  className="text-[#EAF2F5]"
                />
              </div>

              <p className="text-base text-[#A5B7C3] font-normal max-w-xl mx-auto lg:mx-0 leading-relaxed pt-1">
                {portfolioData.personal.tagline} Experienced in building production systems with 
                clean data serialization, query optimization, and secure API lifecycles.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3.5 pt-2">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold text-[#081522] bg-[#20B8A5] hover:bg-[#35D0BA] shadow-lg shadow-[#20B8A5]/25 transition-all duration-200 group"
              >
                <span>View Real Backend Projects</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href={portfolioData.personal.cvPath}
                download={portfolioData.personal.cvFilename}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold text-[#EAF2F5] bg-[#122638] hover:bg-[#193449] border border-[#263E50] hover:border-[#20B8A5]/50 transition-all"
              >
                <FileDown className="w-4 h-4 text-[#20B8A5]" />
                <span>Download Verified CV</span>
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-1.5 px-4 py-3.5 rounded-xl text-sm font-medium text-[#A5B7C3] hover:text-[#EAF2F5] transition-colors"
              >
                <span>Contact Me</span>
                <ChevronRight className="w-4 h-4" />
              </a>
            </div>

            {/* Key Skill Tags */}
            <div className="pt-3 flex flex-wrap items-center justify-center lg:justify-start gap-2 text-xs font-mono text-[#A5B7C3]">
              <span className="text-[#A5B7C3]/70">Core Stack:</span>
              {["Python", "Django", "DRF", "PostgreSQL", "REST APIs", "JWT", "RBAC"].map((tag) => (
                <span
                  key={tag}
                  className="px-2.5 py-1 rounded-md bg-[#122638] border border-[#263E50] text-[#EAF2F5]"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Right Column: Profile Portrait & Backend Console Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="lg:col-span-5 flex flex-col items-center justify-center gap-6"
          >
            {/* Visual Portrait Card */}
            <div className="relative w-full max-w-[340px] sm:max-w-[380px] group">
              {/* Subtle Teal Ambient Glow */}
              <div className="absolute -inset-1 rounded-3xl bg-[#20B8A5]/20 opacity-40 blur-xl group-hover:opacity-60 transition-opacity duration-500 pointer-events-none" />

              <div className="relative rounded-3xl overflow-hidden bg-[#122638] border border-[#263E50] shadow-2xl p-2">
                <div className="relative aspect-[4/4.6] rounded-2xl overflow-hidden bg-[#081522]">
                  <img
                    src="/profile.jpg"
                    alt="Muhammad Nabeel Aziz — Python Django Backend Developer"
                    className="w-full h-full object-cover object-top filter brightness-105 group-hover:scale-102 transition-transform duration-500"
                  />
                  {/* Bottom Vignette Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#081522] via-transparent to-transparent opacity-85" />

                  {/* Overlaid Badges */}
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs">
                    <div className="bg-[#0D1D2B]/95 px-3 py-1.5 rounded-xl border border-[#263E50] backdrop-blur-md">
                      <p className="font-semibold text-[#EAF2F5] font-space text-xs">
                        Muhammad Nabeel Aziz
                      </p>
                      <p className="text-[10px] text-[#A5B7C3] font-mono">
                        Backend Engineer
                      </p>
                    </div>

                    <div className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl bg-[#20B8A5]/15 border border-[#20B8A5]/35 text-[#20B8A5] font-mono text-[10px]">
                      <CheckCircle className="w-3 h-3" />
                      <span>Verified</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Backend Architecture Status Pill */}
            <div className="grid grid-cols-2 gap-3 w-full max-w-[380px]">
              <div className="bg-[#122638] p-3.5 rounded-2xl border border-[#263E50] flex items-center gap-3">
                <div className="p-2 rounded-xl bg-[#20B8A5]/10 text-[#20B8A5] shrink-0">
                  <Server className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-[10px] text-[#A5B7C3] font-mono uppercase">Primary Engine</p>
                  <p className="text-xs font-semibold text-[#EAF2F5]">Django & DRF</p>
                </div>
              </div>

              <div className="bg-[#122638] p-3.5 rounded-2xl border border-[#263E50] flex items-center gap-3">
                <div className="p-2 rounded-xl bg-[#20B8A5]/10 text-[#20B8A5] shrink-0">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-[10px] text-[#A5B7C3] font-mono uppercase">Security</p>
                  <p className="text-xs font-semibold text-[#EAF2F5]">JWT & RBAC</p>
                </div>
              </div>
            </div>

          </motion.div>
        </div>

        {/* Real Performance & Experience Metrics Banner */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-16 max-w-6xl mx-auto"
        >
          {portfolioData.metrics.map((metric, i) => (
            <div
              key={i}
              className="bg-[#122638] hover:bg-[#193449] p-5 rounded-2xl border border-[#263E50] hover:border-[#20B8A5]/40 transition-all duration-200 relative overflow-hidden"
            >
              <div className="flex items-baseline justify-between mb-1">
                <span className="text-2xl sm:text-3xl font-bold font-space text-[#EAF2F5]">
                  {metric.value}
                </span>
                <span className="w-2 h-2 rounded-full bg-[#20B8A5]" />
              </div>
              <p className="text-xs font-semibold text-[#EAF2F5] tracking-tight">
                {metric.label}
              </p>
              <p className="text-[11px] text-[#A5B7C3] font-mono mt-0.5">
                {metric.subtext}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
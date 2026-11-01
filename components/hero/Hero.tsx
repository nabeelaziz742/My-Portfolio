"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Database,
  ShieldCheck,
  FileDown,
  Terminal,
  Server,
  Layers,
  CheckCircle,
  Briefcase,
  ChevronRight,
} from "lucide-react";
import { portfolioData } from "@/data/portfolio";
import { TypeAnimation } from "react-type-animation";

export default function Hero() {
  return (
    <section className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 overflow-hidden bg-[#030712]">
      {/* Background Subtle Tech Grid & Radial Glows */}
      <div className="absolute inset-0 bg-grid-pattern [mask-image:radial-gradient(ellipse_75%_65%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none opacity-80" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#3B82F6]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 left-1/4 w-[400px] h-[400px] bg-[#8B5CF6]/10 rounded-full blur-[120px] pointer-events-none" />

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
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0B0F19] border border-white/10 shadow-lg shadow-blue-500/5">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span className="text-xs font-mono font-medium text-[#94A3B8] tracking-wider uppercase">
                  Available for Backend Roles
                </span>
              </div>

              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-[#3B82F6]">
                <Briefcase className="w-3.5 h-3.5" />
                <span>6 Months Ex-Nexrupt Technologies</span>
              </div>
            </div>

            {/* Main Title & Role Positioning */}
            <div className="space-y-3">
              <p className="text-sm font-mono text-[#3B82F6] font-medium tracking-wide">
                HELLO WORLD, I'M {portfolioData.personal.name.toUpperCase()}
              </p>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#F8FAFC] font-space leading-[1.1]">
                Python Django{" "}
                <span className="bg-gradient-to-r from-[#3B82F6] via-[#60A5FA] to-[#8B5CF6] bg-clip-text text-transparent">
                  Backend Developer
                </span>
              </h1>

              {/* Dynamic Terminal Subtitle */}
              <div className="text-sm sm:text-base text-[#94A3B8] font-mono h-8 flex items-center justify-center lg:justify-start gap-2">
                <span className="text-[#3B82F6] font-bold">&gt;</span>
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
                  className="text-[#F8FAFC]"
                />
              </div>

              <p className="text-base text-[#94A3B8] font-normal max-w-xl mx-auto lg:mx-0 leading-relaxed pt-1">
                {portfolioData.personal.tagline} Experienced in building production systems with 
                clean data serialization, query optimization, and secure API lifecycles.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3.5 pt-2">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-[#3B82F6] via-[#2563EB] to-[#8B5CF6] hover:opacity-95 shadow-xl shadow-[#3B82F6]/25 hover:shadow-[#3B82F6]/40 transition-all duration-300 group"
              >
                <span>View Real Backend Projects</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href={portfolioData.personal.cvPath}
                download={portfolioData.personal.cvFilename}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold text-[#F8FAFC] glass-card glass-card-hover border border-white/10"
              >
                <FileDown className="w-4 h-4 text-[#3B82F6]" />
                <span>Download Verified CV</span>
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-1.5 px-4 py-3.5 rounded-xl text-sm font-medium text-[#94A3B8] hover:text-[#F8FAFC] transition-colors"
              >
                <span>Contact Me</span>
                <ChevronRight className="w-4 h-4" />
              </a>
            </div>

            {/* Key Skill Tags */}
            <div className="pt-3 flex flex-wrap items-center justify-center lg:justify-start gap-2 text-xs font-mono text-[#94A3B8]">
              <span className="text-[#64748B]">Core Stack:</span>
              {["Python", "Django", "DRF", "PostgreSQL", "REST APIs", "JWT", "RBAC"].map((tag) => (
                <span
                  key={tag}
                  className="px-2.5 py-1 rounded-md bg-[#0B0F19] border border-white/5 text-[#CBD5E1]"
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
              {/* Animated Glow Halo */}
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-[#3B82F6] via-[#6366F1] to-[#8B5CF6] opacity-30 blur-xl group-hover:opacity-50 transition-opacity duration-700 pointer-events-none" />

              <div className="relative rounded-3xl overflow-hidden glass-card border border-white/10 shadow-2xl p-2 bg-[#0B0F19]/90">
                <div className="relative aspect-[4/4.6] rounded-2xl overflow-hidden bg-[#030712]">
                  <img
                    src="/profile.jpg"
                    alt="Muhammad Nabeel Aziz — Python Django Backend Developer"
                    className="w-full h-full object-cover object-top filter brightness-105 group-hover:scale-102 transition-transform duration-700"
                  />
                  {/* Bottom Vignette Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#030712] via-transparent to-transparent opacity-80" />

                  {/* Overlaid Badges */}
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs">
                    <div className="glass-card px-3 py-1.5 rounded-xl border border-white/10 backdrop-blur-md">
                      <p className="font-semibold text-white font-space text-xs">
                        Muhammad Nabeel Aziz
                      </p>
                      <p className="text-[10px] text-[#94A3B8] font-mono">
                        Backend Engineer
                      </p>
                    </div>

                    <div className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-mono text-[10px]">
                      <CheckCircle className="w-3 h-3" />
                      <span>Verified</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Backend Architecture Status Pill */}
            <div className="grid grid-cols-2 gap-3 w-full max-w-[380px]">
              <div className="glass-card p-3.5 rounded-2xl border border-white/10 flex items-center gap-3">
                <div className="p-2 rounded-xl bg-[#3B82F6]/10 text-[#3B82F6] shrink-0">
                  <Server className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-[10px] text-[#94A3B8] font-mono uppercase">Primary Engine</p>
                  <p className="text-xs font-semibold text-[#F8FAFC]">Django & DRF</p>
                </div>
              </div>

              <div className="glass-card p-3.5 rounded-2xl border border-white/10 flex items-center gap-3">
                <div className="p-2 rounded-xl bg-emerald-500/10 text-emerald-400 shrink-0">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-[10px] text-[#94A3B8] font-mono uppercase">Security</p>
                  <p className="text-xs font-semibold text-[#F8FAFC]">JWT & RBAC</p>
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
              className="glass-card glass-card-hover p-5 rounded-2xl border border-white/10 relative overflow-hidden"
            >
              <div className="flex items-baseline justify-between mb-1">
                <span className="text-2xl sm:text-3xl font-bold font-space text-[#F8FAFC]">
                  {metric.value}
                </span>
                <span className="w-2 h-2 rounded-full bg-[#3B82F6]" />
              </div>
              <p className="text-xs font-semibold text-[#F8FAFC] tracking-tight">
                {metric.label}
              </p>
              <p className="text-[11px] text-[#94A3B8] font-mono mt-0.5">
                {metric.subtext}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
"use client";

import { motion } from "framer-motion";
import { ArrowRight, Terminal, Database, ShieldCheck, Cpu, FileText } from "lucide-react";
import { portfolioData } from "@/data/portfolio";
import { TypeAnimation } from "react-type-animation";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-28 pb-20 overflow-hidden bg-[#030712]">
      {/* Background Soft Glow & Grid Effects */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f293715_1px,transparent_1px),linear-gradient(to_bottom,#1f293715_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#3B82F6]/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 left-1/4 w-[350px] h-[350px] bg-[#8B5CF6]/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Text & CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 text-center lg:text-left space-y-6"
          >
            {/* Status Badge */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card border border-white/10 shadow-lg shadow-blue-500/5">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#3B82F6] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#3B82F6]"></span>
                </span>
                <span className="text-xs font-medium text-[#94A3B8] tracking-wide uppercase font-mono">
                  root@nabeel-dev:~$ status: online
                </span>
              </div>
            </div>

            {/* Main Title */}
            <div className="space-y-3 pt-2">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[#F8FAFC] font-space leading-[1.1]">
                Backend Architect &{" "}
                <span className="bg-gradient-to-r from-[#3B82F6] via-[#60A5FA] to-[#8B5CF6] bg-clip-text text-transparent">
                  Python Engineer
                </span>
              </h1>
              <div className="text-base sm:text-lg text-[#3B82F6] font-mono h-8 flex items-center justify-center lg:justify-start">
                <TypeAnimation
                  sequence={[
                    "django-admin startproject enterprise_system",
                    2000,
                    "Building RESTful APIs & Secure RBAC",
                    2000,
                    "FastAPI + PostgreSQL Query Optimization",
                    2000,
                  ]}
                  wrapper="span"
                  speed={50}
                  repeat={Infinity}
                />
              </div>
              <p className="text-base text-[#94A3B8] font-normal max-w-xl mx-auto lg:mx-0 leading-relaxed">
                Hi, I'm <strong className="text-[#F8FAFC] font-semibold">{portfolioData.personal.name}</strong>. I design scalable database models, robust API endpoints, and clean web application architectures.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-4">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-sm font-medium text-white bg-gradient-to-r from-[#3B82F6] to-[#8B5CF6] hover:opacity-90 transition-all shadow-xl shadow-[#3B82F6]/25 group"
              >
                <span>Explore My Work</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-sm font-medium text-[#F8FAFC] glass-card glass-card-hover border border-white/10"
              >
                <FileText className="w-4 h-4 text-[#3B82F6]" />
                <span>Download CV</span>
              </a>
            </div>
          </motion.div>

          {/* Right Column: Profile Picture & Vibe Cards */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-5 flex flex-col items-center justify-center gap-8"
          >
            {/* Profile Picture Frame */}
            <div className="relative w-64 h-64 sm:w-72 sm:h-72 rounded-full p-2 bg-gradient-to-tr from-[#3B82F6] via-[#8B5CF6] to-[#EC4899] shadow-[0_0_50px_rgba(59,130,246,0.3)] group">
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-[#3B82F6]/30 via-[#8B5CF6]/30 to-[#EC4899]/30 blur-2xl opacity-70 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative w-full h-full bg-[#030712] rounded-full overflow-hidden border-4 border-[#030712] flex items-center justify-center">
                
                {/* Profile Image */}
                <img
                  src="/profile.jpg"
                  alt={portfolioData.personal.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                  }}
                />

                {/* Fallback Initials */}
                <span className="absolute inset-0 flex items-center justify-center text-4xl font-bold font-space text-[#3B82F6] -z-10">
                  MNA
                </span>
              </div>
            </div>
            
            {/* Tech Stack Highlights Mini-Cards */}
            <div className="grid grid-cols-2 gap-4 w-full max-w-md">
               <div className="glass-card p-4 rounded-2xl border border-white/5 flex items-center gap-3">
                <div className="p-2 rounded-lg bg-[#3B82F6]/10 text-[#3B82F6]">
                  <Terminal className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-[10px] text-[#94A3B8] font-mono">Primary</p>
                  <p className="text-xs font-semibold text-[#F8FAFC]">Python/Django</p>
                </div>
              </div>
               <div className="glass-card p-4 rounded-2xl border border-white/5 flex items-center gap-3">
                <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-[10px] text-[#94A3B8] font-mono">Security</p>
                  <p className="text-xs font-semibold text-[#F8FAFC]">RBAC & JWT</p>
                </div>
              </div>
            </div>

          </motion.div>

        </div>

        {/* Tech Stack Highlights Bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-20 max-w-5xl mx-auto text-left"
        >
          <div className="glass-card p-4 rounded-2xl border border-white/5 flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-[#3B82F6]/10 text-[#3B82F6]">
              <Terminal className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs text-[#94A3B8] font-mono">Language</p>
              <p className="text-sm font-semibold text-[#F8FAFC]">Python</p>
            </div>
          </div>

          <div className="glass-card p-4 rounded-2xl border border-white/5 flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-[#8B5CF6]/10 text-[#8B5CF6]">
              <Database className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs text-[#94A3B8] font-mono">Framework</p>
              <p className="text-sm font-semibold text-[#F8FAFC]">Django / DRF</p>
            </div>
          </div>

          <div className="glass-card p-4 rounded-2xl border border-white/5 flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-400">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs text-[#94A3B8] font-mono">Database</p>
              <p className="text-sm font-semibold text-[#F8FAFC]">PostgreSQL</p>
            </div>
          </div>

          <div className="glass-card p-4 rounded-2xl border border-white/5 flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-amber-500/10 text-amber-400">
              <Cpu className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs text-[#94A3B8] font-mono">Deployment</p>
              <p className="text-sm font-semibold text-[#F8FAFC]">PythonAnywhere</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
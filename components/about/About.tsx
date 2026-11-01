"use client";

import { motion } from "framer-motion";
import {
  User,
  GraduationCap,
  MapPin,
  Mail,
  Languages,
  Server,
  Database,
  KeyRound,
  FileDown,
} from "lucide-react";
import { portfolioData } from "@/data/portfolio";

export default function About() {
  const highlights = [
    {
      icon: Server,
      title: "Backend Architecture",
      desc: "Robust RESTful APIs engineered with Python, Django, and Django REST Framework.",
    },
    {
      icon: Database,
      title: "Relational Modeling",
      desc: "PostgreSQL & MySQL schema design, query optimization, and Django ORM migrations.",
    },
    {
      icon: KeyRound,
      title: "Security & Permissions",
      desc: "Role-Based Access Control (RBAC), JWT authentication, and request authorization middleware.",
    },
  ];

  return (
    <section id="about" className="py-24 relative bg-[#081522] overflow-hidden">
      {/* Background Soft Ambient Light */}
      <div className="absolute top-1/2 right-0 w-[450px] h-[450px] bg-[#20B8A5]/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#122638] border border-[#263E50] mb-4 shadow-sm">
            <User className="w-3.5 h-3.5 text-[#20B8A5]" />
            <span className="text-xs font-mono font-medium text-[#A5B7C3] tracking-wider uppercase">
              Profile & Background
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#EAF2F5] font-space">
            Engineering Background & <span className="text-[#20B8A5]">Approach</span>
          </h2>
          <p className="text-sm text-[#A5B7C3] mt-3">
            Building reliable backend pipelines, clean data layers, and predictable RESTful services.
          </p>
        </motion.div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Main Bio Card: 7 Cols */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 bg-[#122638] p-8 sm:p-10 rounded-3xl border border-[#263E50] shadow-2xl relative"
          >
            <div className="flex items-center gap-3 mb-6">
              <span className="w-3 h-3 rounded-full bg-[#20B8A5] ring-4 ring-[#20B8A5]/20" />
              <h3 className="text-xl font-bold text-[#EAF2F5] font-space">
                Junior Python / Django Backend Developer
              </h3>
            </div>

            <p className="text-[#A5B7C3] text-base leading-relaxed mb-6">
              {portfolioData.personal.about}
            </p>

            {/* Core Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-[#263E50] mb-8">
              {highlights.map((h, i) => (
                <div key={i} className="p-4 rounded-2xl bg-[#0D1D2B] border border-[#263E50] space-y-2">
                  <div className="p-2 rounded-xl bg-[#20B8A5]/10 text-[#20B8A5] w-fit">
                    <h.icon className="w-4 h-4" />
                  </div>
                  <h4 className="text-xs font-bold text-[#EAF2F5] font-space">{h.title}</h4>
                  <p className="text-[11px] text-[#A5B7C3] leading-normal">{h.desc}</p>
                </div>
              ))}
            </div>

            {/* Quick Contact & Details Bar */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-[#263E50] text-xs">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-xl bg-[#193449] text-[#20B8A5] shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-[#A5B7C3]">Location</p>
                  <p className="font-medium text-[#EAF2F5]">{portfolioData.personal.location}</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="p-2 rounded-xl bg-[#193449] text-[#20B8A5] shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-[#A5B7C3]">Direct Email</p>
                  <a
                    href={`mailto:${portfolioData.personal.email}`}
                    className="font-medium text-[#20B8A5] hover:text-[#35D0BA] truncate block"
                  >
                    {portfolioData.personal.email}
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Education, Languages & Credentials: 5 Cols */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-6"
          >
            {/* Education Card */}
            <div className="bg-[#122638] p-6 sm:p-7 rounded-3xl border border-[#263E50] shadow-xl relative overflow-hidden">
              <div className="flex items-center justify-between gap-3 mb-4">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-[#20B8A5]/10 text-[#20B8A5]">
                    <GraduationCap className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-[#EAF2F5] font-space">
                      Education
                    </h4>
                    <p className="text-xs text-[#A5B7C3] font-mono">
                      Academic Background
                    </p>
                  </div>
                </div>
                <span className="text-[11px] font-mono px-2.5 py-1 rounded-full bg-[#0D1D2B] border border-[#263E50] text-[#20B8A5]">
                  {portfolioData.education.period}
                </span>
              </div>

              <div className="space-y-1.5 pt-2">
                <p className="text-sm font-semibold text-[#EAF2F5]">
                  {portfolioData.education.degree}
                </p>
                <p className="text-xs text-[#A5B7C3]">
                  {portfolioData.education.institution}
                </p>
                <p className="text-xs text-[#A5B7C3] flex items-center gap-1.5 mt-1">
                  <MapPin className="w-3.5 h-3.5 text-[#20B8A5]" />
                  <span>{portfolioData.education.location}</span>
                </p>
              </div>
            </div>

            {/* Languages Card */}
            <div className="bg-[#122638] p-6 sm:p-7 rounded-3xl border border-[#263E50] shadow-xl">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2.5 rounded-xl bg-[#20B8A5]/10 text-[#20B8A5]">
                  <Languages className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-[#EAF2F5] font-space">
                    Languages
                  </h4>
                  <p className="text-xs text-[#A5B7C3] font-mono">
                    Communication Proficiency
                  </p>
                </div>
              </div>

              <div className="space-y-3 pt-1">
                {portfolioData.languages.map((lang, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-3 rounded-2xl bg-[#0D1D2B] border border-[#263E50]"
                  >
                    <span className="text-sm font-medium text-[#EAF2F5]">
                      {lang.name}
                    </span>
                    <span className="text-xs font-mono text-[#A5B7C3] px-2.5 py-0.5 rounded-full bg-[#193449]">
                      {lang.proficiency}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* CV Download CTA Tile */}
            <div className="p-6 rounded-3xl bg-[#0D1D2B] border border-[#263E50] shadow-xl flex items-center justify-between gap-4">
              <div>
                <p className="text-xs font-semibold text-[#EAF2F5]">
                  Need full professional history?
                </p>
                <p className="text-[11px] text-[#A5B7C3] mt-0.5">
                  Download the latest verified PDF resume.
                </p>
              </div>
              <a
                href={portfolioData.personal.cvPath}
                download={portfolioData.personal.cvFilename}
                target="_blank"
                rel="noopener noreferrer"
                className="shrink-0 inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold text-[#081522] bg-[#20B8A5] hover:bg-[#35D0BA] shadow-md shadow-[#20B8A5]/20 transition-all"
              >
                <FileDown className="w-3.5 h-3.5" />
                <span>Get CV</span>
              </a>
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
}
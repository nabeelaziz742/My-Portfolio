"use client";

import { motion } from "framer-motion";
import { User, GraduationCap, Award, MapPin, Mail, Phone, ExternalLink } from "lucide-react";
import { portfolioData } from "@/data/portfolio";

export default function About() {
  return (
    <section id="about" className="py-28 relative bg-[#030712] overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 right-0 w-[400px] h-[400px] bg-[#3B82F6]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-card border border-white/10 mb-4">
            <User className="w-3.5 h-3.5 text-[#3B82F6]" />
            <span className="text-xs font-medium text-[#94A3B8] tracking-wider uppercase">Background</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#F8FAFC] font-space">
            About <span className="text-[#3B82F6]">Me</span>
          </h2>
          <p className="text-sm text-[#94A3B8] mt-3">
            Get to know my professional journey, education, and core engineering philosophy.
          </p>
        </motion.div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          {/* Bio / Summary Column */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 glass-card p-8 rounded-3xl border border-white/10 relative shadow-xl"
          >
            <h3 className="text-xl font-semibold text-[#F8FAFC] font-space mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#3B82F6]" />
              Engineering Philosophy & Summary
            </h3>
            <p className="text-[#94A3B8] text-base leading-relaxed mb-6">
              {portfolioData.personal.about}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-white/10">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-[#3B82F6]/10 text-[#3B82F6]">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-xs text-[#94A3B8]">Location</p>
                  <p className="text-sm font-medium text-[#F8FAFC]">{portfolioData.personal.location}</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-[#8B5CF6]/10 text-[#8B5CF6]">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-xs text-[#94A3B8]">Email</p>
                  <a href={`mailto:${portfolioData.personal.email}`} className="text-sm font-medium text-[#3B82F6] hover:underline truncate block max-w-[200px]">
                    {portfolioData.personal.email}
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Education & Certifications Column */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {/* Education Card */}
            <div className="glass-card p-6 rounded-3xl border border-white/10 shadow-xl">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2.5 rounded-xl bg-blue-500/10 text-blue-400">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-base font-semibold text-[#F8FAFC] font-space">Education</h4>
                  <p className="text-xs text-[#94A3B8]">{portfolioData.education.period}</p>
                </div>
              </div>
              <p className="text-sm font-medium text-[#F8FAFC]">{portfolioData.education.degree}</p>
              <p className="text-xs text-[#94A3B8] mt-1">{portfolioData.education.institution}</p>
              <p className="text-xs text-[#94A3B8]">{portfolioData.education.location}</p>
            </div>

            {/* Certifications Card */}
            <div className="glass-card p-6 rounded-3xl border border-white/10 shadow-xl">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2.5 rounded-xl bg-purple-500/15 text-purple-400">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-base font-semibold text-[#F8FAFC] font-space">Certifications</h4>
                  <p className="text-xs text-[#94A3B8]">Verified Credentials</p>
                </div>
              </div>
              {portfolioData.certifications.map((cert, index) => (
                <div key={index} className="space-y-1">
                  <p className="text-sm font-medium text-[#F8FAFC]">{cert.title}</p>
                  <p className="text-xs text-[#94A3B8]">{cert.issuer} • {cert.date}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
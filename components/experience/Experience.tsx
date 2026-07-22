"use client";

import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin, CheckCircle2 } from "lucide-react";
import { portfolioData } from "@/data/portfolio";

export default function Experience() {
  return (
    <section id="experience" className="py-28 relative bg-[#030712] overflow-hidden">
      {/* Background Soft Glow */}
      <div className="absolute top-1/3 left-0 w-[400px] h-[400px] bg-[#8B5CF6]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-card border border-white/10 mb-4">
            <Briefcase className="w-3.5 h-3.5 text-[#3B82F6]" />
            <span className="text-xs font-medium text-[#94A3B8] tracking-wider uppercase">Career History</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#F8FAFC] font-space">
            Professional <span className="text-[#3B82F6]">Experience</span>
          </h2>
          <p className="text-sm text-[#94A3B8] mt-3">
            Building robust software solutions, managing database architectures, and deploying web applications.
          </p>
        </motion.div>

        {/* Experience Timeline */}
        <div className="space-y-8">
          {portfolioData.experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="glass-card p-8 rounded-3xl border border-white/10 relative shadow-xl hover:border-[#3B82F6]/30 transition-all group"
            >
              {/* Role Header */}
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 pb-6 border-b border-white/10">
                <div>
                  <h3 className="text-xl font-bold text-[#F8FAFC] font-space group-hover:text-[#3B82F6] transition-colors">
                    {exp.role}
                  </h3>
                  <p className="text-sm font-medium text-[#94A3B8] mt-1">
                    {exp.company}
                  </p>
                </div>
                
                <div className="flex flex-wrap items-center gap-4 text-xs font-medium text-[#94A3B8]">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10">
                    <Calendar className="w-3.5 h-3.5 text-[#3B82F6]" />
                    {exp.period}
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10">
                    <MapPin className="w-3.5 h-3.5 text-[#8B5CF6]" />
                    {exp.location}
                  </span>
                </div>
              </div>

              {/* Responsibilities */}
              <ul className="space-y-3 mb-8">
                {exp.description.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-[#94A3B8] leading-relaxed">
                    <CheckCircle2 className="w-4 h-4 text-[#3B82F6] shrink-0 mt-1" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              {/* Tech Stack Pills */}
              <div className="flex flex-wrap gap-2 pt-2">
                {exp.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-3 py-1 rounded-lg text-xs font-medium bg-[#1f2937]/60 text-[#F8FAFC] border border-white/5"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
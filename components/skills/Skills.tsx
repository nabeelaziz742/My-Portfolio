"use client";

import { motion } from "framer-motion";
import { Cpu, CheckCircle } from "lucide-react";
import { portfolioData } from "@/data/portfolio";

export default function Skills() {
  return (
    <section id="skills" className="py-28 relative bg-[#030712] overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 right-10 w-[400px] h-[400px] bg-[#3B82F6]/5 rounded-full blur-[140px] pointer-events-none" />

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
            <Cpu className="w-3.5 h-3.5 text-[#3B82F6]" />
            <span className="text-xs font-medium text-[#94A3B8] tracking-wider uppercase">Expertise</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#F8FAFC] font-space">
            Technical <span className="text-[#3B82F6]">Skills</span>
          </h2>
          <p className="text-sm text-[#94A3B8] mt-3">
            Core technologies, frameworks, and architecture tools I use to build scalable backends and web systems.
          </p>
        </motion.div>

        {/* Skills Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {portfolioData.skills.map((categoryGroup, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card p-8 rounded-3xl border border-white/10 shadow-xl flex flex-col justify-between hover:border-[#3B82F6]/30 transition-all"
            >
              <div>
                <h3 className="text-lg font-bold text-[#F8FAFC] font-space mb-6 pb-4 border-b border-white/10 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#3B82F6]" />
                  {categoryGroup.category}
                </h3>

                <div className="space-y-5">
                  {categoryGroup.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="space-y-2">
                      <div className="flex justify-between items-center text-sm">
                        <span className="font-medium text-[#F8FAFC] flex items-center gap-2">
                          <CheckCircle className="w-3.5 h-3.5 text-[#3B82F6]" />
                          {skill.name}
                        </span>
                        <span className="text-xs font-semibold text-[#94A3B8]">
                          {skill.level}%
                        </span>
                      </div>
                      {/* Progress Bar */}
                      <div className="w-full h-2 rounded-full bg-[#111827] overflow-hidden border border-white/5">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.8, delay: 0.2 + skillIndex * 0.1 }}
                          className="h-full rounded-full bg-gradient-to-r from-[#3B82F6] to-[#8B5CF6]"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
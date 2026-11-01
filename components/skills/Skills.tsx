"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Code2,
  Server,
  Database,
  Network,
  ShieldCheck,
  Wrench,
  Layout,
  Cpu,
  CheckCircle2,
  Sparkles,
} from "lucide-react";
import { portfolioData } from "@/data/portfolio";

export default function Skills() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const categoryIcons: Record<string, React.ElementType> = {
    "Programming Languages": Code2,
    "Backend Frameworks": Server,
    "Databases & ORM": Database,
    "API Development": Network,
    "Authentication & Security": ShieldCheck,
    "Development Tools & Platforms": Wrench,
    "Frontend Technologies": Layout,
    "Core Backend Concepts": Cpu,
  };

  const categories = ["All", ...portfolioData.skills.map((c) => c.category)];

  const filteredCategories =
    selectedCategory === "All"
      ? portfolioData.skills
      : portfolioData.skills.filter((c) => c.category === selectedCategory);

  return (
    <section id="skills" className="py-24 relative bg-[#030712] overflow-hidden">
      {/* Background Soft Glow */}
      <div className="absolute top-1/2 right-10 w-[450px] h-[450px] bg-[#3B82F6]/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-12"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0B0F19] border border-white/10 mb-4 shadow-sm">
            <Cpu className="w-3.5 h-3.5 text-[#3B82F6]" />
            <span className="text-xs font-mono font-medium text-[#94A3B8] tracking-wider uppercase">
              Technical Stack
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#F8FAFC] font-space">
            Skills & <span className="text-[#3B82F6]">Competencies</span>
          </h2>
          <p className="text-sm text-[#94A3B8] mt-3">
            Categorized technical stack focused on scalable Python & Django backend engineering.
          </p>
        </motion.div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-medium font-mono transition-all ${
                selectedCategory === cat
                  ? "bg-[#3B82F6] text-white shadow-md shadow-[#3B82F6]/25"
                  : "bg-[#0B0F19] text-[#94A3B8] hover:text-[#F8FAFC] border border-white/10"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Skills Cards Grid: Clean Visual Cards without Fake Percentages */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredCategories.map((group, index) => {
            const Icon = categoryIcons[group.category] || Code2;
            return (
              <motion.div
                key={group.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="glass-card p-6 rounded-3xl border border-white/10 shadow-xl flex flex-col justify-between hover:border-[#3B82F6]/30 transition-all group"
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2.5 rounded-xl bg-[#3B82F6]/10 text-[#3B82F6] group-hover:scale-105 transition-transform">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-[#F8FAFC] font-space leading-tight">
                        {group.category}
                      </h3>
                    </div>
                  </div>

                  <p className="text-[11px] text-[#94A3B8] mb-5 leading-relaxed">
                    {group.description}
                  </p>

                  {/* Skills Pills */}
                  <div className="flex flex-wrap gap-2">
                    {group.skills.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-mono transition-all ${
                          skill.highlight
                            ? "bg-[#3B82F6]/15 text-[#93C5FD] border border-[#3B82F6]/30 font-semibold"
                            : "bg-[#111827] text-[#CBD5E1] border border-white/5 hover:border-white/10"
                        }`}
                      >
                        {skill.highlight && (
                          <span className="w-1.5 h-1.5 rounded-full bg-[#3B82F6]" />
                        )}
                        <span>{skill.name}</span>
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-4 mt-6 border-t border-white/5 flex items-center justify-between text-[10px] font-mono text-[#64748B]">
                  <span>{group.skills.length} competencies</span>
                  <span className="text-[#3B82F6]">Verified</span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Senior Engineering Note */}
        <div className="mt-12 p-6 rounded-3xl bg-[#0B0F19] border border-white/10 max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-emerald-500/10 text-emerald-400">
              <CheckCircle2 className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs font-semibold text-[#F8FAFC] font-space">
                Production-Tested Backend Knowledge
              </p>
              <p className="text-[11px] text-[#94A3B8]">
                Every listed skill reflects real hands-on implementation in production or verified independent systems.
              </p>
            </div>
          </div>
          <span className="text-xs font-mono text-[#3B82F6] whitespace-nowrap">
            Zero Fake Metrics
          </span>
        </div>
      </div>
    </section>
  );
}
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
    <section id="skills" className="py-24 relative bg-[#081522] overflow-hidden">
      {/* Background Soft Glow */}
      <div className="absolute top-1/2 right-10 w-[450px] h-[450px] bg-[#20B8A5]/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-12"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#122638] border border-[#263E50] mb-4 shadow-sm">
            <Cpu className="w-3.5 h-3.5 text-[#20B8A5]" />
            <span className="text-xs font-mono font-medium text-[#A5B7C3] tracking-wider uppercase">
              Technical Stack
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#EAF2F5] font-space">
            Skills & <span className="text-[#20B8A5]">Competencies</span>
          </h2>
          <p className="text-sm text-[#A5B7C3] mt-3">
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
                  ? "bg-[#20B8A5] text-[#081522] font-semibold shadow-md shadow-[#20B8A5]/25"
                  : "bg-[#122638] text-[#A5B7C3] hover:text-[#EAF2F5] border border-[#263E50]"
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
                className="bg-[#122638] p-6 rounded-3xl border border-[#263E50] shadow-xl flex flex-col justify-between hover:border-[#20B8A5]/40 transition-all group"
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2.5 rounded-xl bg-[#20B8A5]/10 text-[#20B8A5] group-hover:scale-105 transition-transform">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-[#EAF2F5] font-space leading-tight">
                        {group.category}
                      </h3>
                    </div>
                  </div>

                  <p className="text-[11px] text-[#A5B7C3] mb-5 leading-relaxed">
                    {group.description}
                  </p>

                  {/* Skills Pills */}
                  <div className="flex flex-wrap gap-2">
                    {group.skills.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-mono transition-all ${
                          skill.highlight
                            ? "bg-[#20B8A5]/15 text-[#35D0BA] border border-[#20B8A5]/35 font-semibold"
                            : "bg-[#0D1D2B] text-[#EAF2F5] border border-[#263E50] hover:border-[#20B8A5]/30"
                        }`}
                      >
                        {skill.highlight && (
                          <span className="w-1.5 h-1.5 rounded-full bg-[#20B8A5]" />
                        )}
                        <span>{skill.name}</span>
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-4 mt-6 border-t border-[#263E50] flex items-center justify-between text-[10px] font-mono text-[#A5B7C3]">
                  <span>{group.skills.length} competencies</span>
                  <span className="text-[#20B8A5]">Verified</span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Senior Engineering Note */}
        <div className="mt-12 p-6 rounded-3xl bg-[#0D1D2B] border border-[#263E50] max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-[#20B8A5]/10 text-[#20B8A5]">
              <CheckCircle2 className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs font-semibold text-[#EAF2F5] font-space">
                Production-Tested Backend Knowledge
              </p>
              <p className="text-[11px] text-[#A5B7C3]">
                Every listed skill reflects real hands-on implementation in production or verified independent systems.
              </p>
            </div>
          </div>
          <span className="text-xs font-mono text-[#20B8A5] whitespace-nowrap">
            Zero Fake Metrics
          </span>
        </div>
      </div>
    </section>
  );
}
"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  FolderGit2,
  CheckCircle2,
  Server,
} from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { portfolioData } from "@/data/portfolio";

export default function Projects() {
  const [filter, setFilter] = useState<string>("All");

  const categories = ["All", "Live Production", "Independent Architecture"];

  const filteredProjects = portfolioData.projects.filter((p) => {
    if (filter === "Live Production") return p.category.includes("Live");
    if (filter === "Independent Architecture") return p.category.includes("Independent");
    return true;
  });

  return (
    <section id="projects" className="py-24 relative bg-[#081522] overflow-hidden">
      {/* Background Ambient Glow */}
      <div className="absolute top-1/4 left-1/4 w-[450px] h-[450px] bg-[#20B8A5]/5 rounded-full blur-[160px] pointer-events-none" />

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
            <FolderGit2 className="w-3.5 h-3.5 text-[#20B8A5]" />
            <span className="text-xs font-mono font-medium text-[#A5B7C3] tracking-wider uppercase">
              Production & Backend Systems
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#EAF2F5] font-space">
            Featured <span className="text-[#20B8A5]">Projects</span>
          </h2>
          <p className="text-sm text-[#A5B7C3] mt-3">
            Real backend platforms engineered with Python, Django, DRF, PostgreSQL, and secure access protocols.
          </p>
        </motion.div>

        {/* Filter Tabs */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex p-1.5 rounded-2xl bg-[#0D1D2B] border border-[#263E50] shadow-lg">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold font-mono transition-all ${
                  filter === cat
                    ? "bg-[#20B8A5] text-[#081522] shadow-md shadow-[#20B8A5]/25"
                    : "text-[#A5B7C3] hover:text-[#EAF2F5]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => {
            const isLive = project.badge?.includes("LIVE");
            return (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`bg-[#122638] p-7 sm:p-8 rounded-3xl border relative shadow-2xl flex flex-col justify-between transition-all group ${
                  isLive
                    ? "border-[#20B8A5]/40 hover:border-[#20B8A5]/70 hover:bg-[#193449]/60 shadow-[#20B8A5]/5"
                    : "border-[#263E50] hover:border-[#20B8A5]/40 hover:bg-[#193449]/60"
                }`}
              >
                <div>
                  {/* Card Header: Category & Badge */}
                  <div className="flex items-center justify-between gap-3 mb-4">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-mono font-medium text-[#A5B7C3]">
                        {project.category}
                      </span>
                      {project.badge && (
                        <span
                          className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-mono font-semibold ${
                            isLive
                              ? "bg-[#20B8A5]/15 text-[#20B8A5] border border-[#20B8A5]/35"
                              : "bg-[#0D1D2B] text-[#A5B7C3] border border-[#263E50]"
                          }`}
                        >
                          {isLive && (
                            <span className="relative flex h-1.5 w-1.5">
                              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#20B8A5] opacity-75"></span>
                              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[#20B8A5]"></span>
                            </span>
                          )}
                          <span>{project.badge}</span>
                        </span>
                      )}
                    </div>

                    <span className="text-xs font-mono text-[#A5B7C3]/70">
                      {project.year}
                    </span>
                  </div>

                  {/* Project Title */}
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <h3 className="text-xl sm:text-2xl font-bold text-[#EAF2F5] font-space group-hover:text-[#20B8A5] transition-colors leading-snug">
                      {project.title}
                    </h3>

                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2.5 rounded-xl bg-[#0D1D2B] text-[#A5B7C3] hover:text-[#EAF2F5] hover:border-[#20B8A5]/40 border border-[#263E50] transition-all shrink-0"
                        title="View GitHub Repository"
                      >
                        <FaGithub className="w-4 h-4" />
                      </a>
                    )}
                  </div>

                  {/* High-level Description */}
                  <p className="text-sm text-[#A5B7C3] leading-relaxed mb-5">
                    {project.description}
                  </p>

                  {/* Key Backend Responsibilities & Architecture */}
                  <div className="mb-6 space-y-2.5 bg-[#0D1D2B] p-4 rounded-2xl border border-[#263E50]">
                    <p className="text-[11px] font-mono uppercase tracking-wider text-[#A5B7C3] flex items-center gap-2">
                      <Server className="w-3.5 h-3.5 text-[#20B8A5]" />
                      <span>Backend Responsibilities</span>
                    </p>
                    <ul className="space-y-2">
                      {project.responsibilities.map((resp, rIdx) => (
                        <li
                          key={rIdx}
                          className="flex items-start gap-2 text-xs text-[#A5B7C3] leading-relaxed"
                        >
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#20B8A5] shrink-0 mt-0.5" />
                          <span>{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Tech Stack Pills */}
                <div>
                  <div className="flex flex-wrap gap-2 pt-4 border-t border-[#263E50]">
                    {project.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2.5 py-1 rounded-lg text-xs font-mono font-medium bg-[#0D1D2B] text-[#A5B7C3] border border-[#263E50]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
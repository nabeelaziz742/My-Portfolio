"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  FolderGit2,
  ExternalLink,
  CheckCircle2,
  Server,
  Database,
  Lock,
  Radio,
  ArrowUpRight,
  Code2,
} from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { portfolioData, Project } from "@/data/portfolio";

export default function Projects() {
  const [filter, setFilter] = useState<string>("All");

  const categories = ["All", "Live Production", "Independent Architecture"];

  const filteredProjects = portfolioData.projects.filter((p) => {
    if (filter === "Live Production") return p.category.includes("Live");
    if (filter === "Independent Architecture") return p.category.includes("Independent");
    return true;
  });

  return (
    <section id="projects" className="py-24 relative bg-[#030712] overflow-hidden">
      {/* Background Ambient Glow */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[#8B5CF6]/5 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-[#3B82F6]/5 rounded-full blur-[140px] pointer-events-none" />

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
            <FolderGit2 className="w-3.5 h-3.5 text-[#3B82F6]" />
            <span className="text-xs font-mono font-medium text-[#94A3B8] tracking-wider uppercase">
              Production & Backend Systems
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#F8FAFC] font-space">
            Featured <span className="text-[#3B82F6]">Projects</span>
          </h2>
          <p className="text-sm text-[#94A3B8] mt-3">
            Real backend platforms engineered with Python, Django, DRF, PostgreSQL, and secure access protocols.
          </p>
        </motion.div>

        {/* Filter Tabs */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex p-1.5 rounded-2xl bg-[#0B0F19] border border-white/10 shadow-lg">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold font-mono transition-all ${
                  filter === cat
                    ? "bg-[#3B82F6] text-white shadow-md shadow-[#3B82F6]/25"
                    : "text-[#94A3B8] hover:text-[#F8FAFC]"
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
                className={`glass-card p-7 sm:p-8 rounded-3xl border relative shadow-2xl flex flex-col justify-between transition-all group ${
                  isLive
                    ? "border-[#3B82F6]/30 hover:border-[#3B82F6]/60 shadow-[#3B82F6]/5"
                    : "border-white/10 hover:border-[#3B82F6]/30"
                }`}
              >
                <div>
                  {/* Card Header: Category & Badge */}
                  <div className="flex items-center justify-between gap-3 mb-4">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-mono font-medium text-[#94A3B8]">
                        {project.category}
                      </span>
                      {project.badge && (
                        <span
                          className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-mono font-semibold ${
                            isLive
                              ? "bg-emerald-500/15 text-emerald-400 border border-emerald-500/30"
                              : "bg-[#3B82F6]/15 text-[#60A5FA] border border-[#3B82F6]/30"
                          }`}
                        >
                          {isLive && (
                            <span className="relative flex h-1.5 w-1.5">
                              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500"></span>
                            </span>
                          )}
                          <span>{project.badge}</span>
                        </span>
                      )}
                    </div>

                    <span className="text-xs font-mono text-[#64748B]">
                      {project.year}
                    </span>
                  </div>

                  {/* Project Title */}
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <h3 className="text-xl sm:text-2xl font-bold text-[#F8FAFC] font-space group-hover:text-[#3B82F6] transition-colors leading-snug">
                      {project.title}
                    </h3>

                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2.5 rounded-xl bg-white/5 text-[#94A3B8] hover:text-white hover:bg-white/10 border border-white/5 hover:border-white/15 transition-all shrink-0"
                        title="View GitHub Repository"
                      >
                        <FaGithub className="w-4 h-4" />
                      </a>
                    )}
                  </div>

                  {/* High-level Description */}
                  <p className="text-sm text-[#CBD5E1] leading-relaxed mb-5">
                    {project.description}
                  </p>

                  {/* Key Backend Responsibilities & Architecture */}
                  <div className="mb-6 space-y-2.5 bg-[#030712]/60 p-4 rounded-2xl border border-white/5">
                    <p className="text-[11px] font-mono uppercase tracking-wider text-[#94A3B8] flex items-center gap-2">
                      <Server className="w-3.5 h-3.5 text-[#3B82F6]" />
                      <span>Backend Responsibilities</span>
                    </p>
                    <ul className="space-y-2">
                      {project.responsibilities.map((resp, rIdx) => (
                        <li
                          key={rIdx}
                          className="flex items-start gap-2 text-xs text-[#94A3B8] leading-relaxed"
                        >
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#3B82F6] shrink-0 mt-0.5" />
                          <span>{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Tech Stack Pills */}
                <div>
                  <div className="flex flex-wrap gap-2 pt-4 border-t border-white/10">
                    {project.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2.5 py-1 rounded-lg text-xs font-mono font-medium bg-[#111827] text-[#CBD5E1] border border-white/5"
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
"use client";

import { motion } from "framer-motion";
import { FolderGit2, ExternalLink, Sparkles } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { portfolioData } from "@/data/portfolio";

export default function Projects() {
  return (
    <section id="projects" className="py-28 relative bg-[#030712] overflow-hidden">
      {/* Background Soft Glow */}
      <div className="absolute top-1/4 left-1/4 w-[450px] h-[450px] bg-[#8B5CF6]/5 rounded-full blur-[150px] pointer-events-none" />

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
            <FolderGit2 className="w-3.5 h-3.5 text-[#3B82F6]" />
            <span className="text-xs font-medium text-[#94A3B8] tracking-wider uppercase">Portfolio Showcase</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#F8FAFC] font-space">
            Featured <span className="text-[#3B82F6]">Projects</span>
          </h2>
          <p className="text-sm text-[#94A3B8] mt-3">
            Production-grade backend architectures, role-based portals, and Python-powered applications.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {portfolioData.projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card p-8 rounded-3xl border border-white/10 shadow-xl flex flex-col justify-between hover:border-[#3B82F6]/30 transition-all group"
            >
              <div>
                {/* Top Badge & Category */}
                <div className="flex items-center justify-between gap-4 mb-4">
                  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-[#3B82F6]/10 text-[#3B82F6] border border-[#3B82F6]/20">
                    {project.category}
                  </span>
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-xl bg-white/5 text-[#94A3B8] hover:text-[#F8FAFC] hover:bg-white/10 transition-colors"
                      aria-label="GitHub Repository"
                    >
                      <FaGithub className="w-4 h-4" />
                    </a>
                  )}
                </div>

                {/* Project Title */}
                <h3 className="text-xl font-bold text-[#F8FAFC] font-space group-hover:text-[#3B82F6] transition-colors mb-3">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-[#94A3B8] leading-relaxed mb-6">
                  {project.description}
                </p>
              </div>

              <div>
                {/* Tech Tags */}
                <div className="flex flex-wrap gap-2 pt-4 border-t border-white/10">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 rounded-lg text-xs font-medium bg-[#111827] text-[#94A3B8] border border-white/5"
                    >
                      {tag}
                    </span>
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
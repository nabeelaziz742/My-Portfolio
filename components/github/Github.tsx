"use client";

import { motion } from "framer-motion";
import { GitBranch, Star, GitCommit, ExternalLink, Code2, FolderGit2 } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { portfolioData } from "@/data/portfolio";

export default function Github() {
  return (
    <section id="github" className="py-24 relative bg-[#030712] overflow-hidden">
      {/* Background Soft Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[550px] h-[320px] bg-[#3B82F6]/5 rounded-full blur-[170px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-5 sm:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0B0F19] border border-white/10 mb-4 shadow-sm">
            <GitBranch className="w-3.5 h-3.5 text-[#3B82F6]" />
            <span className="text-xs font-mono font-medium text-[#94A3B8] tracking-wider uppercase">
              Version Control & Codebase
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#F8FAFC] font-space">
            Open Source & <span className="text-[#3B82F6]">GitHub Activity</span>
          </h2>
          <p className="text-sm text-[#94A3B8] mt-3">
            Systematic version control with Git, feature branch workflows, and clean commit hygiene.
          </p>
        </motion.div>

        {/* GitHub Highlights Container */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          <div className="glass-card p-6 rounded-3xl border border-white/10 flex items-center gap-4 shadow-xl">
            <div className="p-3 rounded-2xl bg-[#3B82F6]/10 text-[#3B82F6]">
              <GitCommit className="w-6 h-6" />
            </div>
            <div>
              <p className="text-xs text-[#94A3B8] font-mono">Workflow Method</p>
              <p className="text-base font-bold text-[#F8FAFC] font-space">Git & Feature Branches</p>
            </div>
          </div>

          <div className="glass-card p-6 rounded-3xl border border-white/10 flex items-center gap-4 shadow-xl">
            <div className="p-3 rounded-2xl bg-[#8B5CF6]/10 text-[#8B5CF6]">
              <Code2 className="w-6 h-6" />
            </div>
            <div>
              <p className="text-xs text-[#94A3B8] font-mono">Backend Core</p>
              <p className="text-base font-bold text-[#F8FAFC] font-space">Python & Django / DRF</p>
            </div>
          </div>

          <div className="glass-card p-6 rounded-3xl border border-white/10 flex items-center gap-4 shadow-xl">
            <div className="p-3 rounded-2xl bg-emerald-500/10 text-emerald-400">
              <FolderGit2 className="w-6 h-6" />
            </div>
            <div>
              <p className="text-xs text-[#94A3B8] font-mono">Public Repositories</p>
              <p className="text-base font-bold text-[#F8FAFC] font-space">Open Source Verified</p>
            </div>
          </div>
        </div>

        {/* Profile Link Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-card p-8 sm:p-10 rounded-3xl border border-white/10 text-center relative shadow-2xl overflow-hidden group"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-[#3B82F6]/5 via-[#6366F1]/5 to-[#8B5CF6]/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
          
          <div className="max-w-xl mx-auto space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mx-auto text-[#F8FAFC]">
              <FaGithub className="w-6 h-6" />
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-[#F8FAFC] font-space">
              Explore All Codebases on GitHub
            </h3>
            <p className="text-sm text-[#94A3B8] leading-relaxed">
              Inspect full Django project repositories, DRF serializer definitions, SQL migration files, and backend architectures directly on GitHub.
            </p>
            <div className="pt-2">
              <a
                href={portfolioData.personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-[#3B82F6] to-[#8B5CF6] hover:opacity-95 shadow-xl shadow-[#3B82F6]/25 transition-all group"
              >
                <span>github.com/nabeelaziz742</span>
                <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
"use client";

import { motion } from "framer-motion";
import { GitBranch, Star, GitCommit, ExternalLink, Code2, FolderGit2 } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { portfolioData } from "@/data/portfolio";

export default function Github() {
  return (
    <section id="github" className="py-24 relative bg-[#081522] overflow-hidden">
      {/* Background Soft Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[550px] h-[320px] bg-[#20B8A5]/5 rounded-full blur-[170px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-5 sm:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#122638] border border-[#263E50] mb-4 shadow-sm">
            <GitBranch className="w-3.5 h-3.5 text-[#20B8A5]" />
            <span className="text-xs font-mono font-medium text-[#A5B7C3] tracking-wider uppercase">
              Version Control & Codebase
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#EAF2F5] font-space">
            Open Source & <span className="text-[#20B8A5]">GitHub Activity</span>
          </h2>
          <p className="text-sm text-[#A5B7C3] mt-3">
            Systematic version control with Git, feature branch workflows, and clean commit hygiene.
          </p>
        </motion.div>

        {/* GitHub Highlights Container */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          <div className="bg-[#122638] p-6 rounded-3xl border border-[#263E50] flex items-center gap-4 shadow-xl">
            <div className="p-3 rounded-2xl bg-[#20B8A5]/10 text-[#20B8A5]">
              <GitCommit className="w-6 h-6" />
            </div>
            <div>
              <p className="text-xs text-[#A5B7C3] font-mono">Workflow Method</p>
              <p className="text-base font-bold text-[#EAF2F5] font-space">Git & Feature Branches</p>
            </div>
          </div>

          <div className="bg-[#122638] p-6 rounded-3xl border border-[#263E50] flex items-center gap-4 shadow-xl">
            <div className="p-3 rounded-2xl bg-[#20B8A5]/10 text-[#20B8A5]">
              <Code2 className="w-6 h-6" />
            </div>
            <div>
              <p className="text-xs text-[#A5B7C3] font-mono">Backend Core</p>
              <p className="text-base font-bold text-[#EAF2F5] font-space">Python & Django / DRF</p>
            </div>
          </div>

          <div className="bg-[#122638] p-6 rounded-3xl border border-[#263E50] flex items-center gap-4 shadow-xl">
            <div className="p-3 rounded-2xl bg-[#20B8A5]/10 text-[#20B8A5]">
              <FolderGit2 className="w-6 h-6" />
            </div>
            <div>
              <p className="text-xs text-[#A5B7C3] font-mono">Public Repositories</p>
              <p className="text-base font-bold text-[#EAF2F5] font-space">Open Source Verified</p>
            </div>
          </div>
        </div>

        {/* Profile Link Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-[#122638] p-8 sm:p-10 rounded-3xl border border-[#263E50] text-center relative shadow-2xl overflow-hidden group"
        >
          <div className="absolute inset-0 bg-[#193449]/40 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
          
          <div className="max-w-xl mx-auto space-y-4 relative z-10">
            <div className="w-12 h-12 rounded-2xl bg-[#0D1D2B] border border-[#263E50] flex items-center justify-center mx-auto text-[#EAF2F5]">
              <FaGithub className="w-6 h-6" />
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-[#EAF2F5] font-space">
              Explore All Codebases on GitHub
            </h3>
            <p className="text-sm text-[#A5B7C3] leading-relaxed">
              Inspect full Django project repositories, DRF serializer definitions, SQL migration files, and backend architectures directly on GitHub.
            </p>
            <div className="pt-2">
              <a
                href={portfolioData.personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-xs font-semibold text-[#081522] bg-[#20B8A5] hover:bg-[#35D0BA] shadow-md shadow-[#20B8A5]/25 transition-all group"
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
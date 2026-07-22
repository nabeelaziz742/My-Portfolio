"use client";

import { motion } from "framer-motion";
import { GitBranch, Star, GitCommit, ExternalLink, Code2 } from "lucide-react";
import { portfolioData } from "@/data/portfolio";

export default function Github() {
  return (
    <section id="github" className="py-28 relative bg-[#030712] overflow-hidden">
      {/* Background Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-[#3B82F6]/5 rounded-full blur-[160px] pointer-events-none" />

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
            <GitBranch className="w-3.5 h-3.5 text-[#3B82F6]" />
            <span className="text-xs font-medium text-[#94A3B8] tracking-wider uppercase">Open Source</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#F8FAFC] font-space">
            GitHub <span className="text-[#3B82F6]">Activity</span>
          </h2>
          <p className="text-sm text-[#94A3B8] mt-3">
            Active version control, commit consistency, and open repositories.
          </p>
        </motion.div>

        {/* GitHub Cards Container */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {/* Stat Card 1 */}
          <div className="glass-card p-6 rounded-3xl border border-white/10 flex items-center gap-4 shadow-xl">
            <div className="p-3 rounded-2xl bg-[#3B82F6]/10 text-[#3B82F6]">
              <GitCommit className="w-6 h-6" />
            </div>
            <div>
              <p className="text-xs text-[#94A3B8] font-medium">Version Control</p>
              <p className="text-lg font-bold text-[#F8FAFC] font-space">Git & GitHub</p>
            </div>
          </div>

          {/* Stat Card 2 */}
          <div className="glass-card p-6 rounded-3xl border border-white/10 flex items-center gap-4 shadow-xl">
            <div className="p-3 rounded-2xl bg-[#8B5CF6]/10 text-[#8B5CF6]">
              <Code2 className="w-6 h-6" />
            </div>
            <div>
              <p className="text-xs text-[#94A3B8] font-medium">Primary Language</p>
              <p className="text-lg font-bold text-[#F8FAFC] font-space">Python & Django</p>
            </div>
          </div>

          {/* Stat Card 3 */}
          <div className="glass-card p-6 rounded-3xl border border-white/10 flex items-center gap-4 shadow-xl">
            <div className="p-3 rounded-2xl bg-emerald-500/10 text-emerald-400">
              <Star className="w-6 h-6" />
            </div>
            <div>
              <p className="text-xs text-[#94A3B8] font-medium">Repositories</p>
              <p className="text-lg font-bold text-[#F8FAFC] font-space">Public & Verified</p>
            </div>
          </div>
        </div>

        {/* Profile Link Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-card p-8 rounded-3xl border border-white/10 text-center relative shadow-2xl overflow-hidden group"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-[#3B82F6]/5 to-[#8B5CF6]/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
          <h3 className="text-xl font-bold text-[#F8FAFC] font-space mb-2">
            Explore My Complete Codebase
          </h3>
          <p className="text-sm text-[#94A3B8] max-w-md mx-auto mb-6">
            Check out all my public repositories, commit streaks, and backend scripts directly on GitHub.
          </p>
          <a
            href={portfolioData.personal.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-7 py-3 rounded-xl text-sm font-medium text-white bg-gradient-to-r from-[#3B82F6] to-[#8B5CF6] hover:opacity-90 transition-all shadow-lg shadow-[#3B82F6]/25 group"
          >
            <span>Visit GitHub Profile</span>
            <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
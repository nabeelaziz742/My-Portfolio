"use client";

import Link from "next/link";
import { Mail, ArrowUp } from "lucide-react";
import { portfolioData } from "@/data/portfolio";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#030712] border-t border-white/10 py-12 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-8 border-b border-white/10">
          {/* Brand Info */}
          <div className="text-center md:text-left">
            <h3 className="text-lg font-bold text-[#F8FAFC] font-space tracking-tight">
              {portfolioData.personal.name}
            </h3>
            <p className="text-xs text-[#94A3B8] mt-1">
              {portfolioData.personal.title}
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a
              href={portfolioData.personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-xl glass-card text-[#94A3B8] hover:text-[#F8FAFC] hover:border-[#3B82F6]/40 transition-colors"
              aria-label="GitHub"
            >
              <FaGithub className="w-4 h-4" />
            </a>
            <a
              href={portfolioData.personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-xl glass-card text-[#94A3B8] hover:text-[#F8FAFC] hover:border-[#3B82F6]/40 transition-colors"
              aria-label="LinkedIn"
            >
              <FaLinkedin className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${portfolioData.personal.email}`}
              className="p-3 rounded-xl glass-card text-[#94A3B8] hover:text-[#F8FAFC] hover:border-[#3B82F6]/40 transition-colors"
              aria-label="Email"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>

          {/* Scroll to Top Button */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 px-4 py-2.5 rounded-xl glass-card text-xs font-medium text-[#94A3B8] hover:text-[#F8FAFC] hover:border-[#3B82F6]/40 transition-colors cursor-pointer"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5 text-[#3B82F6]" />
          </button>
        </div>

        {/* Copyright */}
        <div className="pt-8 text-center text-xs text-[#94A3B8]">
          <p>© {new Date().getFullYear()} {portfolioData.personal.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
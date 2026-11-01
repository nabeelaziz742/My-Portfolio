"use client";

import Link from "next/link";
import { Mail, ArrowUp, Terminal, FileDown } from "lucide-react";
import { portfolioData } from "@/data/portfolio";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <footer className="bg-[#081522] border-t border-[#263E50] py-14 relative overflow-hidden">
      {/* Background Soft Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[550px] h-[150px] bg-[#20B8A5]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-10 border-b border-[#263E50]">
          
          {/* Identity & Tagline */}
          <div className="text-center md:text-left space-y-1.5">
            <div className="flex items-center justify-center md:justify-start gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-[#20B8A5] flex items-center justify-center text-[#081522]">
                <Terminal className="w-4 h-4" />
              </div>
              <h3 className="text-lg font-bold text-[#EAF2F5] font-space tracking-tight">
                {portfolioData.personal.name}
              </h3>
            </div>
            <p className="text-xs text-[#A5B7C3] font-mono">
              {portfolioData.personal.title}
            </p>
          </div>

          {/* Quick Navigation Links */}
          <nav className="flex flex-wrap items-center justify-center gap-6 text-xs font-medium text-[#A5B7C3]">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="hover:text-[#EAF2F5] transition-colors"
              >
                {link.name}
              </Link>
            ))}
            <a
              href={portfolioData.personal.cvPath}
              download={portfolioData.personal.cvFilename}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#20B8A5] hover:text-[#35D0BA] flex items-center gap-1 transition-colors"
            >
              <FileDown className="w-3 h-3" />
              <span>Resume PDF</span>
            </a>
          </nav>

          {/* Social Profiles & Back to Top */}
          <div className="flex items-center gap-3">
            <a
              href={portfolioData.personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-[#122638] border border-[#263E50] text-[#A5B7C3] hover:text-[#EAF2F5] hover:border-[#20B8A5]/50 transition-colors"
              aria-label="GitHub Profile"
            >
              <FaGithub className="w-4 h-4" />
            </a>
            <a
              href={portfolioData.personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-[#122638] border border-[#263E50] text-[#A5B7C3] hover:text-[#EAF2F5] hover:border-[#20B8A5]/50 transition-colors"
              aria-label="LinkedIn Profile"
            >
              <FaLinkedin className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${portfolioData.personal.email}`}
              className="p-2.5 rounded-xl bg-[#122638] border border-[#263E50] text-[#A5B7C3] hover:text-[#EAF2F5] hover:border-[#20B8A5]/50 transition-colors"
              aria-label="Email Me"
            >
              <Mail className="w-4 h-4" />
            </a>

            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 px-3.5 py-2.5 rounded-xl bg-[#122638] border border-[#263E50] text-xs font-mono font-medium text-[#A5B7C3] hover:text-[#EAF2F5] hover:border-[#20B8A5]/50 transition-colors cursor-pointer ml-2"
              title="Return to top of page"
            >
              <span>Top</span>
              <ArrowUp className="w-3.5 h-3.5 text-[#20B8A5]" />
            </button>
          </div>
        </div>

        {/* Copyright & Technical Colophon */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#A5B7C3]/80">
          <p>© {new Date().getFullYear()} Muhammad Nabeel Aziz. All rights reserved.</p>
          <p className="text-[11px]">
            Engineered with Next.js 16, React 19, Tailwind CSS v4 & Framer Motion
          </p>
        </div>
      </div>
    </footer>
  );
}
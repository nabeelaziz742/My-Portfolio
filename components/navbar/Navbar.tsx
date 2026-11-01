"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Code2, ArrowUpRight, FileDown, Terminal } from "lucide-react";
import { portfolioData } from "@/data/portfolio";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 25);

      // Section spy
      const sections = navLinks.map((link) => link.href.substring(1));
      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[#030712]/85 backdrop-blur-xl border-b border-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.5)] py-3.5"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-8 flex items-center justify-between">
          {/* Logo / Developer Identity */}
          <Link
            href="#"
            className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#3B82F6] rounded-xl"
            aria-label="Muhammad Nabeel Aziz Home"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#3B82F6] via-[#2563EB] to-[#8B5CF6] flex items-center justify-center text-white shadow-lg shadow-[#3B82F6]/25 group-hover:scale-105 group-hover:shadow-[#3B82F6]/40 transition-all duration-300 border border-white/20">
              <Terminal className="w-5 h-5 text-white" />
            </div>
            <div className="flex flex-col">
              <span className="font-space font-bold text-base text-[#F8FAFC] tracking-tight group-hover:text-[#3B82F6] transition-colors">
                Nabeel Aziz
              </span>
              <span className="text-[10px] font-mono text-[#94A3B8] tracking-wider uppercase">
                Python / Django
              </span>
            </div>
          </Link>

          {/* Desktop Nav Links with Active Indicator */}
          <nav className="hidden lg:flex items-center gap-1 bg-[#0B0F19]/80 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10 shadow-inner">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`relative px-4 py-1.5 text-xs font-medium rounded-full transition-colors duration-200 ${
                    isActive
                      ? "text-[#F8FAFC]"
                      : "text-[#94A3B8] hover:text-[#F8FAFC]"
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeNavTab"
                      className="absolute inset-0 bg-white/10 rounded-full border border-white/10"
                      transition={{ type: "spring", stiffness: 350, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{link.name}</span>
                </Link>
              );
            })}
          </nav>

          {/* Action CTAs: CV Download & Let's Talk */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={portfolioData.personal.cvPath}
              download={portfolioData.personal.cvFilename}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-medium text-[#F8FAFC] bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 transition-all"
              title="Download Muhammad Nabeel Aziz's Resume"
            >
              <FileDown className="w-3.5 h-3.5 text-[#3B82F6]" />
              <span>Resume</span>
            </a>

            <a
              href="#contact"
              className="relative inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold text-white bg-gradient-to-r from-[#3B82F6] to-[#8B5CF6] hover:opacity-95 shadow-lg shadow-[#3B82F6]/25 hover:shadow-[#3B82F6]/40 transition-all group"
            >
              <span>Get in Touch</span>
              <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>

          {/* Mobile Menu Trigger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden text-[#F8FAFC] p-2.5 rounded-xl bg-[#0B0F19] border border-white/10 hover:bg-[#111827] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#3B82F6] transition-colors"
            aria-label={mobileMenuOpen ? "Close Menu" : "Open Menu"}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-[68px] z-40 bg-[#030712]/95 backdrop-blur-2xl border-b border-white/10 p-6 lg:hidden shadow-2xl"
          >
            <div className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-base font-medium py-2.5 px-3 rounded-xl border border-transparent transition-colors ${
                    activeSection === link.href.substring(1)
                      ? "text-[#3B82F6] bg-[#3B82F6]/10 border-[#3B82F6]/20 font-semibold"
                      : "text-[#94A3B8] hover:text-[#F8FAFC] hover:bg-white/5"
                  }`}
                >
                  {link.name}
                </Link>
              ))}

              <div className="pt-4 border-t border-white/10 grid grid-cols-2 gap-3">
                <a
                  href={portfolioData.personal.cvPath}
                  download={portfolioData.personal.cvFilename}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-center gap-2 py-3 rounded-xl text-xs font-semibold text-[#F8FAFC] bg-white/5 border border-white/10"
                >
                  <FileDown className="w-4 h-4 text-[#3B82F6]" />
                  <span>Download CV</span>
                </a>

                <a
                  href="#contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-center gap-2 py-3 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-[#3B82F6] to-[#8B5CF6] shadow-lg shadow-[#3B82F6]/20"
                >
                  <span>Get in Touch</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
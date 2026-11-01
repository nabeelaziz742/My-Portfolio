"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight, FileDown, Terminal } from "lucide-react";
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
            ? "bg-[#081522]/90 backdrop-blur-xl border-b border-[#263E50] shadow-[0_4px_25px_rgba(8,21,34,0.7)] py-3.5"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-8 flex items-center justify-between">
          {/* Logo / Developer Identity */}
          <Link
            href="#"
            className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#20B8A5] rounded-xl"
            aria-label="Muhammad Nabeel Aziz Home"
          >
            <div className="w-10 h-10 rounded-xl bg-[#122638] flex items-center justify-center text-[#20B8A5] shadow-md border border-[#263E50] group-hover:scale-105 group-hover:border-[#20B8A5]/50 group-hover:bg-[#193449] transition-all duration-300">
              <Terminal className="w-5 h-5 text-[#20B8A5]" />
            </div>
            <div className="flex flex-col">
              <span className="font-space font-bold text-base text-[#EAF2F5] tracking-tight group-hover:text-[#20B8A5] transition-colors">
                Nabeel Aziz
              </span>
              <span className="text-[10px] font-mono text-[#A5B7C3] tracking-wider uppercase">
                Python / Django
              </span>
            </div>
          </Link>

          {/* Desktop Nav Links with Active Indicator */}
          <nav className="hidden lg:flex items-center gap-1 bg-[#0D1D2B]/90 backdrop-blur-md px-3 py-1.5 rounded-full border border-[#263E50] shadow-inner">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`relative px-4 py-1.5 text-xs font-medium rounded-full transition-colors duration-200 ${
                    isActive
                      ? "text-[#EAF2F5]"
                      : "text-[#A5B7C3] hover:text-[#EAF2F5]"
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeNavTab"
                      className="absolute inset-0 bg-[#193449] rounded-full border border-[#20B8A5]/40"
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
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-medium text-[#EAF2F5] bg-[#122638] hover:bg-[#193449] border border-[#263E50] hover:border-[#20B8A5]/50 transition-all"
              title="Download Muhammad Nabeel Aziz's Resume"
            >
              <FileDown className="w-3.5 h-3.5 text-[#20B8A5]" />
              <span>Resume</span>
            </a>

            <a
              href="#contact"
              className="relative inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold text-[#081522] bg-[#20B8A5] hover:bg-[#35D0BA] shadow-md shadow-[#20B8A5]/20 hover:shadow-[#20B8A5]/35 transition-all group"
            >
              <span>Get in Touch</span>
              <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>

          {/* Mobile Menu Trigger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden text-[#EAF2F5] p-2.5 rounded-xl bg-[#122638] border border-[#263E50] hover:bg-[#193449] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#20B8A5] transition-colors"
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
            className="fixed inset-x-0 top-[68px] z-40 bg-[#081522]/98 backdrop-blur-2xl border-b border-[#263E50] p-6 lg:hidden shadow-2xl"
          >
            <div className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-base font-medium py-2.5 px-3 rounded-xl border border-transparent transition-colors ${
                    activeSection === link.href.substring(1)
                      ? "text-[#20B8A5] bg-[#122638] border-[#20B8A5]/30 font-semibold"
                      : "text-[#A5B7C3] hover:text-[#EAF2F5] hover:bg-[#122638]/60"
                  }`}
                >
                  {link.name}
                </Link>
              ))}

              <div className="pt-4 border-t border-[#263E50] grid grid-cols-2 gap-3">
                <a
                  href={portfolioData.personal.cvPath}
                  download={portfolioData.personal.cvFilename}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-center gap-2 py-3 rounded-xl text-xs font-semibold text-[#EAF2F5] bg-[#122638] border border-[#263E50] hover:bg-[#193449]"
                >
                  <FileDown className="w-4 h-4 text-[#20B8A5]" />
                  <span>Download CV</span>
                </a>

                <a
                  href="#contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-center gap-2 py-3 rounded-xl text-xs font-semibold text-[#081522] bg-[#20B8A5] hover:bg-[#35D0BA] shadow-md shadow-[#20B8A5]/20"
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
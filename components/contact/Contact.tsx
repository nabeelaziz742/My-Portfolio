"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  MapPin,
  Phone,
  Send,
  CheckCircle,
  MessageSquare,
  Copy,
  ExternalLink,
  ArrowUpRight,
} from "lucide-react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { portfolioData } from "@/data/portfolio";

export default function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(portfolioData.personal.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) {
      return;
    }
    setLoading(true);

    // Simulate sending with structured response
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 750);
  };

  return (
    <section id="contact" className="py-24 relative bg-[#081522] overflow-hidden">
      {/* Background Soft Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-[#20B8A5]/5 rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#122638] border border-[#263E50] mb-4 shadow-sm">
            <MessageSquare className="w-3.5 h-3.5 text-[#20B8A5]" />
            <span className="text-xs font-mono font-medium text-[#A5B7C3] tracking-wider uppercase">
              Get In Touch
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#EAF2F5] font-space">
            Let's Discuss Your Next <span className="text-[#20B8A5]">Backend Role</span>
          </h2>
          <p className="text-sm text-[#A5B7C3] mt-3">
            Open for Junior Python/Django Backend Developer positions, contract work, and technical discussions.
          </p>
        </motion.div>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Info Column (5 Cols) */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-4"
          >
            {/* Direct Email Card with One-Click Copy */}
            <div className="bg-[#122638] p-6 rounded-3xl border border-[#263E50] shadow-xl flex items-start justify-between gap-4 group">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-2xl bg-[#20B8A5]/10 text-[#20B8A5] shrink-0 mt-0.5">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-[#A5B7C3] font-mono">Email Address</p>
                  <a
                    href={`mailto:${portfolioData.personal.email}`}
                    className="text-sm sm:text-base font-semibold text-[#EAF2F5] hover:text-[#20B8A5] transition-colors break-all"
                  >
                    {portfolioData.personal.email}
                  </a>
                  <p className="text-[11px] text-[#A5B7C3]/80 mt-0.5">
                    Fast response time within 24 hours
                  </p>
                </div>
              </div>

              <button
                onClick={handleCopyEmail}
                className="p-2 rounded-xl bg-[#0D1D2B] hover:bg-[#193449] border border-[#263E50] text-[#A5B7C3] hover:text-[#EAF2F5] transition-colors shrink-0 cursor-pointer"
                title="Copy email to clipboard"
                aria-label="Copy email"
              >
                <Copy className="w-4 h-4" />
              </button>
            </div>

            {/* Phone Card */}
            <div className="bg-[#122638] p-6 rounded-3xl border border-[#263E50] shadow-xl flex items-center gap-4">
              <div className="p-3 rounded-2xl bg-[#20B8A5]/10 text-[#20B8A5] shrink-0">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs text-[#A5B7C3] font-mono">Phone & WhatsApp</p>
                <a
                  href={`tel:${portfolioData.personal.phone.replace(/\s+/g, '')}`}
                  className="text-sm sm:text-base font-semibold text-[#EAF2F5] hover:text-[#20B8A5] transition-colors"
                >
                  {portfolioData.personal.phone}
                </a>
                <p className="text-[11px] text-[#A5B7C3]/80 mt-0.5">
                  Direct call or WhatsApp message
                </p>
              </div>
            </div>

            {/* Location Card */}
            <div className="bg-[#122638] p-6 rounded-3xl border border-[#263E50] shadow-xl flex items-center gap-4">
              <div className="p-3 rounded-2xl bg-[#20B8A5]/10 text-[#20B8A5] shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs text-[#A5B7C3] font-mono">Location & Relocation</p>
                <p className="text-sm sm:text-base font-semibold text-[#EAF2F5]">
                  {portfolioData.personal.location}
                </p>
                <p className="text-[11px] text-[#A5B7C3]/80 mt-0.5">
                  Available for On-site (Lahore), Hybrid & Remote
                </p>
              </div>
            </div>

            {/* Professional Profiles */}
            <div className="p-5 rounded-3xl bg-[#0D1D2B] border border-[#263E50] flex items-center justify-between">
              <div>
                <p className="text-xs font-semibold text-[#EAF2F5]">
                  Verified Profiles
                </p>
                <p className="text-[11px] text-[#A5B7C3]">
                  LinkedIn & GitHub connections
                </p>
              </div>
              <div className="flex items-center gap-2">
                <a
                  href={portfolioData.personal.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-[#122638] hover:bg-[#193449] text-[#A5B7C3] hover:text-[#EAF2F5] border border-[#263E50] hover:border-[#20B8A5]/40 transition-all"
                  aria-label="LinkedIn Profile"
                >
                  <FaLinkedin className="w-4 h-4" />
                </a>
                <a
                  href={portfolioData.personal.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-[#122638] hover:bg-[#193449] text-[#A5B7C3] hover:text-[#EAF2F5] border border-[#263E50] hover:border-[#20B8A5]/40 transition-all"
                  aria-label="GitHub Profile"
                >
                  <FaGithub className="w-4 h-4" />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Form Column (7 Cols) */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 bg-[#122638] p-8 sm:p-10 rounded-3xl border border-[#263E50] shadow-2xl relative"
          >
            {submitted ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-[#20B8A5]/15 text-[#20B8A5] flex items-center justify-center mx-auto border border-[#20B8A5]/30">
                  <CheckCircle className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-[#EAF2F5] font-space">
                  Inquiry Received!
                </h3>
                <p className="text-sm text-[#A5B7C3] max-w-md mx-auto leading-relaxed">
                  Thank you for reaching out, <span className="text-[#EAF2F5] font-semibold">{formState.name}</span>. I have received your message and will review your requirements promptly.
                </p>

                <div className="pt-4 flex flex-wrap items-center justify-center gap-3">
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormState({ name: "", email: "", subject: "", message: "" });
                    }}
                    className="px-5 py-2.5 rounded-xl text-xs font-semibold bg-[#0D1D2B] text-[#20B8A5] border border-[#20B8A5]/40 hover:bg-[#193449] transition-colors cursor-pointer"
                  >
                    Send Another Message
                  </button>

                  <a
                    href={`mailto:${portfolioData.personal.email}?subject=${encodeURIComponent(formState.subject || "Backend Inquiry")}&body=${encodeURIComponent(formState.message || "")}`}
                    className="px-5 py-2.5 rounded-xl text-xs font-semibold bg-[#0D1D2B] text-[#EAF2F5] border border-[#263E50] hover:bg-[#193449] transition-colors"
                  >
                    Open in Email Client
                  </a>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono font-medium text-[#A5B7C3]">
                      Your Name <span className="text-[#20B8A5]">*</span>
                    </label>
                    <input
                      required
                      type="text"
                      placeholder="e.g. Alex Johnson"
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#081522] border border-[#263E50] text-[#EAF2F5] text-sm focus:outline-none focus:border-[#20B8A5] transition-colors placeholder:text-[#A5B7C3]/40"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-mono font-medium text-[#A5B7C3]">
                      Your Email <span className="text-[#20B8A5]">*</span>
                    </label>
                    <input
                      required
                      type="email"
                      placeholder="e.g. alex@company.com"
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#081522] border border-[#263E50] text-[#EAF2F5] text-sm focus:outline-none focus:border-[#20B8A5] transition-colors placeholder:text-[#A5B7C3]/40"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-mono font-medium text-[#A5B7C3]">
                    Subject
                  </label>
                  <input
                    type="text"
                    placeholder="Python / Django Backend Engineer Role"
                    value={formState.subject}
                    onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#081522] border border-[#263E50] text-[#EAF2F5] text-sm focus:outline-none focus:border-[#20B8A5] transition-colors placeholder:text-[#A5B7C3]/40"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-mono font-medium text-[#A5B7C3]">
                    Message <span className="text-[#20B8A5]">*</span>
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Hello Nabeel, we are looking for a Python / Django developer with hands-on REST API and relational database experience..."
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#081522] border border-[#263E50] text-[#EAF2F5] text-sm focus:outline-none focus:border-[#20B8A5] transition-colors resize-none placeholder:text-[#A5B7C3]/40"
                  />
                </div>

                <button
                  disabled={loading}
                  type="submit"
                  className="w-full py-3.5 rounded-xl text-sm font-semibold text-[#081522] bg-[#20B8A5] hover:bg-[#35D0BA] shadow-md shadow-[#20B8A5]/25 hover:shadow-[#20B8A5]/40 transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                >
                  {loading ? (
                    <span className="inline-block w-4 h-4 border-2 border-[#081522] border-t-transparent rounded-full animate-spin" />
                  ) : (
                    <>
                      <span>Send Direct Message</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
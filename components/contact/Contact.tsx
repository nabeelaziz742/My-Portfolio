"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Send, CheckCircle, MessageSquare } from "lucide-react";
import { portfolioData } from "@/data/portfolio";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    // Simulate API request/submission
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1000);
  };

  return (
    <section id="contact" className="py-28 relative bg-[#030712] overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-[#3B82F6]/5 rounded-full blur-[180px] pointer-events-none" />

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
            <MessageSquare className="w-3.5 h-3.5 text-[#3B82F6]" />
            <span className="text-xs font-medium text-[#94A3B8] tracking-wider uppercase">Get In Touch</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#F8FAFC] font-space">
            Let's Build Something <span className="text-[#3B82F6]">Great Together</span>
          </h2>
          <p className="text-sm text-[#94A3B8] mt-3">
            Open for Junior Backend and Full-Stack opportunities. Feel free to reach out directly!
          </p>
        </motion.div>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          {/* Info Column */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {/* Email Card */}
            <div className="glass-card p-6 rounded-3xl border border-white/10 shadow-xl flex items-center gap-4">
              <div className="p-3 rounded-2xl bg-[#3B82F6]/10 text-[#3B82F6]">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs text-[#94A3B8] font-medium">Direct Email</p>
                <a
                  href={`mailto:${portfolioData.personal.email}`}
                  className="text-sm font-semibold text-[#F8FAFC] hover:text-[#3B82F6] transition-colors"
                >
                  {portfolioData.personal.email}
                </a>
              </div>
            </div>

            {/* Phone Card */}
            <div className="glass-card p-6 rounded-3xl border border-white/10 shadow-xl flex items-center gap-4">
              <div className="p-3 rounded-2xl bg-[#8B5CF6]/10 text-[#8B5CF6]">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs text-[#94A3B8] font-medium">Phone Number</p>
                <a
                  href={`tel:${portfolioData.personal.phone}`}
                  className="text-sm font-semibold text-[#F8FAFC] hover:text-[#8B5CF6] transition-colors"
                >
                  {portfolioData.personal.phone}
                </a>
              </div>
            </div>

            {/* Location Card */}
            <div className="glass-card p-6 rounded-3xl border border-white/10 shadow-xl flex items-center gap-4">
              <div className="p-3 rounded-2xl bg-emerald-500/10 text-emerald-400">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs text-[#94A3B8] font-medium">Location</p>
                <p className="text-sm font-semibold text-[#F8FAFC]">
                  {portfolioData.personal.location}
                </p>
              </div>
            </div>
          </motion.div>

          {/* Form Column */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 glass-card p-8 sm:p-10 rounded-3xl border border-white/10 shadow-2xl relative"
          >
            {submitted ? (
              <div className="py-16 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-500/10 text-emerald-400 flex items-center justify-center mx-auto">
                  <CheckCircle className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-[#F8FAFC] font-space">Message Sent Successfully!</h3>
                <p className="text-sm text-[#94A3B8] max-w-sm mx-auto">
                  Thank you for reaching out. I'll get back to you as soon as possible.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-4 px-6 py-2 rounded-xl text-xs font-semibold bg-[#111827] text-[#3B82F6] border border-[#3B82F6]/30 hover:bg-[#1f2937] transition-colors"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-medium text-[#94A3B8]">Your Name</label>
                    <input
                      required
                      type="text"
                      placeholder="John Doe"
                      className="w-full px-4 py-3.5 rounded-xl bg-[#030712] border border-white/10 text-[#F8FAFC] text-sm focus:outline-none focus:border-[#3B82F6] transition-colors"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-medium text-[#94A3B8]">Your Email</label>
                    <input
                      required
                      type="email"
                      placeholder="john@example.com"
                      className="w-full px-4 py-3.5 rounded-xl bg-[#030712] border border-white/10 text-[#F8FAFC] text-sm focus:outline-none focus:border-[#3B82F6] transition-colors"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-medium text-[#94A3B8]">Subject</label>
                  <input
                    required
                    type="text"
                    placeholder="Backend Developer Opportunity / Project Inquiry"
                    className="w-full px-4 py-3.5 rounded-xl bg-[#030712] border border-white/10 text-[#F8FAFC] text-sm focus:outline-none focus:border-[#3B82F6] transition-colors"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-medium text-[#94A3B8]">Message</label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Hello Nabeel, I would like to discuss a backend engineering role with our team..."
                    className="w-full px-4 py-3.5 rounded-xl bg-[#030712] border border-white/10 text-[#F8FAFC] text-sm focus:outline-none focus:border-[#3B82F6] transition-colors resize-none"
                  ></textarea>
                </div>

                <button
                  disabled={loading}
                  type="submit"
                  className="w-full py-4 rounded-xl text-sm font-medium text-white bg-gradient-to-r from-[#3B82F6] to-[#8B5CF6] hover:opacity-90 transition-all shadow-xl shadow-[#3B82F6]/25 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                >
                  {loading ? (
                    <span className="inline-block w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  ) : (
                    <>
                      <span>Send Message</span>
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
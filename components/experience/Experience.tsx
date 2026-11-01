"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Briefcase,
  Calendar,
  MapPin,
  CheckCircle2,
  Building2,
  Layers,
} from "lucide-react";
import { portfolioData } from "@/data/portfolio";

export default function Experience() {
  const [activeTab, setActiveTab] = useState<"employment" | "independent">("employment");

  const independentServices = [
    {
      title: "Backend API Engineering & RESTful Contract Design",
      scope: "Django & Django REST Framework (DRF)",
      description:
        "Architecting clean, resource-oriented RESTful endpoints with input validation, nested serializers, and HTTP status handling.",
      deliverables: ["Custom Serializers", "Postman Collections", "Endpoint Documentation", "CRUD Pipelines"],
    },
    {
      title: "Relational Database Design & Query Optimization",
      scope: "PostgreSQL, MySQL & Django ORM",
      description:
        "Structuring relational schemas, foreign key constraints, indexation, and data integrity across multi-table business operations.",
      deliverables: ["Normalized Schemas", "ORM Migrations", "Relationship Modeling", "Query Optimization"],
    },
    {
      title: "Authentication, Authorization & RBAC Architecture",
      scope: "JWT, Session Auth & Custom Permissions",
      description:
        "Building role-based access control systems with custom permission classes, token lifecycles, and tenant-level isolation.",
      deliverables: ["JWT Pipelines", "Custom Permission Classes", "Middleware Guards", "Role Hierarchies"],
    },
  ];

  return (
    <section id="experience" className="py-24 relative bg-[#081522] overflow-hidden">
      {/* Background Soft Glow */}
      <div className="absolute top-1/3 left-0 w-[450px] h-[450px] bg-[#20B8A5]/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-5 sm:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-12"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#122638] border border-[#263E50] mb-4 shadow-sm">
            <Briefcase className="w-3.5 h-3.5 text-[#20B8A5]" />
            <span className="text-xs font-mono font-medium text-[#A5B7C3] tracking-wider uppercase">
              Career & Track Record
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#EAF2F5] font-space">
            Professional <span className="text-[#20B8A5]">Experience</span>
          </h2>
          <p className="text-sm text-[#A5B7C3] mt-3">
            Verified backend engineering track record and architectural project services.
          </p>
        </motion.div>

        {/* Tab Controls to Keep Professional Employment and Independent Work Strictly Separated */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex p-1.5 rounded-2xl bg-[#0D1D2B] border border-[#263E50] shadow-lg">
            <button
              onClick={() => setActiveTab("employment")}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-semibold transition-all ${
                activeTab === "employment"
                  ? "bg-[#20B8A5] text-[#081522] shadow-md shadow-[#20B8A5]/25"
                  : "text-[#A5B7C3] hover:text-[#EAF2F5]"
              }`}
            >
              <Building2 className="w-3.5 h-3.5" />
              <span>Professional Employment</span>
            </button>

            <button
              onClick={() => setActiveTab("independent")}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-semibold transition-all ${
                activeTab === "independent"
                  ? "bg-[#20B8A5] text-[#081522] shadow-md shadow-[#20B8A5]/25"
                  : "text-[#A5B7C3] hover:text-[#EAF2F5]"
              }`}
            >
              <Layers className="w-3.5 h-3.5" />
              <span>Independent & Project Services</span>
            </button>
          </div>
        </div>

        {/* Tab 1: Professional Employment (Nexrupt Technologies) */}
        {activeTab === "employment" && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="space-y-6"
          >
            {portfolioData.experiences.map((exp, index) => (
              <div
                key={index}
                className="bg-[#122638] p-8 sm:p-10 rounded-3xl border border-[#263E50] relative shadow-2xl hover:border-[#20B8A5]/40 transition-all group"
              >
                {/* Header Information */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 pb-6 border-b border-[#263E50]">
                  <div>
                    <div className="flex items-center gap-2.5 mb-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-[#20B8A5]" />
                      <h3 className="text-xl sm:text-2xl font-bold text-[#EAF2F5] font-space group-hover:text-[#20B8A5] transition-colors">
                        {exp.role}
                      </h3>
                      {exp.badge && (
                        <span className="hidden sm:inline-flex px-2.5 py-0.5 rounded-full text-[10px] font-mono font-semibold bg-[#20B8A5]/15 text-[#20B8A5] border border-[#20B8A5]/30">
                          {exp.badge}
                        </span>
                      )}
                    </div>
                    <div className="flex items-center gap-2 text-base font-medium text-[#A5B7C3]">
                      <Building2 className="w-4 h-4 text-[#20B8A5]" />
                      <span>{exp.company}</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-[#A5B7C3]">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#0D1D2B] border border-[#263E50]">
                      <Calendar className="w-3.5 h-3.5 text-[#20B8A5]" />
                      {exp.period}
                    </span>
                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#0D1D2B] border border-[#263E50]">
                      <MapPin className="w-3.5 h-3.5 text-[#20B8A5]" />
                      {exp.location}
                    </span>
                  </div>
                </div>

                {/* Verified Bullet Responsibilities */}
                <div className="space-y-3 mb-8">
                  <p className="text-xs font-mono uppercase tracking-wider text-[#A5B7C3]">
                    Key Responsibilities & Deliverables
                  </p>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
                    {exp.description.map((item, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-3 p-3.5 rounded-2xl bg-[#0D1D2B] border border-[#263E50] text-sm text-[#EAF2F5] leading-relaxed"
                      >
                        <CheckCircle2 className="w-4 h-4 text-[#20B8A5] shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech Stack Pills */}
                <div>
                  <p className="text-xs font-mono uppercase tracking-wider text-[#A5B7C3] mb-3">
                    Technologies Utilized in Production
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1.5 rounded-xl text-xs font-mono font-medium bg-[#0D1D2B] text-[#A5B7C3] border border-[#263E50] hover:border-[#20B8A5]/40 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        )}

        {/* Tab 2: Independent & Project Services (Cleanly separated) */}
        {activeTab === "independent" && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="space-y-6"
          >
            <div className="p-4 rounded-2xl bg-[#0D1D2B] border border-[#263E50] text-xs text-[#A5B7C3] flex items-center justify-between">
              <span className="font-mono text-[#EAF2F5]">
                Backend Services & Architectural Solutions delivered across independent projects
              </span>
              <span className="font-mono text-[#20B8A5] px-2.5 py-1 rounded-full bg-[#20B8A5]/10 border border-[#20B8A5]/25">
                Verified Capabilities
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {independentServices.map((service, idx) => (
                <div
                  key={idx}
                  className="bg-[#122638] p-6 rounded-3xl border border-[#263E50] shadow-xl flex flex-col justify-between hover:border-[#20B8A5]/40 transition-all"
                >
                  <div>
                    <span className="text-[10px] font-mono text-[#20B8A5] tracking-wider uppercase block mb-1">
                      {service.scope}
                    </span>
                    <h4 className="text-base font-bold text-[#EAF2F5] font-space mb-3">
                      {service.title}
                    </h4>
                    <p className="text-xs text-[#A5B7C3] leading-relaxed mb-6">
                      {service.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-[#263E50]">
                    <p className="text-[10px] font-mono uppercase text-[#A5B7C3] mb-2">
                      Key Deliverables
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {service.deliverables.map((item, dIdx) => (
                        <span
                          key={dIdx}
                          className="px-2.5 py-1 rounded-lg text-[11px] font-mono bg-[#0D1D2B] text-[#A5B7C3] border border-[#263E50]"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
}
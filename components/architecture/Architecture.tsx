"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Terminal,
  Server,
  Database,
  ShieldCheck,
  Play,
  CheckCircle,
  Copy,
  Layers,
  ArrowRight,
} from "lucide-react";

interface EndpointDemo {
  id: string;
  name: string;
  method: "GET" | "POST" | "PATCH";
  path: string;
  feature: string;
  system: string;
  requestBody?: string;
  sqlQuery: string;
  responseStatus: number;
  responseBody: string;
  architectureNote: string;
}

const demos: EndpointDemo[] = [
  {
    id: "auth-jwt",
    name: "JWT Authentication & Claims",
    method: "POST",
    path: "/api/v1/auth/jwt/create/",
    feature: "Token Lifecycle & RBAC Claims",
    system: "ISP Management Platform",
    requestBody: JSON.stringify(
      {
        email: "admin@telecom-network.org",
        password: "••••••••••••",
        tenant_id: "tenant_isp_pk_04",
      },
      null,
      2
    ),
    sqlQuery:
      'SELECT id, email, password_hash, is_active FROM "auth_customuser" WHERE email = \'admin@telecom-network.org\' LIMIT 1;',
    responseStatus: 200,
    responseBody: JSON.stringify(
      {
        access: "eyJhbGciOiJIUzI1NiIsInR5cCI...",
        refresh: "eyJhbGciOiJIUzI1NiIsInR5cCI...",
        user: {
          id: 142,
          role: "NETWORK_ADMIN",
          permissions: ["manage_subscribers", "view_invoices", "audit_logs"],
          tenant: "tenant_isp_pk_04",
        },
      },
      null,
      2
    ),
    architectureNote:
      "Stateless JWT tokens encoded with role claims. Organization-level tenant isolation verified in custom permission classes.",
  },
  {
    id: "dealership-api",
    name: "Automotive Inventory Query",
    method: "GET",
    path: "/api/v1/dealership/inventory/?make=Nissan&status=Available",
    feature: "Django ORM & DRF Serialization",
    system: "Corona Nissan Live Platform",
    sqlQuery:
      'SELECT "dealership_vehicle"."vin", "dealership_vehicle"."model", "dealership_vehicle"."price", "dealership_vehicle"."trim" FROM "dealership_vehicle" WHERE "dealership_vehicle"."status" = \'Available\' ORDER BY "dealership_vehicle"."created_at" DESC LIMIT 10;',
    responseStatus: 200,
    responseBody: JSON.stringify(
      {
        count: 48,
        results: [
          {
            vin: "3N1AB8CV3RY109822",
            make: "Nissan",
            model: "Rogue Platinum AWD",
            year: 2026,
            price: "$39,450.00",
            status: "Available",
          },
          {
            vin: "1N4BL4DV7RC203491",
            make: "Nissan",
            model: "Altima SR",
            year: 2026,
            price: "$29,800.00",
            status: "Available",
          },
        ],
      },
      null,
      2
    ),
    architectureNote:
      "Indexed PostgreSQL queries using select_related() to prevent N+1 query overhead. DRF serializers handle field validation.",
  },
  {
    id: "hr-rbac",
    name: "Role-Based Record Access",
    method: "PATCH",
    path: "/api/v1/hr/departments/engineering/records/38/",
    feature: "Custom Permission Middleware",
    system: "HR Portal RBAC System",
    requestBody: JSON.stringify(
      {
        designation: "Senior Python Engineer",
        access_tier: "Level-3",
      },
      null,
      2
    ),
    sqlQuery:
      'UPDATE "hr_employee" SET designation = \'Senior Python Engineer\', access_tier = \'Level-3\', updated_at = NOW() WHERE id = 38 RETURNING id, status;',
    responseStatus: 200,
    responseBody: JSON.stringify(
      {
        message: "Employee record updated with audit trail logged.",
        updated_by: "hr_admin_user_02",
        timestamp: "2026-11-01T08:59:05Z",
        referential_integrity: "VERIFIED",
      },
      null,
      2
    ),
    architectureNote:
      "Custom permission class evaluates request.user.role == 'HR_ADMIN'. Unauthorized requests receive 403 Forbidden automatically.",
  },
];

export default function Architecture() {
  const [activeDemo, setActiveDemo] = useState<EndpointDemo>(demos[0]);
  const [isRunning, setIsRunning] = useState(false);
  const [executed, setExecuted] = useState(true);

  const handleExecute = () => {
    setIsRunning(true);
    setTimeout(() => {
      setIsRunning(false);
      setExecuted(true);
    }, 400);
  };

  return (
    <section className="py-24 relative bg-[#030712] overflow-hidden border-t border-white/5">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-[#3B82F6]/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0B0F19] border border-white/10 mb-4 shadow-sm">
            <Server className="w-3.5 h-3.5 text-[#3B82F6]" />
            <span className="text-xs font-mono font-medium text-[#94A3B8] tracking-wider uppercase">
              Backend Architecture Lab
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#F8FAFC] font-space">
            API Design & <span className="text-[#3B82F6]">Query Architecture</span>
          </h2>
          <p className="text-sm text-[#94A3B8] mt-3">
            Interactive breakdown of RESTful contracts, relational queries, and RBAC authentication pipelines.
          </p>
        </motion.div>

        {/* Demo Selector Tabs */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-8">
          {demos.map((d) => (
            <button
              key={d.id}
              onClick={() => {
                setActiveDemo(d);
                setExecuted(true);
              }}
              className={`p-4 rounded-2xl border text-left transition-all ${
                activeDemo.id === d.id
                  ? "bg-[#0B0F19] border-[#3B82F6]/40 shadow-lg shadow-[#3B82F6]/10"
                  : "bg-[#0B0F19]/40 border-white/5 hover:border-white/15"
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <span
                  className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded ${
                    d.method === "GET"
                      ? "bg-emerald-500/15 text-emerald-400 border border-emerald-500/30"
                      : d.method === "POST"
                      ? "bg-[#3B82F6]/15 text-[#60A5FA] border border-[#3B82F6]/30"
                      : "bg-amber-500/15 text-amber-400 border border-amber-500/30"
                  }`}
                >
                  {d.method}
                </span>
                <span className="text-[10px] font-mono text-[#64748B]">
                  {d.system}
                </span>
              </div>
              <p className="text-xs font-bold text-[#F8FAFC] font-space">
                {d.name}
              </p>
              <p className="text-[11px] font-mono text-[#94A3B8] truncate mt-1">
                {d.path}
              </p>
            </button>
          ))}
        </div>

        {/* Interactive Console / Code Inspector */}
        <div className="glass-card rounded-3xl border border-white/10 overflow-hidden shadow-2xl">
          {/* Top Bar */}
          <div className="bg-[#0B0F19] px-6 py-4 border-b border-white/10 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="flex gap-1.5">
                <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
                <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
                <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
              </div>
              <span className="font-mono text-xs text-[#94A3B8]">
                django-rest-framework // {activeDemo.system}
              </span>
            </div>

            <div className="flex items-center gap-3">
              <span className="text-xs font-mono text-emerald-400 flex items-center gap-1.5 bg-emerald-500/10 px-2.5 py-1 rounded-full border border-emerald-500/20">
                <CheckCircle className="w-3 h-3" />
                HTTP {activeDemo.responseStatus} OK
              </span>

              <button
                onClick={handleExecute}
                disabled={isRunning}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#3B82F6] hover:bg-[#2563EB] text-white text-xs font-semibold font-mono transition-all disabled:opacity-50 cursor-pointer shadow-md shadow-[#3B82F6]/20"
              >
                <Play className="w-3 h-3 fill-current" />
                <span>{isRunning ? "Dispatching..." : "Simulate Call"}</span>
              </button>
            </div>
          </div>

          {/* Body Content */}
          <div className="p-6 sm:p-8 space-y-6 bg-[#030712]/90">
            {/* Request Route & Note */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-4 rounded-2xl bg-[#0B0F19] border border-white/5">
              <div className="flex items-center gap-3 font-mono text-xs overflow-x-auto">
                <span
                  className={`font-bold px-2.5 py-1 rounded text-xs ${
                    activeDemo.method === "GET"
                      ? "bg-emerald-500/15 text-emerald-400"
                      : "bg-[#3B82F6]/15 text-[#60A5FA]"
                  }`}
                >
                  {activeDemo.method}
                </span>
                <span className="text-[#F8FAFC] select-all font-semibold">
                  {activeDemo.path}
                </span>
              </div>

              <span className="text-xs text-[#94A3B8] font-mono">
                Feature: {activeDemo.feature}
              </span>
            </div>

            {/* Two Column Inspector: SQL Query & Response Output */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Left Column: Relational Query / Django ORM & Payload */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono uppercase text-[#94A3B8] flex items-center gap-2">
                    <Database className="w-3.5 h-3.5 text-[#8B5CF6]" />
                    <span>Relational Query (Django ORM & PostgreSQL)</span>
                  </span>
                </div>
                <div className="p-4 rounded-2xl bg-[#0B0F19] border border-white/5 font-mono text-xs text-[#CBD5E1] leading-relaxed overflow-x-auto min-h-[90px]">
                  <code>{activeDemo.sqlQuery}</code>
                </div>

                {activeDemo.requestBody && (
                  <>
                    <span className="text-xs font-mono uppercase text-[#94A3B8] flex items-center gap-2 block pt-2">
                      <Terminal className="w-3.5 h-3.5 text-[#3B82F6]" />
                      <span>Request Payload (Validated via DRF Serializer)</span>
                    </span>
                    <pre className="p-4 rounded-2xl bg-[#0B0F19] border border-white/5 font-mono text-xs text-[#93C5FD] leading-relaxed overflow-x-auto">
                      {activeDemo.requestBody}
                    </pre>
                  </>
                )}
              </div>

              {/* Right Column: Serialized Response Body & Architecture Note */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono uppercase text-[#94A3B8] flex items-center gap-2">
                    <Server className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Response Payload (JSON Serializer)</span>
                  </span>
                </div>
                <pre className="p-4 rounded-2xl bg-[#0B0F19] border border-white/5 font-mono text-xs text-[#CBD5E1] leading-relaxed overflow-x-auto min-h-[140px]">
                  {activeDemo.responseBody}
                </pre>

                {/* Architecture Note */}
                <div className="p-4 rounded-2xl bg-[#3B82F6]/5 border border-[#3B82F6]/20">
                  <p className="text-[11px] font-mono text-[#60A5FA] leading-relaxed">
                    <strong className="text-white">Architecture Standard:</strong>{" "}
                    {activeDemo.architectureNote}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

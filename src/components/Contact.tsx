"use client";

import { SITE_CONFIG, TRANSPORT_CONFIG } from "@/lib/constants";
import { ShaderBackground } from "@/components/ui/ShaderBackground";

interface ContactProps {
  onOpenQuoteModal?: () => void;
}

export default function Contact({ onOpenQuoteModal }: ContactProps) {
  return (
    <section
      id="contact"
      aria-labelledby="contact-section-heading"
      className="py-16 sm:py-24 bg-[#fefdf8] border-t border-[#ebdcb2]"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="mx-auto max-w-3xl text-center mb-12 sm:mb-16">
          
          <h2
            id="contact-section-heading"
            className="text-3xl font-extrabold tracking-tight text-[#07223d] sm:text-4xl lg:text-5xl"
          >
            Contact Us
          </h2>
          
        </div>

        {/* Two-Columned Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-stretch">
          
          {/* ======================================================== */}
          {/* COLUMN 1: CHEMICALS - MAA DURGA CHEMICALS               */}
          {/* Hero Card BG with actual ShaderBackground WebGL Canvas   */}
          {/* ======================================================== */}
          <div className="relative overflow-hidden rounded-3xl bg-[#07223d] p-6 sm:p-8 lg:p-10 text-white shadow-2xl border border-[#f4d35e]/30 flex flex-col justify-between">
            {/* Actual Interactive WebGL Shader Background matching Hero */}
            <div
              className="absolute inset-0 w-full h-full z-0 overflow-hidden pointer-events-auto"
              aria-hidden="true"
            >
              <ShaderBackground className="h-full w-full" />
              {/* Harmonized Scrims for pristine typography contrast */}
              <div className="absolute inset-0 bg-[#07223d]/55 backdrop-blur-[0.5px]" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#041424] via-transparent to-[#07223d]/80 pointer-events-none" />
              <div className="absolute inset-0 bg-gradient-to-b from-[#07223d]/80 via-transparent to-[#041424]/90 pointer-events-none" />
            </div>

            {/* Ambient Background Glow matching Hero */}
            <div
              className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[#f4d35e]/15 blur-3xl"
              aria-hidden="true"
            />
            <div
              className="pointer-events-none absolute -left-20 -bottom-20 h-64 w-64 rounded-full bg-[#0d3b66]/60 blur-3xl"
              aria-hidden="true"
            />

            <div className="relative z-10">
              

              {/* Title & Description */}
              <h3 className="mt-4 text-2xl sm:text-3xl font-extrabold text-white">
                {SITE_CONFIG.name}
              </h3>
              <p className="mt-2 text-sm sm:text-base text-slate-200 leading-relaxed">
                Direct wholesale stockist & supplier with standard GST invoicing and COA/MSDS.
              </p>

              {/* Only 3 Things: Phone, Email, Address */}
              <div className="mt-8 space-y-4 text-sm">
                {/* 1. Phone Number */}
                <a
                  href={`tel:${SITE_CONFIG.phone.replace(/\s+/g, "")}`}
                  className="group flex items-start gap-3.5 p-4 rounded-2xl bg-white/10 hover:bg-white/15 border border-white/15 hover:border-[#f4d35e]/60 transition-all focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#f4d35e]"
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#f4d35e]/20 text-[#f4d35e] group-hover:scale-105 transition-transform">
                    <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 4V3z" />
                    </svg>
                  </div>
                  <div>
                    <span className="block text-xs uppercase font-bold text-slate-300">Phone Number</span>
                    <span className="text-base sm:text-lg font-bold text-white group-hover:text-[#f4d35e] transition-colors">
                      {SITE_CONFIG.phone}
                    </span>
                    <span className="block text-xs text-slate-300 mt-0.5">Click to call commercial trading desk</span>
                  </div>
                </a>

                {/* 2. Email Address */}
                <a
                  href={`mailto:${SITE_CONFIG.email}`}
                  className="group flex items-start gap-3.5 p-4 rounded-2xl bg-white/10 hover:bg-white/15 border border-white/15 hover:border-[#f4d35e]/60 transition-all focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#f4d35e]"
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#f4d35e]/20 text-[#f4d35e] group-hover:scale-105 transition-transform">
                    <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                  </div>
                  <div>
                    <span className="block text-xs uppercase font-bold text-slate-300">Email Address</span>
                    <span className="text-base sm:text-lg font-medium text-white group-hover:text-[#f4d35e] transition-colors">
                      {SITE_CONFIG.email}
                    </span>
                    <span className="block text-xs text-slate-300 mt-0.5">Send purchase orders & quotation requests</span>
                  </div>
                </a>

                {/* 3. Address */}
                <a
                  href={SITE_CONFIG.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-start gap-3.5 p-4 rounded-2xl bg-white/10 hover:bg-white/15 border border-white/15 hover:border-[#f4d35e]/60 transition-all focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#f4d35e]"
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#f4d35e]/20 text-[#f4d35e] group-hover:scale-105 transition-transform">
                    <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <span className="block text-xs uppercase font-bold text-slate-300">Office & Warehouse Address</span>
                    <p className="text-sm sm:text-base font-medium text-white group-hover:text-[#f4d35e] transition-colors mt-0.5 leading-snug">
                      {SITE_CONFIG.address.street}, {SITE_CONFIG.address.city}, {SITE_CONFIG.address.state} - {SITE_CONFIG.address.postalCode}
                    </p>
                    <span className="inline-flex items-center gap-1 text-xs text-[#faf0ca] mt-1 underline underline-offset-2">
                      View location on Google Maps &rarr;
                    </span>
                  </div>
                </a>
              </div>
            </div>

            {/* Bottom Button */}
            <div className="relative z-10 mt-8 pt-6 border-t border-white/15">
              <button
                type="button"
                onClick={onOpenQuoteModal}
                className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-[#f4d35e] px-6 py-4 text-base font-bold text-[#07223d] shadow-lg shadow-[#f4d35e]/25 hover:bg-[#e5c345] hover:shadow-[#f4d35e]/40 transition-all focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#f4d35e] cursor-pointer"
              >
                <span>Request Chemical Wholesale Quotation</span>
                <svg className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
          </div>

          {/* ======================================================== */}
          {/* COLUMN 2: TRANSPORTATION - AKASH ROAD CARRIER           */}
          {/* Outlined Version of the Same Card                       */}
          {/* ======================================================== */}
          <div className="relative overflow-hidden rounded-3xl border-2 border-[#07223d] bg-white p-6 sm:p-8 lg:p-10 text-[#07223d] shadow-xl flex flex-col justify-between">
            {/* Subtle Outlined Ambient Hue */}
            <div
              className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[#07223d]/5 blur-3xl"
              aria-hidden="true"
            />
            <div
              className="pointer-events-none absolute -left-20 -bottom-20 h-64 w-64 rounded-full bg-[#faf0ca]/60 blur-3xl"
              aria-hidden="true"
            />

            <div className="relative z-10">
              

              {/* Title with Link & Diagonal Arrow */}
              <h3 className="mt-4 text-2xl sm:text-3xl font-extrabold text-[#07223d]">
                <a
                  href={`tel:${TRANSPORT_CONFIG.phone.replace(/\s+/g, "")}`}
                  className="group inline-flex items-center gap-2 hover:text-[#0d3b66] transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#07223d] rounded"
                  aria-label="Akash Road Carrier - Call transport desk"
                >
                  <span>{TRANSPORT_CONFIG.name}</span>
                  <svg
                    className="h-6 w-6 text-[#07223d] group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <line x1="7" y1="17" x2="17" y2="7" />
                    <polyline points="7 7 17 7 17 17" />
                  </svg>
                </a>
              </h3>
              <p className="mt-2 text-sm sm:text-base text-slate-600 leading-relaxed">
                Dedicated chemical transport partner for bulk liquids, specialized tankers, and bagged consignments safely dispatched across India.
              </p>

              {/* Only 3 Things: Phone, Email, Address */}
              <div className="mt-8 space-y-4 text-sm">
                {/* 1. Transport Phone Link */}
                <a
                  href={`tel:${TRANSPORT_CONFIG.phone.replace(/\s+/g, "")}`}
                  className="group flex items-start gap-3.5 p-4 rounded-2xl bg-slate-50 hover:bg-[#faf0ca]/60 border border-slate-200 hover:border-[#07223d] transition-all focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#07223d]"
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#07223d] text-[#f4d35e] group-hover:scale-105 transition-transform">
                    <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 4V3z" />
                    </svg>
                  </div>
                  <div>
                    <span className="block text-xs uppercase font-bold text-slate-500">Phone Number</span>
                    <span className="text-base sm:text-lg font-bold text-[#07223d] group-hover:text-[#0d3b66] transition-colors">
                      {TRANSPORT_CONFIG.phone}
                    </span>
                    <span className="block text-xs text-slate-500 mt-0.5">Click to call fleet dispatch hotline</span>
                  </div>
                </a>

                {/* 2. Transport Email */}
                <a
                  href={`mailto:${TRANSPORT_CONFIG.email}`}
                  className="group flex items-start gap-3.5 p-4 rounded-2xl bg-slate-50 hover:bg-[#faf0ca]/60 border border-slate-200 hover:border-[#07223d] transition-all focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#07223d]"
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#07223d] text-[#f4d35e] group-hover:scale-105 transition-transform">
                    <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                  </div>
                  <div>
                    <span className="block text-xs uppercase font-bold text-slate-500">Email Address</span>
                    <span className="text-base sm:text-lg font-medium text-[#07223d] group-hover:text-[#0d3b66] transition-colors">
                      {TRANSPORT_CONFIG.email}
                    </span>
                    <span className="block text-xs text-slate-500 mt-0.5">Freight inquiries & dispatch schedules</span>
                  </div>
                </a>

                {/* 3. Address */}
                <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-slate-50 border border-slate-200">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#07223d] text-[#f4d35e]">
                    <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <span className="block text-xs uppercase font-bold text-slate-500">Logistics Yard & Office Address</span>
                    <p className="text-sm sm:text-base font-medium text-[#07223d] mt-0.5 leading-snug">
                      {TRANSPORT_CONFIG.address}
                    </p>
                    <span className="block text-xs text-slate-500 mt-1">
                      Kolkata Chemical Transit Hub &bull; 24/7 Dispatch
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Button for Transport */}
            <div className="relative z-10 mt-8 pt-6 border-t border-slate-200">
              <a
                href={`tel:${TRANSPORT_CONFIG.phone.replace(/\s+/g, "")}`}
                className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-[#07223d] px-6 py-4 text-base font-bold text-white shadow-md hover:bg-[#041424] hover:shadow-lg transition-all focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#07223d] cursor-pointer text-center"
              >
                <svg className="h-5 w-5 text-[#f4d35e]" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 4V3z" />
                </svg>
                <span>Call Akash Road Carrier for Freight Rates</span>
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

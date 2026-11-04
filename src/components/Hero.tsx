"use client";

import { ShaderBackground } from "@/components/ui/ShaderBackground";
import { SITE_CONFIG } from "@/lib/constants";
import Marquee from "@/components/Marquee";

interface HeroProps {
  onOpenQuoteModal: (productName?: string) => void;
}

export default function Hero({ onOpenQuoteModal }: HeroProps) {
  return (
    <section
      id="hero"
      aria-label="Introduction to Maa Durga Chemicals"
      className="relative w-full min-h-screen min-h-[100dvh] flex flex-col justify-between items-center overflow-hidden bg-[#07223d] text-white"
    >
      {/* Interactive WebGL Shader Background ("Mesh drift" with Regal Navy, Royal Gold & Lemon Chiffon) */}
      <div
        className="absolute inset-0 w-full h-full z-0 overflow-hidden pointer-events-auto"
        aria-hidden="true"
      >
        <ShaderBackground className="h-full w-full" />
        {/* Harmonized Regal Navy & Gold Vignette Scrims for pristine typography contrast */}
        <div className="absolute inset-0 bg-[#07223d]/45 backdrop-blur-[0.5px]" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#07223d] via-transparent to-[#07223d]/70 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#041424]/80 via-transparent to-[#07223d]/90 pointer-events-none" />
      </div>

      {/* Top Spacer to balance fixed navigation header */}
      <div className="h-16 sm:h-20 w-full shrink-0" aria-hidden="true" />

      {/* Central Content */}
      <div className="relative z-10 mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center justify-center my-auto py-6 sm:py-10">
        {/* Primary Punchy H1 */}
        <h1 className="text-4xl font-extrabold tracking-tight sm:text-6xl lg:text-7xl text-white leading-[1.12]">
          MAA DURGA{" "}
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#f4d35e] via-[#faf0ca] to-[#f4d35e]">
            CHEMICALS
          </span>
        </h1>

        {/* Clear, Minimal Subtitle */}
        <p className="mt-6 font-semibold sm:text-lg md:text-xl text-slate-200 max-w-2xl mx-auto leading-relaxed">
          Quality Chemicals. Reliable Transport. Trusted Service.
        </p>

        {/* Action CTAs */}
        <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-4 w-full sm:w-auto">
          <button
            type="button"
            onClick={() => onOpenQuoteModal()}
            className="w-full sm:w-auto inline-flex items-center justify-center rounded-xl bg-[#f4d35e] px-7 py-3.5 text-base font-bold text-[#07223d] shadow-lg shadow-[#f4d35e]/25 hover:bg-[#e5c345] hover:shadow-[#f4d35e]/40 transition-all focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#f4d35e] cursor-pointer"
          >
            Get Wholesale Price Quote
            <svg className="ml-2 h-4 w-4" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd" />
            </svg>
          </button>

          <a
            href="#products"
            className="w-full sm:w-auto inline-flex items-center justify-center rounded-xl border border-[#faf0ca]/30 bg-[#0d3b66]/70 backdrop-blur-md px-7 py-3.5 text-base font-semibold text-white hover:bg-[#0d3b66]/95 hover:border-[#f4d35e]/50 transition-all focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            Browse Chemicals Catalog
          </a>
        </div>

        {/* Direct Contact Option */}
        <p className="mt-6 text-xs sm:text-sm text-slate-300">
          Need urgent bulk dispatch or sample specs?{" "}
          <a
            href={`tel:${SITE_CONFIG.phone.replace(/\s+/g, "")}`}
            className="font-medium text-[#f4d35e] hover:text-[#faf0ca] underline underline-offset-4 transition-colors"
          >
            Call {SITE_CONFIG.phone}
          </a>
        </p>
      </div>

      {/* Marquee at the very bottom of the hero section */}
      <div className="relative z-20 w-full shrink-0">
        <Marquee className=" backdrop-blur-sm border-t border-[#f4d35e]/10 text-white" />
      </div>
    </section>
  );
}

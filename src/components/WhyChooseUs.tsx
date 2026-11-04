"use client";

import { useState } from "react";
import { ShaderBackground } from "@/components/ui/ShaderBackground";

interface ReasonItem {
  number: string;
  title: string;
  description: string;
}

const REASONS: ReasonItem[] = [
  {
    number: "01",
    title: "Fair decision",
    description:
      "Transparent commercial pricing with zero hidden margins. You get verified primary manufacturer rates and stable quarterly contracts.",
  },
  {
    number: "02",
    title: "Profitable proposition",
    description:
      "100% compliant Chapter 28 & 29 HSN invoicing with 18% GST rates, ensuring seamless Input Tax Credit (ITC) for maximum retail margins.",
  },
  {
    number: "03",
    title: "100% result",
    description:
      "Certified batch testing with authentic Certificate of Analysis (COA) and Material Safety Data Sheets (MSDS) dispatched with every order.",
  },
  {
    number: "04",
    title: "Friendly atmosphere",
    description:
      "Dedicated Kolkata trade desk with chemical specialists assisting on solvent dosing, compliance paperwork, and fast dispute resolution.",
  },
  {
    number: "05",
    title: "Great experience",
    description:
      "Ready stock from our Bagmari hub with flexible MOQs — from 25kg bags and carboys for growing retailers to 20MT bulk tankers for factories.",
  },
];

export default function WhyChooseUs() {
  // Index 1 ("02") is active by default to match the design reference image
  const [activeItem, setActiveItem] = useState<number>(1);

  return (
    <section
      id="why-choose-us"
      aria-labelledby="why-choose-us-heading"
      className="rounded-3xl relative w-screen max-w-full overflow-hidden bg-[#07223d] text-white py-20 sm:py-28 lg:py-32 border-t border-[#0d3b66]"
    >
      {/* Interactive WebGL Shader Background matching Hero Section */}
      <div
        className="absolute inset-0 w-full h-full z-0 overflow-hidden pointer-events-auto"
        aria-hidden="true"
      >
        <ShaderBackground className="h-full w-full" />
        {/* Harmonized Regal Navy & Gold Vignette Scrims to ensure pristine typography contrast */}
        <div className="absolute inset-0 bg-[#07223d]/55 backdrop-blur-[0.5px]" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#07223d] via-transparent to-[#07223d]/80 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#041424]/85 via-transparent to-[#07223d]/90 pointer-events-none" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Top Header: Minimal Kicker, Divider, and Bold Stacked Heading */}
        <div className="max-w-xl">
          

          

          <h2
            id="why-choose-us-heading"
            className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.05]"
          >
            Why
            <br />
            choose us
          </h2>
        </div>

        {/* 5-Column Numbered Horizontal Grid */}
        <div
          className="mt-16 sm:mt-24 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-6 xl:gap-8"
          role="list"
          aria-label="Reasons to choose Maa Durga Chemicals"
        >
          {REASONS.map((item, index) => {
            const isActive = activeItem === index;

            return (
              <div
                key={item.number}
                role="listitem"
                onMouseEnter={() => setActiveItem(index)}
                className="group flex flex-col justify-start cursor-pointer transition-all duration-200"
              >
                {/* Big Stylized Number */}
                <div
                  className={`text-6xl sm:text-7xl xl:text-8xl font-black tracking-tight leading-none mb-4 sm:mb-6 select-none transition-all duration-300 ${
                    isActive
                      ? "text-[#f4d35e] drop-shadow-[0_0_20px_rgba(244,211,94,0.35)]"
                      : "text-white/20 group-hover:text-white/40"
                  }`}
                  aria-hidden="true"
                >
                  {item.number}
                </div>

                {/* Title */}
                <h3
                  className={`text-base sm:text-lg font-bold mb-2 transition-colors duration-200 ${
                    isActive ? "text-white" : "text-slate-200 group-hover:text-white"
                  }`}
                >
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-xs sm:text-sm text-slate-300/90 leading-relaxed font-normal">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

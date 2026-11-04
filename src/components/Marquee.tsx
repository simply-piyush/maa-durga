interface MarqueeProps {
  items?: string[];
  className?: string;
}

const DEFAULT_ITEMS: string[] = [
  "500+ MT Monthly Bulk Supply",
  "100% Lab Tested Batches",
  "Official COA & MSDS Included",
  "15+ Years Kolkata Market Trust",
  "Pan-India Safe Logistics Network",
  "Pure Chapter 28 (Inorganic) & Chapter 29 (Organic) Chemicals",
  "Ready Stock in Bagmari & Maniktala Warehouses",
  "Standardized 18% GST Invoicing",
  "Direct Factory Wholesale Supply",
];

export default function Marquee({
  items = DEFAULT_ITEMS,
  className = "",
}: MarqueeProps) {
  return (
    <div
      aria-label="Highlights and Key Capabilities"
      className={`relative w-full overflow-hidden select-none py-3 sm:py-3.5 ${className}`}
    >
      {/* Left gradient fade mask */}
      <div
        className="pointer-events-none absolute inset-y-0 left-0 w-12 sm:w-24 bg-gradient-to-r from-[#07223d] to-transparent z-10"
        aria-hidden="true"
      />

      {/* Right gradient fade mask */}
      <div
        className="pointer-events-none absolute inset-y-0 right-0 w-12 sm:w-24 bg-gradient-to-l from-[#07223d] to-transparent z-10"
        aria-hidden="true"
      />

      {/* Marquee continuous track */}
      <div className="flex w-max animate-marquee">
        {/* Track 1 */}
        <div className="flex shrink-0 items-center gap-8 sm:gap-12 pr-8 sm:pr-12">
          {items.map((item, idx) => (
            <div
              key={`item-1-${idx}`}
              className="flex items-center gap-2.5 text-xs sm:text-sm md:text-base font-semibold text-slate-200 tracking-wide whitespace-nowrap"
            >
              <span className="text-[#f4d35e] font-bold" aria-hidden="true">
                ✦
              </span>
              <span>{item}</span>
            </div>
          ))}
        </div>

        {/* Duplicate Track 2 for seamless infinite loop */}
        <div
          aria-hidden="true"
          className="flex shrink-0 items-center gap-8 sm:gap-12 pr-8 sm:pr-12"
        >
          {items.map((item, idx) => (
            <div
              key={`item-2-${idx}`}
              className="flex items-center gap-2.5 text-xs sm:text-sm md:text-base font-semibold text-slate-200 tracking-wide whitespace-nowrap"
            >
              <span className="text-[#f4d35e] font-bold" aria-hidden="true">
                ✦
              </span>
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

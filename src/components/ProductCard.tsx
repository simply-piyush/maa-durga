"use client";

import { ChemicalProduct } from "@/lib/constants";

interface ProductCardProps {
  product: ChemicalProduct;
  onOpenQuoteModal: (productName: string) => void;
}

export default function ProductCard({
  product,
  onOpenQuoteModal,
}: ProductCardProps) {
  const isInorganic = product.type === "inorganic";

  return (
    <article
      className="group relative flex flex-col justify-between rounded-2xl bg-white p-6 shadow-sm border border-[#ebdcb2] transition-all duration-200 hover:shadow-xl hover:border-[#f4d35e] hover:-translate-y-1"
      aria-labelledby={`product-heading-${product.id}`}
    >
      <div>
        {/* Top Badges: Type & HSN Code */}
        <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
          <span
            className={`inline-flex items-center rounded-md px-2.5 py-1 text-xs font-bold tracking-wide uppercase ${
              isInorganic
                ? "bg-[#0d3b66]/10 text-[#0d3b66] border border-[#0d3b66]/20"
                : "bg-emerald-50 text-emerald-700 border border-emerald-200"
            }`}
          >
            {isInorganic ? "Chapter 28 • Inorganic" : "Chapter 29 • Organic"}
          </span>

          <span className="inline-flex items-center gap-1 rounded-md bg-[#faf0ca] px-2.5 py-1 text-xs font-bold text-[#07223d] border border-[#f4d35e]/40">
            <span>HSN {product.hsnCode}</span>
            <span className="text-[#0d3b66]">•</span>
            <span>GST {product.gstRate}</span>
          </span>
        </div>

        {/* Product Title and Formula */}
        <div className="mb-2">
          <h3
            id={`product-heading-${product.id}`}
            className="text-lg sm:text-xl font-bold text-slate-900 group-hover:text-[#0d3b66] transition-colors"
          >
            {product.name}
          </h3>
          {product.chemicalFormula && (
            <p className="text-xs font-mono font-semibold text-slate-500 mt-0.5">
              Formula: <span className="text-slate-800">{product.chemicalFormula}</span>
            </p>
          )}
        </div>

        {/* Synonyms if any */}
        {product.synonyms && product.synonyms.length > 0 && (
          <p className="text-xs text-slate-500 mb-3 italic">
            Also known as: {product.synonyms.slice(0, 3).join(", ")}
          </p>
        )}

        {/* Description */}
        <p className="text-sm text-slate-600 leading-relaxed mb-4 line-clamp-3">
          {product.description}
        </p>

        {/* Specs Table Snippet */}
        <div className="mb-4 grid grid-cols-2 gap-2 rounded-xl bg-slate-50 p-3 text-xs border border-slate-100">
          <div>
            <span className="block text-slate-500 font-medium">Assay / Purity</span>
            <span className="font-semibold text-slate-800">{product.purity}</span>
          </div>
          <div>
            <span className="block text-slate-500 font-medium">Physical State</span>
            <span className="font-semibold text-slate-800">{product.form}</span>
          </div>
          <div className="col-span-2 pt-1 border-t border-slate-200/60">
            <span className="block text-slate-500 font-medium">Standard Packaging</span>
            <span className="font-semibold text-slate-800">
              {product.packaging.join(" • ")}
            </span>
          </div>
        </div>

        {/* Industrial Applications Pills */}
        <div className="mb-5">
          <span className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-1.5">
            Key Industry Uses
          </span>
          <div className="flex flex-wrap gap-1.5">
            {product.applications.slice(0, 4).map((app, idx) => (
              <span
                key={idx}
                className="inline-flex items-center rounded-full bg-slate-100 px-2 py-0.5 text-xs font-medium text-slate-700"
              >
                {app}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Card Actions */}
      <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-3">
        <button
          type="button"
          onClick={() => onOpenQuoteModal(product.name)}
          className="flex-1 inline-flex items-center justify-center rounded-lg bg-[#f4d35e] px-4 py-2.5 text-sm font-bold text-[#07223d] shadow-sm hover:bg-[#e5c345] transition-all hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#f4d35e] cursor-pointer"
        >
          <svg className="mr-1.5 h-4 w-4" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path fillRule="evenodd" d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 110 2h-3a1 1 0 01-1-1v-2a1 1 0 00-1-1H9a1 1 0 00-1 1v2a1 1 0 01-1 1H4a1 1 0 110-2V4zm3 1h2v2H7V5zm2 4H7v2h2V9zm2-4h2v2h-2V5zm2 4h-2v2h2V9z" clipRule="evenodd" />
          </svg>
          Get Wholesale Quote
        </button>

        <a
          href={`https://wa.me/919830012345?text=Hello%20Maa%20Durga%20Chemicals,%20please%20send%20bulk%20price%20for%20${encodeURIComponent(product.name)}%20(HSN%20${product.hsnCode})`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Inquire about ${product.name} on WhatsApp`}
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-emerald-500 bg-emerald-50 text-emerald-700 hover:bg-emerald-100 transition-colors"
        >
          <svg className="h-5 w-5 fill-emerald-600" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
          </svg>
        </a>
      </div>
    </article>
  );
}


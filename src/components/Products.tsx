"use client";

import { useState, useMemo } from "react";
import dynamic from "next/dynamic";
import { CHEMICAL_PRODUCTS, ChemicalProduct } from "@/lib/constants";
import { getChemicalColumns } from "@/components/chemical-table/columns";
import { ChemicalDetailModal } from "@/components/chemical-table/ChemicalDetailModal";

// Dynamically import DataTable with ssr: false to prevent TanStack Table's internal
// debug timer (Date.now()) from executing during Next.js SSR / static prerender.
const DataTable = dynamic(
  () =>
    import("@/components/chemical-table/data-table").then((mod) => mod.DataTable),
  {
    ssr: false,
    loading: () => (
      <div className="rounded-2xl border border-slate-200 bg-white p-12 text-center text-slate-500 shadow-xs">
        <div className="inline-block h-6 w-6 animate-spin rounded-full border-2 border-slate-300 border-t-[#0d3b66] mb-3" />
        <p className="text-sm font-semibold text-slate-700">Loading Products Catalogue...</p>
        <p className="text-xs text-slate-400 mt-1">Fetching Chapter 28 & 29 verified specifications</p>
      </div>
    ),
  }
);

interface ProductsProps {
  onOpenQuoteModal: (productName?: string) => void;
}

export default function Products({ onOpenQuoteModal }: ProductsProps) {
  const [selectedChemical, setSelectedChemical] = useState<ChemicalProduct | null>(null);
  const [detailModalOpen, setDetailModalOpen] = useState(false);

  const handleSelectChemical = (chemical: ChemicalProduct) => {
    setSelectedChemical(chemical);
    setDetailModalOpen(true);
  };

  const columns = useMemo(
    () =>
      getChemicalColumns({
        onSelectChemical: handleSelectChemical,
        onOpenQuoteModal,
      }),
    [onOpenQuoteModal]
  );

  return (
    <section
      id="products"
      aria-labelledby="products-section-heading"
      className="py-16 sm:py-24 bg-slate-50 border-t border-slate-200"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center mb-10">
          <h2
            id="products-section-heading"
            className="text-3xl font-extrabold tracking-tight text-[#07223d] sm:text-5xl pb-10"
          >
            Products Catalogue
          </h2>
        </div>

        {/* Shadcn Data Table Component */}
        <DataTable
          columns={columns}
          data={CHEMICAL_PRODUCTS}
          onSelectChemical={handleSelectChemical}
          onOpenQuoteModal={onOpenQuoteModal}
        />

        {/* Chemical Detailed Specifications Popup Modal */}
        <ChemicalDetailModal
          chemical={selectedChemical}
          open={detailModalOpen}
          onOpenChange={setDetailModalOpen}
          onOpenQuoteModal={onOpenQuoteModal}
        />
      </div>
    </section>
  );
}

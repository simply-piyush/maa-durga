"use client";

import { ColumnDef } from "@tanstack/react-table";
import { ChemicalProduct } from "@/lib/constants";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowUpDown } from "lucide-react";

export interface ColumnsOptions {
  onSelectChemical?: (chemical: ChemicalProduct) => void;
  onOpenQuoteModal?: (productName?: string) => void;
}

export function getChemicalColumns({
  onSelectChemical,
}: ColumnsOptions = {}): ColumnDef<ChemicalProduct>[] {
  return [
    {
      accessorKey: "name",
      header: ({ column }) => {
        return (
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
            className="-ml-3 h-8 text-xs font-bold uppercase tracking-wider text-slate-700 hover:text-slate-900"
          >
            Product Name
            <ArrowUpDown className="ml-1.5 h-3.5 w-3.5" />
          </Button>
        );
      },
      cell: ({ row }) => {
        const chemical = row.original;
        return (
          <div
            className="cursor-pointer group py-2"
            onClick={() => onSelectChemical?.(chemical)}
            title="Click to view chemical details"
          >
            <div className="flex items-center gap-2">
              <span className="font-bold text-[#07223d] group-hover:text-[#0d3b66] transition-colors text-sm sm:text-base">
                {chemical.name}
              </span>
              {chemical.chemicalFormula && (
                <span className="rounded bg-slate-100 px-1.5 py-0.5 font-mono text-[11px] font-semibold text-slate-700 border border-slate-200">
                  {chemical.chemicalFormula}
                </span>
              )}
            </div>
            {chemical.synonyms && chemical.synonyms.length > 0 && (
              <p className="text-xs text-slate-500 line-clamp-1 mt-0.5">
                Synonyms: {chemical.synonyms.slice(0, 2).join(", ")}
              </p>
            )}
          </div>
        );
      },
    },
    {
      accessorKey: "hsnCode",
      header: ({ column }) => {
        return (
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
            className="-ml-3 h-8 text-xs font-bold uppercase tracking-wider text-slate-700 hover:text-slate-900"
          >
            HSN Code
            <ArrowUpDown className="ml-1.5 h-3.5 w-3.5" />
          </Button>
        );
      },
      cell: ({ row }) => {
        const chemical = row.original;
        const isInorganic = chemical.type === "inorganic";
        return (
          <div className="flex items-center gap-2.5 py-2">
            <span className="font-mono text-sm font-bold text-slate-900">
              {chemical.hsnCode}
            </span>
            <Badge
              variant={isInorganic ? "inorganic" : "organic"}
              className="text-[10px] py-0 px-2 font-medium"
            >
              {isInorganic ? "Ch 28" : "Ch 29"}
            </Badge>
          </div>
        );
      },
    },
  ];
}

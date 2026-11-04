"use client";

import * as React from "react";
import { ChemicalProduct, SITE_CONFIG } from "@/lib/constants";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Building2,
  CheckCircle2,
  FileText,
  FlaskConical,
  MessageSquare,
  Package,
  ShieldCheck,
} from "lucide-react";

interface ChemicalDetailModalProps {
  chemical: ChemicalProduct | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onOpenQuoteModal: (productName: string) => void;
}

export function ChemicalDetailModal({
  chemical,
  open,
  onOpenChange,
  onOpenQuoteModal,
}: ChemicalDetailModalProps) {
  if (!chemical) return null;

  const isInorganic = chemical.type === "inorganic";
  const whatsappUrl = `https://wa.me/${SITE_CONFIG.whatsapp.replace(
    /\D/g,
    ""
  )}?text=${encodeURIComponent(
    `Hello Maa Durga Chemicals, I would like to inquire about specifications and wholesale pricing for ${chemical.name} (HSN ${chemical.hsnCode}).`
  )}`;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl sm:p-7">
        <DialogHeader className="space-y-3 pb-3 border-b border-slate-100">
          <div className="flex flex-wrap items-center gap-2">
            <Badge variant={isInorganic ? "inorganic" : "organic"}>
              {chemical.chapter}
            </Badge>
            <Badge variant="gold">
              HSN {chemical.hsnCode} • GST {chemical.gstRate}
            </Badge>
            <Badge variant="secondary" className="font-mono text-slate-700">
              {chemical.category}
            </Badge>
          </div>

          <div>
            <DialogTitle className="text-xl sm:text-2xl font-extrabold text-[#07223d] flex items-center gap-2">
              <FlaskConical className="h-6 w-6 text-[#0d3b66] shrink-0" />
              <span>{chemical.name}</span>
            </DialogTitle>
            {chemical.chemicalFormula && (
              <DialogDescription className="mt-1 font-mono font-semibold text-slate-600 text-sm">
                Chemical Formula:{" "}
                <span className="rounded bg-slate-100 px-2 py-0.5 text-slate-900 border border-slate-200">
                  {chemical.chemicalFormula}
                </span>
              </DialogDescription>
            )}
          </div>
        </DialogHeader>

        {/* Content Body */}
        <div className="space-y-5 text-sm">
          {/* Synonyms */}
          {chemical.synonyms && chemical.synonyms.length > 0 && (
            <div className="rounded-lg bg-slate-50 p-3 border border-slate-200/60 text-xs">
              <span className="font-semibold text-slate-700">Commercial / Trade Synonyms:</span>{" "}
              <span className="text-slate-600">{chemical.synonyms.join(", ")}</span>
            </div>
          )}

          {/* Description */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1.5">
              Product Overview & Grade
            </h4>
            <p className="text-slate-700 leading-relaxed text-sm">
              {chemical.description}
            </p>
          </div>

          {/* Key Specifications Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 rounded-xl bg-slate-50 p-4 border border-slate-200/80">
            <div>
              <span className="block text-xs font-medium text-slate-500">Grade</span>
              <span className="text-sm font-bold text-slate-900">{chemical.grade}</span>
            </div>
            <div>
              <span className="block text-xs font-medium text-slate-500">Assay / Purity</span>
              <span className="text-sm font-bold text-[#0d3b66]">{chemical.purity}</span>
            </div>
            <div>
              <span className="block text-xs font-medium text-slate-500">Physical Form</span>
              <span className="text-sm font-bold text-slate-900">{chemical.form}</span>
            </div>
            <div>
              <span className="block text-xs font-medium text-slate-500">HSN Code</span>
              <span className="text-sm font-bold text-slate-900 font-mono">{chemical.hsnCode}</span>
            </div>
            <div>
              <span className="block text-xs font-medium text-slate-500">GST Invoice Rate</span>
              <span className="text-sm font-bold text-emerald-700">{chemical.gstRate}</span>
            </div>
            <div>
              <span className="block text-xs font-medium text-slate-500">Compliance</span>
              <span className="text-xs font-semibold text-slate-700 inline-flex items-center gap-1">
                <ShieldCheck className="h-3.5 w-3.5 text-emerald-600" />
                COA & MSDS
              </span>
            </div>
          </div>

          {/* Packaging Details */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2 flex items-center gap-1.5">
              <Package className="h-4 w-4 text-slate-500" />
              Standard Packaging Options
            </h4>
            <div className="flex flex-wrap gap-2">
              {chemical.packaging.map((pkg, idx) => (
                <span
                  key={idx}
                  className="inline-flex items-center gap-1.5 rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-xs font-medium text-slate-800 shadow-2xs"
                >
                  <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600" />
                  {pkg}
                </span>
              ))}
            </div>
          </div>

          {/* Industrial Applications */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2 flex items-center gap-1.5">
              <Building2 className="h-4 w-4 text-slate-500" />
              Primary Industrial Applications
            </h4>
            <div className="flex flex-wrap gap-1.5">
              {chemical.applications.map((app, idx) => (
                <span
                  key={idx}
                  className="rounded-full bg-slate-100 border border-slate-200 px-3 py-1 text-xs font-semibold text-slate-700"
                >
                  {app}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Actions Footer */}
        <div className="mt-6 pt-4 border-t border-slate-100 flex flex-col-reverse sm:flex-row items-center justify-between gap-3">
          <Button
            type="button"
            variant="outline"
            onClick={() => onOpenChange(false)}
            className="w-full sm:w-auto"
          >
            Close
          </Button>

          <div className="flex items-center gap-2 w-full sm:w-auto">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 rounded-lg border border-emerald-600 bg-emerald-50 px-4 py-2 text-xs font-bold text-emerald-700 hover:bg-emerald-100 transition-colors"
            >
              <MessageSquare className="h-4 w-4" />
              WhatsApp Us
            </a>

            <Button
              type="button"
              variant="gold"
              onClick={() => {
                onOpenChange(false);
                onOpenQuoteModal(chemical.name);
              }}
              className="flex-1 sm:flex-initial"
            >
              <FileText className="h-4 w-4" />
              Request Quote
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

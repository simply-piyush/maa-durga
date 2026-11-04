"use client";

import { useEffect, useRef, useState } from "react";
import { CHEMICAL_PRODUCTS } from "@/lib/constants";

type BuyerType = "wholesale" | "retail" | "factory";

interface QuoteModalProps {
  isOpen: boolean;
  prefilledProduct?: string;
  onClose: () => void;
}

export default function QuoteModal({
  isOpen,
  prefilledProduct = "",
  onClose,
}: QuoteModalProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [selectedChemical, setSelectedChemical] = useState(prefilledProduct);
  const [buyerType, setBuyerType] = useState<BuyerType>("wholesale");
  const [submitted, setSubmitted] = useState(false);

  // Synchronize native HTML5 dialog element with isOpen prop
  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (isOpen) {
      if (!dialog.open) {
        dialog.showModal();
      }
    } else {
      if (dialog.open) {
        dialog.close();
      }
    }
  }, [isOpen]);

  const handleClose = () => {
    setSubmitted(false);
    onClose();
  };

  const handleSelectBuyerType = (type: BuyerType) => {
    setBuyerType(type);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const currentChemical = selectedChemical || prefilledProduct;

  return (
    <dialog
      ref={dialogRef}
      onClose={handleClose}
      aria-labelledby="quote-modal-title"
      className="backdrop:bg-slate-900/60 backdrop:backdrop-blur-sm fixed inset-0 m-auto w-full max-w-lg rounded-3xl bg-white p-0 shadow-2xl border border-slate-200 open:animate-in open:fade-in-0 open:zoom-in-95"
    >
      <div className="relative p-6 sm:p-8 max-h-[90vh] overflow-y-auto">
        {/* Close Button via native dialog close */}
        <button
          type="button"
          onClick={handleClose}
          aria-label="Close wholesale quotation dialog"
          className="absolute top-5 right-5 flex h-9 w-9 items-center justify-center rounded-full bg-slate-100 text-slate-500 hover:bg-slate-200 hover:text-slate-800 transition-colors"
        >
          <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </button>

        {submitted ? (
          <div className="py-8 text-center" role="status" aria-live="polite">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 mb-4">
              <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-slate-900">
              Quotation Request Dispatched!
            </h3>
            <p className="mt-2 text-xs text-slate-600 leading-relaxed">
              Our Kolkata sales director will formulate your wholesale spot price for{" "}
              <strong className="text-slate-900">{currentChemical || "Chemical"}</strong> and contact you within 30 minutes.
            </p>
            <div className="mt-6 flex flex-col gap-2">
              <a
                href={`https://wa.me/919830012345?text=Hello%20Maa%20Durga%20Chemicals,%20I%20have%20an%20urgent%20inquiry%20for%20${encodeURIComponent(currentChemical)}.`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center rounded-xl bg-emerald-600 py-2.5 text-xs font-bold text-white hover:bg-emerald-700"
              >
                Fast-Track on WhatsApp &rarr;
              </a>
              <button
                type="button"
                onClick={handleClose}
                className="w-full rounded-xl bg-slate-100 py-2.5 text-xs font-semibold text-slate-700 hover:bg-slate-200"
              >
                Close Window
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <div className="inline-flex items-center gap-1.5 rounded-full bg-[#faf0ca] border border-[#f4d35e]/40 px-2.5 py-0.5 text-[11px] font-bold uppercase tracking-wider text-[#07223d] mb-2">
                Fast Commercial Quotation
              </div>
              <h2 id="quote-modal-title" className="text-xl font-bold text-[#07223d]">
                Request Spot Chemical Price
              </h2>
              <p className="text-xs text-slate-500 mt-0.5">
                Targeting wholesale distributors, retailers, and factory bulk buyers.
              </p>
            </div>

            {/* Buyer Type Selection */}
            <div>
              <span className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                I am purchasing as:
              </span>
              <div className="grid grid-cols-3 gap-2">
                {(
                  [
                    { id: "wholesale", label: "Wholesaler / Stockist" },
                    { id: "retail", label: "Retail Shop / Dealer" },
                    { id: "factory", label: "End-User Factory" },
                  ] as const
                ).map((type) => (
                  <button
                    key={type.id}
                    type="button"
                    onClick={() => handleSelectBuyerType(type.id)}
                    className={`rounded-xl border py-2 px-2 text-center text-xs font-semibold transition-all ${
                      buyerType === type.id
                        ? "border-[#0d3b66] bg-[#0d3b66]/10 text-[#07223d] ring-1 ring-[#0d3b66]"
                        : "border-slate-200 bg-white text-slate-600 hover:bg-slate-50"
                    }`}
                  >
                    {type.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Chemical Selector */}
            <div>
              <label
                htmlFor="modal-chemical-select"
                className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1"
              >
                Select Chemical <span className="text-[#0d3b66]">*</span>
              </label>
              <select
                id="modal-chemical-select"
                required
                value={currentChemical}
                onChange={(e) => setSelectedChemical(e.target.value)}
                className="w-full rounded-xl border border-slate-300 bg-white px-3 py-2 text-xs text-slate-900 focus:border-[#0d3b66] focus:ring-2 focus:ring-[#f4d35e]/30"
              >
                <option value="">Select an Organic or Inorganic Chemical</option>
                <optgroup label="Chapter 28 - Inorganic Chemicals">
                  {CHEMICAL_PRODUCTS.filter((p) => p.type === "inorganic").map((p) => (
                    <option key={p.id} value={p.name}>
                      {p.name} (HSN {p.hsnCode})
                    </option>
                  ))}
                </optgroup>
                <optgroup label="Chapter 29 - Organic Chemicals">
                  {CHEMICAL_PRODUCTS.filter((p) => p.type === "organic").map((p) => (
                    <option key={p.id} value={p.name}>
                      {p.name} (HSN {p.hsnCode})
                    </option>
                  ))}
                </optgroup>
              </select>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label
                  htmlFor="modal-qty"
                  className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1"
                >
                  Quantity Needed <span className="text-[#0d3b66]">*</span>
                </label>
                <input
                  id="modal-qty"
                  type="text"
                  required
                  placeholder="e.g. 500 KG / 2 MT"
                  className="w-full rounded-xl border border-slate-300 bg-white px-3 py-2 text-xs text-slate-900 placeholder:text-slate-400 focus:border-[#0d3b66] focus:ring-2 focus:ring-[#f4d35e]/30"
                />
              </div>

              <div>
                <label
                  htmlFor="modal-packaging"
                  className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1"
                >
                  Packaging Type
                </label>
                <select
                  id="modal-packaging"
                  className="w-full rounded-xl border border-slate-300 bg-white px-3 py-2 text-xs text-slate-900 focus:border-[#0d3b66] focus:ring-2 focus:ring-[#f4d35e]/30"
                >
                  <option value="standard">Standard Factory Pack</option>
                  <option value="bags">25 kg / 50 kg HDPE Bags</option>
                  <option value="carboys">35 kg / 50 kg Carboys</option>
                  <option value="drums">200 L / 250 kg Barrels</option>
                  <option value="tanker">Road Tanker Load</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label
                  htmlFor="modal-name"
                  className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1"
                >
                  Contact Name <span className="text-[#0d3b66]">*</span>
                </label>
                <input
                  id="modal-name"
                  type="text"
                  required
                  autoComplete="name"
                  placeholder="Your Name"
                  className="w-full rounded-xl border border-slate-300 bg-white px-3 py-2 text-xs text-slate-900 placeholder:text-slate-400 focus:border-[#0d3b66] focus:ring-2 focus:ring-[#f4d35e]/30"
                />
              </div>

              <div>
                <label
                  htmlFor="modal-phone"
                  className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1"
                >
                  Phone / WhatsApp <span className="text-[#0d3b66]">*</span>
                </label>
                <input
                  id="modal-phone"
                  type="tel"
                  inputMode="tel"
                  required
                  autoComplete="tel"
                  placeholder="+91 98300 XXXXX"
                  className="w-full rounded-xl border border-slate-300 bg-white px-3 py-2 text-xs text-slate-900 placeholder:text-slate-400 focus:border-[#0d3b66] focus:ring-2 focus:ring-[#f4d35e]/30"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="modal-destination"
                className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1"
              >
                Delivery City / Pin Code
              </label>
              <input
                id="modal-destination"
                type="text"
                placeholder="e.g. Kolkata / Howrah / Patna / Asansol"
                className="w-full rounded-xl border border-slate-300 bg-white px-3 py-2 text-xs text-slate-900 placeholder:text-slate-400 focus:border-[#0d3b66] focus:ring-2 focus:ring-[#f4d35e]/30"
              />
            </div>

            <div className="pt-2">
              <button
                type="submit"
                className="w-full rounded-xl bg-[#f4d35e] py-3 text-xs font-bold text-[#07223d] shadow-md hover:bg-[#e5c345] transition-all hover:shadow-lg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#f4d35e] cursor-pointer"
              >
                Get Instant Wholesale Rate
              </button>
            </div>
          </form>
        )}
      </div>
    </dialog>
  );
}

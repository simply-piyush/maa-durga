"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";

import Products from "@/components/Products";
import WhyChooseUs from "@/components/WhyChooseUs";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import QuoteModal from "@/components/QuoteModal";

export default function Home() {
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [modalPrefillProduct, setModalPrefillProduct] = useState("");

  const handleOpenQuoteModal = (productName?: string) => {
    setModalPrefillProduct(productName || "");
    setQuoteModalOpen(true);
  };

  const handleCloseQuoteModal = () => {
    setQuoteModalOpen(false);
    setModalPrefillProduct("");
  };

  return (
    <>
      <Navbar onOpenQuoteModal={handleOpenQuoteModal} />

      <main id="main-content" tabIndex={-1} className="flex-1 focus:outline-none">
        <Hero onOpenQuoteModal={handleOpenQuoteModal} />
        
        <Products onOpenQuoteModal={handleOpenQuoteModal} />
        <WhyChooseUs />
        <Contact onOpenQuoteModal={handleOpenQuoteModal} />
      </main>

      <Footer onOpenQuoteModal={handleOpenQuoteModal} />

      <QuoteModal
        isOpen={quoteModalOpen}
        prefilledProduct={modalPrefillProduct}
        onClose={handleCloseQuoteModal}
      />
    </>
  );
}

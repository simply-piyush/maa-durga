"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { NAV_LINKS } from "@/lib/constants";
import { Tabs, type Tab } from "@/components/ui/vercel-tabs";
import { cn } from "@/lib/utils";

export interface NavbarProps {
  onOpenQuoteModal?: (productName?: string) => void;
  tabs?: Tab[];
}

const DEFAULT_TABS: Tab[] = NAV_LINKS.map((link) => ({
  id: link.href.replace("#", ""),
  label: link.label,
}));

export default function Navbar({ tabs }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const currentTabs = tabs || DEFAULT_TABS;
  const [activeTab, setActiveTab] = useState<string>(currentTabs[0]?.id || "hero");

  // Handle smooth scrolling when a tab is selected
  const handleTabChange = (tabId: string) => {
    setActiveTab(tabId);
    const element = document.getElementById(tabId);
    if (element) {
      const headerOffset = 95;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  // Scroll spy to update active tab and shadow as user scrolls
  useEffect(() => {
    const sectionIds = currentTabs.map((t) => t.id);

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const scrollPosition = window.scrollY + 140;
      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const id = sectionIds[i];
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop;
          if (scrollPosition >= top) {
            setActiveTab(id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [currentTabs]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300">
      <nav
        aria-label="Primary"
        className={cn(
          "w-full transition-all duration-300 bg-white border-b border-slate-200",
          isScrolled ? "shadow-md" : "shadow-xs"
        )}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2.5 sm:px-6 lg:px-8 gap-4">
          {/* Logo / Brand with app icon */}
          <a
            href="#hero"
            onClick={(e) => {
              e.preventDefault();
              handleTabChange("hero");
            }}
            className="flex items-center gap-2.5 sm:gap-3 focus-visible:ring-2 focus-visible:ring-[#07223d] rounded-lg group flex-shrink-0"
            aria-label="Maa Durga Chemicals - Return to Home"
          >
            <Image
              src="/icon.svg"
              alt="Maa Durga Chemicals Logo"
              width={40}
              height={40}
              priority
              className="h-9 w-9 sm:h-10 sm:w-10 rounded-lg object-contain shadow-xs group-hover:scale-105 transition-transform flex-shrink-0"
            />
            <div>
              <span className="block font-bold text-lg sm:text-xl tracking-tight text-[#07223d] leading-tight">
                Maa Durga <span className="text-[#0d3b66]">Chemicals</span>
              </span>
              <span className="hidden xl:block text-xs font-semibold uppercase tracking-wider text-slate-500">
                Wholesaler &bull; Distributor &bull; Kolkata
              </span>
            </div>
          </a>

          {/* Desktop Navigation Tabs (Vercel Style) */}
          <div className="hidden lg:flex items-center overflow-x-auto scrollbar-none py-1">
            <Tabs
              tabs={currentTabs}
              activeTab={activeTab}
              onTabChange={handleTabChange}
            />
          </div>
        </div>

        {/* Mobile Horizontal Scrollable Vercel Tabs Bar */}
        <div className="lg:hidden flex items-center overflow-x-auto scrollbar-none px-4 py-2 border-t border-slate-100 bg-white">
          <Tabs
            tabs={currentTabs}
            activeTab={activeTab}
            onTabChange={handleTabChange}
          />
        </div>
      </nav>
    </header>
  );
}


"use client"

import * as React from "react"
import { useState, useRef, useEffect } from "react"
import { cn } from "@/lib/utils"

export interface Tab {
  id: string
  label: string
}

export interface TabsProps extends React.HTMLAttributes<HTMLDivElement> {
  tabs: Tab[]
  activeTab?: string
  onTabChange?: (tabId: string) => void
}

const Tabs = React.forwardRef<HTMLDivElement, TabsProps>(
  ({ className, tabs, activeTab, onTabChange, ...props }, ref) => {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
    const [internalActiveIndex, setInternalActiveIndex] = useState(0)
    const [hoverStyle, setHoverStyle] = useState<React.CSSProperties>({})
    const [activeStyle, setActiveStyle] = useState<React.CSSProperties>({ left: "0px", width: "0px" })
    const tabRefs = useRef<(HTMLDivElement | null)[]>([])

    // Determine active index: controlled via activeTab prop or uncontrolled via internalActiveIndex
    const activeIndex = React.useMemo(() => {
      if (activeTab !== undefined) {
        const found = tabs.findIndex((t) => t.id === activeTab)
        return found !== -1 ? found : 0
      }
      return internalActiveIndex
    }, [activeTab, tabs, internalActiveIndex])

    useEffect(() => {
      if (hoveredIndex !== null) {
        const hoveredElement = tabRefs.current[hoveredIndex]
        if (hoveredElement) {
          const { offsetLeft, offsetWidth } = hoveredElement
          setHoverStyle({
            left: `${offsetLeft}px`,
            width: `${offsetWidth}px`,
          })
        }
      }
    }, [hoveredIndex])

    useEffect(() => {
      const activeElement = tabRefs.current[activeIndex]
      if (activeElement) {
        const { offsetLeft, offsetWidth } = activeElement
        setActiveStyle({
          left: `${offsetLeft}px`,
          width: `${offsetWidth}px`,
        })
      }
    }, [activeIndex, tabs])

    useEffect(() => {
      const handleResize = () => {
        const activeElement = tabRefs.current[activeIndex]
        if (activeElement) {
          const { offsetLeft, offsetWidth } = activeElement
          setActiveStyle({
            left: `${offsetLeft}px`,
            width: `${offsetWidth}px`,
          })
        }
      }

      window.addEventListener("resize", handleResize)
      return () => window.removeEventListener("resize", handleResize)
    }, [activeIndex])

    useEffect(() => {
      const raf = requestAnimationFrame(() => {
        const targetElement = tabRefs.current[activeIndex] || tabRefs.current[0]
        if (targetElement) {
          const { offsetLeft, offsetWidth } = targetElement
          setActiveStyle({
            left: `${offsetLeft}px`,
            width: `${offsetWidth}px`,
          })
        }
      })
      return () => cancelAnimationFrame(raf)
    }, [activeIndex, tabs])

    return (
      <div 
        ref={ref} 
        className={cn("relative max-w-full", className)} 
        {...props}
      >
        <div className="relative">
          {/* Hover Highlight */}
          <div
            className="absolute h-[30px] transition-all duration-300 ease-out bg-[#07223d]/10 rounded-[6px] flex items-center pointer-events-none"
            style={{
              ...hoverStyle,
              opacity: hoveredIndex !== null ? 1 : 0,
            }}
          />

          {/* Active Indicator */}
          <div
            className="absolute bottom-[-6px] h-[2.5px] bg-[#07223d] transition-all duration-300 ease-out pointer-events-none rounded-full"
            style={activeStyle}
          />

          {/* Tabs */}
          <div className="relative flex space-x-[6px] items-center">
            {tabs.map((tab, index) => (
              <div
                key={tab.id}
                ref={(el) => {
                  tabRefs.current[index] = el
                }}
                className={cn(
                  "px-3 py-2 cursor-pointer transition-colors duration-300 h-[30px] select-none flex-shrink-0 flex items-center justify-center",
                  index === activeIndex 
                    ? "text-[#07223d]" 
                    : "text-slate-900 hover:text-[#07223d]"
                )}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                onClick={() => {
                  setInternalActiveIndex(index)
                  onTabChange?.(tab.id)
                }}
              >
                <div className="text-sm font-semibold leading-5 whitespace-nowrap flex items-center justify-center h-full">
                  {tab.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }
)
Tabs.displayName = "Tabs"

export { Tabs }

const demoTabs: Tab[] = [
  { id: "overview", label: "Overview" },
  { id: "integrations", label: "Integrations" },
  { id: "activity", label: "Activity" },
  { id: "settings", label: "Settings" },
];

export function VercelTabsDemo() {
  return (
    <div className="flex justify-center items-center w-full min-h-screen">
      <Tabs
        tabs={demoTabs}
        onTabChange={(tabId) => console.log(`Tab changed to: ${tabId}`)}
      />
    </div>
  )
}

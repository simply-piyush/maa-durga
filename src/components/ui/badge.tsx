import * as React from "react";
import { cn } from "@/lib/utils";

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "secondary" | "destructive" | "outline" | "gold" | "inorganic" | "organic";
}

function Badge({ className, variant = "default", ...props }: BadgeProps) {
  const variantClasses = {
    default: "bg-[#0d3b66] text-white border-transparent",
    secondary: "bg-slate-100 text-slate-800 border-transparent",
    destructive: "bg-red-50 text-red-700 border-red-200",
    outline: "text-slate-800 border-slate-200",
    gold: "bg-[#faf0ca] text-[#07223d] border-[#f4d35e]/40 font-bold",
    inorganic: "bg-[#0d3b66]/10 text-[#0d3b66] border-[#0d3b66]/20 font-bold",
    organic: "bg-emerald-50 text-emerald-800 border-emerald-200 font-bold",
  }[variant];

  return (
    <div
      className={cn(
        "inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
        variantClasses,
        className
      )}
      {...props}
    />
  );
}

export { Badge };

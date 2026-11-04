import * as React from "react";
import { cn } from "@/lib/utils";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?:
    | "default"
    | "destructive"
    | "outline"
    | "secondary"
    | "ghost"
    | "link"
    | "gold";
  size?: "default" | "sm" | "lg" | "icon";
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "default", ...props }, ref) => {
    const variantClasses = {
      default: "bg-[#0d3b66] text-white hover:bg-[#07223d] shadow-xs",
      destructive: "bg-red-600 text-white hover:bg-red-700 shadow-xs",
      outline:
        "border border-slate-200 bg-white hover:bg-slate-50 text-slate-800 shadow-xs",
      secondary: "bg-slate-100 text-slate-900 hover:bg-slate-200",
      ghost: "hover:bg-slate-100 text-slate-700 hover:text-slate-900",
      link: "text-[#0d3b66] underline-offset-4 hover:underline",
      gold: "bg-[#f4d35e] text-[#07223d] font-bold hover:bg-[#e5c345] shadow-xs",
    }[variant];

    const sizeClasses = {
      default: "h-9 px-4 py-2 text-sm",
      sm: "h-8 rounded-md px-3 text-xs",
      lg: "h-11 rounded-lg px-8 text-base",
      icon: "h-8 w-8 p-0",
    }[size];

    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0d3b66] disabled:pointer-events-none disabled:opacity-50 cursor-pointer",
          variantClasses,
          sizeClasses,
          className
        )}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button };

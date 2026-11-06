"use client";

import * as React from "react";

export interface CardItemProps {
  title: string;
  details: string;
  href?: string;
  icon?: React.ReactNode;
  subtitle?: string;
  className?: string;
  theme?: "dark" | "light";
}

export function CardItem({
  title,
  details,
  href,
  icon,
  subtitle,
  className = "",
  theme = "dark",
}: CardItemProps) {
  const isDark = theme === "dark";

  const content = (
    <>
      {icon && (
        <div
          className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl transition-transform group-hover:scale-105 ${
            isDark
              ? "bg-[#f4d35e]/20 text-[#f4d35e]"
              : "bg-[#07223d] text-[#f4d35e]"
          }`}
          aria-hidden="true"
        >
          {icon}
        </div>
      )}
      <div className="flex-1 min-w-0">
        <span
          className={`block text-xs uppercase font-bold tracking-wider ${
            isDark ? "text-slate-300" : "text-slate-500"
          }`}
        >
          {title}
        </span>
        <span
          className={`block text-base sm:text-lg font-bold transition-colors truncate mt-0.5 ${
            isDark
              ? "text-white group-hover:text-[#f4d35e]"
              : "text-[#07223d] group-hover:text-[#0d3b66]"
          }`}
        >
          {details}
        </span>
        
      </div>
    </>
  );

  const baseStyles = isDark ? " text-white " : " text-[#07223d] ";

  if (href) {
    return (
      <a
        href={href}
        className={`group flex items-start gap-3.5 p-4 rounded-2xl  transition-all focus-visible:outline-2 focus-visible:outline-offset-2 ${baseStyles} ${className}`}
      >
        {content}
      </a>
    );
  }

  return (
    <div
      className={`group flex items-start gap-3.5 p-4 rounded-2xltransition-all ${baseStyles} ${className}`}
    >
      {content}
    </div>
  );
}

export default CardItem;

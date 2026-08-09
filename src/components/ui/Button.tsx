import type { AnchorHTMLAttributes, ReactNode } from "react"

interface ButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: "primary" | "secondary" | "ghost"
  children: ReactNode
}

const variants = {
  primary:
    "bg-brand-600 text-white hover:bg-brand-700 shadow-card hover:shadow-card-hover",
  secondary:
    "bg-white text-ink-900 border border-slate-200 hover:border-brand-300 hover:text-brand-700",
  ghost: "text-ink-900 hover:text-brand-600",
}

export function Button({ variant = "primary", className = "", children, ...props }: ButtonProps) {
  return (
    <a
      {...props}
      className={`inline-flex items-center justify-center gap-2 rounded-lg px-6 py-3 text-sm font-semibold transition-all duration-200 ${variants[variant]} ${className}`}
    >
      {children}
    </a>
  )
}

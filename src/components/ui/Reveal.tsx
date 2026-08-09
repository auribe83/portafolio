import type { ReactNode } from "react"
import { useOnScreen } from "../../hooks/useOnScreen"

interface RevealProps {
  children: ReactNode
  delay?: number
  className?: string
}

/** Envuelve contenido para aplicar un fade-up discreto al entrar en viewport. */
export function Reveal({ children, delay = 0, className = "" }: RevealProps) {
  const { ref, isVisible } = useOnScreen<HTMLDivElement>()

  return (
    <div
      ref={ref}
      className={`reveal ${isVisible ? "is-visible" : ""} ${className}`}
      style={{ transitionDelay: isVisible ? `${delay}ms` : "0ms" }}
    >
      {children}
    </div>
  )
}

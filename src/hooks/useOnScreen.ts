import { useEffect, useRef, useState } from "react"

/**
 * Devuelve un ref y un booleano que se activa la primera vez que el
 * elemento entra en el viewport. Se usa para animaciones sutiles de
 * aparición al hacer scroll (fade + slight translate).
 */
export function useOnScreen<T extends HTMLElement>(threshold = 0.15) {
  const ref = useRef<T | null>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold }
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [threshold])

  return { ref, isVisible }
}

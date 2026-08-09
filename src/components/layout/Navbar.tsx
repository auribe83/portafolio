import { useEffect, useState } from "react"
import { Menu, X, BarChart3 } from "lucide-react"
import { siteConfig } from "../../data/siteConfig"
import { useScrollSpy } from "../../hooks/useScrollSpy"
import { Button } from "../ui/Button"

const sectionIds = siteConfig.nav.map((item) => item.href.replace("#", ""))

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const activeId = useScrollSpy(sectionIds)

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : ""
  }, [isOpen])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/90 shadow-sm backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-8">
        <a href="#inicio" className="flex items-center gap-2 font-bold text-ink-950">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-ink-950 text-white">
            <BarChart3 size={16} strokeWidth={2.25} />
          </span>
          <span className="text-sm sm:text-base">{siteConfig.name}</span>
        </a>

        <ul className="hidden items-center gap-1 lg:flex">
          {siteConfig.nav.map((item) => {
            const id = item.href.replace("#", "")
            const isActive = activeId === id
            return (
              <li key={item.href}>
                <a
                  href={item.href}
                  className={`relative rounded-md px-3.5 py-2 text-sm font-medium transition-colors ${
                    isActive ? "text-brand-700" : "text-slate-600 hover:text-ink-950"
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute inset-x-3 -bottom-px h-0.5 rounded-full bg-brand-600" />
                  )}
                </a>
              </li>
            )
          })}
        </ul>

        <div className="hidden lg:block">
          <Button href="#contacto" className="!px-5 !py-2.5">
            {siteConfig.ctaLabel}
          </Button>
        </div>

        <button
          type="button"
          aria-label="Abrir menú"
          className="text-ink-950 lg:hidden"
          onClick={() => setIsOpen((v) => !v)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {isOpen && (
        <div className="border-t border-slate-100 bg-white px-5 pb-6 pt-2 lg:hidden">
          <ul className="flex flex-col gap-1">
            {siteConfig.nav.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="block rounded-md px-3 py-2.5 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:text-ink-950"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <Button href="#contacto" onClick={() => setIsOpen(false)} className="mt-4 w-full">
            {siteConfig.ctaLabel}
          </Button>
        </div>
      )}
    </header>
  )
}

import { BarChart3, Linkedin, Github, Mail } from "lucide-react"
import { siteConfig } from "../../data/siteConfig"

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-slate-100 bg-ink-950 text-slate-300">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-5 py-12 sm:px-8 md:flex-row md:items-start md:justify-between">
        <div className="max-w-sm">
          <a href="#inicio" className="flex items-center gap-2 font-bold text-white">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/10">
              <BarChart3 size={16} strokeWidth={2.25} />
            </span>
            <span>{siteConfig.name}</span>
          </a>
          <p className="mt-3 text-sm leading-relaxed text-slate-400">
            {siteConfig.role} · {siteConfig.specialization}
          </p>
        </div>

        <div className="flex flex-col gap-3 text-sm">
          <span className="font-semibold text-white">Navegación</span>
          <div className="grid grid-cols-2 gap-x-8 gap-y-2">
            {siteConfig.nav.map((item) => (
              <a key={item.href} href={item.href} className="text-slate-400 hover:text-white">
                {item.label}
              </a>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-3 text-sm">
          <span className="font-semibold text-white">Contacto</span>
          <div className="flex items-center gap-4">
            <a
              href={`mailto:${siteConfig.email}`}
              aria-label="Correo electrónico"
              className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/5 text-slate-300 transition-colors hover:bg-white/10 hover:text-white"
            >
              <Mail size={16} />
            </a>
            <a
              href={siteConfig.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/5 text-slate-300 transition-colors hover:bg-white/10 hover:text-white"
            >
              <Linkedin size={16} />
            </a>
            <a
              href={siteConfig.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/5 text-slate-300 transition-colors hover:bg-white/10 hover:text-white"
            >
              <Github size={16} />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-white/5 px-5 py-5 text-center text-xs text-slate-500 sm:px-8">
        © {year} {siteConfig.name}. Todos los derechos reservados.
      </div>
    </footer>
  )
}

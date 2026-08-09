import { Mail, Linkedin, Github, MessageCircle } from "lucide-react"
import { siteConfig } from "../../data/siteConfig"
import { Reveal } from "../ui/Reveal"
import { Button } from "../ui/Button"

const channels = [
  {
    label: "Correo electrónico",
    value: siteConfig.email,
    href: `mailto:${siteConfig.email}`,
    icon: Mail,
  },
  {
    label: "WhatsApp",
    value: siteConfig.whatsapp,
    href: siteConfig.whatsappLink,
    icon: MessageCircle,
  },
  {
    label: "LinkedIn",
    value: "Ver perfil",
    href: siteConfig.linkedin,
    icon: Linkedin,
  },
  {
    label: "GitHub",
    value: siteConfig.github,
    href: siteConfig.github,
    icon: Github,
  },
]

export function Contact() {
  return (
    <section id="contacto" className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-5xl px-5 sm:px-8">
        <Reveal>
          <div className="rounded-3xl border border-slate-200 bg-slate-50 px-6 py-14 text-center sm:px-16 sm:py-20">
            <h2 className="text-3xl font-bold tracking-tight text-ink-950 sm:text-4xl">
              ¿Tienes datos pero necesitas convertirlos en información útil?
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg">
              Cuéntame sobre tu proyecto y evaluemos cómo puedo ayudarte a transformar tus
              datos en una solución que genere valor para tu organización.
            </p>

            <div className="mt-8 flex justify-center">
              <Button href={`mailto:${siteConfig.email}`} variant="primary">
                <MessageCircle size={16} />
                {siteConfig.ctaLabel}
              </Button>
            </div>

            <div className="mx-auto mt-12 grid max-w-2xl grid-cols-2 gap-4 sm:grid-cols-4">
              {channels.map(({ label, value, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="group flex flex-col items-center gap-2 rounded-xl border border-slate-200 bg-white p-4 text-center transition-colors hover:border-brand-300"
                >
                  <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-slate-50 text-ink-700 transition-colors group-hover:bg-brand-50 group-hover:text-brand-600">
                    <Icon size={16} />
                  </span>
                  <span className="text-xs font-semibold text-ink-900">{label}</span>
                  <span className="truncate text-[11px] text-slate-500">{value}</span>
                </a>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

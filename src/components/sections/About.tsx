import { BarChart3, Database, Workflow, LayoutDashboard, Cpu } from "lucide-react"
import { Reveal } from "../ui/Reveal"
import { SectionHeading } from "../ui/SectionHeading"

const highlights = [
  { icon: BarChart3, label: "Business Intelligence" },
  { icon: Cpu, label: "Data Analytics" },
  { icon: Database, label: "Database Development" },
  { icon: Workflow, label: "ETL" },
  { icon: LayoutDashboard, label: "Oracle APEX" },
]

export function About() {
  return (
    <section id="sobre-mi" className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <SectionHeading eyebrow="Sobre mí" title="Ingeniería aplicada a datos con propósito de negocio" />
          </Reveal>

          <Reveal delay={100}>
            <div className="flex flex-col gap-5">
              <p className="text-base leading-relaxed text-slate-600 sm:text-lg">
                Soy Ingeniero en Informática especializado en transformar datos en soluciones
                que facilitan la toma de decisiones. Combino Business Intelligence, análisis
                de datos, bases de datos y desarrollo para crear herramientas adaptadas a las
                necesidades reales de cada organización.
              </p>
              <p className="text-base leading-relaxed text-slate-600 sm:text-lg">
                Mi trabajo va desde el modelado de datos hasta la entrega de dashboards y
                aplicaciones listas para usarse, siempre priorizando claridad, calidad de
                datos y utilidad para quien toma las decisiones.
              </p>

              <div className="mt-2 flex flex-wrap gap-3">
                {highlights.map(({ icon: Icon, label }) => (
                  <span
                    key={label}
                    className="inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-slate-50 px-3.5 py-2 text-sm font-medium text-ink-800"
                  >
                    <Icon size={15} className="text-brand-600" />
                    {label}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

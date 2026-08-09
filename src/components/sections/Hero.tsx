import { ArrowRight, MessageCircle } from "lucide-react"
import { siteConfig } from "../../data/siteConfig"
import { Button } from "../ui/Button"
import { DashboardMockup } from "../ui/DashboardMockup"

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative overflow-hidden bg-white pt-32 pb-20 sm:pt-40 sm:pb-28"
    >
      {/* Patrón de puntos muy sutil, sin degradados llamativos */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.4]"
        style={{
          backgroundImage:
            "radial-gradient(circle, #CBD5E1 1px, transparent 1px)",
          backgroundSize: "28px 28px",
          maskImage: "linear-gradient(to bottom, black, transparent 85%)",
        }}
      />

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 px-5 sm:px-8 lg:grid-cols-2 lg:gap-12">
        <div className="flex flex-col gap-6">
          <span className="inline-flex w-fit items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-4 py-1.5 text-xs font-semibold text-ink-700">
            Datos → Información → Decisiones
          </span>

          <h1 className="text-4xl font-extrabold leading-[1.1] tracking-tight text-ink-950 sm:text-5xl lg:text-[3.25rem]">
            Transformo datos en{" "}
            <span className="text-brand-600">decisiones estratégicas</span>
          </h1>

          <p className="max-w-xl text-lg leading-relaxed text-slate-600">
            {siteConfig.role} especializado en Business Intelligence, análisis de datos,
            bases de datos, ETL y desarrollo empresarial con Oracle APEX.
          </p>

          <div className="mt-2 flex flex-col gap-3 sm:flex-row">
            <Button href="#proyectos" variant="primary">
              Ver proyectos
              <ArrowRight size={16} />
            </Button>
            <Button href="#contacto" variant="secondary">
              <MessageCircle size={16} />
              Hablemos de tu proyecto
            </Button>
          </div>

          <div className="mt-4 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-slate-500">
            <span>Power BI</span>
            <span className="h-1 w-1 rounded-full bg-slate-300" />
            <span>Python</span>
            <span className="h-1 w-1 rounded-full bg-slate-300" />
            <span>SQL &amp; Oracle</span>
            <span className="h-1 w-1 rounded-full bg-slate-300" />
            <span>ETL</span>
            <span className="h-1 w-1 rounded-full bg-slate-300" />
            <span>Oracle APEX</span>
          </div>
        </div>

        <DashboardMockup />
      </div>
    </section>
  )
}

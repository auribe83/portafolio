import { methodologySteps } from "../../data/methodology"
import { Reveal } from "../ui/Reveal"
import { SectionHeading } from "../ui/SectionHeading"

export function Methodology() {
  return (
    <section id="experiencia" className="bg-ink-950 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Metodología"
            title="Cómo trabajo"
            description="Un proceso claro para pasar de la necesidad de negocio a una solución de datos lista para usarse."
            align="center"
            tone="dark"
          />
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {methodologySteps.map((step, i) => (
            <Reveal key={step.number} delay={i * 80}>
              <div className="h-full rounded-2xl border border-white/10 bg-white/[0.03] p-6">
                <span className="text-3xl font-extrabold text-white/15">{step.number}</span>
                <h3 className="mt-3 text-base font-semibold text-white">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-400">{step.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

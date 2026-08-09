import { Check, X } from "lucide-react"
import { painPoints, solutions } from "../../data/painPoints"
import { Reveal } from "../ui/Reveal"
import { SectionHeading } from "../ui/SectionHeading"

export function HowICanHelp() {
  return (
    <section className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="¿Te suena familiar?"
            title="Cómo puedo ayudar a tu empresa"
            description="Estos son algunos de los problemas más comunes que resuelvo trabajando con datos."
            align="center"
          />
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-10 lg:grid-cols-2">
          <Reveal>
            <div className="h-full rounded-2xl border border-slate-200 bg-slate-50 p-8">
              <h3 className="mb-6 text-lg font-semibold text-ink-950">Problemas frecuentes</h3>
              <ul className="flex flex-col gap-4">
                {painPoints.map((point) => (
                  <li key={point} className="flex items-start gap-3 text-slate-700">
                    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-red-50 text-red-500">
                      <X size={13} strokeWidth={2.5} />
                    </span>
                    <span className="text-sm sm:text-base">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="h-full rounded-2xl border border-brand-100 bg-brand-50/50 p-8">
              <h3 className="mb-6 text-lg font-semibold text-ink-950">Lo que puedo construir para ti</h3>
              <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                {solutions.map((solution) => (
                  <li key={solution} className="flex items-start gap-3 text-ink-800">
                    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent-500/15 text-accent-600">
                      <Check size={13} strokeWidth={2.5} />
                    </span>
                    <span className="text-sm sm:text-base font-medium">{solution}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

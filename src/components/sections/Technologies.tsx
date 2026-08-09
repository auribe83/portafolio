import { technologyGroups } from "../../data/technologies"
import { Reveal } from "../ui/Reveal"
import { SectionHeading } from "../ui/SectionHeading"

export function Technologies() {
  return (
    <section id="tecnologias" className="bg-slate-50 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Tecnologías"
            title="Herramientas que uso para convertir datos en valor"
            align="center"
          />
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {technologyGroups.map((group, i) => (
            <Reveal key={group.category} delay={i * 70}>
              <div className="h-full rounded-2xl border border-slate-200 bg-white p-6">
                <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide text-brand-600">
                  {group.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-lg border border-slate-200 bg-slate-50 px-3.5 py-2 text-sm font-medium text-ink-800"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

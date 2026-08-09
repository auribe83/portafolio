import { services } from "../../data/services"
import { Reveal } from "../ui/Reveal"
import { SectionHeading } from "../ui/SectionHeading"
import { ServiceCard } from "../ui/ServiceCard"

export function Services() {
  return (
    <section id="servicios" className="bg-slate-50 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Servicios"
            title="Soluciones de datos de punta a punta"
            description="Desde el modelado de datos hasta dashboards y aplicaciones empresariales, cubriendo cada etapa del ciclo de vida de la información."
            align="center"
          />
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <Reveal key={service.title} delay={i * 80}>
              <ServiceCard service={service} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

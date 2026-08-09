import type { Service } from "../../data/services"
import { Badge } from "./Badge"

export function ServiceCard({ service }: { service: Service }) {
  const Icon = service.icon

  return (
    <div className="group flex h-full flex-col gap-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-brand-200 hover:shadow-card-hover">
      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50 text-brand-600 transition-colors group-hover:bg-brand-600 group-hover:text-white">
        <Icon size={22} strokeWidth={1.75} />
      </div>
      <h3 className="text-lg font-semibold text-ink-950">{service.title}</h3>
      <p className="text-sm leading-relaxed text-slate-600">{service.description}</p>
      <div className="mt-auto flex flex-wrap gap-2 pt-2">
        {service.technologies.map((tech) => (
          <Badge key={tech}>{tech}</Badge>
        ))}
      </div>
    </div>
  )
}

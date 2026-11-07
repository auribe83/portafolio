import { ArrowUpRight, ChevronUp, Eye } from "lucide-react"
import type { Project } from "../../data/projects"

const linkClass =
  "inline-flex items-center gap-1.5 text-sm font-semibold text-brand-600 transition-colors hover:text-brand-700"

interface ProjectCardProps {
  project: Project
  showEmbed?: boolean
  onToggleEmbed?: () => void
}

export function ProjectCard({ project, showEmbed = false, onToggleEmbed }: ProjectCardProps) {

  return (
    <div className="flex h-full flex-col gap-5 rounded-2xl border border-slate-200 bg-white p-7 shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-brand-200 hover:shadow-card-hover">
      <div className="flex items-start justify-between gap-4">
        <div>
          <span className="text-xs font-semibold uppercase tracking-wide text-accent-600">
            {project.category}
          </span>
          <h3 className="mt-1 text-xl font-semibold text-ink-950">{project.title}</h3>
        </div>
      </div>

      <div className="flex flex-wrap gap-2">
        {project.technologies.map((tech) => (
          <span
            key={tech}
            className="rounded-md bg-slate-50 px-2.5 py-1 text-xs font-medium text-slate-600"
          >
            {tech}
          </span>
        ))}
      </div>

      <dl className="grid grid-cols-1 gap-3 text-sm">
        <div>
          <dt className="font-semibold text-ink-900">Problema</dt>
          <dd className="text-slate-600">{project.problem}</dd>
        </div>
        <div>
          <dt className="font-semibold text-ink-900">Solución</dt>
          <dd className="text-slate-600">{project.solution}</dd>
        </div>
        {project.result && (
          <div>
            <dt className="font-semibold text-ink-900">Resultado</dt>
            <dd className="text-slate-500 italic">{project.result}</dd>
          </div>
        )}
      </dl>

      {project.kpis && (
        <div className="flex flex-wrap gap-2 border-t border-slate-100 pt-4">
          {project.kpis.map((kpi) => (
            <span
              key={kpi}
              className="rounded-full border border-slate-200 px-3 py-1 text-xs font-medium text-ink-700"
            >
              {kpi}
            </span>
          ))}
        </div>
      )}

      {project.embedUrl && showEmbed && (
        <div className="overflow-hidden rounded-xl border border-slate-200 bg-slate-50">
          <iframe
            title={project.title}
            src={project.embedUrl}
            allowFullScreen
            className="aspect-[16/10] w-full"
          />
        </div>
      )}

      <div className="mt-auto flex flex-wrap items-center gap-x-6 gap-y-2">
        {project.embedUrl ? (
          <>
            <button
              type="button"
              onClick={onToggleEmbed}
              aria-expanded={showEmbed}
              className={linkClass}
            >
              {showEmbed ? (
                <>
                  Ocultar proyecto
                  <ChevronUp size={16} />
                </>
              ) : (
                <>
                  Ver proyecto
                  <Eye size={16} />
                </>
              )}
            </button>
            {showEmbed && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-slate-500 transition-colors hover:text-brand-700"
              >
                Abrir en pestaña nueva
                <ArrowUpRight size={16} />
              </a>
            )}
          </>
        ) : (
          <a href={project.link} target="_blank" rel="noopener noreferrer" className={linkClass}>
            Ver proyecto
            <ArrowUpRight size={16} />
          </a>
        )}
      </div>
    </div>
  )
}

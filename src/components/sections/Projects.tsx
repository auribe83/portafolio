import { useState } from "react"
import { projects } from "../../data/projects"
import { Reveal } from "../ui/Reveal"
import { SectionHeading } from "../ui/SectionHeading"
import { ProjectCard } from "../ui/ProjectCard"

export function Projects() {
  // Proyecto cuyo dashboard está desplegado (solo uno a la vez)
  const [openProject, setOpenProject] = useState<string | null>(null)

  return (
    <section id="proyectos" className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Portafolio"
            title="Proyectos"
            description="Ejemplos de demostración del tipo de soluciones que desarrollo. Se irán reemplazando por proyectos reales a medida que estén disponibles."
            align="center"
          />
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2">
          {projects.map((project, i) => {
            const isOpen = openProject === project.title
            return (
              <Reveal
                key={project.title}
                delay={i * 60}
                // La tarjeta ocupa todo el ancho solo mientras su dashboard está desplegado
                className={isOpen ? "md:col-span-2" : ""}
              >
                <ProjectCard
                  project={project}
                  showEmbed={isOpen}
                  onToggleEmbed={() => setOpenProject(isOpen ? null : project.title)}
                />
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}

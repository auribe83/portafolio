import type { LucideIcon } from "lucide-react"
import { BarChart3, Database, Cpu, LayoutDashboard, Workflow } from "lucide-react"

export interface Service {
  icon: LucideIcon
  title: string
  description: string
  technologies: string[]
}

export const services: Service[] = [
  {
    icon: BarChart3,
    title: "Power BI & Business Intelligence",
    description:
      "Dashboards interactivos alineados con tus KPIs para convertir información compleja en decisiones claras.",
    technologies: ["Power BI", "DAX", "Power Query", "SQL"],
  },
  {
    icon: Cpu,
    title: "Análisis de Datos con Python",
    description:
      "Procesamiento, transformación y análisis de datos para descubrir patrones, tendencias e información relevante.",
    technologies: ["Python", "Pandas", "NumPy", "Jupyter"],
  },
  {
    icon: Database,
    title: "Desarrollo de Bases de Datos",
    description:
      "Diseño y desarrollo de soluciones en Oracle, SQL Server, PostgreSQL y MySQL.",
    technologies: ["Oracle", "SQL Server", "PostgreSQL", "MySQL"],
  },
  {
    icon: LayoutDashboard,
    title: "Oracle APEX",
    description:
      "Aplicaciones empresariales rápidas, seguras y conectadas directamente con tus datos.",
    technologies: ["Oracle APEX", "PL/SQL", "Oracle Database"],
  },
  {
    icon: Workflow,
    title: "ETL e Integración de Datos",
    description:
      "Automatización de procesos de extracción, transformación e integración de información entre diferentes sistemas.",
    technologies: ["Pentaho Data Integration", "SQL", "Python"],
  },
]

export interface Project {
  title: string
  category: string
  technologies: string[]
  problem: string
  solution: string
  result: string
  kpis?: string[]
  link: string
  isPlaceholder: boolean
}

// Proyectos de demostración. Reemplaza "problem", "solution", "result",
// "kpis" y "link" con la información real de tus proyectos cuando la tengas.
// Los campos marcados como [PLACEHOLDER] deben actualizarse antes de publicar.
export const projects: Project[] = [
  {
    title: "Dashboard Ejecutivo de Ventas",
    category: "Business Intelligence",
    technologies: ["Power BI", "DAX", "SQL"],
    problem:
      "La dirección comercial necesita visibilidad rápida sobre ventas, crecimiento y cumplimiento de objetivos sin depender de reportes manuales dispersos.",
    solution:
      "Dashboard diseñado para visualizar ventas, crecimiento, cumplimiento de objetivos, rentabilidad y comportamiento comercial en un solo lugar.",
    result: "[RESULTADO PENDIENTE DE COMPLETAR CON DATOS REALES DEL PROYECTO]",
    kpis: ["Ventas totales", "Crecimiento", "Ticket promedio", "Margen", "Cumplimiento de objetivos"],
    link: "[PROYECTO REAL]",
    isPlaceholder: true,
  },
  {
    title: "Dashboard Financiero",
    category: "Business Intelligence",
    technologies: ["Power BI", "SQL"],
    problem:
      "El equipo financiero requiere consolidar ingresos, gastos y flujo de caja de distintas fuentes para comparar resultados mes a mes.",
    solution:
      "Dashboard financiero que integra ingresos, gastos, rentabilidad y flujo financiero con comparativas mensuales claras.",
    result: "[RESULTADO PENDIENTE DE COMPLETAR CON DATOS REALES DEL PROYECTO]",
    kpis: ["Ingresos", "Gastos", "Rentabilidad", "Flujo financiero", "Comparación mensual"],
    link: "[PROYECTO REAL]",
    isPlaceholder: true,
  },
  {
    title: "Pipeline ETL",
    category: "ETL / Integración de Datos",
    technologies: ["Pentaho", "SQL", "PostgreSQL"],
    problem:
      "La información necesaria para el análisis proviene de múltiples sistemas con formatos y calidad de datos distintos.",
    solution:
      "Proceso ETL diseñado para integrar información proveniente de diferentes fuentes, aplicar reglas de transformación y consolidar los datos para su posterior análisis.",
    result: "[RESULTADO PENDIENTE DE COMPLETAR CON DATOS REALES DEL PROYECTO]",
    link: "[PROYECTO REAL]",
    isPlaceholder: true,
  },
  {
    title: "Sistema Empresarial Oracle APEX",
    category: "Desarrollo Oracle APEX",
    technologies: ["Oracle APEX", "Oracle Database", "PL/SQL"],
    problem:
      "Se requiere una herramienta interna para gestionar información y operaciones sin depender de hojas de cálculo dispersas.",
    solution:
      "Aplicación web empresarial para gestionar información, usuarios, operaciones, consultas y reportes.",
    result: "[RESULTADO PENDIENTE DE COMPLETAR CON DATOS REALES DEL PROYECTO]",
    link: "[PROYECTO REAL]",
    isPlaceholder: true,
  },
  {
    title: "Análisis de Datos con Python",
    category: "Data Analytics",
    technologies: ["Python", "Pandas", "Jupyter"],
    problem:
      "Existe un conjunto de datos con potencial de generar información valiosa, pero sin un análisis estructurado que revele patrones útiles.",
    solution:
      "Análisis exploratorio de un conjunto de datos para detectar patrones, tendencias y relaciones relevantes.",
    result: "[RESULTADO PENDIENTE DE COMPLETAR CON DATOS REALES DEL PROYECTO]",
    link: "[PROYECTO REAL]",
    isPlaceholder: true,
  },
]

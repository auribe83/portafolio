export interface Project {
  title: string
  category: string
  technologies: string[]
  problem: string
  solution: string
  // Opcional: si no hay resultado real, omítelo y la tarjeta no mostrará la sección
  result?: string
  kpis?: string[]
  link: string
  // Opcional: URL de incrustación (iframe) para mostrar el proyecto dentro de la tarjeta
  embedUrl?: string
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
    kpis: ["Ventas totales", "Crecimiento", "Ticket promedio", "Margen", "Cumplimiento de objetivos"],
    link: "https://app.powerbi.com/view?r=eyJrIjoiY2ZlNjUyOWItYTkzMi00YTUxLTgwZWEtZWMyMzY4ZTNjZWJiIiwidCI6ImMxZmJhZTFlLTYzZTgtNGE3Yi05NjM1LWIxMTcwMzJhMDcyNiIsImMiOjR9",
    embedUrl:
      "https://app.powerbi.com/view?r=eyJrIjoiY2ZlNjUyOWItYTkzMi00YTUxLTgwZWEtZWMyMzY4ZTNjZWJiIiwidCI6ImMxZmJhZTFlLTYzZTgtNGE3Yi05NjM1LWIxMTcwMzJhMDcyNiIsImMiOjR9",
    isPlaceholder: false,
  },
  {
    title: "Dashboard Financiero",
    category: "Business Intelligence",
    technologies: ["Power BI", "SQL"],
    problem:
      "El equipo financiero requiere consolidar ingresos, gastos y flujo de caja de distintas fuentes para comparar resultados mes a mes.",
    solution:
      "Dashboard financiero que integra ingresos, gastos, rentabilidad y flujo financiero con comparativas mensuales claras.",
    kpis: ["Ingresos", "Gastos", "Rentabilidad", "Flujo financiero", "Comparación mensual"],
    link: "[PROYECTO REAL]",
    isPlaceholder: true,
  },
  {
    title: "Tablero Logístico",
    category: "Business Intelligence",
    technologies: ["Power BI", "DAX"],
    problem:
      "El costo del flete se revisaba sin una vista clara de dónde se concentraba: no era fácil saber qué zonas, tipos de sede o estados de pedido superaban el límite aceptable.",
    solution:
      "Tablero que mide el flete como porcentaje de las ventas y lo compara contra un límite configurable. Los segmentos que lo superan se marcan en rojo, y se puede filtrar por mes, día y conductor.",
    kpis: ["Ventas", "Flete", "% Flete", "# Pedidos", "% Cumplimiento"],
    link:
      "https://app.powerbi.com/view?r=eyJrIjoiYjBiZjIwMmYtNzRmYS00MGY2LTg2MjAtMDQzZDdkZjM2ZmUyIiwidCI6ImMxZmJhZTFlLTYzZTgtNGE3Yi05NjM1LWIxMTcwMzJhMDcyNiIsImMiOjR9",
    embedUrl:
      "https://app.powerbi.com/view?r=eyJrIjoiYjBiZjIwMmYtNzRmYS00MGY2LTg2MjAtMDQzZDdkZjM2ZmUyIiwidCI6ImMxZmJhZTFlLTYzZTgtNGE3Yi05NjM1LWIxMTcwMzJhMDcyNiIsImMiOjR9",
    isPlaceholder: false,
  },
  {
    title: "Pipeline ETL",
    category: "ETL / Integración de Datos",
    technologies: ["Pentaho", "SQL", "PostgreSQL"],
    problem:
      "La información necesaria para el análisis proviene de múltiples sistemas con formatos y calidad de datos distintos.",
    solution:
      "Proceso ETL diseñado para integrar información proveniente de diferentes fuentes, aplicar reglas de transformación y consolidar los datos para su posterior análisis.",
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
    link: "[PROYECTO REAL]",
    isPlaceholder: true,
  },
]

export interface MethodologyStep {
  number: string
  title: string
  description: string
}

export const methodologySteps: MethodologyStep[] = [
  {
    number: "01",
    title: "Entender",
    description: "Analizar la necesidad, los datos disponibles y los objetivos del proyecto.",
  },
  {
    number: "02",
    title: "Diseñar",
    description: "Definir la arquitectura, indicadores, modelo de datos o solución.",
  },
  {
    number: "03",
    title: "Desarrollar",
    description: "Construir el dashboard, proceso ETL, análisis o aplicación.",
  },
  {
    number: "04",
    title: "Validar",
    description: "Comprobar calidad de datos, funcionamiento e indicadores.",
  },
  {
    number: "05",
    title: "Entregar",
    description: "Implementar una solución clara, documentada y preparada para utilizarse.",
  },
]

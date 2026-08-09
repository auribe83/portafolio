// ─────────────────────────────────────────────────────────────
// CONFIGURACIÓN GENERAL DEL SITIO
// Edita aquí tu nombre, contacto y enlaces. Todo lo que empieza
// y termina con [ ] es un placeholder pendiente de reemplazar.
// ─────────────────────────────────────────────────────────────

export const siteConfig = {
  name: "Argenis Uribe",
  role: "Ingeniero en Informática",
  specialization:
    "Business Intelligence · Análisis de Datos · Bases de Datos · ETL · Oracle APEX",
  location: "Caracas - Venezuela",

  email: "auribe83@gmail.com",
  whatsapp: "+584122697083",
  // Enlace directo de WhatsApp (se genera a partir del número de arriba)
  whatsappLink: "https://wa.me/584122697083",

  linkedin: "https://www.linkedin.com/in/argenis-uribe-42365724/",
  github: "https://github.com/auribe83",

  nav: [
    { label: "Inicio", href: "#inicio" },
    { label: "Sobre mí", href: "#sobre-mi" },
    { label: "Servicios", href: "#servicios" },
    { label: "Tecnologías", href: "#tecnologias" },
    { label: "Proyectos", href: "#proyectos" },
    { label: "Experiencia", href: "#experiencia" },
    { label: "Contacto", href: "#contacto" },
  ],

  ctaLabel: "Hablemos de tu proyecto",
} as const

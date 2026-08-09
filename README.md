# Portafolio — Argenis Uribe

Landing page profesional de servicios de datos, BI y desarrollo (React + TypeScript + Tailwind CSS, construido con Vite).

## Requisitos

- Node.js 18 o superior

## Instalación y desarrollo

```bash
npm install
npm run dev
```

Abre `http://localhost:5173`.

## Build de producción

```bash
npm run build
npm run preview   # para previsualizar el build localmente
```

El resultado queda en la carpeta `dist/`, listo para subir a Vercel, Netlify, GitHub Pages o cualquier hosting estático.

## Dónde editar el contenido

Todo el contenido vive en `src/data/`, sin tocar los componentes:

- `siteConfig.ts` — nombre, rol, contacto (email, WhatsApp, LinkedIn, GitHub), navegación.
- `services.ts` — tarjetas de servicios.
- `technologies.ts` — tecnologías agrupadas por categoría.
- `projects.ts` — proyectos del portafolio (problema / solución / resultado / KPIs).
- `methodology.ts` — pasos de la metodología de trabajo.
- `painPoints.ts` — problemas frecuentes y soluciones de la sección "Cómo puedo ayudar".

## Pendientes antes de publicar

Busca estos placeholders y reemplázalos con tu información real:

- `[GITHUB]` en `src/data/siteConfig.ts` — URL de tu perfil de GitHub.
- `[UBICACIÓN]` en `src/data/siteConfig.ts` — ciudad/país si quieres mostrarla.
- `[PROYECTO REAL]` en `src/data/projects.ts` — enlace de cada proyecto cuando esté publicado.
- `[RESULTADO PENDIENTE...]` en `src/data/projects.ts` — resultado real de cada proyecto (no se inventaron cifras ni porcentajes).
- `https://tu-dominio.com/` en `index.html` (`link rel="canonical"`) — tu dominio final, una vez lo tengas.
- Opcional: agrega una imagen para Open Graph (`og:image`) en `index.html` una vez tengas el dominio publicado.

## Estructura del proyecto

```
src/
  components/
    layout/     Navbar, Footer
    sections/   Hero, About, Services, HowICanHelp, Technologies, Projects, Methodology, Contact
    ui/         Componentes reutilizables (Button, Badge, ServiceCard, ProjectCard, etc.)
  data/         Todo el contenido editable
  hooks/        useScrollSpy (nav activo), useOnScreen (animaciones al hacer scroll)
```

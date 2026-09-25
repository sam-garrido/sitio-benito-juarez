# Sitio web · Instituto Superior Benito Juárez

Página promocional hecha con Next.js 15, Tailwind CSS 4 y TypeScript.

## Cómo correrla

```bash
npm install
npm run dev
```

Abre http://localhost:3000

## Cómo reemplazar la información

Todo el contenido (teléfono, misión, visión, requisitos, programas, pasos de inscripción)
está en **`lib/contenido.ts`**. Las líneas con `// EJEMPLO` son datos de muestra.
No hace falta tocar los componentes.

- **Logo real:** copia el archivo a `public/logo.jpg` y en `lib/contenido.ts` cambia
  `logo: "/logo.svg"` por `logo: "/logo.jpg"`. Para el ícono de la pestaña, reemplaza `app/icon.svg`.
- **Números de REVOE:** verifícalos contra los documentos oficiales.
- **Portal de alumnos:** el botón "Acceso alumnos" apunta a `portalUrl`.

## Publicar en Vercel

1. Sube esta carpeta a un repositorio de GitHub.
2. En Vercel: Add New, Project, importa el repositorio. No necesita variables de entorno.
3. Cada cambio que subas a GitHub se publica solo.

## Fotos de la galería

Agrega tus fotos reales en `public/fotos/instalaciones/`, `public/fotos/alumnos/`
y `public/fotos/egresados/` (formatos .jpg, .jpeg, .png o .webp). La página las
detecta solas al compilar (`npm run build`); no hay que tocar ningún componente.
Si una carpeta está vacía, esa categoría no aparece; si las tres están vacías,
toda la sección "Galería" se oculta.

## Plan de estudios de cada carrera

Las materias por semestre/cuatrimestre, el perfil de egreso y el campo laboral
de cada carrera están en `lib/planes.ts`. Todo lo de ese archivo es de EJEMPLO
y hay que reemplazarlo con la información oficial. Cuando ya esté lista, cambia
`planEsEjemplo` a `false` en ese mismo archivo para quitar el aviso de
"plan preliminar" en las páginas de cada carrera.

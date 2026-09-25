import fs from "node:fs";
import path from "node:path";

const EXTENSIONES = new Set([".jpg", ".jpeg", ".png", ".webp"]);

export type Categoria = {
  id: "instalaciones" | "alumnos" | "egresados";
  titulo: string;
  archivos: string[]; // rutas públicas, listas para usar en <img src>
};

const TITULOS: Record<Categoria["id"], string> = {
  instalaciones: "Instalaciones",
  alumnos: "Alumnos",
  egresados: "Egresados",
};

function leerCarpeta(id: Categoria["id"]): string[] {
  const dir = path.join(process.cwd(), "public", "fotos", id);
  try {
    return fs
      .readdirSync(dir)
      .filter((archivo) => EXTENSIONES.has(path.extname(archivo).toLowerCase()))
      .sort()
      .map((archivo) => `/fotos/${id}/${archivo}`);
  } catch {
    return [];
  }
}

// Se calcula una sola vez, al compilar la página (esto es contenido estático).
export function obtenerGaleria(): Categoria[] {
  return (["instalaciones", "alumnos", "egresados"] as const)
    .map((id) => ({ id, titulo: TITULOS[id], archivos: leerCarpeta(id) }))
    .filter((categoria) => categoria.archivos.length > 0);
}



// Foto para la tarjeta del inicio: toma la primera de "instalaciones" y,
// si no hay ninguna todavía, la primera que encuentre en cualquier categoría.
// Mientras no haya ninguna foto, la tarjeta usa un fondo institucional de muestra.
export function obtenerFotoInicio(): string | null {
  for (const id of ["instalaciones", "alumnos", "egresados"] as const) {
    const [primera] = leerCarpeta(id);
    if (primera) return primera;
  }
  return null;
}

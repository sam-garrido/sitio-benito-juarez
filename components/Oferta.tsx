import { ArrowRight, BookOpen, ChefHat, GraduationCap, Scale, type LucideIcon } from "lucide-react";
import { programas, type Programa } from "@/lib/contenido";

const iconos: Record<Programa["id"], LucideIcon> = {
  derecho: Scale,
  gastronomia: ChefHat,
  educacion: BookOpen,
  doctorado: GraduationCap,
};

export default function Oferta() {
  return (
    <section id="oferta" className="bg-papel py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="max-w-2xl">
          <h2 className="font-display text-4xl font-bold leading-tight text-republica-900 sm:text-5xl">
            Oferta educativa
          </h2>
          <p className="mt-4 text-lg text-tinta/75">
            Tres licenciaturas y un doctorado, todos con reconocimiento de validez oficial (REVOE).
          </p>
        </div>

        <ul className="mt-12 divide-y divide-republica-900/15 border-y border-republica-900/15">
          {programas.map((p) => {
            const Icono = iconos[p.id];
            return (
              <li
                key={p.id}
                className="grid gap-6 py-9 transition-colors hover:bg-white lg:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)_auto] lg:items-center lg:gap-10 lg:px-6"
              >
                <div className="flex items-start gap-4">
                  <span className="mt-1 grid h-12 w-12 shrink-0 place-items-center rounded-full bg-republica-900 text-oro-claro">
                    <Icono className="h-6 w-6" aria-hidden="true" />
                  </span>
                  <div>
                    <h3 className="font-display text-3xl font-bold leading-tight text-republica-900">{p.nombre}</h3>
                    <p className="mt-1 font-semibold text-grana">
                      {p.nivel} de {p.duracion}
                      {p.nota ? `, ${p.nota}` : ""}
                    </p>
                    <p className="mt-1 text-sm text-tinta/60">{p.revoe}</p>
                  </div>
                </div>

                <div>
                  <p className="leading-relaxed text-tinta/85">{p.resumen}</p>
                  <ul className="mt-3 space-y-1.5 text-[15px] text-tinta/75">
                    {p.aprenderas.map((punto) => (
                      <li key={punto} className="flex gap-3">
                        <span className="mt-2 h-2 w-2 shrink-0 bg-oro" aria-hidden="true" />
                        {punto}
                      </li>
                    ))}
                  </ul>
                </div>

                <a
                  href={`/carreras/${p.slug}`}
                  className="inline-flex items-center justify-center gap-2 rounded-md border-2 border-republica-900 px-5 py-3 font-semibold text-republica-900 transition hover:bg-republica-900 hover:text-white lg:justify-self-end"
                >
                  Ver plan de estudios
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

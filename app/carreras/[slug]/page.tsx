import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, BookOpen, ChefHat, GraduationCap, Scale, type LucideIcon } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { institucion, programas, type Programa } from "@/lib/contenido";
import { detalles, nombrePeriodo, planEsEjemplo } from "@/lib/planes";
import { enlaceWhatsApp } from "@/lib/whatsapp";

const iconos: Record<Programa["id"], LucideIcon> = {
  derecho: Scale,
  gastronomia: ChefHat,
  educacion: BookOpen,
  doctorado: GraduationCap,
};

// Genera de antemano una página por cada carrera (/carreras/derecho, etc.)
export function generateStaticParams() {
  return programas.map((p) => ({ slug: p.slug }));
}

function buscarPrograma(slug: string) {
  return programas.find((p) => p.slug === slug);
}

type ParametrosPagina = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: ParametrosPagina): Promise<Metadata> {
  const { slug } = await params;
  const programa = buscarPrograma(slug);
  if (!programa) return {};
  return {
    title: `${programa.nombre} | ${institucion.nombre}`,
    description: `Plan de estudios, perfil de egreso y campo laboral de ${programa.nombre} en el ${institucion.nombre}, en ${institucion.ubicacion}.`,
  };
}

export default async function PaginaCarrera({ params }: ParametrosPagina) {
  const { slug } = await params;
  const programa = buscarPrograma(slug);
  if (!programa) notFound();

  const detalle = detalles[programa.id];
  const Icono = iconos[programa.id];

  return (
    <>
      <Header />
      <main>
        <section className="bg-republica-950 text-white">
          <div className="mx-auto max-w-5xl px-4 pb-14 pt-10 sm:px-6">
            <a href="/#oferta" className="inline-flex items-center gap-2 text-sm font-medium text-republica-100 hover:text-white">
              <ArrowLeft className="h-4 w-4" aria-hidden="true" />
              Volver a la oferta educativa
            </a>

            <div className="mt-6 flex items-start gap-5">
              <span className="grid h-16 w-16 shrink-0 place-items-center rounded-full bg-white/10 text-oro-claro">
                <Icono className="h-8 w-8" aria-hidden="true" />
              </span>
              <div>
                <p className="font-semibold text-oro-claro">
                  {programa.nivel} de {programa.duracion}
                  {programa.nota ? `, ${programa.nota}` : ""}
                </p>
                <h1 className="font-display text-4xl font-bold leading-tight sm:text-5xl">{programa.nombre}</h1>
                <p className="mt-2 text-sm text-republica-100">{programa.revoe}</p>
              </div>
            </div>

            <p className="mt-8 max-w-3xl text-lg leading-relaxed text-republica-100">{detalle.descripcion}</p>

            <a
              href={enlaceWhatsApp(`Hola, quiero información sobre ${programa.nombre} en el ${institucion.nombre}.`)}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2 rounded-md bg-grana px-6 py-3.5 font-bold text-white transition hover:bg-grana-oscuro"
            >
              Pedir informes de esta carrera
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>
        </section>

        <section className="bg-white py-16 sm:py-20">
          <div className="mx-auto grid max-w-5xl gap-10 px-4 sm:px-6 md:grid-cols-2">
            <div>
              <h2 className="font-display text-2xl font-bold text-republica-900">Perfil de egreso</h2>
              <ul className="mt-4 space-y-3">
                {detalle.perfilEgreso.map((item) => (
                  <li key={item} className="flex gap-3 text-tinta/85">
                    <span className="mt-2 h-2 w-2 shrink-0 bg-oro" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="font-display text-2xl font-bold text-republica-900">Campo laboral</h2>
              <ul className="mt-4 space-y-3">
                {detalle.campoLaboral.map((item) => (
                  <li key={item} className="flex gap-3 text-tinta/85">
                    <span className="mt-2 h-2 w-2 shrink-0 bg-grana" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="bg-republica-50 py-16 sm:py-20">
          <div className="mx-auto max-w-5xl px-4 sm:px-6">
            <h2 className="font-display text-3xl font-bold text-republica-900 sm:text-4xl">Plan de estudios</h2>
            
          
            <div className="mt-10 grid gap-6 sm:grid-cols-2">
              {detalle.periodos.map((materias, i) => (
                <div key={i} className="border-t-4 border-republica-900 bg-white p-6 shadow-sm">
                  <h3 className="font-display text-xl font-bold text-republica-900">
                    {nombrePeriodo(i, detalle.periodo)}
                  </h3>
                  <ul className="mt-4 space-y-2.5 text-[15px] text-tinta/85">
                    {materias.map((materia) => (
                      <li key={materia} className="flex gap-3">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-oro" aria-hidden="true" />
                        {materia}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white py-14 sm:py-16">
          <div className="mx-auto flex max-w-5xl flex-col items-start gap-4 px-4 sm:flex-row sm:items-center sm:justify-between sm:px-6">
            <p className="text-lg font-semibold text-republica-900">¿Te interesa {programa.nombre}?</p>
            <a
              href={enlaceWhatsApp(`Hola, quiero información sobre ${programa.nombre} en el ${institucion.nombre}.`)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-md bg-grana px-6 py-3 font-bold text-white transition hover:bg-grana-oscuro"
            >
              Pedir informes
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

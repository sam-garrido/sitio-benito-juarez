import Divisor from "./Divisor";
import Logo from "./Logo";
import { institucion, programas } from "@/lib/contenido";
import { obtenerFotoInicio } from "@/lib/fotos";

export default function Hero() {
  const foto = obtenerFotoInicio();

  return (
    <section id="inicio" className="relative bg-republica-950 text-white">
      <div className="mx-auto grid max-w-6xl gap-14 px-4 pb-28 pt-14 sm:px-6 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:pb-32 lg:pt-20">
        <div className="animate-entrada">
          <p className="mb-6 border-l-4 border-oro pl-3 text-base font-medium text-oro-claro">
            Iniciamos en {institucion.inicio}, en {institucion.ubicacion}
          </p>
          <h1 className="font-display text-5xl font-black leading-[1.02] tracking-tight sm:text-6xl lg:text-7xl">
            {institucion.lema}
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-republica-100">
            Estudia una de nuestras licenciaturas o el doctorado. Calidad, seriedad y pagos accesibles para ti y tu
            familia.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <a
              href="#contacto"
              className="rounded-md bg-grana px-7 py-3.5 text-base font-bold text-white shadow-lg shadow-black/25 transition hover:bg-grana-oscuro"
            >
              ¡Inscríbete ya!
            </a>
            <a
              href="#oferta"
              className="rounded-md border border-white/35 px-7 py-3.5 text-base font-semibold text-white transition hover:bg-white/10"
            >
              Ver oferta educativa
            </a>
          </div>
          <p className="mt-8 text-base text-republica-100">
            Informes al{" "}
            <a
              href={institucion.telefonoHref}
              className="text-lg font-bold text-white underline decoration-oro decoration-2 underline-offset-4"
            >
              {institucion.telefono}
            </a>
          </p>
        </div>

        <aside className="animate-entrada [animation-delay:200ms]" aria-label="Datos de la institución">
          <div className="mx-auto max-w-sm overflow-hidden rounded-2xl bg-white text-tinta shadow-xl shadow-black/20 ring-1 ring-black/5">
            {/* Fotografía real cuando exista; mientras tanto, un fondo institucional sobrio en vez de una imagen inventada. */}
            <div className="relative aspect-[4/3] w-full bg-republica-900">
              {foto ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img src={foto} alt="Instalaciones del Instituto Superior Benito Juárez" className="h-full w-full object-cover" />
              ) : (
                <div
                  className="flex h-full w-full items-center justify-center bg-[radial-gradient(circle_at_30%_20%,#1e33b3_0%,#0a1140_70%)]"
                  role="img"
                  aria-label="Escudo del Instituto Superior Benito Juárez"
                >
                  <Logo className="h-24 w-24 opacity-90" />
                </div>
              )}
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/55 to-transparent px-5 pb-3 pt-8">
                <p className="text-sm font-medium text-white/90">{institucion.ubicacion}</p>
              </div>
            </div>

            <dl className="divide-y divide-tinta/10 px-5 pt-2">
              {programas.map((p) => (
                <div key={p.id} className="flex items-baseline justify-between gap-4 py-3.5">
                  <dt className="font-display text-lg font-bold leading-tight text-republica-900">{p.nombre}</dt>
                  <dd className="shrink-0 text-sm text-tinta/60">{p.duracion}</dd>
                </div>
              ))}
            </dl>
            <p className="border-t border-tinta/10 px-5 py-3.5 text-sm text-tinta/70">
              Todos nuestros programas cuentan con reconocimiento oficial (REVOE).
            </p>
          </div>
        </aside>
      </div>
      <div className="border-t border-white/10 bg-republica-900/60 py-3">
        <Divisor tono="claro" />
      </div>
    </section>
  );
}

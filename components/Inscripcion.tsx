import { pasos } from "@/lib/contenido";

export default function Inscripcion() {
  return (
    <section id="inscripcion" className="bg-republica-50 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="font-display text-4xl font-bold leading-tight text-republica-900 sm:text-5xl">
          Cómo inscribirte
        </h2>
        <p className="mt-4 max-w-2xl text-lg text-tinta/75">Cuatro pasos, de tu primera pregunta a tu primer día de clases.</p>

        <div className="relative mt-14">
          <div className="absolute left-0 right-0 top-6 hidden h-px bg-republica-900/25 md:block" aria-hidden="true" />
          <ol className="relative grid gap-10 md:grid-cols-4 md:gap-6">
            {pasos.map((paso, i) => (
              <li key={paso.titulo} className="flex gap-5 md:block">
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full border-2 border-oro bg-republica-900 font-display text-2xl font-bold text-white">
                  {i + 1}
                </span>
                <div className="md:mt-5">
                  <h3 className="font-display text-2xl font-bold leading-tight text-republica-900">{paso.titulo}</h3>
                  <p className="mt-2 text-tinta/80">{paso.texto}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

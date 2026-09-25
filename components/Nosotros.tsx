import Divisor from "./Divisor";
import { mision, valores, vision } from "@/lib/contenido";

export default function Nosotros() {
  return (
    <section id="nosotros" className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-14 lg:grid-cols-2 lg:gap-20">
          <div>
            <h2 className="font-display text-4xl font-bold leading-tight text-republica-900 sm:text-5xl">
              Una escuela seria, cercana y al alcance de tu familia
            </h2>
            <dl className="mt-10 space-y-7">
              {valores.map((v) => (
                <div key={v.titulo} className="border-l-4 border-oro pl-5">
                  <dt className="font-display text-2xl font-bold text-republica-900">{v.titulo}</dt>
                  <dd className="mt-1 max-w-md text-tinta/80">{v.texto}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="self-start bg-republica-900 p-8 text-white sm:p-10">
            <h3 className="font-display text-3xl font-bold text-oro-claro">Misión</h3>
            <p className="mt-3 text-lg leading-relaxed text-republica-100">{mision}</p>
            <div className="my-8">
              <Divisor tono="claro" />
            </div>
            <h3 className="font-display text-3xl font-bold text-oro-claro">Visión</h3>
            <p className="mt-3 text-lg leading-relaxed text-republica-100">{vision}</p>
          </div>
        </div>

        <blockquote className="mx-auto mt-20 max-w-3xl border-y border-republica-900/15 py-10 text-center">
          <p className="font-display text-3xl font-bold leading-snug text-republica-900 sm:text-4xl">
            Titúlate con nosotros: tu futuro y el de tu familia empiezan aquí.
          </p>
        </blockquote>
      </div>
    </section>
  );
}

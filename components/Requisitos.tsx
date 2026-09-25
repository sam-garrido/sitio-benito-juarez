import { Check } from "lucide-react";
import { requisitos } from "@/lib/contenido";

function Lista({ titulo, items }: { titulo: string; items: string[] }) {
  return (
    <div className="border-t-4 border-republica-900 bg-white p-7 shadow-sm">
      <h3 className="font-display text-2xl font-bold text-republica-900">{titulo}</h3>
      <ul className="mt-5 space-y-3">
        {items.map((item) => (
          <li key={item} className="flex gap-3">
            <Check className="mt-1 h-5 w-5 shrink-0 text-grana" aria-hidden="true" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Requisitos() {
  return (
    <section id="requisitos" className="bg-papel py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="font-display text-4xl font-bold leading-tight text-republica-900 sm:text-5xl">
          Requisitos de ingreso
        </h2>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <Lista titulo="Para licenciaturas" items={requisitos.licenciatura} />
          <Lista titulo="Para el doctorado" items={requisitos.doctorado} />
        </div>
        <p className="mt-6 max-w-3xl text-tinta/75">{requisitos.nota}</p>
      </div>
    </section>
  );
}

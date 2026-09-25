"use client";

import { useState } from "react";
import { MessageCircle } from "lucide-react";
import { programas } from "@/lib/contenido";
import { enlaceWhatsApp } from "@/lib/whatsapp";

export default function FormularioInformes() {
  const [nombre, setNombre] = useState("");
  const [programa, setPrograma] = useState("");
  const [mensaje, setMensaje] = useState("");

  function enviar(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const partes = [
      `Hola, soy ${nombre.trim()}.`,
      programa ? `Me interesa ${programa}.` : "Quiero información sobre las carreras.",
      mensaje.trim(),
    ].filter(Boolean);
    window.open(enlaceWhatsApp(partes.join(" ")), "_blank", "noopener,noreferrer");
  }

  const campo =
    "mt-1.5 w-full rounded-md border border-republica-900/25 bg-white px-4 py-3 text-base text-tinta placeholder:text-tinta/45 focus:border-republica-800";

  return (
    <form onSubmit={enviar} className="border-t-4 border-grana bg-white p-7 shadow-sm sm:p-9">
      <h3 className="font-display text-3xl font-bold text-republica-900">Solicita informes</h3>
      <p className="mt-2 text-tinta/75">Cuéntanos qué quieres estudiar y te respondemos por WhatsApp.</p>

      <div className="mt-6 space-y-5">
        <label className="block font-semibold text-republica-900">
          Tu nombre
          <input
            required
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            autoComplete="name"
            placeholder="Nombre y apellido"
            className={`${campo} font-normal`}
          />
        </label>

        <label className="block font-semibold text-republica-900">
          Programa de interés
          <select
            value={programa}
            onChange={(e) => setPrograma(e.target.value)}
            className={`${campo} font-normal`}
          >
            <option value="">Aún no lo decido</option>
            {programas.map((p) => (
              <option key={p.id} value={p.nombre}>
                {p.nombre}
              </option>
            ))}
          </select>
        </label>

        <label className="block font-semibold text-republica-900">
          Mensaje (opcional)
          <textarea
            rows={3}
            value={mensaje}
            onChange={(e) => setMensaje(e.target.value)}
            placeholder="Por ejemplo: costos, horarios, fechas de inscripción"
            className={`${campo} font-normal`}
          />
        </label>
      </div>

      <button
        type="submit"
        className="mt-7 inline-flex w-full items-center justify-center gap-2 rounded-md bg-grana px-6 py-3.5 text-base font-bold text-white transition hover:bg-grana-oscuro"
      >
        <MessageCircle className="h-5 w-5" aria-hidden="true" />
        Enviar por WhatsApp
      </button>
    </form>
  );
}

import { Clock, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import FormularioInformes from "./FormularioInformes";
import { institucion } from "@/lib/contenido";
import { enlaceWhatsApp } from "@/lib/whatsapp";

export default function Contacto() {
  return (
    <section id="contacto" className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="font-display text-4xl font-bold leading-tight text-republica-900 sm:text-5xl">Contacto</h2>
        <p className="mt-4 max-w-2xl text-lg text-tinta/75">
          Resolvemos tus dudas sobre programas, costos y fechas de inscripción.
        </p>

        <div className="mt-12 grid gap-10 lg:grid-cols-2 lg:gap-14">
          <div>
            <ul className="space-y-6">
              <li className="flex gap-4">
                <Phone className="mt-1 h-6 w-6 shrink-0 text-grana" aria-hidden="true" />
                <div>
                  <p className="font-semibold text-republica-900">Teléfono</p>
                  <a
                    href={institucion.telefonoHref}
                    className="font-display text-3xl font-bold text-republica-900 hover:text-republica-700"
                  >
                    {institucion.telefono}
                  </a>
                </div>
              </li>
              <li className="flex gap-4">
                <MessageCircle className="mt-1 h-6 w-6 shrink-0 text-grana" aria-hidden="true" />
                <div>
                  <p className="font-semibold text-republica-900">WhatsApp</p>
                  <a
                    href={enlaceWhatsApp("Hola, quiero información sobre el Instituto Superior Benito Juárez.")}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline decoration-oro decoration-2 underline-offset-4 hover:text-republica-700"
                  >
                    Escríbenos al {institucion.telefono}
                  </a>
                </div>
              </li>
              <li className="flex gap-4">
                <Mail className="mt-1 h-6 w-6 shrink-0 text-grana" aria-hidden="true" />
                <div>
                  <p className="font-semibold text-republica-900">Correo</p>
                  <a href={`mailto:${institucion.correo}`} className="hover:text-republica-700">
                    {institucion.correo}
                  </a>
                </div>
              </li>
              <li className="flex gap-4">
                <MapPin className="mt-1 h-6 w-6 shrink-0 text-grana" aria-hidden="true" />
                <div>
                  <p className="font-semibold text-republica-900">Dirección</p>
                  <p>{institucion.direccion}</p>
                </div>
              </li>
              <li className="flex gap-4">
                <Clock className="mt-1 h-6 w-6 shrink-0 text-grana" aria-hidden="true" />
                <div>
                  <p className="font-semibold text-republica-900">Horario de atención</p>
                  <p>{institucion.horario}</p>
                </div>
              </li>
            </ul>

            <iframe
              title="Mapa de ubicación en Jalapa del Marqués, Oaxaca"
              src="https://maps.google.com/maps?q=Jalapa%20del%20Marqu%C3%A9s%2C%20Oaxaca&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="mt-9 h-72 w-full border-0 bg-republica-50"
            />
          </div>

          <FormularioInformes />
        </div>
      </div>
    </section>
  );
}

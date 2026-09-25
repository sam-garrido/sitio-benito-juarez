import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import Divisor from "./Divisor";
import Logo from "./Logo";
import { institucion } from "@/lib/contenido";
import { enlaceWhatsApp } from "@/lib/whatsapp";

export default function Footer() {
  return (
    <footer className="bg-republica-950 text-republica-100">
      <div className="mx-auto max-w-6xl px-4 pt-12 sm:px-6">
        <Divisor tono="claro" />
      </div>

      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
          <div className="flex items-start gap-4">
            <Logo className="h-14 w-14 shrink-0 rounded-full bg-white p-0.5" />
            <div>
              <p className="font-display text-xl font-bold text-white">{institucion.nombre}</p>
              <p className="mt-1 text-sm">Clave {institucion.clave}</p>
              <p className="text-sm">{institucion.ubicacion}</p>
            </div>
          </div>

          <ul className="space-y-3 text-sm sm:text-right">
            <li className="flex items-center gap-2 sm:justify-end">
              <Phone className="h-4 w-4 shrink-0 text-oro-claro" aria-hidden="true" />
              <a href={institucion.telefonoHref} className="hover:text-white">
                {institucion.telefono}
              </a>
            </li>
            <li className="flex items-center gap-2 sm:justify-end">
              <MessageCircle className="h-4 w-4 shrink-0 text-oro-claro" aria-hidden="true" />
              <a
                href={enlaceWhatsApp("Hola, quiero información sobre el Instituto Superior Benito Juárez.")}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white"
              >
                WhatsApp
              </a>
            </li>
            <li className="flex items-center gap-2 sm:justify-end">
              <Mail className="h-4 w-4 shrink-0 text-oro-claro" aria-hidden="true" />
              <a href={`mailto:${institucion.correo}`} className="hover:text-white">
                {institucion.correo}
              </a>
            </li>
            <li className="flex items-center gap-2 sm:justify-end">
              <MapPin className="h-4 w-4 shrink-0 text-oro-claro" aria-hidden="true" />
              <span>{institucion.direccion}</span>
            </li>
          </ul>
        </div>
      </div>

      <p className="border-t border-white/10 px-4 py-5 text-center text-sm">
        © {new Date().getFullYear()} {institucion.nombre}. Todos los derechos reservados.
      </p>
    </footer>
  );
}

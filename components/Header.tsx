"use client";

import { useState } from "react";
import { Menu, X, LogIn } from "lucide-react";
import Logo from "./Logo";
import { institucion, navegacion } from "@/lib/contenido";

export default function Header() {
  const [abierto, setAbierto] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-republica-900/10 bg-white/95 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
        <a href="#inicio" className="flex items-center gap-3" aria-label="Ir al inicio">
          <Logo className="h-10 w-10 rounded-full" />
          <span className="font-display text-lg font-bold leading-[1.05] text-republica-900 sm:text-xl">
            <span className="block">Instituto Superior</span>
            <span className="block">Benito Juárez</span>
          </span>
        </a>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Principal">
          {navegacion.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-[15px] font-medium text-tinta/80 transition hover:text-republica-800"
            >
              {item.texto}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={institucion.portalUrl}
            className="hidden items-center gap-2 rounded-md bg-republica-900 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-republica-800 sm:inline-flex"
          >
            <LogIn className="h-4 w-4" aria-hidden="true" />
            Acceso alumnos
          </a>
          <button
            type="button"
            className="grid h-11 w-11 place-items-center rounded-md text-republica-900 hover:bg-republica-50 lg:hidden"
            aria-expanded={abierto}
            aria-controls="menu-movil"
            aria-label={abierto ? "Cerrar menú" : "Abrir menú"}
            onClick={() => setAbierto(!abierto)}
          >
            {abierto ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {abierto && (
        <nav id="menu-movil" className="border-t border-republica-900/10 bg-white px-4 pb-5 pt-2 lg:hidden" aria-label="Menú móvil">
          <ul className="divide-y divide-republica-900/10">
            {navegacion.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={() => setAbierto(false)}
                  className="block py-3.5 text-base font-medium text-tinta"
                >
                  {item.texto}
                </a>
              </li>
            ))}
          </ul>
          <a
            href={institucion.portalUrl}
            className="mt-3 flex items-center justify-center gap-2 rounded-md bg-republica-900 px-4 py-3 text-base font-semibold text-white"
          >
            <LogIn className="h-5 w-5" aria-hidden="true" />
            Acceso alumnos
          </a>
        </nav>
      )}
    </header>
  );
}

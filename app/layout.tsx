import type { Metadata, Viewport } from "next";
import "@fontsource-variable/alegreya";
import "@fontsource-variable/figtree";
import "./globals.css";
import BotonWhatsApp from "@/components/BotonWhatsApp";

export const metadata: Metadata = {
  title: "Instituto Superior Benito Juárez | Licenciaturas y doctorado en Jalapa del Marqués, Oaxaca",
  description:
    "Estudia Derecho, Gastronomía, Ciencias de la Educación o el Doctorado en Educación en el Instituto Superior Benito Juárez, en Jalapa del Marqués, Oaxaca. Programas con REVOE. Inscríbete ya.",
  openGraph: {
    title: "Instituto Superior Benito Juárez",
    description: "Tu mejor opción para lograr el éxito. Licenciaturas y doctorado en Jalapa del Marqués, Oaxaca.",
    locale: "es_MX",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#0a1140",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>
        {children}
        <BotonWhatsApp />
      </body>
    </html>
  );
}

import { institucion } from "./contenido";

export function enlaceWhatsApp(mensaje: string) {
  return `https://wa.me/${institucion.whatsapp}?text=${encodeURIComponent(mensaje)}`;
}

import { MessageCircle } from "lucide-react";
import { enlaceWhatsApp } from "@/lib/whatsapp";

export default function BotonWhatsApp() {
  return (
    <a
      href={enlaceWhatsApp("Hola, quiero información sobre las carreras del Instituto Superior Benito Juárez.")}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Escríbenos por WhatsApp"
      className="fixed bottom-5 right-5 z-50 grid h-14 w-14 place-items-center rounded-full bg-[#1fa855] text-white shadow-lg shadow-black/30 transition hover:scale-105 hover:bg-[#178a45]"
    >
      <MessageCircle className="h-7 w-7" aria-hidden="true" />
    </a>
  );
}

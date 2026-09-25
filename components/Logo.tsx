import { institucion } from "@/lib/contenido";

export default function Logo({ className = "" }: { className?: string }) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img src={institucion.logo} alt="Escudo del Instituto Superior Benito Juárez" className={className} />
  );
}

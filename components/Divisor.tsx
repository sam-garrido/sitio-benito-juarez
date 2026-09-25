/**
 * Línea decorativa que separa secciones.
 * Sustituye a la greca escalonada anterior: un trazo ondulado, más ligero,
 * con un rombo al centro que recuerda el bordado de las cintas oaxaqueñas
 * sin sentirse "de folleto impreso".
 */
export default function Divisor({ tono = "oro" }: { tono?: "oro" | "claro" }) {
  const color = tono === "oro" ? "#c79a2b" : "#e6c56a";
  return (
    <div className="flex items-center justify-center gap-4 py-1" aria-hidden="true">
      <svg width="100%" height="10" viewBox="0 0 400 10" preserveAspectRatio="none" className="h-2.5 max-w-40 flex-1">
        <path d="M0 5 Q 25 0, 50 5 T 100 5 T 150 5 T 200 5 T 250 5 T 300 5 T 350 5 T 400 5" fill="none" stroke={color} strokeWidth="1.5" />
      </svg>
      <svg width="14" height="14" viewBox="0 0 14 14" className="shrink-0">
        <path d="M7 0 14 7 7 14 0 7Z" fill={color} />
      </svg>
      <svg width="100%" height="10" viewBox="0 0 400 10" preserveAspectRatio="none" className="h-2.5 max-w-40 flex-1">
        <path d="M0 5 Q 25 10, 50 5 T 100 5 T 150 5 T 200 5 T 250 5 T 300 5 T 350 5 T 400 5" fill="none" stroke={color} strokeWidth="1.5" />
      </svg>
    </div>
  );
}

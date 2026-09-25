import { obtenerGaleria } from "@/lib/fotos";

export default function Galeria() {
  const categorias = obtenerGaleria();
  if (categorias.length === 0) return null; // sin fotos en public/fotos, la sección no aparece

  return (
    <section id="galeria" className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="font-display text-4xl font-bold leading-tight text-republica-900 sm:text-5xl">Galería</h2>
        <p className="mt-4 max-w-2xl text-lg text-tinta/75">
          Así es la vida en el Instituto Superior Benito Juárez.
        </p>

        <div className="mt-12 space-y-14">
          {categorias.map((categoria) => (
            <div key={categoria.id}>
              <h3 className="font-display text-2xl font-bold text-republica-900">{categoria.titulo}</h3>
              <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
                {categoria.archivos.map((src, i) => (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    key={src}
                    src={src}
                    alt={`${categoria.titulo} del Instituto Superior Benito Juárez, foto ${i + 1}`}
                    loading="lazy"
                    className="aspect-[4/3] w-full rounded-md border border-republica-900/10 object-cover"
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

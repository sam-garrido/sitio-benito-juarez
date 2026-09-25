import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Oferta from "@/components/Oferta";
import Galeria from "@/components/Galeria";
import Nosotros from "@/components/Nosotros";
import Inscripcion from "@/components/Inscripcion";
import Requisitos from "@/components/Requisitos";
import Contacto from "@/components/Contacto";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Oferta />
        <Galeria />
        <Nosotros />
        <Inscripcion />
        <Requisitos />
        <Contacto />
      </main>
      <Footer />
    </>
  );
}

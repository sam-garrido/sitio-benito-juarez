/**
 * CONTENIDO DEL SITIO
 * -------------------
 
 * Las líneas marcadas con  // EJEMPLO  son datos de muestra que debes reemplazar
 * cuando la escuela te entregue la información real.
 */

export const institucion = {
  nombre: "Instituto Superior Benito Juárez",
  clave: "20PSU0122K",
  lema: "Tu mejor opción para lograr el éxito",
  ubicacion: "Jalapa del Marqués, Oaxaca",
  inicio: "septiembre de 2026",

  logo: "/logo.jpg",

  telefono: "995 103 1744",
  telefonoHref: "tel:+529951031744",
  whatsapp: "529951031744", 

  correo: "sanchezgutierrezsaide@gmail.com", 
  direccion: "Calle segunda norte 310, Santa Maria Jalapa del Marqués, Oaxaca", 
  horario: "Lunes a viernes, de 9:00 a 17:00 h", // Ejemplo

  portalUrl: "https://sistema-universidad-opal.vercel.app/login",
};

export const navegacion = [
  { texto: "Carreras", href: "/#oferta" },
  { texto: "Nosotros", href: "/#nosotros" },
  { texto: "Galería", href: "/#galeria" }, 
  { texto: "Inscripción", href: "/#inscripcion" },
  { texto: "Requisitos", href: "/#requisitos" },
  { texto: "Contacto", href: "/#contacto" },
];

export type Programa = {
  id: "derecho" | "gastronomia" | "educacion" | "doctorado";
  slug: string; // dirección de su página: /carreras/<slug>
  nombre: string;
  nivel: "Licenciatura" | "Doctorado";
  duracion: string;
  nota?: string;
  revoe: string; // Verificar cada número contra el documento oficial
  resumen: string; 
  aprenderas: string[]; 
};

export const programas: Programa[] = [
  {
    id: "derecho",
    slug: "derecho",
    nombre: "Derecho",
    nivel: "Licenciatura",
    duracion: "4 años",
    revoe: "REVOE-2020ES6142094",
    resumen:
      "Desarrolla tu criterio jurídico para asesorar, litigar y servir tanto en el ámbito público como en el privado.",
    aprenderas: [
      "Derecho civil, penal, laboral y constitucional",
      "Argumentación y oratoria jurídica",
      "Práctica forense",
    ],
  },
  {
    id: "gastronomia",
    slug: "gastronomia",
    nombre: "Gastronomía",
    nivel: "Licenciatura",
    duracion: "3 años",
    revoe: "REVOE-2020ES6324033",
    resumen:
      "Aprende técnica culinaria y administración de negocios de alimentos, con la cocina mexicana y oaxaqueña como punto de partida.",
    aprenderas: [
      "Técnicas culinarias y cocina mexicana",
      "Higiene y manejo de alimentos",
      "Administración de cocinas y restaurantes",
    ],
  },
  {
    id: "educacion",
    slug: "ciencias-de-la-educacion",
    nombre: "Ciencias de la Educación",
    nivel: "Licenciatura",
    duracion: "3 años",
    revoe: "REVOE-2020ES6142201",
    resumen:
      "Prepárate para enseñar, diseñar programas educativos y coordinar procesos de aprendizaje en escuelas y organizaciones.",
    aprenderas: [
      "Planeación y evaluación educativa",
      "Didáctica y tecnología en el aula",
      "Investigación educativa",
    ],
  },
  {
    id: "doctorado",
    slug: "doctorado-en-educacion",
    nombre: "Doctorado en Educación",
    nivel: "Doctorado",
    duracion: "4 cuatrimestres",
    nota: "sin maestría",
    revoe: "REVOE-2020ES62324034",
    resumen:
      "Para profesionales de la educación que quieren investigar y transformar su práctica. No necesitas contar con una maestría previa.",
    aprenderas: [
      "Metodología de la investigación",
      "Tesis doctoral con asesoría",
      "Cursos por cuatrimestre",
    ],
  },
];

export const valores = [
  {
    titulo: "Calidad",
    texto: "Programas con reconocimiento oficial y docentes comprometidos con tu formación.", // EJEMPLO
  },
  {
    titulo: "Seriedad",
    texto: "Trámites claros, reglas claras y seguimiento de tu avance semestre a semestre.", // EJEMPLO
  },
  {
    titulo: "Pagos accesibles",
    texto: "Costos pensados para que estudiar sea posible para ti y tu familia.", // EJEMPLO
  },
];

export const mision =
  "Formar profesionistas con sentido ético y compromiso social, mediante programas de calidad reconocidos oficialmente, que contribuyan al desarrollo de sus comunidades y de Oaxaca."; // EJEMPLO

export const vision =
  "Ser una institución de educación superior de referencia en la región, reconocida por la seriedad de su trabajo académico y por abrir oportunidades reales a sus egresados."; // EJEMPLO

export const pasos = [
  {
    titulo: "Elige tu programa",
    texto: "Revisa la oferta educativa y pide informes por WhatsApp o por teléfono.",
  },
  {
    titulo: "Reúne tus documentos",
    texto: "Prepara tu expediente con los requisitos de tu programa.", // EJEMPLO
  },
  {
    titulo: "Realiza tu pago de inscripción",
    texto: "Haz tu depósito y conserva tu ficha. Con tu referencia se genera tu folio.",
  },
  {
    titulo: "Entra a tu portal",
    texto: "Con tu usuario y contraseña consultas tu horario, pagos, calificaciones y recursos bibliográficos.",
  },
];

// actualizar requisitos 
export const requisitos = {
  licenciatura: [
    "Acta de nacimiento (original y copia)",
    "Certificado de bachillerato",
    "Constancia de autenticidad del certificado de bachillerato",
    "Certificado de secundaria",
    "CURP",
  ],
  doctorado: [
    "Acta de nacimiento (original y copia)",
    "Título y cédula del nivel de estudios anterior",
    "CURP",
    "Currículum vitae",
    "Fotografías tamaño infantil",
  ],
  nota: "Los requisitos pueden variar. Confirma tu lista final con Control Escolar antes de reunir tus documentos.", // EJEMPLO
};

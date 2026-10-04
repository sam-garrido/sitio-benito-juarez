/**
 * CONTENIDO DEL SITIO
 * -------------------
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
  slug: string; // dirección de página: /carreras/<slug>
  nombre: string;
  nivel: "Licenciatura" | "Doctorado";
  duracion: string;
  nota?: string;
  revoe: string; 
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
    titulo: "Honestidad",
    texto: "Hablar y actuar con la verdad siempre y en todo lugar.",
  },
  {
    titulo: "Compromiso",
    texto: "Invertir nuestras capacidades y recursos para cumplir todo lo que se nos confía.",
  },
  {
    titulo: "Responsabilidad",
    texto: "Asumir el papel que nos corresponde y las consecuencias de nuestras acciones y decisiones.",
  },
  {
    titulo: "Disciplina",
    texto: "Actuar de manera ordenada, conforme a los lineamientos y normas que nos rigen.",
  },
  {
    titulo: "Lealtad",
    texto: "Desempeñarse fiel a las políticas institucionales, con entrega y apoyo incondicional en el rol que nos corresponda.",
  },
  {
    titulo: "Respeto",
    texto: "Aceptar la individualidad de los demás y acatar las normas y políticas institucionales.",
  },
];

export const mision =
  "SAGBA, Sociedad Civil, es una institución educativa que forma con calidad y pertinencia social, profesionales, investigadores y docentes con alto nivel, atendiendo a su desarrollo integral en los ámbitos académico, personal, profesional y social, de manera que se constituyan como agentes de cambio para la consecución de una sociedad que dé valor a la justicia, equidad, responsabilidad social, desarrollo, inclusión, cultura, corresponsabilidad, diversidad y respeto a los derechos humanos, ofreciendo educación de nivel superior en Santa María Jalapa del Marqués, Oaxaca.";

export const vision =
  "Consolidarnos como la mejor oferta educativa dentro de la región del Istmo de Tehuantepec, por la calidad de su oferta académica en licenciatura y posgrado, el aporte a la investigación de alto valor académico, científico y social, la solidez de la difusión de la cultura que realiza, su compromiso de responsabilidad social y la vinculación con los sectores educativo, productivo, empresarial, público y social. SAGBA, Sociedad Civil, es una institución educativa de nivel superior, incluyente, flexible y líder en las transformaciones, y promotora de la movilidad social por medio de enfoques innovadores de enseñanza-aprendizaje.";
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

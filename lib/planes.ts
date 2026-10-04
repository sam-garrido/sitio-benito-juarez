/**
 * PLANES DE ESTUDIO Y DETALLE DE CADA CARRERA
 * -------------------------------------------
 * Cuando ya hayas puesto los planes reales, cambia `planEsEjemplo` a false
 * para quitar el aviso de "plan preliminar" de las páginas.
 */

import type { Programa } from "./contenido";

export const planEsEjemplo = false;

export type Detalle = {
  descripcion: string;
  perfilEgreso: string[];
  campoLaboral: string[];
  periodo: "semestre" | "cuatrimestre";
  periodos: string[][];
};

const ordinales = ["Primer", "Segundo", "Tercer", "Cuarto", "Quinto", "Sexto", "Séptimo", "Octavo", "Noveno", "Décimo"];

export function nombrePeriodo(indice: number, tipo: Detalle["periodo"]) {
  return `${ordinales[indice] ?? `Periodo ${indice + 1}`} ${tipo}`;
}

export const detalles: Record<Programa["id"], Detalle> = {
  derecho: {
    descripcion:
      "La Licenciatura en Derecho forma profesionistas capaces de interpretar y aplicar las leyes con criterio, ética y responsabilidad social. Combina una base teórica sólida con práctica forense y con el estudio del derecho indígena, tan importante en Oaxaca.",
        perfilEgreso: [
      "Trabaja en equipo",
      "Realiza investigaciones objetivas",
      "Maneja la comunicación con eficacia",
      "Toma decisiones con bases objetivas",
      "Se sociabiliza con diferentes ambientes culturales",
      "Participa en equipos multidisciplinarios con espíritu de cooperación",
      "Muestra una cultura de legalidad: soluciona controversias jurídicas respetando y haciendo valer la ley",
      "Actúa con ética en toda su actividad profesional",
      "Respeta los derechos fundamentales",
      "Tiene vocación de servicio",
    ],
    campoLaboral: [
      "Despachos jurídicos y notarías",
      "Poder judicial, fiscalías y defensorías",
      "Dependencias de gobierno federal, estatal y municipal",
      "Ejercicio independiente y empresas",
    ],
        periodo: "semestre",
    periodos: [
      [
        "Introducción al Estudio del Derecho",
        "Derecho Romano I",
        "Ética Jurídica",
        "Historia del Derecho Mexicano",
        "Inglés I",
        "Sociología Jurídica",
      ],
      [
        "Metodología de la Investigación en las Ciencias Sociales",
        "Derecho Romano II",
        "Sistemas Políticos Contemporáneos",
        "Teoría del Delito",
        "Inglés II",
        "Derecho Civil I",
      ],
      [
        "Teoría del Estado",
        "Derecho Constitucional I",
        "Teoría General del Proceso",
        "Derecho Penal I",
        "Inglés III",
        "Derecho Civil II",
      ],
      [
        "Derecho Administrativo I",
        "Derecho Constitucional II",
        "Derecho Notarial y Registral",
        "Derecho Penal II",
        "Teoría Económica",
        "Derecho Civil III",
      ],
      [
        "Derecho Administrativo II",
        "Garantías Individuales y Sociales",
        "Derecho Laboral",
        "Proceso Acusatorio Adversarial",
        "Derecho Mercantil",
        "Derecho Civil IV",
      ],
      [
        "Derecho Procesal Administrativo",
        "Amparo I",
        "Derecho Internacional Privado",
        "Juicios Orales",
        "Títulos de Crédito y Contratos Mercantiles",
        "Derecho Procesal Civil",
      ],
      [
        "Derecho Fiscal I",
        "Amparo II",
        "Derecho Internacional Público",
        "Criminalística",
        "Derecho Procesal Mercantil",
        "Seminario de Titulación I",
      ],
      [
        "Derecho Fiscal II",
        "Práctica Forense de Juicio de Amparo",
        "Derecho Indígena",
        "Medicina Forense",
        "Derecho Agrario",
        "Seminario de Titulación II",
      ],
    ],
  },

  gastronomia: {
    descripcion:
      "La Licenciatura en Gastronomía combina técnica, creatividad y gestión. Aprenderás a cocinar con fundamentos sólidos, a conocer y valorar la cocina mexicana y oaxaqueña, y a administrar o emprender tu propio negocio de alimentos y bebidas.",
    perfilEgreso: [
      "Prepara con técnica platillos de cocina mexicana, oaxaqueña e internacional.",
      "Aplica normas de higiene y seguridad alimentaria.",
      "Diseña menús y calcula costos de producción.",
      "Administra y emprende negocios de alimentos y bebidas.",
    ],
    campoLaboral: [
      "Restaurantes y hoteles",
      "Empresas de banquetes y catering",
      "Negocio propio: fonda, cafetería, panadería o servicio de alimentos",
      "Turismo gastronómico y eventos",
    ],
        periodo: "cuatrimestre",
    periodos: [
      [
        "Historia de la Gastronomía",
        "Química de los Alimentos I",
        "Nutrición I",
        "Manejo de Alimentos",
        "Cocina Profesional I",
        "Inglés I",
      ],
      [
        "Cocina Prehispánica",
        "Química de los Alimentos II",
        "Nutrición II",
        "Identificación de Productos",
        "Cocina Profesional II",
        "Inglés II",
      ],
      [
        "Patrimonio Gastronómico",
        "Prefabricados y Conservación",
        "Cocina de Especialidad Mexicana I",
        "Pescados y Mariscos",
        "Control de Costos de Alimentos y Bebidas",
        "Inglés III",
      ],
      [
        "Informática",
        "Identificación de Carnes",
        "Cocina de Especialidad Mexicana II",
        "Planeación de Menús",
        "Fundamentos de Administración",
        "Inglés IV",
      ],
      [
        "Enología",
        "Cocina Italiana",
        "Cocina de Especialidad Mexicana III",
        "Cocina Fría",
        "Administración de Empresas Gastronómicas",
        "Inglés V",
      ],
      [
        "Coctelería",
        "Cocina Francesa",
        "Cocina Nutricional",
        "Panadería",
        "Administración de Recursos Humanos",
        "Inglés VI",
      ],
      [
        "Repostería I",
        "Arte Mukimono",
        "Servicio de Alimentos y Bebidas",
        "Cocina Asiática",
        "Cocina Española",
        "Inglés VII",
      ],
      [
        "Repostería II",
        "Escultura en Hielo",
        "Derecho Laboral",
        "Organización de Banquetes",
        "Entorno Legal de la Industria Restaurantera",
        "Inglés VIII",
      ],
      [
        "Instalaciones y Mantenimiento de Cocinas",
        "Ética",
        "Seminario de Titulación",
        "Calidad",
        "Comercialización de Restaurantes",
        "Inglés XI",
      ],
    ],
  },

  educacion: {
    descripcion:
      "La Licenciatura en Ciencias de la Educación te prepara para enseñar, diseñar programas educativos y coordinar procesos de aprendizaje. Incluye formación en investigación, tecnología educativa y educación intercultural, pensada para la realidad de las comunidades oaxaqueñas.",
    perfilEgreso: [
      "Planea, aplica y evalúa procesos de enseñanza y aprendizaje.",
      "Diseña programas y proyectos educativos.",
      "Investiga problemas educativos y propone soluciones.",
      "Gestiona instituciones escolares con liderazgo.",
    ],
    campoLaboral: [
      "Escuelas públicas y particulares",
      "Instituciones de educación superior y centros de capacitación",
      "Dependencias educativas y culturales",
      "Consultoría y proyectos educativos independientes",
    ],
        periodo: "cuatrimestre",
    periodos: [
      [
        "Filosofía",
        "Introducción a la Pedagogía",
        "Diseño y Elaboración de Recursos Didácticos",
        "Desarrollo Prenatal y de la Primera Infancia",
        "Métodos y Técnicas de Investigación",
      ],
      [
        "Bases Epistemológicas",
        "Historia de la Educación",
        "Comunicación Educativa",
        "Desarrollo Infantil",
        "Sociología de la Educación",
      ],
      [
        "Historia de la Educación en México",
        "Planeación Educativa",
        "Didáctica",
        "Educación para la Comunicación",
        "Problemas de la Educación en México",
      ],
      [
        "Diseño Curricular I",
        "Orientación Educativa",
        "Filosofía de la Educación",
        "Evaluación Educativa",
        "Psicología Social",
      ],
      [
        "Educación y Nuevas Tecnologías",
        "Teorías del Aprendizaje",
        "Política Educativa en México",
        "Antropología Pedagógica",
        "Estadística",
      ],
      [
        "Diseño Curricular II",
        "Gestión Escolar",
        "Legislación Educativa",
        "Psicología Educativa",
        "Axiología",
      ],
      [
        "Evaluación Curricular",
        "Estrategias de Enseñanza-Aprendizaje I",
        "Administración Educativa",
        "Necesidades Educativas Especiales",
        "Práctica Educativa",
      ],
      [
        "Evaluación Educativa",
        "Seminario de Titulación I",
        "Estrategias de Enseñanza-Aprendizaje II",
        "Análisis de la Práctica Docente",
      ],
      [
        "Educación Virtual",
        "Seminario de Titulación II",
        "Gestión y Administración de Instituciones Educativas",
        "Economía de la Educación",
      ],
    ],
  },

  doctorado: {
    descripcion:
      "El Doctorado en Educación está pensado para profesionales que quieren investigar y transformar su práctica. Se cursa en cuatro cuatrimestres, con asesoría personalizada para desarrollar tu tesis, y no requiere maestría previa.",
    perfilEgreso: [
      "Desarrolla investigación original en el campo educativo.",
      "Analiza con sentido crítico teorías y políticas educativas.",
      "Publica y difunde los resultados de su investigación.",
      "Dirige proyectos de innovación educativa.",
    ],
    campoLaboral: [
      "Universidades y centros de investigación",
      "Dirección y gestión de instituciones educativas",
      "Diseño de políticas y programas educativos",
      "Asesoría y consultoría especializada",
    ],
    periodo: "cuatrimestre",
        periodos: [
      ["Seminario de Investigación", "Gestión Educativa", "Taller de Comunicación Educativa"],
      ["Investigación Educativa", "Tecnología en la Educación", "Seminario de Tesis Doctoral I"],
      ["Formación Docente", "Análisis y Diseño Curricular", "Seminario de Tesis Doctoral II"],
      ["Teoría del Aprendizaje", "Planeación Estratégica y Gestión Educativa", "Seminario de Tesis Doctoral III"],
    ],
  },
};

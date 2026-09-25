/**
 * PLANES DE ESTUDIO Y DETALLE DE CADA CARRERA
 * -------------------------------------------
 * TODO lo de este archivo es de EJEMPLO: son materias y textos de muestra.
 * Reemplázalos con el plan de estudios real de cada carrera.
 *
 * Cómo se llena un plan: cada carrera tiene `periodos`, que es una lista de listas.
 * Cada lista interna son las materias de un periodo (el primero es el primer semestre, etc.).
 *
 * Cuando ya hayas puesto los planes reales, cambia `planEsEjemplo` a false
 * para quitar el aviso de "plan preliminar" de las páginas.
 */

import type { Programa } from "./contenido";

export const planEsEjemplo = true;

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
      "Interpreta y aplica la normatividad vigente en casos reales.",
      "Argumenta con solidez, de forma oral y escrita.",
      "Asesora y representa a personas y organizaciones en procesos legales.",
      "Actúa con ética y respeto a los derechos humanos.",
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
        "Introducción al estudio del Derecho",
        "Derecho Romano",
        "Teoría General del Estado",
        "Metodología de la Investigación Jurídica",
        "Sociología Jurídica",
        "Redacción y Comunicación Jurídica",
      ],
      [
        "Teoría del Derecho",
        "Derecho Civil I: Personas y Familia",
        "Derecho Constitucional",
        "Historia del Derecho Mexicano",
        "Derecho Penal I: Teoría del Delito",
        "Derechos Humanos",
      ],
      [
        "Derecho Civil II: Bienes y Sucesiones",
        "Derecho Penal II: Parte Especial",
        "Derecho Administrativo",
        "Teoría General del Proceso",
        "Derecho Internacional Público",
        "Ética Jurídica",
      ],
      [
        "Derecho Civil III: Obligaciones",
        "Derecho Procesal Civil",
        "Derecho Laboral I",
        "Derecho Mercantil I",
        "Derecho Fiscal",
        "Derecho Agrario",
      ],
      [
        "Contratos Civiles",
        "Derecho Procesal Penal",
        "Derecho Laboral II",
        "Derecho Mercantil II",
        "Juicio de Amparo",
        "Derecho Ambiental",
      ],
      [
        "Derecho Notarial y Registral",
        "Derecho Procesal Laboral",
        "Derecho Electoral",
        "Títulos y Operaciones de Crédito",
        "Medios Alternativos de Solución de Conflictos",
        "Derecho de la Seguridad Social",
      ],
      [
        "Derecho Internacional Privado",
        "Criminología",
        "Argumentación Jurídica",
        "Derecho Indígena y Pluralismo Jurídico",
        "Práctica Forense I",
        "Propiedad Intelectual",
      ],
      [
        "Práctica Forense II",
        "Oratoria y Litigación Oral",
        "Derecho Corporativo",
        "Ética Profesional del Abogado",
        "Seminario de Titulación",
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
    periodo: "semestre",
    periodos: [
      [
        "Fundamentos de Gastronomía",
        "Técnicas Culinarias Básicas",
        "Higiene y Manejo de Alimentos",
        "Matemáticas Aplicadas a la Cocina",
        "Introducción a la Nutrición",
        "Inglés I",
      ],
      [
        "Cocina Mexicana I",
        "Panadería Básica",
        "Cocinas del Mundo I",
        "Costos y Presupuestos",
        "Química de los Alimentos",
        "Inglés II",
      ],
      [
        "Cocina Mexicana II",
        "Pastelería y Repostería",
        "Cocina Internacional",
        "Bebidas y Coctelería",
        "Servicio y Atención al Comensal",
        "Inglés III",
      ],
      [
        "Cocina Tradicional Oaxaqueña",
        "Panadería y Pastelería Avanzada",
        "Cocina Contemporánea",
        "Enología y Maridaje",
        "Administración de Alimentos y Bebidas",
        "Inglés IV",
      ],
      [
        "Alta Cocina",
        "Diseño de Menús",
        "Gestión de Restaurantes",
        "Mercadotecnia Gastronómica",
        "Emprendimiento Gastronómico",
        "Prácticas Profesionales I",
      ],
      [
        "Proyecto Gastronómico Integrador",
        "Cocina para Eventos y Banquetes",
        "Calidad y Seguridad Alimentaria",
        "Legislación Restaurantera",
        "Prácticas Profesionales II",
        "Seminario de Titulación",
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
    periodo: "semestre",
    periodos: [
      [
        "Introducción a las Ciencias de la Educación",
        "Filosofía de la Educación",
        "Psicología del Desarrollo",
        "Sociología de la Educación",
        "Comunicación Oral y Escrita",
        "Herramientas Digitales para el Aprendizaje",
      ],
      [
        "Historia de la Educación en México",
        "Teorías del Aprendizaje",
        "Pedagogía General",
        "Didáctica General",
        "Estadística Aplicada a la Educación",
        "Ética y Docencia",
      ],
      [
        "Planeación Educativa",
        "Diseño Curricular",
        "Evaluación del Aprendizaje",
        "Psicología Educativa",
        "Educación Intercultural y Bilingüe",
        "Metodología de la Investigación Educativa",
      ],
      [
        "Tecnología Educativa",
        "Educación Inclusiva",
        "Orientación Educativa y Tutoría",
        "Gestión de Instituciones Educativas",
        "Investigación Cualitativa",
        "Didáctica de las Disciplinas",
      ],
      [
        "Administración Educativa",
        "Legislación Educativa",
        "Investigación Cuantitativa",
        "Diseño de Proyectos Educativos",
        "Práctica Docente I",
        "Educación para Adultos",
      ],
      [
        "Supervisión y Liderazgo Escolar",
        "Evaluación de Programas Educativos",
        "Práctica Docente II",
        "Innovación Educativa",
        "Proyecto Final",
        "Seminario de Titulación",
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
      ["Epistemología de la Educación", "Metodología de la Investigación I", "Seminario de Investigación I"],
      [
        "Teorías Pedagógicas Contemporáneas",
        "Metodología de la Investigación II",
        "Seminario de Investigación II",
      ],
      ["Política y Gestión Educativa", "Análisis de Datos para la Investigación", "Seminario de Tesis I"],
      ["Innovación y Prospectiva Educativa", "Publicación Académica", "Seminario de Tesis II"],
    ],
  },
};

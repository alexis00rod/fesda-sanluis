import { CompetenciaType } from "../models/CompetenciaType";

export const competencias: CompetenciaType[] = [
  {
    id: 1,
    nombre: "Torneo Nacional de Verano",
    ubicacion: "San Luis, Argentina",
    fechaInicio: new Date(2024, 0, 15), // 15 de enero de 2024
    fechaFin: new Date(2024, 0, 17), // 17 de enero de 2024
    categoria: "Natación",
    descripcion:
      "Un torneo de natación que reúne a los mejores nadadores de todo el país.",
    imagen: "https://example.com/imagen1.jpg",
  },
  {
    id: 2,
    nombre: "Copa Internacional del Cono Sur",
    ubicacion: "Buenos Aires, Argentina",
    fechaInicio: new Date(2024, 2, 10), // 10 de marzo de 2024
    fechaFin: new Date(2024, 2, 12), // 12 de marzo de 2024
    categoria: "Waterpolo",
    descripcion: "Competencia de waterpolo con equipos de todo el Cono Sur.",
    imagen: "https://example.com/imagen2.jpg",
  },
  {
    id: 3,
    nombre: "Campeonato Provincial de Invierno",
    ubicacion: "Córdoba, Argentina",
    fechaInicio: new Date(2024, 5, 25), // 25 de junio de 2024
    fechaFin: new Date(2024, 5, 26), // 26 de junio de 2024
    categoria: "Clavados",
    descripcion:
      "Campeonato de clavados de la provincia durante la temporada invernal.",
    imagen: "https://example.com/imagen3.jpg",
  },
  {
    id: 4,
    nombre: "Abierto de Natación de Mendoza",
    ubicacion: "Mendoza, Argentina",
    fechaInicio: new Date(2024, 8, 5), // 5 de septiembre de 2024
    fechaFin: new Date(2024, 8, 7), // 7 de septiembre de 2024
    categoria: "Natación",
  },
  {
    id: 5,
    nombre: "Campeonato Nacional de Aguas Abiertas",
    ubicacion: "Mar del Plata, Argentina",
    fechaInicio: new Date(2024, 11, 1), // 1 de diciembre de 2024
    fechaFin: new Date(2024, 11, 5), // 5 de diciembre de 2024
    categoria: "Natación",
    descripcion:
      "Una competencia exigente en aguas abiertas, apta para los más valientes.",
    imagen: "https://example.com/imagen5.jpg",
  },
  {
    id: 6,
    nombre: "Torneo Regional de Waterpolo",
    ubicacion: "Santa Fe, Argentina",
    fechaInicio: new Date(2024, 7, 15), // 15 de agosto de 2024
    fechaFin: new Date(2024, 7, 18), // 18 de agosto de 2024
    categoria: "Waterpolo",
  },
  {
    id: 7,
    nombre: "Campeonato Nacional de Clavados",
    ubicacion: "Buenos Aires, Argentina",
    fechaInicio: new Date(2024, 10, 20), // 20 de noviembre de 2024
    fechaFin: new Date(2024, 10, 22), // 22 de noviembre de 2024
    categoria: "Clavados",
  },
  {
    id: 8,
    nombre: "Torneo Internacional de Natación",
    ubicacion: "Córdoba, Argentina",
    fechaInicio: new Date(2024, 9, 10), // 10 de octubre de 2024
    fechaFin: new Date(2024, 9, 12), // 12 de octubre de 2024
    categoria: "Natación",
    imagen: "https://example.com/imagen8.jpg",
  },
  {
    id: 9,
    nombre: "Copa de Invierno de Waterpolo",
    ubicacion: "San Juan, Argentina",
    fechaInicio: new Date(2024, 6, 5), // 5 de julio de 2024
    fechaFin: new Date(2024, 6, 8), // 8 de julio de 2024
    categoria: "Waterpolo",
  },
  {
    id: 10,
    nombre: "Campeonato Nacional de Natación",
    ubicacion: "Tucumán, Argentina",
    fechaInicio: new Date(2024, 4, 1), // 1 de mayo de 2024
    fechaFin: new Date(2024, 4, 3), // 3 de mayo de 2024
    categoria: "Natación",
    descripcion:
      "Los mejores nadadores del país compiten por el título nacional.",
  },
  {
    id: 11,
    nombre: "Torneo de Waterpolo Juvenil",
    ubicacion: "Neuquén, Argentina",
    fechaInicio: new Date(2024, 1, 10), // 10 de febrero de 2024
    fechaFin: new Date(2024, 1, 15), // 15 de febrero de 2024
    categoria: "Waterpolo",
    imagen: "https://example.com/imagen11.jpg",
  },
  {
    id: 12,
    nombre: "Abierto de Clavados",
    ubicacion: "La Plata, Argentina",
    fechaInicio: new Date(2024, 3, 25), // 25 de abril de 2024
    fechaFin: new Date(2024, 3, 27), // 27 de abril de 2024
    categoria: "Clavados",
    organizador: "Federación Argentina de Clavados",
  },
  {
    id: 13,
    nombre: "Torneo Nacional de Acuatlón",
    ubicacion: "Chaco, Argentina",
    fechaInicio: new Date(2024, 5, 20), // 20 de junio de 2024
    fechaFin: new Date(2024, 5, 22), // 22 de junio de 2024
    categoria: "Acuatlón",
  },
  {
    id: 14,
    nombre: "Copa Nacional de Natación en Aguas Abiertas",
    ubicacion: "Corrientes, Argentina",
    fechaInicio: new Date(2024, 7, 10), // 10 de agosto de 2024
    fechaFin: new Date(2024, 7, 15), // 15 de agosto de 2024
    categoria: "Natación",
  },
  {
    id: 15,
    nombre: "Campeonato Internacional de Clavados",
    ubicacion: "Buenos Aires, Argentina",
    fechaInicio: new Date(2024, 9, 5), // 5 de octubre de 2024
    fechaFin: new Date(2024, 9, 7), // 7 de octubre de 2024
    categoria: "Clavados",
  },
  {
    id: 16,
    nombre: "Torneo de Waterpolo Intercontinental",
    ubicacion: "Salta, Argentina",
    fechaInicio: new Date(2024, 11, 1), // 1 de diciembre de 2024
    fechaFin: new Date(2024, 11, 3), // 3 de diciembre de 2024
    categoria: "Waterpolo",
  },
  {
    id: 17,
    nombre: "Campeonato Nacional de Surf",
    ubicacion: "Mar del Plata, Argentina",
    fechaInicio: new Date(2024, 2, 1), // 1 de marzo de 2024
    fechaFin: new Date(2024, 2, 3), // 3 de marzo de 2024
    categoria: "Surf",
    imagen: "https://example.com/imagen17.jpg",
  },
  {
    id: 18,
    nombre: "Abierto de Aguas Abiertas",
    ubicacion: "Rio Negro, Argentina",
    fechaInicio: new Date(2024, 8, 10), // 10 de septiembre de 2024
    fechaFin: new Date(2024, 8, 12), // 12 de septiembre de 2024
    categoria: "Natación",
  },
  {
    id: 19,
    nombre: "Copa de Clavados Juvenil",
    ubicacion: "Tierra del Fuego, Argentina",
    fechaInicio: new Date(2024, 11, 15), // 15 de diciembre de 2024
    fechaFin: new Date(2024, 11, 20), // 20 de diciembre de 2024
    categoria: "Clavados",
    descripcion: "Un evento para las nuevas promesas del clavado en el país.",
    imagen: "https://example.com/imagen19.jpg",
  },
  {
    id: 20,
    nombre: "Copa Nacional de Aguas Abiertas",
    ubicacion: "Buenos Aires, Argentina",
    fechaInicio: new Date(2024, 6, 1), // 1 de julio de 2024
    fechaFin: new Date(2024, 6, 5), // 5 de julio de 2024
    categoria: "Natación Sincronizada",
    descripcion:
      "Un evento que destaca la belleza y sincronización en el agua.",
    imagen: "https://example.com/imagen20.jpg",
  },
];

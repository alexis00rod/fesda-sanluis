export interface CompetenciaType {
  id: number; // Identificador único de la competencia
  nombre: string; // Nombre de la competencia
  fechaInicio: Date; // Fecha de inicio de la competencia
  fechaFin: Date; // Fecha de finalización (si es de varios días)
  ubicacion: string; // Lugar donde se llevará a cabo
  categoria: string; // Tipo de deporte
  descripcion?: string; // Breve descripción opcional de la competencia
  organizador?: string; // Nombre de la federación u organizador
  imagen?: string; // URL de una imagen relacionada a la competencia
}

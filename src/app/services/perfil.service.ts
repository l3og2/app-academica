import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

/**
 * Interfaz que define la estructura del perfil profesional.
 */
export interface PerfilEstudiante {
  nombre: string;
  carrera: string;
  semestre: number;
  habilidades: string[];
}

/**
 * Interfaz que extiende el perfil con información adicional
 * que actualmente está hardcodeada en el HTML.
 */
export interface PerfilCompleto extends PerfilEstudiante {
  ubicacion: string;
  tituloCorto: string;
  descripcion: string;
  pasatiempos: Pasatiempo[];
}

export interface Pasatiempo {
  icono: string;
  titulo: string;
  descripcion: string;
  color: string;
}

/**
 * Servicio encargado de proveer los datos del perfil profesional.
 *
 * Actualmente retorna datos mock, pero está preparado para:
 * - Consumir una API REST en el futuro
 * - Ser mockeado fácilmente en pruebas unitarias
 * - Usar Observables (RxJS) para datos asíncronos reales
 */
@Injectable({
  providedIn: 'root'
})
export class PerfilService {

  /** Datos semilla del perfil profesional */
  private readonly perfil: PerfilCompleto = {
    nombre: 'Leonardo',
    carrera: 'Ingeniería en Informática',
    semestre: 7,
    habilidades: ['Angular', 'TypeScript', 'Node.js', 'React (MERN)', 'MongoDB', 'Linux'],
    ubicacion: 'Guarenas, Edo. Miranda',
    tituloCorto: 'TSU en Informática | Estudiante de Ing. (7mo Semestre)',
    descripcion: `Soy un Desarrollador Full Stack con un perfil atípico y de alto valor: cuento con más de 15 años de trayectoria como analista contable en el sector público y privado. Esta base me permite entender a fondo el modelo de negocio detrás de cada línea de código. Me apasiona construir sistemas para automatizar procesos administrativos y el análisis de datos.`,
    pasatiempos: [
      {
        icono: 'accessibility-outline',
        titulo: 'Equilibrio y Enfoque',
        descripcion: 'Practicante de Tai Chi y entrenamiento funcional para mantener la mente afilada.',
        color: 'primary'
      },
      {
        icono: 'people-outline',
        titulo: 'Familia y Raíces',
        descripcion: 'Hombre de familia. Disfruto desconectarme en los ríos y playas, y de un buen plato tradicional venezolano rodeado de los míos.',
        color: 'tertiary'
      }
    ]
  };

  constructor() { }

  /**
   * Retorna el perfil completo del estudiante/profesional.
   * Devuelve un Observable para preparar el consumo asíncrono futuro.
   */
  obtenerPerfilCompleto(): Observable<PerfilCompleto> {
    return of({ ...this.perfil });
  }

  /**
   * Retorna solo los datos básicos del estudiante (versión simplificada).
   */
  obtenerPerfilBasico(): Observable<PerfilEstudiante> {
    const { nombre, carrera, semestre, habilidades } = this.perfil;
    return of({ nombre, carrera, semestre, habilidades });
  }
}

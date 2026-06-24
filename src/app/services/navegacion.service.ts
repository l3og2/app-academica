import { Injectable } from '@angular/core';

/**
 * Interfaz que define la estructura de cada elemento del menú de navegación.
 */
export interface PaginaMenu {
  title: string;
  url: string;
  icon: string;
}

/**
 * Servicio encargado de centralizar la configuración del menú de navegación lateral.
 *
 * Al extraer esta lógica del AppComponent, conseguimos:
 * - Que el menú sea configurable desde un solo lugar
 * - Posibilidad de agregar lógica condicional (ej: mostrar/ocultar según rol)
 * - Mejor testabilidad al poder mockear el servicio
 */
@Injectable({
  providedIn: 'root'
})
export class NavegacionService {

  /** Lista de páginas principales del menú lateral */
  private readonly paginas: PaginaMenu[] = [
    { title: 'Inicio',              url: '/inicio',         icon: 'home' },
    { title: 'Información Personal', url: '/info-personal',  icon: 'person' },
    { title: 'Contacto',            url: '/contacto',       icon: 'mail' },
  ];

  /** Labels secundarios (actualmente vacío, preparado para expansión) */
  private readonly labels: string[] = [];

  constructor() { }

  /**
   * Retorna la lista de páginas del menú principal.
   */
  obtenerPaginas(): PaginaMenu[] {
    return [...this.paginas];
  }

  /**
   * Retorna la lista de labels secundarios.
   */
  obtenerLabels(): string[] {
    return [...this.labels];
  }
}

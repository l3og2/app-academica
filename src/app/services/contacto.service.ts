import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

/**
 * Interfaz que define la estructura del mensaje de contacto.
 */
export interface MensajeContacto {
  nombre: string;
  email: string;
  mensaje: string;
}

/**
 * Resultado del envío de un mensaje de contacto.
 */
export interface ResultadoEnvio {
  exito: boolean;
  mensaje: string;
}

/**
 * Servicio encargado de gestionar el envío de mensajes desde el formulario de contacto.
 *
 * Actualmente simula el envío (modo demo), pero está preparado para:
 * - Integrarse con una API REST real
 * - Usar el plugin EmailComposer de Capacitor para abrir el cliente de correo nativo
 * - Enviar a un servicio de emails tipo SendGrid / Mailgun
 * - Ser testeable unitariamente
 */
@Injectable({
  providedIn: 'root'
})
export class ContactoService {

  constructor() { }

  /**
   * Valida los campos del formulario de contacto.
   * Retorna un mensaje de error si hay campos inválidos, o null si todo está bien.
   */
  validarMensaje(data: MensajeContacto): string | null {
    if (!data.nombre || data.nombre.trim().length === 0) {
      return 'El nombre es obligatorio.';
    }
    if (!data.email || data.email.trim().length === 0) {
      return 'El correo electrónico es obligatorio.';
    }
    // Validación básica de formato de email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email.trim())) {
      return 'El formato del correo electrónico no es válido.';
    }
    if (!data.mensaje || data.mensaje.trim().length === 0) {
      return 'El mensaje no puede estar vacío.';
    }
    return null; // Sin errores
  }

  /**
   * Envía el mensaje de contacto.
   *
   * Modo actual: Simula el envío con un delay de 1.5s y retorna éxito.
   * El delay permite que el spinner de carga sea visible y la experiencia
   * se sienta más realista.
   *
   * Modo futuro: Reemplazar con HTTP call a API o Capacitor EmailComposer.
   */
  enviarMensaje(data: MensajeContacto): Observable<ResultadoEnvio> {
    const errorValidacion = this.validarMensaje(data);
    if (errorValidacion) {
      return of({ exito: false, mensaje: errorValidacion });
    }

    // TODO: Integrar con API real
    // Por ahora simulamos un envío exitoso con delay realista
    console.log('[ContactoService] Mensaje recibido:', {
      nombre: data.nombre.trim(),
      email: data.email.trim(),
      mensaje: data.mensaje.trim()
    });

    return of({
      exito: true,
      mensaje: '¡Mensaje enviado con éxito! Gracias por contactarme, te responderé a la brevedad.'
    }).pipe(delay(1500));
  }
}

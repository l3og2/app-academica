import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
// Importamos los componentes visuales de Ionic
import { IonHeader, IonToolbar, IonButtons, IonMenuButton, IonTitle, IonContent, IonCard, IonList, IonItem, IonIcon, IonLabel, IonCardHeader, IonCardTitle, IonCardContent, IonInput, IonTextarea, IonButton, IonToast, IonSpinner } from '@ionic/angular/standalone';

// Importamos el servicio de contacto
import { ContactoService, MensajeContacto, ResultadoEnvio } from '../services/contacto.service';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.page.html',
  styleUrls: ['./contacto.page.scss'],
  standalone: true,
  imports: [
    FormsModule,
    IonHeader, IonToolbar, IonButtons, IonMenuButton, IonTitle, IonContent,
    IonCard, IonList, IonItem, IonIcon, IonLabel, IonCardHeader, IonCardTitle,
    IonCardContent, IonInput, IonTextarea, IonButton, IonToast, IonSpinner
  ]
})
export class ContactoPage implements OnInit {

  /** Datos del formulario de contacto enlazados bidireccionalmente */
  public datosFormulario: MensajeContacto = {
    nombre: '',
    email: '',
    mensaje: ''
  };

  /** Controla la visibilidad del toast de notificación */
  public mostrarToast = false;

  /** Mensaje a mostrar en el toast */
  public mensajeToast = '';

  /** Color del toast (success o danger) */
  public colorToast: 'success' | 'danger' = 'success';

  /** Indica si el formulario está en proceso de envío */
  public enviando = false;

  /** Flag para saber si el usuario ha intentado enviar (para mostrar errores) */
  public intentoEnvio = false;

  constructor(private contactoService: ContactoService) { }

  ngOnInit() { }

  /**
   * Envía el mensaje de contacto utilizando el servicio especializado.
   * Maneja estados de carga, validación y feedback visual.
   */
  enviarMensaje(): void {
    this.intentoEnvio = true;

    // Validación rápida del lado del componente (además de la del servicio)
    const errorLocal = this.validarCamposLocal();
    if (errorLocal) {
      this.mensajeToast = errorLocal;
      this.colorToast = 'danger';
      this.mostrarToast = true;
      return;
    }

    this.enviando = true;

    this.contactoService.enviarMensaje(this.datosFormulario).subscribe({
      next: (resultado: ResultadoEnvio) => {
        this.enviando = false;
        this.mensajeToast = resultado.mensaje;
        this.colorToast = resultado.exito ? 'success' : 'danger';
        this.mostrarToast = true;

        // Si el envío fue exitoso, limpiamos el formulario y reseteamos validación
        if (resultado.exito) {
          this.datosFormulario = { nombre: '', email: '', mensaje: '' };
          this.intentoEnvio = false;
        }
      },
      error: () => {
        this.enviando = false;
        this.mensajeToast = 'Ocurrió un error al enviar el mensaje. Intenta de nuevo.';
        this.colorToast = 'danger';
        this.mostrarToast = true;
      }
    });
  }

  /**
   * Validación rápida del lado del componente para feedback inmediato.
   */
  private validarCamposLocal(): string | null {
    if (!this.datosFormulario.nombre || this.datosFormulario.nombre.trim().length === 0) {
      return 'El nombre es obligatorio.';
    }
    if (!this.datosFormulario.email || this.datosFormulario.email.trim().length === 0) {
      return 'El correo electrónico es obligatorio.';
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(this.datosFormulario.email.trim())) {
      return 'El formato del correo electrónico no es válido.';
    }
    if (!this.datosFormulario.mensaje || this.datosFormulario.mensaje.trim().length === 0) {
      return 'El mensaje no puede estar vacío.';
    }
    return null;
  }

  /**
   * Verifica si un campo específico tiene error después de un intento de envío.
   */
  campoInvalido(campo: keyof MensajeContacto): boolean {
    if (!this.intentoEnvio) return false;
    const valor = this.datosFormulario[campo]?.trim() || '';
    if (campo === 'email' && valor.length > 0) {
      return !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(valor);
    }
    return valor.length === 0;
  }
}
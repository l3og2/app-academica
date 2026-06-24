import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { ContactoPage } from './contacto.page';
import { routes } from '../app.routes';
import { ContactoService } from '../services/contacto.service';
import { of } from 'rxjs';

describe('ContactoPage', () => {
  let component: ContactoPage;
  let fixture: ComponentFixture<ContactoPage>;
  let contactoServiceSpy: jasmine.SpyObj<ContactoService>;

  beforeEach(async () => {
    // Creamos un mock del ContactoService
    const spy = jasmine.createSpyObj('ContactoService', ['enviarMensaje']);
    spy.enviarMensaje.and.returnValue(of({
      exito: true,
      mensaje: '¡Mensaje enviado con éxito!'
    }));

    await TestBed.configureTestingModule({
      imports: [ContactoPage],
      providers: [
        provideRouter(routes),
        { provide: ContactoService, useValue: spy }
      ]
    }).compileComponents();

    contactoServiceSpy = TestBed.inject(ContactoService) as jasmine.SpyObj<ContactoService>;

    fixture = TestBed.createComponent(ContactoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize with empty form', () => {
    expect(component.datosFormulario.nombre).toBe('');
    expect(component.datosFormulario.email).toBe('');
    expect(component.datosFormulario.mensaje).toBe('');
    expect(component.enviando).toBeFalse();
    expect(component.intentoEnvio).toBeFalse();
  });

  it('should show validation error when fields are empty on submit', () => {
    // Intentamos enviar con campos vacíos
    component.enviarMensaje();

    // Debe mostrar el toast de error
    expect(component.mostrarToast).toBeTrue();
    expect(component.colorToast).toBe('danger');
    // No debe llamar al servicio porque la validación local falla primero
    expect(contactoServiceSpy.enviarMensaje).not.toHaveBeenCalled();
  });

  it('should call ContactoService when form is valid', () => {
    // Llenamos el formulario con datos válidos
    component.datosFormulario = {
      nombre: 'Juan Pérez',
      email: 'juan@example.com',
      mensaje: 'Hola, queremos contratar tus servicios.'
    };

    component.enviarMensaje();

    // Debe llamar al servicio
    expect(contactoServiceSpy.enviarMensaje).toHaveBeenCalledWith(component.datosFormulario);
  });

  it('should reset form after successful submission', () => {
    // Llenamos el formulario
    component.datosFormulario = {
      nombre: 'Juan Pérez',
      email: 'juan@example.com',
      mensaje: 'Hola, queremos contratar tus servicios.'
    };

    component.enviarMensaje();

    // El servicio mock retorna éxito, el formulario debe limpiarse
    expect(component.datosFormulario.nombre).toBe('');
    expect(component.datosFormulario.email).toBe('');
    expect(component.datosFormulario.mensaje).toBe('');
    expect(component.intentoEnvio).toBeFalse();
  });

  it('should detect invalid email format', () => {
    // Probamos el método campoInvalido con email mal formado
    component.intentoEnvio = true;
    component.datosFormulario.email = 'correo-invalido';

    expect(component.campoInvalido('email')).toBeTrue();
  });

  it('should detect valid email format', () => {
    component.intentoEnvio = true;
    component.datosFormulario.email = 'valido@correo.com';
    component.datosFormulario.nombre = 'Test';
    component.datosFormulario.mensaje = 'Test mensaje';

    expect(component.campoInvalido('email')).toBeFalse();
  });
});

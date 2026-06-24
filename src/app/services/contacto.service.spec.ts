import { TestBed, fakeAsync, tick } from '@angular/core/testing';
import { ContactoService, MensajeContacto, ResultadoEnvio } from './contacto.service';

describe('ContactoService', () => {
  let service: ContactoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ContactoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('validarMensaje', () => {
    it('should return error if nombre is empty', () => {
      const data: MensajeContacto = { nombre: '', email: 'test@test.com', mensaje: 'Hola' };
      const error = service.validarMensaje(data);
      expect(error).toContain('nombre');
    });

    it('should return error if nombre is only whitespace', () => {
      const data: MensajeContacto = { nombre: '   ', email: 'test@test.com', mensaje: 'Hola' };
      const error = service.validarMensaje(data);
      expect(error).toContain('nombre');
    });

    it('should return error if email is empty', () => {
      const data: MensajeContacto = { nombre: 'Juan', email: '', mensaje: 'Hola' };
      const error = service.validarMensaje(data);
      expect(error).toContain('correo');
    });

    it('should return error if email format is invalid', () => {
      const data: MensajeContacto = { nombre: 'Juan', email: 'correo-invalido', mensaje: 'Hola' };
      const error = service.validarMensaje(data);
      expect(error).toContain('formato');
    });

    it('should accept valid email formats', () => {
      const data: MensajeContacto = { nombre: 'Juan', email: 'usuario@dominio.com', mensaje: 'Hola' };
      const error = service.validarMensaje(data);
      expect(error).toBeNull();
    });

    it('should return error if mensaje is empty', () => {
      const data: MensajeContacto = { nombre: 'Juan', email: 'test@test.com', mensaje: '' };
      const error = service.validarMensaje(data);
      expect(error).toContain('mensaje');
    });

    it('should return null when all fields are valid', () => {
      const data: MensajeContacto = {
        nombre: 'Juan Pérez',
        email: 'juan@example.com',
        mensaje: 'Quiero contactarte para un proyecto.'
      };
      const error = service.validarMensaje(data);
      expect(error).toBeNull();
    });
  });

  describe('enviarMensaje', () => {
    it('should return success when data is valid', fakeAsync(() => {
      const data: MensajeContacto = {
        nombre: 'Juan Pérez',
        email: 'juan@example.com',
        mensaje: 'Quiero contactarte para un proyecto.'
      };

      let resultado!: ResultadoEnvio;
      service.enviarMensaje(data).subscribe(res => {
        resultado = res;
      });

      // Avanzamos el timer del delay(1500)
      tick(1500);

      expect(resultado.exito).toBeTrue();
      expect(resultado.mensaje).toContain('éxito');
    }));

    it('should return error when data is invalid', fakeAsync(() => {
      const data: MensajeContacto = { nombre: '', email: '', mensaje: '' };

      let resultado!: ResultadoEnvio;
      service.enviarMensaje(data).subscribe(res => {
        resultado = res;
      });

      tick(); // Procesamos la emisión síncrona
      expect(resultado.exito).toBeFalse();
      expect(resultado.mensaje).toContain('nombre');
    }));

    it('should trim whitespace from input data', fakeAsync(() => {
      const data: MensajeContacto = {
        nombre: '  Juan Pérez  ',
        email: '  juan@example.com  ',
        mensaje: '  Hola mundo  '
      };

      let resultado!: ResultadoEnvio;
      service.enviarMensaje(data).subscribe(res => {
        resultado = res;
      });

      tick(1500);

      expect(resultado.exito).toBeTrue();
    }));
  });
});

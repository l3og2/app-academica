import { TestBed } from '@angular/core/testing';
import { PerfilService, PerfilCompleto, PerfilEstudiante } from './perfil.service';

describe('PerfilService', () => {
  let service: PerfilService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PerfilService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return a complete profile via observable', (done) => {
    service.obtenerPerfilCompleto().subscribe((perfil: PerfilCompleto) => {
      expect(perfil).toBeTruthy();
      expect(perfil.nombre).toBe('Leonardo');
      expect(perfil.carrera).toContain('Ingeniería');
      expect(perfil.semestre).toBe(7);
      expect(perfil.ubicacion).toContain('Guarenas');
      done();
    });
  });

  it('should return 6 tech skills', (done) => {
    service.obtenerPerfilCompleto().subscribe((perfil: PerfilCompleto) => {
      expect(perfil.habilidades.length).toBe(6);
      expect(perfil.habilidades).toContain('Angular');
      expect(perfil.habilidades).toContain('TypeScript');
      expect(perfil.habilidades).toContain('Node.js');
      done();
    });
  });

  it('should return 2 hobbies/pasatiempos', (done) => {
    service.obtenerPerfilCompleto().subscribe((perfil: PerfilCompleto) => {
      expect(perfil.pasatiempos.length).toBe(2);
      expect(perfil.pasatiempos[0].titulo).toContain('Equilibrio');
      expect(perfil.pasatiempos[1].titulo).toContain('Familia');
      done();
    });
  });

  it('should return basic profile (without extra fields) via obtenerPerfilBasico', (done) => {
    service.obtenerPerfilBasico().subscribe((perfil: PerfilEstudiante) => {
      expect(perfil).toBeTruthy();
      expect(perfil.nombre).toBe('Leonardo');
      // Las propiedades extendidas no deben estar presentes
      expect((perfil as PerfilCompleto).ubicacion).toBeUndefined();
      expect((perfil as PerfilCompleto).pasatiempos).toBeUndefined();
      done();
    });
  });

  it('should not mutate the original profile data', (done) => {
    service.obtenerPerfilCompleto().subscribe((perfil: PerfilCompleto) => {
      perfil.nombre = 'Hacked';
      // Al obtenerlo de nuevo, debe seguir siendo el original
      service.obtenerPerfilCompleto().subscribe((perfilAgain: PerfilCompleto) => {
        expect(perfilAgain.nombre).toBe('Leonardo');
        done();
      });
    });
  });
});

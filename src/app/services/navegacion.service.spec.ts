import { TestBed } from '@angular/core/testing';
import { NavegacionService, PaginaMenu } from './navegacion.service';

describe('NavegacionService', () => {
  let service: NavegacionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NavegacionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return 3 navigation pages', () => {
    const paginas = service.obtenerPaginas();
    expect(paginas.length).toEqual(3);
  });

  it('should return Inicio as first page', () => {
    const paginas = service.obtenerPaginas();
    expect(paginas[0].title).toBe('Inicio');
    expect(paginas[0].url).toBe('/inicio');
    expect(paginas[0].icon).toBe('home');
  });

  it('should return Info Personal as second page', () => {
    const paginas = service.obtenerPaginas();
    expect(paginas[1].title).toBe('Información Personal');
    expect(paginas[1].url).toBe('/info-personal');
    expect(paginas[1].icon).toBe('person');
  });

  it('should return Contacto as third page', () => {
    const paginas = service.obtenerPaginas();
    expect(paginas[2].title).toBe('Contacto');
    expect(paginas[2].url).toBe('/contacto');
    expect(paginas[2].icon).toBe('mail');
  });

  it('should return an empty labels array', () => {
    const labels = service.obtenerLabels();
    expect(labels).toEqual([]);
  });

  it('should not mutate the original pages array when returning', () => {
    const paginas = service.obtenerPaginas();
    paginas[0].title = 'Hacked';
    const paginasAgain = service.obtenerPaginas();
    // El título original debe mantenerse (prueba de inmutabilidad)
    expect(paginasAgain[0].title).toBe('Inicio');
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { InfoPersonalPage } from './info-personal.page';
import { routes } from '../app.routes';

describe('InfoPersonalPage', () => {
  let component: InfoPersonalPage;
  let fixture: ComponentFixture<InfoPersonalPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InfoPersonalPage],
      providers: [provideRouter(routes)]
    }).compileComponents();

    fixture = TestBed.createComponent(InfoPersonalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should load profile data from PerfilService on init', () => {
    // La suscripción se completa en el mismo tick (of() es síncrono),
    // pero necesitamos una segunda detección de cambios para reflejar los datos
    fixture.detectChanges();
    expect(component.miPerfil).toBeDefined();
    expect(component.miPerfil!.nombre).toBe('Leonardo');
    expect(component.miPerfil!.carrera).toBe('Ingeniería en Informática');
    expect(component.miPerfil!.semestre).toBe(7);
  });

  it('should display the user name in the card title', () => {
    fixture.detectChanges(); // Asegura que la suscripción se procesó
    const compiled = fixture.nativeElement;
    const cardTitle = compiled.querySelector('ion-card-title');
    expect(cardTitle).toBeTruthy();
    expect(cardTitle!.textContent).toContain('Leonardo');
  });

  it('should display tech badges for each skill', () => {
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    const badges = compiled.querySelectorAll('ion-badge');
    // Debe haber al menos tantos badges como habilidades (6)
    expect(badges.length).toBeGreaterThanOrEqual(6);
  });
});

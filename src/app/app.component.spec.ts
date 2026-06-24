import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';

import { AppComponent } from './app.component';
import { routes } from './app.routes';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent],
      providers: [provideRouter(routes)]
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should have 3 navigation pages from NavegacionService', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const app = fixture.componentInstance;

    // Verificamos que el servicio inyectó 3 páginas de navegación
    expect(app.appPages.length).toEqual(3);
    expect(app.appPages[0].title).toContain('Inicio');
    expect(app.appPages[1].title).toContain('Información Personal');
    expect(app.appPages[2].title).toContain('Contacto');
  });

  it('should render menu items with correct labels', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;

    // Buscamos los labels del menú principal
    const labels = compiled.querySelectorAll('ion-label');
    // Filtramos para obtener solo los labels de las páginas (excluyendo "Labels")
    const pageLabels = Array.from(labels)
      .filter((label: any) =>
        ['Inicio', 'Información Personal', 'Contacto']
          .includes(label.textContent.trim())
      );

    expect(pageLabels.length).toEqual(3);
    expect(pageLabels[0].textContent).toContain('Inicio');
    expect(pageLabels[1].textContent).toContain('Información Personal');
    expect(pageLabels[2].textContent).toContain('Contacto');
  });

  it('should have correct routes for navigation items (via component data)', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const app = fixture.componentInstance;

    // Verificamos las rutas desde las propiedades del componente
    expect(app.appPages[0].url).toEqual('/inicio');
    expect(app.appPages[1].url).toEqual('/info-personal');
    expect(app.appPages[2].url).toEqual('/contacto');
  });
});

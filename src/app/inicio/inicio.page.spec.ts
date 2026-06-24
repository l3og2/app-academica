import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { InicioPage } from './inicio.page';
import { routes } from '../app.routes';

describe('InicioPage', () => {
  let component: InicioPage;
  let fixture: ComponentFixture<InicioPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InicioPage],
      providers: [provideRouter(routes)]
    }).compileComponents();

    fixture = TestBed.createComponent(InicioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a CTA button that links to /info-personal', () => {
    const compiled = fixture.nativeElement;
    const buttons = compiled.querySelectorAll('ion-button');
    const ctaButton = Array.from(buttons).find(
      (btn: any) => btn.getAttribute('ng-reflect-router-link') === '/info-personal'
    );
    // El botón debe existir (routerLink en el HTML)
    // Nota: ng-reflect-router-link puede no estar presente en todos los modos de Ionic,
    // pero verificamos que al menos exista el botón CTA
    expect(ctaButton).toBeTruthy();
  });
});

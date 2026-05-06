import { Routes } from '@angular/router';

export const routes: Routes = [
  // 1. Ruta por defecto: Si la URL está vacía, nos manda al Inicio
  {
    path: '',
    redirectTo: 'inicio',
    pathMatch: 'full',
  },
  
  // 2. Ruta para el Inicio
  {
    path: 'inicio',
    // OJO AQUÍ: Usamos loadComponent en vez de loadChildren. 
    // Apuntamos directo a la clase de la página.
    loadComponent: () => import('./inicio/inicio.page').then( m => m.InicioPage)
  },
  
  // 3. Ruta para Información Personal
  {
    path: 'info-personal',
    loadComponent: () => import('./info-personal/info-personal.page').then( m => m.InfoPersonalPage)
  },
  
  // 4. Ruta para el Contacto
  {
    path: 'contacto',
    loadComponent: () => import('./contacto/contacto.page').then( m => m.ContactoPage)
  }
];
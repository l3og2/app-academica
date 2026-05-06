import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
// Importamos TODOS los componentes visuales que usa el menú de Ionic
import { IonApp, IonSplitPane, IonMenu, IonContent, IonList, IonListHeader, IonNote, IonMenuToggle, IonItem, IonIcon, IonLabel, IonRouterOutlet } from '@ionic/angular/standalone';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: true, // ¡Nuestra arquitectura moderna!
  // Aquí declaramos el arsenal:
  imports: [RouterLink, RouterLinkActive, IonApp, IonSplitPane, IonMenu, IonContent, IonList, IonListHeader, IonNote, IonMenuToggle, IonItem, IonIcon, IonLabel, IonRouterOutlet],
})
export class AppComponent {
  
  // Renombramos nuestra variable a 'appPages' porque así la está buscando el HTML por defecto
  public appPages = [
    { title: 'Inicio', url: '/inicio', icon: 'home' },
    { title: 'Información Personal', url: '/info-personal', icon: 'person' },
    { title: 'Contacto', url: '/contacto', icon: 'mail' },
  ];

  // Agregamos esta variable vacía para que el HTML no se queje de que falta
  public labels = []; 

  constructor() {}
}
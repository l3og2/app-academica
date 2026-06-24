import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
// Importamos TODOS los componentes visuales que usa el menú de Ionic
import { IonApp, IonSplitPane, IonMenu, IonContent, IonList, IonListHeader, IonNote, IonMenuToggle, IonItem, IonIcon, IonLabel, IonRouterOutlet } from '@ionic/angular/standalone';

// Importamos el servicio de navegación y su interfaz
import { NavegacionService, PaginaMenu } from './services/navegacion.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: true,
  imports: [RouterLink, RouterLinkActive, IonApp, IonSplitPane, IonMenu, IonContent, IonList, IonListHeader, IonNote, IonMenuToggle, IonItem, IonIcon, IonLabel, IonRouterOutlet],
})
export class AppComponent implements OnInit {

  /** Páginas del menú lateral, obtenidas desde el servicio */
  public appPages: PaginaMenu[] = [];

  /** Labels secundarios del menú */
  public labels: string[] = [];

  constructor(private navegacionService: NavegacionService) {}

  ngOnInit(): void {
    // Cargamos los datos desde el servicio centralizado
    this.appPages = this.navegacionService.obtenerPaginas();
    this.labels = this.navegacionService.obtenerLabels();
  }
}
import { Component, OnInit } from '@angular/core';
// Importamos los componentes visuales de Ionic
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButtons, IonMenuButton, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonList, IonItem, IonIcon, IonLabel, IonGrid, IonRow, IonCol, IonAvatar, IonBadge } from '@ionic/angular/standalone';

// Importamos el servicio de perfil y sus interfaces
import { PerfilService, PerfilCompleto } from '../services/perfil.service';

@Component({
  selector: 'app-info-personal',
  templateUrl: './info-personal.page.html',
  styleUrls: ['./info-personal.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, IonButtons, IonMenuButton, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonList, IonItem, IonIcon, IonLabel, IonGrid, IonRow, IonCol, IonAvatar, IonBadge]
})
export class InfoPersonalPage implements OnInit {

  /** Perfil completo del profesional */
  public miPerfil!: PerfilCompleto;

  constructor(private perfilService: PerfilService) { }

  ngOnInit() {
    // Cargamos el perfil desde el servicio centralizado
    this.perfilService.obtenerPerfilCompleto().subscribe(perfil => {
      this.miPerfil = perfil;
    });
  }
}
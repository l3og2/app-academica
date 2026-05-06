import { Component, OnInit } from '@angular/core';
// Importamos el RouterLink para que el botón pueda navegar
import { RouterLink } from '@angular/router';
// Importamos las etiquetas visuales de Ionic
import { IonHeader, IonToolbar, IonButtons, IonMenuButton, IonTitle, IonContent, IonIcon, IonGrid, IonRow, IonCol, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonButton } from '@ionic/angular/standalone';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
  standalone: true,
  // Inyectamos todo en el componente
  imports: [RouterLink, IonHeader, IonToolbar, IonButtons, IonMenuButton, IonTitle, IonContent, IonIcon, IonGrid, IonRow, IonCol, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonButton],
})
export class InicioPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
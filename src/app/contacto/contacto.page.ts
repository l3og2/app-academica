import { Component, OnInit } from '@angular/core';
// Importamos TODO lo que acabamos de meter en el HTML
import { IonHeader, IonToolbar, IonButtons, IonMenuButton, IonTitle, IonContent, IonCard, IonList, IonItem, IonIcon, IonLabel, IonCardHeader, IonCardTitle, IonCardContent, IonInput, IonTextarea, IonButton } from '@ionic/angular/standalone';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.page.html',
  styleUrls: ['./contacto.page.scss'],
  standalone: true,
  // Le pasamos la lista de componentes a la isla
  imports: [IonHeader, IonToolbar, IonButtons, IonMenuButton, IonTitle, IonContent, IonCard, IonList, IonItem, IonIcon, IonLabel, IonCardHeader, IonCardTitle, IonCardContent, IonInput, IonTextarea, IonButton]
})
export class ContactoPage implements OnInit {
  constructor() { }
  ngOnInit() { }
}
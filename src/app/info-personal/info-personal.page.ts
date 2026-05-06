import { Component, OnInit } from '@angular/core';
// AQUÍ ESTÁ LA MAGIA: Importamos absolutamente TODO lo que usa el HTML
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButtons, IonMenuButton, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonList, IonItem, IonIcon, IonLabel, IonGrid, IonRow, IonCol, IonAvatar, IonBadge } from '@ionic/angular/standalone';

interface PerfilEstudiante {
  nombre: string;
  carrera: string;
  semestre: number;
  habilidades: string[];
}

@Component({
  selector: 'app-info-personal',
  templateUrl: './info-personal.page.html',
  styleUrls: ['./info-personal.page.scss'],
  standalone: true,
  // Le inyectamos la lista de componentes al decorador
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, IonButtons, IonMenuButton, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonList, IonItem, IonIcon, IonLabel, IonGrid, IonRow, IonCol, IonAvatar, IonBadge]
})
export class InfoPersonalPage implements OnInit {

  public miPerfil: PerfilEstudiante = {
    nombre: 'Leonardo',
    carrera: 'Ingeniería en Informática',
    semestre: 7,
    habilidades: ['Angular', 'TypeScript', 'Node.js', 'React (MERN)', 'MongoDB', 'Linux']
  };

  constructor() { }

  ngOnInit() { }
}
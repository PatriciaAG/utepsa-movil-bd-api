import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { IonContent, IonButton/*IonIcon*/ } from '@ionic/angular/standalone';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonContent, RouterLink, IonButton, CommonModule/*IonIcon*/],
})
export class HomePage {
  constructor() {}
}

import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { IonContent, IonButton/*IonIcon*/ } from '@ionic/angular/standalone';
import { Network } from "@capacitor/network";

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonContent, RouterLink, IonButton, CommonModule/*IonIcon*/],
})
export class HomePage {
  status = Network.getStatus();

  constructor() {
    Network.addListener('networkStatusChange', s => alert(s.connected));
  }
}

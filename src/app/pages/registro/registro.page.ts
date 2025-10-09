import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { ServicesProducto } from 'src/app/services/services-producto';
import { LoadingController, ToastController } from '@ionic/angular';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class RegistroPage implements OnInit {

  constructor(
    private fb: FormBuilder,
    private productService: ServicesProducto,
    private loading: LoadingController,
    private toast: ToastController,
  ) 
  { }

  ngOnInit() {
  }

}

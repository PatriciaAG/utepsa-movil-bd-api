import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButton, IonInput, IonItem, IonLabel } from '@ionic/angular/standalone';
import { ServiceProducto } from 'src/app/services/service-producto';
import { LoadingController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, IonButton, IonInput, IonItem, IonLabel, CommonModule, ReactiveFormsModule]
})
export class RegistroPage implements OnInit {

  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private productoService: ServiceProducto,
    private loading: LoadingController,
    private toast: ToastController
  ) { 
    this.form = this.fb.group({
      nombre: ['', [Validators.required, Validators.minLength(2)]],
      precio: ['', [Validators.required, Validators.min(0.01)]]
    });
  }

  ngOnInit() {
    // Inicialización del componente
  }

  async submit() {
    if (this.form.invalid) return;
    
    const loader = await this.loading.create({ 
      message: 'Guardando producto...' 
    });
    await loader.present();
    
    try {
      const { nombre, precio } = this.form.value as any;
      await this.productoService.CrearProducto(nombre, Number(precio));
      this.form.reset();
      this.notify('Producto registrado exitosamente');
    } catch (e) {
      console.error(e);
      this.notify('Error al guardar el producto');
    } finally {
      loader.dismiss();
    }
  }

  private async notify(msg: string) {
    const t = await this.toast.create({ 
      message: msg, 
      duration: 3000 
    });
    await t.present();
  }
}

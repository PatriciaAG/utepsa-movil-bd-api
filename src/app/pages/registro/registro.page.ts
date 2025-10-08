import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButton, IonItem, IonLabel, IonInput, IonNote } from '@ionic/angular/standalone';
import { ServiceProducto } from 'src/app/services/service-producto';
import { LoadingController, ToastController } from '@ionic/angular'

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, IonContent, IonButton,IonItem, IonInput,  CommonModule, FormsModule, ReactiveFormsModule]
})
export class RegistroPage {
  form = this.fb.group({
    nombre: ['', [Validators.required, Validators.minLength(2)]],
    precio: [null, [Validators.required, Validators.min(0)]],
  });

  constructor(
    private fb: FormBuilder,
    private productService: ServiceProducto,
    private loading: LoadingController,
    private toast: ToastController
  ) {}

  async submit() {
    if (this.form.invalid) return;
    const loader = await this.loading.create({ message: 'Guardando...' });
    await loader.present();

    try {
      const { nombre, precio } = this.form.value as any;
      await this.productService.crearProducto(nombre, Number(precio));
      this.form.reset();
      this.notify('Producto registrado');
    } catch (e) {
      console.error(e);
      this.notify('Error al guardar');
    } finally {
      loader.dismiss();
    }
  }

  private async notify(msg: string) {
    const t = await this.toast.create({ message: msg, duration: 2000 });
    t.present();
  }
}
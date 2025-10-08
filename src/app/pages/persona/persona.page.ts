import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ServicePersona } from 'src/app/services/service-persona';
import { LoadingController, ToastController } from '@ionic/angular';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.page.html',
  styleUrls: ['./persona.page.scss'],
  standalone: true,
  imports: [ CommonModule,
    FormsModule, ReactiveFormsModule, IonicModule
  ]
})
export class PersonaPage implements OnInit {
  form = this.fb.group({
    ci: ['', [Validators.required, Validators.minLength(7)]],
    nombre: ['', [Validators.required, Validators.minLength(2)]],
    correoElectronico: ["", [Validators.required, Validators.email]],
    fechaNacimiento: ["", [Validators.required]],
  });

  constructor(
    private fb: FormBuilder,
    private personaService: ServicePersona,
    private loading: LoadingController,
    private toast: ToastController
  ) {}

ngOnInit() {
  setTimeout(() => {
    const firstInput = document.querySelector('input');
    firstInput?.focus();
  }, 100);
}

  async submit() {
    if (this.form.invalid) return;
    const loader = await this.loading.create({ message: 'Guardando...' });
    await loader.present();

    try {
      const { ci, nombre, correoElectronico, fechaNacimiento } = this.form.value as any;
      await this.personaService.crearPersona(ci, nombre, correoElectronico, fechaNacimiento);
      this.form.reset();
      this.notify('Persona registrada');
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

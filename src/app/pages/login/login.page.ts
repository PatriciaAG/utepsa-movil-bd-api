import { Component, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import {
  IonHeader, IonToolbar, IonTitle, IonContent, IonItem, IonLabel,
  IonInput, IonButton, IonText, IonSpinner
} from '@ionic/angular/standalone';
import { Router, RouterLink } from '@angular/router';
import { Login } from 'src/app/services/login';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [
    ReactiveFormsModule,
    RouterLink,
    IonHeader, IonToolbar, IonTitle, IonContent,
    IonItem, IonLabel, IonInput, IonButton, IonText, IonSpinner
  ],
})
export class LoginPage {
  private fb = inject(FormBuilder);
  private auth = inject(Login);
  private router = inject(Router);

  loading = signal(false);
  error = signal<string | null>(null);

  form = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
  });

  async onLogin() {
    if (this.form.invalid) return;
    this.loading.set(true);
    this.error.set(null);
    const { email, password } = this.form.value;

    try {
      await this.auth.loginEmail(email!, password!).toPromise();
      await this.router.navigateByUrl('/', { replaceUrl: true });
    } catch (e: any) {
      this.error.set(this.humanizeError(e?.code || e?.message));
    } finally {
      this.loading.set(false);
    }
  }

  async onRegister() {
    if (this.form.invalid) return;
    this.loading.set(true);
    this.error.set(null);
    const { email, password } = this.form.value;

    try {
      await this.auth.registerEmail(email!, password!).toPromise();
      await this.router.navigateByUrl('/', { replaceUrl: true });
    } catch (e: any) {
      this.error.set(this.humanizeError(e?.code || e?.message));
    } finally {
      this.loading.set(false);
    }
  }

  private humanizeError(code: string): string {
    switch (code) {
      case 'auth/invalid-credential':
      case 'auth/wrong-password':
      case 'auth/user-not-found':
        return 'Credenciales inválidas.';
      case 'auth/email-already-in-use':
        return 'El email ya está en uso.';
      case 'auth/weak-password':
        return 'La contraseña es demasiado débil.';
      case 'auth/popup-closed-by-user':
        return 'Se cerró la ventana de Google.';
      default:
        return 'Ocurrió un error. Intenta de nuevo.';
    }
  }
}
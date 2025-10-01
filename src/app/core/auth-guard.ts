import { CanActivateFn, CanDeactivateFn } from '@angular/router';
import { inject } from '@angular/core';
import { Auth, authState,AuthCredential } from '@angular/fire/auth';
import { CanActivate,Router } from '@angular/router';
import { firstValueFrom } from 'rxjs';

export const authGuard: CanActivateFn = async (route, state) => {
  const auth = inject(Auth);
  const router = inject(Router);
};
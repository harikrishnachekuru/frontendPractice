import { inject, Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Auth } from './services/auth';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {

  private auth = inject(Auth);
  private route = inject(Router);

  canActivate(): boolean {
    if (this.auth.isLoggedIn()) {
      return true;
    }

    this.route.navigate(['/login']);
    return false;
  }
}
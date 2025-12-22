import { Routes } from '@angular/router';
import { Admin } from './admin';
import { authGuard } from '../../auth-guard';

export const ADMIN_ROUTES: Routes = [
  {
    path: '',
    component: Admin,
    canActivate: [authGuard]
  }
];

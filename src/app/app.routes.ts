import { Routes } from '@angular/router';
import {HomeComponent} from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { authGuard } from './guards/auth-guard';

export const routes: Routes = [
  // Redirect root to login
  { path: '', redirectTo: 'login', pathMatch: 'full' },

  // Login route (used by authGuard redirect)
  { path: 'login', component: LoginComponent },

  // Home route (loaded component) - protected by authGuard
  { path: 'home', component: HomeComponent, canActivate: [authGuard] },

  // Fallback
  { path: '**', redirectTo: 'login' },
];

import { Routes } from '@angular/router';
import {HomeComponent} from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';

export const routes: Routes = [
  {path: 'home', loadComponent: () => import('./home/home.page').then((m) => m.HomePage),},
  {path: '', component: LoginComponent},
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
];

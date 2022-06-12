import { Routes } from '@angular/router';
import { NotFoundComponent } from './core/not-found/not-found.component';

export const appRoutes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./modules/login/login.module').then(m => m.LoginModule)
  },
  {
    path: 'panel',
    loadChildren: () => import('./modules/panel/panel.module').then(m => m.PanelModule)
  },
  {
    path: '**', pathMatch: 'full',
    component: NotFoundComponent
  }
];

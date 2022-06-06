import { Routes } from '@angular/router';

import { HomeComponent } from './modules/home/home.component';
import { SearchComponent } from './modules/search/search.component';

export const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'search',
    component: SearchComponent
  },
];

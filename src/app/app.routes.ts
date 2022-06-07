import { Routes } from '@angular/router';

import { HomeComponent } from './modules/home/home.component';
import { MyLibraryComponent } from './modules/my-library/my-library.component';
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
  {
    path: 'my-library',
    component: MyLibraryComponent
  }
];

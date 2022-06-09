import { Routes } from '@angular/router';

import { HomeComponent } from '../home/home.component';
import { MyLibraryComponent } from '../my-library/my-library.component';
import { PlaylistComponent } from '../playlist/playlist.component';
import { SearchComponent } from '../search/search.component';
import { PanelComponent } from './panel.component';

export const panelRoutes: Routes = [
    {
        path: 'panel',
        component: PanelComponent,
        children: [
            {
                path: '',
                redirectTo: 'home',
                pathMatch: 'full'
            },
            {
                path: 'home',
                component: HomeComponent
            },
            {
                path: 'search',
                component: SearchComponent
            },
            {
                path: 'my-library',
                component: MyLibraryComponent
            },
            {
                path: 'playlist/:id',
                component: PlaylistComponent
            }
        ]
    }
];

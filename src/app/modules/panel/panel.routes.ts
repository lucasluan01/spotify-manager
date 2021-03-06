import { Routes } from '@angular/router';

import { HomeComponent } from '../home/home.component';
import { MyLibraryComponent } from '../my-library/my-library.component';
import { PlaylistComponent } from '../playlist/playlist.component';
import { SearchComponent } from '../search/search.component';
import { PanelComponent } from './panel.component';
import { ArtistComponent } from './../artist/artist.component';
import { AlbumComponent } from '../album/album.component';
import { CreatePlaylistComponent } from './../create-playlist/create-playlist.component';
import { RecentlyPlayedComponent } from './../recently-played/recently-played.component';
import { CategoryComponent } from '../category/category.component';

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
                path: 'recently-played',
                component: RecentlyPlayedComponent
            },
            {
                path: 'my-library',
                component: MyLibraryComponent
            },
            {
                path: 'create-playlist',
                component: CreatePlaylistComponent
            },
            {
                path: 'playlist/:id',
                component: PlaylistComponent
            },
            {
                path: 'category/:id',
                component: CategoryComponent
            },
            {
                path: 'artist/:id',
                component: ArtistComponent
            },
            {
                path: 'album/:id',
                component: AlbumComponent
            }
        ]
    }
];

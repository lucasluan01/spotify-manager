import { panelRoutes } from './panel.routes';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PanelComponent } from './panel.component';

import { NavigationModule } from 'src/app/core/navigation/navigation.module';
import { HomeModule } from '../home/home.module';
import { SearchModule } from '../search/search.module';
import { MyLibraryModule } from '../my-library/my-library.module';
import { PlaylistModule } from '../playlist/playlist.module';
import { LoginModule } from '../login/login.module';
import { CategoryModule } from '../category/category.module';
import { ArtistModule } from '../artist/artist.module';



@NgModule({
  declarations: [
    PanelComponent
  ],
  imports: [
    CommonModule,
    NavigationModule,
    HomeModule,
    SearchModule,
    MyLibraryModule,
    PlaylistModule,
    LoginModule,
    CategoryModule,
    ArtistModule,
    RouterModule.forChild(panelRoutes)
  ],
  exports: [
    PanelComponent
  ]
})
export class PanelModule { }

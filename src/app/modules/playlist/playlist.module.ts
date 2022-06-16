import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { PlaylistComponent } from './playlist.component';
import { HeaderBannerComponent } from './header-banner/header-banner.component';
import { MusicTableComponent } from './music-table/music-table.component';



@NgModule({
  declarations: [
    PlaylistComponent,
    HeaderBannerComponent,
    MusicTableComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule
  ],
  exports: [
    PlaylistComponent
  ]
})
export class PlaylistModule { }

import { RecentlyPlayedComponent } from './recently-played.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MusicTableComponent } from './music-table/music-table.component';
import { HeaderBannerComponent } from './header-banner/header-banner.component';



@NgModule({
  declarations: [
    MusicTableComponent,
    RecentlyPlayedComponent,
    HeaderBannerComponent
  ],
  imports: [
    CommonModule,
    RouterModule    
  ],
  exports: [
    RecentlyPlayedComponent
  ]
})
export class RecentlyPlayedModule { }

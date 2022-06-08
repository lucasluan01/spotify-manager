import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MusicCardComponent } from './music-card/music-card.component';
import { ListMusicCardComponent } from './list-music-card/list-music-card.component';
import { InputSearchComponent } from './input-search/input-search.component';
import { HeaderBannerComponent } from './header-banner/header-banner.component';
import { MusicTableComponent } from './music-table/music-table.component';



@NgModule({
  declarations: [
    MusicCardComponent,
    ListMusicCardComponent,
    InputSearchComponent,
    HeaderBannerComponent,
    MusicTableComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    MusicCardComponent,
    ListMusicCardComponent,
    InputSearchComponent,
    HeaderBannerComponent,
    MusicTableComponent
  ]
})
export class ComponentsModule { }

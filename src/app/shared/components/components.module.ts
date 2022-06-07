import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MusicCardComponent } from './music-card/music-card.component';
import { ListMusicCardComponent } from './list-music-card/list-music-card.component';
import { InputSearchComponent } from './input-search/input-search.component';
import { HeaderBannerComponent } from './header-banner/header-banner.component';



@NgModule({
  declarations: [
    MusicCardComponent,
    ListMusicCardComponent,
    InputSearchComponent,
    HeaderBannerComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    MusicCardComponent,
    ListMusicCardComponent,
    InputSearchComponent,
    HeaderBannerComponent
  ]
})
export class ComponentsModule { }

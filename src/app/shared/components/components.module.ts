import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MusicCardComponent } from './music-card/music-card.component';
import { ListMusicCardComponent } from './list-music-card/list-music-card.component';
import { InputSearchComponent } from './input-search/input-search.component';


@NgModule({
  declarations: [
    MusicCardComponent,
    ListMusicCardComponent,
    InputSearchComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    MusicCardComponent,
    ListMusicCardComponent,
    InputSearchComponent
  ]
})
export class ComponentsModule { }

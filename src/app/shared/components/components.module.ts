import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MusicCardComponent } from './music-card/music-card.component';
import { ListMusicCardComponent } from './list-music-card/list-music-card.component';



@NgModule({
  declarations: [
    MusicCardComponent,
    ListMusicCardComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    MusicCardComponent,
    ListMusicCardComponent
  ]
})
export class ComponentsModule { }

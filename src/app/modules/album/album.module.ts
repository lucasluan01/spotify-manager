import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlbumComponent } from './album.component';
import { MusicTableComponent } from './music-table/music-table.component';



@NgModule({
  declarations: [
    AlbumComponent,
    MusicTableComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    AlbumComponent
  ]
})
export class AlbumModule { }

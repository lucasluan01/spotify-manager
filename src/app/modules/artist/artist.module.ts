import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArtistComponent } from './artist.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { MusicTableComponent } from './music-table/music-table.component';



@NgModule({
  declarations: [
    ArtistComponent,
    MusicTableComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule
  ],
  exports: [
    ArtistComponent
  ]
})
export class ArtistModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlaylistComponent } from './playlist/playlist.component';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [
    PlaylistComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    PlaylistComponent
  ]
})
export class PlaylistModule { }

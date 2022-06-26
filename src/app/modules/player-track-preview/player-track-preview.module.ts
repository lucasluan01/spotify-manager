import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlayerTrackPreviewComponent } from './player-track-preview.component';



@NgModule({
  declarations: [
    PlayerTrackPreviewComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    PlayerTrackPreviewComponent
  ]
})
export class PlayerTrackPreviewModule { }

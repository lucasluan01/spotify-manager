import { SharedModule } from 'src/app/shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreatePlaylistComponent } from './create-playlist.component';


@NgModule({
  declarations: [
    CreatePlaylistComponent,
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    CreatePlaylistComponent
  ]
})
export class CreatePlaylistModule { }

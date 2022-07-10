import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlbumComponent } from './album.component';
import { SharedModule } from './../../shared/shared.module';



@NgModule({
  declarations: [
    AlbumComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule
  ],
  exports: [
    AlbumComponent
  ]
})
export class AlbumModule { }

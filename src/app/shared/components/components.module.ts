import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';
import { ListCardComponent } from './list-card/list-card.component';
import { MusicTableComponent } from './music-table/music-table.component';


@NgModule({
  declarations: [
    CardComponent,
    ListCardComponent,
    MusicTableComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    ListCardComponent,
    CardComponent,
    MusicTableComponent
  ]
})
export class ComponentsModule { }

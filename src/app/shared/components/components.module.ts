import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputSearchComponent } from './input-search/input-search.component';
import { CardComponent } from './card/card.component';
import { ListCardComponent } from './list-card/list-card.component';
import { MusicTableComponent } from './music-table/music-table.component';


@NgModule({
  declarations: [
    InputSearchComponent,
    CardComponent,
    ListCardComponent,
    MusicTableComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    InputSearchComponent,
    ListCardComponent,
    CardComponent,
    MusicTableComponent
  ]
})
export class ComponentsModule { }

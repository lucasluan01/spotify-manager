import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputSearchComponent } from './input-search/input-search.component';
import { CardComponent } from './card/card.component';
import { ListCardComponent } from './list-card/list-card.component';


@NgModule({
  declarations: [
    InputSearchComponent,
    CardComponent,
    ListCardComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    InputSearchComponent,
    ListCardComponent,
    CardComponent
  ]
})
export class ComponentsModule { }

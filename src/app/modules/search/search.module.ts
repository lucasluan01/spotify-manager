import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GenderCardComponent } from './gender-card/gender-card.component';
import { ListGenresComponent } from './list-genres/list-genres.component';
import { SearchComponent } from './search.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    GenderCardComponent,
    ListGenresComponent,
    SearchComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
  ]
})
export class SearchModule { }

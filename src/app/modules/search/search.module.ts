import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListGenresComponent } from './list-genres/list-genres.component';
import { SearchComponent } from './search.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { GenreCardComponent } from './genre-card/genre-card.component';


@NgModule({
  declarations: [
    ListGenresComponent,
    SearchComponent,
    GenreCardComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
  ]
})
export class SearchModule { }

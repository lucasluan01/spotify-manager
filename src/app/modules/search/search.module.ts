import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchComponent } from './search.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ListCategoriesComponent } from './list-categories/list-categories.component';
import { CategoryCardComponent } from './category-card/category-card.component';


@NgModule({
  declarations: [
    SearchComponent,
    ListCategoriesComponent,
    CategoryCardComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
  ]
})
export class SearchModule { }

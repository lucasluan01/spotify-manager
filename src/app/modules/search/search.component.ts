import { Component, OnInit } from '@angular/core';
import { BrowseApiService } from 'src/app/core/http/browse/browse-api.service';
import { CategoriesModel } from 'src/app/shared/models/categories.model';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  offset: number = 0;
  categories: CategoriesModel['categories']['items'] = [];

  constructor(
    private _browseApi: BrowseApiService
  ) { }

  ngOnInit(): void {
    this.getBrowseCategories();
  }

  getBrowseCategories(): void {
    this._browseApi.getBrowseCategories(this.offset).subscribe(
      (data: CategoriesModel) => {
        if (!!data.categories.next) {
          this.offset += data.categories.limit;
          this.getBrowseCategories();
        }
        this.categories = [...this.categories, ...data.categories.items];
      }
    );
  }
}

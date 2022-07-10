import { Component, OnInit } from '@angular/core';
import { BrowseApiService } from 'src/app/core/http/browse/browse-api.service';
import { SearchApiService } from 'src/app/core/http/search/search-api.service';
import { CategoriesModel } from 'src/app/shared/models/categories.model';
import { SearchModel } from 'src/app/shared/models/search.model';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  offset: number = 0;
  categories: CategoriesModel['categories']['items'] = [];
  dataSearch!: SearchModel;

  constructor(
    private _browseApiService: BrowseApiService,
    private _searchApiService: SearchApiService
  ) { }

  ngOnInit(): void {
    this.getBrowseCategories();
  }

  getBrowseCategories(): void {
    this._browseApiService.getBrowseCategories(this.offset).subscribe(
      (response: CategoriesModel) => {
        if (!!response.categories.next) {
          this.offset += response.categories.limit;
          this.getBrowseCategories();
        }
        this.categories = [...this.categories, ...response.categories.items];
      }
    );
  }

  onSearch(query: string): void {
    if (query) {
      this._searchApiService.getSearch(query).subscribe(
        (response: SearchModel) => {
          this.dataSearch = response;
        }
      );
    }
  }

}

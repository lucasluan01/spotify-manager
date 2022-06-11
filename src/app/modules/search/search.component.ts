import { Component, OnInit } from '@angular/core';
import { BrowseApiService } from 'src/app/core/http/browse/browse-api.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  genres: any[] = [];
  offset: number = 0;
  categories: any[] = [];

  constructor(
    private _browseApi: BrowseApiService
  ) { }

  ngOnInit(): void {
    this.getAvailableGenreSeeds();
    this.getBrowseCategories();
  }

  getAvailableGenreSeeds(): void {
    this._browseApi.getAvailableGenreSeeds().subscribe(
      (data: any) => {
        this.genres = data.genres;
      }
    );
  }

  getBrowseCategories(): void {
    this._browseApi.getBrowseCategories(this.offset).subscribe(
      (data: any) => {
        if (!!data.categories.next) {
          this.offset += data.categories.limit;
          this.getBrowseCategories();
        }
        this.categories = [...this.categories, ...data.categories.items];
      }
    );
  }
}

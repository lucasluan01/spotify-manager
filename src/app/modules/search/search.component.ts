import { Component, OnInit } from '@angular/core';
import { BrowseApiService } from 'src/app/core/http/browse/browse-api.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  genres: any[] = [];

  constructor(
    private _browseApi: BrowseApiService
  ) { }

  ngOnInit(): void {
    this.getAvailableGenreSeeds();
  }

  getAvailableGenreSeeds(): void {
    this._browseApi.getAvailableGenreSeeds().subscribe(
      (data: any) => {
        this.genres = data.genres;
        console.log(this.genres);
      }
    );
  }

}

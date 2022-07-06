import { Component, OnInit } from '@angular/core';


import { SearchApiService } from 'src/app/core/http/search/search-api.service';
import { SearchModel } from 'src/app/shared/models/search.model';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {

  dataSearch!: SearchModel;

  constructor(
    private _searchApiService: SearchApiService
  ) { }

  ngOnInit(): void {

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

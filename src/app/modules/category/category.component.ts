import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { BrowseApiService } from 'src/app/core/http/browse/browse-api.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {

  idCategory: string = '';
  offset: number = 0;
  playlists: any[] = [];

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _browseApiService: BrowseApiService
  ) { }

  ngOnInit(): void {
    this._activatedRoute.params.subscribe(
      (params: any) => {
        this.idCategory = params['id'];
      }
    );

    this.getCategoryPlaylists();
  }

  getCategoryPlaylists(offset: number = 0) {
    this._browseApiService.getCategoryPlaylists(this.idCategory, offset).subscribe(
      (response: any) => {
        if (!!response.playlists.next) {
          this.offset += response.playlists.limit;
          this.getCategoryPlaylists();
        }
        this.playlists = [...this.playlists, ...response.playlists.items];
      }
    );
  }
}

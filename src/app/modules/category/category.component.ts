import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { BrowseApiService } from 'src/app/core/http/browse/browse-api.service';
import { PlaylistListModel } from 'src/app/shared/models/playlist-list.model';
import { CategoryPlaylistModel } from 'src/app/shared/models/category-playlist.model';
import { ModuleService } from '../module.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {

  idCategory: string = '';
  offset: number = 0;
  playlists: CategoryPlaylistModel['playlists']['items'] = [];

  message: string = '';
  // subscription!: Subscription;

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _browseApiService: BrowseApiService,
    private _moduleService: ModuleService
  ) { }

  ngOnInit(): void {
    this._activatedRoute.params.subscribe(
      (params: any) => {
        this.idCategory = params['id'];
      }
    );

    this.getCategoryPlaylists();
    // this.subscription = 
    this._moduleService.currentMessage.subscribe(message => this.message = message)
  }

  getCategoryPlaylists() {
    this._browseApiService.getCategoryPlaylists(this.idCategory, this.offset).subscribe(
      (response: CategoryPlaylistModel) => {
        if (!!response.playlists.next) {
          this.offset += response.playlists.limit;
          this.getCategoryPlaylists();
        }
        this.playlists = [...this.playlists, ...response.playlists.items];
      }
    );
  }

  // ngOnDestroy() {
  //   this.subscription.unsubscribe();
  // }

}

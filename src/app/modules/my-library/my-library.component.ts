import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { LibraryApiService } from 'src/app/core/http/library/library-api.service';
import { PlaylistsApiService } from 'src/app/core/http/playlists/playlists-api.service';
import { PlaylistItemsModel } from 'src/app/shared/models/playlist-items.model';

import { PlaylistListModel } from '../../shared/models/playlist-list.model';

@Component({
  selector: 'app-my-library',
  templateUrl: './my-library.component.html',
  styleUrls: ['./my-library.component.scss']
})
export class MyLibraryComponent implements OnInit {

  playlists: PlaylistListModel["items"] = [];
  numberSavedTracks: number = 0;
  offset: number = 0;

  constructor(
    private _playlistsApiService: PlaylistsApiService,
    private _libraryApiService: LibraryApiService,
    private _router: Router
  ) { }

  ngOnInit(): void {
    this.getCurrentUserPlaylists();
    this.getUserSavedTracks();
  }

  getCurrentUserPlaylists() {
    this._playlistsApiService.getCurrentUserPlaylists(this.offset).subscribe(
      (response: PlaylistListModel) => {
        if (!!response.next) {
          this.offset += response.limit;
          this.getCurrentUserPlaylists();
        }
        this.playlists = [...this.playlists, ...response.items];
      }
    );
  }

  getUserSavedTracks() {
    this._libraryApiService.getUserSavedTracks(0, 1).subscribe(
      (response: PlaylistItemsModel) => {
        this.numberSavedTracks = response.total;
      }
    );
  }
  
  onUserSavedTracks() {
    this._router.navigate(['/panel/playlist', 'saved-tracks']);
  }
}

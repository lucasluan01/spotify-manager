import { Component, OnInit } from '@angular/core';
import { LibraryApiService } from 'src/app/core/http/library/library-api.service';

import { PlaylistsApiService } from 'src/app/core/http/playlists-api/playlists-api.service';


@Component({
  selector: 'app-my-library',
  templateUrl: './my-library.component.html',
  styleUrls: ['./my-library.component.scss']
})
export class MyLibraryComponent implements OnInit {

  playlists: any[] = [];
  numberSavedTracks: number = 0;
  offset: number = 0;

  constructor(
    private _playlistsApiService: PlaylistsApiService,
    private _libraryApiService: LibraryApiService
  ) { }

  ngOnInit(): void {
    this.getCurrentUserPlaylists();
    this.getUserSavedTracks();
  }

  getCurrentUserPlaylists() {
    this._playlistsApiService.getCurrentUserPlaylists(this.offset).subscribe(
      (response: any) => {
        if (!!response.next) {
          this.offset += response.limit;
          this.getCurrentUserPlaylists();
        }
        this.playlists = [...this.playlists, ...response.items];
      }
    );
  }

  getUserSavedTracks() {
    this._libraryApiService.getUserSavedTracks().subscribe(
      (response: any) => {
        this.numberSavedTracks = response.total;
      }
    );
  }
}

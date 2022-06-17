import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LibraryApiService } from 'src/app/core/http/library/library-api.service';

import { PlaylistsApiService } from 'src/app/core/http/playlists/playlists-api.service';

import { PlaylistModel } from './../../shared/models/playlist.model';
import { PlaylistItemsModel } from 'src/app/shared/models/playlist-items.model';
import { delay, tap } from 'rxjs';

@Component({
  selector: 'app-playlist',
  templateUrl: './playlist.component.html',
  styleUrls: ['./playlist.component.scss']
})
export class PlaylistComponent implements OnInit {

  idPlaylist: string = '';
  playlist!: PlaylistModel;
  tracks: PlaylistItemsModel['items'] = [];
  offset: number = 0;
  isUserSavedTrack: boolean = false;

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _playlistApiService: PlaylistsApiService,
    private _libraryApiService: LibraryApiService
  ) { }

  ngOnInit(): void {
    this.getIdPlaylist();

    this.isUserSavedTrack = this.idPlaylist === "saved-tracks" ? true : false;

    if (this.isUserSavedTrack) {
      this.getUserSavedTracks();
    }
    else {
      this.getPlaylist();
      this.getPlaylistItems();
    }
  }

  getIdPlaylist() {
    this._activatedRoute.params.subscribe(params => {
      this.idPlaylist = params['id'];
    });
  }

  getPlaylist() {
    this._playlistApiService.getPlaylist(this.idPlaylist).subscribe(
      (playlist: PlaylistModel) => {
        this.playlist = playlist;
      }
    );
  }

  getPlaylistItems() {
    this._playlistApiService.getPlaylistItems(this.idPlaylist, this.offset).subscribe(
      (response: any) => {
        if (!!response.next) {
          this.offset += response.limit;
          this.getPlaylistItems();
        }
        this.tracks = [...this.tracks, ...response.items];
      }
    );

    // this._playlistApiService.getPlaylistItems(this.idPlaylist, this.offset).pipe(
    //   delay(1000),
    //   tap((response: any) => {
    //     response.items.map(
    //       (item: any) => {
    //         this._libraryApiService.getCheckIfTrackIsSaved(item.track.id).subscribe(
    //           (library: any) => {
    //             item.isSaved = library[0];
    //           }
    //         );
    //       }
    //     );
    //   }
    //   )).subscribe(
    //     (response: any) => {
    //       if (!!response.next) {
    //         this.offset += response.limit;
    //         this.getPlaylistItems();
    //       }
    //       this.tracks = [...this.tracks, ...response.items];
    //     }
    //   );
  }

  getUserSavedTracks() {
    this._libraryApiService.getUserSavedTracks(this.offset).subscribe(
      (response: any) => {
        if (!!response.next) {
          this.offset += response.limit;
          this.getUserSavedTracks();
        }
        this.tracks = [...this.tracks, ...response.items];
      }
    );
  }

}

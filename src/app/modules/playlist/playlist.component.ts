import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { PlaylistsApiService } from 'src/app/core/http/playlists/playlists-api.service';

@Component({
  selector: 'app-playlist',
  templateUrl: './playlist.component.html',
  styleUrls: ['./playlist.component.scss']
})
export class PlaylistComponent implements OnInit {

  idPlaylist: string = '';
  playlist: any;
  tracks: any[] = [];
  offset: number = 0;

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _playlistApiService: PlaylistsApiService
  ) { }

  ngOnInit(): void {
    this.getIdPlaylist();
    this.getPlaylist();
    this.getPlaylistItems();
  }

  getIdPlaylist() {
    this._activatedRoute.params.subscribe(params => {
      this.idPlaylist = params['id'];
      console.log(this.idPlaylist);
    });
  }

  getPlaylist() {
    this._playlistApiService.getPlaylist(this.idPlaylist).subscribe(
      (playlist: any) => {
        this.playlist = playlist;
      }
    );
  }

  getPlaylistItems() {
    this._playlistApiService.getPlaylistItems(this.idPlaylist, this.offset).subscribe(
      (tracks: any) => {
        if (!!tracks.next) {
          this.offset += tracks.limit;
          this.getPlaylistItems();
        }
        this.tracks = [...this.tracks, ...tracks.items];
        console.log(this.tracks);
        
      }
    );
  }

}

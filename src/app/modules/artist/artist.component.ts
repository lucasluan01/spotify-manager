import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { ArtistApiService } from 'src/app/core/http/artist/artist-api.service';
import { ArtistModel } from 'src/app/shared/models/artist.model';
import { TrackModel } from 'src/app/shared/models/track.model';
import { AlbumListModel } from 'src/app/shared/models/album-list.model';
import { SearchApiService } from 'src/app/core/http/search/search-api.service';
import { SearchModel } from 'src/app/shared/models/search.model';
import { PlaylistListModel } from 'src/app/shared/models/playlist-list.model';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.scss']
})
export class ArtistComponent implements OnInit {

  id: string = '';
  artist!: ArtistModel;
  tracks: TrackModel[] = [];
  albums!: AlbumListModel['items'];
  playlists!: PlaylistListModel['items'];
  artistsRelated: ArtistModel[] = [];

  constructor(
    private _artistApiService: ArtistApiService,
    private _activatedRoute: ActivatedRoute,
    private _location: Location,
    private _searchApiService: SearchApiService
  ) { }

  ngOnInit(): void {
    this._activatedRoute.params.subscribe(
      (params: any) => {
        this.id = params.id;
        this._artistApiService.getArtist(this.id).subscribe(
          (artist: ArtistModel) => {
            this.artist = artist;
            this.getPlaylists();
            this.getArtistTopTracks();
            this.getArtistsRelated();
            this.getArtistAlbums();
          }
        );
      });
  }

  getArtist(): void {
    this._artistApiService.getArtist(this.id).subscribe(
      (response: ArtistModel) => {
        this.artist = response;
      }
    );
  }

  getArtistTopTracks(): void {
    this._artistApiService.getArtistsTopTracks(this.id).subscribe(
      (response: any) => {
        this.tracks = response.tracks;
      }
    );
  }

  getArtistsRelated(): void {
    this._artistApiService.getArtistsRelated(this.id).subscribe(
      (response: any) => {
        this.artistsRelated = response.artists;
      }
    );
  }

  getArtistAlbums(): void {
    this._artistApiService.getArtistAlbums(this.id).subscribe(
      (response: AlbumListModel) => {
        this.albums = response.items;
      }
    );
  }

  getPlaylists(): void {
    this._searchApiService.getSearch(this.artist.name).subscribe(
      (response: SearchModel) => {
        this.playlists = response.playlists.items;
      }
    );
  }

  onBack() {
    this._location.back();
  }

}

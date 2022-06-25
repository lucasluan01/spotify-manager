import { AlbumItemsModel } from './../../shared/models/album-items.model';
import { AlbumApiService } from './../../core/http/album/album-api.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { TrackModel } from 'src/app/shared/models/track.model';
import { AlbumModel } from 'src/app/shared/models/album.model';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.scss']
})
export class AlbumComponent implements OnInit {

  id: string = '';
  offset: number = 0;
  tracks: TrackModel[] = [];
  album!: AlbumModel;

  constructor(
    private _location: Location,
    private _activatedRoute: ActivatedRoute,
    private _albumApiService: AlbumApiService
  ) { }

  ngOnInit(): void {
    this._activatedRoute.params.subscribe(
      (response: any) => {
        this.id = response.id;
        this.getAlbum();
      });

    this.getAlbumTracks();
  }

  getAlbum() {
    this._albumApiService.getAlbum(this.id).subscribe(
      (response: AlbumModel) => {
        this.album = response;
      }
    );
  }

  getAlbumTracks() {
    this._albumApiService.getAlbumTracks(this.id, this.offset).subscribe(
      (response: AlbumItemsModel) => {
        this.tracks = response.items;
      });
  }

  onBack() {
    this._location.back();
  }

}

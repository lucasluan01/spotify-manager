import { MatDialog } from '@angular/material/dialog';
import { Component, Input, OnInit } from '@angular/core';
import { DialogComponent } from './dialog/dialog.component';
import { ModuleService } from '../module.service';
import { PlaylistItemsModel } from 'src/app/shared/models/playlist-items.model';
import { AlbumApiService } from 'src/app/core/http/album/album-api.service';
import { PlaylistsApiService } from './../../core/http/playlists/playlists-api.service';

@Component({
  selector: 'app-create-playlist',
  templateUrl: './create-playlist.component.html',
  styleUrls: ['./create-playlist.component.scss']
})
export class CreatePlaylistComponent implements OnInit {

  @Input() title: string = '';
  @Input() collection!: any;
  @Input() collectionType: string = ''

  arraySelectedCollection: any = [];
  offset: number = 0;
  tracks: PlaylistItemsModel['items'] = [];
  releaseDates: number[] = [];

  constructor(
    public dialog: MatDialog,
    private _moduleService: ModuleService,
    private _playlistsApiService: PlaylistsApiService,
    private _albumApiService: AlbumApiService
  ) { }

  ngOnInit(): void {
    this._moduleService.selectedCollection.subscribe(
      (selectedCollection: any) => {
        this.releaseDates = [];

        if (selectedCollection.isAdd) {
          if (selectedCollection !== null && !this.arraySelectedCollection.some((item: any) => item.id === selectedCollection.id)) {
            this.arraySelectedCollection.push(selectedCollection);
          }
        }
        else {
          this.arraySelectedCollection = this.arraySelectedCollection.filter((item: any) => item.id !== selectedCollection.id);
        }
        this.getPlaylistOrAlbum();
      }
    );
  }

  getPlaylistOrAlbum(): void {
    this.tracks = [];
    this.offset = 0;

    this.arraySelectedCollection.forEach((element: any) => {
      if (element.collectionType === 'playlist')
        this.getPlaylistItems(element.id);
      else
        this.getAlbumItems(element.id);
    });
  }

  getPlaylistItems(idPlaylist: string): void {
    this._playlistsApiService.getPlaylistItems(idPlaylist, this.offset).subscribe(
      (response: any) => {
        if (!!response.next) {
          this.offset += response.limit;
          this.getPlaylistItems(idPlaylist);
        }

        response.items.map(
          (item: any) => {
            item.album = item.track.album;
            item.name = item.track.name;
            item.artists = item.track.artists;
            item.duration_ms = item.track.duration_ms;
            item.preview_url = item.track.preview_url;
            delete item['track'];
          }
        );
        this.tracks = [...this.tracks, ...response.items];
        this.getTrackReleaseDates();
      }
    );
  }

  getAlbumItems(idAlbum: string): void {
    this._albumApiService.getAlbum(idAlbum).subscribe(
      (response: any) => {
        response.tracks.items.map(
          (item: any) => {
            item.album = {
              release_date: response.release_date,
            };
          });
        this.tracks = response.tracks.items;
        this.getTrackReleaseDates();
      }
    );
  }

  getTrackReleaseDates(): void {

    this.tracks.forEach((element: any) => {
      this.releaseDates.push(Number(element.album.release_date.split('-')[0]));
    });   
    this.releaseDates = [... new Set(this.releaseDates)].sort();
  }

  onOpenDialog(): void {
    this.dialog.open(DialogComponent, {
      width: '100%',
      height: '80%',
    });
  }

}

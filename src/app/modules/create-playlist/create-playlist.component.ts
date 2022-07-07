import { PlaylistsApiService } from './../../core/http/playlists/playlists-api.service';
import { MatDialog } from '@angular/material/dialog';
import { Component, Input, OnInit } from '@angular/core';
import { DialogComponent } from './dialog/dialog.component';
import { ModuleService } from '../module.service';
import { PlaylistItemsModel } from 'src/app/shared/models/playlist-items.model';

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
    this.arraySelectedCollection.forEach((element: any) => {
      if (element.collectionType === 'playlist') {
        this.getPlaylistItems(element.id);
      }
      else {
      }
    });
  }

  getPlaylistItems(idPlaylist: string): void {
    this._playlistsApiService.getPlaylistItems(idPlaylist, this.offset).subscribe(
      (response: any) => {
        if (!!response.next) {
          this.offset += response.limit;
          this.getPlaylistItems(idPlaylist);
        }
        this.tracks = [...this.tracks, ...response.items];
        this.getTrackReleaseDates();
      }
    );
  }

  getTrackReleaseDates(): void {

    this.tracks.forEach((element: any) => {
      this.releaseDates.push(Number(element.track.album.release_date.split('-')[0]));
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

import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { Component, Input, OnInit } from '@angular/core';
import { DialogComponent } from './dialog/dialog.component';
import { ModuleService } from '../module.service';
import { PlaylistItemsModel } from 'src/app/shared/models/playlist-items.model';
import { AlbumApiService } from 'src/app/core/http/album/album-api.service';
import { PlaylistsApiService } from './../../core/http/playlists/playlists-api.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-playlist',
  templateUrl: './create-playlist.component.html',
  styleUrls: ['./create-playlist.component.scss']
})
export class CreatePlaylistComponent implements OnInit {

  @Input() title: string = '';
  @Input() collection!: any;
  @Input() collectionType: string = ''

  collections: any = [];
  tracks: PlaylistItemsModel['items'] = [];
  releaseDates: number[] = [];
  yearsReleasesSelected: number[] = [];
  newPlaylist: PlaylistItemsModel['items'] = [];
  formGroup!: FormGroup;

  constructor(
    public dialog: MatDialog,
    private _moduleService: ModuleService,
    private _playlistsApiService: PlaylistsApiService,
    private _albumApiService: AlbumApiService,
    private _formBuilder: FormBuilder,
    private _snackBar: MatSnackBar
  ) { }

  ngOnInit() {
    this.initForm();
    this.addOrRemoveCollection();
  }

  initForm(): void {
    this.formGroup = this._formBuilder.group({
      playlistName: ['', [Validators.required, Validators.minLength(3)]],
    });
  }

  get playlistName() {
    return this.formGroup.get('playlistName');
  }

  addOrRemoveCollection(): void {
    this._moduleService.selectedCollection.subscribe(
      (selectedCollection: any) => {
        this.releaseDates = [];

        if (selectedCollection !== null && selectedCollection.isAdd && !this.collections.some((item: any) => item.id === selectedCollection.id))
          this.collections.push(selectedCollection);
        else {
          this.collections = this.collections.filter((item: any) => item.id !== selectedCollection.id);
          this.releaseDates = [];
        }
        this.getPlaylistOrAlbum();
      }
    );
  }

  getPlaylistOrAlbum(): void {
    this.tracks = [];

    this.collections.forEach((element: any) => {
      if (element.collectionType === 'playlist') {
        this.getPlaylistItems(element.id, 0);
      }
      else {
        this.getAlbumItems(element.id);
      }
    });
  }

  getPlaylistItems(idPlaylist: string, offset: number): void {
    this._playlistsApiService.getPlaylistItems(idPlaylist, offset).subscribe(
      (response: PlaylistItemsModel) => {
        if (!!response.next) {
          offset += response.limit;
          this.getPlaylistItems(idPlaylist, offset);
        }

        response.items.map(
          (item: any) => {
            item.album = item.track.album;
            item.name = item.track.name;
            item.artists = item.track.artists;
            item.duration_ms = item.track.duration_ms;
            item.preview_url = item.track.preview_url;
            item.uri = item.track.uri;
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

  setNewPlaylist(): void {
    if (this.yearsReleasesSelected.length > 0) {
      this.newPlaylist = this.tracks.filter(
        (element: any) =>
          this.yearsReleasesSelected.includes(Number(element.album.release_date.split('-')[0]))
      );
    }
    else
      this.newPlaylist = this.tracks;
  }

  createPlaylist(): void {
    let usarID = sessionStorage.getItem('userID') || '';

    let body = {
      name: this.playlistName?.value,
      description: "Criada a partir do Gerenciador Spotify"
    }

    this._playlistsApiService.postCreatePlaylist(usarID, body).subscribe(
      (response: any) => {
        if (response.id) {
          let urisTracks = this.newPlaylist.map((item: any) => item.uri)
          let numberRequests = Math.ceil(urisTracks.length / 100);
          let requestSize = urisTracks.length / numberRequests;
          this.postAddItemsPlaylist(response.id, urisTracks, requestSize);
        }
      }
    );
  }

  postAddItemsPlaylist(idPlaylist: string, urisTracks: string[], requestSize: number): void {
    if (urisTracks.length > 0) {
      let body = {
        uris: urisTracks.splice(-requestSize)
      }
      this._playlistsApiService.postAddItemsPlaylist(idPlaylist, body).subscribe();
      this.postAddItemsPlaylist(idPlaylist, urisTracks, requestSize);
    }
  }

  onOpenDialog(): void {
    this.dialog.open(DialogComponent, {
      width: '100%',
      height: '80%',
    });
  }

  onYearSelected(year: number, isSelected: boolean): void {
    if (isSelected)
      this.yearsReleasesSelected.push(year);
    else
      this.yearsReleasesSelected = this.yearsReleasesSelected.filter((item: number) => item !== year);
  }

  onNewPlaylist(): void {
    let errorMessage;

    if (this.playlistName?.errors?.['required'])
      errorMessage = 'Nome da playlist ?? obrigat??rio';
    else if (this.playlistName?.errors?.['minlength'])
      errorMessage = 'Nome da playlist deve ter no m??nimo 3 caracteres';

    if (errorMessage) {
      this._snackBar.open(errorMessage, '', {
        duration: 4000,
        panelClass: ['error-snackbar']
      });
    }
    else {
      this.setNewPlaylist();
      this.createPlaylist();
      this.formGroup.reset();
    }
  }

}

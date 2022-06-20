import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

import { PlaylistListModel } from 'src/app/shared/models/playlist-list.model';
import { PlaylistModel } from 'src/app/shared/models/playlist.model';
import { PlaylistItemsModel } from 'src/app/shared/models/playlist-items.model';

@Injectable({
  providedIn: 'root'
})
export class PlaylistsApiService {

  constructor(
    private _http: HttpClient
  ) { }

  getCurrentUserPlaylists(offset: number = 0): Observable<PlaylistListModel> {
    return this._http.get<PlaylistListModel>(`${environment.apiUrl}/${environment.currentUser}/${environment.playlists}?limit=50&offset=${offset}`);
  }

  getPlaylistItems(id: string, offset: number = 0): Observable<PlaylistItemsModel> {
    return this._http.get<PlaylistItemsModel>(`${environment.apiUrl}/${environment.playlists}/${id}/${environment.tracks}?limit=100&offset=${offset}`);
  }

  getPlaylist(id: string): Observable<PlaylistModel> {
    return this._http.get<PlaylistModel>(`${environment.apiUrl}/${environment.playlists}/${id}`);
  }

  
}

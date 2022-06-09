import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PlaylistsApiService {

  httpOptions = {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    'Authorization': `Bearer ${localStorage.getItem('access_token')}`
  }

  constructor(
    private _http: HttpClient
  ) { }

  getCurrentUserPlaylists(offset: number = 0) {
    return this._http.get(`${environment.apiUrl}/${environment.currentUser}/${environment.playlists}?limit=50&offset=${offset}`, { headers: this.httpOptions });
  }

  getPlaylist(id: string) {
    return this._http.get(`${environment.apiUrl}/${environment.playlists}/${id}`, { headers: this.httpOptions });
  }

  getPlaylistItems(id: string, offset: number = 0) {
    return this._http.get(`${environment.apiUrl}/${environment.playlists}/${id}/${environment.tracks}?limit=100&offset=${offset}`, { headers: this.httpOptions });
  }
  
}

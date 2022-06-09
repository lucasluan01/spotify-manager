import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LibraryApiService {

  httpOptions = {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    'Authorization': `Bearer ${localStorage.getItem('access_token')}`
  }

  constructor(
    private _http: HttpClient
  ) { }

  getUserSavedTracks(offset: number = 0) {
    return this._http.get(`${environment.apiUrl}/${environment.currentUser}/${environment.tracks}?limit=1&offset=0`, { headers: this.httpOptions });
  }

}
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { PlaylistItemsModel } from 'src/app/shared/models/playlist-items.model';

@Injectable({
  providedIn: 'root'
})
export class LibraryApiService {

  constructor(
    private _http: HttpClient
  ) { }

  getUserSavedTracks(offset: number = 0, limit: number = 50): Observable<PlaylistItemsModel> {
    return this._http.get<PlaylistItemsModel>(`${environment.apiUrl}/${environment.currentUser}/${environment.tracks}?offset=${offset}&limit=${limit}`);
  }

  getCheckIfTrackIsSaved(trackId: string): Observable<any> {
    return this._http.get<any>(`${environment.apiUrl}/${environment.currentUser}/${environment.tracks}/contains?ids=${trackId}`);
  }

}

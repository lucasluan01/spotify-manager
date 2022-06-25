import { AlbumModel } from './../../../shared/models/album.model';
import { AlbumItemsModel } from './../../../shared/models/album-items.model';
import { environment } from './../../../../environments/environment';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AlbumApiService {

  constructor(
    private _http: HttpClient
  ) { }
  
  getAlbum(id: string): Observable<AlbumModel> {
    return this._http.get<AlbumModel>(`${environment.apiUrl}/${environment.albums}/${id}`);
  }
  
  getAlbumTracks(id: string, offset: number): Observable<AlbumItemsModel> {
    return this._http.get<AlbumItemsModel>(`${environment.apiUrl}/${environment.albums}/${id}/${environment.tracks}?limit=50&offset=${offset}`);
  }
}

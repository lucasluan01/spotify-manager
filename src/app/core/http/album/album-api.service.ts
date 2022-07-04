import { AlbumModel } from './../../../shared/models/album.model';
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
}

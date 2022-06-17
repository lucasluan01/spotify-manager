import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


import { ArtistModel } from 'src/app/shared/models/artist.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ArtistApiService {

  httpOptions = {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    'Authorization': `Bearer ${localStorage.getItem('access_token')}`
  }

  constructor(
    private _http: HttpClient
  ) { }

  getArtistAlbums(id: string): Observable<any> {
    return this._http.get<any>(`${environment.apiUrl}/${environment.artist}/${id}/albums`, { headers: this.httpOptions });
  }

  getArtistsRelated(id: string): Observable<ArtistModel[]> {
    return this._http.get<any>(`${environment.apiUrl}/${environment.artist}/${id}/related-artists`, { headers: this.httpOptions });
  }

  getArtistsTopTracks(id: string): Observable<any> {
    return this._http.get(`${environment.apiUrl}/artists/${id}/top-tracks?market=${environment.country}`, { headers: this.httpOptions });
  }

  getArtist(id: string): Observable<ArtistModel> {
    return this._http.get<any>(`${environment.apiUrl}/${environment.artist}/${id}`, { headers: this.httpOptions });
  }

}

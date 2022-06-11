import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BrowseApiService {

  httpOptions = {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    'Authorization': `Bearer ${localStorage.getItem('access_token')}`
  }

  constructor(
    private _http: HttpClient
  ) { }

  getAvailableGenreSeeds() {
    return this._http.get(`${environment.apiUrl}/${environment.recommendations}/available-genre-seeds`, { headers: this.httpOptions });
  }

  getBrowseCategories(offset: number = 0) {
    return this._http.get(`${environment.apiUrl}/${environment.browse}/categories?country=${environment.country}&locale=${environment.locale}&limit=50&offset=${offset}`, { headers: this.httpOptions });
  }

  getCategoryPlaylists(id: string, offset: number = 0) {
    return this._http.get(`${environment.apiUrl}/${environment.browse}/${environment.categories}/${id}/playlists?country=${environment.country}&limit=50&offset=${offset}`, { headers: this.httpOptions });
  }
}

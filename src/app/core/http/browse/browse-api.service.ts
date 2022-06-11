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
}

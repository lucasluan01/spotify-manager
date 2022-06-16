import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

import { SearchModel } from 'src/app/shared/models/search.model';

@Injectable({
  providedIn: 'root'
})
export class SearchApiService {

  httpOptions = {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    'Authorization': `Bearer ${localStorage.getItem('access_token')}`
  }

  constructor(
    private _http: HttpClient
  ) { }

  getSearch(query: string): Observable<SearchModel> {
    return this._http.get<SearchModel>(`${environment.apiUrl}/${environment.search}?q=${query}&type=album,artist,playlist,track&limit=10&offset=0`, { headers: this.httpOptions });
  }

}

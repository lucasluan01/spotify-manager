import { environment } from './../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RecentlyPlayedItemsModel } from 'src/app/shared/models/recently-played-items.model';

@Injectable({
  providedIn: 'root'
})
export class PlayerApiService {

  constructor(
    private __http: HttpClient
  ) { }

  getRecentlyPlayedTracks(): Observable<RecentlyPlayedItemsModel> {
    return this.__http.get<RecentlyPlayedItemsModel>(`${environment.apiUrl}/${environment.currentUser}/${environment.player}/recently-played?limit=50`);
  }
}

import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserProfileModel } from 'src/app/shared/models/user-profile.model';

@Injectable({
  providedIn: 'root'
})
export class UserProfileApiService {

  constructor(
    private _http: HttpClient
  ) { }

  getUserProfile(): Observable<UserProfileModel> {
    return this._http.get<UserProfileModel>(`${environment.apiUrl}/${environment.currentUser}`);
  }
}

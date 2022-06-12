import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserProfileApiService {

  httpOptions = {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    'Authorization': `Bearer ${localStorage.getItem('access_token')}`
  }
  
  constructor(
    private _http: HttpClient
  ) { }

  getUserProfile() {
    return this._http.get(`${environment.apiUrl}/${environment.currentUser}`, { headers: this.httpOptions });
  }
}

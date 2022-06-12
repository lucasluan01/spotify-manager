import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { authorizationSpotify } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class AuthenticationService {

  constructor(
    private _router: Router
  ) { }

  getLoginUrl(): string {
    const authEndPoint = `${authorizationSpotify.authEndPoint}?`;
    const clientId = `client_id=${authorizationSpotify.clientId}&`;
    const redirectUri = `redirect_uri=${authorizationSpotify.redirectUri}&`;
    const scopes = `scope=${authorizationSpotify.scopes.join('%20')}&`;
    const responseType = `response_type=token&show_dialog=true`;

    return authEndPoint + clientId + redirectUri + scopes + responseType;
  }

  getTokenUrlCallback(): string {
    const hash = window.location.hash;

    if (hash) {
      const params = hash.substring(1).split('&');
      return params[0].split('=')[1];
    }
    return '';
  }

  getAccessToken(): string {
    return localStorage.getItem('access_token') || '';
  }

  setAccessToken(token: string): void {
    localStorage.setItem('access_token', token);
  }

  logout(): void {
    localStorage.removeItem('access_token');
    this._router.navigate(['/']);
  }
  
}

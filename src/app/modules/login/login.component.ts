import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthenticationService } from 'src/app/core/authentication/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(
    private _authentication: AuthenticationService,
    private _router: Router
  ) { }

  ngOnInit(): void {
    this.verifyTokenUrlCallback();
  }

  onLogin(): void {
    if (this._authentication.getAccessToken()) {
      this._router.navigate(['/panel']);
      return;
    }
    window.location.href = this._authentication.getLoginUrl();
    return;
  }

  verifyTokenUrlCallback(): void {
    const token = this._authentication.getTokenUrlCallback();
    
    if (token) {
      this._authentication.setAccessToken(token);
      this._router.navigate(['/panel']);
    }
  }
}

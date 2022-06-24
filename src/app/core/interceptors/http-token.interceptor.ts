import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpErrorResponse } from '@angular/common/http';
import { catchError, Observable, retry, throwError } from 'rxjs';
import { AuthenticationService } from '../authentication/authentication.service';

@Injectable()
export class HttpTokenInterceptor implements HttpInterceptor {

  constructor(
    private _authenticationService: AuthenticationService
  ) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let requestToken = request.clone({
      setHeaders: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('access_token')}`
      }
    })

    return next.handle(requestToken).pipe(
      retry(2),
      catchError((error: HttpErrorResponse): Observable<HttpEvent<any>> => {

        if (error.status === 401) {
          this._authenticationService.logout();
        }
        return throwError(() => new Error('Erro na requisição/resposta'));
      }),
    );
  }
}

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';

import { appRoutes } from './app.routes';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { PanelModule } from './modules/panel/panel.module';
import { LoginModule } from './modules/login/login.module';
import { HttpTokenInterceptor } from './core/interceptors/http-token.interceptor';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RecentlyPlayedModule } from './modules/recently-played/recently-played.module';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBarModule } from '@angular/material/snack-bar';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MatIconModule,
    LoginModule,
    PanelModule,
    HttpClientModule,
    BrowserAnimationsModule,
    RecentlyPlayedModule,
    MatDialogModule,
    MatSnackBarModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpTokenInterceptor,
      multi: true
    },
    {
      provide: MatDialogRef,
      useValue: {}
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';

import { appRoutes } from './app.routes';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { PanelModule } from './modules/panel/panel.module';
import { LoginModule } from './modules/login/login.module';
import { HttpTokenInterceptor } from './core/interceptors/http-token.interceptor';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    LoginModule,
    PanelModule,
    HttpClientModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [
  {
    provide: HTTP_INTERCEPTORS,
    useClass: HttpTokenInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }

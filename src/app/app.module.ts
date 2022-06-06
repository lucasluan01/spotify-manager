import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { appRoutes } from './app.routes';
import { AppComponent } from './app.component';
import { NavigationModule } from './core/navigation/navigation.module';
import { HomeModule } from './modules/home/home.module';
import { SearchModule } from './modules/search/search.module';
import { MyLibraryComponent } from './modules/my-library/my-library.component';

@NgModule({
  declarations: [
    AppComponent,
    MyLibraryComponent,
  ],
  imports: [
    BrowserModule,
    NavigationModule,
    HomeModule,
    SearchModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

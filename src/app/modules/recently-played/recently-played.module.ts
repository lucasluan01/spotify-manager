import { SharedModule } from 'src/app/shared/shared.module';
import { RecentlyPlayedComponent } from './recently-played.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderBannerComponent } from './header-banner/header-banner.component';



@NgModule({
  declarations: [
    RecentlyPlayedComponent,
    HeaderBannerComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    RecentlyPlayedComponent
  ]
})
export class RecentlyPlayedModule { }

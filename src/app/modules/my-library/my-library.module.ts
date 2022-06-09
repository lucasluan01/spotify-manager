import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyLibraryComponent } from './my-library.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';


@NgModule({
  declarations: [
    MyLibraryComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    MyLibraryComponent
  ]
})
export class MyLibraryModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { NavigationComponent } from './navigation.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ItemNavigationComponent } from './item-navigation/item-navigation.component';

@NgModule({
  declarations: [
    NavigationComponent,
    ItemNavigationComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule
  ],
  exports: [
    NavigationComponent
  ]
})
export class NavigationModule { }

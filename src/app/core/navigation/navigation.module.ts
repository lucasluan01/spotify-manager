import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

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
    SharedModule
  ],
  exports: [
    NavigationComponent
  ]
})
export class NavigationModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemNavigationComponent } from './item-navigation/item-navigation.component';
import { MusicCardComponent } from './music-card/music-card.component';



@NgModule({
  declarations: [
    ItemNavigationComponent,
    MusicCardComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ItemNavigationComponent
  ]
})
export class ComponentsModule { }

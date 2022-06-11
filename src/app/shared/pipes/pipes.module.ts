import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PascalCaseHyphenPipe } from './pascal-case-hyphen/pascal-case-hyphen.pipe';



@NgModule({
  declarations: [
    PascalCaseHyphenPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    PascalCaseHyphenPipe
  ]
})
export class PipesModule { }

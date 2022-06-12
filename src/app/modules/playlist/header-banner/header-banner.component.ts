import { Component, Input, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-header-banner',
  templateUrl: './header-banner.component.html',
  styleUrls: ['./header-banner.component.scss']
})
export class HeaderBannerComponent implements OnInit {

  @Input() name: string = '';
  @Input() totalNumber: number = 0;
  @Input() image: string = '';
  @Input() owner: string = '';
  
  constructor(
    private _location: Location
  ) { }

  ngOnInit(): void {
  }

  onGoBackToLibrary() {
    this._location.back();
  }
}

import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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
    private _router: Router
  ) { }

  ngOnInit(): void {
  }

  onBackToLibrary() {
    this._router.navigate(['/panel/my-library']);
  }
}

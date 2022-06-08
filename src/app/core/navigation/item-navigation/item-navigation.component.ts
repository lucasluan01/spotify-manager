import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-item-navigation',
  templateUrl: './item-navigation.component.html',
  styleUrls: ['./item-navigation.component.scss']
})
export class ItemNavigationComponent implements OnInit {

  @Input() icon: string = '';
  @Input() name: string = '';
  @Input() link: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}

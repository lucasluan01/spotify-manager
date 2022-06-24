import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-card',
  templateUrl: './list-card.component.html',
  styleUrls: ['./list-card.component.scss']
})
export class ListCardComponent implements OnInit {

  @Input() title: string = '';
  @Input() collection!: any;
  @Input() collectionType: string = ''

  constructor() { }

  ngOnInit(): void {
    
  }
}

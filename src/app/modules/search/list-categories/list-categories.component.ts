import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-categories',
  templateUrl: './list-categories.component.html',
  styleUrls: ['./list-categories.component.scss']
})
export class ListCategoriesComponent implements OnInit {

  @Input() categories: any[] = [];
  @Input() title: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}

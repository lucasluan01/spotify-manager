import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-genres',
  templateUrl: './list-genres.component.html',
  styleUrls: ['./list-genres.component.scss']
})
export class ListGenresComponent implements OnInit {

  @Input() genres: any[] = [];
  @Input() title: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}

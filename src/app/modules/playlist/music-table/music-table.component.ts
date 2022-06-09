import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-music-table',
  templateUrl: './music-table.component.html',
  styleUrls: ['./music-table.component.scss']
})
export class MusicTableComponent implements OnInit {

  // @Input() image: string = '';
  // @Input() name: string = '';
  // @Input() album: string = '';
  // @Input() addedAt: string = '';
  // @Input() duration: number = 0;

  @Input() tracks: any[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}

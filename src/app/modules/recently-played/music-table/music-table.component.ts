import { Component, Input, OnInit } from '@angular/core';
import { ArtistModel } from 'src/app/shared/models/artist.model';

@Component({
  selector: 'app-music-table',
  templateUrl: './music-table.component.html',
  styleUrls: ['./music-table.component.scss']
})
export class MusicTableComponent implements OnInit {

  @Input() image: string = '';
  @Input() name: string = '';
  @Input() album: string = '';
  @Input() addedAt: string = '';
  @Input() duration: number = 0;

  @Input() tracks: any;

  constructor() { }

  ngOnInit(): void {
  }

  getAllArtists(artists: ArtistModel[]): any {
    return artists.map((item: any) => item = {id: item.id, name: item.name});
  }

}

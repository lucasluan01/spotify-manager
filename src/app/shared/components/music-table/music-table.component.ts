import { Component, Input, OnInit } from '@angular/core';


import { ModuleService } from 'src/app/modules/module.service';
import { TrackModel } from '../../models/track.model';

@Component({
  selector: 'app-music-table',
  templateUrl: './music-table.component.html',
  styleUrls: ['./music-table.component.scss']
})

export class MusicTableComponent implements OnInit {

  @Input() tracks: any;
  @Input() dateColumnName: string = '';

  searchResults: any = [];
  showTracks: any = [];

  constructor(
    private _moduleService: ModuleService,
  ) { }

  ngOnInit(): void {
  }

  ngOnChanges(): void {
    this.showTracks = this.tracks;
  }

  getAllArtists(track: any): any {
    let allArtists = track.artists.map((item: any) => item = { id: item.id, name: item.name });

    track['all_artists'] = allArtists.map((x: any) => x.name).join(', ');

    return allArtists;
  }

  onPlayTrack(track: TrackModel): void {
    this._moduleService.setPlayerTrack(track);
  }

  onSearch(query: string): void {
    if (query.length > 0) {
      this.showTracks = this.tracks.filter((item: any) => {
        return item.name.toLowerCase().includes(query.toLowerCase()) ||
          item.all_artists.toLowerCase().includes(query.toLowerCase()) ||
          item.album.name.toLowerCase().includes(query.toLowerCase())
      });
    } 
    else {
      this.showTracks = this.tracks;
    }
  }

}

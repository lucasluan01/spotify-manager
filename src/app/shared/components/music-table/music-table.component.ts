import { Component, Input, OnInit } from '@angular/core';
import { Sort } from '@angular/material/sort';


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
  originalOrderTracks: any = [];
  sortingType: number = 0;

  constructor(
    private _moduleService: ModuleService,
  ) { }

  ngOnInit(): void { }

  ngOnChanges(): void {
    this.showTracks = this.tracks;
    this.originalOrderTracks = this.tracks;
    
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
    let regex = new RegExp(query);
    
    if (query.length > 0) {
      this.showTracks = this.tracks.filter((item: any) => {
        return regex.test(item.name.toLowerCase()) || regex.test(item.all_artists.toLowerCase()) ||
          regex.test(item.album.name.toLowerCase());
      });
    }
    else {
      this.showTracks = this.tracks;
    }
  }

  sortData(sort: Sort) {
    const data = this.tracks.slice();
    if (!sort.active || sort.direction === '') {
      this.showTracks = data;
      return;
    }

    this.showTracks = data.sort((a: any, b: any) => {
      const isAsc = sort.direction === 'asc';

      a.date = a.played_at || a.added_at || a.album.release_date;
      b.date = b.played_at || b.added_at || b.album.release_date;

      switch (sort.active) {
        case 'song':
          return compare(a.name.toLowerCase(), b.name.toLowerCase(), isAsc);
        case 'album':
          return compare(a.album.name.toLowerCase(), b.album.name.toLowerCase(), isAsc);
        case 'date':
          return compare(a.date, b.date, isAsc);
        case 'time':
          return compare(a.duration_ms, b.duration_ms, isAsc);
        default:
          return 0;
      }
    });
  }
}

function compare(a: number | string, b: number | string, isAsc: boolean) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}

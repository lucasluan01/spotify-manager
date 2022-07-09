import { Component, Input, OnInit } from '@angular/core';


import { ModuleService } from 'src/app/modules/module.service';
import { ArtistModel } from '../../models/artist.model';
import { TrackModel } from '../../models/track.model';

@Component({
  selector: 'dev-table',
  templateUrl: './music-table.component.html',
  styleUrls: ['./music-table.component.scss']
})

export class MusicTableComponent implements OnInit {

  @Input() tracks: any;

  constructor(
    private _moduleService: ModuleService,
  ) { }

  ngOnInit(): void {
  }

  getAllArtists(artists: ArtistModel[]): any {
    return artists.map((item: any) => item = { id: item.id, name: item.name });
  }

  onPlayTrack(track: TrackModel): void {
    this._moduleService.setPlayerTrack(track);
  }

}

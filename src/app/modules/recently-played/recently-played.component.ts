import { Component, OnInit } from '@angular/core';
import { PlayerApiService } from 'src/app/core/http/player/player-api.service';
import { TrackModel } from 'src/app/shared/models/track.model';

@Component({
  selector: 'app-recently-played',
  templateUrl: './recently-played.component.html',
  styleUrls: ['./recently-played.component.scss']
})
export class RecentlyPlayedComponent implements OnInit {

  tracks: TrackModel[] = [];

  constructor(
    private __playerApi: PlayerApiService
  ) { }

  ngOnInit(): void {
    this.getRecentlyPlayedTracks();
  }

  getRecentlyPlayedTracks(): void {
    this.__playerApi.getRecentlyPlayedTracks().subscribe(
      (response: any) => {
        this.tracks = response.items;
    });
  }

}

import { Component, OnInit } from '@angular/core';
import { PlayerApiService } from 'src/app/core/http/player/player-api.service';
import { RecentlyPlayedItemsModel } from 'src/app/shared/models/recently-played-items.model';

@Component({
  selector: 'app-recently-played',
  templateUrl: './recently-played.component.html',
  styleUrls: ['./recently-played.component.scss']
})
export class RecentlyPlayedComponent implements OnInit {

  recentlyPlayed: RecentlyPlayedItemsModel['items'] = [];

  constructor(
    private __playerApi: PlayerApiService
  ) { }

  ngOnInit(): void {
    this.getRecentlyPlayedTracks();
  }

  getRecentlyPlayedTracks(): void {
    this.__playerApi.getRecentlyPlayedTracks().subscribe(
      (response: RecentlyPlayedItemsModel) => {
        response.items.map(
          (item: any) => {
            item.album = item.track.album;
            item.name = item.track.name;
            item.artists = item.track.artists;
            item.duration_ms = item.track.duration_ms;
            item.preview_url = item.track.preview_url;
            delete item['track']; 
          }
        );
        this.recentlyPlayed = response.items;
    });
  }

}

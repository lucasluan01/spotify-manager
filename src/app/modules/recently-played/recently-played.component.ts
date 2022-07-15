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
    private _playerApi: PlayerApiService
  ) { }

  ngOnInit(): void {
    this.getRecentlyPlayedTracks();
  }

  getRecentlyPlayedTracks(): void {
    this._playerApi.getRecentlyPlayedTracks().subscribe(
      (response: RecentlyPlayedItemsModel) => {

        response.items.map(
          (item: any) => {
            Object.keys(item.track).forEach(key => {
              item[key] = item.track[key];
            });
            delete item.track;
          }
        );
        this.recentlyPlayed = response.items;
    });
  }

}

import { PlaylistListModel } from 'src/app/shared/models/playlist-list.model';
import { Component, OnInit } from '@angular/core';
import { BrowseApiService } from 'src/app/core/http/browse/browse-api.service';
import { FeaturedPlaylistsModel } from 'src/app/shared/models/featured-playlists.model';
import { NewReleasesModel } from 'src/app/shared/models/new-releases.model';
import { AlbumListModel } from 'src/app/shared/models/album-list.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  featuredPlaylists!: PlaylistListModel['items'];
  newReleases!: AlbumListModel['items'];
  offset: number = 0;
  title: string = '';

  constructor(
    private _browseApiService: BrowseApiService
  ) { }

  ngOnInit(): void {
    this.getFeaturedPlaylists();
    this.getNewReleases();
  }

  getFeaturedPlaylists() {
    this._browseApiService.getFeaturedPlaylists().subscribe(
      (response: FeaturedPlaylistsModel) => {
        this.title = response.message;
        this.featuredPlaylists = response.playlists.items;
      }
    );
  }

  getNewReleases() {
    this._browseApiService.getNewReleases(this.offset).subscribe(
      (response: NewReleasesModel) => {
          this.newReleases = response.albums.items;
      }
    );
  }

}

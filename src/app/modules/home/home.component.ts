import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BrowseApiService } from 'src/app/core/http/browse/browse-api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  featuredPlaylists: any;
  newReleases: any[] = [];
  offset: number = 0;
  title: string = '';

  constructor(
    private _browseApiService: BrowseApiService,
    private _router: Router
  ) { }

  ngOnInit(): void {
    this.getFeaturedPlaylists();
    this.getNewReleases();
  }

  getFeaturedPlaylists() {
    this._browseApiService.getFeaturedPlaylists().subscribe(
      (response: any) => {
        this.title = response.message;
        this.featuredPlaylists = response.playlists;
      }
    );
  }

  getNewReleases() {
    this._browseApiService.getNewReleases(this.offset).subscribe(
      (response: any) => {
        this.newReleases = response.albums;
      }
    );
  }

}

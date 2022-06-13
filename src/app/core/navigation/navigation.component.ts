import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication/authentication.service';
import { UserProfileApiService } from '../http/user-profile/user-profile-api.service';

import { UserProfileModel } from 'src/app/shared/models/user-profile.model';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  menu = [
    {
      name: 'Início',
      icon: 'home',
      link: 'home'
    },
    {
      name: 'Buscar',
      icon: 'search',
      link: 'search'
    },
    {
      name: 'Minha Biblioteca',
      icon: 'library_music',
      link: 'my-library'
    },
    {
      name: 'Dashboard',
      icon: 'dashboard',
      link: 'dashboard'
    },
    {
      name: 'Criar Playlist',
      icon: 'playlist_add',
      link: 'new-playlist'
    }
  ]

  userProfile!: UserProfileModel;

  constructor(
    private _authService: AuthenticationService,
    private _userProfileApiService: UserProfileApiService
  ) { }

  ngOnInit(): void {
    this.getUserProfile();
  }

  getUserProfile(): void {
    this._userProfileApiService.getUserProfile().subscribe(
      (response: UserProfileModel) => {
        this.userProfile = response;
      }
    );
  }

  onLogout(): void {
    this._authService.logout();
  }

}

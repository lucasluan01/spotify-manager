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
      name: 'Tocadas Recentemente',
      icon: 'history',
      link: 'recently-played'
    },
    {
      name: 'Minha Biblioteca',
      icon: 'library_music',
      link: 'my-library'
    },
    {
      name: 'Criar Playlist',
      icon: 'playlist_add',
      link: 'create-playlist'
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
    this._userProfileApiService.getCurrentUserProfile().subscribe(
      (response: UserProfileModel) => {
        this.userProfile = response;
        sessionStorage.setItem('userID', this.userProfile.id);
      }
    );
  }

  onLogout(): void {
    this._authService.logout();
  }

}

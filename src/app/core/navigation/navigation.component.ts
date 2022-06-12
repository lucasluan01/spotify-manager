import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication/authentication.service';
import { UserProfileApiService } from '../http/user-profile/user-profile-api.service';

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
      name: 'Biblioteca',
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

  userProfile: any;

  constructor(
    private _authService: AuthenticationService,
    private _userProfileApiService: UserProfileApiService
  ) { }

  ngOnInit(): void {
    this.getUserProfile();
  }

  getUserProfile(): void {
    this._userProfileApiService.getUserProfile().subscribe(
      (response: any) => {
        this.userProfile = response;
        console.log(this.userProfile);
      }
    );
  }

  onLogout(): void {
    this._authService.logout();
  }

}

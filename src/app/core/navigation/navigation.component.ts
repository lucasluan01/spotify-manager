import { Component, OnInit } from '@angular/core';

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
      link: 'playlist'
    },
    {
      name: 'Criar Playlist',
      icon: 'playlist_add',
      link: 'playlist'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}

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
    },
    {
      name: 'Buscar',
      icon: 'search',
    },
    {
      name: 'Biblioteca',
      icon: 'library_music',
    },
    {
      name: 'Dashboard',
      icon: 'dashboard',
    },
    {
      name: 'Criar Playlist',
      icon: 'playlist_add',
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}

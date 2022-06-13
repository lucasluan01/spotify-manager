import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-music-card',
  templateUrl: './music-card.component.html',
  styleUrls: ['./music-card.component.scss']
})
export class MusicCardComponent implements OnInit {

  @Input() name: string = '';
  @Input() image: string | undefined = '';
  @Input() owner: string = '';
  @Input() id: string = '';

  constructor(
    private _router: Router
  ) { }

  ngOnInit(): void {
  }

  onPlaylist(id: string) {
    this._router.navigate(['/panel/playlist', id])
  }

}

import { Router } from '@angular/router';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() id: string = '';
  @Input() image: string | undefined = '';
  @Input() title: string = '';
  @Input() description: string = '';
  @Input() collectionType: string = '';

  constructor(
    private _router: Router,
  ) { }

  ngOnInit(): void {

  }

  onPlaylist(id: string) {
      this._router.navigate([`/panel/${this.collectionType}`, id]);
  }

}

import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-category-card',
  templateUrl: './category-card.component.html',
  styleUrls: ['./category-card.component.scss']
})
export class CategoryCardComponent implements OnInit {
  
  @Input() name: string = '';
  @Input() image: string = '';
  @Input() idCategory: string = '';
  
  constructor(
    private _router: Router
  ) { }

  ngOnInit(): void {
  }

  onPlaylists(id: string) {
    this._router.navigate(['/panel/category', id])
  }

}

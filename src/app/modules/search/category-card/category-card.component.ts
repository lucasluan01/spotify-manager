import { Subscription } from 'rxjs';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ModuleService } from '../../module.service';

@Component({
  selector: 'app-category-card',
  templateUrl: './category-card.component.html',
  styleUrls: ['./category-card.component.scss']
})
export class CategoryCardComponent implements OnInit {
  
  @Input() name: string = '';
  @Input() image: string = '';
  @Input() idCategory: string = '';

  message: string = '';
  subscription!: Subscription;
  
  constructor(
    private _router: Router
  ) { }

  ngOnInit(): void {
    
  }

  onPlaylists(id: string) {
    sessionStorage.setItem('categoryName', this.name);
    this._router.navigate(['/panel/category', id])
  }

}

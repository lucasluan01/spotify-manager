import { Component, Input, OnInit } from '@angular/core';
import { MatDialogRef, MatDialogState } from '@angular/material/dialog';
import { ModuleService } from '../../module.service';
import { DialogComponent } from '../dialog/dialog.component';

@Component({
  selector: 'app-preview-card',
  templateUrl: './preview-card.component.html',
  styleUrls: ['./preview-card.component.scss']
})
export class PreviewCardComponent implements OnInit {

  @Input() id: string = '';
  @Input() image: string | undefined = '';
  @Input() title: string = '';
  @Input() description: string = '';
  @Input() collectionType: string = '';
  @Input() isDelete: boolean = false;

  constructor(
    private _dialogRef: MatDialogRef<DialogComponent>,
    private _moduleService: ModuleService
  ) { }

  ngOnInit(): void {
  }

  onColletionSelected(): void {
    this._moduleService.changeSelectedCollection({
      isAdd: true,
      id: this.id,
      image: this.image,
      title: this.title,
      description: this.description,
      collectionType: this.collectionType
    });
    
    this.onCloseDialog();
  }

  onDeleteCollectionSelected(): void {
    this._moduleService.changeSelectedCollection({
      isAdd: false,
      id: this.id,
      image: this.image,
      title: this.title,
      description: this.description,
      collectionType: this.collectionType
    });
  }
  
  onCloseDialog(): void {
    this._dialogRef.close();
  }

}

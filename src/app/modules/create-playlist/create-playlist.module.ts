import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';

import { CreatePlaylistComponent } from './create-playlist.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { DialogComponent } from './dialog/dialog.component';
import { PreviewCardComponent } from './preview-card/preview-card.component';
import { MatIconModule } from '@angular/material/icon';


@NgModule({
  declarations: [
    CreatePlaylistComponent,
    DialogComponent,
    PreviewCardComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatFormFieldModule,
    MatIconModule,
  ],
  exports: [
    CreatePlaylistComponent
  ]
})
export class CreatePlaylistModule { }

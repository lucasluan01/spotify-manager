import { Component, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-playlist',
  templateUrl: './create-playlist.component.html',
  styleUrls: ['./create-playlist.component.scss']
})
export class CreatePlaylistComponent implements OnInit {

  isModal: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  openModal() {
    this.isModal = !this.isModal;
  }

  // openModal(modal: any): void {
  //   console.log(modal);
  //   // let modal = document.getElementById('jw-modal');
  //   modal!.style.display = 'block';
  //   // modal!.classList.add('jw-modal-open');
  // }

  // close(): void {
  //   // this.element.style.display = 'none';
  //   // document.body.classList.remove('jw-modal-open');
  // }

}

import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { TrackModel } from '../shared/models/track.model';

@Injectable({
  providedIn: 'root'
})

export class ModuleService {

  private messageSource = new BehaviorSubject('default message');
  private playerTrack$ = new BehaviorSubject<any>({});
  private selectedCollection$ = new BehaviorSubject<any>(null);

  currentMessage = this.messageSource.asObservable();
  currentTrack = this.playerTrack$.asObservable();
  selectedCollection = this.selectedCollection$.asObservable();

  constructor() { }

  changeMessage(message: string) {
    this.messageSource.next(message);
  }

  setPlayerTrack(track: TrackModel) {
    this.playerTrack$.next(track);
  }

  changeSelectedCollection(collection: any) {
    this.selectedCollection$.next(collection);
  }

}

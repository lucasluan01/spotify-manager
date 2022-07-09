import { Component, OnInit } from '@angular/core';
import { ArtistModel } from 'src/app/shared/models/artist.model';
import { TrackModel } from 'src/app/shared/models/track.model';
import { ModuleService } from '../module.service';

@Component({
  selector: 'app-player-track-preview',
  templateUrl: './player-track-preview.component.html',
  styleUrls: ['./player-track-preview.component.scss']
})
export class PlayerTrackPreviewComponent implements OnInit {

  isPlaying: boolean = false;
  isMuted: boolean = false;
  isRepeat: boolean = false;
  volumeTemporary: number = 0;
  Math = Math;
  track!: TrackModel;

  urlCurrentAudio: string = '';

  constructor(
    private _moduleService: ModuleService,
  ) { }

  ngOnInit(): void {
    this._moduleService.currentTrack.subscribe(
      () => {
        this.track = JSON.parse(sessionStorage.getItem('track') || '');
        this.urlCurrentAudio = this.track.preview_url;
      });
      
  }

  onPlayPause(player: HTMLAudioElement) {

    if (this.isPlaying) {
      this.isPlaying = false;
      player.pause();
    }
    else {
      this.isPlaying = true;
      player.play();
    }
  }

  onMuted(player: HTMLAudioElement) {

    if (this.isMuted) {
      this.isMuted = false;
      player.volume = this.volumeTemporary;
    }
    else {
      this.volumeTemporary = player.volume;
      this.isMuted = true;
      player.volume = 0;
    }
  }

  onVolume(player: HTMLAudioElement, volume: number) {
    if (volume > 0) {
      this.isMuted = false;
    }
    player.volume = +volume / 100;
  }

  onCurrentTime(player: HTMLAudioElement, time: string) {
    player.currentTime = Number(time);
  }

  onEnded(player: HTMLAudioElement) {
    this.isPlaying = false;
    player.currentTime = 0;
  }

  onRepeat(player: HTMLAudioElement) {
    player.loop = !player.loop;
    this.isRepeat = player.loop;
  }

  getAllArtists(artists: ArtistModel[]): any {
    return artists.map((item: any) => item = { id: item.id, name: item.name });
  }

}

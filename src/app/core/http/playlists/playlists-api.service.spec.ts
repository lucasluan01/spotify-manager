import { TestBed } from '@angular/core/testing';

import { PlaylistsApiService } from './playlists-api.service';

describe('PlaylistsApiService', () => {
  let service: PlaylistsApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PlaylistsApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

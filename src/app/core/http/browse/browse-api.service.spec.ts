import { TestBed } from '@angular/core/testing';

import { BrowseApiService } from './browse-api.service';

describe('BrowseApiService', () => {
  let service: BrowseApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BrowseApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

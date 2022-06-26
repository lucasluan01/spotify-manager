import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerTrackPreviewComponent } from './player-track-preview.component';

describe('PlayerTrackPreviewComponent', () => {
  let component: PlayerTrackPreviewComponent;
  let fixture: ComponentFixture<PlayerTrackPreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlayerTrackPreviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayerTrackPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

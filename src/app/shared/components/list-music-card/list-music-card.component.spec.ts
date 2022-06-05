import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListMusicCardComponent } from './list-music-card.component';

describe('ListMusicCardComponent', () => {
  let component: ListMusicCardComponent;
  let fixture: ComponentFixture<ListMusicCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListMusicCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListMusicCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

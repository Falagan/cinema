import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileMovieComponent } from './profile-movie.component';

describe('ProfileMovieComponent', () => {
  let component: ProfileMovieComponent;
  let fixture: ComponentFixture<ProfileMovieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileMovieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileMovieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

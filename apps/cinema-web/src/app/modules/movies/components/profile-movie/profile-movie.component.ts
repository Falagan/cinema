import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'cinema-profile-movie',
  templateUrl: './profile-movie.component.html',
  styleUrls: ['./profile-movie.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProfileMovieComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

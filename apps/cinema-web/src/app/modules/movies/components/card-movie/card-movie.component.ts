import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'cinema-card-movie',
  templateUrl: './card-movie.component.html',
  styleUrls: ['./card-movie.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CardMovieComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

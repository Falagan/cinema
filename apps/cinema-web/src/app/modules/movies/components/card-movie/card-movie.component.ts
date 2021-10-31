import { Component, Input } from '@angular/core';
import { Movie } from '@cinema/lib-cinema';

@Component({
  selector: 'cinema-card-movie',
  templateUrl: './card-movie.component.html',
  styleUrls: ['./card-movie.component.css']
})
export class CardMovieComponent {
  @Input() movie: Movie;
}

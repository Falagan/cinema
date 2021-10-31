import { Component, EventEmitter, Input, Output } from '@angular/core';
// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import { Movie } from '@cinema/lib-cinema';

@Component({
  selector: 'cinema-card-movie',
  templateUrl: './card-movie.component.html',
  styleUrls: ['./card-movie.component.css']
})
export class CardMovieComponent {
  @Output() openMovieProfile = new EventEmitter();
  @Input() movie: Movie;

  public onClickMovie() {
    this.openMovieProfile.emit(this.movie.id);
  }
}

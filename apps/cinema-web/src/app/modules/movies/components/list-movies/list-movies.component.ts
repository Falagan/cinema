import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Movie } from '@cinema/lib-cinema';
import { MoviesService } from '../../services/movies.service';
import { MoviesStateProps } from '../../store/movies-initial.state';

@Component({
  selector: 'cinema-list-movies',
  templateUrl: './list-movies.component.html',
  styleUrls: ['./list-movies.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListMoviesComponent implements OnInit {
  public moviesList$: Observable<Movie[]>;
  public loading$: Observable<boolean>;

  constructor(private moviesService: MoviesService) {
    this.binds();
  }

  ngOnInit(): void {
    this.loadMovies();
  }

  // UTILS

  private loadMovies() {
    this.moviesService.findAll();
  }

  // BINDS

  private binds() {
    this.moviesList$ = this.moviesService.bind$(MoviesStateProps.LIST);
    this.loading$ = this.moviesService.bind$(MoviesStateProps.LOADING);
  }
}

import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Movie } from '@cinema/lib-cinema';
import { GlobalStateService } from './../../../../common/global-state/global-state.service';
import { Observable } from 'rxjs';
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

  constructor(private globalService: GlobalStateService, private moviesService: MoviesService, private router: Router) {
    this.binds();
  }

  ngOnInit(): void {
    this.globalService.setToolBarTitle('movies.list.toolbarTitle');
    this.loadMovies();
  }

  // UTILS

  public navigateToNewMovie() {
    this.router.navigate(['cinema/movies/new']);
  }

  public openMovieProfile(movieId: any) {
    this.router.navigate(['cinema/movies/profile', movieId]);
  }

  private loadMovies() {
    this.moviesService.findAll();
  }
  // BINDS

  private binds() {
    this.moviesList$ = this.moviesService.bind$(MoviesStateProps.LIST);
    this.loading$ = this.moviesService.bind$(MoviesStateProps.LOADING);
  }
}

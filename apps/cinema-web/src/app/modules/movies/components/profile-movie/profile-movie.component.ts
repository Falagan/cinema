import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Movie } from '@cinema/lib-cinema';
import { Observable, Subscription } from 'rxjs';
import { MoviesStateProps } from '../../store/movies-initial.state';
import { GlobalStateService } from './../../../../common/global-state/global-state.service';
import { MoviesService } from './../../services/movies.service';

@Component({
  selector: 'cinema-profile-movie',
  templateUrl: './profile-movie.component.html',
  styleUrls: ['./profile-movie.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProfileMovieComponent implements OnInit, OnDestroy {
  public loading$: Observable<boolean>;
  public movie: Movie;
  private bindSubscriptions: Subscription = new Subscription();

  constructor(
    private moviesService: MoviesService,
    private route: ActivatedRoute,
    private router: Router,
    private globalState: GlobalStateService
  ) {}

  ngOnInit(): void {
    this.binds();
    const movieId = this.route.snapshot.paramMap.get('id');
    this.moviesService.fakeGetMovie(Number(movieId));
  }

  ngOnDestroy() {
    this.bindSubscriptions.unsubscribe();
  }

  // EVENTS

  fakeNavigateToEditMovie() {
    this.router.navigate(['cinema/movies/list']);
  }

  fakeRemoveMovie() {
    this.router.navigate(['cinema/movies/list']);
  }

  // BINDS

  private binds() {
    this.loading$ = this.moviesService.bind$(MoviesStateProps.LOADING);

    this.bindSubscriptions.add(
      this.moviesService.bind$(MoviesStateProps.PROFILE).subscribe((mov) => {
        if (mov) {
          this.movie = mov;
          this.globalState.setToolBarTitle(mov.title);
        }
      })
    );
  }
}

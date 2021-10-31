import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Actor, Company } from '@cinema/lib-cinema';
import { NotifierService } from 'angular-notifier';
import { Observable } from 'rxjs';
import { MoviesStateProps } from '../../store/movies-initial.state';
import { GlobalStateService } from './../../../../common/global-state/global-state.service';
import { NotifierTypes } from './../../../../common/notifier/notifier-config';
import { MoviesService } from './../../services/movies.service';

@Component({
  selector: 'cinema-new-movie',
  templateUrl: './new-movie.component.html',
  styleUrls: ['./new-movie.component.css']
})
export class NewMovieComponent implements OnInit {
  public formNewMovie!: FormGroup;
  public actorsList$: Observable<Actor[]>;
  public companiesList$: Observable<Company[]>;

  constructor(
    private globalService: GlobalStateService,
    private moviesService: MoviesService,
    private formBuilder: FormBuilder,
    private router: Router,
    private notifierService: NotifierService
  ) {}

  ngOnInit(): void {
    this.globalService.setToolBarTitle('movies.new.toolbarTitle');

    this.formNewMovie = this.formBuilder.group({
      title: [null, [Validators.required]],
      poster: [null, [Validators.required]],
      actors: [null, [Validators.required]],
      genre: [null, [Validators.required]],
      imdbRating: [null],
      duration: [null, [Validators.required]],
      company: [null, [Validators.required]],
      year: [null, [Validators.required]]
    });
    this.binds();
    this.preloadSelectsOptions();
  }

  // EVENTS

  onFakeSubmit() {
    if (!this.formNewMovie.invalid) {
      this.notifierService.show({
        type: NotifierTypes.success,
        message: 'Nueva película añadida!'
      });
      this.router.navigate(['cinema/movies/list']);
    }
  }

  onNavigateoMoviesList() {
    this.router.navigate(['cinema/movies/list']);
  }

  // UTILS

  private preloadSelectsOptions() {
    this.moviesService.findAllActors();
    this.moviesService.findAllCompanies();
  }

  // BINDS

  private binds() {
    this.actorsList$ = this.moviesService.bind$(MoviesStateProps.ACTORS);
    this.companiesList$ = this.moviesService.bind$(MoviesStateProps.COMPANIES);
  }
}

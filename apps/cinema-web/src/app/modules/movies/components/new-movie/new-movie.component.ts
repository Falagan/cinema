import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NotifierService } from 'angular-notifier';
import { GlobalStateService } from './../../../../common/global-state/global-state.service';
import { NotifierTypes } from './../../../../common/notifier/notifier-config';

@Component({
  selector: 'cinema-new-movie',
  templateUrl: './new-movie.component.html',
  styleUrls: ['./new-movie.component.css']
})
export class NewMovieComponent implements OnInit {
  public formNewMovie!: FormGroup;

  constructor(
    private globalService: GlobalStateService,
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
      imdbRating: [null, [Validators.required]],
      duration: [null, [Validators.required]],
      company: [null, [Validators.required]],
      year: [null, [Validators.required]]
    });
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


}

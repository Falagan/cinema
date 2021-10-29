import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MoviesRoutingModule } from './movies-routing.module';
import { CardMovieComponent } from './components/card-movie/card-movie.component';
import { ListMoviesComponent } from './components/list-movies/list-movies.component';
import { ProfileMovieComponent } from './components/profile-movie/profile-movie.component';


@NgModule({
  declarations: [
    CardMovieComponent,
    ListMoviesComponent,
    ProfileMovieComponent
  ],
  imports: [
    CommonModule,
    MoviesRoutingModule
  ]
})
export class MoviesModule { }

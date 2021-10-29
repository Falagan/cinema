import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RatingModule } from 'primeng/rating';
import { SharedModule } from '../../common/shared.module';
import { CardMovieComponent } from './components/card-movie/card-movie.component';
import { ListMoviesComponent } from './components/list-movies/list-movies.component';
import { ProfileMovieComponent } from './components/profile-movie/profile-movie.component';
import { MoviesRoutingModule } from './movies-routing.module';

@NgModule({
  declarations: [ListMoviesComponent, ProfileMovieComponent, CardMovieComponent],
  imports: [
    CommonModule,
    FormsModule,
    MoviesRoutingModule,
    MatCardModule,
    SharedModule,
    RatingModule,
    MatIconModule
  ]
})
export class MoviesModule {}

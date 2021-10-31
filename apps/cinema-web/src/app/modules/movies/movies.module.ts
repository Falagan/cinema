import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { ImageModule } from 'primeng/image';
import { RatingModule } from 'primeng/rating';
import { SharedModule } from '../../common/shared.module';
import { CardMovieComponent } from './components/card-movie/card-movie.component';
import { ListMoviesComponent } from './components/list-movies/list-movies.component';
import { NewMovieComponent } from './components/new-movie/new-movie.component';
import { ProfileMovieComponent } from './components/profile-movie/profile-movie.component';
import { MoviesRoutingModule } from './movies-routing.module';

@NgModule({
  declarations: [ListMoviesComponent, ProfileMovieComponent, CardMovieComponent, NewMovieComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MoviesRoutingModule,
    MatCardModule,
    SharedModule,
    RatingModule,
    MatIconModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    ImageModule
  ]
})
export class MoviesModule {}

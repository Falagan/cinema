import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { CardMovieComponent } from './components/card-movie/card-movie.component';
import { ListMoviesComponent } from './components/list-movies/list-movies.component';
import { ProfileMovieComponent } from './components/profile-movie/profile-movie.component';
import { MoviesRoutingModule } from './movies-routing.module';
import { SkeletonModule } from 'primeng/skeleton';
import { SharedModule } from '../../common/shared.module';

@NgModule({
  declarations: [ListMoviesComponent, ProfileMovieComponent, CardMovieComponent],
  imports: [CommonModule, MoviesRoutingModule, MatCardModule, SkeletonModule, SharedModule]
})
export class MoviesModule {}

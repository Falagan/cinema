import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListMoviesComponent } from './components/list-movies/list-movies.component';
import { ProfileMovieComponent } from './components/profile-movie/profile-movie.component';

const routes: Routes = [
  {
    path: 'list',
    component: ListMoviesComponent
  },
  {
    path: 'profile',
    component: ProfileMovieComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MoviesRoutingModule { }

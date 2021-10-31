import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListMoviesComponent } from './components/list-movies/list-movies.component';
import { NewMovieComponent } from './components/new-movie/new-movie.component';
import { ProfileMovieComponent } from './components/profile-movie/profile-movie.component';

const routes: Routes = [
  {
    path: 'list',
    component: ListMoviesComponent
  },
  {
    path: 'profile/:id',
    component: ProfileMovieComponent
  },
  {
    path: 'new',
    component: NewMovieComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],

  exports: [RouterModule]
})
export class MoviesRoutingModule {}

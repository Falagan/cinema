import { Injectable } from '@angular/core';
import { Action, Store } from '@global/lib-store';
import { MoviesInitialState, MoviesStateProps } from '../store/movies-initial.state';
import { MoviesStateActions } from '../store/movies.actions';
import { MoviesReducer } from '../store/movies.reducers';
import { MoviesState } from '../store/movies.state';

@Injectable({
  providedIn: 'root'
})
export class MoviesService extends Store<MoviesState, MoviesStateActions, MoviesStateProps> {
  constructor() {
    super(MoviesInitialState, MoviesReducer);
  }

  /**
   * Gets all movies filter by query
   */
  public findAll() {
    this.loadingState(true);
    setTimeout(() => {
      const action: Action<MoviesStateActions> = {
        type: MoviesStateActions.SET_LIST,
        payload: [
          {
            id: 1,
            title: 'Titanic',
            genre: 'Drama',
            actors: ['Manolo', 'Jesús']
          },
          {
            id: 1,
            title: 'Jurassic Park',
            genre: 'Drama',
            actors: ['Loli', 'Bruce']
          }
        ],
        singleProp: true
      };
      this.loadingState(false);
      this.dispatchPropState(action);
    }, 4000);
  }

  /**
   * Gets one movie
   */
  public getMovie(uid: string) {
    //const movie = repo.getMovie(uid).toPromise();
    const action: Action<MoviesStateActions> = {
      type: MoviesStateActions.SET_PROFILE,
      payload: {},
      singleProp: true
    };
    this.dispatchPropState(action);
  }

  /**
   * Sets loading state
   * @param state
   */
  private loadingState(state: boolean) {
    const action: Action<MoviesStateActions> = {
      type: MoviesStateActions.LOADING,
      payload: state,
      singleProp: true
    };
    this.dispatchPropState(action);
  }
}

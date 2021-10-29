import { Injectable } from '@angular/core';
import { MoviesRepository } from '@cinema/lib-cinema';
import { Action, Store } from '@global/lib-store';
import { MoviesInitialState, MoviesStateProps } from '../store/movies-initial.state';
import { MoviesStateActions } from '../store/movies.actions';
import { MoviesReducer } from '../store/movies.reducers';
import { MoviesState } from '../store/movies.state';

@Injectable({
  providedIn: 'root'
})
export class MoviesService extends Store<MoviesState, MoviesStateActions, MoviesStateProps> {
  constructor(private moviesRepository: MoviesRepository) {
    super(MoviesInitialState, MoviesReducer);
  }

  /**
   * Gets all movies filter by query
   */
  public async findAll() {
    this.loadingState(true);
    const list = await this.moviesRepository.findAll().toPromise();
    
    const action: Action<MoviesStateActions> = {
      type: MoviesStateActions.SET_LIST,
      payload: list,
      singleProp: true
    };

    this.dispatchPropState(action);
    this.loadingState(false);
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

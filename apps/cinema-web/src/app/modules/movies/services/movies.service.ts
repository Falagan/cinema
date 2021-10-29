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
            director: 'John Doe',
            img: 'https://ih1.redbubble.net/image.1150676617.9942/fposter,small,wall_texture,product,750x1000.jpg',
            tags: ['barco', 'drama']
          },
          {
            id: 1,
            title: 'Jurassic Park',
            director: 'John Doe',
            img: 'https://braingamerstore.es/WebRoot/Store19/Shops/10b5e492-53fc-4222-8567-0b2e37dbb48e/5D70/12D8/E660/3A4C/3679/0A48/3548/C90A/CARTEL_JURASSIC_PARK.jpg',
            tags: ['dinosaurio', 'drama']
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

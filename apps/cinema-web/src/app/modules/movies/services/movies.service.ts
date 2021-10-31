import { Injectable } from '@angular/core';
import { ActorsRepoitory, CompaniesRepository, MoviesRepository } from '@cinema/lib-cinema';
import { Action, Store } from '@global/lib-store';
import { MoviesInitialState, MoviesStateProps } from '../store/movies-initial.state';
import { MoviesStateActions } from '../store/movies.actions';
import { MoviesReducer } from '../store/movies.reducers';
import { MoviesState } from '../store/movies.state';

@Injectable({
  providedIn: 'root'
})
export class MoviesService extends Store<MoviesState, MoviesStateActions, MoviesStateProps> {
  constructor(
    private moviesRepository: MoviesRepository,
    private actorsRepository: ActorsRepoitory,
    private companiesRepository: CompaniesRepository
  ) {
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
   * Gets all the actors
   */
  public async findAllActors() {
    const list = await this.actorsRepository.findAll().toPromise();

    const action: Action<MoviesStateActions> = {
      type: MoviesStateActions.SET_ACTORS,
      payload: list,
      singleProp: true
    };

    this.dispatchPropState(action);
  }

  /**
   * Gets all the companies
   *  */
  public async findAllCompanies() {
    const list = await this.companiesRepository.findAll().toPromise();

    const action: Action<MoviesStateActions> = {
      type: MoviesStateActions.SET_COMPANIES,
      payload: list,
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

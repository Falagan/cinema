import { Injectable } from '@angular/core';
import { ActorsRepoitory, CompaniesRepository, Movie, MoviesRepository } from '@cinema/lib-cinema';
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
   * Fake get one move. We should have a specific method in the api
   * to get a movie, but we dont. So, we take the whole list/array and
   * pick up the required movie id
   */
  public async fakeGetMovie(id: number) {
    this.loadingState(true);

    const list: Movie[] = await this.moviesRepository.findAll().toPromise();
    const movie: Movie | undefined = list.find((movie) => movie.id === id);

    await this.fakeJoinBetweenMoviesActorsAndCompanies(movie);

    console.log(movie);

    const action: Action<MoviesStateActions> = {
      type: MoviesStateActions.SET_PROFILE,
      payload: movie,
      singleProp: true
    };
    this.dispatchPropState(action);
    this.loadingState(false);
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

  /** It simulates a join that should come done from api */
  private async fakeJoinBetweenMoviesActorsAndCompanies(movie: Movie | undefined) {
    if (movie) {
      const actorsReq = this.actorsRepository.findAll().toPromise();
      const companiesReq = this.companiesRepository.findAll().toPromise();

      const [actors, companies] = await Promise.all([actorsReq, companiesReq]);

      const actorsJoined: any = [];
      let companyJoin: string | undefined = '';

      movie.actors.forEach((actorId) => {
        const actor = actors.find((actor) => actor.id === actorId);
        actorsJoined.push(actor?.first_name + ' ' + actor?.last_name);
      });

      companyJoin = companies.find((comp) => comp.movies.find((mov) => mov === movie.id))?.name;

      movie.actors = actorsJoined;
      movie.company = companyJoin;
    }
  }
}

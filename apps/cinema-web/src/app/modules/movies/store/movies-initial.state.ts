import { MoviesState } from './movies.state';

export const MoviesInitialState: MoviesState = {
  list: [],
  loading: true,
  actors: [],
  companies: [],
  genre: [],
  profile: null
};

export enum MoviesStateProps {
  LIST = 'list',
  LOADING = 'loading',
  PROFILE = 'profile',
  ACTORS = 'actors',
  GENRE = 'genre',
  COMPANIES = 'companies'
}

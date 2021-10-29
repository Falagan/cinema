import { MoviesState } from './movies.state';

export const MoviesInitialState: MoviesState = {
  list: [],
  loading: true,
  profile: null
};

export enum MoviesStateProps {
  LIST = 'list',
  LOADING = 'loading',
  PROFILE = 'profile'
}

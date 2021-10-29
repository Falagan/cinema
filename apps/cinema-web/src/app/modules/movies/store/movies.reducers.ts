import * as _ from 'lodash';
import { Action, reducerFunction } from '@global/lib-store';
import { MoviesStateProps } from './movies-initial.state';
import { MoviesStateActions } from './movies.actions';
import { MoviesState } from './movies.state';
import { Movie } from '@cinema/lib-cinema';

export const MoviesReducer: reducerFunction<MoviesState, MoviesStateActions, MoviesStateProps> = function (
  state: MoviesState,
  action: Action<MoviesStateActions>
): MoviesState | { propState: any; prop: MoviesStateProps } {
  const clonedState = _.cloneDeep(state);
  switch (action.type) {
    case MoviesStateActions.SET_LIST:
      if (action.singleProp) {
        clonedState.list = [...action.payload];
        return { propState: clonedState.list, prop: MoviesStateProps.LIST };
      }
      return clonedState;
    case MoviesStateActions.SET_PROFILE:
      if (action.singleProp) {
        clonedState.profile = _.cloneDeep(action.payload);
        return { propState: clonedState.profile, prop: MoviesStateProps.PROFILE };
      }
      return clonedState;
    case MoviesStateActions.ADD:
      if (action.singleProp) {
        clonedState.list = [...clonedState.list, action.payload];
        return { propState: clonedState.profile, prop: MoviesStateProps.LIST };
      }
      return clonedState;
    case MoviesStateActions.REMOVE:
      if (action.singleProp) {
        clonedState.list = clonedState.list.filter((movie: Movie) => movie != action.payload);
        return { propState: clonedState.profile, prop: MoviesStateProps.LIST };
      }
      return clonedState;
    case MoviesStateActions.LOADING:
      if (action.singleProp) {
        clonedState.loading = action.payload;
        return { propState: clonedState.loading, prop: MoviesStateProps.LOADING };
      }
      return clonedState;
    default:
      return clonedState;
  }
};

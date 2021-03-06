import { Action, reducerFunction } from '@global/lib-store';
import * as _ from 'lodash';
import { GlobalStateProps } from './global-initial.state';
import { GlobalStateActions } from './global.actions';
import { GlobalState } from './global.state';

export const GlobalReducer: reducerFunction<GlobalState, GlobalStateActions, GlobalStateProps> = function (
  state: GlobalState,
  action: Action<GlobalStateActions>
): GlobalState | { propState: any; prop: GlobalStateProps } {
  const clonedState = _.cloneDeep(state);
  switch (action.type) {
    case GlobalStateActions.SET_SIDE_MENU:
      if (action.singleProp) {
        clonedState.sideMenuItems = _.cloneDeep(action.payload);
        return { propState: clonedState.sideMenuItems, prop: GlobalStateProps.SIDE_MENU_ITEMS };
      }
      return clonedState;
    case GlobalStateActions.SET_USER:
      if (action.singleProp) {
        clonedState.user = _.cloneDeep(action.payload);
        return { propState: clonedState.user, prop: GlobalStateProps.USER };
      }
      return clonedState;
    case GlobalStateActions.SET_SIDE_MENU_STATE:
      if (action.singleProp) {
        clonedState.user = _.cloneDeep(action.payload);
        return { propState: clonedState.user, prop: GlobalStateProps.SIDE_MENU_OPEN_STATE };
      }
      return clonedState;
    case GlobalStateActions.SET_TOOLBAR_TITLE:
      if (action.singleProp) {
        clonedState.toolBarTitle = action.payload;
        return { propState: clonedState.toolBarTitle, prop: GlobalStateProps.TOOLBAR_TITLE };
      }
      return clonedState;
    default:
      return clonedState;
  }
};

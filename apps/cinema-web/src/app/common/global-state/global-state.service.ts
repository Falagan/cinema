import { Injectable } from '@angular/core';
import { Action, Store } from '@global/lib-store';
import { User } from './models/user';
import { GlobalInitialState, GlobalStateProps } from './store/global-initial.state';
import { GlobalStateActions } from './store/global.actions';
import { GlobalReducer } from './store/global.reducers';
import { GlobalState } from './store/global.state';

@Injectable({
  providedIn: 'root'
})
export class GlobalStateService extends Store<GlobalState, GlobalStateActions, GlobalStateProps> {
  constructor() {
    super(GlobalInitialState, GlobalReducer);
  }

  public setUserSession(user: User) {
    const action: Action<GlobalStateActions> = {
      type: GlobalStateActions.SET_USER,
      payload: user,
      singleProp: true
    };
    this.dispatchPropState(action);
  }

  public setSideMenuItems(menu: any) {
    const action: Action<GlobalStateActions> = {
      type: GlobalStateActions.SET_SIDE_MENU,
      payload: menu,
      singleProp: true
    };
    this.dispatchPropState(action);
  }

  public setSideMenuOpenState(openState: boolean) {
    const action: Action<GlobalStateActions> = {
      type: GlobalStateActions.SET_SIDE_MENU_STATE,
      payload: openState,
      singleProp: true
    };
    this.dispatchPropState(action);
  }
}

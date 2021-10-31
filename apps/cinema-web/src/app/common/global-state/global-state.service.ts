import { Injectable } from '@angular/core';
import { ConfigurationsRepositoryService, User, _Menu } from '@cinema/lib-cinema';
import { Action, Store } from '@global/lib-store';
import { GlobalInitialState, GlobalStateProps } from './store/global-initial.state';
import { GlobalStateActions } from './store/global.actions';
import { GlobalReducer } from './store/global.reducers';
import { GlobalState } from './store/global.state';

@Injectable({
  providedIn: 'root'
})
export class GlobalStateService extends Store<GlobalState, GlobalStateActions, GlobalStateProps> {
  constructor(private configurationService: ConfigurationsRepositoryService) {
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

  public setToolBarTitle(section: string) {
    const action: Action<GlobalStateActions> = {
      type: GlobalStateActions.SET_TOOLBAR_TITLE,
      payload: section,
      singleProp: true
    };
    this.dispatchPropState(action);
  }

  public async setSideMenuItems() {
    const menu: _Menu = await this.configurationService.getAsideMenu().toPromise();

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

  public getUserSessionFromSessionStorage() {
    const name = sessionStorage.getItem('userName');
    const avatar = sessionStorage.getItem('avatar');

    const action: Action<GlobalStateActions> = {
      type: GlobalStateActions.SET_USER,
      payload: { name, avatar },
      singleProp: true
    };
    this.dispatchPropState(action);
  }
}

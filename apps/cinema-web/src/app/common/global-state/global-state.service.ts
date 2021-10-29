import { Injectable } from '@angular/core';
import { Action, Store } from '@global/lib-store';
import { ApiResponse, ConfigurationsRepositoryService, Menu, User } from '@cinema/lib-cinema';
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

  public async setSideMenuItems() {
    // const menu: ApiResponse<Menu> = await this.configurationService.getAsideMenu().toPromise()
    const menu = {
      id: 1,
      name: 'aside',
      items: [
        { label: 'Películas', icon: 'movie', link: '/cinema/movies/list' },
        { label: 'Actores', icon: 'recent_actors', link: '/cinema/actors/list' },
        { label: 'Compañías', icon: 'business', link: '/cinema/companies/list' }
      ]
    };
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

import { GlobalState } from './global.state';

export const GlobalInitialState: GlobalState = {
  user: null,
  sideMenuItems: [],
  sideMenuOpen: false,
  toolBarTitle: 'movies.list.toolbarTitle'
};


export enum GlobalStateProps {
  USER = 'user',
  SIDE_MENU_ITEMS = 'sideMenuItems',
  SIDE_MENU_OPEN_STATE = 'sideMenuOpen',
  TOOLBAR_TITLE = "toolBarTitle"
}

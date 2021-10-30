import { MenuItem, User } from "@cinema/lib-cinema";

export interface GlobalState {
  user: User | null;
  sideMenuItems: MenuItem[];
  sideMenuOpen: boolean;
  toolBarTitle: string;
}

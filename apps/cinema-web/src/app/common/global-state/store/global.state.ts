import { User } from "@cinema/lib-cinema";

export interface GlobalState {
  user: User | null;
  sideMenuItems: any;
  sideMenuOpen: boolean;
}

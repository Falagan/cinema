import { User } from "../models/user";

export interface GlobalState {
  user: User | null;
  sideMenuItems: any;
  sideMenuOpen: boolean;
}

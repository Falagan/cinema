export interface Menu {
  id: string;
  items: MenuItem[];
}

export interface MenuItem {
  id: string;
  label: string;
  link: string;
  icon: string;
}

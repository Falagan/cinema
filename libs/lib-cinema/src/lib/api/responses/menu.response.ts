export interface _Menu {
  id: string;
  name: string;
  items: _MenuItem[];
}

export interface _MenuItem {
  id: string;
  label: string;
  link: string;
  icon: string;
}

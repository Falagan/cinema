export interface _Menu {
  id: string;
  name: string;
  items: _MenuItem[];
}

export interface _MenuItem {
  id: string;
  labelI18nEs: string;
  link: string;
  icon: string;
}

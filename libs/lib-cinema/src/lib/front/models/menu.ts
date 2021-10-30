export interface Menu {
  id: string;
  name: string;
  items: MenuItem[];
}

export interface MenuItem {
  id: string;
  labelI18nEs: string;
  link: string;
  icon: string;
}

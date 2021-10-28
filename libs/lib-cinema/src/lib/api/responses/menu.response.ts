export interface MenuResponse {
  id: string;
  items: MenuItem[];
}

export interface MenuItem {
  id: string;
  label: string;
  link: string;
}

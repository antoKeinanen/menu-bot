export interface Menu {
  date: string;
  menu: MenuItem[];
}

export interface MenuItem {
  dish: string;
  info: string;
  footer: string;
}

export interface IConfig {
  restaurants: Restaurant[];
}

export enum ParseMode {
  LOUNAAT_INFO,
}

export interface Restaurant {
  name: string;
  endpoint: string;
  parseMode: ParseMode;
}

export const RoutesArray: Routes[] = [
  { title: 'Home', route: 'home', icon: '' },
  { title: 'Usuarios', route: 'user', icon: '', childs: [] },
  { title: 'Produtos', route: 'product', icon: '', childs: [] },
];

export class Routes {
  title: string;
  route?: string;
  icon?: string;
  childs?: Array<RoutesChilds> = [];

  constructor() {
    this.title = '';
  }
}

export class RoutesChilds {
  title: string;
  route: string;
  icon?: string;
  params?: string;

  constructor() {
    this.title = '';
    this.route = '';
  }
}

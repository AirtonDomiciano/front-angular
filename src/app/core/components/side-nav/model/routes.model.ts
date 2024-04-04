export const RoutesArray: Routes[] = [
  { title: 'Home', route: 'home', icon: '' },
  { title: 'Usuario', route: 'user', icon: '', childs: [] },
  { title: 'Produto', route: 'product' },
  { title: 'Produtos', route: 'products', icon: '', childs: [] },
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

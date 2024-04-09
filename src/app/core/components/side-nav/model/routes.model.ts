export const RoutesArray: Routes[] = [
  { title: 'Home', route: 'home', icon: '' },
  { title: 'Usuário', route: 'user', icon: '', childs: [] },
  { title: 'Produto', route: 'product' },
  { title: 'Produtos', route: 'products', icon: '', childs: [] },
  { title: 'Usuários', route: 'users', icon: '', childs: [] },
  { title: 'Catálogo', route: 'catalog', icon: '', childs: [] },
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

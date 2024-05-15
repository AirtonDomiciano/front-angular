export const RoutesArray: Routes[] = [
  { title: 'Home', route: 'home', icon: '' },
  { title: 'Apis', route: 'apis', icon: '', childs: [] },
  { title: 'Carrinho', route: 'carrinho', icon: '', childs: [] },
  { title: 'Catálogo', route: 'catalogo', icon: '', childs: [] },
  { title: 'Entidades', route: 'entidades', icon: '', childs: [] },
  { title: 'Produtos', route: 'produtos', icon: '', childs: [] },
  { title: 'Usuários', route: 'usuarios', icon: '', childs: [] },
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

export const RoutesArray: Routes[] = [
  { title: 'Home', route: 'home', icon: 'bi bi-house' },
  { title: 'Apis', route: 'apis', icon: 'bi bi-gear', childs: [] },
  { title: 'Carrinho', route: 'carrinho', icon: 'bi bi-cart', childs: [] },
  {
    title: 'Catálogo',
    route: 'catalogo',
    icon: 'bi bi-journal-text',
    childs: [],
  },
  {
    title: 'Clientes',
    route: 'clientes',
    icon: 'bi bi-person-vcard',
    childs: [],
  },
  { title: 'Produtos', route: 'produtos', icon: 'bi bi-basket', childs: [] },
  { title: 'Usuários', route: 'usuarios', icon: 'bi bi-people', childs: [] },
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

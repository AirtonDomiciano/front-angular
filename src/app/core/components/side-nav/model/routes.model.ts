export const RoutesArray: Routes[] = [
  { title: 'Home', route: 'home', icon: 'bi bi-house' },
  { title: 'Apis', route: 'apis', icon: 'bi bi-gear', childs: [] },
  {
    title: 'Atendimentos',
    route: 'atendimentos',
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
  {
    title: 'Kit Produtos',
    route: 'kitprodutos',
    icon: 'bi bi-basket',
    childs: [],
  },
  { title: 'Usuários', route: 'usuarios', icon: 'bi bi-people', childs: [] },
  { title: 'Animais', route: 'animais', icon: 'bi bi-heart-fill', childs: [] },
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

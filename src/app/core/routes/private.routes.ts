import { Routes } from '@angular/router';
import BaseLayoutComponent from '../components/base-layout/base-layout.component';
import { AuthGuardService } from '../guards/auth-guard.service';

// private.routes.ts
export const privateRoutes: Routes = [
  {
    path: 'private',
    component: BaseLayoutComponent,
    children: [
      {
        path: 'home',
        loadChildren: () =>
          import('../../pages/home/home.module').then((m) => m.HomeModule),
        canActivate: [AuthGuardService],
      },
      {
        path: 'produtos',
        loadChildren: () =>
          import('../../pages/produtos/produtos.module').then(
            (m) => m.ProdutosModule
          ),
        canActivate: [AuthGuardService],
      },
      {
        path: 'usuario',
        loadChildren: () =>
          import('../../pages/usuario/usuario.module').then(
            (m) => m.UsuarioModule
          ),
        canActivate: [AuthGuardService],
      },
      {
        path: 'usuarios',
        loadChildren: () =>
          import('../../pages/usuarios/usuarios.module').then(
            (m) => m.UsuariosModule
          ),
        canActivate: [AuthGuardService],
      },
      {
        path: 'produto',
        loadChildren: () =>
          import('../../pages/produto/produto.module').then(
            (m) => m.ProdutoModule
          ),
        canActivate: [AuthGuardService],
      },
      {
        path: 'catalogo',
        loadChildren: () =>
          import('../../pages/catalogo/catalogo.module').then(
            (m) => m.CatalogoModule
          ),
        canActivate: [AuthGuardService],
      },
      {
        path: 'carrinho',
        loadChildren: () =>
          import('../../pages/carrinho/carrinho.module').then(
            (m) => m.CarrinhoModule
          ),
        canActivate: [AuthGuardService],
      },
      {
        path: 'compras',
        loadChildren: () =>
          import('../../pages/compras/compras.module').then(
            (m) => m.ComprasModule
          ),
        canActivate: [AuthGuardService],
      },
      {
        path: 'pedidos',
        loadChildren: () =>
          import('../../pages/pedidos/pedidos.module').then(
            (m) => m.PedidosModule
          ),
        canActivate: [AuthGuardService],
      },
      {
        path: 'apis',
        loadChildren: () =>
          import('../../pages/apis/apis.module').then((m) => m.ApisModule),
        canActivate: [AuthGuardService],
      },
      {
        path: 'api',
        loadChildren: () =>
          import('../../pages/api/api.module').then((m) => m.ApiModule),
        canActivate: [AuthGuardService],
      },
      {
        path: 'clientes',
        loadChildren: () =>
          import('../../pages/clientes/clientes.module').then(
            (m) => m.ClientesModule
          ),
        canActivate: [AuthGuardService],
      },
      {
        path: 'animais',
        loadChildren: () =>
          import('../../pages/animais/animais.module').then(
            (m) => m.AnimaisModule
          ),
        canActivate: [AuthGuardService],
      },
      {
        path: 'cliente',
        loadChildren: () =>
          import('../../pages/cliente/cliente.module').then(
            (m) => m.ClienteModule
          ),
        canActivate: [AuthGuardService],
      },
      {
        path: 'cliente/:id',
        loadChildren: () =>
          import('../../pages/cliente/cliente.module').then(
            (m) => m.ClienteModule
          ),
        canActivate: [AuthGuardService],
      },
      {
        path: 'animal',
        loadChildren: () =>
          import('../../pages/animal/animal.module').then(
            (m) => m.AnimalModule
          ),
      },
      { path: '**', redirectTo: 'home' },
    ],
  },
];

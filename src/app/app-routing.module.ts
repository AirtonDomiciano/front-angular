import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthLayoutComponent } from './core/components/auth-layout/auth-layout.component';
import BaseLayoutComponent from './core/components/base-layout/base-layout.component';
import { AuthGuardService as AuthGuard } from './core/guards/auth-guard.service';

const routes: Routes = [
  {
    path: 'auth',
    component: AuthLayoutComponent,
    children: [
      {
        path: 'login',
        loadChildren: () =>
          import('src/app/pages/login/login.module').then((m) => m.LoginModule),
      },
      {
        path: 'cadastro',
        loadChildren: () =>
          import('./pages/registro-usuario/registro-usuario.module').then(
            (m) => m.RegistroUsuarioModule
          ),
      },
      { path: '**', redirectTo: 'login' },
    ],
  },
  {
    path: '',
    component: BaseLayoutComponent,
    children: [
      {
        path: 'home',
        loadChildren: () =>
          import('./pages/home/home.module').then((m) => m.HomeModule),
        canActivate: [AuthGuard],
      },

      {
        path: 'produtos',
        loadChildren: () =>
          import('./pages/produtos/produtos.module').then(
            (m) => m.ProdutosModule
          ),
        canActivate: [AuthGuard],
      },

      {
        data: { title: 'Início', pathValidate: '' },
        path: '**',
        redirectTo: '',
      },
      {
        path: 'usuario',
        loadChildren: () =>
          import('./pages/usuario/usuario.module').then((m) => m.UsuarioModule),
      },
      {
        path: 'usuarios',
        loadChildren: () =>
          import('./pages/usuarios/usuarios.module').then(
            (m) => m.UsuariosModule
          ),
      },
      {
        path: 'produto',
        loadChildren: () =>
          import('./pages/produto/produto.module').then((m) => m.ProdutoModule),
      },
      {
        path: 'catalogo',
        loadChildren: () =>
          import('./pages/catalogo/catalogo.module').then(
            (m) => m.CatalogoModule
          ),
      },
      {
        path: 'carrinho',
        loadChildren: () =>
          import('./pages/carrinho/carrinho.module').then(
            (m) => m.CarrinhoModule
          ),
      },
      {
        path: 'shopping',
        loadChildren: () =>
          import('./pages/compras/compras.module').then((m) => m.ComprasModule),
      },
      {
        path: 'pedidos',
        loadChildren: () =>
          import('./pages/pedidos/pedidos.module').then((m) => m.PedidosModule),
      },
      {
        path: 'apis',
        loadChildren: () =>
          import('./pages/apis/apis.module').then((m) => m.ApisModule),
      },
      {
        path: 'api',
        loadChildren: () =>
          import('./pages/api/api.module').then((m) => m.ApiModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

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
        path: 'user',
        loadChildren: () =>
          import('./pages/user/user.module').then((m) => m.UserModule),
      },

      {
        path: 'users',
        loadChildren: () =>
          import('./pages/users/users.module').then((m) => m.UsersModule),
      },

      {
        path: 'edit-user',
        loadChildren: () =>
          import('./pages/edit-user/edit-user.module').then(
            (m) => m.EditUserModule
          ),
      },

      {
        path: 'edit-product',
        loadChildren: () =>
          import('./pages/edit-product/edit-product.module').then(
            (m) => m.EditProductModule
          ),
      },

      {
        path: 'catalog',
        loadChildren: () =>
          import('./pages/catalogo/catalogo.module').then(
            (m) => m.CatalogoModule
          ),
      },

      {
        path: 'cart',
        loadChildren: () =>
          import('./pages/carrinho/carrinho.module').then(
            (m) => m.CarrinhoModule
          ),
      },

      {
        path: 'shopping',
        loadChildren: () =>
          import('./pages/shopping/shopping.module').then(
            (m) => m.ShoppingModule
          ),
      },

      {
        path: 'view-order',
        loadChildren: () =>
          import('./pages/view-order/view-order.module').then(
            (m) => m.ViewOrderModule
          ),
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

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthLayoutComponent } from './core/components/auth-layout/auth-layout.component';
import { BaseLayoutComponent } from './core/components/base-layout/base-layout.component';

const routes: Routes = [
  {
    data: { title: '' },
    path: '',
    component: AuthLayoutComponent,
    children: [
      {
        data: { title: 'Login', pathValidate: '' },
        path: 'login',
        loadChildren: () =>
          import('src/app/pages/login/login.module').then((m) => m.LoginModule),
      },
      {
        // { path: 'cadastro', component: CadastroComponent },
        path: 'cadastro',
        loadChildren: () =>
          import('./pages/cadastro/cadastro.module').then(
            (m) => m.CadastroModule
          ),
      },
    ],
  },
  // ROTA DASHBOARD.
  // quando o usuário tiver acesso.
  {
    data: { title: '' },
    path: '',
    // canActivate: [AuthGuard],
    component: BaseLayoutComponent,
    children: [
      {
        path: 'home',
        loadChildren: () =>
          import('./pages/home/home.module').then((m) => m.HomeModule),
      },
      {
        path: 'products',
        loadChildren: () =>
          import('./pages/product/product.module').then((m) => m.ProductModule),
        // canActivate: [AuthGuard],
      },
      // { path: 'products', component: ProductComponent },
      // { path: 'user', component: UserComponent },
      // { path: 'users', component: UsersComponent },
      // { path: 'edit-user/:id', component: EditUserComponent },
      // { path: 'edit-product/:id', component: EditProductComponent },
      // { path: 'catalog', component: CatalogoComponent },
      // { path: 'cart', component: CarrinhoComponent },
      // { path: 'shopping', component: ShoppingComponent },
      // { path: 'view-order/:id', component: ViewOrderComponent },
      // { path: 'apis', component: ApisComponent },
      // { path: 'api', component: ApiComponent },
      // { path: 'edit-api/:id', component: EditApiComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

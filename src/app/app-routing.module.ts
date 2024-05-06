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
    ],
  },
  {
    data: { title: '' },
    path: '',
    component: BaseLayoutComponent,
    children: [
      {
        path: 'home',
        loadChildren: () =>
          import('./pages/home/home.module').then((m) => m.HomeModule),
      },
      {
        path: 'edit-api',
        loadChildren: () =>
          import('./pages/edit-api/edit-api.module').then(
            (m) => m.EditApiModule
          ),
        // canActivate: [AuthGuard],
      },
      {
        path: 'cadastro',
        loadChildren: () =>
          import('./pages/cadastro/cadastro.module').then(
            (m) => m.CadastroModule
          ),
        // canActivate: [AuthGuard],
      },
    ],
  },

  // { path: 'cadastro', component: CadastroComponent },
  // { path: 'home', component: HomeComponent },
  // { path: 'product', component: ProductRegisterComponent },
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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

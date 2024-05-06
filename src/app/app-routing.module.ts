import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () =>
      import('./pages/login/login.module').then((m) => m.LoginModule),
    // canActivate: [AuthGuard],
  },
  {
    path: 'edit-api',
    loadChildren: () =>
      import('./pages/edit-api/edit-api.module').then((m) => m.EditApiModule),
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

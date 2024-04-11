import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './pages/user/user.component';
import { ProductComponent } from './pages/product/product.component';
import { LoginComponent } from './pages/login/login.component';
import { UsersComponent } from './pages/users/users.component';
import { EditUserComponent } from './pages/edit-user/edit-user.component';
import { EditProductComponent } from './pages/edit-product/edit-product.component';
import { ProductRegisterComponent } from './pages/product-register/product-register.component';
import { HomeComponent } from './pages/home/home.component';
import { CatalogoComponent } from './pages/catalogo/catalogo.component';
import { CarrinhoComponent } from './pages/carrinho/carrinho.component';
import { ShoppingComponent } from './pages/shopping/shopping.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'product', component: ProductRegisterComponent },
  { path: 'products', component: ProductComponent },
  { path: 'user', component: UserComponent },
  { path: 'users', component: UsersComponent },
  { path: 'edit-user/:id', component: EditUserComponent },
  { path: 'edit-product/:id', component: EditProductComponent },
  { path: 'catalog', component: CatalogoComponent },
  { path: 'cart', component: CarrinhoComponent },
  { path: 'shopping', component: ShoppingComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

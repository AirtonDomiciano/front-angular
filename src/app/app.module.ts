import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { UsuarioModule } from './pages/usuario/usuario.module';
import { UsuariosModule } from './pages/usuarios/usuarios.module';
import { ProdutosModule } from './pages/produtos/produtos.module';
import { ProdutoModule } from './pages/produto/produto.module';
import { HomeModule } from './pages/home/home.module';
import { CatalogoModule } from './pages/catalogo/catalogo.module';
import { CarrinhoModule } from './pages/carrinho/carrinho.module';
import { ShoppingModule } from './pages/shopping/shopping.module';
import { ViewOrderModule } from './pages/view-order/view-order.module';
import { ApiModule } from './pages/api/api.module';
import { ApisModule } from './pages/apis/apis.module';
import { AuthLayoutComponent } from './core/components/auth-layout/auth-layout.component';
import BaseLayoutComponent from './core/components/base-layout/base-layout.component';

@NgModule({
  declarations: [AppComponent, AuthLayoutComponent, BaseLayoutComponent],
  imports: [
    NgbModule,
    CoreModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

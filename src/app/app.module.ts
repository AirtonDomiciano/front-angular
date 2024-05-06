import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { firebaseConfig } from './core/firebase/config/config';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { UserModule } from './pages/user/user.module';
import { ProductModule } from './pages/product/product.module';
import { UsersModule } from './pages/users/users.module';
import { EditUserModule } from './pages/edit-user/edit-user.module';
import { EditProductModule } from './pages/edit-product/edit-product.module';
import { ProductRegisterModule } from './pages/product-register/product-register.module';
import { HomeModule } from './pages/home/home.module';
import { CatalogoModule } from './pages/catalogo/catalogo.module';
import { CarrinhoModule } from './pages/carrinho/carrinho.module';
import { ShoppingModule } from './pages/shopping/shopping.module';
import { ViewOrderModule } from './pages/view-order/view-order.module';
import { ApiModule } from './pages/api/api.module';
import { ApisModule } from './pages/apis/apis.module';
import { CadastroModule } from './pages/cadastro/cadastro.module';
import { AuthLayoutComponent } from './core/components/auth-layout/auth-layout.component';

@NgModule({
  declarations: [AppComponent, AuthLayoutComponent],
  imports: [
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
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

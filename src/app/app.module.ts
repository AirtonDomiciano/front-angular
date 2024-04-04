import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { UserModule } from './pages/user/user.module';

import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { firebaseConfig } from './core/firebase/config/config';
import { LoginModule } from './pages/login/login.module';
import { ProductModule } from './pages/product/product.module';
import { UsersModule } from './pages/users/users.module';
import { EditUserModule } from './edit-user/edit-user.module';
import { EditProductModule } from './pages/edit-product/edit-product.module';
import { ProductRegisterModule } from './pages/product-register/product-register.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    CoreModule,
    UserModule,
    ProductModule,
    EditProductModule,
    ProductRegisterModule,
    EditUserModule,
    UsersModule,
    //!REMOVER
    LoginModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})

export class AppModule {}
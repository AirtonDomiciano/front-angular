import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login.component';
import { CommonModule } from '@angular/common';
import { LoginRoutingModule } from './login-routing.module';
import { InputModule } from 'src/app/shared/components/input/input.module';
import { JwtModule } from '@auth0/angular-jwt';
import { InputSenhaModule } from 'src/app/shared/components/input-senha/input-senha.module';

@NgModule({
  declarations: [LoginComponent],
  imports: [
    LoginRoutingModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    InputModule,
    InputSenhaModule,
    // JwtModule.forRoot({
    //   config: {
    //     tokenGetter: () => {
    //       return localStorage.getItem('token');
    //     },
    //     allowedDomains: ['http://localhost:4200'],
    //     disallowedRoutes: ['http://localhost:4200/unauthorized'],
    //   },
    // }),
  ],
  exports: [LoginComponent],
})
export class LoginModule {}

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { UserComponent } from './user.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputModule } from 'src/app/shared/components/input/input.module';
import { RouterModule } from '@angular/router';
import { InputCepModule } from 'src/app/shared/components/input-cep/input-cep.module';

@NgModule({
  declarations: [UserComponent],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule,
    InputModule,
    InputCepModule,
  ],
  exports: [UserComponent],
})
export class UserModule {}

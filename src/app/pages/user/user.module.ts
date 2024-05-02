import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { UserComponent } from './user.component';
import { ReactiveFormsModule } from '@angular/forms';
import { InputModule } from 'src/app/shared/components/input/input.module';

@NgModule({
  declarations: [UserComponent],
  imports: [BrowserModule, ReactiveFormsModule, InputModule],
  exports: [UserComponent],
})
export class UserModule {}

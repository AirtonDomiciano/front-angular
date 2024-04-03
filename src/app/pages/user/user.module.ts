import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { UserComponent } from './user.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [UserComponent],
  imports: [BrowserModule, ReactiveFormsModule],
  exports: [UserComponent],
})
export class UserModule {}

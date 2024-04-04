import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ProductRegisterComponent } from './product-register.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [ProductRegisterComponent],
  imports: [BrowserModule, ReactiveFormsModule],
  exports: [ProductRegisterComponent],
})
export class ProductRegisterModule {}

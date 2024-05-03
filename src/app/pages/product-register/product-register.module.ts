import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ProductRegisterComponent } from './product-register.component';
import { ReactiveFormsModule } from '@angular/forms';
import { InputModule } from 'src/app/shared/components/input/input.module';

@NgModule({
  declarations: [ProductRegisterComponent],
  imports: [BrowserModule, ReactiveFormsModule, InputModule],
  exports: [ProductRegisterComponent],
})
export class ProductRegisterModule {}

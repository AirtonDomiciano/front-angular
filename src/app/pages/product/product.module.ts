import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ProductComponent } from './product.component';

@NgModule({
  declarations: [ProductComponent],
  imports: [BrowserModule],
  exports: [ProductComponent],
})
export class ProductModule {}

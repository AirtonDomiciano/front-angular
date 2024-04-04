import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ProductComponent } from './product.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [ProductComponent],
  imports: [BrowserModule, RouterModule],
  exports: [ProductComponent],
})
export class ProductModule {}

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ProductComponent } from './product.component';
import { RouterModule } from '@angular/router';
import { ProductRoutingModule } from './product-routing.module';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [ProductComponent],
  imports: [CommonModule, ProductRoutingModule],
  exports: [ProductComponent],
})
export class ProductModule {}

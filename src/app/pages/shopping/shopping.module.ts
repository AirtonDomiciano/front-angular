import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ShoppingComponent } from './shopping.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [ShoppingComponent],
  imports: [BrowserModule, CommonModule, RouterModule],
  exports: [ShoppingComponent],
})
export class ShoppingModule {}

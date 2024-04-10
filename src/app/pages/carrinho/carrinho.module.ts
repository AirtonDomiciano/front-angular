import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CarrinhoComponent } from './carrinho.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [CarrinhoComponent],
  imports: [BrowserModule, ReactiveFormsModule],
  exports: [CarrinhoComponent],
})
export class CarrinhoModule {}

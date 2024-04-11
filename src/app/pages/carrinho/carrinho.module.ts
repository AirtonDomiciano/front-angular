import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CarrinhoComponent } from './carrinho.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [CarrinhoComponent],
  imports: [BrowserModule, ReactiveFormsModule, RouterModule],
  exports: [CarrinhoComponent],
})
export class CarrinhoModule {}

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CarrinhoComponent } from './carrinho.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CarrinhoRoutingModule } from './carrinho-routing.module';

@NgModule({
  declarations: [CarrinhoComponent],
  imports: [CommonModule, ReactiveFormsModule, CarrinhoRoutingModule],
  exports: [CarrinhoComponent],
})
export class CarrinhoModule {}

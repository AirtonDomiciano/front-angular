import { NgModule } from '@angular/core';
import { ProdutosComponent } from './produtos.component';
import { ProdutosRoutingModule } from './produtos-routing.module';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [ProdutosComponent],
  imports: [CommonModule, ProdutosRoutingModule],
  exports: [ProdutosComponent],
})
export class ProdutosModule {}

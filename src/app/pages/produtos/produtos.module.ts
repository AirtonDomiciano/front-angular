import { NgModule } from '@angular/core';
import { ProdutosComponent } from './produtos.component';
import { ProdutosRoutingModule } from './produtos-routing.module';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';

@NgModule({
  declarations: [ProdutosComponent],
  imports: [CommonModule, ProdutosRoutingModule, TableModule],
  exports: [ProdutosComponent],
})
export class ProdutosModule {}

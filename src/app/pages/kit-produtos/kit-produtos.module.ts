import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KitProdutosComponent } from './kit-produtos.component';
import { KitProdutosRoutingModule } from './kit-produtos-routing.module';
import { TableModule } from 'primeng/table';

@NgModule({
  declarations: [KitProdutosComponent],
  imports: [CommonModule, KitProdutosRoutingModule, TableModule],
  exports: [KitProdutosComponent],
})
export class KitProdutosModule {}

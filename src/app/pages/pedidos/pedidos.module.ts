import { NgModule } from '@angular/core';
import { PedidosComponent } from './pedidos.component';
import { CommonModule } from '@angular/common';
import { PedidosRoutingModule } from './pedidos-routing.module';

@NgModule({
  declarations: [PedidosComponent],
  imports: [CommonModule, PedidosRoutingModule],
  exports: [PedidosComponent],
})
export class PedidosModule {}

import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { ClientesComponent } from './clientes.component';
import { ClientesRoutingModule } from './clientes-routing.module';
import { TableModule } from 'primeng/table';

@NgModule({
  declarations: [ClientesComponent],
  imports: [CommonModule, ClientesRoutingModule, TableModule, DatePipe],
  exports: [ClientesComponent],
})
export class ClientesModule {}

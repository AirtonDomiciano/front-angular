import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { EntidadesComponent } from './entidades.component';
import { EntidadesRoutingModule } from './entidades-routing.module';
import { TableModule } from 'primeng/table';

@NgModule({
  declarations: [EntidadesComponent],
  imports: [CommonModule, EntidadesRoutingModule, TableModule, DatePipe],
  exports: [EntidadesComponent],
})
export class EntidadesModule {}

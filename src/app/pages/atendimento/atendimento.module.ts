import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AtendimentoComponent } from './atendimento.component';
import { CommonModule } from '@angular/common';
import { AtendimentoRoutingModule } from './atendimento-routing.module';
import { TableModule } from 'primeng/table';

@NgModule({
  declarations: [AtendimentoComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AtendimentoRoutingModule,
    TableModule,
  ],
  exports: [AtendimentoComponent],
})
export class AtendimentoModule {}

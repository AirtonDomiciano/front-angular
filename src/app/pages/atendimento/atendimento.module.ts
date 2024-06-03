import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AtendimentoComponent } from './atendimento.component';
import { CommonModule } from '@angular/common';
import { AtendimentoRoutingModule } from './atendimento-routing.module';

@NgModule({
  declarations: [AtendimentoComponent],
  imports: [CommonModule, ReactiveFormsModule, AtendimentoRoutingModule],
  exports: [AtendimentoComponent],
})
export class AtendimentoModule {}

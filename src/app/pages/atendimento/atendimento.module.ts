import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AtendimentoComponent } from './atendimento.component';
import { AtendimentoRoutingModule } from './atendimento-routing.module';
import { InputModule } from 'src/app/shared/components/input/input.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MultiSelectModule } from 'primeng/multiselect';
import { MultiSelectProdutosModule } from 'src/app/shared/components/multi-select-produtos/multi-select-produtos.module';
import { InputDataModule } from '../../shared/components/input-data/input-data.module';

@NgModule({
  declarations: [AtendimentoComponent],
  imports: [
    CommonModule,
    AtendimentoRoutingModule,
    InputModule,
    ReactiveFormsModule,
    FormsModule,
    MultiSelectModule,
    MultiSelectProdutosModule,
    InputDataModule,
  ],
  exports: [AtendimentoComponent],
})
export class AtendimentoModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AtendimentoComponent } from './atendimento.component';
import { AtendimentoRoutingModule } from './atendimento-routing.module';
import { InputModule } from 'src/app/shared/components/input/input.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MultiSelectModule } from 'primeng/multiselect';
import { MultiSelectProdutosModule } from 'src/app/shared/components/multi-select-produtos/multi-select-produtos.module';
import { InputDataModule } from '../../shared/components/input-data/input-data.module';
import { InputHorarioModule } from 'src/app/shared/components/input-horario/input-horario.module';
<<<<<<< HEAD
import { TabViewModule } from 'primeng/tabview';
import { ServicoModule } from '../servico/servico.module';
=======
>>>>>>> d0077d8 (subindo-botao-voltar)
import { BotaoVoltarModule } from 'src/app/shared/components/botao-voltar/botao-voltar.module';

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
    InputHorarioModule,
<<<<<<< HEAD
    TabViewModule,
    ServicoModule,
=======
>>>>>>> d0077d8 (subindo-botao-voltar)
    BotaoVoltarModule,
  ],
  exports: [AtendimentoComponent],
})
export class AtendimentoModule {}

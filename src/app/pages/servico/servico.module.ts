import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServicoComponent } from './servico.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ServicoRoutingModule } from './servico-routing.module';
import { InputModule } from 'src/app/shared/components/input/input.module';
import { SelectServicosAnimalModule } from 'src/app/shared/components/select-servicos-animal/select-servicos-animal.module';
import { MultiSelectProdutosModule } from 'src/app/shared/components/multi-select-produtos/multi-select-produtos.module';

@NgModule({
  declarations: [ServicoComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ServicoRoutingModule,
    InputModule,
    SelectServicosAnimalModule,
    MultiSelectProdutosModule,
  ],
  exports: [ServicoComponent],
})
export class ServicoModule {}

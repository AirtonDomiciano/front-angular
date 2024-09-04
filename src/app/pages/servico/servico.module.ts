import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServicoComponent } from './servico.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ServicoRoutingModule } from './servico-routing.module';
import { InputModule } from 'src/app/shared/components/input/input.module';
import { MultiSelectProdutosModule } from 'src/app/shared/components/multi-select-produtos/multi-select-produtos.module';
import { SelectTipoServicoModule } from 'src/app/shared/components/select-servicos-animal/select-tipo-servico.module';
import { SelectClientesModule } from '../../shared/components/select-clientes/select-clientes.module';
import { SelectAnimaisClienteModule } from '../../shared/components/select-animais-cliente/select-animais-cliente.module';

@NgModule({
  declarations: [ServicoComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ServicoRoutingModule,
    InputModule,
    SelectTipoServicoModule,
    MultiSelectProdutosModule,
    SelectClientesModule,
    SelectAnimaisClienteModule,
  ],
  exports: [ServicoComponent],
})
export class ServicoModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfiguracaoServicoComponent } from './configuracao-servico.component';
import { ConfiguracaoServicoRoutingModule } from './configuracao-servico-routing.module';
import { SelectTipoServicoModule } from 'src/app/shared/components/select-servicos-animal/select-tipo-servico.module';
import { MultiSelectProdutosModule } from 'src/app/shared/components/multi-select-produtos/multi-select-produtos.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [ConfiguracaoServicoComponent],
  imports: [
    CommonModule,
    ConfiguracaoServicoRoutingModule,
    SelectTipoServicoModule,
    MultiSelectProdutosModule,
    ReactiveFormsModule,
  ],
  exports: [ConfiguracaoServicoComponent],
})
export class ConfiguracaoServicoModule {}

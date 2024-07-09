import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfiguracoesComponent } from './configuracoes.component';
import { ConfiguracoesRoutingModule } from './configuracoes-routing.module';
import { TabViewModule } from 'primeng/tabview';
import { ConfiguracaoServicoModule } from '../configuracao-servico/configuracao-servico.module';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';

@NgModule({
  declarations: [ConfiguracoesComponent],
  imports: [
    CommonModule,
    ConfiguracoesRoutingModule,
    TabViewModule,
    ConfiguracaoServicoModule,
    ToastModule,
  ],
  exports: [ConfiguracoesComponent],
  providers: [MessageService],
})
export class ConfiguracoesModule {}

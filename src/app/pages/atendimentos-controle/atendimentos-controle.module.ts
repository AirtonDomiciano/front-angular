import { NgModule, LOCALE_ID } from '@angular/core';
import {
  CommonModule,
  CurrencyPipe,
  registerLocaleData,
} from '@angular/common';
import { AtendimentosControleComponent } from './atendimentos-controle.component';
import { AtendimentosControleRoutingModule } from './atendimentos-constrole-routing.module';
import { TableModule } from 'primeng/table';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import ptBr from '@angular/common/locales/pt';

registerLocaleData(ptBr);
@NgModule({
  declarations: [AtendimentosControleComponent],
  imports: [
    CommonModule,
    AtendimentosControleRoutingModule,
    TableModule,
    CurrencyPipe,
    ConfirmDialogModule,
  ],
  exports: [AtendimentosControleComponent],
  providers: [{ provide: LOCALE_ID, useValue: 'pt' }],
})
export class AtendimentosControleModule {}

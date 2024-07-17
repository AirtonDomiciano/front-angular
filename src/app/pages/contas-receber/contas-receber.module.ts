import { NgModule, LOCALE_ID } from '@angular/core';
import {
  CommonModule,
  CurrencyPipe,
  registerLocaleData,
} from '@angular/common';
import ptBr from '@angular/common/locales/pt';
import { ContasReceberComponent } from './contas-receber.component';
import { ContasReceberRoutingModule } from './contas-receber-routing.module';
import { TableModule } from 'primeng/table';
import { AcoesDropdownModule } from 'src/app/shared/directives/acoes-dropdown.module';
import { DropdownAcoesModule } from '../../shared/components/dropdown-acoes/dropdown-acoes.module';
import { BadgeModule } from 'primeng/badge';
import { PagamentoModule } from '../pagamento/pagamento.module';

registerLocaleData(ptBr);

@NgModule({
  declarations: [ContasReceberComponent],
  imports: [
    CommonModule,
    ContasReceberRoutingModule,
    TableModule,
    CurrencyPipe,
    AcoesDropdownModule,
    DropdownAcoesModule,
    BadgeModule,
    PagamentoModule,
  ],
  exports: [ContasReceberComponent],
  providers: [{ provide: LOCALE_ID, useValue: 'pt' }],
})
export class ContasReceberModule {}

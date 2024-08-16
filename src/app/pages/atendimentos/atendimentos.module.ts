import { NgModule, LOCALE_ID } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AtendimentosComponent } from './atendimentos.component';
import {
  CommonModule,
  CurrencyPipe,
  registerLocaleData,
} from '@angular/common';
import { AtendimentosRoutingModule } from './atendimentos-routing.module';
import { TableModule } from 'primeng/table';
import ptBr from '@angular/common/locales/pt';
import { DirectiveBadgeDirective } from 'src/app/shared/directives/directive-badge/directive-badge.directive';
import { DropdownAcoesModule } from 'src/app/shared/components/dropdown-acoes/dropdown-acoes.module';
import { AcoesDropdownModule } from 'src/app/shared/directives/acoes-dropdown.module';
import { ComplementoModule } from 'src/app/shared/components/complemento/complemento.module';

registerLocaleData(ptBr);
@NgModule({
  declarations: [AtendimentosComponent, DirectiveBadgeDirective],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AtendimentosRoutingModule,
    TableModule,
    CurrencyPipe,
    DropdownAcoesModule,
    AcoesDropdownModule,
    ComplementoModule,
  ],
  exports: [AtendimentosComponent],
  providers: [{ provide: LOCALE_ID, useValue: 'pt' }],
})
export class AtendimentosModule {}

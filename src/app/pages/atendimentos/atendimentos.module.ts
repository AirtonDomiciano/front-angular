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
import { NgxMaskDirective, provideNgxMask } from 'ngx-mask';
import ptBr from '@angular/common/locales/pt';

registerLocaleData(ptBr);
@NgModule({
  declarations: [AtendimentosComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AtendimentosRoutingModule,
    TableModule,
    CurrencyPipe,
  ],
  exports: [AtendimentosComponent],
  providers: [{ provide: LOCALE_ID, useValue: 'pt' }],
})
export class AtendimentosModule {}

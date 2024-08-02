import { LOCALE_ID, NgModule } from '@angular/core';
import {
  CommonModule,
  CurrencyPipe,
  registerLocaleData,
} from '@angular/common';

import ptBr from '@angular/common/locales/pt';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputModule } from 'src/app/shared/components/input/input.module';
import { ListboxModule } from 'primeng/listbox';
import { DialogModule } from 'primeng/dialog';
import { PagamentoComponent } from './pagamento.component';
import { DividerModule } from 'primeng/divider';
import { InputCurrencyModule } from 'src/app/shared/components/input-currency/input-currency.module';

registerLocaleData(ptBr);

@NgModule({
  declarations: [PagamentoComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    InputModule,
    CurrencyPipe,
    ListboxModule,
    DialogModule,
    ReactiveFormsModule,
    DividerModule,
    InputCurrencyModule,
  ],
  exports: [PagamentoComponent],
  providers: [{ provide: LOCALE_ID, useValue: 'pt' }],
})
export class PagamentoModule {}

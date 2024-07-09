import { LOCALE_ID, NgModule } from '@angular/core';
import {
  CommonModule,
  CurrencyPipe,
  registerLocaleData,
} from '@angular/common';

import ptBr from '@angular/common/locales/pt';
import { PagamentoComponent } from './pagamento.component';
import { PagamentoRoutingModule } from './pagamento-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputModule } from 'src/app/shared/components/input/input.module';
import { ListboxModule } from 'primeng/listbox';

registerLocaleData(ptBr);

@NgModule({
  declarations: [PagamentoComponent],
  imports: [
    CommonModule,
    PagamentoRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    InputModule,
    CurrencyPipe,
    ListboxModule,
  ],
  exports: [PagamentoComponent],
  providers: [{ provide: LOCALE_ID, useValue: 'pt' }],
})
export class PagamentoModule {}

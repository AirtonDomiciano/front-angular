import { LOCALE_ID, NgModule } from '@angular/core';
import { ProdutosComponent } from './produtos.component';
import { ProdutosRoutingModule } from './produtos-routing.module';
import {
  CommonModule,
  CurrencyPipe,
  registerLocaleData,
} from '@angular/common';
import ptBr from '@angular/common/locales/pt';
import { TableModule } from 'primeng/table';

registerLocaleData(ptBr);

@NgModule({
  declarations: [ProdutosComponent],
  imports: [CommonModule, ProdutosRoutingModule, TableModule, CurrencyPipe],
  exports: [ProdutosComponent],
  providers: [{ provide: LOCALE_ID, useValue: 'pt' }],
})
export class ProdutosModule {}

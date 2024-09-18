import { NgModule } from '@angular/core';
import { ProdutoComponent } from './produto.component';
import { ReactiveFormsModule } from '@angular/forms';
import { InputModule } from 'src/app/shared/components/input/input.module';
import { CommonModule } from '@angular/common';
import { ProdutoRoutingModule } from './produto-routing.module';
import { InputCurrencyModule } from 'src/app/shared/components/input-currency/input-currency.module';
import { InputCheckboxModule } from 'src/app/shared/components/input-checkbox/input-checkbox.module';

@NgModule({
  declarations: [ProdutoComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    InputModule,
    ProdutoRoutingModule,
    InputCurrencyModule,
    InputCheckboxModule,
  ],
  exports: [ProdutoComponent],
})
export class ProdutoModule {}

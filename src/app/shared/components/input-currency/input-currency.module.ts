import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { InputCurrencyComponent } from './input-currency.component';
import { NgxMaskDirective, provideNgxMask } from 'ngx-mask';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [InputCurrencyComponent],
  imports: [CommonModule, ReactiveFormsModule, NgxMaskDirective],
  exports: [InputCurrencyComponent],
  providers: [provideNgxMask()],
})
export class InputCurrencyModule {}

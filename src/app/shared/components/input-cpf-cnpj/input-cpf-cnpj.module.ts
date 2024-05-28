import { NgModule } from '@angular/core';
import { InputCpfCnpjComponent } from './input-cpf-cnpj.component';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxMaskDirective, provideNgxMask } from 'ngx-mask';

@NgModule({
  declarations: [InputCpfCnpjComponent],
  imports: [CommonModule, ReactiveFormsModule, NgxMaskDirective],
  providers: [provideNgxMask()],
  exports: [InputCpfCnpjComponent],
})
export class InputCpfCnpjModule {}

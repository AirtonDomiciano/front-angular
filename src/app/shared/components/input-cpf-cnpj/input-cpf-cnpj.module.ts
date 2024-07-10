import { NgModule } from '@angular/core';
import { InputCpfCnpjComponent } from './input-cpf-cnpj.component';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxMaskDirective, provideNgxMask } from 'ngx-mask';
import { InputTextModule } from 'primeng/inputtext';

@NgModule({
  declarations: [InputCpfCnpjComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NgxMaskDirective,
    InputTextModule,
  ],
  providers: [provideNgxMask()],
  exports: [InputCpfCnpjComponent],
})
export class InputCpfCnpjModule {}

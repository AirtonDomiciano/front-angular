import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { InputCepComponent } from './input-cep.component';
import { CommonModule } from '@angular/common';
import { NgxMaskDirective, provideNgxMask } from 'ngx-mask';
import { InputTextModule } from 'primeng/inputtext';

@NgModule({
  declarations: [InputCepComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NgxMaskDirective,
    InputTextModule,
  ],
  exports: [InputCepComponent],
  providers: [provideNgxMask()],
})
export class InputCepModule {}

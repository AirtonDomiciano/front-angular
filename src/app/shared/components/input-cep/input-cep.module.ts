import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { InputCepComponent } from './input-cep.component';
import { CommonModule } from '@angular/common';
import { NgxMaskDirective, provideNgxMask } from 'ngx-mask';

@NgModule({
  declarations: [InputCepComponent],
  imports: [CommonModule, ReactiveFormsModule, NgxMaskDirective],
  exports: [InputCepComponent],
  providers: [provideNgxMask()],
})
export class InputCepModule {}

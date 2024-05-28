import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { InputCepComponent } from './input-cep.component';
import { CommonModule } from '@angular/common';
import { CepPipe } from '../../pipes/cep.pipe';
import { NgxMaskDirective, provideNgxMask } from 'ngx-mask';

@NgModule({
  declarations: [InputCepComponent, CepPipe],
  imports: [CommonModule, ReactiveFormsModule, NgxMaskDirective],
  exports: [InputCepComponent],
  providers: [provideNgxMask()],
})
export class InputCepModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputTelefoneComponent } from './input-telefone.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxMaskDirective, provideNgxMask } from 'ngx-mask';

@NgModule({
  declarations: [InputTelefoneComponent],
  imports: [CommonModule, ReactiveFormsModule, NgxMaskDirective],
  exports: [InputTelefoneComponent],
  providers: [provideNgxMask()],
})
export class InputTelefoneModule {}

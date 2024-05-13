import { NgModule } from '@angular/core';
import { CepPipe } from './cep.pipe';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [CepPipe],
  imports: [CommonModule, ReactiveFormsModule],
  exports: [CepPipe],
})
export class CepPipeModule {}

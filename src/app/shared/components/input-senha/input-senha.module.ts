import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { InputSenhaComponent } from './input-senha.component';
import { InputTextModule } from 'primeng/inputtext';

@NgModule({
  declarations: [InputSenhaComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule, InputTextModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [InputSenhaComponent],
})
export class InputSenhaModule {}

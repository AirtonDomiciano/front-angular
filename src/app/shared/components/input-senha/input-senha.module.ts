import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { InputSenhaComponent } from './input-senha.component';

@NgModule({
  declarations: [InputSenhaComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [InputSenhaComponent],
})
export class InputSenhaModule {}

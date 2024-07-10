import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { InputComponent } from './input.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { InputTextModule } from 'primeng/inputtext';

@NgModule({
  declarations: [InputComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule, InputTextModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [InputComponent],
})
export class InputModule {}

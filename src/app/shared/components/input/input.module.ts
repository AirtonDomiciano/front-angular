import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { InputComponent } from './input.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [InputComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [InputComponent],
})
export class InputModule {}

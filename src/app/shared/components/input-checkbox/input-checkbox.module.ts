import { NgModule } from '@angular/core';
import { InputCheckboxComponent } from './input-checkbox.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CheckboxModule } from 'primeng/checkbox';

@NgModule({
  declarations: [InputCheckboxComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule, CheckboxModule],
  exports: [InputCheckboxComponent],
})
export class InputCheckboxModule {}

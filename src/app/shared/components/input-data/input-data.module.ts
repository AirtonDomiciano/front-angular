import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { InputTextModule } from 'primeng/inputtext';
import { InputDataComponent } from './input-data.component';

@NgModule({
  declarations: [InputDataComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule, InputTextModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [InputDataComponent],
})
export class InputDataModule {}

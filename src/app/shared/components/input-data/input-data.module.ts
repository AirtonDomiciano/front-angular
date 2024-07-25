import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { InputDataComponent } from './input-data.component';
import { InputTextModule } from 'primeng/inputtext';

@NgModule({
  declarations: [InputDataComponent],
  imports: [CommonModule, ReactiveFormsModule, FormsModule, InputTextModule],
  exports: [InputDataComponent],
})
export class InputDataModule {}

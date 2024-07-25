import { NgModule } from '@angular/core';
import { InputHorarioComponent } from './input-horario.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { InputTextModule } from 'primeng/inputtext';

@NgModule({
  declarations: [InputHorarioComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule, InputTextModule],
  exports: [InputHorarioComponent],
})
export class InputHorarioModule {}

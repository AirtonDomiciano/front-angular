import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectAnimaisClienteComponent } from './select-animais-cliente.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [SelectAnimaisClienteComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  exports: [SelectAnimaisClienteComponent],
})
export class SelectAnimaisClienteModule {}

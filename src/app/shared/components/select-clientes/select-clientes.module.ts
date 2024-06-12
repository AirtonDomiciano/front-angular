import { NgModule } from '@angular/core';
import { SelectClientesComponent } from './select-clientes.component';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [SelectClientesComponent],
  imports: [CommonModule, ReactiveFormsModule],
  exports: [SelectClientesComponent],
})
export class SelectClientesModule {}

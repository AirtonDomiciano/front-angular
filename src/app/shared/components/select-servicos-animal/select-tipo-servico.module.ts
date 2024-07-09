import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DropdownModule } from 'primeng/dropdown';
import { ReactiveFormsModule } from '@angular/forms';
import { SelectTipoServicoComponent } from './select-tipo-servico.component';

@NgModule({
  declarations: [SelectTipoServicoComponent],
  imports: [CommonModule, DropdownModule, ReactiveFormsModule],
  exports: [SelectTipoServicoComponent],
})
export class SelectTipoServicoModule {}
